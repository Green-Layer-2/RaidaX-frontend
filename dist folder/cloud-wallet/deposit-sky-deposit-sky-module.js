(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deposit-sky-deposit-sky-module"],{

/***/ "6xIx":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/transactions/deposit-sky/deposit-sky.module.ts ***!
  \**************************************************************************/
/*! exports provided: DepositSkyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositSkyModule", function() { return DepositSkyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _deposit_sky_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit-sky-routing.module */ "TC+4");
/* harmony import */ var _deposit_sky_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deposit-sky.component */ "vnmk");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-click-outside */ "Hicy");









class DepositSkyModule {
}
DepositSkyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DepositSkyModule });
DepositSkyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DepositSkyModule_Factory(t) { return new (t || DepositSkyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _deposit_sky_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepositSkyRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepositSkyModule, { declarations: [_deposit_sky_component__WEBPACK_IMPORTED_MODULE_3__["DepositSkyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _deposit_sky_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepositSkyRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepositSkyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_deposit_sky_component__WEBPACK_IMPORTED_MODULE_3__["DepositSkyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _deposit_sky_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepositSkyRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "TC+4":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/transactions/deposit-sky/deposit-sky-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: DepositSkyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositSkyRoutingModule", function() { return DepositSkyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _deposit_sky_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit-sky.component */ "vnmk");





const routes = [
    {
        path: '',
        component: _deposit_sky_component__WEBPACK_IMPORTED_MODULE_2__["DepositSkyComponent"]
    }
];
class DepositSkyRoutingModule {
}
DepositSkyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DepositSkyRoutingModule });
DepositSkyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DepositSkyRoutingModule_Factory(t) { return new (t || DepositSkyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepositSkyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepositSkyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vnmk":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/transactions/deposit-sky/deposit-sky.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DepositSkyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositSkyComponent", function() { return DepositSkyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-lottie */ "NiZn");













function DepositSkyComponent_div_0_div_1_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 35);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.cSelectorImgThree, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DepositSkyComponent_div_0_div_1_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepositSkyComponent_div_0_div_1_div_23_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const data_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r12.customSelectorThree(data_r11.name, "local"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r11.name);
} }
function DepositSkyComponent_div_0_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DepositSkyComponent_div_0_div_1_div_23_div_1_Template, 4, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.all);
} }
function DepositSkyComponent_div_0_div_1_div_45_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Remarks can't be longer than 64 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DepositSkyComponent_div_0_div_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DepositSkyComponent_div_0_div_1_div_45_span_1_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.exportForm.controls["tag"].errors == null ? null : ctx_r7.exportForm.controls["tag"].errors.maxlength);
} }
function DepositSkyComponent_div_0_div_1_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-lottie", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function DepositSkyComponent_div_0_div_1_ng_container_50_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepositSkyComponent_div_0_div_1_ng_container_50_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r17.hideErrorMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r9.errorOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.errorMessage);
} }
const _c0 = function (a0) { return { "btnDisable": a0 }; };
function DepositSkyComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Deposit To: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function DepositSkyComponent_div_0_div_1_Template_div_clickOutside_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.closeDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepositSkyComponent_div_0_div_1_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.customSelTogglerThree(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DepositSkyComponent_div_0_div_1_img_20_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DepositSkyComponent_div_0_div_1_div_23_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DepositSkyComponent_div_0_div_1_Template_input_keypress_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21._keyUp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DepositSkyComponent_div_0_div_1_div_45_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "canvas", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DepositSkyComponent_div_0_div_1_ng_container_50_Template, 7, 2, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepositSkyComponent_div_0_div_1_Template_a_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.showLoader ? "" : ctx_r22.deposit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Deposit CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Deposit CC To ", ctx_r3.userSky, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.exportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.userSky);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.cSelectorImgThree != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.cSelectorTextThree);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.customSelectorOpenThree);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isValidInput("tag"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r3.exportForm.invalid && ctx_r3.export == false));
} }
function DepositSkyComponent_div_0_div_2_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepositSkyComponent_div_0_div_2_div_21_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const sky_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r27.customSelector(sky_r26.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sky_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sky_r26.name);
} }
function DepositSkyComponent_div_0_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DepositSkyComponent_div_0_div_2_div_21_div_1_Template, 4, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.skyAll);
} }
function DepositSkyComponent_div_0_div_2_div_43_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Remarks can't be longer than 64 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DepositSkyComponent_div_0_div_2_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DepositSkyComponent_div_0_div_2_div_43_span_1_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.exportForm.controls["tag"].errors == null ? null : ctx_r24.exportForm.controls["tag"].errors.maxlength);
} }
function DepositSkyComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Send CC To SkyVault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Send From: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function DepositSkyComponent_div_0_div_2_Template_div_clickOutside_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.closeDropdownSky(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepositSkyComponent_div_0_div_2_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.customSelToggler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DepositSkyComponent_div_0_div_2_div_21_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function DepositSkyComponent_div_0_div_2_Template_input_keypress_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33._keyUp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, DepositSkyComponent_div_0_div_2_div_43_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepositSkyComponent_div_0_div_2_Template_a_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.showLoader ? "" : ctx_r34.deposit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Send CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.exportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.userLocal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.cSelectorImgSky, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.cSelectorTextSky);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.customSelectorOpenSky);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isValidInput("tag"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r4.exportForm.invalid || ctx_r4.export == false));
} }
function DepositSkyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DepositSkyComponent_div_0_div_1_Template, 54, 11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DepositSkyComponent_div_0_div_2_Template, 47, 9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.type === "localwallet");
} }
function DepositSkyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Error: Some of your coins were counterfeit. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Total coins attempted to send: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Total authentic coins sent: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total counterfeit coins not sent: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepositSkyComponent_div_1_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.go(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.payload.data == null ? null : ctx_r1.payload.data.TotalCoins);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.payload.data == null ? null : ctx_r1.payload.data.TotalAuthentic);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.payload.data == null ? null : ctx_r1.payload.data.TotalCounterfeit);
} }
function DepositSkyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function DepositSkyComponent_div_2_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 58);
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
class DepositSkyComponent {
    constructor(auth, router, event, fb, api) {
        this.auth = auth;
        this.router = router;
        this.event = event;
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
        this.cSelectorImgSky = 'assets/search-w-border.svg';
        if (localStorage.getItem('skywallet')) {
            this.skywallet = localStorage.getItem('skywallet');
            this.username = (localStorage.getItem('skywallet')).split(".", 1)[0];
        }
        this.exportForm = this.fb.group({
            // skyName: [''],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(500000|[1-5]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?)$')]],
            tag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]
        });
        // this.exportForm.get('skyName').valueChanges.subscribe(response => {
        //   this.filterData(response);
        // })
    }
    ngOnInit() {
        this.userSky = localStorage.getItem('userSky');
        this.type = localStorage.getItem("wallet");
        this.userLocal = localStorage.getItem("userLocal");
        this.event.changeLocal.subscribe(message => {
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
        this.getSky();
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
                    this.event.changeLocaldata(this.all);
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
            // this.event.changeMessage(this.showLoader);
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
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.pastrecord();
                if (response.status === "success") {
                    this.name = [...new Set((_a = response === null || response === void 0 ? void 0 : response.payload) === null || _a === void 0 ? void 0 : _a.names)];
                    this.name.sort();
                    this.filteredOptions = this.name;
                    this.customSelectorOpenThree = !this.customSelectorOpenThree;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    closeDropdown() {
        this.customSelectorOpenThree = false;
    }
    filterData(enteredData) {
        this.filteredOptions = this.name.filter((item) => {
            return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
        });
    }
    customSelectorThree(name, type) {
        this.export = true;
        this.cSelectorTextThree = name;
        this.customSelectorOpenThree = false;
        if (type === 'local') {
            this.cSelectorImgThree = 'assets/folder-w-border.svg';
        }
        else {
            this.exportForm.get('skyName').patchValue(name);
        }
    }
    getSky() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getList();
                if (response.status == "success") {
                    this.skyAll = response.payload;
                    // var index = this.skyAll.findIndex(x =>
                    //   x.name === this.userSky
                    // );
                    //this.skyAll.splice(index, 1);
                    // this.cSelectorTextSky = this.skyAll[0].name;
                    // if (this.skyAll?.length == 1) {
                    this.export = true;
                    this.cSelectorTextSky = this.skyAll[0].name;
                    this.cSelectorImgSky = 'assets/cloud-transfer.svg';
                    this.customSelectorOpenSky = false;
                }
                else {
                    this.skyAll = ['Failed to load data'];
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    customSelector(val) {
        this.export = true;
        this.cSelectorImgSky = 'assets/cloud-transfer.svg';
        this.cSelectorTextSky = val;
        console.log(this.cSelectorTextSky);
        this.customSelectorOpenSky = false;
    }
    customSelToggler() {
        this.customSelectorOpenSky = !this.customSelectorOpenSky;
    }
    closeDropdownSky() {
        this.customSelectorOpenSky = false;
    }
    doCheck(taskID, xdata) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        //console.log("taskId:" +taskID)
                        //console.log("coin:"+ this.payload.data.TotalCounterfeit)
                        // this.afterClick = true;
                        this.showLoading(false);
                        // this.getTransaction();
                        // let currentUrl = this.router.url;
                        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                        // this.router.onSameUrlNavigation = 'reload';
                        // this.router.navigate([currentUrl]);
                        if (this.type === 'skywallet') {
                            this.event.setItem("wallet", "skywallet", "deposit");
                        }
                        else {
                            this.event.setItem("wallet", "localwallet", "deposit");
                        }
                        this.getAllwallet();
                        this.afterClick = true;
                        //this.router.navigate(["/dashboard/home"]);
                        if (this.type === 'skywallet') {
                            this.afterClick = false;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                                title: "You have deposited " + ((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.TotalCoins) + " CC from " + this.cSelectorTextThree,
                                icon: 'success',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                            this.router.navigate(['/dashboard/home']);
                            if (((_d = (_c = this.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.TotalCounterfeit) > 0 && ((_f = (_e = this.payload) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.TotalAuthentic) > 0) {
                                this.afterClick = true;
                            }
                            else if (((_h = (_g = this.payload) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.TotalCounterfeit) > 0 && ((_k = (_j = this.payload) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.TotalAuthentic) == 0) {
                                this.afterClick = false;
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                                    title: "Could not Transfer. All coins were counterfeit",
                                    icon: 'error',
                                    confirmButtonText: 'Okay',
                                });
                                this.router.navigate(['/dashboard/home']);
                            }
                        }
                        else if (this.type == 'localwallet') {
                            this.afterClick = false;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                                title: "You have sent " + ((_m = (_l = this.payload) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.TotalCoins) + " CC to " + this.cSelectorTextSky,
                                icon: 'success',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                            this.router.navigate(['dashboard/home']);
                        }
                    }
                    else {
                        this.afterClick = false;
                        this.showLoading(false);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'warning',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
                        this.router.navigate(['dashboard/home']);
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
    go() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
        this.router.navigate(["/dashboard/home"]);
    }
    getName(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (e !== "") {
                this.export = true;
                this.exportForm.get('skyName').patchValue(e);
            }
        });
    }
    deposit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.export == true) {
                try {
                    if (this.type === "skywallet") {
                        var exportData = {
                            name: this.cSelectorTextThree,
                            to: Number(localStorage.getItem('serial')),
                            amount: Number(this.exportForm.get('amount').value),
                            tag: this.exportForm.get('tag').value
                        };
                        var response = yield this.api.deposit(exportData);
                        this.loadingMessage = "Depositing CC...";
                    }
                    else {
                        var exportData1 = {
                            name: this.userLocal,
                            toName: this.cSelectorTextSky,
                            amount: Number(this.exportForm.get('amount').value),
                            tag: this.exportForm.get('tag').value
                        };
                        var response = yield this.api.deposit(exportData1);
                        this.loadingMessage = "Sending CC...";
                    }
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
}
DepositSkyComponent.ɵfac = function DepositSkyComponent_Factory(t) { return new (t || DepositSkyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"])); };
DepositSkyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DepositSkyComponent, selectors: [["app-deposit-sky"]], decls: 3, vars: 3, consts: [["class", "", 4, "ngIf"], ["class", "transWrapper", 4, "ngIf"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, ""], [1, "transWrapper"], [1, "headerbackWrap"], ["href", "javascript:;", "routerLink", "/dashboard/home", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "titleOne"], [1, "transBody"], [3, "formGroup"], [1, "formInline"], [1, "gap20"], [1, "formField"], ["for", "username"], [1, "customeDropdownTwo", 3, "clickOutside"], [1, "triger", 3, "click"], ["alt", "image", 3, "src", 4, "ngIf"], ["class", "menuShowTwo scroll", 4, "ngIf"], [1, "gap10"], [1, "row"], [1, "col-md-12"], ["for", ""], [1, "col-md-5", "dispFlex", "dispFlexPriceTrans"], [1, "inputTagWrapper"], ["href", "javascript:;", 1, "inpTag"], ["type", "text", "placeholder", "0", "formControlName", "amount", 1, "form-control", 3, "keypress"], [1, "col-md-6"], ["type", "text", "placeholder", "Ex: Send it to Antoine", "formControlName", "tag"], [4, "ngIf"], [1, "hideimage"], ["width", "300", "height", "300"], ["quoteCanvas", ""], [1, "transBottomFooter"], ["href", "javascript:void(0);", 1, "btnCustomBlue", 3, "ngClass", "click"], ["alt", "image", 3, "src"], [1, "menuShowTwo", "scroll"], ["class", "menus", 3, "click", 4, "ngFor", "ngForOf"], [1, "menus", 3, "click"], ["src", "assets/folder-w-border.svg", "alt", "icon"], ["class", "errorMsg", 4, "ngIf"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], ["height", "100px", 3, "options", "animationCreated"], [1, "text-center", 2, "color", "#ffffff", "margin-bottom", "10px"], [1, "text-center"], [1, "customBtn", 3, "click"], ["icon", "arrow-left"], [1, "lineSection"], [1, "customeDropdownTwo", "mb-2", 3, "clickOutside"], ["height", "20", "alt", "", 3, "src"], ["type", "text", "placeholder", "0", "formControlName", "amount", 2, "text-align", "center", 3, "keypress"], ["src", "assets/cloud-transfer.svg", "alt", "icon"], [2, "opacity", "0.7"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "click"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function DepositSkyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DepositSkyComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DepositSkyComponent_div_1_Template, 24, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DepositSkyComponent_div_2_Template, 6, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.afterClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.afterClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieComponent"]], styles: [".hideimage[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.onLoad[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.formField[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n  color: #777;\n  font-size: 16px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #777;\n  font-size: 16px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884FF;\n  outline: transparent;\n}\n\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n}\n\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #2C2C2C;\n  font-size: 18px;\n  color: #fff;\n  padding: 40px !important;\n}\n\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: solid 1px #2C2C2C;\n  outline: transparent;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGVwb3NpdC1za3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtBQUdKOztBQURJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUdSOztBQUZRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFJWjs7QUFGUTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUFJWjs7QUFESTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBR1I7O0FBRlE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFJWjs7QUFGUTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUFJWjs7QUFBRTtFQUNFLFlBQUE7QUFHSiIsImZpbGUiOiJkZXBvc2l0LXNreS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAub25Mb2FkIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG4gIC5mb3JtRmllbGR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICBcclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwODg0RkY7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3B0aW9ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMyQzJDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMyQzJDMkM7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DepositSkyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-deposit-sky',
                templateUrl: './deposit-sky.component.html',
                styleUrls: ['./deposit-sky.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=deposit-sky-deposit-sky-module.js.map