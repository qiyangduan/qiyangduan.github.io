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
    "revision": "47ac3cfee204d0f9e257f8d618634cf9"
  },
  {
    "url": "api/cli.html",
    "revision": "639730841fc8f6aa48fe7b468b212f58"
  },
  {
    "url": "api/node.html",
    "revision": "9bc6487658a8b5c48e4eebc0242adb9d"
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
    "url": "assets/js/10.89ffcd11.js",
    "revision": "b829ca43caca556889f7e1ee4b842b42"
  },
  {
    "url": "assets/js/11.630649a2.js",
    "revision": "81a2f0f57c9df7c74434e353e6c23b36"
  },
  {
    "url": "assets/js/12.2032b3a9.js",
    "revision": "9b59e843142ad5a7a24f8ab54e63443c"
  },
  {
    "url": "assets/js/13.77ac099e.js",
    "revision": "76e9d926ce6d8259276773582141b94b"
  },
  {
    "url": "assets/js/14.4fbc7bfe.js",
    "revision": "03464f231dc166339305dc89987945b8"
  },
  {
    "url": "assets/js/15.0cbb191f.js",
    "revision": "c04dcccbff84eb621d0290da103b0d36"
  },
  {
    "url": "assets/js/16.f907bebb.js",
    "revision": "b8c73b9ae0b7c256241fb5f55a9fb018"
  },
  {
    "url": "assets/js/17.ee79c101.js",
    "revision": "e3c9873041df2c432208e6cce5f50a47"
  },
  {
    "url": "assets/js/18.f19f0e5b.js",
    "revision": "efff7fe2068c11b7282c5ac423b1162b"
  },
  {
    "url": "assets/js/19.fa1b676f.js",
    "revision": "63be410834f05c0bb3bf84163a3351d1"
  },
  {
    "url": "assets/js/20.65a137b4.js",
    "revision": "4bc99c56f6f507980f062d274342c8d1"
  },
  {
    "url": "assets/js/21.290c1d0d.js",
    "revision": "1ef3048d4e1a95e811fea50d4c1b8422"
  },
  {
    "url": "assets/js/22.fe55ed88.js",
    "revision": "7892408257ad53eadd795bfa65cfa867"
  },
  {
    "url": "assets/js/23.84162664.js",
    "revision": "fedec3c11e4cd8f58f02f20e9b97b04d"
  },
  {
    "url": "assets/js/24.045ff01e.js",
    "revision": "67890259c574f3311922f06d95949a43"
  },
  {
    "url": "assets/js/25.a04ead5b.js",
    "revision": "12fcb1f60299b73a7f302aea33759be6"
  },
  {
    "url": "assets/js/26.b2f2b552.js",
    "revision": "62a29ac176589bd473b1d827d0bef48a"
  },
  {
    "url": "assets/js/27.11ece7df.js",
    "revision": "d3dc9cc30b9072ea2627250cadc98d04"
  },
  {
    "url": "assets/js/28.fc143c96.js",
    "revision": "8101d771cfc1e3253e321cbaa51649de"
  },
  {
    "url": "assets/js/29.968c28e2.js",
    "revision": "bed196326fe24735659beea52c855b54"
  },
  {
    "url": "assets/js/30.34fa3cfe.js",
    "revision": "9c6b2776778d44fd1c559f789e78c82b"
  },
  {
    "url": "assets/js/31.2fb629e0.js",
    "revision": "1e7349c4ca00430c6f5e9349fd09f897"
  },
  {
    "url": "assets/js/32.90687716.js",
    "revision": "e19025b407f8c3d89ee188a8834da223"
  },
  {
    "url": "assets/js/33.cce2cb71.js",
    "revision": "ec8e3330f4b6a19eee2e287057e8ef5f"
  },
  {
    "url": "assets/js/34.cc74cbc9.js",
    "revision": "111adcbbedf7a07bce937aee80c34982"
  },
  {
    "url": "assets/js/35.60a00c6c.js",
    "revision": "8d0e1b57169a1050a4da88949f2f139b"
  },
  {
    "url": "assets/js/36.31429282.js",
    "revision": "151b0e7c10c02e790dca71d6932a292b"
  },
  {
    "url": "assets/js/37.f5de3a77.js",
    "revision": "71583711f859e0e51978e8a209610b6d"
  },
  {
    "url": "assets/js/38.cd032016.js",
    "revision": "ca4b3dfc383a2a23e1c65fffbd742f48"
  },
  {
    "url": "assets/js/39.89970e4d.js",
    "revision": "304bde741b4b80f1f4676a9074dc4ba3"
  },
  {
    "url": "assets/js/40.93791831.js",
    "revision": "098dcfbf55f5c791764975aad6a1d933"
  },
  {
    "url": "assets/js/41.a2fa69fa.js",
    "revision": "2ce267c142a08c41093d0a5d7128b5d7"
  },
  {
    "url": "assets/js/42.a9859bff.js",
    "revision": "fcbafb7be7762196cfe9bd87246d55e4"
  },
  {
    "url": "assets/js/43.01774827.js",
    "revision": "67c631f6276836e3f911c2dc63d46899"
  },
  {
    "url": "assets/js/44.b6f58422.js",
    "revision": "87397296a2f5727b66f311c2f7159179"
  },
  {
    "url": "assets/js/45.87b22cc9.js",
    "revision": "920b9faca8f8ac761cc7850f775a8c24"
  },
  {
    "url": "assets/js/46.17cb4789.js",
    "revision": "b2dbad90f504248293ddc2e158743481"
  },
  {
    "url": "assets/js/47.5695e65b.js",
    "revision": "f62811a35477f7f2b5ab1c2f0e05c74b"
  },
  {
    "url": "assets/js/48.f3c0960c.js",
    "revision": "f1b30af8356fd6912d33915567f1deb9"
  },
  {
    "url": "assets/js/49.cb2510d9.js",
    "revision": "5153c1dda6325ba49cd32013d13fca30"
  },
  {
    "url": "assets/js/5.c130cd51.js",
    "revision": "10543c8f68b007a1a25785f9d29ad201"
  },
  {
    "url": "assets/js/50.ad73e0f3.js",
    "revision": "722594eb1615d28e0b989cbe408322a4"
  },
  {
    "url": "assets/js/51.df5e4a5a.js",
    "revision": "556a367999416b4b63299bed6d9e2768"
  },
  {
    "url": "assets/js/52.f3ac1f56.js",
    "revision": "6268c39588154a8a5e1f2820a7c56896"
  },
  {
    "url": "assets/js/53.365aeb2c.js",
    "revision": "9d48042e606bf1235c27d0d66e25ac62"
  },
  {
    "url": "assets/js/54.ffe24010.js",
    "revision": "f11528776268c00acfe1f9e664ac4aeb"
  },
  {
    "url": "assets/js/55.71d56830.js",
    "revision": "fcacd71cb3e6d2e9faee2a6463aafa06"
  },
  {
    "url": "assets/js/56.06c94877.js",
    "revision": "1709570655e7d9c81caf22023af7b781"
  },
  {
    "url": "assets/js/57.8d612212.js",
    "revision": "79f1be86b4984cefea031eeadaaba930"
  },
  {
    "url": "assets/js/58.017316d9.js",
    "revision": "7e811c26ec18d1b5cc23b8d376e76dd2"
  },
  {
    "url": "assets/js/59.2b9ccab7.js",
    "revision": "e5c4c85f12b4600176ee77046f99a4b8"
  },
  {
    "url": "assets/js/6.bce6f558.js",
    "revision": "5f535a99caa8b7ef431375d366329808"
  },
  {
    "url": "assets/js/60.8fd83f98.js",
    "revision": "25672561eac228c84233a52361026131"
  },
  {
    "url": "assets/js/61.9ada4e60.js",
    "revision": "9ea122f6ceccbc571e6b6ade09bb38fc"
  },
  {
    "url": "assets/js/62.6feeb41b.js",
    "revision": "a0193b02f9831289cb220491e75c7995"
  },
  {
    "url": "assets/js/63.3d601e9c.js",
    "revision": "4b931db7be24aa11f9d769b7ce3ca223"
  },
  {
    "url": "assets/js/64.65d28f9d.js",
    "revision": "daee2f84dfaa2ecf8d4e0b6bd6a14e55"
  },
  {
    "url": "assets/js/65.b9dcd411.js",
    "revision": "f0f435fee4dd60c03f9f48918531b589"
  },
  {
    "url": "assets/js/66.517b37d7.js",
    "revision": "9cc1ab67ceaa737a5a85a1a7307cf0b4"
  },
  {
    "url": "assets/js/67.1f0e18fc.js",
    "revision": "948bf567e6ab8ce34ca56f64ad8074ee"
  },
  {
    "url": "assets/js/68.e074024d.js",
    "revision": "83c681eed59827987c9337c70a8b0ce4"
  },
  {
    "url": "assets/js/69.290d787b.js",
    "revision": "36770c0d7eba4198036cb8f80c639838"
  },
  {
    "url": "assets/js/7.b0c362ce.js",
    "revision": "b2a64edf40f578611adb3e5abb05d547"
  },
  {
    "url": "assets/js/70.99aacdb2.js",
    "revision": "ec86f2a5fbaacc5837e4dc9cab96b5ee"
  },
  {
    "url": "assets/js/71.06d202ba.js",
    "revision": "6330620602eb2d7daa94214da0e56e77"
  },
  {
    "url": "assets/js/72.eb623d72.js",
    "revision": "88661e32b6cb78a4bee4f65a62d6b3ae"
  },
  {
    "url": "assets/js/73.d86fbdb8.js",
    "revision": "a8954dfcca409fbbc25c006424b6d580"
  },
  {
    "url": "assets/js/74.9db0f039.js",
    "revision": "b4b4c8545612c4841dd3c671c665d48c"
  },
  {
    "url": "assets/js/75.e75e0df5.js",
    "revision": "c4a74189e181be794800368480ca4e41"
  },
  {
    "url": "assets/js/76.61fbbc4d.js",
    "revision": "d410f2d9baa12cb57ce3517b42bfd05c"
  },
  {
    "url": "assets/js/77.40874cfc.js",
    "revision": "e25f615815cb4ced94a92f2c4039cc11"
  },
  {
    "url": "assets/js/78.71aee2a8.js",
    "revision": "4d7af858b5782836aac84c7f50abaca7"
  },
  {
    "url": "assets/js/79.eeb0a458.js",
    "revision": "cf6b99fa6f6c7f0bdbc21d6ba8f05433"
  },
  {
    "url": "assets/js/8.cc8bb138.js",
    "revision": "64662a41b00c34e65f4e8077e73adec0"
  },
  {
    "url": "assets/js/80.5b080a7a.js",
    "revision": "0e401aa04c900a5fc943df70809567dc"
  },
  {
    "url": "assets/js/81.2c1354fd.js",
    "revision": "dfea7992b774f62e0eb8341dcc8d3809"
  },
  {
    "url": "assets/js/82.8bb00206.js",
    "revision": "62e5b99151ae747f62c8a82bc73139ac"
  },
  {
    "url": "assets/js/83.ff4b83c7.js",
    "revision": "29efe1bc33208edf4b112cf2a37f8740"
  },
  {
    "url": "assets/js/84.36825aa4.js",
    "revision": "0adc62d02729da3e2df9d3a55b35b8be"
  },
  {
    "url": "assets/js/85.741ed652.js",
    "revision": "2d909aada3520e2f03d69193e0f8f1db"
  },
  {
    "url": "assets/js/86.78946635.js",
    "revision": "7a75bfea9940613902c07294d923068f"
  },
  {
    "url": "assets/js/87.2b902a05.js",
    "revision": "2f4d701b2763e193887b4ba123766b69"
  },
  {
    "url": "assets/js/88.36f96cfa.js",
    "revision": "4501d987f72c131312cf5fa1e902dc05"
  },
  {
    "url": "assets/js/9.64ad410c.js",
    "revision": "90c44b931cf058d0c952e712991b2c9a"
  },
  {
    "url": "assets/js/app.5ed1f747.js",
    "revision": "b12597e94bb54fbe9cbf51468201b95b"
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
    "revision": "3bdd2a630e4ddb80988d78bb1e8f16c6"
  },
  {
    "url": "doc/concept.html",
    "revision": "da87d39794722c0a28c2c35b53663f66"
  },
  {
    "url": "doc/design-principals.html",
    "revision": "834716b7c529c87e36b9c5f0e584d50b"
  },
  {
    "url": "doc/glossary.html",
    "revision": "76fac6f5ba951d01674342292c7cff99"
  },
  {
    "url": "doc/index.html",
    "revision": "1156c7b43cdf11dc9c47b217666194cb"
  },
  {
    "url": "doc/install.html",
    "revision": "7d0a1454c9aed609345fe5267e7df533"
  },
  {
    "url": "doc/usage.html",
    "revision": "a32879864d5f02628d40730bb1a2e545"
  },
  {
    "url": "faq/index.html",
    "revision": "d2abb76af8f6a21263889e944f38abe0"
  },
  {
    "url": "guide/index.html",
    "revision": "30f9d44b24b0e9a81899362e9cf43e94"
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
    "revision": "86447f09c47de364da5de686566ccfd8"
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
    "url": "miscellaneous/local-development.html",
    "revision": "49fcec97cf13a8baea5242bb33d0ff88"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "2c75fdff819153678bf805707b888817"
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
    "revision": "4b88aeb79181915272e202f8f7402d8e"
  },
  {
    "url": "plugin/index.html",
    "revision": "560ded3a503c1f877a98de538586ac86"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "b158024735823e6f7005d0ccfc743304"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "a97bc59a585f54efe563304ecbdb8926"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "6429a3ba79ce2102da2fab24069630c5"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "c93556fcfca2cc800278e596cb9ea0f2"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "7dc43ac23e4302bdc56d85a65a32178b"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "0bfd6a7a1802ad7ab67651de90524d4b"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "07c9314cf86c1ee9f44435cf3bc73a94"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "e4d7962bc3cdba5aa085b9deaed63ba9"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "e2cd6af50da28150a24a8e9753e81733"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "bfdc2ba3edf593a72f5cda622c3a04a6"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "1cf5e46bf93ac3077f325bffcc740bfd"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "b92732640792f36e9b049d31d9265d09"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "0ed3283a1f5180986cad255e3742ac5c"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "f39a46ac3f200a9fac22056889f5dbbb"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "8bea38d5f7b9b134664822aafe59ce83"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "0adad575c356e88f08aa8d28fbc8ed12"
  },
  {
    "url": "theme/index.html",
    "revision": "7e20b9cc91688192ba43d3c4f4fd7e93"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "bdc3c6da26b239d0ac1a61ac372f544e"
  },
  {
    "url": "theme/option-api.html",
    "revision": "cd516b0824de91abaa408e9dc44ab1c0"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "d986cd6be9502a97bddc72da4578c00a"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "ec6e54d21291e7e56a78a42ae27e3abd"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "a333544978d0ec5187e37f0d708630cf"
  },
  {
    "url": "zh/api/node.html",
    "revision": "03c20276cc18da094fdaee223514ae98"
  },
  {
    "url": "zh/config/index.html",
    "revision": "27c1085652ea6791eb5954fd90064051"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "a5ed862e60d7161e3c027d4c19b2daaa"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "9195be7c7d18403ff25cf55ff0b06750"
  },
  {
    "url": "zh/index.html",
    "revision": "aa9a59722fb789b2d24530eacf405155"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "2b3a9737abdafc647f0558280c3dfd83"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "635839eca7e85a055552a1a8b8f8535f"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "b0a9b7fc2134c774b52b3ca9d581abdd"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "fc1c6af5862c77686ef8a9e33fc1abba"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "1d7e8e29b460e38178e84ac6697cac95"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "0622a3df911514e79d4c69a60a024fe6"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "5b147b66db82a9a4f7e99f56eaf59ecb"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "3c486cee09ce3bb13b77e24f66aae699"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "a0db401e9d27c3cbe67f7fe1810b5432"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "1106ff43447aee7518c73185e5f3d69c"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "12db594dfa6a0e15d7a7e85e6c6889f0"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "c19234ccf6a4f8fd315121e34699e45a"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "c8091ac110b5ae05405c09eda13a7af5"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "3c41c4d6707045882db0eff6f6726588"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "0222ca81281d56eba98bceb704c7bb8c"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "b0c28f3ee54e12aef320f8c0419457c0"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "0af2347045cdaaba366cb538d3f7a7c2"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "8d04e1fc6a33609f737aff33d955759e"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "15334e6af5456aefb192cd65310450cf"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "a21dfa1efb3f4626036ea1ba22d934ef"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "c9a14742505f5cc1ac6e0aa0eba06c4a"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "690de5e60ef7cca9cfd002677884875e"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "adef76448b4c710ca48ea318dd4c4776"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "3c45e462cfb45deb09111a86f516008e"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "ce237bfa45601129916a4f6c203427f1"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "857a4d4dff56354b97f1ffaef69e38de"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "0755ce6a7551f97329291ac24cdcbe15"
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
