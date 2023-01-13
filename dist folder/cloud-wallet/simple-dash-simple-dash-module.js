(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simple-dash-simple-dash-module"],{

/***/ "Of1o":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/simple-dash/simple-dash.component.ts ***!
  \********************************************************************************/
/*! exports provided: SimpleDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDashComponent", function() { return SimpleDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_auth_create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/create-localwallet/setup-mail-psw/custom-validators */ "lkAQ");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");








function SimpleDashComponent_div_38_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SimpleDashComponent_div_38_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email name is reqiured.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SimpleDashComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleDashComponent_div_38_span_1_Template, 3, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleDashComponent_div_38_span_2_Template, 3, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.setPassForm.controls["email"].hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.setPassForm.controls["email"].hasError("required"));
} }
function SimpleDashComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Low ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SimpleDashComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Medium ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SimpleDashComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Strong ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
const _c1 = function (a0) { return { "btnDisable": a0 }; };
class SimpleDashComponent {
    constructor(eventService, router, fb) {
        this.eventService = eventService;
        this.router = router;
        this.fb = fb;
        this.isShow = true;
        this.isCheck = false;
        this.isSelect = false;
        this.isLow = false;
        this.isMedium = false;
        this.isStrong = false;
        this.selectedData = null;
        this.username = 'USERNAME';
        this.agreed1 = false;
        this.agreed2 = true;
        this.registerTapped = false;
        this.complete = false;
        this.errorMessage = null;
        this.registerParams = null;
        this.completeMessage = null;
        this.cardImage = null;
        this.cardImageBlank = null;
        this.progressMessage = null;
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_login.json'
        };
        this.errorOptions = {
            path: 'https://raida11.cloudcoin.global/animation/error.json'
        };
        this.showLoader = false;
        this.showNormal = true;
        this.showError = false;
        this.buttonText = 'Select CC';
        this.freeCoin = true;
        this.uniqueString = null;
        this.setPassForm = this.fb.group({
            password: [null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    src_app_auth_create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/[A-Z]/, {
                        hasCapitalCase: true
                    }),
                    src_app_auth_create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
                        hasSpecialCharacters: true
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)
                ])
            ],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
        });
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
        if (localStorage.getItem('userDetails')) {
            let user = JSON.parse(localStorage.getItem('userDetails'));
            if (user.hostname) {
                this.username = user.hostname;
                this.walletName = user.hostname;
            }
        }
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
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.user = localStorage.getItem('userSky');
    }
    setNewvalues(e) {
        let z = this.setPassForm.get('password').value;
        if ((/[A-Z]/.test(z) && (z === null || z === void 0 ? void 0 : z.length) >= 8) || ((z === null || z === void 0 ? void 0 : z.length) > 8 && /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(z)) || (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(z) && /[A-Z]/.test(z))) {
            this.isMedium = true;
        }
        else {
            this.isMedium = false;
        }
    }
    getStatus(e) {
        this.isSelect = e.target.checked;
        if (this.isSelect == false) {
            this.setPassForm.controls['email'].disable();
            this.setPassForm.controls['email'].patchValue('');
        }
        else {
            this.setPassForm.controls['email'].enable();
        }
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    isValidInput(value) {
        return this.setPassForm.controls[value].invalid &&
            (this.setPassForm.controls[value].dirty || this.setPassForm.controls[value].touched);
    }
    save() {
        localStorage.setItem('emailSky', this.setPassForm.controls.email.value);
        localStorage.setItem('passSky', this.setPassForm.controls.password.value);
        localStorage.setItem('setupType', 'simple');
    }
}
SimpleDashComponent.ɵfac = function SimpleDashComponent_Factory(t) { return new (t || SimpleDashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SimpleDashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleDashComponent, selectors: [["app-simple-dash"]], decls: 62, vars: 19, consts: [[1, "gap30"], [1, "transWrapper"], [1, "headerbackWrap", "border-0"], ["href", "javascript:;", "routerLink", "/dashboard/create-skyvault-dash/security-setup", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "gap20"], [1, "gap10"], [1, "transBody"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "setupTag"], [1, "titleOne"], [2, "color", "#0884FF"], [1, "titleTwo", 2, "opacity", "0.8"], [3, "formGroup"], [1, "skyAddressFieldWrap"], [1, "formField", "passwordSetWrap"], [1, "passwordSetLeft"], ["for", "setupRecoveryPsw"], [1, "passwordWithIcon"], ["formControlName", "password", "placeholder", "Enter a strong password", "name", "password", 1, "greyInpField", 3, "type", "input"], [1, "fa", "eyeIcon", "text-white", "mt-1", 3, "ngClass", "click"], [1, "custom-control", "custom-switch", "position-relative", "d-flex", "align-items-center"], [1, "check_box"], ["type", "checkbox", "id", "setupRecovery", "type", "checkbox", "data-toggle", "toggle", 1, "custom-control-input", 3, "change"], ["for", "setupRecovery", 1, "custom-control-label"], ["data-toggle", "tooltip", "data-placement", "top", "ngbTooltip", "This will allow you to recover your password in case you forgot it", "src", "assets/info.svg", "alt", "", "data-toggle", "popover", "data-content", "And here's some amazing content. It's very engaging. Right?", 1, "infoicon", "mb-1"], ["type", "text", "formControlName", "email", "placeholder", "Ex: john.doe@example.com", "name", "email", 1, "greyInpField"], [4, "ngIf"], [1, "passwordStatusWrap"], ["style", "color:#FF443C", 4, "ngIf"], ["style", "color:#FF6100", 4, "ngIf"], ["style", "color:#39D02B", 4, "ngIf"], [1, "pswStatusTxt"], [3, "ngClass"], [1, "col-md-4"], ["src", "assets/simple-setup-black-white.png", "alt", "rocket image", 1, "stepperMainImg"], [1, "transBottomFooter"], [1, "bottomPartSubmit"], [1, "bottomFooter"], ["href", "javascript:;", "routerLink", "/dashboard/create-skyvault-dash/upload-cc", 1, "btnCustomBlue", "btnLarge", "btnDisable", 3, "ngClass", "disabled", "click"], ["class", "errorMsg", 4, "ngIf"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], [2, "color", "#FF443C"], [2, "color", "#FF6100"], [2, "color", "#39D02B"]], template: function SimpleDashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Simple Setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Set up password & recovery for: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add an extra layer of security to your SkyVault by setting up a strong password and enabling recovery email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SimpleDashComponent_Template_input_input_27_listener($event) { return ctx.setNewvalues($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleDashComponent_Template_button_click_28_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SimpleDashComponent_Template_input_change_32_listener($event) { return ctx.getStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Set up recovery email. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SimpleDashComponent_div_38_Template, 3, 2, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Strength: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SimpleDashComponent_span_42_Template, 2, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SimpleDashComponent_span_43_Template, 2, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SimpleDashComponent_span_44_Template, 2, 0, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " At least 8 characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " At least 1 capital letter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " At least 1 special character ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleDashComponent_Template_button_click_60_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user, ".skyvault.cc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.setPassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", "disabled" ? "isSelect==false" : undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValidInput("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setPassForm.controls["password"].hasError("minlength") && ctx.setPassForm.controls["password"].hasError("hasCapitalCase") || ctx.setPassForm.controls["password"].hasError("hasCapitalCase") && ctx.setPassForm.controls["password"].hasError("hasSpecialCharacters") || ctx.setPassForm.controls["password"].hasError("hasSpecialCharacters") && ctx.setPassForm.controls["password"].hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMedium && ctx.setPassForm.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setPassForm.controls.password.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setPassForm.controls["password"].hasError("required") || ctx.setPassForm.controls["password"].hasError("minlength") ? "fa fa-close text-danger" : "fa fa-check text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setPassForm.controls["password"].hasError("required") || ctx.setPassForm.controls["password"].hasError("hasCapitalCase") ? "fa fa-close text-danger" : " text-success fa fa-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setPassForm.controls["password"].hasError("required") || ctx.setPassForm.controls["password"].hasError("hasSpecialCharacters") ? "fa fa-close text-danger" : "fa fa-check text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.setPassForm.controls.password.invalid || ctx.setPassForm.controls.email.invalid && ctx.isSelect))("disabled", ctx.setPassForm.controls.password.invalid || ctx.setPassForm.controls.email.invalid && ctx.isSelect);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".passwordStatusWrap[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 20px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FF443C;\n  font-weight: 400;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   .pswStatusTxt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 10px;\n  display: block;\n  line-height: 16px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   .pswStatusTxt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  position: relative;\n  top: -1px;\n  width: 13px;\n  height: 10px;\n  object-fit: contain;\n}\n.skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.passwordSetWrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 320px;\n  background-color: transparent !important;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  vertical-align: top;\n}\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff !important;\n  line-height: 15px;\n  margin-left: 5px;\n}\ninput[_ngcontent-%COMP%] {\n  height: auto;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2ltcGxlLWRhc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR1o7QUFBSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFRQTtFQUNJLGdCQUFBO0FBTEo7QUFPQTtFQUNJLGFBQUE7QUFKSjtBQU9JO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUVBLDJDQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU9JO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFMSiIsImZpbGUiOiJzaW1wbGUtZGFzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZFN0YXR1c1dyYXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGNDQzQztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIC5wc3dTdGF0dXNUeHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5wYXNzd29yZFNldFdyYXAge1xyXG4gICAgLmdyZXlJbnBGaWVsZCB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJDMkMyQyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5za3lBZGRyZXNzRmllbGRXcmFwIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnBhc3N3b3JkU2V0V3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5mb3JtRmllbGQge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgcmdiYSgxOCwgMTIyLCAyNDQsIDAuNDgpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIC5kb21haW5OYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuaW5wdXR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleDashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple-dash',
                templateUrl: './simple-dash.component.html',
                styleUrls: ['./simple-dash.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "Zmm9":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/simple-dash/simple-dash.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SimpleDashModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDashModule", function() { return SimpleDashModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _simple_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-dash-routing.module */ "ZwLb");
/* harmony import */ var _simple_dash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-dash.component */ "Of1o");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");






class SimpleDashModule {
}
SimpleDashModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SimpleDashModule });
SimpleDashModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SimpleDashModule_Factory(t) { return new (t || SimpleDashModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _simple_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["SimpleDashRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimpleDashModule, { declarations: [_simple_dash_component__WEBPACK_IMPORTED_MODULE_3__["SimpleDashComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _simple_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["SimpleDashRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleDashModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_simple_dash_component__WEBPACK_IMPORTED_MODULE_3__["SimpleDashComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _simple_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["SimpleDashRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZwLb":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/simple-dash/simple-dash-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SimpleDashRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDashRoutingModule", function() { return SimpleDashRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _simple_dash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-dash.component */ "Of1o");





const routes = [
    {
        path: '',
        component: _simple_dash_component__WEBPACK_IMPORTED_MODULE_2__["SimpleDashComponent"]
    }
];
class SimpleDashRoutingModule {
}
SimpleDashRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SimpleDashRoutingModule });
SimpleDashRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SimpleDashRoutingModule_Factory(t) { return new (t || SimpleDashRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimpleDashRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleDashRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=simple-dash-simple-dash-module.js.map