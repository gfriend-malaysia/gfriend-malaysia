importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.78666d0157ea3c90c54f629c4bfe563f.css",
    "revision": "78666d0157ea3c90c54f629c4bfe563f"
  },
  {
    "url": "/_nuxt/app.998796aaa4ff7f0a5f59.js",
    "revision": "dd74e21aebbb288ddef4f3d2edceb134"
  },
  {
    "url": "/_nuxt/layouts_default.9c6cec786eee0b94f252.js",
    "revision": "2f8629f01eb9979f97020ea8c4b7efd0"
  },
  {
    "url": "/_nuxt/manifest.7f5ee568fa59e74dac71.js",
    "revision": "c699f5cd8ad91c737a10dd54fdc68e5e"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.1226ff99e67510a6ea8d.js",
    "revision": "685cdd8a80c70f1ecc4ebf8a5ccf56d0"
  },
  {
    "url": "/_nuxt/pages_test.f44fbf68553726780c3c.js",
    "revision": "9c0307dd23d071f14bd1afa331492a88"
  },
  {
    "url": "/_nuxt/vendor.36cf00d878800eaa2041.js",
    "revision": "cb13284dba79ad8db810ab8fd798c150"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://jsonplaceholder.typicode.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

