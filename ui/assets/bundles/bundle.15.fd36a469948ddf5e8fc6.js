(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_68d89bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(772);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(383);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_68d89bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(713);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_68d89bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_68d89bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "68d89bcc",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _search = __webpack_require__(177);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['placeholder', 'focus'],

  data: function data() {
    return {
      input: '',
      autocomplete: {
        name: '',
        type: ''
      },
      suggestions: []
    };
  },
  mounted: function mounted() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (this.focus && !isMobile) {
      this.$refs.input.focus();
    }
  },


  methods: {
    fetch: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.input = event.target.value;
                this.$store.commit('setSearchInput', event.target.value);

                if (!this.autocomplete.name.startsWith(event.target.value)) {
                  this.autocomplete = {
                    name: '',
                    category: 'Any'
                  };
                }
                _context.next = 5;
                return this.fetchSuggestions();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x) {
        return _ref.apply(this, arguments);
      }

      return fetch;
    }(),
    fetchSuggestions: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var result, query, regex;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = [];

                if (!(this.input.length > 1)) {
                  _context2.next = 6;
                  break;
                }

                query = encodeURIComponent(this.input);
                _context2.next = 5;
                return this.$cubic.get('/warframe/v1/suggestions?query=' + query + '&limit=4');

              case 5:
                result = _context2.sent;

              case 6:
                regex = new RegExp('^' + this.input, 'i');

                if (result.length && result[0].name.replace(regex, this.input).startsWith(this.input)) {
                  this.autocomplete = {
                    name: result[0].name.replace(regex, this.input),
                    category: result[0].category
                  };
                  this.suggestions = result;
                } else {
                    this.autocomplete = {
                      name: '',
                      category: 'Any'
                    };
                    this.suggestions = [];
                  }

                if (this.input.length < 1) {
                  this.autocomplete = {
                    name: '',
                    category: ''
                  };
                }

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchSuggestions() {
        return _ref2.apply(this, arguments);
      }

      return fetchSuggestions;
    }(),
    complete: function complete() {
      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.autocomplete.name) {
        this.input = this.autocomplete.name;
      }
    },
    search: function search() {
      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (suggestion.name) {
        this.input = '';
        this.autocomplete = {
          name: '',
          category: ''
        };
        this.query(suggestion.webUrl);
      }
      if (this.suggestions.length) {
        this.input = '';
        this.autocomplete = {
          name: '',
          category: ''
        };
        this.query(this.suggestions[0].webUrl);
        this.suggestions = [];
      } else {
        this.$router.push('/warframe/search?input=' + this.input);
      }
    },
    query: function query(url) {
      var path = void 0;
      var route = this.$route.path;
      var item = this.$route.params.item;

      if (this.$route.fullPath.startsWith('/warframe/items/')) {
        path = '' + url + route.split(item)[1];
        path = path.endsWith('//') ? path.slice(0, -1) : path;
      } else {
        path = url;
      }

      this.$router.push(path);
    }
  },

  storeModule: _search2.default
};

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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(165);

var _notifications2 = _interopRequireDefault(_notifications);

var _input = __webpack_require__(175);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shortcut = void 0,
    listener = void 0;
try {
  shortcut = __webpack_require__(176);
} catch (err) {}

