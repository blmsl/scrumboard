(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_messaging_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/messaging.service */ "./app/services/messaging.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/navbar.service */ "./app/services/navbar.service.ts");
/* harmony import */ var _environments_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/FirebaseConfig */ "./environments/FirebaseConfig.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "../node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "../node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "../node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/storage */ "../node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/messaging */ "../node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _ui_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/login/login.component */ "./app/ui/login/login.component.ts");
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/navbar/navbar.component */ "./app/ui/navbar/navbar.component.ts");
/* harmony import */ var _ui_boards_boards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/boards/boards.component */ "./app/ui/boards/boards.component.ts");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/teams.service */ "./app/services/teams.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _services_profile_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/profile-guard.service */ "./app/services/profile-guard.service.ts");
/* harmony import */ var _ui_scrum_scrum_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/scrum/scrum.component */ "./app/ui/scrum/scrum.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/overlay */ "../node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slider */ "../node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ "../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "../node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _modules_teams_module_teams_module_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modules/teams-module/teams-module.component */ "./app/modules/teams-module/teams-module.component.ts");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angularfire2/functions */ "../node_modules/angularfire2/functions/index.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(angularfire2_functions__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _ui_admin_admin_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ui/admin/admin.component */ "./app/ui/admin/admin.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ "../node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/badge */ "../node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/core */ "../node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "../node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _extra_map_to_iterable_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./extra/map-to-iterable.pipe */ "./app/extra/map-to-iterable.pipe.ts");
/* harmony import */ var _ui_team_settings_team_settings_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ui/team-settings/team-settings.component */ "./app/ui/team-settings/team-settings.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_ab_tests__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! angular-ab-tests */ "../node_modules/angular-ab-tests/fesm5/angular-ab-tests.js");
/* harmony import */ var _ui_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ui/privacy/privacy.component */ "./app/ui/privacy/privacy.component.ts");
/* harmony import */ var angular_linky__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! angular-linky */ "../node_modules/angular-linky/index.js");
/* harmony import */ var angular_linky__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(angular_linky__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _extra_drop_zone_directive__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./extra/drop-zone.directive */ "./app/extra/drop-zone.directive.ts");
/* harmony import */ var _modules_thread_thread_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./modules/thread/thread.component */ "./app/modules/thread/thread.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tooltip */ "../node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! angular2-hotkeys */ "../node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_49__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Angularfire





// Components and services









// Angular Material components



















// Other











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _ui_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _ui_boards_boards_component__WEBPACK_IMPORTED_MODULE_14__["BoardsComponent"],
                _ui_scrum_scrum_component__WEBPACK_IMPORTED_MODULE_19__["ScrumComponent"],
                _modules_teams_module_teams_module_component__WEBPACK_IMPORTED_MODULE_33__["TeamsModuleComponent"],
                _ui_admin_admin_component__WEBPACK_IMPORTED_MODULE_35__["AdminComponent"],
                _extra_map_to_iterable_pipe__WEBPACK_IMPORTED_MODULE_40__["MapToIterablePipe"],
                _ui_team_settings_team_settings_component__WEBPACK_IMPORTED_MODULE_41__["TeamSettingsComponent"],
                _ui_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_44__["PrivacyComponent"],
                _extra_drop_zone_directive__WEBPACK_IMPORTED_MODULE_46__["DropZoneDirective"],
                _modules_thread_thread_component__WEBPACK_IMPORTED_MODULE_47__["ThreadComponent"],
            ],
            entryComponents: [
                _modules_thread_thread_component__WEBPACK_IMPORTED_MODULE_47__["ThreadComponent"]
            ],
            imports: [
                angular_ab_tests__WEBPACK_IMPORTED_MODULE_43__["AbTestsModule"].forRoot([
                    {
                        versions: ['A', 'B'],
                        versionForCrawlers: 'A',
                        expiration: 45,
                    },
                ]),
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_37__["MatBadgeModule"],
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_49__["HotkeyModule"].forRoot(),
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__["MatTooltipModule"],
                angular_linky__WEBPACK_IMPORTED_MODULE_45__["LinkyModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatRippleModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_42__["ReactiveFormsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
                _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_10__["AngularFireMessagingModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_42__["FormsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__["FirebaseConfig"]),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"].enablePersistence(),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_39__["SweetAlert2Module"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: 'login', component: _ui_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
                    { path: 'admin', component: _ui_admin_admin_component__WEBPACK_IMPORTED_MODULE_35__["AdminComponent"], canActivate: [_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_18__["ProfileGuardService"]] },
                    { path: 'privacy', component: _ui_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_44__["PrivacyComponent"] },
                    { path: 'scrum/:teamId/:id', component: _ui_scrum_scrum_component__WEBPACK_IMPORTED_MODULE_19__["ScrumComponent"] },
                    { path: 'team/:teamId', component: _ui_team_settings_team_settings_component__WEBPACK_IMPORTED_MODULE_41__["TeamSettingsComponent"], canActivate: [_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_18__["ProfileGuardService"]] },
                    { path: '', component: _ui_boards_boards_component__WEBPACK_IMPORTED_MODULE_14__["BoardsComponent"], canActivate: [_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_18__["ProfileGuardService"]] },
                    { path: ':teamId', component: _ui_boards_boards_component__WEBPACK_IMPORTED_MODULE_14__["BoardsComponent"], canActivate: [_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_18__["ProfileGuardService"]] },
                ]),
            ],
            providers: [
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
                _services_teams_service__WEBPACK_IMPORTED_MODULE_15__["TeamsService"],
                _services_auth_service_service__WEBPACK_IMPORTED_MODULE_16__["AuthServiceService"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestore"],
                _services_profile_guard_service__WEBPACK_IMPORTED_MODULE_18__["ProfileGuardService"],
                _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"],
                angularfire2_functions__WEBPACK_IMPORTED_MODULE_34__["AngularFireFunctions"],
                _services_messaging_service__WEBPACK_IMPORTED_MODULE_0__["MessagingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/extra/drop-zone.directive.ts":
/*!******************************************!*\
  !*** ./app/extra/drop-zone.directive.ts ***!
  \******************************************/
/*! exports provided: DropZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.dropped = new events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hovered = new events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DropZoneDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropZoneDirective.prototype.ondragover = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
        console.log('hovering');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "dropped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "hovered", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "ondragover", null);
    DropZoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropZone]'
        }),
        __metadata("design:paramtypes", [])
    ], DropZoneDirective);
    return DropZoneDirective;
}());



/***/ }),

/***/ "./app/extra/map-to-iterable.pipe.ts":
/*!*******************************************!*\
  !*** ./app/extra/map-to-iterable.pipe.ts ***!
  \*******************************************/
/*! exports provided: MapToIterablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapToIterablePipe", function() { return MapToIterablePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapToIterablePipe = /** @class */ (function () {
    function MapToIterablePipe() {
    }
    MapToIterablePipe.prototype.transform = function (dict) {
        var a = [];
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                a.push({ key: key, val: dict[key] });
            }
        }
        return a;
    };
    MapToIterablePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'mapToIterable'
        })
    ], MapToIterablePipe);
    return MapToIterablePipe;
}());



/***/ }),

/***/ "./app/extra/shared.ts":
/*!*****************************!*\
  !*** ./app/extra/shared.ts ***!
  \*****************************/
/*! exports provided: getImgUrlFromRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgUrlFromRef", function() { return getImgUrlFromRef; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");

function getImgUrlFromRef(data, storage) {
    if (data.imgRef) { // If the team has img
        data.imgURL = storage.ref(data.imgRef).getDownloadURL().pipe(
        // Cache the url for blazing fast load time ;)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (user) { return localStorage.setItem('img-' + data.id, JSON.stringify(user)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(JSON.parse(localStorage.getItem('img-' + data.id))));
    }
}


/***/ }),

/***/ "./app/modules/teams-module/teams-module.component.css":
/*!*************************************************************!*\
  !*** ./app/modules/teams-module/teams-module.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n#newTeamBtn {\r\n    color: var(--button-color);\r\n    font-weight: bold;\r\n    border: 1px solid #c0c0c0;\r\n    border-radius: 999px;\r\n    padding: 5px 23px;\r\n    margin: 10px 0;\r\n}\r\n\r\n#newTeamTxt {\r\n    margin-left: 10px;\r\n}\r\n\r\nimg {\r\n    width: 44px;\r\n    height: 44px;\r\n    border-radius: 4px;\r\n    margin-right: 6px;\r\n}\r\n\r\n.txtWrapper {\r\n    display: inline-block;\r\n    width: 155px;\r\n}\r\n\r\n.txtWrapper p {\r\n    margin: 0 0 0 10px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.teamName {\r\n    font-weight: bold;\r\n    line-height: 17px;\r\n    padding-bottom: 4px;\r\n}\r\n\r\n.amountMembers {\r\n    font-size: 10px;\r\n    margin: 0;\r\n    line-height: 10px;\r\n}\r\n\r\n.teamSelectBtn {\r\n    text-align: left;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-right: 22px !important;\r\n}\r\n\r\n.teamButtonDiv {\r\n    position: relative;\r\n    margin-top: 5px;\r\n    width: 250px;\r\n    height: 70px;\r\n    color: var(--txt-color) !important;\r\n}\r\n\r\n.menuBtn {\r\n    position: absolute;\r\n    right: -6px;\r\n    top: -2px;\r\n}\r\n\r\n.selected {\r\n    color: var(--bg-color);\r\n}\r\n\r\n.selected .teamSelectBtn {\r\n    background: var(--accent-light);\r\n    border: 1px solid #c0c0c029;\r\n}\r\n\r\n.selected .teamName {\r\n    color: var(--button-color);\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    #newTeamBtn {\r\n        width: unset;\r\n        margin-right: 20px;\r\n    }\r\n\r\n    h4 {\r\n        margin: 0;\r\n    }\r\n\r\n    #teamsWrapper {\r\n        overflow-x: auto;\r\n        white-space: nowrap;\r\n        overflow-y: hidden;\r\n    }\r\n\r\n    .teamButtonDiv {\r\n        display: inline-block;\r\n        margin-right: 5px;\r\n    }\r\n}"

/***/ }),

/***/ "./app/modules/teams-module/teams-module.component.html":
/*!**************************************************************!*\
  !*** ./app/modules/teams-module/teams-module.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>\r\n  <strong>Teams</strong>\r\n</h4>\r\n<div id=\"teamsWrapper\">\r\n  <button id=\"newTeamBtn\" class=\"teamSelectBtn\" mat-button (click)=\"teamsService.createNewTeam()\"><mat-icon>add</mat-icon><span id=\"newTeamTxt\">New team</span></button>\r\n  <div *ngFor=\"let team of teamsService.$teams | async\" (click)=\"teamsService.selectTeam(team.id)\" class=\"teamButtonDiv\"\r\n    [ngClass]=\"{'selected': (route.paramMap | async).get('teamId') === team.id}\">\r\n    <button class=\"teamSelectBtn\" mat-button>\r\n      <img [src]=\"(team.imgURL | async) || 'assets/favicons/android-chrome-192x192.png'\">\r\n      <div class=\"txtWrapper\">\r\n        <p class=\"teamName\">{{team.name}}</p>\r\n        <p class=\"amountMembers\">{{(team.members | mapToIterable).length}} members</p>\r\n      </div>\r\n    </button>\r\n    <button class=\"menuBtn\" *ngIf=\"(route.paramMap | async).get('teamId') === team.id\" mat-icon-button\r\n      [matMenuTriggerFor]=\"menu\" (click)=\"$event.stopPropagation()\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item [routerLink]=\"['/team', team.id]\">\r\n        <!-- <button mat-menu-item (click)=\"addMember(team.id, team.name)\"> -->\r\n        <mat-icon>people</mat-icon>\r\n        <span>Manage team</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"leaveTeam(team)\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        <span>Leave</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./app/modules/teams-module/teams-module.component.ts":
/*!************************************************************!*\
  !*** ./app/modules/teams-module/teams-module.component.ts ***!
  \************************************************************/
/*! exports provided: TeamsModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsModuleComponent", function() { return TeamsModuleComponent; });
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/teams.service */ "./app/services/teams.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamsModuleComponent = /** @class */ (function () {
    function TeamsModuleComponent(teamsService, router, afs, auth, route) {
        this.teamsService = teamsService;
        this.router = router;
        this.afs = afs;
        this.auth = auth;
        this.route = route;
    }
    TeamsModuleComponent.prototype.ngOnInit = function () {
    };
    TeamsModuleComponent.prototype.leaveTeam = function (team) {
        var _this = this;
        // update members
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to leave this team?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Leave',
            confirmButtonColor: '#e95d4f',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Delete method here
                _this.auth.user$.take(1).subscribe(function (user) {
                    _this.teamsService.$teams.take(1).subscribe(function (teams) {
                        var ref = _this.afs.firestore.doc("teams/" + team.id);
                        _this.afs.firestore.runTransaction(function (transaction) {
                            return transaction.get(ref).then(function (doc) {
                                var members = doc.data().members;
                                delete members[user.uid];
                                return transaction.update(ref, { members: members });
                            }).then(function () {
                                console.log({ teams: teams });
                                teams.splice(teams.indexOf(team), 1);
                                console.log({ teams: teams });
                                if (teams.length > 0) {
                                    _this.teamsService.selectTeam(teams[0].id);
                                }
                                else {
                                    localStorage.setItem('previousSelectedTeam', 'no-team');
                                    _this.router.navigate(['/']);
                                }
                                // Google analytics event
                                window.ga('send', 'event', {
                                    eventCategory: 'Team management',
                                    eventAction: 'Leave team',
                                });
                            })
                                .catch(function (err) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                                    title: "Error",
                                    type: 'error',
                                    text: err.message,
                                });
                            });
                        });
                    });
                });
            }
        });
    };
    TeamsModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-teams-module',
            template: __webpack_require__(/*! ./teams-module.component.html */ "./app/modules/teams-module/teams-module.component.html"),
            styles: [__webpack_require__(/*! ./teams-module.component.css */ "./app/modules/teams-module/teams-module.component.css")]
        }),
        __metadata("design:paramtypes", [_services_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TeamsModuleComponent);
    return TeamsModuleComponent;
}());



/***/ }),

/***/ "./app/modules/thread/thread.component.css":
/*!*************************************************!*\
  !*** ./app/modules/thread/thread.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close {\r\n  color: #aaaaaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n.close:hover {\r\n    color: #484848;\r\n}\r\n.comment {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n.menuBtn {\r\n  position: absolute;\r\n  right: 0;\r\n  /* line-height: 90px; */\r\n}\r\n.profilePic {\r\n  border-radius: 50%;\r\n  width: 45px;\r\n  height: 45px;\r\n  margin-top: 15px;;\r\n}\r\n.usernameTxt {\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  margin: 0;\r\n}\r\n.commentTxt {\r\n  margin: 0;\r\n}\r\n.txtWrapper {\r\n  margin: 21px 0 15px 15px;\r\n}\r\n#dialogContent {\r\n  width: 90%;\r\n  display: table;\r\n  margin: 0 auto;\r\n}\r\n.inp {\r\n  width: 85%;\r\n}\r\n#submitBtn {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  margin-left: 20px;\r\n}"

/***/ }),

/***/ "./app/modules/thread/thread.component.html":
/*!**************************************************!*\
  !*** ./app/modules/thread/thread.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <mat-icon (click)=\"this.close()\" class=\"close\">close</mat-icon>\r\n  <div id=\"dialogContent\">\r\n    <div class=\"content\">\r\n      <h1>{{data.entry.txt}}</h1>\r\n    </div>\r\n\r\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"onFormSubmit()\">\r\n      <mat-form-field class=\"inp\">\r\n        <input matInput autocomplete=\"off\" placeholder=\"Write your comment\" [formControl]=\"commentFormControl\">\r\n        <mat-error *ngIf=\"commentFormControl.hasError('required')\">\r\n          <strong>Required</strong>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <button id=\"submitBtn\" type=\"submit\" mat-stroked-button>Comment</button>\r\n    </form>\r\n\r\n    <div id=\"commentsContainer\">\r\n      <div class=\"comment\" *ngFor=\"let comment of comments$ | async\">\r\n\r\n        <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item (click)=\"editComment(comment)\">\r\n            <mat-icon>edit</mat-icon>\r\n            <span>Edit</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"deleteComment(comment)\">\r\n            <mat-icon>delete</mat-icon>\r\n            <span>Delete</span>\r\n          </button>\r\n        </mat-menu>\r\n\r\n        <img class=\"profilePic\" [src]=\"comment.imgUrl\">\r\n        <div class=\"txtWrapper\">\r\n          <p class=\"usernameTxt\">{{comment.username}}</p>\r\n          <p class=\"commentTxt\">{{comment.txt}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./app/modules/thread/thread.component.ts":
/*!************************************************!*\
  !*** ./app/modules/thread/thread.component.ts ***!
  \************************************************/
