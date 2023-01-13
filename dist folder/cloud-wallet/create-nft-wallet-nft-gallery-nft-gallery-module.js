(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-nft-wallet-nft-gallery-nft-gallery-module"],{

/***/ "/Pgm":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/nft-gallery/nft-gallery.module.ts ***!
  \*******************************************************************************/
/*! exports provided: NftGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftGalleryModule", function() { return NftGalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _nft_gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nft-gallery-routing.module */ "VB8d");
/* harmony import */ var _nft_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nft-gallery.component */ "PyQf");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-click-outside */ "Hicy");


//import { BrowserModule } from '@angular/platform-browser'







class NftGalleryModule {
}
NftGalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NftGalleryModule });
NftGalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NftGalleryModule_Factory(t) { return new (t || NftGalleryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            //BrowserModule,
            _nft_gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__["NftGalleryRoutingModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NftGalleryModule, { declarations: [_nft_gallery_component__WEBPACK_IMPORTED_MODULE_3__["NftGalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        //BrowserModule,
        _nft_gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__["NftGalleryRoutingModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NftGalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_nft_gallery_component__WEBPACK_IMPORTED_MODULE_3__["NftGalleryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    //BrowserModule,
                    _nft_gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__["NftGalleryRoutingModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PyQf":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/nft-gallery/nft-gallery.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NftGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftGalleryComponent", function() { return NftGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-lottie */ "NiZn");












function NftGalleryComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.frackedCheck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fix Fracked");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NftGalleryComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.limboCheck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fix Limbo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NftGalleryComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_17_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r13 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.getDetails(ctx_r14.sn1[i_r13]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("ngbTooltip", "Total number of copies = ", ctx_r2.total_sns[i_r13], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.img[i_r13], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NftGalleryComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_18_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.healthModal = !ctx_r16.healthModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Verify NFT Authenticity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_18_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.healthModal = !ctx_r18.healthModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "This process verifies the authenticity of your NFTs. If an NFT\u2019s associated coin is found to be fractured or counterfeit, it will be placed in the appropriate folder. Do you want to verify the authenticity of your NFTs?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NftGalleryComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_19_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.fixModal = !ctx_r19.fixModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Fix Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_19_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.fixModal = !ctx_r21.fixModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Fix your wallet's damaged/fracked coins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Do you want to fix your wallet: NFTs? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Yes, fix wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NftGalleryComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.fixlimboModal = !ctx_r22.fixlimboModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Fix Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_20_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.fixlimboModal = !ctx_r24.fixlimboModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Fix your wallet's limbo coins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Do you want to fix your wallet: Nfts? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Yes, fix wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NftGalleryComponent_div_21_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_div_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.Recycle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Recycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_div_11_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.withdraw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_div_11_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.UploadNft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Publish NFT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NftGalleryComponent_div_21_ng_container_16_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NftGalleryComponent_div_21_ng_container_16_div_8_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r36.selectImgs(ctx_r36.sn_detail, ctx_r36.title_detail, ctx_r36.dname_detail, $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r34.sn_detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r34.img_detail[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NftGalleryComponent_div_21_ng_container_16_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NftGalleryComponent_div_21_ng_container_16_div_9_div_2_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const value_r39 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r40.selectImgs(value_r39.nft_sn, ctx_r40.title_detail, ctx_r40.dname_detail, $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", value_r39.nft_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r39.nft_sn);
} }
function NftGalleryComponent_div_21_ng_container_16_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NftGalleryComponent_div_21_ng_container_16_div_9_div_2_Template, 8, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r35.nft_gallery);
} }
function NftGalleryComponent_div_21_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NftGalleryComponent_div_21_ng_container_16_div_8_Template, 9, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NftGalleryComponent_div_21_ng_container_16_div_9_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r26.title_detail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r26.desc_detail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r26.modalOpen2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.modalOpen2);
} }
function NftGalleryComponent_div_21_ng_container_17_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r42.sn_detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r42.img_detail[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NftGalleryComponent_div_21_ng_container_17_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", value_r46.nft_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r46.nft_sn);
} }
function NftGalleryComponent_div_21_ng_container_17_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NftGalleryComponent_div_21_ng_container_17_div_8_div_2_Template, 5, 2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r43.nft_gallery);
} }
function NftGalleryComponent_div_21_ng_container_17_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_ng_container_17_div_11_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r47.download_pngImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Download PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r44.verifiedDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r44.verifiedSn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r44.verifiedImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NftGalleryComponent_div_21_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NftGalleryComponent_div_21_ng_container_17_div_7_Template, 6, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NftGalleryComponent_div_21_ng_container_17_div_8_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NftGalleryComponent_div_21_ng_container_17_div_11_Template, 12, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r27.desc_detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r27.modalOpen2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.modalOpen2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.condition == "success");
} }
function NftGalleryComponent_div_21_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_ng_container_20_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r49.checkValidity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Confirm Authenticity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_ng_container_20_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r51.MintToExisting(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Make Copies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function NftGalleryComponent_div_21_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_ng_container_21_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r52.toggleAuthentication(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function NftGalleryComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.modalToggler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NFT Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function NftGalleryComponent_div_21_Template_div_clickOutside_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.closeWltFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.toggleWltFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NftGalleryComponent_div_21_div_11_Template, 7, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_21_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.modalToggler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NftGalleryComponent_div_21_ng_container_16_Template, 10, 4, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NftGalleryComponent_div_21_ng_container_17_Template, 12, 4, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NftGalleryComponent_div_21_ng_container_20_Template, 6, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NftGalleryComponent_div_21_ng_container_21_Template, 4, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.showWalletDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nftDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.nftDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nftDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.nftDetails);
} }
function NftGalleryComponent_div_22_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function NftGalleryComponent_div_22_div_27_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r60.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r59.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r59.loadingMessage);
} }
function NftGalleryComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_22_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r62.WithdrawModal = !ctx_r62.WithdrawModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Withdraw NFT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_22_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r64.WithdrawModal = !ctx_r64.WithdrawModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Withdraw to :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_22_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r65.getPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_div_22_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r66.exportBySerialNo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Yes, Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, NftGalleryComponent_div_22_div_27_Template, 6, 2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.showLoader);
} }
class NftGalleryComponent {
    constructor(api, sanitizer, storage, router) {
        this.api = api;
        this.sanitizer = sanitizer;
        this.storage = storage;
        this.router = router;
        this.passkeyImage = "";
        this.img = [];
        this.arr = [];
        this.title1 = [];
        this.dname1 = [];
        this.sn1 = [];
        this.total_sns = [];
        this.description1 = [];
        this.img_detail = [];
        this.sn_arr = [];
        this.sn_arr_all = [];
        this.healthModal = false;
        this.syncTitle = [];
        this.titlesToSync = [];
        this.dnsToSync = [];
        this.showLoader = false;
        this.loadingMessage = '';
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json',
        };
        this.merged = [];
        this.file = 'Select path';
        this.gallery = [];
        this.nft_gallery = [{
                nft_sn: 0,
                nft_image: ""
            }];
        this.count = 0;
        this.imgArray = new Array();
        this.nftDetails = true;
        this.modalOpen = false;
        this.modalOpen2 = false;
        // this.hasaccepted = false;
    }
    ngOnInit() {
        this.userLocal = localStorage.getItem('userLocal');
        if (localStorage.getItem('withdraw_path') != "" && localStorage.getItem('withdraw_path') != null && localStorage.getItem('withdraw_path') != undefined) {
            this.file = localStorage.getItem('withdraw_path');
            console.log("bye");
        }
        else {
            console.log("hye");
        }
        this.getNftByGroups();
        this.getBalance();
    }
    getNftByGroups() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.nftGroups();
                if (response.status === "success") {
                    console.log(response);
                    let data = response.payload;
                    console.log(data.length);
                    for (let i = 0; i < data.length; i++) {
                        let png = data[i].PNG;
                        this.title1[i] = data[i].title;
                        this.dname1[i] = data[i].domain;
                        this.description1[i] = data[i].description;
                        this.sn1[i] = data[i].sns;
                        this.total_sns[i] = data[i].total_sns;
                        this.passkeyImage = yield fetch(`data:image/png;base64,${png}`);
                        const blobs = yield this.passkeyImage.blob();
                        const newBlob = new Blob([blobs], { type: 'image/png' });
                        var downloadURL = window.URL.createObjectURL(blobs);
                        var link = document.createElement('a');
                        link.href = downloadURL;
                        this.blob = link.href;
                        this.arr[i] = this.blob;
                        this.img[i] = this.sanitizer.bypassSecurityTrustResourceUrl(this.blob);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getDetails(snvalue) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalOpen = !this.modalOpen;
            // this.hasaccepted = true;
            // this.selectImgs(this.sn_detail , this.title_detail , this.dname_detail, true);
            try {
                var data;
                if (snvalue.length > 1) {
                    data = snvalue[0];
                    this.sn_arr_all = snvalue;
                    this.nftDetails = true;
                    this.modalOpen2 = true;
                    this.nft_gallery = [{
                            nft_sn: 123,
                            nft_image: ""
                        }];
                    for (let i = 0; i < snvalue.length; i++) {
                        let response = yield this.api.displayDetails(snvalue[i]);
                        if (response.status === "success") {
                            //console.log(response);
                            this.title_detail = (_a = response.payload) === null || _a === void 0 ? void 0 : _a.hostname;
                            this.desc_detail = (_b = response.payload) === null || _b === void 0 ? void 0 : _b.description;
                            this.sn_detail = (_c = response.payload) === null || _c === void 0 ? void 0 : _c.sn;
                            this.dname_detail = (_d = response.payload) === null || _d === void 0 ? void 0 : _d.domain;
                            this.png_detail = (_e = response.payload) === null || _e === void 0 ? void 0 : _e.PNG;
                            this.passkeyImage = yield fetch(`data:image/png;base64,${this.png_detail}`);
                            const blobs = yield this.passkeyImage.blob();
                            const newBlob = new Blob([blobs], { type: 'image/png' });
                            var downloadURL = window.URL.createObjectURL(blobs);
                            var link = document.createElement('a');
                            link.href = downloadURL;
                            this.blob = link.href;
                            this.img_detail[i] = this.sanitizer.bypassSecurityTrustResourceUrl(this.blob);
                            this.nft_gallery.push({ nft_image: this.img_detail[i], nft_sn: this.sn_detail });
                            var count = Object.keys(this.nft_gallery).length;
                            //console.log("count:" + count)
                        }
                    }
                    var dup_array = this.nft_gallery.splice(0, 1);
                    // console.log("removed item:" + dup_array)
                    // for (let i = 0; i < count; i++) {
                    //   let item = this.nft_gallery[i]
                    //   console.log("final gallery:" + item['nft_image'])
                    //   console.log("final gallery:" + item['nft_sn'])
                    // }
                }
                else {
                    data = snvalue;
                    this.nftDetails = true;
                    this.modalOpen2 = false;
                    this.nft_gallery = [{
                            nft_sn: 123,
                            nft_image: ""
                        }];
                    let response = yield this.api.displayDetails(data);
                    if (response.status === "success") {
                        console.log(response);
                        this.title_detail = (_f = response.payload) === null || _f === void 0 ? void 0 : _f.hostname;
                        this.desc_detail = (_g = response.payload) === null || _g === void 0 ? void 0 : _g.description;
                        this.sn_detail = (_h = response.payload) === null || _h === void 0 ? void 0 : _h.sn;
                        this.dname_detail = (_j = response.payload) === null || _j === void 0 ? void 0 : _j.domain;
                        this.png_detail = (_k = response.payload) === null || _k === void 0 ? void 0 : _k.PNG;
                        this.passkeyImage = yield fetch(`data:image/png;base64,${this.png_detail}`);
                        const blobs = yield this.passkeyImage.blob();
                        const newBlob = new Blob([blobs], { type: 'image/png' });
                        var downloadURL = window.URL.createObjectURL(blobs);
                        var link = document.createElement('a');
                        link.href = downloadURL;
                        this.blob = link.href;
                        //console.log("image:" + this.blob)
                        this.img_detail[0] = this.sanitizer.bypassSecurityTrustResourceUrl(this.blob);
                        //console.log("image:" + this.img_detail)
                        this.nft_gallery.push({ nft_image: this.blob, nft_sn: this.sn_detail });
                    }
                    var dup_array = this.nft_gallery.splice(0, 1);
                    //console.log("removed item:" + dup_array)
                    var count = Object.keys(this.nft_gallery).length;
                    console.log("count:" + count);
                    for (let i = 0; i < count; i++) {
                        let item = this.nft_gallery[i];
                        console.log("final gallery:" + item['nft_image']);
                        console.log("final gallery:" + item['nft_sn']);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    download_pngImg() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = this.sn_detail;
                let response = yield this.api.checkPngValidity(data);
                // console.log(data);
                console.log("test:" + this.sn_detail);
                if (response.status === "success") {
                    this.verifiedPng = (_a = response.payload) === null || _a === void 0 ? void 0 : _a.Data;
                    console.log("validity :" + this.verifiedPng);
                    this.passkeyImage = yield fetch(`data:image/png;base64,${this.verifiedPng}`);
                    const blobs = yield this.passkeyImage.blob();
                    const newBlob = new Blob([blobs], { type: 'image/png' });
                    var downloadURL = window.URL.createObjectURL(blobs);
                    var link = document.createElement('a');
                    link.href = downloadURL;
                    link.download = this.title_detail + ".png";
                    link.click();
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    withdraw() {
        if (this.sn_arr.length == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Please select an NFT',
                icon: 'info',
                confirmButtonText: 'Okay',
            });
        }
        else {
            this.WithdrawModal = !this.WithdrawModal;
        }
    }
    getPath() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.filePick();
                console.log(response);
                if (response.status === "success") {
                    this.file = (_a = response === null || response === void 0 ? void 0 : response.payload) === null || _a === void 0 ? void 0 : _a.items_picked[0];
                    localStorage.setItem('withdraw_path', this.file);
                    console.log(this.file);
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    exportBySerialNo() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: "NFTs",
                    tag: "From John",
                    type: "png",
                    folder: this.file,
                    sns: this.sn_arr
                };
                let response = yield this.api.exportSNs(data);
                console.log(data);
                if (response.status === "success") {
                    this.doCheck12((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck12(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        window.location.reload();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Successfully withdrawn NFTs.",
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
                        console.log("yay! process completed");
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck12(taskID, xdata);
                }, 500);
            }
        });
    }
    selectImgs(snvalue, titlevalue, dnvalue, isChecked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //alert(isChecked)
                if (isChecked) {
                    this.merged = this.merged.concat(snvalue);
                    this.titlesToSync = this.titlesToSync.concat(titlevalue);
                    this.dnsToSync = this.dnsToSync.concat(dnvalue);
                    //console.log("merged:" + this.merged)
                    //this.titlesToSync.push(titlevalue)
                    //this.dnsToSync.push(dnvalue)
                    this.sn_arr = this.merged;
                    for (let i = 0; i < this.sn_arr.length; i++) {
                        //console.log("if :" + this.sn_arr)
                        //console.log('synctitle:' + this.titlesToSync)
                        //console.log('synctitle:' + this.titlesToSync)
                    }
                }
                else {
                    //console.log("snarray :" + snvalue)
                    this.sn_arr.forEach((item, index) => {
                        if (snvalue == item)
                            this.sn_arr.splice(index, 1);
                        // console.log("snvalue:" + snvalue)
                        // console.log("item to be removed:" + item)
                        // console.log("snarray in else:" + this.sn_arr)
                    });
                    this.titlesToSync.forEach((item, index) => {
                        if (titlevalue == item)
                            this.titlesToSync.splice(index, 1);
                    });
                    this.dnsToSync.forEach((item, index) => {
                        if (dnvalue == item)
                            this.dnsToSync.splice(index, 1);
                    });
                }
                for (let i = 0; i < this.sn_arr.length; i++) {
                    console.log("final title:" + this.titlesToSync);
                    console.log("final:" + this.sn_arr);
                    console.log("final dname:" + this.dnsToSync);
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getBalance() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = "NFTs";
            try {
                let response = yield this.api.getTransaction(data);
                this.transaction = (_a = response.payload) === null || _a === void 0 ? void 0 : _a.balance;
                this.frackedcount = (_b = response.payload) === null || _b === void 0 ? void 0 : _b.fracked_count;
                this.limbocount = (_c = response.payload) === null || _c === void 0 ? void 0 : _c.limbo_count;
                console.log("balance:" + response);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    healthCheck() {
        if (this.transaction === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Wallet is empty.",
                icon: 'info',
                confirmButtonText: 'Okay',
            }).then((result) => {
                if (result.value) { }
            });
        }
        else {
            this.healthModal = !this.healthModal;
        }
    }
    frackedCheck() {
        if (this.transaction === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Wallet is empty.",
                icon: 'info',
                confirmButtonText: 'Okay',
            }).then((result) => {
                if (result.value) { }
            });
        }
        else {
            this.fixModal = !this.fixModal;
        }
    }
    limboCheck() {
        if (this.transaction === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Wallet is empty.",
                icon: 'info',
                confirmButtonText: 'Okay',
            }).then((result) => {
                if (result.value) { }
            });
        }
        else {
            this.fixlimboModal = !this.fixlimboModal;
        }
    }
    Recycle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.sn_arr.length == 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Please select an NFT',
                        icon: 'info',
                        confirmButtonText: 'Okay',
                    });
                    return;
                }
                console.log("data from recycle:" + this.sn_arr);
                //var data = this.sn_arr;
                var name = this.userLocal;
                if (this.sn_arr.length > 0) {
                    for (let i = 0; i <= this.sn_arr.length; i++) {
                        this.data = this.sn_arr[i];
                        // alert("sn.arr" + this.sn_arr[i])
                        console.log("snarr recycle:" + this.data);
                        let response = yield this.api.deleteNfts(this.data, name);
                        // console.log(data);
                        if (response.status === "success") {
                            console.log("recycle call :" + response);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Your NFTs have been successfully turned into coins and your coins have been moved to" + " " + this.userLocal,
                                icon: 'success',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) { }
                            });
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                            this.router.navigate(['/dashboard/create-nft-gallery']);
                        }
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
            setTimeout(() => {
                this.Recycle();
            }, 500);
        });
    }
    UploadNft() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.showLoading(true);
                this.loadingMessage = "Syncing NFTs...";
                if (this.titlesToSync.length == 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Please select an NFT',
                        confirmButtonText: 'Okay',
                        icon: 'info'
                    });
                }
                for (let i = 0; i < this.titlesToSync.length; i++) {
                    var data = {
                        host_name: this.titlesToSync[i],
                        domain_name: this.dnsToSync[i],
                        create_txt: true,
                        nft_name: "NFTs",
                    };
                    this.response = yield this.api.syncNft(data);
                    console.log(data);
                    if (this.response.status === "success") {
                        console.log('wohoo! it works.');
                        this.showLoading(false);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Successfully synced NFTs",
                            icon: 'info',
                            confirmButtonText: 'Okay',
                        });
                        window.location.reload();
                        this.router.navigate(['/dashboard/create-nft-gallery']);
                    }
                    else {
                        this.showLoading(false);
                        this.count = this.count + 1;
                        // this.title = this.response.payload.message
                    }
                }
                if (this.count >= 1) {
                    console.log(this.count);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: this.response.payload.message,
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    this.router.navigate(['/dashboard/create-nft-gallery']);
                }
                this.showLoading(false);
                return;
            }
            catch (e) {
                // this.showLoader = false;
                console.log(e);
            }
            setTimeout(() => {
                this.UploadNft();
            }, 500);
        });
    }
    checkValidity() {
        this.toggleAuthentication();
        this.confirmAuthenticity();
    }
    confirmAuthenticity() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = this.sn_detail;
                let response = yield this.api.checkPngValidity(data);
                // console.log(data);
                console.log("test:" + this.sn_detail);
                this.condition = response.status;
                if (response.status === "success") {
                    this.verifiedPng = (_a = response.payload) === null || _a === void 0 ? void 0 : _a.Data;
                    console.log("validity :" + this.verifiedPng);
                    this.passkeyImage = yield fetch(`data:image/png;base64,${this.verifiedPng}`);
                    const blobs = yield this.passkeyImage.blob();
                    const newBlob = new Blob([blobs], { type: 'image/png' });
                    var downloadURL = window.URL.createObjectURL(blobs);
                    var link = document.createElement('a');
                    link.href = downloadURL;
                    this.blob = link.href;
                    this.verifiedImg = this.sanitizer.bypassSecurityTrustResourceUrl(this.blob);
                    this.confirmDescription();
                }
                else if (response.status === "error") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: (_b = response.payload) === null || _b === void 0 ? void 0 : _b.message,
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) {
                        }
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    confirmDescription() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = this.sn_detail;
                let response = yield this.api.checkDescValidity(data);
                // console.log(data);
                console.log("test:" + this.sn_detail);
                if (response.status === "success") {
                    this.verifiedDesc = response.payload;
                    this.confirmUnique();
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    confirmUnique() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = this.sn_detail;
                let response = yield this.api.checkUniqueValidity(data);
                // console.log(data);
                console.log("test:" + this.sn_detail);
                if (response.status === "success") {
                    this.verifiedSn = (_a = response.payload) === null || _a === void 0 ? void 0 : _a.Data[0].Sn;
                    console.log(this.verifiedSn);
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    toggleWltFunc() {
        this.showWalletDropdown = !this.showWalletDropdown;
    }
    closeWltFunc() {
        this.showWalletDropdown = false;
    }
    toggleAuthentication() {
        this.nftDetails = !this.nftDetails;
    }
    modalToggler() {
        this.modalOpen = !this.modalOpen;
        this.nftDetails = true;
    }
    modalToggler2() {
        this.modalOpen2 = !this.modalOpen2;
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
    getCorrectRoute() {
        this.router.navigate(['/dashboard/create-nft']);
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    getRoute() {
        this.router.navigate(['/dashboard/import-nft']);
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    MintToExisting() {
        this.title_name = this.title_detail;
        this.domain_name = this.dname_detail;
        console.log("tab" + this.title_name);
        if (this.title_name != '') {
            this.router.navigate(['/dashboard/existing-nft'], { queryParams: { title_name: this.title_name, domain_name: this.domain_name, snvalue: this.sn_detail } });
        }
    }
}
NftGalleryComponent.ɵfac = function NftGalleryComponent_Factory(t) { return new (t || NftGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
NftGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NftGalleryComponent, selectors: [["app-nft-gallery"]], decls: 23, vars: 8, consts: [[1, "nftGalleryWrap"], [1, "nftGalHeadWrap"], [1, "headerbackWrap"], ["src", "assets/nft.png", "alt", "localwallet icon", 1, "nft-icon", "mr-3"], [1, "titleOne"], [1, "btnFlexWrap"], ["href", "javascript:;", 1, "btnCustomBlue", 3, "click"], ["href", "javascript:;", 1, "btnCustomWhite", 3, "click"], ["href", "javascript:;", "class", "btnCustomBlue", 3, "click", 4, "ngIf"], [1, "zoom-in"], [1, "row"], ["class", "p-2", 4, "ngFor", "ngForOf"], ["class", "modalContainer", 4, "ngIf"], ["class", "modalContainer1", 4, "ngIf"], [1, "p-2"], [1, "nftsHolder", "checked"], ["alt", "Image Source", "data-toggle", "tooltip", "tooltipClass", "my-custom-class", "data-placement", "top", 1, "nfts", 3, "src", "ngbTooltip", "click"], [1, "modalContainer"], [1, "modalOverlay", 3, "click"], [1, "modalWrap", "modalMedium"], [1, "modalHeader"], [1, "modalClose", 3, "click"], ["src", "assets/close-white.svg", "alt", "icon"], [1, "modalBody"], [1, "gap20"], [1, "sectionOne"], [1, "modalSubhed"], [1, "gap50"], [1, "modalFooter"], [1, "buttonWrap"], ["routerLink", "/dashboard/functions/nft-health", 1, "btnCustomBlue", "buttonWide"], ["routerLink", "/dashboard/functions/fix-nft", 1, "btnCustomBlue", "buttonWide"], ["routerLink", "/dashboard/functions/fix-nft-limbo", 1, "btnCustomBlue", "buttonWide"], [1, "ml-auto", "customdropDownHolder", 3, "clickOutside"], [1, "textWithIcon"], ["src", "assets/caret-down.svg", "alt", "", 1, "imgInBtn"], ["class", "dropDownBox", 4, "ngIf"], [4, "ngIf"], [1, "dropDownBox"], ["href", "javascript:;", 3, "click"], [1, "gap10"], [1, "modalDesc"], [1, "modalSmDesc"], [1, "nftsHolder", "nftMainImgHolder", "checked"], [1, "customCheckboxWrap"], ["type", "checkbox", 1, "memCheck", 3, "change"], [1, "checkmarkCheck"], ["alt", "Image Source", 1, "nftMainImg", 3, "src"], [1, "nftsHolderSm", "checked"], ["alt", "Image Source", 2, "width", "auto", "height", "200px", "padding-left", "5px", 3, "src"], [1, "dark_mode_text"], [1, "authenticity_wrap"], [1, "auth_left_panel"], [1, "auth_right_panel"], [1, "nftMainImgHolder"], ["alt", "", 1, "nftMainImg", "nftMainImgSm", 3, "src"], ["class", "col-lg-3 col-md-3 col-6 p-1 m-2", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-3", "col-6", "p-1", "m-2"], [1, "nftsHolder"], ["alt", "Image Source", 2, "width", "100%", "height", "100%", "padding-left", "5px", 3, "src"], [2, "padding", "20px", "font-size", "10px"], [1, "btnCustomWhite", 3, "click"], [1, "btnCustomBlue", 3, "click"], [1, "btnCustomBlue", "m-2", 3, "click"], [1, "modalContainer1"], [1, "modalOverlay1", 3, "click"], [1, "formField"], [1, "col-md-4"], ["for", "username"], [1, "col-md-2"], [1, "filepicker"], [1, "icon_wrap", 3, "click"], ["src", "assets/folder_icon.svg", "alt", "", 1, "folderIcon"], [1, "btnCustomBlue", "buttonWide", 3, "click"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function NftGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NFT Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_Template_a_click_7_listener() { return ctx.getCorrectRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Create New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_Template_a_click_9_listener() { return ctx.getRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftGalleryComponent_Template_a_click_11_listener() { return ctx.healthCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Verify Coin Authenticity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NftGalleryComponent_a_13_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NftGalleryComponent_a_14_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NftGalleryComponent_div_17_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NftGalleryComponent_div_18_Template, 18, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NftGalleryComponent_div_19_Template, 20, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NftGalleryComponent_div_20_Template, 20, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NftGalleryComponent_div_21_Template, 22, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, NftGalleryComponent_div_22_Template, 28, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.frackedcount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.limbocount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.healthModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fixModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fixlimboModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.WithdrawModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], ng_click_outside__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideDirective"], ngx_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-right: 2%;\n  margin-left: 5%;\n}\n\n.nft-icon[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.nftGalleryWrap[_ngcontent-%COMP%]   .btnFlexWrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n@media (max-width: 576px) {\n  .nftGalleryWrap[_ngcontent-%COMP%]   .btnFlexWrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    margin-top: 30px;\n    margin-bottom: 10px;\n  }\n}\n\n.nftGalleryWrap[_ngcontent-%COMP%]   .btnFlexWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .nftGalleryWrap[_ngcontent-%COMP%]   .btnFlexWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n@media (max-width: 576px) {\n  .nftGalleryWrap[_ngcontent-%COMP%]   .btnFlexWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .nftGalleryWrap[_ngcontent-%COMP%]   .btnFlexWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-right: 5px;\n    margin-bottom: 5px;\n  }\n}\n\n.nftsHolder[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 0.1rem;\n  position: relative;\n  cursor: pointer;\n}\n\n.nftsHolder[_ngcontent-%COMP%]:hover   .customCheckboxWrap[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.nftsHolder.checked[_ngcontent-%COMP%]   .customCheckboxWrap[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.nftsHolder[_ngcontent-%COMP%]   .customCheckboxWrap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 7px;\n  opacity: 0;\n  transition: all 0.1s ease;\n}\n\n.nftsHolderSm[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 0.1rem;\n  position: relative;\n  cursor: pointer;\n}\n\n.nftsHolderSm[_ngcontent-%COMP%]:hover   .customCheckboxWrap[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.nftsHolderSm.checked[_ngcontent-%COMP%]   .customCheckboxWrap[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.nftsHolderSm[_ngcontent-%COMP%]   .customCheckboxWrap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 7px;\n  opacity: 0;\n  transition: all 0.1s ease;\n}\n\n.nftsHolderSm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 16px;\n  color: gray;\n}\n\n.nfts[_ngcontent-%COMP%] {\n  width: auto;\n  height: 150px;\n  background-size: cover;\n}\n\n.nftMainImgHolder[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 0.1rem;\n}\n\n.nftMainImgHolder[_ngcontent-%COMP%]   .nftMainImg[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n@media (max-width: 576px) {\n  .nftMainImgHolder[_ngcontent-%COMP%]   .nftMainImg[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n\n.nftMainImgHolder[_ngcontent-%COMP%]   .nftMainImgSm[_ngcontent-%COMP%] {\n  height: 250px;\n}\n\n@media (max-width: 576px) {\n  .nftMainImgHolder[_ngcontent-%COMP%]   .nftMainImgSm[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n}\n\n.authenticity_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n@media screen and (max-width: 576px) {\n  .authenticity_wrap[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: -5px;\n  }\n}\n\n.authenticity_wrap[_ngcontent-%COMP%]   .auth_left_panel[_ngcontent-%COMP%], .authenticity_wrap[_ngcontent-%COMP%]   .auth_right_panel[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  width: 50%;\n}\n\n@media screen and (max-width: 576px) {\n  .authenticity_wrap[_ngcontent-%COMP%]   .auth_left_panel[_ngcontent-%COMP%], .authenticity_wrap[_ngcontent-%COMP%]   .auth_right_panel[_ngcontent-%COMP%] {\n    padding: 0 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmZ0LWdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBUjs7QUFFUTtFQUxKO0lBTVEsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFDVjtBQUNGOztBQUNROztFQUVJLGtCQUFBO0FBQ1o7O0FBQ1k7RUFKSjs7SUFLUSxpQkFBQTtJQUNBLGtCQUFBO0VBR2Q7QUFDRjs7QUFFQTtFQUNJLHNCQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHUTtFQUNJLFVBQUE7QUFEWjs7QUFNUTtFQUNJLFVBQUE7QUFKWjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFOUjs7QUFnQkE7RUFDSSxzQkFBQTtFQUVBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBZEo7O0FBaUJRO0VBQ0ksVUFBQTtBQWZaOztBQW9CUTtFQUNJLFVBQUE7QUFsQlo7O0FBc0JJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQXBCUjs7QUFzQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXBCUjs7QUF1QkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBcEJKOztBQXVCQTtFQUNJLHNCQUFBO0VBRUEscUJBQUE7QUFyQko7O0FBdUJJO0VBRUksYUFBQTtBQXRCUjs7QUF3QlE7RUFKSjtJQUtRLGFBQUE7RUFyQlY7QUFDRjs7QUF5Qkk7RUFDSSxhQUFBO0FBdkJSOztBQXlCUTtFQUhKO0lBSVEsYUFBQTtFQXRCVjtBQUNGOztBQTBCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF2Qko7O0FBeUJJO0VBTko7SUFPUSxpQkFBQTtJQUNBLGtCQUFBO0VBdEJOO0FBQ0Y7O0FBd0JJOztFQUVJLGVBQUE7RUFDQSxVQUFBO0FBdEJSOztBQXdCUTtFQUxKOztJQU1RLGNBQUE7RUFwQlY7QUFDRiIsImZpbGUiOiJuZnQtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4ubmZ0LWljb257XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLm5mdEdhbGxlcnlXcmFwIHtcclxuICAgIC5idG5GbGV4V3JhcCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhLFxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZnRzSG9sZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmN1c3RvbUNoZWNrYm94V3JhcCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuY2hlY2tlZCB7XHJcbiAgICAgICAgLmN1c3RvbUNoZWNrYm94V3JhcCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21DaGVja2JveFdyYXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcclxuICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLy8gc3BhbntcclxuICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IGF1dG87XHJcbiAgICAvLyAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLy8gICAgIGNvbG9yOiBncmF5O1xyXG4gICAgLy8gfVxyXG59XHJcbi5uZnRzSG9sZGVyU20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8vYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAuY3VzdG9tQ2hlY2tib3hXcmFwIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5jaGVja2VkIHtcclxuICAgICAgICAuY3VzdG9tQ2hlY2tib3hXcmFwIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbUNoZWNrYm94V3JhcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxufVxyXG4ubmZ0cyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubmZ0TWFpbkltZ0hvbGRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG5cclxuICAgIC5uZnRNYWluSW1nIHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLm5mdE1haW5JbWdTbSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdXRoZW50aWNpdHlfd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRoX2xlZnRfcGFuZWwsXHJcbiAgICAuYXV0aF9yaWdodF9wYW5lbCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NftGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-nft-gallery',
                templateUrl: './nft-gallery.component.html',
                styleUrls: ['./nft-gallery.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "VB8d":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/nft-gallery/nft-gallery-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: NftGalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftGalleryRoutingModule", function() { return NftGalleryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _nft_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nft-gallery.component */ "PyQf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");


//import { BrowserModule } from '@angular/platform-browser'




const routes = [
    {
        path: '',
        component: _nft_gallery_component__WEBPACK_IMPORTED_MODULE_2__["NftGalleryComponent"]
    }
];
class NftGalleryRoutingModule {
}
NftGalleryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NftGalleryRoutingModule });
NftGalleryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NftGalleryRoutingModule_Factory(t) { return new (t || NftGalleryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            //BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NftGalleryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], 
        //BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NftGalleryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    //BrowserModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=create-nft-wallet-nft-gallery-nft-gallery-module.js.map