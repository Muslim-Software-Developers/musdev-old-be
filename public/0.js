(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/vue/dist/coreui-vue.esm.js ***!
  \*********************************************************/
/*! exports provided: default, Aside, AsideToggler, Breadcrumb, Callout, Footer, Header, HeaderDropdown, Sidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, SidebarNavDivider, SidebarNavItem, SidebarNavDropdown, SidebarNavLabel, SidebarNavLink, SidebarNavTitle, SidebarToggler, Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aside", function() { return Aside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideToggler", function() { return AsideToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Breadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return Callout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDropdown", function() { return HeaderDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarFooter", function() { return SidebarFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarForm", function() { return SidebarForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarHeader", function() { return SidebarHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizer", function() { return SidebarMinimizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNav", function() { return SidebarNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNavDivider", function() { return SidebarNavDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNavItem", function() { return SidebarNavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNavDropdown", function() { return SidebarNavDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNavLabel", function() { return SidebarNavLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNavLink", function() { return SidebarNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNavTitle", function() { return SidebarNavTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggler", function() { return SidebarToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);



//
//
//
//
//
//
//
//
//

var script = {
  props: {
    list: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    routeRecords: function routeRecords() {
      return this.list.filter(function (route) {
        return route.name || route.meta.label;
      });
    }
  },
  methods: {
    getName: function getName(item) {
      return item.meta && item.meta.label ? item.meta.label : item.name || null;
    },
    isLast: function isLast(index) {
      return index === this.list.length - 1;
    }
  }
};

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("ol", { staticClass: "breadcrumb" }, _vm._l(_vm.routeRecords, function (routeObject, index) {
    return _c("li", { key: index, staticClass: "breadcrumb-item" }, [_vm.isLast(index) ? _c("span", { staticClass: "active" }, [_vm._v(_vm._s(_vm.getName(routeObject)))]) : _c("router-link", { attrs: { to: routeObject } }, [_vm._v(_vm._s(_vm.getName(routeObject)))])], 1);
  }), 0);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = undefined;
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Breadcrumb\\Breadcrumb.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Breadcrumb = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

//
//
//
//
//
//

var script$1 = {
  props: {
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList: function classList() {
      return ['callout', this.calloutVariant];
    },
    calloutVariant: function calloutVariant() {
      return this.variant ? 'callout-' + this.variant : '';
    }
  }
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classList }, [_vm._t("default", [_vm._v("Callout")])], 2);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

/* style */
var __vue_inject_styles__$1 = undefined;
/* scoped */
var __vue_scope_id__$1 = undefined;
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = false;
/* component normalizer */
function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Callout\\Callout.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Callout = __vue_normalize__$1({ render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

//
//
//
//
//
//

var script$2 = {
  name: 'AppFooter',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList: function classList() {
      return ['app-footer'];
    }
  },
  mounted: function mounted() {
    this.isFixed();
  },
  methods: {
    isFixed: function isFixed() {
      this.fixed ? document.body.classList.add('footer-fixed') : document.body.classList.remove('footer-fixed');
    }
  }
};

/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("footer", { class: _vm.classList }, [_vm._t("default", [_vm._v("Footer")])], 2);
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

/* style */
var __vue_inject_styles__$2 = undefined;
/* scoped */
var __vue_scope_id__$2 = undefined;
/* module identifier */
var __vue_module_identifier__$2 = undefined;
/* functional template */
var __vue_is_functional_template__$2 = false;
/* component normalizer */
function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Footer\\Footer.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Footer = __vue_normalize__$2({ render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$3 = {
  model: {
    prop: 'modelChecked',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'switch-id-' + this._uid;
      }
    },
    color: {
      type: String,
      default: 'secondary'
    },
    label: {
      type: Boolean,
      default: null
    },
    outline: {
      type: [Boolean, String],
      default: null,
      validator: function validator(value) {
        return [false, true, '', 'alt'].indexOf(value) !== -1;
      }
    },
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['', 'lg', 'sm'].indexOf(value) !== -1;
      }
    },
    checked: {
      type: Boolean,
      default: false
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    modelChecked: {
      default: undefined
    },
    value: {
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function
    },
    uncheckedValue: {
      default: false
    },
    variant: {
      type: String,
      default: null,
      validator: function validator(value) {
        return [null, '3d', 'pill'].indexOf(value) !== -1;
      }
    },
    dataOn: {
      type: String,
      default: 'On'
    },
    dataOff: {
      type: String,
      default: 'Off'
    }
  },
  data: function data() {
    return {
      checkedData: this.isChecked ? this.value : this.uncheckedValue
    };
  },
  computed: {
    classList: function classList() {
      return ['switch', this.label ? 'switch-label' : '', this.size ? 'switch-' + this.size : '', this.variant ? 'switch-' + this.variant : '', 'switch' + (this.outline ? '-outline' : '') + '-' + this.color + (this.outline === 'alt' ? '-alt' : ''), 'form-check-label'];
    },
    isChecked: function isChecked() {
      if (this.modelChecked === undefined) {
        return this.checkedData === this.value;
      }
      return this.modelChecked === this.value;
    }
  },
  mounted: function mounted() {
    this.toggle(this.defaultChecked || this.checked || this.isChecked);
  },

  methods: {
    handleChange: function handleChange(event) {
      this.toggle(event.target.checked);
    },
    toggle: function toggle(checked) {
      this.checkedData = checked ? this.value : this.uncheckedValue;
      this.$emit('change', this.checkedData);
    }
  }
};

/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", { class: _vm.classList }, [_c("input", {
    staticClass: "switch-input form-check-input",
    attrs: {
      id: _vm.id,
      disabled: _vm.disabled,
      required: _vm.required,
      name: _vm.name,
      type: "checkbox",
      "true-value": "value",
      "false-value": "uncheckedValue"
    },
    domProps: { checked: _vm.isChecked, value: _vm.value },
    on: { change: _vm.handleChange }
  }), _vm._v(" "), _vm.label ? [_c("span", {
    staticClass: "switch-slider",
    attrs: {
      "data-checked": _vm.dataOn,
      "data-unchecked": _vm.dataOff
    }
  })] : [_c("span", { staticClass: "switch-slider" })]], 2);
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

/* style */
var __vue_inject_styles__$3 = undefined;
/* scoped */
var __vue_scope_id__$3 = undefined;
/* module identifier */
var __vue_module_identifier__$3 = undefined;
/* functional template */
var __vue_is_functional_template__$3 = false;
/* component normalizer */
function __vue_normalize__$3(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Switch\\Switch.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Switch = __vue_normalize__$3({ render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

//
//
//
//
//
//

var script$4 = {
  name: 'AppAside',
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    display: {
      type: String,
      default: ''
    },
    offCanvas: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    this.isFixed(this.fixed);
    this.isOffCanvas(this.offCanvas);
  },
  methods: {
    isFixed: function isFixed(fixed) {
      fixed ? document.body.classList.add('aside-menu-fixed') : document.body.classList.remove('aside-menu-fixed');
      return fixed;
    },
    isOffCanvas: function isOffCanvas(offCanvas) {
      offCanvas ? document.body.classList.add('aside-menu-off-canvas') : document.body.classList.remove('aside-menu-off-canvas');
    }
  }
};

/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("aside", { staticClass: "aside-menu" }, [_vm._t("default", [_vm._v("Aside")])], 2);
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

/* style */
var __vue_inject_styles__$4 = undefined;
/* scoped */
var __vue_scope_id__$4 = undefined;
/* module identifier */
var __vue_module_identifier__$4 = undefined;
/* functional template */
var __vue_is_functional_template__$4 = false;
/* component normalizer */
function __vue_normalize__$4(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Aside\\Aside.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Aside = __vue_normalize__$4({ render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 }, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, undefined, undefined);

var sidebarCssClasses = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];

var asideMenuCssClasses = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];

var validBreakpoints = ['sm', 'md', 'lg', 'xl'];

function checkBreakpoint(breakpoint, list) {
  return list.indexOf(breakpoint) > -1;
}

function toggleClasses(toggleClass, classList, force) {
  var level = classList.indexOf(toggleClass);
  var removeClassList = classList.slice(0, level);
  removeClassList.map(function (className) {
    return document.body.classList.remove(className);
  });
  document.body.classList.toggle(toggleClass, force);
}

//

var script$5 = {
  name: 'AsideToggler',
  props: {
    defaultOpen: {
      type: Boolean,
      default: false
    },
    display: {
      type: String,
      default: 'lg'
    },
    mobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList: function classList() {
      return ['navbar-toggler'];
    }
  },
  mounted: function mounted() {
    this.toggle(this.defaultOpen);
  },
  methods: {
    toggle: function toggle(force) {
      var _ref = [this.display, this.mobile],
          display = _ref[0],
          mobile = _ref[1];

      var cssClass = asideMenuCssClasses[0];
      if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
        cssClass = 'aside-menu-' + display + '-show';
      }
      toggleClasses(cssClass, asideMenuCssClasses, force);
    },
    asideToggle: function asideToggle(e) {
      e.preventDefault();
      this.toggle();
    }
  }
};