/*! exports provided: ThreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadComponent", function() { return ThreadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "../node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "../node_modules/firebase/firestore/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ThreadComponent = /** @class */ (function () {
    function ThreadComponent(dialogRef, data, auth, afs) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.auth = auth;
        this.afs = afs;
        this.commentFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            comment: this.commentFormControl
        });
        this.entryDoc = this.afs.doc('teams/' + data.teamId + '/boards/' + data.boardId + '/entries/' + data.entry.id);
        this.commentsCollection = this.entryDoc.collection('comments', function (ref) { return ref.orderBy('time', 'desc'); });
        this.comments$ = this.toMap(this.commentsCollection.snapshotChanges());
    }
    ThreadComponent.prototype.ngOnInit = function () {
    };
    ThreadComponent.prototype.editComment = function (comment) {
        var newTxt = prompt('New txt', comment.txt);
        if (newTxt) {
            this.commentsCollection.doc(comment.doc.id).update({
                txt: newTxt
            });
        }
    };
    ThreadComponent.prototype.deleteComment = function (comment) {
        console.log(comment);
        this.commentsCollection.doc(comment.id).delete();
    };
    ThreadComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var input = this.commentForm.value.comment;
        if (this.commentFormControl.valid) {
            this.auth.user$.take(1).subscribe(function (user) {
                _this.commentsCollection.add({
                    username: user.displayName,
                    txt: input,
                    imgUrl: user.photoURL,
                    time: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp()
                });
            });
        }
    };
    ThreadComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ThreadComponent.prototype.toMap = function (observable) {
        return observable.map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    };
    ThreadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thread',
            template: __webpack_require__(/*! ./thread.component.html */ "./app/modules/thread/thread.component.html"),
            styles: [__webpack_require__(/*! ./thread.component.css */ "./app/modules/thread/thread.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], ThreadComponent);
    return ThreadComponent;
}());



/***/ }),

/***/ "./app/services/admin.service.ts":
/*!***************************************!*\
  !*** ./app/services/admin.service.ts ***!
  \***************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/functions */ "../node_modules/angularfire2/functions/index.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_functions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(afFunctions, afs) {
        this.afFunctions = afFunctions;
        this.afs = afs;
        this.feedbackCollection = this.afs.collection('feedback');
        this.feedback$ = this.feedbackCollection.valueChanges();
        var listAllUsers = this.afFunctions.httpsCallable('listAllUsers');
        listAllUsers({}).toPromise()
            .then(function (result) {
            console.log(result);
        });
    }
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_functions__WEBPACK_IMPORTED_MODULE_1__["AngularFireFunctions"],
            _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./app/services/auth-service.service.ts":
/*!**********************************************!*\
  !*** ./app/services/auth-service.service.ts ***!
  \**********************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "../node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "../node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        console.log('auth-service');
        this.user$ = afAuth.authState;
    }
    AuthServiceService.prototype.signInWithGoogle = function () {
        // Google analytics event
        window.ga('send', 'event', {
            eventCategory: 'Auth',
            eventLabel: 'Signed in with Google',
            eventAction: 'Sign in',
        });
        return this.afAuth.auth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
    };
    AuthServiceService.prototype.signInWithFacebook = function () {
        // Google analytics event
        window.ga('send', 'event', {
            eventCategory: 'Auth',
            eventLabel: 'Signed in with Facebook',
            eventAction: 'Sign in',
        });
        return this.afAuth.auth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider());
    };
    AuthServiceService.prototype.resetPassword = function (email) {
        // Google analytics event
        window.ga('send', 'event', {
            eventCategory: 'Auth',
            eventAction: 'Requested password reset',
        });
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthServiceService.prototype.logOut = function () {
        var _this = this;
        // Google analytics event
        window.ga('send', 'event', {
            eventCategory: 'Auth',
            eventAction: 'Signed out',
        });
        this.afAuth.auth.signOut().then(function () { return _this.router.navigate(['login']); });
    };
    AuthServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "./app/services/messaging.service.ts":
/*!*******************************************!*\
  !*** ./app/services/messaging.service.ts ***!
  \*******************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/messaging */ "../node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "../node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagingService = /** @class */ (function () {
    function MessagingService(afMessaging, auth, afs) {
        var _this = this;
        this.afMessaging = afMessaging;
        this.auth = auth;
        this.afs = afs;
        console.log('fcm');
        this.afMessaging.requestPermission
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMapTo"])(this.afMessaging.tokenChanges))
            .subscribe(function (token) {
            console.log(token);
            // Upload token to server
            _this.auth.user$.take(1).subscribe(function (user) {
                _this.afs.doc('users/' + user.uid).update({
                    fcmTokens: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion(token)
                });
            });
        }, function (error) { console.error(error); });
    }
    MessagingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_1__["AngularFireMessaging"], _auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "./app/services/navbar.service.ts":
/*!****************************************!*\
  !*** ./app/services/navbar.service.ts ***!
  \****************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.hidden = false;
        this.backBtn = false;
        this.shareLink = false;
    }
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./app/services/profile-guard.service.ts":
/*!***********************************************!*\
  !*** ./app/services/profile-guard.service.ts ***!
  \***********************************************/
/*! exports provided: ProfileGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGuardService", function() { return ProfileGuardService; });
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// This is service is used for redirecting non-signed in user to the login page when they
// try to access the profile page
var ProfileGuardService = /** @class */ (function () {
    function ProfileGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProfileGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.map(function (user) {
            // if the user is signed in
            if (user) {
                return true;
            }
            _this.router.navigate(['/login'], {
                queryParams: { returnUrl: state.url }
            });
            // if the user is not signed in
            return false;
        });
    };
    ProfileGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_0__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileGuardService);
    return ProfileGuardService;
}());



/***/ }),

/***/ "./app/services/teams.service.ts":
/*!***************************************!*\
  !*** ./app/services/teams.service.ts ***!
  \***************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "../node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_shareReplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/shareReplay */ "../node_modules/rxjs-compat/_esm5/add/operator/shareReplay.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/storage */ "../node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _extra_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../extra/shared */ "./app/extra/shared.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var TeamsService = /** @class */ (function () {
    function TeamsService(afs, auth, router, storage) {
        var _this = this;
        this.afs = afs;
        this.auth = auth;
        this.router = router;
        this.storage = storage;
        this.teamsCollection = this.auth.user$.filter(function (user) { return user != null; })
            .map(function (user) { return _this.afs.collection('teams', function (ref) { return ref.where('members.' + user.uid + '.isMember', '==', true); }); })
            .shareReplay(1);
        this.$teams = this.teamsCollection.switchMap(function (collection) { return collection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                Object(_extra_shared__WEBPACK_IMPORTED_MODULE_9__["getImgUrlFromRef"])(data, storage);
                return data;
            });
        }); });
    }
    TeamsService.prototype.selectTeam = function (teamId) {
        localStorage.setItem('previousSelectedTeam', teamId);
        this.router.navigate(['/', teamId]);
    };
    TeamsService.prototype.createNewTeam = function () {
        var _this = this;
        console.log('Creating a new team');
        this.auth.user$.take(1).subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
            var _a, currentUser, name, uid, team, val;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currentUser = user;
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                                title: 'What is the name of the team?',
                                input: 'text',
                                inputPlaceholder: 'Team name',
                                showCancelButton: true,
                                reverseButtons: true,
                                inputValidator: function (value) {
                                    return !value && 'You need to create a team name!';
                                }
                            })];
                    case 1:
                        name = (_b.sent()).value;
                        if (!name) return [3 /*break*/, 3];
                        uid = currentUser.uid;
                        team = {
                            name: name,
                            members: (_a = {},
                                _a[uid] = {
                                    name: user.displayName,
                                    isMember: true,
                                    isAdmin: true,
                                    imgUrl: user.photoURL,
                                },
                                _a)
                        };
                        return [4 /*yield*/, this.afs.collection('teams').add(team)];
                    case 2:
                        val = _b.sent();
                        val.get().then(function (doc) {
                            console.log(doc.data);
                            _this.selectTeam(doc.id);
                        });
                        // Google analytics event
                        window.ga('send', 'event', {
                            eventCategory: 'Team management',
                            eventAction: 'New team',
                        });
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    TeamsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _auth_service_service__WEBPACK_IMPORTED_MODULE_0__["AuthServiceService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]])
    ], TeamsService);
    return TeamsService;
}());



/***/ }),

/***/ "./app/ui/admin/admin.component.css":
/*!******************************************!*\
  !*** ./app/ui/admin/admin.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sidebar */\r\n\r\nmat-icon {\r\n  padding: 0 15px;\r\n  font-size: 25px !important;\r\n}\r\n\r\n.nav {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  top: 0;\r\n  float: left;\r\n  background-color: white;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  width: 20%;\r\n  height: 100%;\r\n}\r\n\r\n.navBtn {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: block;\r\n  background-color: inherit;\r\n  color: black;\r\n  padding: 22px 0px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\n.navHeader {\r\n  cursor: pointer;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-style: normal;\r\n  font-size: 52px;\r\n  text-align: center;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.navTxt {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-style: normal;\r\n  font-size: 20px;\r\n}\r\n\r\n.navBtn:hover:not(.navHeader):not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\n.navBtn.active {\r\n  background-color: #ccc;\r\n}\r\n\r\n/* Sidebar end */\r\n\r\n/* Tables start*/\r\n\r\n.tableDiv {\r\n  position: absolute;\r\n  left: 25%;\r\n  right: 5%;\r\n  top: 100px;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.tableHead {\r\n  background-color: #F5F5F5;\r\n  height: 60px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\r\n  border-radius: 2px 2px 0 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.tableHeader {\r\n  margin: 0;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 60px;\r\n}\r\n\r\n.reloadBtn {\r\n  float: right;\r\n  background-color: #0388CA;\r\n  margin-right: 20px;\r\n  border: 0 solid;\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.reloadBtn:hover {\r\n  background-color: #1c93cf;\r\n}\r\n\r\nmain mat-icon {\r\n  padding: 8px 20px;\r\n  color: white;\r\n  font-weight: 100;\r\n}\r\n\r\n.table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.table tr {\r\n  cursor: pointer;\r\n}\r\n\r\n.table {\r\n  background-color: white;\r\n}\r\n\r\n.table tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.table td {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  padding: 8px;\r\n  text-align: center;\r\n  border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.table th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: center;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-color: #F5F5F5;\r\n  color: #707070;\r\n  cursor: default;\r\n}\r\n\r\n/* Tables end */\r\n"

/***/ }),

/***/ "./app/ui/admin/admin.component.html":
/*!*******************************************!*\
  !*** ./app/ui/admin/admin.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n  <span class=\"navBtn navHeader\">Admin</span>\r\n  <i [class.active]=\"navTab == 'users'\" (click)=\"navTab = 'users'\" class=\"navBtn\">\r\n    <div>\r\n      <mat-icon>person</mat-icon>\r\n      <span class=\"navTxt\">Users</span>\r\n    </div>\r\n  </i>\r\n  <i [class.active]=\"navTab == 'teams'\" (click)=\"navTab = 'teams'\" class=\"navBtn\">\r\n    <div>\r\n      <mat-icon>group</mat-icon>\r\n      <span class=\"navTxt\">Teams</span>\r\n    </div>\r\n  </i>\r\n  <i [class.active]=\"navTab == 'feedback'\" (click)=\"navTab = 'feedback'\" class=\"navBtn\">\r\n    <div>\r\n      <mat-icon>feedback</mat-icon>\r\n      <span class=\"navTxt\">Feedback</span>\r\n    </div>\r\n  </i>\r\n  <i [class.active]=\"navTab == 'maintenance'\" (click)=\"navTab = 'maintenance'\" class=\"navBtn\">\r\n    <div>\r\n      <mat-icon>build</mat-icon>\r\n      <span class=\"navTxt\">Maintenance</span>\r\n    </div>\r\n  </i>\r\n</div>\r\n\r\n<main [ngSwitch]='navTab'>\r\n  <div *ngSwitchCase=\"'users'\">\r\n    <div class=\"tableDiv\">\r\n      <div class=\"tableHead\">\r\n        <div>\r\n          <div class=\"reloadBtn\">\r\n            <mat-icon>refresh</mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table\" cellspacing=\"0\">\r\n        <tr>\r\n          <th>UID</th>\r\n          <th>Name</th>\r\n          <th>Email</th>\r\n          <th>Role</th>\r\n        </tr>\r\n        <!--<tr *ngFor=\"let user of adminService.allUsers; let i=index \">\r\n          <td>{{user[i].email}}</td>\r\n          <td>{{user[i].displayName}}</td>\r\n          <td>{{user[i].email}}</td>\r\n          <td>{{user[i].email}}</td>\r\n          <td>{{user[i].role}}</td>\r\n        </tr> -->\r\n\r\n        <tr>\r\n          <td>XD6EkNokYXV3XTtW2UZys2FtcXI3</td>\r\n          <td>Magnus Trandokken</td>\r\n          <td>magnus@trandokken.com</td>\r\n          <td>Admin</td>\r\n        </tr>\r\n        <tr>\r\n          <td>XJKAJkSJ7s4NKS2noKFJOJLKJSLKb</td>\r\n          <td>Sondre sørbye</td>\r\n          <td>sondre@sorbye.no</td>\r\n          <td>Admin</td>\r\n        </tr>\r\n        <tr>\r\n          <td>XD6EkNXTtW2UssZys2FtJLcXI2SG</td>\r\n          <td>Ola Nordmann</td>\r\n          <td>ola@nordmann.no</td>\r\n          <td>User</td>\r\n        </tr>\r\n      </table>\r\n\r\n    </div>\r\n  </div>\r\n  <div *ngSwitchCase=\"'feedback'\">\r\n    <div class=\"tableDiv\">\r\n      <div class=\"tableHead\">\r\n        <div>\r\n          <div class=\"reloadBtn\">\r\n            <mat-icon>refresh</mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table\" cellspacing=\"0\">\r\n        <tr>\r\n          <th>UID</th>\r\n          <th>Category</th>\r\n          <th>Date</th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let feedbackMessage of adminService.feedback$ | async\">\r\n          <td>{{ feedbackMessage.uid }}</td>\r\n          <td>{{ feedbackMessage.category }}</td>\r\n          <td>{{ feedbackMessage.date }}</td>\r\n        </tr>\r\n      </table>\r\n\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./app/ui/admin/admin.component.ts":
/*!*****************************************!*\
  !*** ./app/ui/admin/admin.component.ts ***!
  \*****************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/functions */ "../node_modules/angularfire2/functions/index.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_functions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admin.service */ "./app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, afs, auth, adminService, route, afFunctions) {
        this.router = router;
        this.afs = afs;
        this.auth = auth;
        this.adminService = adminService;
        this.route = route;
        this.afFunctions = afFunctions;
        this.navTab = 'feedback';
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.creteAdmin = function (uid, userName) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.queue([{
                title: "Are you sure?",
                text: "Are you sure you want to promote " + userName + " to admin?",
                confirmButtonText: 'Make admin',
                showCancelButton: true,
                reverseButtons: true,
                showLoaderOnConfirm: true,
                preConfirm: function (value) {
                    var createAdmin = _this.afFunctions.httpsCallable('createAdmin');
                    return createAdmin({ uid: uid }).toPromise()
                        .then(function (data) {
                        console.log("user: " + uid + " is now admin");
                    }).catch(function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: 'Error',
                            text: error.message,
                            type: 'error',
                        });
                    });
                }
            }]);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./app/ui/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./app/ui/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angularfire2_functions__WEBPACK_IMPORTED_MODULE_2__["AngularFireFunctions"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./app/ui/boards/boards.component.css":
/*!********************************************!*\
  !*** ./app/ui/boards/boards.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  margin: 0;\r\n  background-color: #F5F6F7;\r\n  font-family: roboto;\r\n}\r\n\r\nmain {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  padding: 16px;\r\n  display: flex;\r\n}\r\n\r\n#boards {\r\n  position: relative;\r\n}\r\n\r\n.boardsWrapper {\r\n  flex: 1;\r\n}\r\n\r\napp-teams-module {\r\n  margin-right: 16px;\r\n}\r\n\r\nh3 {\r\n  line-height: 50px;\r\n  margin: 16px 0 16px 16px;\r\n}\r\n\r\nh3:first-letter {\r\n  text-transform: uppercase;\r\n}\r\n\r\nh2 {\r\n  margin: 15px 0;\r\n}\r\n\r\n.container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr 0.13fr;\r\n      grid-template-columns: 1fr 0.13fr;\r\n  position: relative;\r\n}\r\n\r\n.menuBtn {\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.card {\r\n  width: 100%;\r\n  background: var(--cards);\r\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);\r\n  display: table;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n#distributionBar {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.entryBar {\r\n  height: 10px;\r\n\r\n}\r\n\r\n#todoBar {\r\n  background-color: #e74c3c;\r\n}\r\n\r\n#inProgressBar {\r\n  background-color: #f1c40f;\r\n}\r\n\r\n#doneBar {\r\n  background-color: #27ae60;\r\n}\r\n\r\n#boards, #archived {\r\n  outline: 0;\r\n}\r\n\r\n.deleteBtn {\r\n  font-family: roboto;\r\n  float: right;\r\n  background-color: red;\r\n  text-align: center;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.deleteBtn:hover{\r\n    opacity: 0.9;\r\n}\r\n\r\n.deleteBtn h3 {\r\n  line-height: 50px;\r\n  color: white;\r\n  margin-left: 0;\r\n}\r\n\r\n#noTeam {\r\n  text-align: center;\r\n  width: calc(100% - 40px);\r\n  max-width: 400px;\r\n  margin: 100px auto 0 auto;\r\n  padding: 20px;\r\n}\r\n\r\n#noEntries {\r\n  margin-top: 15%;\r\n  text-align: center;\r\n  margin-left: 120px;\r\n}\r\n\r\nh4 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  main {\r\n    display: block;\r\n  }\r\n  app-teams-module {\r\n    margin: 0;\r\n  }\r\n  h2 {\r\n    font-size: 19px;\r\n  }\r\n  #noEntries {\r\n    margin-left: unset;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./app/ui/boards/boards.component.html":
/*!*********************************************!*\
  !*** ./app/ui/boards/boards.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n<main *ngIf=\"(teamsService.$teams | async)?.length > 0\">\r\n  <app-teams-module></app-teams-module>\r\n  <div *ngIf=\"!(($boards | async)?.length == 0 && ($archived | async)?.length == 0)\" class=\"boardsWrapper\">\r\n    <h4><strong>Active projects</strong></h4>\r\n<section id=\"boards\" *ngFor=\"let board of $boards | async\" [routerLink]=\"['/scrum', teamId, board.id]\">\r\n<div class=\"card\" matRipple>\r\n        <div class=\"container\">\r\n          <h3>{{board.name}}</h3>\r\n          <div id=\"distributionBar\">\r\n            <div id=\"todoBar\" class=\"entryBar\" [style.width.%]=\"board.aggregatedDataPercent.todo\" matTooltip=\"{{'Todo: ' + (board.aggregatedData.todo | number)}}\"></div>\r\n            <div id=\"inProgressBar\" class=\"entryBar\" [style.width.%]=\"board.aggregatedDataPercent.inProgress\" matTooltip=\"{{'In progress: ' + (board.aggregatedData.inProgress | number)}}\"></div>\r\n            <div id=\"doneBar\" class=\"entryBar\" [style.width.%]=\"board.aggregatedDataPercent.done\" matTooltip=\"{{'Done: ' + (board.aggregatedData.done | number)}}\"></div>\r\n          </div>\r\n          <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\" (click)=\"$event.stopPropagation()\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"edit(board)\">\r\n              <mat-icon>edit</mat-icon>\r\n              <span>Rename</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"archive(board)\">\r\n              <mat-icon>move_to_inbox</mat-icon>\r\n              <span>Archive</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"delete(board)\">\r\n              <mat-icon>delete</mat-icon>\r\n              <span>Delete</span>\r\n            </button>\r\n          </mat-menu>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div id=\"archivedWrapper\" *ngIf=\"($archived | async)?.length > 0\">\r\n      <br>\r\n      <h4><strong>Archived projects</strong></h4>\r\n      <section id=\"archived\" *ngFor=\"let archivedBoard of $archived | async\">\r\n        <div class=\"card\">\r\n          <div class=\"container\">\r\n            <h3>{{archivedBoard.name}}</h3>\r\n            <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\" (click)=\"$event.stopPropagation()\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item (click)=\"unarchive(archivedBoard)\">\r\n                <mat-icon>undo</mat-icon>\r\n                <span>Reactivate</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"delete(archivedBoard)\">\r\n                <mat-icon>delete</mat-icon>\r\n                <span>Delete</span>\r\n              </button>\r\n            </mat-menu>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"($boards | async)?.length == 0 && ($archived | async)?.length == 0\" id=\"noEntries\">\r\n    <div>\r\n      <p>No scrumboards</p>\r\n      <h5>¯\\_(ツ)_/¯</h5>\r\n    </div>\r\n  </div>\r\n\r\n</main>\r\n\r\n<div id=\"noTeam\" *ngIf=\"(teamsService.$teams | async)?.length === 0\">\r\n  <h2>Hi {{(auth.user$ | async)?.displayName}}!</h2>\r\n  <p>You are currently not a member of any team. You can join a team by accepting an invitation or you can create your\r\n    own\r\n    team with the button below.</p>\r\n  <button mat-raised-button (click)=\"teamsService.createNewTeam()\">Create a new team</button>\r\n</div>\r\n\r\n\r\n<button *ngIf=\"(teamsService.$teams | async)?.length > 0\" mat-fab id=\"addButton\" (click)=\"addBoard()\" (click)=\"$event.stopPropagation()\">\r\n  <mat-icon>add</mat-icon>\r\n</button>\r\n"

/***/ }),

