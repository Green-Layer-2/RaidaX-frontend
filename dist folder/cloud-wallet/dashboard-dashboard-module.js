(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "K7t7":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/left-panel/left-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: LeftPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPanelComponent", function() { return LeftPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_avaterupdate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/avaterupdate.service */ "ojcs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");










const _c0 = function (a0) { return { "activeHolder": a0 }; };
function LeftPanelComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPanelComponent_div_22_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const data_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.getWalletDetail(data_r4.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r3.type === "localwallet" && data_r4.name === ctx_r3.userLocal));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.balance);
} }
function LeftPanelComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftPanelComponent_div_22_div_1_Template, 7, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create a New Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPanelComponent_div_22_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.createWallet(ctx_r8.userLocal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.all);
} }
function LeftPanelComponent_div_23_div_1_sup_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeftPanelComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPanelComponent_div_23_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const data_r11 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.getSkyDetail(data_r11.name, data_r11 == null ? null : data_r11.idcoin == null ? null : data_r11.idcoin.sn); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LeftPanelComponent_div_23_div_1_sup_7_Template, 2, 0, "sup", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r10.type === "skywallet" && data_r11.name === ctx_r10.userSky));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r10.type === "skywallet" && data_r11.name === ctx_r10.userSky && ctx_r10.check ? "counting" : data_r11.balance, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.check == false);
} }
function LeftPanelComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftPanelComponent_div_23_div_1_Template, 8, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create a New SkyVault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPanelComponent_div_23_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.createSkyVault(ctx_r16.userSky); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.allSky);
} }
const _c1 = function () { return { exact: true }; };
function LeftPanelComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPanelComponent_div_24_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.goToGallery("NFT"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NFT Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
} }
class LeftPanelComponent {
    constructor(eventService, onlyonce, changeDetectorRef, api, auth, router, emojiService) {
        this.eventService = eventService;
        this.onlyonce = onlyonce;
        this.changeDetectorRef = changeDetectorRef;
        this.api = api;
        this.auth = auth;
        this.router = router;
        this.emojiService = emojiService;
        this.skywallet = null;
        this.showLoader = false;
        this.totalBalance = 0;
        this.totalSkyBalance = 0;
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
        };
        this.tabSelector == '';
        this.type = localStorage.getItem('wallet');
        this.userLocal = localStorage.getItem('userLocal');
        this.userSky = localStorage.getItem('userSky');
        this.nft = localStorage.getItem('Nft');
        if (localStorage.getItem('wallet') == 'localwallet') {
            this.tabSelector = 'wallet';
        }
        else if (localStorage.getItem('wallet') == 'skywallet') {
            this.tabSelector = 'skyvault';
        }
        else if (localStorage.getItem('wallet') == 'nftwallet') {
            this.tabSelector = 'nft';
        }
        this.cSelectorText = 'Choose Wallet';
        this.cSelectorTextSky = 'Choose SkyVault';
        this.customSelectorOpen = false;
        this.customSelectorOpenSky = false;
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
        // if (localStorage.getItem('skywallet')) {
        //   this.skywallet = localStorage.getItem('skywallet');
        //   this.username = (localStorage.getItem('skywallet')).split(".", 1)[0];
        // }
        // if (!localStorage.getItem('imgId')) {
        //   this.emojiService.getDefaultImage(1).subscribe((response: any) => {
        //     if (response.success) {
        //       localStorage.setItem('img_details', JSON.stringify(response));
        //       this.image = response.img_path;
        //       localStorage.setItem('imgId', response.image_data.id);
        //     }
        //   });
        // } else {
        //   let imgpath = JSON.parse(localStorage.getItem('img_details')).img_path;
        //   this.image = imgpath;
        // }
    }
    ngOnInit() {
        // if (this.router.url.toString() == '/dashboard/news') {
        //   this.getAllwallet();
        //   this.getList();
        //   this.getSky();
        // }\
        this.totalBalance = Number(sessionStorage.getItem('totalBal'));
        this.totalSkyBalance = Number(sessionStorage.getItem('totalSkyBal'));
        this.eventService.watchStorage().subscribe((data) => {
            if (data === 'upload') {
                if (this.type == 'localwallet') {
                    this.totalBalance = 0;
                    this.userLocal = localStorage.getItem('userLocal');
                    this.getAllwallet();
                }
            }
            // else if (data == 'skytransfer'){
            //   this.totalSkyBalance = 0;
            //   sessionStorage.setItem('totalSkyBal', '0');
            //   this.getSky();
            // }
        });
        this.changeDetectorRef.detectChanges();
        this.eventService.changeLocal.subscribe(message => {
            //console.log(message);
            if (message[0] != "Empty") {
                if (message.length == 0) {
                    this.totalBalance = 0;
                    this.getAllwallet();
                }
                else {
                    this.all = message;
                }
            }
            else {
                this.all = [];
            }
        });
        this.eventService.changeSky.subscribe(message => {
            if (message[0] != "Empty") {
                if (message.length == 0) {
                    this.totalSkyBalance = 0;
                    sessionStorage.setItem('totalSkyBal', '0');
                    this.getList();
                    // this.getSky();
                }
                else {
                    this.allSky = message;
                }
                //console.log(message);
            }
        });
        this.eventService.changeNft.subscribe(message => {
            if (message[0] != "Empty") {
                if (message.length == 0) {
                    this.getNftByGroups();
                }
                else {
                    this.data = message;
                }
            }
        });
    }
    getNftByGroups() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.nftGroups();
                if (response.status === "success") {
                    this.data = response.payload;
                    if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                        this.eventService.changenftdata(['Empty']);
                    }
                    else {
                        this.eventService.changenftdata(this.data);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    // localwallet function
    getAllwallet() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response;
                response = yield this.api.getWallet();
                if (response.status == "success") {
                    this.all = response.payload;
                    this.walletName = this.all[0].name;
                    if (((_a = this.all) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                        this.eventService.changeLocaldata(["Empty"]);
                    }
                    else {
                        this.eventService.changeLocaldata(this.all);
                    }
                    // localStorage.setItem('localData', JSON.stringify(this.all));
                    localStorage.setItem('localLength', (_b = this.all) === null || _b === void 0 ? void 0 : _b.length);
                    for (let i = 0; i < this.all.length; i++) {
                        this.totalBalance = this.totalBalance + Number((_c = this.all[i]) === null || _c === void 0 ? void 0 : _c.balance);
                    }
                    sessionStorage.setItem('totalBal', this.totalBalance);
                    let data = this.onlyonce.getData();
                    if (data != 'leftover') {
                        this.all.forEach(item => {
                            this.leftover(item.name);
                        });
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    createWallet(name) {
        this.userLocal = name;
        localStorage.setItem('wallet', 'localwallet');
        this.eventService.setItem('userLocal', name, "changelocal");
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    createSkyVault(name) {
        this.userSky = name;
        localStorage.setItem('wallet', 'skywallet');
        this.eventService.setItem('userSky', name, 'changesky');
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    goToGallery(name) {
        localStorage.setItem('wallet', 'nftwallet');
        this.eventService.setItem('Nft', name, "changenft");
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    leftover(name) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.leftover(name);
                if (response.status === "success") {
                    if (((_a = response === null || response === void 0 ? void 0 : response.payload) === null || _a === void 0 ? void 0 : _a.balance) > 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Looks like the last import did not finish. Continue importing leftover coins",
                            icon: 'info',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                {
                                    this.suspect(name);
                                }
                            }
                        });
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    suspect(name) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: name,
                    tag: "leftover coin",
                    items: [{ type: "suspect" }]
                };
                let response = yield this.api.suspect(data);
                if (response.status === "success") {
                    this.showLoader = true;
                    this.doImport((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doImport(taskID, xdata) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.showLoader = false;
                        this.eventService.setItem("wallet", "localwallet", 'upload');
                    }
                    else {
                        this.showLoader = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Failure! could not proceed with the transaction. " + ((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message),
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doImport(taskID, xdata);
                }, 500);
            }
            else {
                this.showLoader = false;
            }
        });
    }
    // skyvault function
    getList() {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getList();
                if (response.status == "success") {
                    this.allSky = response.payload;
                    this.skyName = this.allSky[0].name;
                    if (((_a = this.allSky) === null || _a === void 0 ? void 0 : _a.length) != 0) {
                        this.getSky();
                        var y = this.allSky.filter(x => {
                            return x.name == this.userSky;
                        });
                        localStorage.setItem('skyLength', (_b = this.allSky) === null || _b === void 0 ? void 0 : _b.length);
                        localStorage.setItem('serial', (_d = (_c = y[0]) === null || _c === void 0 ? void 0 : _c.idcoin) === null || _d === void 0 ? void 0 : _d.sn);
                        let data = this.onlyonce.getData();
                        if (data != 'leftover') {
                            this.allSky.forEach(item => {
                                this.skydetect(item.name);
                            });
                        }
                    }
                    else {
                        this.eventService.changeskydata(["Empty"]);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    skydetect(d) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: d
                };
                let response = yield this.api.detectsky(data);
                //console.log(response);
                if (response.status == "success") {
                    this.onlyonce.setData('leftover');
                    this.detectSkyvault((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, d, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    detectSkyvault(taskID, name, xdata) {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            //console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.counterfeit) != 0) {
                            this.deleteSkyvault = name;
                            this.deleteSky();
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: name + " Pass Key is counterfeit!",
                                icon: 'info',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                        else if (((_d = (_c = this.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.fracked) != 0) {
                            this.fixKey(name, (_f = (_e = this.payload) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.coins[0].pownstring);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: name + " Pass Key is fracked!",
                                icon: 'info',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                    }
                    return;
                }
                setTimeout(() => {
                    this.detectSkyvault(taskID, name, xdata);
                }, 500);
            }
        });
    }
    fixKey(skyname, pown) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: skyname,
                    pownstring: pown
                };
                let response = yield this.api.idFix(data);
                if (response.status == "success") {
                    this.doFixsky((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doFixsky(taskID, xdata) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.number_failed) === 0) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Pass Key was Fixed and is now Healthy",
                                icon: 'success',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Pass Key is fracked and the attempt to fix failed. Try again later",
                                icon: 'error',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doFixsky(taskID, xdata);
                }, 500);
            }
        });
    }
    deleteSky() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.deleteFromFolder(this.deleteSkyvault);
                if (response.status == "success") {
                    this.doCheck1((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
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
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.getlistafterDelete();
                        var index = this.allSky.findIndex(x => x.name === this.deleteSkyvault);
                        this.allSky.splice(index, 1);
                        this.eventService.changeskydata(this.allSky);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "We deleted " + this.deleteSkyvault + " because it's Pass Key is counterfeit.",
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck1(taskID, xdata);
                }, 500);
            }
        });
    }
    getlistafterDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getList();
                if (response.status === 'success') {
                    var skyDetails = response.payload;
                    if ((skyDetails === null || skyDetails === void 0 ? void 0 : skyDetails.length) !== 0) {
                        // this.eventService.changeskydata(skyDetails);
                        this.eventService.setItem('userSky', skyDetails[0].name, 'skydelete');
                    }
                    else {
                        this.eventService.changeskydata(["Empty"]);
                        this.eventService.setItem('wallet', 'localwallet', 'localdelete');
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getSky() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getAllSky();
                if (response.status == "success") {
                    this.doCheck((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck(taskID, xdata) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.allSky = this.payload.data;
                        if (((_a = this.allSky) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                            this.eventService.changeskydata(["Empty"]);
                        }
                        else {
                            this.eventService.changeskydata(this.allSky);
                        }
                        for (let i = 0; i < this.allSky.length; i++) {
                            this.totalSkyBalance = this.totalSkyBalance + Number((_b = this.allSky[i]) === null || _b === void 0 ? void 0 : _b.balance);
                        }
                        sessionStorage.setItem('totalSkyBal', this.totalSkyBalance);
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck(taskID, xdata);
                }, 500);
            }
        });
    }
    getWalletDetail(name) {
        this.userLocal = name;
        localStorage.setItem('wallet', 'localwallet');
        this.eventService.setItem('userLocal', name, "changelocal");
        // this.leftover();
        // window.location.reload()
        // window.location.href="/dashboard/home"
        // let currentUrl = this.router.url;
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.onSameUrlNavigation = 'reload';
        // this.router.navigate([currentUrl]);
        this.router.navigate(["/dashboard/home"]);
    }
    getSkyDetail(name, id) {
        this.userSky = name;
        localStorage.setItem('wallet', 'skywallet');
        this.eventService.setItem('userSky', name, 'changesky');
        localStorage.setItem('serial', id);
        // let currentUrl = this.router.url;
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.onSameUrlNavigation = 'reload';
        // this.router.navigate([currentUrl]);
        this.router.navigate(["/dashboard/home"]);
        // this.skydetect(name);
    }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    // themeDarkCaller(){
    //   if (this.themeDarkActive == false) {
    //     this.themeDarkActive = true;
    //     this.themeLightActive = false;
    //     localStorage.setItem('themeLightActive','0');
    //     this.eventService.emitThemeTogEvent();
    //   }
    // }
    // themeLightCaller(){
    //   if (this.themeLightActive == false) {
    //     this.themeLightActive = true;
    //     this.themeDarkActive = false;
    //     localStorage.setItem('themeLightActive','1');
    //     this.eventService.emitThemeTogEvent();
    //   }
    // }
    // logout(): void
    // {
    //   if (confirm('Are you sure you want to log out ?'))
    //   {
    //     localStorage.setItem('cc', 'null');
    //     localStorage.removeItem('cc');
    //     this.auth.checkLoginStatus();
    //     this.router.navigate(['/welcome']);
    //   }
    //   Swal.fire({
    //     title: 'Are you sure you want to log out?',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonText: 'Yes',
    //     cancelButtonText: 'No'
    //   }).then((result) => {
    //     if (result.value) {
    //       {
    //         var myItem = localStorage.getItem('themeLightActive');
    //         localStorage.clear();
    //         localStorage.setItem('themeLightActive',myItem);
    //         this.auth.checkLoginStatus();
    //         this.router.navigate(['/login']);
    //       }
    //     }
    //   });
    // }
    customSelector(val, type) {
        this.destName = val;
        if (type == 'local') {
            this.cSelectorText = val;
            this.customSelectorOpen = false;
            this.getWalletDetail(this.cSelectorText);
        }
        else if (type == 'sky') {
            this.cSelectorTextSky = val;
            this.customSelectorOpenSky = false;
            this.getSkyDetail(this.cSelectorTextSky, 'serial');
        }
    }
    customSelToggler(val) {
        this.customSelectorOpen = !this.customSelectorOpen;
    }
    customSelTogglerSky(val) {
        this.customSelectorOpenSky = !this.customSelectorOpenSky;
    }
    tabToggler(val) {
        this.tabSelector = val;
    }
    walletTab() {
        this.tabToggler('wallet');
        this.getWalletDetail(this.userLocal);
    }
    skyvaultTab() {
        this.tabToggler('skyvault');
        this.getSkyDetail(this.userSky, 'serial');
    }
    nftTab() {
        this.tabToggler('nft');
        this.goToGallery(this.nft);
        this.router.navigate(["/dashboard/create-nft-gallery"]);
    }
}
LeftPanelComponent.ɵfac = function LeftPanelComponent_Factory(t) { return new (t || LeftPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_avaterupdate_service__WEBPACK_IMPORTED_MODULE_7__["AvaterupdateService"])); };
LeftPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeftPanelComponent, selectors: [["app-left-panel"]], decls: 25, vars: 7, consts: [[1, "leftPanelHolder"], [1, "leftPlogoWrap"], ["src", "assets/logo_new_only_cc.svg", "alt", "", 1, "lpLogoImg"], [1, "lpBodyWrap"], [1, "lpBodyTop"], [1, "lpuserName"], [1, "totBlncText"], [1, "totBlncVal"], [1, "walletInfoOuter"], [1, "walletInfoWrapper", "walletInfoLocal"], [1, "walletInfoHolder"], [1, "tab-item", 3, "ngClass", "click"], [1, "tab-item", "mr-auto", 3, "ngClass", "click"], [1, "tabBody"], [4, "ngIf"], ["class", "", 4, "ngFor", "ngForOf"], [1, "wltInfoLeft"], ["href", "javascript:;", "routerLink", "/dashboard/create-localwallet-dash", 1, "addWallet", 3, "click"], ["src", "assets/add_circle_img.svg", "alt", "add circle"], [1, ""], [1, "walletAcntHolder", 2, "cursor", "pointer", 3, "ngClass", "click"], ["src", "assets/1093522-200.png", "alt", "localwallet icon", 1, "wallet-icon", "mr-3"], [1, "acntVal", "mr-auto"], [1, "acntVal"], ["href", "javascript:;", "routerLink", "/dashboard/create-skyvault-dash", 1, "addWallet", 3, "click"], ["src", "assets/skywallet-cloud-white.svg", "alt", "skyvault img", 1, "mr-3"], [1, "acntHoldName", "mr-auto"], [1, "lpBottomPart"], ["href", "javascript:;", "routerLink", "/dashboard/create-nft-gallery", "routerLinkActive", "active", 1, "bottomLink", 3, "routerLinkActiveOptions", "click"], ["src", "assets/nft.png", "alt", "settings", 2, "margin-left", "-10px"]], template: function LeftPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Total Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "cc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPanelComponent_Template_a_click_15_listener() { return ctx.walletTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Wallets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPanelComponent_Template_a_click_17_listener() { return ctx.skyvaultTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "SkyVaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftPanelComponent_Template_a_click_19_listener() { return ctx.nftTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "NFTs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LeftPanelComponent_div_22_Template, 8, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LeftPanelComponent_div_23_Template, 8, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LeftPanelComponent_div_24_Template, 6, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.totalBalance + ctx.totalSkyBalance, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.tabSelector == "wallet" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.tabSelector == "skyvault" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.tabSelector == "nft" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tabSelector == "wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tabSelector == "skyvault");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tabSelector == "nft");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWZ0LXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeftPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-left-panel',
                templateUrl: './left-panel.component.html',
                styleUrls: ['./left-panel.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_avaterupdate_service__WEBPACK_IMPORTED_MODULE_7__["AvaterupdateService"] }]; }, null); })();


/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");





const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'news',
                loadChildren: () => __webpack_require__.e(/*! import() | news-news-module */ "news-news-module").then(__webpack_require__.bind(null, /*! ./news/news.module */ "xy16")).then(m => m.NewsModule)
            },
            {
                path: 'raida_status',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./raida-status/raida-status.module */ "y2C+")).then(m => m.Raida_StatusModule)
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "Bt8u")).then(m => m.HomeModule)
            },
            {
                path: 'transactions',
                loadChildren: () => __webpack_require__.e(/*! import() | transactions-transactions-module */ "transactions-transactions-module").then(__webpack_require__.bind(null, /*! ./transactions/transactions.module */ "p1e0")).then(m => m.TransactionsModule)
            },
            {
                path: 'functions',
                loadChildren: () => __webpack_require__.e(/*! import() | functions-functions-module */ "functions-functions-module").then(__webpack_require__.bind(null, /*! ./functions/functions.module */ "zf3j")).then(m => m.FunctionsModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "Xxu/")).then(m => m.SettingsModule)
            },
            {
                path: 'create-localwallet-dash',
                loadChildren: () => __webpack_require__.e(/*! import() | create-localwallet-dash-create-localwallet-dash-module */ "create-localwallet-dash-create-localwallet-dash-module").then(__webpack_require__.bind(null, /*! ./create-localwallet-dash/create-localwallet-dash.module */ "U3qh")).then(m => m.CreateLocalwalletDashModule)
            },
            {
                path: 'create-skyvault-dash',
                loadChildren: () => __webpack_require__.e(/*! import() | create-sky-dash-create-sky-dash-module */ "create-sky-dash-create-sky-dash-module").then(__webpack_require__.bind(null, /*! ./create-sky-dash/create-sky-dash.module */ "e06R")).then(m => m.CreateSkyDashModule)
            },
            {
                path: 'create-nft',
                loadChildren: () => __webpack_require__.e(/*! import() | create-nft-wallet-create-nft-wallet-module */ "create-nft-wallet-create-nft-wallet-module").then(__webpack_require__.bind(null, /*! ./create-nft-wallet/create-nft-wallet.module */ "s66r")).then(m => m.CreateNftWalletModule)
            },
            {
                path: 'create-nft-gallery',
                loadChildren: () => __webpack_require__.e(/*! import() | create-nft-wallet-nft-gallery-nft-gallery-module */ "create-nft-wallet-nft-gallery-nft-gallery-module").then(__webpack_require__.bind(null, /*! ./create-nft-wallet/nft-gallery/nft-gallery.module */ "/Pgm")).then(m => m.NftGalleryModule)
            },
            {
                path: 'existing-nft',
                loadChildren: () => __webpack_require__.e(/*! import() | create-nft-wallet-existing-nft-existing-nft-module */ "create-nft-wallet-existing-nft-existing-nft-module").then(__webpack_require__.bind(null, /*! ./create-nft-wallet/existing-nft/existing-nft.module */ "DI+o")).then(m => m.ExistingNftModule)
            },
            {
                path: 'import-nft',
                loadChildren: () => __webpack_require__.e(/*! import() | create-nft-wallet-import-nft-import-nft-module */ "create-nft-wallet-import-nft-import-nft-module").then(__webpack_require__.bind(null, /*! ./create-nft-wallet/import-nft/import-nft.module */ "1KyB")).then(m => m.ImportNftModule)
            },
            {
                path: 'help',
                loadChildren: () => __webpack_require__.e(/*! import() | help-help-module */ "help-help-module").then(__webpack_require__.bind(null, /*! ./help/help.module */ "cRKB")).then(m => m.HelpModule)
            },
        ],
    },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./left-panel/left-panel.component */ "K7t7");





function DashboardComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_container_0_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.closeLeftBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-left-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_container_0_div_1_Template, 4, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_container_0_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.callLeftBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showLeftBarOnSm);
} }
function DashboardComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class DashboardComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.showHome = true;
        this.showLeftBarOnSm = true;
        this.router.events.subscribe(value => {
            if (this.router.url.toString() == '/dashboard/home') {
                this.showHome = true;
            }
            else {
                this.showHome = false;
            }
        });
    }
    ngOnInit() {
        if (window.innerWidth < 992) {
            this.showLeftBarOnSm = false;
        }
    }
    callLeftBar() {
        if (window.innerWidth < 992) {
            this.showLeftBarOnSm = true;
        }
    }
    closeLeftBar() {
        if (window.innerWidth < 992) {
            this.showLeftBarOnSm = false;
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "leftPanleWrapper", 4, "ngIf"], [1, "rightpanelWrapper"], ["href", "javascript:;", 1, "menuCaller", 3, "click"], ["src", "assets/menu.svg", "alt", ""], [1, "leftPanleWrapper"], ["href", "javascript:;", 1, "backArroLeft", 3, "click"], ["src", "assets/arrow.svg", "alt", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_ng_container_0_Template, 6, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHome);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_3__["LeftPanelComponent"]], styles: [".leftPanleWrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 300px;\n  padding: 20px;\n  border-radius: 0 20px 20px 0;\n  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  z-index: 999;\n}\n@media screen and (max-width: 768px) {\n  .leftPanleWrapper[_ngcontent-%COMP%] {\n    position: absolute;\n    padding-top: 30px;\n  }\n}\n.rightpanelWrapper[_ngcontent-%COMP%] {\n  width: calc(100% - 300px);\n  margin-left: 300px;\n  padding: 30px;\n  min-height: 100vh;\n}\n@media screen and (max-width: 768px) {\n  .rightpanelWrapper[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-left: 0 !important;\n    padding: 20px;\n  }\n}\n.backArroLeft[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 20px;\n  top: 5px;\n}\n@media screen and (max-width: 768px) {\n  .backArroLeft[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n.backArroLeft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBWEo7SUFZUSxrQkFBQTtJQUVBLGlCQUFBO0VBRU47QUFDRjtBQUFBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxpQkFBQTtBQUFKO0FBRUk7RUFUSjtJQVVRLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFDSjtBQUFJO0VBTEo7SUFNUSxxQkFBQTtFQUdOO0FBQ0Y7QUFGSTtFQUNJLFlBQUE7QUFJUiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdFBhbmxlV3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XHJcbiAgICBib3gtc2hhZG93OiA0cHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbi5yaWdodHBhbmVsV3JhcHBlciB7XHJcbiAgICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMzMwcHgpO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAzMzBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrQXJyb0xlZnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "Oy4E");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
/* harmony import */ var _left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./left-panel/left-panel.component */ "K7t7");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");









