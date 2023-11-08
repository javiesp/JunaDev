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
/* harmony import */ var C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 2082);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 4442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);








let LoginPage = class LoginPage {
  constructor(router, loadingCtrl, fireservice, alertController) {
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.fireservice = fireservice;
    this.alertController = alertController;
  }

  ngOnInit() {} // Esta función se ejecuta cuando se presiona el botón de inicio de sesión.


  login() {
    var _this = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.email || !_this.password) {
        yield _this.presentAlert('Por favor, ingresa un correo electrónico y una contraseña.');
        return;
      }

      _this.showLoading();

      try {
        const res = yield _this.fireservice.loginWithEmail({
          email: _this.email,
          password: _this.password
        });
        console.log(res);

        if (res.user.uid) {
          _this.fireservice.getDetails({
            uid: res.user.uid
          }).subscribe(res => {
            console.log(res);

            _this.loadingCtrl.dismiss();

            _this.router.navigate(['/menu-principal']);
          }, err => {
            console.log(err);
          });
        }
      } catch (err) {
        console.log(err); // Verifica el tipo de error para mostrar el mensaje adecuado

        if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
          yield _this.presentAlert('Usuario o contraseña incorrectos');
        } else {
          yield _this.presentAlert('Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo más tarde.');
        }

        _this.loadingCtrl.dismiss();
      }
    })();
  } // Esta función se ejecuta cuando se presiona el botón de registro.
  // Redirige al usuario a la página de registro.


  signup() {
    this.router.navigate(['/registro']); // Redirige a la página de registro
  } // Esta función muestra un indicador de carga con un mensaje de "Iniciando Sesión...".


  showLoading() {
    var _this2 = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingCtrl.create({
        spinner: "bubbles",
        message: 'Iniciando Sesion...'
      });
      loading.present();
    })();
  } // Esta función muestra una alerta con un mensaje de error.
  // Se utiliza para mostrar mensajes de error al usuario.


  presentAlert(message) {
    var _this3 = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Mensaje de Error',
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_3__.FireserviceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

module.exports = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\nion-content {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%),\n    url(\"/assets/comia.jpg\") no-repeat center center / cover;\n  padding: 0;\n  font-family: \"Varela Round\", sans-serif;\n}\n.login-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 35vh;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n}\n.login-section h1, .login-section p, .login-section h3 {\n  color: white;\n  margin: 0; /* Elimina los márgenes */\n  padding: 5px;\n  line-height: 1.2; /* Agrega un espaciado vertical adecuado */\n}\n.login-form {\n  background-color: #fff;\n  padding: 20px;\n  border-top-left-radius: 46px;\n  border-top-right-radius: 46px;\n  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);\n  margin-top: -20px;\n}\n.form-input {\n  position: relative;\n  margin-bottom: 20px;\n}\n.form-input ion-item {\n  padding-left: 0;\n}\n.form-input ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%);\n  font-size: 1.2rem;\n  color: black;\n}\n.form-input ion-label {\n  position: absolute;\n  left: 36px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: bold;\n  font-size: 0.8rem;\n  color: black;\n}\n.form-input ion-input {\n  --padding-start: 36px;\n  font-size: 0.9rem;\n  color: black;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.form-input ion-input[name=username]:not(:placeholder-shown) + ion-label {\n  display: none;\n}\n.action-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n.action-button ion-button {\n  width: 100%;\n  max-width: 300px;\n  margin-bottom: 10px;\n}\n.action-button p {\n  font-size: 0.8rem;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBUix3RkFBQTtBQUdSO0VBQ0U7NERBQUE7RUFFQSxVQUFBO0VBQ0EsdUNBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsU0FBQSxFQUFBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBLEVBQUEsMENBQUE7QUFBSjtBQUlBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUFERjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxlQUFBO0FBSE47QUFNSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUpOO0FBT0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBUUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQU5OO0FBUUk7RUFDRSxhQUFBO0FBTk47QUFXRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVVJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFSTjtBQVdJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBVE4iLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDUsIDU4LCAxMDYsIDEpIDAlLCByZ2JhKDE3LCAxNTIsIDIxMCwgMSkgMTAwJSksXHJcbiAgICB1cmwoXCIvYXNzZXRzL2NvbWlhLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubG9naW4tc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMzV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBcclxuICBoMSwgcCAsaDN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7IC8qIEVsaW1pbmEgbG9zIG3DoXJnZW5lcyAqL1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjsgLyogQWdyZWdhIHVuIGVzcGFjaWFkbyB2ZXJ0aWNhbCBhZGVjdWFkbyAqL1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NnB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmZvcm0taW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDM2cHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzNnB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dFtuYW1lPVwidXNlcm5hbWVcIl06bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBpb24tbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICBcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICBcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 2082:
/*!*********************************************************!*\
  !*** ./src/app/vistas/login/login.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <div class=\"logo-img ion-padding\">\r\n      <img src=\"assets\\icon\\logotipojunaexpres.png\" alt=\"\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"login-section ion-padding\">\r\n    <h1 class=\"ion-text-center\">Bienvenido a junaExpress!</h1>\r\n    <p>Inicia sesion para continuar</p>\r\n  </div>\r\n  <div class=\"login-form ion-padding\">\r\n    <div class=\"form-input\">\r\n      <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n      <!--Input-->\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input [(ngModel)]=\"email\" clearInput=\"true\"></ion-input>\r\n      </ion-item>\r\n      \r\n    </div>\r\n    <div class=\"form-input\">\r\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" >Password</ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]='password' clearInput=\"true\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"action-button ion-padding\">\r\n      <ion-button size=\"large\" class=\"login-button\" (click)=\"login()\">Iniciar sesión</ion-button>\r\n      <!--   <ion-button size=\"large\" class=\"login-button\" routerLink=\"/menu-principal\">Menu</ion-button>    -->\r\n      <p ><a href=\"/forgot-password\" >Olvidaste tu contraseña?</a></p>\r\n      <ion-button size=\"large\" class=\"login-button\" fill=\"outline\"(click)=\"signup()\" >Registro</ion-button>\r\n      <!--  <ion-button routerLink=\"/menu-principal\">Acceso rapido</ion-button>  -->\r\n\r\n    </div>\r\n  </div>\r\n  <!-- commit main branch -->\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_login_login_module_ts.js.map