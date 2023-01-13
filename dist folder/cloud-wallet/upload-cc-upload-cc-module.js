(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-cc-upload-cc-module"],{

/***/ "P1SM":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/create-localwallet-dash/upload-cc/upload-cc.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UploadCcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCcModule", function() { return UploadCcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _upload_cc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-cc.component */ "TZqK");
/* harmony import */ var _upload_cc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-cc-routing.module */ "PtAm");





class UploadCcModule {
}
UploadCcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UploadCcModule });
UploadCcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UploadCcModule_Factory(t) { return new (t || UploadCcModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _upload_cc_routing_module__WEBPACK_IMPORTED_MODULE_3__["UploadCcRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UploadCcModule, { declarations: [_upload_cc_component__WEBPACK_IMPORTED_MODULE_2__["UploadCcComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _upload_cc_routing_module__WEBPACK_IMPORTED_MODULE_3__["UploadCcRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadCcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_upload_cc_component__WEBPACK_IMPORTED_MODULE_2__["UploadCcComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _upload_cc_routing_module__WEBPACK_IMPORTED_MODULE_3__["UploadCcRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PtAm":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/create-localwallet-dash/upload-cc/upload-cc-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: UploadCcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCcRoutingModule", function() { return UploadCcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _upload_cc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-cc.component */ "TZqK");





const routes = [
    {
        path: '',
        component: _upload_cc_component__WEBPACK_IMPORTED_MODULE_2__["UploadCcComponent"]
    }
];
class UploadCcRoutingModule {
}
UploadCcRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UploadCcRoutingModule });
UploadCcRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UploadCcRoutingModule_Factory(t) { return new (t || UploadCcRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UploadCcRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadCcRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TZqK":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/create-localwallet-dash/upload-cc/upload-cc.component.ts ***!
  \************************************************************************************/
/*! exports provided: UploadCcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCcComponent", function() { return UploadCcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function UploadCcComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
} }
function UploadCcComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.successMsg, "");
} }
const _c0 = function (a0) { return { "btnDisable": a0 }; };
class UploadCcComponent {
    constructor(raida, router) {
        this.raida = raida;
        this.router = router;
        this.detect = false;
        this.successInfo = false;
        this.successMsg = '';
        this.errorInfo = false;
        this.errorMsg = '';
        this.raidaCheck = false;
        this.payload = null;
        this.taskId = null;
        this.showError = false;
        this.fileName = '';
        this.btn = false;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        localStorage.setItem('wallet', "localwallet");
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Localwallet created successfully.",
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                {
                                    let currentUrl = this.router.url;
                                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                                    this.router.onSameUrlNavigation = 'reload';
                                    this.router.navigate([currentUrl]);
                                }
                            }
                        });
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
                    if (this.payload.data.limbo != 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Contact was lost with the RAIDA during your request due to loss of internet connectivity. It is unknown if the coin passwords have been changed. This can be fixed once a solid internet connection is restored.',
                            icon: 'warning',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                {
                                    let currentUrl = this.router.url;
                                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                                    this.router.onSameUrlNavigation = 'reload';
                                    this.router.navigate([currentUrl]);
                                    this.router.navigate(["/dashboard/home"]);
                                }
                            }
                        });
                    }
                    else if (this.payload.data.counterfeit != 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.counterfeit + ' Counterfeit CC found!',
                            icon: 'info',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                {
                                    let currentUrl = this.router.url;
                                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                                    this.router.onSameUrlNavigation = 'reload';
                                    this.router.navigate([currentUrl]);
                                    this.router.navigate(["/dashboard/home"]);
                                }
                            }
                        });
                    }
                    else if (this.payload.data.fracked != 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.fracked + ' Fracked CC found!',
                            icon: 'info',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                {
                                    let currentUrl = this.router.url;
                                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                                    this.router.onSameUrlNavigation = 'reload';
                                    this.router.navigate([currentUrl]);
                                    this.router.navigate(["/dashboard/home"]);
                                }
                            }
                        });
                    }
                    let data = this.payload.data;
                    this.successInfo = true;
                    this.successMsg = "Done: " + this.payload.message;
                    let h = "";
                    this.raidaCheck = true;
                    this.serversList = h;
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
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.file[0]?.name);
            var file = this.baseAdd.split(',')[1];
            try {
                var data = {
                    name: this.userLocal,
                    items: [{
                            type: 'inline',
                            data: file
                        }]
                };
                let response = yield this.raida.import(data);
                this.doCheck((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    this.successInfo = true;
                    this.successMsg = "Done " + JSON.stringify(data);
                });
            }
            catch (e) {
            }
        });
    }
    skip() {
        localStorage.setItem('wallet', "localwallet");
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Localwallet created successfully.",
            icon: 'success',
            confirmButtonText: 'Okay',
        }).then((result) => {
            if (result.value) {
                {
                    let currentUrl = this.router.url;
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.onSameUrlNavigation = 'reload';
                    this.router.navigate([currentUrl]);
                    this.router.navigate(["/dashboard/home"]);
                }
            }
        });
    }
}
UploadCcComponent.ɵfac = function UploadCcComponent_Factory(t) { return new (t || UploadCcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UploadCcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadCcComponent, selectors: [["app-upload-cc"]], decls: 45, vars: 6, consts: [[1, "gap10"], [1, "gap20"], [1, "transWrapper"], [1, "headerbackWrap", "border-0"], ["href", "javascript:;", "routerLink", "/dashboard/create-localwallet-dash", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], [1, "transBody"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "titleOne"], [1, "titleTwo", 2, "opacity", "0.8"], [1, "skyAddressFieldWrap"], [1, "formField"], ["for", "username"], [1, "uploadFileWrap"], [1, "uploadIconWrap"], ["type", "file", "accept", ".png, .id, .bin", 3, "change"], ["src", "assets/folder_icon.svg", "alt", "", 1, "folderIcon"], ["class", "errorMsg", 4, "ngIf"], ["class", "successMsg", 4, "ngIf"], [1, "uploadBtnWrap"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "ngClass", "click"], ["href", "javascript:;", 1, "btnCustomBlue", "ml-2", 3, "click"], [1, "col-md-4"], ["src", "assets/localwallet-upload-cc-black-white.png", "alt", "rocket image", 1, "stepperMainImg"], [1, "transBottomFooter"], [1, "bottomPartSubmit", 2, "border-top", "2px solid rgba(255, 255, 255, 0.26)", "padding-top", "20px", "padding-bottom", "10px"], [1, "infoText"], ["src", "assets/info_circle.svg", "alt", ""], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], [1, "successMsg"], ["src", "assets/info_green.svg", "alt", "error icon"]], template: function UploadCcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Deposit CC to Your Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "CloudCoins are files with verification keys inside. You can import files with the following extension: png, stack, cc and zip.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Deposit CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadCcComponent_Template_input_change_23_listener($event) { return ctx.getUploadedFiles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UploadCcComponent_span_26_Template, 3, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UploadCcComponent_span_27_Template, 3, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadCcComponent_Template_a_click_30_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Deposit to my Wallet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadCcComponent_Template_a_click_32_listener() { return ctx.skip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "I'll deposit later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "You can learn where to get CC by going to https://CloudCoin.global. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Receive files that contain CC from your friends/colleagues and upload them here or later inside the application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fileName || "Choose coins to deposit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.btn == true));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 250px;\n  background-color: transparent !important;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n}\n\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff !important;\n  line-height: 15px;\n  margin-left: 5px;\n}\n\n.uploadBtnWrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.uploadBtnWrap[_ngcontent-%COMP%]   .uploadLaterLink[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-left: 10px;\n  opacity: 0.8;\n  transition: all 0.2s;\n}\n\n.uploadBtnWrap[_ngcontent-%COMP%]   .uploadLaterLink[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBsb2FkLWNjLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQ0FBQTtBQURSOztBQUdJO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBRUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQVI7O0FBQ1E7RUFDSSxVQUFBO0FBQ1oiLCJmaWxlIjoidXBsb2FkLWNjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNreUFkZHJlc3NGaWVsZFdyYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvcm1GaWVsZCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE4LCAxMjIsIDI0NCwgMC40OCk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgIH1cclxuICAgIC5kb21haW5OYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnVwbG9hZEJ0bldyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLnVwbG9hZExhdGVyTGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadCcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-upload-cc',
                templateUrl: './upload-cc.component.html',
                styleUrls: ['./upload-cc.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=upload-cc-upload-cc-module.js.map