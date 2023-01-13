(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["download-download-module"],{

/***/ "DpRK":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/transactions/download/download.component.ts ***!
  \***********************************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");












const _c0 = ["quoteCanvas"];
function DownloadComponent_div_0_ng_container_7_div_48_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name Tag can't be longer than 64 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DownloadComponent_div_0_ng_container_7_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DownloadComponent_div_0_ng_container_7_div_48_span_1_Template, 3, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.exportForm.controls["fileName"].errors == null ? null : ctx_r6.exportForm.controls["fileName"].errors.maxlength);
} }
function DownloadComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Withdraw to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadComponent_div_0_ng_container_7_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.getPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DownloadComponent_div_0_ng_container_7_Template_input_keypress_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11._keyUp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "PNG file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "ZIP file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Binary file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Name Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, DownloadComponent_div_0_ng_container_7_div_48_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "canvas", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.exportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isValidInput("fileName"));
} }
function DownloadComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-lottie", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function DownloadComponent_div_0_ng_container_8_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadComponent_div_0_ng_container_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.hideErrorMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r4.errorOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.errorMessage);
} }
function DownloadComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ng-lottie", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function DownloadComponent_div_0_ng_container_9_Template_ng_lottie_animationCreated_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Fetching CC..");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r5.options);
} }
const _c1 = function (a0) { return { "btnDisable": a0 }; };
function DownloadComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DownloadComponent_div_0_ng_container_7_Template, 53, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DownloadComponent_div_0_ng_container_8_Template, 7, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DownloadComponent_div_0_ng_container_9_Template, 5, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadComponent_div_0_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.exoprt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Withdraw CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Withdraw CC from ", ctx_r0.userLocal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showNormal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r0.exportForm.invalid || ctx_r0.file == "Choose folder"));
} }
function DownloadComponent_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DownloadComponent_div_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "zip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DownloadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You withdrew CC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Withdrawn to: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "../Downloads");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "File format: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DownloadComponent_div_1_span_14_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DownloadComponent_div_1_span_15_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Current balance: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadComponent_div_1_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.go(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.pngCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.pngCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.transaction == null ? null : ctx_r1.transaction.payload == null ? null : ctx_r1.transaction.payload.balance);
} }
function DownloadComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function DownloadComponent_div_2_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 46);
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
class DownloadComponent {
    constructor(auth, storage, router, fb, api) {
        this.auth = auth;
        this.storage = storage;
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.imageWidth = 100;
        this.imageHeight = 100;
        this.afterClick = false;
        this.amount = 0;
        this.errorMessage = null;
        this.file = "Choose folder";
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
        this.all = [];
        if (localStorage.getItem('skywallet')) {
            this.skywallet = localStorage.getItem('skywallet');
            this.username = (localStorage.getItem('skywallet')).split(".", 1)[0];
        }
        this.exportForm = this.fb.group({
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(500000|[1-5]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?)$')]],
            tag: [''],
            format: ['png'],
            fileName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)],
            folder: ['']
        });
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.userLocal = localStorage.getItem('userLocal');
        if (localStorage.getItem('path') != "" && localStorage.getItem('path') != null && localStorage.getItem('path') != undefined) {
            this.file = localStorage.getItem('path');
            console.log("bye");
        }
        else {
            console.log("hye");
            this.file = 'C:/Users/user/Downloads';
        }
        this.storage.changeLocal.subscribe(message => {
            this.all = message;
        });
        // this.getTransaction();
    }
    isValidInput(value) {
        return this.exportForm.controls[value].invalid &&
            (this.exportForm.controls[value].dirty || this.exportForm.controls[value].touched);
    }
    _keyUp(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            // return false;
        }
        else {
            // if(this.totalnotes < 2001){
            //   if (event.target.value > this.maxnotes) {
            //     Swal.fire({
            //       title: "inorrect amount",
            //       icon: 'warning',
            //       confirmButtonText: 'Okay',
            //     }).then((result) => {
            //       if (result.value) { }
            //     });
            //   }
            // }
        }
    }
    onFileChanged(event) {
        // this.buttonText = 'Select CloudCoin';
        this.selectedFile = event.target.files[0];
        console.log("fileDetails", this.selectedFile);
        const fileReader = new FileReader();
        const me = this;
        fileReader.readAsDataURL(this.selectedFile);
        fileReader.onload = (e) => {
            this.selectedData = fileReader.result;
            let image = new Image();
            image.src = fileReader.result;
            let that = this;
            image.onload = function (en) {
                // const canvas:any = document.getElementById('canvas');
                that.selectedData = this;
                that.canvas.nativeElement.width = this.width;
                that.imageWidth = this.width;
                that.canvas.nativeElement.height = this.height;
                that.imageHeight = this.height;
                const ctx = that.canvas.nativeElement.getContext('2d');
                ctx.drawImage(this, 0, 0, this.width, this.height);
                // ctx.font = "1px serif";
                // ctx.textBaseline = "hanging";
                // ctx.strokeText("Hello world", 0, this.width);
            };
            // console.log("result",fileReader.result);
        };
        fileReader.onerror = (error) => {
            console.log(error);
            this.showErrorMessage('Cannot Parse CC');
        };
    }
    changeDownloadFormat(e) {
        this.pngCheck = e;
    }
    download(filename, text) {
        const pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        pom.setAttribute('download', filename);
        if (document.createEvent) {
            const event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    }
    go() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
        this.router.navigate(["/dashboard/home"]);
    }
    _stringifyJSONCoin(stack) {
        const coins = stack.cloudcoin;
        let first = true;
        let json = '{\n\t"cloudcoin": [{\n';
        for (const cc of coins) {
            if (!first) {
                json += ', {\n';
            }
            json += '\t\t"nn": "' + cc.nn + '",\n';
            json += '\t\t"sn": "' + cc.sn + '",\n';
            json += '\t\t"an": [\n\t\t\t"';
            let i = 0;
            for (const an of cc.an) {
                json += an;
                if (i !== 24) {
                    json += '", ';
                    if (((i + 1) % 5) === 0) {
                        json += '\n\t\t\t';
                    }
                    json += '"';
                }
                i++;
            }
            json += '"\n\t\t],\n';
            if ('pown' in cc) {
                json += '\t\t"pown": "' + cc.pown + '"';
            }
            if ('ed' in cc) {
                json += ',\n\t\t"ed": "' + cc.ed + '"';
            }
            if ('aoid' in cc) {
                if (cc.aoid.length === 0) {
                    json += ',\n\t\t"aoid": []\n';
                }
                else {
                    json += ',\n\t\t"aoid": "' + cc.aoid + '"\n';
                }
            }
            else {
                json += ',\n\t\t"aoid": []\n';
            }
            json += '\t}';
            first = false;
        }
        json += ']\n}';
        return json;
    }
    animationCreated(animationItem) {
        console.log(animationItem);
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
    getPath() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.filePick();
                console.log(response);
                if (response.status === "success") {
                    this.file = (_a = response === null || response === void 0 ? void 0 : response.payload) === null || _a === void 0 ? void 0 : _a.items_picked[0];
                    localStorage.setItem('path', this.file);
                    // this.exportForm.get('folder').patchValue(this.file);
                }
                // else {
                //   Swal.fire({
                //     title: response?.payload?.message,
                //     icon: 'error',
                //     confirmButtonText: 'Okay',
                //   }).then((result) => {
                //     if (result.value) { { } }
                //   });
                // }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    this.showLoading(false);
                    if (this.payload.status == "completed") {
                        // let currentUrl = this.router.url;
                        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                        // this.router.onSameUrlNavigation = 'reload';
                        // this.router.navigate([currentUrl]);
                        this.storage.setItem("wallet", "localwallet", 'download');
                        const newArr = this.all.map(obj => {
                            if (obj.name === this.userLocal) {
                                return Object.assign(Object.assign({}, obj), { balance: obj.balance - Number(this.exportForm.get('amount').value) });
                            }
                            return obj;
                        });
                        this.storage.changeLocaldata(newArr);
                        var nuumb = Number(sessionStorage.getItem('totalBal')) - Number(this.exportForm.get('amount').value);
                        sessionStorage.setItem('totalBal', nuumb);
                        this.router.navigate(["/dashboard/home"]);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: "You have withdrawn " + Number(this.exportForm.get('amount').value) + " CC in " + this.exportForm.get('format').value + " format.",
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                        // this.afterClick = true;
                        // if (this.pngCheck === 1) {
                        //   const base64Response = await fetch(`data:image/png;base64,${this.payload.data?.coins}`);
                        //   const blobs = await base64Response.blob();
                        //   this.blob = new Blob([blobs], { type: 'image/png' });
                        //   var downloadURL = window.URL.createObjectURL(blobs);
                        //   var link = document.createElement('a');
                        //   link.href = downloadURL;
                        //   link.download = Number(this.exportForm.get('amount').value) + ".CC.1." + this.exportForm.get('fileName')!.value + ".png";
                        //   link.click();
                        //   let currentUrl = this.router.url;
                        //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                        //   this.router.onSameUrlNavigation = 'reload';
                        //   this.router.navigate([currentUrl]);
                        //   this.router.navigate(["/dashboard/home"]);
                        //   Swal.fire({
                        //     title: "You have exported " + Number(this.exportForm.get('amount').value) + " CC in PNG format.",
                        //     icon: 'success',
                        //     confirmButtonText: 'Okay',
                        //   }).then((result) => {
                        //     if (result.value) { { } }
                        //   });
                        //   window.open(downloadURL);
                        // } else if (this.pngCheck === 2) {
                        //   const base64Response = await fetch(`data:image/png;base64,${this.payload.data?.coins}`);
                        //   const blobs = await base64Response.blob();
                        //   var zip = new JSZip();
                        //   // var img = zip.folder("Cloudcoins");
                        //   var byteString = atob(this.payload.data?.coins);
                        //   var ab = new ArrayBuffer(byteString.length);
                        //   var ia = new Uint8Array(ab);
                        //   for (var i = 0; i < byteString.length; i++) {
                        //     ia[i] = byteString.charCodeAt(i);
                        //   }
                        //   var name = Number(this.exportForm.get('amount').value) + ".CC.1." + this.exportForm.get('fileName')!.value + '.zip';
                        //   var downloadURL = window.URL.createObjectURL(blobs);
                        //   var link = document.createElement('a');
                        //   link.href = downloadURL;
                        //   let currentUrl = this.router.url;
                        //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                        //   this.router.onSameUrlNavigation = 'reload';
                        //   this.router.navigate([currentUrl]);
                        //   this.router.navigate(["/dashboard/home"]);
                        //   Swal.fire({
                        //     title: "You have exported " + Number(this.exportForm.get('amount').value) + " CC in ZIP format.",
                        //     icon: 'success',
                        //     confirmButtonText: 'Okay',
                        //   }).then((result) => {
                        //     if (result.value) { { } }
                        //   });
                        //   zip.file("CC_" + Math.floor(100000 + Math.random() * 900000) + ".png", blobs, { base64: true });
                        //   var link12 = zip.generateAsync({ type: "blob" })
                        //     .then(function (content) {
                        //       FileSaver.saveAs(content, name);
                        //     });
                        //   console.log(link12);
                        // }
                        // this.getTransaction();
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'warning',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
                    }
                    let data = this.payload.data;
                    this.successMsg = "Done: " + (data === null || data === void 0 ? void 0 : data.message);
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
    getPng(e) {
        this.fil = e.files[0].name;
    }
    exoprt() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.exportForm.valid && this.file != "Choose folder") {
                // if (this.exportForm.get('fileName')!.value === "") {
                //   this.exportForm.get('fileName').patchValue('CC_' + Math.floor(100000 + Math.random() * 900000));
                // }
                try {
                    var exportData = {
                        name: this.userLocal,
                        amount: Number(this.exportForm.get('amount').value),
                        tag: this.exportForm.get('fileName').value,
                        folder: this.file,
                        type: this.exportForm.get('format').value
                    };
                    let response = yield this.api.export(exportData);
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
                        this.doCheck((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                            this.successInfo = true;
                            this.successMsg = "Done " + JSON.stringify(data);
                        });
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
        });
    }
    getTransaction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = localStorage.getItem('userLocal');
            try {
                let response = yield this.api.getTransaction(data);
                this.transaction = response;
                var ones = 1 * Number(this.transaction.payload.denominations[1]);
                var fives = 5 * Number(this.transaction.payload.denominations[5]);
                var tens = 25 * Number(this.transaction.payload.denominations[25]);
                var hundreds = 100 * Number(this.transaction.payload.denominations[100]);
                var twofiftys = 250 * Number(this.transaction.payload.denominations[250]);
                this.totalnotes = ones + fives + tens + hundreds + twofiftys;
                this.maxnotes = Number(this.transaction.payload.denominations[1]) + Number(this.transaction.payload.denominations[5])
                    + Number(this.transaction.payload.denominations[25]) + Number(this.transaction.payload.denominations[100]) + Number(this.transaction.payload.denominations[250]);
            }
            catch (e) {
                console.log(e);
                this.errorInfo = true;
                this.errorMsg = "Failed";
            }
        });
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"])); };
DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["app-download"]], viewQuery: function DownloadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 3, vars: 3, consts: [["class", "transWrapper", 4, "ngIf"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "transWrapper"], [1, "headerbackWrap"], ["href", "javascript:;", "routerLink", "/dashboard/home", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "titleOne"], [1, "transBody"], [4, "ngIf"], [1, "transBottomFooter"], ["href", "javascript:void(0);", 1, "btnCustomBlue", 3, "ngClass", "click"], [3, "formGroup"], [1, "formField"], ["for", "username"], [1, "uploadFileWrap"], [1, "uploadIconWrap", 3, "click"], ["src", "assets/folder_icon.svg", "alt", "", 1, "folderIcon"], [1, "gap10"], [1, "row"], [1, "col-md-12"], ["for", ""], [1, "col-md-6", "dispFlex", "dispFlexPriceTrans"], [1, "inputTagWrapper"], ["href", "javascript:;", 1, "inpTag"], ["type", "tel", "placeholder", "0", "formControlName", "amount", 2, "text-align", "center", 3, "keypress"], [1, "gap20"], [1, "col-md-6"], ["data-toggle", "tooltip", "data-placement", "top", "ngbTooltip", "CCs are hidden inside files such as PNG or zip. The recipient will receive it in this format.", "src", "assets/info.svg", "alt", "", 1, "infoicon"], [1, "radioInpHolder"], ["type", "radio", "name", "format", "formControlName", "format", "value", "png", "checked", ""], ["type", "radio", "name", "format", "formControlName", "format", "value", "zip"], ["type", "radio", "name", "format", "formControlName", "format", "value", "bin"], ["type", "text", "formControlName", "fileName", "placeholder", "Ex: Coins"], [1, "hideimage"], ["width", "300", "height", "300"], ["quoteCanvas", ""], ["class", "errorMsg", 4, "ngIf"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], ["height", "100px", 3, "options", "animationCreated"], [1, "text-center", 2, "color", "#ffffff", "margin-bottom", "10px"], [1, "text-center"], [1, "customBtn", 3, "click"], ["icon", "arrow-left"], [1, "text-center", "subInnerHeader"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"], [2, "opacity", "0.7"], ["style", "opacity: 0.7;", 4, "ngIf"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "click"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DownloadComponent_div_0_Template, 13, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DownloadComponent_div_1_Template, 25, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DownloadComponent_div_2_Template, 6, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.afterClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.afterClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]], styles: [".hideimage[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.formField[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n  color: #777;\n  font-size: 16px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #777;\n  font-size: 16px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884FF;\n  outline: transparent;\n}\n\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n}\n\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #2C2C2C;\n  font-size: 16px;\n  color: #fff;\n  padding: 10px 0;\n}\n\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884FF;\n  outline: transparent;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZG93bmxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBR0U7RUFDRSxtQkFBQTtBQUFKOztBQUVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUNRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFDWjs7QUFDUTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUFDWjs7QUFFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBQVI7O0FBQ1E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNaOztBQUNRO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQUNaOztBQUdFO0VBQ0UsWUFBQTtBQUFKIiwiZmlsZSI6ImRvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVpbWFnZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mb3JtRmllbGR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICBcclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwODg0RkY7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3B0aW9ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMyQzJDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwODg0RkY7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DownloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-download',
                templateUrl: './download.component.html',
                styleUrls: ['./download.component.scss']
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['quoteCanvas']
        }] }); })();


/***/ }),

/***/ "KKCr":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/transactions/download/download.module.ts ***!
  \********************************************************************/
/*! exports provided: DownloadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadModule", function() { return DownloadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _download_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download-routing.module */ "s5K3");
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download.component */ "DpRK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");







class DownloadModule {
}
DownloadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DownloadModule });
DownloadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DownloadModule_Factory(t) { return new (t || DownloadModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _download_routing_module__WEBPACK_IMPORTED_MODULE_2__["DownloadRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DownloadModule, { declarations: [_download_component__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _download_routing_module__WEBPACK_IMPORTED_MODULE_2__["DownloadRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_download_component__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _download_routing_module__WEBPACK_IMPORTED_MODULE_2__["DownloadRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "s5K3":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/transactions/download/download-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DownloadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadRoutingModule", function() { return DownloadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download.component */ "DpRK");





const routes = [
    {
        path: '',
        component: _download_component__WEBPACK_IMPORTED_MODULE_2__["DownloadComponent"]
    }
];
class DownloadRoutingModule {
}
DownloadRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DownloadRoutingModule });
DownloadRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DownloadRoutingModule_Factory(t) { return new (t || DownloadRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DownloadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=download-download-module.js.map