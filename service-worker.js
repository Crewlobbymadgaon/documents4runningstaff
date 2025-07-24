const CACHE_NAME = 'library-cache-v2';
const STATIC_ASSETS = [
  '/documents4runningstaff/',
  '/documents4runningstaff/index.html',
  '/documents4runningstaff/offline.html',
  '/documents4runningstaff/manifest.json',
  '/documents4runningstaff/favicon.ico',
  '/documents4runningstaff/icon-192.png',
  '/documents4runningstaff/icon-512.png',
  '/documents4runningstaff/styles.css',
  '/documents4runningstaff/script.js',
  '/documents4runningstaff/img/placeholder.png',
];

// Install: cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clear old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: handle requests
self.addEventListener('fetch', event => {
  const req = event.request;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then(res => res || caches.match('/documents4runningstaff/offline.html'))
        )
    );
  } else {
    event.respondWith(
      caches.match(req).then(res => 
        res || fetch(req)
          .then(netRes => {
            if (req.method === 'GET') {
              const copy = netRes.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
            }
            return netRes;
          })
          .catch(() => {
            if (req.destination === 'image') {
              return caches.match('/documents4runningstaff/img/placeholder.png');
            } else if (req.destination === 'style') {
              return new Response('', { headers: { 'Content-Type': 'text/css' } });
            } else if (req.destination === 'script') {
              return new Response('', { headers: { 'Content-Type': 'application/javascript' } });
            }
          })
      )
    );
  }
});
