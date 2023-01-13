(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "1IIY":
/*!****************************************************************************!*\
  !*** ./src/app/auth/create-skywallet/create-address/username.validator.ts ***!
  \****************************************************************************/
/*! exports provided: UsernameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return UsernameValidator; });
class UsernameValidator {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
}


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class LoginService {
    constructor() {
        this.isLoggedIn = false;
        this.loginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.cloudcoin = null;
        this.getLoggedIn();
    }
    checkLoginStatus() {
        this.loginStatus.next(this.getLoggedIn());
    }
    watch() {
        return this.loginStatus.asObservable();
    }
    getToken() {
        if (this.getLoggedIn()) {
            return JSON.parse(localStorage.getItem('cc'));
        }
        else {
            this.checkLoginStatus();
        }
    }
    getLoggedIn() {
        if (localStorage.getItem('cc') !== null) {
            // console.log(localStorage.getItem('cc'));
            try {
                const cc = JSON.parse(localStorage.getItem('cc'));
                // console.log('parsed coin');
                // console.log(cc);
                if (cc.sn && cc.sn > 0 && cc.an !== null && cc.an.length === 25) {
                    this.isLoggedIn = true;
                }
            }
            catch (e) {
                // console.log(e);
                // console.log('cannot parse coin');
                this.isLoggedIn = false;
                localStorage.setItem('cc', 'null');
                localStorage.removeItem('cc');
            }
        }
        else {
            this.isLoggedIn = false;
        }
        return this.isLoggedIn;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lkAQ":
/*!*****************************************************************************!*\
  !*** ./src/app/auth/create-localwallet/setup-mail-psw/custom-validators.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
class CustomValidators {
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map