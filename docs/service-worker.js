/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5e0353b3d718db8b176ece2c463a8293"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.0bd982ad.css",
    "revision": "6c63413c7671fcfc4a5c609554981ea3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5879bc09.js",
    "revision": "3af1fe06fa4404f7d7c23504cb800510"
  },
  {
    "url": "assets/js/11.e2a77038.js",
    "revision": "9e5d9e9b2dc64494a49efd1cc75098f4"
  },
  {
    "url": "assets/js/12.be9a0ff7.js",
    "revision": "f46c8b627778e1d2419188f1f6da059a"
  },
  {
    "url": "assets/js/13.3296af97.js",
    "revision": "b9ccd469ccf410aa341832a14950a63c"
  },
  {
    "url": "assets/js/14.97c20d48.js",
    "revision": "6dfe5f927b71c52820faf43e9dfb1ec2"
  },
  {
    "url": "assets/js/15.e6d4e9a6.js",
    "revision": "9c7a5b56ba04df1c374ec529dd6ae164"
  },
  {
    "url": "assets/js/16.48fc9dd1.js",
    "revision": "f3c786643ddac79770ab4d3182a9d7db"
  },
  {
    "url": "assets/js/17.ee79c101.js",
    "revision": "e3c9873041df2c432208e6cce5f50a47"
  },
  {
    "url": "assets/js/18.0148e6bf.js",
    "revision": "208d5b10817b1d5ea752e081e9f40533"
  },
  {
    "url": "assets/js/19.bdf89041.js",
    "revision": "f088603483efd16f952f0d7b4a84d68b"
  },
  {
    "url": "assets/js/20.33ab4c3b.js",
    "revision": "6a96be858bf84264155ac2fb4dd5383c"
  },
  {
    "url": "assets/js/21.19969c4a.js",
    "revision": "6533db96dcbe03bc41a76acc820fde84"
  },
  {
    "url": "assets/js/22.4ec0d6a7.js",
    "revision": "aa533a76eb5e7083e9201656f5378ea7"
  },
  {
    "url": "assets/js/23.e2e66f0c.js",
    "revision": "241cf46f9280a4c18124df090a187e98"
  },
  {
    "url": "assets/js/24.3db0b8ca.js",
    "revision": "4cfc5a1b828fd2d07990fabc8dc3b85c"
  },
  {
    "url": "assets/js/25.45c2aca8.js",
    "revision": "1097055e7afab4c7534d7f419c9e1fbf"
  },
  {
    "url": "assets/js/26.e2486012.js",
    "revision": "7b04ab091217e061448aa7735cc069c0"
  },
  {
    "url": "assets/js/27.49597af0.js",
    "revision": "0773bc5844da5cae0c2e0612ee80286e"
  },
  {
    "url": "assets/js/28.083b3f50.js",
    "revision": "2da51fcb2bd3ea3df3615c8709cc6c57"
  },
  {
    "url": "assets/js/29.f0de64c1.js",
    "revision": "be675d1d0cae4e139c6aa31bf537ac77"
  },
  {
    "url": "assets/js/30.e6c1975d.js",
    "revision": "4c4e77db20b9a781d079072d51cd0457"
  },
  {
    "url": "assets/js/31.9754fb15.js",
    "revision": "16879e7ace2bada2729a7ef64536ea2e"
  },
  {
    "url": "assets/js/32.cbf2d936.js",
    "revision": "334d29fb799a8711685e929a722f3a2d"
  },
  {
    "url": "assets/js/33.4d250a37.js",
    "revision": "512ed8c4185aa6b67b4c831adcb6d145"
  },
  {
    "url": "assets/js/34.1b4aa34c.js",
    "revision": "077cccbb60778cb2ab3641f4ab6161cb"
  },
  {
    "url": "assets/js/35.154f0a5e.js",
    "revision": "1f55b1117a0e98c4fed4e8064b80e336"
  },
  {
    "url": "assets/js/36.3f6ae82a.js",
    "revision": "2defb18c69114b5680000a718b8dfc65"
  },
  {
    "url": "assets/js/37.c75c0f7f.js",
    "revision": "ed9456732e08329e386de99c6216106a"
  },
  {
    "url": "assets/js/38.eeced2ab.js",
    "revision": "d7acb4e3d701e7bf58e892aecc924838"
  },
  {
    "url": "assets/js/39.b181449b.js",
    "revision": "2d9c3012b9f56b1cd2af0f2edce42ded"
  },
  {
    "url": "assets/js/40.8815c138.js",
    "revision": "2190f19d55856d23278c36d041acf399"
  },
  {
    "url": "assets/js/41.36c672a7.js",
    "revision": "6d6a9c34bedac31c37e52872e2d56543"
  },
  {
    "url": "assets/js/42.2fa023e9.js",
    "revision": "9549f845157aa857127acec4c58b3f99"
  },
  {
    "url": "assets/js/43.c0dd7769.js",
    "revision": "571f75bdbbd4f60ad6f01dd8fb46b642"
  },
  {
    "url": "assets/js/44.e9400edf.js",
    "revision": "e72764659ba7ac028e0e30b4acffbb49"
  },
  {
    "url": "assets/js/45.64ef81ea.js",
    "revision": "8c2ec4251d2b25f9a3342925499609e1"
  },
  {
    "url": "assets/js/46.25b3d331.js",
    "revision": "bd35e9cfd3290353e39a2123390b2ffa"
  },
  {
    "url": "assets/js/47.bba74e99.js",
    "revision": "b050e17a1f1cf7005f2ede9d79400079"
  },
  {
    "url": "assets/js/48.c2bd8505.js",
    "revision": "e28bb230ed3e546e5a4119e7d01036cf"
  },
  {
    "url": "assets/js/49.dcae4ba1.js",
    "revision": "7324edaa9f1f0a7e4a578b805e67eea8"
  },
  {
    "url": "assets/js/5.c130cd51.js",
    "revision": "10543c8f68b007a1a25785f9d29ad201"
  },
  {
    "url": "assets/js/50.bf4d2b2b.js",
    "revision": "c7f566d35ac67d6dd1c8a4906e75a501"
  },
  {
    "url": "assets/js/51.cc826a8e.js",
    "revision": "88e09c6447e7c156707a6922ff58047f"
  },
  {
    "url": "assets/js/52.ff96fc41.js",
    "revision": "d6b7200ccd2d6e16695d0ca2f1a01dc9"
  },
  {
    "url": "assets/js/53.27c38519.js",
    "revision": "dea11fd82cbd383f187f0ff759ad9f3b"
  },
  {
    "url": "assets/js/54.cf4e6e76.js",
    "revision": "d287adc7379e9332ccdd4419e01668da"
  },
  {
    "url": "assets/js/55.35ae7f19.js",
    "revision": "d3d9965112c58794b6985961086ddad8"
  },
  {
    "url": "assets/js/56.88a18af3.js",
    "revision": "23cc0e8bd01f8d9450e09b6f0e4c5e3b"
  },
  {
    "url": "assets/js/57.e5496733.js",
    "revision": "f724b8d998d411809c73501b2673b569"
  },
  {
    "url": "assets/js/58.0989cc9f.js",
    "revision": "55a34fed91b13f0d74e36ee9321ddb7a"
  },
  {
    "url": "assets/js/59.b3974984.js",
    "revision": "2f77bcb66b7a91754e3417e1780d8f3d"
  },
  {
    "url": "assets/js/6.a941112e.js",
    "revision": "4f5f7ea60529d1d1fb8bd48001923ba6"
  },
  {
    "url": "assets/js/60.0e98e146.js",
    "revision": "03c8e75a57a3950ad6a906576b57fd5e"
  },
  {
    "url": "assets/js/61.56f968fd.js",
    "revision": "c68fa9051aa56ee5d3cc650eff262242"
  },
  {
    "url": "assets/js/62.226a7cbf.js",
    "revision": "737e709a0057ed28f3a42536698af4b7"
  },
  {
    "url": "assets/js/63.a293be50.js",
    "revision": "d4b5903008995cd28da255b2f192458a"
  },
  {
    "url": "assets/js/64.c51d3f7d.js",
    "revision": "8726bf0f04adf951e4c7255a1a20c2f8"
  },
  {
    "url": "assets/js/65.eab4ae03.js",
    "revision": "2fc478436f35fcc18fc2373bc3b287a6"
  },
  {
    "url": "assets/js/66.52c5d9d2.js",
    "revision": "cf2c0891d1f67bfc131fb5467e525bee"
  },
  {
    "url": "assets/js/67.81d0c1b1.js",
    "revision": "4b7740c635b27ae6723d67b98f5b20f0"
  },
  {
    "url": "assets/js/68.556d8ed4.js",
    "revision": "b5e5104e38f761c600a62add3c112062"
  },
  {
    "url": "assets/js/69.59509db6.js",
    "revision": "19233bc103bb385a12ed418b7f7fd2b3"
  },
  {
    "url": "assets/js/7.815eb9f5.js",
    "revision": "5b2e8d2b0af7c0eab07fb55e0bb50fe8"
  },
  {
    "url": "assets/js/70.abdfc437.js",
    "revision": "e34dd80c8770ab6d436ec14387cdf038"
  },
  {
    "url": "assets/js/71.73fb0c19.js",
    "revision": "9a5917c68506b5069bbecc16e68d48c0"
  },
  {
    "url": "assets/js/72.fc8e466b.js",
    "revision": "7716be2c3c327a3595c049c09475b35b"
  },
  {
    "url": "assets/js/73.72c9a02b.js",
    "revision": "1671eb0a41bf0d28045f8822c4c77b8d"
  },
  {
    "url": "assets/js/74.81e8c022.js",
    "revision": "c91bc007d3a68a27f91ae31a064c5b05"
  },
  {
    "url": "assets/js/75.dc000f01.js",
    "revision": "c366d05c7feba170cc104bd7682b361e"
  },
  {
    "url": "assets/js/76.d1428966.js",
    "revision": "f0ba669d4ce060bff622af619cc94d1b"
  },
  {
    "url": "assets/js/77.2db199d7.js",
    "revision": "82f0dd42b306571025eb102cb46fb3f2"
  },
  {
    "url": "assets/js/78.528daab2.js",
    "revision": "7c91af9d9b89e422e1c79564ccd735c2"
  },
  {
    "url": "assets/js/79.0a9e1653.js",
    "revision": "1d20777f68916dc2465e3f64ac03c7ac"
  },
  {
    "url": "assets/js/8.c751baa8.js",
    "revision": "ae5b8f87019672b77897ba5fcc0d9d2e"
  },
  {
    "url": "assets/js/80.c8bd7c45.js",
    "revision": "045e6919bbc1f5263058621c590be6b9"
  },
  {
    "url": "assets/js/81.489abd8d.js",
    "revision": "b7c2ffda07e419dd866161b03b016e66"
  },
  {
    "url": "assets/js/82.495f7312.js",
    "revision": "57c06d4131fd7941d227d08aefc4d0ac"
  },
  {
    "url": "assets/js/9.64ad410c.js",
    "revision": "90c44b931cf058d0c952e712991b2c9a"
  },
  {
    "url": "assets/js/app.7991ee5a.js",
    "revision": "03b20e16a55d860266c8c6e69c8d6a53"
  },
  {
    "url": "assets/js/vendors~docsearch.b3708bf9.js",
    "revision": "6ac16423deb78c40f9f4ca87229996e4"
  },
  {
    "url": "assets/js/vendors~flowchart.3e13309c.js",
    "revision": "64e7eeb1d82b960bc07e0c40f3118777"
  },
  {
    "url": "assets/js/vendors~notification.11c6c6d5.js",
    "revision": "18c76fb300310a126987b92a7f64b760"
  },
  {
    "url": "doc/concept.html",
    "revision": "b614e9a93ffd6fa55e845ef5d9aec6bb"
  },
  {
    "url": "doc/design-principals.html",
    "revision": "edc5698956d50154652935d01ad4ca02"
  },
  {
    "url": "doc/glossary.html",
    "revision": "6e19a0c77eab735ab7856778d95f2da5"
  },
  {
    "url": "doc/index.html",
    "revision": "3e83aecd8777839f68ed684b45057f4e"
  },
  {
    "url": "doc/install.html",
    "revision": "3765cc72f600803e5fe4530e8f8b0774"
  },
  {
    "url": "doc/usage.html",
    "revision": "b952db35b0d4f7dbb7e95ccf848eeb39"
  },
  {
    "url": "faq/index.html",
    "revision": "5ac7e80951e3011801677fa7d6f5c059"
  },
  {
    "url": "guide/index.html",
    "revision": "fb9bea31e0b3569faa1cc7210e669f7c"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "84b3eea6de551627d238a41f458fea9e"
  },
  {
    "url": "login_page_20210608174032.jpg",
    "revision": "1e811b8b0e6c306bde5054155a959ddd"
  },
  {
    "url": "planner_gantt_20210504215543.jpg",
    "revision": "2910d450932bd25f50a93276240278b5"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "ac067fa9833d46f2d1d32b56326218e0"
  },
  {
    "url": "plugin/index.html",
    "revision": "a0af5ff0b40a9093d78072d2430c5aee"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "47f3b5d8fb985cb573cf201a92f52ff1"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "630ff9f9c4c92efa7111dc0fe8c7e3dc"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "a2a57214a57e43bf31dcdf44db013c50"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "328db9aaad47da49b4c6af04521d6e78"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "7fd2973354d1f621ace1edf8da3be440"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "ae84b602c1645791f0dcbba6081ef68a"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "f4ba6d67e9f27efaec7ae6a6aad94338"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "17d4c671c7be07be883ed91825fe9df4"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "7a340d7aeaf6516a1d83502072342e08"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "66c259af0a61776dbae687b8d331ed50"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "cbcd68536f3a7ae9c530ae6d515c7546"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "1b9165478b8e59012b4b021ae35f6f26"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "9cb57767fb2dbc86af226888f6acb229"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "cc8d84614a7d4d28cab12e1a7f0b7f6d"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "ea8d6c3d6b13f9a1c295b12f14200811"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "7273183e7cf7164b42298917dd385685"
  },
  {
    "url": "theme/index.html",
    "revision": "96fe90e55d194ff079eec0f31c40b147"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "ecb65894b6ff4442f4fef4a87553178f"
  },
  {
    "url": "theme/option-api.html",
    "revision": "ad6608a014d27714ee9bfd3bef775d49"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "3e52aad5faca8260dcbcab8b8a06a5ea"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "9893abb5966562cccd8b4a62a7c37f90"
  },
  {
    "url": "zh/doc/concept.html",
    "revision": "237b415e3faa8542880370da4600e0c1"
  },
  {
    "url": "zh/doc/design-principals.html",
    "revision": "8114fe2cb0a9edd4ad3b8ce0d766fd46"
  },
  {
    "url": "zh/doc/glossary.html",
    "revision": "413c568bef4440f1a2ebbd48961bc3db"
  },
  {
    "url": "zh/doc/index.html",
    "revision": "fed58892ac8946ba16028ca906e00af4"
  },
  {
    "url": "zh/doc/install.html",
    "revision": "6f2d0187b921845690b7ec8cfb083f23"
  },
  {
    "url": "zh/doc/usage.html",
    "revision": "547afe3449a6f4ff6cb38e0312090905"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "d73137fe9fab1ede789856cf073a40ba"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "831ab4d2c1cde5b8c9745590023535a7"
  },
  {
    "url": "zh/index.html",
    "revision": "146805b4a7d6e3e36ac52fcc2eb9f694"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "23f01b4f8c9877824e5630ce4134db35"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "f27ae0fec71c7fb76dc5e545f05f05c4"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "1c99c6a528e08783857ed1e64e650488"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "c6498471d3b89f88b97447b37ebda2f1"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "27b4cd1bbda500a163426b3e1deabd3c"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "04999bb2c898c4b347c7bc020d42b6e0"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "eb5679a214283c2c8b0802bf651c8ddd"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "c084f027ad61951c16b7c95e8acc02b2"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "33c6211c2c2fcc0db5a021e7da199115"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "16dbc886c8cdfd152a10edf4f7d23a4d"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "3b56e399c1057595e1c66905ac7259ad"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "d77bf6fab1b25f4f1ec2d3ff50b7aa39"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "c653ab418b100d204b5c89ee34867c3c"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "3b3519aa532781aae6d094825e77e282"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "2cb1eeddfc4aa7508f110e1bb3c6cd89"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "b82101240a1baf49fba40e7a5f40d0f4"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "af1e0ad36e3c8ed2ea7f85119014bca7"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "f76f380a6fec6070f3a671617ae977e9"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "ab058192997f915d3e8c4dce00deeca0"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "aa7a385dd3e4acdb73e6f13ef203fc02"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "a3ad8dc86e2f1c43370a9b0a8779464c"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "7b0d915c8efb1a92b215b14fc3434810"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "fbea629e772fdb07125041baf5af3e4c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
