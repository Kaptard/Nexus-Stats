(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/deals.vue?vue&type=template&id=b5d320b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"deal-group"},[_c('div',{staticClass:"filter"},[_c('div',{staticClass:"filter-tags"},[_c('div',{staticClass:"filter-tag-row"},_vm._l((_vm.filters),function(filter){return _c('div',{key:filter.name,staticClass:"btn-tag",class:{ active: filter.active },on:{"click":function($event){return _vm.selectFilter(filter)}}},[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.name}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(filter.name))])])}),0)]),_vm._v(" "),(_vm.compareFn)?_c('compare-server',{attrs:{"fn":_vm.compareServer,"active-server":_vm.comparisonServer}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"deal-container"},[_c('div',{staticClass:"row labels"},[_c('div',{staticClass:"col-2 item"},[_vm._v("\n        Item\n      ")]),_vm._v(" "),_c('div',{staticClass:"col amount"},[_vm._v("\n        Absolute Profit\n      ")]),_vm._v(" "),_c('div',{staticClass:"col quantity"},[_vm._v("\n        "+_vm._s(_vm.crafting ? 'Profession' : 'Relative Profit')+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"col whitespace"})]),_vm._v(" "),_c('transition-group',{ref:"deals",staticClass:"deal-list"},_vm._l((_vm.deals),function(deal,i){return _c('div',{key:(i + "-" + (deal.itemId)),staticClass:"deal"},[_c('router-link',{staticClass:"row interactive",attrs:{"to":!_vm.crafting ? ("/wow-classic/items/" + (_vm.activeServer.slug) + "/" + (deal.uniqueName)) : ("/wow-classic/items/" + (_vm.activeServer.slug) + "/" + (deal.uniqueName) + "/crafting")}},[_c('img',{staticClass:"deal-img-blur",attrs:{"src":deal.icon,"alt":deal.name}}),_vm._v(" "),_c('div',{staticClass:"deal-title col-b-2"},[_c('div',{staticClass:"deal-img"},[_c('img',{class:{ mod: deal.icon.includes('jpeg') },attrs:{"src":deal.icon,"alt":deal.name}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(deal.name))])]),_vm._v(" "),_c('div',{staticClass:"deal-data-value col-b"},[_c('img',{staticClass:"ico-12",attrs:{"src":"/img/warframe/ui/platinum.svg","alt":"Gold"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.parsePrice(!_vm.crafting ? deal.dealDiff : deal.profit)))])]),_vm._v(" "),_c('div',{staticClass:"deal-data-value col-b price"},[(!_vm.crafting)?_c('span',{staticClass:"price-diff",class:{ negative: deal.dealPercentage < 0 }},[_c('indicator',{attrs:{"diff":deal.dealPercentage}}),_vm._v(" "+_vm._s(+Math.abs(deal.dealPercentage * 100).toFixed(2))+"%\n            ")],1):_c('span',{staticClass:"category"},[_vm._v(_vm._s(deal.category))])]),_vm._v(" "),_c('div',{staticClass:"deal-data-value col-b whitespace"},[(!_vm.crafting && !_vm.comparisonServer.slug)?_c('span',{staticClass:"unavailable"},[_vm._v("Cheaper than Market Value")]):(_vm.crafting)?_c('span',{staticClass:"unavailable"},[_vm._v("Crafting Profit")]):(!_vm.crafting && _vm.comparisonServer.slug)?_c('span',{staticClass:"unavailable"},[_vm._v("Compared with "+_vm._s(_vm.compareServerPretty))]):_vm._e()])])],1)}),0)],1),_vm._v(" "),(!_vm.reachedEndOfDeals)?_c('div',{staticClass:"deal-status"},[_c('img',{staticClass:"ico-h-24",attrs:{"src":"/img/ui/status-loading-wow-classic.svg","alt":"loading"}}),_vm._v(" "),_c('p',[_vm._v("Loading deals...")])]):_c('div',{staticClass:"deal-status"},[_c('p',[_vm._v("You've reached the end")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/deals.vue?vue&type=template&id=b5d320b8&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['name', 'maxHeight', 'maxWidth'],

  data: function data() {
    return {
      blocked: false
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  },

  mounted: function mounted() {
    var nitroAds = window.nitroAds;
    if (!nitroAds) {
      this.blocked = true;
      return;
    }

    nitroAds.createAd('ad-' + this.name, {
      floor: 0.05,
      refreshLimit: 10,
      refreshTime: 60,
      report: {
        enabled: true,
        wording: 'Report Abuse',
        position: 'fixed-bottom-right'
      }
    });
  }
};

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blocked":"warframe_blocked_3JQnD"};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blocked":"wow-classic_blocked_3Rr6k"};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nitroAds_vue_vue_type_template_id_76ad42ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(169);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(198);
/* harmony import */ var _nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);
/* harmony import */ var _nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(200);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nitroAds_vue_vue_type_template_id_76ad42ac___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _nitroAds_vue_vue_type_template_id_76ad42ac___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['x', 'y', 'diff', 'reverse'],

  data: function data() {
    return {
      positive: 'M3.65,0l-3.15,3.265l2.363,0l-0.001,5.735l1.575,0l0,-5.735l2.363,0l-3.15,-3.265Z',
      negative: 'M3.65,9l3.15,-3.265l-2.363,0l0,-5.735l-1.575,0l0.001,5.735l-2.363,0l3.15,3.265Z'
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  }
};

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"warframe_indicator_1spmD"};

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"wow-classic_indicator_GhxVb"};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(77);
module.exports = __webpack_require__(191);


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var get = __webpack_require__(79);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=template&id=76ad42ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-center",class:[{ 'blocked-unit': _vm.blocked, 'ad-unit': !_vm.blocked }, _vm.blocked ? _vm.theme.blocked : ''],style:({
  'max-height': _vm.maxHeight,
  'max-width': _vm.maxWidth
}),attrs:{"id":("ad-" + _vm.name)}},[(_vm.blocked)?_c('span',[_vm._v("Advertising seems to be blocked by your browser. This is fine.")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("NexusHub is completely free and we want it to stay that way.\n    Advertising is currently our only income to pay for the servers and to help us to develop NexusHub even further!")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("Please consider adding an exception for NexusHub.co on your Adblocker.\n    If you think that any ads are intrusive or inappropriate, feel free to contact us.")]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=template&id=76ad42ac&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(351);
/* harmony import */ var _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(184);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(348);
/* harmony import */ var _indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(349);
/* harmony import */ var _indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(350);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7c937518",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(352);

var _extends3 = _interopRequireDefault(_extends2);

var _log = __webpack_require__(421);

var _log2 = _interopRequireDefault(_log);

var _toConsumableArray2 = __webpack_require__(429);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = __webpack_require__(168);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  parsePrice: function parsePrice(price) {
    var gold = Math.floor(price / 10000);
    var silver = Math.floor(price / 100 - gold * 100);
    var copper = price - gold * 10000 - silver * 100;

    var string = '';
    if (gold) string += gold + 'g ';
    if (silver) string += silver + 's ';
    string += copper + 'c';
    return string;
  },
  formatRegionalData: function formatRegionalData(itemData, regionalData) {
    var msH = 1000 * 60 * 60;

    var _loop = function _loop(iD) {
      var bracketHour = new Date(Math.floor(new Date(iD.scannedAt).getTime() / msH) * msH);
      var bracketIndex = regionalData.data.findIndex(function (x) {
        return new Date(x.scannedAt).getTime() === bracketHour.getTime();
      });
      if (bracketIndex >= 0) regionalData.data[bracketIndex].value2 = iD.marketValue;
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(itemData.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var iD = _step.value;

        _loop(iD);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var validValue = regionalData.data.find(function (e) {
      return e.value2;
    });
    if (validValue) validValue = validValue.value2;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = (0, _getIterator3.default)(regionalData.data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var rD = _step2.value;

        if (!validValue) rD.value2 = null;else if (!rD.value2) rD.value2 = validValue;else if (rD.value2) validValue = rD.value2;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return regionalData;
  },
  generateGraphScala: function generateGraphScala(data, ticks) {
    var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (prop) data = data.map(function (x) {
      return x[prop];
    });

    var lowerBound = Math.min.apply(Math, (0, _toConsumableArray3.default)(data));
    var upperBound = Math.max.apply(Math, (0, _toConsumableArray3.default)(data));
    var tickRange = (upperBound - lowerBound) / (ticks - 1);
    if (tickRange < 1) tickRange = 1;

    var x = Math.ceil((0, _log2.default)(tickRange) - 1);
    var pow10x = Math.pow(10, x);
    tickRange = Math.ceil(tickRange / pow10x) * pow10x;

    lowerBound = tickRange ? tickRange * Math.floor(lowerBound / tickRange) : 0;
    upperBound = tickRange ? tickRange * Math.floor(1 + upperBound / tickRange) : upperBound * 2;
    if (!tickRange) tickRange = upperBound / 2;

    return { tickRange: tickRange, lowerBound: lowerBound, upperBound: upperBound };
  },
  mergeValuesAndInterpolateLowerUpper: function mergeValuesAndInterpolateLowerUpper(data, timerange) {
    var stepSize = Math.floor(timerange / 6);
    var bracketLower = 0;
    var bracketUpper = stepSize;
    var mergedData = [];
    if (stepSize > 1) {
      while (bracketLower < data.length) {
        var dataBracket = data.slice(bracketLower, bracketUpper > data.length ? data.length : bracketUpper);
        var mergedBracket = dataBracket.reduce(function (acc, cV) {
          acc.value1 += cV.value1;
          acc.value2 += cV.value2;
          return acc;
        });
        mergedBracket.value1 = Math.round(mergedBracket.value1 / dataBracket.length);
        mergedBracket.value2 = Math.round(mergedBracket.value2 / dataBracket.length);
        mergedBracket.x = dataBracket[Math.floor(dataBracket.length / 2)].x;

        mergedData.push(mergedBracket);
        bracketLower += stepSize;
        bracketUpper += stepSize;
      }
      data = mergedData;
    }

    data.unshift((0, _extends3.default)({}, data[0], { x: new Date().getTime() - 1000 * 60 * 60 * 24 * timerange }));
    data.push((0, _extends3.default)({}, data[data.length - 1], { x: new Date().getTime() }));

    return data;
  }
};

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"indicator",class:[{ negative: _vm.diff < 0, positive: _vm.diff > 0, reverse: _vm.reverse }, _vm.theme.indicator],attrs:{"height":"10px","width":"7px","overflow":"visible"}},[_c('path',{attrs:{"transform":("translate(" + (_vm.x || 0) + ", " + (_vm.y || 0) + ")"),"d":_vm.diff < 0 ? _vm.negative : _vm.positive}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['fn', 'activeServer'],

  data: function data() {
    return {
      active: false,
      selected: {
        region: '',
        server: ''
      }
    };
  },


  computed: {
    activeFactionPretty: function activeFactionPretty() {
      return this.activeServer.faction.charAt(0).toUpperCase() + this.activeServer.faction.slice(1);
    },
    serverlist: function serverlist() {
      return {
        EU: this.$store.state.servers.serverlist.filter(function (s) {
          return s.region === 'EU';
        }),
        US: this.$store.state.servers.serverlist.filter(function (s) {
          return s.region === 'US';
        })
      };
    }
  },

  methods: {
    toggle: function toggle() {
      this.active = !this.active;
      if (!this.active) this.selectRegion('');
    },
    selectRegion: function selectRegion(region) {
      if (region === this.selected.region) this.selected.region = '';else this.selected.region = region;
      this.selected.server = '';
    },
    selectServer: function selectServer(server) {
      if (server === this.selected.server) this.selected.server = '';else this.selected.server = server.slug;
    }
  }
};

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(422), __esModule: true };

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(423);
module.exports = __webpack_require__(2).Math.log10;


/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(7);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(585);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(352);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(168);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _compareServer = __webpack_require__(586);

var _compareServer2 = _interopRequireDefault(_compareServer);

var _indicator = __webpack_require__(208);

var _indicator2 = _interopRequireDefault(_indicator);

var _utility = __webpack_require__(347);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    indicator: _indicator2.default,
    compareServer: _compareServer2.default
  },

  props: ['crafting', 'compareFn'],

  data: function data() {
    return {
      fetchingDeals: false,
      comparisonServer: {
        slug: '',
        name: '',
        region: '',
        faction: ''
      }
    };
  },


  computed: {
    compareServerPretty: function compareServerPretty() {
      if (!this.comparisonServer.slug) return null;
      var factionPretty = this.comparisonServer.faction.charAt(0).toUpperCase() + this.comparisonServer.faction.slice(1);
      return this.comparisonServer.name + ' (' + factionPretty + ')';
    },
    deals: function deals() {
      var deals = this.$store.state.deals.deals;

      var activeFilters = this.filters.filter(function (f) {
        return f.active && !f.unique;
      });
      var filteredDeals = [];

      var _loop = function _loop(f) {
        var filtered = deals.filter(function (d) {
          return d.category === f.name;
        });

        var _loop2 = function _loop2(deal) {
          var dealAlreadyExists = filteredDeals.find(function (d) {
            return d.itemId === deal.itemId;
          });
          if (!dealAlreadyExists) filteredDeals.push(deal);
        };

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(filtered), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var deal = _step2.value;

            _loop2(deal);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(activeFilters), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var f = _step.value;

          _loop(f);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (activeFilters.length) {
        filteredDeals.sort(function (a, b) {
          return b.profit - a.profit;
        });
        if (filteredDeals.length < 15) this.$nextTick(this.updateOnScroll.bind(this, null, true));
      }
      return activeFilters.length ? filteredDeals : deals;
    },
    filters: function filters() {
      return this.$store.state.deals.filters;
    },
    reachedEndOfDeals: function reachedEndOfDeals() {
      return this.$store.state.deals.reachedEndOfDeals;
    },
    fetchUrl: function fetchUrl() {
      return this.$store.state.deals.fetchUrl;
    },
    activeServer: function activeServer() {
      return this.$store.state.servers.activeServer;
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.updateOnScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.updateOnScroll);
  },


  methods: {
    updateOnScroll: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
        var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var lastDeal, lastDealPosition, viewportHeight;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lastDeal = this.$refs.deals.$children[this.$refs.deals.$children.length - 1].$el;
                lastDealPosition = lastDeal.getBoundingClientRect().top + window.pageYOffset;
                viewportHeight = window.innerHeight;

                if (!((forceUpdate || window.scrollY >= lastDealPosition - viewportHeight) && !this.fetchingDeals && !this.reachedEndOfDeals)) {
                  _context.next = 13;
                  break;
                }

                this.fetchingDeals = true;
                _context.next = 7;
                return this.$store.dispatch('addDeals');

              case 7:
                if (!(this.deals.length < 15 && !this.reachedEndOfDeals)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 10;
                return this.$store.dispatch('addDeals');

              case 10:
                _context.next = 7;
                break;

              case 12:
                this.fetchingDeals = false;

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateOnScroll(_x2) {
        return _ref.apply(this, arguments);
      }

      return updateOnScroll;
    }(),
    selectFilter: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(filter) {
        var newFilters, selectedFilter, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, newFilter, deals, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, deal;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                newFilters = this.filters;
                selectedFilter = newFilters.find(function (f) {
                  return f.name === filter.name;
                });

                if (!(!selectedFilter || selectedFilter.unique && selectedFilter.active)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt('return');

              case 4:
                if (!filter.unique) {
                  _context2.next = 49;
                  break;
                }

                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context2.prev = 8;

                for (_iterator3 = (0, _getIterator3.default)(newFilters); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  newFilter = _step3.value;

                  if (newFilter.unique) newFilter.active = false;
                }

                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](8);
                _didIteratorError3 = true;
                _iteratorError3 = _context2.t0;

              case 16:
                _context2.prev = 16;
                _context2.prev = 17;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 19:
                _context2.prev = 19;

                if (!_didIteratorError3) {
                  _context2.next = 22;
                  break;
                }

                throw _iteratorError3;

              case 22:
                return _context2.finish(19);

              case 23:
                return _context2.finish(16);

              case 24:
                if (!(filter.fetchUrl && filter.fetchUrl !== this.fetchUrl)) {
                  _context2.next = 49;
                  break;
                }

                this.$store.commit('setFetchUrl', filter.fetchUrl);
                _context2.next = 28;
                return this.$cubic.get(filter.fetchUrl);

              case 28:
                deals = _context2.sent;
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context2.prev = 32;

                for (_iterator4 = (0, _getIterator3.default)(deals); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  deal = _step4.value;
                  deal.icon = 'https://render-classic-us.worldofwarcraft.com/icons/56/' + deal.icon + '.jpg';
                }_context2.next = 40;
                break;

              case 36:
                _context2.prev = 36;
                _context2.t1 = _context2['catch'](32);
                _didIteratorError4 = true;
                _iteratorError4 = _context2.t1;

              case 40:
                _context2.prev = 40;
                _context2.prev = 41;

                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }

              case 43:
                _context2.prev = 43;

                if (!_didIteratorError4) {
                  _context2.next = 46;
                  break;
                }

                throw _iteratorError4;

              case 46:
                return _context2.finish(43);

              case 47:
                return _context2.finish(40);

              case 48:
                this.$store.commit('setDeals', deals);

              case 49:
                selectedFilter.active = !selectedFilter.active;
                this.$store.commit('setFilters', newFilters);

              case 51:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[8, 12, 16, 24], [17,, 19, 23], [32, 36, 40, 48], [41,, 43, 47]]);
      }));

      function selectFilter(_x3) {
        return _ref2.apply(this, arguments);
      }

      return selectFilter;
    }(),
    compareServer: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(server) {
        var serverSplit, faction, serverObj;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.compareFn(server);
                serverSplit = server.split('-');
                faction = serverSplit.pop();
                serverObj = (0, _extends3.default)({}, this.$store.state.servers.serverlist.find(function (s) {
                  return s.slug === serverSplit.join('-');
                }));

                serverObj.slug = server;
                serverObj.faction = faction;
                this.comparisonServer = serverObj;

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function compareServer(_x4) {
        return _ref3.apply(this, arguments);
      }

      return compareServer;
    }()
  }
};

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare_server_vue_vue_type_template_id_5ce385f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(670);
/* harmony import */ var _compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _compare_server_vue_vue_type_style_index_0_id_5ce385f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(587);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _compare_server_vue_vue_type_template_id_5ce385f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _compare_server_vue_vue_type_template_id_5ce385f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "5ce385f4",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_style_index_0_id_5ce385f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_style_index_0_id_5ce385f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_style_index_0_id_5ce385f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_style_index_0_id_5ce385f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/compare-server.vue?vue&type=template&id=5ce385f4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('span',[_vm._v("Compare "+_vm._s(_vm.activeServer.slug ? _vm.activeServer.name : 'Realm'))]),_vm._v(" "),(_vm.activeServer.slug)?_c('img',{staticClass:"faction-logo",attrs:{"src":("/img/wow-classic/ui/" + (_vm.activeServer.faction) + ".svg"),"alt":(_vm.activeFactionPretty + " Logo")}}):_vm._e(),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:{ active: _vm.active }},[_c('div',{staticClass:"body"},[_c('span',{class:{ active: !_vm.activeServer.slug },on:{"click":function($event){return _vm.toggle()}}},[_vm._v("Compare Realm")]),_vm._v(" "),_c('span',{class:{ active: _vm.activeServer.region === 'EU' },on:{"click":function($event){return _vm.selectRegion('EU')}}},[_vm._v("Europe")]),_vm._v(" "),_vm._l((_vm.serverlist.EU),function(s){return [_c('span',{key:s.slug,staticClass:"server",class:{ active: _vm.activeServer.name === s.name, selected: _vm.selected.region === 'EU' },on:{"click":function($event){return _vm.selectServer(s)}}},[_vm._v(_vm._s(s.name))]),_vm._v(" "),_c('div',{key:s.slug + 'faction',staticClass:"faction",class:{ selected: _vm.selected.server === s.slug }},[_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.toggle(); _vm.fn(s.slug + '-alliance');}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.toggle(); _vm.fn(s.slug + '-horde');}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])])]}),_vm._v(" "),_c('span',{class:{ active: _vm.activeServer.region === 'US' },on:{"click":function($event){return _vm.selectRegion('US')}}},[_vm._v("United States")]),_vm._v(" "),_vm._l((_vm.serverlist.US),function(s){return [_c('span',{key:s.slug,staticClass:"server",class:{ active: _vm.activeServer.name === s.name, selected: _vm.selected.region === 'US' },on:{"click":function($event){return _vm.selectServer(s)}}},[_vm._v(_vm._s(s.name))]),_vm._v(" "),_c('div',{key:s.slug + 'faction',staticClass:"faction",class:{ selected: _vm.selected.server === s.slug }},[_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.toggle(); _vm.fn(s.slug + '-alliance');}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.toggle(); _vm.fn(s.slug + '-horde');}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])])]})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/compare-server.vue?vue&type=template&id=5ce385f4&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deals_vue_vue_type_template_id_b5d320b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1018);
/* harmony import */ var _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(584);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _deals_vue_vue_type_style_index_0_id_b5d320b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(941);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deals_vue_vue_type_template_id_b5d320b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _deals_vue_vue_type_template_id_b5d320b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "b5d320b8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(168);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'deals',

  state: {
    news: [],
    deals: [],
    filters: [],
    fetchUrl: '',
    reachedEndOfDeals: false
  },

  mutations: {
    setDeals: function setDeals(state, deals) {
      state.deals = deals;
    },
    setFilters: function setFilters(state, filters) {
      state.filters = filters;
    },
    setFetchUrl: function setFetchUrl(state, fetchUrl) {
      state.fetchUrl = fetchUrl;
    },
    setReachedEnd: function setReachedEnd(state, reachedEnd) {
      state.reachedEndOfDeals = reachedEnd;
    }
  },

  actions: {
    addDeals: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var state = _ref.state,
            commit = _ref.commit;

        var newDeals, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, deal;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$cubic.get(state.fetchUrl + '&skip=' + state.deals.length);

              case 2:
                newDeals = _context.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;

                for (_iterator = (0, _getIterator3.default)(newDeals); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  deal = _step.value;
                  deal.icon = 'https://render-classic-us.worldofwarcraft.com/icons/56/' + deal.icon + '.jpg';
                }_context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](6);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 14:
                _context.prev = 14;
                _context.prev = 15;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 17:
                _context.prev = 17;

                if (!_didIteratorError) {
                  _context.next = 20;
                  break;
                }

                throw _iteratorError;

              case 20:
                return _context.finish(17);

              case 21:
                return _context.finish(14);

              case 22:
                if (newDeals.length < 15) commit('setReachedEnd', true);else commit('setReachedEnd', false);

                commit('setDeals', state.deals.concat(newDeals.filter(function (nD) {
                  return !state.deals.find(function (d) {
                    return nD.itemId === d.itemId;
                  });
                })));

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 10, 14, 22], [15,, 17, 21]]);
      }));

      function addDeals(_x) {
        return _ref2.apply(this, arguments);
      }

      return addDeals;
    }()
  }
};

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_b5d320b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(588);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_b5d320b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_b5d320b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_b5d320b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);