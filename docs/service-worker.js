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
    "revision": "10010e8f9d982e0c0c1cd73bcf314506"
  },
  {
    "url": "arch_20210809223352.jpg",
    "revision": "ff88ba8e53e503f4b33603ab8ce4cd4f"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.dd28f3c7.css",
    "revision": "404160371109d4ffb298876ec45d0a8d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4299822b.js",
    "revision": "5aef848b31bf334d626f642204fe2ae7"
  },
  {
    "url": "assets/js/11.39fcea89.js",
    "revision": "03e85d1553374b041c1bc0d354597674"
  },
  {
    "url": "assets/js/12.88bdf5b3.js",
    "revision": "95f678d4508c2cd9f53ab4ddda35419c"
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
    "url": "assets/js/16.b15bad04.js",
    "revision": "616d237a7182e17fde3bfa2e080cba5e"
  },
  {
    "url": "assets/js/17.ee79c101.js",
    "revision": "e3c9873041df2c432208e6cce5f50a47"
  },
  {
    "url": "assets/js/18.318c34e1.js",
    "revision": "bc11356ec437ec8b2e7b379e69036150"
  },
  {
    "url": "assets/js/19.cb2a7bea.js",
    "revision": "0b538e49593a4e1777ffd3fe004d0f9a"
  },
  {
    "url": "assets/js/20.fc019d0e.js",
    "revision": "2aa54a37d0f1efd6ac68255714e68c66"
  },
  {
    "url": "assets/js/21.adef2bf0.js",
    "revision": "2e666c16c3ef22607513054b45058bbe"
  },
  {
    "url": "assets/js/22.8f8cfcfd.js",
    "revision": "6c642e3eb7ab7fd856d8268fe6d5c890"
  },
  {
    "url": "assets/js/23.464ef70b.js",
    "revision": "6349854d6ca102ba95c473d9063ea17f"
  },
  {
    "url": "assets/js/24.3db0b8ca.js",
    "revision": "4cfc5a1b828fd2d07990fabc8dc3b85c"
  },
  {
    "url": "assets/js/25.4f1272fb.js",
    "revision": "83d84adb0618681a33ca7c8c13f29cad"
  },
  {
    "url": "assets/js/26.4f451e47.js",
    "revision": "2b322495c1ef7902e2b6d707e08aaffd"
  },
  {
    "url": "assets/js/27.8e083a8c.js",
    "revision": "2fd8d3ba91b08e19339074f2b0ff47a8"
  },
  {
    "url": "assets/js/28.2f9eabf8.js",
    "revision": "f9eb658121c65498f6e0189dee4cf836"
  },
  {
    "url": "assets/js/29.f0de64c1.js",
    "revision": "be675d1d0cae4e139c6aa31bf537ac77"
  },
  {
    "url": "assets/js/30.f3947b55.js",
    "revision": "ccfb646f4096edffa7c85e5fcfb5ee69"
  },
  {
    "url": "assets/js/31.445f398a.js",
    "revision": "cee52e58c7aedb64e97d906de871aa9c"
  },
  {
    "url": "assets/js/32.4edee6cb.js",
    "revision": "0f289daf3a86a143b7e100834694cec2"
  },
  {
    "url": "assets/js/33.f10022cd.js",
    "revision": "8c0253fcfaa1ac600e27f96490506911"
  },
  {
    "url": "assets/js/34.c173d2c1.js",
    "revision": "f8fbb189ae05f6be3e8b2c9b7163a3b2"
  },
  {
    "url": "assets/js/35.d3fa9b6c.js",
    "revision": "14bb66600eadf0c88257449c2fb4b932"
  },
  {
    "url": "assets/js/36.6bc3314b.js",
    "revision": "95e68ea7b2c25ce3ff581e8d9b9d60e3"
  },
  {
    "url": "assets/js/37.c75c0f7f.js",
    "revision": "ed9456732e08329e386de99c6216106a"
  },
  {
    "url": "assets/js/38.590f8fdf.js",
    "revision": "33ff46407e99ceb0bad862128ea9da13"
  },
  {
    "url": "assets/js/39.cddbc501.js",
    "revision": "fcde331f918e0020634fc43e0c2665d0"
  },
  {
    "url": "assets/js/40.32e65665.js",
    "revision": "5342c6e589342dd58309cb488f17bb31"
  },
  {
    "url": "assets/js/41.01aaf590.js",
    "revision": "8a883f2ac3afed0f99d9dcb56982fe0d"
  },
  {
    "url": "assets/js/42.debc28f2.js",
    "revision": "749d8a36904e5db38680998aa6d65afc"
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
    "url": "assets/js/47.ac8fb57a.js",
    "revision": "c42f1597793ad692ab0ede1d6a2fa6c3"
  },
  {
    "url": "assets/js/48.c34242d6.js",
    "revision": "370a20ce6440f1876083ab37e72f62f0"
  },
  {
    "url": "assets/js/49.4928b079.js",
    "revision": "6371c156dbae3ae766b5f2aeeb93ca49"
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
    "url": "assets/js/51.d166b666.js",
    "revision": "e375332422b432ed686931667f6e552f"
  },
  {
    "url": "assets/js/52.01c043ef.js",
    "revision": "77848a1c236b10c6a015125567f3e35b"
  },
  {
    "url": "assets/js/53.7bfdd8b9.js",
    "revision": "db100a8458258f84b5ca686330f653eb"
  },
  {
    "url": "assets/js/54.a3c99f58.js",
    "revision": "69fb9a496cd37fb01ffce35d68958735"
  },
  {
    "url": "assets/js/55.7e7e3eed.js",
    "revision": "fe92a735dc8c4afba2072e40580b3c6e"
  },
  {
    "url": "assets/js/56.50e30121.js",
    "revision": "82051bf20014a4a41c43c9ef5d0c4b9b"
  },
  {
    "url": "assets/js/57.7812c954.js",
    "revision": "2889b1860246f6ac8cc05cf4fd8c4fc7"
  },
  {
    "url": "assets/js/58.c272e8e6.js",
    "revision": "6dce1e3475bc0d1ed6b87b91ee40a0be"
  },
  {
    "url": "assets/js/59.7a31c91a.js",
    "revision": "7a8a87866300673f092cc0c26e92b381"
  },
  {
    "url": "assets/js/6.bcd7c397.js",
    "revision": "f888196de62dae5f66439e334fad9dd6"
  },
  {
    "url": "assets/js/60.0d70e27f.js",
    "revision": "530572893b8168b1fb655e6eaaeaee56"
  },
  {
    "url": "assets/js/61.8eb2f998.js",
    "revision": "48dc2f99ac44502535332825ee0a8a7c"
  },
  {
    "url": "assets/js/62.125428a9.js",
    "revision": "356094f8290917665898bb5439f21d1f"
  },
  {
    "url": "assets/js/63.afff7ca4.js",
    "revision": "522031478272b2a485f0bfa156234613"
  },
  {
    "url": "assets/js/64.4d622df1.js",
    "revision": "0a77236afae9c91f4bdf0c31d4a7ed0c"
  },
  {
    "url": "assets/js/65.911acf4c.js",
    "revision": "d5191cb36af9daa5e5970e63ad8e9311"
  },
  {
    "url": "assets/js/66.e0cf01f0.js",
    "revision": "0b538a5d9f2047d2938da3a860f105ae"
  },
  {
    "url": "assets/js/67.998a0cc5.js",
    "revision": "d7a6776906570698fe672fc7ab2dbc25"
  },
  {
    "url": "assets/js/68.22062c61.js",
    "revision": "64c64ed471143f5c0bd9f04cdea05b20"
  },
  {
    "url": "assets/js/69.7d61067b.js",
    "revision": "90a6c4e816a6c857ee6489650f791e53"
  },
  {
    "url": "assets/js/7.9904a615.js",
    "revision": "39ad8402f992e1db125c67847df5d5ed"
  },
  {
    "url": "assets/js/70.6807d99a.js",
    "revision": "845b40bf4fb9666450353afa324fa272"
  },
  {
    "url": "assets/js/71.676625ab.js",
    "revision": "e50cae0d7189345f654541917ab2aa60"
  },
  {
    "url": "assets/js/72.e6e3bdee.js",
    "revision": "fe970d7c5523eac6e4cd18ee99b09951"
  },
  {
    "url": "assets/js/73.79208696.js",
    "revision": "15ef879fdf097becc97ee5f4d44fc1fd"
  },
  {
    "url": "assets/js/74.73c8f6f0.js",
    "revision": "77c83e5b7624406c536105346f3d066a"
  },
  {
    "url": "assets/js/75.06529b67.js",
    "revision": "d16421480d253ed99d3e77f0f3ed1248"
  },
  {
    "url": "assets/js/76.3870d816.js",
    "revision": "2014ef7e34d266c0f0f1f1b56feba6e6"
  },
  {
    "url": "assets/js/77.cc8499b5.js",
    "revision": "e0622ee2e0dd996bc966dd146802bbd4"
  },
  {
    "url": "assets/js/78.28249f24.js",
    "revision": "64fb4a06725f7e089a5f6accc69bc6b3"
  },
  {
    "url": "assets/js/79.f455b01b.js",
    "revision": "e3750b8d133818d4cdf2df06a4059aa2"
  },
  {
    "url": "assets/js/8.c751baa8.js",
    "revision": "ae5b8f87019672b77897ba5fcc0d9d2e"
  },
  {
    "url": "assets/js/80.3064379f.js",
    "revision": "dfb5b90bf2995eec7c265c4eb99ae24f"
  },
  {
    "url": "assets/js/81.e843f894.js",
    "revision": "bfea8520cb981432db9eb615a3d27c9a"
  },
  {
    "url": "assets/js/82.c4372f7d.js",
    "revision": "060dacb724cbfa177fa84abfa70bfe8e"
  },
  {
    "url": "assets/js/83.2ff8c2a3.js",
    "revision": "314b4c0c3cff1a06af179ebce6eb29fd"
  },
  {
    "url": "assets/js/9.64ad410c.js",
    "revision": "90c44b931cf058d0c952e712991b2c9a"
  },
  {
    "url": "assets/js/app.38b48076.js",
    "revision": "dbb3365e43fd0df4aa3e5fe7a3b25c08"
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
    "revision": "8a1f8b3cc72846944be53b0831259dc6"
  },
  {
    "url": "doc/design-principals.html",
    "revision": "6d202a9812f232219ecb12aeef07b6f2"
  },
  {
    "url": "doc/glossary.html",
    "revision": "d6657f2af19f6afb14b19ebf2051fa23"
  },
  {
    "url": "doc/index.html",
    "revision": "f0f23d67ce53802a485832ba2719d0c8"
  },
  {
    "url": "doc/install.html",
    "revision": "bbffa6d550738afd1ddd1068713a9f83"
  },
  {
    "url": "doc/usage.html",
    "revision": "fe019c3d7d562b5a243a706673535b20"
  },
  {
    "url": "faq/index.html",
    "revision": "8d216d04e25249fcd39869ac787d18eb"
  },
  {
    "url": "guide/index.html",
    "revision": "e19faa5fce12c20ae6080adf2182b95e"
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
    "revision": "0c3f4c5615183c77b8edce28d900ab01"
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
    "revision": "1acb32a64ae13587402c8c259f4c7f5a"
  },
  {
    "url": "plugin/index.html",
    "revision": "abf1dc5c20a1066797fc63d698a69826"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "ddd46fbb72921c590ec2a8fe23cc27d6"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "a9c02903cf219ca940630c360919501f"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "f540b2debf206b5db7d46c666b4ced3a"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "b3eeb4896c7b230643838837e42e0184"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "5bd80a6705c509d40dccbf196fabb92b"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "4d4dd58ed0f826a9e3e2b6767c4b43e8"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "d2ea9f3ed853e8fed0b46fd554098ea1"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "f8d1af721d32ac7b4902c61256d4db30"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "09fe76e0c906f3671577875e350c371f"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "f0562ac8a450d15e0cb91dd1463ad70d"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "ffe97200963153bba1833e305a579f2c"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "7b1f4d803d3dda2b4292d7de30fff56f"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "d690326399addf506ef22441cb3d5ecc"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "f912038539e78923485353a52c818d6e"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "e114dcb87e29767fee242bdb37bf725b"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "d9b062dc470ab0b9071daa5d3f9e5910"
  },
  {
    "url": "theme/index.html",
    "revision": "0288156f6a29d5181570bb990326a7cd"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "59256c7af8b3a74db3fbc87d1a3e0cd7"
  },
  {
    "url": "theme/option-api.html",
    "revision": "bb5768860881e27a0be30e150417011e"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "65d1bdde76f24436bc0b57a79f6a1a9c"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "38ea23874cebc1983a1f0e2df014685e"
  },
  {
    "url": "zh/doc/business-rules.html",
    "revision": "9270364ca39b00c3d1bcd9802f35cd88"
  },
  {
    "url": "zh/doc/concept.html",
    "revision": "95eb67dd54ccd1f5093f3780dad80ddd"
  },
  {
    "url": "zh/doc/design-principals.html",
    "revision": "c1e5e0cbf89acfcb7f3c2745d1672e0e"
  },
  {
    "url": "zh/doc/glossary.html",
    "revision": "b1491e9824ea629a102ce03f84280397"
  },
  {
    "url": "zh/doc/index.html",
    "revision": "a08aa950082d3aba32510020339822c8"
  },
  {
    "url": "zh/doc/install.html",
    "revision": "575f135f0120d3dfeab0f3ccf47ec609"
  },
  {
    "url": "zh/doc/usage.html",
    "revision": "47a7a2ed04fb4a41f49370df6c22e550"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "e44388985133e23a0fbbabc02f5a0449"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "cafd18cd7c54302705814f98e966a3df"
  },
  {
    "url": "zh/index.html",
    "revision": "7a6eae36a32791700c6bd7353cc69bd6"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "dfac5295c32517b12879f90ffb2d9efe"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "b5207eb95a094250fecf1eb8cae47f48"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "3ad14e9046a6264ebdf87c0800f3e723"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "582c4da20fe6e6a9aa89012c399b2c1d"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "471dd43a2dcec4655b6336eda4b7931b"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "97a08eb8cffdc17c08ec5ffb81d558e4"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "bbe282f1c8f7b9c603de5448414181b8"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "ff9237603168995a34e406d3f6436ce7"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "4dc54a5e058951851ae954c0c628da45"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "4c6011ae5cbb1434f0da2614d092dbdc"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "2f4b788eece17ae076c90acaa73b33f9"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "919efef85fb62ab7c784a796df247eb0"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "9d31d6c04aaad6c51b5dc005debdf1bb"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "01b79bbafa007a244502690ee83f794d"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "96af0bcc7c2bfcc29eb3800089e859f7"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "3d8bafca63274b8aea682d2485b072c7"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "561cd1e024ad980323dec142fd4458bc"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "c879317895f5fbc87a8465cfffbce849"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "b749be435ce51fe6d18c816488cead79"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "cd669272eef555f51d38531b7af6427a"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "6399104ff7192e164fca6d90bf14d6ea"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "8e048e1566efd8947dcc9f0a545614a0"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "3dabd34d7fa63387c06f097b3b9b99a8"
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
