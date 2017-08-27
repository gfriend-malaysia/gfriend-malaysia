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
    "url": "/_nuxt/app.9b99ab5993fff221c4af.js",
    "revision": "b95ef58ae7499e64537686663d33902f"
  },
  {
    "url": "/_nuxt/common.d2e17df68368c5ec6d24.js",
    "revision": "30d3aa7343ba2f8f643d1d7aa8ae1824"
  },
  {
    "url": "/_nuxt/layouts/default.2c2cb0caa990940dfdb9.js",
    "revision": "332dc8839f687b4f4d140391cb307bca"
  },
  {
    "url": "/_nuxt/manifest.dea9350e52a74560b5a6.js",
    "revision": "ff0ef6a661d46daa904284bbf0668240"
  },
  {
    "url": "/_nuxt/pages/ats.c9a56077213fbc7c8518.js",
    "revision": "7ff159f6687f09ba51bd0b02e1f3920e"
  },
  {
    "url": "/_nuxt/pages/career.6b387dbe47d92268eb67.js",
    "revision": "61fc21fed18953717396e08d9fb64e4c"
  },
  {
    "url": "/_nuxt/pages/index.5bff94eab662cfc43437.js",
    "revision": "141fac05a8a212b85eb4a46732303dc9"
  },
  {
    "url": "/_nuxt/pages/job.7c0a8a479d08b9cb22f2.js",
    "revision": "e26cb74705a3692a118dec72fb9a03bd"
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
