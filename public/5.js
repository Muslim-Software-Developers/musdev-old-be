(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainerFe.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultContainerFe.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navfe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_navfe */ "./resources/js/_navfe.js");
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
/* harmony import */ var _DefaultHeaderFe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultHeaderFe */ "./resources/js/containers/DefaultHeaderFe.vue");
/* harmony import */ var _DefaultFooterFe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultFooterFe */ "./resources/js/containers/DefaultFooterFe.vue");

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
  name: 'DefaultContainerFe',
  components: {
    AppSidebar: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["Sidebar"],
    //AppAside,
    Breadcrumb: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"],
    //DefaultAside,
    SidebarForm: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarForm"],
    SidebarFooter: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarFooter"],
    SidebarHeader: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarHeader"],
    SidebarNav: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarNav"],
    SidebarMinimizer: _coreui_vue__WEBPACK_IMPORTED_MODULE_2__["SidebarMinimizer"],
    DefaultFooterFe: _DefaultFooterFe__WEBPACK_IMPORTED_MODULE_4__["default"],
    DefaultHeaderFe: _DefaultHeaderFe__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      nav: _navfe__WEBPACK_IMPORTED_MODULE_1__["default"].items
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooterFe.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultFooterFe.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DefaultFooterFe',
  components: {
    TheFooter: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["Footer"]
  },
  methods: {
    navigate: function navigate(thePage) {
      this.$router.push({
        name: thePage
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderFe.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeaderFe.vue?vue&type=script&lang=js& ***!
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
//import { Header as AppHeader, SidebarToggler, AsideToggler } from '@coreui/vue'
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DefaultHeaderFe',
  components: {},
  methods: {
    navigate: function navigate(thePage) {
      this.$router.push({
        name: thePage
      });
    }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooterFe.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultFooterFe.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* footer css starts */\n#footer{\n    background-color: #3C7B5C;\n    color: white;\n    text-align: center;\n    padding: 50px;\n    margin-top: 50px;\n}\ndiv.icons a {\n    color: white;\n    font-size: 25px;\n    padding: 5px;\n}\ndiv#in-touch{\n    font-size: 1.7em;\n    font-weight: bold;\n}\ndiv#copyright{\n    font-size: 1em;\n    font-weight: bold\n}\n.footer-list li{\n    list-style: none;\n    font-size: 20px;\n    \n    margin-bottom: 15px;\n    /* margin-bottom: -20px */\n}\nul.footer-list a{\n    color: white;\n}\nul.footer-list a:hover{\n    background-color: white;\n    color: #3C7B5C;\n    padding: 10px;\n    text-decoration: none;\n}\n#img-foot{\n    max-width: 100%;\n    height: auto;\n}\n/*footer content media queries for screen  sizes */\n@media only screen and (max-width:575px){\ndiv.links{\n        display: none;\n}\n}\n@media only screen and (min-width:576px) and (max-width:767px) {\nul.footer-list {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        /* border: 1px solid red; */\n        margin: 25px 0px;\n        width: 500px;\n}\nul.footer-list li{\n        padding-left: 15px;\n}\nul.footer-list a{\n        text-decoration: underline;\n}\n}\n/* meetups.html styling here */\n.carousel-inner{\n    height: 100%;\n}\n.carousel-inner img{\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: 50% 50%;\n}\n.notification_section{\n    color: #3E6752;\n    width: 80%;\n    margin: auto;\n    text-align: center;\n}\n#notification_text{\n    font-weight: bold;\n    font-size: 25px;\n}\n.btn-append input{\n    background: #2E5A44;\n    border: 1px solid #2E5A44;\n    color: white;\n}\n\n/* media queries */\n@media only screen and (min-width:311px) and (max-width:350px){\n.notification_section{\n        width: 100%;\n        margin: auto;\n}\n}\n@media only screen and (min-width:507px) and (max-width:564px){\n.notification_section{\n        width: 70%;\n        margin: auto;\n}\n}\n@media only screen and (min-width:565px) and (max-width:767px){\ndiv#notification_text{\n        width: 60%;\n        margin: auto;\n}\n}\n.contact--heading {\n    color: #8ec441;\n    font-weight: 900;\n}\n.contact--submit {\n    background: #8ec441;\n    border: none;\n    border-radius: 15px;\n    color: #fff;\n    width: 30%;\n}\n.form-group {\n    position: relative;\n    margin-bottom: 1.5rem;\n}\n.contact--label {\n    color: #8d8d8d;\n    position: absolute;\n    top: 0;\n    padding: 7px 0 0 0px;\n    -webkit-transition: all 200ms;\n    transition: all 200ms;\n    opacity: 0.5;\n}\n.form-control:focus + .contact--label,\n.form-control:valid + .contact--label {\n    font-size: 75%;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n    opacity: 1;\n}\n.contact--input {\n      border-radius: 0;\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      border-bottom: 1px solid #8ec441;\n}\n.contact--input:focus {\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      border-color: #8ec441;\n}\n.contact--textarea {\n    border-radius: 0;\n    border-color: #8ec441;\n}\n.contact--textarea:focus {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-color: #8ec441;\n}\n.textarea--label {\n    color: #8d8d8d;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderFe.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeaderFe.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* custom css for header file */\n#support-btn{\n    border-radius: 20px;\n    width: 130px;\n    /* padding: 5px 30px; */\n    color: white;\n}\n.navbar-light .navbar-nav .nav-item {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.navbar-light .navbar-nav .nav-link{\n    color: rgb(8, 8, 8);\n    font-weight: 400;\n}\n.navbar-light .navbar-nav .list-item:hover{\n    background-color: #3C7B5C;\n    color: white;\n}\n/* media queries for screen  sizes */\n@media only screen and (max-width: 768px) {\n.navbar-light .navbar-nav .list-item:hover{\n        width: 20%;\n        padding: 10px;\n}\n#support-btn{\n        margin-top: 10px;\n}\n}\n@media only screen and (min-width: 768px) and (max-width:890px)  {\nul.navbar-nav li{\n        padding: 3px;\n}\n}\n@media only screen and (min-width: 891px) and (max-width: 950px)  {\nul.navbar-nav li{\n        padding: 10px;\n}\n}\n@media only screen and (min-width: 951px) and (max-width: 1140px)   {\nul.navbar-nav li{\n        padding: 13px;\n}\n}\n@media only screen and (min-width:1141px)   {\nul.navbar-nav li{\n        padding: 5px;\n        margin-left: 40px;\n}\n}\n\n/* header css ends here */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooterFe.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultFooterFe.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultFooterFe.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooterFe.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderFe.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeaderFe.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeaderFe.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderFe.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainerFe.vue?vue&type=template&id=3240edce&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultContainerFe.vue?vue&type=template&id=3240edce& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("DefaultHeaderFe"),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _c("DefaultFooterFe")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooterFe.vue?vue&type=template&id=7740c208&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultFooterFe.vue?vue&type=template&id=7740c208& ***!
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
    "footer",
    { staticClass: "container-fluid", attrs: { id: "footer" } },
    [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-3 col-md-3  col-lg-3 links foot" }, [
          _c("ul", { staticClass: "footer-list" }, [
            _c("li", [
              _c(
                "a",
                {
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("about")
                    }
                  }
                },
                [_vm._v("      About Us ")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("members")
                    }
                  }
                },
                [_vm._v("      The Team ")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("signup")
                    }
                  }
                },
                [_vm._v("    Become A Member   ")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("contact")
                    }
                  }
                },
                [_vm._v("   Contact Us  ")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("login")
                    }
                  }
                },
                [_vm._v("   Login ")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("donate")
                    }
                  }
                },
                [_vm._v("     Support Us ")]
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-sm-2 col-md-4 col-lg-3", attrs: { id: "img-foot" } },
      [
        _c("a", { attrs: { href: "index.html" } }, [
          _c("img", {
            attrs: {
              src: __webpack_require__(/*! ../assets/img/footer_logo1.png */ "./resources/js/assets/img/footer_logo1.png"),
              alt: "",
              id: "footer-img"
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-7 col-md-5 col-lg-6 touch" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12", attrs: { id: "in-touch" } }, [
          _vm._v(" Stay in touch")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 pt-4 icons" }, [
          _c(
            "a",
            {
              attrs: {
                href: "telegram.musdev.org",
                title: "Connect to telegram"
              }
            },
            [_c("i", { staticClass: "fa fa-telegram" })]
          ),
          _vm._v(" "),
          _c(
            "a",
            { attrs: { href: " slack.musdev.org", title: "Join us on slack" } },
            [_c("i", { staticClass: "fa fa-slack" })]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: {
                href: "https://www.facebook.com/groups/607846749339376/",
                title: "Connect with us on Facebook"
              }
            },
            [_c("i", { staticClass: "fa fa-facebook-square" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 pt-4", attrs: { id: "copyright" } }, [
          _vm._v(" © 2019 Musdev Developers Community, Africa ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderFe.vue?vue&type=template&id=6288ce6e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/DefaultHeaderFe.vue?vue&type=template&id=6288ce6e& ***!
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
    "nav",
    { staticClass: " row navbar  navbar-expand-md navbar-light bg-light" },
    [
      _c(
        "a",
        {
          staticClass: "col-2  col-lg-2 navbar-brand pl-4",
          attrs: { href: "" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.navigate("home")
            }
          }
        },
        [
          _c("img", {
            attrs: { src: __webpack_require__(/*! ../assets/img/header_logo.png */ "./resources/js/assets/img/header_logo.png"), alt: "" }
          })
        ]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-10 col-lg-9 pr-1 collapse navbar-collapse",
          attrs: { id: "menu-items" }
        },
        [
          _c("ul", { staticClass: "navbar-nav" }, [
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link list-item",
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("about")
                    }
                  }
                },
                [_vm._v(" About Us ")]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link list-item",
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("members")
                    }
                  }
                },
                [_vm._v(" The Team ")]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link list-item",
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("signup")
                    }
                  }
                },
                [_vm._v(" Become A Member ")]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link list-item",
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("contact")
                    }
                  }
                },
                [_vm._v(" Contact ")]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link list-item",
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("login")
                    }
                  }
                },
                [_vm._v(" Login ")]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link btn btn-danger",
                  attrs: { href: "", role: "button", id: "support-btn" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.navigate("donate")
                    }
                  }
                },
                [_vm._v(" Support Us ")]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler nav-btn",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#menu-items"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/_navfe.js":
