(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-localwallet-dash-create-localwallet-dash-module"],{

/***/ "U3qh":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/create-localwallet-dash/create-localwallet-dash.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateLocalwalletDashModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocalwalletDashModule", function() { return CreateLocalwalletDashModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _create_localwallet_dash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-localwallet-dash.component */ "Z73+");
/* harmony import */ var _create_localwallet_dash_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-localwallet-dash-routing.module */ "WnRS");





class CreateLocalwalletDashModule {
}
CreateLocalwalletDashModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateLocalwalletDashModule });
CreateLocalwalletDashModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateLocalwalletDashModule_Factory(t) { return new (t || CreateLocalwalletDashModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _create_localwallet_dash_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateLocalwalletDashRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateLocalwalletDashModule, { declarations: [_create_localwallet_dash_component__WEBPACK_IMPORTED_MODULE_2__["CreateLocalwalletDashComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _create_localwallet_dash_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateLocalwalletDashRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateLocalwalletDashModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_localwallet_dash_component__WEBPACK_IMPORTED_MODULE_2__["CreateLocalwalletDashComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _create_localwallet_dash_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateLocalwalletDashRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "WnRS":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/create-localwallet-dash/create-localwallet-dash-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateLocalwalletDashRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocalwalletDashRoutingModule", function() { return CreateLocalwalletDashRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _create_localwallet_dash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-localwallet-dash.component */ "Z73+");





const routes = [
    {
        path: '',
        component: _create_localwallet_dash_component__WEBPACK_IMPORTED_MODULE_2__["CreateLocalwalletDashComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | local-name-local-name-module */ "local-name-local-name-module").then(__webpack_require__.bind(null, /*! ./local-name/local-name.module */ "viZN")).then(m => m.LocalNameModule)
            },
            {
                path: 'setup-mail',
                loadChildren: () => Promise.all(/*! import() | setup-email-setup-email-module */[__webpack_require__.e("common"), __webpack_require__.e("setup-email-setup-email-module")]).then(__webpack_require__.bind(null, /*! ./setup-email/setup-email.module */ "4bp0")).then(m => m.SetupEmailModule)
            },
            {
                path: 'upload-cc',
                loadChildren: () => __webpack_require__.e(/*! import() | upload-cc-upload-cc-module */ "upload-cc-upload-cc-module").then(__webpack_require__.bind(null, /*! ./upload-cc/upload-cc.module */ "P1SM")).then(m => m.UploadCcModule)
            },
            {
                path: 'completed',
                loadChildren: () => __webpack_require__.e(/*! import() | local-completed-local-completed-module */ "local-completed-local-completed-module").then(__webpack_require__.bind(null, /*! ./local-completed/local-completed.module */ "ZMqe")).then(m => m.LocalCompletedModule)
            }
        ]
    }
];
class CreateLocalwalletDashRoutingModule {
}
CreateLocalwalletDashRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateLocalwalletDashRoutingModule });
CreateLocalwalletDashRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateLocalwalletDashRoutingModule_Factory(t) { return new (t || CreateLocalwalletDashRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateLocalwalletDashRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateLocalwalletDashRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Z73+":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/create-localwallet-dash/create-localwallet-dash.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateLocalwalletDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocalwalletDashComponent", function() { return CreateLocalwalletDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class CreateLocalwalletDashComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateLocalwalletDashComponent.ɵfac = function CreateLocalwalletDashComponent_Factory(t) { return new (t || CreateLocalwalletDashComponent)(); };
CreateLocalwalletDashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateLocalwalletDashComponent, selectors: [["app-create-localwallet-dash"]], decls: 1, vars: 0, template: function CreateLocalwalletDashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtbG9jYWx3YWxsZXQtZGFzaC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateLocalwalletDashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-localwallet-dash',
                templateUrl: './create-localwallet-dash.component.html',
                styleUrls: ['./create-localwallet-dash.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=create-localwallet-dash-create-localwallet-dash-module.js.map