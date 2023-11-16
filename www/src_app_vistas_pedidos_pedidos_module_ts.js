"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_pedidos_pedidos_module_ts"],{

/***/ 3036:
/*!**********************************************************!*\
  !*** ./src/app/vistas/pedidos/pedidos-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosPageRoutingModule": () => (/* binding */ PedidosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedidos.page */ 620);




const routes = [
    {
        path: '',
        component: _pedidos_page__WEBPACK_IMPORTED_MODULE_0__.PedidosPage
    }
];
let PedidosPageRoutingModule = class PedidosPageRoutingModule {
};
PedidosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PedidosPageRoutingModule);



/***/ }),

/***/ 1922:
/*!**************************************************!*\
  !*** ./src/app/vistas/pedidos/pedidos.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosPageModule": () => (/* binding */ PedidosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedidos-routing.module */ 3036);
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedidos.page */ 620);







let PedidosPageModule = class PedidosPageModule {
};
PedidosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_0__.PedidosPageRoutingModule
        ],
        declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_1__.PedidosPage]
    })
], PedidosPageModule);



/***/ }),

/***/ 620:
/*!************************************************!*\
  !*** ./src/app/vistas/pedidos/pedidos.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosPage": () => (/* binding */ PedidosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pedidos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedidos.page.html?ngResource */ 8410);
/* harmony import */ var _pedidos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedidos.page.scss?ngResource */ 5534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);






let PedidosPage = class PedidosPage {
    constructor(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
        this.pedidos = [];
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.uid = user.uid;
                this.obtenerPedidosUsuario(this.uid);
            }
        });
    }
    ngOnInit() { }
    //Funcion que captura los pedidos del cliente y los lista en el carrito 
    obtenerPedidosUsuario(uid) {
        this.db.object(`CarritoPedidos/${uid}`).valueChanges().subscribe((data) => {
            if (data) {
                this.pedidos = Object.values(data);
                console.log('Pedidos:', this.pedidos);
            }
            else {
                console.log('No se recibieron datos.');
            }
        });
    }
    //Funcion para obtener json con descuentos 
    obtenerCodigoDescuento(codigo) {
        this.db.object(`CodigoDescuentos/${codigo}`).valueChanges().subscribe((data) => {
            if (data && data.Codigo) {
                this.codigo = data.Codigo; // Asigna el código de descuento a this.codigo
                console.log('Código de descuento:', this.codigo);
            }
            else {
                console.log('No se recibieron datos o no se encontró el código de descuento.');
            }
        });
    }
    //Elimina pedido de carrito de compra
    eliminarPedidosDelUsuario(usuarioID) {
        this.db.object(`CarritoPedidos/${usuarioID}`).remove()
            .then(() => {
            console.log('Pedidos del usuario eliminados exitosamente.');
            this.pedidos = []; // Limpiar la lista después de eliminar
        })
            .catch((error) => {
            console.error('Error al eliminar los pedidos del usuario:', error);
        });
    }
    //Calcula el total de la compra sumando los precios del carrito 
    calcularTotal() {
        let total = 0;
        if (this.pedidos && this.pedidos.length > 0) {
            this.pedidos.forEach((pedido) => {
                total += pedido?.Pedido?.precio || 0; // Suma el precio del pedido al total
            });
        }
        return total;
    }
};
PedidosPage.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth },
    { type: _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase }
];
PedidosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pedidos',
        template: _pedidos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pedidos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PedidosPage);



/***/ }),

/***/ 5534:
/*!*************************************************************!*\
  !*** ./src/app/vistas/pedidos/pedidos.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG9zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8410:
/*!*************************************************************!*\
  !*** ./src/app/vistas/pedidos/pedidos.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Pedidos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngFor=\"let pedido of pedidos\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{ pedido.Pedido.restaurante }}</ion-card-title>\r\n      <ion-card-subtitle>{{ pedido.Pedido.nombre }}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label>Precio: {{ pedido.Pedido.precio }}</ion-label>\r\n        <img [src]=\"pedido.Pedido.imagen\" alt=\"{{ pedido.Pedido.nombre }}\" style=\"width: 60px; height: 60px; border-radius: 10%;\">\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-item>\r\n    Total: {{ calcularTotal() }}\r\n  </ion-item>\r\n\r\n  <ion-buttons>\r\n    <ion-button (click)=\"eliminarPedidosDelUsuario(uid)\" color=\"danger\">\r\n      Cancelar compra\r\n      <ion-icon name=\"close-outline\" slot=\"end\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button routerLink=\"/home\">\r\n      pagar\r\n      <ion-icon name=\"card-outline\" slot=\"end\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n<footer class=\"footer\">\r\n  <!-- ion tab -->\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"cuenta\" routerLink=\"/cuenta\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      Cuenta\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"menu\" routerLink=\"/menu-principal\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      Menú\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"Pedidos\" routerLink=\"/pedidos\">\r\n      <ion-icon name=\"pizza-outline\"></ion-icon>\r\n      Pedidos\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"restaurant\" routerLink=\"/restaurantes\">\r\n      <ion-icon name=\"restaurant-outline\"></ion-icon>\r\n      Restaurantes\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_pedidos_pedidos_module_ts.js.map