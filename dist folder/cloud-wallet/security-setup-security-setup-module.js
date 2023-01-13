(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-setup-security-setup-module"],{

/***/ "EYpd":
/*!***************************************************************************************!*\
  !*** ./src/app/auth/create-skywallet/security-setup/security-setup-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SecuritySetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritySetupRoutingModule", function() { return SecuritySetupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _security_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security-setup.component */ "bKfx");





const routes = [
    {
        path: '',
        component: _security_setup_component__WEBPACK_IMPORTED_MODULE_2__["SecuritySetupComponent"]
    }
];
class SecuritySetupRoutingModule {
}
SecuritySetupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SecuritySetupRoutingModule });
SecuritySetupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SecuritySetupRoutingModule_Factory(t) { return new (t || SecuritySetupRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecuritySetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecuritySetupRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bKfx":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/create-skywallet/security-setup/security-setup.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SecuritySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritySetupComponent", function() { return SecuritySetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../create-localwallet/setup-mail-psw/custom-validators */ "lkAQ");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");








function SecuritySetupComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Low ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SecuritySetupComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Medium ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SecuritySetupComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Strong ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
const _c2 = function (a0) { return { "btnDisable": a0 }; };
class SecuritySetupComponent {
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
                    _create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/[A-Z]/, {
                        hasCapitalCase: true
                    }),
                    _create_localwallet_setup_mail_psw_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
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
        this.router.navigate(['/skywallet/upload-cc']);
    }
}
SecuritySetupComponent.ɵfac = function SecuritySetupComponent_Factory(t) { return new (t || SecuritySetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SecuritySetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecuritySetupComponent, selectors: [["app-security-setup"]], decls: 136, vars: 84, consts: [[1, "authWrapper", "authWrapperSecSetup"], ["href", "javascript:;", "routerLink", "/skywallet/create-address", 1, "backlinkBtn"], ["src", "assets/back_arrow.svg", "alt", ""], [1, "bodyInnerWrapper"], [1, "stepperHolder"], [1, "stepperWrap"], [1, "step", "stepActive"], [1, "circleWrap"], [1, "circle"], [1, "steptextWrap"], [1, "amount"], [1, "step"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "titleOne"], [2, "color", "#0884FF"], [1, "titleTwo", 2, "opacity", "0.8"], [3, "formGroup"], [1, "skyAddressFieldWrap"], [1, "formField", "passwordSetWrap"], [1, "passwordSetLeft"], ["for", "setupRecoveryPsw"], [1, "gap10"], [1, "passwordWithIcon"], ["formControlName", "password", "placeholder", "Enter a strong password", "name", "password", 1, "greyInpField", 3, "type", "input"], [1, "fa", "eyeIcon", "text-white", "mt-1", 3, "ngClass", "click"], [1, "passwordStatusWrap"], ["style", "color:#FF443C", 4, "ngIf"], ["style", "color:#FF6100", 4, "ngIf"], ["style", "color:#39D02B", 4, "ngIf"], [1, "pswStatusTxt"], [3, "ngClass"], [1, "formField", "passwordWithIcon"], [1, "pt-1", "pb-1", 2, "opacity", "0.7", "font-size", "15px"], [1, "picturePswWrap"], [1, "row", "row5"], [1, "col-2"], [1, "picturePswImgWrap", 3, "ngStyle"], [1, "picturePswImg", 3, "src"], [1, "charNameWrap"], [1, "", 3, "title"], [1, "col-md-4"], ["src", "assets/setup-sec-img-black-white.png", "alt", "setup image", 1, "stepperMainImg"], [1, "gap20"], [1, "infoText"], ["src", "assets/info_circle.svg", "alt", ""], [1, "transBottomFooter"], [1, "bottomPartSubmit"], [1, "bottomFooter"], ["href", "javascript:;", "routerLink", "/dashboard/create-skyvault-dash/upload-cc", 1, "btnCustomBlue", "btnLarge", "btnDisable", 3, "ngClass", "disabled", "click"], [2, "color", "#FF443C"], [2, "color", "#FF6100"], [2, "color", "#39D02B"]], template: function SecuritySetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Address setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Deposit CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Security setup for: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Depending on your needs and level of trust, SkyVault gives you two options to set up security. One is simple, and the other is advanced.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SecuritySetupComponent_Template_input_input_47_listener($event) { return ctx.setNewvalues($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecuritySetupComponent_Template_button_click_48_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Strength: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, SecuritySetupComponent_span_53_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SecuritySetupComponent_span_54_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SecuritySetupComponent_span_55_Template, 2, 0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " At least 8 characters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " At least 1 capital letter. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " At least 1 special character. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Picture Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](111, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](119, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](121, "titlecase");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "You can log on to multiple devices using your SkyVault address & its unique password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecuritySetupComponent_Template_button_click_134_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.setPassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](67, _c0, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 43, ctx.randomChar));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 45, ctx.randomChar));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](72, _c1, ctx.randombgcolorV1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlVerb_01, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 47, ctx.randomV1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 49, ctx.randomV1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](74, _c1, ctx.randombgcolorP));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlPlace, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](95, 51, ctx.randomPlace));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 53, ctx.randomPlace));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](76, _c1, ctx.randombgcolorT));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlThing, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](103, 55, ctx.randomThing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 57, ctx.randomThing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](78, _c1, ctx.randombgcolorV2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlVerb_02, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](111, 59, ctx.randomV2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](113, 61, ctx.randomV2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](80, _c1, ctx.randombgcolorE));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomUrlEvent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](119, 63, ctx.randomEvent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](121, 65, ctx.randomEvent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](82, _c2, ctx.setPassForm.controls.password.invalid || ctx.setPassForm.controls.email.invalid && ctx.isSelect))("disabled", ctx.setPassForm.controls.password.invalid || ctx.setPassForm.controls.email.invalid && ctx.isSelect);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]], styles: [".setupLink[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #fff;\n  border-radius: 10px;\n  display: block;\n  border: 1px solid #ddd;\n  color: #000;\n  transition: all 0.2s ease;\n  margin-bottom: 20px;\n  position: relative;\n  padding-right: 40px;\n}\n.setupLink[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 15px 3px rgba(43, 154, 255, 0.15);\n  border: 1px solid #2b9aff;\n}\n.setupLink[_ngcontent-%COMP%]:hover   .caretRight[_ngcontent-%COMP%] {\n  right: 20px;\n}\n.setupLink[_ngcontent-%COMP%]   .bigLink[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 20px;\n  margin-bottom: 10px;\n  display: block;\n}\n.setupLink[_ngcontent-%COMP%]   .smallLink[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 22px;\n  display: block;\n  margin-bottom: 7px;\n}\n.setupLink[_ngcontent-%COMP%]   .smallLinkGrey[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  display: block;\n  opacity: 0.6;\n}\n.setupLink[_ngcontent-%COMP%]   .caretRight[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 25px;\n  top: calc(50% - 7px);\n  transition: all 0.2s;\n}\n.setUpiconWrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.setUpiconWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.setUpiconWrap[_ngcontent-%COMP%]   .bigLink[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n}\n.backlinkBtnSec[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  transition: all 0.2s ease;\n}\n.backlinkBtnSec[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 5px 10px rgba(189, 80, 13, 0.3);\n}\n.authWrapperSecSetup[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media screen and (max-width: 576px) {\n  .authWrapperSecSetup[_ngcontent-%COMP%] {\n    background: #f17222;\n    padding-top: 80px;\n  }\n}\n.authWrapperSecSetup[_ngcontent-%COMP%]   .authHolder[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 20px;\n  width: 1000px;\n  max-width: 90%;\n  display: flex;\n  min-height: 80vh;\n}\n.passwordStatusWrap[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 20px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FF443C;\n  font-weight: 400;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   .pswStatusTxt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 10px;\n  display: block;\n  line-height: 16px;\n}\n.passwordStatusWrap[_ngcontent-%COMP%]   .pswStatusTxt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  position: relative;\n  top: -1px;\n  width: 13px;\n  height: 10px;\n  object-fit: contain;\n}\n.skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.passwordSetWrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 320px;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  vertical-align: top;\n}\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff !important;\n  line-height: 15px;\n  margin-left: 5px;\n}\ninput[_ngcontent-%COMP%] {\n  height: auto;\n}\n.picturePswImgWrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.picturePswImgWrap[_ngcontent-%COMP%]   .charNameWrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  line-height: 10px;\n}\n.picturePswImgWrap[_ngcontent-%COMP%]   .charNameWrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 3px 5px;\n  background-color: #2b9aff;\n  color: #fff;\n  font-size: 10px;\n  display: inline-block !important;\n  max-width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 10px;\n  margin: 0;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VjdXJpdHktc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxxREFBQTtFQUNBLHlCQUFBO0FBRVI7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBRVI7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNJLFdBQUE7QUFDUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUFDUjtBQU9BO0VBRUkseUJBQUE7RUFDQSx5QkFBQTtBQUxKO0FBTUk7RUFDSSwrQ0FBQTtBQUpSO0FBUUE7RUFFSSxrQkFBQTtBQU5KO0FBT0k7RUFISjtJQUlRLG1CQUFBO0lBQ0EsaUJBQUE7RUFKTjtBQUNGO0FBS0k7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQVFBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQUxKO0FBTUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhaO0FBTUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSlI7QUFLUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhaO0FBY0E7RUFDSSxnQkFBQTtBQVhKO0FBYUE7RUFDSSxhQUFBO0FBVko7QUFhSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQ0FBQTtFQUNBLG1CQUFBO0FBWFI7QUFhSTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWFI7QUFjQTtFQUNJLFlBQUE7QUFYSjtBQWFBO0VBQ0ksa0JBQUE7QUFWSjtBQVdJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVFI7QUFVUTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBUloiLCJmaWxlIjoic2VjdXJpdHktc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dXBMaW5rIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDNweCByZ2IoNDMgMTU0IDI1NSAvIDE1JSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJiOWFmZjtcclxuICAgICAgICAuY2FyZXRSaWdodCB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iaWdMaW5rIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5zbWFsbExpbmsge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICB9IFxyXG4gICAgLnNtYWxsTGlua0dyZXkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAuY2FyZXRSaWdodCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSA3cHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnNldFVwaWNvbldyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgIH1cclxuICAgIC5iaWdMaW5rIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3hIb2xkZXJMZWZ0c2VjU2V0dXBCZyB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGQ2O1xyXG59XHJcblxyXG4uYmFja2xpbmtCdG5TZWMge1xyXG4gICAgLy8gY29sb3I6ICNmMTcyMjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDE4OSwgODAsIDEzLCAwLjMpO1xyXG4gICAgICAgIC8vIGNvbG9yOiAjZjE3MjIyO1xyXG4gICAgfVxyXG59XHJcbi5hdXRoV3JhcHBlclNlY1NldHVwIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQgLCAjZjE3MjIyIDAlICwgI2YxNzIyMiA2NSUgLCAjRkZGIDY1JSAsICNGRkYgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMTcyMjI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAuYXV0aEhvbGRlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNiUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFzc3dvcmRTdGF0dXNXcmFwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRjQ0M0M7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICAucHN3U3RhdHVzVHh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4ucGFzc3dvcmRTZXRXcmFwIHtcclxuICAgIC5ncmV5SW5wRmllbGQge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyQzJDMkMgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uc2t5QWRkcmVzc0ZpZWxkV3JhcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5wYXNzd29yZFNldFdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZm9ybUZpZWxkIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE4LCAxMjIsIDI0NCwgMC40OCk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmRvbWFpbk5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5pbnB1dHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4ucGljdHVyZVBzd0ltZ1dyYXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNoYXJOYW1lV3JhcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTdweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiOWFmZjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecuritySetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-security-setup',
                templateUrl: './security-setup.component.html',
                styleUrls: ['./security-setup.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "pc6D":
/*!*******************************************************************************!*\
  !*** ./src/app/auth/create-skywallet/security-setup/security-setup.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SecuritySetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritySetupModule", function() { return SecuritySetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _security_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security-setup-routing.module */ "EYpd");
/* harmony import */ var _security_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-setup.component */ "bKfx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");






class SecuritySetupModule {
}
SecuritySetupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SecuritySetupModule });
SecuritySetupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SecuritySetupModule_Factory(t) { return new (t || SecuritySetupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _security_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecuritySetupRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecuritySetupModule, { declarations: [_security_setup_component__WEBPACK_IMPORTED_MODULE_3__["SecuritySetupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _security_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecuritySetupRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecuritySetupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_security_setup_component__WEBPACK_IMPORTED_MODULE_3__["SecuritySetupComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _security_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecuritySetupRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=security-setup-security-setup-module.js.map