importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f9406842e5a0168e38e0.js",
    "revision": "cd81167f947a7aead5a6924c723a5f7c"
  },
  {
    "url": "/_nuxt/layouts_default.e44a1688b38f0f8002b7.js",
    "revision": "502393457dd6a13db4b01f83e6a73af1"
  },
  {
    "url": "/_nuxt/manifest.3b6b6198eb59da933913.js",
    "revision": "b85f9581da3acb0f5f4980c89d13497c"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.b6cf416b1fd7607e7a4e.js",
    "revision": "e6780e23e1624cdff94b1c0c0ddc56c5"
  },
  {
    "url": "/_nuxt/vendor.f94cc6b853312cac5e05.js",
    "revision": "a22d688a9f05125ae850e9f5005c77e2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

