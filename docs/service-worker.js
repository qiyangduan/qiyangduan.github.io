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
    "revision": "a2de69d3b1181b2382d9adc35cb8c512"
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
    "url": "assets/js/18.10c566a7.js",
    "revision": "59b52976e11e87dfc6e687051e07bf45"
  },
  {
    "url": "assets/js/19.23b36280.js",
    "revision": "0e008a0ea0a8ff376bb869c7cb708749"
  },
  {
    "url": "assets/js/20.fc019d0e.js",
    "revision": "2aa54a37d0f1efd6ac68255714e68c66"
  },
  {
    "url": "assets/js/21.f36ab6d5.js",
    "revision": "e997f1800f9f05d45527779ef59c4c83"
  },
  {
    "url": "assets/js/22.1441fab0.js",
    "revision": "1deccba2b3cc6a68cd25289698305af8"
  },
  {
    "url": "assets/js/23.464ef70b.js",
    "revision": "6349854d6ca102ba95c473d9063ea17f"
  },
  {
    "url": "assets/js/24.e299b867.js",
    "revision": "60e8cc212d6282211ba494d71cbce10b"
  },
  {
    "url": "assets/js/25.b88d4e0b.js",
    "revision": "a8656292c05d0f09d1f20295bdce2480"
  },
  {
    "url": "assets/js/26.4f451e47.js",
    "revision": "2b322495c1ef7902e2b6d707e08aaffd"
  },
  {
    "url": "assets/js/27.131faeb9.js",
    "revision": "b03e8b37b4042a04f612a9dc7493e530"
  },
  {
    "url": "assets/js/28.15059aa5.js",
    "revision": "0107b953a86a1435f2623c1744b9291a"
  },
  {
    "url": "assets/js/29.41efc7cf.js",
    "revision": "1b7febae1bd86ca72e71b19653686b47"
  },
  {
    "url": "assets/js/30.973a4d29.js",
    "revision": "775875d5e2763f3fa74f3e5d484e347d"
  },
  {
    "url": "assets/js/31.2fef9e80.js",
    "revision": "8c76fda0b458a6a28585c80353854b71"
  },
  {
    "url": "assets/js/32.4edee6cb.js",
    "revision": "0f289daf3a86a143b7e100834694cec2"
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
    "url": "assets/js/35.154f0a5e.js",
    "revision": "1f55b1117a0e98c4fed4e8064b80e336"
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
    "url": "assets/js/38.eeced2ab.js",
    "revision": "d7acb4e3d701e7bf58e892aecc924838"
  },
  {
    "url": "assets/js/39.b181449b.js",
    "revision": "2d9c3012b9f56b1cd2af0f2edce42ded"
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
    "url": "assets/js/45.6dac7186.js",
    "revision": "847cac08f67de716e9cf310abb858342"
  },
  {
    "url": "assets/js/46.779e6d2b.js",
    "revision": "1bc15f88b1efd66a9e8d4c7524e43265"
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
    "url": "assets/js/49.9c2e448c.js",
    "revision": "cd0df9c0cc6d147b605a455ba46fadab"
  },
  {
    "url": "assets/js/5.c130cd51.js",
    "revision": "10543c8f68b007a1a25785f9d29ad201"
  },
  {
    "url": "assets/js/50.856b45af.js",
    "revision": "a21eeb8758bedd8b5a646148eccccb32"
  },
  {
    "url": "assets/js/51.5efc17c2.js",
    "revision": "8476d1410f58599e98619d98765d7878"
  },
  {
    "url": "assets/js/52.3261a459.js",
    "revision": "449afbe1241894a48b66772f8c4d4328"
  },
  {
    "url": "assets/js/53.78ab042e.js",
    "revision": "2104caa7d4ae1cbb2c0de7fc9f9ae06c"
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
    "url": "assets/js/56.3b6f3004.js",
    "revision": "6f4c4705b21c9072b43158eb9eb984b2"
  },
  {
    "url": "assets/js/57.7812c954.js",
    "revision": "2889b1860246f6ac8cc05cf4fd8c4fc7"
  },
  {
    "url": "assets/js/58.6cf37841.js",
    "revision": "55d3a34869ccd7f210932f49a83f8931"
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
    "url": "assets/js/60.7b7e667f.js",
    "revision": "78b09c7cdd3482b971e21520b75e140c"
  },
  {
    "url": "assets/js/61.8eb2f998.js",
    "revision": "48dc2f99ac44502535332825ee0a8a7c"
  },
  {
    "url": "assets/js/62.f9769b20.js",
    "revision": "c16002d498e8958dfd622c6df74f02f1"
  },
  {
    "url": "assets/js/63.5c692de1.js",
    "revision": "fb4121af5331e34bc2d3ad141eb52d97"
  },
  {
    "url": "assets/js/64.1c537555.js",
    "revision": "8062738c7ae5c38796d8976c8a2a971c"
  },
  {
    "url": "assets/js/65.244bf5d5.js",
    "revision": "f3adeb8de2cbf700f71f97f64a1bd6f4"
  },
  {
    "url": "assets/js/66.aac49d5e.js",
    "revision": "b6ec375e9609bd1be3c1b2a7256d612c"
  },
  {
    "url": "assets/js/67.bfa13ad4.js",
    "revision": "da1a9d61fc0de5dd9b832739e029b166"
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
    "url": "assets/js/72.2adc7d09.js",
    "revision": "f6eac2f126a7a2992e978a7cebb7e4c8"
  },
  {
    "url": "assets/js/73.424bf31d.js",
    "revision": "6c26653f58e3d6249eba3ad7140135f7"
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
    "url": "assets/js/app.8191715b.js",
    "revision": "c10cedec0c0e76e6019a586e7a926109"
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
    "revision": "75aecf8a059ab728f0cbf194ce1dd25e"
  },
  {
    "url": "doc/design-principals.html",
    "revision": "419b6a1f61bc5a73e4eb538d133674d4"
  },
  {
    "url": "doc/glossary.html",
    "revision": "21ecb5a502cd6e6f68474ff49dee565d"
  },
  {
    "url": "doc/index.html",
    "revision": "e1c78003ba86e0012f73f44c81b31f45"
  },
  {
    "url": "doc/install.html",
    "revision": "436ad98507ba46c125e69fcd486fddf9"
  },
  {
    "url": "doc/usage.html",
    "revision": "361226cbccda2ffc5858bccea4802bb1"
  },
  {
    "url": "faq/index.html",
    "revision": "cd988a2dadb9c55344914545f375dc9e"
  },
  {
    "url": "guide/index.html",
    "revision": "3423c679ee126d96b3210ccdb509dfba"
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
    "revision": "77647c4e648fc13473fa4a6247710108"
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
    "revision": "ff0d2541c32e69dd11e2ae51818b76ff"
  },
  {
    "url": "plugin/index.html",
    "revision": "ccea8d9234f9c99a372a35890e58a2ff"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "1aa10e420d1cd7f6bc54a6805146d2d2"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "1b68d3ec6673825ef23914e81ab33ff2"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "2921052c02113684fd929631e1d91847"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "9dd98a983dd83c74fe41988102875a85"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "9259155558148a55fc82f5c69729c2b7"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "abc333566d6f44bd71af602b820a295c"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "ec19b4a6284b9e9ed03a6086c87f170e"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "c8c949f4fe33838c69f85efe396d92a7"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "ca4de02e92a1f5f938b51e683972802b"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "e87b2c657fd37aa95b8e6a138831e5d3"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "c770d486236ffafdbef3bc875feba82b"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "fa168ba7345425fef96dfed45b14688f"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "015e120fad8de9ead174341547088155"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "55c5c0bc7211eb369bbb2ec68c9149b9"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "7de53cf8b47ae19348f5ff7e3c913e90"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "0f78be814f62013de58740eca86829af"
  },
  {
    "url": "theme/index.html",
    "revision": "9521cf86d285eeacbb97465c0b6078b9"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "106b1325dfd3970ad90abe732c03573a"
  },
  {
    "url": "theme/option-api.html",
    "revision": "d64100c4a10e033a0390fd5d11cfc99b"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "e9f140301848a4d54805681a23c70d4d"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "36e9663023bc84019e14d8a9f594ef7a"
  },
  {
    "url": "zh/doc/business-rules.html",
    "revision": "5dbfa179a81ef50867527ef97b215021"
  },
  {
    "url": "zh/doc/concept.html",
    "revision": "9e2a7032b2b9eac221905e55f8618170"
  },
  {
    "url": "zh/doc/design-principals.html",
    "revision": "f1747a4976c8f2350ca15cdb5a6cc65d"
  },
  {
    "url": "zh/doc/glossary.html",
    "revision": "436aa6acf4cb1c47134acad7be195e22"
  },
  {
    "url": "zh/doc/index.html",
    "revision": "1f0f6a2650ecd55a1dc155d46269a3ab"
  },
  {
    "url": "zh/doc/install.html",
    "revision": "cecabeba4d8c5a89a686e06e41d3fad1"
  },
  {
    "url": "zh/doc/usage.html",
    "revision": "04db93480ffa865cd7a639f29cd0314d"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "67252a6aa88a3c237659ee179ed69ad6"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "857406b9d94c844e01f7d31585c5a416"
  },
  {
    "url": "zh/index.html",
    "revision": "f4b0f5b1b2e3f43d41279ae675453f4f"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "79122ffa6b4067b983b8b6c536d5696d"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "9845e0f75daddf05f31efe584a505d92"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "82d4e06658ac84afa25feae893bdab10"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "851fe828e3262cc725327bbbd37c0414"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "c7806adc82ba48ab3278d6756e8fc2f8"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "4ed16a21dcfaa533e64f4fab14f4ea88"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "3f9f41928bcb3c9fb9920b82389d54ec"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "bfd843489074588185e4bf061064c77e"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "168c6987b826b48e144cc4183b142e2b"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "0d41cdafd1d920f75d9b954a68a09024"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "b7bdc786c3d9cdb119134d4d4cf834bc"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "7ad241016b5e7ce4185ffb1022fe2754"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "cb6dfaae0a5339e057cc7531ad5db85c"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "158a53067f21411182de9d08b1275c8f"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "82e521178d5ab8d07faf1428a6073e93"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "f4f007c57df5eecb8d3465244eba5a82"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "8751d10e6b262f18884d8cd1db9da686"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "f0b811f2d3861faabd78a22b39ca069c"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "c8d5ec3d557eaf9dccb2d5f3755ad8e6"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "751a28ba6d690b82b5c1b75706874027"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "498305f4168d3ab5aee68a9ec276c611"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "c4390bdf39a884300c4c7d709c250c6e"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "59839fce9d8754cb4cdc501f7819777f"
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
