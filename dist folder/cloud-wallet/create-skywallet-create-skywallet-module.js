(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-skywallet-create-skywallet-module"],{

/***/ "VyBw":
/*!*********************************************************************!*\
  !*** ./src/app/auth/create-skywallet/create-skywallet.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateSkywalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSkywalletComponent", function() { return CreateSkywalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class CreateSkywalletComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateSkywalletComponent.ɵfac = function CreateSkywalletComponent_Factory(t) { return new (t || CreateSkywalletComponent)(); };
CreateSkywalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateSkywalletComponent, selectors: [["app-create-skywallet"]], decls: 1, vars: 0, template: function CreateSkywalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtc2t5d2FsbGV0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSkywalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-skywallet',
                templateUrl: './create-skywallet.component.html',
                styleUrls: ['./create-skywallet.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZeXD":
/*!******************************************************************!*\
  !*** ./src/app/auth/create-skywallet/create-skywallet.module.ts ***!
  \******************************************************************/
/*! exports provided: CreateSkywalletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSkywalletModule", function() { return CreateSkywalletModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _create_skywallet_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-skywallet-routing.module */ "fIMY");
/* harmony import */ var _create_skywallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-skywallet.component */ "VyBw");





class CreateSkywalletModule {
}
CreateSkywalletModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateSkywalletModule });
CreateSkywalletModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateSkywalletModule_Factory(t) { return new (t || CreateSkywalletModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _create_skywallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateSkywalletRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateSkywalletModule, { declarations: [_create_skywallet_component__WEBPACK_IMPORTED_MODULE_3__["CreateSkywalletComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _create_skywallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateSkywalletRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSkywalletModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_skywallet_component__WEBPACK_IMPORTED_MODULE_3__["CreateSkywalletComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _create_skywallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateSkywalletRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "fIMY":
/*!**************************************************************************!*\
  !*** ./src/app/auth/create-skywallet/create-skywallet-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CreateSkywalletRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSkywalletRoutingModule", function() { return CreateSkywalletRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _create_skywallet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-skywallet.component */ "VyBw");





const routes = [
    {
        path: '',
        component: _create_skywallet_component__WEBPACK_IMPORTED_MODULE_2__["CreateSkywalletComponent"],
        children: [
            {
                path: '',
                redirectTo: 'create-address',
                pathMatch: 'full'
            },
            {
                path: 'create-address',
                loadChildren: () => Promise.all(/*! import() | create-address-create-address-module */[__webpack_require__.e("common"), __webpack_require__.e("create-address-create-address-module")]).then(__webpack_require__.bind(null, /*! ./create-address/create-address.module */ "Xs42")).then(m => m.CreateAddressModule)
            },
            {
                path: 'security-setup',
                loadChildren: () => Promise.all(/*! import() | security-setup-security-setup-module */[__webpack_require__.e("common"), __webpack_require__.e("security-setup-security-setup-module")]).then(__webpack_require__.bind(null, /*! ./security-setup/security-setup.module */ "pc6D")).then(m => m.SecuritySetupModule)
            },
            {
                path: 'setup-password',
                loadChildren: () => Promise.all(/*! import() | set-password-set-password-module */[__webpack_require__.e("common"), __webpack_require__.e("set-password-set-password-module")]).then(__webpack_require__.bind(null, /*! ./set-password/set-password.module */ "4b0U")).then(m => m.SetPasswordModule)
            },
            {
                path: 'upload-cc',
                loadChildren: () => __webpack_require__.e(/*! import() | advanced-setup-advanced-setup-module */ "advanced-setup-advanced-setup-module").then(__webpack_require__.bind(null, /*! ./advanced-setup/advanced-setup.module */ "JHYt")).then(m => m.AdvancedSetupModule)
            },
            // {
            //   path: 'upload-cc',
            //   loadChildren: () => import('./upload-cc/upload-cc.module').then(m => m.UploadCcModule)
            // },
            {
                path: 'completed',
                loadChildren: () => __webpack_require__.e(/*! import() | completed-completed-module */ "completed-completed-module").then(__webpack_require__.bind(null, /*! ./completed/completed.module */ "F4A4")).then(m => m.CompletedModule)
            }
        ]
    }
];
class CreateSkywalletRoutingModule {
}
CreateSkywalletRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateSkywalletRoutingModule });
CreateSkywalletRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateSkywalletRoutingModule_Factory(t) { return new (t || CreateSkywalletRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateSkywalletRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSkywalletRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=create-skywallet-create-skywallet-module.js.map