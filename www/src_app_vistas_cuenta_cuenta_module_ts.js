"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_cuenta_cuenta_module_ts"],{

/***/ 5545:
/*!********************************************************!*\
  !*** ./src/app/vistas/cuenta/cuenta-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPageRoutingModule": () => (/* binding */ CuentaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta.page */ 5987);




const routes = [
    {
        path: '',
        component: _cuenta_page__WEBPACK_IMPORTED_MODULE_0__.CuentaPage
    }
];
let CuentaPageRoutingModule = class CuentaPageRoutingModule {
};
CuentaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CuentaPageRoutingModule);



/***/ }),

/***/ 2067:
/*!************************************************!*\
  !*** ./src/app/vistas/cuenta/cuenta.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPageModule": () => (/* binding */ CuentaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta-routing.module */ 5545);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page */ 5987);







let CuentaPageModule = class CuentaPageModule {
};
CuentaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuentaPageRoutingModule
        ],
        declarations: [_cuenta_page__WEBPACK_IMPORTED_MODULE_1__.CuentaPage]
    })
], CuentaPageModule);



/***/ }),

/***/ 5987:
/*!**********************************************!*\
  !*** ./src/app/vistas/cuenta/cuenta.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPage": () => (/* binding */ CuentaPage)
/* harmony export */ });
/* harmony import */ var C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cuenta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page.html?ngResource */ 6106);
/* harmony import */ var _cuenta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cuenta.page.scss?ngResource */ 2875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_servicios_fireservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/fireservice.service */ 944);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);









let CuentaPage = class CuentaPage {
  constructor(fireservice, router, afAuth, alertController) {
    this.fireservice = fireservice;
    this.router = router;
    this.afAuth = afAuth;
    this.alertController = alertController;
  }

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    var _this = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this.getCurrentUser();

        if (user) {
          _this.userEmail = user.email;
          _this.creationTime = user.metadata.creationTime; // Obtiene la fecha de creación

          _this.username = user.displayName;
          console.log(_this.userEmail, _this.creationTime);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }

  getCurrentUser() {
    var _this2 = this;

    return (0,C_Users_chunc_OneDrive_Documentos_GitHub_JunaExpress_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this2.afAuth.onAuthStateChanged(user => {
          if (user) {
            resolve(user);
          } else {
            reject('No hay usuario autenticado');
          }
        });
      });
    })();
  }

};

CuentaPage.ctorParameters = () => [{
  type: src_app_servicios_fireservice_service__WEBPACK_IMPORTED_MODULE_3__.FireserviceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

CuentaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-cuenta',
  template: _cuenta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cuenta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CuentaPage);


/***/ }),

