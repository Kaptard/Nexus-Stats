(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      visible: false
    };
  },


  computed: {
    unread: function unread() {
      return this.$store.state.notifications.unread;
    }
  },

  watch: {
    unread: function unread() {
      if (this.unread.length) {
        this.visible = true;
      }
    }
  },

  mounted: function mounted() {
    this.listen();
  },


  methods: {
    listen: function listen() {
      var _this = this;

      this.$cubic.subscribe('/notifications', function (notification) {
        if (notification.game === _this.$store.state.game.name || notification.game === 'global') {
          _this.$store.commit('addNotification', notification.message);
        }
      });
    },
    toggle: function toggle() {
      this.visible = !this.visible;
    },
    dismiss: function dismiss(notification) {
      this.$store.commit('removeNotification', notification);
    }
  },

  storeModule: {
    name: 'notifications',
    state: {
      unread: []
    },
    mutations: {
      addNotification: function addNotification(state, notification) {
        state.unread.push(notification);
      },
      removeNotification: function removeNotification(state, notification) {
        state.unread.splice(state.unread.findIndex(function (n) {
          return n.title === notification.title;
        }), 1);
      }
    }
  }
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/app-content.vue?vue&type=template&id=3ce135d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('transition',{attrs:{"appear":"","name":"zoom"}},[_c('div',[_c('main',{staticClass:"app-content"},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/app-content.vue?vue&type=template&id=3ce135d2&

// EXTERNAL MODULE: ./ui/app-content.vue?vue&type=style&index=0&lang=scss&
var app_contentvue_type_style_index_0_lang_scss_ = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./ui/app-content.vue

var script = {}



/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var app_content = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(149);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function meta(options) {
  var required = ['description', 'title'];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(required), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!options[key]) {
        throw new Error('Missing ' + key + ' option in meta function.');
      }
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

  return [{
    name: 'description',
    property: 'og:description',
    itemprop: 'description',
    content: options.description
  }, {
    property: 'og:title',
    itemprop: 'name',
    content: options.title
  }, {
    property: 'og:type',
    content: options.type || 'website'
  }, {
    property: 'og:image',
    itemprop: 'image primaryImageOfPage',
    content: options.image || 'https://nexushub.co/img/brand/og-banner.jpg'
  }, {
    property: 'og:site_name',
    content: 'NexusHub'
  }];
}

exports.default = meta;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_vue_vue_type_template_id_3d0f2c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(166);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notifications_vue_vue_type_template_id_3d0f2c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _notifications_vue_vue_type_template_id_3d0f2c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "3d0f2c28",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/notifications.vue?vue&type=template&id=3d0f2c28&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"notifications"},[_c('div',{staticClass:"nav-ico interactive",on:{"click":_vm.toggle}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/notifications.svg","alt":"Notifications"}})]),_vm._v(" "),_c('div',{staticClass:"unread-bubble",class:{ unread: _vm.unread.length }}),_vm._v(" "),_c('div',{staticClass:"notification-container",class:{ visible: _vm.visible }},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"notification-body"},[(_vm.unread.length)?_c('div',{staticClass:"notification-wrapper"},_vm._l((_vm.unread),function(notification){return _c('div',{key:notification.title,staticClass:"notification"},[_c('h4',[_vm._v(_vm._s(notification.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(notification.body))]),_vm._v(" "),(notification.buttons)?_c('div',{staticClass:"footer"},_vm._l((notification.buttons),function(button){return _c('button',{key:button.text,on:{"click":button.fn}},[_vm._v(_vm._s(button.text))])}),0):_vm._e(),_vm._v(" "),_c('img',{staticClass:"dismiss ico-h-20 interactive",attrs:{"src":"/img/ui/close.svg","alt":"Dismiss"},on:{"click":function($event){return _vm.dismiss(notification)}}})])}),0):_c('div',{staticClass:"no-notifcations"},[_vm._v("\n          No notifications. We have dispatched a pigeon to deliver the latest news soon 🕊️\n        ")])])])]),_vm._v(" "),_c('div',{staticClass:"hide",class:{ visible: _vm.visible },on:{"click":_vm.toggle}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notification-header"},[_c('span',[_vm._v("Notifications")])])}]


// CONCATENATED MODULE: ./ui/components/ui/notifications.vue?vue&type=template&id=3d0f2c28&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(165);

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    notifications: _notifications2.default
  },

  computed: {
    game: function game() {
      return this.$store.state.game.name;
    }
  },

  watch: {
    $route: function $route(to, from) {
      this.$store.commit('setActiveGame', to.fullPath.split('/')[1]);
    }
  },

  beforeCreate: function beforeCreate() {
    this.$store.commit('setActiveGame', this.$route.fullPath.split('/')[1]);
  },


  storeModule: {
    name: 'game',
    state: {
      name: ''
    },
    mutations: {
      setActiveGame: function setActiveGame(state, game) {
        state.name = game;
      }
    }
  }
};

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(489);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(149);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vueHighlightjs = __webpack_require__(491);

