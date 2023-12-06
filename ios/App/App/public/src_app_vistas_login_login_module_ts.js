"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_login_login_module_ts"],{

/***/ 3506:
/*!******************************************************!*\
  !*** ./src/app/vistas/login/login-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 226);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1633:
/*!**********************************************!*\
  !*** ./src/app/vistas/login/login.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3506);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 226);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 226:
/*!********************************************!*\
  !*** ./src/app/vistas/login/login.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var D_Appmovil_Sandbox_ionic_Ionic_6_qrcode_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 2082);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 4442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let LoginPage = class LoginPage {
  constructor(router, alertController) {
    this.router = router;
    this.alertController = alertController;
    this.username = '';
    this.password = '';
  }

  Registro() {
    this.router.navigate(['/registro']); // Redirige a la página de registro
  }

  login() {// Verificar las credenciales con la lista de usuarios del servicio
  }

  presentAlert() {
    var _this = this;

    return (0,D_Appmovil_Sandbox_ionic_Ionic_6_qrcode_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Mensaje de Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  ngOnInit() {}

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 4442:
/*!*********************************************************!*\
  !*** ./src/app/vistas/login/login.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\nion-content {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%),\n    no-repeat center center / cover;\n  padding: 0;\n  font-family: \"Varela Round\", sans-serif;\n}\n.login-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 35vh;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n}\n.login-section h1, .login-section p {\n  color: white;\n  margin: 0; /* Elimina los márgenes */\n  padding: 5px;\n  line-height: 1.2; /* Agrega un espaciado vertical adecuado */\n}\n.login-form {\n  background-color: #fff;\n  padding: 20px;\n  border-top-left-radius: 46px;\n  border-top-right-radius: 46px;\n  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);\n  margin-top: -20px;\n}\n.form-input {\n  position: relative;\n  margin-bottom: 20px;\n}\n.form-input ion-item {\n  padding-left: 0;\n}\n.form-input ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%);\n  font-size: 1.2rem;\n  color: black;\n}\n.form-input ion-label {\n  position: absolute;\n  left: 36px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: bold;\n  font-size: 0.8rem;\n  color: black;\n}\n.form-input ion-input[name=username]:not(:placeholder-shown) + ion-label {\n  display: none;\n}\n.form-input ion-input {\n  --padding-start: 36px;\n  font-size: 0.9rem;\n  color: black;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.action-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n.action-button ion-button {\n  width: 100%;\n  max-width: 300px;\n  margin-bottom: 10px;\n}\n.action-button p {\n  font-size: 0.8rem;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhbmRib3glMjBpb25pY1xcSW9uaWMtNi1xcmNvZGUtbWFpblxcc3JjXFxhcHBcXHZpc3Rhc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBUix3RkFBQTtBQUdSO0VBQ0U7NERBQUE7RUFFQSxVQUFBO0VBQ0EsdUNBQUE7QURBRjtBQ0dBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBREFGO0FDRUU7RUFDRSxZQUFBO0VBQ0EsU0FBQSxFQUFBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBLEVBQUEsMENBQUE7QURBSjtBQ0lBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QURERjtBQ01FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBREhKO0FDS0k7RUFDRSxlQUFBO0FESE47QUNNSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBREpOO0FDT0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRExOO0FDT0k7RUFDRSxhQUFBO0FETE47QUNRSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FETk47QUNVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURQSjtBQ1NJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURQTjtBQ1VJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FEUk4iLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoNSwgNTgsIDEwNiwgMSkgMCUsIHJnYmEoMTcsIDE1MiwgMjEwLCAxKSAxMDAlKSxcbiAgICB1cmwoXCIvYXNzZXRzL2NvbWlhLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJWYXJlbGEgUm91bmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxvZ2luLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5sb2dpbi1zZWN0aW9uIGgxLCAubG9naW4tc2VjdGlvbiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7IC8qIEVsaW1pbmEgbG9zIG3DoXJnZW5lcyAqL1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7IC8qIEFncmVnYSB1biBlc3BhY2lhZG8gdmVydGljYWwgYWRlY3VhZG8gKi9cbn1cblxuLmxvZ2luLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDZweDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5mb3JtLWlucHV0IGlvbi1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmZvcm0taW5wdXQgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG4uZm9ybS1pbnB1dCBpb24tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM2cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmZvcm0taW5wdXQgaW9uLWlucHV0W25hbWU9dXNlcm5hbWVdOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mb3JtLWlucHV0IGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMzZweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5hY3Rpb24tYnV0dG9uIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5hY3Rpb24tYnV0dG9uIHAge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGJsdWU7XG59IiwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDUsIDU4LCAxMDYsIDEpIDAlLCByZ2JhKDE3LCAxNTIsIDIxMCwgMSkgMTAwJSksXHJcbiAgICB1cmwoXCIvYXNzZXRzL2NvbWlhLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubG9naW4tc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMzV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBcclxuICBoMSwgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7IC8qIEVsaW1pbmEgbG9zIG3DoXJnZW5lcyAqL1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjsgLyogQWdyZWdhIHVuIGVzcGFjaWFkbyB2ZXJ0aWNhbCBhZGVjdWFkbyAqL1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NnB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmZvcm0taW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMzZweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgaW9uLWxhYmVsIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMzZweDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb24tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG4gIH0iXX0= */";

/***/ }),

/***/ 2082:
/*!*********************************************************!*\
  !*** ./src/app/vistas/login/login.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"logo-img ion-padding\">\n      <img src=\"assets\\icon\\logotipojunaexpres.png\" alt=\"\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"login-section ion-padding\">\n    <h1 class=\"ion-text-center\">Bienvenido a junaExpress!</h1>\n    <p>Inicia sesion para continuar</p>\n  </div>\n  <div class=\"login-form ion-padding\">\n    <div class=\"form-input\">\n      <ion-icon name=\"mail-outline\"></ion-icon>\n      <ion-item>\n        <ion-label position=\"floating\" *ngIf=\"!username\">Usuario</ion-label>\n        <ion-input [(ngModel)]=\"username\" requerid></ion-input>\n      </ion-item>\n    </div>\n    <div class=\"form-input\">\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\n      <ion-item>\n        <ion-label position=\"floating\" *ngIf=\"!password\">Contraseña</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\" requerid></ion-input>\n      </ion-item>\n    </div>\n    <div class=\"action-button ion-padding\">\n      <ion-button size=\"large\" class=\"login-button\" (click)=\"login()\">Iniciar sesión</ion-button>\n      <ion-button size=\"large\" class=\"login-button\" routerLink=\"/menu-principal\">Menu</ion-button>\n      <p><a href=\"/contrasenia\" >Olvidaste tu contraseña?</a></p>\n      <ion-button size=\"large\" class=\"login-button\" fill=\"outline\" routerLink=\"/registro\">Registro</ion-button>\n    </div>\n  </div>\n  <!-- commit main branch -->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_login_login_module_ts.js.map