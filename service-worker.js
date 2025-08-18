/* /documents4runningstaff/sw.js
   App-shell + dynamic PDF caching + navigation fallback
*/

const CACHE_NAME = 'library-cache-v3';
const RUNTIME = 'library-runtime-v3';

// List every file required to start the UI (precache these)
const PRECACHE_URLS = [
  '/documents4runningstaff/',                 // important for GH Pages index
  '/documents4runningstaff/index.html',
  '/documents4runningstaff/offline.html',
  '/documents4runningstaff/manifest.json',
  '/documents4runningstaff/favicon.ico',
  '/documents4runningstaff/icon-192.png',
  '/documents4runningstaff/icon-512.png',
  '/documents4runningstaff/styles.css',
  '/documents4runningstaff/script.js', 
  '/documents4runningstaff/js/employee.js',
  '/documents4runningstaff/js/shed_order_mao_2025.js'
  // adjust name if different
  // add any other local JS/CSS/data files here:
  // '/documents4runningstaff/js/shed_order_mao_2025.js',
  // '/documents4runningstaff/pdfs/2025-safety.pdf',
];

/* ---------- install: precache ---------- */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

/* ---------- activate: cleanup old caches ---------- */
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => {
      if (key !== CACHE_NAME && key !== RUNTIME) return caches.delete(key);
      return Promise.resolve();
    }));
    await self.clients.claim();
  })());
});

/* ---------- helper: is navigation request ---------- */
function isNavigationRequest(request) {
  return request.mode === 'navigate' ||
         (request.method === 'GET' && request.headers.get('accept')?.includes('text/html'));
}

/* ---------- fetch handler: strategies ---------- */
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle GET requests
  if (req.method !== 'GET') return;

  // 1) HTML navigations (app-shell model) — network-first, fallback to cached shell or offline page
  if (isNavigationRequest(req) && url.origin === location.origin && url.pathname.startsWith('/documents4runningstaff')) {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(req);
        // Optionally cache navigation responses in RUNTIME for "freshness"
        const runtimeCache = await caches.open(RUNTIME);
        runtimeCache.put(req, networkResponse.clone());
        return networkResponse;
      } catch (err) {
        const cache = await caches.open(CACHE_NAME);
        // prefer index.html (app shell), else offline page
        return await cache.match('/documents4runningstaff/index.html') ||
               await cache.match('/documents4runningstaff/offline.html');
      }
    })());
    return;
  }

  // 2) Static assets (js/css/images/fonts/icons) — cache-first
  if (url.origin === location.origin &&
      (/\.(?:js|css|png|jpg|jpeg|webp|svg|ico|woff2?)$/i).test(url.pathname)) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const response = await fetch(req);
        const runtimeCache = await caches.open(RUNTIME);
        runtimeCache.put(req, response.clone());
        return response;
      } catch (err) {
        // If it's an icon/font/image and not cached, fallback to offline.html for navigations only
        if (isNavigationRequest(req)) {
          return caches.match('/documents4runningstaff/offline.html');
        }
        // otherwise return error response
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
    return;
  }

  // 3) PDFs and other documents — try network, cache dynamically for offline later, fallback to cache
  if (url.origin === location.origin && (/\.(?:pdf|html)$/i).test(url.pathname)) {
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME);
      try {
        const response = await fetch(req);
        // only cache successful responses
        if (response && response.ok) {
          cache.put(req, response.clone());
        }
        return response;
      } catch (err) {
        const cached = await cache.match(req);
        if (cached) return cached;
        // as last resort show offline page
        return caches.match('/documents4runningstaff/offline.html');
      }
    })());
    return;
  }

  // 4) Cross-origin resources (CDNs) - best-effort: return cache if present else network
  if (url.origin !== location.origin) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        // try network (some responses may be opaque and not cacheable)
        const response = await fetch(req);
        // attempt to cache opaque responses but be cautious
        try {
          const runtimeCache = await caches.open(RUNTIME);
          runtimeCache.put(req, response.clone());
        } catch (e) {
          // ignore caching failures for cross-origin
        }
        return response;
      } catch (err) {
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
    return;
  }
});
