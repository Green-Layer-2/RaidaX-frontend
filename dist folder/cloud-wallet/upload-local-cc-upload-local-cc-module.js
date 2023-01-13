(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-local-cc-upload-local-cc-module"],{

/***/ "2S88":
/*!**************************************************************************************!*\
  !*** ./src/app/auth/create-localwallet/upload-local-cc/upload-local-cc.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UploadLocalCcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadLocalCcComponent", function() { return UploadLocalCcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function UploadLocalCcComponent_div_26_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errorMsg);
} }
function UploadLocalCcComponent_div_26_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.successMsg, "");
} }
const _c0 = function (a0) { return { "btnDisable": a0 }; };
function UploadLocalCcComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Deposit CloudCoins to your Wallet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "CloudCoins are files with verification keys in them. You can import files with the following extensions: png, stack, cc and zip.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Deposit CloudCoins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadLocalCcComponent_div_26_Template_input_change_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.getUploadedFiles($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UploadLocalCcComponent_div_26_span_16_Template, 3, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UploadLocalCcComponent_div_26_span_17_Template, 3, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadLocalCcComponent_div_26_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Deposit To My Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "I'll Deposit Later");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.fileName || "Choose CloudCoins to Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.errorInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.successInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.btn == true));
} }
function UploadLocalCcComponent_div_27_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Authentic Coins: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.payload == null ? null : ctx_r7.payload.data == null ? null : ctx_r7.payload.data.authentic);
} }
function UploadLocalCcComponent_div_27_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Counterfeit Coins: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.payload == null ? null : ctx_r8.payload.data == null ? null : ctx_r8.payload.data.counterfeit);
} }
function UploadLocalCcComponent_div_27_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fractured Coins: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.payload == null ? null : ctx_r9.payload.data == null ? null : ctx_r9.payload.data.fracked);
} }
function UploadLocalCcComponent_div_27_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Unprocessed Coins: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.payload == null ? null : ctx_r10.payload.data == null ? null : ctx_r10.payload.data.limbo);
} }
function UploadLocalCcComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Deposited to: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Active Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Coins Attempted: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UploadLocalCcComponent_div_27_div_11_Template, 5, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UploadLocalCcComponent_div_27_div_12_Template, 5, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UploadLocalCcComponent_div_27_div_13_Template, 5, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UploadLocalCcComponent_div_27_div_14_Template, 5, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.totalimport);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.payload == null ? null : ctx_r1.payload.data == null ? null : ctx_r1.payload.data.authentic) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.payload == null ? null : ctx_r1.payload.data == null ? null : ctx_r1.payload.data.counterfeit) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.payload == null ? null : ctx_r1.payload.data == null ? null : ctx_r1.payload.data.fracked) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.payload == null ? null : ctx_r1.payload.data == null ? null : ctx_r1.payload.data.limbo) !== 0);
} }
class UploadLocalCcComponent {
    constructor(raida, router) {
        this.raida = raida;
        this.router = router;
        this.successInfo = false;
        this.successMsg = '';
        this.errorInfo = false;
        this.errorMsg = '';
        this.payload = null;
        this.taskId = null;
        this.showError = false;
        this.fileName = '';
        this.btn = false;
        this.afterClick = false;
    }
    ngOnInit() {
        this.userLocal = localStorage.getItem('userLocal');
    }
    getUploadedFiles(files) {
        this.fileName = files.target.files[0].name;
        this.btn = false;
        this.successInfo = false;
        this.errorInfo = false;
        let reader = new FileReader();
        let file = files.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result);
            this.baseAdd = reader.result;
        };
    }
    //  async doCheck(taskID: any, xdata: any){
    //   let task:any = await this.raida.doCheck(taskID);
    //     console.log("Task done: ", task);
    //     if(task){
    //       this.payload = task.payload;
    //       if (this.payload.status == "error" || this.payload.status == "completed") {
    //         if(this.payload.status == "completed"){
    //           this.router.navigate(['/localwallet/localstep-completed'])
    //         }
    //         let data = this.payload.data;
    //         this.successMsg = "Done: " + data.message;
    //         let h = "";
    //         this.raidaCheck = true;
    //         this.serversList = h;
    //         this.errorInfo = false;
    //         return;
    //       }
    //       this.successMsg = "Doing.... Task ID " + taskID + ", Progress " + this.payload.progress + "%";
    //       setTimeout(() => {
    //         this.doCheck(taskID, xdata)
    //       },1000)
    //     }
    //     else{
    //       this.errorInfo = true;
    //       this.successInfo = false;
    //       this.errorMsg = "Call Failed";
    //     }
    // }
    // async detectWallet(File){
    //   this.raidaCheck = true;
    //     try{
    //       var cs = JSON.parse(File);
    //       if(cs.cloudcoin.length !== 0){
    //       }
    //     }
    //     catch(e) {
    //       this.detect = false;
    //       this.errorInfo = true;
    //       this.successInfo =false;
    //       this.errorMsg = "Failed to parse json";
    //    } 
    //    let idata = {
    //     coins: [
    //      { 'sn':parseInt('sn'),
    //       'ans': String
    //     }
    //   ]
    //  }
    //   for (let i = 0; i < cs?.cloudcoin?.length; i++) {
    //     let cc = cs.cloudcoin[i]
    //     idata.coins[i] =  {
    //     'sn': parseInt(cc.sn, 10),
    //     'ans': cc.an
    //   }
    // }
    //   let detection: any = await this.raida.detect(JSON.stringify(idata));
    //   console.log(detection, "response");
    //   if(detection.status == 'success'){
    //     this.raidaCheck = true;
    //     this.successInfo = true;
    //     this.errorInfo = false;
    //     let taskId = detection.payload
    //     this.successMsg = "Detect sent. Task ID " + taskId.id;
    //     this.doCheck(taskId.id, (data: any)=>{
    //       this.successInfo = true;
    //       this.successMsg  ="Done " + JSON.stringify(data)
    //     })
    //   }
    //   else{
    //     this.errorInfo = true;
    //     this.successInfo = false;
    //     this.errorMsg = "Failed " + detection.payload.message;
    //   }
    // }
    doCheck(taskID, xdata) {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.router.navigate(['/localwallet/localstep-completed']);
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.counterfeit) !== 0 || ((_d = (_c = this.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.limbo) !== 0 || ((_f = (_e = this.payload) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.fracked) !== 0) {
                            this.afterClick = true;
                        }
                    }
                    else {
                        this.btn = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'warning',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    // if(this.payload.data.limbo != 0){
                    //   Swal.fire({
                    //     title: 'Contact was lost with the RAIDA during your request due to loss of internet connectivity. It is unknown if the coin passwords have been changed. This can be fixed once a solid internet connection is restored.',
                    //     icon: 'warning',
                    //     confirmButtonText: 'Okay',
                    //   }).then((result) => {
                    //     if (result.value) {{}}
                    //   });
                    // }
                    // else if(this.payload.data.counterfeit != 0){
                    //   Swal.fire({
                    //     title: this.payload?.data?.counterfeit +' Counterfeit CC Encounter!',
                    //     icon: 'info',
                    //     confirmButtonText: 'Okay',
                    //   }).then((result) => {
                    //     if (result.value) {{}}
                    //   });
                    // }
                    // else if(this.payload.data.fracked != 0){
                    //   Swal.fire({
                    //     title: this.payload.data.fracked +' Fracked CC Encounter!',
                    //     icon: 'info',
                    //     confirmButtonText: 'Okay',
                    //   }).then((result) => {
                    //     if (result.value) {{}}
                    //   });
                    // }
                    let data = this.payload.data;
                    this.successInfo = true;
                    this.successMsg = "Done: " + data.message;
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
    next() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var file = (_a = this.baseAdd) === null || _a === void 0 ? void 0 : _a.split(',')[1];
            try {
                var data = {
                    name: this.userLocal,
                    items: [{
                            type: 'inline',
                            data: file
                        }]
                };
                let response = yield this.raida.import(data);
                console.log(response, "876rfvjkl,");
                this.doCheck((_b = response.payload) === null || _b === void 0 ? void 0 : _b.id, (data) => {
                    this.successInfo = true;
                    this.successMsg = "Done " + JSON.stringify(data);
                });
            }
            catch (e) {
            }
        });
    }
}
UploadLocalCcComponent.ɵfac = function UploadLocalCcComponent_Factory(t) { return new (t || UploadLocalCcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UploadLocalCcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadLocalCcComponent, selectors: [["app-upload-local-cc"]], decls: 38, vars: 2, consts: [[1, "authWrapper", "authWrapperDeposit"], ["href", "javascript:;", "routerLink", "/localwallet", 1, "backlinkBtn"], ["src", "assets/back_arrow.svg", "alt", ""], [1, "bodyInnerWrapper"], [1, "stepperHolder"], [1, "stepperWrap"], [1, "step", "stepActive"], [1, "circleWrap"], [1, "circle"], [1, "steptextWrap"], [1, "amount"], [1, "step"], [1, "container"], [1, "row"], ["class", "col-md-8", 4, "ngIf"], ["class", "col=md-8", 4, "ngIf"], [1, "col-md-4"], ["src", "assets/localwallet-upload-cc-black-white.png", "alt", "rocket image", 1, "stepperMainImg"], [1, "bottomPartSubmit", 2, "border-top", "2px solid rgba(255, 255, 255, 0.26)", "padding-top", "20px", "padding-bottom", "10px"], [1, "infoText"], ["src", "assets/info_circle.svg", "alt", ""], [1, "col-md-8"], [1, "titleOne"], [1, "titleTwo", 2, "opacity", "0.8"], [1, "skyAddressFieldWrap"], [1, "formField"], ["for", "username"], [1, "uploadFileWrap"], [1, "uploadIconWrap"], ["type", "file", "accept", ".png, .id, .bin", 3, "change"], ["src", "assets/folder_icon.svg", "alt", "", 1, "folderIcon"], ["class", "errorMsg", 4, "ngIf"], ["class", "successMsg", 4, "ngIf"], [1, "gap10"], [1, "uploadBtnWrap"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "ngClass", "click"], ["href", "javascript:;", "routerLink", "/localwallet/localstep-completed", 1, "btnCustomBlue", "ml-2"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], [1, "successMsg"], ["src", "assets/info_green.svg", "alt", "error icon"], [1, "col=md-8"], ["for", ""], [2, "opacity", "0.7"], ["class", "formField", 4, "ngIf"], ["href", "javascript:;", "routerLink", "/localwallet/localstep-completed", 1, "btnCustomBlue", "btnLarge"]], template: function UploadLocalCcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name Setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Deposit CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UploadLocalCcComponent_div_26_Template, 24, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UploadLocalCcComponent_div_27_Template, 18, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "You can learn where to get CC by going to https://CloudCoin.global. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Receive files that contain CC from your friends/colleagues and Deposit them here or later inside the application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.afterClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.afterClick);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 250px;\n  background-color: transparent !important;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n}\n\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff !important;\n  line-height: 15px;\n  margin-left: 5px;\n}\n\n.uploadBtnWrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.uploadBtnWrap[_ngcontent-%COMP%]   .uploadLaterLink[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-left: 10px;\n  opacity: 0.8;\n  transition: all 0.2s;\n}\n\n.uploadBtnWrap[_ngcontent-%COMP%]   .uploadLaterLink[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBsb2FkLWxvY2FsLWNjLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQ0FBQTtBQURSOztBQUdJO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBRUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQVI7O0FBQ1E7RUFDSSxVQUFBO0FBQ1oiLCJmaWxlIjoidXBsb2FkLWxvY2FsLWNjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNreUFkZHJlc3NGaWVsZFdyYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvcm1GaWVsZCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE4LCAxMjIsIDI0NCwgMC40OCk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgIH1cclxuICAgIC5kb21haW5OYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnVwbG9hZEJ0bldyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLnVwbG9hZExhdGVyTGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadLocalCcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-upload-local-cc',
                templateUrl: './upload-local-cc.component.html',
                styleUrls: ['./upload-local-cc.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "A0XL":
/*!*******************************************************************************************!*\
  !*** ./src/app/auth/create-localwallet/upload-local-cc/upload-local-cc-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: UploadLocalCcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadLocalCcRoutingModule", function() { return UploadLocalCcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _upload_local_cc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-local-cc.component */ "2S88");





