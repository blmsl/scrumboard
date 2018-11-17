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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/navbar.service */ "./app/services/navbar.service.ts");
/* harmony import */ var _environments_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/FirebaseConfig */ "./environments/FirebaseConfig.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "../node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "../node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "../node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/storage */ "../node_modules/angularfire2/storage/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _ui_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/login/login.component */ "./app/ui/login/login.component.ts");
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/navbar/navbar.component */ "./app/ui/navbar/navbar.component.ts");
/* harmony import */ var _ui_boards_boards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/boards/boards.component */ "./app/ui/boards/boards.component.ts");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/teams.service */ "./app/services/teams.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _services_profile_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/profile-guard.service */ "./app/services/profile-guard.service.ts");
/* harmony import */ var _ui_scrum_scrum_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/scrum/scrum.component */ "./app/ui/scrum/scrum.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/overlay */ "../node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/toolbar */ "../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "../node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "../node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _modules_teams_module_teams_module_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/teams-module/teams-module.component */ "./app/modules/teams-module/teams-module.component.ts");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angularfire2/functions */ "../node_modules/angularfire2/functions/index.js");
/* harmony import */ var _ui_admin_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ui/admin/admin.component */ "./app/ui/admin/admin.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ "../node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "../node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _extra_map_to_iterable_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./extra/map-to-iterable.pipe */ "./app/extra/map-to-iterable.pipe.ts");
/* harmony import */ var _ui_team_settings_team_settings_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ui/team-settings/team-settings.component */ "./app/ui/team-settings/team-settings.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_ab_tests__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angular-ab-tests */ "../node_modules/angular-ab-tests/fesm5/angular-ab-tests.js");
/* harmony import */ var _ui_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ui/privacy/privacy.component */ "./app/ui/privacy/privacy.component.ts");
/* harmony import */ var angular_linky__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! angular-linky */ "../node_modules/angular-linky/index.js");
/* harmony import */ var angular_linky__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(angular_linky__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _extra_drop_zone_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./extra/drop-zone.directive */ "./app/extra/drop-zone.directive.ts");
/* harmony import */ var _modules_thread_thread_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./modules/thread/thread.component */ "./app/modules/thread/thread.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tooltip */ "../node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! angular2-hotkeys */ "../node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_45__);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _ui_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _ui_boards_boards_component__WEBPACK_IMPORTED_MODULE_12__["BoardsComponent"],
                _ui_scrum_scrum_component__WEBPACK_IMPORTED_MODULE_17__["ScrumComponent"],
                _modules_teams_module_teams_module_component__WEBPACK_IMPORTED_MODULE_31__["TeamsModuleComponent"],
                _ui_admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"],
                _extra_map_to_iterable_pipe__WEBPACK_IMPORTED_MODULE_36__["MapToIterablePipe"],
                _ui_team_settings_team_settings_component__WEBPACK_IMPORTED_MODULE_37__["TeamSettingsComponent"],
                _ui_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_40__["PrivacyComponent"],
                _extra_drop_zone_directive__WEBPACK_IMPORTED_MODULE_42__["DropZoneDirective"],
                _modules_thread_thread_component__WEBPACK_IMPORTED_MODULE_43__["ThreadComponent"],
            ],
            entryComponents: [
                _modules_thread_thread_component__WEBPACK_IMPORTED_MODULE_43__["ThreadComponent"]
            ],
            imports: [
                angular_ab_tests__WEBPACK_IMPORTED_MODULE_39__["AbTestsModule"].forRoot([
                    {
                        versions: ['A', 'B'],
                        versionForCrawlers: 'A',
                        expiration: 45,
                    },
                ]),
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_45__["HotkeyModule"].forRoot(),
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__["MatTooltipModule"],
                angular_linky__WEBPACK_IMPORTED_MODULE_41__["LinkyModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_38__["ReactiveFormsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_38__["FormsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__["FirebaseConfig"]),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"].enablePersistence(),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_35__["SweetAlert2Module"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'login', component: _ui_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
                    { path: 'admin', component: _ui_admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"], canActivate: [_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_16__["ProfileGuardService"]] },
                    { path: 'privacy', component: _ui_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_40__["PrivacyComponent"] },
                    { path: 'scrum/:teamId/:id', component: _ui_scrum_scrum_component__WEBPACK_IMPORTED_MODULE_17__["ScrumComponent"] },
                    { path: 'team/:teamId', component: _ui_team_settings_team_settings_component__WEBPACK_IMPORTED_MODULE_37__["TeamSettingsComponent"], canActivate: [_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_16__["ProfileGuardService"]] },
                    { path: '', component: _ui_boards_boards_component__WEBPACK_IMPORTED_MODULE_12__["BoardsComponent"], canActivate: [_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_16__["ProfileGuardService"]] },
                    { path: ':teamId', component: _ui_boards_boards_component__WEBPACK_IMPORTED_MODULE_12__["BoardsComponent"], canActivate: [_services_profile_guard_service__WEBPACK_IMPORTED_MODULE_16__["ProfileGuardService"]] },
                ]),
            ],
            providers: [
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
                _services_teams_service__WEBPACK_IMPORTED_MODULE_13__["TeamsService"],
                _services_auth_service_service__WEBPACK_IMPORTED_MODULE_14__["AuthServiceService"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestore"],
                _services_profile_guard_service__WEBPACK_IMPORTED_MODULE_16__["ProfileGuardService"],
                _services_navbar_service__WEBPACK_IMPORTED_MODULE_0__["NavbarService"],
                angularfire2_functions__WEBPACK_IMPORTED_MODULE_32__["AngularFireFunctions"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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
    if (data.imgRef) {
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

module.exports = "h4 {\n    margin-bottom: 0;\n}\n\n#newTeamBtn {\n    color: var(--button-color);\n    font-weight: bold;\n    border: 1px solid #c0c0c0;\n    border-radius: 999px;\n    padding: 5px 23px;\n    margin: 10px 0;\n}\n\n#newTeamTxt {\n    margin-left: 10px;\n}\n\nimg {\n    width: 44px;\n    height: 44px;\n    border-radius: 4px;\n    margin-right: 6px;\n}\n\n.txtWrapper {\n    display: inline-block;\n    width: 155px;\n}\n\n.txtWrapper p {\n    margin: 0 0 0 10px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.teamName {\n    font-weight: bold;\n    line-height: 17px;\n    padding-bottom: 4px;\n}\n\n.amountMembers {\n    font-size: 10px;\n    margin: 0;\n    line-height: 10px;\n}\n\n.teamSelectBtn {\n    text-align: left;\n    width: 100%;\n    height: 100%;\n    padding-right: 22px !important;\n}\n\n.teamButtonDiv {\n    position: relative;\n    margin-top: 5px;\n    width: 250px;\n    height: 70px;\n    color: var(--txt-color) !important;\n}\n\n.menuBtn {\n    position: absolute;\n    right: -6px;\n    top: -2px;\n}\n\n.selected {\n    color: var(--bg-color);\n}\n\n.selected .teamSelectBtn {\n    background: var(--accent-light);\n    border: 1px solid #c0c0c029;\n}\n\n.selected .teamName {\n    color: var(--button-color);\n}\n\n@media only screen and (max-width: 800px) {\n    #newTeamBtn {\n        width: unset;\n        margin-right: 20px;\n    }\n\n    h4 {\n        margin: 0;\n    }\n\n    #teamsWrapper {\n        overflow-x: auto;\n        white-space: nowrap;\n        overflow-y: hidden;\n    }\n\n    .teamButtonDiv {\n        display: inline-block;\n        margin-right: 5px;\n    }\n}"

/***/ }),

/***/ "./app/modules/teams-module/teams-module.component.html":
/*!**************************************************************!*\
  !*** ./app/modules/teams-module/teams-module.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>\n  <strong>Teams</strong>\n</h4>\n<div id=\"teamsWrapper\">\n  <button id=\"newTeamBtn\" class=\"teamSelectBtn\" mat-button (click)=\"teamsService.createNewTeam()\"><mat-icon>add</mat-icon><span id=\"newTeamTxt\">New team</span></button>\n  <div *ngFor=\"let team of teamsService.$teams | async\" (click)=\"teamsService.selectTeam(team.id)\" class=\"teamButtonDiv\"\n    [ngClass]=\"{'selected': (route.paramMap | async).get('teamId') === team.id}\">\n    <button class=\"teamSelectBtn\" mat-button>\n      <img [src]=\"(team.imgURL | async) || 'assets/favicons/android-chrome-192x192.png'\">\n      <div class=\"txtWrapper\">\n        <p class=\"teamName\">{{team.name}}</p>\n        <p class=\"amountMembers\">{{(team.members | mapToIterable).length}} members</p>\n      </div>\n    </button>\n    <button class=\"menuBtn\" *ngIf=\"(route.paramMap | async).get('teamId') === team.id\" mat-icon-button\n      [matMenuTriggerFor]=\"menu\" (click)=\"$event.stopPropagation()\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item [routerLink]=\"['/team', team.id]\">\n        <!-- <button mat-menu-item (click)=\"addMember(team.id, team.name)\"> -->\n        <mat-icon>people</mat-icon>\n        <span>Manage team</span>\n      </button>\n      <button mat-menu-item (click)=\"leaveTeam(team)\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span>Leave</span>\n      </button>\n    </mat-menu>\n  </div>\n</div>"

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

module.exports = ".close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.close:hover {\n    color: #484848;\n}\n.comment {\n  display: flex;\n  position: relative;\n}\n.menuBtn {\n  position: absolute;\n  right: 0;\n  /* line-height: 90px; */\n}\n.profilePic {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  margin-top: 15px;;\n}\n.usernameTxt {\n  font-size: 13px;\n  font-weight: bold;\n  margin: 0;\n}\n.commentTxt {\n  margin: 0;\n}\n.txtWrapper {\n  margin: 21px 0 15px 15px;\n}\n#dialogContent {\n  width: 90%;\n  display: table;\n  margin: 0 auto;\n}\n.inp {\n  width: 85%;\n}\n#submitBtn {\n  margin-left: 20px;\n}"

/***/ }),

