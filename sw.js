importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-template",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/7.f54f29fdfd200415da80.js",
    "revision": "0396f9908d1ec77fc12c9490af3b0bf0"
  },
  {
    "url": "/_nuxt/app.6ec2b111acdb55ebf93c.js",
    "revision": "d1c36dd6a10efe602204edb3500b71bf"
  },
  {
    "url": "/_nuxt/common.99463ba492abc5620cd2.js",
    "revision": "ae4a9085a68d56c186d96ab0aa2331e2"
  },
  {
    "url": "/_nuxt/layouts/default.b75006594fa41985e5ee.js",
    "revision": "f244d67116dc17ccaecfd86650470013"
  },
  {
    "url": "/_nuxt/manifest.271a52e7b3db39c1d902.js",
    "revision": "35114a207016f61b9bcea881389990c2"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages/admin/index.a0636597529d6d0c75ff.js",
    "revision": "084430e161843d86ae3a1cda25263905"
  },
  {
    "url": "/_nuxt/pages/index.0b2b4002e012d378251d.js",
    "revision": "e2ef4d4176d58d1464db92d9a46764a3"
  },
  {
    "url": "/_nuxt/pages/login.ddc26fa5f7d0957fd840.js",
    "revision": "2e4b37751d7907d1a8c98e1e901c223e"
  },
  {
    "url": "/_nuxt/pages/test.13ead9dd17b76626da70.js",
    "revision": "0dde8f9dfa87544ca2c9d8928279a4ae"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

