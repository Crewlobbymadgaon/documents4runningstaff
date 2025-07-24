const CACHE_NAME = 'library-cache-v1';
const urlsToCache = [
  '/documents4runningstaff/',
  '/documents4runningstaff/index.html',
  '/documents4runningstaff/offline.html',
  '/documents4runningstaff/manifest.json',
  '/documents4runningstaff/favicon.ico',
  '/documents4runningstaff/icon-192.png',
  '/documents4runningstaff/icon-512.png',
  '/documents4runningstaff/script.js', // your JS file(s)
  '/documents4runningstaff/styles.css', // optional if any
  // include each image used in menu items
  '/documents4runningstaff/img/shedorder.png',
  '/documents4runningstaff/img/safety.png',
  // add all such assets
];



// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});


// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request).catch(() => {
        // Optional fallback: return a default offline page or icon
        if (event.request.destination === 'document') {
          return caches.match('/documents4runningstaff/offline.html');
        }
      });
    })
  );
});