/*!********************************!*\
  !*** ./resources/js/_navfe.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Homepage',
    url: '/',
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

/***/ "./resources/js/assets/img/footer_logo1.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/footer_logo1.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/footer_logo1.png?0ff9b2002072757665bc070435816432";

/***/ }),

/***/ "./resources/js/assets/img/header_logo.png":
/*!*************************************************!*\
  !*** ./resources/js/assets/img/header_logo.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/header_logo.png?aa2d83b5837c3f575de64fb99fc52f57";

/***/ }),

/***/ "./resources/js/containers/DefaultContainerFe.vue":
/*!********************************************************!*\
  !*** ./resources/js/containers/DefaultContainerFe.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultContainerFe_vue_vue_type_template_id_3240edce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultContainerFe.vue?vue&type=template&id=3240edce& */ "./resources/js/containers/DefaultContainerFe.vue?vue&type=template&id=3240edce&");
/* harmony import */ var _DefaultContainerFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultContainerFe.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultContainerFe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DefaultContainerFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultContainerFe_vue_vue_type_template_id_3240edce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultContainerFe_vue_vue_type_template_id_3240edce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultContainerFe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultContainerFe.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/containers/DefaultContainerFe.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainerFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultContainerFe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainerFe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainerFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultContainerFe.vue?vue&type=template&id=3240edce&":
/*!***************************************************************************************!*\
  !*** ./resources/js/containers/DefaultContainerFe.vue?vue&type=template&id=3240edce& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainerFe_vue_vue_type_template_id_3240edce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultContainerFe.vue?vue&type=template&id=3240edce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultContainerFe.vue?vue&type=template&id=3240edce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainerFe_vue_vue_type_template_id_3240edce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultContainerFe_vue_vue_type_template_id_3240edce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/containers/DefaultFooterFe.vue":
/*!*****************************************************!*\
  !*** ./resources/js/containers/DefaultFooterFe.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultFooterFe_vue_vue_type_template_id_7740c208___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultFooterFe.vue?vue&type=template&id=7740c208& */ "./resources/js/containers/DefaultFooterFe.vue?vue&type=template&id=7740c208&");
