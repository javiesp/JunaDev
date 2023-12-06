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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_principal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-principal.page.html?ngResource */ 7304);
/* harmony import */ var _menu_principal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-principal.page.scss?ngResource */ 2069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let MenuPrincipalPage = class MenuPrincipalPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
MenuPrincipalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MenuPrincipalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-menu-principal',
        template: _menu_principal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_principal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuPrincipalPage);



/***/ }),

/***/ 2069:
/*!***************************************************************************!*\
  !*** ./src/app/vistas/menu-principal/menu-principal.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\nion-header ion-toolbar ion-avatar {\n  background: linear-gradient(315deg, rgb(5, 58, 106) 0%, rgb(17, 152, 210) 100%);\n  height: 30px;\n  width: 30px;\n}\n.avatar-title-container {\n  display: flex;\n  align-items: center; /* Centra verticalmente los elementos */\n}\nion-content {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%),\n    no-repeat center center / cover;\n  padding: 0;\n  font-family: \"Varela Round\", sans-serif;\n}\nion-list {\n  --background: linear-gradient(315deg, rgba(5, 58, 106, 1) 0%, rgba(17, 152, 210, 1) 100%), ;\n}\n.image-container img {\n  border-radius: 10px; /* Borde redondeado, ajusta el valor según tu preferencia */\n}\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  text-align: center;\n}\n/* swiper slides */\nswiper-container {\n  --swiper-pagination-bullet-inactive-color: var(--ion-color-step-200, #cccccc);\n  --swiper-pagination-color: var(--ion-color-primary, #3880ff);\n  --swiper-pagination-progressbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);\n  --swiper-scrollbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);\n}\nswiper-slide {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  text-align: center;\n  box-sizing: border-box;\n}\nswiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 15px;\n}\n.topic {\n  margin-left: 10px;\n  font-weight: bold;\n  color: #cccccc;\n}\n.slide-comidas img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  margin: 10px;\n  border-radius: 10px;\n}\n.slide-comidas ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n}\nion-label {\n  font-weight: bold;\n  font-size: 18px;\n  margin-top: 10px;\n  color: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhbmRib3glMjBpb25pY1xcSW9uaWMtNi1xcmNvZGUtbWFpblxcc3JjXFxhcHBcXHZpc3Rhc1xcbWVudS1wcmluY2lwYWxcXG1lbnUtcHJpbmNpcGFsLnBhZ2Uuc2NzcyIsIm1lbnUtcHJpbmNpcGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFVjtFQUNFLCtFQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURBUjtBQ0tFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBLEVBQUEsdUNBQUE7QURGSjtBQ01FO0VBQ0k7NERBQUE7RUFFQSxVQUFBO0VBQ0EsdUNBQUE7QURITjtBQ01FO0VBQ0ksMkZBQUE7QURITjtBQ0tFO0VBQ0UsbUJBQUEsRUFBQSwyREFBQTtBREZKO0FDTUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FESEo7QUNRRSxrQkFBQTtBQUVBO0VBQ0UsNkVBQUE7RUFDQSw0REFBQTtFQUNBLHdGQUFBO0VBQ0EsMEVBQUE7RUFDQSwrRUFBQTtBRE5KO0FDU0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBRFZKO0FDYUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURWSjtBQ2FFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURWSjtBQ2FFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURWSjtBQ2FFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRFZKO0FDYUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURWSiIsImZpbGUiOiJtZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2IoNSwgNTgsIDEwNikgMCUsIHJnYigxNywgMTUyLCAyMTApIDEwMCUpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uYXZhdGFyLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRyYSB2ZXJ0aWNhbG1lbnRlIGxvcyBlbGVtZW50b3MgKi9cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoNSwgNTgsIDEwNiwgMSkgMCUsIHJnYmEoMTcsIDE1MiwgMjEwLCAxKSAxMDAlKSxcbiAgICB1cmwoXCIvYXNzZXRzL2NvbWlhLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJWYXJlbGEgUm91bmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoNSwgNTgsIDEwNiwgMSkgMCUsIHJnYmEoMTcsIDE1MiwgMjEwLCAxKSAxMDAlKSwgO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIEJvcmRlIHJlZG9uZGVhZG8sIGFqdXN0YSBlbCB2YWxvciBzZWfDum4gdHUgcHJlZmVyZW5jaWEgKi9cbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogc3dpcGVyIHNsaWRlcyAqL1xuc3dpcGVyLWNvbnRhaW5lciB7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWluYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNjY2NjY2MpO1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItYmctY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yNSk7XG4gIC0tc3dpcGVyLXNjcm9sbGJhci1iZy1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEpO1xuICAtLXN3aXBlci1zY3JvbGxiYXItZHJhZy1iZy1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjUpO1xufVxuXG5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnN3aXBlci1zbGlkZSBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnRvcGljIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLnNsaWRlLWNvbWlkYXMgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zbGlkZS1jb21pZGFzIGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xufSIsImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDUsIDU4LCAxMDYsIDEpIDAlLCByZ2JhKDE3LCAxNTIsIDIxMCwgMSkgMTAwJSksO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYXZhdGFyLXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudHJhIHZlcnRpY2FsbWVudGUgbG9zIGVsZW1lbnRvcyAqL1xyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg1LCA1OCwgMTA2LCAxKSAwJSwgcmdiYSgxNywgMTUyLCAyMTAsIDEpIDEwMCUpLFxyXG4gICAgICAgIHVybChcIi9hc3NldHMvY29taWEuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICBcclxuICBpb24tbGlzdHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDUsIDU4LCAxMDYsIDEpIDAlLCByZ2JhKDE3LCAxNTIsIDIxMCwgMSkgMTAwJSksXHJcbiAgfVxyXG4gIC5pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIEJvcmRlIHJlZG9uZGVhZG8sIGFqdXN0YSBlbCB2YWxvciBzZWfDum4gdHUgcHJlZmVyZW5jaWEgKi9cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIHN3aXBlciBzbGlkZXMgKi9cclxuICBcclxuICBzd2lwZXItY29udGFpbmVyIHtcclxuICAgIC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWluYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNjY2NjY2MpO1xyXG4gICAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xyXG4gICAgLS1zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1iZy1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjI1KTtcclxuICAgIC0tc3dpcGVyLXNjcm9sbGJhci1iZy1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEpO1xyXG4gICAgLS1zd2lwZXItc2Nyb2xsYmFyLWRyYWctYmctY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgc3dpcGVyLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIHN3aXBlci1zbGlkZSBpbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4OyBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAudG9waWMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLWNvbWlkYXMgaW1ne1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZS1jb21pZGFzIGlvbi1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBmb250LXNpemU6IDE4cHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgXHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9Il19 */";

