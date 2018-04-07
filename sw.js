importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c243825951b38556e442f5a2b69c96f9.css",
    "revision": "c243825951b38556e442f5a2b69c96f9"
  },
  {
    "url": "/_nuxt/app.f0c14c2e9ed8061763eb.js",
    "revision": "c4091653d44e77a9a5b73b31b7a6cecd"
  },
  {
    "url": "/_nuxt/layouts_default.5988098130d297c1ab69.js",
    "revision": "b21e782f4a0409004ea41974cce7b5cf"
  },
  {
    "url": "/_nuxt/manifest.33cd8f848857ebc5220e.js",
    "revision": "e252901b950c91d426e01d1604687c7f"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.3847e15098e444584fe4.js",
    "revision": "d6d57129c36b98421cf9c02d510da32f"
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

