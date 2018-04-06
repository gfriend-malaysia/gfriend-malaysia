importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.68ef35412c868963586506f09de6e8cc.css",
    "revision": "68ef35412c868963586506f09de6e8cc"
  },
  {
    "url": "/_nuxt/app.f0c14c2e9ed8061763eb.js",
    "revision": "c4091653d44e77a9a5b73b31b7a6cecd"
  },
  {
    "url": "/_nuxt/layouts_default.9c6cec786eee0b94f252.js",
    "revision": "2f8629f01eb9979f97020ea8c4b7efd0"
  },
  {
    "url": "/_nuxt/manifest.b4dcc92e68d0a8721f8a.js",
    "revision": "260f0b2dd3a0d1b62991f2cac7413d81"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.b11ddec7686c02b8f660.js",
    "revision": "8ca11a908fe9d60bbca1a792f950ab2d"
  },
  {
    "url": "/_nuxt/pages_test.dd81fb68124e6fdce529.js",
    "revision": "e11ce98e82239ec04f9d04052c0dbb18"
  },
  {
    "url": "/_nuxt/vendor.36cf00d878800eaa2041.js",
    "revision": "cb13284dba79ad8db810ab8fd798c150"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://jsonplaceholder.typicode.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

