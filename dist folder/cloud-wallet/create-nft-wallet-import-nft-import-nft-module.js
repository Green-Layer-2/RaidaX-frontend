(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-nft-wallet-import-nft-import-nft-module"],{

/***/ "+k+I":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/import-nft/import-nft-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ImportNftRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportNftRoutingModule", function() { return ImportNftRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _import_nft_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-nft.component */ "fovX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");






const routes = [
    {
        path: '',
        component: _import_nft_component__WEBPACK_IMPORTED_MODULE_2__["ImportNftComponent"]
    }
];
class ImportNftRoutingModule {
}
ImportNftRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImportNftRoutingModule });
ImportNftRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImportNftRoutingModule_Factory(t) { return new (t || ImportNftRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImportNftRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportNftRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "1KyB":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/import-nft/import-nft.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ImportNftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportNftModule", function() { return ImportNftModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _import_nft_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-nft-routing.module */ "+k+I");
/* harmony import */ var _import_nft_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-nft.component */ "fovX");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");







class ImportNftModule {
}
ImportNftModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImportNftModule });
ImportNftModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImportNftModule_Factory(t) { return new (t || ImportNftModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _import_nft_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImportNftRoutingModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImportNftModule, { declarations: [_import_nft_component__WEBPACK_IMPORTED_MODULE_3__["ImportNftComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _import_nft_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImportNftRoutingModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportNftModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_import_nft_component__WEBPACK_IMPORTED_MODULE_3__["ImportNftComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _import_nft_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImportNftRoutingModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "fovX":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/import-nft/import-nft.component.ts ***!
  \********************************************************************************/
/*! exports provided: ImportNftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportNftComponent", function() { return ImportNftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lottie */ "NiZn");









function ImportNftComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Total number of files selected : ", ctx_r0.files.length, " ");
} }
function ImportNftComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportNftComponent_div_23_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.deleteFile(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r3);
} }
function ImportNftComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function ImportNftComponent_div_27_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loadingMessage);
} }
const _c0 = function (a0) { return { "btnDisable": a0 }; };
class ImportNftComponent {
    constructor(api, router, storage) {
        this.api = api;
        this.router = router;
        this.storage = storage;
        this.file = [];
        this.filepick = [];
        this.files = [];
        this.base = [];
        this.btn = true;
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
        };
    }
    ngOnInit() {
        this.userLocal = localStorage.getItem('userLocal');
        this.type = localStorage.getItem('wallet');
    }
    getPath() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.importFile();
                if (response.status == "success") {
                    this.files = (_a = response === null || response === void 0 ? void 0 : response.payload) === null || _a === void 0 ? void 0 : _a.items_picked;
                    this.btn = false;
                    for (let i = 0; i < this.files.length; i++) {
                        var last = this.files[i].substring(this.files[i].lastIndexOf(".") + 1, this.files[i].length);
                        var file = this.files[i];
                        var pop = file.split('.').slice(0, -1).join('.');
                        var pop2 = pop.split('.').pop();
                        if (pop2 != 'ccnft') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: 'Please make sure all the files that you have selected have proper format',
                                icon: 'info',
                                confirmButtonText: 'Okay'
                            });
                            this.files = [];
                            this.btn = true;
                        }
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    importNFT() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("test");
            try {
                for (let i = 0; i < ((_a = this.files) === null || _a === void 0 ? void 0 : _a.length); i++) {
                    this.base.push({ 'type': 'file', 'data': this.files[i] });
                }
                var data = {
                    name: "NFTs",
                    tag: this.tag,
                    items: this.base
                };
                this.showLoading(true);
                this.loadingMessage = 'Importing NFTs...';
                let response = yield this.api.import(data);
                if (response.status === "success") {
                    console.log('hi');
                    this.doCheck((_b = response.payload) === null || _b === void 0 ? void 0 : _b.id, (data) => {
                    });
                }
                else {
                    this.showLoading(false);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: response.payload.message,
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) {
                            { }
                        }
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck(taskID, xdata) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        if ((((_c = (_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.pown_results) === null || _c === void 0 ? void 0 : _c.fracked) != 0) || (((_f = (_e = (_d = this.payload) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.pown_results) === null || _f === void 0 ? void 0 : _f.limbo) != 0) || ((_j = (_h = (_g = this.payload) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.pown_results) === null || _j === void 0 ? void 0 : _j.counterfeit) != 0) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: 'Failed to Import. The NFT that you are trying to import is not Authentic.',
                                icon: 'error',
                                confirmButtonText: 'Okay'
                            });
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        }
                        else {
                            this.showLoading(false);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: 'Successfully imported NFT to NFT Gallery',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            });
                            this.router.navigate(['/dashboard/create-nft-gallery']);
                        }
                    }
                    else {
                        this.showLoading(false);
                        this.files = [];
                        this.btn = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay'
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck(taskID, xdata);
                }, 500);
            }
        });
    }
    deleteFile(index) {
        this.files.splice(index, 1);
        if (this.files.length == 0) {
            this.btn = true;
        }
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
}
ImportNftComponent.ɵfac = function ImportNftComponent_Factory(t) { return new (t || ImportNftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"])); };
ImportNftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImportNftComponent, selectors: [["app-import-nft"]], decls: 28, vars: 7, consts: [[1, "transWrapper"], [1, "headerbackWrap"], ["href", "javascript:;", "routerLink", "/dashboard/create-nft-gallery", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "titleOne"], [1, "transBody"], [1, "gap20"], [1, "formField"], [1, "row"], [1, "col-md-4"], ["for", "username"], [1, "col-md-2"], [1, "filepicker"], [1, "icon_wrap", 3, "click"], ["src", "assets/folder_icon.svg", "alt", "", 1, "folderIcon"], [1, "col-6", "mt-2"], ["class", "", 4, "ngIf"], [1, ""], ["class", "file_upload justify-content-between", 4, "ngFor", "ngForOf"], [1, "transBottomFooter"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "ngClass", "click"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "file_upload", "justify-content-between"], [1, "position-relative", "uploadtextWrap"], [1, "pl-2", "text-white", "text-left", "progress_text", 2, "display", "flex", "align-items", "center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-cloud-download"], ["d", "M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"], ["d", "M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"], [1, "pl-2", "ulpldText"], ["href", "javascript:;", 1, "fa", "fa-trash", "text-danger", "fs-32", "pt-1", 3, "click"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function ImportNftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Import NFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select a file to Import:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportNftComponent_Template_div_click_17_listener() { return ctx.getPath(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ImportNftComponent_div_21_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ImportNftComponent_div_23_Template, 9, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportNftComponent_Template_a_click_25_listener() { return ctx.importNFT(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Import selected files");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ImportNftComponent_div_27_Template, 6, 2, "div", 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.files.length == 1 || ctx.files.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.btn));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieComponent"]], styles: [".file_upload[_ngcontent-%COMP%] {\n  background: #333;\n  padding: 8px 14px;\n  border-radius: 7px;\n  height: 42px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1wb3J0LW5mdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiaW1wb3J0LW5mdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlX3VwbG9hZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportNftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-import-nft',
                templateUrl: './import-nft.component.html',
                styleUrls: ['./import-nft.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=create-nft-wallet-import-nft-import-nft-module.js.map