
/* =========================================================
   Service Worker : Digital Library for Running Staff
   Filename       : sw.js   ✅ (recommended)
   Scope          : /documents4runningstaff/
   Features       :
   - App-shell precaching
   - Offline fallback
   - Dynamic PDF caching
   - Safe updates with cache versioning
   ========================================================= */

const CACHE_NAME = 'library-cache-v4';
const RUNTIME    = 'library-runtime-v4';
const BASE       = '/documents4runningstaff';

/* ---------- FILES REQUIRED TO BOOT THE APP ---------- */
/* ⚠️ Every file listed here MUST exist */
const PRECACHE_URLS = [
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/offline.html`,
  `${BASE}/manifest.json`,
  `${BASE}/favicon.ico`,
  `${BASE}/icon-192.png`,
  `${BASE}/icon-512.png`
];

/* ---------- INSTALL ---------- */
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Fault-tolerant precache
    const results = await Promise.allSettled(
      PRECACHE_URLS.map(url => cache.add(url))
    );

    const failed = results.filter(r => r.status === 'rejected');
    if (failed.length) {
      console.warn(
        '⚠️ Some precache files failed:',
        failed.map(f => f.reason)
      );
    }

    await self.skipWaiting(); // activate immediately
  })());
});

/* ---------- ACTIVATE ---------- */
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME && key !== RUNTIME) {
          return caches.delete(key);
        }
      })
    );

    await self.clients.claim();
  })());
});

/* ---------- HELPER ---------- */
function isNavigationRequest(request) {
  return (
    request.mode === 'navigate' ||
    (request.method === 'GET' &&
     request.headers.get('accept')?.includes('text/html'))
  );
}

/* ---------- UPDATE MESSAGE ---------- */
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/* ---------- FETCH ---------- */
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET') return;

  /* ---- 1. APP NAVIGATION (network-first) ---- */
  if (
    isNavigationRequest(req) &&
    url.origin === location.origin &&
    url.pathname.startsWith(BASE)
  ) {
    event.respondWith((async () => {
      try {
        const network = await fetch(req);
        const runtime = await caches.open(RUNTIME);
        runtime.put(req, network.clone());
        return network;
      } catch {
        const cache = await caches.open(CACHE_NAME);
        return (
          (await cache.match(`${BASE}/index.html`)) ||
          (await cache.match(`${BASE}/offline.html`))
        );
      }
    })());
    return;
  }

  /* ---- 2. STATIC ASSETS (cache-first) ---- */
  if (
    url.origin === location.origin &&
    /\.(js|css|png|jpg|jpeg|webp|svg|ico|woff2?)$/i.test(url.pathname)
  ) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;

      try {
        const res = await fetch(req);
        const runtime = await caches.open(RUNTIME);
        runtime.put(req, res.clone());
        return res;
      } catch {
        return new Response('', { status: 504 });
      }
    })());
    return;
  }

  /* ---- 3. PDFs & LOCAL HTML DOCS (network-first) ---- */
  if (
    url.origin === location.origin &&
    /\.(pdf|html)$/i.test(url.pathname)
  ) {
    event.respondWith((async () => {
      const runtime = await caches.open(RUNTIME);
      try {
        const res = await fetch(req);
        if (res.ok) runtime.put(req, res.clone());
        return res;
      } catch {
        const cached = await runtime.match(req);
        return cached || caches.match(`${BASE}/offline.html`);
      }
    })());
    return;
  }

  /* ---- 4. CDN / CROSS-ORIGIN (best effort) ---- */
  if (url.origin !== location.origin) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;

      try {
        const res = await fetch(req);
        try {
          const runtime = await caches.open(RUNTIME);
          runtime.put(req, res.clone());
        } catch {}
        return res;
      } catch {
        return new Response('', { status: 504 });
      }
    })());
    return;
  }
});
