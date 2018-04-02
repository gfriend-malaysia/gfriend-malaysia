importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.aa45bb7428e99e87397a.js",
    "revision": "01781d8e4eb5789017a0dd081d094380"
  },
  {
    "url": "/_nuxt/app.cc10e1ad5188739938eed0b8a2586153.css",
    "revision": "cc10e1ad5188739938eed0b8a2586153"
  },
  {
    "url": "/_nuxt/layouts_default.9c6cec786eee0b94f252.js",
    "revision": "2f8629f01eb9979f97020ea8c4b7efd0"
  },
  {
    "url": "/_nuxt/manifest.576a84d1a6b8ff27d413.js",
    "revision": "f08e40f7a6bd1aca5411cce9d3d6abf5"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.1bb9558a91060a0c16bd.js",
    "revision": "35f9feca7f34a4f7917af6a6c3d22f50"
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

workboxSW.router.registerRoute(new RegExp('https://mdbootstrap.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

