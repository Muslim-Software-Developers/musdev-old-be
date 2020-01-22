(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Badges.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/notifications/Badges.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'badges',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Badges.vue?vue&type=template&id=5f3b0656&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/notifications/Badges.vue?vue&type=template&id=5f3b0656& ***!
  \******************************************************************************************************************************************************************************************************************/
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
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _c("strong", [_vm._v(" Bootstrap Badge")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/badge",
                              rel: "noreferrer noopener",
                              target: "_blank"
                            }
                          },
                          [
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v("docs")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "h2",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "h3",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "h4",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "h5",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "h6",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { slot: "footer" }, slot: "footer" },
                      [
                        _c(
                          "b-button",
                          { attrs: { variant: "primary" } },
                          [
                            _vm._v("\n              Notifications "),
                            _c(
                              "b-badge",
                              {
                                style: { position: "static" },
                                attrs: { variant: "light" }
                              },
                              [_vm._v("4")]
                            )
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
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" Badge "),
                      _c("small", [_vm._v("contextual variations")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-badge",
                          { staticClass: "m-1", attrs: { variant: "primary" } },
                          [_vm._v("Primary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { variant: "secondary" }
                          },
                          [_vm._v("Secondary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { staticClass: "m-1", attrs: { variant: "success" } },
                          [_vm._v("Success")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { staticClass: "m-1", attrs: { variant: "danger" } },
                          [_vm._v("Danger")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { staticClass: "m-1", attrs: { variant: "warning" } },
                          [_vm._v("Warning")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { staticClass: "m-1", attrs: { variant: "info" } },
                          [_vm._v("Info")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { staticClass: "m-1", attrs: { variant: "light" } },
                          [_vm._v("Light")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { staticClass: "m-1", attrs: { variant: "dark" } },
                          [_vm._v("Dark")]
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
                      _vm._v(" Badge "),
                      _c("small", [_vm._v("pills")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { pill: "", variant: "primary" }
                          },
                          [_vm._v("Primary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { pill: "", variant: "secondary" }
                          },
                          [_vm._v("Secondary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { pill: "", variant: "success" }
                          },
                          [_vm._v("Success")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { pill: "", variant: "danger" }
                          },
                          [_vm._v("Danger")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { pill: "", variant: "warning" }
                          },
                          [_vm._v("Warning")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { pill: "", variant: "info" }
                          },
                          [_vm._v("Info")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { pill: "", variant: "light" }
                          },
                          [_vm._v("Light")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { pill: "", variant: "dark" }
                          },
                          [_vm._v("Dark")]
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
                      _vm._v(" Badge "),
                      _c("small", [_vm._v("actionable")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { href: "#", variant: "primary" }
                          },
                          [_vm._v("Primary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { href: "#", variant: "secondary" }
                          },
                          [_vm._v("Secondary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { href: "#", variant: "success" }
                          },
                          [_vm._v("Success")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { href: "#", variant: "danger" }
                          },
                          [_vm._v("Danger")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { href: "#", variant: "warning" }
                          },
                          [_vm._v("Warning")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { href: "#", variant: "info" }
                          },
                          [_vm._v("Info")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { href: "#", variant: "light" }
                          },
                          [_vm._v("Light")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-1",
                            attrs: { href: "#", variant: "dark" }
                          },
                          [_vm._v("Dark")]
                        )
                      ],
                      1
                    )
                  ]
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/notifications/Badges.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/notifications/Badges.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badges_vue_vue_type_template_id_5f3b0656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badges.vue?vue&type=template&id=5f3b0656& */ "./resources/js/views/notifications/Badges.vue?vue&type=template&id=5f3b0656&");
/* harmony import */ var _Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badges.vue?vue&type=script&lang=js& */ "./resources/js/views/notifications/Badges.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Badges_vue_vue_type_template_id_5f3b0656___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Badges_vue_vue_type_template_id_5f3b0656___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/notifications/Badges.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/notifications/Badges.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/notifications/Badges.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Badges.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Badges.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/notifications/Badges.vue?vue&type=template&id=5f3b0656&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/notifications/Badges.vue?vue&type=template&id=5f3b0656& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_5f3b0656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Badges.vue?vue&type=template&id=5f3b0656& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Badges.vue?vue&type=template&id=5f3b0656&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_5f3b0656___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_5f3b0656___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);