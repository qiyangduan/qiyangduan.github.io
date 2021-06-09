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
    "revision": "e96c803e7359e598f719a934ee3f326d"
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
    "url": "assets/js/10.4299822b.js",
    "revision": "5aef848b31bf334d626f642204fe2ae7"
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
    "url": "assets/js/16.93ac20a2.js",
    "revision": "0055acab2db3c538fe1c2a2980f31ce0"
  },
  {
    "url": "assets/js/17.ee79c101.js",
    "revision": "e3c9873041df2c432208e6cce5f50a47"
  },
  {
    "url": "assets/js/18.b0d10e8b.js",
    "revision": "95b74923a3675cd498b5e594d34e964c"
  },
  {
    "url": "assets/js/19.cb99d2ea.js",
    "revision": "cd4d53a46b6bb8c35dddf0895d890f91"
  },
  {
    "url": "assets/js/20.5f1ad7e5.js",
    "revision": "e14e779c7249dd47152473473baf7c3f"
  },
  {
    "url": "assets/js/21.adef2bf0.js",
    "revision": "2e666c16c3ef22607513054b45058bbe"
  },
  {
    "url": "assets/js/22.96785963.js",
    "revision": "b7c9d07751acd5c8dc1426d35726b0ba"
  },
  {
    "url": "assets/js/23.da3e177d.js",
    "revision": "04240333a7001db4a50c191fb92302e6"
  },
  {
    "url": "assets/js/24.61642b63.js",
    "revision": "c2ea880ebd03de181ea9a93c9db10c5c"
  },
  {
    "url": "assets/js/25.4f1272fb.js",
    "revision": "83d84adb0618681a33ca7c8c13f29cad"
  },
  {
    "url": "assets/js/26.987c3197.js",
    "revision": "cb3ef0e5e3567b89866553a2c1af2358"
  },
  {
    "url": "assets/js/27.131faeb9.js",
    "revision": "b03e8b37b4042a04f612a9dc7493e530"
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
    "url": "assets/js/34.aea38b94.js",
    "revision": "83702c9a83ca62660cc3b7d684485f66"
  },
  {
    "url": "assets/js/35.5697e456.js",
    "revision": "94819b8a59aec56a0ecd74f9b6ca3b7f"
  },
  {
    "url": "assets/js/36.3f6ae82a.js",
    "revision": "2defb18c69114b5680000a718b8dfc65"
  },
  {
    "url": "assets/js/37.b8a80da8.js",
    "revision": "26825f0085e45c049583ace05363492f"
  },
  {
    "url": "assets/js/38.eeced2ab.js",
    "revision": "d7acb4e3d701e7bf58e892aecc924838"
  },
  {
    "url": "assets/js/39.2a2f2e38.js",
    "revision": "8cc0e0976f68ba19058eadbd1b0b924b"
  },
  {
    "url": "assets/js/40.32e65665.js",
    "revision": "5342c6e589342dd58309cb488f17bb31"
  },
  {
    "url": "assets/js/41.14c9b138.js",
    "revision": "bf3bf1e4dee8a7d9e0d5e22ef0600aa1"
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
    "url": "assets/js/45.6dac7186.js",
    "revision": "847cac08f67de716e9cf310abb858342"
  },
  {
    "url": "assets/js/46.f17758b8.js",
    "revision": "3deff1a7886dbd8dc0735d3298acce19"
  },
  {
    "url": "assets/js/47.4e574e62.js",
    "revision": "03fb579a4313d727b73440467af19370"
  },
  {
    "url": "assets/js/48.c2bd8505.js",
    "revision": "e28bb230ed3e546e5a4119e7d01036cf"
  },
  {
    "url": "assets/js/49.5fa6a786.js",
    "revision": "d8c095385a7078dc9a6b443bd17978fe"
  },
  {
    "url": "assets/js/5.c130cd51.js",
    "revision": "10543c8f68b007a1a25785f9d29ad201"
  },
  {
    "url": "assets/js/50.11a23e9f.js",
    "revision": "f07e1c1d5ca57ceb67e718dc4addd662"
  },
  {
    "url": "assets/js/51.87d245ab.js",
    "revision": "73969ea4421010aa31b3389d9138d9c1"
  },
  {
    "url": "assets/js/52.a613e830.js",
    "revision": "d78319338648109fa078430dcb0e7472"
  },
  {
    "url": "assets/js/53.c6b5c590.js",
    "revision": "86ccb4dc1b94f909159c3d2d6bb0e166"
  },
  {
    "url": "assets/js/54.4eeecad7.js",
    "revision": "854f5a6502447339da3df9168b512b59"
  },
  {
    "url": "assets/js/55.ffc58d39.js",
    "revision": "981c50b3ad76feb5bf351f589c7ad37f"
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
    "url": "assets/js/63.f697b80b.js",
    "revision": "c8d9796e5212be75b4f8bd1fffe65a5f"
  },
  {
    "url": "assets/js/64.b9153186.js",
    "revision": "e16a16d7266af5c1d825d1314165ce81"
  },
  {
    "url": "assets/js/65.244bf5d5.js",
    "revision": "f3adeb8de2cbf700f71f97f64a1bd6f4"
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
    "url": "assets/js/70.d545e22d.js",
    "revision": "a0f875c31aa1f517ed136c40de2dddd0"
  },
  {
    "url": "assets/js/71.0b2726bd.js",
    "revision": "954a6d988f5a6d15fb99a836a8b2fef7"
  },
  {
    "url": "assets/js/72.397f7176.js",
    "revision": "3cae9ad3623a4a5335852cce6cd8c3f7"
  },
  {
    "url": "assets/js/73.79208696.js",
    "revision": "15ef879fdf097becc97ee5f4d44fc1fd"
  },
  {
    "url": "assets/js/74.25df65bf.js",
    "revision": "1c74348432a6be1d3809fc2ca595a625"
  },
  {
    "url": "assets/js/75.26ed7b29.js",
    "revision": "c2c62350fcbc38ab015c02c0338689e9"
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
    "url": "assets/js/8.dc196022.js",
    "revision": "0b27c30dd954baf4693aa79328d965cb"
  },
  {
    "url": "assets/js/80.3064379f.js",
    "revision": "dfb5b90bf2995eec7c265c4eb99ae24f"
  },
  {
    "url": "assets/js/81.24483a01.js",
    "revision": "8bdbe95df4c660efa61888309294cec5"
  },
  {
    "url": "assets/js/82.88e09628.js",
    "revision": "fad373b4b72f4934096d05b13d53cf0d"
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
    "url": "assets/js/app.32fc8233.js",
    "revision": "916b3f3d01de0f772180f8e98c54d169"
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
    "revision": "c8ec2b2f41841f2df4212b24c93dab7d"
  },
  {
    "url": "doc/design-principals.html",
    "revision": "0b0feca78d1e3fd1cc27b907748cad4a"
  },
  {
    "url": "doc/glossary.html",
    "revision": "cd132a221610a1a49f340b199fec9721"
  },
  {
    "url": "doc/index.html",
    "revision": "7520b160d8963e842397fc35888f6d8b"
  },
  {
    "url": "doc/install.html",
    "revision": "3dcf34a72e945fc0b6bef297e8e19a71"
  },
  {
    "url": "doc/usage.html",
    "revision": "124f27a7972b04e927b8cb71b8ef34a3"
  },
  {
    "url": "faq/index.html",
    "revision": "4cc4fcb5acf1203ea23d05306531734a"
  },
  {
    "url": "guide/index.html",
    "revision": "2a6d15dc33fa4fe79fd2d2a9d0a530db"
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
    "revision": "71a666967cfd79dd9be0d1cb5047bdff"
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
    "revision": "7e99cd0d82ea5f956d944ef188cdd647"
  },
  {
    "url": "plugin/index.html",
    "revision": "9aeac8585f897e4b0e88d67050f775e4"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "60f5802e419633117fac5e724c00f4ce"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "08bc09ce5f58d85a56ceb10907acaccc"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "38ede6acd043c51a6d89bb8c0ecedc26"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "a3400639f4477b455b296c52e937b0f9"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "9fbd4173f8d25d41f9be4848201d8630"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "f861cbdfb32e8fd25fb1d2d30c899004"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "f2c231e32ebe5a2e4f3a9e60cf2308f8"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "9f89e475eb19c50cc05fd1ad3079ffbf"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "52d0073770895359d044df10c6921de2"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "c92a15756c7aa8ead1c1160e44190ff7"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "c9d5e62b48d8e3067f5008b97586cd6f"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "641de97c82368c4e381bf7533d4f1644"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "327ec49703e5a87e11165ef83ee28972"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "7f1ea0af6e549fdf0a140eff795ba118"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "87f3aa1e52e514c3bb375a2b242879a6"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "d30ec743cf395324799ee93ccf243545"
  },
  {
    "url": "theme/index.html",
    "revision": "b8054866dec70ff22c198f4662d8c583"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "b27fcb044069ef7479ac048905aa0196"
  },
  {
    "url": "theme/option-api.html",
    "revision": "6aac5090aeeab33d577307b93b593e67"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "b74f507f22d22b60e6c7524795252fd9"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "a2b4c6e0f03dff56196dd83b861cb0ce"
  },
  {
    "url": "zh/doc/business-rules.html",
    "revision": "eebdf60f5f009d06ac75eba03e100814"
  },
  {
    "url": "zh/doc/concept.html",
    "revision": "c306d894917f6189de70409a517a2870"
  },
  {
    "url": "zh/doc/design-principals.html",
    "revision": "8b5c8501c38ef3d3d047378a98cfedcc"
  },
  {
    "url": "zh/doc/glossary.html",
    "revision": "aa28c461466822c367e3858479e8524e"
  },
  {
    "url": "zh/doc/index.html",
    "revision": "59def79b1da642c238edeee80ac70b37"
  },
  {
    "url": "zh/doc/install.html",
    "revision": "7a4d6d24127e09626ad5c09a11610c97"
  },
  {
    "url": "zh/doc/usage.html",
    "revision": "772e082e20f1276d03be61f96e2c6231"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "405b081d03977f487f2ceaf7f61ce21a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4aaff420209cc891e2f3c00235e5dd86"
  },
  {
    "url": "zh/index.html",
    "revision": "6f808b7e5b1726e0cc58fd98c46d43aa"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "f24187dd23fcaea73eb963205b1a0847"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "f89d12f7c87ecca5472f07a9a39c38cd"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "82dd1c17045b12da6334cfba774af2df"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "4929992caa53c73dfca72be7b68636e4"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "0885b521601eb198901cc671074ee28c"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "d756d9801ef9afd96e0c221e2fefe3d9"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "a228c08d7a76ef9b45db061ac4a4b74b"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "a1f7e3a8d761438a4160405d4f5f3afa"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "e4244fad4749ede569299a115ae7685d"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "1d56e80b6e48ce676099d6bb38bdd753"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "e30b579f692dbffb4859d894a380d770"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "7b89c8430fa8d96f7db315d9ed6f53fc"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "6a2ee809a14460df7157cc2c38b7674e"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "73a46cbf810e375143d5e1f1503193e6"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "54387f65fe2ed0c88016c40942ecbe04"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "e87f13e33b055fe6be0ef8051734db02"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "0c53855a906bd752ec616b3ff7398fc9"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "80517d6b9aa75f4aad145bf4592b9706"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "59b30897b6839290dcaecd5605773bf4"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "7820792577c74397297fc65c2c088f4f"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "87264e38dbb34671db35a285aac4f3ac"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "ab5fc4866bec43916f2e3d7f4e228b7b"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "3e9b3acc787e360b276298e654216361"
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
