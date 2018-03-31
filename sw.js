importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "gfriend-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.8954f86136be4565018f.js",
    "revision": "7c472001b470086f8a4cc490ce8d156b"
  },
  {
    "url": "/_nuxt/app.b25d64f8433abe1194c940d66c661b98.css",
    "revision": "b25d64f8433abe1194c940d66c661b98"
  },
  {
    "url": "/_nuxt/layouts_default.9c6cec786eee0b94f252.js",
    "revision": "2f8629f01eb9979f97020ea8c4b7efd0"
  },
  {
    "url": "/_nuxt/manifest.c9fabd542ef2b959be74.js",
    "revision": "ee848089bbef9ef6bd7ddc728e66df43"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages_index.06f71517738bcfb9ec50.js",
    "revision": "f486dd266ed6c1a36a4dc7c87c703a47"
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


const matchCb = ({url, event}) => {
  console.error('url',url)
  console.error('event',event)
  return new RegExp('/_nuxt/.*')
};

workboxSW.router.registerRoute(new RegExp('/_nuxt/.*','https://jsonplaceholder.typicode.com.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

