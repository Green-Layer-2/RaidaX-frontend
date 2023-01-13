(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-add-dash-create-add-dash-module"],{

/***/ "QlvU":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/create-add-dash/create-add-dash.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateAddDashModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAddDashModule", function() { return CreateAddDashModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _create_add_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-add-dash-routing.module */ "xrjN");
/* harmony import */ var _create_add_dash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-add-dash.component */ "hk+6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ "NiZn");







class CreateAddDashModule {
}
CreateAddDashModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateAddDashModule });
CreateAddDashModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateAddDashModule_Factory(t) { return new (t || CreateAddDashModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _create_add_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateAddDashRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateAddDashModule, { declarations: [_create_add_dash_component__WEBPACK_IMPORTED_MODULE_3__["CreateAddDashComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _create_add_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateAddDashRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateAddDashModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_add_dash_component__WEBPACK_IMPORTED_MODULE_3__["CreateAddDashComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _create_add_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateAddDashRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hk+6":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/create-add-dash/create-add-dash.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateAddDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAddDashComponent", function() { return CreateAddDashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_auth_create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/create-localwallet/setup-mail-psw/custom-validators */ "lkAQ");
/* harmony import */ var src_app_auth_create_skywallet_create_address_username_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/create-skywallet/create-address/username.validator */ "1IIY");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-lottie */ "NiZn");













function CreateAddDashComponent_div_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Do not use a space for your username.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateAddDashComponent_div_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wallet name is reqiured.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateAddDashComponent_div_23_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cannot start with - (dash)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateAddDashComponent_div_23_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SkyVault name can't be longer than 63 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateAddDashComponent_div_23_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Special charcters are not allowed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateAddDashComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateAddDashComponent_div_23_span_1_Template, 3, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateAddDashComponent_div_23_span_2_Template, 3, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateAddDashComponent_div_23_span_3_Template, 3, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CreateAddDashComponent_div_23_span_4_Template, 3, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CreateAddDashComponent_div_23_span_5_Template, 3, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addressForm.controls["username"].errors == null ? null : ctx_r0.addressForm.controls["username"].errors.cannotContainSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addressForm.controls["username"].errors == null ? null : ctx_r0.addressForm.controls["username"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addressForm.controls["username"].errors == null ? null : ctx_r0.addressForm.controls["username"].errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addressForm.controls["username"].errors == null ? null : ctx_r0.addressForm.controls["username"].errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addressForm.controls["username"].errors == null ? null : ctx_r0.addressForm.controls["username"].errors.special);
} }
function CreateAddDashComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
} }
function CreateAddDashComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.successMsg);
} }
const _c0 = function (a0) { return { "width": a0 }; };
function CreateAddDashComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Downloading authentic Pass Key... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, (ctx_r3.payload == null ? null : ctx_r3.payload.progress) != 100 ? ctx_r3.payload == null ? null : ctx_r3.payload.progress : "99%"));
} }
function CreateAddDashComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function CreateAddDashComponent_div_39_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r4.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.loadingMessage);
} }
const _c1 = function (a0) { return { "btnDisable": a0 }; };
class CreateAddDashComponent {
    constructor(eventService, router, storage, raida, actRoute, fb) {
        this.eventService = eventService;
        this.router = router;
        this.storage = storage;
        this.raida = raida;
        this.actRoute = actRoute;
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
        this.addressForm = this.fb.group({
            "username": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([^-]|[^-].*)$'),
                    // Validators.minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64),
                    // CustomValidators.patternValidator(
                    //   /[a-zA-Z]+/,
                    //   {
                    //     onlyNumber: true
                    //   }
                    // ),
                    src_app_auth_create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].patternValidator(/^[a-zA-Z0-9-]*$/, {
                        special: true
                    }),
                    src_app_auth_create_skywallet_create_address_username_validator__WEBPACK_IMPORTED_MODULE_5__["UsernameValidator"].cannotContainSpace]],
        });
        //this.user = localStorage.getItem('userSky');
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
        this.eventService.changeSky.subscribe(message => {
            this.allSky = message;
        });
        this.actRoute.queryParams.subscribe(params => {
            this.passkey = params['passkey'];
            //console.log("passkey from init:" + this.passkey)
        });
    }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    showLoading(state) {
        this.loadingMessage = '';
        if (state) {
            this.showLoader = true;
        }
        else {
            this.showLoader = false;
        }
    }
    // isValidInput(value: any) {
    //   return this.emailForm.controls[value].invalid &&
    //     (this.emailForm.controls[value].dirty || this.emailForm.controls[value].touched);
    // }
    isValidInput(value) {
        return this.addressForm.controls[value].invalid &&
            (this.addressForm.controls[value].dirty || this.addressForm.controls[value].touched);
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
    // onFileInput(event) {
    //   this.errorInfo = false;
    //   this.isDownload = true;
    //   this.successInfo = false;
    //   const file: File = event.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       console.log(reader.result);
    //       this.unpack(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    //     // this.fileName = file.name;
    //     // const formData = new FormData();
    //     // formData.append("thumbnail", file);
    //     // let fileReader = new FileReader();
    //     // fileReader.onload = (e) => {
    //     //   this.isDownload = true;
    //     // this.detectWallet(fileReader.result);
    //     // }
    //     // fileReader.readAsText(file);
    //   }
    // }
    // async unpack(val: any) {
    //   try {
    //     var log = val.split(',')[1]
    //     var data = { data: log };
    //     let response: any = await this.raida.readbin(data);
    //     if (response.status === "success") {
    //       this.idata = {
    //         sn: response.payload[0].sn,
    //         ans: response.payload[0].ans
    //       }
    //       this.detectWallet(this.idata, "0");
    //     } else {
    //       Swal.fire({
    //         title: "Failed to unpack coin.",
    //         icon: 'error',
    //         confirmButtonText: 'Okay',
    //       }).then((result) => {
    //         if (result.value) { }
    //       });
    //     }
    //   }
    //   catch (e) {
    //     console.log(e);
    //   }
    // }
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
                console.log("detect data:" + data);
                let detection = yield this.raida.detect(data);
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
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.counterfeit) === 0 && ((_d = (_c = this.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.fracked) === 0 && ((_f = (_e = this.payload) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.limbo) === 0) {
                            this.successInfo = true;
                            this.errorInfo = false;
                            this.continue = true;
                            // Swal.fire({
                            //   title: "Pass Key is authentic.",
                            //   icon: 'info',
                            //   confirmButtonText: 'Okay',
                            // }).then((result) => {
                            //   if (result.value) {
                            //   }
                            // });
                            this.successMsg = "Done: Detected Pass Key is healthy!";
                            this.showDownload = false;
                            this.createsky();
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
                            this.router.navigate(["/dashboard/create-skyvault-dash"]);
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
                this.showDownload = true;
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
    doCheck1(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.idata = {
                            sn: this.payload.data['Sn'],
                            ans: this.payload.data['Ans']
                        };
                        this.detectWallet(this.idata, "0");
                        // this.createSky(data);
                        // this.createSky(this.idata?.coins[0]);
                        this.successInfo = true;
                        this.errorInfo = false;
                        this.successMsg = "Done: Pass Key downloaded successfully!";
                    }
                    else {
                        this.showDownload = false;
                        this.errorInfo = true;
                        this.successInfo = false;
                        this.errorMsg = this.payload.data.message;
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck1(taskID, xdata);
                }, 500);
            }
            else {
                this.errorInfo = true;
                this.successInfo = false;
                this.errorMsg = "Call Failed";
            }
        });
    }
    doCheck(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                // console.log("in docheck function:" + taskID)
                // console.log("payload message:" + this.payload.data)
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.getSky();
                        this.showLoading(false);
                        var newArr;
                        newArr = this.allSky;
                        newArr.push({
                            'balance': 0,
                            'contents': [],
                            'denominations': { 1: 0, 5: 0, 25: 0, 100: 0, 250: 0 },
                            'idcoin': {},
                            'name': this.user,
                            'png': "",
                            'statements': null
                        });
                        this.eventService.changeskydata(newArr);
                        this.storage.setItem("wallet", "skywallet", 'createsky');
                        this.router.navigate(["/dashboard/home"]);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Skyvault has been created successfully.',
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    else {
                        this.showLoading(false);
                        this.showDownload = false;
                        this.successInfo = false;
                        this.errorInfo = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            var _a;
                            if (result.value) {
                                {
                                    if (((_a = this.payload.data) === null || _a === void 0 ? void 0 : _a.message) === "This name already has DNS name") {
                                        this.router.navigate(["/dashboard/create-skyvault-dash"]);
                                    }
                                }
                            }
                        });
                        this.router.navigate(['/dashboard/create-skyvault-dash']);
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck(taskID, xdata);
                }, 500);
            }
            else {
                this.errorInfo = true;
                this.successInfo = false;
                this.errorMsg = "Call Failed";
            }
        });
    }
    getSky() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.raida.getAllSky();
                if (response.status == "success") {
                    this.doCheck123((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck123(taskID, xdata) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.eventService.changeskydata((_a = task === null || task === void 0 ? void 0 : task.payload) === null || _a === void 0 ? void 0 : _a.data);
                        localStorage.setItem('userSky', this.user);
                        var findsky = task.payload.data.filter(x => {
                            return x.name == this.user;
                        });
                        console.log("findsky[0].idcoin?.sn" + ((_b = findsky[0].idcoin) === null || _b === void 0 ? void 0 : _b.sn));
                        localStorage.setItem('serial', (_c = findsky[0].idcoin) === null || _c === void 0 ? void 0 : _c.sn);
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck123(taskID, xdata);
                }, 500);
            }
        });
    }
    download() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.errorInfo = false;
                this.successInfo = false;
                let response = yield this.raida.freeCoin();
                if (response.status == 'success') {
                    this.showDownload = true;
                    this.doCheck1((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                        this.successInfo = true;
                        this.successMsg = "Done " + JSON.stringify(data);
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    add(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            name = this.addressForm.get('username').value + '.skyvault.cc';
            localStorage.setItem('userSky', name);
            this.download();
        });
    }
    createsky() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = localStorage.getItem('userSky');
            try {
                let data = {
                    name: this.user,
                    type: "card",
                    coin: this.idata
                };
                let wallet = yield this.raida.createSky(data);
                if (wallet.status == 'success') {
                    this.showLoader1 = true;
                    this.loadingMessage = "Creating SkyVault...";
                    this.errorInfo = false;
                    this.successInfo = false;
                    this.doCheck((_a = wallet.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                        this.successInfo = true;
                        this.successMsg = "Done " + JSON.stringify(data);
                    });
                }
                else {
                    this.errorInfo = true;
                    this.successInfo = false;
                    this.errorMsg = "Error!! " + wallet.payload.message;
                }
            }
            catch (e) {
                this.errorInfo = true;
                this.errorMsg = "Create Wallet Failed";
            }
        });
    }
}
CreateAddDashComponent.ɵfac = function CreateAddDashComponent_Factory(t) { return new (t || CreateAddDashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
CreateAddDashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateAddDashComponent, selectors: [["app-create-add-dash"]], decls: 40, vars: 9, consts: [[1, "gap30"], [1, "transWrapper"], [1, "headerbackWrap", "border-0"], ["href", "javascript:;", "routerLink", "/dashboard/create-skyvault-dash", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "gap20"], [1, "gap10"], [1, "transBody"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "titleOne"], [1, "titleTwo", 2, "opacity", "0.8"], [1, "skyAddressFieldWrap"], [3, "formGroup"], [1, "formField"], ["for", "username"], ["type", "text", "placeholder", "Ex: Main", "name", "username", "id", "username", "formControlName", "username", 1, "form-control", 2, "width", "300px"], [1, "darkText"], [4, "ngIf"], ["class", "errorMsg", 4, "ngIf"], ["class", "successMsg", 4, "ngIf"], ["class", "progressWrap", 4, "ngIf"], [1, "col-md-4"], ["src", "assets/rocket-black-white.png", "alt", "rocket image", 1, "stepperMainImg"], [1, "transBottomFooter"], [1, "bottomPartSubmit"], [1, "infoText"], ["src", "assets/info_circle.svg", "alt", ""], [1, "bottomFooter"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "ngClass", "click"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], [1, "successMsg"], ["src", "assets/success_icon.svg", "alt", "success icon"], [1, "progressWrap"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "background-color", "green!important", 3, "ngStyle"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function CreateAddDashComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Create an address for your SkyVault");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Using a SkyVault address helps other users of SkyVault to transfer CC to you instantly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "SkyVault Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, ".skyvault.cc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CreateAddDashComponent_div_23_Template, 6, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CreateAddDashComponent_span_24_Template, 3, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CreateAddDashComponent_span_25_Template, 3, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CreateAddDashComponent_div_26_Template, 4, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "You can log on to multiple devices using your SkyVault address & its unique Pass Key. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateAddDashComponent_Template_button_click_37_listener() { return ctx.add("username"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Create a SkyVault");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, CreateAddDashComponent_div_39_Template, 6, 2, "div", 31);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addressForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isValidInput("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDownload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, !ctx.addressForm.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], ngx_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieComponent"]], styles: [".authWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 250px;\n  background-color: transparent !important;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n}\n\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff !important;\n  line-height: 15px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXRlLWFkZC1kYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFJSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQ0FBQTtBQUZSOztBQUlJO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGUiIsImZpbGUiOiJjcmVhdGUtYWRkLWRhc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmF1dGhXcmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2t5QWRkcmVzc0ZpZWxkV3JhcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZm9ybUZpZWxkIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTgsIDEyMiwgMjQ0LCAwLjQ4KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xyXG4gICAgfVxyXG4gICAgLmRvbWFpbk5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateAddDashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-add-dash',
                templateUrl: './create-add-dash.component.html',
                styleUrls: ['./create-add-dash.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "xrjN":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/create-add-dash/create-add-dash-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateAddDashRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAddDashRoutingModule", function() { return CreateAddDashRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _create_add_dash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-add-dash.component */ "hk+6");





const routes = [
    {
        path: '',
        component: _create_add_dash_component__WEBPACK_IMPORTED_MODULE_2__["CreateAddDashComponent"]
    }
];
class CreateAddDashRoutingModule {
}
CreateAddDashRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateAddDashRoutingModule });
CreateAddDashRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateAddDashRoutingModule_Factory(t) { return new (t || CreateAddDashRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateAddDashRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateAddDashRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=create-add-dash-create-add-dash-module.js.map