/***/ "./app/ui/boards/boards.component.ts":
/*!*******************************************!*\
  !*** ./app/ui/boards/boards.component.ts ***!
  \*******************************************/
/*! exports provided: BoardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsComponent", function() { return BoardsComponent; });
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/navbar.service */ "./app/services/navbar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/teams.service */ "./app/services/teams.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/take */ "../node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/share */ "../node_modules/rxjs-compat/_esm5/add/operator/share.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "../node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var BoardsComponent = /** @class */ (function () {
    function BoardsComponent(teamsService, navbarService, route, afs, router, auth) {
        this.teamsService = teamsService;
        this.navbarService = navbarService;
        this.route = route;
        this.afs = afs;
        this.router = router;
        this.auth = auth;
        this.loading = true;
    }
    BoardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbarService.title = null;
        // SELECT TEAM LOGIC
        this.boardCollection = this.route.paramMap.shareReplay(1).map(function (paramMap) {
            _this.teamId = paramMap.get('teamId');
            if (!_this.teamId) { // if no team is selected => select previous one
                _this.teamId = localStorage.getItem('previousSelectedTeam');
                if (!_this.teamId) { // if there is no saved team in localStorage => select the first team youre member of
                    _this.teamsService.$teams.take(1).subscribe(function (teams) {
                        if (teams[0]) {
                            console.log('Selecting the first team youre apart of');
                            _this.teamsService.selectTeam(teams[0].id);
                        }
                        else {
                            _this.loading = false;
                            console.log('You are not member of any team');
                        }
                    });
                }
                else {
                    // You are not member of any team (used to prevent selecting a cached team you just left)
                    if (_this.teamId !== 'no-team') {
                        console.log('Selecting team from localstorage');
                        _this.teamsService.selectTeam(_this.teamId);
                    }
                    else {
                        console.log('You are not member of any team, no-team was saved in localstorage');
                        _this.loading = false;
                    }
                }
            }
            else {
                console.log('Team in url is selected', _this.teamId);
                return _this.afs.collection('teams/' + _this.teamId + '/boards');
            }
        });
        this.$allBoards = (this.boardCollection.filter(function (collection) { return collection !== undefined; })
            .switchMap(function (collection) { return collection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                if (data.aggregatedData) {
                    var totalEntries = data.aggregatedData.todo + data.aggregatedData.inProgress + data.aggregatedData.done;
                    data.aggregatedDataPercent = {
                        todo: data.aggregatedData.todo / totalEntries * 100,
                        inProgress: data.aggregatedData.inProgress / totalEntries * 100,
                        done: data.aggregatedData.done / totalEntries * 100,
                        totalEntries: totalEntries
                    };
                }
                return data;
            });
        }); }));
        this.$boards = this.$allBoards.map(function (boards) { return boards.filter(function (board) { return !board.archived; }); });
        this.$archived = this.$allBoards.map(function (boards) { return boards.filter(function (board) { return board.archived; }); });
        if (!localStorage.getItem('firstTime')) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: 'Dear user!',
                // tslint:disable-next-line:max-line-length
                html: '<p>This website is still in <strong>Beta</strong>! You may therefore find it incomplete and/or "buggy". We would love to get some feedback from you of some of your thoughts on improvement.<br><br>Please send in feedback by clicking on your profile picture and then "Send feedback"<br><br><strong>Thanks!</strong></p>',
                type: 'info',
            }).then(function (result) {
                if (result.value || result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                    localStorage.setItem('firstTime', 'false');
                }
            });
        }
        this.sub = this.$allBoards.take(1).subscribe(function () { return _this.loading = false; });
    };
    BoardsComponent.prototype.addBoard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                            title: 'What is the name of your project?',
                            input: 'text',
                            confirmButtonText: 'Done',
                            reverseButtons: true,
                            inputPlaceholder: 'Project name',
                            showCancelButton: true,
                            inputValidator: function (value) {
                                return !value && 'You need to write something!';
                            }
                        })];
                    case 1:
                        name = (_a.sent()).value;
                        if (name) {
                            this.boardCollection.take(1).subscribe(function (collection) {
                                collection.add({ name: name, date: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp(), aggregatedData: { todo: 0, inProgress: 0, done: 0 } });
                            });
                            // Google analytics event
                            window.ga('send', 'event', {
                                eventCategory: 'Project management',
                                eventAction: 'New project',
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardsComponent.prototype.archive = function (board) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'This will archive your project. Shared public links won\'t work anymore. You can of course reactivate at any time.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Archive',
            reverseButtons: true
        }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!result.value) return [3 /*break*/, 2];
                        // Archive
                        return [4 /*yield*/, this.boardCollection.take(1).subscribe(function (collection) { return collection.doc(board.id).update({ archived: true }); })];
                    case 1:
                        // Archive
                        _a.sent();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Archived!', 'Your project has been archived. You can find it in the archived section below.', 'success');
                        // Google analytics event
                        window.ga('send', 'event', {
                            eventCategory: 'Project management',
                            eventAction: 'Archive project',
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    BoardsComponent.prototype.unarchive = function (board) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'This will unarchive your scrum.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Activate!',
            reverseButtons: true
        }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!result.value) return [3 /*break*/, 2];
                        // TODO Activate method here
                        return [4 /*yield*/, this.boardCollection.take(1).subscribe(function (collection) { return collection.doc(board.id).update({ archived: null }); })];
                    case 1:
                        // TODO Activate method here
                        _a.sent();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Archived!', 'Your project has been reactivated.', 'success');
                        // Google analytics event
                        window.ga('send', 'event', {
                            eventCategory: 'Project management',
                            eventAction: 'Reactivate project',
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    BoardsComponent.prototype.delete = function (board) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'This will delete your project permanently!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'Cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Delete method
                _this.boardCollection.take(1).subscribe(function (collection) { return collection.doc(board.id).delete(); });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Your project has been deleted.', 'success');
                // Google analytics event
                window.ga('send', 'event', {
                    eventCategory: 'Project management',
                    eventAction: 'Delete project',
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Cancelled', 'Your project is safe', 'error');
            }
        });
    };
    BoardsComponent.prototype.edit = function (board) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                            title: 'Update the project name',
                            input: 'text',
                            inputValue: board.name,
                            showCancelButton: true,
                            confirmButtonText: 'Done',
                            reverseButtons: true,
                            onOpen: function () {
                                var input = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.getInput();
                                input.setSelectionRange(0, input.value.length);
                            },
                            inputValidator: function (value) {
                                return !value && 'You need to write something!';
                            }
                        })];
                    case 1:
                        updatedName = (_a.sent()).value;
                        if (updatedName) {
                            this.boardCollection.take(1).subscribe(function (collection) { return collection.doc(board.id).update({
                                name: updatedName
                            }); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BoardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-boards',
            template: __webpack_require__(/*! ./boards.component.html */ "./app/ui/boards/boards.component.html"),
            styles: [__webpack_require__(/*! ./boards.component.css */ "./app/ui/boards/boards.component.css")]
        }),
        __metadata("design:paramtypes", [_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__["AuthServiceService"]])
    ], BoardsComponent);
    return BoardsComponent;
}());



/***/ }),

/***/ "./app/ui/login/login.component.css":
/*!******************************************!*\
  !*** ./app/ui/login/login.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n  text-align: center;\r\n  display: table;\r\n  margin: 80px auto;\r\n}\r\n\r\n#logo {\r\n  width: 90px;\r\n  height: 200px;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  margin-top: 16px;\r\n}\r\n\r\n.btn {\r\n  background-position: 1em;\r\n  background-repeat: no-repeat;\r\n  background-size: 2em;\r\n  border-radius: 0.5em;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-size: 1em;\r\n  height: 4em;\r\n  line-height: 1em;\r\n  padding: 0 2em 0 4em;\r\n  text-decoration: none;\r\n  transition: all 0.5s;\r\n  width: 260px;\r\n}\r\n\r\n.btn-google {\r\n  background-color: #dd4b39;\r\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 width%3D%2235px%22 height%3D%2235px%22 viewBox%3D%2210 10 110.658 110.646%22 enable-background%3D%22new 0 0 134.658 131.646%22%0D%09 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cg%3E%0D%09%09%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M70.479%2C71.845l-3.983-3.093c-1.213-1.006-2.872-2.334-2.872-4.765c0-2.441%2C1.659-3.993%2C3.099-5.43%0D%09%09%09c4.64-3.652%2C9.276-7.539%2C9.276-15.73c0-8.423-5.3-12.854-7.84-14.956h6.849l7.189-4.517H60.418%0D%09%09%09c-5.976%2C0-14.588%2C1.414-20.893%2C6.619c-4.752%2C4.1-7.07%2C9.753-7.07%2C14.842c0%2C8.639%2C6.633%2C17.396%2C18.346%2C17.396%0D%09%09%09c1.106%2C0%2C2.316-0.109%2C3.534-0.222c-0.547%2C1.331-1.1%2C2.439-1.1%2C4.32c0%2C3.431%2C1.763%2C5.535%2C3.317%2C7.528%0D%09%09%09c-4.977%2C0.342-14.268%2C0.893-21.117%2C5.103c-6.523%2C3.879-8.508%2C9.525-8.508%2C13.51c0%2C8.202%2C7.731%2C15.842%2C23.762%2C15.842%0D%09%09%09c19.01%2C0%2C29.074-10.519%2C29.074-20.932C79.764%2C79.709%2C75.344%2C75.943%2C70.479%2C71.845z M56%2C59.107%0D%09%09%09c-9.51%2C0-13.818-12.294-13.818-19.712c0-2.888%2C0.547-5.87%2C2.428-8.199c1.773-2.218%2C4.861-3.657%2C7.744-3.657%0D%09%09%09c9.168%2C0%2C13.923%2C12.404%2C13.923%2C20.382c0%2C1.996-0.22%2C5.533-2.762%2C8.09C61.737%2C57.785%2C58.762%2C59.107%2C56%2C59.107z M56.109%2C103.65%0D%09%09%09c-11.826%2C0-19.452-5.657-19.452-13.523c0-7.864%2C7.071-10.524%2C9.504-11.405c4.64-1.561%2C10.611-1.779%2C11.607-1.779%0D%09%09%09c1.105%2C0%2C1.658%2C0%2C2.538%2C0.111c8.407%2C5.983%2C12.056%2C8.965%2C12.056%2C14.629C72.362%2C98.542%2C66.723%2C103.65%2C56.109%2C103.65z%22%2F%3E%0D%09%09%3Cpolygon fill%3D%22%23FFFFFF%22 points%3D%2298.393%2C58.938 98.393%2C47.863 92.923%2C47.863 92.923%2C58.938 81.866%2C58.938 81.866%2C64.469%0D%09%09%0992.923%2C64.469 92.923%2C75.612 98.393%2C75.612 98.393%2C64.469 109.506%2C64.469 109.506%2C58.938 %09%09%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n}\r\n\r\n.btn-google:hover {\r\n  background-color: #e47365;\r\n}\r\n\r\n.btn-google:active {\r\n  background-color: #c23321;\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #3b5998;\r\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 width%3D%2235px%22 height%3D%2235px%22 viewBox%3D%220 0 300 300%22 enable-background%3D%22new 0 0 266.893 266.895%22%0D%09 xml%3Aspace%3D%22preserve%22%3E%0D%3Cpath id%3D%22f%22 fill%3D%22%23FFFFFF%22 d%3D%22M182.409%2C262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261%2C3.127-18.935%2C19.275-18.935%0D%09l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695%2C0-50.025%2C18.126-50.025%2C51.413v28.684h-33.585v38.895h33.585%0D%09v99.803H182.409z%22%2F%3E%0D%3C%2Fsvg%3E\");\r\n}\r\n\r\n.btn-facebook:hover {\r\n  background-color: #4c70ba;\r\n}\r\n\r\n.btn-facebook:active {\r\n  background-color: #2d4373;\r\n}\r\n\r\n#progressbar {\r\n  display: none;\r\n}\r\n\r\n.mdc-linear-progress .mdc-linear-progress__bar-inner {\r\n  background-color: var(--button-color);\r\n}\r\n"

/***/ }),

/***/ "./app/ui/login/login.component.html":
/*!*******************************************!*\
  !*** ./app/ui/login/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" id=\"spinnerWrapper\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n\r\n<main *ngIf=\"!loading\">\r\n  <svg id=\"logo\" version=\"1.1\" xmlns=\"&ns_svg;\" xmlns:xlink=\"&ns_xlink;\" width=\"512\" height=\"522\" viewBox=\"0 0 512 522\" overflow=\"visible\"\r\n    enable-background=\"new 0 0 512 522\" xml:space=\"preserve\">\r\n\r\n    <g id=\"Layer_2\">\r\n      <circle fill=\"none\" stroke=\"#484848\" stroke-width=\"44\" cx=\"255\" cy=\"130\" r=\"85\" />\r\n      <circle fill=\"none\" stroke=\"#484848\" stroke-width=\"44\" cx=\"108\" cy=\"385\" r=\"85\" />\r\n      <circle fill=\"none\" stroke=\"#484848\" stroke-width=\"44\" cx=\"403\" cy=\"384\" r=\"85\" />\r\n    </g>\r\n    <g id=\"Layer_3\">\r\n      <g>\r\n        <g>\r\n          <path fill=\"#484848\" d=\"M334.938,125.557C334.963,126.37,335,127.181,335,128c0,15.014-4.1,29.063-11.219,41.118\r\n             C370.27,193.837,402,242.779,402,299c0,1.684-0.039,3.357-0.096,5.027c0.366-0.005,0.729-0.027,1.096-0.027\r\n             c15.506,0,29.971,4.425,42.229,12.061C445.729,310.438,446,304.75,446,299C446,222.208,400.441,155.867,334.938,125.557z\r\n              M184.689,169.936C177.271,157.703,173,143.351,173,128c0-0.502,0.029-0.997,0.038-1.497C108.622,157.234,64,223.001,64,299\r\n             c0,6.233,0.31,12.396,0.897,18.479C77.243,310.194,91.628,306,107,306c0.393,0,0.78,0.024,1.172,0.029\r\n             c-0.11-2.33-0.172-4.673-0.172-7.029C108,243.396,139.034,194.907,184.689,169.936z M333.343,423.328\r\n             C310.649,437.68,283.779,446,255,446c-26.866,0-52.067-7.25-73.762-19.889c-6.814,13.604-17.25,25.067-30.051,33.137\r\n             C181.093,478.688,216.749,490,255,490c41.157,0,79.315-13.086,110.533-35.314C352.041,447.52,340.855,436.604,333.343,423.328z\"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </svg>\r\n  <h1>Sign in to Scrum</h1>\r\n  <br>\r\n  <ul>\r\n    <li>\r\n      <button class=\"btn btn-facebook\" (click)=\"signInWithFacebook()\">Sign in with Facebook </button>\r\n    </li>\r\n    <li>\r\n      <button class=\"btn-google btn\" (click)=\"signInWithGoogle()\">Sign in with Google </button>\r\n    </li>\r\n\r\n  </ul>\r\n</main>"

/***/ }),

