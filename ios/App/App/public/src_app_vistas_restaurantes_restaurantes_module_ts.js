"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_restaurantes_restaurantes_module_ts"],{

/***/ 421:
/*!********************************************************************!*\
  !*** ./src/app/vistas/restaurantes/restaurantes-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantesPageRoutingModule": () => (/* binding */ RestaurantesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _restaurantes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurantes.page */ 7239);




const routes = [
    {
        path: '',
        component: _restaurantes_page__WEBPACK_IMPORTED_MODULE_0__.RestaurantesPage
    }
];
let RestaurantesPageRoutingModule = class RestaurantesPageRoutingModule {
};
RestaurantesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RestaurantesPageRoutingModule);



/***/ }),

/***/ 6633:
/*!************************************************************!*\
  !*** ./src/app/vistas/restaurantes/restaurantes.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantesPageModule": () => (/* binding */ RestaurantesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _restaurantes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurantes-routing.module */ 421);
/* harmony import */ var _restaurantes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurantes.page */ 7239);







let RestaurantesPageModule = class RestaurantesPageModule {
};
RestaurantesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _restaurantes_routing_module__WEBPACK_IMPORTED_MODULE_0__.RestaurantesPageRoutingModule
        ],
        declarations: [_restaurantes_page__WEBPACK_IMPORTED_MODULE_1__.RestaurantesPage]
    })
], RestaurantesPageModule);



/***/ }),

/***/ 7239:
/*!**********************************************************!*\
  !*** ./src/app/vistas/restaurantes/restaurantes.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantesPage": () => (/* binding */ RestaurantesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _restaurantes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurantes.page.html?ngResource */ 3693);
/* harmony import */ var _restaurantes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurantes.page.scss?ngResource */ 7535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let RestaurantesPage = class RestaurantesPage {
    constructor() { }
    ngOnInit() {
    }
};
RestaurantesPage.ctorParameters = () => [];
RestaurantesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-restaurantes',
        template: _restaurantes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_restaurantes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RestaurantesPage);



/***/ }),

/***/ 7535:
/*!***********************************************************************!*\
  !*** ./src/app/vistas/restaurantes/restaurantes.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN0YXVyYW50ZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3693:
/*!***********************************************************************!*\
  !*** ./src/app/vistas/restaurantes/restaurantes.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>restaurantes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_restaurantes_restaurantes_module_ts.js.map