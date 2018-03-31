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
    "url": "/_nuxt/manifest.885eb167b576efcebf22.js",
    "revision": "73f08f3b79d3d09f75a37a3e04a1863c"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.da0e51e2617e18b07345.js",
    "revision": "279f5a10a733768156dc187094cb6599"
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