/***/ "./app/ui/login/login.component.ts":
/*!*****************************************!*\
  !*** ./app/ui/login/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/navbar.service */ "./app/services/navbar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/functions */ "../node_modules/angularfire2/functions/index.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_functions__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, route, router, navbarService, afs, afFunctions) {
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.navbarService = navbarService;
        this.afs = afs;
        this.afFunctions = afFunctions;
        this.loading = true;
        navbarService.hidden = true;
        this.teamId = this.route.snapshot.queryParamMap.get('teamId');
        this.code = this.route.snapshot.queryParamMap.get('code');
        console.log({ code: this.code, teamId: this.teamId });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.auth.user$.subscribe(function (user) {
            _this.loading = false;
            if (user) {
                if (_this.teamId && _this.code) {
                    _this.loading = true;
                    // Join the team
                    console.log('adding the user to the team');
                    _this.loadingTxt = 'Adding you to the team, please wait';
                    var addNonExistentUsers = _this.afFunctions.httpsCallable('addNonExistentUsers');
                    addNonExistentUsers({
                        code: _this.code, uid: user.uid, teamId: _this.teamId,
                        imgUrl: user.photoURL, name: user.displayName
                    }).toPromise().then(function () {
                        _this.router.navigate(['/']);
                    });
                }
                else {
                    _this.router.navigate(['/']);
                }
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.navbarService.hidden = false;
        this.sub.unsubscribe();
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        this.loading = true;
        this.auth.signInWithFacebook();
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        this.loading = true;
        this.auth.signInWithGoogle();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./app/ui/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./app/ui/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"], angularfire2_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/ui/navbar/navbar.component.css":
/*!********************************************!*\
  !*** ./app/ui/navbar/navbar.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n    height: 64px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: var(--header);\r\n    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);\r\n}\r\n\r\n#logo {\r\n    width: 29px;\r\n    color: white;\r\n    border-radius: 50%;\r\n    height: 29px;\r\n    margin-top: 7px;\r\n    padding: 10px;\r\n    background-color: var(--header-title);\r\n}\r\n\r\n#logoWrapper {\r\n    display: flex;\r\n}\r\n\r\n#logoTxt {\r\n    line-height: 64px;\r\n    margin-left: 13px;\r\n}\r\n\r\nh1 {\r\n    color: var(--header-title);\r\n    font-size: 30px;\r\n    font-family: audiowide;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n\r\n#navbarTitle {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: calc(100% - 160px);\r\n}\r\n\r\n#profilePic {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    right: 25px;\r\n    cursor: pointer;\r\n}\r\n\r\n#profilePic img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#profilePic mat-icon {\r\n    position: absolute;\r\n    font-size: 42px;\r\n}\r\n\r\n#infoWrapper,\r\n#darkModeSettings {\r\n    display: flex;\r\n    margin: 0 16px;\r\n    font-weight: 500;\r\n    color: rgba(0, 0, 0, .87);\r\n}\r\n\r\n#infoWrapper img {\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n#name {\r\n    font-size: 20px;\r\n    margin: 0;\r\n    margin-top: 3px;\r\n    margin-left: 7px;\r\n}\r\n\r\n#email {\r\n    font-size: 15px;\r\n    margin-left: 7px;\r\n    margin-top: 2px;\r\n}\r\n\r\nmat-slide-toggle {\r\n    margin: 16px;\r\n}\r\n\r\n#backBtn {\r\n    position: absolute;\r\n    line-height: 64px;\r\n    text-align: center;\r\n    top: 0;\r\n    left: 35px;\r\n    font-size: 32px;\r\n    color: var(--txt-color);\r\n}\r\n\r\n#hr {\r\n    border-bottom: 1px solid #ebebeb;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    header {\r\n        height: 56px;\r\n    }\r\n    header h1 {\r\n        font-size: 24px;\r\n        width: calc(100% - 120px);\r\n    }\r\n    #magsonLogo {\r\n        text-shadow: 0 1px 4px var(--button-accent);\r\n    }\r\n    #profilePic {\r\n        right: 10px;\r\n    }\r\n    #backBtn {\r\n        line-height: 56px;\r\n        left: 16px;\r\n        font-size: 30px;\r\n    }\r\n}"

/***/ }),

/***/ "./app/ui/navbar/navbar.component.html":
/*!*********************************************!*\
  !*** ./app/ui/navbar/navbar.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"!navbarService.hidden\">\r\n  <a [routerLink]=\"['/']\">\r\n    <mat-icon *ngIf=\"navbarService.backBtn\" id=\"backBtn\">arrow_back</mat-icon>\r\n  </a>\r\n  <div id=\"logoWrapper\" *ngIf=\"!navbarService.title\">\r\n    <svg id=\"logo\" version=\"1.1\" xmlns=\"&ns_svg;\" xmlns:xlink=\"&ns_xlink;\" width=\"512\" height=\"522\" viewBox=\"0 0 512 522\"\r\n      overflow=\"visible\" enable-background=\"new 0 0 512 522\" xml:space=\"preserve\">\r\n      <g id=\"Layer_2\">\r\n        <circle fill=\"none\" stroke=\"currentcolor\" stroke-width=\"44\" cx=\"255\" cy=\"130\" r=\"85\" />\r\n        <circle fill=\"none\" stroke=\"currentcolor\" stroke-width=\"44\" cx=\"108\" cy=\"385\" r=\"85\" />\r\n        <circle fill=\"none\" stroke=\"currentcolor\" stroke-width=\"44\" cx=\"403\" cy=\"384\" r=\"85\" />\r\n      </g>\r\n      <g id=\"Layer_3\">\r\n        <g>\r\n          <g>\r\n            <path fill=\"currentcolor\" d=\"M334.938,125.557C334.963,126.37,335,127.181,335,128c0,15.014-4.1,29.063-11.219,41.118\r\n          C370.27,193.837,402,242.779,402,299c0,1.684-0.039,3.357-0.096,5.027c0.366-0.005,0.729-0.027,1.096-0.027\r\n          c15.506,0,29.971,4.425,42.229,12.061C445.729,310.438,446,304.75,446,299C446,222.208,400.441,155.867,334.938,125.557z\r\n           M184.689,169.936C177.271,157.703,173,143.351,173,128c0-0.502,0.029-0.997,0.038-1.497C108.622,157.234,64,223.001,64,299\r\n          c0,6.233,0.31,12.396,0.897,18.479C77.243,310.194,91.628,306,107,306c0.393,0,0.78,0.024,1.172,0.029\r\n          c-0.11-2.33-0.172-4.673-0.172-7.029C108,243.396,139.034,194.907,184.689,169.936z M333.343,423.328\r\n          C310.649,437.68,283.779,446,255,446c-26.866,0-52.067-7.25-73.762-19.889c-6.814,13.604-17.25,25.067-30.051,33.137\r\n          C181.093,478.688,216.749,490,255,490c41.157,0,79.315-13.086,110.533-35.314C352.041,447.52,340.855,436.604,333.343,423.328z\" />\r\n          </g>\r\n        </g>\r\n      </g>\r\n    </svg>\r\n    <h1 id=\"logoTxt\">Scrumboard.io</h1>\r\n  </div>\r\n  <h1 *ngIf=\"navbarService.title\" id=\"navbarTitle\">{{navbarService.title}}</h1>\r\n  <div id=\"profilePic\" [matMenuTriggerFor]=\"menu\">\r\n    <img [src]=\"profileUrl\" alt=\"\">\r\n    <mat-icon>account_circle</mat-icon>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n    <div id=\"infoWrapper\">\r\n      <img [src]=\"profileUrl\" alt=\"\">\r\n      <div>\r\n        <p id=\"name\">{{profileName}}</p>\r\n        <p id=\"email\">{{profileEmail}}</p>\r\n      </div>\r\n    </div>\r\n    <div id=\"darkModeSettings\">\r\n      <p>Dark mode:</p>\r\n      <mat-slide-toggle [checked]=\"darkThemeActivated\" (change)=\"toggleTheme($event)\" (click)=\"$event.stopPropagation()\"></mat-slide-toggle>\r\n    </div>\r\n    <div id=\"hr\"></div>\r\n    <button mat-menu-item [routerLink]=\"['/privacy']\">\r\n      <mat-icon>book</mat-icon>\r\n      <span>Privacy policy</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"sendFeedback()\">\r\n      <mat-icon>feedback</mat-icon>\r\n      <span>Send feedback</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"auth.logOut()\">\r\n      <mat-icon>exit_to_app</mat-icon>\r\n      <span>Logout</span>\r\n    </button>\r\n  </mat-menu>\r\n</header>"

/***/ }),

