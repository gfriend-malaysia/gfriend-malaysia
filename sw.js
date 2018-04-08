importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.6e2097936af4972955e4.js",
    "revision": "cc4fd8115e15ac3fbcbd7b1128ec4ce1"
  },
  {
    "url": "/_nuxt/app.f47d329122dcef130d4baa13b10f060d.css",
    "revision": "f47d329122dcef130d4baa13b10f060d"
  },
  {
    "url": "/_nuxt/layouts_default.33ddbbe75a52afd4d908.js",
    "revision": "b21e782f4a0409004ea41974cce7b5cf"
  },
  {
    "url": "/_nuxt/manifest.39bdcaceb304923c6c8c.js",
    "revision": "087da01887a5df7906b8913cb96c4cb5"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.37971a10feae7cc0a783.js",
    "revision": "1241c5bf7d647f6231b1d7b6989afcff"
  },
  {
    "url": "/_nuxt/pages_test.ea5732184e256efb8d8a.js",
    "revision": "b7ae0acf9f6ddb5476c105bed4260e93"
  },
  {
    "url": "/_nuxt/vendor.36cf00d878800eaa2041.js",
    "revision": "cb13284dba79ad8db810ab8fd798c150"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://jsonplaceholder.typicode.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://dl.dropbox.com/s/.*'), workboxSW.strategies.networkFirst({}), 'GET')

