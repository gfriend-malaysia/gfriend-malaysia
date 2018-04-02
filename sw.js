importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.cc10e1ad5188739938eed0b8a2586153.css",
    "revision": "cc10e1ad5188739938eed0b8a2586153"
  },
  {
    "url": "/_nuxt/app.ef609144329e8ed93a74.js",
    "revision": "fc72dc6ad39c2b4c347b95d416f1af2d"
  },
  {
    "url": "/_nuxt/layouts_default.9c6cec786eee0b94f252.js",
    "revision": "2f8629f01eb9979f97020ea8c4b7efd0"
  },
  {
    "url": "/_nuxt/manifest.1191a4aa01c93be2ab5a.js",
    "revision": "a3331d2bd998317bdbc3db74e382c58d"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.546c9a941ab88ef97908.js",
    "revision": "4e19804d1ef98df5e4ac337e270228b2"
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