var _vueHighlightjs2 = _interopRequireDefault(_vueHighlightjs);

var _appContent = __webpack_require__(153);

var _appContent2 = _interopRequireDefault(_appContent);

var _meta = __webpack_require__(156);

var _meta2 = _interopRequireDefault(_meta);

var _developers = __webpack_require__(346);

var _developers2 = _interopRequireDefault(_developers);

var _sidebar = __webpack_require__(679);

var _sidebar2 = _interopRequireDefault(_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = function title(str) {
  return str.toLowerCase().replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};
var replacer = function replacer(key, value) {
  if (typeof value === 'string' && value.startsWith('function ')) {
    return value.split(' ')[1].replace('()', '');
  }
  return value;
};

exports.default = {
  components: {
    navigation: _developers2.default,
    appContent: _appContent2.default,
    sidebarNav: _sidebar2.default
  },

  data: function data() {
    return {
      example: undefined
    };
  },


  computed: {
    endpoints: function endpoints() {
      return this.$store.state.docs.endpoints;
    },
    groups: function groups() {
      var groups = [{ group: 'general', name: 'General', endpoints: [] }];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.endpoints), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var endpoint = _step.value;

          var split = endpoint.route.split('/');

          if (split.length > 2) {
            (function () {
              var group = split[1];
              var name = title('' + split[1] + (split.length > 3 ? ' / ' + split[3] : ''));
              var saved = groups.find(function (g) {
                return g.name === name;
              });

              endpoint.name = endpoint.name === 'index' ? name.split(' / ')[1].toLowerCase() : endpoint.name;
              endpoint.group = name;

              if (saved) {
                saved.endpoints.push(endpoint);
              } else {
                groups.push({
                  group: group,
                  name: name,
                  endpoints: [endpoint]
                });
              }
            })();
          } else {
              groups.find(function (g) {
                return g.group === 'general';
              }).endpoints.push(endpoint);
            }
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

      this.$store.commit('setDocsGroups', groups);
      return groups;
    },
    endpoint: function endpoint() {
      var group = this.$route.params.group;
      var name = this.$route.params.name;
      var groups = this.groups;

      this.example = undefined;

      if (group && groups) {
        return groups.find(function (g) {
          return g.name === group.replace(/\-/g, ' / ');
        }).endpoints.find(function (e) {
          return e.name === name;
        });
      }
    }
  },

  watch: {
    $route: function $route() {
      if (this.endpoint && !this.endpoint.response) {
        this.toggleExample();
      }
    }
  },

  beforeMount: function beforeMount() {
    _vue2.default.use(_vueHighlightjs2.default);
  },
  created: function created() {
    if (this.endpoint && !this.endpoint.response) {
      this.toggleExample();
    }
  },


  methods: {
    toggleExample: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var e, res, _res;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e = this.endpoint;

                if (!this.example) {
                  _context.next = 5;
                  break;
                }

                this.example = undefined;
                _context.next = 16;
                break;

              case 5:
                if (!(e.method === 'GET')) {
                  _context.next = 12;
                  break;
                }

                _context.next = 8;
                return this.$cubic.get(e.request ? e.request.url : e.route);

              case 8:
                res = _context.sent;

                this.example = Array.isArray(res) ? res.slice(0, 1).concat(['// Truncated response']) : res;
                _context.next = 16;
                break;

              case 12:
                _context.next = 14;
                return this.$cubic[e.method.toLowerCase()](e.request.url || e.route, e.request.body);

              case 14:
                _res = _context.sent;

                this.example = Array.isArray(_res) ? _res.slice(0, 1).concat(['// Truncated response']) : _res;

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toggleExample() {
        return _ref.apply(this, arguments);
      }

      return toggleExample;
    }(),
    stringify: function stringify(obj) {
      var stringified = (0, _stringify2.default)(obj, replacer, 2);
      return stringified ? stringified.replace(/"Number"/g, 'Number').replace(/"String"/g, 'String').replace(/"Boolean"/g, 'Boolean') : stringified;
    }
  },

  head: {
    title: 'NexusHub · API Documentation',
    meta: (0, _meta2.default)({
      title: 'NexusHub API Documentation',
      description: 'Find all resources required to build your own application with data from NexusHub.'
    })
  }
};

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _developers_vue_vue_type_template_id_01ea4dba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var _developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(191);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _developers_vue_vue_type_style_index_0_id_01ea4dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _developers_vue_vue_type_template_id_01ea4dba_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _developers_vue_vue_type_template_id_01ea4dba_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "01ea4dba",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_01ea4dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_01ea4dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_01ea4dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_01ea4dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(149);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = function title(str) {
  return str.toLowerCase().replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};
