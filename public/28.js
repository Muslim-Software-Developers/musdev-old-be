(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_CardLine1ChartExample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/CardLine1ChartExample */ "./resources/js/views/dashboard/CardLine1ChartExample.vue");
/* harmony import */ var _dashboard_CardLine2ChartExample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/CardLine2ChartExample */ "./resources/js/views/dashboard/CardLine2ChartExample.vue");
/* harmony import */ var _dashboard_CardLine3ChartExample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/CardLine3ChartExample */ "./resources/js/views/dashboard/CardLine3ChartExample.vue");
/* harmony import */ var _dashboard_CardBarChartExample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/CardBarChartExample */ "./resources/js/views/dashboard/CardBarChartExample.vue");
/* harmony import */ var _dashboard_MainChartExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/MainChartExample */ "./resources/js/views/dashboard/MainChartExample.vue");
/* harmony import */ var _dashboard_SocialBoxChartExample__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/SocialBoxChartExample */ "./resources/js/views/dashboard/SocialBoxChartExample.vue");
/* harmony import */ var _dashboard_CalloutChartExample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/CalloutChartExample */ "./resources/js/views/dashboard/CalloutChartExample.vue");
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'dashboard',
  components: {
    Callout: _coreui_vue__WEBPACK_IMPORTED_MODULE_7__["Callout"],
    CardLine1ChartExample: _dashboard_CardLine1ChartExample__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardLine2ChartExample: _dashboard_CardLine2ChartExample__WEBPACK_IMPORTED_MODULE_1__["default"],
    CardLine3ChartExample: _dashboard_CardLine3ChartExample__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardBarChartExample: _dashboard_CardBarChartExample__WEBPACK_IMPORTED_MODULE_3__["default"],
    MainChartExample: _dashboard_MainChartExample__WEBPACK_IMPORTED_MODULE_4__["default"],
    SocialBoxChartExample: _dashboard_SocialBoxChartExample__WEBPACK_IMPORTED_MODULE_5__["default"],
    CalloutChartExample: _dashboard_CalloutChartExample__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      selected: 'Month',
      tableItems: [{
        avatar: {
          url: 'img/avatars/1.jpg',
          status: 'success'
        },
        user: {
          name: 'Yiorgos Avraamu',
          new: true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'USA',
          flag: 'us'
        },
        usage: {
          value: 50,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Mastercard',
          icon: 'fa fa-cc-mastercard'
        },
        activity: '10 sec ago'
      }, {
        avatar: {
          url: 'img/avatars/2.jpg',
          status: 'danger'
        },
        user: {
          name: 'Avram Tarasios',
          new: false,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'Brazil',
          flag: 'br'
        },
        usage: {
          value: 22,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Visa',
          icon: 'fa fa-cc-visa'
        },
        activity: '5 minutes ago'
      }, {
        avatar: {
          url: 'img/avatars/3.jpg',
          status: 'warning'
        },
        user: {
          name: 'Quintin Ed',
          new: true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'India',
          flag: 'in'
        },
        usage: {
          value: 74,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Stripe',
          icon: 'fa fa-cc-stripe'
        },
        activity: '1 hour ago'
      }, {
        avatar: {
          url: 'img/avatars/4.jpg',
          status: ''
        },
        user: {
          name: 'Enéas Kwadwo',
          new: true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'France',
          flag: 'fr'
        },
        usage: {
          value: 98,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'PayPal',
          icon: 'fa fa-paypal'
        },
        activity: 'Last month'
      }, {
        avatar: {
          url: 'img/avatars/5.jpg',
          status: 'success'
        },
        user: {
          name: 'Agapetus Tadeáš',
          new: true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'Spain',
          flag: 'es'
        },
        usage: {
          value: 22,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Google Wallet',
          icon: 'fa fa-google-wallet'
        },
        activity: 'Last week'
      }, {
        avatar: {
          url: 'img/avatars/6.jpg',
          status: 'danger'
        },
        user: {
          name: 'Friderik Dávid',
          new: true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'Poland',
          flag: 'pl'
        },
        usage: {
          value: 43,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Amex',
          icon: 'fa fa-cc-amex'
        },
        activity: 'Last week'
      }],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: 'User'
        },
        country: {
          label: 'Country',
          class: 'text-center'
        },
        usage: {
          label: 'Usage'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    };
  },
  methods: {
    variant: function variant(value) {
      var $variant;

      if (value <= 25) {
        $variant = 'info';
      } else if (value > 25 && value <= 50) {
        $variant = 'success';
      } else if (value > 50 && value <= 75) {
        $variant = 'warning';
      } else if (value > 75 && value <= 100) {
        $variant = 'danger';
      }

      return $variant;
    },
    flag: function flag(value) {
      return 'flag-icon flag-icon-' + value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CalloutChartExample.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/CalloutChartExample.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CustomTooltips: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__["CustomTooltips"]
  },
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ['data', 'height', 'width', 'variant'],
  mounted: function mounted() {
    this.renderChart({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        backgroundColor: 'transparent',
        borderColor: this.getVariant(this.variant) || '#c2cfd6',
        data: this.data
      }]
    }, {
      responsive: true,
      tooltips: {
        enabled: false,
        custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__["CustomTooltips"],
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function labelColor(tooltipItem, chart) {
            return {
              backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
            };
          }
        }
      },
      maintainAspectRatio: true,
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      },
      legend: {
        display: false
      }
    });
  },
  methods: {
    getVariant: function getVariant(val, el) {
      return val[0] === '#' ? val : Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])("--".concat(val), el);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CardBarChartExample.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/CardBarChartExample.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  props: ['height'],
  mounted: function mounted() {
    var datasets4 = [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }];
    this.renderChart({
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      datasets: datasets4
    }, {
      tooltips: {
        enabled: false,
        custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__["CustomTooltips"]
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          categoryPercentage: 1,
          barPercentage: 0.5
        }],
        yAxes: [{
          display: false
        }]
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CardLine1ChartExample.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/CardLine1ChartExample.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ['height', 'width'],
  mounted: function mounted() {
    var brandPrimary = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--primary') || '#20a8d8';
    var datasets1 = [{
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }];
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: datasets1
    }, {
      tooltips: {
        enabled: false,
        custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__["CustomTooltips"]
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, datasets1[0].data) - 5,
            max: Math.max.apply(Math, datasets1[0].data) + 5
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CardLine2ChartExample.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/CardLine2ChartExample.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ['height', 'width'],
  mounted: function mounted() {
    var brandInfo = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--light-blue') || '#63c2de';
    var datasets2 = [{
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }];
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: datasets2
    }, {
      tooltips: {
        enabled: false,
        custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__["CustomTooltips"]
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, datasets2[0].data) - 5,
            max: Math.max.apply(Math, datasets2[0].data) + 5
          }
        }]
      },
      elements: {
        line: {
          tension: 0.00001,
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CardLine3ChartExample.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/CardLine3ChartExample.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ['height', 'width'],
  mounted: function mounted() {
    var datasets3 = [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }];
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: datasets3
    }, {
      tooltips: {
        enabled: false,
        custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__["CustomTooltips"]
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/MainChartExample.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/MainChartExample.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils */ "./resources/js/shared/utils.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ['height'],
  mounted: function mounted() {
    var brandSuccess = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--success') || '#4dbd74';
    var brandInfo = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--info') || '#20a8d8';
    var brandDanger = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--danger') || '#f86c6b';
    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
      data1.push(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["random"])(50, 200));
      data2.push(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["random"])(80, 100));
      data3.push(65);
    }

    this.renderChart({
      labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["hexToRgba"])(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: data1
      }, {
        label: 'My Second dataset',
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: data2
      }, {
        label: 'My Third dataset',
        backgroundColor: 'transparent',
        borderColor: brandDanger,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5],
        data: data3
      }]
    }, {
      tooltips: {
        enabled: false,
        custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"],
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function labelColor(tooltipItem, chart) {
            return {
              backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
            };
          }
        }
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
            max: 250
          },
          gridLines: {
            display: true
          }
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SocialBoxChartExample.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/SocialBoxChartExample.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [0, 22, 34, 46, 58, 70, 46];
      }
    },
    height: {
      type: String,
      default: '100'
    }
  },
  mounted: function mounted() {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: this.data
      }]
    }, {
      tooltips: {
        enabled: false,
        custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__["CustomTooltips"]
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* IE fix */\n#card-chart-01, #card-chart-02 {\n  width: 100% !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-primary", attrs: { "no-body": "" } },
                [
                  _c(
                    "b-card-body",
                    { staticClass: "pb-0" },
                    [
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right",
                          attrs: { variant: "transparent p-0", right: "" }
                        },
                        [
                          _c("template", { slot: "button-content" }, [
                            _c("i", { staticClass: "icon-settings" })
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [_vm._v("Action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [_vm._v("Another action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v("Something else here...")
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", { attrs: { disabled: "" } }, [
                            _vm._v("Disabled action")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("h4", { staticClass: "mb-0" }, [_vm._v("9.823")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Members online")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("card-line1-chart-example", {
                    staticClass: "chart-wrapper px-3",
                    staticStyle: { height: "70px" },
                    attrs: { chartId: "card-chart-01", height: 70 }
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-info", attrs: { "no-body": "" } },
                [
                  _c(
                    "b-card-body",
                    { staticClass: "pb-0" },
                    [
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right",
                          attrs: {
                            variant: "transparent p-0",
                            right: "",
                            "no-caret": ""
                          }
                        },
                        [
                          _c("template", { slot: "button-content" }, [
                            _c("i", { staticClass: "icon-location-pin" })
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [_vm._v("Action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [_vm._v("Another action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v("Something else here...")
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", { attrs: { disabled: "" } }, [
                            _vm._v("Disabled action")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("h4", { staticClass: "mb-0" }, [_vm._v("9.823")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Members online")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("card-line2-chart-example", {
                    staticClass: "chart-wrapper px-3",
                    staticStyle: { height: "70px" },
                    attrs: { chartId: "card-chart-02", height: 70 }
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-warning", attrs: { "no-body": "" } },
                [
                  _c(
                    "b-card-body",
                    { staticClass: "pb-0" },
                    [
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right",
                          attrs: { variant: "transparent p-0", right: "" }
                        },
                        [
                          _c("template", { slot: "button-content" }, [
                            _c("i", { staticClass: "icon-settings" })
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [_vm._v("Action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [_vm._v("Another action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v("Something else here...")
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", { attrs: { disabled: "" } }, [
                            _vm._v("Disabled action")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("h4", { staticClass: "mb-0" }, [_vm._v("9.823")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Members online")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("card-line3-chart-example", {
                    staticClass: "chart-wrapper",
                    staticStyle: { height: "70px" },
                    attrs: { chartId: "card-chart-03", height: "70" }
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-danger", attrs: { "no-body": "" } },
                [
                  _c(
                    "b-card-body",
                    { staticClass: "pb-0" },
                    [
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right",
                          attrs: { variant: "transparent p-0", right: "" }
                        },
                        [
                          _c("template", { slot: "button-content" }, [
                            _c("i", { staticClass: "icon-settings" })
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [_vm._v("Action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [_vm._v("Another action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v("Something else here...")
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", { attrs: { disabled: "" } }, [
                            _vm._v("Disabled action")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("h4", { staticClass: "mb-0" }, [_vm._v("9.823")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Members online")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("card-bar-chart-example", {
                    staticClass: "chart-wrapper px-3",
                    staticStyle: { height: "70px" },
                    attrs: { chartId: "card-chart-04", height: "70" }
                  })
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
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { sm: "5" } }, [
                _c(
                  "h4",
                  { staticClass: "card-title mb-0", attrs: { id: "traffic" } },
                  [_vm._v("Traffic")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "small text-muted" }, [
                  _vm._v("November 2017")
                ])
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "d-none d-md-block", attrs: { sm: "7" } },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "float-right",
                      attrs: { type: "button", variant: "primary" }
                    },
                    [_c("i", { staticClass: "icon-cloud-download" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-toolbar",
                    {
                      staticClass: "float-right",
                      attrs: { "aria-label": "Toolbar with buttons group" }
                    },
                    [
                      _c(
                        "b-form-radio-group",
                        {
                          staticClass: "mr-3",
                          attrs: {
                            id: "radiosBtn",
                            buttons: "",
                            "button-variant": "outline-secondary",
                            name: "radiosBtn"
                          },
                          model: {
                            value: _vm.selected,
                            callback: function($$v) {
                              _vm.selected = $$v
                            },
                            expression: "selected"
                          }
                        },
                        [
                          _c(
                            "b-form-radio",
                            { staticClass: "mx-0", attrs: { value: "Day" } },
                            [_vm._v("Day")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-radio",
                            { staticClass: "mx-0", attrs: { value: "Month" } },
                            [_vm._v("Month")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-radio",
                            { staticClass: "mx-0", attrs: { value: "Year" } },
                            [_vm._v("Year")]
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
          _c("main-chart-example", {
            staticClass: "chart-wrapper",
            staticStyle: { height: "300px", "margin-top": "40px" },
            attrs: { chartId: "main-chart-01", height: "300" }
          }),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "mb-sm-2 mb-0" },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Visits")
                      ]),
                      _vm._v(" "),
                      _c("strong", [_vm._v("29.703 Users (40%)")]),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "progress-xs mt-2",
                        attrs: {
                          height: "{}",
                          precision: 1,
                          variant: "success",
                          value: 40
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-sm-2 mb-0 d-md-down-none" },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Unique")
                      ]),
                      _vm._v(" "),
                      _c("strong", [_vm._v("24.093 Users (20%)")]),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "progress-xs mt-2",
                        attrs: {
                          height: "{}",
                          precision: 1,
                          variant: "info",
                          value: 20
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-sm-2 mb-0" },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Pageviews")
                      ]),
                      _vm._v(" "),
                      _c("strong", [_vm._v("78.706 Views (60%)")]),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "progress-xs mt-2",
                        attrs: {
                          height: "{}",
                          precision: 1,
                          variant: "warning",
                          value: 60
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-sm-2 mb-0" },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("New Users")
                      ]),
                      _vm._v(" "),
                      _c("strong", [_vm._v("22.123 Users (80%)")]),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "progress-xs mt-2",
                        attrs: {
                          height: "{}",
                          precision: 1,
                          variant: "danger",
                          value: 80
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-sm-2 mb-0 d-md-down-none" },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Bounce Rate")
                      ]),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Average Rate (40.15%)")]),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "progress-xs mt-2",
                        attrs: { height: "{}", precision: 1, value: 40 }
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
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "brand-card" }, [
              _c("div", { staticClass: "brand-card-header bg-facebook" }, [
                _c("i", { staticClass: "fa fa-facebook" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-wrapper" },
                  [
                    _c("social-box-chart-example", {
                      attrs: {
                        chartId: "box-chart-01",
                        data: [65, 59, 84, 84, 51, 55, 40]
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "brand-card-body" }, [
                _c("div", [
                  _c("div", { staticClass: "text-value" }, [_vm._v("89k")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-uppercase text-muted small" },
                    [_vm._v("friends")]
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("div", { staticClass: "text-value" }, [_vm._v("459")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-uppercase text-muted small" },
                    [_vm._v("feeds")]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "brand-card" }, [
              _c("div", { staticClass: "brand-card-header bg-twitter" }, [
                _c("i", { staticClass: "fa fa-twitter" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-wrapper" },
                  [
                    _c("social-box-chart-example", {
                      attrs: {
                        chartId: "box-chart-02",
                        data: [1, 13, 9, 17, 34, 41, 38]
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "brand-card-body" }, [
                _c("div", [
                  _c("div", { staticClass: "text-value" }, [_vm._v("973k")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-uppercase text-muted small" },
                    [_vm._v("followers")]
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("div", { staticClass: "text-value" }, [_vm._v("1.792")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-uppercase text-muted small" },
                    [_vm._v("tweets")]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "brand-card" }, [
              _c("div", { staticClass: "brand-card-header bg-linkedin" }, [
                _c("i", { staticClass: "fa fa-linkedin" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-wrapper" },
                  [
                    _c("social-box-chart-example", {
                      attrs: {
                        chartId: "box-chart-03",
                        data: [78, 81, 80, 45, 34, 12, 40]
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "brand-card-body" }, [
                _c("div", [
                  _c("div", { staticClass: "text-value" }, [_vm._v("500+")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-uppercase text-muted small" },
                    [_vm._v("contacts")]
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("div", { staticClass: "text-value" }, [_vm._v("292")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-uppercase text-muted small" },
                    [_vm._v("feeds")]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "brand-card" }, [
              _c("div", { staticClass: "brand-card-header bg-google-plus" }, [
                _c("i", { staticClass: "fa fa-google-plus" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-wrapper" },
                  [
                    _c("social-box-chart-example", {
                      attrs: {
                        chartId: "box-chart-04",
                        data: [35, 23, 56, 22, 97, 23, 64]
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "brand-card-body" }, [
                _c("div", [
                  _c("div", { staticClass: "text-value" }, [_vm._v("894")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-uppercase text-muted small" },
                    [_vm._v("followers")]
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("div", { staticClass: "text-value" }, [_vm._v("92")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-uppercase text-muted small" },
                    [_vm._v("circles")]
                  )
                ])
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "12" } },
            [
              _c(
                "b-card",
                { attrs: { header: "Traffic & Sales" } },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { sm: "12", lg: "6" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { sm: "6" } },
                                [
                                  _c(
                                    "Callout",
                                    { attrs: { variant: "info" } },
                                    [
                                      _c(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [_vm._v("New Clients")]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("strong", { staticClass: "h4" }, [
                                        _vm._v("9,123")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "chart-wrapper",
                                          style: { top: "-10px" }
                                        },
                                        [
                                          _c("callout-chart-example", {
                                            attrs: {
                                              chartId: "callout-chart-01",
                                              data: [
                                                35,
                                                23,
                                                56,
                                                22,
                                                97,
                                                23,
                                                64
                                              ],
                                              variant: "info",
                                              width: "80",
                                              height: "30"
                                            }
                                          })
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
                                { attrs: { sm: "6" } },
                                [
                                  _c(
                                    "Callout",
                                    { attrs: { variant: "danger" } },
                                    [
                                      _c(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [_vm._v("Recurring Clients")]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("strong", { staticClass: "h4" }, [
                                        _vm._v("22,643")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "chart-wrapper",
                                          style: { top: "-10px" }
                                        },
                                        [
                                          _c("callout-chart-example", {
                                            attrs: {
                                              chartId: "callout-chart-02",
                                              data: [
                                                65,
                                                59,
                                                84,
                                                84,
                                                51,
                                                55,
                                                40
                                              ],
                                              variant: "danger",
                                              width: "80",
                                              height: "30"
                                            }
                                          })
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
                          ),
                          _vm._v(" "),
                          _c("hr", { staticClass: "mt-0" }),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress-group mb-4" }, [
                            _c(
                              "div",
                              { staticClass: "progress-group-prepend" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "progress-group-text" },
                                  [
                                    _vm._v(
                                      "\n                  Monday\n                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "progress-group-bars" },
                              [
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    variant: "info",
                                    value: 34,
                                    height: "{}"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    variant: "danger",
                                    value: 78,
                                    height: "{}"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress-group mb-4" }, [
                            _c(
                              "div",
                              { staticClass: "progress-group-prepend" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "progress-group-text" },
                                  [
                                    _vm._v(
                                      "\n                  Tuesday\n                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "progress-group-bars" },
                              [
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 56,
                                    variant: "info"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 94,
                                    variant: "danger"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress-group mb-4" }, [
                            _c(
                              "div",
                              { staticClass: "progress-group-prepend" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "progress-group-text" },
                                  [
                                    _vm._v(
                                      "\n                  Wednesday\n                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "progress-group-bars" },
                              [
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 12,
                                    variant: "info"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 67,
                                    variant: "danger"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress-group mb-4" }, [
                            _c(
                              "div",
                              { staticClass: "progress-group-prepend" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "progress-group-text" },
                                  [
                                    _vm._v(
                                      "\n                  Thursday\n                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "progress-group-bars" },
                              [
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 43,
                                    variant: "info"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 91,
                                    variant: "danger"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress-group mb-4" }, [
                            _c(
                              "div",
                              { staticClass: "progress-group-prepend" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "progress-group-text" },
                                  [
                                    _vm._v(
                                      "\n                  Friday\n                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "progress-group-bars" },
                              [
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 22,
                                    variant: "info"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 73,
                                    variant: "danger"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress-group mb-4" }, [
                            _c(
                              "div",
                              { staticClass: "progress-group-prepend" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "progress-group-text" },
                                  [
                                    _vm._v(
                                      "\n                  Saturday\n                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "progress-group-bars" },
                              [
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 53,
                                    variant: "info"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 82,
                                    variant: "danger"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress-group mb-4" }, [
                            _c(
                              "div",
                              { staticClass: "progress-group-prepend" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "progress-group-text" },
                                  [
                                    _vm._v(
                                      "\n                  Sunday\n                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "progress-group-bars" },
                              [
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 9,
                                    variant: "info"
                                  }
                                }),
                                _vm._v(" "),
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    value: 69,
                                    variant: "danger"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "legend text-center" }, [
                            _c("small", [
                              _c(
                                "sup",
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { pill: "", variant: "info" } },
                                    [_vm._v(" ")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(
                                "\n                New clients\n                  \n                "
                              ),
                              _c(
                                "sup",
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { pill: "", variant: "danger" } },
                                    [_vm._v(" ")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(
                                "\n                Recurring clients\n              "
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { sm: "12", lg: "6" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { sm: "6" } },
                                [
                                  _c(
                                    "Callout",
                                    { attrs: { variant: "warning" } },
                                    [
                                      _c(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [_vm._v("Pageviews")]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("strong", { staticClass: "h4" }, [
                                        _vm._v("78,623")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "chart-wrapper",
                                          style: { top: "-10px" }
                                        },
                                        [
                                          _c("callout-chart-example", {
                                            attrs: {
                                              chartId: "callout-chart-03",
                                              data: [
                                                35,
                                                23,
                                                56,
                                                22,
                                                97,
                                                23,
                                                64
                                              ],
                                              variant: "#f8cb00",
                                              width: "80",
                                              height: "30"
                                            }
                                          })
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
                                { attrs: { sm: "6" } },
                                [
                                  _c(
                                    "Callout",
                                    { attrs: { variant: "success" } },
                                    [
                                      _c(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [_vm._v("Organic")]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("strong", { staticClass: "h4" }, [
                                        _vm._v("49,123")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "chart-wrapper",
                                          style: { top: "-10px" }
                                        },
                                        [
                                          _c("callout-chart-example", {
                                            attrs: {
                                              chartId: "callout-chart-04",
                                              data: [
                                                65,
                                                59,
                                                84,
                                                84,
                                                51,
                                                55,
                                                40
                                              ],
                                              variant: "#4dbd74",
                                              width: "80",
                                              height: "30"
                                            }
                                          })
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
                          ),
                          _vm._v(" "),
                          _c("hr", { staticClass: "mt-0" }),
                          _vm._v(" "),
                          _c("ul", { staticClass: "horizontal-bars type-2" }, [
                            _c("div", { staticClass: "progress-group" }, [
                              _c(
                                "div",
                                { staticClass: "progress-group-header" },
                                [
                                  _c("i", {
                                    staticClass: "icon-user progress-group-icon"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "title" }, [
                                    _vm._v("Male")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "ml-auto font-weight-bold" },
                                    [_vm._v("43%")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "progress-group-bars" },
                                [
                                  _c("b-progress", {
                                    staticClass: "progress-xs",
                                    attrs: {
                                      height: "{}",
                                      value: 43,
                                      variant: "warning"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "progress-group mb-5" }, [
                              _c(
                                "div",
                                { staticClass: "progress-group-header" },
                                [
                                  _c("i", {
                                    staticClass:
                                      "icon-user-female progress-group-icon"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "title" }, [
                                    _vm._v("Female")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "ml-auto font-weight-bold" },
                                    [_vm._v("37%")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "progress-group-bars" },
                                [
                                  _c("b-progress", {
                                    staticClass: "progress-xs",
                                    attrs: {
                                      height: "{}",
                                      value: 37,
                                      variant: "warning"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "progress-group" }, [
                              _c(
                                "div",
                                { staticClass: "progress-group-header" },
                                [
                                  _c("i", {
                                    staticClass:
                                      "icon-globe progress-group-icon"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "title" }, [
                                    _vm._v("Organic Search")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "ml-auto font-weight-bold" },
                                    [
                                      _vm._v("191,235 "),
                                      _c(
                                        "span",
                                        { staticClass: "text-muted small" },
                                        [_vm._v("(56%)")]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "progress-group-bars" },
                                [
                                  _c("b-progress", {
                                    staticClass: "progress-xs",
                                    attrs: {
                                      height: "{}",
                                      value: 56,
                                      variant: "success"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "progress-group" }, [
                              _c(
                                "div",
                                { staticClass: "progress-group-header" },
                                [
                                  _c("i", {
                                    staticClass:
                                      "icon-social-facebook progress-group-icon"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "title" }, [
                                    _vm._v("Facebook")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "ml-auto font-weight-bold" },
                                    [
                                      _vm._v("51,223 "),
                                      _c(
                                        "span",
                                        { staticClass: "text-muted small" },
                                        [_vm._v("(15%)")]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "progress-group-bars" },
                                [
                                  _c("b-progress", {
                                    staticClass: "progress-xs",
                                    attrs: {
                                      height: "{}",
                                      value: 15,
                                      variant: "success"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "progress-group" }, [
                              _c(
                                "div",
                                { staticClass: "progress-group-header" },
                                [
                                  _c("i", {
                                    staticClass:
                                      "icon-social-twitter progress-group-icon"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "title" }, [
                                    _vm._v("Twitter")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "ml-auto font-weight-bold" },
                                    [
                                      _vm._v("37,564 "),
                                      _c(
                                        "span",
                                        { staticClass: "text-muted small" },
                                        [_vm._v("(11%)")]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "progress-group-bars" },
                                [
                                  _c("b-progress", {
                                    staticClass: "progress-xs",
                                    attrs: {
                                      height: "{}",
                                      value: 11,
                                      variant: "success"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "progress-group" }, [
                              _c(
                                "div",
                                { staticClass: "progress-group-header" },
                                [
                                  _c("i", {
                                    staticClass:
                                      "icon-social-linkedin progress-group-icon"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "title" }, [
                                    _vm._v("LinkedIn")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "ml-auto font-weight-bold" },
                                    [
                                      _vm._v("27,319 "),
                                      _c(
                                        "span",
                                        { staticClass: "text-muted small" },
                                        [_vm._v(" (8%)")]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "progress-group-bars" },
                                [
                                  _c("b-progress", {
                                    staticClass: "progress-xs",
                                    attrs: {
                                      height: "{}",
                                      value: 8,
                                      variant: "success"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "divider text-center" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "text-muted",
                                    attrs: { variant: "link", size: "sm" }
                                  },
                                  [_c("i", { staticClass: "icon-options" })]
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
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "b-table",
                    {
                      staticClass: "mb-0 table-outline",
                      attrs: {
                        responsive: "sm",
                        hover: "",
                        items: _vm.tableItems,
                        fields: _vm.tableFields,
                        "head-variant": "light"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "avatar",
                          fn: function(item) {
                            return _c("div", { staticClass: "avatar" }, [
                              _c("img", {
                                staticClass: "img-avatar",
                                attrs: { src: item.value.url, alt: "" }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "avatar-status",
                                class: {
                                  "bg-success": item.value.status == "success",
                                  "bg-warning": item.value.status == "warning",
                                  "bg-danger": item.value.status == "danger",
                                  "bg-secondary": item.value.status == ""
                                }
                              })
                            ])
                          }
                        },
                        {
                          key: "user",
                          fn: function(item) {
                            return _c("div", {}, [
                              _c("div", [_vm._v(_vm._s(item.value.name))]),
                              _vm._v(" "),
                              _c("div", { staticClass: "small text-muted" }, [
                                _c(
                                  "span",
                                  [
                                    item.value.new
                                      ? [_vm._v("New")]
                                      : [_vm._v("Recurring")]
                                  ],
                                  2
                                ),
                                _vm._v(
                                  " | Registered: " +
                                    _vm._s(item.value.registered) +
                                    "\n            "
                                )
                              ])
                            ])
                          }
                        },
                        {
                          key: "country",
                          fn: function(item) {
                            return _c("i", {
                              staticClass: "h4 mb-0",
                              class: _vm.flag(item.value.flag),
                              attrs: {
                                title: item.value.flag,
                                id: item.value.flag
                              }
                            })
                          }
                        },
                        {
                          key: "usage",
                          fn: function(item) {
                            return _c(
                              "div",
                              {},
                              [
                                _c("div", { staticClass: "clearfix" }, [
                                  _c("div", { staticClass: "float-left" }, [
                                    _c("strong", [
                                      _vm._v(_vm._s(item.value.value) + "%")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "float-right" }, [
                                    _c("small", { staticClass: "text-muted" }, [
                                      _vm._v(_vm._s(item.value.period))
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("b-progress", {
                                  staticClass: "progress-xs",
                                  attrs: {
                                    height: "{}",
                                    variant: _vm.variant(item.value.value)
                                  },
                                  model: {
                                    value: item.value.value,
                                    callback: function($$v) {
                                      _vm.$set(item.value, "value", $$v)
                                    },
                                    expression: "item.value.value"
                                  }
                                })
                              ],
                              1
                            )
                          }
                        },
                        {
                          key: "payment",
                          fn: function(item) {
                            return _c("i", {
                              class: item.value.icon,
                              staticStyle: { "font-size": "24px" }
                            })
                          }
                        },
                        {
                          key: "activity",
                          fn: function(item) {
                            return _c("div", {}, [
                              _c("div", { staticClass: "small text-muted" }, [
                                _vm._v("Last login")
                              ]),
                              _vm._v(" "),
                              _c("strong", [_vm._v(_vm._s(item.value))])
                            ])
                          }
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "flag-icon flag-icon-pw h1",
                        attrs: { title: "pw", id: "pw" }
                      })
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/shared/utils.js":
/*!**************************************!*\
  !*** ./resources/js/shared/utils.js ***!
  \**************************************/
/*! exports provided: random, shuffleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

var shuffleArray = function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/CalloutChartExample.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/dashboard/CalloutChartExample.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalloutChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalloutChartExample.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/CalloutChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _CalloutChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/CalloutChartExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/CalloutChartExample.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/dashboard/CalloutChartExample.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalloutChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CalloutChartExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CalloutChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalloutChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/CardBarChartExample.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/dashboard/CardBarChartExample.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardBarChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardBarChartExample.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/CardBarChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _CardBarChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/CardBarChartExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/CardBarChartExample.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/dashboard/CardBarChartExample.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBarChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardBarChartExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CardBarChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBarChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/CardLine1ChartExample.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/dashboard/CardLine1ChartExample.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardLine1ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardLine1ChartExample.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/CardLine1ChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _CardLine1ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/CardLine1ChartExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/CardLine1ChartExample.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/CardLine1ChartExample.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardLine1ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardLine1ChartExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CardLine1ChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardLine1ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/CardLine2ChartExample.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/dashboard/CardLine2ChartExample.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardLine2ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardLine2ChartExample.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/CardLine2ChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _CardLine2ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/CardLine2ChartExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/CardLine2ChartExample.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/CardLine2ChartExample.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardLine2ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardLine2ChartExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CardLine2ChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardLine2ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/CardLine3ChartExample.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/dashboard/CardLine3ChartExample.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardLine3ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardLine3ChartExample.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/CardLine3ChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _CardLine3ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/CardLine3ChartExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/CardLine3ChartExample.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/CardLine3ChartExample.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardLine3ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardLine3ChartExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/CardLine3ChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardLine3ChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/MainChartExample.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/dashboard/MainChartExample.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainChartExample.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/MainChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/MainChartExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/MainChartExample.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/dashboard/MainChartExample.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainChartExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/MainChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/SocialBoxChartExample.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/dashboard/SocialBoxChartExample.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialBoxChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialBoxChartExample.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/SocialBoxChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _SocialBoxChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/SocialBoxChartExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/SocialBoxChartExample.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/SocialBoxChartExample.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialBoxChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialBoxChartExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SocialBoxChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialBoxChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);