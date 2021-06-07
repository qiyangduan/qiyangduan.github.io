(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{418:function(t,s,e){"use strict";e.r(s);var a=e(15),r=function(t){t.options.__data__block__={flowchart_382ee23f:"cond1=>condition: 用户的 ssr.html\n是否存在?\ncond2=>condition: 主题的 ssr.html\n是否存在?\nstage1=>operation: 使用用户的 ssr.html\nstage2=>operation: 使用主题的 ssr.html\nstage3=>operation: 使用默认的 ssr.html\n\ncond1(no, right)->cond2(no)->stage3\ncond1(yes, bottom)->stage1\ncond2(yes, bottom)->stage2"}},n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress-1-x-的设计理念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-1-x-的设计理念"}},[t._v("#")]),t._v(" VuePress 1.x 的设计理念")]),t._v(" "),e("p",[t._v("VuePress 1.x 的设计理念主要体现在以下几个方面：")]),t._v(" "),e("ol",[e("li",[t._v("插件化")]),t._v(" "),e("li",[t._v("约定大于配置")]),t._v(" "),e("li",[t._v("合理的优先级管理")])]),t._v(" "),e("h2",{attrs:{id:"插件化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件化"}},[t._v("#")]),t._v(" 插件化")]),t._v(" "),e("p",[t._v("VuePress 1.0 进行了大范围的重写，其中最重要的就是引入 "),e("RouterLink",{attrs:{to:"/zh/plugin/"}},[t._v("Plugin API")]),t._v("，那么插件带来的好处究竟是什么呢？")],1),t._v(" "),e("h3",{attrs:{id:"解耦"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解耦"}},[t._v("#")]),t._v(" 解耦")]),t._v(" "),e("p",[t._v("有了插件，我们可以将很多核心功能用插件来实现，你可以在"),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core/lib/node/internal-plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到很多内置的插件，这些插件涵盖了很多 VuePress 的核心功能，在以前，它们糅合在代码库的各个地方，但现在，它们一目了然。")]),t._v(" "),e("h3",{attrs:{id:"配置的管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置的管理"}},[t._v("#")]),t._v(" 配置的管理")]),t._v(" "),e("p",[t._v("在过去，当我们遇到一些不太常见的需求时，我们会有一些疑虑：如果我们打算不支持，VuePress 的使用场景也就受到了限制；但如果想要支持它，我们就必须将其写到核心代码库中，并为其单独开设配置的 API。对于维护者来说，除了不利于长久的维护，这有时也会让我们心力交瘁。我们必须想到一些更好的解决办法，没错，这个办法就是插件。")]),t._v(" "),e("h3",{attrs:{id:"vuepress-config-js-也是插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-config-js-也是插件"}},[t._v("#")]),t._v(" "),e("code",[t._v(".vuepress/config.js")]),t._v(" 也是插件")]),t._v(" "),e("p",[t._v("没错，你的配置文件也是一个插件，因此，你可以直接使用插件 API，而不必为此新建一个插件，然后在配置中导入它。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[e("code",[t._v(".vuepress/config.js")]),t._v(" 所支持的 API，实际上是在插件选项的基础上又新增了一些特定的选项。")])]),t._v(" "),e("h3",{attrs:{id:"theme-index-js-也是插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme-index-js-也是插件"}},[t._v("#")]),t._v(" "),e("code",[t._v("theme/index.js")]),t._v(" 也是插件")]),t._v(" "),e("p",[t._v("主题的根配置文件也是插件。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("和 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 一样，"),e("code",[t._v("theme/index.js")]),t._v(" 所支持的选项，也是在插件选项的基础上，又新增了一些特定的选项。用一张图来表达它们的关系就是：")]),t._v(" "),e("svg",{attrs:{viewBox:"0 0 2806 912",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("desc",[t._v("Created with Sketch.")]),t._v(" "),e("defs"),t._v(" "),e("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("rect",{attrs:{id:"Rectangle-3","fill-opacity":"0",fill:"#FFFFFF",x:"0",y:"0",width:"2806",height:"912"}}),t._v(" "),e("circle",{attrs:{id:"Oval",stroke:"#979797",fill:"#EC5975",cx:"1212.5",cy:"455.5",r:"355.5"}}),t._v(" "),e("circle",{attrs:{id:"Oval",stroke:"#979797",fill:"#937AC4",cx:"1592.5",cy:"455.5",r:"355.5"}}),t._v(" "),e("path",{attrs:{d:"M1402.5,155.000018 C1501.96722,218.018606 1568,329.058303 1568,455.520781 C1568,581.983259 1501.96722,693.022956 1402.5,756.041544 C1303.03279,693.022977 1237,581.983271 1237,455.520781 C1237,329.058291 1303.03279,218.018585 1402.50003,155 Z",id:"Combined-Shape",stroke:"#FFFFFF","stroke-width":"10",fill:"#00BD8C"}}),t._v(" "),e("text",{attrs:{id:".vuepress/-config.js","font-family":"ArialMT, Arial","font-size":"60","font-weight":"normal",fill:"#FFFFFF"}},[e("tspan",{attrs:{x:"901.101562",y:"436"}},[t._v(".vuepress/")]),t._v(" "),e("tspan",{attrs:{x:"929.446289",y:"503"}},[t._v("config.js")])]),t._v(" "),e("text",{attrs:{id:"Plugin-API","font-family":"ArialMT, Arial","font-size":"72","font-weight":"normal",fill:"#FFFFFF"}},[e("tspan",{attrs:{x:"1302.42773",y:"436"}},[t._v("Plugin")]),t._v(" "),e("tspan",{attrs:{x:"1344.47461",y:"516"}},[t._v("API")])]),t._v(" "),e("text",{attrs:{id:"theme/-index.js","font-family":"ArialMT, Arial","font-size":"60","font-weight":"normal",fill:"#FFFFFF"}},[e("tspan",{attrs:{x:"1662.78613",y:"436"}},[t._v("theme/")]),t._v(" "),e("tspan",{attrs:{x:"1652.78125",y:"503"}},[t._v("index.js")])])])])]),t._v(" "),e("h3",{attrs:{id:"在插件中使用插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在插件中使用插件"}},[t._v("#")]),t._v(" 在插件中使用插件")]),t._v(" "),e("p",[t._v("在 VuePress 中，你拥有在插件中使用插件的能力：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vuepress-plugin-xxx")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"约定大于配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#约定大于配置"}},[t._v("#")]),t._v(" 约定大于配置")]),t._v(" "),e("p",[t._v("VuePress 1.0 开始引入一些约定，以减少用户过多的配置压力。对于这一点，最直观的体现是对"),e("RouterLink",{attrs:{to:"/zh/guide/directory-structure.html"}},[t._v("文档目录结构")]),t._v("和"),e("RouterLink",{attrs:{to:"/zh/theme/writing-a-theme.html#目录结构"}},[t._v("主题目录结构")]),t._v("的约定。")],1),t._v(" "),e("p",[t._v("未来我们可能还会结合社区的反馈来引入更多的约定，让我们拭目以待。")]),t._v(" "),e("h2",{attrs:{id:"合理的优先级管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合理的优先级管理"}},[t._v("#")]),t._v(" 合理的优先级管理")]),t._v(" "),e("p",[t._v("资深的 VuePress 用户可能已经发现，主题开发者和普通的文档用户都具有定义全局的 "),e("code",[t._v("palette")]),t._v("、"),e("code",[t._v("style")]),t._v("、"),e("code",[t._v("templates")]),t._v(" 和 "),e("code",[t._v("plugins")]),t._v(" 的能力，那么他们是如何协同工作的呢？")]),t._v(" "),e("h3",{attrs:{id:"加载优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载优先级"}},[t._v("#")]),t._v(" 加载优先级")]),t._v(" "),e("p",[e("code",[t._v("templates/*")]),t._v(" 遵循一定的加载优先级，以 "),e("code",[t._v("templates/ssr.html")]),t._v(" 为例：")]),t._v(" "),e("FlowChart",{attrs:{id:"flowchart_382ee23f",code:t.$dataBlock.flowchart_382ee23f,preset:"vue"}}),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("当你想要去自定义 "),e("code",[t._v("templates/ssr.html")]),t._v(" 或 "),e("code",[t._v("templates/dev.html")]),t._v(" 时，最好基于 "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/app/index.dev.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认的模板文件"),e("OutboundLink")],1),t._v(" 来修改，否则可能会导致构建出错。")])]),t._v(" "),e("h3",{attrs:{id:"overriding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overriding"}},[t._v("#")]),t._v(" Overriding")]),t._v(" "),e("p",[t._v("对于 "),e("code",[t._v("palette.styl")]),t._v("、"),e("code",[t._v("index.styl")]),t._v(" 和 "),e("code",[t._v("plugins")]),t._v(", 遵循 "),e("code",[t._v("overriding")]),t._v(" 的原则：")]),t._v(" "),e("h4",{attrs:{id:"palette-styl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#palette-styl"}},[t._v("#")]),t._v(" "),e("code",[t._v("palette.styl")])]),t._v(" "),e("p",[t._v("用户的 "),e("code",[t._v("styles/palette.styl")]),t._v(" 具有比主题的 "),e("code",[t._v("styles/palette.styl")]),t._v(" 更高的优先级，因此主题可以先预定义一套调色板，而用户又可以根据自身需要修改它。例如：")]),t._v(" "),e("div",{staticClass:"language-stylus extra-class"},[e("pre",{pre:!0,attrs:{class:"language-stylus"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// theme/styles/palette.styl")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable-declaration"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#0f0")])]),t._v("\n")])])]),e("div",{staticClass:"language-stylus extra-class"},[e("pre",{pre:!0,attrs:{class:"language-stylus"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/styles/palette.styl")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable-declaration"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#f00")])]),t._v("\n")])])]),e("p",[e("code",[t._v("$accentColor")]),t._v(" 最终的值是 "),e("code",[t._v("#f00")]),t._v("。")]),t._v(" "),e("h4",{attrs:{id:"index-styl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index-styl"}},[t._v("#")]),t._v(" "),e("code",[t._v("index.styl")])]),t._v(" "),e("p",[t._v("用户和主题的 "),e("code",[t._v("styles/index.styl")]),t._v(" 都会被生成到最终的 CSS 文件中，但是默认情况下，用户的样式会生成在主题的样式后面，因此对于同样的选择器，用户的样式将具有更高的优先级，如：")]),t._v(" "),e("div",{staticClass:"language-stylus extra-class"},[e("pre",{pre:!0,attrs:{class:"language-stylus"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// theme/styles/index.styl")]),t._v("\n.content")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n")])])]),e("div",{staticClass:"language-stylus extra-class"},[e("pre",{pre:!0,attrs:{class:"language-stylus"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/styles/index.styl")]),t._v("\n.content")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n")])])]),e("p",[t._v("最终生成的 CSS 文件如下：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* theme/styles/index.styl */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 14px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* theme/styles/index.styl */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" "),e("code",[t._v("plugins")])]),t._v(" "),e("p",[t._v("由于同名插件默认情况下只能应用一次，因此用户可以修改主题中预置的插件选项的默认值，如：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// theme/index.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("name 的最终值将是 "),e("code",[t._v("bar")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("p",[t._v("本着解耦的目标，引入 monorepo 后，我们也得以将 VuePress 分离成以下两个库：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/core",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/core"),e("OutboundLink")],1),t._v("：包含 dev、build 的核心实现和 Plugin API；")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/theme-default",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/theme-default"),e("OutboundLink")],1),t._v("：你现在所看到的默认主题。")])]),t._v(" "),e("p",[t._v("当然，对于大多数用户来说，你并不需要关心上述三个库，"),e("a",{attrs:{href:"https://www.npmjs.com/search?q=vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress"),e("OutboundLink")],1),t._v(" 这个包已经将上述三个包组装在一起，因此你完全可以像 "),e("code",[t._v("0.x")]),t._v(" 那样使用 VuePress。")])],1)}),[],!1,null,null,null);"function"==typeof r&&r(n);s.default=n.exports}}]);