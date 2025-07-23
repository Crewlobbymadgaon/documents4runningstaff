const CACHE_NAME = 'library-cache-v1';
const urlsToCache = [
  '/documents4runningstaff/',
  '/documents4runningstaff/index.html',
  '/documents4runningstaff/manifest.json',
  '/documents4runningstaff/favicon.ico',
  '/documents4runningstaff/icon-192.png',
  '/documents4runningstaff/icon-512.png',
  // Add your JS/CSS assets too, like:
  '/documents4runningstaff/styles.css',
  '/documents4runningstaff/app.js'
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

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
