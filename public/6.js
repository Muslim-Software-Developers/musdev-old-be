(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
/* harmony import */ var _UsersData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersData */ "./resources/js/views/feedbacks/UsersData.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Feedbacks',
  components: {
    cSwitch: _coreui_vue__WEBPACK_IMPORTED_MODULE_1__["Switch"]
  },
  props: {
    caption: {
      type: String,
      default: 'Feedbacks'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      items: _UsersData__WEBPACK_IMPORTED_MODULE_2__["default"].filter(function (user) {
        return user.id < 42;
      }),
      fields: [{
        key: 'id'
      }, {
        key: 'user'
      }, {
        key: 'recieved_on'
      }, {
        key: 'message'
      }, {
        key: 'status'
      }],
      currentPage: 1,
      perPage: 5,
      totalRows: 0
    };
  },
  computed: {},
  methods: {
    getBadge: function getBadge(status) {
      return status === 'Active' ? 'success' : status === 'Inactive' ? 'secondary' : status === 'Pending' ? 'warning' : status === 'Banned' ? 'danger' : 'primary';
    },
    getRowCount: function getRowCount(items) {
      return items.length;
    },
    feedbackLink: function feedbackLink(id) {
      return "feedbacks/".concat(id.toString());
    },
    rowClicked: function rowClicked(item) {
      var userLink = this.feedbackLink(item.id);
      this.$router.push({
        path: userLink
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-body[data-v-3357167e] table > tbody > tr > td {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=template&id=3357167e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=template&id=3357167e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12", xl: "6" } },
        [
          _c(
            "transition",
            { attrs: { name: "slide" } },
            [
              _c(
                "b-card",
                [
                  _c("div", {
                    attrs: { slot: "header" },
                    domProps: { innerHTML: _vm._s(_vm.caption) },
                    slot: "header"
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row mr-auto ml-auto" },
                    [
                      _c("h6", [_vm._v("Treated")]),
                      _vm._v(" "),
                      _c("c-switch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          label: "",
                          outline: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("h6", [_vm._v("Pending")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-table", {
                    attrs: {
                      hover: _vm.hover,
                      striped: _vm.striped,
                      bordered: _vm.bordered,
                      small: _vm.small,
                      fixed: _vm.fixed,
                      responsive: "sm",
                      items: _vm.items,
                      fields: _vm.fields,
                      "current-page": _vm.currentPage,
                      "per-page": _vm.perPage
                    },
                    on: { "row-clicked": _vm.rowClicked },
                    scopedSlots: _vm._u([
                      {
                        key: "id",
                        fn: function(data) {
                          return [_c("strong", [_vm._v(_vm._s(data.item.id))])]
                        }
                      },
                      {
                        key: "name",
                        fn: function(data) {
                          return [
                            _c("strong", [_vm._v(_vm._s(data.item.name))])
                          ]
                        }
                      },
                      {
                        key: "status",
                        fn: function(data) {
                          return [
                            _c(
                              "b-badge",
                              {
                                attrs: {
                                  variant: _vm.getBadge(data.item.status)
                                }
                              },
                              [_vm._v(_vm._s(data.item.status))]
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c(
                    "nav",
                    [
                      _c("b-pagination", {
                        attrs: {
                          size: "sm",
                          "total-rows": _vm.getRowCount(_vm.items),
                          "per-page": _vm.perPage,
                          "prev-text": "Prev",
                          "next-text": "Next",
                          "hide-goto-end-buttons": ""
                        },
                        model: {
                          value: _vm.currentPage,
                          callback: function($$v) {
                            _vm.currentPage = $$v
                          },
                          expression: "currentPage"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/feedbacks/Feedbacks.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/feedbacks/Feedbacks.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Feedbacks_vue_vue_type_template_id_3357167e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedbacks.vue?vue&type=template&id=3357167e&scoped=true& */ "./resources/js/views/feedbacks/Feedbacks.vue?vue&type=template&id=3357167e&scoped=true&");
/* harmony import */ var _Feedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedbacks.vue?vue&type=script&lang=js& */ "./resources/js/views/feedbacks/Feedbacks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Feedbacks_vue_vue_type_style_index_0_id_3357167e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css& */ "./resources/js/views/feedbacks/Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Feedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Feedbacks_vue_vue_type_template_id_3357167e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Feedbacks_vue_vue_type_template_id_3357167e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3357167e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/feedbacks/Feedbacks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/feedbacks/Feedbacks.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/feedbacks/Feedbacks.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedbacks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/feedbacks/Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/feedbacks/Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_style_index_0_id_3357167e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=style&index=0&id=3357167e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_style_index_0_id_3357167e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_style_index_0_id_3357167e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_style_index_0_id_3357167e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_style_index_0_id_3357167e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_style_index_0_id_3357167e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/feedbacks/Feedbacks.vue?vue&type=template&id=3357167e&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/feedbacks/Feedbacks.vue?vue&type=template&id=3357167e&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_template_id_3357167e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedbacks.vue?vue&type=template&id=3357167e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feedbacks/Feedbacks.vue?vue&type=template&id=3357167e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_template_id_3357167e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedbacks_vue_vue_type_template_id_3357167e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/feedbacks/UsersData.js":
/*!***************************************************!*\
  !*** ./resources/js/views/feedbacks/UsersData.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var usersData = [{
  id: 0,
  user: 'John Doe',
  recieved_on: '2018/01/01',
  message: 'Guest',
  status: 'Pending'
}, {
  id: 1,
  user: 'Samppa Nori',
  recieved_on: '2018/01/01',
  message: 'Member',
  status: 'Active'
}, {
  id: 2,
  user: 'Estavan Lykos',
  recieved_on: '2018/02/01',
  message: 'Staff',
  status: 'Banned'
}, {
  id: 3,
  user: 'Chetan Mohamed',
  recieved_on: '2018/02/01',
  message: 'Admin',
  status: 'Inactive'
}, {
  id: 4,
  user: 'Derick Maximinus',
  recieved_on: '2018/03/01',
  message: 'Member',
  status: 'Pending'
}, {
  id: 5,
  user: 'Friderik Dávid',
  recieved_on: '2018/01/21',
  message: 'Staff',
  status: 'Active'
}, {
  id: 6,
  user: 'Yiorgos Avraamu',
  recieved_on: '2018/01/01',
  message: 'Member',
  status: 'Active'
}, {
  id: 7,
  user: 'Avram Tarasios',
  recieved_on: '2018/02/01',
  message: 'Staff',
  status: 'Banned'
}, {
  id: 8,
  user: 'Quintin Ed',
  recieved_on: '2018/02/01',
  message: 'Admin',
  status: 'Inactive'
}, {
  id: 9,
  user: 'Enéas Kwadwo',
  recieved_on: '2018/03/01',
  message: 'Member',
  status: 'Pending'
}, {
  id: 10,
  user: 'Agapetus Tadeáš',
  recieved_on: '2018/01/21',
  message: 'Staff',
  status: 'Active'
}, {
  id: 11,
  user: 'Carwyn Fachtna',
  recieved_on: '2018/01/01',
  message: 'Member',
  status: 'Active'
}, {
  id: 12,
  user: 'Nehemiah Tatius',
  recieved_on: '2018/02/01',
  message: 'Staff',
  status: 'Banned'
}, {
  id: 13,
  user: 'Ebbe Gemariah',
  recieved_on: '2018/02/01',
  message: 'Admin',
  status: 'Inactive'
}, {
  id: 14,
  user: 'Eustorgios Amulius',
  recieved_on: '2018/03/01',
  message: 'Member',
  status: 'Pending'
}, {
  id: 15,
  user: 'Leopold Gáspár',
  recieved_on: '2018/01/21',
  message: 'Staff',
  status: 'Active'
}, {
  id: 16,
  user: 'Pompeius René',
  recieved_on: '2018/01/01',
  message: 'Member',
  status: 'Active'
}, {
  id: 17,
  user: 'Paĉjo Jadon',
  recieved_on: '2018/02/01',
  message: 'Staff',
  status: 'Banned'
}, {
  id: 18,
  user: 'Micheal Mercurius',
  recieved_on: '2018/02/01',
  message: 'Admin',
  status: 'Inactive'
}, {
  id: 19,
  user: 'Ganesha Dubhghall',
  recieved_on: '2018/03/01',
  message: 'Member',
  status: 'Pending'
}, {
  id: 20,
  user: 'Hiroto Šimun',
  recieved_on: '2018/01/21',
  message: 'Staff',
  status: 'Active'
}, {
  id: 21,
  user: 'Vishnu Serghei',
  recieved_on: '2018/01/01',
  message: 'Member',
  status: 'Active'
}, {
  id: 22,
  user: 'Zbyněk Phoibos',
  recieved_on: '2018/02/01',
  message: 'Staff',
  status: 'Banned'
}, {
  id: 23,
  user: 'Einar Randall',
  recieved_on: '2018/02/01',
  message: 'Admin',
  status: 'Inactive'
}, {
  id: 24,
  user: 'Félix Troels',
  recieved_on: '2018/03/21',
  message: 'Staff',
  status: 'Active'
}, {
  id: 25,
  user: 'Aulus Agmundr',
  recieved_on: '2018/01/01',
  message: 'Member',
  status: 'Pending'
}, {
  id: 42,
  user: 'Ford Prefex',
  recieved_on: '2001/05/21',
  message: 'Alien',
  status: 'Don\'t panic!'
}];
/* harmony default export */ __webpack_exports__["default"] = (usersData);

/***/ })

}]);