(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advanced-setup-advanced-setup-module"],{

/***/ "6N0W":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/create-skywallet/advanced-setup/advanced-setup.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdvancedSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSetupComponent", function() { return AdvancedSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ "NiZn");











const _c0 = function (a0) { return { "btnDisable": a0 }; };
function AdvancedSetupComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvancedSetupComponent_div_34_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.isDownload ? "" : ctx_r6.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Generate New Pass Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvancedSetupComponent_div_34_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return _r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "IMPORT MY OWN Pass Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdvancedSetupComponent_div_34_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onFileInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.isDownload));
} }
function AdvancedSetupComponent_div_35_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 38);
} }
function AdvancedSetupComponent_div_35_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 39);
} }
const _c1 = function (a0) { return { "width": a0 }; };
function AdvancedSetupComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Downloading Pass Key... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdvancedSetupComponent_div_35_img_5_Template, 1, 0, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdvancedSetupComponent_div_35_img_6_Template, 1, 0, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, (ctx_r1.payload == null ? null : ctx_r1.payload.progress) != 100 ? "40%" : "99%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.payload == null ? null : ctx_r1.payload.progress) != 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.payload == null ? null : ctx_r1.payload.progress) == 100);
} }
function AdvancedSetupComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errorMsg);
} }
function AdvancedSetupComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.successMsg);
} }
function AdvancedSetupComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function AdvancedSetupComponent_div_46_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Creating SkyVault...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r4.options);
} }
const _c2 = function (a0) { return { btnDisable: a0 }; };
class AdvancedSetupComponent {
    constructor(eventService, router, raida, storage, fb) {
        this.eventService = eventService;
        this.router = router;
        this.raida = raida;
        this.storage = storage;
        this.fb = fb;
        this.showDownload = false;
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json',
        };
        this.successInfo = false;
        this.successMsg = '';
        this.errorInfo = false;
        this.errorMsg = '';
        this.payload = null;
        this.taskId = null;
        this.showError = false;
        this.fileName = '';
        this.isDownload = false;
        this.continue = false;
        this.emailForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
        });
        this.user = localStorage.getItem('userSky');
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
    }
    ngOnInit() {
        this.eventService.changeSky.subscribe(message => {
            this.allSky = message;
        });
    }
    save() {
        localStorage.setItem('emailSky', this.emailForm.controls.email.value);
        localStorage.setItem('setupType', "advance");
    }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    showLoading(state) {
        if (state) {
            this.showLoader = true;
        }
        else {
            this.showLoader = false;
        }
    }
    isValidInput(value) {
        return this.emailForm.controls[value].invalid &&
            (this.emailForm.controls[value].dirty || this.emailForm.controls[value].touched);
    }
    themeDarkCaller() {
        if (this.themeDarkActive == false) {
            this.themeDarkActive = true;
            this.themeLightActive = false;
            localStorage.setItem('themeLightActive', '0');
            this.eventService.emitThemeTogEvent();
        }
    }
    themeLightCaller() {
        if (this.themeLightActive == false) {
            this.themeLightActive = true;
            this.themeDarkActive = false;
            localStorage.setItem('themeLightActive', '1');
            this.eventService.emitThemeTogEvent();
        }
    }
    // continue() {
    //   this.advanceRecovery = true;
    // };
    // closeAdvanceRecovery() {
    //   this.advanceRecovery = false;
    // }
    getStatus(e) {
        this.isSelect = e.target.checked;
        if (this.isSelect == false) {
            this.emailForm.controls['email'].disable();
            this.emailForm.controls['email'].patchValue('');
        }
        else {
            this.emailForm.controls['email'].enable();
        }
    }
    onFileInput(event) {
        // const file: File = event.target.files[0];
        // if (file) {
        //   this.fileName = file.name;
        //   const formData = new FormData();
        //   formData.append("thumbnail", file);
        //   let fileReader = new FileReader();
        //   fileReader.onload = (e) => {
        //     this.isDownload = true;
        //     this.detectWallet(fileReader.result);
        //   }
        //   fileReader.readAsText(file);
        // }
        this.errorInfo = false;
        this.isDownload = true;
        this.successInfo = false;
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result);
                this.unpack(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    unpack(val) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var log = val.split(',')[1];
                var data = { data: log };
                let response = yield this.raida.readbin(data);
                if (response.status === "success") {
                    this.idata = {
                        sn: response.payload[0].sn,
                        ans: response.payload[0].ans
                    };
                    this.detectWallet(this.idata, "1");
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: "Failed to unpack coin.",
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    detectWallet(File, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isDownload = true;
            try {
                File.coin_type = Number(type);
                var data = {
                    coins: [
                        File
                    ]
                };
                let detection = yield this.raida.detect(data);
                console.log(detection, "response");
                if (detection.status == 'success') {
                    this.successInfo = true;
                    this.errorInfo = false;
                    let taskId = detection.payload;
                    // console.log("sn value:" + this.payload.data['Sn'])
                    // console.log("ans value:" + this.payload.data['Ans'])
                    this.doCheckcoin(taskId.id, (data) => { });
                }
                else {
                    this.showDownload = false;
                    this.isDownload = false;
                    this.errorInfo = true;
                    this.successInfo = false;
                    this.errorMsg = detection.payload.message;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck1(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            //console.log(taskID)
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.getSky();
                        this.showLoading(false);
                        var newArr;
                        newArr = this.allSky;
                        newArr.push({
                            'balance': 0,
                            'contents': [],
                            'denominations': { 1: 0, 5: 0, 25: 0, 100: 0, 250: 0 },
                            'idcoin': {},
                            'name': this.user,
                            'png': "",
                            'statements': null
                        });
                        this.eventService.changeskydata(newArr);
                        this.storage.setItem("wallet", "skywallet", 'createsky');
                        this.showLoading(false);
                        this.successInfo = true;
                        this.errorInfo = false;
                        //console.log("payload.data:" + task.payload.data)
                        // var findsky = task.payload.data.filter(x => {
                        //   return x.name == this.user;
                        // })
                        // console.log("findsky[0].idcoin?.sn" + findsky[0].idcoin?.sn)
                        //localStorage.setItem('serial', findsky[0].idcoin?.sn);
                        this.router.navigate(['/skywallet/completed']);
                    }
                    else {
                        this.showLoading(false);
                        this.showDownload = false;
                        this.errorInfo = false;
                        this.successInfo = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            var _a;
                            if (result.value) {
                                {
                                    if (((_a = this.payload.data) === null || _a === void 0 ? void 0 : _a.message) === "This name already has DNS name") {
                                        this.router.navigate(["/skywallet/create-address"]);
                                    }
                                }
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
            }
        });
    }
    getSky() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.raida.getAllSky();
                if (response.status == "success") {
                    this.doCheck123((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck123(taskID, xdata) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.eventService.changeskydata((_a = task === null || task === void 0 ? void 0 : task.payload) === null || _a === void 0 ? void 0 : _a.data);
                        localStorage.setItem('userSky', this.user);
                        var findsky = task.payload.data.filter(x => {
                            return x.name == this.user;
                        });
                        console.log("findsky[0].idcoin?.sn" + ((_b = findsky[0].idcoin) === null || _b === void 0 ? void 0 : _b.sn));
                        localStorage.setItem('serial', (_c = findsky[0].idcoin) === null || _c === void 0 ? void 0 : _c.sn);
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck123(taskID, xdata);
                }, 500);
            }
        });
    }
    doCheck(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.idata = {
                            sn: this.payload.data['Sn'],
                            ans: this.payload.data['Ans']
                        };
                        // console.log("sn value:" + this.payload.data['Sn'])
                        // console.log("ans value:" + this.payload.data['Ans'])
                        this.detectWallet(this.idata, "0");
                        // this.createSky(data);
                        // this.createSky(this.cloudcoin?.coins[0]);
                        this.successInfo = true;
                        this.errorInfo = false;
                        this.successMsg = "Done: Pass Key downloaded successfully!";
                    }
                    else {
                        this.showDownload = false;
                        this.errorInfo = true;
                        this.successInfo = false;
                        this.errorMsg = this.payload.data.message;
                    }
                    return;
                }
                // this.successInfo = true;
                // this.successMsg = "Doing.... Task ID " + taskID + ", Progress " + this.payload.progress + "%";
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
    doCheckcoin(taskID, xdata) {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.raida.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.counterfeit) === 0 && ((_d = (_c = this.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.fracked) === 0 && ((_f = (_e = this.payload) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.limbo) === 0) {
                            this.successInfo = true;
                            this.errorInfo = false;
                            this.continue = true;
                            this.successMsg = "Done: Detected Pass Key is healthy!";
                        }
                        else {
                            this.successInfo = false;
                            this.isDownload = false;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                                title: "Pass Key is not authentic. Please upload or generate another keykard",
                                icon: 'error',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    this.showDownload = false;
                                }
                            });
                        }
                    }
                    else {
                        this.showDownload = false;
                        this.isDownload = false;
                        this.errorInfo = true;
                        this.successInfo = false;
                        this.errorMsg = this.payload.data.message;
                    }
                    return;
                }
                // this.successInfo = true;
                // this.successMsg = "Doing.... Task ID " + taskID + ", Progress " + this.payload.progress + "%";
                setTimeout(() => {
                    this.doCheckcoin(taskID, xdata);
                }, 500);
            }
            else {
                this.isDownload = false;
                this.errorInfo = true;
                this.successInfo = false;
                this.errorMsg = "Call Failed";
            }
        });
    }
    download() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.raida.freeCoin();
                if (response.status == 'success') {
                    this.showDownload = true;
                    this.doCheck((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                        this.successInfo = true;
                        this.successMsg = "Done " + JSON.stringify(data);
                    });
                }
                console.log(response);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    createSky() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let idata = {
                    name: this.user,
                    type: "card",
                    coin: this.idata
                };
                let wallet = yield this.raida.createSky(idata);
                console.log(wallet, "response");
                // console.log("name:" + this.user)
                // console.log("coin:" + JSON.stringify(idata.coin))
                // console.log("coin:" + JSON.stringify(this.idata))
                if (wallet.status == 'success') {
                    this.showLoading(true);
                    this.successInfo = true;
                    this.errorInfo = false;
                    this.doCheck1((_a = wallet.payload) === null || _a === void 0 ? void 0 : _a.id, (idata) => {
                        this.successInfo = true;
                        this.successMsg = "Done " + JSON.stringify(idata);
                    });
                }
                else {
                    this.errorInfo = true;
                    this.successInfo = false;
                    this.errorMsg = "Error!! " + wallet.payload.message;
                }
            }
            catch (e) {
                this.errorInfo = true;
                this.successInfo = false;
                this.errorMsg = "Create Wallet Failed";
            }
        });
    }
}
AdvancedSetupComponent.ɵfac = function AdvancedSetupComponent_Factory(t) { return new (t || AdvancedSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AdvancedSetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdvancedSetupComponent, selectors: [["app-advanced-setup"]], decls: 47, vars: 8, consts: [[1, "authWrapper", "authWrapperAdvncSetp"], ["href", "javascript:;", "routerLink", "/skywallet/create-address", 1, "backlinkBtn"], ["src", "assets/back_arrow.svg", "alt", ""], [1, "bodyInnerWrapper"], [1, "stepperHolder"], [1, "stepperWrap"], [1, "step", "stepActive"], [1, "circleWrap"], [1, "circle"], [1, "steptextWrap"], [1, "amount"], [1, "step"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "titleOne"], [1, "titleTwo", 2, "opacity", "0.8"], [1, "skyAddressFieldWrap"], ["class", "uploadBtnWrap", 4, "ngIf"], ["class", "downloadingCCWrap", 4, "ngIf"], ["class", "errorMsg", 4, "ngIf"], ["class", "successMsg", 4, "ngIf"], [1, "col-md-4"], ["src", "assets/advnc-setup-img-black-white.png", "alt", "rocket image", 1, "stepperMainImg"], [1, "bottomPartSubmit"], [1, "bottomFooter"], ["href", "javascript:;", 1, "btnCustomBlue", "btnLarge", 3, "ngClass", "click"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "uploadBtnWrap"], ["type", "button", 1, "uploadLaterLink", 3, "click"], ["type", "file", "accept", ".png, .id, .bin", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "downloadingCCWrap"], [1, "downloadBar", 3, "ngStyle"], [1, "downloadText"], ["src", "assets/download_cloucoin.svg", "alt", ""], ["src", "assets/cross.svg", "alt", "", "class", "dwnloadStatIcon", 4, "ngIf"], ["src", "assets/tick_green.svg", "alt", "", "class", "dwnloadStatIcon", 4, "ngIf"], ["src", "assets/cross.svg", "alt", "", 1, "dwnloadStatIcon"], ["src", "assets/tick_green.svg", "alt", "", 1, "dwnloadStatIcon"], [1, "errorMsg"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], [1, "successMsg"], ["src", "assets/info_green.svg", "alt", "error icon"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function AdvancedSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Address setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Pass Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Virtual Pass Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "You will need a Pass Key to access your SkyVault. You can create a new Pass Key or add one that you have previously created. The Pass Key is a PNG file that contains 25 verification keys. You will need to keep this file safe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AdvancedSetupComponent_div_34_Template, 8, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AdvancedSetupComponent_div_35_Template, 7, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AdvancedSetupComponent_span_37_Template, 3, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AdvancedSetupComponent_span_38_Template, 3, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvancedSetupComponent_Template_a_click_44_listener() { return ctx.continue ? ctx.createSky() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AdvancedSetupComponent_div_46_Template, 6, 1, "div", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showDownload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDownload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx.continue === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieComponent"]], styles: [".authWrapperAdvncSetp[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media screen and (max-width: 576px) {\n  .authWrapperAdvncSetp[_ngcontent-%COMP%] {\n    background: #007a84;\n    padding-top: 80px;\n  }\n}\n.authWrapperAdvncSetp[_ngcontent-%COMP%]   .authHolder[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 20px;\n  width: 1000px;\n  max-width: 90%;\n  display: flex;\n  min-height: 80vh;\n}\n.skyAddressFieldWrap[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.formField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 250px;\n  background-color: transparent !important;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n}\n.formField[_ngcontent-%COMP%]   .domainName[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  font-size: 15px;\n  color: #fff !important;\n  line-height: 15px;\n  margin-left: 5px;\n}\n.uploadBtnWrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.uploadBtnWrap[_ngcontent-%COMP%]   .uploadLaterLink[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin-left: 10px;\n  opacity: 0.8;\n  transition: all 0.2s;\n}\n.uploadBtnWrap[_ngcontent-%COMP%]   .uploadLaterLink[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.downloadingCCWrap[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background-color: #2C2C2C;\n  border-radius: 4px;\n  margin: 15px 0 15px;\n  position: relative;\n}\n.downloadingCCWrap[_ngcontent-%COMP%]   .dwnloadStatIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: calc(50% - 6px);\n  z-index: 3;\n  cursor: pointer;\n  height: 12px;\n}\n.downloadingCCWrap[_ngcontent-%COMP%]   .downloadBar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  bottom: 5px;\n  background-color: #181818;\n  border-radius: 3px;\n  z-index: 1;\n}\n.downloadingCCWrap[_ngcontent-%COMP%]   .downloadText[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  color: #fff;\n  position: relative;\n  z-index: 2;\n}\n.downloadingCCWrap[_ngcontent-%COMP%]   .downloadText[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWR2YW5jZWQtc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtBQUFKO0FBQ0k7RUFISjtJQUlRLG1CQUFBO0lBQ0EsaUJBQUE7RUFFTjtBQUNGO0FBREk7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQUtBO0VBQ0ksZ0JBQUE7QUFGSjtBQU1JO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUVBLDJDQUFBO0FBSlI7QUFNSTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFLSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFIUjtBQUlRO0VBQ0ksVUFBQTtBQUZaO0FBTUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGUjtBQUlJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGUjtBQUdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRFoiLCJmaWxlIjoiYWR2YW5jZWQtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aFdyYXBwZXJBZHZuY1NldHAge1xyXG4gICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwN2E4NCAwJSwgIzAwN2E4NCA2NSUsICNGRkYgNjUlLCAjRkZGIDEwMCUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA3YTg0O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmF1dGhIb2xkZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiKDAgMCAwIC8gMTAlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYlKTtcclxuICAgIH1cclxufVxyXG4vLyAuYmFja2xpbmtCdG5BZHZuY1NldCB7XHJcbi8vICAgICBjb2xvcjogIzAwN2E4NDtcclxuLy8gfVxyXG5cclxuLnNreUFkZHJlc3NGaWVsZFdyYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvcm1GaWVsZCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE4LCAxMjIsIDI0NCwgMC40OCk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgIH1cclxuICAgIC5kb21haW5OYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnVwbG9hZEJ0bldyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLnVwbG9hZExhdGVyTGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmRvd25sb2FkaW5nQ0NXcmFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzJDMkM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW46IDE1cHggMCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmR3bmxvYWRTdGF0SWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSA2cHgpO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgIH1cclxuICAgIC5kb3dubG9hZEJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmRvd25sb2FkVGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdvancedSetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-advanced-setup',
                templateUrl: './advanced-setup.component.html',
                styleUrls: ['./advanced-setup.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "FdIi":
/*!***************************************************************************************!*\
  !*** ./src/app/auth/create-skywallet/advanced-setup/advanced-setup-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AdvancedSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSetupRoutingModule", function() { return AdvancedSetupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _advanced_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-setup.component */ "6N0W");





const routes = [
    {
        path: '',
        component: _advanced_setup_component__WEBPACK_IMPORTED_MODULE_2__["AdvancedSetupComponent"]
    }
];
class AdvancedSetupRoutingModule {
}
AdvancedSetupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvancedSetupRoutingModule });
AdvancedSetupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvancedSetupRoutingModule_Factory(t) { return new (t || AdvancedSetupRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvancedSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvancedSetupRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "JHYt":
/*!*******************************************************************************!*\
  !*** ./src/app/auth/create-skywallet/advanced-setup/advanced-setup.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdvancedSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSetupModule", function() { return AdvancedSetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _advanced_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-setup-routing.module */ "FdIi");
/* harmony import */ var _advanced_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-setup.component */ "6N0W");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ "NiZn");







class AdvancedSetupModule {
}
AdvancedSetupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvancedSetupModule });
AdvancedSetupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvancedSetupModule_Factory(t) { return new (t || AdvancedSetupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _advanced_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvancedSetupRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvancedSetupModule, { declarations: [_advanced_setup_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedSetupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _advanced_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvancedSetupRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvancedSetupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_advanced_setup_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedSetupComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _advanced_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvancedSetupRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=advanced-setup-advanced-setup-module.js.map