/***/ "./app/ui/navbar/navbar.component.ts":
/*!*******************************************!*\
  !*** ./app/ui/navbar/navbar.component.ts ***!
  \*******************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _services_messaging_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/messaging.service */ "./app/services/messaging.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/navbar.service */ "./app/services/navbar.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "../node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "../node_modules/firebase/firestore/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, navbarService, afs, mess) {
        var _this = this;
        this.auth = auth;
        this.navbarService = navbarService;
        this.afs = afs;
        this.mess = mess;
        this.darkThemeActivated = false;
        // IMPORTANT: The theme must also be changed in styles.css
        this.defaultTheme = "\n    --header: white;\n    --cards: white;\n    --txt-color: #484848;\n    --txt-color-light: #B2B0B0;\n    --bg-color: #F1F3F4;\n    --button-color: #4285f4;\n    --button-accent: #5491f5;\n    --header-title: #484848;\n    --link-color: #0000EE;\n    --accent-light: #e8f0fe;\n  ";
        this.darkTheme = "\n    --header: #1D2A32;\n    --cards: #2B3942;\n    --txt-color: white;\n    --txt-color-light: white;\n    --bg-color: #203139;\n    --button-color: #e91e63;\n    --button-accent: #eb3472;\n    --header-title: #e91e63;\n    --link-color: white;\n    --accent-light: #392031;\n  ";
        this.sub = auth.user$.filter(function (user) { return user !== null; }).subscribe(function (user) {
            _this.profileUrl = user.photoURL;
            _this.profileName = user.displayName;
            _this.profileEmail = user.email;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // get the saved theme option from localStorage
        try {
            this.darkThemeActivated = JSON.parse(localStorage.darkTheme);
        }
        catch (_a) {
            this.darkThemeActivated = false;
        }
        this.setTheme();
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NavbarComponent.prototype.toggleTheme = function (event) {
        this.darkThemeActivated = event.checked;
        this.setTheme();
        // save the theme opttion to localStorage
        localStorage.darkTheme = this.darkThemeActivated;
    };
    NavbarComponent.prototype.setTheme = function () {
        if (this.darkThemeActivated) {
            // Google analytics event
            window.ga('send', 'event', {
                eventCategory: 'User settings',
                eventLabel: 'Theme set to dark',
                eventAction: 'Toggle theme',
            });
            this.changeCssVariables(this.darkTheme);
        }
        else {
            // Google analytics event
            window.ga('send', 'event', {
                eventCategory: 'User settings',
                eventLabel: 'Team set to light',
                eventAction: 'Toggle theme',
            });
            this.changeCssVariables(this.defaultTheme);
        }
    };
    NavbarComponent.prototype.changeCssVariables = function (theme) {
        document.querySelector('body').style.cssText = theme;
    };
    NavbarComponent.prototype.sendFeedback = function () {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: 'Send feedback',
                            text: 'Please tell us what you are missing with this application and/or what you like about it.',
                            html: "\n      <select id=\"feedbackSelect\" class=\"swal2-select\" style=\"outline:0;\">\n        <option value=\"General\">General</option>\n        <option value=\"Bug\">Bug</option>\n        <option value=\"Improvements\">Improvements</option>\n        <option value=\"Feature request\">Feature request</option>\n      </select>\n      <textarea id=\"feedbackTxt\" class=\"swal2-textarea\"></textarea>",
                            confirmButtonText: 'Send',
                            showCancelButton: true,
                            reverseButtons: true,
                            preConfirm: function () {
                                return [
                                    document.getElementById('feedbackSelect').value,
                                    document.getElementById('feedbackTxt').value,
                                ];
                            }
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post[1] !== '') {
                            // Google analytics event
                            window.ga('send', 'event', {
                                eventCategory: 'User action',
                                eventAction: 'Sent feedback',
                            });
                            this.auth.user$.take(1).subscribe(function (user) {
                                _this.afs.collection('feedback').add({
                                    category: post[0],
                                    txt: post[1],
                                    date: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.serverTimestamp(),
                                    uid: user.uid,
                                    name: user.displayName,
                                    email: user.email
                                }).then(function () {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Thank you!', 'We have recieved your feedback.', 'success');
                                }).catch(function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Error', 'Your feedback was not sent, please try again', 'error'); });
                            });
                        }
                        else if (post[1] === '') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                                title: 'Invalid.',
                                type: 'error',
                                text: 'Please fill in something!'
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./app/ui/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./app/ui/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _services_messaging_service__WEBPACK_IMPORTED_MODULE_0__["MessagingService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./app/ui/privacy/privacy.component.css":
/*!**********************************************!*\
  !*** ./app/ui/privacy/privacy.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".policy, #header-container {\r\n  margin: 0;\r\n  color: #333;\r\n  max-width: 600px;\r\n  margin: 10px auto;\r\n  padding: 20px;\r\n}\r\n\r\n#header-container {\r\n  color: white;\r\n}\r\n\r\n.col-md-12 {\r\n  position: relative;\r\n  min-height: 1px;\r\n  padding-left: 15px;\r\n  padding-right: 15px\r\n}\r\n\r\n.view-pages {\r\n  background: #FFF;\r\n  font-family: Arial, sans-serif;\r\n  font-size: 16px;\r\n  line-height: 24px\r\n}\r\n\r\n.view-pages .header {\r\n  margin: 0;\r\n  padding: 10px 0;\r\n  background: #3c3c3c;\r\n  color: #FFF\r\n}\r\n\r\n.view-pages .header h1 {\r\n  font-size: 25px;\r\n  line-height: 35px;\r\n  margin: 0\r\n}\r\n\r\n.view-pages .policy {\r\n  padding: 0;\r\n  background: #FFF\r\n}\r\n\r\n.view-pages .content {\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  word-wrap: break-word;\r\n  color: #333;\r\n  padding: 30px 0;\r\n  background: #FFF\r\n}\r\n\r\n.view-pages .content h1 {\r\n  font-size: 30px;\r\n  margin: 0 0 30px 0\r\n}\r\n\r\n.view-pages .content h2 {\r\n  font-size: 24px;\r\n  margin: 0 0 30px 0\r\n}\r\n\r\n.view-pages .content h3 {\r\n  font-size: 20px;\r\n  margin: 0 0 30px 0\r\n}\r\n\r\n.view-pages .content h4 {\r\n  font-size: 16px;\r\n  margin: 0 0 30px 0\r\n}\r\n\r\n.view-pages .content p {\r\n  margin: 0 0 30px 0;\r\n  color: #333\r\n}\r\n\r\n.view-pages .content ol,\r\n.view-pages .content ul {\r\n  margin: 0 0 30px 0\r\n}\r\n\r\n.view-pages .content a {\r\n  color: #333\r\n}\r\n\r\n.view-pages .credits {\r\n  background: #F4F9FD;\r\n  padding: 20px 0;\r\n  color: #999;\r\n  font-size: 12px;\r\n  line-height: 18px\r\n}\r\n"

/***/ }),

/***/ "./app/ui/privacy/privacy.component.html":
/*!***********************************************!*\
  !*** ./app/ui/privacy/privacy.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrap\" class=\"view-pages\">\r\n  <div class=\"header\">\r\n    <div class=\"container\" id=\"header-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h1>\r\n            Magson\r\n          </h1>\r\n          <p>\r\n            Privacy Policy of https://scrum.magson.no\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"policy\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n\r\n          <div class=\"content\">\r\n            <h1>Privacy Policy</h1>\r\n\r\n\r\n            <p>Effective date: August 09, 2018</p>\r\n\r\n\r\n            <p>Magson (\"us\", \"we\", or \"our\") operates the https://scrum.magson.no website (the \"Service\").</p>\r\n\r\n            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you\r\n              use our Service and the choices you have associated with that data. This Privacy Policy for Magson is powered\r\n              by\r\n              <a href=\"https://www.freeprivacypolicy.com/free-privacy-policy-generator.php\">FreePrivacyPolicy.com</a>.</p>\r\n\r\n            <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use\r\n              of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used\r\n              in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://scrum.magson.no</p>\r\n\r\n\r\n            <h2>Information Collection And Use</h2>\r\n\r\n            <p>We collect several different types of information for various purposes to provide and improve our Service to\r\n              you.\r\n            </p>\r\n\r\n            <h3>Types of Data Collected</h3>\r\n\r\n            <h4>Personal Data</h4>\r\n\r\n            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can\r\n              be used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but\r\n              is not limited to:</p>\r\n\r\n            <ul>\r\n              <li>Email address</li>\r\n              <li>First name and last name</li>\r\n              <li>Cookies and Usage Data</li>\r\n            </ul>\r\n\r\n            <h4>Usage Data</h4>\r\n\r\n            <p>We may also collect information how the Service is accessed and used (\"Usage Data\"). This Usage Data may include\r\n              information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version,\r\n              the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique\r\n              device identifiers and other diagnostic data.</p>\r\n\r\n            <h4>Tracking &amp; Cookies Data</h4>\r\n            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>\r\n            <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent\r\n              to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags,\r\n              and scripts to collect and track information and to improve and analyze our Service.</p>\r\n            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you\r\n              do not accept cookies, you may not be able to use some portions of our Service.</p>\r\n            <p>You can learn more about cookies\r\n              <a href=\"https://cookies.insites.com/about-cookies/\">here</a>\r\n            </p>\r\n            <p>Examples of Cookies we use:</p>\r\n            <ul>\r\n              <li>\r\n                <strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\r\n              <li>\r\n                <strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>\r\n              <li>\r\n                <strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\r\n            </ul>\r\n\r\n            <h2>Use of Data</h2>\r\n\r\n            <p>Magson uses the collected data for various purposes:</p>\r\n            <ul>\r\n              <li>To provide and maintain the Service</li>\r\n              <li>To notify you about changes to our Service</li>\r\n              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>\r\n              <li>To provide customer care and support</li>\r\n              <li>To provide analysis or valuable information so that we can improve the Service</li>\r\n              <li>To monitor the usage of the Service</li>\r\n              <li>To detect, prevent and address technical issues</li>\r\n            </ul>\r\n\r\n            <h2>Transfer Of Data</h2>\r\n            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside\r\n              of your state, province, country or other governmental jurisdiction where the data protection laws may differ\r\n              than those from your jurisdiction.</p>\r\n            <p>If you are located outside Norway and choose to provide information to us, please note that we transfer the data,\r\n              including Personal Data, to Norway and process it there.</p>\r\n            <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement\r\n              to that transfer.</p>\r\n            <p>Magson will take all steps reasonably necessary to ensure that your data is treated securely and in accordance\r\n              with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country\r\n              unless there are adequate controls in place including the security of your data and other personal information.</p>\r\n\r\n            <h2>Disclosure Of Data</h2>\r\n\r\n            <h3>Legal Requirements</h3>\r\n            <p>Magson may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\r\n            <ul>\r\n              <li>To comply with a legal obligation</li>\r\n              <li>To protect and defend the rights or property of Magson</li>\r\n              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\r\n              <li>To protect the personal safety of users of the Service or the public</li>\r\n              <li>To protect against legal liability</li>\r\n            </ul>\r\n\r\n            <h2>Security Of Data</h2>\r\n            <p>The security of your data is important to us, but remember that no method of transmission over the Internet,\r\n              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect\r\n              your Personal Data, we cannot guarantee its absolute security.</p>\r\n\r\n            <h2>Service Providers</h2>\r\n            <p>We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide\r\n              the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service\r\n              is used.</p>\r\n            <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated\r\n              not to disclose or use it for any other purpose.</p>\r\n\r\n            <h3>Analytics</h3>\r\n            <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>\r\n            <ul>\r\n              <li>\r\n                <p>\r\n                  <strong>Google Analytics</strong>\r\n                </p>\r\n                <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google\r\n                  uses the data collected to track and monitor the use of our Service. This data is shared with other Google\r\n                  services. Google may use the collected data to contextualize and personalize the ads of its own advertising\r\n                  network.\r\n                </p>\r\n                <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the\r\n                  Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js,\r\n                  and dc.js) from sharing information with Google Analytics about visits activity.</p>\r\n                <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web\r\n                  page:\r\n                  <a href=\"https://policies.google.com/privacy?hl=en\">https://policies.google.com/privacy?hl=en</a>\r\n                </p>\r\n              </li>\r\n            </ul>\r\n\r\n\r\n            <h2>Links To Other Sites</h2>\r\n            <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link,\r\n              you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every\r\n              site you visit.</p>\r\n            <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third\r\n              party sites or services.</p>\r\n\r\n\r\n            <h2>Children's Privacy</h2>\r\n            <p>Our Service does not address anyone under the age of 18 (\"Children\").</p>\r\n            <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a\r\n              parent or guardian and you are aware that your Children has provided us with Personal Data, please contact\r\n              us. If we become aware that we have collected Personal Data from children without verification of parental\r\n              consent, we take steps to remove that information from our servers.</p>\r\n\r\n\r\n            <h2>Changes To This Privacy Policy</h2>\r\n            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy\r\n              Policy on this page.</p>\r\n            <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective\r\n              and update the \"effective date\" at the top of this Privacy Policy.</p>\r\n            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are\r\n              effective when they are posted on this page.</p>\r\n\r\n\r\n            <h2>Contact Us</h2>\r\n            <p>If you have any questions about this Privacy Policy, please contact us:</p>\r\n            <ul>\r\n              <li>By email: support@magson.no</li>\r\n\r\n            </ul>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./app/ui/privacy/privacy.component.ts":
/*!*********************************************!*\
  !*** ./app/ui/privacy/privacy.component.ts ***!
  \*********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/navbar.service */ "./app/services/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent(navbarService) {
        this.navbarService = navbarService;
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        this.navbarService.backBtn = true;
    };
    PrivacyComponent.prototype.ngOnDestroy = function () {
        this.navbarService.backBtn = false;
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./app/ui/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.css */ "./app/ui/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./app/ui/scrum/scrum.component.css":
/*!******************************************!*\
  !*** ./app/ui/scrum/scrum.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\n#tabNav {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: var(--button-color);\r\n    z-index: 10;\r\n    font-weight: bold;\r\n    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);\r\n}\r\n\r\n#tabNav ul {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    list-style: none;\r\n    padding: 0;\r\n    display: table;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n#tabNav li {\r\n    line-height: 48px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    width: 65px;\r\n    margin: 0 30px;\r\n    font-size: 17px;\r\n    color: rgba(255, 255, 255, .7);\r\n    cursor: pointer;\r\n}\r\n\r\n#tabNav li.active {\r\n    color: var(--bg-color);\r\n    border-bottom: 2px solid var(--bg-color);\r\n}\r\n\r\n.todoContainer {\r\n    margin: 16px auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-family: roboto;\r\n}\r\n\r\n#sortBy {\r\n    position: absolute;\r\n    right: 50px;\r\n    color: var(--txt-color) !important;\r\n    width: 120px;\r\n}\r\n\r\n#sortBy mat-icon {\r\n    margin-top: -3px;\r\n}\r\n\r\nmat-select {\r\n    position: inherit;\r\n}\r\n\r\n.menuBtn {\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.todoContainer>section {\r\n    flex-grow: 1;\r\n    margin: 0 10px;\r\n    max-width: calc(33.33% - 20px);\r\n}\r\n\r\nsection .container {\r\n    margin: 0 10px;\r\n}\r\n\r\n.card {\r\n    width: 100%;\r\n    background: var(--cards);\r\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);\r\n    display: table;\r\n    border-radius: 8px;\r\n    margin-bottom: 13px;\r\n    position: relative;\r\n}\r\n\r\n.gridWrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    grid-gap: 10px;\r\n    position: relative;\r\n    font-family: roboto;\r\n}\r\n\r\n.gridCard {\r\n    background: var(--cards);\r\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n#profilePic {\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n}\r\n\r\n#profilePic img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#profilePic mat-icon {\r\n    position: absolute;\r\n    font-size: 42px;\r\n}\r\n\r\n.withProfilePic strong {\r\n    position: absolute;\r\n    margin-top: 19px;\r\n    margin-left: 10px;\r\n    width: calc(100% - 90px);\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.withProfilePic p {\r\n    margin-top: 8px;\r\n}\r\n\r\n#backButton {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    left: 30px;\r\n    font-size: 35px;\r\n    top: 24px;\r\n}\r\n\r\n.setButton {\r\n    width: 100%;\r\n    border-style: none;\r\n    font-size: 15px;\r\n    border-radius: 0 0 8px 8px;\r\n    padding: 10px;\r\n    background-color: var(--button-color);\r\n    color: white;\r\n    cursor: pointer;\r\n    outline: none;\r\n    transition: all 0.2s;\r\n}\r\n\r\n.setButton:hover {\r\n    background-color: var(--button-accent);\r\n}\r\n\r\n.altContainer {\r\n    margin-bottom: 55px !important;\r\n}\r\n\r\n.setButton {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.container>p,\r\n.container>strong {\r\n    font-size: 19px;\r\n    -ms-word-break: break-all;\r\n    word-break: break-all;\r\n    word-break: break-word;\r\n    -webkit-hyphens: auto;\r\n    -ms-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n#tabNav .mat-badge-medium.mat-badge-above .mat-badge-content {\r\n  top: 2px !important;\r\n}\r\n\r\n.container>p:first-letter {\r\n    /* This fucks up. Cannot select last letter on text in tasks */\r\n    text-transform: uppercase;\r\n}\r\n\r\n#shareBtn {\r\n    position: absolute;\r\n    right: 88px;\r\n    top: 14px;\r\n}\r\n\r\n#shareBtn mat-icon {\r\n    margin-right: 3px;\r\n    font-size: 21px;\r\n}\r\n\r\n#copyLinkBtn {\r\n    float: right;\r\n}\r\n\r\n#shareableLink {\r\n    width: 100%;\r\n}\r\n\r\n#noEntries {\r\n    margin-top: 30%;\r\n    text-align: center;\r\n}\r\n\r\n.no_content_div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    max-width: 500px;\r\n    border: 0 solid;\r\n    border-radius: 10px;\r\n    padding: 40px 0 25px 0;\r\n    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);\r\n    background-color: var(--header);\r\n}\r\n\r\n.no_content_div button {\r\n    background-color: var(--button-color);\r\n    border: 0 solid;\r\n    border-radius: 7px;\r\n    font-size: 20px;\r\n    transition: all 0.3s;\r\n    display: block;\r\n    cursor: pointer;\r\n    outline: 0;\r\n    margin: 30px auto 0 auto;\r\n    padding: 10px 20px;\r\n    color: white;\r\n}\r\n\r\n.no_content_div button:hover {\r\n    background-color: var(--button-accent);\r\n}\r\n\r\n.no_content_div h1 {\r\n    width: calc(100% - 46px);\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    padding: 0 23px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .no_content_div h1 {\r\n        font-size: 17px;\r\n    }\r\n    .todoContainer {\r\n        display: block;\r\n        margin: 0 auto;\r\n        padding-top: 5px;\r\n    }\r\n    .todoContainer>section {\r\n        max-width: unset;\r\n        margin: 0;\r\n    }\r\n    #sortBy {\r\n        top: 80px;\r\n    }\r\n    #tabNav ul {\r\n        display: block;\r\n    }\r\n    #tabNav li {\r\n        font-size: 14px;\r\n        margin: 0 15px;\r\n    }\r\n}"

/***/ }),

