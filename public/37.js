(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Alerts.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/notifications/Alerts.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'alerts',
  data: function data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert: function showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Alerts.vue?vue&type=template&id=dd7e7786&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/notifications/Alerts.vue?vue&type=template&id=dd7e7786& ***!
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
                      _c("strong", [_vm._v(" Bootstrap Alert")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/alert",
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
                          "b-alert",
                          { attrs: { show: "", variant: "primary" } },
                          [_vm._v("Primary Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "secondary" } },
                          [_vm._v("Secondary Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "success" } },
                          [_vm._v("Success Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "danger" } },
                          [_vm._v("Danger Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "warning" } },
                          [_vm._v("Warning Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "info" } },
                          [_vm._v("Info Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "light" } },
                          [_vm._v("Light Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "dark" } },
                          [_vm._v("Dark Alert")]
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
                      _vm._v(" Alert\n            "),
                      _c("small", [
                        _vm._v(" use "),
                        _c("code", [_vm._v(".alert-link")]),
                        _vm._v(" to provide links")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "primary" } },
                          [
                            _vm._v("\n              Primary Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "secondary" } },
                          [
                            _vm._v("\n              Secondary Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "success" } },
                          [
                            _vm._v("\n              Success Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "danger" } },
                          [
                            _vm._v("\n              Danger Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "warning" } },
                          [
                            _vm._v("\n              Warning Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "info" } },
                          [
                            _vm._v("\n              Info Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "light" } },
                          [
                            _vm._v("\n              Light Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "dark" } },
                          [
                            _vm._v(
                              "\n              Dark Alert with\n              "
                            ),
                            _c(
                              "b-link",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v("\n              .\n            ")
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
                      _vm._v(" Alerts "),
                      _c("small", [_vm._v("with additional content")])
                    ]),
                    _vm._v(" "),
                    _c("b-alert", { attrs: { show: "", variant: "success" } }, [
                      _c("h4", { staticClass: "alert-heading" }, [
                        _vm._v("Well done!")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n              Aww yeah, you successfully read this important alert message.\n              This example text is going to run a bit longer so that you can see\n              how spacing within an alert works with this kind of content.\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.\n            "
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
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" Alerts "),
                      _c("small", [_vm._v("dismissible")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-alert",
                          { attrs: { show: "", dismissible: "" } },
                          [
                            _vm._v(
                              "\n              Dismissible Alert!\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          {
                            attrs: {
                              variant: "danger",
                              dismissible: "",
                              show: _vm.showDismissibleAlert
                            },
                            on: {
                              dismissed: function($event) {
                                _vm.showDismissibleAlert = false
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            Dismissible Alert!\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-btn",
                          {
                            staticClass: "m-1",
                            attrs: { variant: "info" },
                            on: {
                              click: function($event) {
                                _vm.showDismissibleAlert = true
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            Show dismissible alert (" +
                                _vm._s(
                                  _vm.showDismissibleAlert
                                    ? "visible"
                                    : "hidden"
                                ) +
                                ")\n          "
                            )
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
                      _vm._v(" Alerts "),
                      _c("small", [_vm._v("auto dismissible")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-alert",
                          {
                            attrs: {
                              show: _vm.dismissCountDown,
                              dismissible: "",
                              variant: "warning"
                            },
                            on: {
                              dismissed: function($event) {
                                _vm.dismissCountdown = 0
                              },
                              "dismiss-count-down": _vm.countDownChanged
                            }
                          },
                          [
                            _vm._v("\n              Alert will dismiss after "),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.dismissCountDown))
                            ]),
                            _vm._v(" seconds...\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          {
                            attrs: {
                              show: _vm.dismissCountDown,
                              dismissible: "",
                              variant: "info"
                            },
                            on: {
                              dismissed: function($event) {
                                _vm.dismissCountdown = 0
                              },
                              "dismiss-count-down": _vm.countDownChanged
                            }
                          },
                          [
                            _vm._v(
                              "\n              Alert will dismiss after " +
                                _vm._s(_vm.dismissCountDown) +
                                " seconds...\n              "
                            ),
                            _c("b-progress", {
                              attrs: {
                                variant: "info",
                                max: _vm.dismissSecs,
                                value: _vm.dismissCountDown,
                                height: "4px"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-btn",
                          {
                            staticClass: "m-1",
                            attrs: { variant: "info" },
                            on: { click: _vm.showAlert }
                          },
                          [
                            _vm._v(
                              "\n              Show alert with timer\n            "
                            )
                          ]
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

/***/ "./resources/js/views/notifications/Alerts.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/notifications/Alerts.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alerts_vue_vue_type_template_id_dd7e7786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alerts.vue?vue&type=template&id=dd7e7786& */ "./resources/js/views/notifications/Alerts.vue?vue&type=template&id=dd7e7786&");
/* harmony import */ var _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alerts.vue?vue&type=script&lang=js& */ "./resources/js/views/notifications/Alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alerts_vue_vue_type_template_id_dd7e7786___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alerts_vue_vue_type_template_id_dd7e7786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/notifications/Alerts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/notifications/Alerts.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/notifications/Alerts.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alerts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/notifications/Alerts.vue?vue&type=template&id=dd7e7786&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/notifications/Alerts.vue?vue&type=template&id=dd7e7786& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_dd7e7786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alerts.vue?vue&type=template&id=dd7e7786& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Alerts.vue?vue&type=template&id=dd7e7786&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_dd7e7786___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_dd7e7786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);