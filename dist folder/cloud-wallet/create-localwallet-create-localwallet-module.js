(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-localwallet-create-localwallet-module"],{

/***/ "Hwav":
/*!******************************************************************************!*\
  !*** ./src/app/auth/create-localwallet/create-localwallet-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: CreateLocalwalletRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocalwalletRoutingModule", function() { return CreateLocalwalletRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _create_localwallet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-localwallet.component */ "M+mQ");





const routes = [
    {
        path: '',
        component: _create_localwallet_component__WEBPACK_IMPORTED_MODULE_2__["CreateLocalwalletComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | create-name-create-name-module */ "create-name-create-name-module").then(__webpack_require__.bind(null, /*! ./create-name/create-name.module */ "iS89")).then(m => m.CreateNameModule)
            },
            {
                path: 'local-setup-mail-psw',
                loadChildren: () => Promise.all(/*! import() | setup-mail-psw-setup-mail-psw-module */[__webpack_require__.e("common"), __webpack_require__.e("setup-mail-psw-setup-mail-psw-module")]).then(__webpack_require__.bind(null, /*! ./setup-mail-psw/setup-mail-psw.module */ "1ojn")).then(m => m.SetupMailPswModule)
            },
            {
                path: 'uplaod-local-cc',
                loadChildren: () => __webpack_require__.e(/*! import() | upload-local-cc-upload-local-cc-module */ "upload-local-cc-upload-local-cc-module").then(__webpack_require__.bind(null, /*! ./upload-local-cc/upload-local-cc.module */ "Zejw")).then(m => m.UploadLocalCcModule)
            },
            {
                path: 'localstep-completed',
                loadChildren: () => __webpack_require__.e(/*! import() | local-step-complete-local-step-complete-module */ "local-step-complete-local-step-complete-module").then(__webpack_require__.bind(null, /*! ./local-step-complete/local-step-complete.module */ "GkWt")).then(m => m.LocalStepCompleteModule)
            }
        ]
    }
];
class CreateLocalwalletRoutingModule {
}
CreateLocalwalletRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateLocalwalletRoutingModule });
CreateLocalwalletRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateLocalwalletRoutingModule_Factory(t) { return new (t || CreateLocalwalletRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateLocalwalletRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateLocalwalletRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "M+mQ":
/*!*************************************************************************!*\
  !*** ./src/app/auth/create-localwallet/create-localwallet.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateLocalwalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocalwalletComponent", function() { return CreateLocalwalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class CreateLocalwalletComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateLocalwalletComponent.ɵfac = function CreateLocalwalletComponent_Factory(t) { return new (t || CreateLocalwalletComponent)(); };
CreateLocalwalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateLocalwalletComponent, selectors: [["app-create-localwallet"]], decls: 1, vars: 0, template: function CreateLocalwalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtbG9jYWx3YWxsZXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateLocalwalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-localwallet',
                templateUrl: './create-localwallet.component.html',
                styleUrls: ['./create-localwallet.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fkH7":
/*!**********************************************************************!*\
  !*** ./src/app/auth/create-localwallet/create-localwallet.module.ts ***!
  \**********************************************************************/
/*! exports provided: CreateLocalwalletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocalwalletModule", function() { return CreateLocalwalletModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _create_localwallet_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-localwallet-routing.module */ "Hwav");
/* harmony import */ var _create_localwallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-localwallet.component */ "M+mQ");





class CreateLocalwalletModule {
}
CreateLocalwalletModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateLocalwalletModule });
CreateLocalwalletModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateLocalwalletModule_Factory(t) { return new (t || CreateLocalwalletModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _create_localwallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateLocalwalletRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateLocalwalletModule, { declarations: [_create_localwallet_component__WEBPACK_IMPORTED_MODULE_3__["CreateLocalwalletComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _create_localwallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateLocalwalletRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateLocalwalletModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_localwallet_component__WEBPACK_IMPORTED_MODULE_3__["CreateLocalwalletComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _create_localwallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateLocalwalletRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=create-localwallet-create-localwallet-module.js.map