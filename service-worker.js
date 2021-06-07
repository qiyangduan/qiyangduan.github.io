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
    "revision": "44a99d5bb1733221e3bdb3185c3c37f7"
  },
  {
    "url": "api/cli.html",
    "revision": "78e7616f8c113305458f808d200c608e"
  },
  {
    "url": "api/node.html",
    "revision": "cc5eb70044dd7a548ecc64742210a04a"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.9af3f509.css",
    "revision": "8825b4cb5cb93dc139f55c6077388150"
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
    "url": "assets/js/11.daa813ad.js",
    "revision": "d723620e3c4aa3a76acb70ab5ecb880b"
  },
  {
    "url": "assets/js/12.40f255dc.js",
    "revision": "b5194dc4c65e3da7879a56cfa5628381"
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
    "url": "assets/js/21.45b50eec.js",
    "revision": "7910232271e3cd4e601cf7e81c740dd5"
  },
  {
    "url": "assets/js/22.bb880e39.js",
    "revision": "018d15485d1e18dc7fbbc8a4d72087bc"
  },
  {
    "url": "assets/js/23.541b0c5e.js",
    "revision": "19eb1f4271e913b7429efd85818d7135"
  },
  {
    "url": "assets/js/24.83cb4737.js",
    "revision": "518ea1207b525e481cbdac88e4a217ed"
  },
  {
    "url": "assets/js/25.9ac36afb.js",
    "revision": "5a80ff7ae538be1733029ac505e3f74c"
  },
  {
    "url": "assets/js/26.2556396f.js",
    "revision": "d0ab835f7ae9a92b952989b5abcce396"
  },
  {
    "url": "assets/js/27.a6b1b106.js",
    "revision": "2abea4b2debe6ffa40f9f2a3724de9f0"
  },
  {
    "url": "assets/js/28.712da876.js",
    "revision": "0009467deae93d2062086097a4bac783"
  },
  {
    "url": "assets/js/29.8ef0eea0.js",
    "revision": "f8c1a44837de684cf2e48c584eb90d04"
  },
  {
    "url": "assets/js/30.297a39d8.js",
    "revision": "13a177a38b0f2be2c3b8f28610ce1110"
  },
  {
    "url": "assets/js/31.e87daaa0.js",
    "revision": "9e145bc7cadf87ca6b333432cfb52a5a"
  },
  {
    "url": "assets/js/32.f492a8bf.js",
    "revision": "03387b7bff69bd9299d7929346f4b172"
  },
  {
    "url": "assets/js/33.290b1995.js",
    "revision": "39b37236d4190246cd6a612962252bdf"
  },
  {
    "url": "assets/js/34.a10e0c4b.js",
    "revision": "65f6a349e64912b235ca40c8757461b0"
  },
  {
    "url": "assets/js/35.b070e79c.js",
    "revision": "6cecb833e686405dcdbb11b5025260a2"
  },
  {
    "url": "assets/js/36.1aa55ad1.js",
    "revision": "c8b5de50bab7a8dce3b55c05f25c6635"
  },
  {
    "url": "assets/js/37.5ae5dab7.js",
    "revision": "2dc416652971c614950ed5f9d24fa36c"
  },
  {
    "url": "assets/js/38.c12a878e.js",
    "revision": "afedcdb9292359662c69ca82f669b288"
  },
  {
    "url": "assets/js/39.3e328c19.js",
    "revision": "92705863e06fcef0256fa5d990ebafd5"
  },
  {
    "url": "assets/js/40.d9020a8f.js",
    "revision": "ceb871f6f47003bbbf82100edcc8367e"
  },
  {
    "url": "assets/js/41.6e8abdf2.js",
    "revision": "33c4335efd205c395230b8b5797b05fe"
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
    "url": "assets/js/44.6d29ff27.js",
    "revision": "ff150611aba1e9d7d6579da63a22bafc"
  },
  {
    "url": "assets/js/45.12fb9aa6.js",
    "revision": "25688fb8d6502c15f2bad1d2432f591b"
  },
  {
    "url": "assets/js/46.2c1c0ebd.js",
    "revision": "cd6fc9135a434ead5bbc99831a105318"
  },
  {
    "url": "assets/js/47.bd2e7438.js",
    "revision": "d1edde90f68777ecc91bf2a95e153517"
  },
  {
    "url": "assets/js/48.569e4c4b.js",
    "revision": "9d6caaa3a9fc6f90b9ebcc152cbd0e9d"
  },
  {
    "url": "assets/js/49.e19cfa89.js",
    "revision": "a314b722e8a9959850baf7477bbc3c07"
  },
  {
    "url": "assets/js/5.7e583869.js",
    "revision": "10543c8f68b007a1a25785f9d29ad201"
  },
  {
    "url": "assets/js/50.2d38d4af.js",
    "revision": "684016c17a1c2baffa07af7284716941"
  },
  {
    "url": "assets/js/51.d862b83c.js",
    "revision": "8cb5779bef934bcb3c1898d7407c3cda"
  },
  {
    "url": "assets/js/52.d169699a.js",
    "revision": "fb7c34567446474307b73f78657886c5"
  },
  {
    "url": "assets/js/53.e6d3e7af.js",
    "revision": "cf770f72e1d9ed7784186ca4efea0661"
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
    "url": "assets/js/61.fc1adcf5.js",
    "revision": "7d66684fff3a031dda7c1d6c056f63a8"
  },
  {
    "url": "assets/js/62.c1147587.js",
    "revision": "c9326fbd0caed8b66fc06d87695dada8"
  },
  {
    "url": "assets/js/63.3747ccb1.js",
    "revision": "f8143dadc6572444f2993952d9124a99"
  },
  {
    "url": "assets/js/64.c6275a68.js",
    "revision": "493feb0d49962099fa77841456281a8a"
  },
  {
    "url": "assets/js/65.e271f5c9.js",
    "revision": "26548cdaf6dbd3328ae8612899265a7e"
  },
  {
    "url": "assets/js/66.4b22dd18.js",
    "revision": "872e54b90f9ae5ef2e9cf41b4e189d0a"
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
    "url": "assets/js/69.3caf115b.js",
    "revision": "e089119cfcb8846b81e6326a8dd21190"
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
    "url": "assets/js/71.b78a98b8.js",
    "revision": "054fcb9ad0d1641896f657ea673a184c"
  },
  {
    "url": "assets/js/72.942540db.js",
    "revision": "97376cc61a7832a9e1c08ca955f45f64"
  },
  {
    "url": "assets/js/73.d1c604cc.js",
    "revision": "de367371c9f0b38563cab2da2553ce9c"
  },
  {
    "url": "assets/js/74.6ad36dc7.js",
    "revision": "3b79c2b464c57c097d53d57d32718bcf"
  },
  {
    "url": "assets/js/75.c2e09dc5.js",
    "revision": "a79b237d0ca2a2f0baeabc4a627016bc"
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
    "url": "assets/js/78.69575ed1.js",
    "revision": "02d7eaea03886ca2490c3094ccce2219"
  },
  {
    "url": "assets/js/79.7b219a90.js",
    "revision": "6a016d55c4105b897b2ce40f4a5e2a8b"
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
    "url": "assets/js/82.6fbba10c.js",
    "revision": "34e4126840116712bac3866c9b9ef005"
  },
  {
    "url": "assets/js/83.8c3e2391.js",
    "revision": "5af01ca3c806359a568994b0eaebca4d"
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
    "url": "assets/js/app.81ba9a05.js",
    "revision": "58573533684de79c1760fa75f62fab76"
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
    "revision": "c59bed5a65ee772248e6406df11bb57a"
  },
  {
    "url": "doc/index.html",
    "revision": "a6fac7325d288132592f5520a6cc9c50"
  },
  {
    "url": "faq/index.html",
    "revision": "951f2eae6feb39e08ec2b4b8d5ec4611"
  },
  {
    "url": "guide/index.html",
    "revision": "40aae7afaa2ec8a4a68fbea067932cf7"
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
    "revision": "2395468717f00f323f22b89d8a31955e"
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
    "revision": "f0a5cdbeb5e4a3e117702728ab7957a3"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "c8cc6fc7617df508707123f7299a3efc"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "e15b9154d110f615b1ff549766327c5d"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "303883a4eb87a44c9d4c908bde178649"
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
    "revision": "e2af3a4194e08b27dd63d903c2f9fe84"
  },
  {
    "url": "plugin/index.html",
    "revision": "3f1895814fc7b59c6f44aaf3e506cb2b"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "358c41340a9228c39e7d3400d18e93a9"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "e69e219f82d0b8b9fb5d9e2f0b9c8e41"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "82555612cee92b811e14e2b51a3e646c"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "8eb96fc580e8aac99e7a77f10f842e1d"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "a2b728206c21e59ce24084270b2667b6"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "b584622b8f3a173e32f18d494b789519"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "7d96e9babc210cea963ac720fb00eaf2"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "111443cc25f53e87072b396a6b166cc9"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "0646cc7776617b657019f1f044a954ea"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "dcd57d6139ecd117a42363e67d413e81"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "2aa7c0e44597eafe51bc0284e14588e7"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "6b14c670dcd4687ecd43bb9a4aa2c7b1"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "08f06b83d00ce1e6e01eebc45e4b791e"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "08ca9fd0a23e02990d33a65b160f705e"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "a15aacb8f1c924f5026dff12479e9585"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "3fb5012f313f6c0d6ab87cbfb7e5cb44"
  },
  {
    "url": "theme/index.html",
    "revision": "4c5d39882a721afc4ebde21e6b412378"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "d1c003f6af31461d66f4d6add4a2255e"
  },
  {
    "url": "theme/option-api.html",
    "revision": "3512d1e691d1434495d8cee1c2af6e17"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "c7dbe67e9a228f7b80d828a2c6dd7bd2"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "f234d64cd859d026aa1225aeee8e8e25"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "8a318f438a8cd800dad07d95c652abf1"
  },
  {
    "url": "zh/api/node.html",
    "revision": "e337475f31b261d61775c5543781554b"
  },
  {
    "url": "zh/config/index.html",
    "revision": "c48cff84ac1012d5cc967f001cda42fe"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "8ffb1b7962d3044ccd8b1fa0091a2d4b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "debaf3a35e15962fe8990dbec951e282"
  },
  {
    "url": "zh/index.html",
    "revision": "1c4601bbff7a97db043f1c0945ca45d7"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "03ab0c7f0f83c07b29c3f3caf59caff3"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "499186f2e4e097c4b939678403b3bb5b"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "9fa2cb3b72a7d6b8697c28e98ae49ce7"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "beb8aab7aad9b79b3f16d4d02fc9b45d"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "6813550cef795b648bcdbd36cf753612"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "cb9f39a7db15ff5269fba511341782e3"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "2ddb0e879e9632e4e2b0075d06e2c9b1"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "96e127eac9a659c3bd393e8bb1e57e67"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "e219a684066745c6b42dc82d6b1fadb8"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "89994b863c58fb7f46e279f4e42025ef"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "2b3bfe8c28fcf8760aff553382838bbf"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "81668468d0cc9d3bfe855efd75a69ce3"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "78217aebc46c7ef8dc588d2fad5d1107"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "3c40b47405d4e9457500f97bcee62a39"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "def64616d487ab487c7404f8e60cb7ea"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "ca83b9fe3525e4b343c03f5eccdcfdf5"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "c2737a61e00e97abed59daa48b54004b"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "b6b2fdf79744830365729807f782b75f"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "dcf2181dffbd66a4c3df016ea0d11297"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "8b9ff3c6a481b8516d10aea51842e78e"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "56bf6f8a0941185a7a382da8c9903bae"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "88ae3bd0fff846ee3f8abb45ce2865cb"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "bf98918e1ea400be26bc2eabd9211186"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "3ce40252e2ad73f6d622e884625a1536"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "baca69c2235cc3476ac5a39a8084ff5f"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "c75776706c385aa0ce2db0c8448d7b3e"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "30d4c7c98923a2984ec36ad03ed27206"
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
