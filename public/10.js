(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/ColorTheme.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/theme/ColorTheme.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorView */ "./resources/js/views/theme/ColorView.vue");
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ColorTheme',
  components: {
    ColorView: _ColorView__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    classObj: {
      type: String,
      default: 'theme-color w-75 rounded mb-3'
    },
    color: {
      type: String,
      default: 'bg-secondary'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/ColorView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/theme/ColorView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__);
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
  name: 'ColorView',
  data: function data() {
    return {
      bgColor: 'rgb(255, 255, 255)'
    };
  },
  computed: {
    hexColor: function hexColor() {
      return Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.bgColor);
    }
  },
  methods: {
    setColor: function setColor() {
      var elem = this.$parent.$el.children[0];
      var color = window.getComputedStyle(elem).getPropertyValue('background-color');
      this.bgColor = color || this.bgColor;
    }
  },
  mounted: function mounted() {
    this.setColor();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/Colors.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/theme/Colors.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorTheme */ "./resources/js/views/theme/ColorTheme.vue");
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'colors',
  components: {
    ColorTheme: _ColorTheme__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/ColorTheme.vue?vue&type=template&id=5af2bf4b&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/theme/ColorTheme.vue?vue&type=template&id=5af2bf4b& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "b-col",
    { staticClass: "mb-4", attrs: { xl: "2", md: "4", sm: "6", xs: "12" } },
    [
      _c("div", {
        class: [_vm.classObj, _vm.color],
        style: { paddingTop: "75%" }
      }),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("color-view")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/ColorView.vue?vue&type=template&id=31f74bda&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/theme/ColorView.vue?vue&type=template&id=31f74bda& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("table", { staticClass: "w-100" }, [
    _c("tbody", [
      _c("tr", [
        _c("td", { staticClass: "text-muted" }, [_vm._v("HEX:")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [
          _vm._v(_vm._s(this.hexColor))
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { staticClass: "text-muted" }, [_vm._v("RGB:")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [
          _vm._v(_vm._s(this.bgColor))
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/Colors.vue?vue&type=template&id=79f1cbd6&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/theme/Colors.vue?vue&type=template&id=79f1cbd6& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "animated fadeIn" },
    [
      _c(
        "b-card",
        { attrs: { "header-tag": "header" } },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("i", { staticClass: "icon-drop" }),
            _vm._v(" Theme colors\n    ")
          ]),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "b-row",
                [
                  _c("color-theme", { attrs: { color: "bg-primary" } }, [
                    _c("h6", [_vm._v("Brand Primary Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-secondary" } }, [
                    _c("h6", [_vm._v("Brand Secondary Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-success" } }, [
                    _c("h6", [_vm._v("Brand Success Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-danger" } }, [
                    _c("h6", [_vm._v("Brand Danger Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-warning" } }, [
                    _c("h6", [_vm._v("Brand Warning Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-info" } }, [
                    _c("h6", [_vm._v("Brand Info Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-light" } }, [
                    _c("h6", [_vm._v("Brand Light Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-dark" } }, [
                    _c("h6", [_vm._v("Brand Dark Color")])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        { attrs: { "header-tag": "header" } },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("i", { staticClass: "icon-drop" }),
            _vm._v(" Grays\n    ")
          ]),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "b-row",
                [
                  _c("color-theme", { attrs: { color: "bg-gray-100" } }, [
                    _c("h6", [_vm._v("Brand 100 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-200" } }, [
                    _c("h6", [_vm._v("Brand 200 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-300" } }, [
                    _c("h6", [_vm._v("Brand 300 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-400" } }, [
                    _c("h6", [_vm._v("Brand 400 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-500" } }, [
                    _c("h6", [_vm._v("Brand 500 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-600" } }, [
                    _c("h6", [_vm._v("Brand 600 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-700" } }, [
                    _c("h6", [_vm._v("Brand 700 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-800" } }, [
                    _c("h6", [_vm._v("Brand 800 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-900" } }, [
                    _c("h6", [_vm._v("Brand 900 Color")])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        { attrs: { "header-tag": "header" } },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("i", { staticClass: "icon-drop" }),
            _vm._v(" Additional colors\n    ")
          ]),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "b-row",
                [
                  _c("color-theme", { attrs: { color: "bg-blue" } }, [
                    _c("h6", [_vm._v("Brand Blue Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-indigo" } }, [
                    _c("h6", [_vm._v("Brand Indigo Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-purple" } }, [
                    _c("h6", [_vm._v("Brand Purple Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-pink" } }, [
                    _c("h6", [_vm._v("Brand Pink Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-red" } }, [
                    _c("h6", [_vm._v("Brand Red Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-orange" } }, [
                    _c("h6", [_vm._v("Brand Orange Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-yellow" } }, [
                    _c("h6", [_vm._v("Brand Yellow Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-green" } }, [
                    _c("h6", [_vm._v("Brand Green Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-teal" } }, [
                    _c("h6", [_vm._v("Brand Teal Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-cyan" } }, [
                    _c("h6", [_vm._v("Brand Cyan Color")])
                  ])
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

/***/ "./resources/js/views/theme/ColorTheme.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/theme/ColorTheme.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorTheme_vue_vue_type_template_id_5af2bf4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorTheme.vue?vue&type=template&id=5af2bf4b& */ "./resources/js/views/theme/ColorTheme.vue?vue&type=template&id=5af2bf4b&");
/* harmony import */ var _ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorTheme.vue?vue&type=script&lang=js& */ "./resources/js/views/theme/ColorTheme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorTheme_vue_vue_type_template_id_5af2bf4b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ColorTheme_vue_vue_type_template_id_5af2bf4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/theme/ColorTheme.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/theme/ColorTheme.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/theme/ColorTheme.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorTheme.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/ColorTheme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/theme/ColorTheme.vue?vue&type=template&id=5af2bf4b&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/theme/ColorTheme.vue?vue&type=template&id=5af2bf4b& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_template_id_5af2bf4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorTheme.vue?vue&type=template&id=5af2bf4b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/ColorTheme.vue?vue&type=template&id=5af2bf4b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_template_id_5af2bf4b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_template_id_5af2bf4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/theme/ColorView.vue":
/*!************************************************!*\
  !*** ./resources/js/views/theme/ColorView.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorView_vue_vue_type_template_id_31f74bda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorView.vue?vue&type=template&id=31f74bda& */ "./resources/js/views/theme/ColorView.vue?vue&type=template&id=31f74bda&");
/* harmony import */ var _ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorView.vue?vue&type=script&lang=js& */ "./resources/js/views/theme/ColorView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorView_vue_vue_type_template_id_31f74bda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ColorView_vue_vue_type_template_id_31f74bda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/theme/ColorView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/theme/ColorView.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/theme/ColorView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/ColorView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/theme/ColorView.vue?vue&type=template&id=31f74bda&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/theme/ColorView.vue?vue&type=template&id=31f74bda& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_template_id_31f74bda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorView.vue?vue&type=template&id=31f74bda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/ColorView.vue?vue&type=template&id=31f74bda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_template_id_31f74bda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_template_id_31f74bda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/theme/Colors.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/theme/Colors.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Colors_vue_vue_type_template_id_79f1cbd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colors.vue?vue&type=template&id=79f1cbd6& */ "./resources/js/views/theme/Colors.vue?vue&type=template&id=79f1cbd6&");
/* harmony import */ var _Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Colors.vue?vue&type=script&lang=js& */ "./resources/js/views/theme/Colors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Colors_vue_vue_type_template_id_79f1cbd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Colors_vue_vue_type_template_id_79f1cbd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/theme/Colors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/theme/Colors.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/theme/Colors.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Colors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/Colors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/theme/Colors.vue?vue&type=template&id=79f1cbd6&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/theme/Colors.vue?vue&type=template&id=79f1cbd6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_template_id_79f1cbd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Colors.vue?vue&type=template&id=79f1cbd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/theme/Colors.vue?vue&type=template&id=79f1cbd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_template_id_79f1cbd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_template_id_79f1cbd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);