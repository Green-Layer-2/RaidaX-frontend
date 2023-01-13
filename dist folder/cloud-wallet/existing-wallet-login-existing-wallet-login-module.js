(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["existing-wallet-login-existing-wallet-login-module"],{

/***/ "BWlE":
/*!************************************************************************************!*\
  !*** ./src/app/auth/existing-wallet-login/existing-wallet-login-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ExistingWalletLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingWalletLoginRoutingModule", function() { return ExistingWalletLoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _existing_wallet_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./existing-wallet-login.component */ "K1Us");





const routes = [
    {
        path: '',
        component: _existing_wallet_login_component__WEBPACK_IMPORTED_MODULE_2__["ExistingWalletLoginComponent"]
    }
];
class ExistingWalletLoginRoutingModule {
}
ExistingWalletLoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExistingWalletLoginRoutingModule });
ExistingWalletLoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExistingWalletLoginRoutingModule_Factory(t) { return new (t || ExistingWalletLoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExistingWalletLoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExistingWalletLoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "K1Us":
/*!*******************************************************************************!*\
  !*** ./src/app/auth/existing-wallet-login/existing-wallet-login.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExistingWalletLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingWalletLoginComponent", function() { return ExistingWalletLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class ExistingWalletLoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExistingWalletLoginComponent.ɵfac = function ExistingWalletLoginComponent_Factory(t) { return new (t || ExistingWalletLoginComponent)(); };
ExistingWalletLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExistingWalletLoginComponent, selectors: [["app-existing-wallet-login"]], decls: 44, vars: 0, consts: [[1, "authWrapper"], ["href", "javascript:;", "routerLink", "/", 1, "backlinkBtn"], ["src", "assets/back_arrow.svg", "alt", ""], [1, "bodyInnerWrapper"], [1, "container"], [1, "row"], [1, "col-md-7"], [1, "titleOne"], [1, "skyAddressFieldWrap"], [1, "formField"], ["for", "username"], ["type", "text", "placeholder", "Ex: MainWallet", "name", "username", "id", "username"], [1, "domainName"], [1, "gap20"], [1, "dispFlex"], ["type", "password", "placeholder", "Enter your Skywallet password", "name", "password", "id", "password"], [1, "uploadFileWrap"], [1, "uploadIconWrap"], ["type", "file"], ["src", "assets/folder_icon.svg", "alt", "", 1, "folderIcon"], [1, "col-md-5"], ["src", "assets/existing-skywallet-login-black-white.png", "alt", "rocket image", 1, "stepperMainImg"], [1, "infoText"], ["src", "assets/info_circle.svg", "alt", ""], [1, "bottomPartSubmit"], [1, "bottomFooter"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", "btnDisable"]], template: function ExistingWalletLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log In To Your Existing SkyVault");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SkyVault Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ".skyvault.cc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00A0 or \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Upload File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Choose a file to upload.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "You can log on to multiple devices using your SkyVault address & its unique password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".authWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 250px;\n  background-color: transparent !important;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  transition: all 0.2s;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 1px solid rgba(18, 122, 244, 0.48) !important;\n}\n\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff;\n  line-height: 15px;\n  margin-left: 5px;\n}\n\n.uploadFileWrap[_ngcontent-%COMP%] {\n  min-height: 46px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleGlzdGluZy13YWxsZXQtbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUlJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7QUFEUjs7QUFFUTtFQUNJLHFEQUFBO0FBQVo7O0FBR0k7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRFI7O0FBSUE7RUFDSSxnQkFBQTtBQURKIiwiZmlsZSI6ImV4aXN0aW5nLXdhbGxldC1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYXV0aFdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5za3lBZGRyZXNzRmllbGRXcmFwIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtRmllbGQge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSAyNTUgMjU1IC8gMjYlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOCwgMTIyLCAyNDQsIDAuNDgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRvbWFpbk5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnVwbG9hZEZpbGVXcmFwIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ2cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExistingWalletLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-existing-wallet-login',
                templateUrl: './existing-wallet-login.component.html',
                styleUrls: ['./existing-wallet-login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jigB":
/*!****************************************************************************!*\
  !*** ./src/app/auth/existing-wallet-login/existing-wallet-login.module.ts ***!
  \****************************************************************************/
/*! exports provided: ExistingWalletLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingWalletLoginModule", function() { return ExistingWalletLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _existing_wallet_login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./existing-wallet-login-routing.module */ "BWlE");
/* harmony import */ var _existing_wallet_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./existing-wallet-login.component */ "K1Us");





class ExistingWalletLoginModule {
}
ExistingWalletLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExistingWalletLoginModule });
ExistingWalletLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExistingWalletLoginModule_Factory(t) { return new (t || ExistingWalletLoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _existing_wallet_login_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExistingWalletLoginRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExistingWalletLoginModule, { declarations: [_existing_wallet_login_component__WEBPACK_IMPORTED_MODULE_3__["ExistingWalletLoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _existing_wallet_login_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExistingWalletLoginRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExistingWalletLoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_existing_wallet_login_component__WEBPACK_IMPORTED_MODULE_3__["ExistingWalletLoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _existing_wallet_login_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExistingWalletLoginRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=existing-wallet-login-existing-wallet-login-module.js.map