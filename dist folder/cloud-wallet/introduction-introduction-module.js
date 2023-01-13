(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["introduction-introduction-module"],{

/***/ "A/iK":
/*!*************************************************************!*\
  !*** ./src/app/auth/introduction/introduction.component.ts ***!
  \*************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");










function IntroductionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Welcome to CloudCoin Manager!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All-in-one Software to Manage Your CloudCoins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SkyVault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Store and transfer your CC online in the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " RAIDA Cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ". Your CC is safe in the RAIDA cloud.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Create a SkyVault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Store CloudCoins as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " on your device. Your Wallet is on your computer, but not online.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Create a Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IntroductionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Connecting to RAIDA servers...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IntroductionComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-lottie", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function IntroductionComponent_ng_container_4_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntroductionComponent_ng_container_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.hideErrorMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.errorOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
} }
function IntroductionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function IntroductionComponent_div_5_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "RAIDA servers connecting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.options);
} }
// import { Observable, Subscription } from 'rxjs';
// import 'rxjs/add/observable/timer';
class IntroductionComponent {
    constructor(eventService, router, api) {
        this.eventService = eventService;
        this.router = router;
        this.api = api;
        // private subscription: Subscription;
        // private timer: Observable<any>;
        this.isShow = false;
        this.showContent = false;
        this.showError = false;
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
        };
        this.errorOptions = {
            path: 'https://raida11.cloudcoin.global/animation/error.json'
        };
        localStorage.setItem('wallet', 'localwallet');
        // localStorage.setItem('userLocal' , this.walletName)
        this.getAllwallet();
        this.getAllvaults();
        if (localStorage.getItem('themeLightActive') == '1') {
            this.themeLightActive = true;
            this.themeDarkActive = false;
        }
        else if (localStorage.getItem('themeLightActive') == '0') {
            this.themeLightActive = false;
            this.themeDarkActive = true;
        }
        else {
            this.themeLightActive = true;
            this.themeDarkActive = false;
        }
        this.themeDropdwnToggler = false;
    }
    ngOnInit() {
        // window.open(window.location.href, "_self");
        this.userLocal = localStorage.getItem('userLocal');
        this.userSky = localStorage.getItem('userSky');
        this.localLength = Number(localStorage.getItem('localLength'));
        this.skyLength = Number(localStorage.getItem('skyLength'));
        this.localbalance = Number(sessionStorage.getItem('skyLength'));
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Coin Manager",
            text: "\n Used to authenticate, store and pay out CC. This software is provided as-is with all faults, defects and errors, and without warranty of any kind. This software is provided free of charge by the CC Consortium.",
            icon: 'info',
            // input: 'checkbox',
            // inputPlaceholder: 'I have a bike'
            // showCancelButton: true,
            confirmButtonText: 'Okay',
        }).then((result) => {
            if (result.value) {
                {
                    // this.goToDash(this.userLocal)
                    // if (this.payload?.length != 0 || this.all?.length > 1) {
                    //   this.router.navigate(['/dashboard']);
                    // }
                }
            }
            else {
                window.close();
            }
        });
        this.initialize();
        // setInterval(() => {
        //   this.initialize();
        //   this.isShow = false;
        // }, 10000);
        // this.getAllvaults();
    }
    initialize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showLoading(true);
            // var self = this;
            // setTimeout(() => {
            //   this.showLoading(false);
            //   this.isShow = true;
            // }, 3000);
            try {
                let response = yield this.api.init();
                if (response.status == "success") {
                    this.showContent = true;
                    this.showLoading(false);
                    // this.goToDash(this.userLocal)
                    this.isShow = false;
                    // if(Number(localStorage.getItem('skyLength')) > 0 || Number(localStorage.getItem('localLength')) > 1 || this.bal > 0){
                    if (this.skyLength > 0 || this.localLength > 1 || this.localbalance > 0) {
                        this.showContent = false;
                        // this.router.navigate(['/dashboard']);
                        this.goToDash(this.walletName);
                    }
                }
                else {
                    this.showContent = false;
                }
            }
            catch (e) {
                this.initialize();
                this.showContent = false;
            }
        });
    }
    getAllwallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response;
                response = yield this.api.getWallet();
                if (response.status === "success") {
                    this.all = response.payload;
                    this.bal = this.all[0].balance;
                    sessionStorage.setItem('totalBal', this.bal);
                    this.walletName = this.all[0].name;
                    localStorage.setItem('userLocal', this.walletName);
                    this.localLen = this.all.length;
                    localStorage.setItem('localLength', this.localLen);
                    // if (this.all.length > 1) {
                    //   this.router.navigate(['/dashboard']);
                    // }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getAllvaults() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getList();
                this.payload = response.payload;
                if (response.status == "success") {
                    this.skyAll = response.payload;
                    this.skyLen = (_a = this.skyAll) === null || _a === void 0 ? void 0 : _a.length;
                    this.skyName = response.payload[0].name;
                    localStorage.setItem('skyLength', this.skyLen);
                    localStorage.setItem('userSky', this.skyName);
                    // if (response?.payload?.length != 0) {
                    //   this.router.navigate(['/dashboard']);
                    // }
                }
                console.log(response);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    themeDarkCaller() {
        if (this.themeDarkActive == false) {
            this.themeDarkActive = true;
            this.themeLightActive = false;
            localStorage.setItem('themeLightActive', '0');
            this.eventService.emitThemeTogEvent();
        }
        this.themeDropdwnToggler = false;
    }
    themeLightCaller() {
        if (this.themeLightActive == false) {
            this.themeLightActive = true;
            this.themeDarkActive = false;
            localStorage.setItem('themeLightActive', '1');
            this.eventService.emitThemeTogEvent();
        }
        this.themeDropdwnToggler = false;
    }
    themeDropDownCaller() {
        this.themeDropdwnToggler = !this.themeDropdwnToggler;
    }
    closeThemeDropdown() {
        this.themeDropdwnToggler = false;
    }
    showLoading(state) {
        this.loadingMessage = '';
        if (state) {
            this.showNormal = false;
            this.showLoader = true;
            this.showError = false;
        }
        else {
            this.showNormal = true;
            this.showLoader = false;
            this.showError = false;
        }
    }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    goToDash(name) {
        this.userLocal = name;
        localStorage.setItem('wallet', 'localwallet');
        this.eventService.setItem('userLocal', name, "changelocal");
        // this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['/dashboard']);
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 6, vars: 4, consts: [[1, "authWrapper", "authWrapperIntro"], [1, "welcomeHolder"], ["class", "container", 4, "ngIf"], [4, "ngIf"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "container"], ["src", "assets/logo_new_only_cc.svg", "alt", "logo", 1, "welcomeLogo"], [1, "welcomeHeading"], [1, "welcomeSubhead"], [1, "row", "walletChooserWrap"], [1, "col-md-6"], [1, "walletItem"], ["src", "assets/skywallet_icon.svg", "alt", "", 1, "walletIcon"], [1, "walletItemHeader"], [1, "walletItemDesc"], ["href", "javascript:;", "routerLink", "/skywallet", 1, "btnCustomBlue"], ["src", "assets/localwallet_icon.svg", "alt", "", 1, "walletIcon"], ["href", "javascript:;", "routerLink", "/localwallet", 1, "btnCustomBlue"], [1, "gap50"], [1, "col-12", "mt-5"], ["href", "javascript:;", "routerLink", "/dashboard", 1, "btnCustomBlue"], [1, "text-white"], ["height", "70px", 3, "options", "animationCreated"], [1, "text-center", 2, "color", "#ffffff", "margin-bottom", "10px"], [1, "text-center"], [1, "customBtn", 3, "click"], ["icon", "arrow-left"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "180px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IntroductionComponent_div_2_Template, 36, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IntroductionComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IntroductionComponent_ng_container_4_Template, 7, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IntroductionComponent_div_5_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShow && ctx.showContent == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], styles: [".boxHolderLeft[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n  border-radius: 20px 0 0 20px;\n  position: relative;\n  overflow: hidden;\n}\n@media screen and (max-width: 576px) {\n  .boxHolderLeft[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    border-radius: 20px 0 0 20px;\n    position: relative;\n    overflow: hidden;\n  }\n}\n.boxHolderRight[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 30px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  border-radius: 20px;\n  overflow: auto;\n  box-shadow: -10px 0px 20px rgba(0, 0, 0, 0.07);\n}\n@media screen and (max-width: 576px) {\n  .boxHolderRight[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n  }\n}\n.authWrapperIntro[_ngcontent-%COMP%]   .authHolder[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 20px;\n  width: 1000px;\n  max-width: 90%;\n  display: flex;\n  min-height: 80vh;\n  background-color: white;\n}\n.welcomeHolder[_ngcontent-%COMP%]   .welcomeLogo[_ngcontent-%COMP%] {\n  height: 40px;\n  display: block;\n  margin: 0 auto 20px;\n}\n.welcomeHolder[_ngcontent-%COMP%]   .welcomeHeading[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #fff;\n  margin-bottom: 10px;\n  text-align: center;\n  font-weight: 400;\n}\n.welcomeHolder[_ngcontent-%COMP%]   .welcomeSubhead[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.welcomeHolder[_ngcontent-%COMP%]   .walletChooserWrap[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.welcomeHolder[_ngcontent-%COMP%]   .walletItem[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 60px;\n}\n.welcomeHolder[_ngcontent-%COMP%]   .walletItem[_ngcontent-%COMP%]   .walletIcon[_ngcontent-%COMP%] {\n  height: 120px;\n  margin-bottom: 30px;\n}\n.welcomeHolder[_ngcontent-%COMP%]   .walletItem[_ngcontent-%COMP%]   .walletItemHeader[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  margin-bottom: 20px;\n}\n.welcomeHolder[_ngcontent-%COMP%]   .walletItem[_ngcontent-%COMP%]   .walletItemDesc[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #fff;\n  margin-bottom: 20px;\n}\n.welcomeHolder[_ngcontent-%COMP%]   .walletItem[_ngcontent-%COMP%]   .btnCustomBlue[_ngcontent-%COMP%] {\n  padding-left: 60px;\n  padding-right: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFNSTtFQVRKO0lBVVEsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsYUFBQTtJQUNBLDRCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQUhOO0FBQ0Y7QUFNQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSw4Q0FBQTtBQUpKO0FBS0k7RUFYSjtJQVlRLFlBQUE7SUFDQSxXQUFBO0VBRk47QUFDRjtBQWFJO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBRUEsdUJBQUE7QUFYUjtBQWdCSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFiUjtBQWVJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiUjtBQWVJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFiUjtBQWVJO0VBQ0ksZ0JBQUE7QUFiUjtBQWVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBYlI7QUFjUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVpaO0FBY1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBWlo7QUFjUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFaWjtBQWNRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVpaIiwiZmlsZSI6ImludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5ib3hIb2xkZXJMZWZ0SW50cm9iZyB7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NTc0O1xyXG4vLyB9XHJcbi8vIC5ib3hIb2xkZXJSaWdodEludHJvYmcge1xyXG5cclxuLy8gfVxyXG4uYm94SG9sZGVyTGVmdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuLmJveEhvbGRlclJpZ2h0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDgwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDBweCAyMHB4IHJnYigwIDAgMCAvIDclKTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5hdXRoV3JhcHBlckludHJvIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQgLCAjMDA3NTc0IDAlICwgIzAwNzU3NCA2NSUgLCAjRkZGIDY1JSAsICNGRkYgMTAwJSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmI4Y2ZmIDAlLCAjMmI4Y2ZmIDY1JSwgI0ZGRiA2NSUsICNGRkYgMTAwJSk7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICMwMDc1NzQ7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuYXV0aEhvbGRlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNiUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZWxjb21lSG9sZGVyIHtcclxuICAgIC53ZWxjb21lTG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcbiAgICB9XHJcbiAgICAud2VsY29tZUhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLndlbGNvbWVTdWJoZWFkIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC53YWxsZXRDaG9vc2VyV3JhcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICAgIC53YWxsZXRJdGVtIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMCA2MHB4O1xyXG4gICAgICAgIC53YWxsZXRJY29uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndhbGxldEl0ZW1IZWFkZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2FsbGV0SXRlbURlc2Mge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuQ3VzdG9tQmx1ZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-introduction',
                templateUrl: './introduction.component.html',
                styleUrls: ['./introduction.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "j6ep":
/*!**********************************************************!*\
  !*** ./src/app/auth/introduction/introduction.module.ts ***!
  \**********************************************************/
/*! exports provided: IntroductionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionModule", function() { return IntroductionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _introduction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduction-routing.module */ "jaCI");
/* harmony import */ var _introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction.component */ "A/iK");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");







class IntroductionModule {
}
IntroductionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IntroductionModule });
IntroductionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IntroductionModule_Factory(t) { return new (t || IntroductionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _introduction_routing_module__WEBPACK_IMPORTED_MODULE_2__["IntroductionRoutingModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IntroductionModule, { declarations: [_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _introduction_routing_module__WEBPACK_IMPORTED_MODULE_2__["IntroductionRoutingModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _introduction_routing_module__WEBPACK_IMPORTED_MODULE_2__["IntroductionRoutingModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jaCI":
/*!******************************************************************!*\
  !*** ./src/app/auth/introduction/introduction-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: IntroductionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionRoutingModule", function() { return IntroductionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _introduction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduction.component */ "A/iK");





const routes = [
    {
        path: '',
        component: _introduction_component__WEBPACK_IMPORTED_MODULE_2__["IntroductionComponent"]
    }
];
class IntroductionRoutingModule {
}
IntroductionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IntroductionRoutingModule });
IntroductionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IntroductionRoutingModule_Factory(t) { return new (t || IntroductionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IntroductionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=introduction-introduction-module.js.map