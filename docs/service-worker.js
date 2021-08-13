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
    "revision": "fb4c9738395cea5bbe5d0ec85c2be1a3"
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
    "url": "assets/js/18.9bdebc55.js",
    "revision": "0679a505986dc950b4fa941a61646263"
  },
  {
    "url": "assets/js/19.ccd29678.js",
    "revision": "95c39285a18194dc4e25f5caec9f7793"
  },
  {
    "url": "assets/js/20.9f5c7732.js",
    "revision": "e56bca31ab87093879fbb28d42242279"
  },
  {
    "url": "assets/js/21.f36ab6d5.js",
    "revision": "e997f1800f9f05d45527779ef59c4c83"
  },
  {
    "url": "assets/js/22.78434057.js",
    "revision": "c7211785adb3eaab143428d7bcc391aa"
  },
  {
    "url": "assets/js/23.5785b4c8.js",
    "revision": "f0948b9508f294cfb4b6159a43b03aa5"
  },
  {
    "url": "assets/js/24.aa18b865.js",
    "revision": "1599c843605bd6ad228e84cd1bb1155e"
  },
  {
    "url": "assets/js/25.752724d2.js",
    "revision": "66b4693041e236f84b2a211ebd1bb90e"
  },
  {
    "url": "assets/js/26.06bd3f45.js",
    "revision": "6af73ca84a2b5c7eec7213b6ae9731a8"
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
    "url": "assets/js/33.4d250a37.js",
    "revision": "512ed8c4185aa6b67b4c831adcb6d145"
  },
  {
    "url": "assets/js/34.1b4aa34c.js",
    "revision": "077cccbb60778cb2ab3641f4ab6161cb"
  },
  {
    "url": "assets/js/35.91584d41.js",
    "revision": "b5baa20ebcc328fdb27fc0dbc765e8c8"
  },
  {
    "url": "assets/js/36.37ed39ad.js",
    "revision": "25abe2eb0e633e25820777e33fdf45a6"
  },
  {
    "url": "assets/js/37.edfe2488.js",
    "revision": "fcaf73453032ebe7c6b07d8598350466"
  },
  {
    "url": "assets/js/38.9ed42be3.js",
    "revision": "a4753b62e0aa5b8d20ad50338b73dc9e"
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
    "url": "assets/js/41.14c9b138.js",
    "revision": "bf3bf1e4dee8a7d9e0d5e22ef0600aa1"
  },
  {
    "url": "assets/js/42.f0bdfc2e.js",
    "revision": "f98e7839e3b7ddb61c658c45e4fcfccf"
  },
  {
    "url": "assets/js/43.c3451981.js",
    "revision": "ddd7a536cd31e8e95eed9b8b976756a8"
  },
  {
    "url": "assets/js/44.df53737f.js",
    "revision": "7ec362550d84813791ec2a5f1990b16c"
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
    "url": "assets/js/50.fd44db53.js",
    "revision": "a8990533a990db678f789a2c59ee7ead"
  },
  {
    "url": "assets/js/51.3fa7a6db.js",
    "revision": "f1cedeec2aa8f5860d441d9f13e0dfb7"
  },
  {
    "url": "assets/js/52.96e67acf.js",
    "revision": "e5154db87a10671242b7a34021e794ae"
  },
  {
    "url": "assets/js/53.a3d4d52d.js",
    "revision": "c0b1929036550730dd00c8d459f11737"
  },
  {
    "url": "assets/js/54.915cb4a2.js",
    "revision": "db08e3d5e5ad5a9e181e1c2cafdae0aa"
  },
  {
    "url": "assets/js/55.7e7e3eed.js",
    "revision": "fe92a735dc8c4afba2072e40580b3c6e"
  },
  {
    "url": "assets/js/56.043d0850.js",
    "revision": "d89f66a9e5145c0981e2403ebca10a17"
  },
  {
    "url": "assets/js/57.e3a70514.js",
    "revision": "38139590b99f78063316c6c806ed9416"
  },
  {
    "url": "assets/js/58.4f7f0138.js",
    "revision": "529b7cf7721fc1f517fc4ffcdaad28b0"
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
    "url": "assets/js/62.2592fc0f.js",
    "revision": "64cfc38257f0c3dd11d05d2377a0f9cc"
  },
  {
    "url": "assets/js/63.c929d9f6.js",
    "revision": "2fdd1e6907615b1565fc839574d70dfc"
  },
  {
    "url": "assets/js/64.59ca5088.js",
    "revision": "0bebe515a02b90cf53b2b86b7262524d"
  },
  {
    "url": "assets/js/65.95d693a6.js",
    "revision": "ec5ba57d7b2b93715d625eb3b9017c27"
  },
  {
    "url": "assets/js/66.54478502.js",
    "revision": "dbef47f141642dac72e9db4ae69f9217"
  },
  {
    "url": "assets/js/67.998a0cc5.js",
    "revision": "d7a6776906570698fe672fc7ab2dbc25"
  },
  {
    "url": "assets/js/68.299f50ac.js",
    "revision": "e832cf5058701806fbc5dd1e2346abc8"
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
    "url": "assets/js/70.a3f1cbfc.js",
    "revision": "757b64ff5837e388b046fd8e200e76f5"
  },
  {
    "url": "assets/js/71.b70a2db0.js",
    "revision": "426ff82099da50bd6eb7c529b70c091a"
  },
  {
    "url": "assets/js/72.5af8c6f4.js",
    "revision": "b4f96e7f685add9f74b1a3078f1fe4e5"
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
    "url": "assets/js/80.17632868.js",
    "revision": "26e025f7fd6b340d55b2cc0864cb4037"
  },
  {
    "url": "assets/js/81.641e13cf.js",
    "revision": "79ec3bc358315fa3f053eaa893c3a6fa"
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
    "url": "assets/js/app.936b4412.js",
    "revision": "8a0f3dea071161a28363c2b43380df89"
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
    "revision": "5b4a2017ad9accac664da1fc544ccdd6"
  },
  {
    "url": "doc/design-principals.html",
    "revision": "c9458c296ccae8f097c2efab9d13c472"
  },
  {
    "url": "doc/glossary.html",
    "revision": "a5fffc426b0314c06e372c8b030f945c"
  },
  {
    "url": "doc/index.html",
    "revision": "4c54a4f262e4f2c29a259872d36b80a3"
  },
  {
    "url": "doc/install.html",
    "revision": "4cc1393b408f4fa9a9823889fafea28a"
  },
  {
    "url": "doc/usage.html",
    "revision": "55e7ab3cfd92408e78cb83d99d11759f"
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
    "revision": "728fc5ef2eabeac4bafe87844a8ca5ad"
  },
  {
    "url": "guide/index.html",
    "revision": "a2bdfa7254c57b5ffb35cfcb6b13cc85"
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
    "revision": "b2b6b35cb6de2c69dc1a69685fa1d6e1"
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
    "revision": "d231293761bc2ed467a73ec80d3052c6"
  },
  {
    "url": "plugin/index.html",
    "revision": "354bc5f50eb9e803b91f8323173ad09e"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "1d4280ef4ecdfe7a2eda1d0fe70d68f5"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "81c6b31e181000a89b9b630b2a1a5b47"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "20bbde2040af8cad8c236254c9115040"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "38400bb868d58d95b3fe2428aba90188"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "924a6eee330d924de95d9706abeba334"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "e8a19d55bbf2b2a35e9bb055312657f0"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "27ba63ecfc98f33a53f661ab9c1dbdd9"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "7284087fd7aa73c638d6834e323555b7"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "6b0332d0d3da0d40ac21cd2b159d0e70"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "ddc28caf5a6a2157fb154adbd459b2f3"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "32e02bbf144ce9dd43e556ecbaabe078"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "cfd7c3f62243f2bfc9c22633b6c47cb7"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "526d259ef8e35b5fdff1b9297531e9cb"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "b51e65535c3c094706628299a7a60f91"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "f5d0e14488c0a9afcf14ffdb246e2f1f"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "f3d9d9b381f02e14dbfd77e16c3a95d9"
  },
  {
    "url": "theme/index.html",
    "revision": "29b971546ce2f06052afee560d1f8caf"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "9d77a982ff7dceb69d62b4edafca9cda"
  },
  {
    "url": "theme/option-api.html",
    "revision": "7c3b7fd095725b9b3a2556a17d03abc5"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "dc904dd2a9f9ade2048d3c9b60a16fd5"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "1655300793eb5c11efc90e880e870173"
  },
  {
    "url": "zh/doc/business-rules.html",
    "revision": "d876c376bcbc72c3ead6fc5dc9f70684"
  },
  {
    "url": "zh/doc/concept.html",
    "revision": "79279db222f995250a5725a6ddc65f28"
  },
  {
    "url": "zh/doc/design-principals.html",
    "revision": "a0c73baa4341f3e31a51339e7bf5d8c4"
  },
  {
    "url": "zh/doc/glossary.html",
    "revision": "b793b341936b49424dad445ee6aee0f2"
  },
  {
    "url": "zh/doc/index.html",
    "revision": "75730ceb952db02176395482beecf3de"
  },
  {
    "url": "zh/doc/install.html",
    "revision": "ef6b4b51d56735205d54676c4b293577"
  },
  {
    "url": "zh/doc/usage.html",
    "revision": "e36bdfaf3602c63f159188504860170c"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "af61611b9349221d3f5d9b961c72cc8b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "bf5a3aaad199724b5460de53c6ddf14a"
  },
  {
    "url": "zh/index.html",
    "revision": "a96fddbadfbf68d0f28d4496424d6710"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "c8e85ad976939f3c244cca217c82b0e4"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "a65c148eace3a78ed5bf49be76ecc0b0"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "6657dbc6ea79ac4ef7e0d0b68d0e7b29"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "9891398b193c41c3b21e3fbe1c3fe0ab"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "e1b52c51f35145a04f5e55b48e620376"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "bd1320a50ac1eb01aad57a5c5184592a"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "d7eb44330eed081e921067b09ca3fb1c"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "6d31740ec89e9659def1fff89a796240"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "9b507cd67f41d4c474d64def50de477c"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "4c6f22370e64a5a9cc7d346ec29a13cd"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "a9a59132fbb3261b1b2244ecd1343dbb"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "8f9b9edf6f3b3c5d4e6e0d7507ef2dfb"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "44f91140aff11b93b03a37340082b5fe"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "447a0c99469d54bc8f5fe0e64c9d38eb"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "70c8594c3c6af8b97fc34a03e0d8bd77"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "5ef46e82a4421f0f09047f81b5f42b01"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "d880402ae6921cc4558f20059db366a6"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "41d5928278d32367c9c4e03fb5a771dc"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "6dc6b8f9dee329290199630434948639"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "f6daf4d7069d4245ca6c8ebf4791a1f7"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "f1d15db6baad923bc4e2665b70a3f3f7"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "07d55e28ac63a2325234248acf4913d5"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "32e2e4b5b43433c27a42845d45e6ab14"
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