/***/ "./app/modules/thread/thread.component.html":
/*!**************************************************!*\
  !*** ./app/modules/thread/thread.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <mat-icon (click)=\"this.close()\" class=\"close\">close</mat-icon>\n  <div id=\"dialogContent\">\n    <div class=\"content\">\n      <h1>{{entry.txt}}</h1>\n    </div>\n\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"onFormSubmit()\">\n      <mat-form-field class=\"inp\">\n        <input matInput placeholder=\"Write your comment\" [formControl]=\"commentFormControl\">\n        <mat-error *ngIf=\"commentFormControl.hasError('required')\">\n          Name is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <button id=\"submitBtn\" type=\"submit\" mat-stroked-button>Comment</button>\n    </form>\n\n    <div id=\"commentsContainer\">\n      <div class=\"comment\" *ngFor=\"let comment of comments$ | async\">\n\n        <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"editComment(comment)\">\n            <mat-icon>edit</mat-icon>\n            <span>Edit</span>\n          </button>\n          <button mat-menu-item (click)=\"deleteComment(comment)\">\n            <mat-icon>delete</mat-icon>\n            <span>Delete</span>\n          </button>\n        </mat-menu>\n\n        <img class=\"profilePic\" [src]=\"comment.imgUrl\">\n        <div class=\"txtWrapper\">\n          <p class=\"usernameTxt\">{{comment.username}}</p>\n          <p class=\"commentTxt\">{{comment.txt}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-dialog-content>\n"

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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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







var ThreadComponent = /** @class */ (function () {
    function ThreadComponent(dialogRef, entry, auth, afs) {
        this.dialogRef = dialogRef;
        this.entry = entry;
        this.auth = auth;
        this.afs = afs;
        this.commentFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            comment: this.commentFormControl
        });
        if (!entry.threadId) {
            this.threadDoc = this.afs.doc('threads/' + entry.threadId);
            this.commentsCollection = this.threadDoc.collection('comments', function (ref) { return ref.orderBy('time', 'desc'); });
            this.comments$ = this.toMap(this.commentsCollection.snapshotChanges());
        }
    }
    ThreadComponent.prototype.ngOnInit = function () {
    };
    ThreadComponent.prototype.createNewThread = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
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
        if (!this.entry.threadId) {
        }
        var input = this.commentForm.value.comment;
        console.log(input);
        this.auth.user$.take(1).subscribe(function (user) {
            _this.commentsCollection.add({
                username: user.displayName,
                txt: input,
                imgUrl: user.photoURL,
                time: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp()
            });
        });
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
/* harmony import */ var _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
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
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "../node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_shareReplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/shareReplay */ "../node_modules/rxjs-compat/_esm5/add/operator/shareReplay.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/storage */ "../node_modules/angularfire2/storage/index.js");
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
            var _this = this;
            var currentUser, name, uid, team, val, _a;
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

module.exports = "/* Sidebar */\n\nmat-icon {\n  padding: 0 15px;\n  font-size: 25px !important;\n}\n\n.nav {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  float: left;\n  background-color: white;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  width: 20%;\n  height: 100%;\n}\n\n.navBtn {\n  margin: 0;\n  padding: 0;\n  display: block;\n  background-color: inherit;\n  color: black;\n  padding: 22px 0px;\n  width: 100%;\n  border: none;\n  outline: none;\n  text-align: left;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.navHeader {\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-size: 52px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.navTxt {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n}\n\n.navBtn:hover:not(.navHeader):not(.active) {\n  background-color: #ddd;\n}\n\n.navBtn.active {\n  background-color: #ccc;\n}\n\n/* Sidebar end */\n\n/* Tables start*/\n\n.tableDiv {\n  position: absolute;\n  left: 25%;\n  right: 5%;\n  top: 100px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\n.tableHead {\n  background-color: #F5F5F5;\n  height: 60px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  border-radius: 2px 2px 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.tableHeader {\n  margin: 0;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 60px;\n}\n\n.reloadBtn {\n  float: right;\n  background-color: #0388CA;\n  margin-right: 20px;\n  border: 0 solid;\n  border-radius: 7px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.reloadBtn:hover {\n  background-color: #1c93cf;\n}\n\nmain mat-icon {\n  padding: 8px 20px;\n  color: white;\n  font-weight: 100;\n}\n\n.table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.table tr {\n  cursor: pointer;\n}\n\n.table {\n  background-color: white;\n}\n\n.table tr:hover {\n  background-color: #ddd;\n}\n\n.table td {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  font-weight: 300;\n  padding: 8px;\n  text-align: center;\n  border-bottom: 1px solid #dddddd;\n}\n\n.table th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  background-color: #F5F5F5;\n  color: #707070;\n  cursor: default;\n}\n\n/* Tables end */\n"

/***/ }),

/***/ "./app/ui/admin/admin.component.html":
/*!*******************************************!*\
  !*** ./app/ui/admin/admin.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n  <span class=\"navBtn navHeader\">Admin</span>\n  <i [class.active]=\"navTab == 'users'\" (click)=\"navTab = 'users'\" class=\"navBtn\">\n    <div>\n      <mat-icon>person</mat-icon>\n      <span class=\"navTxt\">Users</span>\n    </div>\n  </i>\n  <i [class.active]=\"navTab == 'teams'\" (click)=\"navTab = 'teams'\" class=\"navBtn\">\n    <div>\n      <mat-icon>group</mat-icon>\n      <span class=\"navTxt\">Teams</span>\n    </div>\n  </i>\n  <i [class.active]=\"navTab == 'feedback'\" (click)=\"navTab = 'feedback'\" class=\"navBtn\">\n    <div>\n      <mat-icon>feedback</mat-icon>\n      <span class=\"navTxt\">Feedback</span>\n    </div>\n  </i>\n  <i [class.active]=\"navTab == 'maintenance'\" (click)=\"navTab = 'maintenance'\" class=\"navBtn\">\n    <div>\n      <mat-icon>build</mat-icon>\n      <span class=\"navTxt\">Maintenance</span>\n    </div>\n  </i>\n</div>\n\n<main [ngSwitch]='navTab'>\n  <div *ngSwitchCase=\"'users'\">\n    <div class=\"tableDiv\">\n      <div class=\"tableHead\">\n        <div>\n          <div class=\"reloadBtn\">\n            <mat-icon>refresh</mat-icon>\n          </div>\n        </div>\n      </div>\n      <table class=\"table\" cellspacing=\"0\">\n        <tr>\n          <th>UID</th>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Role</th>\n        </tr>\n        <!--<tr *ngFor=\"let user of adminService.allUsers; let i=index \">\n          <td>{{user[i].email}}</td>\n          <td>{{user[i].displayName}}</td>\n          <td>{{user[i].email}}</td>\n          <td>{{user[i].email}}</td>\n          <td>{{user[i].role}}</td>\n        </tr> -->\n\n        <tr>\n          <td>XD6EkNokYXV3XTtW2UZys2FtcXI3</td>\n          <td>Magnus Trandokken</td>\n          <td>magnus@trandokken.com</td>\n          <td>Admin</td>\n        </tr>\n        <tr>\n          <td>XJKAJkSJ7s4NKS2noKFJOJLKJSLKb</td>\n          <td>Sondre sørbye</td>\n          <td>sondre@sorbye.no</td>\n          <td>Admin</td>\n        </tr>\n        <tr>\n          <td>XD6EkNXTtW2UssZys2FtJLcXI2SG</td>\n          <td>Ola Nordmann</td>\n          <td>ola@nordmann.no</td>\n          <td>User</td>\n        </tr>\n      </table>\n\n    </div>\n  </div>\n  <div *ngSwitchCase=\"'feedback'\">\n    <div class=\"tableDiv\">\n      <div class=\"tableHead\">\n        <div>\n          <div class=\"reloadBtn\">\n            <mat-icon>refresh</mat-icon>\n          </div>\n        </div>\n      </div>\n      <table class=\"table\" cellspacing=\"0\">\n        <tr>\n          <th>UID</th>\n          <th>Category</th>\n          <th>Date</th>\n        </tr>\n\n        <tr *ngFor=\"let feedbackMessage of adminService.feedback$ | async\">\n          <td>{{ feedbackMessage.uid }}</td>\n          <td>{{ feedbackMessage.category }}</td>\n          <td>{{ feedbackMessage.date }}</td>\n        </tr>\n      </table>\n\n    </div>\n  </div>\n</main>\n"

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
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/functions */ "../node_modules/angularfire2/functions/index.js");
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

module.exports = "html,\nbody {\n  margin: 0;\n  background-color: #F5F6F7;\n  font-family: roboto;\n}\n\nmain {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 16px;\n  display: flex;\n}\n\n.boardsWrapper {\n  flex: 1;\n}\n\napp-teams-module {\n  margin-right: 16px;\n}\n\nh3 {\n  line-height: 50px;\n  margin: 16px 0 16px 16px;\n}\n\nh3:first-letter {\n  text-transform: uppercase;\n}\n\nh2 {\n  margin: 15px 0;\n}\n\n.container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 0.13fr;\n      grid-template-columns: 1fr 0.13fr;\n  position: relative;\n}\n\n.menuBtn {\n  position: absolute;\n  right: 0;\n}\n\n.card {\n  width: 100%;\n  background: var(--cards);\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);\n  display: table;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-bottom: 10px;\n  height: 50px;\n  overflow: hidden;\n}\n\n#distributionBar {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n}\n\n.entryBar {\n  height: 10px;\n\n}\n\n#todoBar {\n  background-color: #e74c3c;\n}\n\n#inProgressBar {\n  background-color: #f1c40f;\n}\n\n#doneBar {\n  background-color: #27ae60;\n}\n\n#boards, #archived {\n  outline: 0;\n}\n\n.deleteBtn {\n  font-family: roboto;\n  float: right;\n  background-color: red;\n  text-align: center;\n  transition: all 0.3s;\n}\n\n.deleteBtn:hover{\n    opacity: 0.9;\n}\n\n.deleteBtn h3 {\n  line-height: 50px;\n  color: white;\n  margin-left: 0;\n}\n\n#noTeam {\n  text-align: center;\n  width: calc(100% - 40px);\n  max-width: 400px;\n  margin: 100px auto 0 auto;\n  padding: 20px;\n}\n\n#noEntries {\n  margin-top: 15%;\n  text-align: center;\n  margin-left: 120px;\n}\n\nh4 {\n  margin-bottom: 10px;\n}\n\n@media only screen and (max-width: 800px) {\n  main {\n    display: block;\n  }\n  app-teams-module {\n    margin: 0;\n  }\n  h2 {\n    font-size: 19px;\n  }\n  #noEntries {\n    margin-left: unset;\n  }\n}\n\n"

/***/ }),

