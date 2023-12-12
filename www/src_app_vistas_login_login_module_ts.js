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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 2082);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 4442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_servicios_fireservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/fireservice.service */ 944);
/* harmony import */ var src_app_servicios_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/data.service */ 625);










let LoginPage = class LoginPage {
  constructor(router, loadingCtrl, fireservice, alertController, dataService, cdRef) {
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.fireservice = fireservice;
    this.alertController = alertController;
    this.dataService = dataService;
    this.cdRef = cdRef;
  }

  ngOnInit() {
    // Verificar si hay un usuario en el almacenamiento local al cargar la página
    this.verificarUsuarioAlCargarPagina();
  } // Esta función se ejecuta cuando se presiona el botón de inicio de sesión.


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
          }).subscribe( /*#__PURE__*/function () {
            var _ref = (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (userData) {
              console.log(userData);
              yield _this.dataService.guardarUsuario(userData); // Guardar información del usuario en el almacenamiento local

              _this.loadingCtrl.dismiss();

              _this.router.navigate(['/menu-principal']);
            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }(), err => {
            console.log(err);

            _this.loadingCtrl.dismiss();
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
  } // Verificar si hay un usuario en el almacenamiento local al cargar la página


  verificarUsuarioAlCargarPagina() {
    var _this2 = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const usuarioGuardado = yield _this2.dataService.obtenerUsuario();

      if (usuarioGuardado) {
        // Si hay un usuario almacenado, navegar directamente al menú principal
        _this2.router.navigate(['/menu-principal']);
      }
    })();
  } // Función para mostrar el cuadro de alerta


  presentAlert(mensaje) {
    var _this3 = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Alerta',
        message: mensaje,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  } // Función para mostrar el indicador de carga


  showLoading() {
    var _this4 = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingCtrl.create({
        message: 'Cargando...',
        duration: 5000
      });
      yield loading.present();
    })();
  } // Esta función se ejecuta cuando se presiona el botón de registro.
  // Redirige al usuario a la página de registro.


  signup() {
    this.router.navigate(['/registro']); // Redirige a la página de registro
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: src_app_servicios_fireservice_service__WEBPACK_IMPORTED_MODULE_3__.FireserviceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: src_app_servicios_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

module.exports = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\nion-content {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%),\n     no-repeat center center / cover;\n  padding: 0;\n}\n.login-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 35vh;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n}\n.login-section h1, .login-section p, .login-section h3 {\n  color: white;\n  margin: 0; /* Elimina los márgenes */\n  padding: 5px;\n  line-height: 1.2; /* Agrega un espaciado vertical adecuado */\n}\n.login-form {\n  background-color: #fff;\n  padding: 20px;\n  height: 75%;\n  border-top-left-radius: 46px;\n  border-top-right-radius: 46px;\n  border-bottom-left-radius: 46px;\n  border-bottom-right-radius: 46px;\n  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);\n  margin-top: -20px;\n}\n.form-input {\n  position: relative;\n  margin-bottom: 20px;\n}\n.form-input ion-item {\n  padding-left: 0;\n}\n.form-input ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%);\n  font-size: 1.2rem;\n  color: black;\n}\n.form-input ion-label {\n  position: absolute;\n  left: 36px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: bold;\n  font-size: 0.8rem;\n  color: black;\n}\n.form-input ion-input {\n  --padding-start: 36px;\n  font-size: 0.9rem;\n  color: black;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.form-input ion-input[name=username]:not(:placeholder-shown) + ion-label {\n  display: none;\n}\n.action-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n.action-button ion-button {\n  width: 100%;\n  max-width: 300px;\n  margin-bottom: 10px;\n}\n.action-button p {\n  font-size: 0.8rem;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBUix3RkFBQTtBQUdSO0VBQ0U7b0NBQUE7RUFFQSxVQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLFNBQUEsRUFBQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQSxFQUFBLDBDQUFBO0FBQUo7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUFERjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxlQUFBO0FBSE47QUFNSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUpOO0FBT0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBUUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQU5OO0FBUUk7RUFDRSxhQUFBO0FBTk47QUFXRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVVJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFSTjtBQVdJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBVE4iLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDUsIDU4LCAxMDYsIDEpIDAlLCByZ2JhKDE3LCAxNTIsIDIxMCwgMSkgMTAwJSksXHJcbiAgICAgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubG9naW4tc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMzV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBcclxuICBoMSwgcCAsaDN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7IC8qIEVsaW1pbmEgbG9zIG3DoXJnZW5lcyAqL1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjsgLyogQWdyZWdhIHVuIGVzcGFjaWFkbyB2ZXJ0aWNhbCBhZGVjdWFkbyAqL1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IDc1JTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NnB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQ2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQ2cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC00cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuICBcclxuICBcclxuICBcclxuICAuZm9ybS1pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMzZweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDM2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0W25hbWU9XCJ1c2VybmFtZVwiXTpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGlvbi1sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIFxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBjb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */";

/***/ }),

/***/ 2082:
/*!*********************************************************!*\
  !*** ./src/app/vistas/login/login.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <div class=\"logo-img ion-padding\">\r\n      <img src=\"assets\\icon\\logotipojunaexpres.png\" alt=\"\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"login-section ion-padding\">\r\n    <h1 class=\"ion-text-center\">Bienvenido a junaExpress!</h1>\r\n    <p>Inicia sesion para continuar</p>\r\n  </div>\r\n  <div class=\"login-form ion-padding\">\r\n    <div class=\"form-input\">\r\n      <ion-icon name=\"mail-outline\"></ion-icon>\r\n\r\n      <!--Input-->\r\n      <ion-item>\r\n        <ion-label position=\"floating\" *ngIf=\"!email\">Email</ion-label>\r\n        <ion-input [(ngModel)]=\"email\" clearInput=\"true\"></ion-input>\r\n      </ion-item>\r\n      \r\n    </div>\r\n    <div class=\"form-input\">\r\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n      <ion-item>\r\n        <ion-label position=\"floating\"  *ngIf=\"!password\">Password</ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]='password' clearInput=\"true\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"action-button ion-padding\">\r\n      <ion-button size=\"large\" class=\"login-button\" (click)=\"login()\">Iniciar sesión</ion-button>\r\n      <!--   <ion-button size=\"large\" class=\"login-button\" routerLink=\"/menu-principal\">Menu</ion-button>    -->\r\n      <p ><a href=\"/forgot-password\" >Olvidaste tu contraseña?</a></p>\r\n      <ion-button size=\"large\" class=\"login-button\" fill=\"outline\"(click)=\"signup()\" >Registro</ion-button>\r\n      <!--  <ion-button routerLink=\"/menu-principal\">Acceso rapido</ion-button>  -->\r\n      \r\n    </div>\r\n  </div>\r\n  <!-- commit main branch -->\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_login_login_module_ts.js.map