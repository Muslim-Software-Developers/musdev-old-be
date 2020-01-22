(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Tabs.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Tabs.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'tabs',
  data: function data() {
    return {
      tabIndex: [0, 0],
      tabs: ['Calculator', 'Shopping cart', 'Charts']
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Tabs.vue?vue&type=template&id=6de5802d&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Tabs.vue?vue&type=template&id=6de5802d& ***!
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
  return _c(
    "div",
    { staticClass: "animated fadeIn" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    [
                      _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                        _c("br"),
                        _vm._v(
                          " 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Profile" } }, [
                        _c("br"),
                        _vm._v(
                          "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Disabled", disabled: "" } },
                        [
                          _c("br"),
                          _vm._v(
                            "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs with icons\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    [
                      _c(
                        "b-tab",
                        { attrs: { active: "" } },
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-calculator" })
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            " 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-basket-loaded" })
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-pie-chart" })
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs with icons\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      model: {
                        value: _vm.tabIndex[0],
                        callback: function($$v) {
                          _vm.$set(_vm.tabIndex, 0, $$v)
                        },
                        expression: "tabIndex[0]"
                      }
                    },
                    [
                      _c(
                        "b-tab",
                        { attrs: { active: "" } },
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-calculator" }),
                            _vm._v(" " + _vm._s(_vm.tabs[0]) + "\n            ")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            " 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-basket-loaded" }),
                            _vm._v(" " + _vm._s(_vm.tabs[1]) + "\n            ")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-pie-chart" }),
                            _vm._v(" " + _vm._s(_vm.tabs[2]) + "\n            ")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs vertical\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-card",
                    { attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-tabs",
                        {
                          attrs: {
                            card: "",
                            pills: "",
                            vertical: "",
                            "nav-wrapper-class": "w-40"
                          },
                          model: {
                            value: _vm.tabIndex[1],
                            callback: function($$v) {
                              _vm.$set(_vm.tabIndex, 1, $$v)
                            },
                            expression: "tabIndex[1]"
                          }
                        },
                        [
                          _c(
                            "b-tab",
                            { attrs: { active: "" } },
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "icon-calculator" }),
                                _vm._v(
                                  " " + _vm._s(_vm.tabs[0]) + "\n            "
                                )
                              ]),
                              _vm._v(
                                "\n            1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "icon-basket-loaded" }),
                                _vm._v(
                                  " " + _vm._s(_vm.tabs[1]) + "\n            "
                                )
                              ]),
                              _vm._v(
                                "\n            2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "icon-pie-chart" }),
                                _vm._v(
                                  " " + _vm._s(_vm.tabs[2]) + "\n            "
                                )
                              ]),
                              _vm._v(
                                "\n            3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                              )
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

/***/ "./resources/js/views/base/Tabs.vue":
/*!******************************************!*\
  !*** ./resources/js/views/base/Tabs.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_6de5802d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=6de5802d& */ "./resources/js/views/base/Tabs.vue?vue&type=template&id=6de5802d&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/views/base/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_6de5802d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tabs_vue_vue_type_template_id_6de5802d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/base/Tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/base/Tabs.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/base/Tabs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/base/Tabs.vue?vue&type=template&id=6de5802d&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/base/Tabs.vue?vue&type=template&id=6de5802d& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6de5802d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=template&id=6de5802d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Tabs.vue?vue&type=template&id=6de5802d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6de5802d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6de5802d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);