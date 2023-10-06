"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_scan-qr-pago_scan-qr-pago_module_ts"],{

/***/ 857:
/*!********************************************************************!*\
  !*** ./src/app/vistas/scan-qr-pago/scan-qr-pago-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanQrPagoPageRoutingModule": () => (/* binding */ ScanQrPagoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _scan_qr_pago_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-qr-pago.page */ 5311);




const routes = [
    {
        path: '',
        component: _scan_qr_pago_page__WEBPACK_IMPORTED_MODULE_0__.ScanQrPagoPage
    }
];
let ScanQrPagoPageRoutingModule = class ScanQrPagoPageRoutingModule {
};
ScanQrPagoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScanQrPagoPageRoutingModule);



/***/ }),

/***/ 2079:
/*!************************************************************!*\
  !*** ./src/app/vistas/scan-qr-pago/scan-qr-pago.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanQrPagoPageModule": () => (/* binding */ ScanQrPagoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scan_qr_pago_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-qr-pago-routing.module */ 857);
/* harmony import */ var _scan_qr_pago_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-qr-pago.page */ 5311);







let ScanQrPagoPageModule = class ScanQrPagoPageModule {
};
ScanQrPagoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scan_qr_pago_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanQrPagoPageRoutingModule
        ],
        declarations: [_scan_qr_pago_page__WEBPACK_IMPORTED_MODULE_1__.ScanQrPagoPage]
    })
], ScanQrPagoPageModule);



/***/ }),

/***/ 5311:
/*!**********************************************************!*\
  !*** ./src/app/vistas/scan-qr-pago/scan-qr-pago.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanQrPagoPage": () => (/* binding */ ScanQrPagoPage)
/* harmony export */ });
/* harmony import */ var D_Appmovil_Sandbox_ionic_Ionic_6_qrcode_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _scan_qr_pago_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-qr-pago.page.html?ngResource */ 989);
/* harmony import */ var _scan_qr_pago_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scan-qr-pago.page.scss?ngResource */ 1195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 8353);






let ScanQrPagoPage = class ScanQrPagoPage {
  constructor() {
    this.qrCodeString = 'Clave dinámica';
    this.content_visibility = '';
  }

  checkPermission() {
    return (0,D_Appmovil_Sandbox_ionic_Ionic_6_qrcode_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // check or request permission
        const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.checkPermission({
          force: true
        });

        if (status.granted) {
          // the user granted permission
          return true;
        }

        return false;
      } catch (e) {
        console.log(e);
      }
    })();
  }

  startScan() {
    var _this = this;

    return (0,D_Appmovil_Sandbox_ionic_Ionic_6_qrcode_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const permission = yield _this.checkPermission();

        if (!permission) {
          return;
        }

        yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.hideBackground();
        document.querySelector('body').classList.add('scanner-active');
        _this.content_visibility = 'hidden';
        const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.startScan();
        console.log(result);
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.showBackground();
        document.querySelector('body').classList.remove('scanner-active');
        _this.content_visibility = '';

        if (result?.hasContent) {
          _this.scannedResult = result.content;
          console.log(_this.scannedResult);
        }
      } catch (e) {
        console.log(e);

        _this.stopScan();
      }
    })();
  }

  stopScan() {
    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.showBackground();
    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy() {
    this.stopScan();
  }

};

ScanQrPagoPage.ctorParameters = () => [];

ScanQrPagoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-scan-qr-pago',
  template: _scan_qr_pago_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_scan_qr_pago_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ScanQrPagoPage);


/***/ }),

/***/ 1195:
/*!***********************************************************************!*\
  !*** ./src/app/vistas/scan-qr-pago/scan-qr-pago.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FuLXFyLXBhZ28ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 989:
/*!***********************************************************************!*\
  !*** ./src/app/vistas/scan-qr-pago/scan-qr-pago.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [style.visibility]=\"content_visibility\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Pago\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [style.visibility]=\"content_visibility\">\n\n  <ion-card class=\"ion-text-center\">\n    <ion-card-content>\n      <qrcode \n        [qrdata]=\"qrCodeString\" \n        [width]=\"256\" \n        [errorCorrectionLevel]=\"'M'\">\n      </qrcode>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button \n    expand=\"block\" \n    class=\"ion-margin\" \n    (click)=\"startScan()\">\n    Scan QR Code\n  </ion-button>\n\n  <ion-item *ngIf=\"scannedResult\">\n    <ion-label class=\"ion-text-wrap\">Scanned Result: {{scannedResult}}</ion-label>\n  </ion-item>\n  \n</ion-content>\n\n<footer class=\"footer\">\n  <!-- ion tab -->\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"cuenta\" routerLink=\"/cuenta\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n        Cuenta\n      </ion-tab-button>\n      <ion-tab-button tab=\"menu\" routerLink=\"/menu\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n        Menú\n      </ion-tab-button>\n      <ion-tab-button tab=\"Favoritos\">\n        <ion-icon name=\"pizza-outline\"></ion-icon>\n        Pedidos\n      </ion-tab-button>\n      <ion-tab-button tab=\"restaurant\" routerLink=\"/listarestaurant\">\n        <ion-icon name=\"restaurant-outline\"></ion-icon>\n        Restaurantes\n      </ion-tab-button>\n      <ion-tab-button tab=\"wallet\" routerLink=\"/home\">\n        <ion-icon name=\"wallet\"></ion-icon>\n        Pago\n      </ion-tab-button>\n    </ion-tab-bar>\n</footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_scan-qr-pago_scan-qr-pago_module_ts.js.map