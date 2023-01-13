(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-dash-security-dash-module"],{

/***/ "cXhz":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/security-dash/security-dash.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SecurityDashModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityDashModule", function() { return SecurityDashModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _security_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security-dash-routing.module */ "y9Nr");
/* harmony import */ var _security_dash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-dash.component */ "v0jK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");







class SecurityDashModule {
}
SecurityDashModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SecurityDashModule });
SecurityDashModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SecurityDashModule_Factory(t) { return new (t || SecurityDashModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _security_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecurityDashRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecurityDashModule, { declarations: [_security_dash_component__WEBPACK_IMPORTED_MODULE_3__["SecurityDashComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _security_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecurityDashRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityDashModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_security_dash_component__WEBPACK_IMPORTED_MODULE_3__["SecurityDashComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _security_dash_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecurityDashRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "v0jK":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/security-dash/security-dash.component.ts ***!
  \************************************************************************************/
/*! exports provided: SecurityDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityDashComponent", function() { return SecurityDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_auth_create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/create-localwallet/setup-mail-psw/custom-validators */ "lkAQ");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");








function SecurityDashComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Low ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SecurityDashComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Medium ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SecurityDashComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Strong ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
const _c2 = function (a0) { return { "btnDisable": a0 }; };
class SecurityDashComponent {
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
        this.getPicture();
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
    getPicture() {
        var Place = ['pyramid', 'river', 'mountain', 'eiffel-tower', 'statue-of-liberty', 'hills', 'desert', 'sea', 'jungle', 'skyscraper', 'park', 'pond', 'sewer', 'dump', 'zoo', 'theater', 'bathroom', 'cave', 'palace', 'carnival', 'party', 'casino', 'post-office', 'castle', 'museum', 'forest', 'well', 'dog-house', 'backyard', 'airport', 'football-field', 'gymnasium'];
        var Event = ['explosion', 'solar-eclipse', 'meteor-shower', 'blizzard', 'wind', 'hurricane', 'landslide', 'heart-attack', 'fire', 'war', 'tornado', 'tsunami', 'heat-wave', 'plague', 'holiday', 'alien-encounter', 'famine', 'infestation', 'time-warp', 'stench', 'ship-wreck', 'oil-spill', 'stock-rally', 'implosion', 'disappearance', 'revolution', 'ice-age', 'mud-slide', 'flood', 'lighting-strike', 'animal-attack', 'drought'];
        var Thing = ['bottle', 'rabbit', 'skull', 'watermellon', 'doll-house', 'flag', 'toy', 'pot', 'wallet', 'camera', 'cell-phone', 'glasses', 'pen', 'flashlight', 'neckware', 'gold-nugget', 'brick', 'briefcase', 'picture', 'statue', 'necklace', 'chicken-dinner', 'lost-man', 'blindfolded-man', 'snake', 'hat', 'book', 'wand', 'fairy', 'tuba', 'lantern', 'ring', 'carrot', 'flute'];
        var Character = ['minotaur', 'doctor', 'athlete', 'businessman', 'nerd', 'gangster', 'hippy', 'punk', 'princess', 'dentist', 'cyclops', 'dragon', 'unicorn', 'bigfoot', 'viking', 'witch', 'robot', 'cheerleader', 'farmer', 'clown', 'soldier', 'pirate', 'scientist', 'professor', 'king', 'giant', 'troll', 'mermaid', 'dinosaur', 'gnome', 'vampire', 'magician'];
        var Verb1 = ['swimming', 'running', 'walking', 'eating', 'hunting', 'fishing', 'shopping', 'reading', 'drawing', 'laughing', 'launching', 'cooking', 'digging', 'thinking', 'painting', 'sitting', 'dressing', 'bowling', 'spying', 'sking', 'waving', 'playing', 'gardening', 'sunbathing', 'drinking', 'gambling', 'smoking', 'flying', 'playing-baseball', 'showering', 'talking', 'playing-guitar'];
        var verb2 = ['kicked', 'spit-on', 'looked-at', 'touched', 'rubbed', 'sat-on', 'trashed', 'hugged', 'kissed', 'lifted', 'rolled', 'sold', 'dropped', 'broke', 'poked', 'buried', 'wrote-on', 'pocketed', 'washed', 'gifted', 'stolen', 'displayed', 'pushed', 'pulled', 'smelled', 'measured', 'listened', 'directed', 'studied', 'turned', 'licked', 'punched', 'blindfolded'];
        var bgColor = ['#CC0000', '#FF4500', '#FFD700', '#808000', '#ADFF2F', '#2F4F4F', '#008088', '#00BFFF', '#191970', '#0000CD', '#8A2BE2', '#8B008B', '#FF1493', '#FFE4C4', '#D2691E', '#BC8F8F', '#FFF0F5', '#708090', '#778899', '#000000', '#008000', '#00CED1', '#1E90FF', '#87CEFA', '#4B0082', '#800080', '#FF00FF', '#F5DEB3', '#A0522D', '#696969', '#CD853F', '#8B0000'
        ];
        var randomNumP = Math.floor(Math.random() * Place.length);
        var randomNumE = Math.floor(Math.random() * Event.length);
        var randomNumC = Math.floor(Math.random() * Character.length);
        var randomNumV1 = Math.floor(Math.random() * Verb1.length);
        var randomNumV2 = Math.floor(Math.random() * verb2.length);
        var randomNumT = Math.floor(Math.random() * Thing.length);
        this.randomChar = Character[randomNumC];
        this.randomPlace = Place[randomNumP];
        this.randomEvent = Event[randomNumE];
        this.randomThing = Thing[randomNumT];
        this.randomV1 = Verb1[randomNumV1];
        this.randomV2 = verb2[randomNumV2];
        this.randombgcolorC = bgColor[randomNumC];
        this.randombgcolorP = bgColor[randomNumP];
        this.randombgcolorE = bgColor[randomNumE];
        this.randombgcolorT = bgColor[randomNumT];
        this.randombgcolorV1 = bgColor[randomNumV1];
        this.randombgcolorV2 = bgColor[randomNumV2];
        this.randomUrlChar = 'assets/icons/Character/' + this.randomChar + ".png";
        this.randomUrlEvent = 'assets/icons/Event/' + this.randomEvent + ".png";
        this.randomUrlPlace = 'assets/icons/Place/' + this.randomPlace + ".png";
        this.randomUrlThing = 'assets/icons/Thing/' + this.randomThing + ".png";
        this.randomUrlVerb_01 = 'assets/icons/Verb_01/' + this.randomV1 + ".png";
        this.randomUrlVerb_02 = 'assets/icons/Verb_02/' + this.randomV2 + ".png";
    }
    isValidInput(value) {
        return this.setPassForm.controls[value].invalid &&
            (this.setPassForm.controls[value].dirty || this.setPassForm.controls[value].touched);
    }
    save() {
        localStorage.setItem('emailSky', this.setPassForm.controls.email.value);
        localStorage.setItem('passSky', this.setPassForm.controls.password.value);
        this.router.navigate(['dashboard/create-skyvault-dash/upload-cc']);
    }
}
SecurityDashComponent.ɵfac = function SecurityDashComponent_Factory(t) { return new (t || SecurityDashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SecurityDashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecurityDashComponent, selectors: [["app-security-dash"]], decls: 108, vars: 84, consts: [[1, "gap20"], [1, "transWrapper"], [1, "headerbackWrap", "border-0"], ["href", "javascript:;", "routerLink", "/dashboard/create-skyvault-dash", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "gap10"], [1, "transBody"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "titleOne"], [2, "color", "#0884FF"], [3, "formGroup"], [1, "skyAddressFieldWrap"], [1, "formField", "passwordSetWrap"], [1, "passwordSetLeft"], ["for", "setupRecoveryPsw"], [1, "passwordWithIcon"], ["formControlName", "password", "placeholder", "Enter a strong password", "name", "password", 1, "", 3, "type", "input"], [1, "fa", "eyeIcon", "text-white", "mt-1", 3, "ngClass", "click"], [1, "passwordStatusWrap"], ["style", "color:#FF443C", 4, "ngIf"], ["style", "color:#FF6100", 4, "ngIf"], ["style", "color:#39D02B", 4, "ngIf"], [1, "pswStatusTxt"], [3, "ngClass"], [1, "formField", "passwordWithIcon"], [1, "pt-1", "pb-1", 2, "opacity", "0.7", "font-size", "15px"], [1, "picturePswWrap"], [1, "row", "row5"], [1, "col-2"], [1, "picturePswImgWrap", "picturePswImg", 3, "ngStyle"], [1, "picturePswImg", 3, "src"], [1, "charNameWrap"], [1, "", 3, "title"], [1, "picturePswImgWrap", 3, "ngStyle"], [1, "col-md-4"], ["src", "assets/setup-sec-img-black-white.png", "alt", "setup image", 1, "stepperMainImg"], [1, "transBottomFooter"], [1, "bottomPartSubmit"], [1, "infoText"], ["src", "assets/info_circle.svg", "alt", ""], [1, "bottomFooter"], ["href", "javascript:;", "routerLink", "/dashboard/create-skyvault-dash/upload-cc", 1, "btnCustomBlue", "btnLarge", "btnDisable", 3, "ngClass", "disabled", "click"], [2, "color", "#FF443C"], [2, "color", "#FF6100"], [2, "color", "#39D02B"]], template: function SecurityDashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Security setup for: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SecurityDashComponent_Template_input_input_22_listener($event) { return ctx.setNewvalues($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecurityDashComponent_Template_button_click_23_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Strength: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SecurityDashComponent_span_27_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SecurityDashComponent_span_28_Template, 2, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SecurityDashComponent_span_29_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " At least 8 characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " At least 1 capital letter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " At least 1 special character ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Picture Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "You can log on to multiple devices using your SkyVault address & its unique password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecurityDashComponent_Template_button_click_106_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.setPassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](67, _c0, !ctx.fieldTextType, ctx.fieldTextType));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate7"]("A ", ctx.randomChar, " was ", ctx.randomV1, " near ", ctx.randomPlace, " where they found a ", ctx.randomThing, ". When the ", ctx.randomThing, " was ", ctx.randomV2, ", there was ", ctx.randomEvent, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c1, ctx.randombgcolorC));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlChar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 43, ctx.randomChar));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 45, ctx.randomChar));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](72, _c1, ctx.randombgcolorV1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlVerb_01, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 47, ctx.randomV1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 49, ctx.randomV1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](74, _c1, ctx.randombgcolorP));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlPlace, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 51, ctx.randomPlace));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 53, ctx.randomPlace));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](76, _c1, ctx.randombgcolorT));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlThing, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 55, ctx.randomThing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 57, ctx.randomThing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](78, _c1, ctx.randombgcolorV2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlVerb_02, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 59, ctx.randomV2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 61, ctx.randomV2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](80, _c1, ctx.randombgcolorE));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlEvent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 63, ctx.randomEvent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](95, 65, ctx.randomEvent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](82, _c2, ctx.setPassForm.controls.password.invalid || ctx.setPassForm.controls.email.invalid && ctx.isSelect))("disabled", ctx.setPassForm.controls.password.invalid || ctx.setPassForm.controls.email.invalid && ctx.isSelect);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]], styles: [".setupLink[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #fff;\n  border-radius: 10px;\n  display: block;\n  border: 1px solid #ddd;\n  color: #000;\n  transition: all 0.2s ease;\n  margin-bottom: 20px;\n  position: relative;\n  padding-right: 40px;\n}\n.setupLink[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 15px 3px rgba(43, 154, 255, 0.15);\n  border: 1px solid #2b9aff;\n}\n.setupLink[_ngcontent-%COMP%]:hover   .caretRight[_ngcontent-%COMP%] {\n  right: 20px;\n}\n.setupLink[_ngcontent-%COMP%]   .bigLink[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 20px;\n  margin-bottom: 10px;\n  display: block;\n}\n.setupLink[_ngcontent-%COMP%]   .smallLink[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 22px;\n  display: block;\n  margin-bottom: 7px;\n}\n.setupLink[_ngcontent-%COMP%]   .smallLinkGrey[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  display: block;\n  opacity: 0.6;\n}\n.setupLink[_ngcontent-%COMP%]   .caretRight[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 25px;\n  top: calc(50% - 7px);\n  transition: all 0.2s;\n}\n.setUpiconWrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.setUpiconWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.setUpiconWrap[_ngcontent-%COMP%]   .bigLink[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n}\n.backlinkBtnSec[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  transition: all 0.2s ease;\n}\n.backlinkBtnSec[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 5px 10px rgba(189, 80, 13, 0.3);\n}\n.authWrapperSecSetup[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media screen and (max-width: 576px) {\n  .authWrapperSecSetup[_ngcontent-%COMP%] {\n    background: #f17222;\n    padding-top: 80px;\n  }\n}\n.authWrapperSecSetup[_ngcontent-%COMP%]   .authHolder[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 20px;\n  width: 1000px;\n  max-width: 90%;\n  display: flex;\n  min-height: 80vh;\n}\n.passwordStatusWrap[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 20px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FF443C;\n  font-weight: 400;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   .pswStatusTxt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 10px;\n  display: block;\n  line-height: 16px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   .pswStatusTxt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  position: relative;\n  top: -1px;\n  width: 13px;\n  height: 10px;\n  object-fit: contain;\n}\n.skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.passwordSetWrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 320px;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  vertical-align: top;\n}\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff !important;\n  line-height: 15px;\n  margin-left: 5px;\n}\ninput[_ngcontent-%COMP%] {\n  height: auto;\n}\n.picturePswImgWrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.picturePswImgWrap[_ngcontent-%COMP%]   .charNameWrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  line-height: 10px;\n}\n.picturePswImgWrap[_ngcontent-%COMP%]   .charNameWrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 3px 5px;\n  background-color: #2b9aff;\n  color: #fff;\n  font-size: 10px;\n  display: inline-block !important;\n  max-width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 10px;\n  margin: 0;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VjdXJpdHktZGFzaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLHFEQUFBO0VBQ0EseUJBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtBQUdaO0FBQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFFUjtBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0ksV0FBQTtBQUNSO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQUNSO0FBT0E7RUFFSSx5QkFBQTtFQUNBLHlCQUFBO0FBTEo7QUFNSTtFQUNJLCtDQUFBO0FBSlI7QUFRQTtFQUVJLGtCQUFBO0FBTko7QUFPSTtFQUhKO0lBSVEsbUJBQUE7SUFDQSxpQkFBQTtFQUpOO0FBQ0Y7QUFLSTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUhSO0FBUUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFNSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUpSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSFo7QUFNSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQUtRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSFo7QUFjQTtFQUNJLGdCQUFBO0FBWEo7QUFhQTtFQUNJLGFBQUE7QUFWSjtBQWFJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUVBLDJDQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWFJO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFYUjtBQWNBO0VBQ0ksWUFBQTtBQVhKO0FBYUE7RUFDSSxrQkFBQTtBQVZKO0FBV0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFUUjtBQVVRO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFSWiIsImZpbGUiOiJzZWN1cml0eS1kYXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHVwTGluayB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAzcHggcmdiKDQzIDE1NCAyNTUgLyAxNSUpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjlhZmY7XHJcbiAgICAgICAgLmNhcmV0UmlnaHQge1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmlnTGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc21hbGxMaW5rIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgfSBcclxuICAgIC5zbWFsbExpbmtHcmV5IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG4gICAgLmNhcmV0UmlnaHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gN3B4KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5zZXRVcGljb25XcmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAuYmlnTGluayB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYm94SG9sZGVyTGVmdHNlY1NldHVwQmcge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRkNjtcclxufVxyXG5cclxuLmJhY2tsaW5rQnRuU2VjIHtcclxuICAgIC8vIGNvbG9yOiAjZjE3MjIyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxODksIDgwLCAxMywgMC4zKTtcclxuICAgICAgICAvLyBjb2xvcjogI2YxNzIyMjtcclxuICAgIH1cclxufVxyXG4uYXV0aFdyYXBwZXJTZWNTZXR1cCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0ICwgI2YxNzIyMiAwJSAsICNmMTcyMjIgNjUlICwgI0ZGRiA2NSUgLCAjRkZGIDEwMCUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjE3MjIyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmF1dGhIb2xkZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiKDAgMCAwIC8gMTAlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYlKTtcclxuICAgIH1cclxufVxyXG5cclxuLnBhc3N3b3JkU3RhdHVzV3JhcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY0NDNDO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgLnBzd1N0YXR1c1R4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLnBhc3N3b3JkU2V0V3JhcCB7XHJcbiAgICAuZ3JleUlucEZpZWxkIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMyQzJDICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLnNreUFkZHJlc3NGaWVsZFdyYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4ucGFzc3dvcmRTZXRXcmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmZvcm1GaWVsZCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgcmdiYSgxOCwgMTIyLCAyNDQsIDAuNDgpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIC5kb21haW5OYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuaW5wdXR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnBpY3R1cmVQc3dJbWdXcmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5jaGFyTmFtZVdyYXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjlhZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityDashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-security-dash',
                templateUrl: './security-dash.component.html',
                styleUrls: ['./security-dash.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "y9Nr":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/create-sky-dash/security-dash/security-dash-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SecurityDashRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityDashRoutingModule", function() { return SecurityDashRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _security_dash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security-dash.component */ "v0jK");





const routes = [
    {
        path: '',
        component: _security_dash_component__WEBPACK_IMPORTED_MODULE_2__["SecurityDashComponent"]
    }
];
class SecurityDashRoutingModule {
}
SecurityDashRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SecurityDashRoutingModule });
SecurityDashRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SecurityDashRoutingModule_Factory(t) { return new (t || SecurityDashRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecurityDashRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityDashRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=security-dash-security-dash-module.js.map