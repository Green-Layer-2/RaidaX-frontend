(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["functions-functions-module"],{

/***/ "9Wmw":
/*!************************************************************!*\
  !*** ./src/app/dashboard/functions/functions.component.ts ***!
  \************************************************************/
/*! exports provided: FunctionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsComponent", function() { return FunctionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class FunctionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FunctionsComponent.ɵfac = function FunctionsComponent_Factory(t) { return new (t || FunctionsComponent)(); };
FunctionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FunctionsComponent, selectors: [["app-functions"]], decls: 1, vars: 0, template: function FunctionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5jdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunctionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-functions',
                templateUrl: './functions.component.html',
                styleUrls: ['./functions.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZcJE":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/functions/functions-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FunctionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsRoutingModule", function() { return FunctionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _functions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.component */ "9Wmw");





const routes = [
    {
        path: '',
        component: _functions_component__WEBPACK_IMPORTED_MODULE_2__["FunctionsComponent"],
        children: [
            {
                path: 'fix',
                loadChildren: () => __webpack_require__.e(/*! import() | fix-fix-module */ "fix-fix-module").then(__webpack_require__.bind(null, /*! ./fix/fix.module */ "zhY1")).then(m => m.FixModule)
            },
            {
                path: 'fix-limbo',
                loadChildren: () => __webpack_require__.e(/*! import() | fix-limbo-fix-limbo-module */ "fix-limbo-fix-limbo-module").then(__webpack_require__.bind(null, /*! ./fix-limbo/fix-limbo.module */ "8/Qu")).then(m => m.FixLimboModule)
            },
            {
                path: 'backup',
                loadChildren: () => __webpack_require__.e(/*! import() | backup-backup-module */ "backup-backup-module").then(__webpack_require__.bind(null, /*! ./backup/backup.module */ "f3zU")).then(m => m.BackupModule)
            },
            {
                path: 'health_check',
                loadChildren: () => __webpack_require__.e(/*! import() | health-health-module */ "health-health-module").then(__webpack_require__.bind(null, /*! ./health/health.module */ "exLk")).then(m => m.HealthModule)
            },
            {
                path: 'color-coin',
                loadChildren: () => __webpack_require__.e(/*! import() | color-coin-color-coin-module */ "color-coin-color-coin-module").then(__webpack_require__.bind(null, /*! ./color-coin/color-coin.module */ "L+bY")).then(m => m.ColorCoinModule)
            },
            {
                path: 'nft-health',
                loadChildren: () => __webpack_require__.e(/*! import() | nft-health-nft-health-module */ "nft-health-nft-health-module").then(__webpack_require__.bind(null, /*! ./nft-health/nft-health.module */ "ygpR")).then(m => m.NftHealthModule)
            },
            {
                path: 'fix-nft-limbo',
                loadChildren: () => __webpack_require__.e(/*! import() | fix-nft-limbo-fix-nft-limbo-module */ "fix-nft-limbo-fix-nft-limbo-module").then(__webpack_require__.bind(null, /*! ./fix-nft-limbo/fix-nft-limbo.module */ "IdT+")).then(m => m.FixNftLimboModule)
            },
            {
                path: 'fix-nft',
                loadChildren: () => __webpack_require__.e(/*! import() | fix-nft-fix-nft-module */ "fix-nft-fix-nft-module").then(__webpack_require__.bind(null, /*! ./fix-nft/fix-nft.module */ "AFnC")).then(m => m.FixNftModule)
            },
        ]
    }
];
class FunctionsRoutingModule {
}
FunctionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FunctionsRoutingModule });
FunctionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FunctionsRoutingModule_Factory(t) { return new (t || FunctionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FunctionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunctionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zf3j":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/functions/functions.module.ts ***!
  \*********************************************************/
/*! exports provided: FunctionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsModule", function() { return FunctionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _functions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions-routing.module */ "ZcJE");
/* harmony import */ var _functions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.component */ "9Wmw");





class FunctionsModule {
}
FunctionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FunctionsModule });
FunctionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FunctionsModule_Factory(t) { return new (t || FunctionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _functions_routing_module__WEBPACK_IMPORTED_MODULE_2__["FunctionsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FunctionsModule, { declarations: [_functions_component__WEBPACK_IMPORTED_MODULE_3__["FunctionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _functions_routing_module__WEBPACK_IMPORTED_MODULE_2__["FunctionsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunctionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_functions_component__WEBPACK_IMPORTED_MODULE_3__["FunctionsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _functions_routing_module__WEBPACK_IMPORTED_MODULE_2__["FunctionsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=functions-functions-module.js.map