/***/ }),

/***/ 7304:
/*!***************************************************************************!*\
  !*** ./src/app/vistas/menu-principal/menu-principal.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"toolbar\">\n    <div class=\"cont-ubicacion\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"auto\">\n          <ion-avatar>\n            <ion-buttons>\n              <img src=\"assets/icon/isotipo-gray.png\" alt=\"\">\n            </ion-buttons>\n          </ion-avatar>\n        </ion-col>\n        <ion-col>\n          <ion-title mode=\"md\">\n            <ion-label>\n              <ion-text>Estás en</ion-text>\n              <p>\n                Santiago, Chile\n                <ion-icon color=\"dark\" name=\"chevron-down-outline\"></ion-icon>\n              </p>\n            </ion-label>\n          </ion-title>\n        </ion-col>\n        <ion-col size=\"auto\">\n          <ion-buttons>\n            <ion-button>\n              <ion-badge slot=\"end\">&#9679;</ion-badge>\n              <ion-icon slot=\"icon-only\" name=\"cart\" color=\"dark\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"barra-busqueda ion-padding\">\n      <ion-searchbar show-clear-button=\"always\" clear-icon=\"close\" (ionChange)=\"getItems($event)\"></ion-searchbar>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content [fullscreen]=\"true\">\n\n\n  <swiper-container>\n    <swiper-slide>\n      <img src=\"assets/icon/1.png\" alt=\"\">\n    </swiper-slide>\n    <swiper-slide>\n      <img src=\"assets/icon/2.png\" alt=\"\"> \n    </swiper-slide>\n    <swiper-slide>\n      <img src=\"assets/icon/3.png\" alt=\"\">\n    </swiper-slide>\n    <swiper-slide>\n      <img src=\"assets/icon/4.png\" alt=\"\">\n    </swiper-slide>\n    <swiper-slide>\n      <img src=\"assets/icon/5.png\" alt=\"\">\n    </swiper-slide>\n  </swiper-container>\n\n  <div class=\"container-grid-food\">\n    <div class=\"topic\">\n      ¿Qué te gustaría ordenar?\n    </div>\n    <swiper-container>\n      <swiper-slide class=\"slide-comidas\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n              <img src=\"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png\" alt=\"Pizza\" width=\"400px\" height=\"400px\">\n              <ion-label>Sushi</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img src=\"https://static.vecteezy.com/system/resources/previews/024/725/117/non_2x/pizza-pizza-pizza-with-transparent-background-ai-generated-free-png.png\" alt=\"Hamburguesa\" width=\"400px\" height=\"600px\">\n              <ion-label>Pizza</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img src=\"https://assets.stickpng.com/images/580b57fcd9996e24bc43c1f9.png\" alt=\"Sushi\" width=\"400px\" height=\"400px\">\n              <ion-label>Sushi</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </swiper-slide>\n      <swiper-slide>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n              <img src=\"https://png.pngtree.com/png-clipart/20220125/original/pngtree-summer-drink-mint-lemonade-png-image_7218399.png\" alt=\"bebestibles\" width=\"400px\" height=\"400px\">\n              <ion-label>Sushi</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img src=\"https://static.vecteezy.com/system/resources/previews/018/246/195/original/delicious-chocolate-cake-sweet-chocolate-cake-slice-png.png\" alt=\"Hamburguesa\">\n              <ion-label>Sushi</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img src=\"https://cf.mysushishop.co.uk/product-11881-zoom/Veggie-Gyozas.png\" alt=\"Sushi\">\n              <ion-label>Comida china</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </swiper-slide>\n    </swiper-container>\n  </div>\n\n\n  \n\n\n  \n  <!--ionic generate component mi-slide -->\n\n  <!--\n  <ion-list>\n    <ion-item *ngFor=\"let rest of jsonRestData\">\n      {{ rest.restaurant }}\n    </ion-item>\n  </ion-list>-->\n  \n  <!-- Comidas -->\n  <ion-card *ngFor=\"let category of jsonData.food\">\n    <ion-card-header>\n      {{ category.category }}\n    </ion-card-header>\n    <ion-card-content>\n      \n      <ion-item *ngFor=\"let meal of category.meals\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"meal.img\" alt=\"{{ meal.name }}\" width=\"100\">\n        </ion-thumbnail>\n        <ion-label>\n          {{ meal.name }}\n          <p>Precio: {{ meal.price }}</p>\n          <p>Información: {{ meal.info }}</p>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<footer class=\"footer\">\n  <!-- ion tab -->\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"cuenta\" routerLink=\"/cuenta\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n        Cuenta\n      </ion-tab-button>\n      <ion-tab-button tab=\"menu\" routerLink=\"/menu\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n        Menú\n      </ion-tab-button>\n      <ion-tab-button tab=\"Favoritos\">\n        <ion-icon name=\"pizza-outline\"></ion-icon>\n        Pedidos\n      </ion-tab-button>\n      <ion-tab-button tab=\"restaurant\" routerLink=\"/listarestaurant\">\n        <ion-icon name=\"restaurant-outline\"></ion-icon>\n        Restaurantes\n      </ion-tab-button>\n      <ion-tab-button tab=\"wallet\" routerLink=\"/home\">\n        <ion-icon name=\"wallet\"></ion-icon>\n        Pago\n      </ion-tab-button>\n    </ion-tab-bar>\n</footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_menu-principal_menu-principal_module_ts.js.map