/***/ "./app/ui/boards/boards.component.html":
/*!*********************************************!*\
  !*** ./app/ui/boards/boards.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n\n<main *ngIf=\"(teamsService.$teams | async)?.length > 0\">\n  <app-teams-module></app-teams-module>\n  <div *ngIf=\"!(($boards | async)?.length == 0 && ($archived | async)?.length == 0)\" class=\"boardsWrapper\">\n    <h4><strong>Active projects</strong></h4>\n    <section id=\"boards\" *ngFor=\"let board of $boards | async\" [routerLink]=\"['/scrum', teamId, board.id]\">\n      <div class=\"card\">\n        <div class=\"container\">\n          <h3>{{board.name}}</h3>\n          <div id=\"distributionBar\">\n            <div id=\"todoBar\" class=\"entryBar\" [style.width.%]=\"board.aggregatedDataPercent.todo\" matTooltip=\"{{(board.aggregatedData.todo | number) + ' tasks'}}\"></div>\n            <div id=\"inProgressBar\" class=\"entryBar\" [style.width.%]=\"board.aggregatedDataPercent.inProgress\" matTooltip=\"{{(board.aggregatedData.inProgress | number) + ' tasks'}}\"></div>\n            <div id=\"doneBar\" class=\"entryBar\" [style.width.%]=\"board.aggregatedDataPercent.done\" matTooltip=\"{{(board.aggregatedData.done | number) + ' tasks'}}\"></div>\n          </div>\n          <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\" (click)=\"$event.stopPropagation()\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item (click)=\"edit(board)\">\n              <mat-icon>edit</mat-icon>\n              <span>Rename</span>\n            </button>\n            <button mat-menu-item (click)=\"archive(board)\">\n              <mat-icon>move_to_inbox</mat-icon>\n              <span>Archive</span>\n            </button>\n            <button mat-menu-item (click)=\"delete(board)\">\n              <mat-icon>delete</mat-icon>\n              <span>Delete</span>\n            </button>\n          </mat-menu>\n        </div>\n      </div>\n    </section>\n    <div id=\"archivedWrapper\" *ngIf=\"($archived | async)?.length > 0\">\n      <br>\n      <h4><strong>Archived projects</strong></h4>\n      <section id=\"archived\" *ngFor=\"let archivedBoard of $archived | async\">\n        <div class=\"card\">\n          <div class=\"container\">\n            <h3>{{archivedBoard.name}}</h3>\n            <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\" (click)=\"$event.stopPropagation()\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"activate(archivedBoard)\">\n                <mat-icon>undo</mat-icon>\n                <span>Reactivate</span>\n              </button>\n              <button mat-menu-item (click)=\"deleteArchived(archivedBoard)\">\n                <mat-icon>delete</mat-icon>\n                <span>Delete</span>\n              </button>\n            </mat-menu>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div *ngIf=\"($boards | async)?.length == 0 && ($archived | async)?.length == 0\" id=\"noEntries\">\n    <div>\n      <p>No scrumboards</p>\n      <h5>¯\\_(ツ)_/¯</h5>\n    </div>\n  </div>\n\n</main>\n\n<div id=\"noTeam\" *ngIf=\"(teamsService.$teams | async)?.length === 0\">\n  <h2>Hi {{(auth.user$ | async)?.displayName}}!</h2>\n  <p>You are currently not a member of any team. You can join a team by being invited. You can also create your own\n    team with the button below.</p>\n  <button mat-raised-button (click)=\"teamsService.createNewTeam()\">Create a new team</button>\n</div>\n\n\n<button *ngIf=\"(teamsService.$teams | async)?.length > 0\" mat-fab id=\"addButton\" (click)=\"addBoard()\" (click)=\"$event.stopPropagation()\">\n  <mat-icon>add</mat-icon>\n</button>"

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
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/take */ "../node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/share */ "../node_modules/rxjs-compat/_esm5/add/operator/share.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-hotkeys */ "../node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_9__);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function BoardsComponent(teamsService, navbarService, route, afs, router, auth, hotkeysService) {
        var _this = this;
        this.teamsService = teamsService;
        this.navbarService = navbarService;
        this.route = route;
        this.afs = afs;
        this.router = router;
        this.auth = auth;
        this.hotkeysService = hotkeysService;
        this.loading = true;
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_9__["Hotkey"]('n', function (event) {
            _this.addBoard();
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_9__["Hotkey"]('ctr+n', function (event) {
            _this.teamsService.createNewTeam();
            return false;
        }));
    }
    BoardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbarService.title = null;
        // SELECT TEAM LOGIC
        this.boardCollection = this.route.paramMap.shareReplay(1).map(function (paramMap) {
            _this.teamId = paramMap.get('teamId');
            if (!_this.teamId) {
                _this.teamId = localStorage.getItem('previousSelectedTeam');
                if (!_this.teamId) {
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
        this.$boards = this.boardCollection.filter(function (collection) { return collection !== undefined; })
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
        }); });
        this.archiveCollection = this.route.paramMap.map(function (paramMap) {
            return _this.afs.collection('teams/' + paramMap.get('teamId') + '/archived');
        });
        this.$archived = this.archiveCollection.filter(function (collection) { return collection !== undefined; })
            .switchMap(function (collection) { return collection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }); });
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
        this.sub = this.$boards.take(1).subscribe(function () { return _this.loading = false; });
    };
    BoardsComponent.prototype.addBoard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                            title: 'What is the name of your project?',
                            input: 'text',
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
                                collection.add({ name: name, aggregatedData: { todo: 0, inProgress: 0, done: 0 } });
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
            text: 'This will archive your project. Shared public links wont work anymore. You can of course reactivate at any time.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Archive!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Archive method here
                _this.archiveCollection.take(1).subscribe(function (collection) { return collection
                    .add({ name: board.name, aggregatedData: { todo: 0, inProgress: 0, done: 0 } }); });
                _this.boardCollection.take(1).subscribe(function (collection) { return collection.doc(board.id).delete(); });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Archived!', 'Your project has been archived. You can find it in the archived section below.', 'success');
                // Google analytics event
                window.ga('send', 'event', {
                    eventCategory: 'Project management',
                    eventAction: 'Archive project',
                });
            }
        });
    };
    BoardsComponent.prototype.activate = function (board) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'This will reactivate your project.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Activate!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // TODO Activate method here
                _this.archiveCollection.take(1).subscribe(function (collection) { return collection.doc(board.id).delete(); });
                _this.boardCollection.take(1).subscribe(function (collection) { return collection.add({ name: board.name, aggregatedData: { todo: 0, inProgress: 0, done: 0 } }); });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Archived!', 'Your project has been reactivated.', 'success');
                // Google analytics event
                window.ga('send', 'event', {
                    eventCategory: 'Project management',
                    eventAction: 'Reactivate project',
                });
            }
        });
    };
    BoardsComponent.prototype.delete = function (board) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'This will delete your project permanently!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'No, cancel!',
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
    BoardsComponent.prototype.deleteArchived = function (board) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'This will delete your project permanently!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // Delete method
                _this.archiveCollection.take(1).subscribe(function (collection) { return collection.doc(board.id).delete(); });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Your project has been deleted.', 'success');
                // Google analytics event
                window.ga('send', 'event', {
                    eventCategory: 'Project management',
                    eventAction: 'Delete archived project',
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
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__["AuthServiceService"],
            angular2_hotkeys__WEBPACK_IMPORTED_MODULE_9__["HotkeysService"]])
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

module.exports = "main {\n  text-align: center;\n  display: table;\n  margin: 80px auto;\n}\n\n#logo {\n  width: 90px;\n  height: 200px;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\nli {\n  margin-top: 16px;\n}\n\n.btn {\n  background-position: 1em;\n  background-repeat: no-repeat;\n  background-size: 2em;\n  border-radius: 0.5em;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 1em;\n  height: 4em;\n  line-height: 1em;\n  padding: 0 2em 0 4em;\n  text-decoration: none;\n  transition: all 0.5s;\n  width: 260px;\n}\n\n.btn-google {\n  background-color: #dd4b39;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2235px%22 height%3D%2235px%22 viewBox%3D%2210 10 110.658 110.646%22 enable-background%3D%22new 0 0 134.658 131.646%22%09 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M70.479%2C71.845l-3.983-3.093c-1.213-1.006-2.872-2.334-2.872-4.765c0-2.441%2C1.659-3.993%2C3.099-5.43%09%09%09c4.64-3.652%2C9.276-7.539%2C9.276-15.73c0-8.423-5.3-12.854-7.84-14.956h6.849l7.189-4.517H60.418%09%09%09c-5.976%2C0-14.588%2C1.414-20.893%2C6.619c-4.752%2C4.1-7.07%2C9.753-7.07%2C14.842c0%2C8.639%2C6.633%2C17.396%2C18.346%2C17.396%09%09%09c1.106%2C0%2C2.316-0.109%2C3.534-0.222c-0.547%2C1.331-1.1%2C2.439-1.1%2C4.32c0%2C3.431%2C1.763%2C5.535%2C3.317%2C7.528%09%09%09c-4.977%2C0.342-14.268%2C0.893-21.117%2C5.103c-6.523%2C3.879-8.508%2C9.525-8.508%2C13.51c0%2C8.202%2C7.731%2C15.842%2C23.762%2C15.842%09%09%09c19.01%2C0%2C29.074-10.519%2C29.074-20.932C79.764%2C79.709%2C75.344%2C75.943%2C70.479%2C71.845z M56%2C59.107%09%09%09c-9.51%2C0-13.818-12.294-13.818-19.712c0-2.888%2C0.547-5.87%2C2.428-8.199c1.773-2.218%2C4.861-3.657%2C7.744-3.657%09%09%09c9.168%2C0%2C13.923%2C12.404%2C13.923%2C20.382c0%2C1.996-0.22%2C5.533-2.762%2C8.09C61.737%2C57.785%2C58.762%2C59.107%2C56%2C59.107z M56.109%2C103.65%09%09%09c-11.826%2C0-19.452-5.657-19.452-13.523c0-7.864%2C7.071-10.524%2C9.504-11.405c4.64-1.561%2C10.611-1.779%2C11.607-1.779%09%09%09c1.105%2C0%2C1.658%2C0%2C2.538%2C0.111c8.407%2C5.983%2C12.056%2C8.965%2C12.056%2C14.629C72.362%2C98.542%2C66.723%2C103.65%2C56.109%2C103.65z%22%2F%3E%09%09%3Cpolygon fill%3D%22%23FFFFFF%22 points%3D%2298.393%2C58.938 98.393%2C47.863 92.923%2C47.863 92.923%2C58.938 81.866%2C58.938 81.866%2C64.469%09%09%0992.923%2C64.469 92.923%2C75.612 98.393%2C75.612 98.393%2C64.469 109.506%2C64.469 109.506%2C58.938 %09%09%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n.btn-google:hover {\n  background-color: #e47365;\n}\n\n.btn-google:active {\n  background-color: #c23321;\n}\n\n.btn-facebook {\n  background-color: #3b5998;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2235px%22 height%3D%2235px%22 viewBox%3D%220 0 300 300%22 enable-background%3D%22new 0 0 266.893 266.895%22%09 xml%3Aspace%3D%22preserve%22%3E%3Cpath id%3D%22f%22 fill%3D%22%23FFFFFF%22 d%3D%22M182.409%2C262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261%2C3.127-18.935%2C19.275-18.935%09l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695%2C0-50.025%2C18.126-50.025%2C51.413v28.684h-33.585v38.895h33.585%09v99.803H182.409z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.btn-facebook:hover {\n  background-color: #4c70ba;\n}\n\n.btn-facebook:active {\n  background-color: #2d4373;\n}\n\n#progressbar {\n  display: none;\n}\n\n.mdc-linear-progress .mdc-linear-progress__bar-inner {\n  background-color: var(--button-color);\n}\n"

