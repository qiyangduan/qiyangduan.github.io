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
    "revision": "3299a17badcc996579ca886e7361a797"
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
    "url": "assets/js/10.5879bc09.js",
    "revision": "3af1fe06fa4404f7d7c23504cb800510"
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
    "url": "assets/js/14.f324dfde.js",
    "revision": "8aa48c9c3f60cc9a8d4db9a67a63e7f5"
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
    "url": "assets/js/18.b9f7fbba.js",
    "revision": "ab4d89183d4cf9aa5d22af2702f94d09"
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
    "url": "assets/js/22.37a27bc8.js",
    "revision": "d0a00cbc1ac677769e9f27c57f6f2a08"
  },
  {
    "url": "assets/js/23.7a50ee87.js",
    "revision": "97893190bcd208be1b1a709466eb0ca9"
  },
  {
    "url": "assets/js/24.e299b867.js",
    "revision": "60e8cc212d6282211ba494d71cbce10b"
  },
  {
    "url": "assets/js/25.6521efd9.js",
    "revision": "96a8118162e76521792eaaf878c69cfd"
  },
  {
    "url": "assets/js/26.4f451e47.js",
    "revision": "2b322495c1ef7902e2b6d707e08aaffd"
  },
  {
    "url": "assets/js/27.6019a226.js",
    "revision": "87a2ab6829fbf936be1308696380330a"
  },
  {
    "url": "assets/js/28.21731976.js",
    "revision": "da6c7e7affd376f9c2cae46ac105b99f"
  },
  {
    "url": "assets/js/29.b2ddf6ce.js",
    "revision": "c9c38aab56ce551878b985654243bca6"
  },
  {
    "url": "assets/js/30.f3947b55.js",
    "revision": "ccfb646f4096edffa7c85e5fcfb5ee69"
  },
  {
    "url": "assets/js/31.ad034500.js",
    "revision": "b0b3ba5cf6ca6b3834f1abeff63c9095"
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
    "url": "assets/js/34.914b70b5.js",
    "revision": "6b68764d664021d54b85aa485186c9f9"
  },
  {
    "url": "assets/js/35.91584d41.js",
    "revision": "b5baa20ebcc328fdb27fc0dbc765e8c8"
  },
  {
    "url": "assets/js/36.6bc3314b.js",
    "revision": "95e68ea7b2c25ce3ff581e8d9b9d60e3"
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
    "url": "assets/js/39.86ff869c.js",
    "revision": "0dfe9599017b04cb32b38c53c4c61d43"
  },
  {
    "url": "assets/js/40.daeefcd3.js",
    "revision": "410e405e97f9a25129b5c59ef75ac9d5"
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
    "url": "assets/js/43.9bbc0e50.js",
    "revision": "68b6e2b87efc064297c732e73259211d"
  },
  {
    "url": "assets/js/44.637ad66e.js",
    "revision": "32b12f694bccbb6dc940789305938404"
  },
  {
    "url": "assets/js/45.bc954e13.js",
    "revision": "3c2bc3658f852ab15ca92426526cf497"
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
    "url": "assets/js/50.c6e9f740.js",
    "revision": "59b98b2fb79c6c15daf9bad5c245450b"
  },
  {
    "url": "assets/js/51.5d6a0f48.js",
    "revision": "4562346409c3061ca081cac1521d9141"
  },
  {
    "url": "assets/js/52.9cddb08d.js",
    "revision": "7ad2f7061ad4be456d315ba8d0d83eb5"
  },
  {
    "url": "assets/js/53.f2722e55.js",
    "revision": "9f395132d706a73d2e06aa4b79b046fa"
  },
  {
    "url": "assets/js/54.dec57df1.js",
    "revision": "01d820bc68967d0a7180d8ce8ba20d48"
  },
  {
    "url": "assets/js/55.7a5d510b.js",
    "revision": "b8b2be2bf7f5fee0225924c4eb2b1a2d"
  },
  {
    "url": "assets/js/56.05bfe813.js",
    "revision": "61e36973a1a9632515255c93a296fa33"
  },
  {
    "url": "assets/js/57.18ad5e77.js",
    "revision": "f4c4740f97cbc154400b9323ee9fa43b"
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
    "url": "assets/js/61.ade77b8d.js",
    "revision": "0a104a75a47fe8d8991d57f7d21ff1eb"
  },
  {
    "url": "assets/js/62.3acafe5a.js",
    "revision": "980dc3fb488977818a680685cfeb7f3d"
  },
  {
    "url": "assets/js/63.a293be50.js",
    "revision": "d4b5903008995cd28da255b2f192458a"
  },
  {
    "url": "assets/js/64.ef4f454d.js",
    "revision": "8be1bfdf03f7a0f4d01567931d20fefa"
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
    "url": "assets/js/69.8264a13b.js",
    "revision": "f49f738e2efd0053339f3f7a7697d08b"
  },
  {
    "url": "assets/js/7.26a00cc8.js",
    "revision": "362488c92161de895e3c3c2f2659a606"
  },
  {
    "url": "assets/js/70.6c0e39ff.js",
    "revision": "ec6ce69c5ebfba9bf1bae0f8b9d07e06"
  },
  {
    "url": "assets/js/71.5da79ca9.js",
    "revision": "0395fd774fe21dfb884d90108ed4c684"
  },
  {
    "url": "assets/js/72.fc8e466b.js",
    "revision": "7716be2c3c327a3595c049c09475b35b"
  },
  {
    "url": "assets/js/73.69898979.js",
    "revision": "a17aa567b2c779d28c36a2095db4c0ec"
  },
  {
    "url": "assets/js/74.81e8c022.js",
    "revision": "c91bc007d3a68a27f91ae31a064c5b05"
  },
  {
    "url": "assets/js/75.94957eb6.js",
    "revision": "6003fd06904cb23e267d4e5b5a20f62d"
  },
  {
    "url": "assets/js/76.171c1df3.js",
    "revision": "91c5e0cc43e7464afab2184dc765718d"
  },
  {
    "url": "assets/js/77.0fc2898a.js",
    "revision": "60d3d71bcb24a1cec34bdc46cf3c9604"
  },
  {
    "url": "assets/js/78.7283b1b1.js",
    "revision": "cdf6d21ebe33ac124fbfffc72643ad79"
  },
  {
    "url": "assets/js/79.53de15ba.js",
    "revision": "4b403b679c134347df8f5e9199455285"
  },
  {
    "url": "assets/js/8.8f266c80.js",
    "revision": "e4281b691751c8ad7c3af145ee31d299"
  },
  {
    "url": "assets/js/80.60cda7ff.js",
    "revision": "9fc5f40645388e7814d6af5a20c8f76e"
  },
  {
    "url": "assets/js/81.40da14a5.js",
    "revision": "680964d032682a311d4e9b06077e2c30"
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
    "url": "assets/js/app.43d5f022.js",
    "revision": "59f6f052dd35c6da71df6f5cf5a7143d"
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
    "revision": "05697ec11195d8ed6bc180fb1b1a4ba3"
  },
  {
    "url": "doc/design-principals.html",
    "revision": "620387378154d1a396c5903d0fb614a0"
  },
  {
    "url": "doc/glossary.html",
    "revision": "0e16b783ffef26fe531cbbe3432608a7"
  },
  {
    "url": "doc/index.html",
    "revision": "50eb523fb7189e54ff920af4ac362a87"
  },
  {
    "url": "doc/install.html",
    "revision": "14b7d6537f982be9b6f998022329f9db"
  },
  {
    "url": "doc/usage.html",
    "revision": "d594eabbe9728dd4cc85a52e55fa3454"
  },
  {
    "url": "faq/index.html",
    "revision": "53a45b97944d032f3cb86aa57a8ee2c7"
  },
  {
    "url": "guide/index.html",
    "revision": "bd916968acef361c2bac25da151e6db5"
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
    "revision": "bf82ad86f352e67430ac67eba15e78b4"
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
    "revision": "938f4b90167bf5213c68366e3a11a29a"
  },
  {
    "url": "plugin/index.html",
    "revision": "36d94504d294ce539f20491c3b180dd5"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "9bc4189ab555bcb938c67c34f0dd3492"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "f57a92c56b0d47b958def31a125589c1"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "046773741769b9e843ac1125502f6b07"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "dea71bec3c1d22232eb655b471d86b78"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "fc641fc1c8b927b0d6fc42ec77e5b277"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "f57e5244bfbf282d1016685ed3eb81a6"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "cb64fa805ebf82b4bcfedf3f6bd219ff"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "6b07736acd207806b10b8fcaae2487db"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "c19a8874edb17de6f6fea1416f264cb2"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "56638316c0aa2cad2adf9d64a75fb02b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "25cb6155f410c96bd0be9e50d6e2d9e0"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "8ad28687cd13f030d9e989ee91a3825f"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "04544944838e306cc485e4bca362dfb4"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "c60a3e4f70b39cda9f7dac2c724a74df"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "9f1ea12ee68e7305a35a31050245dbe1"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "686df9697a4452b5eb0879c2b768820b"
  },
  {
    "url": "theme/index.html",
    "revision": "598a1a6bc8f53dc75a162fcab9e5fba0"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "9143977deef2da638e0bb2e1e8a608f8"
  },
  {
    "url": "theme/option-api.html",
    "revision": "66575de2079cefe6e85aff21048b36fb"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "4e5913089946dcac8c4f28cd88e18b33"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "0f3a6efbca937cf78dc521fc07943b01"
  },
  {
    "url": "zh/doc/concept.html",
    "revision": "920119b1222695593a82451d9f45dc65"
  },
  {
    "url": "zh/doc/design-principals.html",
    "revision": "2f263e782c077917062574fe831da8e3"
  },
  {
    "url": "zh/doc/glossary.html",
    "revision": "14f8d0aad8e51c5e9776ff8db7f93fa2"
  },
  {
    "url": "zh/doc/index.html",
    "revision": "fc707f208db8a4afb167809948cb199f"
  },
  {
    "url": "zh/doc/install.html",
    "revision": "e31e2cd63eb974cb50ac825f5f08b6a5"
  },
  {
    "url": "zh/doc/usage.html",
    "revision": "30645223f63949dce0cd36e1fcc0306f"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "0489fdf43dc339debad1b3b0bbf002b1"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "f3b231f4e5f59d7f98542c642a483901"
  },
  {
    "url": "zh/index.html",
    "revision": "dbc2b533b4dbc50896915dbe9109a4e8"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "0e5023dd9e61a4b967c6b0328b986c30"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "001a2483fcd8ac5da02e389e6586e4e9"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "f1c08336d97e1042ec48bc0f70f68a01"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "129ff318fb0335d5a5bd4e39856a0fa8"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "70602d98307dbfb52073c4aa704b6382"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "08b5d038e22766f5bc2fca1b2f5aa9d8"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "9ac1910736a0c2a5f33b9d4144aec86d"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "8205bface1fc3dd64a11bcf9ef604502"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "ed933defb46e1ed2bfffc92e2f21b82c"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "4df76397da859d124cf620250f6a5c47"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "a845cf653522dad49b97d3d6c960dd39"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "248929b848304157b3f54553de3005ee"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "945ad2e20d21095b67c5493349c57bd7"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "7a0b756233f896ed5a9da750b51d4759"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "37ed3744d10f18c6c1ca8fc9c5a69943"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "4db45d142472fcf8dcf97c03407ef3f6"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "5ecb484b106fe07d56c85107a6e6f805"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "a96178d50298d5cbd9bb641164b2ee09"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "5f0d28c0e3fde5296eabe202226c999f"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "d7b0c67b70f6ca25d393d03aa011ffb8"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "f5acc801ddab145895ec46d309ef8181"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "bc1a725efd8b735f8001f2df4635c52e"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "2e0da89d4884c641b24fed0e2e38aa08"
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
