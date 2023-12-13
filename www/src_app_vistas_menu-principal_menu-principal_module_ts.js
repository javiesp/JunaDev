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

module.exports = "@charset \"UTF-8\";\nion-header ion-toolbar ion-avatar {\n  background: linear-gradient(315deg, rgb(5, 58, 106) 0%, rgb(17, 152, 210) 100%);\n  height: 30px;\n  width: 30px;\n}\n.avatar-title-container {\n  display: flex;\n  align-items: center; /* Centra verticalmente los elementos */\n}\nion-content {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%),\n    no-repeat center center / cover;\n  padding: 0;\n  font-family: \"Varela Round\", sans-serif;\n}\nion-list {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%), ;\n}\n.image-container img {\n  border-radius: 10px; /* Borde redondeado, ajusta el valor según tu preferencia */\n}\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  text-align: center;\n}\n/* swiper slides */\nswiper-container {\n  --swiper-pagination-bullet-inactive-color: var(--ion-color-step-200, #cccccc);\n  --swiper-pagination-color: var(--ion-color-primary, #3880ff);\n  --swiper-pagination-progressbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);\n  --swiper-scrollbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);\n}\nswiper-slide {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  text-align: center;\n  box-sizing: border-box;\n}\nswiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 15px;\n}\n.topic {\n  margin-left: 10px;\n  font-weight: bold;\n  color: #cccccc;\n}\n.slide-comidas img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  border-radius: 10px;\n}\n.slide-comidas ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n}\nion-label {\n  font-weight: bold;\n  font-size: 18px;\n  margin-top: 10px;\n  color: #cccccc;\n}\n.container-rest {\n  display: flez;\n}\n.container-rest img {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n.banda-etiquetas img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  border-radius: 10px;\n}\n.container12 {\n  width: 100%; /* o cualquier ancho deseado */\n  height: 50vh; /* o cualquier altura deseada */\n  position: relative;\n}\n.map {\n  position: absolute;\n  height: 75%;\n  width: 88%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  border-radius: 20px;\n  margin: 26px;\n  margin-bottom: 100px;\n}\n.map.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtcHJpbmNpcGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFVjtFQUNFLCtFQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBUjtBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBLEVBQUEsdUNBQUE7QUFGSjtBQU1FO0VBQ0k7bUNBQUE7RUFFQSxVQUFBO0VBQ0EsdUNBQUE7QUFITjtBQU1FO0VBQ0ksMkZBQUE7QUFITjtBQUtFO0VBQ0UsbUJBQUEsRUFBQSwyREFBQTtBQUZKO0FBTUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFRRSxrQkFBQTtBQUVBO0VBQ0UsNkVBQUE7RUFDQSw0REFBQTtFQUNBLHdGQUFBO0VBQ0EsMEVBQUE7RUFDQSwrRUFBQTtBQU5KO0FBU0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQVZKO0FBYUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWFFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFWSjtBQWVFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVpKO0FBZUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFaSjtBQWVBO0VBQ0UsYUFBQTtBQVpGO0FBZUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWkY7QUFlQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBWkY7QUFlQTtFQUNFLFdBQUEsRUFBQSw4QkFBQTtFQUNBLFlBQUEsRUFBQSwrQkFBQTtFQUNBLGtCQUFBO0FBWkY7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBWkY7QUFlQTtFQUNFLFVBQUE7QUFaRiIsImZpbGUiOiJtZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg1LCA1OCwgMTA2LCAxKSAwJSwgcmdiYSgxNywgMTUyLCAyMTAsIDEpIDEwMCUpLDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmF2YXRhci10aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRyYSB2ZXJ0aWNhbG1lbnRlIGxvcyBlbGVtZW50b3MgKi9cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoNSwgNTgsIDEwNiwgMSkgMCUsIHJnYmEoMTcsIDE1MiwgMjEwLCAxKSAxMDAlKSxcclxuICAgICAgICBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgXHJcbiAgaW9uLWxpc3R7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg1LCA1OCwgMTA2LCAxKSAwJSwgcmdiYSgxNywgMTUyLCAyMTAsIDEpIDEwMCUpLFxyXG4gIH1cclxuICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBCb3JkZSByZWRvbmRlYWRvLCBhanVzdGEgZWwgdmFsb3Igc2Vnw7puIHR1IHByZWZlcmVuY2lhICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBzd2lwZXIgc2xpZGVzICovXHJcbiAgXHJcbiAgc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICAtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1pbmFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCAjY2NjY2NjKTtcclxuICAgIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxuICAgIC0tc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItYmctY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yNSk7XHJcbiAgICAtLXN3aXBlci1zY3JvbGxiYXItYmctY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4xKTtcclxuICAgIC0tc3dpcGVyLXNjcm9sbGJhci1kcmFnLWJnLWNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIHN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBzd2lwZXItc2xpZGUgaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcGljIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuc2xpZGUtY29taWRhcyBpbWd7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLWNvbWlkYXMgaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIGZvbnQtc2l6ZTogMThweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuXHJcbi5jb250YWluZXItcmVzdHtcclxuICBkaXNwbGF5OiBmbGV6O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXJlc3QgaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5iYW5kYS1ldGlxdWV0YXMgaW1ne1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDEwcHg7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIxMiB7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIG8gY3VhbHF1aWVyIGFuY2hvIGRlc2VhZG8gKi9cclxuICBoZWlnaHQ6IDUwdmg7IC8qIG8gY3VhbHF1aWVyIGFsdHVyYSBkZXNlYWRhICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgd2lkdGg6IDg4JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbjogMjZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLm1hcC52aXNpYmxle1xyXG4gIG9wYWNpdHk6IDE7XHJcbn0iXX0= */";

