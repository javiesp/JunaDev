"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_carrito-compras_carrito-compras_module_ts"],{

/***/ 7416:
/*!**************************************************************************!*\
  !*** ./src/app/vistas/carrito-compras/carrito-compras-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoComprasPageRoutingModule": () => (/* binding */ CarritoComprasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _carrito_compras_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito-compras.page */ 6130);




const routes = [
    {
        path: '',
        component: _carrito_compras_page__WEBPACK_IMPORTED_MODULE_0__.CarritoComprasPage
    }
];
let CarritoComprasPageRoutingModule = class CarritoComprasPageRoutingModule {
};
CarritoComprasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarritoComprasPageRoutingModule);



/***/ }),

/***/ 6589:
/*!******************************************************************!*\
  !*** ./src/app/vistas/carrito-compras/carrito-compras.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoComprasPageModule": () => (/* binding */ CarritoComprasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _carrito_compras_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito-compras-routing.module */ 7416);
/* harmony import */ var _carrito_compras_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrito-compras.page */ 6130);







let CarritoComprasPageModule = class CarritoComprasPageModule {
};
CarritoComprasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _carrito_compras_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarritoComprasPageRoutingModule
        ],
        declarations: [_carrito_compras_page__WEBPACK_IMPORTED_MODULE_1__.CarritoComprasPage]
    })
], CarritoComprasPageModule);



/***/ }),

/***/ 6130:
/*!****************************************************************!*\
  !*** ./src/app/vistas/carrito-compras/carrito-compras.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoComprasPage": () => (/* binding */ CarritoComprasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _carrito_compras_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito-compras.page.html?ngResource */ 1872);
/* harmony import */ var _carrito_compras_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrito-compras.page.scss?ngResource */ 9716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CarritoComprasPage = class CarritoComprasPage {
    constructor() { }
    ngOnInit() {
    }
};
CarritoComprasPage.ctorParameters = () => [];
CarritoComprasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-carrito-compras',
        template: _carrito_compras_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_carrito_compras_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarritoComprasPage);



/***/ }),

/***/ 9716:
/*!*****************************************************************************!*\
  !*** ./src/app/vistas/carrito-compras/carrito-compras.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJyaXRvLWNvbXByYXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1872:
/*!*****************************************************************************!*\
  !*** ./src/app/vistas/carrito-compras/carrito-compras.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>carritoCompras</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_carrito-compras_carrito-compras_module_ts.js.map