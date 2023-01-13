(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-module"],{

/***/ "Aiq4":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/transactions/upload/upload.module.ts ***!
  \****************************************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-routing.module */ "HL9f");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.component */ "DYWf");
/* harmony import */ var ng_file_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-file-drag-drop */ "Gmmh");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");








class UploadModule {
}
UploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UploadModule });
UploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UploadModule_Factory(t) { return new (t || UploadModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _upload_routing_module__WEBPACK_IMPORTED_MODULE_2__["UploadRoutingModule"],
            ng_file_drag_drop__WEBPACK_IMPORTED_MODULE_4__["NgFileDragDropModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UploadModule, { declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _upload_routing_module__WEBPACK_IMPORTED_MODULE_2__["UploadRoutingModule"],
        ng_file_drag_drop__WEBPACK_IMPORTED_MODULE_4__["NgFileDragDropModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _upload_routing_module__WEBPACK_IMPORTED_MODULE_2__["UploadRoutingModule"],
                    ng_file_drag_drop__WEBPACK_IMPORTED_MODULE_4__["NgFileDragDropModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "DYWf":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/transactions/upload/upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ "NiZn");










const _c0 = ["fileDropRef"];
const _c1 = function (a0) { return { "width": a0 }; };
function UploadComponent_div_0_div_6_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r5.payload.progress + "%"));
} }
function UploadComponent_div_0_div_6_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.errorMsg);
} }
function UploadComponent_div_0_div_6_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Total number of files selected: ", ctx_r7.files.length, " ");
} }
function UploadComponent_div_0_div_6_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_0_div_6_div_26_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r11.deleteFile(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r9);
} }
const _c2 = function (a0) { return { "btnDisable": a0 }; };
function UploadComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UploadComponent_div_0_div_6_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.tag = $event; })("keypress", function UploadComponent_div_0_div_6_Template_input_keypress_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.keyPressAlphaNumericWithCharacters($event); })("change", function UploadComponent_div_0_div_6_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.getLength(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_0_div_6_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.getPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Select Coins to Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "(Maximum Import: 24K CC or 300K Legacy CC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, UploadComponent_div_0_div_6_div_21_Template, 3, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UploadComponent_div_0_div_6_span_23_Template, 3, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UploadComponent_div_0_div_6_div_24_Template, 5, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UploadComponent_div_0_div_6_div_26_Template, 9, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "When coins are deposited, they receive new verification keys that allow them to prove their authenticity. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " These new keys will last for five years. You are always free to renew these five years by simply navigating to \"Other Actions\" in your Wallet and selecting \"Verify Coin Authenticity\". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Any previous backups of these coins will be considered counterfeit and no longer valid. Be sure to create new backups of the Wallet that these coins are being added to and store them in a safe place. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_0_div_6_Template_a_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Deposit Selected Coins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.successInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.errorInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.files.length == 1 || ctx_r4.files.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx_r4.btn || ctx_r4.remarkInvalid == true));
} }
function UploadComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UploadComponent_div_0_div_6_Template, 38, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Import CC to Folder ", ctx_r0.userLocal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.showLoader);
} }
function UploadComponent_div_2_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Coins Authentic: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r22.payload == null ? null : ctx_r22.payload.data == null ? null : ctx_r22.payload.data.pown_results == null ? null : ctx_r22.payload.data.pown_results.authentic);
} }
function UploadComponent_div_2_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Coins Counterfeit: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r23.payload == null ? null : ctx_r23.payload.data == null ? null : ctx_r23.payload.data.pown_results == null ? null : ctx_r23.payload.data.pown_results.counterfeit);
} }
function UploadComponent_div_2_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Coins Fracked: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.payload == null ? null : ctx_r24.payload.data == null ? null : ctx_r24.payload.data.pown_results == null ? null : ctx_r24.payload.data.pown_results.fracked);
} }
function UploadComponent_div_2_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Coins already exists in your wallet: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r25.payload == null ? null : ctx_r25.payload.data == null ? null : ctx_r25.payload.data.pown_results == null ? null : ctx_r25.payload.data.pown_results.already_exists);
} }
function UploadComponent_div_2_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Coins in limbo: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r26.payload == null ? null : ctx_r26.payload.data == null ? null : ctx_r26.payload.data.pown_results == null ? null : ctx_r26.payload.data.pown_results.limbo);
} }
function UploadComponent_div_2_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total fixed coins: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r27.frackedDetail == null ? null : ctx_r27.frackedDetail.total_fixed);
} }
function UploadComponent_div_2_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wrong Coin Type: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.payload == null ? null : ctx_r28.payload.data == null ? null : ctx_r28.payload.data.pown_results == null ? null : ctx_r28.payload.data.pown_results.wrong_type);
} }
function UploadComponent_div_2_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total skipped coins: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r29.frackedDetail == null ? null : ctx_r29.frackedDetail.total_skipped);
} }
function UploadComponent_div_2_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total errors: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r30.frackedDetail == null ? null : ctx_r30.frackedDetail.total_errors);
} }
function UploadComponent_div_2_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_2_div_4_div_16_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r32.showreceipt = !ctx_r32.showreceipt; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "See Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UploadComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Coins Attempted: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UploadComponent_div_2_div_4_div_7_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UploadComponent_div_2_div_4_div_8_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UploadComponent_div_2_div_4_div_9_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UploadComponent_div_2_div_4_div_10_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UploadComponent_div_2_div_4_div_11_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UploadComponent_div_2_div_4_div_12_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UploadComponent_div_2_div_4_div_13_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UploadComponent_div_2_div_4_div_14_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UploadComponent_div_2_div_4_div_15_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UploadComponent_div_2_div_4_div_16_Template, 5, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_2_div_4_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.go(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r19.totalimport);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r19.payload == null ? null : ctx_r19.payload.data == null ? null : ctx_r19.payload.data.pown_results == null ? null : ctx_r19.payload.data.pown_results.authentic) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r19.payload == null ? null : ctx_r19.payload.data == null ? null : ctx_r19.payload.data.pown_results == null ? null : ctx_r19.payload.data.pown_results.counterfeit) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r19.payload == null ? null : ctx_r19.payload.data == null ? null : ctx_r19.payload.data.pown_results == null ? null : ctx_r19.payload.data.pown_results.fracked) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r19.payload == null ? null : ctx_r19.payload.data == null ? null : ctx_r19.payload.data.pown_results == null ? null : ctx_r19.payload.data.pown_results.already_exists) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r19.payload == null ? null : ctx_r19.payload.data == null ? null : ctx_r19.payload.data.pown_results == null ? null : ctx_r19.payload.data.pown_results.limbo) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.isFracked && (ctx_r19.frackedDetail == null ? null : ctx_r19.frackedDetail.total_fixed) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r19.payload == null ? null : ctx_r19.payload.data == null ? null : ctx_r19.payload.data.pown_results == null ? null : ctx_r19.payload.data.pown_results.wrong_type) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.isFracked && (ctx_r19.frackedDetail == null ? null : ctx_r19.frackedDetail.total_skipped) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.isFracked && (ctx_r19.frackedDetail == null ? null : ctx_r19.frackedDetail.total_errors) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.totalimport > 0);
} }
function UploadComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Deposit Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UploadComponent_div_2_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total NEW Coins Deposited successfully: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r36.payload == null ? null : ctx_r36.payload.data == null ? null : ctx_r36.payload.data.total_converted);
} }
function UploadComponent_div_2_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total NEW Coins Failed: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r37.payload == null ? null : ctx_r37.payload.data == null ? null : ctx_r37.payload.data.total_counterfeit);
} }
function UploadComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Total OLD Coins Attempted: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UploadComponent_div_2_div_6_div_7_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UploadComponent_div_2_div_6_div_8_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_2_div_6_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r38.go(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r21.payload == null ? null : ctx_r21.payload.data == null ? null : ctx_r21.payload.data.total_coins);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r21.payload == null ? null : ctx_r21.payload.data == null ? null : ctx_r21.payload.data.TotalConverted) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r21.payload == null ? null : ctx_r21.payload.data == null ? null : ctx_r21.payload.data.TotalConvertFailed) !== 0);
} }
function UploadComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Deposit Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UploadComponent_div_2_div_4_Template, 20, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UploadComponent_div_2_div_5_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UploadComponent_div_2_div_6_Template, 12, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.coinsInfo == "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.payload == null ? null : ctx_r1.payload.data == null ? null : ctx_r1.payload.data.TotalCoins) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.coinsInfo == "old");
} }
function UploadComponent_div_3_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Serial Number : ", data_r41.value.sn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Pownstring : ", data_r41.value.pownstring, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Result : ", data_r41.value.result, "");
} }
function UploadComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.showreceipt = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_3_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.showreceipt = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total Coins Attempted: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Total Authentic: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Total Authentic (Fractured): \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Total Counterfeit: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Total Unprocessed: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "The Pownstring shows each of the 25s RAIDA\u2019s responses from 0 to 24 encoded in a single character. p=pass, f=fail, u=untried, n=no response and e= error.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, UploadComponent_div_3_div_50_Template, 8, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Receipt: ", ctx_r2.payload == null ? null : ctx_r2.payload.data == null ? null : ctx_r2.payload.data.receipt_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 8, ctx_r2.dateTime, "MM/dd/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.totalimport);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.payload == null ? null : ctx_r2.payload.data == null ? null : ctx_r2.payload.data.pown_results == null ? null : ctx_r2.payload.data.pown_results.authentic);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.payload == null ? null : ctx_r2.payload.data == null ? null : ctx_r2.payload.data.pown_results == null ? null : ctx_r2.payload.data.pown_results.fracked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.payload == null ? null : ctx_r2.payload.data == null ? null : ctx_r2.payload.data.pown_results == null ? null : ctx_r2.payload.data.pown_results.counterfeit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.payload == null ? null : ctx_r2.payload.data == null ? null : ctx_r2.payload.data.pown_results == null ? null : ctx_r2.payload.data.pown_results.limbo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](51, 11, ctx_r2.payload == null ? null : ctx_r2.payload.data == null ? null : ctx_r2.payload.data.pown_results == null ? null : ctx_r2.payload.data.pown_results.coins, ctx_r2.returnZero));
} }
function UploadComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function UploadComponent_div_4_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.loadingMessage);
} }
class UploadComponent {
    constructor(api, router, storage) {
        this.api = api;
        this.router = router;
        this.storage = storage;
        this.dragDropConfig = {
            showList: true,
            showProgress: true
        };
        this.iscounterfeit = false;
        this.afterClick = false;
        this.showreceipt = false;
        this.file = [];
        this.baseAdd = [];
        this.btn = true;
        this.transaction = [];
        this.files = [];
        this.base = [];
        this.delButton = false;
        this.coinsInfo = '';
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
        };
        this.errorOptions = {
            path: 'https://raida11.cloudcoin.global/animation/error.json'
        };
    }
    ngOnInit() {
        this.userLocal = localStorage.getItem('userLocal');
        this.type = localStorage.getItem('wallet');
        // this.getTransaction();
    }
    getTransaction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = localStorage.getItem('userLocal');
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
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    showLoading(state) {
        this.loadingMessage = '';
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
    doCheck(taskID, xdata) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            //console.log("Task done: ", taskID);
            if (task) {
                this.payload = task.payload;
                this.totalimport = (_b = (_a = this.payload.data) === null || _a === void 0 ? void 0 : _a.pown_results) === null || _b === void 0 ? void 0 : _b.total;
                //console.log("payload.status:"+ this.payload.status)
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.afterClick = true;
                        this.dateTime = new Date();
                        this.storage.setItem("wallet", "localwallet", 'upload');
                        //console.log("in docheck, after click value:"+ this.afterClick)
                        // let currentUrl = this.router.url;
                        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                        // this.router.onSameUrlNavigation = 'reload';
                        // this.router.navigate([currentUrl]);
                        // this.getTransaction();
                        // if (this.payload.data.limbo != 0) {
                        //   Swal.fire({
                        //     title: 'Contact was lost with the RAIDA during your request due to loss of internet connectivity. It is unknown if the coin passwords have been changed. This can be fixed once a solid internet connection is restored.',
                        //     icon: 'warning',
                        //     confirmButtonText: 'Okay',
                        //   }).then((result) => {
                        //     if (result.value) { { } }
                        //   });
                        // }
                        // else if (this.payload.data.counterfeit != 0) {
                        //   this.counterfeitCoin = this.payload.data.coins.filter(x=>{
                        //     return x.result === "Counterfeit";
                        //   })
                        //   this.iscounterfeit = true;
                        //   Swal.fire({
                        //     title: this.payload.data.counterfeit + ' Counterfeit CC found!',
                        //     icon: 'info',
                        //     confirmButtonText: 'Okay',
                        //   }).then((result) => {
                        //     if (result.value) { { } }
                        //   });
                        // }
                        if (((_e = (_d = (_c = this.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.pown_results) === null || _e === void 0 ? void 0 : _e.fracked) != 0) {
                            let data = {
                                name: this.userLocal,
                                pown_items: [{
                                        sn: (_f = this.payload.data.pown_results) === null || _f === void 0 ? void 0 : _f.coins[0].sn,
                                        pownstring: (_h = (_g = this.payload.data) === null || _g === void 0 ? void 0 : _g.pown_results) === null || _h === void 0 ? void 0 : _h.coins[0].pownstring
                                    }],
                                tickets: [(_k = (_j = this.payload.data) === null || _j === void 0 ? void 0 : _j.pown_results) === null || _k === void 0 ? void 0 : _k.tickets[0]]
                            };
                            this.fixfracked(data);
                        }
                    }
                    else {
                        this.afterClick = false;
                        this.btn = true;
                        this.successInfo = false;
                        this.errorInfo = false;
                        this.baseAdd = [];
                        this.files = [];
                        this.base = [];
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            // title: "Failure! could not proceed with the transaction. " + this.payload?.data?.message,
                            title: 'The coins you attempted to import are not CloudCoins and not supported by this program. Please upgrade to a newer version',
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    this.successInfo = false;
                    this.errorInfo = false;
                    return;
                }
                this.successInfo = true;
                this.successMsg = "Doing.... Task ID " + taskID + ", Progress " + this.payload.progress + "%";
                setTimeout(() => {
                    this.doCheck(taskID, xdata);
                }, 500);
            }
            else {
                this.errorInfo = true;
                this.successInfo = false;
                this.errorMsg = "Call Failed";
                this.btn = true;
            }
        });
    }
    // async getPath() {
    //   try {
    //     let response: any = await this.api.importFile();
    //     console.log(response);
    //     if (response.status == "success") {
    //       this.files = response?.payload?.items_picked;
    //       this.btn = false;
    // var name = <HTMLInputElement>document.getElementById('fileInput');
    // name.placeholder = "Selected " + response?.payload?.items_picked.length + " files";
    //     } else {
    //       Swal.fire({
    //         title: "Try again!",
    //         icon: 'error',
    //         confirmButtonText: 'Okay',
    //       }).then((result) => {
    //         if (result.value) { { } }
    //       });
    //     }
    //   }
    //   catch (e) {
    //     console.log(e);
    //     Swal.fire({
    //       title: "Try again!",
    //       icon: 'error',
    //       confirmButtonText: 'Okay',
    //     }).then((result) => {
    //       if (result.value) { { } }
    //     });
    //   }
    // }
    changRadio(e) {
        this.coinsInfo = e.target.value;
        this.files = [];
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
                        switch (last) {
                            case 'stack': {
                                this.coinsInfo = 'old';
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                    title: ' You are attempting to load Legacy CloudCoins into Coin Manager. These coins will be upgraded at the rate of 1 new CC for every 85.125 Legacy CC. Your share of the CC pie will remain the same but you will have fewer slices that are each 85.125 times larger. A maximum of 300K Legacy coins can be converted at one time. Do you wish to continue?',
                                    icon: 'info',
                                    confirmButtonText: 'Okay',
                                    showCancelButton: true,
                                    showConfirmButton: true,
                                    cancelButtonText: 'Cancel'
                                }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    if (result.isConfirmed) {
                                        const { value: email } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                            title: 'Enter email address',
                                            input: 'email',
                                            inputLabel: 'Email',
                                            inputPlaceholder: 'Email address'
                                        });
                                        this.email = email;
                                        console.log("email is:" + this.email);
                                    }
                                    else {
                                        this.router.navigate(['/dashboard/home']);
                                    }
                                }));
                                break;
                            }
                            case 'png': {
                                this.coinsInfo = 'new';
                                break;
                            }
                            case 'bin': {
                                this.coinsInfo = 'new';
                                break;
                            }
                            default: {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                    title: "Please select files with bin or png extension.",
                                    icon: 'error',
                                    confirmButtonText: 'Okay',
                                }).then((result) => {
                                    if (result.value) {
                                        { }
                                    }
                                });
                                break;
                            }
                        }
                        console.log("number of files:" + this.files.length);
                        if (this.files.length > 24000) {
                            this.files = [];
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: 'Too many files selected. Maximum number of files that can be selected per import is 24000',
                                icon: 'error',
                                confirmButtonText: 'Okay',
                            });
                        }
                        // if (this.coinsInfo == 'new') {
                        //   if (last == 'stack') {
                        //     this.files = [];
                        //     Swal.fire({
                        //       title: "Please select only new coins to import.",
                        //       icon: 'error',
                        //       confirmButtonText: 'Okay',
                        //     }).then((result) => {
                        //       if (result.value) { { } }
                        //     });
                        //   }
                        // }
                        //  else if (this.coinsInfo == 'old') {
                        //   if (last != 'stack') {
                        //     this.files = [];
                        //     Swal.fire({
                        //       title: "Please select only old coins to import.",
                        //       icon: 'error',
                        //       confirmButtonText: 'Okay',
                        //     }).then((result) => {
                        //       if (result.value) { { } }
                        //     });
                        //   }
                        // }
                    }
                    // var name = <HTMLInputElement>document.getElementById('fileInput');
                    // name.placeholder = "Selected " + response?.payload?.items_picked.length + " files";
                    // } else {
                    //   Swal.fire({
                    //     title: "Try again!",
                    //     icon: 'error',
                    //     confirmButtonText: 'Okay',
                    //   }).then((result) => {
                    //     if (result.value) { { } }
                    //   });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    // Only AlphaNumeric with Some Characters [-_ ]
    keyPressAlphaNumericWithCharacters(event) {
        var inp = String.fromCharCode(event.keyCode);
        // Allow numbers, alpahbets, space, underscore
        if (/[a-zA-Z0-9-_ ]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    // async importOld() {
    //   try {
    //     var toConvert: any[]
    //     for (let i = 0; i < this.files.length; i++) {
    //       toConvert.push({ 'type': 'file', 'data': this.files[i] })
    //     }
    //     var data = {
    //       name: this.userLocal,
    //       items: toConvert
    //     }
    //     let response: any = await this.api.convert(data);
    //     if (response.status == 'success') {
    //       this.showLoading(true);
    //       this.doConvert(response.payload?.id, (data: any) => {
    //         this.successInfo = true;
    //         this.successMsg = "Done " + JSON.stringify(data)
    //       });
    //     }
    //     console.log(response);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    getLength() {
        // alert("length")
        console.log("tag :" + this.tag.length);
        if (this.tag.length > 64) {
            this.remarkInvalid = true;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Remarks only allows for 64 character memo",
                icon: 'info',
                confirmButtonText: 'Okay'
            });
        }
        else {
            this.remarkInvalid = false;
        }
    }
    next() {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (this.files[this.files.length - 1].progress == 100) {
            this.delButton = true;
            if (this.coinsInfo == 'new') {
                try {
                    // for (let i = 0; i < this.baseAdd.length; i++) {
                    //   this.base.push({ 'type': 'inline', 'data': this.baseAdd[i] })
                    // }
                    for (let i = 0; i < ((_a = this.files) === null || _a === void 0 ? void 0 : _a.length); i++) {
                        this.base.push({ 'type': 'file', 'data': this.files[i] });
                    }
                    var data = {
                        name: this.userLocal,
                        tag: this.tag,
                        items: this.base
                    };
                    let response = yield this.api.import(data);
                    if (response.status === "success") {
                        this.btn = true;
                        //this.afterClick = true ;
                        //console.log("before loop:"+ this.afterClick)
                        this.doCheck((_b = response.payload) === null || _b === void 0 ? void 0 : _b.id, (data) => {
                            this.successInfo = true;
                            this.successMsg = "Done " + JSON.stringify(data);
                        });
                    }
                    else {
                        if (response.payload.message == "Validation error. tag: must be in a valid format.") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Remark must be in valid format",
                                icon: 'warning',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                        else {
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
                }
                catch (e) {
                    console.log(e);
                }
            }
            else if (this.coinsInfo == 'old') {
                try {
                    console.log("the email is:" + this.email);
                    console.log("old coins block:" + this.files.length);
                    var toConvert = [];
                    for (let i = 0; i < this.files.length; i++) {
                        toConvert.push({ 'type': 'file', 'data': this.files[i] });
                    }
                    var data1 = {
                        name: this.userLocal,
                        items: toConvert,
                        email: this.email
                    };
                    console.log("Before insert data:" + data1.name);
                    console.log("items:" + data1.items);
                    console.log("email:" + data1.email);
                    let response = yield this.api.convert(data1);
                    if (response.status == 'success') {
                        console.log("message:" + ((_d = (_c = response.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message));
                        this.showLoading(true);
                        this.loadingMessage = 'Importing Coins...';
                        this.doConvert((_e = response.payload) === null || _e === void 0 ? void 0 : _e.id, (data) => {
                            this.successInfo = true;
                            this.successMsg = "Done " + JSON.stringify(data);
                        });
                    }
                    //console.log("payload code:" + response.payload.code);
                    else if (response.status == 'error') {
                        if (response.payload.code == 4121) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: 'Please provide Email that exists',
                                icon: 'error',
                                confirmButtonText: 'Okay',
                            }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (result.isConfirmed) {
                                    const { value: email } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                        title: 'Input email address',
                                        input: 'email',
                                        inputLabel: 'Please provide email address',
                                        inputPlaceholder: 'Email address'
                                    });
                                    this.email = email;
                                }
                            }));
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
        });
    }
    fixfracked(data) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showLoading(true);
            this.loadingMessage = "Fixing fracked coin...";
            try {
                let response = yield this.api.postFix(data);
                console.log(response);
                if (response.status === "success") {
                    this.isFracked = true;
                    this.doCheck1((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                        this.successInfo = true;
                        this.successMsg = "Done " + JSON.stringify(data);
                    });
                }
                else {
                    this.showLoading(false);
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
            //console.log("Task done: ", task);
            if (task) {
                // this.payload = task.payload;
                if (task.payload.status == "error" || task.payload.status == "completed") {
                    this.showLoading(false);
                    if (task.payload.status == "completed") {
                        this.frackedDetail = task.payload.data;
                        if (task.payload.data.total_errors != 0 || task.payload.data.total_skipped != 0) {
                            this.showLoading(false);
                            // Swal.fire({
                            //   title: "Coin could not be fixed!",
                            //   icon: 'info',
                            //   confirmButtonText: 'Okay',
                            // }).then((result) => {
                            //   if (result.value) { { } }
                            // });
                        }
                    }
                    else {
                        this.btn = true;
                        this.showLoading(false);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Failure! could not fix the coin.",
                            icon: 'warning',
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
            else {
                this.errorInfo = true;
                this.successInfo = false;
                this.errorMsg = "Call Failed";
                this.btn = true;
            }
        });
    }
    doConvert(taskID, xdata) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (task.payload.status == "error" || task.payload.status == "completed") {
                    this.showLoading(false);
                    if (task.payload.status == "completed") {
                        this.btn = false;
                        this.afterClick = true;
                        this.dateTime = new Date();
                        this.storage.setItem("wallet", "localwallet", 'upload');
                    }
                    else {
                        this.btn = true;
                        this.showLoading(false);
                        this.files = [];
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Failure to import!',
                            text: 'Error code:' + ' ' + ((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.code) + '.' + ' ' + ((_d = (_c = this.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message),
                            icon: 'warning',
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
                    this.doConvert(taskID, xdata);
                }, 500);
            }
            else {
                this.errorInfo = true;
                this.successInfo = false;
                this.errorMsg = "Call Failed";
                this.btn = true;
            }
        });
    }
    go() {
        // let currentUrl = this.router.url;
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.onSameUrlNavigation = 'reload';
        // this.router.navigate([currentUrl]);
        // this.storage.setItem("wallet", "localwallet", "upload");
        // sessionStorage.setItem('trans', 'transaction');
        this.router.navigate(["/dashboard/home"]);
    }
    onFileDropped($event) {
        // this.prepareFilesList($event);
    }
    fileBrowseHandler(files) {
        console.log(files);
        // this.prepareFilesList(files);
    }
    /**
     * Delete file from files list
     * @param index (File index)
     */
    deleteFile(index) {
        // if (this.files[index].progress < 100) {
        //   Swal.fire({
        //     title: "Upload in progress",
        //     icon: 'warning',
        //     confirmButtonText: 'Okay',
        //   }).then((result) => {
        //     if (result.value) { { } }
        //   });
        //   return;
        // }
        this.files.splice(index, 1);
        // var name = <HTMLInputElement>document.getElementById('fileInput');
        // name.placeholder = "Selected " + this.files.length + " files";
        if (this.files.length == 0) {
            this.btn = true;
            this.successInfo = false;
            this.errorInfo = false;
        }
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"])); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], viewQuery: function UploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileDropEl = _t.first);
    } }, decls: 5, vars: 4, consts: [["class", "transWrapper", 4, "ngIf"], ["class", "modalContainer", 4, "ngIf"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "transWrapper"], [1, "headerbackWrap"], ["href", "javascript:;", "routerLink", "/dashboard/home", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "titleOne"], ["class", "transBody", 4, "ngIf"], [1, "transBody"], [1, "row"], [1, "col-lg-12", "d-flex"], [1, "gap20"], [1, "formField"], ["for", ""], ["type", "text", "placeholder", "Ex: Pay for doing chores", 2, "width", "255px", 3, "ngModel", "ngModelChange", "keypress", "change"], [1, "gap10"], [1, "col-12"], ["href", "javascript:;", 1, "btnCustomBlue", 3, "click"], [1, "textWithIcon"], [1, "darkText", "ml-2"], [1, "col-6", "mt-2"], ["class", "progressWrap", 4, "ngIf"], ["class", "errorMsg", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, ""], ["class", "file_upload justify-content-between", 4, "ngFor", "ngForOf"], [1, "info_text"], ["src", "assets/icons_info.png", "alt", "image", 1, "info_img"], [1, "transBottomFooter"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", "ml-3", 3, "ngClass", "click"], [1, "progressWrap"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "background-color", "green!important", 3, "ngStyle"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], [1, "file_upload", "justify-content-between"], [1, "position-relative", "uploadtextWrap"], [1, "pl-2", "text-white", "text-left", "progress_text", 2, "display", "flex", "align-items", "center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-cloud-download"], ["d", "M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"], ["d", "M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"], [1, "pl-2", "ulpldText"], ["href", "javascript:;", 1, "fa", "fa-trash", "text-danger", "fs-32", "pt-1", 3, "click"], ["class", "headerbackWrap", 4, "ngIf"], [2, "opacity", "0.7"], ["class", "formField", 4, "ngIf"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "click"], ["href", "javascript:;", 3, "click"], [1, "modalContainer"], [1, "modalOverlay", 3, "click"], [1, "modalWrap", "modalMedium"], [1, "modalHeader"], [1, "modalClose", 3, "click"], ["src", "assets/close-white.svg", "alt", "icon"], [1, "modalBody", "scroll1"], [1, "text-white", "mb-n1"], [1, "sectionOne"], [4, "ngFor", "ngForOf"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UploadComponent_div_0_Template, 7, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UploadComponent_div_2_Template, 7, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UploadComponent_div_3_Template, 52, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UploadComponent_div_4_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.afterClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.afterClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showreceipt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: [".file_upload[_ngcontent-%COMP%] {\n  background: #333;\n  padding: 8px 14px;\n  border-radius: 7px;\n  height: 42px;\n  display: flex;\n}\n\n.file_upload_main[_ngcontent-%COMP%] {\n  background: #181818;\n  border-radius: 5px;\n  width: 96%;\n  height: 27px;\n  color: #fff;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #333333;\n}\n\n.dragDropContainer[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100%;\n  height: 252px;\n  border: 2px dashed rgba(255, 255, 255, 0.26);\n  box-sizing: border-box;\n  border-radius: 4px;\n  background: #181818;\n  cursor: pointer;\n}\n\n.dragDropContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n}\n\n.dragDropContainer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  width: 183px;\n  height: 44px;\n  border-radius: 21.5px;\n  background-color: #db202f;\n  padding: 8px 16px;\n}\n\n.dragDropContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: static;\n  height: 21px;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  font-family: Barlow;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 150%;\n  text-align: center;\n  color: #FFFFFF;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 0px 0px;\n}\n\n.dragDropContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: static;\n  height: 18px;\n  left: 0px;\n  right: 0px;\n  top: 21px;\n  font-family: Barlow;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.01em;\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  margin: 0px 0px;\n  color: #D7D7D7;\n}\n\n.fileover[_ngcontent-%COMP%] {\n  animation: shake 1s;\n  animation-iteration-count: infinite;\n}\n\n.files-list[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border: dashed 1px #979797;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-grow: 1;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   img.delete[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  cursor: pointer;\n  align-self: flex-end;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #353f4a;\n  margin: 0;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #a4a4a4;\n  margin: 0;\n  margin-bottom: 0.25rem;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.progress_text[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.progress_text[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 14px;\n  margin: 0 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.scroll1[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 400px;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.custom_check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  display: inline-block;\n  color: #fff;\n  margin: 0;\n}\n\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 50px;\n  border: 1px solid #fff;\n}\n\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: 4px;\n  left: 4px;\n  height: 12px;\n  width: 12px;\n  border-radius: 50px;\n  background-color: #0076ff;\n  opacity: 0;\n}\n\n.custom_check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n\n.hover_img[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.hover_img[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  z-index: 99;\n}\n\n.hover_img[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.info_text[_ngcontent-%COMP%] {\n  background-color: #dee8f5;\n  height: 300px;\n  width: 600px;\n  text-align: left;\n  margin-top: 15px;\n  padding-left: 10px;\n  margin-left: 15px;\n  border-radius: 6px;\n}\n\n.info_img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  margin-left: 270px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRko7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQUtFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQVNBLGFBQUE7RUFDQSxZQUFBO0FBWEo7O0FBR0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUROOztBQVFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFOTjs7QUFTSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFQTjs7QUFVSTtFQUNFLFdBQUE7QUFSTjs7QUFhQTtFQUNFLGtCQUFBO0FBVkY7O0FBZUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBYko7O0FBaUJBO0VBQ0UsWUFBQTtBQWRGOztBQWlCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQWRGOztBQWlCQTtFQUNFLFlBQUE7QUFkRjs7QUFpQkE7RUFDRSxhQUFBO0FBZEY7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWRGOztBQWlCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQWRGOztBQWlCQTtFQUNFLFVBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtBQWRGOztBQWlCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFkRjs7QUFpQkE7RUFDRSxjQUFBO0FBZEY7O0FBaUJBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFkRiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZV91cGxvYWQge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZmlsZV91cGxvYWRfbWFpbiB7XHJcbiAgYmFja2dyb3VuZDogIzE4MTgxODtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDk2JTtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi5kcmFnRHJvcENvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MnB4O1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxODE4MTg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxODNweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIxLjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjIwMmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgb3JkZXI6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogMjFweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCYXJsb3c7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgZmxleDogbm9uZTtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgY29sb3I6ICNEN0Q3RDc7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsZW92ZXIge1xyXG4gIGFuaW1hdGlvbjogc2hha2UgMXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi5maWxlcy1saXN0IHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcblxyXG4gIC5zaW5nbGUtZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICBpbWcuZGVsZXRlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICMzNTNmNGE7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2l6ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICNhNGE0YTQ7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3NfdGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAvLyBsZWZ0OiAwO1xyXG4gIC8vIHRvcDogNTAlO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBsYWJlbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnNjcm9sbDEge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY3VzdG9tX2NoZWNrIGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY3VzdG9tX2NoZWNrIGxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jdXN0b21fY2hlY2sgbGFiZWw6OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmN1c3RvbV9jaGVjayBsYWJlbDo6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgdG9wOiA0cHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICB3aWR0aDogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ZmY7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmN1c3RvbV9jaGVjayBpbnB1dDpjaGVja2VkfmxhYmVsOjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5ob3Zlcl9pbWcgYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaG92ZXJfaW1nIGEgc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5ob3Zlcl9pbWcgYTpob3ZlciBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmluZm9fdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZThmNTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmluZm9faW1nIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI3MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-upload',
                templateUrl: './upload.component.html',
                styleUrls: ['./upload.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }]; }, { fileDropEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["fileDropRef", { static: false }]
        }] }); })();


/***/ }),

/***/ "HL9f":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/transactions/upload/upload-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UploadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadRoutingModule", function() { return UploadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.component */ "DYWf");





const routes = [
    {
        path: '',
        component: _upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"]
    }
];
class UploadRoutingModule {
}
UploadRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UploadRoutingModule });
UploadRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UploadRoutingModule_Factory(t) { return new (t || UploadRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UploadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=upload-upload-module.js.map