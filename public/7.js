(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Widgets.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Widgets.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_SocialBoxChartExample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/SocialBoxChartExample */ "./resources/js/views/dashboard/SocialBoxChartExample.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'widgets',
  components: {
    SocialBoxChartExample: _dashboard_SocialBoxChartExample__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      msg: 'Widgets'
    };
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Widgets.vue?vue&type=template&id=35aed940&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Widgets.vue?vue&type=template&id=35aed940& ***!
  \*****************************************************************************************************************************************************************************************************/
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
                [
                  _c("div", { staticClass: "h4 m-0" }, [_vm._v("89.9%")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Lorem ipsum...")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs my-3",
                    attrs: { height: "{}", variant: "success", value: 25 }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Lorem ipsum dolor sit amet enim.")
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { staticClass: "h4 m-0" }, [_vm._v("12.124")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Lorem ipsum...")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs my-3",
                    attrs: { height: "{}", variant: "info", value: 25 }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Lorem ipsum dolor sit amet enim.")
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { staticClass: "h4 m-0" }, [_vm._v("$98.111,00")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Lorem ipsum...")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs my-3",
                    attrs: { height: "{}", variant: "warning", value: 25 }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Lorem ipsum dolor sit amet enim.")
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { staticClass: "h4 m-0" }, [_vm._v("2 TB")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Lorem ipsum...")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs my-3",
                    attrs: { height: "{}", variant: "danger", value: 25 }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Lorem ipsum dolor sit amet enim.")
                  ])
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
          _c(
            "b-col",
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-primary" },
                [
                  _c("div", { staticClass: "h4 m-0" }, [_vm._v("89.9%")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Lorem ipsum...")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs my-3",
                    attrs: { height: "{}", value: 25 }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Lorem ipsum dolor sit amet enim.")
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-warning" },
                [
                  _c("div", { staticClass: "h4 m-0" }, [_vm._v("12.124")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Lorem ipsum...")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs my-3",
                    attrs: { height: "{}", value: 25 }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Lorem ipsum dolor sit amet enim.")
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-danger" },
                [
                  _c("div", { staticClass: "h4 m-0" }, [_vm._v("$98.111,00")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Lorem ipsum...")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs my-3",
                    attrs: { height: "{}", value: 25 }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Lorem ipsum dolor sit amet enim.")
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
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-info" },
                [
                  _c("div", { staticClass: "h4 m-0" }, [_vm._v("2 TB")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Lorem ipsum...")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs my-3",
                    attrs: { height: "{}", value: 25 }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Lorem ipsum dolor sit amet enim.")
                  ])
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
          _c(
            "b-col",
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-3 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-primary mb-0 mt-2" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-3 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-info mb-0 mt-2" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-3 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-warning mb-0 mt-2" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-3 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-danger mb-0 mt-2" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true, "footer-class": "px-3 py-2" } },
                [
                  _c("b-card-body", { staticClass: "p-3 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-primary mb-0 mt-2" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { slot: "footer" }, slot: "footer" },
                    [
                      _c(
                        "b-link",
                        {
                          staticClass:
                            "font-weight-bold font-xs btn-block text-muted",
                          attrs: { href: "#" }
                        },
                        [
                          _vm._v("View More "),
                          _c("i", {
                            staticClass: "fa fa-angle-right float-right font-lg"
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true, "footer-class": "px-3 py-2" } },
                [
                  _c("b-card-body", { staticClass: "p-3 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-info mb-0 mt-2" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { slot: "footer" }, slot: "footer" },
                    [
                      _c(
                        "b-link",
                        {
                          staticClass:
                            "font-weight-bold font-xs btn-block text-muted",
                          attrs: { href: "#" }
                        },
                        [
                          _vm._v("View More "),
                          _c("i", {
                            staticClass: "fa fa-angle-right float-right font-lg"
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true, "footer-class": "px-3 py-2" } },
                [
                  _c("b-card-body", { staticClass: "p-3 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-warning mb-0 mt-2" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { slot: "footer" }, slot: "footer" },
                    [
                      _c(
                        "b-link",
                        {
                          staticClass:
                            "font-weight-bold font-xs btn-block text-muted",
                          attrs: { href: "#" }
                        },
                        [
                          _vm._v("View More "),
                          _c("i", {
                            staticClass: "fa fa-angle-right float-right font-lg"
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true, "footer-class": "px-3 py-2" } },
                [
                  _c("b-card-body", { staticClass: "p-3 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-danger mb-0 mt-2" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { slot: "footer" }, slot: "footer" },
                    [
                      _c(
                        "b-link",
                        {
                          staticClass:
                            "font-weight-bold font-xs btn-block text-muted",
                          attrs: { href: "#" }
                        },
                        [
                          _vm._v("View More "),
                          _c("i", {
                            staticClass: "fa fa-angle-right float-right font-lg"
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
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-0 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-primary mb-0 pt-3" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-0 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-laptop bg-info p-4 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-info mb-0 pt-3" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-0 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-warning mb-0 pt-3" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-0 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-bell bg-danger p-4 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-danger mb-0 pt-3" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-0 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-primary mb-0 pt-3" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-0 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-info mb-0 pt-3" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-0 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-warning mb-0 pt-3" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
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
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": true } },
                [
                  _c("b-card-body", { staticClass: "p-0 clearfix" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left"
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h5 text-danger mb-0 pt-3" }, [
                      _vm._v("$1.999,50")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-muted text-uppercase font-weight-bold font-xs"
                      },
                      [_vm._v("Income")]
                    )
                  ])
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
          _c("b-col", { attrs: { md: "3", sm: "6" } }, [
            _c("div", { staticClass: "brand-card" }, [
              _c("div", { staticClass: "brand-card-header bg-facebook" }, [
                _c("i", { staticClass: "fa fa-facebook" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-wrapper" },
                  [
                    _c("social-box-chart-example", {
                      attrs: { data: [65, 59, 84, 84, 51, 55, 40] }
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
          _c("b-col", { attrs: { md: "3", sm: "6" } }, [
            _c("div", { staticClass: "brand-card" }, [
              _c("div", { staticClass: "brand-card-header bg-twitter" }, [
                _c("i", { staticClass: "fa fa-twitter" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-wrapper" },
                  [
                    _c("social-box-chart-example", {
                      attrs: { data: [1, 13, 9, 17, 34, 41, 38] }
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
          _c("b-col", { attrs: { md: "3", sm: "6" } }, [
            _c("div", { staticClass: "brand-card" }, [
              _c("div", { staticClass: "brand-card-header bg-linkedin" }, [
                _c("i", { staticClass: "fa fa-linkedin" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-wrapper" },
                  [
                    _c("social-box-chart-example", {
                      attrs: { data: [78, 81, 80, 45, 34, 12, 40] }
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
          _c("b-col", { attrs: { md: "3", sm: "6" } }, [
            _c("div", { staticClass: "brand-card" }, [
              _c("div", { staticClass: "brand-card-header bg-google-plus" }, [
                _c("i", { staticClass: "fa fa-google-plus" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-wrapper" },
                  [
                    _c("social-box-chart-example", {
                      attrs: { data: [35, 23, 56, 22, 97, 23, 64] }
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
        "b-card-group",
        { staticClass: "mb-4" },
        [
          _c(
            "b-card",
            [
              _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                _c("i", { staticClass: "icon-people" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "h4 mb-0" }, [_vm._v("87.500")]),
              _vm._v(" "),
              _c(
                "small",
                { staticClass: "text-muted text-uppercase font-weight-bold" },
                [_vm._v("Visitors")]
              ),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs mt-3 mb-0",
                attrs: { height: "{}", variant: "info", value: 25 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card",
            [
              _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                _c("i", { staticClass: "icon-user-follow" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "h4 mb-0" }, [_vm._v("385")]),
              _vm._v(" "),
              _c(
                "small",
                { staticClass: "text-muted text-uppercase font-weight-bold" },
                [_vm._v("New Clients")]
              ),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs mt-3 mb-0",
                attrs: { height: "{}", variant: "success", value: 25 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card",
            [
              _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                _c("i", { staticClass: "icon-basket-loaded" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "h4 mb-0" }, [_vm._v("1238")]),
              _vm._v(" "),
              _c(
                "small",
                { staticClass: "text-muted text-uppercase font-weight-bold" },
                [_vm._v("Products sold")]
              ),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs mt-3 mb-0",
                attrs: { height: "{}", variant: "warning", value: 25 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card",
            [
              _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                _c("i", { staticClass: "icon-pie-chart" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "h4 mb-0" }, [_vm._v("28%")]),
              _vm._v(" "),
              _c(
                "small",
                { staticClass: "text-muted text-uppercase font-weight-bold" },
                [_vm._v("Returning Visitors")]
              ),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs mt-3 mb-0",
                attrs: { height: "{}", value: 25 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card",
            [
              _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                _c("i", { staticClass: "icon-speedometer" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "h4 mb-0" }, [_vm._v("5:34:11")]),
              _vm._v(" "),
              _c(
                "small",
                { staticClass: "text-muted text-uppercase font-weight-bold" },
                [_vm._v("Avg. Time")]
              ),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs mt-3 mb-0",
                attrs: { height: "{}", variant: "danger", value: 25 }
              })
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
          _c(
            "b-col",
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-people" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("87.500")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Visitors")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs mt-3 mb-0",
                    attrs: { height: "{}", variant: "info", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-user-follow" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("385")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("New Clients")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs mt-3 mb-0",
                    attrs: { height: "{}", variant: "success", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-basket-loaded" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("1238")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Products sold")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs mt-3 mb-0",
                    attrs: { height: "{}", variant: "warning", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-pie-chart" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("28%")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Returning Visitors")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs mt-3 mb-0",
                    attrs: { height: "{}", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-speedometer" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("5:34:11")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Avg. Time")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs mt-3 mb-0",
                    attrs: { height: "{}", variant: "danger", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-speech" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("972")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Comments")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-xs mt-3 mb-0",
                    attrs: { height: "{}", variant: "info", value: 25 }
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-info" },
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-people" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("87.500")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Visitors")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs mt-3",
                    attrs: { height: "{}", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-success" },
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-user-follow" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("385")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("New Clients")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs mt-3",
                    attrs: { height: "{}", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-warning" },
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-basket-loaded" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("1238")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Products sold")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs mt-3",
                    attrs: { height: "{}", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-primary" },
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-pie-chart" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("28%")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Returning Visitors")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs mt-3",
                    attrs: { height: "{}", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-danger" },
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-speedometer" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("5:34:11")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Avg. Time")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs mt-3",
                    attrs: { height: "{}", value: 25 }
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
            { attrs: { sm: "6", md: "2" } },
            [
              _c(
                "b-card",
                { staticClass: "text-white bg-info" },
                [
                  _c("div", { staticClass: "h1 text-muted text-right mb-4" }, [
                    _c("i", { staticClass: "icon-speech" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h4 mb-0" }, [_vm._v("972")]),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      staticClass: "text-muted text-uppercase font-weight-bold"
                    },
                    [_vm._v("Comments")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "progress-white progress-xs mt-3",
                    attrs: { height: "{}", value: 25 }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Widgets.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Widgets.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widgets_vue_vue_type_template_id_35aed940___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widgets.vue?vue&type=template&id=35aed940& */ "./resources/js/views/Widgets.vue?vue&type=template&id=35aed940&");
/* harmony import */ var _Widgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widgets.vue?vue&type=script&lang=js& */ "./resources/js/views/Widgets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Widgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Widgets_vue_vue_type_template_id_35aed940___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Widgets_vue_vue_type_template_id_35aed940___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Widgets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Widgets.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Widgets.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Widgets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Widgets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Widgets.vue?vue&type=template&id=35aed940&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Widgets.vue?vue&type=template&id=35aed940& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_template_id_35aed940___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Widgets.vue?vue&type=template&id=35aed940& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Widgets.vue?vue&type=template&id=35aed940&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_template_id_35aed940___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_template_id_35aed940___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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