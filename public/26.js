(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Paginations.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Paginations.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'paginations',
  data: function data() {
    return {
      currentPage: 3
    };
  },
  methods: {
    linkGen: function linkGen(pageNum) {
      return '#page/' + pageNum + '/foobar';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Paginations.vue?vue&type=template&id=5fe9cd8c&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Paginations.vue?vue&type=template&id=5fe9cd8c& ***!
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
  return _c("div", { staticClass: "wrapper" }, [
    _c(
      "div",
      { staticClass: "animated fadeIn" },
      [
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Bootstrap Pagination")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href:
                        "https://bootstrap-vue.js.org/docs/components/pagination",
                      rel: "noreferrer noopener",
                      target: "_blank"
                    }
                  },
                  [_c("small", { staticClass: "text-muted" }, [_vm._v("docs")])]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Default")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { size: "md", "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h6", [_vm._v("Small")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { size: "sm", "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-sm-down-none" },
                  [
                    _c("h6", [_vm._v("Large")]),
                    _vm._v(" "),
                    _c("b-pagination", {
                      attrs: { size: "lg", "total-rows": 100, "per-page": 10 },
                      model: {
                        value: _vm.currentPage,
                        callback: function($$v) {
                          _vm.currentPage = $$v
                        },
                        expression: "currentPage"
                      }
                    }),
                    _vm._v(" "),
                    _c("br")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [_vm._v("currentPage: " + _vm._s(_vm.currentPage))])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Pagination ")]),
              _vm._v(" "),
              _c("small", [_vm._v("alignment")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Left alignment (default)")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h6", [_vm._v("Center alignment")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { align: "center", "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h6", [_vm._v("Right (end) alignment")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { align: "right", "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", [_vm._v("currentPage: " + _vm._s(_vm.currentPage))])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Pagination ")]),
              _vm._v(" "),
              _c("small", [_vm._v("navigation")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Default")]),
                _vm._v(" "),
                _c("b-pagination-nav", {
                  attrs: { "base-url": "#", "number-of-pages": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("h6", { staticClass: "mt-4" }, [
                  _vm._v("With link generator function")
                ]),
                _vm._v(" "),
                _c("b-pagination-nav", {
                  attrs: { "link-gen": _vm.linkGen, "number-of-pages": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "mt-4" }, [
                  _vm._v("currentPage: " + _vm._s(_vm.currentPage))
                ])
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/base/Paginations.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/base/Paginations.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paginations_vue_vue_type_template_id_5fe9cd8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginations.vue?vue&type=template&id=5fe9cd8c& */ "./resources/js/views/base/Paginations.vue?vue&type=template&id=5fe9cd8c&");
/* harmony import */ var _Paginations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginations.vue?vue&type=script&lang=js& */ "./resources/js/views/base/Paginations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Paginations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paginations_vue_vue_type_template_id_5fe9cd8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Paginations_vue_vue_type_template_id_5fe9cd8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/base/Paginations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/base/Paginations.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/base/Paginations.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Paginations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/base/Paginations.vue?vue&type=template&id=5fe9cd8c&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/base/Paginations.vue?vue&type=template&id=5fe9cd8c& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_template_id_5fe9cd8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginations.vue?vue&type=template&id=5fe9cd8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Paginations.vue?vue&type=template&id=5fe9cd8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_template_id_5fe9cd8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_template_id_5fe9cd8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);