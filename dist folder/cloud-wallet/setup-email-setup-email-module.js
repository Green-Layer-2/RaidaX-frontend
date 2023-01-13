(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setup-email-setup-email-module"],{

/***/ "4bp0":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/create-localwallet-dash/setup-email/setup-email.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SetupEmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupEmailModule", function() { return SetupEmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _setup_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup-email.component */ "Quq7");
/* harmony import */ var _setup_email_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup-email-routing.module */ "CfJT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");






class SetupEmailModule {
}
SetupEmailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SetupEmailModule });
SetupEmailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SetupEmailModule_Factory(t) { return new (t || SetupEmailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _setup_email_routing_module__WEBPACK_IMPORTED_MODULE_3__["SetupEmailRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SetupEmailModule, { declarations: [_setup_email_component__WEBPACK_IMPORTED_MODULE_2__["SetupEmailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _setup_email_routing_module__WEBPACK_IMPORTED_MODULE_3__["SetupEmailRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupEmailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_setup_email_component__WEBPACK_IMPORTED_MODULE_2__["SetupEmailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _setup_email_routing_module__WEBPACK_IMPORTED_MODULE_3__["SetupEmailRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "CfJT":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/create-localwallet-dash/setup-email/setup-email-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SetupEmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupEmailRoutingModule", function() { return SetupEmailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _setup_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup-email.component */ "Quq7");





const routes = [
    {
        path: '',
        component: _setup_email_component__WEBPACK_IMPORTED_MODULE_2__["SetupEmailComponent"]
    }
];
class SetupEmailRoutingModule {
}
SetupEmailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SetupEmailRoutingModule });
SetupEmailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SetupEmailRoutingModule_Factory(t) { return new (t || SetupEmailRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SetupEmailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupEmailRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Quq7":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/create-localwallet-dash/setup-email/setup-email.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SetupEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupEmailComponent", function() { return SetupEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_auth_create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/create-localwallet/setup-mail-psw/custom-validators */ "lkAQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");









function SetupEmailComponent_div_9_div_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid Format");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupEmailComponent_div_9_div_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Email name is reqiured.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupEmailComponent_div_9_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SetupEmailComponent_div_9_div_20_span_1_Template, 3, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SetupEmailComponent_div_9_div_20_span_2_Template, 3, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.setupForm.controls["email"].hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.setupForm.controls["email"].hasError("required"));
} }
const _c0 = function (a0) { return { "btnDisable": a0 }; };
function SetupEmailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Set up password & recovery email for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add an extra layer of security to your Wallet by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " enabling recovery email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SetupEmailComponent_div_9_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.getStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Set up recovery email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SetupEmailComponent_div_9_div_20_Template, 3, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupEmailComponent_div_9_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupEmailComponent_div_9_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.setupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", "disabled" ? "isSelect==false" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r0.setupForm.controls.password.invalid && ctx_r0.isCheck || ctx_r0.setupForm.controls.email.invalid && ctx_r0.isSelect))("disabled", ctx_r0.setupForm.controls.password.invalid && ctx_r0.isCheck || ctx_r0.setupForm.controls.email.invalid && ctx_r0.isSelect);
} }
function SetupEmailComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMsg, " ");
} }
class SetupEmailComponent {
    constructor(fb, router, raida) {
        this.fb = fb;
        this.router = router;
        this.raida = raida;
        this.isCheck = false;
        this.isSelect = false;
        this.isLow = false;
        this.isMedium = false;
        this.isStrong = false;
        this.successInfo = true;
        this.setupForm = this.fb.group({
            password: [null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    src_app_auth_create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].patternValidator(/[A-Z]/, {
                        hasCapitalCase: true
                    }),
                    src_app_auth_create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
                        hasSpecialCharacters: true
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                ])
            ],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
        });
        this.user = localStorage.getItem('userLocal');
    }
    ngOnInit() {
    }
    setNewvalues(e) {
        let z = this.setupForm.get('password').value;
        if ((/[A-Z]/.test(z) && z.length >= 8) || (z.length > 8 && /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(z)) || (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(z) && /[A-Z]/.test(z))) {
            this.isMedium = true;
            this.isLow = false;
            this.isStrong = false;
        }
        else {
            this.isMedium = false;
            this.isLow = false;
            this.isStrong = false;
        }
    }
    isValidInput(value) {
        return this.setupForm.controls[value].invalid &&
            (this.setupForm.controls[value].dirty || this.setupForm.controls[value].touched);
    }
    getStats(e) {
        this.isCheck = e.target.checked;
        if (this.isCheck == false) {
            this.setupForm.controls['password'].disable();
            this.setupForm.controls['password'].patchValue('');
        }
        else {
            this.setupForm.controls['password'].enable();
        }
    }
    getStatus(e) {
        this.isSelect = e.target.checked;
        if (this.isSelect == false) {
            this.setupForm.controls['email'].disable();
            this.setupForm.controls['email'].patchValue('');
        }
        else {
            this.setupForm.controls['email'].enable();
        }
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let idata = {
                    name: this.user,
                    email: this.setupForm.controls.email.value
                };
                let wallet = yield this.raida.addWallet(idata);
                if (wallet.status == 'success') {
                    this.successInfo = true;
                    this.errorInfo = false;
                    this.router.navigate(['/dashboard/create-localwallet-dash/upload-cc']);
                }
                else {
                    this.errorInfo = true;
                    this.successInfo = false;
                    this.errorMsg = "Error!! " + wallet.payload.message;
                    // this.router.navigate(['/localwallet/localstep-completed']);
                }
            }
            catch (e) {
                this.errorInfo = true;
                this.errorMsg = "Create Wallet Failed";
            }
            localStorage.setItem('emailAdd', this.setupForm.controls.email.value);
            localStorage.setItem('passLocal', this.setupForm.controls.password.value);
        });
    }
}
SetupEmailComponent.ɵfac = function SetupEmailComponent_Factory(t) { return new (t || SetupEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
SetupEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetupEmailComponent, selectors: [["app-setup-email"]], decls: 19, vars: 2, consts: [[1, "gap10"], [1, "gap20"], [1, "transWrapper"], [1, "headerbackWrap", "border-0"], ["href", "javascript:;", "routerLink", "/dashboard/create-localwallet-dash", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "transBody"], [1, "container"], [1, "row"], ["class", "col-md-7", 4, "ngIf"], ["class", "errorMsg col-md-7", 4, "ngIf"], [1, "col-md-5"], ["src", "assets/localwallet-security-setup-black-white.png", "alt", "localwallet image", 1, "stepperMainImg"], [1, "transBottomFooter"], [1, "bottomPartSubmit", 2, "border-top", "2px solid rgba(255, 255, 255, 0.26)", "padding-top", "20px", "padding-bottom", "10px"], [1, "infoText"], ["src", "assets/info_circle.svg", "alt", ""], [1, "col-md-7"], [1, "titleOne"], [2, "color", "#0884FF"], [1, "titleTwo", 2, "opacity", "0.8"], [3, "formGroup"], [1, "skyAddressFieldWrap"], [1, "formField", "passwordSetWrap"], [1, "passwordSetLeft"], [1, "custom-control", "custom-switch", "position-relative", "d-flex", "align-items-center"], [1, "check_box"], ["type", "checkbox", "id", "setupRecovery", "type", "checkbox", "data-toggle", "toggle", 1, "custom-control-input", 3, "change"], ["for", "setupRecovery", 1, "custom-control-label"], ["data-toggle", "tooltip", "data-placement", "top", "ngbTooltip", "This will allow you to recover your password in case you forgot it", "src", "assets/info.svg", "alt", "", "data-toggle", "popover", "data-content", "And here's some amazing content. It's very engaging. Right?", 1, "infoicon", "mb-1"], ["type", "text", "formControlName", "email", "placeholder", "Ex: john.doe@example.com", "name", "email", 1, "greyInpField", 2, "width", "300px"], [4, "ngIf"], [1, "locSetupMailBtnWrap"], ["href", "javascript:;", 1, "btnCustomWhite", 3, "click"], ["href", "javascript:;", 1, "btnCustomBlue", 3, "ngClass", "disabled", "click"], ["class", "errorMsg", 4, "ngIf"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], [1, "errorMsg", "col-md-7"]], template: function SetupEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SetupEmailComponent_div_9_Template, 26, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetupEmailComponent_div_10_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "You can access your Wallet from your computer only. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorInfo);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".passwordStatusWrap[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 20px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FF443C;\n  font-weight: 400;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   .pswStatusTxt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 10px;\n  display: block;\n  line-height: 16px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   .pswStatusTxt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  position: relative;\n  top: -1px;\n  width: 13px;\n  height: 10px;\n  object-fit: contain;\n}\ninput[_ngcontent-%COMP%] {\n  height: auto;\n}\n.skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.passwordSetWrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 320px;\n  border-radius: 4px;\n  vertical-align: top;\n}\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff !important;\n  line-height: 15px;\n  margin-left: 5px;\n}\n.locSetupMailBtnWrap[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.locSetupMailBtnWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.locSetupMailBtnWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2V0dXAtZW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR1o7QUFBSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQU9BO0VBQ0ksZ0JBQUE7QUFKSjtBQU1BO0VBQ0ksYUFBQTtBQUhKO0FBTUk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FBSlI7QUFNSTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFRQTtFQUNJLGdCQUFBO0FBTEo7QUFNSTtFQUNJLGtCQUFBO0FBSlI7QUFLUTtFQUNJLGVBQUE7QUFIWiIsImZpbGUiOiJzZXR1cC1lbWFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZFN0YXR1c1dyYXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGNDQzQztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIC5wc3dTdGF0dXNUeHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuaW5wdXR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wYXNzd29yZFNldFdyYXAge1xyXG4gICAgLmdyZXlJbnBGaWVsZCB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJDMkMyQyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5za3lBZGRyZXNzRmllbGRXcmFwIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnBhc3N3b3JkU2V0V3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5mb3JtRmllbGQge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTgsIDEyMiwgMjQ0LCAwLjQ4KTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmRvbWFpbk5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxvY1NldHVwTWFpbEJ0bldyYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SetupEmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-setup-email',
                templateUrl: './setup-email.component.html',
                styleUrls: ['./setup-email.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=setup-email-setup-email-module.js.map