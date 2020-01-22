(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Navs.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Navs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
  name: 'navs'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Navs.vue?vue&type=template&id=20bf5f5f&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Navs.vue?vue&type=template&id=20bf5f5f& ***!
  \*******************************************************************************************************************************************************************************************************/
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
              _c("strong", [_vm._v(" Bootstrap Navs")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href: "https://bootstrap-vue.js.org/docs/components/nav",
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
                _c(
                  "b-nav",
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Another Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _c("small", [_vm._v("tab style")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { tabs: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Another Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _c("small", [_vm._v("pill style")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { pills: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Another Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _c("small", [_vm._v("fill tabs")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { fill: "", tabs: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link with a long name ")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _c("small", [_vm._v("justified tabs")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { justified: "", tabs: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link with a long name ")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _c("small", [_vm._v("dropdown support")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { pills: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c(
                      "b-nav-item-dropdown",
                      {
                        attrs: { id: "nav7_ddown", text: "Dropdown", right: "" }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("one")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("two")]),
                        _vm._v(" "),
                        _c("b-dropdown-divider"),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("three")])
                      ],
                      1
                    )
                  ],
                  1
                )
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _c("small", [_vm._v("vertical variation")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { staticClass: "w-25", attrs: { vertical: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Another Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
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

/***/ "./resources/js/views/base/Navs.vue":
/*!******************************************!*\
  !*** ./resources/js/views/base/Navs.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navs_vue_vue_type_template_id_20bf5f5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navs.vue?vue&type=template&id=20bf5f5f& */ "./resources/js/views/base/Navs.vue?vue&type=template&id=20bf5f5f&");
/* harmony import */ var _Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navs.vue?vue&type=script&lang=js& */ "./resources/js/views/base/Navs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navs_vue_vue_type_template_id_20bf5f5f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navs_vue_vue_type_template_id_20bf5f5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/base/Navs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/base/Navs.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/base/Navs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Navs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/base/Navs.vue?vue&type=template&id=20bf5f5f&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/base/Navs.vue?vue&type=template&id=20bf5f5f& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_template_id_20bf5f5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navs.vue?vue&type=template&id=20bf5f5f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Navs.vue?vue&type=template&id=20bf5f5f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_template_id_20bf5f5f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_template_id_20bf5f5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);