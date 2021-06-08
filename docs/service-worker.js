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
    "revision": "c24b2029c86f50743ce4090d75f693bf"
  },
  {
    "url": "api/cli.html",
    "revision": "6b5e914a2efcdbc23b64e80a8cbb5577"
  },
  {
    "url": "api/node.html",
    "revision": "978312c5ec2a30e012772d6f2c19fc8f"
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
    "url": "assets/js/10.c5cefc44.js",
    "revision": "c7a242244e3026c7b5b31de198b9d389"
  },
  {
    "url": "assets/js/11.061fd084.js",
    "revision": "07c4dd238761ea95f8d2a87d333f2b22"
  },
  {
    "url": "assets/js/12.978a7978.js",
    "revision": "2e62aec3299bc1c76a0f4e24ac2c7752"
  },
  {
    "url": "assets/js/13.7c857f34.js",
    "revision": "cd4c573e3cf73337564716a0ed59fa25"
  },
  {
    "url": "assets/js/14.4658a56f.js",
    "revision": "3293d3f1ff0540518c73f6abbb03eed9"
  },
  {
    "url": "assets/js/15.a1541954.js",
    "revision": "9f8737bd8ac1885019fbd9f41ba7d0e2"
  },
  {
    "url": "assets/js/16.31216889.js",
    "revision": "ad0063b0dc30eca1706600c66f057a59"
  },
  {
    "url": "assets/js/17.ee79c101.js",
    "revision": "e3c9873041df2c432208e6cce5f50a47"
  },
  {
    "url": "assets/js/18.d666d670.js",
    "revision": "ad7146fcbebfafb3564e45136e330f73"
  },
  {
    "url": "assets/js/19.c3c1f1df.js",
    "revision": "01381a541e03f24a4a3abefc2ed4068e"
  },
  {
    "url": "assets/js/20.fdaa84e5.js",
    "revision": "1e696e80dc616866a0d68ad6e760fcfd"
  },
  {
    "url": "assets/js/21.a82df741.js",
    "revision": "fe15c49ff1637f5ef85e87a66a96dcd8"
  },
  {
    "url": "assets/js/22.bb880e39.js",
    "revision": "018d15485d1e18dc7fbbc8a4d72087bc"
  },
  {
    "url": "assets/js/23.d25969ad.js",
    "revision": "8e447c428a375d4fb7e484ff2b70a510"
  },
  {
    "url": "assets/js/24.6d9b5972.js",
    "revision": "93f3fd999ea619b6c2e888e22f90566c"
  },
  {
    "url": "assets/js/25.9ac36afb.js",
    "revision": "5a80ff7ae538be1733029ac505e3f74c"
  },
  {
    "url": "assets/js/26.932feeee.js",
    "revision": "8df640b5bd0fdbd5e6cbae74ac964d9c"
  },
  {
    "url": "assets/js/27.a6b1b106.js",
    "revision": "2abea4b2debe6ffa40f9f2a3724de9f0"
  },
  {
    "url": "assets/js/28.ef5b6ed3.js",
    "revision": "6d8874de060a256c212a5212db8f461d"
  },
  {
    "url": "assets/js/29.8ef0eea0.js",
    "revision": "f8c1a44837de684cf2e48c584eb90d04"
  },
  {
    "url": "assets/js/30.70330b7b.js",
    "revision": "b42024d47c075369120c2518b4f011a5"
  },
  {
    "url": "assets/js/31.c732f99c.js",
    "revision": "a79ae1b422be6a7e11338b51d08c6d7b"
  },
  {
    "url": "assets/js/32.82f301f7.js",
    "revision": "9e84531de6fdae497e77f6ac2685e773"
  },
  {
    "url": "assets/js/33.1bdfc0ae.js",
    "revision": "55b38bc5dcc2c9112183c5ee91d29bdd"
  },
  {
    "url": "assets/js/34.0ff63960.js",
    "revision": "5e92d47489be7be74f3877b0fae8f31b"
  },
  {
    "url": "assets/js/35.b070e79c.js",
    "revision": "6cecb833e686405dcdbb11b5025260a2"
  },
  {
    "url": "assets/js/36.b3abb623.js",
    "revision": "d2642638d6756a23fd4dbb4c849adb3a"
  },
  {
    "url": "assets/js/37.497991e9.js",
    "revision": "231c143bdc53978136c468715e8eef6e"
  },
  {
    "url": "assets/js/38.1f8d52f0.js",
    "revision": "e2cd68fed59629d98b084af1b1443029"
  },
  {
    "url": "assets/js/39.1cc27d96.js",
    "revision": "51938e718eee98ebb0ce48dea44e6771"
  },
  {
    "url": "assets/js/40.d9020a8f.js",
    "revision": "ceb871f6f47003bbbf82100edcc8367e"
  },
  {
    "url": "assets/js/41.364e70af.js",
    "revision": "e1a36c31b4e6d6703ae610ec6d8a0659"
  },
  {
    "url": "assets/js/42.5c313b9b.js",
    "revision": "4a09f908fd817d560a708fe245f4b991"
  },
  {
    "url": "assets/js/43.1e863d1f.js",
    "revision": "06d4f40a87a13dea9aa097a9a151b299"
  },
  {
    "url": "assets/js/44.3c089c12.js",
    "revision": "25600136cba4d2426b0aa224b5ff2665"
  },
  {
    "url": "assets/js/45.12fb9aa6.js",
    "revision": "25688fb8d6502c15f2bad1d2432f591b"
  },
  {
    "url": "assets/js/46.91e2aa99.js",
    "revision": "af9aa632e39eb510a66c766a63a5cb48"
  },
  {
    "url": "assets/js/47.bd2e7438.js",
    "revision": "d1edde90f68777ecc91bf2a95e153517"
  },
  {
    "url": "assets/js/48.cacb4dc9.js",
    "revision": "a3325061bf35fc5c01d6cfbb69163dff"
  },
  {
    "url": "assets/js/49.89126764.js",
    "revision": "7208c238db8dd38b9511f652b14f48a1"
  },
  {
    "url": "assets/js/5.c130cd51.js",
    "revision": "10543c8f68b007a1a25785f9d29ad201"
  },
  {
    "url": "assets/js/50.2d38d4af.js",
    "revision": "684016c17a1c2baffa07af7284716941"
  },
  {
    "url": "assets/js/51.a052e416.js",
    "revision": "4a59c0b64c9c781bda9f81080b01f63d"
  },
  {
    "url": "assets/js/52.d169699a.js",
    "revision": "fb7c34567446474307b73f78657886c5"
  },
  {
    "url": "assets/js/53.4fd8a5f8.js",
    "revision": "3c08ad8903d536050eb89bd0b67607b6"
  },
  {
    "url": "assets/js/54.abca1538.js",
    "revision": "1429cf8d9e5f1d9f23b42d8419d4dc35"
  },
  {
    "url": "assets/js/55.d5e5315d.js",
    "revision": "197428466da50a5fe1c706bb7a70ce39"
  },
  {
    "url": "assets/js/56.48034086.js",
    "revision": "30fa2b61f4d7805bc94012aed53b52de"
  },
  {
    "url": "assets/js/57.bac6d1ef.js",
    "revision": "cf1030b9a6442e3029a7f3794d6844f0"
  },
  {
    "url": "assets/js/58.12e1669c.js",
    "revision": "dfac2f6d6c562519ad1b77cc651714a3"
  },
  {
    "url": "assets/js/59.3b6d57d2.js",
    "revision": "04839f6fb774f7dd6bf1c9bcb8450116"
  },
  {
    "url": "assets/js/6.c6c7bcc9.js",
    "revision": "1ac9df91f9edb51559feb0b93b294516"
  },
  {
    "url": "assets/js/60.b628c377.js",
    "revision": "7a5e69bcd434c5b6c3e0f5db75f7b4cd"
  },
  {
    "url": "assets/js/61.151d1d26.js",
    "revision": "66b26b6ef365bf5f07c64b08720046ce"
  },
  {
    "url": "assets/js/62.f209bda5.js",
    "revision": "b4b597aaccc4439054ab27bf67a291a9"
  },
  {
    "url": "assets/js/63.3747ccb1.js",
    "revision": "f8143dadc6572444f2993952d9124a99"
  },
  {
    "url": "assets/js/64.78c44b0f.js",
    "revision": "c69774e72d803faceafb477b5a395685"
  },
  {
    "url": "assets/js/65.c4908b1c.js",
    "revision": "6fee0e5d09f7b7b310c384fa7aa0dcda"
  },
  {
    "url": "assets/js/66.3a6adc46.js",
    "revision": "7aa55faa507bfb7504841d745b4c7b05"
  },
  {
    "url": "assets/js/67.127080b0.js",
    "revision": "3d323aefaaac24db33ef9a90671a86a9"
  },
  {
    "url": "assets/js/68.1b12f24c.js",
    "revision": "ec2098777913a001ed648e972705b555"
  },
  {
    "url": "assets/js/69.e7f4931c.js",
    "revision": "9e17b1066dc10306a01f481b1ea7d88b"
  },
  {
    "url": "assets/js/7.42b57d39.js",
    "revision": "23f2253203e7f5ade0708fd785400e4b"
  },
  {
    "url": "assets/js/70.8c51f452.js",
    "revision": "67f5ef3a1503aa73520d0d86e9a9ab54"
  },
  {
    "url": "assets/js/71.7bba4ac9.js",
    "revision": "661f468a8b97ec3705f58ca45c715f62"
  },
  {
    "url": "assets/js/72.fe7aecb6.js",
    "revision": "947d74fe04d5a176eca7b70fc57f1263"
  },
  {
    "url": "assets/js/73.d30915d1.js",
    "revision": "4710190aa54c3a4d41414b9844ac809e"
  },
  {
    "url": "assets/js/74.ebcf7af8.js",
    "revision": "fee46b34621ff4e78de6cc18265f1d28"
  },
  {
    "url": "assets/js/75.093a8928.js",
    "revision": "c666be06d1444fb554d3e161a83175e0"
  },
  {
    "url": "assets/js/76.b63e6d29.js",
    "revision": "5d282177c11c556446c49af6be6498f1"
  },
  {
    "url": "assets/js/77.aa67d8e2.js",
    "revision": "c60ca0f49399d58d66de45a5af7090c7"
  },
  {
    "url": "assets/js/78.4bdc5a33.js",
    "revision": "bc0f89ee83ddb01bae7a254299c1991a"
  },
  {
    "url": "assets/js/79.6497852b.js",
    "revision": "6a6706907a8a556c25fd81f5348742dc"
  },
  {
    "url": "assets/js/8.004a9f91.js",
    "revision": "87a11afb2fa481f21fd0521d4422ef80"
  },
  {
    "url": "assets/js/80.d8772c44.js",
    "revision": "8200b1476c873853f4b648978814223c"
  },
  {
    "url": "assets/js/81.8eb0b4c1.js",
    "revision": "c39bf9e2a79a88443e964fd646598db1"
  },
  {
    "url": "assets/js/82.4c3a4f7c.js",
    "revision": "34752503e0b0a3c5c9abb0512a51009a"
  },
  {
    "url": "assets/js/83.cd0d350f.js",
    "revision": "dfe903638ff9c1c32c85bba201e9385c"
  },
  {
    "url": "assets/js/84.65daff9d.js",
    "revision": "47e1257752853a0f111b4d2760140029"
  },
  {
    "url": "assets/js/85.1f23f3fd.js",
    "revision": "4bd08d483717d0ef95d9d114a33dbc67"
  },
  {
    "url": "assets/js/9.64ad410c.js",
    "revision": "90c44b931cf058d0c952e712991b2c9a"
  },
  {
    "url": "assets/js/app.d88c903a.js",
    "revision": "db60159be604b57f8148b47da4a2db0d"
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
    "url": "config/index.html",
    "revision": "45df6d41827793b39dd52c9c8cb971cc"
  },
  {
    "url": "doc/index.html",
    "revision": "4b5f7770dadf9f8422293c2b67273361"
  },
  {
    "url": "faq/index.html",
    "revision": "2ce74987436d7579d0d9b2e0ea7419eb"
  },
  {
    "url": "guide/index.html",
    "revision": "9b69ba0f51319b40ac336905967b0d51"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
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
    "revision": "2d0e901f67b56164a261aab994a7032d"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "5afdbc347c2863276deb51d224c4f5f2"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "29ad5e618d98905b038684c625bf8348"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "1e046dee59fa9f3696074a3bcdf8a6d9"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "f78f19daa62acf1ab277d712c76c5f93"
  },
  {
    "url": "planner_gantt_20210504215543.jpg",
    "revision": "2910d450932bd25f50a93276240278b5"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "c66c11279d12b88c3c7ea32edd5fe272"
  },
  {
    "url": "plugin/index.html",
    "revision": "c099149c93fb8ceaaecaebf087d98bdc"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "eac95e054dcdbf4ca1cc18891566fef1"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "e1e2de190521d42515bba3a9574d6071"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "eb1c392e34e6e4b60bd5da91317b6a7b"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "44147906cf3cf58b38ac1cc387175c56"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "111cb44e8d59b818ed66313d1827b8db"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "f10f3d485180648132e7399f722d07ed"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "050f1e0bb68f87177838102b42fc4965"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "5e3b5b94a8cc9b5e80ab79ea4c6c682b"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "6aee8e0303c2dce4f151a8934c8a0b8e"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "734f0f24c729506fd84fa50b2cb04a4a"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "dc0f4207abe5dab0d4a6e566a528e782"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "20c0dfeb75981657c43d2ad0a7bfdb0d"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "3fd2308288faea84eadf52f44add670a"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "5e85051a83f16c309f509f30f9275d06"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "b8bc5d5d2bd2dfedb5096ab1d0367da2"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "35e5f64a846b88c0ef8d52c42ebcf023"
  },
  {
    "url": "theme/index.html",
    "revision": "973d0e14fda979ddc42a95bd2ff2350f"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "24e2c11e18b9f861b2042b6d1b21ed7a"
  },
  {
    "url": "theme/option-api.html",
    "revision": "5c90b8be596f7f1afc30f2ac4145f531"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "4cbe6a6f1c72bf15af5eabee11a81c5d"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "9c7d77a6d54e8c7eb5a58380904e637b"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "cc61f8d7fbcc67bc84694e34bb09a0c0"
  },
  {
    "url": "zh/api/node.html",
    "revision": "db780603fd1649053652406e9c203b32"
  },
  {
    "url": "zh/config/index.html",
    "revision": "62cea661054dca38f035c6a66f9c4750"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "76951f3cbab4134bac061045d7fbad71"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "fc67c5b654914f5c163572e125dde0e6"
  },
  {
    "url": "zh/index.html",
    "revision": "9e227a8b74db3bbb8c4ea1bc6133199d"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "92c1aa4aafcff95eca6dfb7579736600"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "7d4fe1597e35c9096769ecd5378b1ff2"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "8e3488d080803a89c181c40f7ccd085b"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "2e99b6c1297a2d0bf9a154cfb289dee8"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "2f8004a57cc0b3442a4c1731ae88ec0f"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "429d45c26f7811dc740cc940a19a807e"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "e343f482c13bea19cc89c051671919db"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "b1972ae28a711efd16f54397912b8547"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "119b9a530fbf80efb76b152719c9e1b0"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "ce1a4f79b0e13341c7986864c58d606c"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "ceae9fdd5d5a3739cb69c73fe89106fe"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "dde50fa30111253dfaab5214bcdc236d"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "8ec62bcf29d3351398013f3d0e880122"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "7db7dfb0c2f6a8d769f650daa1370c57"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "444bf223903174e4e72c840bc1c762d9"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "1ce56561afe55576a566388418b1e9cd"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "e5224f0651cfb1385d546a912b31be6e"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "2c8a08c450d954c03f8a97ebda4bc2f0"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "64902bb8308f64d1c44cf4e183a202c2"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "203da0826cf99495420e8705b2fece27"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "a80693445f433d8bd4ee8168d2cfc5d3"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "e2ace80bd76fde02d08f44b4438d5740"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "c814f734ad7edc79df5743d3066e34ad"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "c0f548091e454168637b5c83d91d2e08"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "313b01e41ffeaa36347aead7208252cc"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "a2e8089698fa06fe5f1a76c1e16f20ea"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "54977a9658f36799405b546e439f2a93"
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
