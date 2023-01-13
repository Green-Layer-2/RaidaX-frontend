(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+ZLb":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/raida-status/raida-status.component.ts ***!
  \******************************************************************/
/*! exports provided: RaidaStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaidaStatusComponent", function() { return RaidaStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






const _c0 = function (a0) { return { color: a0 }; };
function RaidaStatusComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("RAIDA ", ("0" + i_r4).slice(-2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, data_r3 === 0 ? "red" : "green"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r3 === 0 ? "TIMED OUT" : (data_r3 / 1000).toFixed(3) + " sec");
} }
function RaidaStatusComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const j_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("RAIDA ", j_r6 + 13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, data_r5 === 0 ? "red" : "green"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5 === 0 ? "TIMED OUT" : (data_r5 / 1000).toFixed(3) + " sec");
} }
function RaidaStatusComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "TIMED OUT means the response exceeded the seconds allowed to respond. This could be caused by a slow network or because the RAIDA was blocked (usually by office routers). It could also be caused by your computer being old and unable to handle 25 threads at once. Try changing your settings to increase the timeout. Or try using a more powerful computer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RaidaStatusComponent {
    constructor(api) {
        this.api = api;
        this.isTimeout = false;
        this.errorInfo = false;
    }
    ngOnInit() {
        this.getEcho();
    }
    doTaskPoll(taskID) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doTaskPoll(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "completed") {
                    this.latencies = (_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.latencies;
                    var item = this.latencies.filter(x => x === 0);
                    if ((item === null || item === void 0 ? void 0 : item.length) !== 0) {
                        this.isTimeout = true;
                    }
                    // let data = this.payload.data;
                    // let h = "";
                    // for (let i = 0; i < data.pownarray.length; i++) {
                    //   let st = data.pownarray[i]
                    //   if (st != 1) {
                    //     h += "<span class='rf'>" + i + "</span>"
                    //   } else {
                    //     h += "<span class='pf'>" + i + "</span>"
                    //   }
                    // }
                    return;
                }
                setTimeout(() => {
                    this.doTaskPoll(taskID);
                }, 500);
            }
        });
    }
    getEcho() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.errorInfo = false;
            this.payload = null;
            try {
                let response = yield this.api.raidaEcho();
                if (response) {
                    this.payload = response.payload;
                    this.doTaskPoll((_a = this.payload) === null || _a === void 0 ? void 0 : _a.id);
                }
            }
            catch (e) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Raida Servers disconnected!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'SYNC',
                }).then((result) => {
                    if (result.value) {
                        {
                            this.getEcho();
                        }
                    }
                });
            }
        });
    }
}
RaidaStatusComponent.ɵfac = function RaidaStatusComponent_Factory(t) { return new (t || RaidaStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
RaidaStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RaidaStatusComponent, selectors: [["app-raida-status"]], decls: 19, vars: 11, consts: [[1, "subHedOne"], ["onClick", "window.location.reload();", 1, "btn", "btn-primary"], [1, "raidaStatOuter"], [1, "raidaStatWrap"], [1, "row"], [1, "col-6", "col-lg-4", "col-xl-3"], [4, "ngFor", "ngForOf"], [1, "col-8"], [1, "gap20"], ["class", "textOne", "style", "opacity: 0.7;", 4, "ngIf"], [1, "raidaStatDesc"], [1, "raidaStatDesc", "ml-4", 3, "ngStyle"], [1, "textOne", 2, "opacity", "0.7"]], template: function RaidaStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "RAIDA Status and Echo Times ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Check Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RaidaStatusComponent_tr_10_Template, 6, 5, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RaidaStatusComponent_tr_14_Template, 6, 5, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RaidaStatusComponent_span_18_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 3, ctx.latencies, 0, 13));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](15, 7, ctx.latencies, 13, 25));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTimeout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".settingsWrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  position: relative;\n}\n@media screen and (max-width: 992px) {\n  .settingsWrapper[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.settingsWrapper[_ngcontent-%COMP%]   .tabBody[_ngcontent-%COMP%] {\n  height: calc(100vh - 240px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 1320px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .tabBody[_ngcontent-%COMP%] {\n    height: calc(100vh - 290px);\n  }\n}\n@media screen and (max-width: 992px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .tabBody[_ngcontent-%COMP%] {\n    height: calc(100vh - 310px);\n  }\n}\n@media screen and (max-width: 576px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .tabBody[_ngcontent-%COMP%] {\n    height: calc(100vh - 320px);\n  }\n}\n.settingsWrapper[_ngcontent-%COMP%]   .footerFixed[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -30px;\n  left: -30px;\n  right: 0;\n  padding: 15px;\n  background-color: rgba(255, 255, 255, 0.04);\n  width: calc(100vw + 60px);\n  z-index: 500;\n}\n@media screen and (max-width: 992px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .footerFixed[_ngcontent-%COMP%] {\n    bottom: -70px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .settingsWrapper[_ngcontent-%COMP%]   .footerFixed[_ngcontent-%COMP%] {\n    bottom: 0px;\n    position: fixed;\n    left: 0;\n  }\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.15rem !important;\n  vertical-align: baseline !important;\n}\n.smalInfoDivWoFlex[_ngcontent-%COMP%] {\n  display: block;\n}\n.subHedOne[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 500;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.textOne[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.lineSection[_ngcontent-%COMP%] {\n  width: initial;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n  display: inline-block;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n  padding: 0px 10px !important;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #2c2c2c;\n  font-size: 16px;\n  color: #fff;\n  padding: 10px 0;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884ff;\n  outline: transparent;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectOne[_ngcontent-%COMP%]   .flgIcon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 20px;\n  object-fit: cover;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: block;\n  margin-bottom: 10px;\n  text-align: left;\n  line-height: 16px;\n  color: #fff;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0px 10px !important;\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #2c2c2c;\n  font-size: 16px;\n  color: #fff;\n  padding: 10px 0;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884ff;\n  outline: transparent;\n}\n.lineSection[_ngcontent-%COMP%]   .inputSelectTwo[_ngcontent-%COMP%]   .flgIcon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 20px;\n  object-fit: cover;\n}\n.lineSection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 0;\n  margin-left: 20px;\n  display: inline-block;\n}\n.note[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.formField[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent;\n  color: #777;\n  font-size: 16px;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #777;\n  font-size: 16px;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884ff;\n  outline: transparent;\n}\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  border-radius: 4px;\n  background-color: transparent !important;\n}\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #2c2c2c;\n  font-size: 16px;\n  color: #fff;\n  padding: 10px 0;\n}\n.formField[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: solid 1px #0884ff;\n  outline: transparent;\n}\n.radioInpHolderTri[_ngcontent-%COMP%] {\n  width: initial;\n  margin-right: 20px;\n}\n.bgFill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #2c2c2c;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #393939;\n}\n.menuShowTwo[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 200px;\n}\n  .mat-accent .mat-slider-thumb, .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n[_nghost-%COMP%]     .min .mat-slider-thumb {\n  background-color: #0076ff;\n}\n[_nghost-%COMP%]     .min .mat-slider-thumb-label {\n  background-color: #0076ff;\n}\n[_nghost-%COMP%]     .min .mat-slider-track-fill {\n  background-color: #0076ff;\n}\n  .mat-slider-wrapper {\n  background-color: rgba(255, 255, 255, 0.26) !important;\n}\n  .mat-slider-horizontal {\n  min-width: 300px !important;\n  margin-top: 10px !important;\n  margin-bottom: 5px !important;\n}\n  .mat-slider-thumb-label {\n  transform: rotate(45deg) !important;\n  border-radius: 50% 50% 0 !important;\n}\n  .mat-slider-thumb {\n  transform: scale(0) !important;\n}\n  .mat-slider-thumb-label-text {\n  opacity: 1 !important;\n}\n.raidaStatOuter[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.raidaStatOuter[_ngcontent-%COMP%]   .raidaStatWrap[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.raidaStatOuter[_ngcontent-%COMP%]   .raidaStatWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.raidaStatOuter[_ngcontent-%COMP%]   .raidaStatWrap[_ngcontent-%COMP%]   .raidaStatDesc[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #048100;\n  text-align: left;\n}\n.raidaStatOuter[_ngcontent-%COMP%]   .raidaStatWrap[_ngcontent-%COMP%]   .raidaStatDesc.redText[_ngcontent-%COMP%] {\n  color: #b40000;\n  font-size: 16px;\n}\n.custom_check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  display: inline-block;\n  color: #fff;\n  margin: 0;\n}\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 50px;\n  border: 1px solid #fff;\n}\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: 4px;\n  left: 4px;\n  height: 12px;\n  width: 12px;\n  border-radius: 50px;\n  background-color: #0076ff;\n  opacity: 0;\n}\n.custom_check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYWlkYS1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUhKO0lBSVEsWUFBQTtFQUdOO0FBQ0Y7QUFGSTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlSO0FBSFE7RUFKSjtJQUtRLDJCQUFBO0VBTVY7QUFDRjtBQUxRO0VBUEo7SUFRUSwyQkFBQTtFQVFWO0FBQ0Y7QUFQUTtFQVZKO0lBV1EsMkJBQUE7RUFVVjtBQUNGO0FBUkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVVSO0FBVFE7RUFUSjtJQVVRLGFBQUE7RUFZVjtBQUNGO0FBWFE7RUFaSjtJQWFRLFdBQUE7SUFDQSxlQUFBO0lBQ0EsT0FBQTtFQWNWO0FBQ0Y7QUFWQTs7RUFFSSwyQkFBQTtFQUNBLG1DQUFBO0FBYUo7QUFWQTtFQUNJLGNBQUE7QUFhSjtBQVhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBY0o7QUFaQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWVKO0FBYkE7RUFDSSxjQUFBO0FBZ0JKO0FBZkk7RUFDSSxxQkFBQTtBQWlCUjtBQWhCUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtBQWtCWjtBQWpCWTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBbUJoQjtBQWpCWTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUFtQmhCO0FBaEJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWtCWjtBQWZJO0VBQ0kscUJBQUE7QUFpQlI7QUFoQlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFrQlo7QUFoQlE7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBa0JaO0FBakJZO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFtQmhCO0FBakJZO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQW1CaEI7QUFoQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBa0JaO0FBZkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQWlCUjtBQWRBO0VBQ0ksV0FBQTtBQWlCSjtBQWZBO0VBQ0ksbUJBQUE7QUFrQko7QUFoQkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBa0JSO0FBakJRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFtQlo7QUFqQlE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FBbUJaO0FBaEJJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFrQlI7QUFqQlE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQW1CWjtBQWpCUTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUFtQlo7QUFmQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQWtCSjtBQWZJO0VBQ0kseUJBQUE7QUFrQlI7QUFiSTtFQUNJLHlCQUFBO0FBZ0JSO0FBYkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBZ0JKO0FBZEE7OztFQUdJLGtDQUFBO0FBaUJKO0FBZkE7RUFDSSx5QkFBQTtBQWtCSjtBQWZBO0VBQ0kseUJBQUE7QUFrQko7QUFoQkE7RUFDSSx5QkFBQTtBQW1CSjtBQWpCQTtFQUNJLHNEQUFBO0FBb0JKO0FBbEJBO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBcUJKO0FBbkJBO0VBQ0ksbUNBQUE7RUFDQSxtQ0FBQTtBQXNCSjtBQW5CQTtFQUNJLDhCQUFBO0FBc0JKO0FBbkJBO0VBQ0kscUJBQUE7QUFzQko7QUFuQkE7RUFDSSxtQkFBQTtBQXNCSjtBQXJCSTtFQUtJLGdCQUFBO0FBbUJSO0FBbEJRO0VBQ0ksV0FBQTtBQW9CWjtBQWxCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFvQlo7QUFuQlk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXFCaEI7QUFoQkE7RUFDSSxhQUFBO0FBbUJKO0FBakJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFvQko7QUFsQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXFCSjtBQW5CQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQXNCSjtBQXBCQTtFQUNJLFVBQUE7QUF1QkoiLCJmaWxlIjoicmFpZGEtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzV3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRhYkJvZHkge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI0MHB4KTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzIwcHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjkwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMyMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyRml4ZWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC0zMHB4O1xyXG4gICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyArIDYwcHgpO1xyXG4gICAgICAgIHotaW5kZXg6IDUwMDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICBib3R0b206IC03MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlIHRkLFxyXG4udGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogMC4xNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbWFsSW5mb0RpdldvRmxleCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc3ViSGVkT25lIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnRleHRPbmUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubGluZVNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICAuaW5wdXRTZWxlY3RPbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMDg4NGZmO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZsZ0ljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5wdXRTZWxlY3RUd28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwODg0ZmY7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmxnSWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxufVxyXG4ubm90ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZm9ybUZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwODg0ZmY7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwODg0ZmY7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucmFkaW9JbnBIb2xkZXJUcmkge1xyXG4gICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmJnRmlsbCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm1GaWVsZCB7XHJcbiAgICBpbnB1dDpkaXNhYmxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcclxuICAgIH1cclxufVxyXG4ubWVudVNob3dUd28ge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYixcclxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwsXHJcbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1pbiAubWF0LXNsaWRlci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NmZmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1pbiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NmZmO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWluIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzZmZjtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZXItd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLWhvcml6b250YWwge1xyXG4gICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci10aHVtYiB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJhaWRhU3RhdE91dGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAucmFpZGFTdGF0V3JhcCB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmFpZGFTdGF0RGVzYyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwNDgxMDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICYucmVkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2I0MDAwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY3VzdG9tX2NoZWNrIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmN1c3RvbV9jaGVjayBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uY3VzdG9tX2NoZWNrIGxhYmVsOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuLmN1c3RvbV9jaGVjayBsYWJlbDo6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ZmY7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbi5jdXN0b21fY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RaidaStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-raida-status',
                templateUrl: './raida-status.component.html',
                styleUrls: ['./raida-status.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\New folder\cloudcoin-ng\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    base_url: 'http://localhost:8888/api/v1/',
    connection_url: 'http://localhost:8888',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: DEFAULT_TIMEOUT, ApiService, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");






const DEFAULT_TIMEOUT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('defaultTimeout');
class ApiService {
    // public headerOption = new HttpHeaders({
    //   timeout:'20000'
    // });
    constructor(http, defaultTimeout) {
        this.http = http;
        this.defaultTimeout = defaultTimeout;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
        this.checkURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].connection_url;
    }
    intercept(req, next) {
        const timeoutValue = req.headers.get('timeout') || this.defaultTimeout;
        const timeoutValueNumeric = Number(timeoutValue);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(timeoutValueNumeric));
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.checkURL).toPromise();
        });
    }
    raidaEcho() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'echo').toPromise();
        });
    }
    doTaskPoll(taskID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'tasks/' + taskID).toPromise();
        });
    }
    doCheck(taskID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'tasks/' + taskID).toPromise();
        });
    }
    getWallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'wallets').toPromise();
        });
    }
    addWallet(idata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'wallets', idata).toPromise();
        });
    }
    deleteWallet(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.delete(this.baseURL + 'wallets/' + data).toPromise();
        });
    }
    detect(coin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'detect', coin).toPromise();
        });
    }
    walletname(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'wallets/' + data).toPromise();
        });
    }
    getTransaction(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'wallets/' + data + '?contents=true').toPromise();
        });
    }
    import(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'import', data).toPromise();
        });
    }
    export(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'export', data).toPromise();
        });
    }
    transfer(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'transfer', data).toPromise();
        });
    }
    getVersion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'info').toPromise();
        });
    }
    getNews() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'news').toPromise();
        });
    }
    deletetransaction(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.delete(this.baseURL + 'transactions/' + data).toPromise();
        });
    }
    rename(name, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(this.baseURL + 'wallets/' + name, data).toPromise();
        });
    }
    getReceipts(name, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'transactions/' + name + "/" + data).toPromise();
        });
    }
    readbin(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'unpack', data).toPromise();
        });
    }
    importFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'filepicker?type=file').toPromise();
        });
    }
    importFolder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'filepicker?type=folder').toPromise();
        });
    }
    pastrecord() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'senderhistory?pattern=.*').toPromise();
        });
    }
    leftover(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'wallets/' + name + '/leftovers').toPromise();
        });
    }
    suspect(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'import?type=suspect', data).toPromise();
        });
    }
    convert(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'convert', data).toPromise();
        });
    }
    getColors() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'wallets').toPromise();
        });
    }
    fixlimbo(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'fixlost', data).toPromise();
        });
    }
    // Skywallet apis
    createSky(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'skywallets', data).toPromise();
        });
    }
    getAllSky() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'skywallets').toPromise();
        });
    }
    getSky(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'skywallets/' + data).toPromise();
        });
    }
    deleteSky(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.delete(this.baseURL + 'skywallets/' + data).toPromise();
        });
    }
    freeCoin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'freecoin').toPromise();
        });
    }
    deposit(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'deposit', data).toPromise();
        });
    }
    setting() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'settings').toPromise();
        });
    }
    settingTask(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'settings', data).toPromise();
        });
    }
    withdraw(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'withdraw', data).toPromise();
        });
    }
    transfersky(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'skytransfer', data).toPromise();
        });
    }
    fix(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(this.baseURL + 'fix', data).toPromise();
        });
    }
    getFix() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'fix').toPromise();
        });
    }
    postFix(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'fix', data).toPromise();
        });
    }
    health(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'health', data).toPromise();
        });
    }
    skyhealth(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'skyhealth', data).toPromise();
        });
    }
    publicChange(name, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'skywallets/' + name, data).toPromise();
        });
    }
    recHistory(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.delete(this.baseURL + 'statements/' + data).toPromise();
        });
    }
    fixSky(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'sync', data).toPromise();
        });
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'skywallets' + '?list_only=true').toPromise();
        });
    }
    detectsky(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.post(this.baseURL + 'skydetect', data).toPromise();
        });
    }
    idFix(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.post(this.baseURL + 'skyfix', data).toPromise();
        });
    }
    backup(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.post(this.baseURL + 'backup', data).toPromise();
        });
    }
    skyBackup(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.post(this.baseURL + 'skybackup', data).toPromise();
        });
    }
    filePick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(this.baseURL + 'filepicker').toPromise();
        });
    }
    deleteFromFolder(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.delete(this.baseURL + 'skywallets/' + name + '?file_only=true').toPromise();
        });
    }
    getskyreceipt(name, guid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'skytransactions/' + name + "/" + guid).toPromise();
        });
    }
    pay(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'pay', data).toPromise();
        });
    }
    skypay(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'skypay', data).toPromise();
        });
    }
    exportCoinasNft(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'nfts/' + 'export', data).toPromise();
        });
    }
    exportSNs(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'exportsns', data).toPromise();
        });
    }
    nftGroups() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(this.baseURL + 'nftgroups' + '?tb_size=150').toPromise();
        });
    }
    displayDetails(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(this.baseURL + 'nfts/' + data).toPromise();
        });
    }
    deleteNfts(data, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.delete(this.baseURL + 'nfts/' + data + "/" + name).toPromise();
        });
    }
    checkPngValidity(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'nfts/' + data + '/png').toPromise();
        });
    }
    checkUniqueValidity(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'nfts/' + data + '/unique').toPromise();
        });
    }
    checkDescValidity(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'nfts/' + data + '/description').toPromise();
        });
    }
    syncNft(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'nftsync', data).toPromise();
        });
    }
    returnNftConf() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.baseURL + 'nftconf').toPromise();
        });
    }
    updateNftConf(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(this.baseURL + 'nftconf', data).toPromise();
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DEFAULT_TIMEOUT)); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [DEFAULT_TIMEOUT]
            }] }]; }, null); })();
// @Injectable()
// export class StorageService {
//   private storageSub = new Subject<String>();
//   watchStorage(): Observable<any> {
//     return this.storageSub.asObservable();
//   }
//   setItem(key: string, data: any, type:any) {
//     localStorage.setItem(key, data);
//     this.storageSub.next(type);
//   }
// }
class DataService {
    setData(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
    hasData() {
        return this.data && this.data.length;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-click-outside */ "Hicy");






