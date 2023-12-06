"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_menu-principal_menu-principal_module_ts"],{

/***/ 8983:
/*!************************************************************************!*\
  !*** ./src/app/vistas/menu-principal/menu-principal-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPrincipalPageRoutingModule": () => (/* binding */ MenuPrincipalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-principal.page */ 8565);




const routes = [
    {
        path: '',
        component: _menu_principal_page__WEBPACK_IMPORTED_MODULE_0__.MenuPrincipalPage
    }
];
let MenuPrincipalPageRoutingModule = class MenuPrincipalPageRoutingModule {
};
MenuPrincipalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPrincipalPageRoutingModule);



/***/ }),

/***/ 6144:
/*!****************************************************************!*\
  !*** ./src/app/vistas/menu-principal/menu-principal.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPrincipalPageModule": () => (/* binding */ MenuPrincipalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-principal-routing.module */ 8983);
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-principal.page */ 8565);







let MenuPrincipalPageModule = class MenuPrincipalPageModule {
};
MenuPrincipalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPrincipalPageRoutingModule
        ],
        declarations: [_menu_principal_page__WEBPACK_IMPORTED_MODULE_1__.MenuPrincipalPage]
    })
], MenuPrincipalPageModule);



/***/ }),

/***/ 8565:
/*!**************************************************************!*\
  !*** ./src/app/vistas/menu-principal/menu-principal.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPrincipalPage": () => (/* binding */ MenuPrincipalPage)
/* harmony export */ });
/* harmony import */ var C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_principal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-principal.page.html?ngResource */ 7304);
/* harmony import */ var _menu_principal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-principal.page.scss?ngResource */ 2069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var src_app_servicios_gmaps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/gmaps.service */ 5953);











let MenuPrincipalPage = class MenuPrincipalPage {
  constructor(router, loadingController, db, afAuth, gmaps, renderer, actionSheetCtrl) {
    this.router = router;
    this.loadingController = loadingController;
    this.db = db;
    this.afAuth = afAuth;
    this.gmaps = gmaps;
    this.renderer = renderer;
    this.actionSheetCtrl = actionSheetCtrl;
    this.restaurantes = [];
    this.center = {
      lat: -33.59792458336969,
      lng: -70.70543417692222
    };
    this.markers = [];
  }

  ngOnDestroy() {
    throw new Error('Method not implemented.');
    if (this.mapClickListener) this.googleMaps.event.removeListener(this.mapClickListener);
    if (this.markerClickListener) this.googleMaps.event.removeListener(this.markerClickListener);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.cargarGMap();
  } //Funcion para mostrar los tipos de restarantes


  getMenuRestaurante(restauranteId) {
    const restaurante = this.restaurantes.find(rest => rest.id === restauranteId);

    if (restaurante) {
      this.restauranteSeleccionado = restaurante.nombre;
      this.menuRestaurante = restaurante.menu;
    }
  }

  ionViewWillEnter() {
    var _this = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Cargando, espere un momento...',
        duration: 500 // Duración en milisegundos (ajusta según tus necesidades)

      });
      yield loading.present(); //Carga los elementos a listar

      _this.db.list('restaurantes').valueChanges().subscribe(data => {
        _this.restaurantes = data;
      });
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

};

MenuPrincipalPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
}, {
  type: src_app_servicios_gmaps_service__WEBPACK_IMPORTED_MODULE_3__.GmapsService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController
}];

MenuPrincipalPage.propDecorators = {
  mapElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['map', {
      static: true
    }]
  }]
};
MenuPrincipalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-menu-principal',
  template: _menu_principal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_menu_principal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MenuPrincipalPage);


/***/ }),

