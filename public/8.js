(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_nav */ "./resources/js/_nav.js");
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
/* harmony import */ var _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultHeaderDropdownAccnt */ "./resources/js/containers/DefaultHeaderDropdownAccnt.vue");
/* harmony import */ var _DefaultHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultHeader */ "./resources/js/containers/DefaultHeader.vue");
/* harmony import */ var _DefaultFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultFooter */ "./resources/js/containers/DefaultFooter.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //import DefaultAside from './DefaultAside'




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DefaultContainer',
  components: {
    AppSidebar: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["Sidebar"],
    //AppAside,
    Breadcrumb: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"],
    //DefaultAside,
    DefaultHeaderDropdownAccnt: _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_3__["default"],
    SidebarForm: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarForm"],
    SidebarFooter: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarFooter"],
    SidebarHeader: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarHeader"],
    SidebarNav: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarNav"],
    SidebarMinimizer: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarMinimizer"],
    DefaultFooter: _DefaultFooter__WEBPACK_IMPORTED_MODULE_5__["default"],
    DefaultHeader: _DefaultHeader__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      nav: _nav__WEBPACK_IMPORTED_MODULE_1__["default"].items
    };
  },
  computed: {
    name: function name() {
      return this.$route.name;
    },
    list: function list() {
      return this.$route.matched.filter(function (route) {
        return route.name || route.meta.label;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DefaultFooter',
  components: {
    TheFooter: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["Footer"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "app" },
    [
      _c("DefaultHeader"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-body" },
        [
          _c(
            "AppSidebar",
            { attrs: { fixed: "" } },
            [
              _c("SidebarHeader"),
              _vm._v(" "),
              _c("SidebarForm"),
              _vm._v(" "),
              _c("SidebarNav", { attrs: { navItems: _vm.nav } }),
              _vm._v(" "),
              _c("SidebarFooter"),
              _vm._v(" "),
              _c("SidebarMinimizer")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "main",
            { staticClass: "main" },
            [
              _c("Breadcrumb", { attrs: { list: _vm.list } }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "container-fluid" },
                [_c("router-view")],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("DefaultFooter")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooter.vue?vue&type=template&id=acd3ca46&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultFooter.vue?vue&type=template&id=acd3ca46& ***!
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
  return _c("TheFooter", [
    _c("div", [
      _c("a", { attrs: { href: "https://coreui.io" } }, [_vm._v("MusDev")]),
      _vm._v(" "),
      _c("span", { staticClass: "ml-1" }, [
        _vm._v("© 2020 Muslim Software Developers.")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "ml-auto" }, [
      _c("span", { staticClass: "mr-1" }, [_vm._v("Powered by")]),
      _vm._v(" "),
      _c("a", { attrs: { href: "https://musdev.org" } }, [
        _vm._v("Muslim Software Developers")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/_nav.js":
/*!******************************!*\
  !*** ./resources/js/_nav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Dashboard',
    url: '/admin',
    icon: 'icon-speedometer',
    badge: {
      variant: 'primary',
      text: 'NEW'
    }
  }, {
    name: 'Users',
    url: '/admin/users',
    icon: 'icon-user'
  }, {
    name: 'Feedbacks',
    url: '/admin/feedbacks',
    icon: 'icon-bubble'
  }]
});

/***/ }),

/***/ "./resources/js/containers/DefaultContainer.vue":
/*!******************************************************!*\
  !*** ./resources/js/containers/DefaultContainer.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultContainer.vue?vue&type=template&id=927e13a2& */ "./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2&");
/* harmony import */ var _DefaultContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultContainer.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DefaultContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultContainer.vue?vue&type=template&id=927e13a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainer.vue?vue&type=template&id=927e13a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainer_vue_vue_type_template_id_927e13a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/containers/DefaultFooter.vue":
/*!***************************************************!*\
  !*** ./resources/js/containers/DefaultFooter.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultFooter_vue_vue_type_template_id_acd3ca46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultFooter.vue?vue&type=template&id=acd3ca46& */ "./resources/js/containers/DefaultFooter.vue?vue&type=template&id=acd3ca46&");
/* harmony import */ var _DefaultFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultFooter.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DefaultFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultFooter_vue_vue_type_template_id_acd3ca46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultFooter_vue_vue_type_template_id_acd3ca46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/DefaultFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultFooter.vue?vue&type=template&id=acd3ca46&":
/*!**********************************************************************************!*\
  !*** ./resources/js/containers/DefaultFooter.vue?vue&type=template&id=acd3ca46& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooter_vue_vue_type_template_id_acd3ca46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultFooter.vue?vue&type=template&id=acd3ca46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooter.vue?vue&type=template&id=acd3ca46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooter_vue_vue_type_template_id_acd3ca46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooter_vue_vue_type_template_id_acd3ca46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);