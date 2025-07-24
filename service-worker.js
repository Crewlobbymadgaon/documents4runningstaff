const CACHE_NAME = 'library-cache-v1';
const urlsToCache = [
  '/documents4runningstaff/',
  '/documents4runningstaff/index.html',
  '/documents4runningstaff/offline.html',
  '/documents4runningstaff/shed_order.html',
  '/documents4runningstaff/manifest.json',
  '/documents4runningstaff/favicon.ico',
  '/documents4runningstaff/icon-192.png',
  '/documents4runningstaff/icon-512.png',
  '/documents4runningstaff/script.js',
  '/documents4runningstaff/styles.css',
  '/documents4runningstaff/img/shedorder.png',
  '/documents4runningstaff/img/safety.png',
  '/documents4runningstaff/img/placeholder.png', // ✅ added fallback image
  // Add more static assets like PDFs here if needed
];

// Install event – cache essential assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event – clear old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch event – cache with network fallback and update
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request, { ignoreSearch: true }).then(response => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // If valid, clone and store in cache
          if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // Offline fallback logic
          if (event.request.destination === 'document') {
            return caches.match('/documents4runningstaff/offline.html');
          } else if (event.request.destination === 'image') {
            return caches.match('/documents4runningstaff/img/placeholder.png');
          } else if (event.request.destination === 'style') {
            return new Response('', { headers: { 'Content-Type': 'text/css' } });
          } else if (event.request.destination === 'script') {
            return new Response('', { headers: { 'Content-Type': 'application/javascript' } });
          }
        });

        return response || fetchPromise;
      })
    )
  );
});
