var ampApp = ampApp || {}; ampApp["demo1"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = ng.core;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Page1Component = /** @class */ (function () {
    function Page1Component() {
    }
    Page1Component.prototype.ngOnInit = function () { };
    Page1Component = __decorate([
        core_1.Component({
            template: __webpack_require__(10)
        }),
        __metadata("design:paramtypes", [])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Page2Component = /** @class */ (function () {
    function Page2Component() {
    }
    Page2Component.prototype.ngOnInit = function () { };
    Page2Component = __decorate([
        core_1.Component({
            template: __webpack_require__(11)
        }),
        __metadata("design:paramtypes", [])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ng.router;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var page1_component_1 = __webpack_require__(1);
exports.Page1Component = page1_component_1.Page1Component;
var page2_component_1 = __webpack_require__(2);
exports.Page2Component = page2_component_1.Page2Component;
exports.ALL_PAGES = [
    page1_component_1.Page1Component,
    page2_component_1.Page2Component
];


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window['defineModule']('demo1', [], function () {
    return __webpack_require__(6);
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_module_ngfactory_1 = __webpack_require__(7);
exports.AppModule = app_module_ngfactory_1.AppModuleNgFactory;
__webpack_require__(19);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(0);
var i1 = __webpack_require__(8);
var i2 = __webpack_require__(13);
var i3 = __webpack_require__(14);
var i4 = __webpack_require__(15);
var i5 = __webpack_require__(16);
var i6 = __webpack_require__(17);
var i7 = __webpack_require__(3);
var i8 = __webpack_require__(18);
var i9 = __webpack_require__(1);
var i10 = __webpack_require__(2);
exports.AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.Page1ComponentNgFactory, i3.Page2ComponentNgFactory]], [3, i0.ComponentFactoryResolver],
            i0.NgModuleRef]), i0.ɵmpd(4608, i4.BrowserXhr, i4.BrowserXhr, []),
        i0.ɵmpd(4608, i4.ResponseOptions, i4.BaseResponseOptions, []), i0.ɵmpd(5120, i4.XSRFStrategy, i4.ɵb, []), i0.ɵmpd(4608, i4.XHRBackend, i4.XHRBackend, [i4.BrowserXhr, i4.ResponseOptions, i4.XSRFStrategy]), i0.ɵmpd(4608, i4.RequestOptions, i4.BaseRequestOptions, []), i0.ɵmpd(5120, i4.Http, i4.ɵc, [i4.XHRBackend,
            i4.RequestOptions]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i4.ɵg, i4.ɵg, []), i0.ɵmpd(4608, i4.JSONPBackend, i4.ɵa, [i4.ɵg, i4.ResponseOptions]), i0.ɵmpd(5120, i4.Jsonp, i4.ɵd, [i4.JSONPBackend, i4.RequestOptions]), i0.ɵmpd(4608, i6.ɵi, i6.ɵi, []), i0.ɵmpd(512, i4.HttpModule, i4.HttpModule, []),
        i0.ɵmpd(512, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(512, i4.JsonpModule, i4.JsonpModule, []), i0.ɵmpd(512, i6.ɵba, i6.ɵba, []),
        i0.ɵmpd(512, i6.FormsModule, i6.FormsModule, []), i0.ɵmpd(512, i7.RouterModule, i7.RouterModule, [[2, i7.ɵb], [2, i7.Router]]), i0.ɵmpd(512, i8.AppCommonModule, i8.AppCommonModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(1024, i7.ROUTES, function () {
            return [[{ path: '', component: i9.Page1Component }, { path: 'page2', component: i10.Page2Component }]];
        }, [])]);
});
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRTovTXlDb2RlTGlicmFyeS9uZ3gtbW9kdWxhci1wbGF0Zm9ybS9tb2R1bGVzL2RlbW8xL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRTovTXlDb2RlTGlicmFyeS9uZ3gtbW9kdWxhci1wbGF0Zm9ybS9tb2R1bGVzL2RlbW8xL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var app_routing_1 = __webpack_require__(9);
var pages_1 = __webpack_require__(4);
var common_1 = __webpack_require__(12);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.AppCommonModule,
                app_routing_1.routing
            ],
            declarations: pages_1.ALL_PAGES.slice(),
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(3);
var pages_1 = __webpack_require__(4);
var appRoutes = [
    { path: '', component: pages_1.Page1Component },
    { path: 'page2', component: pages_1.Page2Component },
];
exports.routing = router_1.RouterModule.forChild(appRoutes);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<h1>Demo1 -> Page1</h1>"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<h1>Demo1 -> Page2</h1>"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = ampApp.common;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(0);
var i1 = __webpack_require__(1);
var styles_Page1Component = [];
exports.RenderType_Page1Component = i0.ɵcrt({ encapsulation: 2,
    styles: styles_Page1Component, data: {} });
function View_Page1Component_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['Demo1 -> Page1']))], null, null);
}
exports.View_Page1Component_0 = View_Page1Component_0;
function View_Page1Component_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_Page1Component_0, exports.RenderType_Page1Component)), i0.ɵdid(114688, null, 0, i1.Page1Component, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_Page1Component_Host_0 = View_Page1Component_Host_0;
exports.Page1ComponentNgFactory = i0.ɵccf('ng-component', i1.Page1Component, View_Page1Component_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRTovTXlDb2RlTGlicmFyeS9uZ3gtbW9kdWxhci1wbGF0Zm9ybS9tb2R1bGVzL2RlbW8xL3BhZ2VzL3BhZ2UxL3BhZ2UxLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9FOi9NeUNvZGVMaWJyYXJ5L25neC1tb2R1bGFyLXBsYXRmb3JtL21vZHVsZXMvZGVtbzEvcGFnZXMvcGFnZTEvcGFnZTEuY29tcG9uZW50LnRzIiwibmc6Ly8vRTovTXlDb2RlTGlicmFyeS9uZ3gtbW9kdWxhci1wbGF0Zm9ybS9tb2R1bGVzL2RlbW8xL3BhZ2VzL3BhZ2UxL3BhZ2UxLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRTovTXlDb2RlTGlicmFyeS9uZ3gtbW9kdWxhci1wbGF0Zm9ybS9tb2R1bGVzL2RlbW8xL3BhZ2VzL3BhZ2UxL3BhZ2UxLmNvbXBvbmVudC50cy5QYWdlMUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxoMT5EZW1vMSAtPiBQYWdlMTwvaDE+IiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBLHdFQUFJO2FBQUE7OztvQkNBSjtNQUFBOytCQUFBLFVBQUE7TUFBQTtJQUFBOzs7OyJ9


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(0);
var i1 = __webpack_require__(2);
var styles_Page2Component = [];
exports.RenderType_Page2Component = i0.ɵcrt({ encapsulation: 2,
    styles: styles_Page2Component, data: {} });
function View_Page2Component_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['Demo1 -> Page2']))], null, null);
}
exports.View_Page2Component_0 = View_Page2Component_0;
function View_Page2Component_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_Page2Component_0, exports.RenderType_Page2Component)), i0.ɵdid(114688, null, 0, i1.Page2Component, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_Page2Component_Host_0 = View_Page2Component_Host_0;
exports.Page2ComponentNgFactory = i0.ɵccf('ng-component', i1.Page2Component, View_Page2Component_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRTovTXlDb2RlTGlicmFyeS9uZ3gtbW9kdWxhci1wbGF0Zm9ybS9tb2R1bGVzL2RlbW8xL3BhZ2VzL3BhZ2UyL3BhZ2UyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9FOi9NeUNvZGVMaWJyYXJ5L25neC1tb2R1bGFyLXBsYXRmb3JtL21vZHVsZXMvZGVtbzEvcGFnZXMvcGFnZTIvcGFnZTIuY29tcG9uZW50LnRzIiwibmc6Ly8vRTovTXlDb2RlTGlicmFyeS9uZ3gtbW9kdWxhci1wbGF0Zm9ybS9tb2R1bGVzL2RlbW8xL3BhZ2VzL3BhZ2UyL3BhZ2UyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRTovTXlDb2RlTGlicmFyeS9uZ3gtbW9kdWxhci1wbGF0Zm9ybS9tb2R1bGVzL2RlbW8xL3BhZ2VzL3BhZ2UyL3BhZ2UyLmNvbXBvbmVudC50cy5QYWdlMkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxoMT5EZW1vMSAtPiBQYWdlMjwvaDE+IiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBLHdFQUFJO2FBQUE7OztvQkNBSjtNQUFBOytCQUFBLFVBQUE7TUFBQTtJQUFBOzs7OyJ9


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = ng.http;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = ng.common;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = ng.forms;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = ampApp['common'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map