/***/ }),

/***/ "./app/ui/login/login.component.html":
/*!*******************************************!*\
  !*** ./app/ui/login/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" id=\"spinnerWrapper\">\n  <mat-spinner></mat-spinner>\n</div>\n\n<main *ngIf=\"!loading\">\n  <svg id=\"logo\" version=\"1.1\" xmlns=\"&ns_svg;\" xmlns:xlink=\"&ns_xlink;\" width=\"512\" height=\"522\" viewBox=\"0 0 512 522\" overflow=\"visible\"\n    enable-background=\"new 0 0 512 522\" xml:space=\"preserve\">\n\n    <g id=\"Layer_2\">\n      <circle fill=\"none\" stroke=\"#484848\" stroke-width=\"44\" cx=\"255\" cy=\"130\" r=\"85\" />\n      <circle fill=\"none\" stroke=\"#484848\" stroke-width=\"44\" cx=\"108\" cy=\"385\" r=\"85\" />\n      <circle fill=\"none\" stroke=\"#484848\" stroke-width=\"44\" cx=\"403\" cy=\"384\" r=\"85\" />\n    </g>\n    <g id=\"Layer_3\">\n      <g>\n        <g>\n          <path fill=\"#484848\" d=\"M334.938,125.557C334.963,126.37,335,127.181,335,128c0,15.014-4.1,29.063-11.219,41.118\n             C370.27,193.837,402,242.779,402,299c0,1.684-0.039,3.357-0.096,5.027c0.366-0.005,0.729-0.027,1.096-0.027\n             c15.506,0,29.971,4.425,42.229,12.061C445.729,310.438,446,304.75,446,299C446,222.208,400.441,155.867,334.938,125.557z\n              M184.689,169.936C177.271,157.703,173,143.351,173,128c0-0.502,0.029-0.997,0.038-1.497C108.622,157.234,64,223.001,64,299\n             c0,6.233,0.31,12.396,0.897,18.479C77.243,310.194,91.628,306,107,306c0.393,0,0.78,0.024,1.172,0.029\n             c-0.11-2.33-0.172-4.673-0.172-7.029C108,243.396,139.034,194.907,184.689,169.936z M333.343,423.328\n             C310.649,437.68,283.779,446,255,446c-26.866,0-52.067-7.25-73.762-19.889c-6.814,13.604-17.25,25.067-30.051,33.137\n             C181.093,478.688,216.749,490,255,490c41.157,0,79.315-13.086,110.533-35.314C352.041,447.52,340.855,436.604,333.343,423.328z\"\n          />\n        </g>\n      </g>\n    </g>\n  </svg>\n  <h1>Sign in to Scrum</h1>\n  <br>\n  <ul>\n    <li>\n      <button class=\"btn btn-facebook\" (click)=\"signInWithFacebook()\">Sign in with Facebook </button>\n    </li>\n    <li>\n      <button class=\"btn-google btn\" (click)=\"signInWithGoogle()\">Sign in with Google </button>\n    </li>\n\n  </ul>\n</main>"

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
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/navbar.service */ "./app/services/navbar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/functions */ "../node_modules/angularfire2/functions/index.js");
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

module.exports = "header {\n    height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: var(--header);\n    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);\n}\n\n#logo {\n    width: 29px;\n    color: white;\n    border-radius: 50%;\n    height: 29px;\n    margin-top: 7px;\n    padding: 10px;\n    background-color: var(--header-title);\n}\n\n#logoWrapper {\n    display: flex;\n}\n\n#logoTxt {\n    line-height: 64px;\n    margin-left: 13px;\n}\n\nh1 {\n    color: var(--header-title);\n    font-size: 30px;\n    font-family: audiowide;\n    text-align: center;\n    margin: 0;\n}\n\n#navbarTitle {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    width: calc(100% - 160px);\n}\n\n#profilePic {\n    position: absolute;\n    overflow: hidden;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    right: 25px;\n    cursor: pointer;\n}\n\n#profilePic img {\n    width: 100%;\n    height: 100%;\n}\n\n#profilePic mat-icon {\n    position: absolute;\n    font-size: 42px;\n}\n\n#infoWrapper,\n#darkModeSettings {\n    display: flex;\n    margin: 0 16px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, .87);\n}\n\n#infoWrapper img {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n}\n\n#name {\n    font-size: 20px;\n    margin: 0;\n    margin-top: 3px;\n    margin-left: 7px;\n}\n\n#email {\n    font-size: 15px;\n    margin-left: 7px;\n    margin-top: 2px;\n}\n\nmat-slide-toggle {\n    margin: 16px;\n}\n\n#backBtn {\n    position: absolute;\n    line-height: 64px;\n    text-align: center;\n    top: 0;\n    left: 35px;\n    font-size: 32px;\n    color: var(--txt-color);\n}\n\n#hr {\n    border-bottom: 1px solid #ebebeb;\n}\n\n@media only screen and (max-width: 800px) {\n    header {\n        height: 56px;\n    }\n    header h1 {\n        font-size: 24px;\n        width: calc(100% - 120px);\n    }\n    #magsonLogo {\n        text-shadow: 0 1px 4px var(--button-accent);\n    }\n    #profilePic {\n        right: 10px;\n    }\n    #backBtn {\n        line-height: 56px;\n        left: 16px;\n        font-size: 30px;\n    }\n}"

/***/ }),

/***/ "./app/ui/navbar/navbar.component.html":
/*!*********************************************!*\
  !*** ./app/ui/navbar/navbar.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"!navbarService.hidden\">\n  <a [routerLink]=\"['/']\">\n    <mat-icon *ngIf=\"navbarService.backBtn\" id=\"backBtn\">arrow_back</mat-icon>\n  </a>\n  <div id=\"logoWrapper\" *ngIf=\"!navbarService.title\">\n    <svg id=\"logo\" version=\"1.1\" xmlns=\"&ns_svg;\" xmlns:xlink=\"&ns_xlink;\" width=\"512\" height=\"522\" viewBox=\"0 0 512 522\"\n      overflow=\"visible\" enable-background=\"new 0 0 512 522\" xml:space=\"preserve\">\n      <g id=\"Layer_2\">\n        <circle fill=\"none\" stroke=\"currentcolor\" stroke-width=\"44\" cx=\"255\" cy=\"130\" r=\"85\" />\n        <circle fill=\"none\" stroke=\"currentcolor\" stroke-width=\"44\" cx=\"108\" cy=\"385\" r=\"85\" />\n        <circle fill=\"none\" stroke=\"currentcolor\" stroke-width=\"44\" cx=\"403\" cy=\"384\" r=\"85\" />\n      </g>\n      <g id=\"Layer_3\">\n        <g>\n          <g>\n            <path fill=\"currentcolor\" d=\"M334.938,125.557C334.963,126.37,335,127.181,335,128c0,15.014-4.1,29.063-11.219,41.118\n          C370.27,193.837,402,242.779,402,299c0,1.684-0.039,3.357-0.096,5.027c0.366-0.005,0.729-0.027,1.096-0.027\n          c15.506,0,29.971,4.425,42.229,12.061C445.729,310.438,446,304.75,446,299C446,222.208,400.441,155.867,334.938,125.557z\n           M184.689,169.936C177.271,157.703,173,143.351,173,128c0-0.502,0.029-0.997,0.038-1.497C108.622,157.234,64,223.001,64,299\n          c0,6.233,0.31,12.396,0.897,18.479C77.243,310.194,91.628,306,107,306c0.393,0,0.78,0.024,1.172,0.029\n          c-0.11-2.33-0.172-4.673-0.172-7.029C108,243.396,139.034,194.907,184.689,169.936z M333.343,423.328\n          C310.649,437.68,283.779,446,255,446c-26.866,0-52.067-7.25-73.762-19.889c-6.814,13.604-17.25,25.067-30.051,33.137\n          C181.093,478.688,216.749,490,255,490c41.157,0,79.315-13.086,110.533-35.314C352.041,447.52,340.855,436.604,333.343,423.328z\" />\n          </g>\n        </g>\n      </g>\n    </svg>\n    <h1 id=\"logoTxt\">Scrumboard.io</h1>\n  </div>\n  <h1 *ngIf=\"navbarService.title\" id=\"navbarTitle\">{{navbarService.title}}</h1>\n  <div id=\"profilePic\" [matMenuTriggerFor]=\"menu\">\n    <img [src]=\"profileUrl\" alt=\"\">\n    <mat-icon>account_circle</mat-icon>\n  </div>\n  <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n    <div id=\"infoWrapper\">\n      <img [src]=\"profileUrl\" alt=\"\">\n      <div>\n        <p id=\"name\">{{profileName}}</p>\n        <p id=\"email\">{{profileEmail}}</p>\n      </div>\n    </div>\n    <div id=\"darkModeSettings\">\n      <p>Dark mode:</p>\n      <mat-slide-toggle [checked]=\"darkThemeActivated\" (change)=\"toggleTheme($event)\" (click)=\"$event.stopPropagation()\"></mat-slide-toggle>\n    </div>\n    <div id=\"hr\"></div>\n    <button mat-menu-item [routerLink]=\"['/privacy']\">\n      <mat-icon>book</mat-icon>\n      <span>Privacy policy</span>\n    </button>\n    <button mat-menu-item (click)=\"sendFeedback()\">\n      <mat-icon>feedback</mat-icon>\n      <span>Send feedback</span>\n    </button>\n    <button mat-menu-item (click)=\"auth.logOut()\">\n      <mat-icon>exit_to_app</mat-icon>\n      <span>Logout</span>\n    </button>\n  </mat-menu>\n</header>"

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
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/firestore */ "../node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/navbar.service */ "./app/services/navbar.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./app/services/auth-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function NavbarComponent(auth, navbarService, afs) {
        var _this = this;
        this.auth = auth;
        this.navbarService = navbarService;
        this.afs = afs;
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
            var _this = this;
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
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
                                    date: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp(),
                                    uid: user.uid,
                                    name: user.displayName,
                                    email: user.email
                                }).then(function () {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Thank you!', 'We have recieved your feedback.', 'success');
                                }).catch(function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Error', 'Your feedback was not sent, please try again', 'error'); });
                            });
                        }
                        else if (post[1] === '') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./app/ui/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./app/ui/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]])
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