var reviver = function reviver(key, value) {
  if (typeof key === 'string' && key.indexOf('function ') === 0) {
    var functionTemplate = '(' + value + ')';
    return functionTemplate;
  }
  return value;
};

exports.default = {
  computed: {
    endpoints: function endpoints() {
      return this.$store.state.docs.endpoints;
    },
    groups: function groups() {
      if (this.$store.state.docs.groups.length) {
        return this.$store.state.docs.groups;
      }
      var groups = [{ group: 'general', name: 'General', endpoints: [] }];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.endpoints), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var endpoint = _step.value;

          var split = endpoint.route.split('/');

          if (split.length > 2) {
            (function () {
              var group = split[1];
              var name = title('' + split[1] + (split.length > 3 ? ' / ' + split[3] : ''));
              var saved = groups.find(function (g) {
                return g.name === name;
              });

              endpoint.name = endpoint.name === 'index' ? name.split(' / ')[1].toLowerCase() : endpoint.name;
              endpoint.group = name;

              if (saved) {
                saved.endpoints.push(endpoint);
              } else {
                groups.push({
                  group: group,
                  name: name,
                  endpoints: [endpoint]
                });
              }
            })();
          } else {
              groups.find(function (g) {
                return g.group === 'general';
              }).endpoints.push(endpoint);
            }
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

      this.$store.commit('setDocsGroups', groups);
      return groups;
    }
  },

  asyncData: function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var endpoints;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$cubic.get('/docs/endpoints');

            case 2:
              endpoints = _context.sent;

              this.$store.commit('setDocsEndpoints', JSON.parse(endpoints, reviver));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function asyncData() {
      return _ref.apply(this, arguments);
    }

    return asyncData;
  }(),


  storeModule: {
    name: 'docs',
    state: {
      endpoints: [],
      groups: []
    },
    mutations: {
      setDocsEndpoints: function setDocsEndpoints(state, endpoints) {
        state.endpoints = endpoints;
      },
      setDocsGroups: function setDocsGroups(state, groups) {
        state.groups = groups;
      }
    }
  }
};

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/developers.vue?vue&type=template&id=01ea4dba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":"/","exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})]),_vm._v(" "),_c('router-link',{staticClass:"sub",attrs:{"to":"/developers"}},[_vm._v("Developers")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api"}},[_vm._v("API Docs")])],1),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/developers.vue?vue&type=template&id=01ea4dba&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_68662098_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(759);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(344);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_68662098_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(681);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_68662098_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_68662098_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "68662098",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_vue_vue_type_template_id_f944e3b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(783);
/* harmony import */ var _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sidebar_vue_vue_type_style_index_0_id_f944e3b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(680);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sidebar_vue_vue_type_template_id_f944e3b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _sidebar_vue_vue_type_template_id_f944e3b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "f944e3b2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_f944e3b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_f944e3b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_f944e3b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_f944e3b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68662098_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(351);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68662098_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68662098_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68662098_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/api/index.vue?vue&type=template&id=68662098&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"content-wrapper"},[_c('sidebar-nav'),_vm._v(" "),_c('section',[(!_vm.endpoint)?_vm._t("default"):_c('div',[_c('div',{staticClass:"flex"},[_c('h1',[_vm._v("\n              "+_vm._s(_vm.endpoint.group || 'General')+" -\n              "+_vm._s(_vm.endpoint.name.toLowerCase().replace(/\b\w/g, function (l) { return l.toUpperCase(); }))+"\n            ")]),_vm._v(" "),_c('a',{staticClass:"source",attrs:{"href":_vm.endpoint.sourceUrl,"target":"_blank"}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/developers/github.svg","alt":"Source Code on Github"}}),_vm._v(" "),_c('span',[_vm._v("View source code.")])])]),_vm._v(" "),_c('a',{staticClass:"btn-subtle active route",attrs:{"href":("https://api.nexushub.co" + (_vm.endpoint.route)),"target":"_blank"}},[_c('div',{staticClass:"verb"},[_vm._v(_vm._s(_vm.endpoint.method))]),_vm._v("\n            "+_vm._s(_vm.endpoint.route)+"\n          ")]),_vm._v(" "),(_vm.endpoint.pubsub)?_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Pub/Sub ✔\n          ")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Cache: "+_vm._s(_vm.endpoint.cache ? _vm.endpoint.cache.duration : 60)+"s\n          ")]),_vm._v(" "),_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Rate Limit: "+_vm._s(_vm.endpoint.limit ? _vm.endpoint.limit.maxInInterval : 20)+"\n            requests per\n            "+_vm._s(_vm.endpoint.limit ? _vm.endpoint.limit.interval / 1000 : 5)+"s\n          ")]),_vm._v(" "),_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Authorization: "+_vm._s(_vm.endpoint.scope || 'none')+"\n          ")]),_vm._v(" "),(_vm.endpoint.description)?_c('p',{staticClass:"description"},[_vm._v("\n            "+_vm._s(_vm.endpoint.description)+"\n          ")]):_vm._e(),_vm._v(" "),(_vm.endpoint.method !== 'GET')?_c('div',{staticClass:"sub-section"},[_c('h2',[_vm._v("Request Format")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:(_vm.stringify(_vm.endpoint.request.body)),expression:"stringify(endpoint.request.body)"}]},[_vm._v("              "),_c('code',{staticClass:"javascript"}),_vm._v("\n            ")])]):_vm._e(),_vm._v(" "),(_vm.endpoint.response || _vm.example)?_c('div',{staticClass:"sub-section"},[_c('div',{staticClass:"flex"},[_c('h2',[_vm._v("Response Format")]),_vm._v(" "),(!_vm.endpoint.scope && _vm.endpoint.response)?_c('div',{staticClass:"btn-outline",on:{"click":_vm.toggleExample}},[_vm._v("\n                Live Example\n              ")]):_vm._e()]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:(_vm.stringify(_vm.example) || _vm.stringify(_vm.endpoint.response)),expression:"stringify(example) || stringify(endpoint.response)"}]},[_vm._v("              "),_c('code',{staticClass:"javascript"}),_vm._v("\n            ")])]):_vm._e(),_vm._v(" "),(_vm.endpoint.query.length)?_c('div',{staticClass:"sub-section"},[_c('h2',[_vm._v("Query Params")]),_vm._v(" "),_vm._l((_vm.endpoint.query),function(query){return _c('div',{key:query.name},[_c('h3',[_vm._v(_vm._s(query.name)+_vm._s(query.required ? ' (required)' : ''))]),_vm._v(" "),(query.description)?_c('p',[_vm._v(_vm._s(query.description))]):_vm._e(),_vm._v(" "),(query.default !== undefined)?_c('div',[_c('h4',[_vm._v("Default")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:(typeof query.default === 'string' && (query.default.startsWith('function') || query.default.startsWith('() => '))
                ? query.default : _vm.stringify(query.default)),expression:"typeof query.default === 'string' && (query.default.startsWith('function') || query.default.startsWith('() => '))\n                ? query.default : stringify(query.default)"}]},[_vm._v("                  "),_c('code',{staticClass:"javascript"}),_vm._v("\n                ")])]):_vm._e()])})],2):_vm._e()])],2)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/developers/api/index.vue?vue&type=template&id=68662098&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/developers/sidebar.vue?vue&type=template&id=f944e3b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('div',{staticClass:"links"},[_c('h3',[_vm._v("Connecting")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api","exact":""}},[_vm._v("Client packages")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api/http","exact":""}},[_vm._v("HTTP")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api/ws","exact":""}},[_vm._v("WebSockets")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api/authentication","exact":""}},[_vm._v("Authentication")]),_vm._v(" "),_vm._l((_vm.groups),function(group){return _c('div',{key:group.name},[_c('h3',[_vm._v(_vm._s(group.name))]),_vm._v(" "),_vm._l((group.endpoints),function(endpoint){return _c('router-link',{key:endpoint.route + endpoint.method,attrs:{"to":("/developers/api/" + (group.name.replace(/ \/ /g, '-')) + "/" + (endpoint.name)),"exact":""}},[_vm._v("\n        "+_vm._s(endpoint.name)+"\n      ")])})],2)})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/developers/sidebar.vue?vue&type=template&id=f944e3b2&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);