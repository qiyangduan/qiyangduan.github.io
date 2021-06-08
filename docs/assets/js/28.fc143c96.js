(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{430:function(a,t,e){"use strict";e.r(t);var s=e(15),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[a._v("#")]),a._v(" Quick Start")]),a._v(" "),e("p",[a._v("EasyDispatch relies on Postgres DB, Redis and Kafka. Those three components can be started by "),e("a",{attrs:{href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[a._v("docker"),e("OutboundLink")],1),a._v(" and "),e("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[a._v("compose"),e("OutboundLink")],1),a._v(" or provisioned seperately. You also should have "),e("a",{attrs:{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer"}},[a._v("npm and node"),e("OutboundLink")],1),a._v(" for frontend development.")]),a._v(" "),e("ol",[e("li",[a._v("To run easydispatch locally, first install it by:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/alibaba/easydispatch.git "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" easydispatch\npip "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -e "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Then copy and modify env file from $easydisaptch/etc/dev_env_sample to $easydisaptch/dev.env  . Start the database, redis and kafka by docker composer.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker-compose -f kafka-redis-postgres-compose.yml -p easy up\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("Open another terminal, populate some sample data and run the frontend:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("python -m dispatch.cli database init\npython -m dispatch.cli server start --port "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8000")]),a._v(" dispatch.main:app \n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[a._v("Visit the page at : http://localhost:8000/login")])]),a._v(" "),e("li",[e("p",[a._v("You should a page like this. If not, raise an issue in "),e("a",{attrs:{href:"https://github.com/alibaba/easydispatch/issues",target:"_blank",rel:"noopener noreferrer"}},[a._v("main repo"),e("OutboundLink")],1)])])]),a._v(" "),e("p",[e("img",{attrs:{src:"doc/tutorial/planner_gantt_20210504215543.jpg",alt:"planner_ui"}})]),a._v(" "),e("h2",{attrs:{id:"os-and-environements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os-and-environements"}},[a._v("#")]),a._v(" OS and Environements")]),a._v(" "),e("p",[a._v("We tested it on Ubuntu 20.04 and MacOS, Python 3.7 / 3.8")]),a._v(" "),e("h2",{attrs:{id:"online-demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[a._v("#")]),a._v(" Online Demo")]),a._v(" "),e("p",[a._v("We are working on demo...")])])}),[],!1,null,null,null);t.default=n.exports}}]);