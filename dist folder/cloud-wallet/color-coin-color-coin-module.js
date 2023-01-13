(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["color-coin-color-coin-module"],{

/***/ "L+bY":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/functions/color-coin/color-coin.module.ts ***!
  \*********************************************************************/
/*! exports provided: ColorCoinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorCoinModule", function() { return ColorCoinModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _color_coin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-coin-routing.module */ "juCX");
/* harmony import */ var _color_coin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-coin.component */ "wNhF");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ "NiZn");






class ColorCoinModule {
}
ColorCoinModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ColorCoinModule });
ColorCoinModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ColorCoinModule_Factory(t) { return new (t || ColorCoinModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _color_coin_routing_module__WEBPACK_IMPORTED_MODULE_2__["ColorCoinRoutingModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ColorCoinModule, { declarations: [_color_coin_component__WEBPACK_IMPORTED_MODULE_3__["ColorCoinComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _color_coin_routing_module__WEBPACK_IMPORTED_MODULE_2__["ColorCoinRoutingModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorCoinModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_color_coin_component__WEBPACK_IMPORTED_MODULE_3__["ColorCoinComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _color_coin_routing_module__WEBPACK_IMPORTED_MODULE_2__["ColorCoinRoutingModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "juCX":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/functions/color-coin/color-coin-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ColorCoinRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorCoinRoutingModule", function() { return ColorCoinRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _color_coin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-coin.component */ "wNhF");





const routes = [
    {
        path: '',
        component: _color_coin_component__WEBPACK_IMPORTED_MODULE_2__["ColorCoinComponent"]
    }
];
class ColorCoinRoutingModule {
}
ColorCoinRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ColorCoinRoutingModule });
ColorCoinRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ColorCoinRoutingModule_Factory(t) { return new (t || ColorCoinRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ColorCoinRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorCoinRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wNhF":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/functions/color-coin/color-coin.component.ts ***!
  \************************************************************************/
/*! exports provided: ColorCoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorCoinComponent", function() { return ColorCoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






const _c0 = function (a0) { return { backgroundColor: a0 }; };
function ColorCoinComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.final_color[i_r2]));
} }
class ColorCoinComponent {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.final_color = [];
        this.userLocal = localStorage.getItem('userLocal');
    }
    ngOnInit() {
        this.getColors();
    }
    getColors() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response;
                response = yield this.api.getTransaction(this.userLocal);
                if (response.status == "success") {
                    this.all = response.payload;
                    if (((_a = this.all) === null || _a === void 0 ? void 0 : _a.balance) !== 0) {
                        var serialNo = this.all.contents;
                        for (let i = 0; i < serialNo.length; i++) {
                            this.serial_no_array = serialNo;
                            var obj = {};
                            obj[i] = this.hexToRgb(parseInt(this.serial_no_array[i], 10).toString(16));
                            this.final_color.push(obj[i]);
                        }
                    }
                }
                for (let i = 0; i < this.final_color.length; i++) {
                    return this.final_color;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    hexToRgb(hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        //console.log("function:" +  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        //return ([r, g, b].join());
    }
}
ColorCoinComponent.ɵfac = function ColorCoinComponent_Factory(t) { return new (t || ColorCoinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ColorCoinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorCoinComponent, selectors: [["app-color-coin"]], decls: 9, vars: 2, consts: [[1, "transWrapper"], [1, "headerbackWrap"], ["href", "javascript:;", "routerLink", "/dashboard/home", 1, "backBtnInHeader"], ["src", "assets/arrow.svg", "alt", ""], ["src", "assets/localwallet_icon.svg", "alt", "localwallet icon", 1, "local-wallet-icon", "mr-3"], [1, "titleOne"], [1, "container"], ["class", "boxes", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "boxes", 3, "ngStyle"]], template: function ColorCoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ColorCoinComponent_div_8_Template, 1, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userLocal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.final_color);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-right: 2%;\n}\n\n.boxes[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  margin-left: 10px;\n  margin-right: 10px;\n  display: inline-block;\n  border: 1px solid black;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.textCenter[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.local-wallet-icon[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29sb3ItY29pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBR0oiLCJmaWxlIjoiY29sb3ItY29pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuLmJveGVze1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnRleHRDZW50ZXJ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmxvY2FsLXdhbGxldC1pY29ue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ColorCoinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-color-coin',
                templateUrl: './color-coin.component.html',
                styleUrls: ['./color-coin.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=color-coin-color-coin-module.js.map