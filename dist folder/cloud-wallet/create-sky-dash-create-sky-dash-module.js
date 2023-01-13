(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-sky-dash-create-sky-dash-module"],{

/***/ "A4WR":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/create-sky-dash-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateSkyDashRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSkyDashRoutingModule", function() { return CreateSkyDashRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _create_sky_dash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-sky-dash.component */ "jr8y");





const routes = [
    {
        path: '',
        component: _create_sky_dash_component__WEBPACK_IMPORTED_MODULE_2__["CreateSkyDashComponent"],
        children: [
            {
                path: 'new-address',
                loadChildren: () => Promise.all(/*! import() | create-add-dash-create-add-dash-module */[__webpack_require__.e("common"), __webpack_require__.e("create-add-dash-create-add-dash-module")]).then(__webpack_require__.bind(null, /*! ./create-add-dash/create-add-dash.module */ "QlvU")).then(m => m.CreateAddDashModule)
            },
            {
                path: 'simple-setup',
                loadChildren: () => Promise.all(/*! import() | simple-dash-simple-dash-module */[__webpack_require__.e("common"), __webpack_require__.e("simple-dash-simple-dash-module")]).then(__webpack_require__.bind(null, /*! ./simple-dash/simple-dash.module */ "Zmm9")).then(m => m.SimpleDashModule)
            },
            // {
            //   path: 'upload-cc',
            //   loadChildren: () => import('./upload-dash/upload-dash.module').then(m => m.UploadDashModule)
            // },
            {
                path: 'security-setup',
                loadChildren: () => Promise.all(/*! import() | security-dash-security-dash-module */[__webpack_require__.e("common"), __webpack_require__.e("security-dash-security-dash-module")]).then(__webpack_require__.bind(null, /*! ./security-dash/security-dash.module */ "cXhz")).then(m => m.SecurityDashModule)
            },
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | advanced-dash-advanced-dash-module */ "advanced-dash-advanced-dash-module").then(__webpack_require__.bind(null, /*! ./advanced-dash/advanced-dash.module */ "ggXP")).then(m => m.AdvancedDashModule)
            },
        ]
    }
];
class CreateSkyDashRoutingModule {
}
CreateSkyDashRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateSkyDashRoutingModule });
CreateSkyDashRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateSkyDashRoutingModule_Factory(t) { return new (t || CreateSkyDashRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateSkyDashRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSkyDashRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "e06R":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/create-sky-dash.module.ts ***!
  \*********************************************************************/
/*! exports provided: CreateSkyDashModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSkyDashModule", function() { return CreateSkyDashModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _create_sky_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-sky-dash-routing.module */ "A4WR");
/* harmony import */ var _create_sky_dash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-sky-dash.component */ "jr8y");





class CreateSkyDashModule {
}
CreateSkyDashModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateSkyDashModule });
CreateSkyDashModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateSkyDashModule_Factory(t) { return new (t || CreateSkyDashModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _create_sky_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateSkyDashRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateSkyDashModule, { declarations: [_create_sky_dash_component__WEBPACK_IMPORTED_MODULE_3__["CreateSkyDashComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _create_sky_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateSkyDashRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSkyDashModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_sky_dash_component__WEBPACK_IMPORTED_MODULE_3__["CreateSkyDashComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _create_sky_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateSkyDashRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jr8y":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/create-sky-dash.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateSkyDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSkyDashComponent", function() { return CreateSkyDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class CreateSkyDashComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateSkyDashComponent.ɵfac = function CreateSkyDashComponent_Factory(t) { return new (t || CreateSkyDashComponent)(); };
CreateSkyDashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateSkyDashComponent, selectors: [["app-create-sky-dash"]], decls: 1, vars: 0, template: function CreateSkyDashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtc2t5LWRhc2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSkyDashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-sky-dash',
                templateUrl: './create-sky-dash.component.html',
                styleUrls: ['./create-sky-dash.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=create-sky-dash-create-sky-dash-module.js.map