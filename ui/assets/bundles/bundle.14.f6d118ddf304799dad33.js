(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{131:function(a,t,s){"use strict";s.r(t);var o=s(802),e=s(216);for(var n in e)"default"!==n&&function(a){s.d(t,a,function(){return e[a]})}(n);s(543);var r=s(3),i=Object(r.a)(e.default,o.a,o.b,!1,null,"30ee76aa",null);t.default=i.exports},149:function(a,t,s){"use strict";s.r(t);var o=s(150),e=s.n(o);for(var n in o)"default"!==n&&function(a){s.d(t,a,function(){return o[a]})}(n);t.default=e.a},150:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,e=s(159),n=(o=e)&&o.__esModule?o:{default:o};t.default={components:{notifications:n.default},computed:{game:function(){return this.$store.state.game.name}},watch:{$route:function(a,t){this.$store.commit("setActiveGame",a.fullPath.split("/")[1])}},beforeCreate:function(){this.$store.commit("setActiveGame",this.$route.fullPath.split("/")[1])},storeModule:{name:"game",state:{name:""},mutations:{setActiveGame:function(a,t){a.name=t}}}}},151:function(a,t,s){},152:function(a,t,s){},158:function(a,t,s){"use strict";s.r(t);var o=s(173),e=s(149);for(var n in e)"default"!==n&&function(a){s.d(t,a,function(){return e[a]})}(n);s(160);var r=s(3),i=Object(r.a)(e.default,o.a,o.b,!1,null,"18614b12",null);t.default=i.exports},160:function(a,t,s){"use strict";var o=s(151);s.n(o).a},173:function(a,t,s){"use strict";var o=function(){var a=this.$createElement,t=this._self._c||a;return t("nav",{staticClass:"row"},[t("div",{staticClass:"nav-l"},[t("router-link",{attrs:{to:"/warframe",exact:""}},[t("img",{staticClass:"logo ico-h-20",attrs:{src:"/img/brand/nexushub-logo-typeface.svg",alt:"Nexushub Logo"}})])],1),this._v(" "),t("div",{staticClass:"nav-r"},[t("notifications")],1)])},e=[];s.d(t,"a",function(){return o}),s.d(t,"b",function(){return e})},175:function(a,t,s){"use strict";var o=s(152);s.n(o).a},176:function(a,t,s){"use strict";s.r(t);s(175);var o=s(3),e=Object(o.a)({},function(){var a=this.$createElement,t=this._self._c||a;return t("header",[t("img",{staticClass:"blobs",attrs:{src:"/img/ui/header-blobs-outline.svg"}}),this._v(" "),this._m(0),this._v(" "),t("div",{staticClass:"container"},[this._t("default")],2),this._v(" "),this._t("sub")],2)},[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"background-container"},[t("div",{staticClass:"background"})])}],!1,null,"2eba4017",null);t.default=e.exports},216:function(a,t,s){"use strict";s.r(t);var o=s(217),e=s.n(o);for(var n in o)"default"!==n&&function(a){s.d(t,a,function(){return o[a]})}(n);t.default=e.a},217:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(s(157)),e=l(s(158)),n=l(s(155)),r=l(s(156)),i=l(s(176));function l(a){return a&&a.__esModule?a:{default:a}}t.default={components:{appContent:o.default,navigation:e.default,sidebar:n.default,sidebarSearch:r.default,uiHeader:i.default}}},249:function(a,t,s){},543:function(a,t,s){"use strict";var o=s(249);s.n(o).a},802:function(a,t,s){"use strict";var o=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("navigation"),a._v(" "),s("sidebar",[s("sidebar-search")],1),a._v(" "),s("app-content",[s("ui-header",[s("img",{attrs:{src:"/img/brand/nexushub-typeface-bw.svg",alt:"NexusHub"}}),a._v(" "),s("h1",[a._v("BRAND")]),a._v(" "),s("p",[a._v("\n        NexusHub is an agile, reactive brand that is always in motion, like\n        the real-time data that we're serving to gamers worldwide.\n        Feel free to use the assets below when you need to reference our service.\n      ")])]),a._v(" "),s("div",{staticClass:"container"},[s("section",[s("h2",[a._v("NexusHub Logo")]),a._v(" "),s("p",[a._v("\n          Please do not edit, distort, recolor, or otherwise repurpose the NexusHub logo.\n        ")]),a._v(" "),s("div",{staticClass:"row-margin"},[s("div",{staticClass:"col logo"},[s("img",{attrs:{src:"/img/brand/nexushub-logo-typeface-color.svg",alt:"Full Color NexusHub Logo"}}),a._v(" "),s("div",{staticClass:"logo-download"},[s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-color.svg",download:""}},[a._v(".svg")]),a._v(" "),s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-color.png",download:""}},[a._v(".png")])])]),a._v(" "),s("div",{staticClass:"col logo"},[s("img",{attrs:{src:"/img/brand/nexushub-logo-typeface-bw.svg",alt:"Black/White NexusHub Logo"}}),a._v(" "),s("div",{staticClass:"logo-download"},[s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-bw.svg",download:""}},[a._v(".svg")]),a._v(" "),s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-bw.png",download:""}},[a._v(".png")])])]),a._v(" "),s("div",{staticClass:"col logo"},[s("img",{attrs:{src:"/img/brand/nexushub-logo-typeface-b.svg",alt:"Full Color NexusHub Logo"}}),a._v(" "),s("div",{staticClass:"logo-download"},[s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-b.svg",download:""}},[a._v(".svg")]),a._v(" "),s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-b.png",download:""}},[a._v(".png")])])])]),a._v(" "),s("div",{staticClass:"row row-margin"},[s("div",{staticClass:"col logo-alt"},[s("img",{attrs:{src:"/img/brand/nexushub-logo-color.svg",alt:"Full Color NexusHub Logo"}}),a._v(" "),s("div",{staticClass:"logo-download"},[s("a",{attrs:{href:"/img/brand/nexushub-logo-color.svg",download:""}},[a._v(".svg")]),a._v(" "),s("a",{attrs:{href:"/img/brand/nexushub-logo-color.png",download:""}},[a._v(".png")])])]),a._v(" "),s("div",{staticClass:"col logo-alt"},[s("img",{attrs:{src:"/img/brand/nexushub-logo-typeface-v-color.svg",alt:"Full Color NexusHub Logo"}}),a._v(" "),s("div",{staticClass:"logo-download"},[s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-v-color.svg",download:""}},[a._v(".svg")]),a._v(" "),s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-v-color.png",download:""}},[a._v(".png")])])]),a._v(" "),s("div",{staticClass:"col logo-alt"},[s("img",{attrs:{src:"/img/brand/nexushub-logo-bw.svg",alt:"Black/White NexusHub Logo"}}),a._v(" "),s("div",{staticClass:"logo-download"},[s("a",{attrs:{href:"/img/brand/nexushub-logo-bw.svg",download:""}},[a._v(".svg")]),a._v(" "),s("a",{attrs:{href:"/img/brand/nexushub-logo-bw.png",download:""}},[a._v(".png")])])]),a._v(" "),s("div",{staticClass:"col logo-alt"},[s("img",{attrs:{src:"/img/brand/nexushub-logo-typeface-v-bw.svg",alt:"Black/White NexusHub Logo"}}),a._v(" "),s("div",{staticClass:"logo-download"},[s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-v-bw.svg",download:""}},[a._v(".svg")]),a._v(" "),s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-v-bw.png",download:""}},[a._v(".png")])])]),a._v(" "),s("div",{staticClass:"col logo-alt"},[s("img",{attrs:{src:"/img/brand/nexushub-logo-b.svg",alt:"Full Color NexusHub Logo"}}),a._v(" "),s("div",{staticClass:"logo-download"},[s("a",{attrs:{href:"/img/brand/nexushub-logo-b.svg",download:""}},[a._v(".svg")]),a._v(" "),s("a",{attrs:{href:"/img/brand/nexushub-logo-b.png",download:""}},[a._v(".png")])])]),a._v(" "),s("div",{staticClass:"col logo-alt"},[s("img",{attrs:{src:"/img/brand/nexushub-logo-typeface-v-b.svg",alt:"Full Color NexusHub Logo"}}),a._v(" "),s("div",{staticClass:"logo-download"},[s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-v-b.svg",download:""}},[a._v(".svg")]),a._v(" "),s("a",{attrs:{href:"/img/brand/nexushub-logo-typeface-v-b.png",download:""}},[a._v(".png")])])])])]),a._v(" "),s("section",[s("h2",[a._v("NexusHub Colors")]),a._v(" "),s("p",[a._v("\n          Keep in mind that each color in our palette comes in two shades for\n          different situations.\n        ")]),a._v(" "),s("div",{staticClass:"row-margin"},[s("div",{staticClass:"col-b color"},[s("div",{staticClass:"primary-shade green"},[s("span"),a._v(" "),s("span",[a._v("#39e56f")])]),a._v(" "),s("div",{staticClass:"sub-shade green-shade"},[s("span",[a._v("#68d891")])])]),a._v(" "),s("div",{staticClass:"col-b color"},[s("div",{staticClass:"primary-shade blue"},[s("span"),a._v(" "),s("span",[a._v("#15ced6")])]),a._v(" "),s("div",{staticClass:"sub-shade blue-shade"},[s("span",[a._v("#11acb2")])])]),a._v(" "),s("div",{staticClass:"col-b color"},[s("div",{staticClass:"primary-shade grey"},[s("span"),a._v(" "),s("span",[a._v("#8b97a8")])]),a._v(" "),s("div",{staticClass:"sub-shade grey-shade"},[s("span",[a._v("#2d323b")])])]),a._v(" "),s("div",{staticClass:"col-b color"},[s("div",{staticClass:"primary-shade dark"},[s("span"),a._v(" "),s("span",[a._v("#21232a")])]),a._v(" "),s("div",{staticClass:"sub-shade dark-shade"},[s("span",[a._v("#101115")])])])])])])],1)],1)},e=[];s.d(t,"a",function(){return o}),s.d(t,"b",function(){return e})}}]);