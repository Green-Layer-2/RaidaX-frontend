(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-nft-wallet-existing-nft-existing-nft-module"],{

/***/ "DI+o":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/existing-nft/existing-nft.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ExistingNftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingNftModule", function() { return ExistingNftModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _existing_nft_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./existing-nft-routing.module */ "E2eL");
/* harmony import */ var _existing_nft_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./existing-nft.component */ "mQ5j");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");


//import { BrowserModule } from '@angular/platform-browser'





class ExistingNftModule {
}
ExistingNftModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExistingNftModule });
ExistingNftModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExistingNftModule_Factory(t) { return new (t || ExistingNftModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            //BrowserModule,
            _existing_nft_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExistingNftRoutingModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExistingNftModule, { declarations: [_existing_nft_component__WEBPACK_IMPORTED_MODULE_3__["ExistingNftComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        //BrowserModule,
        _existing_nft_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExistingNftRoutingModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExistingNftModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_existing_nft_component__WEBPACK_IMPORTED_MODULE_3__["ExistingNftComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    //BrowserModule,
                    _existing_nft_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExistingNftRoutingModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "E2eL":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/existing-nft/existing-nft-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExistingNftRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingNftRoutingModule", function() { return ExistingNftRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _existing_nft_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./existing-nft.component */ "mQ5j");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");


//import { BrowserModule } from '@angular/platform-browser'




const routes = [
    {
        path: '',
        component: _existing_nft_component__WEBPACK_IMPORTED_MODULE_2__["ExistingNftComponent"]
    }
];
class ExistingNftRoutingModule {
}
ExistingNftRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExistingNftRoutingModule });
ExistingNftRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExistingNftRoutingModule_Factory(t) { return new (t || ExistingNftRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            //BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExistingNftRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], 
        //BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExistingNftRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    //BrowserModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mQ5j":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/existing-nft/existing-nft.component.ts ***!
  \************************************************************************************/
/*! exports provided: ExistingNftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingNftComponent", function() { return ExistingNftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ "NiZn");











function ExistingNftComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExistingNftComponent_div_47_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const data_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.customSelector(data_r3.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r3.name);
} }
function ExistingNftComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExistingNftComponent_div_47_div_1_Template, 3, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.all);
} }
function ExistingNftComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function ExistingNftComponent_div_54_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.loadingMessage);
} }
const _c0 = function (a0) { return { btnDisable: a0 }; };
class ExistingNftComponent {
    constructor(fb, storage, api, router, actRoute) {
        this.fb = fb;
        this.storage = storage;
        this.api = api;
        this.router = router;
        this.actRoute = actRoute;
        this.customSelectorOpen1 = false;
        this.walletselected = false;
        this.title = [];
        this.showLoader = false;
        this.loadingMessage = '';
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json',
        };
        this.cSelectorText = 'Select a wallet';
    }
    ngOnInit() {
        this.nftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //'title': new FormControl('', [Validators.required, Validators.pattern('[a-zA-z0-9-]*')]),
            'nftnumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
        });
        this.getAllwallet();
        // this.getNfts();
        this.actRoute.queryParams.subscribe(params => {
            this.title_name = params['title_name'];
            this.domain_name = params['domain_name'];
            this.sn_detail = params['snvalue'];
        });
        console.log("from Mint page:" + this.domain_name);
        console.log("from mint page:" + this.sn_detail);
    }
    onSubmit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.nftForm);
            this.exportNft();
        });
    }
    balancecheck() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.nftnumber = this.nftForm.get('nftnumber').value;
            let response = yield this.api.getTransaction(this.destName);
            if (response.payload.balance < this.nftnumber) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'You cannot make this number of NFTs because selected wallet balance is ' + response.payload.balance + 'cc',
                    icon: 'info',
                    confirmButtonText: 'Okay'
                });
            }
        });
    }
    getAllwallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response;
                response = yield this.api.getWallet();
                if (response.status == 'success') {
                    this.all = response.payload;
                    console.log("this.all" + this.all);
                    this.cSelectorImg = 'assets/folder-w-border.svg';
                    if (this.all.length == 1) {
                        this.cSelectorText = this.all[0].name;
                        this.customSelectorOpen = false;
                        this.walletselected = true;
                        this.destName = this.all[0].name;
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    customSelector(val) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.destName = val;
            this.cSelectorImg = 'assets/folder-w-border.svg';
            this.cSelectorText = val;
            this.customSelectorOpen = false;
            console.log("val " + this.destName);
            if (this.destName != 'Search wallets') {
                this.walletselected = true;
            }
            console.log("wallet selected:" + this.walletselected);
            let response = yield this.api.getTransaction(this.destName);
            if (response.payload.balance == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'You cannot make NFTs because your wallet is empty.',
                    icon: 'info',
                    confirmButtonText: 'Okay'
                });
            }
        });
    }
    customSelToggler() {
        this.customSelectorOpen = !this.customSelectorOpen;
    }
    customSelToggler1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.customSelectorOpen1 = !this.customSelectorOpen1;
            try {
                let response = yield this.api.nftGroups();
                if (response.status === "success") {
                    this.data = response.payload;
                    console.log(this.data);
                    for (let i = 0; i < this.data.length; i++) {
                        this.title[i] = this.data[i].title;
                    }
                    this.customSelectorOpen1 = true;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    onClick() {
        this.customSelectorOpen1 = false;
    }
    customSelector1(val) {
        this.nftName = val;
        console.log("name:" + this.nftName);
        this.cSelectorText1 = val;
        this.customSelectorOpen1 = false;
    }
    exportNft() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: this.destName,
                    amount: Number(this.nftForm.get('nftnumber').value),
                    template_path: "",
                    domain_name: this.domain_name,
                    host_name: this.title_name,
                    text_color: '#000000',
                    x: 10,
                    y: 10,
                    is_vertical: true,
                    font_size: 16,
                    description: '',
                    is_transparent: true,
                    write_sn: false,
                    personal_text: ''
                };
                let response = yield this.api.exportCoinasNft(data);
                console.log(data);
                this.showLoader = true;
                this.loadingMessage = "Creating NFT...";
                if (response.status === "success") {
                    this.doCheck1((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck1(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        console.log("process completed");
                        this.showLoader = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'NFT has been created successfully',
                            icon: 'success',
                            confirmButtonText: 'Okay'
                        });
                        this.router.navigate(['/dashboard/create-nft-gallery']);
                    }
                    else {
                        this.showLoader = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Failed to create NFT',
                            icon: 'error',
                            confirmButtonText: 'Okay'
                        });
                        this.router.navigate(['/dashboard/create-nft']);
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck1(taskID, xdata);
                }, 500);
            }
        });
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
    animationCreated(animationItem) {
        console.log(animationItem);
    }
}
ExistingNftComponent.ɵfac = function ExistingNftComponent_Factory(t) { return new (t || ExistingNftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
ExistingNftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExistingNftComponent, selectors: [["app-existing-nft"]], hostBindings: function ExistingNftComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExistingNftComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 55, vars: 9, consts: [[1, "gap30"], [1, "transWrapper"], [1, "headerbackWrap"], ["href", "javascript:;", "routerLink", "/dashboard/create-nft-gallery", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "titleOne"], [1, "gap20"], [1, "gap10"], [3, "formGroup", "ngSubmit"], [1, "titleTwo", 2, "opacity", "0.8"], [1, "row"], [1, "col-md-4"], ["for", "title", 1, "dark_mode_text"], [1, "col-md-2"], ["type", "text", "maxlength", "61", "name", "title", "id", "title", "disabled", "", 1, "form-control", "text_box_two", 3, "value"], ["for", "qualname", 1, "dark_mode_text"], ["type", "text", "placeholder", "YourDomain.com", "maxlength", "61", "disabled", "", 1, "form-control", "text_box_two", 3, "value"], ["for", "nftnumber", 1, "dark_mode_text"], ["type", "number", "formControlName", "nftnumber", "id", "nftnumber", "value", "1", "name", "nftnumber", 1, "form-control", "text_box_two", 3, "change"], ["for", "IncludeOtherText", 1, "dark_mode_text"], [1, "lineSection"], [1, "customeDropdownTwo"], [1, "triger", 3, "click"], ["class", "menuShowTwo scroll", 4, "ngIf"], [1, "transBottomFooter"], [1, "bottomPartSubmit"], [1, "bottomFooter"], [1, "container"], ["href", "javascript:;", "type", "submit", 1, "btnCustomBlue", "btnLarge", 3, "ngClass"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "menuShowTwo", "scroll"], ["class", "menus", 3, "click", 4, "ngFor", "ngForOf"], [1, "menus", 3, "click"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function ExistingNftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Make Copies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ExistingNftComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(ctx.nftForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Here you can add more copies to an existing NFT and specify how many more you would like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Title of the NFT (Must be fewer than 61 characters)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Verification Domain Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Number of NFTs to add:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ExistingNftComponent_Template_input_change_35_listener() { return ctx.balancecheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Wallet to get coins from:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExistingNftComponent_Template_div_click_44_listener() { return ctx.customSelToggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ExistingNftComponent_div_47_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Create NFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ExistingNftComponent_div_54_Template, 6, 2, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.nftForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.title_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.domain_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cSelectorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.customSelectorOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.nftForm.invalid || ctx.walletselected == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieComponent"]], styles: [".text_box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #2d2d2d;\n  border: 1px solid #bcbbbb;\n  border-radius: 4px;\n  display: inline;\n  font-size: 14px;\n  width: 100px;\n  text-align: center;\n}\n\n.text_box_two[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #2d2d2d;\n  border: 1px solid #bcbbbb;\n  border-radius: 4px;\n  display: inline;\n  font-size: 14px;\n  width: 300px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhpc3RpbmctbmZ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSyx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDTCIsImZpbGUiOiJleGlzdGluZy1uZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dF9ib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMyZDJkMmQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg4LCAxODcsIDE4Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweDsgIFxyXG59XHJcbi50ZXh0X2JveF90d297XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICBjb2xvcjogIzJkMmQyZDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg4LCAxODcsIDE4Nyk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vICBtYXJnaW4tbGVmdDogMTBweDsgIFxyXG4gfVxyXG4gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExistingNftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-existing-nft',
                templateUrl: './existing-nft.component.html',
                styleUrls: ['./existing-nft.component.scss'],
                host: {
                    '(document:click)': 'onClick($event)',
                },
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=create-nft-wallet-existing-nft-existing-nft-module.js.map