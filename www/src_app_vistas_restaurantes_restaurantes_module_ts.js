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
/* harmony import */ var C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _restaurantes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurantes.page.html?ngResource */ 3693);
/* harmony import */ var _restaurantes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurantes.page.scss?ngResource */ 7535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);







 // Importa uuidv4


let RestaurantesPage = class RestaurantesPage {
  constructor(db, afAuth, loadingController) {
    this.db = db;
    this.afAuth = afAuth;
    this.loadingController = loadingController;
  } //Función para generar un nuevo pedidoID


  generarPedidoID() {
    return (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } //agrega el pedido al carrito junto con sus id


  agregarAlCarrito(usuarioID, plato, restaurante) {
    const pedidoID = this.generarPedidoID(); // Crear un objeto con los detalles del plato

    const pedido = {
      platoID: plato.id,
      nombre: plato.nombre,
      imagen: plato.img,
      precio: plato.precio,
      restaurante: restaurante
    };
    const carritoItemRef = this.db.object(`CarritoPedidos/${usuarioID}/${pedidoID}`);
    carritoItemRef.update({
      Pedido: pedido
    }); // Modifica para que se almacene bajo "Pedido"

    console.log('ID del pedido:', pedidoID, 'Pedido:', pedido, 'user: ', usuarioID);
  } //obtiene el menu del restaurante seleccionado


  getMenuRestaurante(restauranteId) {
    var _this = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const restaurante = yield _this.restaurantes.find(rest => rest.id === restauranteId);

      if (restaurante) {
        _this.restauranteSeleccionado = restaurante.nombre;
        _this.menuRestaurante = restaurante.menu;
        _this.precioMenu = restaurante.precio;
        _this.isModalOpen = true; // Asegúrate de establecer el modal como abierto
      }
    })();
  }

  setOpen(isOpen) {
    this.isModalOpen = isOpen;
  }

  ionViewWillEnter() {
    var _this2 = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create({
        message: 'Cargando restaurantes...',
        duration: 1000 // Duración en milisegundos (ajusta según tus necesidades)

      });
      yield loading.present(); //Carga los elementos a listar

      _this2.db.list('restaurantes').valueChanges().subscribe(data => {
        _this2.restaurantes = data;
      });

      _this2.afAuth.authState.subscribe(user => {
        if (user) {
          _this2.uid = user.uid;
          console.log('uid usuario:', _this2.uid);
        }
      });
    })();
  }

  ngOnInit() {}

};

RestaurantesPage.ctorParameters = () => [{
  type: _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_4__.AngularFireDatabase
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}];

RestaurantesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-restaurantes',
  template: _restaurantes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_restaurantes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RestaurantesPage);


/***/ }),

/***/ 7816:
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bytesToUuid);

/***/ }),

/***/ 6421:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 2535:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 6421);
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ 7816);



function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || (0,_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 7535:
/*!***********************************************************************!*\
  !*** ./src/app/vistas/restaurantes/restaurantes.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-modal ion-card img {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n\nion-header ion-toolbar ion-avatar {\n  background: linear-gradient(315deg, rgb(5, 58, 106) 0%, rgb(17, 152, 210) 100%);\n  height: 30px;\n  width: 30px;\n}\n\n.avatar-title-container {\n  display: flex;\n  align-items: center; /* Centra verticalmente los elementos */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBSU07RUFDRSwrRUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRFI7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUEsRUFBQSx1Q0FBQTtBQUhKIiwiZmlsZSI6InJlc3RhdXJhbnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbW9kYWwgaW9uLWNhcmQgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBpb24taGVhZGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg1LCA1OCwgMTA2LCAxKSAwJSwgcmdiYSgxNywgMTUyLCAyMTAsIDEpIDEwMCUpLDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmF2YXRhci10aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRyYSB2ZXJ0aWNhbG1lbnRlIGxvcyBlbGVtZW50b3MgKi9cclxuICB9XHJcbiAgIl19 */";

/***/ }),

/***/ 3693:
/*!***********************************************************************!*\
  !*** ./src/app/vistas/restaurantes/restaurantes.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <div class=\"cont-ubicacion\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"auto\">\r\n          <ion-avatar>\r\n            <ion-buttons>\r\n              <img src=\"assets/icon/isotipo-gray.png\" alt=\"\">\r\n            </ion-buttons>\r\n          </ion-avatar>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-title mode=\"md\">\r\n            <ion-label>\r\n              <ion-text>Estás en</ion-text>\r\n              <p>\r\n                Santiago, Chile\r\n                <ion-icon color=\"dark\" name=\"chevron-down-outline\"></ion-icon>\r\n              </p>\r\n            </ion-label>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col size=\"auto\">\r\n          <ion-buttons>\r\n            <ion-button routerLink=\"/pedidos\">\r\n              <ion-badge slot=\"end\">&#9679;</ion-badge>\r\n              <ion-icon slot=\"icon-only\" name=\"cart\" color=\"dark\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"barra-busqueda ion-padding\">\r\n      <ion-searchbar show-clear-button=\"always\" clear-icon=\"close\" (ionChange)=\"getItems($event)\"></ion-searchbar>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngFor=\"let restaurante of restaurantes\">\r\n    <img [src]=\"restaurante.img\" alt=\"{{ restaurante.nombre }}\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{ restaurante.nombre }}</ion-card-title>\r\n      <ion-card-subtitle>{{ restaurante.especialidad }}</ion-card-subtitle>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      {{ restaurante.descripcion }}\r\n      <ion-button fill=\"clear\" expand=\"block\" (click)=\"getMenuRestaurante(restaurante.id)\">Ver menú</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <!-- Modal mmuestra menus restaurantes -->\r\n  <ion-modal [isOpen]=\"isModalOpen\">\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Menu - {{ restauranteSeleccionado?.nombre }}</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"setOpen(false)\">Cerrar</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-card *ngIf=\"restauranteSeleccionado && menuRestaurante && menuRestaurante.length > 0\">\r\n          <ion-card-content>\r\n            <div class=\"container-menu\">\r\n              <ion-list>\r\n                <ion-item *ngFor=\"let plato of menuRestaurante\">\r\n                  <div class=\"items-menu\">\r\n                    <img [src]=\"plato.img\" alt=\"{{ plato.nombre }}\">\r\n                    <ion-label><h2>{{ plato.nombre }}</h2></ion-label>\r\n                    <ion-label><p>{{ plato.info }}</p></ion-label>\r\n                    <ion-label> <p>Precio: {{ plato.precio }}</p></ion-label>\r\n                    <ion-button fill=\"clear\" (click)=\"agregarAlCarrito(uid, plato, restauranteSeleccionado)\">Agregar al Carrito</ion-button>\r\n                  </div>\r\n                </ion-item>\r\n              </ion-list>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <div *ngIf=\"!restauranteSeleccionado || (menuRestaurante && menuRestaurante.length === 0)\">\r\n          <p>No se ha encontrado menú para este restaurante.</p>\r\n        </div>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n</ion-content>\r\n\r\n\r\n<footer class=\"footer\">\r\n  <!-- ion tab -->\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"cuenta\" routerLink=\"/cuenta\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      Cuenta\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"menu\" routerLink=\"/menu-principal\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      Menú\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"Pedidos\" routerLink=\"/pedidos\">\r\n      <ion-icon name=\"pizza-outline\"></ion-icon>\r\n      Pedidos\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"restaurant\" routerLink=\"/restaurantes\">\r\n      <ion-icon name=\"restaurant-outline\"></ion-icon>\r\n      Restaurantes\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_restaurantes_restaurantes_module_ts.js.map