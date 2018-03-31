importScripts('/_nuxt/workbox.3de3418b.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.b25d64f8433abe1194c940d66c661b98.css",
    "revision": "b25d64f8433abe1194c940d66c661b98"
  },
  {
    "url": "/_nuxt/app.f0982bc339d748ac5172.js",
    "revision": "a48fccd036208813b53c987105d942cb"
  },
  {
    "url": "/_nuxt/layouts_default.9c6cec786eee0b94f252.js",
    "revision": "2f8629f01eb9979f97020ea8c4b7efd0"
  },
  {
    "url": "/_nuxt/manifest.a9c7f08ca63ef82d5158.js",
    "revision": "a40f8e0f9b047f12fb3213b0c5c48104"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.b99d6fd7bc567572fd8f.js",
    "revision": "524c95f1c0b7592023f5b5d70e3d1c81"
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