/***/ }),

/***/ 7304:
/*!***************************************************************************!*\
  !*** ./src/app/vistas/menu-principal/menu-principal.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <div class=\"cont-ubicacion\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"auto\">\r\n          <ion-avatar>\r\n            <ion-buttons>\r\n              <img src=\"\" alt=\"\">\r\n            </ion-buttons>\r\n          </ion-avatar>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-title mode=\"md\">\r\n            <ion-label>\r\n              <ion-text>Estás en</ion-text>\r\n              <p>\r\n                Santiago, Chile\r\n                <ion-icon color=\"dark\" name=\"location-outline\"></ion-icon>\r\n              </p>\r\n            </ion-label>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col size=\"auto\">\r\n          <ion-buttons>\r\n            <ion-button routerLink=\"/pedidos\">\r\n              <ion-badge slot=\"end\">&#9679;</ion-badge>\r\n              <ion-icon slot=\"icon-only\" name=\"cart\" color=\"dark\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"barra-busqueda ion-padding\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div class=\"container-img\">\r\n    <div class=\"banda-promos\">\r\n      <img src=\"assets/icon/1.jpg\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"banda-etiquetas\">\r\n      <div class=\"topic\" style=\"text-align: center; margin-top: 20px;\">\r\n        <strong>¿Qué te gustaría ordenar?</strong>\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row style=\"margin-bottom: 50px;\">\r\n          <ion-col size=\"4\">\r\n            <img src=\"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png\" alt=\"Pizza\" width=\"400px\" height=\"400px\">\r\n            <ion-label style=\"margin-left: 45px;\">Burger</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <img src=\"https://static.vecteezy.com/system/resources/previews/024/725/117/non_2x/pizza-pizza-pizza-with-transparent-background-ai-generated-free-png.png\" alt=\"Hamburguesa\" width=\"400px\" height=\"600px\">\r\n            <ion-label style=\"margin-left: 45px;\">Pizza</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <img src=\"https://assets.niusushi.cl/production/images/3d6f78f6-32a3-41f2-a58f-b3b8e0405b8f/large/Special-Niu.webp?1673202581\" alt=\"Sushi\" width=\"400px\" height=\"400px\">\r\n            <ion-label style=\"margin-left: 45px;\">Sushi</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-card *ngFor=\"let restaurante of restaurantes.slice(0, 3)\">\r\n    <img [src]=\"restaurante.img\" alt=\"{{ restaurante.nombre }}\" />\r\n    <ion-card-header style=\"text-align: center;\">\r\n      <ion-card-title>{{ restaurante.nombre }}</ion-card-title>\r\n      <ion-card-subtitle>{{ restaurante.especialidad }}</ion-card-subtitle> \r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-tab-button routerLink=\"/restaurantes\" fill=\"outline\">visitar</ion-tab-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"container12\" style=\"text-align: center; color: white;\">\r\n    <strong>Mapa</strong>\r\n    <div class=\"map\" #map></div>\r\n  </div>\r\n\r\n \r\n</ion-content>\r\n\r\n\r\n\r\n<footer class=\"footer\">\r\n  <!-- ion tab -->\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"cuenta\" routerLink=\"/cuenta\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      Cuenta\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"menu\" routerLink=\"/menu-principal\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      Menú\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"Pedidos\" routerLink=\"/pedidos\">\r\n      <ion-icon name=\"pizza-outline\"></ion-icon>\r\n      Pedidos\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"restaurant\" routerLink=\"/restaurantes\">\r\n      <ion-icon name=\"restaurant-outline\"></ion-icon>\r\n      Restaurantes\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_menu-principal_menu-principal_module_ts.js.map