/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", {
    class: _vm.classList,
    attrs: { display: _vm.display, mobile: _vm.mobile, type: "button" },
    on: { click: _vm.asideToggle }
  }, [_c("span", { staticClass: "navbar-toggler-icon" })]);
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

/* style */
var __vue_inject_styles__$5 = undefined;
/* scoped */
var __vue_scope_id__$5 = undefined;
/* module identifier */
var __vue_module_identifier__$5 = undefined;
/* functional template */
var __vue_is_functional_template__$5 = false;
/* component normalizer */
function __vue_normalize__$5(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Aside\\AsideToggler.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var AsideToggler = __vue_normalize__$5({ render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 }, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, undefined, undefined);

//
//
//
//
//
//
//

var script$6 = {
  name: 'AppHeader',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList: function classList() {
      return ['app-header', 'navbar'];
    }
  },
  mounted: function mounted() {
    this.isFixed(this.fixed);
  },
  methods: {
    isFixed: function isFixed(fixed) {
      fixed ? document.body.classList.add('header-fixed') : document.body.classList.remove('header-fixed');
      return fixed;
    }
  }
};

/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("header", { class: _vm.classList }, [_vm._t("default", [_vm._v("Header")])], 2);
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

/* style */
var __vue_inject_styles__$6 = undefined;
/* scoped */
var __vue_scope_id__$6 = undefined;
/* module identifier */
var __vue_module_identifier__$6 = undefined;
/* functional template */
var __vue_is_functional_template__$6 = false;
/* component normalizer */
function __vue_normalize__$6(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Header\\Header.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Header = __vue_normalize__$6({ render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 }, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$7 = {
  name: 'HeaderDropdown',
  props: {
    right: {
      type: Boolean,
      default: false
    },
    noCaret: {
      type: Boolean,
      default: false
    }
  }
};

/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("b-nav-item-dropdown", { attrs: { right: _vm.right, "no-caret": _vm.noCaret } }, [_c("template", { slot: "button-content" }, [_vm._t("header", [_vm._v("\n      ❔\n    ")])], 2), _vm._v(" "), _vm._t("dropdown", [_c("div", { style: { right: "auto", height: "200px" } }, [_c("span", { staticClass: "text-center" }, [_vm._v("dropdown")])])])], 2);
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

/* style */
var __vue_inject_styles__$7 = undefined;
/* scoped */
var __vue_scope_id__$7 = undefined;
/* module identifier */
var __vue_module_identifier__$7 = undefined;
/* functional template */
var __vue_is_functional_template__$7 = false;
/* component normalizer */
function __vue_normalize__$7(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Header\\HeaderDropdown.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var HeaderDropdown = __vue_normalize__$7({ render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 }, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, undefined, undefined);

var hideMobile = {
  methods: {
    hideMobile: function hideMobile() {
      if (document.body.classList.contains('sidebar-show')) {
        document.body.classList.toggle('sidebar-show');
      }
    }
  }
};

//

var script$8 = {
  name: 'sidebar',
  mixins: [vue_clickaway__WEBPACK_IMPORTED_MODULE_0__["mixin"], hideMobile],
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.isFixed();
  },
  methods: {
    isFixed: function isFixed() {
      this.fixed ? document.body.classList.add('sidebar-fixed') : document.body.classList.remove('sidebar-fixed');
      return this.fixed;
    }
  }
};

/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    directives: [{
      name: "on-clickaway",
      rawName: "v-on-clickaway",
      value: _vm.hideMobile,
      expression: "hideMobile"
    }],
    staticClass: "sidebar"
  }, [_vm._t("default", [_vm._v("Sidebar")])], 2);
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

