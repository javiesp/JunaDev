"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vistas_valor-r_valor-r_module_ts"],{

/***/ 217:
/*!***********************************************!*\
  !*** ./src/app/vistas/pipes/date-ago.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAgoPipe": () => (/* binding */ DateAgoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let DateAgoPipe = class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 30) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
};
DateAgoPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dateAgo',
        standalone: true
    })
], DateAgoPipe);



/***/ }),

/***/ 3268:
/*!**********************************************************!*\
  !*** ./src/app/vistas/valor-r/valor-r-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValorRPageRoutingModule": () => (/* binding */ ValorRPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _valor_r_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valor-r.page */ 4846);




const routes = [
    {
        path: '',
        component: _valor_r_page__WEBPACK_IMPORTED_MODULE_0__.ValorRPage
    }
];
let ValorRPageRoutingModule = class ValorRPageRoutingModule {
};
ValorRPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ValorRPageRoutingModule);



/***/ }),

/***/ 7742:
/*!**************************************************!*\
  !*** ./src/app/vistas/valor-r/valor-r.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValorRPageModule": () => (/* binding */ ValorRPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _valor_r_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valor-r-routing.module */ 3268);
/* harmony import */ var _valor_r_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valor-r.page */ 4846);
/* harmony import */ var _valor_rr_valor_rr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../valor-rr/valor-rr.component */ 6568);
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/date-ago.pipe */ 217);









let ValorRPageModule = class ValorRPageModule {
};
ValorRPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _valor_r_routing_module__WEBPACK_IMPORTED_MODULE_0__.ValorRPageRoutingModule
        ],
        declarations: [_valor_r_page__WEBPACK_IMPORTED_MODULE_1__.ValorRPage,
            _valor_rr_valor_rr_component__WEBPACK_IMPORTED_MODULE_2__.ValorRrComponent,
            _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_3__.DateAgoPipe]
    })
], ValorRPageModule);



/***/ }),

/***/ 4846:
/*!************************************************!*\
  !*** ./src/app/vistas/valor-r/valor-r.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValorRPage": () => (/* binding */ ValorRPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _valor_r_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valor-r.page.html?ngResource */ 4444);
/* harmony import */ var _valor_r_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valor-r.page.scss?ngResource */ 6946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/date-ago.pipe */ 217);
/* harmony import */ var _valor_rr_valor_rr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../valor-rr/valor-rr.component */ 6568);









let ValorRPage = class ValorRPage {
    constructor() {
        this.reviews = [
            {
                rate: 5,
                comment: 'Great work!',
                user_name: 'User 2',
                created_at: '2023-07-30 11:45:20'
            },
            {
                rate: 4,
                user_name: 'User 1',
                created_at: '2023-01-22 11:51:20'
            },
        ];
        this.rating = {};
        this.isToastOpen = false;
    }
    setOpen(isOpen) {
        this.isToastOpen = isOpen;
    }
    dismiss(isRating = false) {
        let data = null;
        if (isRating) {
            if (this.rating?.rate == 0) {
                this.setOpen(true);
                this.errorMessage = 'Please provide rating!';
                return;
            }
            data = this.rating;
            this.rating = {};
        }
        this.rateModal.dismiss(data);
    }
    onWillDismiss(event) {
        console.log(event?.detail?.data);
        const data = event?.detail?.data;
        if (data) {
            let reviews = [];
            reviews.push({
                ...data,
                user_name: 'User' + (this.reviews.length + 1),
                created_at: new Date(),
            });
            reviews = reviews.concat(this.reviews);
            this.reviews = [...reviews];
            console.log(this.reviews);
        }
    }
};
ValorRPage.ctorParameters = () => [];
ValorRPage.propDecorators = {
    rateModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['rate_modal',] }]
};
ValorRPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-valor-r',
        template: _valor_r_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        standalone: true,
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _valor_rr_valor_rr_component__WEBPACK_IMPORTED_MODULE_3__.ValorRrComponent, _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_2__.DateAgoPipe],
        styles: [_valor_r_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ValorRPage);



/***/ }),

/***/ 6568:
/*!*******************************************************!*\
  !*** ./src/app/vistas/valor-rr/valor-rr.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValorRrComponent": () => (/* binding */ ValorRrComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _valor_rr_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valor-rr.component.html?ngResource */ 5072);
/* harmony import */ var _valor_rr_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valor-rr.component.scss?ngResource */ 241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let ValorRrComponent = class ValorRrComponent {
    constructor() {
        this.stars = [
            { icon: 'star-outline', color: 'medium' },
            { icon: 'star-outline', color: 'medium' },
            { icon: 'star-outline', color: 'medium' },
            { icon: 'star-outline', color: 'medium' },
            { icon: 'star-outline', color: 'medium' },
        ];
        this.initialRating = 0;
        this.readonly = false;
        this.alignment = 'center';
        this.size = '2rem';
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.setRating(this.initialRating);
    }
    rate(value) {
        if (!this.readonly) {
            this.setRating(value);
        }
    }
    setRating(rating) {
        for (let i = 0; i < this.stars.length; i++) {
            if (rating >= i + 1) {
                this.stars[i].icon = 'star';
                this.stars[i].color = 'warning';
            }
            else if (rating > i) {
                this.stars[i].icon = 'star-half';
                this.stars[i].color = 'warning';
            }
            else {
                this.stars[i].icon = 'star-outline';
                this.stars[i].color = 'medium';
            }
        }
        this.ratingChange.emit(rating);
    }
};
ValorRrComponent.ctorParameters = () => [];
ValorRrComponent.propDecorators = {
    initialRating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    alignment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ratingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ValorRrComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-valor-rr',
        template: _valor_rr_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_valor_rr_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ValorRrComponent);



