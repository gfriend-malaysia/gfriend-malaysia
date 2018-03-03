importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.432e8471d2dc00d49ed0.js",
    "revision": "ae7a7fb830caa4a5b59415e7b41f4753"
  },
  {
    "url": "/_nuxt/layouts_default.e44a1688b38f0f8002b7.js",
    "revision": "502393457dd6a13db4b01f83e6a73af1"
  },
  {
    "url": "/_nuxt/manifest.27f7282922921992285c.js",
    "revision": "09459efb6a2e370a58ee48605a07afb4"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.979375be378670922e49.js",
    "revision": "15504fefec7191724be426c4d446b8d2"
  },
  {
    "url": "/_nuxt/vendor.f94cc6b853312cac5e05.js",
    "revision": "a22d688a9f05125ae850e9f5005c77e2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