/***/ 2875:
/*!***********************************************************!*\
  !*** ./src/app/vistas/cuenta/cuenta.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\nion-header ion-toolbar ion-avatar {\n  background: linear-gradient(315deg, rgb(5, 58, 106) 0%, rgb(17, 152, 210) 100%);\n  height: 30px;\n  width: 30px;\n}\n.avatar-title-container {\n  display: flex;\n  align-items: center; /* Centra verticalmente los elementos */\n}\nion-content {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%),\n    url(\"/assets/comia.jpg\") no-repeat center center / cover;\n  padding: 0;\n  font-family: \"Varela Round\", sans-serif;\n}\nion-list {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%), ;\n}\n.image-container img {\n  border-radius: 10px; /* Borde redondeado, ajusta el valor según tu preferencia */\n}\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  text-align: center;\n}\n/* swiper slides */\nswiper-container {\n  --swiper-pagination-bullet-inactive-color: var(--ion-color-step-200, #cccccc);\n  --swiper-pagination-color: var(--ion-color-primary, #3880ff);\n  --swiper-pagination-progressbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);\n  --swiper-scrollbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);\n}\nswiper-slide {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  text-align: center;\n  box-sizing: border-box;\n}\nswiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 15px;\n}\n.topic {\n  margin-left: 10px;\n  font-weight: bold;\n  color: #cccccc;\n}\n.slide-comidas img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  border-radius: 10px;\n}\n.slide-comidas ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n}\nion-label {\n  font-weight: bold;\n  font-size: 18px;\n  margin-top: 10px;\n  color: #cccccc;\n}\n.container-rest {\n  display: flez;\n}\n.container-rest img {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n.banda-etiquetas img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1ZW50YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRVY7RUFDRSwrRUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQVI7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQSxFQUFBLHVDQUFBO0FBRko7QUFNRTtFQUNJOzREQUFBO0VBRUEsVUFBQTtFQUNBLHVDQUFBO0FBSE47QUFNRTtFQUNJLDJGQUFBO0FBSE47QUFLRTtFQUNFLG1CQUFBLEVBQUEsMkRBQUE7QUFGSjtBQU1FO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBUUUsa0JBQUE7QUFFQTtFQUNFLDZFQUFBO0VBQ0EsNERBQUE7RUFDQSx3RkFBQTtFQUNBLDBFQUFBO0VBQ0EsK0VBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7QUFWSjtBQWFFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVko7QUFhRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVko7QUFhRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBVko7QUFhRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFWSjtBQWFFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVko7QUFhQTtFQUNFLGFBQUE7QUFWRjtBQWFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVZGO0FBYUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVZGIiwiZmlsZSI6ImN1ZW50YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg1LCA1OCwgMTA2LCAxKSAwJSwgcmdiYSgxNywgMTUyLCAyMTAsIDEpIDEwMCUpLDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmF2YXRhci10aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRyYSB2ZXJ0aWNhbG1lbnRlIGxvcyBlbGVtZW50b3MgKi9cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoNSwgNTgsIDEwNiwgMSkgMCUsIHJnYmEoMTcsIDE1MiwgMjEwLCAxKSAxMDAlKSxcclxuICAgICAgICB1cmwoXCIvYXNzZXRzL2NvbWlhLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgXHJcbiAgaW9uLWxpc3R7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg1LCA1OCwgMTA2LCAxKSAwJSwgcmdiYSgxNywgMTUyLCAyMTAsIDEpIDEwMCUpLFxyXG4gIH1cclxuICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBCb3JkZSByZWRvbmRlYWRvLCBhanVzdGEgZWwgdmFsb3Igc2Vnw7puIHR1IHByZWZlcmVuY2lhICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBzd2lwZXIgc2xpZGVzICovXHJcbiAgXHJcbiAgc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICAtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1pbmFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCAjY2NjY2NjKTtcclxuICAgIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxuICAgIC0tc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItYmctY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yNSk7XHJcbiAgICAtLXN3aXBlci1zY3JvbGxiYXItYmctY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4xKTtcclxuICAgIC0tc3dpcGVyLXNjcm9sbGJhci1kcmFnLWJnLWNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIHN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBzd2lwZXItc2xpZGUgaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcGljIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZS1jb21pZGFzIGltZ3tcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGUtY29taWRhcyBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7IFxyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG5cclxuLmNvbnRhaW5lci1yZXN0e1xyXG4gIGRpc3BsYXk6IGZsZXo7XHJcbn1cclxuXHJcbi5jb250YWluZXItcmVzdCBpbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmJhbmRhLWV0aXF1ZXRhcyBpbWd7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMTBweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 6106:
/*!***********************************************************!*\
  !*** ./src/app/vistas/cuenta/cuenta.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <div class=\"cont-ubicacion\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"auto\">\r\n          <ion-avatar>\r\n            <ion-buttons>\r\n              <img src=\"\" alt=\"\">\r\n            </ion-buttons>\r\n          </ion-avatar>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-title mode=\"md\">\r\n            <ion-label>\r\n              <ion-text>Estás en</ion-text>\r\n              <p>\r\n                Santiago, Chile\r\n                <ion-icon color=\"dark\" name=\"location-outline\"></ion-icon>\r\n              </p>\r\n            </ion-label>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col size=\"auto\">\r\n          <ion-buttons>\r\n            <ion-button routerLink=\"/configuracion\">\r\n              <ion-icon name=\"settings-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"account-card\">\r\n    <ion-card-header  style=\"text-align: center\"   >\r\n      <ion-card-title >Datos de la Cuenta</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list-header class=\"texto\">{{ username }}</ion-list-header>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Correo Electrónico</ion-label>\r\n        <ion-input type=\"email\" [(ngModel)]=\"userEmail\" disabled></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Nombre</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"username\" disabled></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Apellido</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"apellido\" disabled></ion-input>\r\n      </ion-item>\r\n      <!-- Fecha de Registro -->\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Fecha de Registro</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"creationTime\" disabled></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n\r\n<footer class=\"footer\">\r\n  <!-- ion tab -->\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"cuenta\" routerLink=\"/cuenta\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      Cuenta\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"menu\" routerLink=\"/menu-principal\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      Menú\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"Pedidos\" routerLink=\"/pedidos\">\r\n      <ion-icon name=\"pizza-outline\"></ion-icon>\r\n      Pedidos\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"restaurant\" routerLink=\"/restaurantes\">\r\n      <ion-icon name=\"restaurant-outline\"></ion-icon>\r\n      Restaurantes\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_cuenta_cuenta_module_ts.js.map