/***/ "./app/ui/scrum/scrum.component.html":
/*!*******************************************!*\
  !*** ./app/ui/scrum/scrum.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"linkShareSwal.show()\" id=\"shareBtn\" mat-stroked-button>\r\n  <mat-icon>link</mat-icon>Share\r\n</button>\r\n<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n<div>\r\n  <div id=\"tabNav\" *ngIf=\"isSignedIn\">\r\n    <ul>\r\n      <li [class.active]=\"navTab == 'todo'\" class=\"selected\" (click)=\"navTab = 'todo'\">Tasks</li>\r\n      <!-- <li [class.active]=\"navTab == 'bugs'\"  (click)=\"navTab = 'bugs'\" [matBadge]=\"($bugs | async)?.length\" matBadgeColor=\"warn\">Bugs</li> -->\r\n      <li [class.active]=\"navTab == 'bugs'\" (click)=\"navTab = 'bugs'\" matBadgeColor=\"warn\">Bugs</li>\r\n      <li [class.active]=\"navTab == 'ideas'\" (click)=\"navTab = 'ideas'\">Ideas</li>\r\n      <li [class.active]=\"navTab == 'notes'\" (click)=\"navTab = 'notes'\">Notes</li>\r\n      <li [class.active]=\"navTab == 'beta'\" (click)=\"navTab = 'beta'\">Feedback</li>\r\n      <li [class.active]=\"navTab == 'info'\" (click)=\"navTab = 'info'\">Info</li>\r\n    </ul>\r\n  </div>\r\n  <main [ngSwitch]='navTab'>\r\n    <div *ngIf=\"isSignedIn\">\r\n      <!-- No tasks -->\r\n      <div *ngIf=\"($todo | async)?.length == 0 && ($inProgress | async)?.length == 0 && ($done | async)?.length == 0 && navTab == 'todo'\">\r\n        <div class=\"no_content_div\">\r\n          <h1>Keep your project´s tasks organized and availible for the whole team</h1>\r\n          <button (click)=\"add()\" (click)=\"$event.stopPropagation()\">Create task</button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!(($todo | async)?.length == 0 && ($inProgress | async)?.length == 0 && ($done | async)?.length == 0)\">\r\n        <div class=\"todoContainer\" *ngSwitchCase=\"'todo'\">\r\n          <div id=\"sortBy\">\r\n            <mat-icon>sort</mat-icon>\r\n            <mat-select placeholder=\"Sort by\" [(value)]=\"sortBy\" (selectionChange)=\"sortChanged()\">\r\n\r\n              <mat-option (click)='sendEvent(\"Priority\")' value='{\"field\": \"priority\", \"direction\": \"desc\"}'>Priority</mat-option>\r\n              <mat-option (click)='sendEvent(\"Newest\")' value='{\"field\": \"time\", \"direction\": \"desc\"}'>Newest</mat-option>\r\n              <mat-option (click)='sendEvent(\"Oldest\")' value='{\"field\": \"time\", \"direction\": \"asc\"}'>Oldest</mat-option>\r\n              <mat-option (click)='sendEvent(\"Alphabetical\")' value='{\"field\": \"txt\", \"direction\": \"asc\"}'>Alfabetical</mat-option>\r\n            </mat-select>\r\n          </div>\r\n          <button mat-fab id=\"addButton\" (click)=\"add()\" (click)=\"$event.stopPropagation()\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n          <section id=\"todoSection\">\r\n            <h3>TODO ({{($todo | async)?.length}})</h3>\r\n            <div id=\"todoElements\">\r\n              <!-- FIXME: Add amount and visibility of comment-->\r\n              <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let entry of $todo | async; trackBy: identify\"\r\n                matBadge=\"1\" matBadgePosition=\"before\" matBadgeColor=\"warn\" [matBadgeHidden]=\"false\">\r\n                <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                  <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item (click)=\"edit(entry)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                    <span>Edit</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"assign(entry)\">\r\n                    <mat-icon>face</mat-icon>\r\n                    <span>Assign developer</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"openThread(entry)\">\r\n                    <mat-icon>chat</mat-icon>\r\n                    <span>Comments</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"delete(entry)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>Delete</span>\r\n                  </button>\r\n                </mat-menu>\r\n                <div class=\"container altContainer\">\r\n                  <p>\r\n                    <strong>Priority: {{entry.priority}}</strong>\r\n                  </p>\r\n                  <p [innerHTML]=\"entry.txt | linky\"></p>\r\n                </div>\r\n                <button matRipple class=\"setButton\" (click)=\"updateEntryState(entry, 'inProgress')\">SET TO INPROGRESS</button>\r\n              </div>\r\n            </div>\r\n\r\n          </section>\r\n          <section id=\"inprogressSection\">\r\n            <h3>In progress ({{($inProgress | async)?.length}})</h3>\r\n            <div id=\"inprogressElements\">\r\n              <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let entry of $inProgress | async; trackBy: identify\">\r\n                <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                  <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item (click)=\"edit(entry)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                    <span>Edit</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"openThread(entry)\">\r\n                    <mat-icon>chat</mat-icon>\r\n                    <span>Comments</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"updateEntryState(entry, 'todo')\">\r\n                    <mat-icon>replay</mat-icon>\r\n                    <span>Rollback</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"delete(entry)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>Delete</span>\r\n                  </button>\r\n                </mat-menu>\r\n                <div class=\"container altContainer withProfilePic\">\r\n                  <div id=\"profilePic\">\r\n                    <img *ngIf=\"entry.imgUrl\" src=\"{{entry.imgUrl}}\">\r\n                    <mat-icon>account_circle</mat-icon>\r\n                  </div>\r\n                  <strong>{{entry.developer}}</strong>\r\n                  <p [innerHTML]=\"entry.txt | linky\"></p>\r\n                </div>\r\n                <button matRipple class=\"setButton\" (click)=\"updateEntryState(entry, 'done')\">FINISHED</button>\r\n              </div>\r\n            </div>\r\n          </section>\r\n          <section id=\"finishedSection\">\r\n            <h3>Done ({{($done | async)?.length}})</h3>\r\n            <div id=\"finishedElements\">\r\n              <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let entry of $done | async; trackBy: identify\">\r\n                <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                  <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item (click)=\"edit(entry)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                    <span>Edit</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"openThread(entry)\">\r\n                    <mat-icon>chat</mat-icon>\r\n                    <span>Comments</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"updateEntryState(entry, 'inProgress')\">\r\n                    <mat-icon>replay</mat-icon>\r\n                    <span>Rollback</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"delete(entry)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>Delete</span>\r\n                  </button>\r\n                </mat-menu>\r\n                <div class=\"container withProfilePic\">\r\n                  <div id=\"profilePic\">\r\n                    <img *ngIf=\"entry.imgUrl\" src=\"{{entry.imgUrl}}\">\r\n                    <mat-icon>account_circle</mat-icon>\r\n                  </div>\r\n                  <strong>{{entry.developer}}</strong>\r\n                  <p [innerHTML]=\"entry.txt | linky\"></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngSwitchCase=\"'bugs'\">\r\n        <!-- No bugs -->\r\n        <!-- TODO: Why is it slow? -->\r\n        <div *ngIf=\"($bugs | async)?.length == 0 && navTab == 'bugs'\">\r\n          <div class=\"no_content_div\">\r\n            <h1>Structure the bugs and make bugfixing easier for everyone</h1>\r\n            <button (click)=\"addBug()\" (click)=\"$event.stopPropagation()\">Report bug</button>\r\n          </div>\r\n        </div>\r\n\r\n        <section *ngIf=\"!(($bugs | async)?.length == 0)\">\r\n          <h3>Bugs ({{($bugs | async)?.length}})</h3>\r\n          <div class=\"gridWrapper\">\r\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"gridCard\" *ngFor=\"let bug of $bugs | async; trackBy: identify\">\r\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"editBug(bug)\">\r\n                  <mat-icon>edit</mat-icon>\r\n                  <span>Edit</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"assign(bug)\">\r\n                  <mat-icon>face</mat-icon>\r\n                  <span>Assign developer</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"openThread(bug)\">\r\n                  <mat-icon>chat</mat-icon>\r\n                  <span>Comments</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"deleteBug(bug, bugCollection)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                  <span>Resolve</span>\r\n                </button>\r\n              </mat-menu>\r\n              <div class=\"container altContainer withProfilePic\">\r\n                <div id=\"profilePic\">\r\n                  <img *ngIf=\"bug.imgUrl\" src=\"{{bug.imgUrl}}\">\r\n                  <mat-icon>account_circle</mat-icon>\r\n                </div>\r\n                <strong>{{bug.developer}}</strong>\r\n                <p [innerHTML]=\"bug.txt | linky\"></p>\r\n              </div>\r\n              <button class=\"setButton\" matRipple (click)=\"move_to_inprogress(bug, bugCollection)\">MOVE TO\r\n                INPROGRESS</button>\r\n            </div>\r\n          </div>\r\n          <button mat-fab id=\"addButton\" (click)=\"addBug()\" (click)=\"$event.stopPropagation()\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </section>\r\n      </div>\r\n\r\n\r\n      <div *ngSwitchCase=\"'ideas'\">\r\n        <!-- No ideas -->\r\n        <!-- TODO: Why is it slow? -->\r\n\r\n        <div *ngIf=\"($ideas | async)?.length == 0 && navTab == 'ideas'\">\r\n          <div class=\"no_content_div\">\r\n            <h1>Dribble down your idea and share it with the team before it slips away</h1>\r\n            <button (click)=\"addIdea()\" (click)=\"$event.stopPropagation()\">Add idea</button>\r\n          </div>\r\n        </div>\r\n        <section *ngIf=\"!(($ideas | async)?.length == 0)\">\r\n          <h3>Ideas ({{($ideas | async)?.length}})</h3>\r\n          <div class=\"gridWrapper\">\r\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"gridCard\" *ngFor=\"let idea of $ideas | async; trackBy: identify\">\r\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"editIdea(idea)\">\r\n                  <mat-icon>edit</mat-icon>\r\n                  <span>Edit</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"openThread(idea)\">\r\n                  <mat-icon>chat</mat-icon>\r\n                  <span>Comments</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"deleteIdea(idea)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                  <span>Delete</span>\r\n                </button>\r\n              </mat-menu>\r\n              <div class=\"container altContainer withProfilePic\">\r\n                <div id=\"profilePic\">\r\n                  <img *ngIf=\"idea.imgUrl\" src=\"{{idea.imgUrl}}\">\r\n                  <mat-icon>account_circle</mat-icon>\r\n                </div>\r\n                <strong>{{idea.developer}}</strong>\r\n                <p [innerHTML]=\"idea.txt | linky\"></p>\r\n              </div>\r\n              <button class=\"setButton\" matRipple (click)=\"move_to_inprogress(idea, ideaCollection)\">MOVE TO\r\n                INPROGRESS</button>\r\n            </div>\r\n          </div>\r\n          <button mat-fab id=\"addButton\" (click)=\"addIdea()\" (click)=\"$event.stopPropagation()\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </section>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'notes'\">\r\n        <!-- No notes -->\r\n        <!-- TODO: Why is it slow? -->\r\n\r\n        <div *ngIf=\"($notes | async)?.length == 0 && navTab == 'notes'\">\r\n          <div class=\"no_content_div\">\r\n            <h1>Write down the little important things about the project</h1>\r\n            <button (click)=\"addNote()\" (click)=\"$event.stopPropagation()\">Add note</button>\r\n          </div>\r\n        </div>\r\n        <section *ngIf=\"!(($notes | async)?.length == 0)\">\r\n          <h3>Notes ({{($notes | async)?.length}})</h3>\r\n          <div class=\"gridWrapper\">\r\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"gridCard\" *ngFor=\"let note of $notes | async; trackBy: identify\">\r\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"editNote(note, noteCollection)\">\r\n                  <mat-icon>edit</mat-icon>\r\n                  <span>Edit</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"openThread(note)\">\r\n                  <mat-icon>chat</mat-icon>\r\n                  <span>Comments</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"deleteNote(note, noteCollection)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                  <span>Delete</span>\r\n                </button>\r\n              </mat-menu>\r\n              <div class=\"container withProfilePic\">\r\n                <div id=\"profilePic\">\r\n                  <img *ngIf=\"note.imgUrl\" src=\"{{note.imgUrl}}\">\r\n                  <mat-icon>account_circle</mat-icon>\r\n                </div>\r\n                <strong>{{note.developer}}</strong>\r\n                <p [innerHTML]=\"note.txt | linky\"></p>\r\n              </div>\r\n              <!--  <button class=\"setButton\" (click)=\"add_to_todo(note)\">MOVE TO TASKS</button> -->\r\n            </div>\r\n          </div>\r\n          <button mat-fab id=\"addButton\" (click)=\"addNote()\" (click)=\"$event.stopPropagation()\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </section>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- No betatester reports -->\r\n    <!-- TODO: Why is it slow? -->\r\n    <div *ngIf=\"(($client_bugs | async)?.length == 0 && ($c_features | async)?.length == 0 && ($c_notes | async)?.length == 0) && navTab=='beta'\">\r\n      <div class=\"no_content_div\" *ngIf=\"isPublic == false\">\r\n        <h1>No customer has done anything blablba ispublic: {{isPublic}}. Share link now</h1>\r\n        <button (click)=\"linkShareSwal.show()\" (click)=\"$event.stopPropagation()\">Make public</button>\r\n      </div>\r\n      <div class=\"no_content_div\" *ngIf=\"isPublic == true\">\r\n        <h1>No data yet but link is public.... share link with others</h1>\r\n        <!-- TODO: action to share link -->\r\n        <button (click)=\"$event.stopPropagation()\">Share link</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"!(($client_bugs | async)?.length == 0 && ($c_features | async)?.length == 0 && ($c_notes | async)?.length == 0)\">\r\n      <div class=\"todoContainer\" *ngSwitchCase=\"'beta'\">\r\n        <section>\r\n          <h3>Bugs ({{($client_bugs | async)?.length}})</h3>\r\n          <div>\r\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let c_bug of $client_bugs | async; trackBy: identify\">\r\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"editBug(c_bug, client_bugs_collection)\">\r\n                  <mat-icon>edit</mat-icon>\r\n                  <span>Edit</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"openThread(c_bug.id, 'client_bugs')\">\r\n                  <mat-icon>chat</mat-icon>\r\n                  <span>Comments</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"deleteBug(c_bug, client_bugs_collection)\" *ngIf=\"isSignedIn\">\r\n                  <mat-icon>delete</mat-icon>\r\n                  <span>Delete</span>\r\n                </button>\r\n              </mat-menu>\r\n              <div class=\"container\">\r\n                <p>\r\n                  <strong>Priority: {{c_bug.priority}}</strong>\r\n                </p>\r\n                <p [innerHTML]=\"c_bug.txt | linky\"></p>\r\n              </div>\r\n              <button class=\"setButton\" matRipple (click)=\"moveToBugs(c_bug)\" *ngIf=\"isSignedIn\">MOVE TO BUGS</button>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section>\r\n          <h3>Feature requests ({{($c_features | async)?.length}})</h3>\r\n          <div>\r\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let c_feature of $c_features | async; trackBy: identify\">\r\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"edit_feature_request(c_feature)\">\r\n                  <mat-icon>edit</mat-icon>\r\n                  <span>Edit</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"openThread(c_feature.id, 'client_feature_request')\">\r\n                  <mat-icon>chat</mat-icon>\r\n                  <span>Comments</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"delete_feature_request(c_feature)\" *ngIf=\"isSignedIn\">\r\n                  <mat-icon>delete</mat-icon>\r\n                  <span>Delete</span>\r\n                </button>\r\n              </mat-menu>\r\n              <div class=\"container\">\r\n                <p>\r\n                  <strong>Priority: {{c_feature.priority}}</strong>\r\n                </p>\r\n                <p [innerHTML]=\"c_feature.txt | linky\"></p>\r\n              </div>\r\n              <button class=\"setButton\" matRipple (click)=\"move_to_inprogress(c_feature, client_feature_collection)\"\r\n                *ngIf=\"isSignedIn\">SET\r\n                INPROGRESS</button>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section>\r\n          <h3>Notes ({{($c_notes | async)?.length}})</h3>\r\n          <div>\r\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let c_note of $c_notes | async; trackBy: identify\">\r\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"editNote(c_note, client_notes_collection)\">\r\n                  <mat-icon>edit</mat-icon>\r\n                  <span>Edit</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"openThread(c_note.id, 'client_notes')\">\r\n                  <mat-icon>chat</mat-icon>\r\n                  <span>Comments</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"deleteNote(c_note, client_notes_collection)\" *ngIf=\"isSignedIn\">\r\n                  <mat-icon>delete</mat-icon>\r\n                  <span>Delete</span>\r\n                </button>\r\n              </mat-menu>\r\n              <div class=\"container\">\r\n                <p [innerHTML]=\"c_note.txt | linky\"></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <button mat-fab id=\"addButton\" (click)=\"add_feedback()\" (click)=\"$event.stopPropagation()\" *ngIf=\"!isSignedIn && isPublic\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"'info'\">\r\n      <p>Info om prosjektet, countdown til deadline?, kontaktansvarlig ved oppdrag, link til prototype/design etc,\r\n        stats (når prosjektet ble dannet\r\n        ++, beste developer?), link til github repo</p>\r\n    </div>\r\n  </main>\r\n</div>\r\n\r\n\r\n\r\n<swal #linkShareSwal title=\"Share with people outside the team\">\r\n  <div *swalPartial>\r\n    <p>You can send the link to other users so they can view the progress of your team.</p>\r\n    <mat-slide-toggle (change)=\"uploadBoardVisibility($event)\" [(checked)]=\"isPublic\">\r\n      Enable shareable link\r\n    </mat-slide-toggle>\r\n    <button mat-raised-button (click)=\"copyLinkTxt()\" id=\"copyLinkBtn\">Copy link</button>\r\n    <br>\r\n    <mat-form-field id=\"shareableLink\">\r\n      <input matInput id=\"shareableLinkInp\" [value]=\"shareableLink\" (click)=\"copyLinkTxt()\" type=\"text\" readonly>\r\n    </mat-form-field>\r\n  </div>\r\n</swal>\r\n"

/***/ }),

/***/ "./app/ui/scrum/scrum.component.ts":
/*!*****************************************!*\
  !*** ./app/ui/scrum/scrum.component.ts ***!
  \*****************************************/
/*! exports provided: ScrumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumComponent", function() { return ScrumComponent; });
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/teams.service */ "./app/services/teams.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/navbar.service */ "./app/services/navbar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "../node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "../node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "../node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _modules_thread_thread_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/thread/thread.component */ "./app/modules/thread/thread.component.ts");
/* harmony import */ var _extra_map_to_iterable_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../extra/map-to-iterable.pipe */ "./app/extra/map-to-iterable.pipe.ts");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-hotkeys */ "../node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "../node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















