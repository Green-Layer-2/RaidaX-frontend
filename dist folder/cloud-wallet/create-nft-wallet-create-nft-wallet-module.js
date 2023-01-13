(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-nft-wallet-create-nft-wallet-module"],{

/***/ "1swi":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/create-nft-wallet.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateNftWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNftWalletComponent", function() { return CreateNftWalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");










function CreateNftWalletComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "If you would like to publish your NFTs so that they can be verified as authentic, please go to \"Settings\" and configure your web server and your DNS domain.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateNftWalletComponent_div_32_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Title is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateNftWalletComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateNftWalletComponent_div_32_span_1_Template, 3, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Only numbers, letters and hyphens are permitted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nftForm.controls["title"].errors == null ? null : ctx_r1.nftForm.controls["title"].errors.required);
} }
function CreateNftWalletComponent_div_34_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please enter domain name in valid format. Max length is 61.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateNftWalletComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Verification Domain Name (optional): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function CreateNftWalletComponent_div_34_Template_input_keydown_enter_8_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CreateNftWalletComponent_div_34_div_9_Template, 4, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("dnsname"));
} }
function CreateNftWalletComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateNftWalletComponent_div_46_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const data_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.customSelector(data_r11.name, "local"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r11.name);
} }
function CreateNftWalletComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateNftWalletComponent_div_46_div_1_Template, 4, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.all);
} }
function CreateNftWalletComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter valid data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateNftWalletComponent_div_63_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Description is reqiured.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateNftWalletComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateNftWalletComponent_div_63_span_1_Template, 3, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Only numbers and letters are permitted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.nftForm.controls["description"].errors == null ? null : ctx_r5.nftForm.controls["description"].errors.required);
} }
function CreateNftWalletComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function CreateNftWalletComponent_div_74_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r6.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.loadingMessage);
} }
const _c0 = function (a0) { return { btnDisable: a0 }; };
class CreateNftWalletComponent {
    constructor(fb, storage, api, router) {
        this.fb = fb;
        this.storage = storage;
        this.api = api;
        this.router = router;
        this.base = [];
        this.baseAdd = [];
        this.files = [];
        this.filepick = false;
        this.walletselected = false;
        this.fileselected = false;
        this.showLoader = false;
        this.loadingMessage = '';
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json',
        };
        this.cSelectorText = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.regexp = "^(?:[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]$";
            this.regexp = "^(?:[a-zA-Z0-9\-][a-zA-Z0-9\-]{0,61})*([\.]{1,1}[a-z]{2,})+$";
            this.nftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z0-9-]*')]),
                'dnsname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regexp)),
                'nftnumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
                'format_one': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('false'),
                'xcoordinates': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](10),
                'ycoordinates': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](10),
                'colorpicker': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('#000000'),
                'transparency': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(1)]),
                'fontsize': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](16, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(72)]),
                'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                'personal_text': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
            });
            this.userLocal = localStorage.getItem('userLocal');
            this.getAllwallet();
            this.textformat = false;
            this.type = localStorage.getItem('wallet');
            this.getConfDetails();
            //console.log("this.dname:" + dname)
            let response = yield this.api.returnNftConf();
            if (response.status === "success") {
                this.upload_url = response.payload.upload_url;
                console.log("test" + " " + this.upload_url);
                if (this.upload_url != 'undefined') {
                    var splitted = this.upload_url.split("/", 3);
                    console.log("splitted:" + splitted[2]);
                    this.dname = splitted[2];
                    this.dname_enable = true;
                }
                else {
                    //alert("undefined url")
                    console.log("any thing");
                    this.dname_enable = false;
                }
                this.nftForm.patchValue({
                    dnsname: this.dname
                });
            }
            else {
                console.log('no previous configurations found');
            }
            console.log(this.dname);
            //if(this.d)
            return response;
        });
    }
    isValidInput(value) {
        return this.nftForm.controls[value].invalid &&
            (this.nftForm.controls[value].dirty || this.nftForm.controls[value].touched);
    }
    onSubmit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.nftForm);
            this.exportNft();
        });
    }
    balancecheck() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.nftnumber = this.nftForm.get('nftnumber').value;
            let response = yield this.api.getTransaction(this.destName);
            if (response.payload.balance < this.nftnumber) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'You cannot make this number of NFTs because selected wallet balance is ' + response.payload.balance + 'cc',
                    icon: 'info',
                    confirmButtonText: 'Okay'
                });
            }
        });
    }
    customSelector(val, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.destName = val;
            this.cSelectorImg = 'assets/folder-w-border.svg';
            this.cSelectorText = this.all[0].name;
            this.customSelectorOpen = false;
            console.log("val " + this.destName);
            this.cSelectorText = val;
            this.walletselected = true;
            console.log("wallet selected:" + this.walletselected);
            let response = yield this.api.getTransaction(this.destName);
            if (response.payload.balance == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'You cannot make NFTs because your wallet is empty.',
                    icon: 'info',
                    confirmButtonText: 'Okay'
                });
            }
        });
    }
    customSelToggler(val) {
        this.customSelectorOpen = !this.customSelectorOpen;
    }
    getAllwallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response;
                response = yield this.api.getWallet();
                if (response.status == 'success') {
                    this.all = response.payload;
                    //console.log(this.all)
                    console.log("this.all" + this.all);
                    this.cSelectorImg = 'assets/folder-w-border.svg';
                    // if (this.all.length == 1) {
                    this.cSelectorText = this.all[0].name;
                    this.customSelectorOpen = false;
                    this.walletselected = true;
                    this.destName = this.all[0].name;
                    //}
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    formatradio(e) {
        this.format = e.target.value;
        console.log(" radio button value:" + this.format);
        if (this.format == 'false') {
            this.textformat = false;
            console.log("textformat if:" + this.textformat);
        }
        else if (this.format == 'true') {
            this.textformat = true;
            console.log(this.textformat);
        }
    }
    getPath() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.importFile();
                if (response.status == "success") {
                    this.file = response.payload.items_picked[0];
                    var last = this.file.substring(this.file.lastIndexOf(".") + 1, this.file.length);
                    if (last == 'bin' || last == 'stack') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Please select an image with png format',
                            icon: 'info',
                            confirmButtonText: 'Okay'
                        });
                        this.file = '';
                    }
                    this.filepick = true;
                }
                else {
                    this.filepick = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Dialog Canceled',
                        icon: 'info',
                        confirmButtonText: 'Okay'
                    });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // async importNFT() {
    //   try {
    //     for (let i = 0; i < this.files?.length; i++) {
    //       this.base.push({ 'type': 'file', 'data': this.files[i] })
    //     }
    //     var data = {
    //       name: this.destName,
    //       tag: this.tag,
    //       items: this.base
    //     }
    //     let response: any = await this.api.import(data);
    //     if (response.status === "success") {
    //       console.log('hi');
    //       this.doCheck(response.payload?.id, (data: any) => {
    //       });
    //     } else {
    //       Swal.fire({
    //         title: response.payload.message,
    //         icon: 'error',
    //         confirmButtonText: 'Okay',
    //       }).then((result) => {
    //         if (result.value) { { } }
    //       });
    //     }
    //   }
    //   catch (e) {
    //     console.log(e);
    //   }
    // }
    // async doCheck(taskID: any, xdata: any) {
    //   let task: any = await this.api.doCheck(taskID);
    //   if (task) {
    //     this.payload = task.payload;
    //     this.totalimport = this.payload.data?.pown_results?.total;
    //     if (this.payload.status == "error" || this.payload.status == "completed") {
    //       if (this.payload.status == "completed") {
    //         this.storage.setItem("wallet", "localwallet", 'upload');
    //       }
    //       return;
    //     }
    //     setTimeout(() => {
    //       this.doCheck(taskID, xdata)
    //     }, 500)
    //   }
    // }
    exportNft() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: this.destName,
                    amount: Number(this.nftForm.get('nftnumber').value),
                    template_path: this.file,
                    // text_color: String(this.nftForm.get('colorpicker').value),
                    // domain_name: String(this.nftForm.get('dnsname').value),
                    // text: String(this.nftForm.get('personal_text').value),
                    // x: Number(this.nftForm.get('xcoordinates').value),
                    // y: Number(this.nftForm.get('ycoordinates').value),
                    // is_vertical: true,
                    // font_size: Number(this.nftForm.get('fontsize').value),
                    text_color: "#000000",
                    domain_name: String(this.nftForm.get('dnsname').value),
                    text: "",
                    x: 10,
                    y: 10,
                    is_vertical: true,
                    font_size: 16,
                    host_name: String(this.nftForm.get('title').value),
                    description: String(this.nftForm.get('description').value),
                    is_transparent: true,
                    write_sn: false
                };
                let response = yield this.api.exportCoinasNft(data);
                console.log(data);
                this.showLoader = true;
                this.loadingMessage = "Creating NFT...";
                if (response.status === "success") {
                    this.doCheck1((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
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
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        console.log("process completed");
                        this.showLoader = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'NFT has been created successfully',
                            icon: 'success',
                            confirmButtonText: 'Okay'
                        });
                        this.router.navigate(['/dashboard/create-nft-gallery']);
                    }
                    else {
                        this.showLoader = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Failed to create NFT',
                            icon: 'error',
                            confirmButtonText: 'Okay'
                        });
                        this.router.navigate(['/dashboard/create-nft']);
                        window.location.reload();
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck1(taskID, xdata);
                }, 500);
            }
        });
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
    getConfDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('yayyyyy');
            try {
                let response = yield this.api.returnNftConf();
                if (response.status === "success") {
                    this.upload_url = response.payload.upload_url;
                    // this.secret_key = response.payload.upload_secret_key;
                    // this.api_key = response.payload.cf_api_key;
                    //console.log("test" + " " + this.secret_key)
                    var splitted = this.upload_url.split("/", 3);
                    console.log("splitted:" + splitted[2]);
                    this.dname = splitted[2];
                }
                else {
                    console.log('no previous configurations found');
                }
                // this.nftForm.patchValue({
                // secretkey: this.secret_key,
                // apikey: this.api_key,
                // url: this.upload_url,
                //   dnsname: this.dname
                // })
                return this.dname;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
CreateNftWalletComponent.ɵfac = function CreateNftWalletComponent_Factory(t) { return new (t || CreateNftWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
CreateNftWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateNftWalletComponent, selectors: [["app-create-nft-wallet"]], decls: 75, vars: 13, consts: [[1, "transWrapper"], [1, "headerbackWrap"], [1, "titleOne"], [3, "formGroup", "ngSubmit"], [1, "transBody"], [1, "gap10"], [1, "titleTwo", 2, "opacity", "0.8"], [4, "ngIf"], [1, "gap20"], [1, "formField"], [1, "row"], [1, "col-md-5"], ["for", "username"], [1, "col-md-2"], [1, "filepicker"], [1, "icon_wrap", 3, "click"], ["src", "assets/folder_icon.svg", "alt", "", 1, "folderIcon"], ["for", "title", 1, "dark_mode_text"], ["type", "text", "formControlName", "title", "maxlength", "61", "name", "title", "id", "title", 1, "form-control", "text_box_two", 3, "keydown.enter"], ["for", "IncludeOtherText", 1, "dark_mode_text"], [1, "lineSection"], [1, "customeDropdownTwo"], [1, "triger", 3, "click"], ["class", "menuShowTwo scroll", 4, "ngIf"], ["for", "nftnumber", 1, "dark_mode_text"], ["type", "number", "formControlName", "nftnumber", "id", "nftnumber", "value", "1", "name", "nftnumber", 1, "form-control", "text_box_two", 3, "change"], ["class", "errorMsg1", 4, "ngIf"], ["for", "Description", 1, "dark_mode_text"], ["name", "description", "formControlName", "description", "id", "description", 1, "form-control", "text_box_two", 2, "width", "300px", "height", "100px"], [1, "transBottomFooter"], [1, "bottomPartSubmit"], [1, "bottomFooter"], [1, "container"], ["href", "javascript:;", "type", "submit", 1, "btnCustomBlue", "btnLarge", 3, "ngClass"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "titleTwo"], [1, "errorMsg1"], ["src", "assets/error_info_icon.svg", "alt", "error icon"], ["for", "qualname", 1, "dark_mode_text"], [1, "ml-1"], ["src", "assets/icons_info1.png", "title", "You can create records in your DNS Server that prove that you are the creator of the NFT and customize each NFT.", 2, "height", "18px", "width", "18px"], ["type", "text", "formControlName", "dnsname", "maxlength", "61", 1, "form-control", "text_box_two", 3, "keydown.enter"], [1, "menuShowTwo", "scroll"], ["class", "menus", 3, "click", 4, "ngFor", "ngForOf"], [1, "menus", 3, "click"], ["src", "assets/folder-w-border.svg", "height", "18", "alt", "icon"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"]], template: function CreateNftWalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "CREATE NFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateNftWalletComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(ctx.nftForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Here you can turn your CloudCoins into NFTs by embedding CloudCoins into PNG images. You can always turn your NFTs back into CloudCoins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CreateNftWalletComponent_div_10_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "PNG file to be used:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateNftWalletComponent_Template_div_click_23_listener() { return ctx.getPath(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Title of the NFT (Must be fewer than 61 characters)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function CreateNftWalletComponent_Template_input_keydown_enter_31_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CreateNftWalletComponent_div_32_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CreateNftWalletComponent_div_34_Template, 10, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Wallet to get Coins from:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateNftWalletComponent_Template_div_click_43_listener() { return ctx.customSelToggler("local"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CreateNftWalletComponent_div_46_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Number of NFTs to create:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateNftWalletComponent_Template_input_change_53_listener() { return ctx.balancecheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, CreateNftWalletComponent_span_54_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, CreateNftWalletComponent_div_63_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "NOTE: You may recyle your NFT anytime, so don't worry about making a mistake. You can simply redo it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Create NFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, CreateNftWalletComponent_div_74_Template, 6, 2, "div", 34);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.nftForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dname_enable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isValidInput("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dname_enable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cSelectorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.customSelectorOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nftForm.get("nftnumber").valid && ctx.nftForm.get("nftnumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isValidInput("description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.nftForm.invalid || ctx.filepick == false || ctx.walletselected == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".text_box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #2d2d2d;\n  border: 1px solid #bcbbbb;\n  border-radius: 4px;\n  display: inline;\n  font-size: 14px;\n  width: 100px;\n  text-align: center;\n}\n\n.text_box_two[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #2d2d2d;\n  border: 1px solid #bcbbbb;\n  border-radius: 4px;\n  display: inline;\n  font-size: 14px;\n  width: 300px;\n  text-align: center;\n}\n\n.btn_text[_ngcontent-%COMP%] {\n  color: #686868;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\n.btn_text_two[_ngcontent-%COMP%] {\n  color: #686868;\n  font-size: 14px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGUtbmZ0LXdhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBRUkseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJjcmVhdGUtbmZ0LXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0X2JveHtcclxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzJkMmQyZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODgsIDE4NywgMTg3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMHB4OyAgXHJcbn1cclxuLnRleHRfYm94X3R3b3tcclxuICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMmQyZDJkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4OCwgMTg3LCAxODcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7ICBcclxufVxyXG4uYnRuX3RleHR7XHJcbiAgICBjb2xvcjogIzY4Njg2ODtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uYnRuX3RleHRfdHdve1xyXG4gICAgY29sb3I6ICM2ODY4Njg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwOyBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateNftWalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-nft-wallet',
                templateUrl: './create-nft-wallet.component.html',
                styleUrls: ['./create-nft-wallet.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "gMLu":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/create-nft-wallet-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateNftWalletRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNftWalletRoutingModule", function() { return CreateNftWalletRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _create_nft_wallet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-nft-wallet.component */ "1swi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");






//import { BrowserModule } from '@angular/platform-browser'
const routes = [
    { path: '', component: _create_nft_wallet_component__WEBPACK_IMPORTED_MODULE_2__["CreateNftWalletComponent"] }
];
class CreateNftWalletRoutingModule {
}
CreateNftWalletRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateNftWalletRoutingModule });
CreateNftWalletRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateNftWalletRoutingModule_Factory(t) { return new (t || CreateNftWalletRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateNftWalletRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateNftWalletRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "s66r":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/create-nft-wallet/create-nft-wallet.module.ts ***!
  \*************************************************************************/
/*! exports provided: CreateNftWalletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNftWalletModule", function() { return CreateNftWalletModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _create_nft_wallet_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-nft-wallet-routing.module */ "gMLu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _create_nft_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-nft-wallet.component */ "1swi");






class CreateNftWalletModule {
}
CreateNftWalletModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateNftWalletModule });
CreateNftWalletModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateNftWalletModule_Factory(t) { return new (t || CreateNftWalletModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _create_nft_wallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateNftWalletRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateNftWalletModule, { declarations: [_create_nft_wallet_component__WEBPACK_IMPORTED_MODULE_4__["CreateNftWalletComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _create_nft_wallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateNftWalletRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateNftWalletModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_nft_wallet_component__WEBPACK_IMPORTED_MODULE_4__["CreateNftWalletComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _create_nft_wallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateNftWalletRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=create-nft-wallet-create-nft-wallet-module.js.map