"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_usuario_usuario_module_ts"],{

/***/ 4942:
/*!**********************************************************!*\
  !*** ./src/app/vistas/usuario/usuario-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioPageRoutingModule": () => (/* binding */ UsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario.page */ 9249);




const routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_0__.UsuarioPage
    }
];
let UsuarioPageRoutingModule = class UsuarioPageRoutingModule {
};
UsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsuarioPageRoutingModule);



/***/ }),

/***/ 6735:
/*!**************************************************!*\
  !*** ./src/app/vistas/usuario/usuario.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioPageModule": () => (/* binding */ UsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario-routing.module */ 4942);
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.page */ 9249);







let UsuarioPageModule = class UsuarioPageModule {
};
UsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuarioPageRoutingModule
        ],
        declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_1__.UsuarioPage]
    })
], UsuarioPageModule);



/***/ }),

/***/ 9249:
/*!************************************************!*\
  !*** ./src/app/vistas/usuario/usuario.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioPage": () => (/* binding */ UsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario.page.html?ngResource */ 8454);
/* harmony import */ var _usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.page.scss?ngResource */ 9347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let UsuarioPage = class UsuarioPage {
    constructor() { }
    ngOnInit() {
    }
};
UsuarioPage.ctorParameters = () => [];
UsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-usuario',
        template: _usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsuarioPage);



/***/ }),

/***/ 9347:
/*!*************************************************************!*\
  !*** ./src/app/vistas/usuario/usuario.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3VhcmlvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8454:
/*!*************************************************************!*\
  !*** ./src/app/vistas/usuario/usuario.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>usuario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_usuario_usuario_module_ts.js.map