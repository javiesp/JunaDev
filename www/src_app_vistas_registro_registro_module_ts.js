"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_registro_registro_module_ts"],{

/***/ 8006:
/*!************************************************************!*\
  !*** ./src/app/vistas/registro/registro-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 556);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 1423:
/*!****************************************************!*\
  !*** ./src/app/vistas/registro/registro.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 8006);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 556);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 556:
/*!**************************************************!*\
  !*** ./src/app/vistas/registro/registro.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 5459);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);






let RegistroPage = class RegistroPage {
    constructor(fireService, router) {
        this.fireService = fireService;
        this.router = router;
    }
    ngOnInit() {
    }
    // Esta función se encarga del proceso de registro de un nuevo usuario en la aplicación.
    signup() {
        // Llama al servicio de Firebase para registrarse con el correo electrónico y la contraseña proporcionados.
        this.fireService.signup({ email: this.email, password: this.password }).then(res => {
            if (res.user.uid) {
                // Cuando el registro es exitoso, crea un objeto de datos del usuario.
                let data = {
                    username: this.username,
                    password: this.password,
                    apellido: this.apellido,
                    email: this.email
                };
                // Llama al servicio de Firebase para guardar los detalles del usuario en la base de datos.
                this.fireService.saveDetails(data).then(res => {
                    alert('account create ');
                    this.router.navigate(['/login']);
                }, err => {
                    console.log(err);
                });
            }
        }, err => {
            alert(err.message);
            console.log(err);
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__.FireserviceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-registro',
        template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroPage);



/***/ }),

/***/ 721:
/*!***************************************************************!*\
  !*** ./src/app/vistas/registro/registro.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\nion-content {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%),\n    url(\"/assets/comia.jpg\") no-repeat center center / cover;\n  padding: 0;\n  font-family: \"Varela Round\", sans-serif;\n}\n.login-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 35vh;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n}\n.login-section h1, .login-section p, .login-section h3 {\n  color: white;\n  margin: 0; /* Elimina los márgenes */\n  padding: 5px;\n  line-height: 1.2; /* Agrega un espaciado vertical adecuado */\n}\n.login-form {\n  background-color: #fff;\n  padding: 20px;\n  border-top-left-radius: 46px;\n  border-top-right-radius: 46px;\n  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);\n  margin-top: -20px;\n}\n.form-input {\n  position: relative;\n  margin-bottom: 20px;\n}\n.form-input ion-item {\n  padding-left: 0;\n}\n.form-input ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%);\n  font-size: 1.2rem;\n  color: black;\n}\n.form-input ion-label {\n  position: absolute;\n  left: 36px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: bold;\n  font-size: 0.8rem;\n  color: black;\n}\n.form-input ion-input {\n  --padding-start: 36px;\n  font-size: 0.9rem;\n  color: black;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.form-input ion-input[name=username]:not(:placeholder-shown) + ion-label {\n  display: none;\n}\n.action-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n.action-button ion-button {\n  width: 100%;\n  max-width: 300px;\n  margin-bottom: 10px;\n}\n.action-button p {\n  font-size: 0.8rem;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBUix3RkFBQTtBQUdSO0VBQ0U7NERBQUE7RUFFQSxVQUFBO0VBQ0EsdUNBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsU0FBQSxFQUFBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBLEVBQUEsMENBQUE7QUFBSjtBQUlBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUFERjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxlQUFBO0FBSE47QUFNSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUpOO0FBT0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBUUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQU5OO0FBUUk7RUFDRSxhQUFBO0FBTk47QUFXRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVVJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFSTjtBQVdJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBVE4iLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDUsIDU4LCAxMDYsIDEpIDAlLCByZ2JhKDE3LCAxNTIsIDIxMCwgMSkgMTAwJSksXHJcbiAgICB1cmwoXCIvYXNzZXRzL2NvbWlhLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubG9naW4tc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMzV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBcclxuICBoMSwgcCAsaDN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7IC8qIEVsaW1pbmEgbG9zIG3DoXJnZW5lcyAqL1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjsgLyogQWdyZWdhIHVuIGVzcGFjaWFkbyB2ZXJ0aWNhbCBhZGVjdWFkbyAqL1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NnB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmZvcm0taW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDM2cHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzNnB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dFtuYW1lPVwidXNlcm5hbWVcIl06bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBpb24tbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICBcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICBcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 5459:
/*!***************************************************************!*\
  !*** ./src/app/vistas/registro/registro.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <div class=\"logo-img ion-padding\">\r\n      <img src=\"assets\\icon\\logotipojunaexpres.png\" alt=\"\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"login-section ion-padding\">\r\n    <h1 class=\"ion-text-center\">Bienvenido!</h1>\r\n    <h3 class=\"ion-text-center\">Crea una tu cuenta junaExpress</h3>\r\n  </div>\r\n  <div class=\"login-form ion-padding\">\r\n    <div class=\"form-input\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" *ngIf=\"!username\">Nombre</ion-label>\r\n        <ion-input [(ngModel)]=\"username\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"form-input\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" *ngIf=\"!apellido\" >Apellido</ion-label>\r\n        <ion-input [(ngModel)]=\"apellido\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    \r\n    <div class=\"form-input\">\r\n      <ion-icon name=\"mail-outline\"></ion-icon>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" *ngIf=\"!email\">Email</ion-label>\r\n        <ion-input [(ngModel)]=\"email\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"form-input\">\r\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" *ngIf=\"!password\">Password</ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"action-button ion-padding\">\r\n      <ion-button size=\"large\" class=\"login-button\" fill=\"outline\" (click)=\"signup()\" >Registro</ion-button>\r\n      <ion-button size=\"large\" class=\"login-button\"  routerLink=\"/login\">Volver</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_registro_registro_module_ts.js.map