module.exports = ".policy, #header-container {\n  margin: 0;\n  color: #333;\n  max-width: 600px;\n  margin: 10px auto;\n  padding: 20px;\n}\n\n#header-container {\n  color: white;\n}\n\n.col-md-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px\n}\n\n.view-pages {\n  background: #FFF;\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  line-height: 24px\n}\n\n.view-pages .header {\n  margin: 0;\n  padding: 10px 0;\n  background: #3c3c3c;\n  color: #FFF\n}\n\n.view-pages .header h1 {\n  font-size: 25px;\n  line-height: 35px;\n  margin: 0\n}\n\n.view-pages .policy {\n  padding: 0;\n  background: #FFF\n}\n\n.view-pages .content {\n  font-size: 16px;\n  line-height: 22px;\n  word-wrap: break-word;\n  color: #333;\n  padding: 30px 0;\n  background: #FFF\n}\n\n.view-pages .content h1 {\n  font-size: 30px;\n  margin: 0 0 30px 0\n}\n\n.view-pages .content h2 {\n  font-size: 24px;\n  margin: 0 0 30px 0\n}\n\n.view-pages .content h3 {\n  font-size: 20px;\n  margin: 0 0 30px 0\n}\n\n.view-pages .content h4 {\n  font-size: 16px;\n  margin: 0 0 30px 0\n}\n\n.view-pages .content p {\n  margin: 0 0 30px 0;\n  color: #333\n}\n\n.view-pages .content ol,\n.view-pages .content ul {\n  margin: 0 0 30px 0\n}\n\n.view-pages .content a {\n  color: #333\n}\n\n.view-pages .credits {\n  background: #F4F9FD;\n  padding: 20px 0;\n  color: #999;\n  font-size: 12px;\n  line-height: 18px\n}\n"

/***/ }),

/***/ "./app/ui/privacy/privacy.component.html":
/*!***********************************************!*\
  !*** ./app/ui/privacy/privacy.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrap\" class=\"view-pages\">\n  <div class=\"header\">\n    <div class=\"container\" id=\"header-container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1>\n            Magson\n          </h1>\n          <p>\n            Privacy Policy of https://scrum.magson.no\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"policy\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <div class=\"content\">\n            <h1>Privacy Policy</h1>\n\n\n            <p>Effective date: August 09, 2018</p>\n\n\n            <p>Magson (\"us\", \"we\", or \"our\") operates the https://scrum.magson.no website (the \"Service\").</p>\n\n            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you\n              use our Service and the choices you have associated with that data. This Privacy Policy for Magson is powered\n              by\n              <a href=\"https://www.freeprivacypolicy.com/free-privacy-policy-generator.php\">FreePrivacyPolicy.com</a>.</p>\n\n            <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use\n              of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used\n              in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://scrum.magson.no</p>\n\n\n            <h2>Information Collection And Use</h2>\n\n            <p>We collect several different types of information for various purposes to provide and improve our Service to\n              you.\n            </p>\n\n            <h3>Types of Data Collected</h3>\n\n            <h4>Personal Data</h4>\n\n            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can\n              be used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but\n              is not limited to:</p>\n\n            <ul>\n              <li>Email address</li>\n              <li>First name and last name</li>\n              <li>Cookies and Usage Data</li>\n            </ul>\n\n            <h4>Usage Data</h4>\n\n            <p>We may also collect information how the Service is accessed and used (\"Usage Data\"). This Usage Data may include\n              information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version,\n              the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique\n              device identifiers and other diagnostic data.</p>\n\n            <h4>Tracking &amp; Cookies Data</h4>\n            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>\n            <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent\n              to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags,\n              and scripts to collect and track information and to improve and analyze our Service.</p>\n            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you\n              do not accept cookies, you may not be able to use some portions of our Service.</p>\n            <p>You can learn more about cookies\n              <a href=\"https://cookies.insites.com/about-cookies/\">here</a>\n            </p>\n            <p>Examples of Cookies we use:</p>\n            <ul>\n              <li>\n                <strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\n              <li>\n                <strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>\n              <li>\n                <strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\n            </ul>\n\n            <h2>Use of Data</h2>\n\n            <p>Magson uses the collected data for various purposes:</p>\n            <ul>\n              <li>To provide and maintain the Service</li>\n              <li>To notify you about changes to our Service</li>\n              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>\n              <li>To provide customer care and support</li>\n              <li>To provide analysis or valuable information so that we can improve the Service</li>\n              <li>To monitor the usage of the Service</li>\n              <li>To detect, prevent and address technical issues</li>\n            </ul>\n\n            <h2>Transfer Of Data</h2>\n            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside\n              of your state, province, country or other governmental jurisdiction where the data protection laws may differ\n              than those from your jurisdiction.</p>\n            <p>If you are located outside Norway and choose to provide information to us, please note that we transfer the data,\n              including Personal Data, to Norway and process it there.</p>\n            <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement\n              to that transfer.</p>\n            <p>Magson will take all steps reasonably necessary to ensure that your data is treated securely and in accordance\n              with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country\n              unless there are adequate controls in place including the security of your data and other personal information.</p>\n\n            <h2>Disclosure Of Data</h2>\n\n            <h3>Legal Requirements</h3>\n            <p>Magson may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\n            <ul>\n              <li>To comply with a legal obligation</li>\n              <li>To protect and defend the rights or property of Magson</li>\n              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\n              <li>To protect the personal safety of users of the Service or the public</li>\n              <li>To protect against legal liability</li>\n            </ul>\n\n            <h2>Security Of Data</h2>\n            <p>The security of your data is important to us, but remember that no method of transmission over the Internet,\n              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect\n              your Personal Data, we cannot guarantee its absolute security.</p>\n\n            <h2>Service Providers</h2>\n            <p>We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide\n              the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service\n              is used.</p>\n            <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated\n              not to disclose or use it for any other purpose.</p>\n\n            <h3>Analytics</h3>\n            <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>\n            <ul>\n              <li>\n                <p>\n                  <strong>Google Analytics</strong>\n                </p>\n                <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google\n                  uses the data collected to track and monitor the use of our Service. This data is shared with other Google\n                  services. Google may use the collected data to contextualize and personalize the ads of its own advertising\n                  network.\n                </p>\n                <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the\n                  Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js,\n                  and dc.js) from sharing information with Google Analytics about visits activity.</p>\n                <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web\n                  page:\n                  <a href=\"https://policies.google.com/privacy?hl=en\">https://policies.google.com/privacy?hl=en</a>\n                </p>\n              </li>\n            </ul>\n\n\n            <h2>Links To Other Sites</h2>\n            <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link,\n              you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every\n              site you visit.</p>\n            <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third\n              party sites or services.</p>\n\n\n            <h2>Children's Privacy</h2>\n            <p>Our Service does not address anyone under the age of 18 (\"Children\").</p>\n            <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a\n              parent or guardian and you are aware that your Children has provided us with Personal Data, please contact\n              us. If we become aware that we have collected Personal Data from children without verification of parental\n              consent, we take steps to remove that information from our servers.</p>\n\n\n            <h2>Changes To This Privacy Policy</h2>\n            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy\n              Policy on this page.</p>\n            <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective\n              and update the \"effective date\" at the top of this Privacy Policy.</p>\n            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are\n              effective when they are posted on this page.</p>\n\n\n            <h2>Contact Us</h2>\n            <p>If you have any questions about this Privacy Policy, please contact us:</p>\n            <ul>\n              <li>By email: support@magson.no</li>\n\n            </ul>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "main {\n  display: table;\n  margin: 0 auto;\n}\n\n#tabNav {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  background-color: var(--button-color);\n  z-index: 10;\n  font-weight: bold;\n  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);\n}\n\n#tabNav ul {\n  position: relative;\n  display: table;\n  margin: 0 auto;\n  list-style: none;\n  padding: 0;\n}\n\n#tabNav li {\n  line-height: 48px;\n  display: inline-block;\n  text-align: center;\n  width: 65px;\n  margin: 0 30px;\n  font-size: 17px;\n  color: rgba(255, 255, 255, .7);\n  cursor: pointer;\n}\n\n#tabNav li.active {\n  color: var(--bg-color);\n  border-bottom: 2px solid var(--bg-color);\n}\n\n.todoContainer {\n  margin: 16px auto;\n  display: flex;\n  flex-direction: row;\n  font-family: roboto;\n}\n\n#sortBy {\n  position: absolute;\n  right: 50px;\n  color: var(--txt-color) !important;\n  width: 120px;\n}\n\n#sortBy mat-icon {\n  margin-top: -3px;\n}\n\nmat-select {\n  position: inherit;\n}\n\n.menuBtn {\n  position: absolute;\n  right: 0;\n}\n\n.todoContainer>section {\n  flex-grow: 1;\n  margin: 0 10px;\n  max-width: calc(33.33% - 20px);\n}\n\nsection .container {\n  margin: 0 10px;\n}\n\n.card {\n  width: 100%;\n  background: var(--cards);\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);\n  display: table;\n  border-radius: 8px;\n  margin-bottom: 13px;\n  overflow: hidden;\n  position: relative;\n}\n\n.gridWrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n  position: relative;\n  font-family: roboto;\n\n}\n\n.gridCard {\n  background: var(--cards);\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  overflow: hidden;\n  position: relative;\n}\n\n#profilePic {\n  overflow: hidden;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin-top: 10px;\n  display: inline-block;\n}\n\n#profilePic img {\n  width: 100%;\n  height: 100%;\n}\n\n#profilePic mat-icon {\n  position: absolute;\n  font-size: 42px;\n}\n\n.withProfilePic strong {\n  position: absolute;\n  margin-top: 19px;\n  margin-left: 10px;\n  width: calc(100% - 90px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.withProfilePic p {\n  margin-top: 8px;\n}\n\n#backButton {\n  cursor: pointer;\n  position: absolute;\n  left: 30px;\n  font-size: 35px;\n  top: 24px;\n}\n\n.setButton {\n  width: 100%;\n  border-style: none;\n  font-size: 15px;\n  padding: 10px;\n  background-color: var(--button-color);\n  color: white;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s;\n}\n\n.setButton:hover {\n  background-color: var(--button-accent);\n}\n\n.container>p,\n.container>strong {\n  font-size: 19px;\n  -ms-word-break: break-all;\n  word-break: break-all;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n}\n\n.container>p:first-letter {\n  text-transform: uppercase;\n}\n\n#shareBtn {\n  position: absolute;\n  right: 88px;\n  top: 14px;\n}\n\n#shareBtn mat-icon {\n  margin-right: 3px;\n  font-size: 21px;\n}\n\n#copyLinkBtn {\n  float: right;\n}\n\n#shareableLink {\n  width: 100%;\n}\n\n#noEntries {\n  margin-top: 30%;\n  text-align: center;\n}\n\n.no_content_div{\n  height: 20%;\n  max-height: 155px;\n  width: 40%;\n  max-width: 655px;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border: 0 solid;\n  border-radius: 10px;\n  padding: 40px 0 10px 0;\n  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);\n  background-color: var(--header);\n}\n\n.no_content_div button {\n  background-color: var(--button-color);\n  border: 0 solid;\n  border-radius: 7px;\n  font-size: 20px;\n  transition: all 0.3s;\n  display: block;\n  cursor: pointer;\n  outline: 0;\n  margin: 30px auto 0 auto;\n  padding: 10px 20px;\n  color: white;\n}\n\n.no_content_div button:hover {\n  background-color: var(--button-accent);\n}\n\n.no_content_div h1 {\n  width: 60%;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 22px;\n}\n\n@media only screen and (max-width: 800px) {\n  .todoContainer {\n    display: block;\n    margin: 0 auto;\n    padding-top: 5px;\n  }\n\n  .todoContainer>section {\n    max-width: unset;\n    margin: 0;\n  }\n\n  #sortBy {\n    top: 80px;\n  }\n\n  #tabNav li {\n    font-size: 14px;\n    margin: 0 15px;\n  }\n}\n"

/***/ }),

