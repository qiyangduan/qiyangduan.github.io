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
    "revision": "3b53365654c93e32404dc71b7e92d29f"
  },
  {
    "url": "api/cli.html",
    "revision": "b0b8a3ab52e39059518f2bedc08a373a"
  },
  {
    "url": "api/node.html",
    "revision": "bef5d7bfb4a5d5ee60d2d9c239e1af4e"
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
    "url": "assets/js/19.ac88879b.js",
    "revision": "e2852ff3c0b357327842aa81e1e5191f"
  },
  {
    "url": "assets/js/20.06a09b95.js",
    "revision": "e14796a25fcb8e75132f3922e803c363"
  },
  {
    "url": "assets/js/21.b0946af2.js",
    "revision": "c9507bbdf7e5758020c6c6636d56ff7f"
  },
  {
    "url": "assets/js/22.bb880e39.js",
    "revision": "018d15485d1e18dc7fbbc8a4d72087bc"
  },
  {
    "url": "assets/js/23.593410bf.js",
    "revision": "ed4cc0c8ac838fa6b8b4dc2c1886d7bb"
  },
  {
    "url": "assets/js/24.f9f6bf0e.js",
    "revision": "3894690e6e0e71966d6e9191ee13042a"
  },
  {
    "url": "assets/js/25.9ac36afb.js",
    "revision": "5a80ff7ae538be1733029ac505e3f74c"
  },
  {
    "url": "assets/js/26.a5d2aa04.js",
    "revision": "f20f7fb5d0ad240c52c51d81c9b21ec4"
  },
  {
    "url": "assets/js/27.ecf70274.js",
    "revision": "b00887690dcd40022c1c7802bffc908d"
  },
  {
    "url": "assets/js/28.ef5b6ed3.js",
    "revision": "6d8874de060a256c212a5212db8f461d"
  },
  {
    "url": "assets/js/29.e1852ad1.js",
    "revision": "19c4c2c9a7b50adad5736cfed9216f07"
  },
  {
    "url": "assets/js/30.4e79b6d2.js",
    "revision": "3e23ec89dd691a6c429db9b47a2d3822"
  },
  {
    "url": "assets/js/31.509081c5.js",
    "revision": "af75cde08405b38c2bec6fe55b9af5fb"
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
    "url": "assets/js/35.46dd1928.js",
    "revision": "d02ad2ddcc5583902eaabaa28156fc42"
  },
  {
    "url": "assets/js/36.6d9bbff3.js",
    "revision": "a8a91b3e6dc16e35daff7ac4612dda71"
  },
  {
    "url": "assets/js/37.e1c217a0.js",
    "revision": "e73a09051fb22690e00d3acda5045e3b"
  },
  {
    "url": "assets/js/38.c12a878e.js",
    "revision": "afedcdb9292359662c69ca82f669b288"
  },
  {
    "url": "assets/js/39.affd26f6.js",
    "revision": "bb234532743fa07183ac950bc6f300dd"
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
    "url": "assets/js/42.5715221f.js",
    "revision": "d6016d63ea7c10068a96c8661a35538c"
  },
  {
    "url": "assets/js/43.26e8f7d2.js",
    "revision": "45bc20c1f3c14406c13418309f8f5896"
  },
  {
    "url": "assets/js/44.182fdeba.js",
    "revision": "91392412e917cf4308489e33729a7eac"
  },
  {
    "url": "assets/js/45.081a5f68.js",
    "revision": "7d480d3012af0c22f79b6ca38b58bbd7"
  },
  {
    "url": "assets/js/46.72b8bfbf.js",
    "revision": "5de9e11c2fb2b800a631f21b6a3cd9f8"
  },
  {
    "url": "assets/js/47.9e4fa275.js",
    "revision": "c53497b44a47ce917c450e837e663e60"
  },
  {
    "url": "assets/js/48.4d72e0fd.js",
    "revision": "29cbfeab7ac603ce0a4047458b33d55a"
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
    "url": "assets/js/50.5d2d0654.js",
    "revision": "2ccaa634711d212685e3128c74d9456a"
  },
  {
    "url": "assets/js/51.4b36fd85.js",
    "revision": "450cd6fd25dc41800859d560e3531607"
  },
  {
    "url": "assets/js/52.4848f7f4.js",
    "revision": "e53f65fe5b966e6f3a56095501e0b2c3"
  },
  {
    "url": "assets/js/53.d3aee1c8.js",
    "revision": "ff388555cd65f3842059807596567bb1"
  },
  {
    "url": "assets/js/54.b2b7f444.js",
    "revision": "4c9268f6806ca84c3a86c54cc514b62c"
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
    "url": "assets/js/59.31df6658.js",
    "revision": "5d17cb868e3d44f928c957f28f7bcdd6"
  },
  {
    "url": "assets/js/6.c6c7bcc9.js",
    "revision": "1ac9df91f9edb51559feb0b93b294516"
  },
  {
    "url": "assets/js/60.194be88d.js",
    "revision": "2f8bfb3b5dc35bc4e854a873dc9d9532"
  },
  {
    "url": "assets/js/61.36fe3e7d.js",
    "revision": "d0d67224dfacaadf83c1a45fa1092a24"
  },
  {
    "url": "assets/js/62.ac1fd1b5.js",
    "revision": "603ac403de2e994666cb5dd9603a5003"
  },
  {
    "url": "assets/js/63.a46f0d17.js",
    "revision": "9755b2bafe8c20727af9a09a703f7982"
  },
  {
    "url": "assets/js/64.fa2338b7.js",
    "revision": "ce7c0b9711d18e40370e7e1b49f3363f"
  },
  {
    "url": "assets/js/65.bad90caf.js",
    "revision": "e4103636e89de99e699b0a4d2fda5c02"
  },
  {
    "url": "assets/js/66.a80ba0cc.js",
    "revision": "ef301297e13eab91897f30f9aadc28d6"
  },
  {
    "url": "assets/js/67.e2b343c9.js",
    "revision": "c45f902c4fce415c66db885dcbf07dab"
  },
  {
    "url": "assets/js/68.c2b618fe.js",
    "revision": "0621e2bc667ad56b7da078cb6c9bbf97"
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
    "url": "assets/js/70.680d1d10.js",
    "revision": "01cf61a5b1b305f3567bb1ec8714531b"
  },
  {
    "url": "assets/js/71.7bba4ac9.js",
    "revision": "661f468a8b97ec3705f58ca45c715f62"
  },
  {
    "url": "assets/js/72.9d65596b.js",
    "revision": "90afdaed45f5a05f013a09206178faeb"
  },
  {
    "url": "assets/js/73.d30915d1.js",
    "revision": "4710190aa54c3a4d41414b9844ac809e"
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
    "url": "assets/js/77.ad1f35c0.js",
    "revision": "df48bb500c9d1e88f1df252a00ce5062"
  },
  {
    "url": "assets/js/78.1c703e87.js",
    "revision": "4768bcd48d11edc754ef3ab2fd907a1a"
  },
  {
    "url": "assets/js/79.051ab828.js",
    "revision": "531f5f0d2a2e42ca5024d7c914676ee2"
  },
  {
    "url": "assets/js/8.004a9f91.js",
    "revision": "87a11afb2fa481f21fd0521d4422ef80"
  },
  {
    "url": "assets/js/80.2b06d485.js",
    "revision": "1bdd4c234ea3cf2d53eddb67f9c864b5"
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
    "url": "assets/js/app.e0999b43.js",
    "revision": "146f24e0b745a29a07ebb94740096ea8"
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
    "revision": "93cc988afea1d302f9f18b9b08cd634a"
  },
  {
    "url": "doc/index.html",
    "revision": "71ec1125f592acc368b175086c7c11ee"
  },
  {
    "url": "faq/index.html",
    "revision": "a7866f2b3d41038736e0ea84a7ef7138"
  },
  {
    "url": "guide/index.html",
    "revision": "ca6afc7f30fe30cd60813048b80e833c"
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
    "revision": "fed97746fe0232d57c85424d777ad0ef"
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
    "revision": "0680e77c98b1cec8d487080935eeac1d"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "1652b1793f5d9015c2061fa964f46af1"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "4caaba32d0756fc0d7860f6ddca9d0bf"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "fa1e2b058411604527b78e3a7e1a6059"
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
    "revision": "148d62b36213c78a447272e9e455ec64"
  },
  {
    "url": "plugin/index.html",
    "revision": "88b6b089d1a53eb47e8e12aac8c36ee0"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "3aa5498cd95e3802e4041c05481ee31b"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "d630c18083cf6c010c63ffcc02da06ea"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "a9eb68d13900b49627aa2726f968702f"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "602288cad82f9983b716c4347a9f1e48"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "f772955e8b53faf0a2a0cd2d7e6735ea"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "540884e9dee2e847761ea14f205f8e57"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "e36c0aa88b58e35b8974de0b13794765"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "4e64a23bbd1face2a98e3a15aaf108e1"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "07bc61500fc2bce67972c8cf4ecc86a3"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "66cd5239b5545fe916479f9cce78ec1b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "5506a6da5c248bde4a2302e620901340"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "eea69e50aa555c8786b4c8da556c0482"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "7fe847a5361f0b113ddd25c56566a96c"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "68c818cf9548c62381a4318aff4da9e4"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "f25bba8cd483ee6dc0dd378e5db2bba3"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "083e8dc6ce5bb7fee75119314c30d7b0"
  },
  {
    "url": "theme/index.html",
    "revision": "6839f51d7bf38c04abe9327c3eeeabc2"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "64a8c69f7eb8ef12058ee264f01bd2d0"
  },
  {
    "url": "theme/option-api.html",
    "revision": "13c924ed15ed88f8adda865e5bf68e99"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "9e39b5fc086b2b0aa327b715f31afb05"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "f7c59bcff138c11fb79dd2879e74c75c"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "53cffc5eb4976576965dcac24b0504dd"
  },
  {
    "url": "zh/api/node.html",
    "revision": "42d793034cf773132546477b9450421c"
  },
  {
    "url": "zh/config/index.html",
    "revision": "65f716e7ee01159a3473777756bd8692"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "a80c913c9f2180d8e7d7ebaa68d265f6"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d87e69237ce6047cc4a0ac4566d13607"
  },
  {
    "url": "zh/index.html",
    "revision": "69490bbfa62690ae22f17f406040ddfc"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "33e99eadd9233d6d81c6e15ee67848e3"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "4d0bcd77c57a1c9be3910369d5e54cb7"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "56aa4aaa3fdd2b2a826ddf850618b3d9"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "4aa5b8747a63869c73f6cf557b78ce43"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "f9299f23cdeefe0309d8a7b63f13b735"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "a920b68c561e718f0f103381d1a62db0"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "416c0486c4ea022f82af640a1fc0af1f"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "f3ec7be415cf5450e500252e143fb430"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "5dbce3aaf1c252e452e2f0cbf9eed940"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "84b44b59297e2e15e0c470cd47d3ba22"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "33bd779429e14553ee5523b5aeed69e9"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "3a7752a2a16951c967b7cabfc14c5ade"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "b4ac07fd1dd4f1a5870ec22fec756661"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "90f667628e353578ece797879ed48164"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "86c7d76aeacb39bca6d42592a6b32dff"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "5726a8e1a0fe460b09721621dafe19f4"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "8542d8cb90fcab74dd40286b7fea14c9"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "18f30dabffe306fab80d027ab8b1909f"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "c439736a6c74780369edf4de1229fcce"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "71d028000cc8b3ef184076cb2f0ee779"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "3b910f02e3321935a76b2e5b29e5ef60"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "9c784ff33c853fa7d781ae2933126c2b"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "a8e9583890eb6585af259cbbf2f50b44"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "3952fff06b4b85753dc3604ff60263cf"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "07e4ff822ff244d514a326b05acd5368"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "5f4a1aecd7c5acbdcbdace5526eaa681"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "1de2b48778dae9c741dad06a6e026a20"
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