/* style */
var __vue_inject_styles__$8 = undefined;
/* scoped */
var __vue_scope_id__$8 = undefined;
/* module identifier */
var __vue_module_identifier__$8 = undefined;
/* functional template */
var __vue_is_functional_template__$8 = false;
/* component normalizer */
function __vue_normalize__$8(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\Sidebar.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Sidebar = __vue_normalize__$8({ render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 }, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, undefined, undefined);

//
//
//
//
//
//

var script$9 = {
  name: 'sidebar-footer',
  computed: {
    hasSlotDefault: function hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
};

/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.hasSlotDefault ? _c("div", { staticClass: "sidebar-footer" }, [_vm._t("default")], 2) : _vm._e();
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

/* style */
var __vue_inject_styles__$9 = undefined;
/* scoped */
var __vue_scope_id__$9 = undefined;
/* module identifier */
var __vue_module_identifier__$9 = undefined;
/* functional template */
var __vue_is_functional_template__$9 = false;
/* component normalizer */
function __vue_normalize__$9(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarFooter.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarFooter = __vue_normalize__$9({ render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 }, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, undefined, undefined);

//
//
//
//
//


var script$a = {
  name: 'sidebar-form',
  computed: {
    hasSlotDefault: function hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
};

/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.hasSlotDefault ? _c("div", { staticClass: "sidebar-form" }, [_vm._t("default")], 2) : _vm._e();
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

/* style */
var __vue_inject_styles__$a = undefined;
/* scoped */
var __vue_scope_id__$a = undefined;
/* module identifier */
var __vue_module_identifier__$a = undefined;
/* functional template */
var __vue_is_functional_template__$a = false;
/* component normalizer */
function __vue_normalize__$a(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarForm.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarForm = __vue_normalize__$a({ render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a }, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, undefined, undefined);

//
//
//
//
//


var script$b = {
  name: 'sidebar-header',
  computed: {
    hasSlotDefault: function hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
};

/* script */
var __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.hasSlotDefault ? _c("div", { staticClass: "sidebar-header" }, [_vm._t("default")], 2) : _vm._e();
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

/* style */
var __vue_inject_styles__$b = undefined;
/* scoped */
var __vue_scope_id__$b = undefined;
/* module identifier */
var __vue_module_identifier__$b = undefined;
/* functional template */
var __vue_is_functional_template__$b = false;
/* component normalizer */
function __vue_normalize__$b(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarHeader.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarHeader = __vue_normalize__$b({ render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b }, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, undefined, undefined);

var togglePs = {
  methods: {
    togglePs: function togglePs(toggle) {
      var sidebar = document.querySelector('.sidebar-nav section');
      if (sidebar) {
        // sidebar.classList.toggle('ps', toggle);
        // sidebar.classList.toggle('ps-container', toggle);
        // sidebar.classList.toggle('ps--active-y', toggle);
        if (toggle) {
          sidebar.classList.add('ps', 'ps-container', 'ps--active-y');
        } else {
          sidebar.classList.remove('ps', 'ps-container', 'ps--active-y');
        }
      }
    }
  }
};

//

var script$c = {
  name: 'sidebar-minimizer',
  mixins: [togglePs],
  mounted: function mounted() {
    var isMinimized = document.body.classList.contains('sidebar-minimized');
    this.togglePs(!isMinimized);
  },
  methods: {
    onClick: function onClick() {
      this.sidebarMinimize();
      this.brandMinimize();
    },
    sidebarMinimize: function sidebarMinimize() {
      var isMinimized = document.body.classList.toggle('sidebar-minimized');
      this.$emit('cui-sidebar-minimize', isMinimized);
      this.togglePs(!isMinimized);
    },
    brandMinimize: function brandMinimize() {
      document.body.classList.toggle('brand-minimized');
    }
  }
};

/* script */
var __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", {
    staticClass: "sidebar-minimizer",
    attrs: { type: "button" },
    on: {
      click: function click($event) {
        _vm.onClick();
      }
    }
  });
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

/* style */
var __vue_inject_styles__$c = undefined;
/* scoped */
var __vue_scope_id__$c = undefined;
/* module identifier */
var __vue_module_identifier__$c = undefined;
/* functional template */
var __vue_is_functional_template__$c = false;
/* component normalizer */
function __vue_normalize__$c(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarMinimizer.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarMinimizer = __vue_normalize__$c({ render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c }, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, undefined, undefined);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var $JSON = _core.JSON || (_core.JSON = { stringify: JSON.stringify });
var stringify = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

var stringify$1 = createCommonjsModule(function (module) {
module.exports = { "default": stringify, __esModule: true };
});

unwrapExports(stringify$1);

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _library = true;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: _library ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign = _core.Object.assign;

var assign$1 = createCommonjsModule(function (module) {
module.exports = { "default": assign, __esModule: true };
});

unwrapExports(assign$1);

var _extends = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(assign$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
});

var _extends$1 = unwrapExports(_extends);

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys = _core.Object.keys;

var keys$1 = createCommonjsModule(function (module) {
module.exports = { "default": keys, __esModule: true };
});

var _Object$keys = unwrapExports(keys$1);

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _redefine = _hide;

var _iterators = {};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function (object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from_1 = _core.Array.from;

var from_1$1 = createCommonjsModule(function (module) {
module.exports = { "default": from_1, __esModule: true };
});

unwrapExports(from_1$1);

var toConsumableArray = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _from2 = _interopRequireDefault(from_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray);

//
//
//
//

var script$d = {
  name: 'SidebarNavDivider',
  props: {
    classes: {
      type: [String, Array, Object],
      default: ''
    }
  },
  computed: {
    classList: function classList() {
      return ['nav-divider'].concat(_toConsumableArray(this.itemClasses));
    },
    itemClasses: function itemClasses() {
      var classes = this.classes;
      return !classes ? [] : typeof classes === 'string' || classes instanceof String ? classes.split(' ') : Array.isArray(classes) ? classes : _Object$keys(classes).filter(function (i) {
        return classes[i];
      });
    }
  }
};

/* script */
var __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { class: _vm.classList });
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

/* style */
var __vue_inject_styles__$d = undefined;
/* scoped */
var __vue_scope_id__$d = undefined;
/* module identifier */
var __vue_module_identifier__$d = undefined;
/* functional template */
var __vue_is_functional_template__$d = false;
/* component normalizer */
function __vue_normalize__$d(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarNavDivider.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavDivider = __vue_normalize__$d({ render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d }, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, undefined, undefined);

//
//
//
//
//
//
//
//
//

var script$e = {
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    classIcon: function classIcon() {
      return ['nav-icon', this.icon];
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle('open');
    }
  }
};

var __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("router-link", {
    staticClass: "nav-item nav-dropdown",
    attrs: { tag: "li", to: _vm.url, disabled: "" }
  }, [_c("div", {
    staticClass: "nav-link nav-dropdown-toggle",
    on: { click: _vm.handleClick }
  }, [_c("i", { class: _vm.classIcon }), _vm._v(" " + _vm._s(_vm.name))]), _vm._v(" "), _c("ul", { staticClass: "nav-dropdown-items" }, [_vm._t("default")], 2)]);
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

/* style */
var __vue_inject_styles__$e = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-9428792e_0", { source: "\n.nav-link[data-v-9428792e] {\n  cursor:pointer;\n}\n", map: { "version": 3, "sources": ["D:\\_Repos\\vue\\coreui-vue-julon/D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarNavDropdown.vue"], "names": [], "mappings": ";AA2CA;EACA,cAAA;AACA", "file": "SidebarNavDropdown.vue", "sourcesContent": ["<template>\r\n  <router-link tag=\"li\" class=\"nav-item nav-dropdown\" :to=\"url\" disabled>\r\n    <div class=\"nav-link nav-dropdown-toggle\" @click=\"handleClick\"><i :class=\"classIcon\"></i> {{name}}</div>\r\n    <ul class=\"nav-dropdown-items\">\r\n      <slot></slot>\r\n    </ul>\r\n  </router-link>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    name: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n    url: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n    icon: {\r\n      type: String,\r\n      default: ''\r\n    }\r\n  },\r\n  computed: {\r\n    classIcon () {\r\n      return [\r\n        'nav-icon',\r\n        this.icon\r\n      ]\r\n    }\r\n  },\r\n  methods: {\r\n    handleClick (e) {\r\n      e.preventDefault()\r\n      e.target.parentElement.classList.toggle('open')\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped lang=\"css\">\r\n  .nav-link {\r\n    cursor:pointer;\r\n  }\r\n</style>\r\n"] }, media: undefined });
};
/* scoped */
var __vue_scope_id__$e = "data-v-9428792e";
/* module identifier */
var __vue_module_identifier__$e = undefined;
/* functional template */
var __vue_is_functional_template__$e = false;
/* component normalizer */
function __vue_normalize__$e(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarNavDropdown.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var SidebarNavDropdown = __vue_normalize__$e({ render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e }, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, __vue_create_injector__, undefined);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object = _core.Object;
var create = function create(P, D) {
  return $Object.create(P, D);
};

var create$1 = createCommonjsModule(function (module) {
module.exports = { "default": create, __esModule: true };
});

var _Object$create = unwrapExports(create$1);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$f = {
  name: 'sidebar-nav-link',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    badge: {
      type: Object,
      default: function _default() {}
    },
    variant: {
      type: String,
      default: ''
    },
    classes: {
      type: [String, Array, Object],
      default: ''
    },
    attributes: {
      type: Object,
      default: function _default() {
        return _Object$create(null);
      }
    }
  },
  computed: {
    classList: function classList() {
      return ['nav-link', this.linkVariant].concat(_toConsumableArray(this.disabledClasses), _toConsumableArray(this.attrClasses), _toConsumableArray(this.itemClasses));
    },
    classIcon: function classIcon() {
      return ['nav-icon', this.icon];
    },
    linkVariant: function linkVariant() {
      return this.variant ? 'nav-link-' + this.variant : '';
    },
    itemClasses: function itemClasses() {
      return this.getClassArray(this.classes);
    },
    attrClasses: function attrClasses() {
      return this.getClassArray(this.attributes.class);
    },
    disabledClasses: function disabledClasses() {
      return this.isDisabled ? 'disabled'.split(' ') : [];
    },
    isDisabled: function isDisabled() {
      return Boolean(this.attributes.disabled);
    },
    isExternalLink: function isExternalLink() {
      return Boolean(this.url.substring(0, 4) === 'http');
    }
  },
  methods: {
    getClassArray: function getClassArray(classes) {
      return !classes ? [] : typeof classes === 'string' || classes instanceof String ? classes.split(' ') : Array.isArray(classes) ? classes : _Object$keys(classes).filter(function (i) {
        return classes[i];
      });
    }
  }
};

/* script */
var __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.isDisabled ? _c("a", _vm._b({
    class: _vm.classList,
    attrs: { tabindex: "-1" },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        $event.preventDefault();
      }
    }
  }, "a", _vm.attributes, false), [_c("i", { class: _vm.classIcon }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _vm.badge && _vm.badge.text ? _c("b-badge", { attrs: { variant: _vm.badge.variant } }, [_vm._v(_vm._s(_vm.badge.text))]) : _vm._e()], 1) : _vm.isExternalLink ? _c("a", _vm._b({ class: _vm.classList, attrs: { href: _vm.url } }, "a", _vm.attributes, false), [_c("i", { class: _vm.classIcon }), _vm._v(" " + _vm._s(_vm.name) + "\n  "), _vm.badge && _vm.badge.text ? _c("b-badge", { attrs: { variant: _vm.badge.variant } }, [_vm._v(_vm._s(_vm.badge.text))]) : _vm._e()], 1) : _c("router-link", _vm._b({ class: _vm.classList, attrs: { to: _vm.url } }, "router-link", _vm.attributes, false), [_c("i", { class: _vm.classIcon }), _vm._v(" " + _vm._s(_vm.name) + "\n  "), _vm.badge && _vm.badge.text ? _c("b-badge", { attrs: { variant: _vm.badge.variant } }, [_vm._v(_vm._s(_vm.badge.text))]) : _vm._e()], 1);
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