var ScrumComponent = /** @class */ (function () {
    function ScrumComponent(route, teamsService, auth, snackBar, navbarService, dialog, afs, hotkeysService) {
        var _this = this;
        this.route = route;
        this.teamsService = teamsService;
        this.auth = auth;
        this.snackBar = snackBar;
        this.navbarService = navbarService;
        this.dialog = dialog;
        this.afs = afs;
        this.hotkeysService = hotkeysService;
        this.isPublic = false; // used for the make public link swal popup
        this.isSignedIn = false;
        this.sortBy = '{"field": "priority", "direction": "desc"}';
        this.navTab = 'todo';
        this.loading = true;
        this.sendEvent = function (filter) {
            window.ga('send', 'event', {
                eventCategory: 'User settings',
                eventLabel: filter,
                eventAction: 'Change filter',
                eventValue: 10
            });
        };
        this.id = this.route.snapshot.paramMap.get('id');
        this.teamId = this.route.snapshot.paramMap.get('teamId');
        this.shareableLink = 'https://scrum.magson.no/scrum/' + this.teamId + '/' + this.id;
        this.boardDoc = afs.doc('teams/' + this.teamId + '/boards/' + this.id);
        this.sub = this.boardDoc.valueChanges().subscribe(function (board) {
            _this.isPublic = board.isPublic;
            navbarService.title = board.name;
        });
        // set the orderBy to last used
        if (localStorage.orderBy) {
            this.sortBy = localStorage.orderBy;
        }
        this.$orderBy = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.sortBy);
        this.entryCollection = this.boardDoc
            .collection('entries');
        var $entries = this.$orderBy.switchMap(function (sortBy) {
            var config = JSON.parse(sortBy);
            return _this.toMap(_this.boardDoc
                .collection('entries', function (ref) { return ref.orderBy(config.field, config.direction); }).snapshotChanges());
        });
        $entries.subscribe(function (c) { return console.log(c); });
        this.$todo = $entries.map(function (entrier) { return entrier.filter(function (entry) { return entry.state === 'todo'; }); });
        this.$inProgress = $entries.map(function (entrier) { return entrier.filter(function (entry) { return entry.state === 'inProgress'; }); });
        this.$done = $entries.map(function (entrier) { return entrier.filter(function (entry) { return entry.state === 'done'; }); });
        this.bugCollection = this.boardDoc.collection('bugs');
        this.$bugs = this.toMap(this.bugCollection.snapshotChanges());
        this.ideaCollection = this.boardDoc.collection('ideas');
        this.$ideas = this.toMap(this.ideaCollection.snapshotChanges());
        this.noteCollection = this.boardDoc.collection('notes');
        this.$notes = this.toMap(this.noteCollection.snapshotChanges());
        this.client_bugs_collection = this.boardDoc.collection('client_bugs');
        this.$client_bugs = this.toMap(this.client_bugs_collection.snapshotChanges());
        this.client_feature_collection = this.boardDoc.collection('client_feature_request');
        this.$c_features = this.toMap(this.client_feature_collection.snapshotChanges());
        this.client_notes_collection = this.boardDoc.collection('client_notes');
        this.$c_notes = this.toMap(this.client_notes_collection.snapshotChanges());
        this.loadingSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.$todo, this.$inProgress, this.$done)
            .subscribe(function (_a) {
            var _1 = _a[0], _2 = _a[1], _3 = _a[2];
            return _this.loading = false;
        });
        this.auth.user$.take(1).subscribe(function (user) {
            if (user) {
                _this.isSignedIn = true;
            }
        });
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["Hotkey"]('n', function (event) {
            switch (_this.navTab) {
                case 'todo':
                    console.log('todo');
                    _this.add();
                    break;
                case 'bugs':
                    console.log('bugs');
                    _this.addBug();
                    break;
                case 'ideas':
                    console.log('ideas');
                    _this.addIdea();
                    break;
                case 'notes':
                    console.log('notes');
                    _this.addNote();
                    break;
                case 'beta':
                    console.log('beta');
                    _this.add_feedback();
                    break;
                default:
                    break;
            }
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["Hotkey"]('1', function (event) {
            _this.navTab = 'todo';
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["Hotkey"]('2', function (event) {
            _this.navTab = 'bugs';
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["Hotkey"]('3', function (event) {
            _this.navTab = 'ideas';
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["Hotkey"]('4', function (event) {
            _this.navTab = 'notes';
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["Hotkey"]('5', function (event) {
            _this.navTab = 'beta';
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["Hotkey"]('6', function (event) {
            _this.navTab = 'info';
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["Hotkey"]('ctrl+s', function (event) {
            _this.linkShareSwal.show();
            return false;
        }));
    }
    ScrumComponent.prototype.ngAfterViewInit = function () {
        this.disableAnimations = true;
    };
    ScrumComponent.prototype.delete = function (entry) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'This will delete this task permanently!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Delete method here
                _this.entryCollection.doc(entry.id).delete().then(function () {
                    var snack = _this.snackBar.open('Entry was deleted', 'Undo', {
                        duration: 2500
                    });
                    snack.onAction().subscribe(function () {
                        // Add to database again
                        _this.entryCollection.add(entry);
                    });
                    // Google analytics event
                    window.ga('send', 'event', {
                        eventCategory: 'Scrumboard interaction',
                        eventAction: 'Delete task',
                    });
                });
            }
        });
    };
    ScrumComponent.prototype.updateEntryState = function (entry, state) {
        var _this = this;
        if (state === 'inProgress') {
            this.auth.user$.take(1).subscribe(function (user) {
                // tslint:disable-next-line:max-line-length
                _this.entryCollection.doc(entry.id).update({ state: state, imgUrl: user.photoURL, developer: user.displayName, time: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp() });
            });
        }
        else {
            this.entryCollection.doc(entry.id).update({ state: state, time: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp() });
        }
    };
    ScrumComponent.prototype.edit = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Edit',
                            html: "\n        <form id=\"swalForm\" >\n        <input id=\"swal-input1\" autocomplete=\"off\" type=\"text\" value='" + entry.txt + "' class=\"swal2-input\">" +
                                this.getRadio(entry.priority) +
                                "<input style=\"visibility:hidden\" type=\"submit\">\n        </form>",
                            showCancelButton: true,
                            reverseButtons: true,
                            onOpen: function () {
                                // tslint:disable-next-line:max-line-length
                                document.getElementById('swal-input1').select();
                                document.getElementById('swalForm').onsubmit = function (evt) {
                                    evt.preventDefault();
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.clickConfirm();
                                };
                            },
                            preConfirm: function () {
                                var priority;
                                if (document.getElementById('option-one').checked) {
                                    priority = '!';
                                }
                                else if (document.getElementById('option-two').checked) {
                                    priority = '!!';
                                }
                                else if (document.getElementById('option-three').checked) {
                                    priority = '!!!';
                                }
                                return [
                                    document.getElementById('swal-input1').value,
                                    priority
                                ];
                            },
                            inputValidator: function (value) {
                                return !value && 'You need to write something!';
                            }
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post) {
                            this.entryCollection.doc(entry.id).update({
                                txt: post[0],
                                priority: post[1]
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrumComponent.prototype.ngOnInit = function () {
        this.navbarService.backBtn = true;
    };
    ScrumComponent.prototype.sortChanged = function () {
        this.$orderBy.next(this.sortBy);
        localStorage.orderBy = this.sortBy;
    };
    ScrumComponent.prototype.ngOnDestroy = function () {
        this.navbarService.backBtn = false;
        this.sub.unsubscribe();
        this.loadingSub.unsubscribe();
    };
    ScrumComponent.prototype.uploadBoardVisibility = function (val) {
        console.log(this.isPublic, val);
        this.boardDoc.update({
            isPublic: val.checked
        });
    };
    ScrumComponent.prototype.toMap = function (observable) {
        return observable.map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    };
    ScrumComponent.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'What is the name of the task?',
                            html: "<form id=\"swalForm\">\n        <input id=\"swal-input1\" autocomplete=\"off\" type=\"text\" placeholder=\"Task description\" class=\"swal2-input\">" +
                                this.getRadio('!') +
                                "<p id=\"workNow-btn\" onclick=\"addInprogress()\">Start working now</p>\n        </form>",
                            reverseButtons: true,
                            showCancelButton: true,
                            onOpen: function () {
                                document.getElementById('swal-input1').focus();
                                document.getElementById('swalForm').onsubmit = function (evt) {
                                    evt.preventDefault();
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.clickConfirm();
                                };
                            },
                            preConfirm: function () {
                                var priority;
                                if (document.getElementById('option-one').checked) {
                                    priority = '!';
                                }
                                else if (document.getElementById('option-two').checked) {
                                    priority = '!!';
                                }
                                else if (document.getElementById('option-three').checked) {
                                    priority = '!!!';
                                }
                                return [
                                    document.getElementById('swal-input1').value,
                                    priority
                                ];
                            },
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post[0] !== '' && post[0] !== ' ') {
                            this.entryCollection.add({ txt: post[0], state: 'todo', priority: post[1], time: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp() });
                            // Google analytics event
                            window.ga('send', 'event', {
                                eventCategory: 'Scrumboard interaction',
                                eventAction: 'New todo',
                            });
                        }
                        else if (post[0] === '') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: 'Invalid task.',
                                type: 'error',
                                text: 'Please fill in a description of the task!'
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // FIXME:
    // "not defined" scrum.component.ts: 363
    ScrumComponent.prototype.addInprogress = function () {
        var priority;
        if (document.getElementById('option-one').checked) {
            priority = '!';
        }
        else if (document.getElementById('option-two').checked) {
            priority = '!!';
        }
        else if (document.getElementById('option-three').checked) {
            priority = '!!!';
        }
        var txt = document.getElementById('swal-input1').value;
        if (txt !== '' && txt !== ' ') {
            this.entryCollection.add({ txt: txt, state: 'inProgress', priority: priority, time: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp() });
            // Google analytics event
            window.ga('send', 'event', {
                eventCategory: 'Scrumboard interaction',
                eventAction: 'New todo',
            });
        }
        else if (txt === '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: 'Invalid task.',
                type: 'error',
                text: 'Please fill in a description of the task!'
            });
        }
    };
    ScrumComponent.prototype.assign = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, _a, _b, teamMembers, _i, users_1, user, post;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = new _extra_map_to_iterable_pipe__WEBPACK_IMPORTED_MODULE_14__["MapToIterablePipe"]()).transform;
                        return [4 /*yield*/, this.afs.doc('teams/' + this.teamId).valueChanges().take(1).toPromise()];
                    case 1:
                        users = _b.apply(_a, [(_c.sent()).members]);
                        teamMembers = {};
                        for (_i = 0, users_1 = users; _i < users_1.length; _i++) {
                            user = users_1[_i];
                            teamMembers[user.key] = user.val.name;
                        }
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: 'Assign developer',
                                input: 'select',
                                inputOptions: teamMembers,
                                reverseButtons: true,
                                inputPlaceholder: 'Select developer',
                                showCancelButton: true,
                                inputValidator: function (value) {
                                    return new Promise(function (resolve) {
                                        if (value === '') {
                                            resolve('You need to choose someone');
                                        }
                                        else {
                                            resolve();
                                        }
                                    });
                                }
                            })];
                    case 2:
                        post = (_c.sent()).value;
                        if (post !== '') {
                            // TODO: Do something here
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('You selected: ' + post);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrumComponent.prototype.identify = function (idx, item) {
        return item.id;
    };
    ScrumComponent.prototype.copyLinkTxt = function () {
        var copyText = document.getElementById('shareableLinkInp');
        copyText.select();
        document.execCommand('copy');
    };
    ScrumComponent.prototype.getRadio = function (priority) {
        return "\n  <style>\n  .swalRadioBtns {\n    position: absolute;\n    visibility: hidden;\n    display: none;\n    background-color: #332f35;\n  }\n\n  .swalRadioBtnsLabel {\n    color: var(--button-color);\n    cursor: pointer;\n    font-weight: bold;\n    padding: 5px 20px;\n    float: left;\n    outline: 0;\n  }\n\n  .swalRadioBtns:checked+.swalRadioBtnsLabel {\n    color: white;\n    background: var(--button-color);\n  }\n\n  .swalRadioBtnsLabel+.swalRadioBtns+.swalRadioBtnsLabel {\n    border-left: solid 3px var(--button-color);\n  }\n\n  .radio-group {\n    border: solid 3px var(--button-color);\n    display: inline-block;\n    margin: 0;\n    border-radius: 10px;\n  }\n\n  #workNow-btn {\n    cursor:pointer;\n    color: var(--button-color);\n    text-decoration: underline;\n    font-size: 18px;\n    transition: 0.2s all;\n  }\n\n  #workNow-btn:hover {\n    color: var(--button-accent);\n  }\n  </style>\n  <div class=\"radio-group\">\n  <input class=\"swalRadioBtns\" type=\"radio\" id=\"option-one\" name=\"selector\" value=\"!\" " + this.checkIfChecked(priority, '!') + ">\n  <label class=\"swalRadioBtnsLabel\" for=\"option-one\">!</label>\n  <input class=\"swalRadioBtns\" type=\"radio\" id=\"option-two\" name=\"selector\" value=\"!!\" " + this.checkIfChecked(priority, '!!') + ">\n  <label class=\"swalRadioBtnsLabel\" for=\"option-two\">!!</label>\n  <input class=\"swalRadioBtns\" type=\"radio\" id=\"option-three\" name=\"selector\" value=\"!!!\" " + this.checkIfChecked(priority, '!!!') + ">\n  <label class=\"swalRadioBtnsLabel\" for=\"option-three\">!!!</label>\n  </div>";
    };
    ScrumComponent.prototype.checkIfChecked = function (priority, x) {
        if (priority === x) {
            return 'checked';
        }
        return null;
    };
    /* ---------------------------------------------------------------------------------------------------- */
    /* BUGS METHODS */
    ScrumComponent.prototype.addBug = function () {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Report bug',
                            input: 'text',
                            reverseButtons: true,
                            showCancelButton: true,
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post) {
                            // add to firebase
                            this.auth.user$.take(1).subscribe(function (user) {
                                _this.bugCollection.add({
                                    txt: post, developer: user.displayName, time: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp(),
                                    imgUrl: user.photoURL
                                });
                            });
                            // Google analytics event
                            window.ga('send', 'event', {
                                eventCategory: 'Scrumboard interaction',
                                eventAction: 'New bug reported',
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrumComponent.prototype.editBug = function (bug) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Edit bug',
                            input: 'text',
                            inputValue: bug.txt,
                            reverseButtons: true,
                            showCancelButton: true,
                            onOpen: function () {
                                var input = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.getInput();
                                input.setSelectionRange(0, input.value.length);
                            },
                            inputValidator: function (value) {
                                return !value && 'You need to write something!';
                            }
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post) {
                            this.bugCollection.doc(bug.id).update({
                                txt: post
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrumComponent.prototype.move_to_inprogress = function (entry, collection) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Move to in progress?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                if (!entry.priority) {
                    entry.priority = '!!!';
                }
                // Add to inProgress
                _this.auth.user$.take(1).subscribe(function (user) {
                    _this.entryCollection.add({
                        txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp(),
                        imgUrl: user.photoURL, state: 'inProgress'
                    });
                });
                // Delete from collection
                collection.doc(entry.id).delete().then(function () {
                    var snack = _this.snackBar.open('Moved to in progress', 'Undo', {
                        duration: 2500
                    });
                    snack.onAction().subscribe(function () {
                        // Add to database again
                        collection.add(entry);
                    });
                });
            }
        });
    };
    ScrumComponent.prototype.deleteBug = function (bug, collection) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'This will delete this bug permanently!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Delete method here
                collection.doc(bug.id).delete().then(function () {
                    var snack = _this.snackBar.open('Bug was deleted', 'Undo', {
                        duration: 2500
                    });
                    snack.onAction().subscribe(function () {
                        // Add to database again
                        collection.add(bug);
                    });
                    // Google analytics event
                });
            }
        });
    };
    /* BUGS METHODS END*/
    /* ---------------------------------------------------------------------------------------------------- */
    /* ---------------------------------------------------------------------------------------------------- */
    /* IDEAS METHODS */
    ScrumComponent.prototype.addIdea = function () {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'What is your wonderful idea?',
                            input: 'text',
                            reverseButtons: true,
                            showCancelButton: true,
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post) {
                            // add to firebase
                            this.auth.user$.take(1).subscribe(function (user) {
                                _this.ideaCollection.add({
                                    txt: post, developer: user.displayName, time: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp(),
                                    imgUrl: user.photoURL
                                });
                            });
                            // Google analytics event
                            window.ga('send', 'event', {
                                eventCategory: 'Scrumboard interaction',
                                eventAction: 'New idea created',
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrumComponent.prototype.editIdea = function (idea) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Edit idea',
                            input: 'text',
                            inputValue: idea.txt,
                            reverseButtons: true,
                            showCancelButton: true,
                            onOpen: function () {
                                var input = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.getInput();
                                input.setSelectionRange(0, input.value.length);
                            },
                            inputValidator: function (value) {
                                return !value && 'You need to write something!';
                            }
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post) {
                            this.ideaCollection.doc(idea.id).update({
                                txt: post
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrumComponent.prototype.deleteIdea = function (idea) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'This will delete your idea permanently!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Delete method here
                _this.ideaCollection.doc(idea.id).delete().then(function () {
                    var snack = _this.snackBar.open('Your idea is now history', 'Undo', {
                        duration: 2500
                    });
                    snack.onAction().subscribe(function () {
                        // Add to database again
                        _this.ideaCollection.add(idea);
                    });
                    // Google analytics event
                });
            }
        });
    };
    /* IDEAS METHODS END */
    /* ---------------------------------------------------------------------------------------------------- */
    /* ---------------------------------------------------------------------------------------------------- */
    /* NOTES METHODS */
    ScrumComponent.prototype.addNote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Add a something to remember',
                            input: 'text',
                            reverseButtons: true,
                            showCancelButton: true,
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post) {
                            // add to firebase
                            this.auth.user$.take(1).subscribe(function (user) {
                                _this.noteCollection.add({
                                    txt: post, developer: user.displayName, time: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp(),
                                    imgUrl: user.photoURL
                                });
                            });
                            // Google analytics event
                            window.ga('send', 'event', {
                                eventCategory: 'Scrumboard interaction',
                                eventAction: 'New note created',
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrumComponent.prototype.editNote = function (note, collection) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Edit note',
                            input: 'text',
                            inputValue: note.txt,
                            reverseButtons: true,
                            showCancelButton: true,
                            onOpen: function () {
                                var input = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.getInput();
                                input.setSelectionRange(0, input.value.length);
                            },
                            inputValidator: function (value) {
                                return !value && 'You need to write something!';
                            }
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post) {
                            collection.doc(note.id).update({
                                txt: post
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrumComponent.prototype.deleteNote = function (note, collection) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'This will delete your note permanently!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Delete method here
                collection.doc(note.id).delete().then(function () {
                    var snack = _this.snackBar.open('Your note is now history', 'Undo', {
                        duration: 2500
                    });
                    snack.onAction().subscribe(function () {
                        // Add to database again
                        collection.add(note);
                    });
                    // Google analytics event
                });
            }
        });
    };
    /* NOTES METHODS END */
    /* ---------------------------------------------------------------------------------------------------- */
    /* ---------------------------------------------------------------------------------------------------- */
    /* FEEDBACK METHODS */
    ScrumComponent.prototype.moveToBugs = function (bug) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Move to collection of bugs?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Add to todo
                _this.bugCollection.add({
                    txt: bug.txt, priority: bug.priority, time: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp()
                });
                // Delete from bug collection
                _this.client_bugs_collection.doc(bug.id).delete().then(function () {
                    _this.client_bugs_collection.doc(bug.id).delete().then(function () {
                        var snack = _this.snackBar.open('Moved to tasks', 'Undo', {
                            duration: 2500
                        });
                        snack.onAction().subscribe(function () {
                            // Add to database again
                            _this.client_bugs_collection.add(bug);
                        });
                    });
                });
            }
        });
    };
    ScrumComponent.prototype.edit_feature_request = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Edit',
                            input: 'text',
                            inputValue: entry.txt,
                            reverseButtons: true,
                            showCancelButton: true,
                            onOpen: function () {
                                var input = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.getInput();
                                input.setSelectionRange(0, input.value.length);
                            },
                            inputValidator: function (value) {
                                return !value && 'You need to write something!';
                            }
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post) {
                            this.client_feature_collection.doc(entry.id).update({
                                txt: post
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrumComponent.prototype.delete_feature_request = function (entry) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'This will delete it permanently!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Delete method here
                _this.client_feature_collection.doc(entry.id).delete().then(function () {
                    var snack = _this.snackBar.open('Your feature request is now history', 'Undo', {
                        duration: 2500
                    });
                    snack.onAction().subscribe(function () {
                        // Add to database again
                        _this.client_feature_collection.add(entry);
                    });
                    // Google analytics event
                });
            }
        });
    };
    ScrumComponent.prototype.add_feedback = function () {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Send feedback',
                            html: "\n      <select id=\"feedbackSelect\" class=\"swal2-select\" style=\"outline:0;\">\n      <option value=\"client_bugs\">Bug</option>\n      <option value=\"client_feature_request\">Feature request</option>\n      <option value=\"client_note\">Note</option>\n      </select>\n      <textarea id=\"feedbackTxt\" class=\"swal2-textarea\"></textarea>",
                            showCancelButton: true,
                            reverseButtons: true,
                            preConfirm: function () {
                                return [
                                    document.getElementById('feedbackSelect').value,
                                    document.getElementById('feedbackTxt').value,
                                ];
                            }
                        })];
                    case 1:
                        post = (_a.sent()).value;
                        if (post[1] !== '') {
                            this.auth.user$.take(1).subscribe(function (user) {
                                _this.afs.collection(post[0]).add({
                                    txt: post[1],
                                    date: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.serverTimestamp(),
                                });
                            });
                        }
                        else if (post[1] === '') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: 'Invalid.',
                                type: 'error',
                                text: 'Please fill in something!'
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /* FEEDBACK METHODS END */
    /* ---------------------------------------------------------------------------------------------------- */
    /* ---------------------------------------------------------------------------------------------------- */
    /* COMMENTS METHODS */
    ScrumComponent.prototype.openThread = function (entry) {
        var dialogRef = this.dialog.open(_modules_thread_thread_component__WEBPACK_IMPORTED_MODULE_13__["ThreadComponent"], {
            width: '40%',
            data: { entry: entry, teamId: this.teamId, boardId: this.id },
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('linkShareSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SwalComponent"])
    ], ScrumComponent.prototype, "linkShareSwal", void 0);
    ScrumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-scrum',
            template: __webpack_require__(/*! ./scrum.component.html */ "./app/ui/scrum/scrum.component.html"),
            styles: [__webpack_require__(/*! ./scrum.component.css */ "./app/ui/scrum/scrum.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('entriesAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('void => in', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'scale(0.5)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'scale(1)', opacity: 1 })) // final
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'scale(1)', opacity: 1, height: '*' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
                            transform: 'scale(0.5)', opacity: 0,
                            height: '0px', margin: '0px'
                        }))
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_teams_service__WEBPACK_IMPORTED_MODULE_0__["TeamsService"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["HotkeysService"]])
    ], ScrumComponent);
    return ScrumComponent;
}());



