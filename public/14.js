(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Collapses.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Collapses.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'collapses',
  data: function data() {
    return {
      showCollapse: true,
      text: "\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n        synth nesciunt you probably haven't heard of them accusamus labore VHS.\n      "
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Collapses.vue?vue&type=template&id=bd822172&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Collapses.vue?vue&type=template&id=bd822172& ***!
  \************************************************************************************************************************************************************************************************************/
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
                      _c("strong", [_vm._v(" Bootstrap Collapse ")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/collapse",
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
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.collapse1",
                                modifiers: { collapse1: true }
                              }
                            ],
                            attrs: { variant: "primary" }
                          },
                          [_vm._v("Toggle Collapse")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { staticClass: "mt-2", attrs: { id: "collapse1" } },
                          [
                            _c(
                              "b-card",
                              [
                                _c("p", { staticClass: "card-text" }, [
                                  _vm._v("Collapse contents Here")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.collapse1_inner",
                                        modifiers: { collapse1_inner: true }
                                      }
                                    ],
                                    attrs: { size: "sm" }
                                  },
                                  [_vm._v("Toggle Inner Collapse")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  {
                                    staticClass: "mt-2",
                                    attrs: { id: "collapse1_inner" }
                                  },
                                  [_c("b-card", [_vm._v("Hello!")])],
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
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [
                        _vm._v("with "),
                        _c("code", [_vm._v("v-b-toggle")]),
                        _vm._v(" directive")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.collapse2",
                                modifiers: { collapse2: true }
                              }
                            ],
                            staticClass: "m-1"
                          },
                          [_vm._v("Toggle Collapse")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle",
                                value: "collapse2",
                                expression: "'collapse2'"
                              }
                            ],
                            staticClass: "m-1"
                          },
                          [_vm._v("Toggle Collapse")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { attrs: { id: "collapse2" } },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I am collapsible content!\n              "
                              )
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
          ],
          1
        ),
        _vm._v(" "),
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
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [
                        _vm._v("with "),
                        _c("code", [_vm._v("visibility")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.collapse3",
                                modifiers: { collapse3: true }
                              }
                            ],
                            staticClass: "m-1"
                          },
                          [_vm._v("Toggle Collapse")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { attrs: { visible: "", id: "collapse3" } },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I should start open!\n              "
                              )
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
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [
                        _vm._v("with "),
                        _c("code", [_vm._v("v-model")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            class: _vm.showCollapse ? "collapsed" : null,
                            attrs: {
                              "aria-controls": "collapse4",
                              "aria-expanded": _vm.showCollapse
                                ? "true"
                                : "false"
                            },
                            on: {
                              click: function($event) {
                                _vm.showCollapse = !_vm.showCollapse
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n              Toggle Collapse\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          {
                            staticClass: "mt-2",
                            attrs: { id: "collapse4" },
                            model: {
                              value: _vm.showCollapse,
                              callback: function($$v) {
                                _vm.showCollapse = $$v
                              },
                              expression: "showCollapse"
                            }
                          },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I should start open!\n              "
                              )
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
          ],
          1
        ),
        _vm._v(" "),
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
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("multiple elements")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.collapseA.collapseB",
                                modifiers: { collapseA: true, collapseB: true }
                              }
                            ]
                          },
                          [_vm._v("Toggle Both Collapse A and B")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { staticClass: "mt-2", attrs: { id: "collapseA" } },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I am collapsable content A!\n              "
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { staticClass: "mt-2", attrs: { id: "collapseB" } },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I am collapsable content B!\n              "
                              )
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
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [
                        _c("code", [_vm._v("accordion")]),
                        _vm._v(" support")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { role: "tablist" } },
                      [
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion1",
                                        modifiers: { accordion1: true }
                                      }
                                    ],
                                    attrs: {
                                      block: "",
                                      href: "#",
                                      variant: "info"
                                    }
                                  },
                                  [_vm._v("Accordion 1")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion1",
                                  visible: "",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c("b-card-body", [
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(
                                      "\n                    I start opened because "
                                    ),
                                    _c("code", [_vm._v("visible")]),
                                    _vm._v(" is "),
                                    _c("code", [_vm._v("true")])
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.text) +
                                        "\n                  "
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion2",
                                        modifiers: { accordion2: true }
                                      }
                                    ],
                                    attrs: {
                                      block: "",
                                      href: "#",
                                      variant: "info"
                                    }
                                  },
                                  [_vm._v("Accordion 2")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion2",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c("b-card-body", [
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.text) +
                                        "\n                  "
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion3",
                                        modifiers: { accordion3: true }
                                      }
                                    ],
                                    attrs: {
                                      block: "",
                                      href: "#",
                                      variant: "info"
                                    }
                                  },
                                  [_vm._v("Accordion 3")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion3",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c("b-card-body", [
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.text) +
                                        "\n                  "
                                    )
                                  ])
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

/***/ "./resources/js/views/base/Collapses.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/base/Collapses.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapses_vue_vue_type_template_id_bd822172___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapses.vue?vue&type=template&id=bd822172& */ "./resources/js/views/base/Collapses.vue?vue&type=template&id=bd822172&");
/* harmony import */ var _Collapses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collapses.vue?vue&type=script&lang=js& */ "./resources/js/views/base/Collapses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Collapses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Collapses_vue_vue_type_template_id_bd822172___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Collapses_vue_vue_type_template_id_bd822172___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/base/Collapses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/base/Collapses.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/base/Collapses.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Collapses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Collapses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/base/Collapses.vue?vue&type=template&id=bd822172&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/base/Collapses.vue?vue&type=template&id=bd822172& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_template_id_bd822172___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Collapses.vue?vue&type=template&id=bd822172& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Collapses.vue?vue&type=template&id=bd822172&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_template_id_bd822172___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_template_id_bd822172___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);