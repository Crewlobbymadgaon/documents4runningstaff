const CACHE_NAME = 'library-cache-v2';
const STATIC_FILES = [
  '/',
  '/documents4runningstaff/',
  '/documents4runningstaff/index.html',
  '/documents4runningstaff/offline.html',
  '/documents4runningstaff/manifest.json',
  '/documents4runningstaff/favicon.ico',
  '/documents4runningstaff/icon-192.png',
  '/documents4runningstaff/icon-512.png',
  '/documents4runningstaff/styles.css',
  '/documents4runningstaff/script.js',
];

// Install event: cache static files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_FILES))
  );
  self.skipWaiting();
});

// Activate: delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve cached first, then network
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // If it's a PDF, cache it dynamically
  if (url.pathname.endsWith('.pdf')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        fetch(event.request)
          .then(response => {
            cache.put(event.request, response.clone());
            return response;
          })
          .catch(() => cache.match(event.request))
      )
    );
  } else {
    // For everything else
    event.respondWith(
      caches.match(event.request).then(response =>
        response || fetch(event.request).catch(() => caches.match('/documents4runningstaff/offline.html'))
      )
    );
  }
});