/* harmony import */ var _DefaultFooterFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultFooterFe.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultFooterFe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DefaultFooterFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultFooterFe.vue?vue&type=style&index=0&lang=css& */ "./resources/js/containers/DefaultFooterFe.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DefaultFooterFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultFooterFe_vue_vue_type_template_id_7740c208___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultFooterFe_vue_vue_type_template_id_7740c208___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultFooterFe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultFooterFe.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/containers/DefaultFooterFe.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultFooterFe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooterFe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultFooterFe.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/containers/DefaultFooterFe.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultFooterFe.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooterFe.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/containers/DefaultFooterFe.vue?vue&type=template&id=7740c208&":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/DefaultFooterFe.vue?vue&type=template&id=7740c208& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_template_id_7740c208___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultFooterFe.vue?vue&type=template&id=7740c208& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultFooterFe.vue?vue&type=template&id=7740c208&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_template_id_7740c208___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultFooterFe_vue_vue_type_template_id_7740c208___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/containers/DefaultHeaderFe.vue":
/*!*****************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderFe.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultHeaderFe_vue_vue_type_template_id_6288ce6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHeaderFe.vue?vue&type=template&id=6288ce6e& */ "./resources/js/containers/DefaultHeaderFe.vue?vue&type=template&id=6288ce6e&");
/* harmony import */ var _DefaultHeaderFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultHeaderFe.vue?vue&type=script&lang=js& */ "./resources/js/containers/DefaultHeaderFe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DefaultHeaderFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultHeaderFe.vue?vue&type=style&index=0&lang=css& */ "./resources/js/containers/DefaultHeaderFe.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DefaultHeaderFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultHeaderFe_vue_vue_type_template_id_6288ce6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultHeaderFe_vue_vue_type_template_id_6288ce6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/DefaultHeaderFe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/DefaultHeaderFe.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderFe.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeaderFe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderFe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/DefaultHeaderFe.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderFe.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeaderFe.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderFe.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/containers/DefaultHeaderFe.vue?vue&type=template&id=6288ce6e&":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/DefaultHeaderFe.vue?vue&type=template&id=6288ce6e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_template_id_6288ce6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeaderFe.vue?vue&type=template&id=6288ce6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/DefaultHeaderFe.vue?vue&type=template&id=6288ce6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_template_id_6288ce6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeaderFe_vue_vue_type_template_id_6288ce6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);