/***/ }),

/***/ "./app/ui/team-settings/team-settings.component.css":
/*!**********************************************************!*\
  !*** ./app/ui/team-settings/team-settings.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    margin: 0 auto;\r\n    display: table;\r\n}\r\n\r\n#wrapper {\r\n    display: flex;\r\n}\r\n\r\nmain {\r\n    max-width: 550px;\r\n    width: calc(100% - 40px);\r\n    padding: 20px;\r\n    min-width: 500px;\r\n}\r\n\r\n.inp {\r\n    width: calc(100% - 190px);\r\n}\r\n\r\nform button {\r\n    float: right;\r\n    width: 175px;\r\n    margin-top: 7px;\r\n}\r\n\r\n#memberWrapper {\r\n    position: relative;\r\n    height: 66px;\r\n}\r\n\r\n#memberWrapper:nth-child(2n) {\r\n    background-color: #fafafa;\r\n}\r\n\r\n#nameTxt {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 87px;\r\n    width: calc(100% - 90px);\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    font-weight: 800;\r\n    font-size: 21px;\r\n    line-height: 66px;\r\n    margin: 0;\r\n}\r\n\r\n#memberTypeTxt {\r\n    line-height: 66px;\r\n    font-weight: 100;\r\n    font-size: 17px;\r\n    color: #6d6b6b;\r\n}\r\n\r\n#profilePic {\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    margin-top: 12px;\r\n    margin-left: 25px;\r\n    display: inline-block;\r\n}\r\n\r\n#profilePic img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#profilePic mat-icon {\r\n    position: absolute;\r\n    font-size: 42px;\r\n}\r\n\r\n.menuBtn {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 20px;\r\n}\r\n\r\n#dangerTxt {\r\n    color: red;\r\n}\r\n\r\n#deleteTeamBtn {\r\n    background: red;\r\n    color: white;\r\n}\r\n\r\n/* File upload */\r\n\r\n.dropzone {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    height: 200px;\r\n    width: 150px;\r\n    margin: 10px 0;\r\n    position: relative;\r\n}\r\n\r\n.dropzone button {\r\n    margin-top: 10px;\r\n}\r\n\r\n.dropzone p {\r\n    font-size: 12px;\r\n}\r\n\r\n#teamImgSpinner {\r\n    position: absolute;\r\n}"

/***/ }),

/***/ "./app/ui/team-settings/team-settings.component.html":
/*!***********************************************************!*\
  !*** ./app/ui/team-settings/team-settings.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n<div id=container>\r\n  <div id=\"wrapper\">\r\n    <main>\r\n      <h1 *ngIf=\"isAdmin\">Team settings</h1>\r\n      <h1 *ngIf=\"!isAdmin\">Team members</h1>\r\n\r\n      <!-- Change name of team -->\r\n      <div *ngIf=\"isAdmin\">\r\n        <h4>Change team name</h4>\r\n        <form [formGroup]=\"nameForm\" (ngSubmit)=\"onNameFormSubmit()\">\r\n          <mat-form-field class=\"inp\">\r\n            <input [value]=\"(team$ | async)?.name\" matInput placeholder=\"Name\" [formControl]=\"changeNameFormControl\">\r\n            <mat-error *ngIf=\"changeNameFormControl.hasError('required')\">\r\n              Name is\r\n              <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <button type=\"submit\" mat-stroked-button>Change team name</button>\r\n        </form>\r\n\r\n        <h4>Manage team members</h4>\r\n        <form *ngIf=\"isAdmin\" [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\">\r\n          <mat-form-field class=\"inp\">\r\n            <input matInput id=\"addUserInput\" placeholder=\"Email\" [formControl]=\"emailFormControl\">\r\n            <mat-error *ngIf=\"emailFormControl?.hasError('email') && !emailFormControl?.hasError('required')\">\r\n              Please enter a valid email address\r\n            </mat-error>\r\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n              Email is\r\n              <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <button type=\"submit\" mat-stroked-button>Add to team</button>\r\n        </form>\r\n      </div>\r\n\r\n\r\n      <div id=\"members\">\r\n        <div *ngFor=\"let member of (team$ | async)?.members | mapToIterable; let members\" id=\"memberWrapper\">\r\n          <div id=\"profilePic\">\r\n            <img *ngIf=\"member.val.imgUrl\" src=\"{{member.val.imgUrl}}\">\r\n            <mat-icon>account_circle</mat-icon>\r\n          </div>\r\n          <strong id=\"nameTxt\">{{ member.val.name }}\r\n            <span *ngIf=\"member.val.isAdmin\" id=\"memberTypeTxt\">Admin</span>\r\n            <span *ngIf=\"member.val.isMember == false\" id=\"memberTypeTxt\">Pending</span>\r\n            <span *ngIf=\"member.val.isMember && !member.val.isAdmin\" id=\"memberTypeTxt\">Member</span>\r\n          </strong>\r\n          <mat-menu #memberOptionsMenu=\"matMenu\">\r\n            <button mat-menu-item *ngIf=\"!member.val.isAdmin\" (click)=\"promoteAdmin(member.key)\">\r\n              <mat-icon>how_to_reg</mat-icon>\r\n              <span>Promote to admin</span>\r\n            </button>\r\n            <button mat-menu-item *ngIf=\"member.val.isAdmin\" (click)=\"removeAdmin(member.key)\">\r\n              <mat-icon>keyboard_arrow_down</mat-icon>\r\n              <span>Demote</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"deleteMember(member.key)\">\r\n              <mat-icon>exit_to_app</mat-icon>\r\n              <span *ngIf=\"member.val.isMember == false; else removeMemberTxt\">Cancel invitation</span>\r\n              <ng-template #removeMemberTxt>\r\n                <span>Remove member</span>\r\n              </ng-template>\r\n            </button>\r\n          </mat-menu>\r\n          <button *ngIf=\"!(member.key == (auth.user$ | async)?.uid) && isAdmin\" class=\"menuBtn\" mat-icon-button\r\n            [matMenuTriggerFor]=\"memberOptionsMenu\" (click)=\"$event.stopPropagation()\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div id=\"deleteTeamWrapper\" *ngIf=\"isAdmin\">\r\n        <h4 id=\"dangerTxt\">Danger zone</h4>\r\n        <p>This will delete the team and all of its data for you and all the members. This action cannot be undone</p>\r\n        <button mat-raised-button (click)=\"deleteTeam()\" id=\"deleteTeamBtn\">Delete team</button>\r\n      </div>\r\n    </main>\r\n    <div id=\"uploadImg\" *ngIf=\"isAdmin\">\r\n      <h4>Upload team image</h4>\r\n      <div class=\"dropzone\" dropZone (hovered)=\"toggleHover($event)\" (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\">\r\n        <mat-progress-spinner *ngIf=\"percentage | async as pct\" id=\"teamImgSpinner\" [mode]=\"imgUploadSpinnerMode\" [value]=\"pct\"></mat-progress-spinner>\r\n        <img [src]=\"imgURL | async\" alt=\"\">\r\n        <button mat-stroked-button (click)=\"fileinput.click()\">Choose an image</button>\r\n        <p>or drop it here</p>\r\n        <input #fileinput hidden=\"true\" type=\"file\" (change)=\"startUpload($event.target.files)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./app/ui/team-settings/team-settings.component.ts":
/*!*********************************************************!*\
  !*** ./app/ui/team-settings/team-settings.component.ts ***!
  \*********************************************************/
/*! exports provided: TeamSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSettingsComponent", function() { return TeamSettingsComponent; });
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/navbar.service */ "./app/services/navbar.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/teams.service */ "./app/services/teams.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/functions */ "../node_modules/angularfire2/functions/index.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_functions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/storage */ "../node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _extra_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../extra/shared */ "./app/extra/shared.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var TeamSettingsComponent = /** @class */ (function () {
    function TeamSettingsComponent(route, boardsService, afs, router, navbarService, storage, afFunctions, auth) {
        var _this = this;
        this.route = route;
        this.boardsService = boardsService;
        this.afs = afs;
        this.router = router;
        this.navbarService = navbarService;
        this.storage = storage;
        this.afFunctions = afFunctions;
        this.auth = auth;
        this.isAdmin = false;
        this.loading = false;
        this.emailFormControl = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email,
        ]);
        this.changeNameFormControl = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email,
        ]);
        this.form = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            email: this.emailFormControl
        });
        this.nameForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            name: this.changeNameFormControl
        });
        this.imgUploadSpinnerMode = 'determinate';
        this.teamId = this.route.snapshot.paramMap.get('teamId');
        this.team$ = this.afs.doc('teams/' + this.teamId).valueChanges().shareReplay(1);
        this.navbarService.backBtn = true;
        this.sub = this.team$.subscribe(function (team) { return _this.navbarService.title = team.name; });
        this.teamRef = this.afs.firestore.doc('teams/' + this.teamId);
        this.imgURL = this.team$.switchMap(function (team) {
            Object(_extra_shared__WEBPACK_IMPORTED_MODULE_12__["getImgUrlFromRef"])(team, _this.storage);
            _this.percentage = null; // Removing progress spinner when new img is initialized
            return team.imgURL;
        });
    }
    TeamSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_node_modules_rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.auth.user$, this.team$).subscribe(function (_a) {
            var user = _a[0], team = _a[1];
            console.log('isAdmin:', _this.isAdmin);
            console.log(team.members[user.uid].isAdmin);
            _this.isAdmin = team.members[user.uid].isAdmin;
        });
    };
    TeamSettingsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.navbarService.backBtn = false;
    };
    TeamSettingsComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    TeamSettingsComponent.prototype.onNameFormSubmit = function () {
        var input = this.nameForm.value.name;
        console.log('Changing name to:', input);
        // Change name of team
        this.teamRef.update({
            name: input
        });
        this.nameForm.reset();
    };
    TeamSettingsComponent.prototype.startUpload = function (event) {
        var _this = this;
        this.imgUploadSpinnerMode = 'determinate';
        // The File object
        var file = event.item(0);
        // Client-side validation example
        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :(');
            return;
        }
        // The storage path
        var path = this.teamId + '.' + file.name.split('.').pop();
        // The main task
        this.task = this.storage.upload(path, file);
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
            console.log('Upload task is done');
            _this.imgUploadSpinnerMode = 'indeterminate';
        })).subscribe();
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges();
    };
    // Determines if the upload task is active
    TeamSettingsComponent.prototype.isActive = function (snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    };
    TeamSettingsComponent.prototype.onFormSubmit = function () {
        this.addMember(this.form.value.email);
    };
    TeamSettingsComponent.prototype.promoteAdmin = function (uid) {
        var _this = this;
        // Google analytics event
        window.ga('send', 'event', {
            eventCategory: 'Team management',
            eventAction: 'Promote admin',
        });
        this.loading = true;
        this.afs.firestore.runTransaction(function (transaction) { return transaction.get(_this.teamRef).then(function (doc) {
            var members = doc.data().members;
            members[uid].isAdmin = true;
            return transaction.update(_this.teamRef, { members: members });
        }); }).then(function () { return _this.loading = false; });
    };
    TeamSettingsComponent.prototype.removeAdmin = function (uid) {
        var _this = this;
        // Google analytics event
        window.ga('send', 'event', {
            eventCategory: 'Team management',
            eventAction: 'Demote admin',
        });
        this.loading = true;
        this.afs.firestore.runTransaction(function (transaction) { return transaction.get(_this.teamRef).then(function (doc) {
            var members = doc.data().members;
            delete members[uid].isAdmin;
            return transaction.update(_this.teamRef, { members: members });
        }); }).then(function () { return _this.loading = false; });
    };
    TeamSettingsComponent.prototype.deleteMember = function (uid) {
        var _this = this;
        // Google analytics event
        window.ga('send', 'event', {
            eventCategory: 'Team management',
            eventAction: 'Delete member',
        });
        this.loading = true;
        this.afs.firestore.runTransaction(function (transaction) { return transaction.get(_this.teamRef).then(function (doc) {
            var members = doc.data().members;
            delete members[uid];
            return transaction.update(_this.teamRef, { members: members });
        }); }).then(function () { return _this.loading = false; });
    };
    TeamSettingsComponent.prototype.addMember = function (input) {
        var _this = this;
        if (this.form.valid) {
            var that_1 = this;
            that_1.loading = true;
            console.log('finiding user', input);
            this.form.reset(); // clear the form
            var getUserByMail = this.afFunctions.httpsCallable('getUserByMail');
            getUserByMail({ mail: input, teamId: that_1.teamId }).toPromise()
                .then(function (data) {
                console.log(data);
                var uid = data.userData.uid;
                var imageUrl = data.userData.photoURL;
                var displayName = data.userData.displayName;
                that_1.loading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.queue([{
                        text: "Are you sure you want to add " + displayName + " to " + that_1.navbarService.title + "?",
                        imageUrl: imageUrl,
                        imageWidth: 100,
                        imageHeight: 100,
                        imageAlt: 'Scrumboard user profile',
                        confirmButtonText: 'Invite',
                        showCancelButton: true,
                        reverseButtons: true,
                        showLoaderOnConfirm: true,
                        preConfirm: function () {
                            // add to team
                            that_1.loading = true;
                            var ref = that_1.afs.firestore.doc('teams/' + that_1.teamId);
                            that_1.afs.firestore.runTransaction(function (transaction) { return transaction.get(ref).then(function (doc) {
                                var members = doc.data().members;
                                members[uid] = {
                                    isMember: 'mail',
                                    imgUrl: imageUrl,
                                    name: displayName
                                };
                                return transaction.update(ref, { members: members });
                            }).then(function () {
                                // Google analytics event
                                window.ga('send', 'event', {
                                    eventCategory: 'Team management',
                                    eventLabel: 'Member added to team',
                                    eventAction: 'addedMember',
                                });
                                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                                    title: "Success",
                                    type: 'success',
                                    text: "You have successfully invited " + displayName + " to your team!",
                                });
                                that_1.loading = false;
                                document.getElementById('addUserInput').value = '';
                            })
                                .catch(function (err) {
                                that_1.loading = false;
                                console.log(err);
                                console.log(err.message);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                                    title: 'Error',
                                    text: err.message,
                                    type: 'error'
                                });
                            }); });
                        }
                    }]);
            }).catch(function (error) {
                console.log(error.code);
                if (error.code === 'not-found') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        text: 'This email is not associated with any account. Do you want to send them an invite anyway?',
                        confirmButtonText: 'Send invite',
                        showCancelButton: true,
                        reverseButtons: true,
                    }).then(function () {
                        function s4() {
                            return Math.floor((1 + Math.random()) * 0x10000)
                                .toString(16)
                                .substring(1);
                        }
                        // add a code to the database
                        var code = s4() + s4() + s4() + s4();
                        console.log('Secret code is:', code);
                        _this.team$.take(1).subscribe(function (team) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.afs.collection('teams/' + this.teamId + '/codes').add({
                                            mail: input,
                                            teamName: team.name,
                                            code: code
                                        })];
                                    case 1:
                                        _a.sent();
                                        console.log(code, 'is added as code to database');
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: 'Error',
                        text: error.message,
                        type: 'error',
                    });
                }
                that_1.loading = false;
            });
        }
    };
    TeamSettingsComponent.prototype.deleteTeam = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this team?!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete team',
            confirmButtonColor: 'red',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Google analytics event
                window.ga('send', 'event', {
                    eventCategory: 'Team management',
                    eventAction: 'Delete team',
                });
                _this.afs.doc('teams/' + _this.teamId).delete().then(function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: 'Team is deleted',
                    type: 'success',
                    text: 'Your team is now successfully deleted.',
                }).then(function () { return _this.router.navigate(['/']); }); });
            }
        });
    };
    TeamSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-team-settings',
            template: __webpack_require__(/*! ./team-settings.component.html */ "./app/ui/team-settings/team-settings.component.html"),
            styles: [__webpack_require__(/*! ./team-settings.component.css */ "./app/ui/team-settings/team-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"],
            angularfire2_functions__WEBPACK_IMPORTED_MODULE_9__["AngularFireFunctions"], _services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__["AuthServiceService"]])
    ], TeamSettingsComponent);
    return TeamSettingsComponent;
}());



/***/ }),

/***/ "./environments/FirebaseConfig.ts":
/*!****************************************!*\
  !*** ./environments/FirebaseConfig.ts ***!
  \****************************************/
/*! exports provided: FirebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseConfig", function() { return FirebaseConfig; });
var FirebaseConfig = {
    apiKey: 'AIzaSyDfcr_abt961SwKU-gQiTGPOYgHpuoCPhA',
    authDomain: 'magson-developer.firebaseapp.com',
    databaseURL: 'https://magson-developer.firebaseio.com',
    projectId: 'magson-developer',
    storageBucket: 'magson-developer.appspot.com',
    messagingSenderId: '1054331397519'
};


/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/ngsw-worker.js');
    }
})
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sondr\Desktop\scrumboard\angular\src\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map