/***/ 2069:
/*!***************************************************************************!*\
  !*** ./src/app/vistas/menu-principal/menu-principal.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\nion-header ion-toolbar ion-avatar {\n  background: linear-gradient(315deg, rgb(5, 58, 106) 0%, rgb(17, 152, 210) 100%);\n  height: 30px;\n  width: 30px;\n}\n.avatar-title-container {\n  display: flex;\n  align-items: center; /* Centra verticalmente los elementos */\n}\nion-content {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%),\n    url(\"/assets/comia.jpg\") no-repeat center center / cover;\n  padding: 0;\n  font-family: \"Varela Round\", sans-serif;\n}\nion-list {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%), ;\n}\n.image-container img {\n  border-radius: 10px; /* Borde redondeado, ajusta el valor según tu preferencia */\n}\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  text-align: center;\n}\n/* swiper slides */\nswiper-container {\n  --swiper-pagination-bullet-inactive-color: var(--ion-color-step-200, #cccccc);\n  --swiper-pagination-color: var(--ion-color-primary, #3880ff);\n  --swiper-pagination-progressbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);\n  --swiper-scrollbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);\n}\nswiper-slide {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  text-align: center;\n  box-sizing: border-box;\n}\nswiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 15px;\n}\n.topic {\n  margin-left: 10px;\n  font-weight: bold;\n  color: #cccccc;\n}\n.slide-comidas img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  border-radius: 10px;\n}\n.slide-comidas ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n}\nion-label {\n  font-weight: bold;\n  font-size: 18px;\n  margin-top: 10px;\n  color: #cccccc;\n}\n.container-rest {\n  display: flez;\n}\n.container-rest img {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n.banda-etiquetas img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  border-radius: 10px;\n}\n.map {\n  position: absolute;\n  height: 50%;\n  width: 40vh;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  border-radius: 20px;\n  margin: 26px;\n}\n.map.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtcHJpbmNpcGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFVjtFQUNFLCtFQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBUjtBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBLEVBQUEsdUNBQUE7QUFGSjtBQU1FO0VBQ0k7NERBQUE7RUFFQSxVQUFBO0VBQ0EsdUNBQUE7QUFITjtBQU1FO0VBQ0ksMkZBQUE7QUFITjtBQUtFO0VBQ0UsbUJBQUEsRUFBQSwyREFBQTtBQUZKO0FBTUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFRRSxrQkFBQTtBQUVBO0VBQ0UsNkVBQUE7RUFDQSw0REFBQTtFQUNBLHdGQUFBO0VBQ0EsMEVBQUE7RUFDQSwrRUFBQTtBQU5KO0FBU0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQVZKO0FBYUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWFFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFWSjtBQWFFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVZKO0FBYUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFWSjtBQWFBO0VBQ0UsYUFBQTtBQVZGO0FBYUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBVkY7QUFhQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBVkY7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVZGO0FBYUE7RUFDRSxVQUFBO0FBVkYiLCJmaWxlIjoibWVudS1wcmluY2lwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoNSwgNTgsIDEwNiwgMSkgMCUsIHJnYmEoMTcsIDE1MiwgMjEwLCAxKSAxMDAlKSw7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hdmF0YXItdGl0bGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50cmEgdmVydGljYWxtZW50ZSBsb3MgZWxlbWVudG9zICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDUsIDU4LCAxMDYsIDEpIDAlLCByZ2JhKDE3LCAxNTIsIDIxMCwgMSkgMTAwJSksXHJcbiAgICAgICAgdXJsKFwiL2Fzc2V0cy9jb21pYS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gIFxyXG4gIGlvbi1saXN0e1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoNSwgNTgsIDEwNiwgMSkgMCUsIHJnYmEoMTcsIDE1MiwgMjEwLCAxKSAxMDAlKSxcclxuICB9XHJcbiAgLmltYWdlLWNvbnRhaW5lciBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogQm9yZGUgcmVkb25kZWFkbywgYWp1c3RhIGVsIHZhbG9yIHNlZ8O6biB0dSBwcmVmZXJlbmNpYSAqL1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogc3dpcGVyIHNsaWRlcyAqL1xyXG4gIFxyXG4gIHN3aXBlci1jb250YWluZXIge1xyXG4gICAgLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2NjY2NjYyk7XHJcbiAgICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XHJcbiAgICAtLXN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWJnLWNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMjUpO1xyXG4gICAgLS1zd2lwZXItc2Nyb2xsYmFyLWJnLWNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMSk7XHJcbiAgICAtLXN3aXBlci1zY3JvbGxiYXItZHJhZy1iZy1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjUpO1xyXG4gIH1cclxuICBcclxuICBzd2lwZXItc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHg7IFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BpYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGUtY29taWRhcyBpbWd7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLWNvbWlkYXMgaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIGZvbnQtc2l6ZTogMThweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuXHJcbi5jb250YWluZXItcmVzdHtcclxuICBkaXNwbGF5OiBmbGV6O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXJlc3QgaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5iYW5kYS1ldGlxdWV0YXMgaW1ne1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDEwcHg7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA0MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWFyZ2luOiAyNnB4O1xyXG59XHJcblxyXG4ubWFwLnZpc2libGV7XHJcbiAgb3BhY2l0eTogMTtcclxufSJdfQ== */";

/***/ }),

