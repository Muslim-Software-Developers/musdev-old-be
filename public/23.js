(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Tooltips.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Tooltips.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tooltips',
  data: function data() {
    return {
      show: true,
      disabled: false
    };
  },
  methods: {
    onOpen: function onOpen() {
      this.$refs.tooltip.$emit('open');
    },
    onClose: function onClose() {
      this.$refs.tooltip.$emit('close');
    },
    disableByRef: function disableByRef() {
      if (this.disabled) {
        this.$refs.tooltip2.$emit('enable');
      } else {
        this.$refs.tooltip2.$emit('disable');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Tooltips.vue?vue&type=template&id=303220ff&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Tooltips.vue?vue&type=template&id=303220ff& ***!
  \***********************************************************************************************************************************************************************************************************/
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
              _c("strong", [_vm._v(" Bootstrap Tooltips ")]),
              _c("small", [
                _c("code", [_vm._v("v-b-tooltip")]),
                _vm._v(" directive")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href:
                        "https://bootstrap-vue.js.org/docs/components/tooltip",
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
              "b-row",
              [
                _c("b-col", { attrs: { cols: "6" } }, [
                  _c(
                    "div",
                    { staticClass: "text-center my-3" },
                    [
                      _c(
                        "b-btn",
                        {
                          directives: [
                            {
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover",
                              modifiers: { hover: true }
                            }
                          ],
                          attrs: { title: "I am a tooltip!" }
                        },
                        [_vm._v("Hover Me")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("b-col", { attrs: { cols: "6" } }, [
                  _c(
                    "div",
                    { staticClass: "text-center my-3" },
                    [
                      _c(
                        "b-btn",
                        {
                          attrs: { id: "tooltipButton-2", variant: "primary" }
                        },
                        [_vm._v("Button")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tooltip",
                        { attrs: { show: "", target: "tooltipButton-2" } },
                        [_vm._v("\n              I start open\n            ")]
                      )
                    ],
                    1
                  )
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
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Tooltips ")]),
              _c("small", [
                _c("code", [_vm._v("b-tooltip")]),
                _vm._v(" component")
              ])
            ]),
            _vm._v(" "),
            _c(
              "b-row",
              [
                _c(
                  "b-col",
                  { staticClass: "py-4 text-center", attrs: { md: "6" } },
                  [
                    _c(
                      "b-btn",
                      {
                        attrs: { id: "exButton1", variant: "outline-success" }
                      },
                      [_vm._v("Live chat")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "py-4 text-center", attrs: { md: "6" } },
                  [
                    _c(
                      "b-btn",
                      {
                        attrs: { id: "exButton2", variant: "outline-success" }
                      },
                      [_vm._v("Html chat")]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("b-tooltip", {
              attrs: { target: "exButton1", title: "Online!" }
            }),
            _vm._v(" "),
            _c(
              "b-tooltip",
              { attrs: { target: "exButton2", placement: "bottom" } },
              [_vm._v("\n        Hello "), _c("strong", [_vm._v("World!")])]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Tooltips ")]),
              _c("small", [_c("code", [_vm._v("show")]), _vm._v(" prop")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c(
                  "b-btn",
                  { attrs: { id: "tooltipButton-1", variant: "primary" } },
                  [_vm._v("I have a tooltip")]
                ),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    on: {
                      click: function($event) {
                        _vm.show = !_vm.show
                      }
                    }
                  },
                  [_vm._v("Toggle Tooltip")]
                ),
                _vm._v(" "),
                _c(
                  "b-tooltip",
                  {
                    attrs: {
                      show: _vm.show,
                      target: "tooltipButton-1",
                      placement: "top"
                    },
                    on: {
                      "update:show": function($event) {
                        _vm.show = $event
                      }
                    }
                  },
                  [
                    _vm._v("\n          Hello "),
                    _c("strong", [_vm._v("World!")])
                  ]
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
              _c("strong", [_vm._v(" Tooltips ")]),
              _c("small", [
                _c("code", [_vm._v("open close")]),
                _vm._v(" events")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-column text-md-center" },
              [
                _c(
                  "div",
                  { staticClass: "p-2" },
                  [
                    _c(
                      "b-btn",
                      {
                        attrs: {
                          id: "tooltipButton-showEvent",
                          variant: "primary"
                        }
                      },
                      [_vm._v("I have a tooltip")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "p-2" },
                  [
                    _c(
                      "b-btn",
                      { staticClass: "px-1 mr-1", on: { click: _vm.onOpen } },
                      [_vm._v("Open")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      { staticClass: "px-1", on: { click: _vm.onClose } },
                      [_vm._v("Close")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tooltip",
                  {
                    ref: "tooltip",
                    attrs: { target: "tooltipButton-showEvent" }
                  },
                  [
                    _vm._v("\n          Hello "),
                    _c("strong", [_vm._v("World!")])
                  ]
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
              _c("strong", [_vm._v(" Tooltips ")]),
              _c("small", [
                _c("code", [_vm._v("enable disable")]),
                _vm._v(" events")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-column text-md-center" }, [
              _c(
                "div",
                { staticClass: "p-2" },
                [
                  _c(
                    "b-btn",
                    {
                      attrs: { id: "tooltipButton-disable", variant: "primary" }
                    },
                    [_vm._v("I have a tooltip")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "p-2" },
                [
                  _c(
                    "b-btn",
                    {
                      staticClass: "mr-1",
                      on: {
                        click: function($event) {
                          _vm.disabled = !_vm.disabled
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.disabled ? "Enable" : "Disable") +
                          " Tooltip by prop\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("b-btn", { on: { click: _vm.disableByRef } }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.disabled ? "Enable" : "Disable") +
                        " Tooltip by $ref event\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tooltip",
                    {
                      ref: "tooltip2",
                      attrs: {
                        disabled: _vm.disabled,
                        target: "tooltipButton-disable"
                      },
                      on: {
                        "update:disabled": function($event) {
                          _vm.disabled = $event
                        }
                      }
                    },
                    [
                      _vm._v("\n            Hello "),
                      _c("strong", [_vm._v("World!")])
                    ]
                  )
                ],
                1
              )
            ])
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

/***/ "./resources/js/views/base/Tooltips.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/base/Tooltips.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltips_vue_vue_type_template_id_303220ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltips.vue?vue&type=template&id=303220ff& */ "./resources/js/views/base/Tooltips.vue?vue&type=template&id=303220ff&");
/* harmony import */ var _Tooltips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltips.vue?vue&type=script&lang=js& */ "./resources/js/views/base/Tooltips.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tooltips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tooltips_vue_vue_type_template_id_303220ff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tooltips_vue_vue_type_template_id_303220ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/base/Tooltips.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/base/Tooltips.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/base/Tooltips.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tooltips.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Tooltips.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/base/Tooltips.vue?vue&type=template&id=303220ff&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/base/Tooltips.vue?vue&type=template&id=303220ff& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_303220ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tooltips.vue?vue&type=template&id=303220ff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Tooltips.vue?vue&type=template&id=303220ff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_303220ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_303220ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);