(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Modals.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/notifications/Modals.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modals',
  data: function data() {
    return {
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Modals.vue?vue&type=template&id=6ea504e8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/notifications/Modals.vue?vue&type=template&id=6ea504e8& ***!
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
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _c(
        "div",
        { staticClass: "animated fadeIn" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-card",
                    [
                      _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                        _c("i", { staticClass: "fa fa-align-justify" }),
                        _vm._v(" Bootstrap Modals")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.myModal = true
                            }
                          }
                        },
                        [_vm._v("Launch demo modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.largeModal = true
                            }
                          }
                        },
                        [_vm._v("Launch large modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.smallModal = true
                            }
                          }
                        },
                        [_vm._v("Launch small modal")]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "primary" },
                          on: {
                            click: function($event) {
                              _vm.primaryModal = true
                            }
                          }
                        },
                        [_vm._v("Launch primary modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "success" },
                          on: {
                            click: function($event) {
                              _vm.successModal = true
                            }
                          }
                        },
                        [_vm._v("Launch success modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "warning" },
                          on: {
                            click: function($event) {
                              _vm.warningModal = true
                            }
                          }
                        },
                        [_vm._v("Launch warning modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "danger" },
                          on: {
                            click: function($event) {
                              _vm.dangerModal = true
                            }
                          }
                        },
                        [_vm._v("Launch danger modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "info" },
                          on: {
                            click: function($event) {
                              _vm.infoModal = true
                            }
                          }
                        },
                        [_vm._v("Launch info modal")]
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
        "b-modal",
        {
          attrs: { title: "Modal title" },
          on: {
            ok: function($event) {
              _vm.myModal = false
            }
          },
          model: {
            value: _vm.myModal,
            callback: function($$v) {
              _vm.myModal = $$v
            },
            expression: "myModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Modal title", size: "lg" },
          on: {
            ok: function($event) {
              _vm.largeModal = false
            }
          },
          model: {
            value: _vm.largeModal,
            callback: function($$v) {
              _vm.largeModal = $$v
            },
            expression: "largeModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Modal title", size: "sm" },
          on: {
            ok: function($event) {
              _vm.smallModal = false
            }
          },
          model: {
            value: _vm.smallModal,
            callback: function($$v) {
              _vm.smallModal = $$v
            },
            expression: "smallModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "primary",
            "header-bg-variant": "primary",
            "content-class": "border-primary"
          },
          on: {
            ok: function($event) {
              _vm.primaryModal = false
            }
          },
          model: {
            value: _vm.primaryModal,
            callback: function($$v) {
              _vm.primaryModal = $$v
            },
            expression: "primaryModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "success",
            "header-bg-variant": "success",
            "content-class": "border-success",
            "ok-variant": "success"
          },
          on: {
            ok: function($event) {
              _vm.successModal = false
            }
          },
          model: {
            value: _vm.successModal,
            callback: function($$v) {
              _vm.successModal = $$v
            },
            expression: "successModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "warning",
            "header-bg-variant": "warning",
            "content-class": "border-warning",
            "ok-variant": "warning"
          },
          on: {
            ok: function($event) {
              _vm.warningModal = false
            }
          },
          model: {
            value: _vm.warningModal,
            callback: function($$v) {
              _vm.warningModal = $$v
            },
            expression: "warningModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "danger",
            "header-bg-variant": "danger",
            "content-class": "border-danger",
            "ok-variant": "danger"
          },
          on: {
            ok: function($event) {
              _vm.dangerModal = false
            }
          },
          model: {
            value: _vm.dangerModal,
            callback: function($$v) {
              _vm.dangerModal = $$v
            },
            expression: "dangerModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "info",
            "header-bg-variant": "info",
            "content-class": "border-info",
            "ok-variant": "info"
          },
          on: {
            ok: function($event) {
              _vm.infoModal = false
            }
          },
          model: {
            value: _vm.infoModal,
            callback: function($$v) {
              _vm.infoModal = $$v
            },
            expression: "infoModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/notifications/Modals.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/notifications/Modals.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modals_vue_vue_type_template_id_6ea504e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals.vue?vue&type=template&id=6ea504e8& */ "./resources/js/views/notifications/Modals.vue?vue&type=template&id=6ea504e8&");
/* harmony import */ var _Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modals.vue?vue&type=script&lang=js& */ "./resources/js/views/notifications/Modals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modals_vue_vue_type_template_id_6ea504e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modals_vue_vue_type_template_id_6ea504e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/notifications/Modals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/notifications/Modals.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/notifications/Modals.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Modals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/notifications/Modals.vue?vue&type=template&id=6ea504e8&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/notifications/Modals.vue?vue&type=template&id=6ea504e8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_6ea504e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modals.vue?vue&type=template&id=6ea504e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/notifications/Modals.vue?vue&type=template&id=6ea504e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_6ea504e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_6ea504e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);