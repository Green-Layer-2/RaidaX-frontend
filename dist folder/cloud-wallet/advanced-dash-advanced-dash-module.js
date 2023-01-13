(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advanced-dash-advanced-dash-module"],{

/***/ "2w45":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/advanced-dash/advanced-dash-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdvancedDashRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedDashRoutingModule", function() { return AdvancedDashRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _advanced_dash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-dash.component */ "9oII");





const routes = [
    {
        path: '',
        component: _advanced_dash_component__WEBPACK_IMPORTED_MODULE_2__["AdvancedDashComponent"]
    }
];
class AdvancedDashRoutingModule {
}
AdvancedDashRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvancedDashRoutingModule });
AdvancedDashRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvancedDashRoutingModule_Factory(t) { return new (t || AdvancedDashRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvancedDashRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvancedDashRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "9oII":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/advanced-dash/advanced-dash.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdvancedDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedDashComponent", function() { return AdvancedDashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");










function AdvancedDashComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
} }
function AdvancedDashComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.successMsg);
} }
const _c0 = function (a0) { return { "btnDisable": a0 }; };
class AdvancedDashComponent {
    constructor(eventService, router, storage, raida, fb) {
        this.eventService = eventService;
        this.router = router;
        this.storage = storage;
        this.raida = raida;
        this.fb = fb;
        this.showDownload = false;
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json',
        };
        this.successInfo = false;
        this.successMsg = '';
        this.errorInfo = false;
        this.errorMsg = '';
        this.payload = null;
        this.taskId = null;
        this.showError = false;
        this.fileName = '';
        this.isDownload = false;
        this.continue = false;
        this.emailForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
        });
        this.user = localStorage.getItem('userSky');
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
    }
    ngOnInit() {
        this.passkey = 'newpasskey';
    }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    isValidInput(value) {
        return this.emailForm.controls[value].invalid &&
            (this.emailForm.controls[value].dirty || this.emailForm.controls[value].touched);
    }
    themeDarkCaller() {
        if (this.themeDarkActive == false) {
            this.themeDarkActive = true;
            this.themeLightActive = false;
            localStorage.setItem('themeLightActive', '0');
            this.eventService.emitThemeTogEvent();
        }
    }
    themeLightCaller() {
        if (this.themeLightActive == false) {
            this.themeLightActive = true;
            this.themeDarkActive = false;
            localStorage.setItem('themeLightActive', '1');
            this.eventService.emitThemeTogEvent();
        }
    }
    getStatus(e) {
        this.isSelect = e.target.checked;
        if (this.isSelect == false) {
            this.emailForm.controls['email'].disable();
            this.emailForm.controls['email'].patchValue('');
        }
        else {
            this.emailForm.controls['email'].enable();
        }
    }
    onFileInput(event) {
        this.errorInfo = false;
        this.isDownload = true;
        this.successInfo = false;
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result);
                this.unpack(reader.result);
            };
            reader.readAsDataURL(file);
            // this.fileName = file.name;
            // const formData = new FormData();
            // formData.append("thumbnail", file);
            // let fileReader = new FileReader();
            // fileReader.onload = (e) => {
            //   this.isDownload = true;
            // this.detectWallet(fileReader.result);
            // }
            // fileReader.readAsText(file);
        }
    }
    unpack(val) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var log = val.split(',')[1];
                var data = { data: log };
                let response = yield this.raida.readbin(data);
                if (response.status === "success") {
                    this.idata = {
                        sn: response.payload[0].sn,
                        ans: response.payload[0].ans
                    };
                    this.detectWallet(this.idata, "0");
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: "Failed to unpack coin.",
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    detectWallet(File, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isDownload = true;
            // try {
            //   var cs = JSON.parse(File);
            //   if (cs.cloudcoin.length !== 0) {
            //   }
            // }
            // catch (e) {
            //   this.errorInfo = true;
            //   this.errorMsg = "Failed to parse json";
            // }
            // this.idata = {
            //   coins: [
            //     {
            //       'sn': parseInt('sn'),
            //       'ans': String
            //     }
            //   ]
            // }
            // for (let i = 0; i < cs?.cloudcoin?.length; i++) {
            //   let cc = cs.cloudcoin[i]
            //   this.idata.coins[i] = {
            //     'sn': parseInt(cc.sn, 10),
            //     'ans': cc.an
            //   }
            // }
            try {
                File.coin_type = Number(type);
                var data = {
                    coins: [
                        File
                    ]
                };
                console.log(data);
                let detection = yield this.raida.detect(data);
                //console.log(detection, "response");
                if (detection.status == 'success') {
                    this.successInfo = true;
                    this.errorInfo = false;
                    let taskId = detection.payload;
                    this.doCheckcoin(taskId.id, (data) => { });
                }
                else {
                    this.showDownload = false;
                    this.isDownload = false;
                    this.errorInfo = true;
                    this.successInfo = false;
                    this.errorMsg = detection.payload.message;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheckcoin(taskID, xdata) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.counterfeit) === 0 && ((_d = (_c = this.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.limbo) === 0) {
                            this.successInfo = true;
                            this.errorInfo = false;
                            this.continue = true;
                            this.successMsg = "Done: Detected Pass Key is healthy!";
                        }
                        else {
                            this.successInfo = false;
                            this.isDownload = false;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                                title: "Pass Key is not authentic. Please upload or generate another Pass Key.",
                                icon: 'error',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    this.showDownload = false;
                                }
                            });
                        }
                    }
                    else {
                        this.showDownload = false;
                        this.isDownload = false;
                        this.errorInfo = true;
                        this.successInfo = false;
                        this.errorMsg = this.payload.data.message;
                    }
                    return;
                }
                this.successInfo = true;
                this.successMsg = "Doing.... Task ID " + taskID + ", Progress " + this.payload.progress + "%";
                setTimeout(() => {
                    this.doCheckcoin(taskID, xdata);
                }, 500);
            }
            else {
                this.isDownload = false;
                this.errorInfo = true;
                this.successInfo = false;
                this.errorMsg = "Call Failed";
            }
        });
    }
    passkeyradio(e) {
        this.passkey = e.target.value;
        this.isDownload = true;
        //console.log("isdownload: " + this.isDownload)
        console.log(" passkey radio:" + this.passkey);
    }
    createSky() {
        this.passkey = this.passkey;
        console.log("In createsky " + this.passkey);
        if (this.passkey != '') {
            this.router.navigate(['/dashboard/create-skyvault-dash/new-address'], { queryParams: { passkey: this.passkey } });
        }
    }
}
AdvancedDashComponent.ɵfac = function AdvancedDashComponent_Factory(t) { return new (t || AdvancedDashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AdvancedDashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdvancedDashComponent, selectors: [["app-advanced-dash"]], decls: 39, vars: 8, consts: [[1, "gap30"], [1, "transWrapper"], [1, "headerbackWrap", "border-0"], ["href", "javascript:;", "routerLink", "/dashboard/home", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "gap20"], [1, "gap10"], [1, "transBody"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "titleOne"], [1, "titleTwo", 2, "opacity", "0.8"], [1, "skyAddressFieldWrap"], [1, "answer"], ["type", "radio", "name", "passkey", "value", "newpasskey", "checked", "", "id", "passkey", 1, "m-3", 3, "ngClass", "change"], ["for", "generatenewpasskey", 1, "dark_mode_text"], ["type", "radio", "name", "passkey", "value", "ownpasskey", "id", "passkey", 1, "m-3", 3, "ngClass", "change", "click"], ["for", "importownkey", 1, "dark_mode_text"], ["type", "file", "accept", ".id, .bin, .png", 2, "display", "none", 3, "change"], ["fileInput", ""], ["class", "errorMsg", 4, "ngIf"], ["class", "successMsg", 4, "ngIf"], [1, "col-md-4"], ["src", "assets/advnc-setup-img-black-white.png", "alt", "rocket image", 1, "stepperMainImg"], [1, "transBottomFooter"], [1, "bottomPartSubmit"], [1, "bottomFooter"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "click"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], [1, "successMsg"], ["src", "assets/info_green.svg", "alt", "error icon"]], template: function AdvancedDashComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "SkyVault Pass Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "You will need a Pass Key to access your SkyVault. You can create a new Pass Key or add one that you have previously created. The Pass Key is a PNG file that contains 25 verification keys. You will need to keep this file safe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdvancedDashComponent_Template_input_change_18_listener($event) { return ctx.passkeyradio($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Generate New Pass Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdvancedDashComponent_Template_input_change_22_listener($event) { return ctx.passkeyradio($event); })("click", function AdvancedDashComponent_Template_input_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Import Existing Pass Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdvancedDashComponent_Template_input_change_26_listener($event) { return ctx.onFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AdvancedDashComponent_span_29_Template, 3, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AdvancedDashComponent_span_30_Template, 3, 1, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvancedDashComponent_Template_a_click_37_listener() { return ctx.createSky(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.isDownload));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.isDownload));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successInfo);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".authWrapperAdvncSetp[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media screen and (max-width: 576px) {\n  .authWrapperAdvncSetp[_ngcontent-%COMP%] {\n    background: #007a84;\n    padding-top: 80px;\n  }\n}\n.authWrapperAdvncSetp[_ngcontent-%COMP%]   .authHolder[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 20px;\n  width: 1000px;\n  max-width: 90%;\n  display: flex;\n  min-height: 80vh;\n}\n.skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.answer[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: left;\n  width: 45%;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 250px;\n  background-color: transparent !important;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n}\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff !important;\n  line-height: 15px;\n  margin-left: 5px;\n}\n.uploadBtnWrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.uploadBtnWrap[_ngcontent-%COMP%]   .uploadLaterLink[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-left: 10px;\n  opacity: 0.8;\n  transition: all 0.2s;\n}\n.uploadBtnWrap[_ngcontent-%COMP%]   .uploadLaterLink[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.downloadingCCWrap[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background-color: #2C2C2C;\n  border-radius: 4px;\n  margin: 15px 0 15px;\n  position: relative;\n}\n.downloadingCCWrap[_ngcontent-%COMP%]   .dwnloadStatIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: calc(50% - 6px);\n  z-index: 3;\n  cursor: pointer;\n  height: 12px;\n}\n.downloadingCCWrap[_ngcontent-%COMP%]   .downloadBar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  bottom: 5px;\n  background-color: #181818;\n  border-radius: 3px;\n  z-index: 1;\n}\n.downloadingCCWrap[_ngcontent-%COMP%]   .downloadText[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  color: #fff;\n  position: relative;\n  z-index: 2;\n}\n.downloadingCCWrap[_ngcontent-%COMP%]   .downloadText[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWR2YW5jZWQtZGFzaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0FBQUo7QUFFSTtFQUpKO0lBS1EsbUJBQUE7SUFDQSxpQkFBQTtFQUNOO0FBQ0Y7QUFDSTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNSO0FBUUE7RUFDSSxnQkFBQTtBQUxKO0FBUUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUxKO0FBV0k7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBRUEsMkNBQUE7QUFUUjtBQVlJO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFWUjtBQWNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFYSjtBQWFJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQVhSO0FBYVE7RUFDSSxVQUFBO0FBWFo7QUFnQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFlSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBYlI7QUFnQkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBZFI7QUFpQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWZSO0FBaUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBZloiLCJmaWxlIjoiYWR2YW5jZWQtZGFzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoV3JhcHBlckFkdm5jU2V0cCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA3YTg0IDAlLCAjMDA3YTg0IDY1JSwgI0ZGRiA2NSUsICNGRkYgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA3YTg0O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRoSG9sZGVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWluLWhlaWdodDogODB2aDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA2JSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5iYWNrbGlua0J0bkFkdm5jU2V0IHtcclxuLy8gICAgIGNvbG9yOiAjMDA3YTg0O1xyXG4vLyB9XHJcblxyXG4uc2t5QWRkcmVzc0ZpZWxkV3JhcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uYW5zd2VyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG5cclxuICBcclxuLmZvcm1GaWVsZCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE4LCAxMjIsIDI0NCwgMC40OCk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgIH1cclxuXHJcbiAgICAuZG9tYWluTmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udXBsb2FkQnRuV3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgLnVwbG9hZExhdGVyTGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZG93bmxvYWRpbmdDQ1dyYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMkMyQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogMTVweCAwIDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmR3bmxvYWRTdGF0SWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSA2cHgpO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZG93bmxvYWRCYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuZG93bmxvYWRUZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdvancedDashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-advanced-dash',
                templateUrl: './advanced-dash.component.html',
                styleUrls: ['./advanced-dash.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ggXP":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/advanced-dash/advanced-dash.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdvancedDashModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedDashModule", function() { return AdvancedDashModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _advanced_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-dash-routing.module */ "2w45");
/* harmony import */ var _advanced_dash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-dash.component */ "9oII");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ "NiZn");







class AdvancedDashModule {
}
AdvancedDashModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvancedDashModule });
AdvancedDashModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvancedDashModule_Factory(t) { return new (t || AdvancedDashModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _advanced_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvancedDashRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvancedDashModule, { declarations: [_advanced_dash_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedDashComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _advanced_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvancedDashRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvancedDashModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_advanced_dash_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedDashComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _advanced_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvancedDashRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=advanced-dash-advanced-dash-module.js.map