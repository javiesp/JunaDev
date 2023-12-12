"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_seguimiento-pedido_seguimiento-pedido_module_ts"],{

/***/ 7628:
/*!********************************************************************************!*\
  !*** ./src/app/vistas/seguimiento-pedido/seguimiento-pedido-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguimientoPedidoPageRoutingModule": () => (/* binding */ SeguimientoPedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _seguimiento_pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguimiento-pedido.page */ 9955);




const routes = [
    {
        path: '',
        component: _seguimiento_pedido_page__WEBPACK_IMPORTED_MODULE_0__.SeguimientoPedidoPage
    }
];
let SeguimientoPedidoPageRoutingModule = class SeguimientoPedidoPageRoutingModule {
};
SeguimientoPedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeguimientoPedidoPageRoutingModule);



/***/ }),

/***/ 6751:
/*!************************************************************************!*\
  !*** ./src/app/vistas/seguimiento-pedido/seguimiento-pedido.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguimientoPedidoPageModule": () => (/* binding */ SeguimientoPedidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _seguimiento_pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguimiento-pedido-routing.module */ 7628);
/* harmony import */ var _seguimiento_pedido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seguimiento-pedido.page */ 9955);







let SeguimientoPedidoPageModule = class SeguimientoPedidoPageModule {
};
SeguimientoPedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _seguimiento_pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeguimientoPedidoPageRoutingModule
        ],
        declarations: [_seguimiento_pedido_page__WEBPACK_IMPORTED_MODULE_1__.SeguimientoPedidoPage]
    })
], SeguimientoPedidoPageModule);



/***/ }),

/***/ 9955:
/*!**********************************************************************!*\
  !*** ./src/app/vistas/seguimiento-pedido/seguimiento-pedido.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguimientoPedidoPage": () => (/* binding */ SeguimientoPedidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _seguimiento_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguimiento-pedido.page.html?ngResource */ 5775);
/* harmony import */ var _seguimiento_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seguimiento-pedido.page.scss?ngResource */ 9139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let SeguimientoPedidoPage = class SeguimientoPedidoPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    valor() {
        this.router.navigate(['/valor-r']); // Redirige a la página de registro
    }
};
SeguimientoPedidoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SeguimientoPedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-seguimiento-pedido',
        template: _seguimiento_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_seguimiento_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeguimientoPedidoPage);



/***/ }),

/***/ 9139:
/*!***********************************************************************************!*\
  !*** ./src/app/vistas/seguimiento-pedido/seguimiento-pedido.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  width: 80%;\n  max-width: 400px;\n  margin: 5px auto;\n}\n\nion-card-header {\n  text-align: center;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 15px 0;\n  background-color: #3498db;\n  color: white;\n}\n\nion-card-content {\n  padding: 15px;\n}\n\n.status-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.status-marker {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.status-marker span {\n  font-size: 10px;\n  display: none;\n  position: absolute;\n  bottom: -25px;\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\n.in-preparation {\n  background-color: #f1c40f;\n}\n\n.in-transit {\n  background-color: #e67e22;\n}\n\n.delivered {\n  background-color: #2ecc71;\n}\n\n.status-marker.active {\n  border-color: #3498db;\n  color: #3498db;\n}\n\n.status-marker.active span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZ3VpbWllbnRvLXBlZGlkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0oiLCJmaWxlIjoic2VndWltaWVudG8tcGVkaWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzLWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy1tYXJrZXIge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy1tYXJrZXIgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMjVweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbi1wcmVwYXJhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xyXG4gIH1cclxuICBcclxuICAuaW4tdHJhbnNpdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gIH1cclxuICBcclxuICAuZGVsaXZlcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtbWFya2VyLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XHJcbiAgICBjb2xvcjogIzM0OThkYjtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy1tYXJrZXIuYWN0aXZlIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 5775:
/*!***********************************************************************************!*\
  !*** ./src/app/vistas/seguimiento-pedido/seguimiento-pedido.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Valorar Restaurantes</ion-title>\r\n    <ion-buttons>\r\n      <ion-back-button>\r\n       <ion-title>Volver</ion-title>\r\n     </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      Seguimiento de Pedido\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div class=\"status-bar\">\r\n        <div class=\"status-marker in-preparation\">\r\n          <span>En Preparación</span>\r\n        </div>\r\n        <div class=\"status-marker in-transit\">\r\n          <span>En Camino</span>\r\n        </div>\r\n        <div class=\"status-marker delivered\">\r\n          <span>Llegó a Destino</span>\r\n        </div>\r\n      </div>\r\n    </ion-card-content>\r\n    <ion-button \r\n    expand=\"block\" \r\n    class=\"ion-margin\" \r\n    color=\"secondary\"\r\n    (click)=\"valor()\">Valorar restaurantes\r\n    </ion-button>\r\n  </ion-card>\r\n\r\n  \r\n\r\n</ion-content>\r\n\r\n<footer class=\"footer\">\r\n  <!-- ion tab -->\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"cuenta\" routerLink=\"/cuenta\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      Cuenta\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"menu\" routerLink=\"/menu-principal\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      Menú\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"Pedidos\" routerLink=\"/pedidos\">\r\n      <ion-icon name=\"pizza-outline\"></ion-icon>\r\n      Pedidos\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"restaurant\" routerLink=\"/restaurantes\">\r\n      <ion-icon name=\"restaurant-outline\"></ion-icon>\r\n      Restaurantes\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_seguimiento-pedido_seguimiento-pedido_module_ts.js.map