(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"],{

/***/ "Vief":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/transactions/transactions.component.ts ***!
  \******************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class TransactionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TransactionsComponent.ɵfac = function TransactionsComponent_Factory(t) { return new (t || TransactionsComponent)(); };
TransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionsComponent, selectors: [["app-transactions"]], decls: 1, vars: 0, template: function TransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transactions',
                templateUrl: './transactions.component.html',
                styleUrls: ['./transactions.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Wdhu":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/transactions/transactions-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: TransactionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsRoutingModule", function() { return TransactionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _transactions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactions.component */ "Vief");





const routes = [
    {
        path: '',
        component: _transactions_component__WEBPACK_IMPORTED_MODULE_2__["TransactionsComponent"],
        children: [
            {
                path: 'import',
                loadChildren: () => __webpack_require__.e(/*! import() | upload-upload-module */ "upload-upload-module").then(__webpack_require__.bind(null, /*! ./upload/upload.module */ "Aiq4")).then(m => m.UploadModule)
            },
            {
                path: 'export',
                loadChildren: () => __webpack_require__.e(/*! import() | download-download-module */ "download-download-module").then(__webpack_require__.bind(null, /*! ./download/download.module */ "KKCr")).then(m => m.DownloadModule)
            },
            {
                path: 'buy',
                loadChildren: () => __webpack_require__.e(/*! import() | buy-buy-module */ "buy-buy-module").then(__webpack_require__.bind(null, /*! ./buy/buy.module */ "30td")).then(m => m.BuyModule)
            },
            {
                path: 'transfer',
                loadChildren: () => Promise.all(/*! import() | transfer-transfer-module */[__webpack_require__.e("default~transfer-sky-transfer-sky-module~transfer-transfer-module"), __webpack_require__.e("transfer-transfer-module")]).then(__webpack_require__.bind(null, /*! ./transfer/transfer.module */ "fxjj")).then(m => m.TransferModule)
            },
            {
                path: 'withdraw',
                loadChildren: () => __webpack_require__.e(/*! import() | download-sky-download-sky-module */ "download-sky-download-sky-module").then(__webpack_require__.bind(null, /*! ./download-sky/download-sky.module */ "+sXH")).then(m => m.DownloadSkyModule)
            },
            {
                path: 'transfer-cc',
                loadChildren: () => Promise.all(/*! import() | transfer-sky-transfer-sky-module */[__webpack_require__.e("default~transfer-sky-transfer-sky-module~transfer-transfer-module"), __webpack_require__.e("transfer-sky-transfer-sky-module")]).then(__webpack_require__.bind(null, /*! ./transfer-sky/transfer-sky.module */ "hLpE")).then(m => m.TransferSkyModule)
            },
            {
                path: 'deposit',
                loadChildren: () => __webpack_require__.e(/*! import() | deposit-sky-deposit-sky-module */ "deposit-sky-deposit-sky-module").then(__webpack_require__.bind(null, /*! ./deposit-sky/deposit-sky.module */ "6xIx")).then(m => m.DepositSkyModule)
            },
            {
                path: 'success',
                loadChildren: () => __webpack_require__.e(/*! import() | success-success-module */ "success-success-module").then(__webpack_require__.bind(null, /*! ./success/success.module */ "RsrD")).then(m => m.SuccessModule)
            },
        ]
    }
];
class TransactionsRoutingModule {
}
TransactionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransactionsRoutingModule });
TransactionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransactionsRoutingModule_Factory(t) { return new (t || TransactionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransactionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "p1e0":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/transactions/transactions.module.ts ***!
  \***************************************************************/
/*! exports provided: TransactionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsModule", function() { return TransactionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactions-routing.module */ "Wdhu");
/* harmony import */ var _transactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions.component */ "Vief");





class TransactionsModule {
}
TransactionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransactionsModule });
TransactionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransactionsModule_Factory(t) { return new (t || TransactionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionsRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransactionsModule, { declarations: [_transactions_component__WEBPACK_IMPORTED_MODULE_3__["TransactionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_transactions_component__WEBPACK_IMPORTED_MODULE_3__["TransactionsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionsRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=transactions-transactions-module.js.map