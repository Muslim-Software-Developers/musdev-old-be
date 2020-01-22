(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Switches.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Switches.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'switches',
  components: {
    cSwitch: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["Switch"]
  },
  data: function data() {
    return {
      fields: [{
        key: 'size'
      }, {
        key: 'example'
      }, {
        key: 'size_prop',
        label: 'Size prop'
      }],
      items: [{
        size: 'Large',
        example: {
          variant: '3d',
          color: 'primary',
          size: 'lg',
          checked: true
        },
        size_prop: 'Add following prop <code>size="lg"</code>'
      }, {
        size: 'Normal',
        example: {
          variant: '3d',
          color: 'primary',
          size: '',
          checked: true
        },
        size_prop: '-'
      }, {
        size: 'Small',
        example: {
          variant: '3d',
          color: 'primary',
          size: 'sm',
          checked: true
        },
        size_prop: 'Add following prop <code>size="sm"</code>'
      }],
      checker: 'yes',
      picker: '',
      labelIcon: {
        dataOn: "\u2713",
        dataOff: "\u2715"
      },
      labelTxt: {
        dataOn: 'yes',
        dataOff: 'no'
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Switches.vue?vue&type=template&id=eb1d43de&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/base/Switches.vue?vue&type=template&id=eb1d43de& ***!
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
  return _c(
    "div",
    { staticClass: "animated fadeIn" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c(
                    "div",
                    { attrs: { slot: "header" }, slot: "header" },
                    [
                      _vm._v("\n          Switch default\n          "),
                      _c("b-badge", { attrs: { variant: "primary" } }, [
                        _vm._v(_vm._s(_vm.checker))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      name: "switch1",
                      value: "yes",
                      uncheckedValue: "no"
                    },
                    model: {
                      value: _vm.checker,
                      callback: function($$v) {
                        _vm.checker = $$v
                      },
                      expression: "checker"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "secondary", checked: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "success", checked: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "warning", checked: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "info", checked: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "danger", checked: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "light", checked: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "dark", checked: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", disabled: "" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch pills\n        ")
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", checked: "", variant: "pill" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "secondary", checked: "", variant: "pill" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "success", checked: "", variant: "pill" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "warning", checked: "", variant: "pill" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "info", checked: "", variant: "pill" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "danger", checked: "", variant: "pill" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "light", checked: "", variant: "pill" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "dark", checked: "", variant: "pill" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", disabled: "", variant: "pill" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          3d Switch\n        ")
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", checked: "", variant: "3d" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "secondary", checked: "", variant: "3d" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "success", checked: "", variant: "3d" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "warning", checked: "", variant: "3d" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "info", checked: "", variant: "3d" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "danger", checked: "", variant: "3d" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "light", checked: "", variant: "3d" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "dark", checked: "", variant: "3d" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", disabled: "", variant: "3d" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          3d Switch "),
                    _c("small", [_c("code", [_vm._v("disabled")])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      variant: "3d",
                      disabled: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      checked: "",
                      variant: "3d",
                      disabled: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      checked: "",
                      variant: "3d",
                      disabled: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      checked: "",
                      variant: "3d",
                      disabled: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      checked: "",
                      variant: "3d",
                      disabled: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      checked: "",
                      variant: "3d",
                      disabled: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      checked: "",
                      variant: "3d",
                      disabled: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      checked: "",
                      variant: "3d",
                      disabled: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", disabled: "", variant: "3d" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          3d Switch "),
                    _c("small", [_c("code", [_vm._v('outline="alt"')])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      variant: "3d",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      checked: "",
                      variant: "3d",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      checked: "",
                      variant: "3d",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      checked: "",
                      variant: "3d",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      checked: "",
                      variant: "3d",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      checked: "",
                      variant: "3d",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      checked: "",
                      variant: "3d",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      checked: "",
                      variant: "3d",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      disabled: "",
                      variant: "3d",
                      outline: "alt"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          3d Switch "),
                    _c("small", [_c("code", [_vm._v("label")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          defaultChecked: "",
                          variant: "3d",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          defaultChecked: "",
                          variant: "3d",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          defaultChecked: "",
                          variant: "3d",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          defaultChecked: "",
                          variant: "3d",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          defaultChecked: "",
                          variant: "3d",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          defaultChecked: "",
                          variant: "3d",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          defaultChecked: "",
                          variant: "3d",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          defaultChecked: "",
                          variant: "3d",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          disabled: "",
                          variant: "3d",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          3d Switch "),
                    _c("small", [_c("code", [_vm._v('outline="alt" label')])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          defaultChecked: "",
                          variant: "3d",
                          outline: "alt",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          defaultChecked: "",
                          variant: "3d",
                          outline: "alt",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          defaultChecked: "",
                          variant: "3d",
                          outline: "alt",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          defaultChecked: "",
                          variant: "3d",
                          outline: "alt",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          defaultChecked: "",
                          variant: "3d",
                          outline: "alt",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          defaultChecked: "",
                          variant: "3d",
                          outline: "alt",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          defaultChecked: "",
                          variant: "3d",
                          outline: "alt",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          defaultChecked: "",
                          variant: "3d",
                          outline: "alt",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          disabled: "",
                          variant: "3d",
                          outline: "alt",
                          label: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          3d Switch "),
                    _c("small", [_c("code", [_vm._v('outline="alt" label')])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      defaultChecked: "",
                      variant: "3d",
                      outline: "alt",
                      label: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      defaultChecked: "",
                      variant: "3d",
                      outline: "alt",
                      label: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      defaultChecked: "",
                      variant: "3d",
                      outline: "alt",
                      label: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      defaultChecked: "",
                      variant: "3d",
                      outline: "alt",
                      label: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      defaultChecked: "",
                      variant: "3d",
                      outline: "alt",
                      label: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      defaultChecked: "",
                      variant: "3d",
                      outline: "alt",
                      label: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      defaultChecked: "",
                      variant: "3d",
                      outline: "alt",
                      label: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      defaultChecked: "",
                      variant: "3d",
                      outline: "alt",
                      label: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      disabled: "",
                      variant: "3d",
                      outline: "alt",
                      label: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("outline")])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", checked: "", outline: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "secondary", checked: "", outline: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "success", checked: "", outline: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "warning", checked: "", outline: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "info", checked: "", outline: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "danger", checked: "", outline: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "light", checked: "", outline: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "dark", checked: "", outline: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", outline: "", disabled: "" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [
                      _c("code", [_vm._v('outline variant="pill"')])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      checked: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      checked: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      checked: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      checked: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      checked: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      checked: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      checked: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      outline: "",
                      variant: "pill",
                      disabled: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v('outline="alt"')])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", checked: "", outline: "alt" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "secondary", checked: "", outline: "alt" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "success", checked: "", outline: "alt" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "warning", checked: "", outline: "alt" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "info", checked: "", outline: "alt" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "danger", checked: "", outline: "alt" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "light", checked: "", outline: "alt" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "dark", checked: "", outline: "alt" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", outline: "alt", disabled: "" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [
                      _c("code", [_vm._v('outline="alt" variant="pill"')])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      checked: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      checked: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      checked: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      checked: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      checked: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      checked: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      checked: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      outline: "alt",
                      variant: "pill",
                      disabled: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label")])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", checked: "", label: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "secondary", checked: "", label: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "success", checked: "", label: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "warning", checked: "", label: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "info", checked: "", label: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "danger", checked: "", label: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "light", checked: "", label: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "dark", checked: "", label: "" }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: { color: "primary", label: "", disabled: "" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v('label variant="pill"')])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      label: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      checked: "",
                      label: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      checked: "",
                      label: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      checked: "",
                      label: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      checked: "",
                      label: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      checked: "",
                      label: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      checked: "",
                      label: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      checked: "",
                      label: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      label: "",
                      variant: "pill",
                      disabled: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label outline")])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      label: "",
                      outline: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      checked: "",
                      label: "",
                      outline: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      checked: "",
                      label: "",
                      outline: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      checked: "",
                      label: "",
                      outline: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      checked: "",
                      label: "",
                      outline: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      checked: "",
                      label: "",
                      outline: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      checked: "",
                      label: "",
                      outline: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      checked: "",
                      label: "",
                      outline: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      label: "",
                      outline: "",
                      disabled: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label outline")])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      label: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      checked: "",
                      label: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      checked: "",
                      label: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      checked: "",
                      label: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      checked: "",
                      label: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      checked: "",
                      label: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      checked: "",
                      label: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      checked: "",
                      label: "",
                      outline: "",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      label: "",
                      outline: "",
                      variant: "pill",
                      disabled: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label outline")])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      label: "",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      checked: "",
                      label: "",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      checked: "",
                      label: "",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      checked: "",
                      label: "",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      checked: "",
                      label: "",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      checked: "",
                      label: "",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      checked: "",
                      label: "",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      checked: "",
                      label: "",
                      outline: "alt"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      label: "",
                      outline: "alt",
                      disabled: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label outline")])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      label: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "secondary",
                      checked: "",
                      label: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "success",
                      checked: "",
                      label: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "warning",
                      checked: "",
                      label: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "info",
                      checked: "",
                      label: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "danger",
                      checked: "",
                      label: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "light",
                      checked: "",
                      label: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "dark",
                      checked: "",
                      label: "",
                      outline: "alt",
                      variant: "pill"
                    }
                  }),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      label: "",
                      outline: "alt",
                      variant: "pill",
                      disabled: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label")])])
                  ]),
                  _vm._v(" "),
                  _c("c-switch", {
                    staticClass: "mx-1",
                    attrs: {
                      color: "primary",
                      checked: "",
                      label: "",
                      dataOn: "yes",
                      dataOff: "no"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: { color: "secondary", checked: "", label: "" }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: { color: "success", checked: "", label: "" }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: { color: "warning", checked: "", label: "" }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: { color: "info", checked: "", label: "" }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: { color: "danger", checked: "", label: "" }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: { color: "light", checked: "", label: "" }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: { color: "dark", checked: "", label: "" }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: { color: "primary", label: "", disabled: "" }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v('label variant="pill"')])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          label: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          label: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          label: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          label: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          label: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          label: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          label: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          label: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          label: "",
                          variant: "pill",
                          disabled: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label outline")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          label: "",
                          outline: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          label: "",
                          outline: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          label: "",
                          outline: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          label: "",
                          outline: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          label: "",
                          outline: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          label: "",
                          outline: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          label: "",
                          outline: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          label: "",
                          outline: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          label: "",
                          outline: "",
                          disabled: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label outline")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          label: "",
                          outline: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          label: "",
                          outline: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          label: "",
                          outline: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          label: "",
                          outline: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          label: "",
                          outline: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          label: "",
                          outline: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          label: "",
                          outline: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          label: "",
                          outline: "",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          label: "",
                          outline: "",
                          variant: "pill",
                          disabled: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label outline")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          label: "",
                          outline: "alt"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          label: "",
                          outline: "alt"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          label: "",
                          outline: "alt"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          label: "",
                          outline: "alt"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          label: "",
                          outline: "alt"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          label: "",
                          outline: "alt"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          label: "",
                          outline: "alt"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          label: "",
                          outline: "alt"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          label: "",
                          outline: "alt",
                          disabled: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label outline")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          label: "",
                          outline: "alt",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelTxt,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          label: "",
                          outline: "alt",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          label: "",
                          outline: "alt",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          label: "",
                          outline: "alt",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          label: "",
                          outline: "alt",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          label: "",
                          outline: "alt",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          label: "",
                          outline: "alt",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          label: "",
                          outline: "alt",
                          variant: "pill"
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _c(
                    "c-switch",
                    _vm._b(
                      {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          label: "",
                          outline: "alt",
                          variant: "pill",
                          disabled: ""
                        }
                      },
                      "c-switch",
                      _vm.labelIcon,
                      false
                    )
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
            { attrs: { md: "12" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": "" } },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Sizes\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-card-body",
                    { staticClass: "p-0" },
                    [
                      _c("b-table", {
                        staticClass: "table-align-middle mb-0",
                        attrs: {
                          hover: "",
                          striped: "",
                          responsive: "sm",
                          items: _vm.items,
                          fields: _vm.fields
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "example",
                            fn: function(data) {
                              return [
                                _c("c-switch", {
                                  attrs: {
                                    variant: data.value.variant,
                                    color: data.value.color,
                                    size: data.value.size,
                                    checked: data.value.checked
                                  }
                                })
                              ]
                            }
                          },
                          {
                            key: "size_prop",
                            fn: function(data) {
                              return [
                                _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(data.item.size_prop)
                                  }
                                })
                              ]
                            }
                          }
                        ])
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/base/Switches.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/base/Switches.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switches_vue_vue_type_template_id_eb1d43de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switches.vue?vue&type=template&id=eb1d43de& */ "./resources/js/views/base/Switches.vue?vue&type=template&id=eb1d43de&");
/* harmony import */ var _Switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switches.vue?vue&type=script&lang=js& */ "./resources/js/views/base/Switches.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Switches_vue_vue_type_template_id_eb1d43de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Switches_vue_vue_type_template_id_eb1d43de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/base/Switches.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/base/Switches.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/base/Switches.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Switches.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Switches.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/base/Switches.vue?vue&type=template&id=eb1d43de&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/base/Switches.vue?vue&type=template&id=eb1d43de& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_template_id_eb1d43de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Switches.vue?vue&type=template&id=eb1d43de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/base/Switches.vue?vue&type=template&id=eb1d43de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_template_id_eb1d43de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_template_id_eb1d43de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);