function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getCorrectRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "News");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.getCorrectRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.getCorrectRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "RAIDA Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.getCorrectRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Help & Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
// import {WebView, LoadEventData} from "tns-core-modules/ui/web-view";
class AppComponent {
    // public url="https://www.google.com";
    // @ViewChild("webview") webview: WebView;
    constructor(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.title = 'cloud-wallet';
        if (localStorage.getItem('themeLightActive') == '1') {
            this.themeTogChanger = false;
        }
        else if (localStorage.getItem('themeLightActive') == '0') {
            this.themeTogChanger = true;
        }
        else {
            this.themeTogChanger = false;
        }
        ;
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
        this.themeDropdwnToggler = false;
    }
    ngOnInit() {
        this.eventService.getThemeTogEvent().subscribe(() => {
            if (localStorage.getItem('themeLightActive') == '1') {
                this.themeTogChanger = false;
            }
            else if (localStorage.getItem('themeLightActive') == '0') {
                this.themeTogChanger = true;
            }
            else {
                this.themeTogChanger = !this.themeTogChanger;
            }
        });
        //     this.webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
        //       console.log("loadFinishedEvent called");
        //  });
    }
    themeDarkCaller() {
        if (this.themeDarkActive == false) {
            this.themeDarkActive = true;
            this.themeLightActive = false;
            localStorage.setItem('themeLightActive', '0');
            this.eventService.emitThemeTogEvent();
        }
        this.themeDropdwnToggler = false;
    }
    themeLightCaller() {
        if (this.themeLightActive == false) {
            this.themeLightActive = true;
            this.themeDarkActive = false;
            localStorage.setItem('themeLightActive', '1');
            this.eventService.emitThemeTogEvent();
        }
        this.themeDropdwnToggler = false;
    }
    themeDropDownCaller() {
        // this.themeDropdwnToggler = !this.themeDropdwnToggler;
        if (this.themeLightActive) {
            this.themeDarkCaller();
        }
        else if (this.themeDarkActive) {
            this.themeLightCaller();
        }
    }
    closeThemeDropdown() {
        this.themeDropdwnToggler = false;
    }
    toggleTools() {
        this.showToolDropdown = !this.showToolDropdown;
    }
    closeTools() {
        this.showToolDropdown = false;
    }
    getCorrectRoute() {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 4, consts: [[1, "bodyWrapper", 3, "ngClass"], [1, "tools"], [1, "customdropDownHolder", 3, "clickOutside"], ["href", "javascript:;", 1, "btnBlueTools", 3, "click"], [1, "textWithIcon"], [1, "fa", "fa-caret-down"], ["class", "dropDownBox", 4, "ngIf"], [1, "themingWrap"], ["href", "javascript:;", 1, "SelectedthemeName", 3, "click"], [4, "ngIf"], [1, "dropDownBox"], ["href", "javascript:;", "routerLink", "/dashboard/news", 1, "toolItem", 3, "click"], ["src", "assets/news.svg", "alt", "settings"], [1, "ml-2"], ["href", "javascript:;", "routerLink", "/dashboard/settings", 1, "toolItem", 3, "click"], ["src", "assets/settings_icon_white.svg", "alt", "settings"], ["href", "javascript:;", "routerLink", "/dashboard/raida_status", 1, "toolItem", 3, "click"], ["src", "assets/raida_status1.png", "alt", "settings"], ["href", "javascript:;", "routerLink", "/dashboard/help", 1, "toolItem", 3, "click"], ["src", "assets/support_icon_white.svg", "alt", "settings"], ["src", "assets/lightmode_new.svg", "alt", ""], ["src", "assets/darkmode_new.svg", "alt", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AppComponent_Template_div_clickOutside_2_listener() { return ctx.closeTools(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_3_listener() { return ctx.toggleTools(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 17, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener() { return ctx.themeDropDownCaller(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_ng_container_10_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_ng_container_11_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themeTogChanger ? "themedark" : "themeLight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToolDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.themeLightActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.themeDarkActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var ng_file_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-file-drag-drop */ "Gmmh");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _dashboard_raida_status_raida_status_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/raida-status/raida-status.module */ "y2C+");


















function playerFactory() {
    return __webpack_require__.e(/*! import() | lottie-web */ "lottie-web").then(__webpack_require__.t.bind(null, /*! lottie-web */ "lPHp", 7));
}
// import { WebView } from 'tns-core-modules';
class AppModule {
    constructor(library) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSync"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCloudDownloadAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCreditCard"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationCircle"]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconLibrary"])); }, providers: [
        _services_api_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
        [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], multi: true }],
        [{ provide: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_TIMEOUT"], useValue: 200000 }]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"].forRoot({ player: playerFactory, useCache: true }),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            ng_file_drag_drop__WEBPACK_IMPORTED_MODULE_11__["NgFileDragDropModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"],
            _dashboard_raida_status_raida_status_module__WEBPACK_IMPORTED_MODULE_13__["Raida_StatusModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_10__["ClickOutsideModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        ng_file_drag_drop__WEBPACK_IMPORTED_MODULE_11__["NgFileDragDropModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"],
        _dashboard_raida_status_raida_status_module__WEBPACK_IMPORTED_MODULE_13__["Raida_StatusModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_10__["ClickOutsideModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"].forRoot({ player: playerFactory, useCache: true }),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                    ng_file_drag_drop__WEBPACK_IMPORTED_MODULE_11__["NgFileDragDropModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"],
                    _dashboard_raida_status_raida_status_module__WEBPACK_IMPORTED_MODULE_13__["Raida_StatusModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_10__["ClickOutsideModule"]
                ],
                providers: [
                    _services_api_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
                    [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], multi: true }],
                    [{ provide: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_TIMEOUT"], useValue: 200000 }]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "fTLw":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class EventService {
    constructor() {
        this.themeTogglerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //share localwallet data
        this.editLocal = [];
        this.localData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.editLocal);
        this.changeLocal = this.localData.asObservable();
        //share skyvault data
        this.editSky = [];
        this.skyData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.editSky);
        this.changeSky = this.skyData.asObservable();
        this.editNft = [];
        this.nftData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.editNft);
        this.changeNft = this.nftData.asObservable();
        //share skyvault history
        this.historySky = [];
        this.skyHistory = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.historySky);
        this.skyHistorydata = this.skyHistory.asObservable();
        // localstorage value detection 
        this.storageSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    changeLocaldata(message) {
        this.localData.next(message);
    }
    changeskydata(message) {
        this.skyData.next(message);
    }
    changenftdata(message) {
        this.nftData.next(message);
    }
    changeskyhistory(message) {
        this.skyHistory.next(message);
    }
    watchStorage() {
        return this.storageSub.asObservable();
    }
    setItem(key, data, type) {
        localStorage.setItem(key, data);
        this.storageSub.next(type);
    }
    getThemeTogEvent() {
        return this.themeTogglerEvent;
    }
    emitThemeTogEvent(data = '') {
        this.themeTogglerEvent.emit(data);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uVul":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/raida-status/raida-status-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RaidaStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaidaStatusRoutingModule", function() { return RaidaStatusRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _raida_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raida-status.component */ "+ZLb");





const routes = [
    {
        path: '',
        component: _raida_status_component__WEBPACK_IMPORTED_MODULE_2__["RaidaStatusComponent"]
    }
];
class RaidaStatusRoutingModule {
}
RaidaStatusRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RaidaStatusRoutingModule });
RaidaStatusRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RaidaStatusRoutingModule_Factory(t) { return new (t || RaidaStatusRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RaidaStatusRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RaidaStatusRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule)
    }, {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule)
    },
    // {
    //   path: 'login-chose',
    //   loadChildren: () => import('./choselogin/choselogin.module').then(m => m.ChoseloginModule)
    // },
    {
        path: 'login-image',
        loadChildren: () => Promise.all(/*! import() | imagelogin-imagelogin-module */[__webpack_require__.e("common"), __webpack_require__.e("imagelogin-imagelogin-module")]).then(__webpack_require__.bind(null, /*! ./imagelogin/imagelogin.module */ "ULTX")).then(m => m.ImageloginModule)
    },
    // {
    //   path: 'login-card',
    //   loadChildren: () => import('./cardlogin/cardlogin.module').then(m => m.CardloginModule)
    // },
    // {
    //   path: 'deposit',
    //   loadChildren: () => import('./deposit/deposit.module').then(m => m.DepositModule)
    // },
    // {
    //   path: 'wallet-details',
    //   loadChildren: () => import('./wallet-details/wallet-details.module').then(m => m.WalletDetailsModule)
    // },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardModule)
    },
    {
        path: ' ',
        loadChildren: () => __webpack_require__.e(/*! import() | payment-payment-module */ "payment-payment-module").then(__webpack_require__.bind(null, /*! ./payment/payment.module */ "NSaA")).then(m => m.PaymentModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "y2C+":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/raida-status/raida-status.module.ts ***!
  \***************************************************************/
/*! exports provided: Raida_StatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Raida_StatusModule", function() { return Raida_StatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _raida_status_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raida-status-routing.module */ "uVul");
/* harmony import */ var _raida_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raida-status.component */ "+ZLb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lottie */ "NiZn");









class Raida_StatusModule {
}
Raida_StatusModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Raida_StatusModule });
Raida_StatusModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Raida_StatusModule_Factory(t) { return new (t || Raida_StatusModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _raida_status_routing_module__WEBPACK_IMPORTED_MODULE_2__["RaidaStatusRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Raida_StatusModule, { declarations: [_raida_status_component__WEBPACK_IMPORTED_MODULE_3__["RaidaStatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _raida_status_routing_module__WEBPACK_IMPORTED_MODULE_2__["RaidaStatusRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Raida_StatusModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_raida_status_component__WEBPACK_IMPORTED_MODULE_3__["RaidaStatusComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _raida_status_routing_module__WEBPACK_IMPORTED_MODULE_2__["RaidaStatusRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map