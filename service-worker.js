const CACHE_NAME = 'library-cache-v1';
const urlsToCache = [
  '/documents4runningstaff/',
  '/documents4runningstaff/index.html',
  '/documents4runningstaff/offline.html',
  '/documents4runningstaff/manifest.json',
  '/documents4runningstaff/favicon.ico',
  '/documents4runningstaff/icon-192.png',
  '/documents4runningstaff/icon-512.png',
  '/documents4runningstaff/script.js',
  '/documents4runningstaff/styles.css',
  '/documents4runningstaff/img/shedorder.png',
  '/documents4runningstaff/img/safety.png',
  // Add all HTML, images, and PDF files you expect offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request).catch(() => {
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
    })
  );
});
