importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.efaebfb1f5b24cdf6d00.js",
    "revision": "838730e1faa5cf1bb2d9ffb51c94ec23"
  },
  {
    "url": "/_nuxt/common.7f9bb39cd1d22723e8b1.js",
    "revision": "d0aeec921314eaa193c958681311510b"
  },
  {
    "url": "/_nuxt/layouts/default.8081e2064b36b67487d5.js",
    "revision": "5f3d443e9d2ad5e15ac649e84e562e38"
  },
  {
    "url": "/_nuxt/manifest.0499202494d824428be7.js",
    "revision": "ea5255915306b48f28b5b4f9266f6546"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages/index.ddfd74ac69cc2a2218c2.js",
    "revision": "fec3a378f0b0738aab8030f64a475803"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