/***/ "./app/ui/scrum/scrum.component.html":
/*!*******************************************!*\
  !*** ./app/ui/scrum/scrum.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"linkShareSwal.show()\" id=\"shareBtn\" mat-stroked-button>\n  <mat-icon>link</mat-icon>Share\n</button>\n<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n<div>\n  <div id=\"tabNav\" *ngIf=\"isSignedIn\">\n    <ul>\n      <li [class.active]=\"navTab == 'todo'\" class=\"selected\" (click)=\"navTab = 'todo'\">Tasks</li>\n      <li [class.active]=\"navTab == 'bugs'\" class=\"selected\" (click)=\"navTab = 'bugs'\">Bugs</li>\n      <li [class.active]=\"navTab == 'ideas'\" (click)=\"navTab = 'ideas'\">Ideas</li>\n      <li [class.active]=\"navTab == 'notes'\" (click)=\"navTab = 'notes'\">Notes</li>\n      <li [class.active]=\"navTab == 'beta'\" (click)=\"navTab = 'beta'\">Feedback</li>\n    </ul>\n  </div>\n  <main [ngSwitch]='navTab'>\n    <div *ngIf=\"isSignedIn\">\n      <!-- No tasks -->\n      <div *ngIf=\"($todo | async)?.length == 0 && ($inProgress | async)?.length == 0 && ($done | async)?.length == 0 && navTab == 'todo'\">\n        <div class=\"no_content_div\">\n          <h1>Keep your project´s tasks organized and availible for the whole team</h1>\n          <button (click)=\"add()\" (click)=\"$event.stopPropagation()\">Create task</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"!(($todo | async)?.length == 0 && ($inProgress | async)?.length == 0 && ($done | async)?.length == 0)\">\n        <div class=\"todoContainer\" *ngSwitchCase=\"'todo'\">\n          <div id=\"sortBy\">\n            <mat-icon>sort</mat-icon>\n            <mat-select placeholder=\"Sort by\" [(value)]=\"sortBy\" (selectionChange)=\"sortChanged()\">\n\n              <mat-option (click)='sendEvent(\"Newest\")' value='{\"field\": \"time\", \"direction\": \"desc\"}'>Newest</mat-option>\n              <mat-option (click)='sendEvent(\"Oldest\")' value='{\"field\": \"time\", \"direction\": \"asc\"}'>Oldest</mat-option>\n              <mat-option (click)='sendEvent(\"Alphabetical\")' value='{\"field\": \"txt\", \"direction\": \"asc\"}'>Alfabetical</mat-option>\n              <mat-option (click)='sendEvent(\"Priority\")' value='{\"field\": \"priority\", \"direction\": \"desc\"}'>Priority</mat-option>\n            </mat-select>\n          </div>\n          <button mat-fab id=\"addButton\" (click)=\"add()\" (click)=\"$event.stopPropagation()\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <section id=\"todoSection\">\n            <h3>TODO ({{($todo | async)?.length}})</h3>\n            <div id=\"todoElements\">\n              <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let entry of $todo | async; trackBy: identify\">\n                <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item (click)=\"edit(entry)\">\n                    <mat-icon>edit</mat-icon>\n                    <span>Edit</span>\n                  </button>\n                  <button mat-menu-item (click)=\"assign(entry)\">\n                    <mat-icon>face</mat-icon>\n                    <span>Assign developer</span>\n                  </button>\n                  <button mat-menu-item (click)=\"openThread(entry)\">\n                    <mat-icon>chat</mat-icon>\n                    <span>Comments</span>\n                  </button>\n                  <button mat-menu-item (click)=\"delete(entry)\">\n                    <mat-icon>delete</mat-icon>\n                    <span>Delete</span>\n                  </button>\n                </mat-menu>\n                <div class=\"container\">\n                  <p>\n                    <strong>Priority: {{entry.priority}}</strong>\n                  </p>\n                  <p [innerHTML]=\"entry.txt | linky\"></p>\n                </div>\n                <button class=\"setButton\" (click)=\"updateEntryState(entry, 'inProgress')\">SET TO INPROGRESS</button>\n              </div>\n            </div>\n\n          </section>\n          <section id=\"inprogressSection\">\n            <h3>In progress ({{($inProgress | async)?.length}})</h3>\n            <div id=\"inprogressElements\">\n              <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let entry of $inProgress | async; trackBy: identify\">\n                <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item (click)=\"edit(entry)\">\n                    <mat-icon>edit</mat-icon>\n                    <span>Edit</span>\n                  </button>\n                  <button mat-menu-item (click)=\"openThread(entry)\">\n                    <mat-icon>chat</mat-icon>\n                    <span>Comments</span>\n                  </button>\n                  <button mat-menu-item (click)=\"updateEntryState(entry, 'todo')\">\n                    <mat-icon>replay</mat-icon>\n                    <span>Rollback</span>\n                  </button>\n                  <button mat-menu-item (click)=\"delete(entry)\">\n                    <mat-icon>delete</mat-icon>\n                    <span>Delete</span>\n                  </button>\n                </mat-menu>\n                <div class=\"container withProfilePic\">\n                  <div id=\"profilePic\">\n                    <img *ngIf=\"entry.imgUrl\" src=\"{{entry.imgUrl}}\">\n                    <mat-icon>account_circle</mat-icon>\n                  </div>\n                  <strong>{{entry.developer}}</strong>\n                  <p [innerHTML]=\"entry.txt | linky\"></p>\n                </div>\n                <button class=\"setButton\" (click)=\"updateEntryState(entry, 'done')\">SET TO FINISHED</button>\n              </div>\n            </div>\n          </section>\n          <section id=\"finishedSection\">\n            <h3>Done ({{($done | async)?.length}})</h3>\n            <div id=\"finishedElements\">\n              <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let entry of $done | async; trackBy: identify\">\n                <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item (click)=\"edit(entry)\">\n                    <mat-icon>edit</mat-icon>\n                    <span>Edit</span>\n                  </button>\n                  <button mat-menu-item (click)=\"openThread(entry)\">\n                    <mat-icon>chat</mat-icon>\n                    <span>Comments</span>\n                  </button>\n                  <button mat-menu-item (click)=\"updateEntryState(entry, 'inProgress')\">\n                    <mat-icon>replay</mat-icon>\n                    <span>Rollback</span>\n                  </button>\n                  <button mat-menu-item (click)=\"delete(entry)\">\n                    <mat-icon>delete</mat-icon>\n                    <span>Delete</span>\n                  </button>\n                </mat-menu>\n                <div class=\"container withProfilePic\">\n                  <div id=\"profilePic\">\n                    <img *ngIf=\"entry.imgUrl\" src=\"{{entry.imgUrl}}\">\n                    <mat-icon>account_circle</mat-icon>\n                  </div>\n                  <strong>{{entry.developer}}</strong>\n                  <p [innerHTML]=\"entry.txt | linky\"></p>\n                </div>\n              </div>\n            </div>\n          </section>\n        </div>\n      </div>\n\n\n      <div *ngSwitchCase=\"'bugs'\">\n        <!-- No bugs -->\n        <!-- TODO: Why is it slow? -->\n        <div *ngIf=\"($bugs | async)?.length == 0 && navTab == 'bugs'\">\n          <div class=\"no_content_div\">\n            <h1>Structure the bugs and make bugfixing easier for everyone</h1>\n            <button (click)=\"addBug()\" (click)=\"$event.stopPropagation()\">Report bug</button>\n          </div>\n        </div>\n\n        <section *ngIf=\"!(($bugs | async)?.length == 0)\">\n          <h3>Bugs ({{($bugs | async)?.length}})</h3>\n          <div class=\"gridWrapper\">\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"gridCard\" *ngFor=\"let bug of $bugs | async; trackBy: identify\">\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"editBug(bug)\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n                <button mat-menu-item (click)=\"openThread(bug)\">\n                  <mat-icon>chat</mat-icon>\n                  <span>Comments</span>\n                </button>\n                <button mat-menu-item (click)=\"deleteBug(bug, bugCollection)\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete</span>\n                </button>\n              </mat-menu>\n              <div class=\"container withProfilePic\">\n                <div id=\"profilePic\">\n                  <img *ngIf=\"bug.imgUrl\" src=\"{{bug.imgUrl}}\">\n                  <mat-icon>account_circle</mat-icon>\n                </div>\n                <strong>{{bug.developer}}</strong>\n                <p [innerHTML]=\"bug.txt | linky\"></p>\n              </div>\n              <button class=\"setButton\" (click)=\"move_to_inprogress(bug, bugCollection)\">MOVE TO INPROGRESS</button>\n            </div>\n          </div>\n          <button mat-fab id=\"addButton\" (click)=\"addBug()\" (click)=\"$event.stopPropagation()\">\n            <mat-icon>add</mat-icon>\n          </button>\n        </section>\n      </div>\n\n\n      <div *ngSwitchCase=\"'ideas'\">\n        <!-- No ideas -->\n        <!-- TODO: Why is it slow? -->\n\n        <div *ngIf=\"($ideas | async)?.length == 0 && navTab == 'ideas'\">\n          <div class=\"no_content_div\">\n            <h1>Dribble down your idea and share it with the team before it slips away</h1>\n            <button (click)=\"addIdea()\" (click)=\"$event.stopPropagation()\">Add idea</button>\n          </div>\n        </div>\n        <section *ngIf=\"!(($ideas | async)?.length == 0)\">\n          <h3>Ideas ({{($ideas | async)?.length}})</h3>\n          <div class=\"gridWrapper\">\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"gridCard\" *ngFor=\"let idea of $ideas | async; trackBy: identify\">\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"editIdea(idea)\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n                <button mat-menu-item (click)=\"openThread(idea)\">\n                  <mat-icon>chat</mat-icon>\n                  <span>Comments</span>\n                </button>\n                <button mat-menu-item (click)=\"deleteIdea(idea)\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete</span>\n                </button>\n              </mat-menu>\n              <div class=\"container withProfilePic\">\n                <div id=\"profilePic\">\n                  <img *ngIf=\"idea.imgUrl\" src=\"{{idea.imgUrl}}\">\n                  <mat-icon>account_circle</mat-icon>\n                </div>\n                <strong>{{idea.developer}}</strong>\n                <p [innerHTML]=\"idea.txt | linky\"></p>\n              </div>\n              <button class=\"setButton\" (click)=\"move_to_inprogress(idea, ideaCollection)\">MOVE TO TASKS</button>\n            </div>\n          </div>\n          <button mat-fab id=\"addButton\" (click)=\"addIdea()\" (click)=\"$event.stopPropagation()\">\n            <mat-icon>add</mat-icon>\n          </button>\n        </section>\n      </div>\n\n      <div *ngSwitchCase=\"'notes'\">\n        <!-- No notes -->\n        <!-- TODO: Why is it slow? -->\n\n        <div *ngIf=\"($notes | async)?.length == 0 && navTab == 'notes'\">\n          <div class=\"no_content_div\">\n            <h1>Write down the little important things about the project</h1>\n            <button (click)=\"addNote()\" (click)=\"$event.stopPropagation()\">Add note</button>\n          </div>\n        </div>\n        <section *ngIf=\"!(($notes | async)?.length == 0)\">\n          <h3>Notes ({{($notes | async)?.length}})</h3>\n          <div class=\"gridWrapper\">\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"gridCard\" *ngFor=\"let note of $notes | async; trackBy: identify\">\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"editNote(note, noteCollection)\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n                <button mat-menu-item (click)=\"openThread(note)\">\n                  <mat-icon>chat</mat-icon>\n                  <span>Comments</span>\n                </button>\n                <button mat-menu-item (click)=\"deleteNote(note, noteCollection)\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete</span>\n                </button>\n              </mat-menu>\n              <div class=\"container withProfilePic\">\n                <div id=\"profilePic\">\n                  <img *ngIf=\"note.imgUrl\" src=\"{{note.imgUrl}}\">\n                  <mat-icon>account_circle</mat-icon>\n                </div>\n                <strong>{{note.developer}}</strong>\n                <p [innerHTML]=\"note.txt | linky\"></p>\n              </div>\n              <!--  <button class=\"setButton\" (click)=\"add_to_todo(note)\">MOVE TO TASKS</button> -->\n            </div>\n          </div>\n          <button mat-fab id=\"addButton\" (click)=\"addNote()\" (click)=\"$event.stopPropagation()\">\n            <mat-icon>add</mat-icon>\n          </button>\n        </section>\n      </div>\n\n    </div>\n    <!-- No betatester reports -->\n    <!-- TODO: Why is it slow? -->\n    <div *ngIf=\"(($client_bugs | async)?.length == 0 && ($c_features | async)?.length == 0 && ($c_notes | async)?.length == 0) && navTab=='beta'\">\n      <div class=\"no_content_div\" *ngIf=\"isPublic == false\">\n        <h1>No customer has done anything blablba ispublic: {{isPublic}}. Share link now</h1>\n        <button (click)=\"linkShareSwal.show()\" (click)=\"$event.stopPropagation()\">Make public</button>\n      </div>\n      <div class=\"no_content_div\" *ngIf=\"isPublic == true\">\n        <h1>No data yet but link is public.... share link with others</h1>\n        <!-- TODO: action to share link -->\n        <button (click)=\"$event.stopPropagation()\">Share link</button>\n      </div>\n    </div>\n\n\n    <div *ngIf=\"!(($client_bugs | async)?.length == 0 && ($c_features | async)?.length == 0 && ($c_notes | async)?.length == 0)\">\n      <div class=\"todoContainer\" *ngSwitchCase=\"'beta'\">\n        <!-- <div id=\"sortBy\">\n        <mat-icon>sort</mat-icon>\n        <mat-select placeholder=\"Sort by\" [(value)]=\"sortBy\" (selectionChange)=\"sortChanged()\">\n\n          <mat-option (click)='sendEvent(\"Alphabetical\")' value='{\"field\": \"txt\", \"direction\": \"asc\"}'>Alfabetical</mat-option>\n          <mat-option (click)='sendEvent(\"Newest\")' value='{\"field\": \"time\", \"direction\": \"desc\"}'>Newest</mat-option>\n          <mat-option (click)='sendEvent(\"Oldest\")' value='{\"field\": \"time\", \"direction\": \"asc\"}'>Oldest</mat-option>\n          <mat-option (click)='sendEvent(\"Priority\")' value='{\"field\": \"priority\", \"direction\": \"desc\"}'>Priority</mat-option>\n        </mat-select>\n      </div> -->\n        <section>\n          <h3>Bugs ({{($client_bugs | async)?.length}})</h3>\n          <div>\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let c_bug of $client_bugs | async; trackBy: identify\">\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"editBug(c_bug, client_bugs_collection)\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n                <button mat-menu-item (click)=\"openThread(c_bug.id, 'client_bugs')\">\n                  <mat-icon>chat</mat-icon>\n                  <span>Comments</span>\n                </button>\n                <button mat-menu-item (click)=\"deleteBug(c_bug, client_bugs_collection)\" *ngIf=\"isSignedIn\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete</span>\n                </button>\n              </mat-menu>\n              <div class=\"container\">\n                <p>\n                  <strong>Priority: {{c_bug.priority}}</strong>\n                </p>\n                <p [innerHTML]=\"c_bug.txt | linky\"></p>\n              </div>\n              <button class=\"setButton\" (click)=\"moveToBugs(c_bug)\" *ngIf=\"isSignedIn\">MOVE TO BUGS</button>\n            </div>\n          </div>\n        </section>\n\n        <section>\n          <h3>Feature requests ({{($c_features | async)?.length}})</h3>\n          <div>\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let c_feature of $c_features | async; trackBy: identify\">\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"edit_feature_request(c_feature)\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n                <button mat-menu-item (click)=\"openThread(c_feature.id, 'client_feature_request')\">\n                  <mat-icon>chat</mat-icon>\n                  <span>Comments</span>\n                </button>\n                <button mat-menu-item (click)=\"delete_feature_request(c_feature)\" *ngIf=\"isSignedIn\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete</span>\n                </button>\n              </mat-menu>\n              <div class=\"container\">\n                <p>\n                  <strong>Priority: {{c_feature.priority}}</strong>\n                </p>\n                <p [innerHTML]=\"c_feature.txt | linky\"></p>\n              </div>\n              <button class=\"setButton\" (click)=\"move_to_inprogress(c_feature, client_feature_collection)\" *ngIf=\"isSignedIn\">SET\n                INPROGRESS</button>\n            </div>\n          </div>\n        </section>\n\n        <section>\n          <h3>Notes ({{($c_notes | async)?.length}})</h3>\n          <div>\n            <div [@entriesAnim]=\"loading ? null : 'in'\" class=\"card\" *ngFor=\"let c_note of $c_notes | async; trackBy: identify\">\n              <button class=\"menuBtn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"editNote(c_note, client_notes_collection)\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n                <button mat-menu-item (click)=\"openThread(c_note.id, 'client_notes')\">\n                  <mat-icon>chat</mat-icon>\n                  <span>Comments</span>\n                </button>\n                <button mat-menu-item (click)=\"deleteNote(c_note, client_notes_collection)\" *ngIf=\"isSignedIn\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete</span>\n                </button>\n              </mat-menu>\n              <div class=\"container\">\n                <p [innerHTML]=\"c_note.txt | linky\"></p>\n              </div>\n            </div>\n          </div>\n        </section>\n        <button mat-fab id=\"addButton\" (click)=\"add_feedback()\" (click)=\"$event.stopPropagation()\" *ngIf=\"!isSignedIn && isPublic\">\n          <mat-icon>add</mat-icon>\n        </button>\n      </div>\n    </div>\n  </main>\n</div>\n\n\n<swal #linkShareSwal title=\"Share with people outside the team\">\n  <div *swalPartial>\n    <p>You can send the link to other users so they can view the progress of your team.</p>\n    <mat-slide-toggle (change)=\"uploadBoardVisibility($event)\" [(checked)]=\"isPublic\">\n      Enable shareable link\n    </mat-slide-toggle>\n    <button mat-raised-button (click)=\"copyLinkTxt()\" id=\"copyLinkBtn\">Copy link</button>\n    <br>\n    <mat-form-field id=\"shareableLink\">\n      <input matInput id=\"shareableLinkInp\" [value]=\"shareableLink\" (click)=\"copyLinkTxt()\" type=\"text\" readonly>\n    </mat-form-field>\n  </div>\n</swal>\n"

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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
        this.sortBy = '{"field": "time", "direction": "desc"}';
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
        // set the orderBy to default TODO save and retrieve from localStorage
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
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_15__["Hotkey"]('ctrl+n', function (event) {
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
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'No, cancel!',
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
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Cancelled', 'This task is safe', 'error');
            }
        });
    };
    ScrumComponent.prototype.updateEntryState = function (entry, state) {
        this.entryCollection.doc(entry.id).update({ state: state });
    };
    ScrumComponent.prototype.edit = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Edit',
                            html: "<input id=\"swal-input1\" type=\"text\" value='" + entry.txt + "' class=\"swal2-input\">" +
                                this.getRadio(entry.priority),
                            showCancelButton: true,
                            reverseButtons: true,
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
                            html: '<input id="swal-input1" type="text" placeholder="Task description" class="swal2-input">' +
                                this.getRadio('!'),
                            reverseButtons: true,
                            showCancelButton: true,
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
                        if (post[0] !== '') {
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
                                text: 'Please fill in a task description!'
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
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
        return "\n  <style>\n  .swalRadioBtns {\n    position: absolute;\n    visibility: hidden;\n    display: none;\n    background-color: #332f35;\n  }\n\n  .swalRadioBtnsLabel {\n    color: var(--button-color);\n    cursor: pointer;\n    font-weight: bold;\n    padding: 5px 20px;\n    float: left;\n    outline: 0;\n  }\n\n  .swalRadioBtns:checked+.swalRadioBtnsLabel {\n    color: white;\n    background: var(--button-color);\n  }\n\n  .swalRadioBtnsLabel+.swalRadioBtns+.swalRadioBtnsLabel {\n    border-left: solid 3px var(--button-color);\n  }\n\n  .radio-group {\n    border: solid 3px var(--button-color);\n    display: inline-block;\n    margin: 20px;\n    border-radius: 10px;\n    overflow: hidden;\n  }\n  </style>\n  <div class=\"radio-group\">\n  <input class=\"swalRadioBtns\" type=\"radio\" id=\"option-one\" name=\"selector\" value=\"!\" " + this.checkIfChecked(priority, '!') + ">\n  <label class=\"swalRadioBtnsLabel\" for=\"option-one\">!</label>\n  <input class=\"swalRadioBtns\" type=\"radio\" id=\"option-two\" name=\"selector\" value=\"!!\" " + this.checkIfChecked(priority, '!!') + ">\n  <label class=\"swalRadioBtnsLabel\" for=\"option-two\">!!</label>\n  <input class=\"swalRadioBtns\" type=\"radio\" id=\"option-three\" name=\"selector\" value=\"!!!\" " + this.checkIfChecked(priority, '!!!') + ">\n  <label class=\"swalRadioBtnsLabel\" for=\"option-three\">!!!</label>\n  </div>";
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
            var _this = this;
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Describe the bug',
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
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'No, cancel!',
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
            var _this = this;
            var post;
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
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'No, cancel!',
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
            var _this = this;
            var post;
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
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'No, cancel!',
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
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#e95d4f',
            cancelButtonText: 'No, cancel!',
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
            var _this = this;
            var post;
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
            data: entry,
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

module.exports = "#container {\n    margin: 0 auto;\n    display: table;\n}\n\n#wrapper {\n    display: flex;\n}\n\nmain {\n    max-width: 550px;\n    width: calc(100% - 40px);\n    padding: 20px;\n    min-width: 500px;\n}\n\n.inp {\n    width: calc(100% - 190px);\n}\n\nform button {\n    float: right;\n    width: 175px;\n    margin-top: 7px;\n}\n\n#memberWrapper {\n    position: relative;\n    height: 66px;\n}\n\n#memberWrapper:nth-child(2n) {\n    background-color: #fafafa;\n}\n\n#nameTxt {\n    position: absolute;\n    top: 0px;\n    left: 87px;\n    width: calc(100% - 90px);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    font-weight: 800;\n    font-size: 21px;\n    line-height: 66px;\n    margin: 0;\n}\n\n#memberTypeTxt {\n    line-height: 66px;\n    font-weight: 100;\n    font-size: 17px;\n    color: #6d6b6b;\n}\n\n#profilePic {\n    overflow: hidden;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    position: relative;\n    margin-top: 12px;\n    margin-left: 25px;\n    display: inline-block;\n}\n\n#profilePic img {\n    width: 100%;\n    height: 100%;\n}\n\n#profilePic mat-icon {\n    position: absolute;\n    font-size: 42px;\n}\n\n.menuBtn {\n    position: absolute;\n    top: 10px;\n    right: 20px;\n}\n\n#dangerTxt {\n    color: red;\n}\n\n#deleteTeamBtn {\n    background: red;\n    color: white;\n}\n\n/* File upload */\n\n.dropzone {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: 200px;\n    width: 150px;\n    margin: 10px 0;\n    position: relative;\n}\n\n.dropzone button {\n    margin-top: 10px;\n}\n\n.dropzone p {\n    font-size: 12px;\n}\n\n#teamImgSpinner {\n    position: absolute;\n}"