/***/ 7304:
/*!***************************************************************************!*\
  !*** ./src/app/vistas/menu-principal/menu-principal.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <div class=\"cont-ubicacion\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"auto\">\r\n          <ion-avatar>\r\n            <ion-buttons>\r\n              <img src=\"\" alt=\"\">\r\n            </ion-buttons>\r\n          </ion-avatar>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-title mode=\"md\">\r\n            <ion-label>\r\n              <ion-text>Estás en</ion-text>\r\n              <p>\r\n                Santiago, Chile\r\n                <ion-icon color=\"dark\" name=\"location-outline\"></ion-icon>\r\n              </p>\r\n            </ion-label>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col size=\"auto\">\r\n          <ion-buttons>\r\n            <ion-button routerLink=\"/pedidos\">\r\n              <ion-badge slot=\"end\">&#9679;</ion-badge>\r\n              <ion-icon slot=\"icon-only\" name=\"cart\" color=\"dark\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"barra-busqueda ion-padding\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div class=\"container-img\">\r\n    <div class=\"banda-promos\">\r\n      <img src=\"assets/icon/1.jpg\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"banda-etiquetas\">\r\n      <div class=\"topic\" style=\"text-align: center; margin-top: 20px;\">\r\n        <strong>¿Qué te gustaría ordenar?</strong>\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row style=\"margin-bottom: 50px;\">\r\n          <ion-col size=\"4\">\r\n            <img src=\"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png\" alt=\"Pizza\" width=\"400px\" height=\"400px\">\r\n            <ion-label style=\"margin-left: 45px;\">Burger</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <img src=\"https://static.vecteezy.com/system/resources/previews/024/725/117/non_2x/pizza-pizza-pizza-with-transparent-background-ai-generated-free-png.png\" alt=\"Hamburguesa\" width=\"400px\" height=\"600px\">\r\n            <ion-label style=\"margin-left: 45px;\">Pizza</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <img src=\"https://assets.niusushi.cl/production/images/3d6f78f6-32a3-41f2-a58f-b3b8e0405b8f/large/Special-Niu.webp?1673202581\" alt=\"Sushi\" width=\"400px\" height=\"400px\">\r\n            <ion-label style=\"margin-left: 45px;\">Sushi</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-card *ngFor=\"let restaurante of restaurantes.slice(0, 3)\">\r\n    <img [src]=\"restaurante.img\" alt=\"{{ restaurante.nombre }}\" />\r\n    <ion-card-header style=\"text-align: center;\">\r\n      <ion-card-title>{{ restaurante.nombre }}</ion-card-title>\r\n      <ion-card-subtittle>{{ restaurante.especialidad }}</ion-card-subtittle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-tab-button routerLink=\"/restaurantes\" fill=\"outline\">visitar</ion-tab-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <div class=\"topic\" style=\"text-align: center; margin-top: 20px;\">\r\n    <strong>Tu ubicación</strong>\r\n    <div class=\"map\" #map>\r\n    </div><br>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<footer class=\"footer\">\r\n  <!-- ion tab -->\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"cuenta\" routerLink=\"/cuenta\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      Cuenta\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"menu\" routerLink=\"/menu-principal\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      Menú\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"Pedidos\" routerLink=\"/pedidos\">\r\n      <ion-icon name=\"pizza-outline\"></ion-icon>\r\n      Pedidos\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"restaurant\" routerLink=\"/restaurantes\">\r\n      <ion-icon name=\"restaurant-outline\"></ion-icon>\r\n      Restaurantes\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_menu-principal_menu-principal_module_ts.js.map