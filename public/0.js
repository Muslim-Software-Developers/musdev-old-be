(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
/* harmony import */ var _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultHeaderDropdownAccnt */ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DefaultHeader',
  components: {
    AsideToggler: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["AsideToggler"],
    AppHeader: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["Header"],
    DefaultHeaderDropdownAccnt: _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_1__["default"],
    SidebarToggler: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["SidebarToggler"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["HeaderDropdown"]
  },
  data: function data() {
    return {
      itemsCount: 42
    };
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeader.vue?vue&type=template&id=6a6f0262&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeader.vue?vue&type=template&id=6a6f0262& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "AppHeader",
    { attrs: { fixed: "" } },
    [
      _c("SidebarToggler", {
        staticClass: "d-lg-none",
        attrs: { display: "md", mobile: "" }
      }),
      _vm._v(" "),
      _c("b-link", { staticClass: "navbar-brand", attrs: { to: "#" } }, [
        _c("img", {
          staticClass: "navbar-brand-full",
          attrs: {
            src: "img/brand/logo.svg",
            width: "89",
            height: "25",
            alt: "CoreUI Logo"
          }
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "navbar-brand-minimized",
          attrs: {
            src: "img/brand/sygnet.svg",
            width: "30",
            height: "30",
            alt: "CoreUI Logo"
          }
        })
      ]),
      _vm._v(" "),
      _c("SidebarToggler", {
        staticClass: "d-md-down-none",
        attrs: { display: "lg", defaultOpen: true }
      }),
      _vm._v(" "),
      _c(
        "b-navbar-nav",
        { staticClass: "d-md-down-none" },
        [
          _c(
            "b-nav-item",
            { staticClass: "px-3", attrs: { to: "/dashboard" } },
            [_vm._v("Dashboard")]
          ),
          _vm._v(" "),
          _c(
            "b-nav-item",
            { staticClass: "px-3", attrs: { to: "/users", exact: "" } },
            [_vm._v("Users")]
          ),
          _vm._v(" "),
          _c("b-nav-item", { staticClass: "px-3" }, [_vm._v("Settings")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-navbar-nav",
        { staticClass: "ml-auto" },
        [
          _c(
            "b-nav-item",
            { staticClass: "d-md-down-none" },
            [
              _c("i", { staticClass: "icon-bell" }),
              _vm._v(" "),
              _c("b-badge", { attrs: { pill: "", variant: "danger" } }, [
                _vm._v("5")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("b-nav-item", { staticClass: "d-md-down-none" }, [
            _c("i", { staticClass: "icon-list" })
          ]),
          _vm._v(" "),
          _c("b-nav-item", { staticClass: "d-md-down-none" }, [
            _c("i", { staticClass: "icon-location-pin" })
          ]),
          _vm._v(" "),
          _c("DefaultHeaderDropdownAccnt")
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { "margin-right": "30px" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "AppHeaderDropdown",
    { attrs: { right: "", "no-caret": "" } },
    [
      _c("template", { slot: "header" }, [
        _c("img", {
          staticClass: "img-avatar",
          attrs: { src: "img/avatars/6.jpg", alt: "admin@bootstrapmaster.com" }
        })
      ]),
      _vm._v("\\\n  "),
      _c(
        "template",
        { slot: "dropdown" },
        [
          _c(
            "b-dropdown-header",
            { staticClass: "text-center", attrs: { tag: "div" } },
            [_c("strong", [_vm._v("Account")])]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-bell-o" }),
              _vm._v(" Member Requests\n      "),
              _c("b-badge", { attrs: { variant: "info" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-envelope-o" }),
              _vm._v(" Messages\n      "),
              _c("b-badge", { attrs: { variant: "success" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-tasks" }),
              _vm._v(" Deactivation Requests\n      "),
              _c("b-badge", { attrs: { variant: "danger" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-file" }),
              _vm._v(" Projects\n      "),
              _c("b-badge", { attrs: { variant: "primary" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-comments" }),
              _vm._v(" Comments\n      "),
              _c("b-badge", { attrs: { variant: "warning" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-header",
            { staticClass: "text-center", attrs: { tag: "div" } },
            [_c("strong", [_vm._v("Settings")])]
          ),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-user" }),
            _vm._v(" Profile")
          ]),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-wrench" }),
            _vm._v(" Settings")
          ]),
          _vm._v(" "),
          _c("b-dropdown-divider"),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-shield" }),
            _vm._v(" Lock Account")
          ]),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-lock" }),
            _vm._v(" Logout")
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/containers/DefaultHeader.vue":
/*!***************************************************!*\
  !*** ./resources/js/containers/DefaultHeader.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultHeader_vue_vue_type_template_id_6a6f0262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHeader.vue?vue&type=template&id=6a6f0262& */ "./resources/js/containers/DefaultHeader.vue?vue&type=template&id=6a6f0262&");
/* harmony import */ var _DefaultHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultHeader.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DefaultHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultHeader_vue_vue_type_template_id_6a6f0262___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultHeader_vue_vue_type_template_id_6a6f0262___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/DefaultHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultHeader.vue?vue&type=template&id=6a6f0262&":
/*!**********************************************************************************!*\
  !*** ./resources/js/containers/DefaultHeader.vue?vue&type=template&id=6a6f0262& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_template_id_6a6f0262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeader.vue?vue&type=template&id=6a6f0262& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeader.vue?vue&type=template&id=6a6f0262&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_template_id_6a6f0262___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_template_id_6a6f0262___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue":
/*!****************************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderDropdownAccnt.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517& */ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517&");
/* harmony import */ var _DefaultHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DefaultHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultHeaderDropdownAccnt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderDropdownAccnt.vue?vue&type=template&id=7f3de517&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderDropdownAccnt_vue_vue_type_template_id_7f3de517___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);