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
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracion.page */ 3066);




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
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracion.page */ 3066);







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

/***/ 3066:
/*!************************************************************!*\
  !*** ./src/app/vistas/configuracion/configuracion.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracionPage": () => (/* binding */ ConfiguracionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _configuracion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracion.page.html?ngResource */ 8462);
/* harmony import */ var _configuracion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracion.page.scss?ngResource */ 323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ConfiguracionPage = class ConfiguracionPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfiguracionPage.ctorParameters = () => [];
ConfiguracionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-configuracion',
        template: _configuracion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_configuracion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfiguracionPage);



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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>configuracion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_configuracion_configuracion_module_ts.js.map