/* style */
var __vue_inject_styles__$f = undefined;
/* scoped */
var __vue_scope_id__$f = undefined;
/* module identifier */
var __vue_module_identifier__$f = undefined;
/* functional template */
var __vue_is_functional_template__$f = false;
/* component normalizer */
function __vue_normalize__$f(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarNavLink.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavLink = __vue_normalize__$f({ render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f }, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//

var script$g = {
  props: {
    name: {
      type: String,
      default: ''
    },
    classes: {
      type: [String, Array, Object],
      default: ''
    },
    wrapper: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    classList: function classList() {
      return ['nav-title'].concat(_toConsumableArray(this.itemClasses));
    },
    itemClasses: function itemClasses() {
      var classes = this.classes;
      return !classes ? [] : typeof classes === 'string' || classes instanceof String ? classes.split(' ') : Array.isArray(classes) ? classes : _Object$keys(classes).filter(function (i) {
        return classes[i];
      });
    }
  }
};

/* script */
var __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { class: _vm.classList }, [_vm.wrapper && _vm.wrapper.element ? [_c(_vm.wrapper.element, _vm._b({ tag: "component" }, "component", _vm.wrapper.attributes, false), [_vm._v("\n      " + _vm._s(_vm.name) + "\n    ")])] : [_vm._v("\n    " + _vm._s(_vm.name) + "\n  ")]], 2);
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

/* style */
var __vue_inject_styles__$g = undefined;
/* scoped */
var __vue_scope_id__$g = undefined;
/* module identifier */
var __vue_module_identifier__$g = undefined;
/* functional template */
var __vue_is_functional_template__$g = false;
/* component normalizer */
function __vue_normalize__$g(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarNavTitle.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavTitle = __vue_normalize__$g({ render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g }, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, undefined, undefined);

var script$h = {
  name: 'sidebar-nav-item',
  mixins: [hideMobile],
  props: {
    classes: {
      type: [String, Array, Object],
      default: ''
    }
  },
  computed: {
    classList: function classList() {
      return ['nav-item'].concat(_toConsumableArray(this.itemClasses));
    },
    itemClasses: function itemClasses() {
      var classes = this.classes;
      return !classes ? [] : typeof classes === 'string' || classes instanceof String ? classes.split(' ') : Array.isArray(classes) ? classes : _Object$keys(classes).filter(function (i) {
        return classes[i];
      });
    }
  }
};

/* script */
var __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { class: _vm.classList, on: { click: _vm.hideMobile } }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

/* style */
var __vue_inject_styles__$h = undefined;
/* scoped */
var __vue_scope_id__$h = undefined;
/* module identifier */
var __vue_module_identifier__$h = undefined;
/* functional template */
var __vue_is_functional_template__$h = false;
/* component normalizer */
function __vue_normalize__$h(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarNavItem.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavItem = __vue_normalize__$h({ render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h }, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, undefined, undefined);

var script$i = {
  name: 'SidebarNavLabel',
  components: {
    SidebarNavItem: SidebarNavItem
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: 'fa fa-circle'
    },
    classes: {
      type: [String, Array, Object],
      default: ''
    },
    label: {
      type: Object,
      required: true,
      default: function _default() {}
    }
  },
  computed: {
    classList: function classList() {
      var classes = {
        navItem: ['hidden-cn'].concat(_toConsumableArray(this.itemClasses)),
        navLink: 'nav-label',
        icon: [this.icon ? this.icon : 'fa fa-circle', this.label.variant ? 'text-' + this.label.variant : '', this.label.class ? this.label.class : ''].join(' ')
      };
      return classes;
    },
    itemClasses: function itemClasses() {
      var classes = this.classes;
      return !classes ? [] : typeof classes === 'string' || classes instanceof String ? classes.split(' ') : Array.isArray(classes) ? classes : _Object$keys(classes).filter(function (i) {
        return classes[i];
      });
    }
  }
};

/* script */
var __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("SidebarNavItem", { attrs: { classes: _vm.classList.navItem } }, [_c("a", { class: _vm.classList.navLink, attrs: { href: _vm.url } }, [_c("i", { class: _vm.classList.icon }), _vm._v(" " + _vm._s(_vm.name) + "\n  ")])]);
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

/* style */
var __vue_inject_styles__$i = undefined;
/* scoped */
var __vue_scope_id__$i = undefined;
/* module identifier */
var __vue_module_identifier__$i = undefined;
/* functional template */
var __vue_is_functional_template__$i = false;
/* component normalizer */
function __vue_normalize__$i(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarNavLabel.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavLabel = __vue_normalize__$i({ render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i }, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, undefined, undefined);

var script$j = {
  name: 'SidebarNav',
  components: {
    SidebarNavDivider: SidebarNavDivider,
    SidebarNavDropdown: SidebarNavDropdown,
    SidebarNavLink: SidebarNavLink,
    SidebarNavTitle: SidebarNavTitle,
    SidebarNavItem: SidebarNavItem,
    SidebarNavLabel: SidebarNavLabel,
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    navItems: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    psSettings: function psSettings() {
      // ToDo: find better rtl fix
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',
        wheelPropagation: false,
        interceptRailY: function interceptRailY(styles) {
          return _extends$1({}, styles, { height: 0 });
        }
      };
    }
  },
  methods: {
    scrollHandle: function scrollHandle(evt) {
      // console.log(evt)
    }
  }
};

var __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("nav", { staticClass: "sidebar-nav" }, [_c("VuePerfectScrollbar", {
    staticClass: "scroll-area",
    attrs: { settings: _vm.psSettings },
    on: { "ps-scroll-y": _vm.scrollHandle }
  }, [_c("ul", { staticClass: "nav" }, [_vm._l(_vm.navItems, function (item, index) {
    return [item.title ? [_c("SidebarNavTitle", {
      key: index,
      attrs: {
        name: item.name,
        classes: item.class,
        wrapper: item.wrapper
      }
    })] : item.divider ? [_c("SidebarNavDivider", {
      key: index,
      attrs: { classes: item.class }
    })] : item.label ? [_c("SidebarNavLabel", {
      key: index,
      attrs: {
        name: item.name,
        url: item.url,
        icon: item.icon,
        label: item.label,
        classes: item.class
      }
    })] : [item.children ? [_c("SidebarNavDropdown", {
      key: index,
      attrs: {
        name: item.name,
        url: item.url,
        icon: item.icon
      }
    }, [_vm._l(item.children, function (childL1, index1) {
      return [childL1.children ? [_c("SidebarNavDropdown", {
        key: index1,
        attrs: {
          name: childL1.name,
          url: childL1.url,
          icon: childL1.icon
        }
      }, _vm._l(childL1.children, function (childL2, index2) {
        return _c("li", {
          key: index2,
          staticClass: "nav-item"
        }, [_c("SidebarNavLink", {
          attrs: {
            name: childL2.name,
            url: childL2.url,
            icon: childL2.icon,
            badge: childL2.badge,
            variant: childL2.variant,
            attributes: childL2.attributes
          }
        })], 1);
      }), 0)] : [_c("SidebarNavItem", {
        key: index1,
        attrs: {
          classes: item.class
        }
      }, [_c("SidebarNavLink", {
        attrs: {
          name: childL1.name,
          url: childL1.url,
          icon: childL1.icon,
          badge: childL1.badge,
          variant: childL1.variant,
          attributes: childL1.attributes
        }
      })], 1)]];
    })], 2)] : [_c("SidebarNavItem", {
      key: index,
      attrs: { classes: item.class }
    }, [_c("SidebarNavLink", {
      attrs: {
        name: item.name,
        url: item.url,
        icon: item.icon,
        badge: item.badge,
        variant: item.variant,
        attributes: item.attributes
      }
    })], 1)]]];
  })], 2), _vm._v(" "), _vm._t("default")], 2)], 1);
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

/* style */
var __vue_inject_styles__$j = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2ba57165_0", { source: "\n.scroll-area[data-v-2ba57165] {\n  position: absolute;\n  height: 100%;\n  margin: auto;\n}\n", map: { "version": 3, "sources": ["D:\\_Repos\\vue\\coreui-vue-julon/D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarNav.vue"], "names": [], "mappings": ";AAmGA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;AACA", "file": "SidebarNav.vue", "sourcesContent": ["<template>\r\n  <nav class=\"sidebar-nav\">\r\n    <VuePerfectScrollbar class=\"scroll-area\" :settings=\"psSettings\" @ps-scroll-y=\"scrollHandle\">\r\n      <ul class=\"nav\">\r\n        <template v-for=\"(item, index) in navItems\">\r\n          <template v-if=\"item.title\">\r\n            <SidebarNavTitle :key=\"index\" :name=\"item.name\" :classes=\"item.class\" :wrapper=\"item.wrapper\"/>\r\n          </template>\r\n          <template v-else-if=\"item.divider\">\r\n            <SidebarNavDivider :key=\"index\" :classes=\"item.class\"/>\r\n          </template>\r\n          <template v-else-if=\"item.label\">\r\n            <SidebarNavLabel :key=\"index\" :name=\"item.name\" :url=\"item.url\" :icon=\"item.icon\" :label=\"item.label\" :classes=\"item.class\"/>\r\n          </template>\r\n          <template v-else>\r\n            <template v-if=\"item.children\">\r\n              <!-- First level dropdown -->\r\n              <SidebarNavDropdown :key=\"index\" :name=\"item.name\" :url=\"item.url\" :icon=\"item.icon\">\r\n                <template v-for=\"(childL1, index1) in item.children\">\r\n                  <template v-if=\"childL1.children\">\r\n                    <!-- Second level dropdown -->\r\n                    <SidebarNavDropdown :key=\"index1\" :name=\"childL1.name\" :url=\"childL1.url\" :icon=\"childL1.icon\">\r\n                      <li :key=\"index2\" class=\"nav-item\" v-for=\"(childL2, index2) in childL1.children\">\r\n                        <SidebarNavLink :name=\"childL2.name\" :url=\"childL2.url\" :icon=\"childL2.icon\" :badge=\"childL2.badge\" :variant=\"childL2.variant\" :attributes=\"childL2.attributes\" />\r\n                      </li>\r\n                    </SidebarNavDropdown>\r\n                  </template>\r\n                  <template v-else>\r\n                    <SidebarNavItem :key=\"index1\" :classes=\"item.class\">\r\n                      <SidebarNavLink :name=\"childL1.name\" :url=\"childL1.url\" :icon=\"childL1.icon\" :badge=\"childL1.badge\" :variant=\"childL1.variant\" :attributes=\"childL1.attributes\"/>\r\n                    </SidebarNavItem>\r\n                  </template>\r\n                </template>\r\n              </SidebarNavDropdown>\r\n            </template>\r\n            <template v-else>\r\n              <SidebarNavItem :key=\"index\" :classes=\"item.class\">\r\n                <SidebarNavLink :name=\"item.name\" :url=\"item.url\" :icon=\"item.icon\" :badge=\"item.badge\" :variant=\"item.variant\" :attributes=\"item.attributes\"/>\r\n              </SidebarNavItem>\r\n            </template>\r\n          </template>\r\n        </template>\r\n      </ul>\r\n      <slot></slot>\r\n    </VuePerfectScrollbar>\r\n  </nav>\r\n</template>\r\n\r\n<script>\r\nimport SidebarNavDivider from './SidebarNavDivider'\r\nimport SidebarNavDropdown from './SidebarNavDropdown'\r\nimport SidebarNavLink from './SidebarNavLink'\r\nimport SidebarNavTitle from './SidebarNavTitle'\r\nimport SidebarNavItem from './SidebarNavItem'\r\nimport SidebarNavLabel from './SidebarNavLabel'\r\nimport VuePerfectScrollbar from 'vue-perfect-scrollbar'\r\n\r\nexport default {\r\n  name: 'SidebarNav',\r\n  components: {\r\n    SidebarNavDivider,\r\n    SidebarNavDropdown,\r\n    SidebarNavLink,\r\n    SidebarNavTitle,\r\n    SidebarNavItem,\r\n    SidebarNavLabel,\r\n    VuePerfectScrollbar\r\n  },\r\n  props: {\r\n    navItems: {\r\n      type: Array,\r\n      required: true,\r\n      default: () => []\r\n    }\r\n  },\r\n  data () {\r\n    return {}\r\n  },\r\n  computed: {\r\n    psSettings: () => {\r\n      // ToDo: find better rtl fix\r\n      return {\r\n        maxScrollbarLength: 200,\r\n        minScrollbarLength: 40,\r\n        suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',\r\n        wheelPropagation: false,\r\n        interceptRailY: styles => ({ ...styles, height: 0 })\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    scrollHandle (evt) {\r\n      // console.log(evt)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped lang=\"css\">\r\n  .scroll-area {\r\n    position: absolute;\r\n    height: 100%;\r\n    margin: auto;\r\n  }\r\n</style>\r\n"] }, media: undefined });
};
/* scoped */
var __vue_scope_id__$j = "data-v-2ba57165";
/* module identifier */
var __vue_module_identifier__$j = undefined;
/* functional template */
var __vue_is_functional_template__$j = false;
/* component normalizer */
function __vue_normalize__$j(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarNav.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$1() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var SidebarNav = __vue_normalize__$j({ render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j }, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, __vue_create_injector__$1, undefined);

//

var script$k = {
  name: 'SidebarToggler',
  props: {
    defaultOpen: {
      type: Boolean,
      default: true
    },
    display: {
      type: String,
      default: 'lg'
    },
    mobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList: function classList() {
      return ['navbar-toggler'];
    }
  },
  mounted: function mounted() {
    this.toggle(this.defaultOpen);
  },
  methods: {
    toggle: function toggle(force) {
      var _ref = [this.display, this.mobile],
          display = _ref[0],
          mobile = _ref[1];

      var cssClass = sidebarCssClasses[0];
      if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
        cssClass = 'sidebar-' + display + '-show';
      }
      toggleClasses(cssClass, sidebarCssClasses, force);
    },
    sidebarToggle: function sidebarToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      this.toggle();
    }
  }
};