class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_4__["LeftPanelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_4__["LeftPanelComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ojcs":
/*!**************************************************!*\
  !*** ./src/app/services/avaterupdate.service.ts ***!
  \**************************************************/
/*! exports provided: AvaterupdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaterupdateService", function() { return AvaterupdateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class AvaterupdateService {
    constructor(http) {
        this.http = http;
        this.objectList = [
            "face",
            "dimpal",
            "fracal",
            "earring",
            "eyeshadow",
            "eyeball",
            "eye",
            "eyebrow",
            "eyebrow_colour",
            "glass",
            "hair",
            "hair_colour",
            "hat_hair",
            "facial_hair",
            "facial_hair_colour",
            "mouth",
            "mouthColor",
            "nose"
        ];
        this.apiUrl = "https://www.bigbadmoji.com/api/";
    }
    getDefaultImage(data) {
        return this.http.get(this.apiUrl + "get-only-default-face?gender=" + data);
    }
    getListOfObject(data) {
        let objectname = data.object;
        let imgId = localStorage.getItem('imgId');
        return this.http.get(this.apiUrl + "get-only-face-option?generated_image_id=" + imgId + "&object=" + objectname);
    }
    getAndSetNewAvaterImg(data) {
        let objectname = data.object;
        let imgId = localStorage.getItem('imgId');
        let objectId = data.objectId;
        return this.http.get(this.apiUrl + "set-only-face-option?generated_image_id=" + imgId + "&object=" + objectname + "&object_id=" + objectId);
    }
}
AvaterupdateService.ɵfac = function AvaterupdateService_Factory(t) { return new (t || AvaterupdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AvaterupdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AvaterupdateService, factory: AvaterupdateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvaterupdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map