/***/ }),

/***/ "./app/ui/team-settings/team-settings.component.html":
/*!***********************************************************!*\
  !*** ./app/ui/team-settings/team-settings.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n\n<div id=container>\n  <div id=\"wrapper\">\n    <main>\n      <h1 *ngIf=\"isAdmin\">Team setting</h1>\n      <h1 *ngIf=\"!isAdmin\">Team members</h1>\n\n      <!-- Change name of team -->\n      <div *ngIf=\"isAdmin\">\n        <h4>Change team name</h4>\n        <form [formGroup]=\"nameForm\" (ngSubmit)=\"onNameFormSubmit()\">\n          <mat-form-field class=\"inp\">\n            <input [value]=\"(team$ | async)?.name\" matInput placeholder=\"Name\" [formControl]=\"changeNameFormControl\">\n            <mat-error *ngIf=\"changeNameFormControl.hasError('required')\">\n              Name is\n              <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <button type=\"submit\" mat-stroked-button>Change team name</button>\n        </form>\n\n        <h4>Manage team members</h4>\n        <form *ngIf=\"isAdmin\" [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\">\n          <mat-form-field class=\"inp\">\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n            <mat-error *ngIf=\"emailFormControl?.hasError('email') && !emailFormControl?.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is\n              <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <button type=\"submit\" mat-stroked-button>Add to team</button>\n        </form>\n      </div>\n\n\n      <div id=\"members\">\n        <div *ngFor=\"let member of (team$ | async)?.members | mapToIterable; let members\" id=\"memberWrapper\">\n          <div id=\"profilePic\">\n            <img *ngIf=\"member.val.imgUrl\" src=\"{{member.val.imgUrl}}\">\n            <mat-icon>account_circle</mat-icon>\n          </div>\n          <strong id=\"nameTxt\">{{ member.val.name }}\n            <span *ngIf=\"member.val.isAdmin\" id=\"memberTypeTxt\">Admin</span>\n            <span *ngIf=\"member.val.isMember == false\" id=\"memberTypeTxt\">Pending</span>\n            <span *ngIf=\"member.val.isMember && !member.val.isAdmin\" id=\"memberTypeTxt\">Member</span>\n          </strong>\n          <mat-menu #memberOptionsMenu=\"matMenu\">\n            <button mat-menu-item *ngIf=\"!member.val.isAdmin\" (click)=\"promoteAdmin(member.key)\">\n              <mat-icon>how_to_reg</mat-icon>\n              <span>Promote to admin</span>\n            </button>\n            <button mat-menu-item *ngIf=\"member.val.isAdmin\" (click)=\"removeAdmin(member.key)\">\n              <mat-icon>keyboard_arrow_down</mat-icon>\n              <span>Demote user</span>\n            </button>\n            <button mat-menu-item (click)=\"deleteMember(member.key)\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span *ngIf=\"member.val.isMember == false; else removeMemberTxt\">Cancel invitation</span>\n              <ng-template #removeMemberTxt>\n                <span>Remove member</span>\n              </ng-template>\n            </button>\n          </mat-menu>\n          <button *ngIf=\"!(member.key == (auth.user$ | async)?.uid) && isAdmin\" class=\"menuBtn\" mat-icon-button\n            [matMenuTriggerFor]=\"memberOptionsMenu\" (click)=\"$event.stopPropagation()\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n        </div>\n      </div>\n\n      <br>\n\n      <div id=\"deleteTeamWrapper\" *ngIf=\"isAdmin\">\n        <h4 id=\"dangerTxt\">Danger zone</h4>\n        <p>This will delete the team and all of its data for you and all the members. This action cannot be undone</p>\n        <button mat-raised-button (click)=\"deleteTeam()\" id=\"deleteTeamBtn\">Delete team</button>\n      </div>\n    </main>\n    <div id=\"uploadImg\" *ngIf=\"isAdmin\">\n      <h4>Upload team image</h4>\n      <div class=\"dropzone\" dropZone (hovered)=\"toggleHover($event)\" (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\">\n        <mat-progress-spinner *ngIf=\"percentage | async as pct\" id=\"teamImgSpinner\" [mode]=\"imgUploadSpinnerMode\" [value]=\"pct\"></mat-progress-spinner>\n        <img [src]=\"imgURL | async\" alt=\"\">\n        <button mat-stroked-button (click)=\"fileinput.click()\">Choose an image</button>\n        <p>or drop it here</p>\n        <input #fileinput hidden=\"true\" type=\"file\" (change)=\"startUpload($event.target.files)\">\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/teams.service */ "./app/services/teams.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/functions */ "../node_modules/angularfire2/functions/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/storage */ "../node_modules/angularfire2/storage/index.js");
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
                        confirmButtonText: 'Add',
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
                                console.log(err.code);
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

module.exports = __webpack_require__(/*! /Users/magnustrandokken/Desktop/Magson/Web/scrumboard/angular/src/main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map