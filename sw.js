importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-template",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.01a3b237e11953ba1c93.js",
    "revision": "f094f147629157f1f9f967e8e8d7758e"
  },
  {
    "url": "/_nuxt/common.74758d8b1987e3008ac0.js",
    "revision": "9ffccd6f543d1982ce47b6d6a8dc814c"
  },
  {
    "url": "/_nuxt/layouts/default.90db283a8fe8df9755fd.js",
    "revision": "b4bb22ba005a30aaee14dd747d42f736"
  },
  {
    "url": "/_nuxt/manifest.d9f88169f507ad935792.js",
    "revision": "e23419e2a66afbe890c697a1c4126636"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages/index.b5c1f30223472cde8d46.js",
    "revision": "f261ede5e220cd9044db2a3d0b2c79d1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