/***/ }),

/***/ 6946:
/*!*************************************************************!*\
  !*** ./src/app/vistas/valor-r/valor-r.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-list ion-list-header ion-label {\n  font-size: 0.9rem;\n}\nion-list ion-item ion-label {\n  font-weight: bold;\n}\nion-list ion-item ion-label div {\n  margin-top: 8px;\n}\nion-list ion-item ion-label div ion-text {\n  font-size: 0.9rem;\n}\nion-list ion-item ion-label p {\n  margin-top: 5px;\n}\nion-list ion-item ion-label p ion-text {\n  font-size: 0.75rem;\n}\nion-list ion-item ion-label p ion-text span {\n  font-weight: normal;\n  margin-left: 10px;\n}\nion-modal ion-row ion-col ion-label {\n  letter-spacing: 0.5px;\n  font-size: 0.9rem;\n}\nion-modal ion-row ion-col ion-textarea {\n  --background: var(--ion-color-light);\n  --border-radius: 5px;\n}\nion-modal ion-row ion-col.rate {\n  margin-top: 2vh;\n  margin-bottom: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbG9yLXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNO0VBQ0UsaUJBQUE7QUFEUjtBQUtNO0VBQ0UsaUJBQUE7QUFIUjtBQUlRO0VBQ0UsZUFBQTtBQUZWO0FBR1U7RUFDRSxpQkFBQTtBQURaO0FBSVE7RUFDRSxlQUFBO0FBRlY7QUFHVTtFQUNFLGtCQUFBO0FBRFo7QUFFWTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFBZDtBQVdRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQVJWO0FBVVE7RUFDSSxvQ0FBQTtFQUNBLG9CQUFBO0FBUlo7QUFXTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVRSIiwiZmlsZSI6InZhbG9yLXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tb2RhbCB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH0gICBcclxuICAgICAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpb24tY29sLnJhdGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 241:
/*!********************************************************************!*\
  !*** ./src/app/vistas/valor-rr/valor-rr.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxvci1yci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 4444:
/*!*************************************************************!*\
  !*** ./src/app/vistas/valor-r/valor-r.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Valorar Restaurantes</ion-title>\r\n    <ion-buttons>\r\n      <ion-back-button>\r\n       <ion-title>Volver</ion-title>\r\n     </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-list *ngIf=\"reviews.length > 0\">\r\n\r\n    <ion-list-header color=\"light\" mode=\"md\">\r\n      <ion-label class=\"ion-text-center\">\r\n        {{reviews.length}} REVIEWS\r\n      </ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let review of reviews\">\r\n\r\n      <ion-label>\r\n\r\n        <app-valor-rr \r\n          [initialRating]=\"review?.rate\" \r\n          [readonly]=\"true\" \r\n          [alignment]=\"'left'\"\r\n          [size]=\"'0.9rem'\">\r\n        </app-valor-rr>\r\n\r\n        <div *ngIf=\"review?.comment\">\r\n          <ion-text class=\"ion-text-wrap\">{{review?.comment}}</ion-text>\r\n        </div>\r\n\r\n        <p>\r\n          <ion-text>\r\n            {{review?.user_name}}\r\n            <span>\r\n              {{review?.created_at | dateAgo}}\r\n            </span>\r\n          </ion-text>\r\n        </p>\r\n\r\n      </ion-label>\r\n\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <ion-fab slot=\"fixed\" horizontal=\"end\" vertical=\"bottom\">\r\n    <ion-fab-button id=\"open-modal\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-modal \r\n    #rate_modal\r\n    trigger=\"open-modal\" \r\n    [initialBreakpoint]=\"0.75\" \r\n    [breakpoints]=\"[0, 0.25, 0.5, 0.75, 0.9]\"\r\n    (willDismiss)=\"onWillDismiss($event)\">\r\n    <ng-template>\r\n\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"dismiss()\" color=\"danger\">Cancel</ion-button>\r\n          </ion-buttons>\r\n          <ion-title>REVIEW</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"dismiss(true)\" [strong]=\"true\" color=\"primary\">SAVE</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n\r\n      <ion-content class=\"ion-padding\">\r\n\r\n        <ion-row>\r\n\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-label color=\"dark\" class=\"ion-text-wrap\">\r\n              Please provide your valuable feedback ?\r\n            </ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"rate\">\r\n            <app-valor-rr\r\n              (ratingChange)=\"rating.rate = $event\">\r\n            </app-valor-rr>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-textarea\r\n              label=\"\" \r\n              rows=\"2\" \r\n              placeholder=\"Any Comments (optional)\" \r\n              [(ngModel)]=\"rating.comment\">\r\n            </ion-textarea>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n        <ion-toast\r\n          [isOpen]=\"isToastOpen\"\r\n          [message]=\"errorMessage\"\r\n          [duration]=\"3000\"\r\n          color=\"danger\"\r\n          (didDismiss)=\"setOpen(false)\">\r\n        </ion-toast>\r\n\r\n      </ion-content>\r\n\r\n    </ng-template>\r\n  </ion-modal>\r\n  \r\n</ion-content>";

/***/ }),

/***/ 5072:
/*!********************************************************************!*\
  !*** ./src/app/vistas/valor-rr/valor-rr.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div [align]=\"alignment\">\r\n  <ion-icon\r\n    *ngFor=\"let star of stars; let i = index\"\r\n    [style.marginRight.px]=\"5\" \r\n    [style.fontSize]=\"size\"\r\n    [name]=\"star.icon\" \r\n    [color]=\"star.color\"\r\n    (click)=\"rate(i + 1)\">\r\n  </ion-icon>\r\n</div>\r\n\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vistas_valor-r_valor-r_module_ts.js.map