"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_forgot-password_forgot-password_module_ts"],{

/***/ 7277:
/*!**************************************************************************!*\
  !*** ./src/app/vistas/forgot-password/forgot-password-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 3443);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 2740:
/*!******************************************************************!*\
  !*** ./src/app/vistas/forgot-password/forgot-password.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 7277);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 3443);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 3443:
/*!****************************************************************!*\
  !*** ./src/app/vistas/forgot-password/forgot-password.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 9062);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.userEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    }
    ngOnInit() {
    }
    onReset() {
        try {
            const email = this.userEmail.value;
            this.authSvc.resetPassword(email);
            window.alert('Email enviado');
            this.router.navigate(['/login']);
        }
        catch (error) {
            console.log(error);
        }
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__.FireserviceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgot-password',
        template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__.FireserviceService],
        styles: [_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 4792:
/*!*****************************************************************************!*\
  !*** ./src/app/vistas/forgot-password/forgot-password.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\nion-content {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%),\n    url(\"/assets/comia.jpg\") no-repeat center center / cover;\n  padding: 0;\n  font-family: \"Varela Round\", sans-serif;\n}\n.login-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 35vh;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n}\n.login-section h1, .login-section p, .login-section h3 {\n  color: white;\n  margin: 0; /* Elimina los márgenes */\n  padding: 5px;\n  line-height: 1.2; /* Agrega un espaciado vertical adecuado */\n}\n.login-form {\n  background-color: #fff;\n  padding: 20px;\n  border-top-left-radius: 46px;\n  border-top-right-radius: 46px;\n  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);\n  margin-top: -20px;\n}\n.form-input {\n  position: relative;\n  margin-bottom: 20px;\n}\n.form-input ion-item {\n  padding-left: 0;\n}\n.form-input ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%);\n  font-size: 1.2rem;\n  color: black;\n}\n.form-input ion-label {\n  position: absolute;\n  left: 36px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: bold;\n  font-size: 0.8rem;\n  color: black;\n}\n.form-input ion-input {\n  --padding-start: 36px;\n  font-size: 0.9rem;\n  color: black;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.form-input ion-input[name=username]:not(:placeholder-shown) + ion-label {\n  display: none;\n}\n.action-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n.action-button ion-button {\n  width: 100%;\n  max-width: 300px;\n  margin-bottom: 10px;\n}\n.action-button p {\n  font-size: 0.8rem;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQVIsd0ZBQUE7QUFHUjtFQUNFOzREQUFBO0VBRUEsVUFBQTtFQUNBLHVDQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLFNBQUEsRUFBQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQSxFQUFBLDBDQUFBO0FBQUo7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0FBREY7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJO0VBQ0UsZUFBQTtBQUhOO0FBTUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFKTjtBQU9JO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFMTjtBQVFJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFOTjtBQVFJO0VBQ0UsYUFBQTtBQU5OO0FBV0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUko7QUFVSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUk47QUFXSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQVROIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoNSwgNTgsIDEwNiwgMSkgMCUsIHJnYmEoMTcsIDE1MiwgMjEwLCAxKSAxMDAlKSxcclxuICAgIHVybChcIi9hc3NldHMvY29taWEuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dpbi1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAzNXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIFxyXG4gIGgxLCBwICxoM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDsgLyogRWxpbWluYSBsb3MgbcOhcmdlbmVzICovXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yOyAvKiBBZ3JlZ2EgdW4gZXNwYWNpYWRvIHZlcnRpY2FsIGFkZWN1YWRvICovXHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ2cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ2cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC00cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuICBcclxuICBcclxuICBcclxuICAuZm9ybS1pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMzZweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDM2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0W25hbWU9XCJ1c2VybmFtZVwiXTpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGlvbi1sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIFxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBjb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICB9Il19 */";

/***/ }),

/***/ 9062:
/*!*****************************************************************************!*\
  !*** ./src/app/vistas/forgot-password/forgot-password.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <div class=\"logo-img ion-padding\">\r\n        <img src=\"assets\\icon\\logotipojunaexpres.png\" alt=\"\">\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content [fullscreen]=\"true\">\r\n    <div class=\"login-section ion-padding\">\r\n      <h3 class=\"ion-text-center\">Ingresa tu correo</h3>\r\n    </div>\r\n    <div class=\"login-form ion-padding\">\r\n      <div class=\"form-input\">\r\n        <ion-icon name=\"mail-outline\"></ion-icon>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Correo</ion-label>\r\n          <ion-input  type=\"email\" required class=\"form-control\" [formControl]=\"userEmail\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n      <div class=\"action-button ion-padding\">\r\n        <ion-button size=\"large\" class=\"login-button\" fill=\"outline\" (click)=\"onReset()\" >Enviar</ion-button>\r\n        <ion-button size=\"large\" class=\"login-button\"  routerLink=\"/login\">Volver</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_forgot-password_forgot-password_module_ts.js.map