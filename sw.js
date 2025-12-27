/* /documents4runningstaff/sw.js
   Robust app-shell + dynamic PDF caching + update notification
*/

const CACHE_NAME = 'library-cache-v4';
const RUNTIME    = 'library-runtime-v4';
const BASE       = '/documents4runningstaff';

// Precaching: list every local file needed to boot the UI.
// ⚠️ Make sure each path below exists in your repo exactly as written.
const PRECACHE_URLS = [
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/offline.html`,
  `${BASE}/manifest.json`,
  `${BASE}/favicon.ico`,
  `${BASE}/icon-192.png`,
  `${BASE}/icon-512.png`,
  `${BASE}/styles.css`,
  `${BASE}/script.js`,                  // verify this name (was main.js earlier)
  `${BASE}/js/employee.js`,
  `${BASE}/js/shed_order_mao_2025.js`
  // add other local assets, fonts, pdfs, etc.
];

/* ---------- install: precache with fault tolerance ---------- */
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // addAll will fail if any resource 404s; use Promise.allSettled for robustness
    const results = await Promise.allSettled(PRECACHE_URLS.map(url => cache.add(url)));
    const failed = results.filter(r => r.status === 'rejected');
    if (failed.length) {
      // still activate, but log failures to help debugging
      console.warn('Some precache resources failed to cache:', failed.map(f => f.reason));
    }
    // activate new SW immediately
    await self.skipWaiting();
  })());
});

/* ---------- activate: cleanup old caches ---------- */
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => (key !== CACHE_NAME && key !== RUNTIME) ? caches.delete(key) : Promise.resolve()));
    await self.clients.claim();
  })());
});

/* ---------- helper: is navigation request ---------- */
function isNavigationRequest(request) {
  return request.mode === 'navigate' ||
         (request.method === 'GET' && request.headers.get('accept')?.includes('text/html'));
}

/* ---------- message handler (optional update flow) ---------- */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/* ---------- fetch handler: routing strategies ---------- */
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET') return;

  // 1) Navigation requests (app-shell model): network-first, fallback to shell/offline
  if (isNavigationRequest(req) && url.origin === location.origin && url.pathname.startsWith(BASE)) {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(req);
        // cache a copy to runtime for later
        const rc = await caches.open(RUNTIME);
        rc.put(req, networkResponse.clone());
        return networkResponse;
      } catch (err) {
        const precache = await caches.open(CACHE_NAME);
        return await precache.match(`${BASE}/index.html`) ||
               await precache.match(`${BASE}/offline.html`);
      }
    })());
    return;
  }

  // 2) Static assets (cache-first)
  if (url.origin === location.origin && /\.(?:js|css|png|jpg|jpeg|webp|svg|ico|woff2?)$/i.test(url.pathname)) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const res = await fetch(req);
        const rc = await caches.open(RUNTIME);
        rc.put(req, res.clone());
        return res;
      } catch (err) {
        // fallback to offline page for navigations only
        if (isNavigationRequest(req)) return caches.match(`${BASE}/offline.html`);
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
    return;
  }

  // 3) PDFs and repo HTML docs — network-first, cache dynamically, fallback to cached copy or offline
  if (url.origin === location.origin && /\.(?:pdf|html)$/i.test(url.pathname)) {
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME);
      try {
        const res = await fetch(req);
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      } catch (err) {
        const cached = await cache.match(req);
        if (cached) return cached;
        return caches.match(`${BASE}/offline.html`);
      }
    })());
    return;
  }

  // 4) Cross-origin resources (CDNs) — best-effort: try cache -> network, attempt caching runtime
  if (url.origin !== location.origin) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const res = await fetch(req);
        // attempt to cache but ignore failures (opaque responses might throw)
        try { const rc = await caches.open(RUNTIME); rc.put(req, res.clone()); } catch (e) {}
        return res;
      } catch (err) {
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
    return;
  }
});