const routes = [
    {
        path: '',
        component: _upload_local_cc_component__WEBPACK_IMPORTED_MODULE_2__["UploadLocalCcComponent"]
    }
];
class UploadLocalCcRoutingModule {
}
UploadLocalCcRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UploadLocalCcRoutingModule });
UploadLocalCcRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UploadLocalCcRoutingModule_Factory(t) { return new (t || UploadLocalCcRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UploadLocalCcRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadLocalCcRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zejw":
/*!***********************************************************************************!*\
  !*** ./src/app/auth/create-localwallet/upload-local-cc/upload-local-cc.module.ts ***!
  \***********************************************************************************/
/*! exports provided: UploadLocalCcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadLocalCcModule", function() { return UploadLocalCcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _upload_local_cc_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-local-cc-routing.module */ "A0XL");
/* harmony import */ var _upload_local_cc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-local-cc.component */ "2S88");





class UploadLocalCcModule {
}
UploadLocalCcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UploadLocalCcModule });
UploadLocalCcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UploadLocalCcModule_Factory(t) { return new (t || UploadLocalCcModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _upload_local_cc_routing_module__WEBPACK_IMPORTED_MODULE_2__["UploadLocalCcRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UploadLocalCcModule, { declarations: [_upload_local_cc_component__WEBPACK_IMPORTED_MODULE_3__["UploadLocalCcComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _upload_local_cc_routing_module__WEBPACK_IMPORTED_MODULE_2__["UploadLocalCcRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadLocalCcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_upload_local_cc_component__WEBPACK_IMPORTED_MODULE_3__["UploadLocalCcComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _upload_local_cc_routing_module__WEBPACK_IMPORTED_MODULE_2__["UploadLocalCcRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=upload-local-cc-upload-local-cc-module.js.map