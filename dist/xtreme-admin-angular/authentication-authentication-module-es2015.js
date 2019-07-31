(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/404/not-found.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/404/not-found.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-box\">\r\n    <div class=\"error-body text-center\">\r\n        <h1 class=\"error-title text-danger\">404</h1>\r\n        <h3 class=\"text-uppercase error-subtitle\">PAGE NOT FOUND !</h3>\r\n        <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\r\n        <a href=\"#/dashboard/classic\" class=\"btn btn-danger btn-rounded waves-effect waves-light m-b-40\">Back to home</a> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/lock/lock.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/lock/lock.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img alt=\"thumbnail\" class=\"rounded-circle\" width=\"100\" src=\"assets/images/users/1.jpg\"></span>\r\n                <h5 class=\"font-medium m-b-20\">Genelia</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12\">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\"\" placeholder=\"Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">LOGIN</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div id=\"loginform\" [ngClass]=\"{'d-none': recoverform}\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign In to Admin</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" id=\"loginform\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"ti-pencil\"></i></span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">Remember me</label>\r\n                                    <a (click)=\"showRecoverForm()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot pwd?</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">Log In</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\r\n                                <div class=\"social\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-facebook\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fab fa-facebook\"></i> </a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fab fa-google-plus\"></i> </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10\">\r\n                            <div class=\"col-sm-12 text-center\">\r\n                                Don't have an account? <a href=\"#/authentication/signup\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"recoverform\" [ngClass]=\"{'d-block': recoverform}\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Recover Password</h5>\r\n                <span>Enter your Email and instructions will be sent to you!</span>\r\n            </div>\r\n            <div class=\"row m-t-20\">\r\n                <!-- Form -->\r\n                <form class=\"col-12\">\r\n                    <!-- email -->\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-12\">\r\n                            <input class=\"form-control form-control-lg\" type=\"email\" required=\"\" placeholder=\"Username\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- pwd -->\r\n                    <div class=\"row m-t-20\">\r\n                        <div class=\"col-12\">\r\n                            <button class=\"btn btn-block btn-lg btn-danger\" type=\"submit\" name=\"action\">Reset</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/login2/login2.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/login2/login2.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/background/login-register.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box on-sidebar\">\r\n        <div id=\"loginform\" [ngClass]=\"{'d-none': recoverform}\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign In to Admin</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" id=\"loginform\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"ti-pencil\"></i></span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">Remember me</label>\r\n                                    <a (click)=\"showRecoverForm()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot pwd?</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">Log In</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\r\n                                <div class=\"social\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn  btn-facebook\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fab  fa-facebook\"></i> </a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fab  fa-google-plus\"></i> </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10\">\r\n                            <div class=\"col-sm-12 text-center\">\r\n                                Don't have an account? <a href=\"#/authentication/signup2\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"recoverform\" [ngClass]=\"{'d-block': recoverform}\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Recover Password</h5>\r\n                <span>Enter your Email and instructions will be sent to you!</span>\r\n            </div>\r\n            <div class=\"row m-t-20\">\r\n                <!-- Form -->\r\n                <form class=\"col-12\" action=\"index.html\">\r\n                    <!-- email -->\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-12\">\r\n                            <input class=\"form-control form-control-lg\" type=\"email\" required=\"\" placeholder=\"Username\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- pwd -->\r\n                    <div class=\"row m-t-20\">\r\n                        <div class=\"col-12\">\r\n                            <button class=\"btn btn-block btn-lg btn-danger\" type=\"submit\" name=\"action\">Reset</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/signup/signup.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/signup/signup.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign Up to Admin</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\r\n                        <div class=\"form-group row \">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Confirm Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12 \">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center \">\r\n                            <div class=\"col-xs-12 p-b-20 \">\r\n                                <button class=\"btn btn-block btn-lg btn-info \" type=\"submit \">SIGN UP</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10 \">\r\n                            <div class=\"col-sm-12 text-center \">\r\n                                Already have an account? <a href=\"#/authentication/login \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/signup2/signup2.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/signup2/signup2.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/background/login-register.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box on-sidebar\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign Up to Admin</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\r\n                        <div class=\"form-group row \">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Confirm Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12 \">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center \">\r\n                            <div class=\"col-xs-12 p-b-20 \">\r\n                                <button class=\"btn btn-block btn-lg btn-info \" type=\"submit \">SIGN UP</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10 \">\r\n                            <div class=\"col-sm-12 text-center \">\r\n                                Already have an account? <a href=\"#/authentication/login2 \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/authentication/404/not-found.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/404/not-found.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let NotfoundComponent = class NotfoundComponent {
    ngAfterViewInit() { }
};
NotfoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/404/not-found.component.html")
    })
], NotfoundComponent);



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/authentication/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _login2_login2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login2/login2.component */ "./src/app/authentication/login2/login2.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/authentication/signup2/signup2.component.ts");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_10__["AuthenticationRoutes"]),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
        ],
        declarations: [
            _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
            _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__["LockComponent"],
            _login2_login2_component__WEBPACK_IMPORTED_MODULE_7__["Login2Component"],
            _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_9__["Signup2Component"]
        ]
    })
], AuthenticationModule);



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/authentication/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _login2_login2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login2/login2.component */ "./src/app/authentication/login2/login2.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/authentication/signup2/signup2.component.ts");






const AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]
            },
            {
                path: 'lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__["LockComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
            {
                path: 'login2',
                component: _login2_login2_component__WEBPACK_IMPORTED_MODULE_3__["Login2Component"]
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
            },
            {
                path: 'signup2',
                component: _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__["Signup2Component"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/authentication/lock/lock.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/lock/lock.component.ts ***!
  \*******************************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LockComponent = class LockComponent {
    constructor() { }
};
LockComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-lock',
        template: __webpack_require__(/*! raw-loader!./lock.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/lock/lock.component.html")
    }),
    __metadata("design:paramtypes", [])
], LockComponent);



/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LoginComponent = class LoginComponent {
    constructor() {
        this.loginform = true;
        this.recoverform = false;
    }
    showRecoverForm() {
        this.loginform = !this.loginform;
        this.recoverform = !this.recoverform;
    }
};
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html")
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);



/***/ }),

/***/ "./src/app/authentication/login2/login2.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login2/login2.component.ts ***!
  \***********************************************************/
/*! exports provided: Login2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2Component", function() { return Login2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Login2Component = class Login2Component {
    constructor() {
        this.loginform = true;
        this.recoverform = false;
    }
    showRecoverForm() {
        this.loginform = !this.loginform;
        this.recoverform = !this.recoverform;
    }
};
Login2Component = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login2.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/login2/login2.component.html")
    }),
    __metadata("design:paramtypes", [])
], Login2Component);



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SignupComponent = class SignupComponent {
    constructor() { }
};
SignupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/signup/signup.component.html")
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);



/***/ }),

/***/ "./src/app/authentication/signup2/signup2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup2/signup2.component.ts ***!
  \*************************************************************/
/*! exports provided: Signup2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2Component", function() { return Signup2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Signup2Component = class Signup2Component {
    constructor() { }
};
Signup2Component = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup2.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/signup2/signup2.component.html")
    }),
    __metadata("design:paramtypes", [])
], Signup2Component);



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module-es2015.js.map