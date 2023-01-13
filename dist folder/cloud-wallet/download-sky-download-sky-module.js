(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["download-sky-download-sky-module"],{

/***/ "+sXH":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/transactions/download-sky/download-sky.module.ts ***!
  \****************************************************************************/
/*! exports provided: DownloadSkyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadSkyModule", function() { return DownloadSkyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _download_sky_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download-sky-routing.module */ "Kddb");
/* harmony import */ var _download_sky_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download-sky.component */ "QTK1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-click-outside */ "Hicy");








class DownloadSkyModule {
}
DownloadSkyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DownloadSkyModule });
DownloadSkyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DownloadSkyModule_Factory(t) { return new (t || DownloadSkyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _download_sky_routing_module__WEBPACK_IMPORTED_MODULE_2__["DownloadSkyRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DownloadSkyModule, { declarations: [_download_sky_component__WEBPACK_IMPORTED_MODULE_3__["DownloadSkyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _download_sky_routing_module__WEBPACK_IMPORTED_MODULE_2__["DownloadSkyRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadSkyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_download_sky_component__WEBPACK_IMPORTED_MODULE_3__["DownloadSkyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _download_sky_routing_module__WEBPACK_IMPORTED_MODULE_2__["DownloadSkyRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Kddb":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/transactions/download-sky/download-sky-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: DownloadSkyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadSkyRoutingModule", function() { return DownloadSkyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _download_sky_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download-sky.component */ "QTK1");





const routes = [
    {
        path: '',
        component: _download_sky_component__WEBPACK_IMPORTED_MODULE_2__["DownloadSkyComponent"]
    }
];
class DownloadSkyRoutingModule {
}
DownloadSkyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DownloadSkyRoutingModule });
DownloadSkyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DownloadSkyRoutingModule_Factory(t) { return new (t || DownloadSkyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DownloadSkyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadSkyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QTK1":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/transactions/download-sky/download-sky.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DownloadSkyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadSkyComponent", function() { return DownloadSkyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-lottie */ "NiZn");













function DownloadSkyComponent_div_0_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.cSelectorImgThree, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DownloadSkyComponent_div_0_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadSkyComponent_div_0_div_23_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const data_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.customSelectorThree(data_r9.name, "local"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r9.name);
} }
function DownloadSkyComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DownloadSkyComponent_div_0_div_23_div_1_Template, 4, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.all);
} }
function DownloadSkyComponent_div_0_div_45_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Remarks can't be longer than 64 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DownloadSkyComponent_div_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DownloadSkyComponent_div_0_div_45_span_1_Template, 3, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.exportForm.controls["tag"].errors == null ? null : ctx_r5.exportForm.controls["tag"].errors.maxlength);
} }
function DownloadSkyComponent_div_0_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-lottie", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function DownloadSkyComponent_div_0_ng_container_53_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadSkyComponent_div_0_ng_container_53_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.hideErrorMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r7.errorOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.errorMessage);
} }
const _c0 = function (a0) { return { "btnDisable": a0 }; };
function DownloadSkyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "From: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Withdraw To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function DownloadSkyComponent_div_0_Template_div_clickOutside_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.closeDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadSkyComponent_div_0_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.customSelTogglerThree(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DownloadSkyComponent_div_0_img_20_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DownloadSkyComponent_div_0_div_23_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DownloadSkyComponent_div_0_Template_input_keypress_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19._keyUp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DownloadSkyComponent_div_0_div_45_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "canvas", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadSkyComponent_div_0_Template_a_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.showLoader ? "" : ctx_r20.withdraw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Withdraw CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, DownloadSkyComponent_div_0_ng_container_53_Template, 7, 2, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Withdraw CC From ", ctx_r0.userSky, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.exportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userSky);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.cSelectorImgThree != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.cSelectorTextThree);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.customSelectorOpenThree);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("tag"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r0.exportForm.invalid && ctx_r0.export == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showError);
} }
const _c1 = function (a0) { return { btnDisable: a0 }; };
function DownloadSkyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Withdrawn From: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Withdrawn to: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadSkyComponent_div_1_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.showLoader ? "" : ctx_r21.go(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("You Withdrew CC ", ctx_r1.payload.data == null ? null : ctx_r1.payload.data.TotalCoins, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userSky);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.cSelectorTextThree);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current balance of ", ctx_r1.userSky, ": \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.transSky);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current balance of ", ctx_r1.cSelectorTextThree, ": \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.transaction.payload == null ? null : ctx_r1.transaction.payload.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx_r1.showLoader));
} }
function DownloadSkyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function DownloadSkyComponent_div_2_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 51);
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
class DownloadSkyComponent {
    constructor(auth, storage, router, fb, api) {
        this.auth = auth;
        this.storage = storage;
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.imageWidth = 100;
        this.imageHeight = 100;
        this.pngCheck = true;
        this.afterClick = false;
        this.amount = 0;
        this.errorMessage = null;
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_download.json'
        };
        this.errorOptions = {
            path: 'https://raida11.cloudcoin.global/animation/error.json'
        };
        this.showLoader = false;
        this.showNormal = true;
        this.showError = false;
        this.transaction = [];
        this.export = false;
        this.customSelectorOpenThree = false;
        this.cSelectorTextThree = 'Select a wallet';
        this.cSelectorImgThree = '';
        this.goTODash = false;
        if (localStorage.getItem('skywallet')) {
            this.skywallet = localStorage.getItem('skywallet');
            this.username = (localStorage.getItem('skywallet')).split(".", 1)[0];
        }
        this.exportForm = this.fb.group({
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]')]],
            tag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]
        });
    }
    ngOnInit() {
        this.userSky = localStorage.getItem('userSky');
        this.storage.changeLocal.subscribe(message => {
            var _a;
            if (message.length == 0) {
                this.getAllwallet();
            }
            else {
                this.all = message;
                if (((_a = this.all) === null || _a === void 0 ? void 0 : _a.length) == 1) {
                    this.export = true;
                    this.cSelectorTextThree = this.all[0].name;
                    this.cSelectorImgThree = 'assets/folder-w-border.svg';
                }
            }
        });
    }
    isValidInput(value) {
        return this.exportForm.controls[value].invalid &&
            (this.exportForm.controls[value].dirty || this.exportForm.controls[value].touched);
    }
    _keyUp(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        }
        else {
            return true;
        }
    }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    getAllwallet() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response;
                response = yield this.api.getWallet();
                if (response.status == 'success') {
                    this.all = response.payload;
                    this.storage.changeLocaldata(this.all);
                    if (((_a = this.all) === null || _a === void 0 ? void 0 : _a.length) == 1) {
                        this.export = true;
                        this.cSelectorTextThree = this.all[0].name;
                        this.cSelectorImgThree = 'assets/folder-w-border.svg';
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    showLoading(state) {
        if (state) {
            this.showNormal = false;
            this.showLoader = true;
            this.showError = false;
        }
        else {
            this.showNormal = true;
            this.showLoader = false;
            this.showError = false;
        }
    }
    showErrorMessage(message) {
        this.errorMessage = message;
        this.showNormal = false;
        this.showError = true;
        this.showLoader = false;
    }
    hideErrorMessage() {
        this.errorMessage = '';
        this.showNormal = true;
        this.showError = false;
        this.showLoader = false;
    }
    handleFileInput(files) {
        this.uploadFiles = files;
    }
    customSelTogglerThree() {
        this.customSelectorOpenThree = !this.customSelectorOpenThree;
    }
    closeDropdown() {
        this.customSelectorOpenThree = false;
    }
    customSelectorThree(name, type) {
        this.export = true;
        this.customSelectorOpenThree = false;
        this.cSelectorTextThree = name;
        this.cSelectorImgThree = 'assets/folder-w-border.svg';
    }
    doCheck(taskID, xdata) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.afterClick = true;
                        this.showLoading(false);
                        // this.getTransaction();
                        // let currentUrl = this.router.url;
                        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                        // this.router.onSameUrlNavigation = 'reload';
                        // this.router.navigate([currentUrl]);
                        this.storage.setItem("wallet", "skywallet", "withdraw");
                        const newArr = this.all.map(obj => {
                            if (obj.name === this.cSelectorTextThree) {
                                return Object.assign(Object.assign({}, obj), { balance: obj.balance + Number(this.exportForm.get('amount').value) });
                            }
                            return obj;
                        });
                        this.storage.changeLocaldata(newArr);
                        this.router.navigate(["/dashboard/home"]);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: "You have withdrawn " + ((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.TotalCoins) + " CC to " + this.cSelectorTextThree,
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                        // this.getSky();
                    }
                    else {
                        this.showLoading(false);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'warning',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
                    }
                    let data = this.payload.data;
                    this.successMsg = "Done: " + data.message;
                    let h = "";
                    this.raidaCheck = true;
                    this.serversList = h;
                    this.errorInfo = false;
                    return;
                }
                this.successMsg = "Doing.... Task ID " + taskID + ", Progress " + this.payload.progress + "%";
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
    go() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
        this.router.navigate(["/dashboard/home"]);
    }
    withdraw() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.export == true) {
                try {
                    var exportData = {
                        srcname: this.userSky,
                        dstname: this.cSelectorTextThree,
                        amount: Number(this.exportForm.get('amount').value),
                        tag: this.exportForm.get('tag').value
                    };
                    let response = yield this.api.withdraw(exportData);
                    if (response.status == 'error') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: response.payload.message,
                            icon: 'warning',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
                    }
                    else {
                        this.showLoading(true);
                        this.loadingMessage = "Withdrawing CC...";
                        try {
                            var data = {
                                name: this.cSelectorTextThree
                            };
                            let response1 = yield this.api.fix(data);
                            if (response1.status === "success") {
                                this.doCheckFix((_a = response1.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                        this.doCheck((_b = response.payload) === null || _b === void 0 ? void 0 : _b.id, (data) => {
                            this.successInfo = true;
                            this.successMsg = "Done " + JSON.stringify(data);
                        });
                    }
                }
                catch (e) {
                }
            }
        });
    }
    doCheckFix(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                this.fixProg = this.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.goTODash = true;
                    }
                    else {
                        this.goTODash = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
                    this.doCheckFix(taskID, xdata);
                }, 500);
            }
        });
    }
    getTransaction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = this.cSelectorTextThree;
            try {
                let response = yield this.api.getTransaction(data);
                this.transaction = response;
            }
            catch (e) {
                console.log(e);
                this.errorInfo = true;
                this.errorMsg = "Failed";
            }
        });
    }
    getSky() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getAllSky();
                if (response.status == "success") {
                    this.showLoading(true);
                    this.loadingMessage = "Fetching balance...";
                    this.doCheck1((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                        // this.successInfo = true;
                        // this.successMsg  ="Done " + JSON.stringify(data)
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
                if (task.payload.status == "error" || task.payload.status == "completed") {
                    if (task.payload.status == "completed") {
                        for (let i = 0; i < task.payload.data.length; i++) {
                            if (task.payload.data[i].name === this.userSky) {
                                this.transSky = task.payload.data[i].balance;
                            }
                        }
                        this.showLoading(false);
                    }
                    else {
                        this.showLoading(false);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: task.payload.data.message,
                            icon: 'warning',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
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
}
DownloadSkyComponent.ɵfac = function DownloadSkyComponent_Factory(t) { return new (t || DownloadSkyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"])); };
DownloadSkyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DownloadSkyComponent, selectors: [["app-download-sky"]], decls: 3, vars: 3, consts: [["class", "transWrapper", 4, "ngIf"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "transWrapper"], [1, "headerbackWrap"], ["href", "javascript:;", "routerLink", "/dashboard/home", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "titleOne"], [1, "transBody"], [3, "formGroup"], [1, "formInline"], [1, "gap20"], [1, "formField"], ["for", "username"], [1, "customeDropdownTwo", 3, "clickOutside"], [1, "triger", 3, "click"], ["alt", "image", 3, "src", 4, "ngIf"], ["class", "menuShowTwo scroll", 4, "ngIf"], [1, "gap10"], [1, "row"], [1, "col-md-12"], ["for", ""], [1, "col-md-5", "dispFlex", "dispFlexPriceTrans"], [1, "inputTagWrapper"], ["href", "javascript:;", 1, "inpTag"], ["type", "text", "placeholder", "0", "formControlName", "amount", "max", "1000", 1, "form-control", 3, "keypress"], [1, "col-md-6"], ["type", "text", "formControlName", "tag", "placeholder", "Ex: Sending to Antoine"], [4, "ngIf"], [1, "hideimage"], ["width", "300", "height", "300"], ["quoteCanvas", ""], [1, "transBottomFooter"], ["href", "javascript:void(0);", 1, "btnCustomBlue", 3, "ngClass", "click"], ["alt", "image", 3, "src"], [1, "menuShowTwo", "scroll"], ["class", "menus", 3, "click", 4, "ngFor", "ngForOf"], [1, "menus", 3, "click"], ["src", "assets/folder-w-border.svg", "alt", "icon"], ["class", "errorMsg", 4, "ngIf"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], ["height", "100px", 3, "options", "animationCreated"], [1, "text-center", 2, "color", "#ffffff", "margin-bottom", "10px"], [1, "text-center"], [1, "customBtn", 3, "click"], ["icon", "arrow-left"], [2, "opacity", "0.7"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "ngClass", "click"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function DownloadSkyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DownloadSkyComponent_div_0_Template, 54, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DownloadSkyComponent_div_1_Template, 30, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DownloadSkyComponent_div_2_Template, 6, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.afterClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.afterClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieComponent"]], styles: [".hideimage[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.onLoad[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.formField[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n  color: #777;\n  font-size: 16px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #777;\n  font-size: 16px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884FF;\n  outline: transparent;\n}\n\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n}\n\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #2C2C2C;\n  font-size: 18px;\n  color: #fff;\n  padding: 40px !important;\n}\n\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: solid 1px #2C2C2C;\n  outline: transparent;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZG93bmxvYWQtc2t5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVFO0VBQ0ksWUFBQTtBQUNOOztBQUNFO0VBQ0UsbUJBQUE7QUFFSjs7QUFBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFFUjs7QUFEUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBR1o7O0FBRFE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FBR1o7O0FBQUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUVSOztBQURRO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBR1o7O0FBRFE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FBR1o7O0FBQ0U7RUFDRSxZQUFBO0FBRUoiLCJmaWxlIjoiZG93bmxvYWQtc2t5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVpbWFnZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbkxvYWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIC5mb3JtRmllbGR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICBcclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwODg0RkY7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3B0aW9ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMyQzJDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMyQzJDMkM7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DownloadSkyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-download-sky',
                templateUrl: './download-sky.component.html',
                styleUrls: ['./download-sky.component.scss']
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=download-sky-download-sky-module.js.map