exports.default = {
  components: {
    notifications: _notifications2.default,
    search: _input2.default
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
  mounted: function mounted() {
    var _this = this;

    listener = shortcut.bind('shift + f', function (e) {
      e.preventDefault();
      _this.$el.querySelector('input').focus();
    });
  },
  beforeDestroy: function beforeDestroy() {
    shortcut.unbind('shift + f', listener);
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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warframe_vue_vue_type_template_id_5220c66b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(157);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _warframe_vue_vue_type_style_index_0_id_5220c66b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _warframe_vue_vue_type_template_id_5220c66b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _warframe_vue_vue_type_template_id_5220c66b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "5220c66b",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_vue_vue_type_template_id_5086e622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_vue_vue_type_template_id_5086e622___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _input_vue_vue_type_template_id_5086e622___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'search',
  state: {
    input: ''
  },
  mutations: {
    setSearchInput: function setSearchInput(state, input) {
      state.input = input;
    }
  },
  actions: {
    applyInputQuery: function applyInputQuery(_ref, route) {
      var commit = _ref.commit;

      if (route.query.input) {
        commit('setSearchInput', route.query.input);
      }
    }
  }
};

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vueObserveVisibility = __webpack_require__(200);

var _vueObserveVisibility2 = _interopRequireDefault(_vueObserveVisibility);

var _module2 = __webpack_require__(163);

var _module3 = _interopRequireDefault(_module2);

var _moment = __webpack_require__(143);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default
  },

  props: ['patchlog', 'overview'],

  data: function data() {
    return {
      visible: false,
      seen: false,
      itemName: this.$route.params.item
    };
  },
  beforeMount: function beforeMount() {
    _vue2.default.use(_vueObserveVisibility2.default);
  },


  methods: {
    moment: _moment2.default,
    setVisibility: function setVisibility(bool, entry) {
      var buffer = -99999;
      if (!this.$store.state.items) return;

      if (bool || entry.boundingClientRect.top < entry.rootBounds.bottom + buffer || entry.boundingClientRect.bottom < entry.rootBounds.top + buffer) {
        this.visible = true;
        this.seen = true;
        this.$store.commit('addItemPatchlog', this.patchlog);
      } else {
        this.visible = false;
        this.$store.commit('removeItemPatchlog', this.patchlog);
      }
    }
  }
};

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/input.vue?vue&type=template&id=5086e622&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('label',[_vm._v("Search")]),_vm._v(" "),_c('input',{ref:"input",attrs:{"placeholder":_vm.placeholder || 'Try: Frost Prime, Maiming Strike...',"type":"text"},domProps:{"value":_vm.input.name || _vm.input},on:{"input":_vm.fetch,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.complete($event)},function($event){if(!$event.shiftKey){ return null; }$event.stopPropagation();}],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.search($event)}}}),_vm._v(" "),_c('span',{staticClass:"autocomplete"},[_vm._v(_vm._s(_vm.autocomplete.name))]),_vm._v(" "),(_vm.autocomplete.category)?_c('span',{staticClass:"autocomplete-type"},[_vm._v("\n      "+_vm._s(_vm.autocomplete.category === 'Any' ? 'Search anywhere' : ("Found in " + (_vm.autocomplete.category)))+"\n    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"tools"},_vm._l((_vm.suggestions),function(suggestion){return _c('div',{key:suggestion.uniqueName,staticClass:"suggestion",on:{"click":function($event){return _vm.search(suggestion)}}},[_c('div',{staticClass:"ico-36"},[_c('img',{attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}}),_vm._v(" "),_c('img',{staticClass:"backdrop",attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}})]),_vm._v(" "),_c('div',{staticClass:"suggestion-main"},[_c('span',{staticClass:"suggestion-name"},[_vm._v(_vm._s(suggestion.name))]),_vm._v(" "),_c('span',{staticClass:"suggestion-type"},[_vm._v(_vm._s(suggestion.type))])]),_vm._v(" "),(suggestion.keyData)?_c('span',{staticClass:"suggestion-data"},[_vm._v(_vm._s(suggestion.keyData))]):_vm._e()])}),0),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/input.vue?vue&type=template&id=5086e622&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_5220c66b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_5220c66b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_5220c66b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_5220c66b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/warframe.vue?vue&type=template&id=5220c66b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":"/","exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),_c('search',{attrs:{"placeholder":"Search items..."}},[_c('span',{staticClass:"shortcut"},[_vm._v("SHIFT + F")])]),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/warframe.vue?vue&type=template&id=5220c66b&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['name', 'maxHeight', 'maxWidth'],

  data: function data() {
    return {
      display: 'none'
    };
  },
  mounted: function mounted() {
    var nitroAds = window['nitroAds'];
    if (!nitroAds) return;

    this.display = 'inline-block';
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patchlog_vue_vue_type_template_id_e39ef420_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(341);
/* harmony import */ var _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(178);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(338);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _patchlog_vue_vue_type_template_id_e39ef420_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _patchlog_vue_vue_type_template_id_e39ef420_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "e39ef420",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/patchlog.vue?vue&type=template&id=e39ef420&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:({
  callback: _vm.setVisibility,
  intersection: {
    rootMargin: '0px 0px 20% 0px'
  }
}),expression:"{\n  callback: setVisibility,\n  intersection: {\n    rootMargin: '0px 0px 20% 0px'\n  }\n}"}],staticClass:"patchlog",class:{ visible: _vm.visible }},[_c('template',{slot:"header"},[_c('h3',[_vm._v(_vm._s(_vm.patchlog.name))]),_vm._v(" "),_c('time',{attrs:{"datetime":_vm.patchlog.date}},[_vm._v(_vm._s(_vm.overview ? _vm.moment (new Date(_vm.patchlog.date)).fromNow() : _vm.moment(new Date(_vm.patchlog.date)).format('MMMM Do YYYY')))])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"image"},[((_vm.visible || _vm.seen) && _vm.patchlog.imgUrl)?_c('img',{attrs:{"src":_vm.patchlog.imgUrl,"alt":_vm.patchlog.name,"onerror":"this.style.display='none'"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"shade"})]),_vm._v(" "),(_vm.patchlog.additions)?_c('div',[_c('h4',[_vm._v("Additions")]),_vm._v(" "),_vm._l((_vm.patchlog.additions.split('\n')),function(log,i){return (log)?_c('p',{key:log + i},[_vm._v("\n        "+_vm._s(log)+"\n      ")]):_vm._e()})],2):_vm._e(),_vm._v(" "),(_vm.patchlog.changes)?_c('div',[_c('h4',[_vm._v("Changes")]),_vm._v(" "),_vm._l((_vm.patchlog.changes.split('\n')),function(log,i){return (log)?_c('p',{key:log + i},[_vm._v("\n        "+_vm._s(log)+"\n      ")]):_vm._e()})],2):_vm._e(),_vm._v(" "),(_vm.patchlog.fixes)?_c('div',[_c('h4',[_vm._v("Fixes")]),_vm._v(" "),_vm._l((_vm.patchlog.fixes.split('\n')),function(log,i){return (log)?_c('p',{key:log + i},[_vm._v("\n        "+_vm._s(log)+"\n      ")]):_vm._e()})],2):_vm._e()]),_vm._v(" "),_c('template',{slot:"footer"},[_c('a',{attrs:{"href":_vm.patchlog.url,"target":"_blank"}},[_vm._v("\n      Full Patch Notes\n      "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/arrow-right.svg","alt":"View full patch notes"}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/patchlog.vue?vue&type=template&id=e39ef420&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ad_vue_vue_type_template_id_0aee625b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(484);
/* harmony import */ var _ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(191);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ad_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(350);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ad_vue_vue_type_template_id_0aee625b___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ad_vue_vue_type_template_id_0aee625b___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _activity = __webpack_require__(488);

var _activity2 = _interopRequireDefault(_activity);

var _ad = __webpack_require__(343);

var _ad2 = _interopRequireDefault(_ad);

var _appContent = __webpack_require__(153);

var _appContent2 = _interopRequireDefault(_appContent);

var _meta = __webpack_require__(156);

var _meta2 = _interopRequireDefault(_meta);

var _module2 = __webpack_require__(163);

var _module3 = _interopRequireDefault(_module2);

var _warframe = __webpack_require__(167);

var _warframe2 = _interopRequireDefault(_warframe);

var _opmGlobal = __webpack_require__(701);

var _opmGlobal2 = _interopRequireDefault(_opmGlobal);

var _patchlog = __webpack_require__(337);

var _patchlog2 = _interopRequireDefault(_patchlog);

var _input = __webpack_require__(175);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(711);

var _button2 = _interopRequireDefault(_button);

var _warframe3 = __webpack_require__(712);

var _warframe4 = _interopRequireDefault(_warframe3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ad: _ad2.default,
    navigation: _warframe2.default,
    appContent: _appContent2.default,
    opm: _opmGlobal2.default,
    activity: _activity2.default,
    module: _module3.default,
    patchlog: _patchlog2.default,
    search: _input2.default,
    searchButton: _button2.default
  },

  computed: {
    opm: function opm() {
      return this.$store.state.opm.all;
    },
    activity: function activity() {
      return this.$store.state.busyhours.data;
    },
    patchlogs: function patchlogs() {
      return this.$store.state.warframe.patchlogs;
    }
  },

  asyncData: function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = this.$store;
              _context.next = 3;
              return this.$cubic.get('/warframe/v1/patchlogs');

            case 3:
              _context.t1 = _context.sent;

              _context.t0.commit.call(_context.t0, 'setWarframePatchlogs', _context.t1);

            case 5:
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


  storeModule: _warframe4.default,

  head: {
    title: 'NexusHub · Never miss out on a trade again!',
    meta: (0, _meta2.default)({
      title: 'NexusHub · Never miss out on a trade again!',
      description: 'Get real-time trading data and prices from more than 100,000 players in Warframe\'s Trade Chat, Warframe Market and more.'
    })
  }
};

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _opm = __webpack_require__(489);

var _opm2 = _interopRequireDefault(_opm);

var _opm3 = __webpack_require__(708);

var _opm4 = _interopRequireDefault(_opm3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateInterval = void 0;

exports.default = {
  components: {
    opm: _opm2.default
  },

  computed: {
    opm: function opm() {
      return this.$store.state.opm.all;
    }
  },

  beforeMount: function beforeMount() {
    var _this = this;

    this.$cubic.subscribe('/warframe/v1/orders/opm', function (opm) {
      _this.$store.commit('setOpmAll', opm);
    });
    updateInterval = setInterval((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var opm;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$cubic.get('/warframe/v1/orders/opm');

            case 2:
              opm = _context.sent;

              _this.$store.commit('setOpmAll', opm);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    })), 1000 * 60);
  },
  beforeDestroy: function beforeDestroy() {
    this.$cubic.unsubscribe('/warframe/v1/orders/opm');
    clearInterval(updateInterval);
  },
  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var opm;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.$cubic.get('/warframe/v1/orders/opm');

            case 2:
              opm = _context2.sent;

              this.$store.commit('setOpmAll', opm);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function asyncData() {
      return _ref2.apply(this, arguments);
    }

    return asyncData;
  }(),


  storeModule: _opm4.default
};

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    search: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var input, path, route, item;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                input = this.$store.state.search.input;


                if (input) {
                  path = void 0;

                  if (typeof input !== 'string') {
                    route = this.$route.path;
                    item = this.$route.params.item;

                    if (this.$route.fullPath.startsWith('/warframe/items/')) {
                      path = '' + input.webUrl + route.split(item)[1];
                      path = path.endsWith('//') ? path.slice(0, -1) : path;
                    } else {
                      path = input.webUrl;
                    }
                  } else {
                    path = '/warframe/search?input=' + input;
                  }

                  this.$router.push(path);
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function search() {
        return _ref.apply(this, arguments);
      }

      return search;
    }()
  }
};

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/ad.vue?vue&type=template&id=0aee625b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ad-unit layout-center",style:({
  display: _vm.display,
  'max-height': _vm.maxHeight,
  'max-width': _vm.maxWidth
}),attrs:{"id":("ad-" + _vm.name)}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/ad.vue?vue&type=template&id=0aee625b&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _opm_global_vue_vue_type_template_id_d9b080ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(789);
/* harmony import */ var _opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _opm_global_vue_vue_type_style_index_0_id_d9b080ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _opm_global_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _opm_global_vue_vue_type_template_id_d9b080ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _opm_global_vue_vue_type_template_id_d9b080ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "d9b080ea",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'opm',
  state: {
    all: {
      total: 0,
      intervals: [],
      sources: {
        wfm: 0.5,
        tradeChat: 0.5
      },
      mostTraded: []
    },
    item: {
      total: 0,
      intervals: [],
      sources: {
        wfm: 0.5,
        tradeChat: 0.5
      }
    }
  },
  mutations: {
    setOpmAll: function setOpmAll(state, opm) {
      state.all = opm;
    },
    setOpmItem: function setOpmItem(state, opm) {
      state.item = opm;
    }
  }
};

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_style_index_0_id_d9b080ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(400);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_style_index_0_id_d9b080ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_style_index_0_id_d9b080ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_style_index_0_id_d9b080ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_vue_vue_type_template_id_5b22a806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(790);
/* harmony import */ var _button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(402);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _button_vue_vue_type_template_id_5b22a806___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _button_vue_vue_type_template_id_5b22a806___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'warframe',

  state: {
    patchlogs: []
  },

  mutations: {
    setWarframePatchlogs: function setWarframePatchlogs(state, patchlogs) {
      state.patchlogs = patchlogs;
    }
  }
};

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68d89bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68d89bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68d89bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68d89bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/index.vue?vue&type=template&id=68d89bcc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('app-content',[_c('header',[_c('div',{staticClass:"background-container"},[_c('div',{staticClass:"background"})]),_vm._v(" "),_c('div',{staticClass:"container search-container"},[_c('div',{staticClass:"search-logo"},[_c('img',{staticClass:"logo",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}}),_vm._v(" "),_c('span',[_vm._v(".co")])]),_vm._v(" "),_c('div',{staticClass:"search-bar"},[_c('search',{attrs:{"focus":true}}),_vm._v(" "),_c('search-button')],1),_vm._v(" "),_c('h2',[_vm._v("Never miss out on a trade again!")])])]),_vm._v(" "),_c('section',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row-margin overview"},[_c('div',{staticClass:"col-b-4"},[_c('h2',{staticClass:"sub"},[_vm._v("Market Overview")]),_vm._v(" "),_c('div',{staticClass:"realtime"},[_c('opm'),_vm._v(" "),_c('div',{staticClass:"most-traded row"},_vm._l((_vm.opm.mostTraded),function(order){return _c('router-link',{key:order.item,staticClass:"item col interactive",attrs:{"to":("/warframe/items/" + (order.item.split(' ').join('-').toLowerCase()) + "/trading")}},[_c('module',[_c('template',{slot:"header"},[_c('div',{staticClass:"img"},[_c('object',{attrs:{"data":("/img/warframe/items/" + (order.item.split(' ').join('-').toLowerCase()) + ".png"),"type":"image/png"}},[_c('img',{attrs:{"src":("/img/warframe/items/" + (order.item.split(' ').join('-').toLowerCase()) + ".jpeg"),"alt":order.item}})])]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(order.item))])]),_vm._v(" "),_c('template',{slot:"body"},[_c('span',{staticClass:"highlight"},[_vm._v(_vm._s(order.amount))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"sub"},[_vm._v(" Orders for "+_vm._s(order.item))])])],2)],1)}),1)],1)]),_vm._v(" "),_c('div',{staticClass:"col-b activity-data"},[_c('h2',{staticClass:"sub"},[_vm._v("Busy Hours")]),_vm._v(" "),_c('activity')],1)]),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-index-market-overview"}})],1)]),_vm._v(" "),_c('section',[_c('div',{staticClass:"container"},[_c('h2',{staticClass:"sub"},[_vm._v("Latest Patchlogs")]),_vm._v(" "),_c('div',{staticClass:"row-margin patchlogs"},_vm._l((_vm.patchlogs),function(patchlog){return _c('patchlog',{key:patchlog.date,staticClass:"col-b",attrs:{"patchlog":patchlog,"overview":true}})}),1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-index-patchlogs"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/index.vue?vue&type=template&id=68d89bcc&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/opm-global.vue?vue&type=template&id=d9b080ea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('opm',{attrs:{"opm":_vm.opm}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/opm-global.vue?vue&type=template&id=d9b080ea&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/modules/button.vue?vue&type=template&id=5b22a806&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"search-button",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.search($event)}}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\n    Search\n  ")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('img',{staticClass:"ico-16",attrs:{"src":"/img/sidebar/search.svg","alt":"Search"}})])}]


// CONCATENATED MODULE: ./ui/components/search/modules/button.vue?vue&type=template&id=5b22a806&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);