/* script */
var __vue_script__$k = script$k;

/* template */
var __vue_render__$k = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", {
    class: _vm.classList,
    attrs: { display: _vm.display, mobile: _vm.mobile, type: "button" },
    on: { click: _vm.sidebarToggle }
  }, [_c("span", { staticClass: "navbar-toggler-icon" })]);
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

/* style */
var __vue_inject_styles__$k = undefined;
/* scoped */
var __vue_scope_id__$k = undefined;
/* module identifier */
var __vue_module_identifier__$k = undefined;
/* functional template */
var __vue_is_functional_template__$k = false;
/* component normalizer */
function __vue_normalize__$k(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "D:\\_Repos\\vue\\coreui-vue-julon\\src\\components\\Sidebar\\SidebarToggler.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarToggler = __vue_normalize__$k({ render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k }, __vue_inject_styles__$k, __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, undefined, undefined);

var LibraryModule = {
  Aside: Aside,
  AsideToggler: AsideToggler,
  Breadcrumb: Breadcrumb,
  Callout: Callout,
  Footer: Footer,
  Header: Header,
  HeaderDropdown: HeaderDropdown,
  Sidebar: Sidebar,
  SidebarFooter: SidebarFooter,
  SidebarForm: SidebarForm,
  SidebarHeader: SidebarHeader,
  SidebarMinimizer: SidebarMinimizer,
  SidebarNav: SidebarNav,
  SidebarNavDivider: SidebarNavDivider,
  SidebarNavDropdown: SidebarNavDropdown,
  SidebarNavItem: SidebarNavItem,
  SidebarNavLabel: SidebarNavLabel,
  SidebarNavLink: SidebarNavLink,
  SidebarNavTitle: SidebarNavTitle,
  SidebarToggler: SidebarToggler,
  Switch: Switch,

  install: function install(Vue) {
    // Register components with vue
    Vue.component("Aside", Aside);
    Vue.component("AsideToggler", AsideToggler);
    Vue.component("Breadcrumb", Breadcrumb);
    Vue.component("Callout", Callout);
    Vue.component("Footer", Footer);
    Vue.component("Header", Header);
    Vue.component("HeaderDropdown", HeaderDropdown);
    Vue.component("Sidebar", Sidebar);
    Vue.component("SidebarFooter", SidebarFooter);
    Vue.component("SidebarForm", SidebarForm);
    Vue.component("SidebarHeader", SidebarHeader);
    Vue.component("SidebarMinimizer", SidebarMinimizer);
    Vue.component("SidebarNav", SidebarNav);
    Vue.component("SidebarNavDivider", SidebarNavDivider);
    Vue.component("SidebarNavDropdown", SidebarNavDropdown);
    Vue.component("SidebarNavItem", SidebarNavItem);
    Vue.component("SidebarNavLabel", SidebarNavLabel);
    Vue.component("SidebarNavLink", SidebarNavLink);
    Vue.component("SidebarNavTitle", SidebarNavTitle);
    Vue.component("SidebarToggler", SidebarToggler);
    Vue.component("Switch", Switch);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (LibraryModule);



/***/ }),

/***/ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-clickaway/dist/vue-clickaway.common.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "./node_modules/vue-perfect-scrollbar/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-perfect-scrollbar/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=6)}([function(t,e,r){"use strict";function o(t,e){function r(){t.classList.add("ps--focus")}function o(){t.classList.remove("ps--focus")}var n=this;n.settings=a();for(var i in e)n.settings[i]=e[i];n.containerWidth=null,n.containerHeight=null,n.contentWidth=null,n.contentHeight=null,n.isRtl="rtl"===c.css(t,"direction"),n.isNegativeScroll=function(){var e=t.scrollLeft,r=null;return t.scrollLeft=-1,r=t.scrollLeft<0,t.scrollLeft=e,r}(),n.negativeScrollAdjustment=n.isNegativeScroll?t.scrollWidth-t.clientWidth:0,n.event=new u,n.ownerDocument=t.ownerDocument||document,n.scrollbarXRail=c.appendTo(c.create("div","ps__scrollbar-x-rail"),t),n.scrollbarX=c.appendTo(c.create("div","ps__scrollbar-x"),n.scrollbarXRail),n.scrollbarX.setAttribute("tabindex",0),n.event.bind(n.scrollbarX,"focus",r),n.event.bind(n.scrollbarX,"blur",o),n.scrollbarXActive=null,n.scrollbarXWidth=null,n.scrollbarXLeft=null,n.scrollbarXBottom=s.toInt(c.css(n.scrollbarXRail,"bottom")),n.isScrollbarXUsingBottom=n.scrollbarXBottom===n.scrollbarXBottom,n.scrollbarXTop=n.isScrollbarXUsingBottom?null:s.toInt(c.css(n.scrollbarXRail,"top")),n.railBorderXWidth=s.toInt(c.css(n.scrollbarXRail,"borderLeftWidth"))+s.toInt(c.css(n.scrollbarXRail,"borderRightWidth")),c.css(n.scrollbarXRail,"display","block"),n.railXMarginWidth=s.toInt(c.css(n.scrollbarXRail,"marginLeft"))+s.toInt(c.css(n.scrollbarXRail,"marginRight")),c.css(n.scrollbarXRail,"display",""),n.railXWidth=null,n.railXRatio=null,n.scrollbarYRail=c.appendTo(c.create("div","ps__scrollbar-y-rail"),t),n.scrollbarY=c.appendTo(c.create("div","ps__scrollbar-y"),n.scrollbarYRail),n.scrollbarY.setAttribute("tabindex",0),n.event.bind(n.scrollbarY,"focus",r),n.event.bind(n.scrollbarY,"blur",o),n.scrollbarYActive=null,n.scrollbarYHeight=null,n.scrollbarYTop=null,n.scrollbarYRight=s.toInt(c.css(n.scrollbarYRail,"right")),n.isScrollbarYUsingRight=n.scrollbarYRight===n.scrollbarYRight,n.scrollbarYLeft=n.isScrollbarYUsingRight?null:s.toInt(c.css(n.scrollbarYRail,"left")),n.scrollbarYOuterWidth=n.isRtl?s.outerWidth(n.scrollbarY):null,n.railBorderYWidth=s.toInt(c.css(n.scrollbarYRail,"borderTopWidth"))+s.toInt(c.css(n.scrollbarYRail,"borderBottomWidth")),c.css(n.scrollbarYRail,"display","block"),n.railYMarginHeight=s.toInt(c.css(n.scrollbarYRail,"marginTop"))+s.toInt(c.css(n.scrollbarYRail,"marginBottom")),c.css(n.scrollbarYRail,"display",""),n.railYHeight=null,n.railYRatio=null}function n(t){return t.getAttribute("data-ps-id")}function i(t,e){t.setAttribute("data-ps-id",e)}function l(t){t.removeAttribute("data-ps-id")}var s=r(2),a=r(14),c=r(4),u=r(11),p=r(12),d={};e.add=function(t,e){var r=p();return i(t,r),d[r]=new o(t,e),d[r]},e.remove=function(t){delete d[n(t)],l(t)},e.get=function(t){return d[n(t)]}},function(t,e,r){"use strict";function o(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function n(t,e){var r={width:e.railXWidth};e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-t.scrollTop:r.top=e.scrollbarXTop+t.scrollTop,l.css(e.scrollbarXRail,r);var o={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?o.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:o.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?o.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:o.left=e.scrollbarYLeft+t.scrollLeft,l.css(e.scrollbarYRail,o),l.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),l.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var i=r(2),l=r(4),s=r(0),a=r(3);t.exports=function(t){var e=s.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var r;t.contains(e.scrollbarXRail)||(r=l.queryChildren(t,".ps__scrollbar-x-rail"),r.length>0&&r.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(r=l.queryChildren(t,".ps__scrollbar-y-rail"),r.length>0&&r.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=o(e,i.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=i.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=o(e,i.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=i.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),n(t,e),e.scrollbarXActive?t.classList.add("ps--active-x"):(t.classList.remove("ps--active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,a(t,"left",0)),e.scrollbarYActive?t.classList.add("ps--active-y"):(t.classList.remove("ps--active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,a(t,"top",0))}},function(t,e,r){"use strict";function o(t){var e,r=["ps--in-scrolling"];return e=void 0===t?["ps--x","ps--y"]:["ps--"+t],r.concat(e)}var n=r(4),i=e.toInt=function(t){return parseInt(t,10)||0};e.isEditable=function(t){return n.matches(t,"input,[contenteditable]")||n.matches(t,"select,[contenteditable]")||n.matches(t,"textarea,[contenteditable]")||n.matches(t,"button,[contenteditable]")},e.removePsClasses=function(t){for(var e=0;e<t.classList.length;e++){var r=t.classList[e];0===r.indexOf("ps-")&&t.classList.remove(r)}},e.outerWidth=function(t){return i(n.css(t,"width"))+i(n.css(t,"paddingLeft"))+i(n.css(t,"paddingRight"))+i(n.css(t,"borderLeftWidth"))+i(n.css(t,"borderRightWidth"))},e.startScrolling=function(t,e){for(var r=o(e),n=0;n<r.length;n++)t.classList.add(r[n])},e.stopScrolling=function(t,e){for(var r=o(e),n=0;n<r.length;n++)t.classList.remove(r[n])},e.env={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof window&&null!==window.navigator.msMaxTouchPoints}},function(t,e,r){"use strict";var o=r(0),n=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};t.exports=function(t,e,r){if(void 0===t)throw"You must provide an element to the update-scroll function";if(void 0===e)throw"You must provide an axis to the update-scroll function";if(void 0===r)throw"You must provide a value to the update-scroll function";"top"===e&&r<=0&&(t.scrollTop=r=0,t.dispatchEvent(n("ps-y-reach-start"))),"left"===e&&r<=0&&(t.scrollLeft=r=0,t.dispatchEvent(n("ps-x-reach-start")));var i=o.get(t);"top"===e&&r>=i.contentHeight-i.containerHeight&&(r=i.contentHeight-i.containerHeight,r-t.scrollTop<=2?r=t.scrollTop:t.scrollTop=r,t.dispatchEvent(n("ps-y-reach-end"))),"left"===e&&r>=i.contentWidth-i.containerWidth&&(r=i.contentWidth-i.containerWidth,r-t.scrollLeft<=2?r=t.scrollLeft:t.scrollLeft=r,t.dispatchEvent(n("ps-x-reach-end"))),void 0===i.lastTop&&(i.lastTop=t.scrollTop),void 0===i.lastLeft&&(i.lastLeft=t.scrollLeft),"top"===e&&r<i.lastTop&&t.dispatchEvent(n("ps-scroll-up")),"top"===e&&r>i.lastTop&&t.dispatchEvent(n("ps-scroll-down")),"left"===e&&r<i.lastLeft&&t.dispatchEvent(n("ps-scroll-left")),"left"===e&&r>i.lastLeft&&t.dispatchEvent(n("ps-scroll-right")),"top"===e&&r!==i.lastTop&&(t.scrollTop=i.lastTop=r,t.dispatchEvent(n("ps-scroll-y"))),"left"===e&&r!==i.lastLeft&&(t.scrollLeft=i.lastLeft=r,t.dispatchEvent(n("ps-scroll-x")))}},function(t,e,r){"use strict";function o(t,e){return window.getComputedStyle(t)[e]}function n(t,e,r){return"number"==typeof r&&(r=r.toString()+"px"),t.style[e]=r,t}function i(t,e){for(var r in e){var o=e[r];"number"==typeof o&&(o=o.toString()+"px"),t.style[r]=o}return t}var l={};l.create=function(t,e){var r=document.createElement(t);return r.className=e,r},l.appendTo=function(t,e){return e.appendChild(t),t},l.css=function(t,e,r){return"object"==typeof e?i(t,e):void 0===r?o(t,e):n(t,e,r)},l.matches=function(t,e){return void 0!==t.matches?t.matches(e):t.msMatchesSelector(e)},l.remove=function(t){void 0!==t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},l.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return l.matches(t,e)})},t.exports=l},function(t,e,r){r(28);var o=r(25)(r(7),r(26),null,null);t.exports=o.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(5),n=r.n(o);e.default=n.a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(10),n=r.n(o);e.default={name:"vue-perfect-scrollbar",props:{settings:{default:void 0},swicher:{type:Boolean,default:!0},tagname:{type:String,default:"section"}},methods:{scrollHanle:function(t){this.$emit(t.type,t)},update:function(){n.a.update(this.$el)},__init:function(){this.swicher&&(this._ps_inited?this.update(this.$el):(this._ps_inited=!0,n.a.initialize(this.$el,this.settings)))},__uninit:function(){n.a.destroy(this.$el),this._ps_inited=!1}},watch:{swicher:function(t){t&&!this._ps_inited&&this.__init(),!t&&this._ps_inited&&this.__uninit()},$route:function(){this.update()}},mounted:function(){this.__init()},updated:function(){this.$nextTick(this.update)},activated:function(){this.__init()},deactivated:function(){this.__uninit()},beforeDestroy:function(){this.__uninit()}}},function(t,e,r){e=t.exports=r(9)(),e.push([t.i,".ps{-ms-touch-action:auto;touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail{display:block;background-color:transparent}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps>.ps__scrollbar-x-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;bottom:0;height:15px}.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;bottom:2px;height:6px}.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{height:11px}.ps>.ps__scrollbar-y-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;right:0;width:15px}.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;right:2px;width:6px}.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y,.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{width:11px}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail{opacity:.6}.ps:hover>.ps__scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{background-color:#999}.ps:hover>.ps__scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{background-color:#999}.ps-container{position:relative}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<e.length;n++){var l=e[n];"number"==typeof l[0]&&o[l[0]]||(r&&!l[2]?l[2]=r:r&&(l[2]="("+l[2]+") and ("+r+")"),t.push(l))}},t}},function(t,e,r){"use strict";t.exports=r(13)},function(t,e,r){"use strict";var o=function(t){this.element=t,this.events={}};o.prototype.bind=function(t,e){void 0===this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},o.prototype.unbind=function(t,e){var r=void 0!==e;this.events[t]=this.events[t].filter(function(o){return!(!r||o===e)||(this.element.removeEventListener(t,o,!1),!1)},this)},o.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var n=function(){this.eventElements=[]};n.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return void 0===e&&(e=new o(t),this.eventElements.push(e)),e},n.prototype.bind=function(t,e,r){this.eventElement(t).bind(e,r)},n.prototype.unbind=function(t,e,r){this.eventElement(t).unbind(e,r)},n.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},n.prototype.once=function(t,e,r){var o=this.eventElement(t),n=function(t){o.unbind(e,n),r(t)};o.bind(e,n)},t.exports=n},function(t,e,r){"use strict";t.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},function(t,e,r){"use strict";var o=r(15),n=r(23),i=r(24);t.exports={initialize:n,update:i,destroy:o}},function(t,e,r){"use strict";t.exports=function(){return{handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}}},function(t,e,r){"use strict";var o=r(2),n=r(4),i=r(0);t.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),n.remove(e.scrollbarX),n.remove(e.scrollbarY),n.remove(e.scrollbarXRail),n.remove(e.scrollbarYRail),o.removePsClasses(t),i.remove(t))}},function(t,e,r){"use strict";function o(t,e){function r(t){return t.getBoundingClientRect()}var o=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",o),e.event.bind(e.scrollbarYRail,"click",function(o){var n=o.pageY-window.pageYOffset-r(e.scrollbarYRail).top,s=n>e.scrollbarYTop?1:-1;l(t,"top",t.scrollTop+s*e.containerHeight),i(t),o.stopPropagation()}),e.event.bind(e.scrollbarX,"click",o),e.event.bind(e.scrollbarXRail,"click",function(o){var n=o.pageX-window.pageXOffset-r(e.scrollbarXRail).left,s=n>e.scrollbarXLeft?1:-1;l(t,"left",t.scrollLeft+s*e.containerWidth),i(t),o.stopPropagation()})}var n=r(0),i=r(1),l=r(3);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(r){var n=o+r*e.railXRatio,l=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);e.scrollbarXLeft=n<0?0:n>l?l:n;var s=i.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var o=null,n=null,s=function(e){r(e.pageX-n),a(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(r){n=r.pageX,o=i.toInt(l.css(e.scrollbarX,"left"))*e.railXRatio,i.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),r.stopPropagation(),r.preventDefault()})}function n(t,e){function r(r){var n=o+r*e.railYRatio,l=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);e.scrollbarYTop=n<0?0:n>l?l:n;var s=i.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var o=null,n=null,s=function(e){r(e.pageY-n),a(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(r){n=r.pageY,o=i.toInt(l.css(e.scrollbarY,"top"))*e.railYRatio,i.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),r.stopPropagation(),r.preventDefault()})}var i=r(2),l=r(4),s=r(0),a=r(1),c=r(3);t.exports=function(t){var e=s.get(t);o(t,e),n(t,e)}},function(t,e,r){"use strict";function o(t,e){function r(r,o){var n=t.scrollTop;if(0===r){if(!e.scrollbarYActive)return!1;if(0===n&&o>0||n>=e.contentHeight-e.containerHeight&&o<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===o){if(!e.scrollbarXActive)return!1;if(0===i&&r<0||i>=e.contentWidth-e.containerWidth&&r>0)return!e.settings.wheelPropagation}return!0}var o=!1;e.event.bind(t,"mouseenter",function(){o=!0}),e.event.bind(t,"mouseleave",function(){o=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=i.matches(e.scrollbarX,":focus")||i.matches(e.scrollbarY,":focus");if(o||u){var p=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(p){if("IFRAME"===p.tagName)p=p.contentDocument.activeElement;else for(;p.shadowRoot;)p=p.shadowRoot.activeElement;if(n.isEditable(p))return}var d=0,f=0;switch(c.which){case 37:d=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:d=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+d),s(t),l=r(d,f),l&&c.preventDefault()}}})}var n=r(2),i=r(4),l=r(0),s=r(1),a=r(3);t.exports=function(t){o(t,l.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(r,o){var n=t.scrollTop;if(0===r){if(!e.scrollbarYActive)return!1;if(0===n&&o>0||n>=e.contentHeight-e.containerHeight&&o<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===o){if(!e.scrollbarXActive)return!1;if(0===i&&r<0||i>=e.contentWidth-e.containerWidth&&r>0)return!e.settings.wheelPropagation}return!0}function o(t){var e=t.deltaX,r=-1*t.deltaY;return void 0!==e&&void 0!==r||(e=-1*t.wheelDeltaX/6,r=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,r*=10),e!==e&&r!==r&&(e=0,r=t.wheelDelta),t.shiftKey?[-r,-e]:[e,r]}function n(e,r){var o=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(o){var n=window.getComputedStyle(o);if(![n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/))return!1;var i=o.scrollHeight-o.clientHeight;if(i>0&&!(0===o.scrollTop&&r>0||o.scrollTop===i&&r<0))return!0;var l=o.scrollLeft-o.clientWidth;if(l>0&&!(0===o.scrollLeft&&e<0||o.scrollLeft===l&&e>0))return!0}return!1}function s(s){var c=o(s),u=c[0],p=c[1];n(u,p)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(p?l(t,"top",t.scrollTop-p*e.settings.wheelSpeed):l(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):l(t,"left",t.scrollLeft-p*e.settings.wheelSpeed),a=!0):(l(t,"top",t.scrollTop-p*e.settings.wheelSpeed),l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),i(t),(a=a||r(u,p))&&(s.stopPropagation(),s.preventDefault()))}var a=!1;void 0!==window.onwheel?e.event.bind(t,"wheel",s):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var n=r(0),i=r(1),l=r(3);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){e.event.bind(t,"scroll",function(){i(t)})}var n=r(0),i=r(1);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function o(){c||(c=setInterval(function(){if(!i.get(t))return void clearInterval(c);s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),l(t)},50))}function a(){c&&(clearInterval(c),c=null),n.stopScrolling(t)}var c=null,u={top:0,left:0},p=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(r())?p=!0:(p=!1,a())}),e.event.bind(window,"mouseup",function(){p&&(p=!1,a())}),e.event.bind(window,"keyup",function(){p&&(p=!1,a())}),e.event.bind(window,"mousemove",function(e){if(p){var r={x:e.pageX,y:e.pageY},i={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};r.x<i.left+3?(u.left=-5,n.startScrolling(t,"x")):r.x>i.right-3?(u.left=5,n.startScrolling(t,"x")):u.left=0,r.y<i.top+3?(u.top=i.top+3-r.y<5?-5:-20,n.startScrolling(t,"y")):r.y>i.bottom-3?(u.top=r.y-i.bottom+3<5?5:20,n.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():o()}})}var n=r(2),i=r(0),l=r(1),s=r(3);t.exports=function(t){o(t,i.get(t))}},function(t,e,r){"use strict";function o(t,e,r,o){function n(r,o){var n=t.scrollTop,i=t.scrollLeft,l=Math.abs(r),s=Math.abs(o);if(s>l){if(o<0&&n===e.contentHeight-e.containerHeight||o>0&&0===n)return!e.settings.swipePropagation}else if(l>s&&(r<0&&i===e.contentWidth-e.containerWidth||r>0&&0===i))return!e.settings.swipePropagation;return!0}function a(e,r){s(t,"top",t.scrollTop-r),s(t,"left",t.scrollLeft-e),l(t)}function c(){w=!0}function u(){w=!1}function p(t){return t.targetTouches?t.targetTouches[0]:t}function d(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function f(t){if(d(t)){_=!0;var e=p(t);b.pageX=e.pageX,b.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!_&&e.settings.swipePropagation&&f(t),!w&&_&&d(t)){var r=p(t),o={pageX:r.pageX,pageY:r.pageY},i=o.pageX-b.pageX,l=o.pageY-b.pageY;a(i,l),b=o;var s=(new Date).getTime(),c=s-g;c>0&&(m.x=i/c,m.y=l/c,g=s),n(i,l)&&(t.stopPropagation(),t.preventDefault())}}function v(){!w&&_&&(_=!1,e.settings.swipeEasing&&(clearInterval(y),y=setInterval(function(){return i.get(t)&&(m.x||m.y)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10)))}var b={},g=0,m={},y=null,w=!1,_=!1;r?(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",v)):o&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",v)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",v)))}var n=r(2),i=r(0),l=r(1),s=r(3);t.exports=function(t){if(n.env.supportsTouch||n.env.supportsIePointer){o(t,i.get(t),n.env.supportsTouch,n.env.supportsIePointer)}}},function(t,e,r){"use strict";var o=r(0),n=r(1),i={"click-rail":r(16),"drag-scrollbar":r(17),keyboard:r(18),wheel:r(19),touch:r(22),selection:r(21)},l=r(20);t.exports=function(t,e){t.classList.add("ps");var r=o.add(t,"object"==typeof e?e:{});t.classList.add("ps--theme_"+r.settings.theme),r.settings.handlers.forEach(function(e){i[e](t)}),l(t),n(t)}},function(t,e,r){"use strict";var o=r(2),n=r(4),i=r(0),l=r(1),s=r(3);t.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,n.css(e.scrollbarXRail,"display","block"),n.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=o.toInt(n.css(e.scrollbarXRail,"marginLeft"))+o.toInt(n.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=o.toInt(n.css(e.scrollbarYRail,"marginTop"))+o.toInt(n.css(e.scrollbarYRail,"marginBottom")),n.css(e.scrollbarXRail,"display","none"),n.css(e.scrollbarYRail,"display","none"),l(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),n.css(e.scrollbarXRail,"display",""),n.css(e.scrollbarYRail,"display",""))}},function(t,e){t.exports=function(t,e,r,o){var n,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),o){var a=s.computed||(s.computed={});Object.keys(o).forEach(function(t){var e=o[t];a[t]=function(){return e}})}return{esModule:n,exports:i,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.$props.tagname,{tag:"section",staticClass:"ps-container",on:{"~mouseover":function(e){t.update(e)},"ps-scroll-y":t.scrollHanle,"ps-scroll-x":t.scrollHanle,"ps-scroll-up":t.scrollHanle,"ps-scroll-down":t.scrollHanle,"ps-scroll-left":t.scrollHanle,"ps-scroll-right":t.scrollHanle,"ps-y-reach-start":t.scrollHanle,"ps-y-reach-end":t.scrollHanle,"ps-x-reach-start":t.scrollHanle,"ps-x-reach-end":t.scrollHanle}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){function r(t,e){for(var r=0;r<t.length;r++){var o=t[r],n=u[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(s(o.parts[i],e))}else{for(var l=[],i=0;i<o.parts.length;i++)l.push(s(o.parts[i],e));u[o.id]={id:o.id,refs:1,parts:l}}}}function o(t){for(var e=[],r={},o=0;o<t.length;o++){var n=t[o],i=n[0],l=n[1],s=n[2],a=n[3],c={css:l,media:s,sourceMap:a};r[i]?r[i].parts.push(c):e.push(r[i]={id:i,parts:[c]})}return e}function n(t,e){var r=f(),o=b[b.length-1];if("top"===t.insertAt)o?o.nextSibling?r.insertBefore(e,o.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function l(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function s(t,e){var r,o,n;if(e.singleton){var s=v++;r=h||(h=l(e)),o=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=l(e),o=c.bind(null,r),n=function(){i(r)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}function a(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var i=document.createTextNode(n),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(i,l[e]):t.appendChild(i)}}function c(t,e){var r=e.css,o=e.media,n=e.sourceMap;if(o&&t.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u={},p=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,b=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=d()),void 0===e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],l=0;l<n.length;l++){var s=n[l],a=u[s.id];a.refs--,i.push(a)}if(t){r(o(t),e)}for(var l=0;l<i.length;l++){var a=i[l];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var g=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){var o=r(8);"string"==typeof o&&(o=[[t.i,o,""]]);r(27)(o,{});o.locals&&(t.exports=o.locals)}]);
//# sourceMappingURL=index.js.map

/***/ })

}]);