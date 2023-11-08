"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_configuracion_configuracion_module_ts"],{

/***/ 8672:
/*!**********************************************************************!*\
  !*** ./src/app/vistas/configuracion/configuracion-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracionPageRoutingModule": () => (/* binding */ ConfiguracionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracion.page */ 9663);




const routes = [
    {
        path: '',
        component: _configuracion_page__WEBPACK_IMPORTED_MODULE_0__.ConfiguracionPage
    }
];
let ConfiguracionPageRoutingModule = class ConfiguracionPageRoutingModule {
};
ConfiguracionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfiguracionPageRoutingModule);



/***/ }),

/***/ 793:
/*!**************************************************************!*\
  !*** ./src/app/vistas/configuracion/configuracion.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracionPageModule": () => (/* binding */ ConfiguracionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracion-routing.module */ 8672);
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracion.page */ 9663);







let ConfiguracionPageModule = class ConfiguracionPageModule {
};
ConfiguracionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfiguracionPageRoutingModule
        ],
        declarations: [_configuracion_page__WEBPACK_IMPORTED_MODULE_1__.ConfiguracionPage]
    })
], ConfiguracionPageModule);



/***/ }),

/***/ 9663:
/*!************************************************************!*\
  !*** ./src/app/vistas/configuracion/configuracion.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracionPage": () => (/* binding */ ConfiguracionPage)
/* harmony export */ });
/* harmony import */ var C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _configuracion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracion.page.html?ngResource */ 8462);
/* harmony import */ var _configuracion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuracion.page.scss?ngResource */ 323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);









let ConfiguracionPage = class ConfiguracionPage {
  constructor(fireservice, router, afAuth, alertController) {
    this.fireservice = fireservice;
    this.router = router;
    this.afAuth = afAuth;
    this.alertController = alertController;
  }

  ngOnInit() {} // Esta función se ejecuta cuando el usuario desea cerrar sesión.
  // Muestra un cuadro de diálogo de confirmación para asegurarse de que el usuario desea cerrar sesión.


  logout() {
    var _this = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Cerrar Sesión',
        message: '¿Está seguro de que desea cerrar sesión?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {// Cancelar la acción
          }
        }, {
          text: 'Cerrar Sesión',
          handler: function () {
            var _ref = (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              try {
                yield _this.fireservice.signOut();

                _this.router.navigate(['/login']);

                _this.userEmail = '';
                _this.creationTime = '';
              } catch (err) {
                console.error(err);
              }
            });

            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }]
      });
      yield alert.present();
    })();
  }

};

ConfiguracionPage.ctorParameters = () => [{
  type: src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_3__.FireserviceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

ConfiguracionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-configuracion',
  template: _configuracion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_configuracion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ConfiguracionPage);


/***/ }),

/***/ 323:
/*!*************************************************************************!*\
  !*** ./src/app/vistas/configuracion/configuracion.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmFjaW9uLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8462:
/*!*************************************************************************!*\
  !*** ./src/app/vistas/configuracion/configuracion.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-back-button slot=\"start\"></ion-back-button>\r\n    <ion-title>Configuracion</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Video Games</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Modo noche\r\n      </ion-label>\r\n      <ion-toggle slot=\"end\" [checked]=\"true\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Mega Man X</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>The Legend of Zelda</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Pac-Man</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Super Mario World</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-button expand=\"block\" (click)=\"logout()\" color=\"danger\" fill=\"outline\">Cerrar sesión</ion-button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_configuracion_configuracion_module_ts.js.map