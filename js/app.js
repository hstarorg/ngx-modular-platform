var ng2App = ng2App || {}; ng2App["app"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = ng.core;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var app_component_1 = __webpack_require__(8);
exports.AppComponent = app_component_1.AppComponent;
var home_component_1 = __webpack_require__(9);
exports.HomeComponent = home_component_1.HomeComponent;
exports.ALL_PAGES = [
    app_component_1.AppComponent,
    home_component_1.HomeComponent
];


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var common_module_1 = __webpack_require__(10);
exports.CommonModule = common_module_1.CommonModule;
// All services
__export(__webpack_require__(12));
// All filters
__export(__webpack_require__(11));


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = ng.http;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = ng.router;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(19);
var common_module_1 = __webpack_require__(2);
var app_routing_1 = __webpack_require__(7);
var app_1 = __webpack_require__(1);
var AppModule = (function () {
    function AppModule(moduleLoader) {
        this.moduleLoader = moduleLoader;
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_module_1.CommonModule,
            app_routing_1.routing
        ],
        declarations: app_1.ALL_PAGES.slice(),
        providers: [
            common_module_1.ModuleLoaderService
        ],
        bootstrap: [app_1.AppComponent]
    }),
    __metadata("design:paramtypes", [common_module_1.ModuleLoaderService])
], AppModule);
exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = ng.platformBrowserDynamic;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(4);
var common_module_1 = __webpack_require__(2);
var app_1 = __webpack_require__(1);
var loadModule = function (moduleName) {
    return function () {
        return common_module_1.ModuleLoaderService.load(moduleName);
    };
};
// 定义模块 - URL 映射
var modules = [
    { path: 'demo1', module: 'demo1' }
];
var dynamicRoutes = [];
modules.forEach(function (m) {
    dynamicRoutes.push({
        path: m.path,
        loadChildren: loadModule(m.module),
    });
});
var appRoutes = [
    { path: '', component: app_1.HomeComponent }
].concat(dynamicRoutes);
console.log(appRoutes);
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'ng2-app',
        template: __webpack_require__(14)
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(15)
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(17);
var http_1 = __webpack_require__(3);
var forms_1 = __webpack_require__(18);
var router_1 = __webpack_require__(4);
var CommonModule = (function () {
    function CommonModule() {
    }
    return CommonModule;
}());
CommonModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule
        ],
        exports: [
            common_1.CommonModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            forms_1.FormsModule,
            router_1.RouterModule
        ],
        declarations: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], CommonModule);
exports.CommonModule = CommonModule;


/***/ },
/* 11 */
/***/ function(module, exports) {

"use strict";
"use strict";
exports.COMMON_FILTERS = [];


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var module_loader_service_1 = __webpack_require__(13);
exports.ModuleLoaderService = module_loader_service_1.ModuleLoaderService;
exports.COMMON_SERVICES = [
    module_loader_service_1.ModuleLoaderService
];


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
__webpack_require__(16);
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var loadedModules = new Set();
var instance = null;
var ModuleLoaderService = (function () {
    function ModuleLoaderService(http) {
        this.http = http;
        instance = this;
    }
    ModuleLoaderService.load = function (moduleName) {
        return instance.load(moduleName);
    };
    ModuleLoaderService.prototype.load = function (moduleName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = "modules/" + moduleName + "/app.js";
            _this.http.get(path)
                .toPromise()
                .then(function (res) {
                var code = res.text();
                _this._DomEval(code);
                resolve(window['ng2App'][moduleName].AppModule);
            }).catch(function (err) { return reject(err); });
        });
    };
    ModuleLoaderService.prototype._DomEval = function (code, doc) {
        doc = doc || document;
        var script = doc.createElement("script");
        script.text = code;
        doc.head.appendChild(script).parentNode.removeChild(script);
    };
    return ModuleLoaderService;
}());
ModuleLoaderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ModuleLoaderService);
exports.ModuleLoaderService = ModuleLoaderService;


/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = "<header>\r\n  <nav role=\"navigation\" class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\" class=\"navbar-toggle collapsed\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button>        <a href=\"\" class=\"navbar-brand\">NG2-MODULAR_PLATFORM</a></div>\r\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav navbar-left\">\r\n          <li class=\"nav-item\"><a href=\"javascript:void(0);\" routerLink=\"/\" class=\"nav-link\">Home</a></li>\r\n          <li class=\"nav-item\"><a href=\"javascript:void(0);\" routerLink=\"/demo1\" class=\"nav-link\">Demo1</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<div class=\"page-view-container\" style=\"margin-top: 50px;\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = "<h1>Home Component</h1>"

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = Rx;

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = ng.common;

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = ng.forms;

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = ng.platformBrowser;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var platform_browser_dynamic_1 = __webpack_require__(6);
var app_module_1 = __webpack_require__(5);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map