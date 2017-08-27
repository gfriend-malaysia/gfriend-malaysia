importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.638a4e0aac4fdef15c30.js",
    "revision": "b0aaddfd3fc6c04611a7f6f442d8fa78"
  },
  {
    "url": "/_nuxt/common.d465e797b584dd9cf770.js",
    "revision": "5182d917ba7635d0a8eb187642377845"
  },
  {
    "url": "/_nuxt/layouts/default.92096d2f8dcaa33805bd.js",
    "revision": "5bcbbd3c196d63d89304d31f0620e8ce"
  },
  {
    "url": "/_nuxt/manifest.f9887927ac7433ca3065.js",
    "revision": "179107197eebac4208ccf64b1b1f3abd"
  },
  {
    "url": "/_nuxt/pages/ats-home.38ce818ab85627786da1.js",
    "revision": "29c16de03eb96e0f2e567039cd2fc36c"
  },
  {
    "url": "/_nuxt/pages/ats-teamv1.ab895c5112e7760b734e.js",
    "revision": "0a57a08bf32323f3a9b5e60f62868009"
  },
  {
    "url": "/_nuxt/pages/ats.df22d98f95a3290c8579.js",
    "revision": "bf8b7b8bdd1bbaeda6f333607e6aa007"
  },
  {
    "url": "/_nuxt/pages/career.b52384dac6ba538f2191.js",
    "revision": "eebb9541c8b81c0d66339943d44dff1b"
  },
  {
    "url": "/_nuxt/pages/index.4154fa47365b4325fe26.js",
    "revision": "89af233b900b439ac9bba8d17a867f10"
  },
  {
    "url": "/_nuxt/pages/job.2f8adc9d1fbcb7857cc1.js",
    "revision": "b03066d4ebded38143bfa651f7222ac8"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "progressive_web_apps_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
