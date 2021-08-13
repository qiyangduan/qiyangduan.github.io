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
    "revision": "5ecf5778ba25cc1ebb6affb1be742a11"
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
    "url": "assets/js/19.31d12c90.js",
    "revision": "e084c3fd7d1f889e2039d91883e33dd9"
  },
  {
    "url": "assets/js/20.33ab4c3b.js",
    "revision": "6a96be858bf84264155ac2fb4dd5383c"
  },
  {
    "url": "assets/js/21.f36ab6d5.js",
    "revision": "e997f1800f9f05d45527779ef59c4c83"
  },
  {
    "url": "assets/js/22.a874fba5.js",
    "revision": "182cef6511ad0827fdc0677ad3ae2f00"
  },
  {
    "url": "assets/js/23.da3e177d.js",
    "revision": "04240333a7001db4a50c191fb92302e6"
  },
  {
    "url": "assets/js/24.aa18b865.js",
    "revision": "1599c843605bd6ad228e84cd1bb1155e"
  },
  {
    "url": "assets/js/25.6521efd9.js",
    "revision": "96a8118162e76521792eaaf878c69cfd"
  },
  {
    "url": "assets/js/26.524e88c8.js",
    "revision": "b6080d0d429294564e011fa10790ff4f"
  },
  {
    "url": "assets/js/27.9cfc0fd1.js",
    "revision": "d595622b05e804630074c5ddf45ad22d"
  },
  {
    "url": "assets/js/28.21731976.js",
    "revision": "da6c7e7affd376f9c2cae46ac105b99f"
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
    "url": "assets/js/34.c173d2c1.js",
    "revision": "f8fbb189ae05f6be3e8b2c9b7163a3b2"
  },
  {
    "url": "assets/js/35.5697e456.js",
    "revision": "94819b8a59aec56a0ecd74f9b6ca3b7f"
  },
  {
    "url": "assets/js/36.37ed39ad.js",
    "revision": "25abe2eb0e633e25820777e33fdf45a6"
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
    "url": "assets/js/48.9ce1c667.js",
    "revision": "5675c2eb71d98a430def52dd39e080b2"
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
    "url": "assets/js/50.fd44db53.js",
    "revision": "a8990533a990db678f789a2c59ee7ead"
  },
  {
    "url": "assets/js/51.3fa7a6db.js",
    "revision": "f1cedeec2aa8f5860d441d9f13e0dfb7"
  },
  {
    "url": "assets/js/52.eaeaed92.js",
    "revision": "51befe2a5db3e59a2de483a861aae023"
  },
  {
    "url": "assets/js/53.b6300ca5.js",
    "revision": "c0288de39aa960e90f9ffc00ded41108"
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
    "url": "assets/js/59.5e05a1b4.js",
    "revision": "306f862c8ad079bca3853fccbd28a2dc"
  },
  {
    "url": "assets/js/6.bcd7c397.js",
    "revision": "f888196de62dae5f66439e334fad9dd6"
  },
  {
    "url": "assets/js/60.a71f3a1e.js",
    "revision": "b5dbaff8f2196dbff73fe03c7414cb49"
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
    "url": "assets/js/67.456b1a59.js",
    "revision": "6c0eb90cc8a23bca3fad9922c5bae6b8"
  },
  {
    "url": "assets/js/68.b1580792.js",
    "revision": "4af53ee22274e56376fa676544225ac2"
  },
  {
    "url": "assets/js/69.c8d6a217.js",
    "revision": "c6eaa533310ecf418da7badc11bae88e"
  },
  {
    "url": "assets/js/7.9904a615.js",
    "revision": "39ad8402f992e1db125c67847df5d5ed"
  },
  {
    "url": "assets/js/70.fa8ae8c0.js",
    "revision": "db097ed9fe6105ec054dbc45092fd516"
  },
  {
    "url": "assets/js/71.25be6e71.js",
    "revision": "c5dcfc2846005b3b8e3475ea64e23f9d"
  },
  {
    "url": "assets/js/72.5af8c6f4.js",
    "revision": "b4f96e7f685add9f74b1a3078f1fe4e5"
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
    "url": "assets/js/76.3f8e7333.js",
    "revision": "957539ffbbd6166ed7e233510e868717"
  },
  {
    "url": "assets/js/77.8db5fea8.js",
    "revision": "d1473cb8960a9cdf3b2ee7d600d9b340"
  },
  {
    "url": "assets/js/78.b4c564a3.js",
    "revision": "7fc0aa6b6cb8d43dc4799d5c239b486f"
  },
  {
    "url": "assets/js/79.f6f472ea.js",
    "revision": "8fba9c9419ae59e2a5d6ac6dd0afe51d"
  },
  {
    "url": "assets/js/8.dc196022.js",
    "revision": "0b27c30dd954baf4693aa79328d965cb"
  },
  {
    "url": "assets/js/80.0fefb5d3.js",
    "revision": "fd95a1787128da112a0cd0757a0f5e27"
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
    "url": "assets/js/app.ae2b1dc4.js",
    "revision": "89cb91ef03d759449d2a559283ae9367"
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
    "revision": "d12a458f7692e423b24764f8fa0a109c"
  },
  {
    "url": "doc/design-principals.html",
    "revision": "02756bd02442bc321e3b41c638873164"
  },
  {
    "url": "doc/glossary.html",
    "revision": "48bf1ecd6a0c4bf8a97be492103c2492"
  },
  {
    "url": "doc/index.html",
    "revision": "640e81b1ba4e7f742979683fc7650db8"
  },
  {
    "url": "doc/install.html",
    "revision": "c1be95e2f52a43f8399a7861297b66bc"
  },
  {
    "url": "doc/usage.html",
    "revision": "b70a71e6487adedd553d4020b85432c0"
  },
  {
    "url": "er_postgres.png",
    "revision": "130142e5e90daa0f647bece4e59d6d5b"
  },
  {
    "url": "erd_easy_dispatch_20210819.png",
    "revision": "0ec4ce84962f99304c9b181ea0ecb732"
  },
  {
    "url": "faq/index.html",
    "revision": "69c1cb578a0d5ea826bb4ae7fc9f7e4d"
  },
  {
    "url": "guide/index.html",
    "revision": "4efb817f22271ff2d0d0f5e424e84441"
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
    "revision": "8afd42a5323f8c2fbc7d1f3e6db4d19e"
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
    "revision": "d30be1ab91912f3618d181d726b55443"
  },
  {
    "url": "plugin/index.html",
    "revision": "7923d892f6a98c0b5ace2c37fb66b455"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "3295960bae57da6a2dcd7a87b23c76d0"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "58734a222751f22adbacfe91c5ce462a"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "f537025ec25b4a3066bc03d8a98f070a"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "89a5540b81d2c7b179313700fa8ab345"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "1091abf729d280cf6f434f81256b4c7a"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "d11204e9ea468f463440e93ec2ee5a9f"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "cc29069c19e88df3562f1c219b14872d"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "7329b2c8c86eb9e0eed1e1833b842708"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "453be550dc0fe7516e251f1ad069a7a4"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "c1dadb8422abc3573907b4818c364877"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "067cd943d5c5560d5c96a3669d2c5aae"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "c772c2dea708092eafc926e1154bf2e2"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "5ab910ae23b686360064830a214b8c45"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "18f104485a9cc0fa2a0a7aaa16d8e4a6"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "98a04f35f1a529ffa494c2f67e367d8e"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "9f3a921adbe50a715d5562cf25addb0b"
  },
  {
    "url": "theme/index.html",
    "revision": "fa7b70af65fd5b1c1aec045033c2ece2"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "b750cfecc5dd2ac510741158ff6dde9d"
  },
  {
    "url": "theme/option-api.html",
    "revision": "ff2562d76ec31c4cc363c778c26086ef"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "819617958559956364c43352b9a17b73"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "2deb2d12edd70bb875feba3477ae9eb4"
  },
  {
    "url": "zh/doc/business-rules.html",
    "revision": "078328fa413b59d1cd6e8a90a79facfd"
  },
  {
    "url": "zh/doc/concept.html",
    "revision": "8ea002414ef687caa4b2be17a1efdeaf"
  },
  {
    "url": "zh/doc/design-principals.html",
    "revision": "0d35090145728a7e7869c10f3df7f576"
  },
  {
    "url": "zh/doc/glossary.html",
    "revision": "65d75549f63277bbb371fa3606c285c2"
  },
  {
    "url": "zh/doc/index.html",
    "revision": "0297a17f92e342182d02e3d7f46a47b8"
  },
  {
    "url": "zh/doc/install.html",
    "revision": "e27a679ff4fa094506dbd29dcd75e1fc"
  },
  {
    "url": "zh/doc/usage.html",
    "revision": "78b0536cbeaab131dd2ab156f9781d70"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "cfd4b85352c9b87779684849818dc5d7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7008730ba5f41d4f6b48f51ed53dd2f0"
  },
  {
    "url": "zh/index.html",
    "revision": "35379c6e2eac49954df853387cc64754"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "ecde84193a90cb15509ca3d2f2532e11"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "cf67d063c27aab313146c45a39a6ecbc"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "655e10fdae00f142e690de36d29a83dc"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "8b3851fcb7e7d7e28c733178b78a818c"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "f03e5c0dfc07f15fdb67ae378a5fd6ea"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "45fec52c3beb1221a63eb6a04fe52f12"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "91f2a147ca2e62d1e8a9b5127748db37"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "a09ff91257192842f24e35b31e08b94e"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "6c4a924b06aba84a4546b56f916b8846"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "35f44d11298f29fe4b66d904907e1201"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "b8e965441835f45a5286535cc14d5db9"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "a81aae67ffd42d76b81221dc950562e2"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "2c0e7d125854723f7134ba9c839196e7"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "652471552f05c0ff967ca217ed6e5d69"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "f730a487bc8e86687bebf6e69e7125ba"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "748b923709b56ff615051b775407abe1"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "3e42f4ae7984f3520508b226dd59ba41"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "1ab7ff2126c9b77fae1c1a31ee3297e6"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "6b4485ef9a24023bdc3865d5389acf82"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "8e79cef3643cae0c52fc4c5738b0342e"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "d805648f5155d778f393cdebe543b758"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "7302a67ea940c70e98844476a95bea8e"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "ee85c64b90d86dad47ccfee603ae9906"
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
