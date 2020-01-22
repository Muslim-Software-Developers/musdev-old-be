(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Navbars.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Navbars.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navbars'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Navbars.vue?vue&type=template&id=7b1e7b04&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Navbars.vue?vue&type=template&id=7b1e7b04& ***!
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
              _c("strong", [_vm._v(" Bootstrap Navbar ")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href:
                        "https://bootstrap-vue.js.org/docs/components/navbar",
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
              "b-navbar",
              { attrs: { toggleable: "md", type: "dark", variant: "info" } },
              [
                _c("b-navbar-toggle", { attrs: { target: "nav_collapse" } }),
                _vm._v(" "),
                _c("b-navbar-brand", { attrs: { href: "#" } }, [
                  _vm._v("NavBar")
                ]),
                _vm._v(" "),
                _c(
                  "b-collapse",
                  { attrs: { "is-nav": "", id: "nav_collapse" } },
                  [
                    _c(
                      "b-navbar-nav",
                      [
                        _c("b-nav-item", { attrs: { href: "#" } }, [
                          _vm._v("Link")
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          { attrs: { href: "#", disabled: "" } },
                          [_vm._v("Disabled")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-navbar-nav",
                      { staticClass: "ml-auto" },
                      [
                        _c(
                          "b-nav-form",
                          [
                            _c("b-form-input", {
                              staticClass: "mr-sm-2",
                              attrs: {
                                size: "sm",
                                type: "text",
                                placeholder: "Search"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "my-2 my-sm-0",
                                attrs: { size: "sm", type: "submit" }
                              },
                              [_vm._v("Search")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item-dropdown",
                          { attrs: { text: "Lang", right: "" } },
                          [
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("EN")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("ES")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("RU")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("FA")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item-dropdown",
                          { attrs: { right: "" } },
                          [
                            _c("template", { slot: "button-content" }, [
                              _c("em", [_vm._v("User")])
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Profile")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Signout")
                            ])
                          ],
                          2
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
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("brand")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  { attrs: { variant: "faded", type: "light" } },
                  [
                    _c("b-navbar-brand", { attrs: { tag: "h1", href: "#" } }, [
                      _c("img", {
                        staticClass: "d-inline-block align-top",
                        attrs: {
                          src: "https://placekitten.com/g/30/30",
                          alt: "BV"
                        }
                      }),
                      _vm._v("\n            BootstrapVue\n          ")
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
              _vm._v(" "),
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("text")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  {
                    attrs: { toggleable: "", type: "light", variant: "light" }
                  },
                  [
                    _c("b-navbar-toggle", {
                      attrs: { target: "nav_text_collapse" }
                    }),
                    _vm._v(" "),
                    _c("b-navbar-brand", [_vm._v("BootstrapVue")]),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      { attrs: { "is-nav": "", id: "nav_text_collapse" } },
                      [
                        _c(
                          "b-navbar-nav",
                          [_c("b-nav-text", [_vm._v("Navbar text")])],
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
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("dropdown")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  {
                    attrs: { type: "dark", variant: "primary", toggleable: "" }
                  },
                  [
                    _c("b-navbar-toggle", {
                      attrs: { target: "nav_dropdown_collapse" }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      { attrs: { "is-nav": "", id: "nav_dropdown_collapse" } },
                      [
                        _c(
                          "b-navbar-nav",
                          [
                            _c("b-nav-item", { attrs: { href: "#" } }, [
                              _vm._v("Home")
                            ]),
                            _vm._v(" "),
                            _c("b-nav-item", { attrs: { href: "#" } }, [
                              _vm._v("Link")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-nav-item-dropdown",
                              { attrs: { text: "Lang", right: "" } },
                              [
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("EN")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("ES")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("RU")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("FA")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-nav-item-dropdown",
                              { attrs: { text: "User", right: "" } },
                              [
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("Account")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("Settings")]
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
              _vm._v(" "),
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("form")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  { attrs: { type: "light", variant: "light" } },
                  [
                    _c(
                      "b-nav-form",
                      [
                        _c("b-form-input", {
                          staticClass: "mr-sm-2",
                          attrs: { type: "text", placeholder: "Search" }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "my-2 my-sm-0",
                            attrs: {
                              variant: "outline-success",
                              type: "submit"
                            }
                          },
                          [_vm._v("Search")]
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
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("input group")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  { attrs: { type: "light", variant: "light" } },
                  [
                    _c(
                      "b-nav-form",
                      [
                        _c(
                          "b-input-group",
                          { attrs: { left: "@" } },
                          [
                            _c("b-form-input", {
                              staticClass: "mr-sm-2",
                              attrs: { type: "text", placeholder: "Username" }
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

/***/ "./resources/js/views/base/Navbars.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/base/Navbars.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbars_vue_vue_type_template_id_7b1e7b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbars.vue?vue&type=template&id=7b1e7b04& */ "./resources/js/views/base/Navbars.vue?vue&type=template&id=7b1e7b04&");
/* harmony import */ var _Navbars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbars.vue?vue&type=script&lang=js& */ "./resources/js/views/base/Navbars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbars_vue_vue_type_template_id_7b1e7b04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbars_vue_vue_type_template_id_7b1e7b04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/base/Navbars.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/base/Navbars.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/base/Navbars.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbars.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Navbars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/base/Navbars.vue?vue&type=template&id=7b1e7b04&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/base/Navbars.vue?vue&type=template&id=7b1e7b04& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_template_id_7b1e7b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbars.vue?vue&type=template&id=7b1e7b04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Navbars.vue?vue&type=template&id=7b1e7b04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_template_id_7b1e7b04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_template_id_7b1e7b04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);