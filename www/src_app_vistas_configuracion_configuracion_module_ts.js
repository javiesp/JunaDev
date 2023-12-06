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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _configuracion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracion.page.html?ngResource */ 8462);
/* harmony import */ var _configuracion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuracion.page.scss?ngResource */ 323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_servicios_fireservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/fireservice.service */ 944);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_servicios_gmaps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/gmaps.service */ 5953);
/* harmony import */ var src_app_servicios_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/data.service */ 625);











let ConfiguracionPage = class ConfiguracionPage {
  constructor(dataService, fireservice, router, afAuth, alertController, gmaps, renderer, actionSheetCtrl) {
    this.dataService = dataService;
    this.fireservice = fireservice;
    this.router = router;
    this.afAuth = afAuth;
    this.alertController = alertController;
    this.gmaps = gmaps;
    this.renderer = renderer;
    this.actionSheetCtrl = actionSheetCtrl;
    this.modoNocturno = false;
    this.center = {
      lat: -33.59792458336969,
      lng: -70.70543417692222
    };
    this.markers = [];
  }

  toggleTheme(event) {
    this.modoNocturno = event.detail.checked;
    document.body.setAttribute('color-theme', this.modoNocturno ? 'dark' : 'light');
  } // Función para determinar la clase CSS según el modo nocturno


  getLinkClass() {
    return this.modoNocturno ? 'link-nocturno' : 'link-diurno';
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.cargarGMap();
  } // Esta función se ejecuta cuando el usuario desea cerrar sesión.
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

  cargarGMap() {
    var _this2 = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let googleMaps = yield _this2.gmaps.loadGoogleMaps();
        _this2.googleMaps = googleMaps;
        const mapEl = _this2.mapElementRef.nativeElement;
        const location = new googleMaps.LatLng(_this2.center.lat, _this2.center.lng);
        _this2.map = new googleMaps.Map(mapEl, {
          center: location,
          zoom: 12
        });

        _this2.renderer.addClass(mapEl, 'visible');

        _this2.addMarker(location);

        _this2.onMapClick();
      } catch (e) {
        console.log(e);
      }
    })();
  }

  onMapClick() {
    this.mapClickListener = this.googleMaps.event.addListener(this.map, "click", mapsMouseEvent => {
      console.log(mapsMouseEvent.latLng.toJSON());
      this.addMarker(mapsMouseEvent.latLng);
    });
  }

  addMarker(location) {
    let googleMaps = this.googleMaps;
    const icon = {
      url: 'assets/icon/isotipo.png',
      scaledSize: new googleMaps.Size(50, 50)
    };
    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      // draggable: true,
      animation: googleMaps.Animation.DROP
    });
    this.markers.push(marker); // this.presentActionSheet();

    this.markerClickListener = this.googleMaps.event.addListener(marker, 'click', () => {
      console.log('markerclick', marker);
      this.checkAndRemoveMarker(marker);
      console.log('markers: ', this.markers);
    });
  }

  checkAndRemoveMarker(marker) {
    const index = this.markers.findIndex(x => x.position.lat() == marker.position.lat() && x.position.lng() == marker.position.lng());
    console.log('is marker already: ', index);

    if (index >= 0) {
      this.markers[index].setMap(null);
      this.markers.splice(index, 1);
      return;
    }
  }

  presentActionSheet() {
    var _this3 = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this3.actionSheetCtrl.create({
        header: 'Added Marker',
        subHeader: '',
        buttons: [{
          text: 'Remove',
          role: 'destructive',
          data: {
            action: 'delete'
          }
        }, {
          text: 'Save',
          data: {
            action: 'share'
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        }]
      });
      yield actionSheet.present();
    })();
  }

  ngOnDestroy() {
    // this.googleMaps.event.removeAllListeners();
    if (this.mapClickListener) this.googleMaps.event.removeListener(this.mapClickListener);
    if (this.markerClickListener) this.googleMaps.event.removeListener(this.markerClickListener);
  }

};

ConfiguracionPage.ctorParameters = () => [{
  type: src_app_servicios_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService
}, {
  type: src_app_servicios_fireservice_service__WEBPACK_IMPORTED_MODULE_3__.FireserviceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: src_app_servicios_gmaps_service__WEBPACK_IMPORTED_MODULE_4__.GmapsService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController
}];

ConfiguracionPage.propDecorators = {
  mapElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['map', {
      static: true
    }]
  }]
};
ConfiguracionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

module.exports = ".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.map.visible {\n  opacity: 1;\n}\n\nion-content.modo-nocturno {\n  background-color: #333;\n  color: #fff;\n}\n\nion-content .link-diurno {\n  color: black;\n}\n\nion-content .link-nocturno {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBS0k7RUFFRSxzQkFBQTtFQUNBLFdBQUE7QUFITjs7QUFPSTtFQUNFLFlBQUE7QUFMTjs7QUFRSTtFQUNFLFlBQUE7QUFOTiIsImZpbGUiOiJjb25maWd1cmFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLm1hcC52aXNpYmxle1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gRXN0aWxvcyBjb211bmVzIGFxdcOtLi4uXHJcblxyXG4gICAgJi5tb2RvLW5vY3R1cm5vIHtcclxuICAgICAgLy8gRXN0aWxvcyBlc3BlY8OtZmljb3MgcGFyYSBlbCBtb2RvIG5vY3R1cm5vIGFxdcOtLi4uXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8vIEVqZW1wbG86IGZvbmRvIG9zY3VybyBlbiBtb2RvIG5vY3R1cm5vXHJcbiAgICAgIGNvbG9yOiAjZmZmOyAvLyBFamVtcGxvOiB0ZXh0byBibGFuY28gZW4gbW9kbyBub2N0dXJub1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmluaWNpw7NuIGRlIGNsYXNlcyBwYXJhIGVubGFjZXNcclxuICAgIC5saW5rLWRpdXJubyB7XHJcbiAgICAgIGNvbG9yOiBibGFjazsgLy8gRXN0aWxvcyBkZSBlbmxhY2VzIGVuIG1vZG8gZGl1cm5vXHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmstbm9jdHVybm8ge1xyXG4gICAgICBjb2xvcjogd2hpdGU7IC8vIEVzdGlsb3MgZGUgZW5sYWNlcyBlbiBtb2RvIG5vY3R1cm5vXHJcbiAgICB9XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 8462:
/*!*************************************************************************!*\
  !*** ./src/app/vistas/configuracion/configuracion.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-back-button slot=\"start\"></ion-back-button>\r\n    <ion-title>Configuración</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [class.modo-nocturno]=\"modoNocturno\">\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Modo noche</ion-label>\r\n      <ion-toggle slot=\"end\" (ionChange)=\"toggleTheme($event)\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Cuenta</ion-label>\r\n      <ion-router-link [class]=\"getLinkClass()\" routerLink=\"/restaurantes\">Idioma</ion-router-link>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-router-link [class]=\"getLinkClass()\" routerLink=\"/restaurantes\">Acerca de</ion-router-link>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-router-link [class]=\"getLinkClass()\" routerLink=\"/restaurantes\">Actualización de la app</ion-router-link>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-button expand=\"block\" (click)=\"logout()\" color=\"danger\" fill=\"outline\">Cerrar sesión</ion-button>\r\n\r\n  <div class=\"map\" #map>\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_configuracion_configuracion_module_ts.js.map