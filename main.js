(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"nav-spacer\">\r\n</div>  \r\n<div class=\"app-container\">\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n</div>\r\n<div class=\"loading-overlay\" [ngClass]=\"[pageLoaded && isBrowser ? 'hide-overlay' : '', removeOverlay && isBrowser ? 'remove-overlay' : '']\">\r\n  <div class=\"vertical-centered-box\">\r\n    <!-- <div class=\"logo\" [ngClass]=\"[pageLoaded ? 'move-up' : '']\">\r\n\r\n    </div>\r\n    <div class=\"title\" [ngClass]=\"[pageLoaded ? 'move-up' : '']\">\r\n      Tanztheater<br/>Anita Hanke\r\n    </div> -->\r\n    <!-- <div class=\"loader-circle\"></div>\r\n    <div class=\"loader-line-mask\">\r\n      <div class=\"loader-line\"></div>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n<app-cookies-notification></app-cookies-notification>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.app-container {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%; }\n.loading-overlay {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: #fff;\n  opacity: 1;\n  top: 0;\n  transition: opacity 1s ease;\n  transition-delay: 3s;\n  text-align: center; }\n.loading-overlay.hide-overlay {\n    opacity: 0; }\n.loading-overlay.remove-overlay {\n    display: none; }\n.loading-overlay .vertical-centered-box {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    text-align: center; }\n.loading-overlay .vertical-centered-box .logo {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-left: -13px;\n      margin-top: -50px;\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABzCAYAAADJ7BGMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAEEWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkRBN0NFNjgxQTMzQzExRTI4MjU2RTBBMkQ5MzEyODBCPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkRBN0NFNjgyQTMzQzExRTI4MjU2RTBBMkQ5MzEyODBCPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkRBN0NFNjg0QTMzQzExRTI4MjU2RTBB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\");\n      background-size: 100% 100%;\n      height: 42px;\n      width: 20px;\n      opacity: 1;\n      -webkit-transform: translateY(15px);\n              transform: translateY(15px);\n      opacity: 0;\n      -webkit-animation: fade-in 0.3s ease forwards, slide-up ease-out 1.3s 1s 1 normal forwards;\n              animation: fade-in 0.3s ease forwards, slide-up ease-out 1.3s 1s 1 normal forwards;\n      transition: all 0.7s ease;\n      transition-delay: 1s; }\n.loading-overlay .vertical-centered-box .logo.move-up {\n        top: 60px; }\n.loading-overlay .vertical-centered-box .title {\n      width: 100%;\n      position: absolute;\n      font-size: 14px;\n      top: 58px;\n      text-transform: uppercase;\n      opacity: 1;\n      opacity: 0;\n      -webkit-animation: fade-in 0.3s ease forwards;\n              animation: fade-in 0.3s ease forwards;\n      -webkit-animation-delay: 2.3s;\n              animation-delay: 2.3s;\n      color: #1f1f1f;\n      line-height: 18px; }\n.loading-overlay .vertical-centered-box .loader-circle {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);\n      margin-left: -60px;\n      margin-top: -60px;\n      -webkit-animation: rotate 1.2s infinite linear;\n      animation: rotate 1.2s infinite linear; }\n.loading-overlay .vertical-centered-box .loader-line-mask {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 60px;\n      height: 120px;\n      margin-left: -60px;\n      margin-top: -60px;\n      overflow: hidden;\n      -webkit-transform-origin: 60px 60px;\n      transform-origin: 60px 60px;\n      -webkit-mask-image: -webkit-linear-gradient(top, #000000, rgba(0, 0, 0, 0));\n      -webkit-animation: rotate 1.2s infinite linear;\n      animation: rotate 1.2s infinite linear; }\n.loading-overlay .vertical-centered-box .loader-line-mask .loader-line {\n        width: 120px;\n        height: 120px;\n        border-radius: 50%;\n        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5); }\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_service_1 = __webpack_require__(/*! ./services/model.service */ "./src/app/services/model.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var seo_service_1 = __webpack_require__(/*! ./services/seo.service */ "./src/app/services/seo.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, seoService, modelService) {
        this.router = router;
        this.seoService = seoService;
        this.modelService = modelService;
        this.title = 'app';
        seoService.addSeoData();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isBrowser = this.modelService.isPlatformBrowser();
        if (this.isBrowser) {
            this.pageLoaded = false;
            this.removeOverlay = false;
        }
        else {
            this.pageLoaded = true;
            this.removeOverlay = true;
        }
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            if (_this.modelService.isPlatformBrowser()) {
                window.scrollTo(0, 0);
            }
        });
        this.modelService.isPageLoaded().subscribe(function (x) {
            if (_this.modelService.isPlatformBrowser()) {
                _this.pageLoaded = x;
                _this.removeOverlay = x;
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [router_1.Router,
            seo_service_1.SeoService,
            model_service_1.ModelService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var current_details_component_1 = __webpack_require__(/*! ./sites/current/current-details/current-details.component */ "./src/app/sites/current/current-details/current-details.component.ts");
var cookies_notification_component_1 = __webpack_require__(/*! ./components/cookies-notification/cookies-notification.component */ "./src/app/components/cookies-notification/cookies-notification.component.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var main_page_component_1 = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
var main_page_service_1 = __webpack_require__(/*! ./services/main-page.service */ "./src/app/services/main-page.service.ts");
var text_animation_component_1 = __webpack_require__(/*! ./main-page/text-animation/text-animation.component */ "./src/app/main-page/text-animation/text-animation.component.ts");
var header_component_1 = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
var footer_component_1 = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
var current_component_1 = __webpack_require__(/*! ./sites/current/current.component */ "./src/app/sites/current/current.component.ts");
var current_service_1 = __webpack_require__(/*! ./services/current.service */ "./src/app/services/current.service.ts");
var team_component_1 = __webpack_require__(/*! ./sites/team/team.component */ "./src/app/sites/team/team.component.ts");
var team_service_1 = __webpack_require__(/*! ./services/team.service */ "./src/app/services/team.service.ts");
var courses_component_1 = __webpack_require__(/*! ./sites/courses/courses.component */ "./src/app/sites/courses/courses.component.ts");
var courses_service_1 = __webpack_require__(/*! ./services/courses.service */ "./src/app/services/courses.service.ts");
var stage_component_1 = __webpack_require__(/*! ./sites/stage/stage.component */ "./src/app/sites/stage/stage.component.ts");
var stage_service_1 = __webpack_require__(/*! ./services/stage.service */ "./src/app/services/stage.service.ts");
var gallery_component_1 = __webpack_require__(/*! ./sites/stage/gallery/gallery.component */ "./src/app/sites/stage/gallery/gallery.component.ts");
var locations_component_1 = __webpack_require__(/*! ./sites/locations/locations.component */ "./src/app/sites/locations/locations.component.ts");
var locations_service_1 = __webpack_require__(/*! ./services/locations.service */ "./src/app/services/locations.service.ts");
var contact_component_1 = __webpack_require__(/*! ./sites/contact/contact.component */ "./src/app/sites/contact/contact.component.ts");
var contact_service_1 = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
var model_service_1 = __webpack_require__(/*! ./services/model.service */ "./src/app/services/model.service.ts");
var main_page_section_component_1 = __webpack_require__(/*! ./main-page/main-page-section/main-page-section.component */ "./src/app/main-page/main-page-section/main-page-section.component.ts");
var courses_overview_component_1 = __webpack_require__(/*! ./courses-overview/courses-overview.component */ "./src/app/courses-overview/courses-overview.component.ts");
var performance_component_1 = __webpack_require__(/*! ./sites/stage/performance/performance.component */ "./src/app/sites/stage/performance/performance.component.ts");
var image_slider_component_1 = __webpack_require__(/*! ./image-slider/image-slider.component */ "./src/app/image-slider/image-slider.component.ts");
var course_details_component_1 = __webpack_require__(/*! ./sites/courses/course-details/course-details.component */ "./src/app/sites/courses/course-details/course-details.component.ts");
var location_component_1 = __webpack_require__(/*! ./sites/locations/location/location.component */ "./src/app/sites/locations/location/location.component.ts");
var header_image_component_1 = __webpack_require__(/*! ./components/header-image/header-image.component */ "./src/app/components/header-image/header-image.component.ts");
var imprint_component_1 = __webpack_require__(/*! ./sites/imprint/imprint.component */ "./src/app/sites/imprint/imprint.component.ts");
var imprint_service_1 = __webpack_require__(/*! ./services/imprint.service */ "./src/app/services/imprint.service.ts");
var course_information_component_1 = __webpack_require__(/*! ./sites/courses/course-information/course-information.component */ "./src/app/sites/courses/course-information/course-information.component.ts");
var teacher_details_component_1 = __webpack_require__(/*! ./sites/team/teacher-details/teacher-details.component */ "./src/app/sites/team/teacher-details/teacher-details.component.ts");
var schedule_component_1 = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
var schedule_service_1 = __webpack_require__(/*! ./services/schedule.service */ "./src/app/services/schedule.service.ts");
var utility_service_1 = __webpack_require__(/*! ./services/utility.service */ "./src/app/services/utility.service.ts");
var seo_service_1 = __webpack_require__(/*! ./services/seo.service */ "./src/app/services/seo.service.ts");
var privacy_component_1 = __webpack_require__(/*! ./sites/privacy/privacy.component */ "./src/app/sites/privacy/privacy.component.ts");
// import { YoutubePlayerModule } from 'ngx-youtube-player';
var routes = [
    { path: '',
        component: main_page_component_1.MainPageComponent,
        data: {
            title: "Kreditoren-Revision24",
            metatags: {
                description: "Wir sind ein Unternehmen das sich auf auf die Prüfung buchhalterischer Daten und die Rückgewinnung von zu viel gezahlten Geldern spezialisiert. Im Rahmen unserer detaillierten Analyse Ihrer kreditorischen Daten können von uns Gelder zurück geholt werden, die bei Ihnen schon längst in Vergessenheit geraten sind.",
                keywords: "Kredit, Revision, 24, Doppelzahlung, Vorsteuerabzug, Gewinn, Skonto, Differenz, Steuer, Optimierung, Rückerstattung, Belegprüfung"
            }
        }
    },
    { path: 'blog',
        component: current_component_1.CurrentComponent,
        data: {
            title: "Aktuelles | Yogaraum Wettersbach",
            metatags: {
                description: "Neuigkeiten aus dem Yogaraum Wettersbach in Markgröningen und Ludwigsburg",
                keywords: "Neuigkeiten, Yoga, Karlsruhe, Kundalini, Meditation"
            }
        }
    },
    { path: 'blog/:shortId',
        component: current_details_component_1.CurrentDetailsComponent
    },
    { path: 'blog/:shortId/:title/:date',
        component: current_details_component_1.CurrentDetailsComponent
    },
    { path: 'ueber-mich',
        component: teacher_details_component_1.TeacherDetailsComponent,
        data: {
            title: "Über mich | Arlette Cassin",
            metatags: {
                description: "",
                keywords: ""
            }
        }
    },
    { path: 'lehrer/:id',
        component: teacher_details_component_1.TeacherDetailsComponent
    },
    { path: 'kurse',
        component: courses_component_1.CoursesComponent,
        data: {
            title: "Kurse | Yogaraum Wettersbach",
            metatags: {
                description: "Kursangebot (Ballett, Kreativer Kindertanz, Jazz, Modern, Contemporary, Musical Jazz, Hip Hop, Breakdance) des Yogaraum Wettersbach in Markgröningen und Ludwigsburg",
                keywords: "Kurse, Yoga, Karlsruhe, Kundalini, Meditation, Ballett, Jazz, Musical, Hip Hop, Breakdance, Modern, Contemporary, Kreativ"
            }
        }
    },
    { path: 'kurse/:shortId',
        component: course_details_component_1.CourseDetailsComponent
    },
    { path: 'kurse/:shortId/:title',
        component: course_details_component_1.CourseDetailsComponent
    },
    { path: 'kurs-informationen',
        component: course_information_component_1.CourseInformationComponent,
        data: {
            title: "Kurs Informationen | Yogaraum Wettersbach",
            metatags: {
                description: "Preise und Stundenpläne des Yogaraum Wettersbach in Markgröningen und Ludwigsburg",
                keywords: "Yoga, Karlsruhe, Kundalini, Meditation, Preis, Stundenplan"
            }
        }
    },
    { path: 'auftritte',
        component: stage_component_1.StageComponent,
        data: {
            title: "Auftritte | Yogaraum Wettersbach",
            metatags: {
                description: "vergangene Auftritte des Yogaraum Wettersbach in Markgröningen und Ludwigsburg",
                keywords: "Yoga, Karlsruhe, Kundalini, Meditation, Auftritt"
            }
        }
    },
    { path: 'auftritte/:shortId',
        component: performance_component_1.PerformanceComponent
    },
    { path: 'auftritte/:shortId/:title/:date',
        component: performance_component_1.PerformanceComponent
    },
    { path: 'standorte',
        component: locations_component_1.LocationsComponent,
        data: {
            title: 'Standorte | Yogaraum Wettersbach',
            metatags: {
                description: "Standorte des Yogaraum Wettersbach in Markgröningen und Ludwigsburg",
                keywords: "Yoga, Karlsruhe, Kundalini, Meditation, Standort"
            }
        }
    },
    { path: 'standorte/:shortId',
        component: location_component_1.LocationComponent
    },
    { path: 'standorte/:shortId/:title',
        component: location_component_1.LocationComponent
    },
    { path: 'kontakt',
        component: contact_component_1.ContactComponent,
        data: {
            title: "Kontakt | Yogaraum Wettersbach",
            metatags: {
                description: "Yogaraum Wettersbach in Markgröningen und Ludwigsburg",
                keywords: "Yoga, Karlsruhe, Kundalini, Meditation"
            }
        }
    },
    { path: 'impressum',
        component: imprint_component_1.ImprintComponent,
        data: {
            title: "Impressum | Yogaraum Wettersbach",
            metatags: {
                description: "Yogaraum Wettersbach in Markgröningen und Ludwigsburg",
                keywords: "Yoga, Karlsruhe, Kundalini, Meditation"
            }
        }
    },
    { path: 'datenschutz',
        component: privacy_component_1.PrivacyComponent,
        data: {
            title: "Datenschutz | Yogaraum Wettersbach",
            metatags: {
                description: "Yogaraum Wettersbach in Markgröningen und Ludwigsburg",
                keywords: "Yoga, Karlsruhe, Kundalini, Meditation"
            }
        }
    },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                main_page_component_1.MainPageComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                current_component_1.CurrentComponent,
                current_details_component_1.CurrentDetailsComponent,
                team_component_1.TeamComponent,
                teacher_details_component_1.TeacherDetailsComponent,
                courses_component_1.CoursesComponent,
                stage_component_1.StageComponent,
                gallery_component_1.GalleryComponent,
                locations_component_1.LocationsComponent,
                contact_component_1.ContactComponent,
                main_page_section_component_1.MainPageSectionComponent,
                courses_overview_component_1.CoursesOverviewComponent,
                performance_component_1.PerformanceComponent,
                image_slider_component_1.ImageSliderComponent,
                course_details_component_1.CourseDetailsComponent,
                location_component_1.LocationComponent,
                header_image_component_1.HeaderImageComponent,
                imprint_component_1.ImprintComponent,
                course_information_component_1.CourseInformationComponent,
                schedule_component_1.ScheduleComponent,
                cookies_notification_component_1.CookiesNotificationComponent,
                privacy_component_1.PrivacyComponent,
                text_animation_component_1.TextAnimationComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({
                    appId: 'app'
                }),
                router_1.RouterModule.forRoot(routes),
                http_1.HttpModule,
                forms_1.FormsModule
                // YoutubePlayerModule
            ],
            providers: [
                main_page_service_1.MainPageService,
                current_service_1.CurrentService,
                team_service_1.TeamService,
                dynamic_content_service_1.DynamicContentService,
                stage_service_1.StageService,
                courses_service_1.CoursesService,
                locations_service_1.LocationsService,
                contact_service_1.ContactService,
                model_service_1.ModelService,
                imprint_service_1.ImprintService,
                schedule_service_1.ScheduleService,
                utility_service_1.UtilityService,
                seo_service_1.SeoService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/classes/appointment.ts":
/*!****************************************!*\
  !*** ./src/app/classes/appointment.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    return Appointment;
}());
exports.Appointment = Appointment;


/***/ }),

/***/ "./src/app/classes/blog-post.ts":
/*!**************************************!*\
  !*** ./src/app/classes/blog-post.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlogPost = /** @class */ (function () {
    function BlogPost() {
    }
    return BlogPost;
}());
exports.BlogPost = BlogPost;


/***/ }),

/***/ "./src/app/classes/contact.ts":
/*!************************************!*\
  !*** ./src/app/classes/contact.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;


/***/ }),

/***/ "./src/app/classes/course-data.ts":
/*!****************************************!*\
  !*** ./src/app/classes/course-data.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CourseData = /** @class */ (function () {
    function CourseData() {
    }
    return CourseData;
}());
exports.CourseData = CourseData;


/***/ }),

/***/ "./src/app/classes/course-information.ts":
/*!***********************************************!*\
  !*** ./src/app/classes/course-information.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CourseInformation = /** @class */ (function () {
    function CourseInformation() {
    }
    return CourseInformation;
}());
exports.CourseInformation = CourseInformation;


/***/ }),

/***/ "./src/app/classes/imprint.ts":
/*!************************************!*\
  !*** ./src/app/classes/imprint.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Imprint = /** @class */ (function () {
    function Imprint() {
    }
    return Imprint;
}());
exports.Imprint = Imprint;


/***/ }),

/***/ "./src/app/classes/location-data.ts":
/*!******************************************!*\
  !*** ./src/app/classes/location-data.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocationData = /** @class */ (function () {
    function LocationData() {
    }
    return LocationData;
}());
exports.LocationData = LocationData;


/***/ }),

/***/ "./src/app/classes/location.ts":
/*!*************************************!*\
  !*** ./src/app/classes/location.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());
exports.Location = Location;


/***/ }),

/***/ "./src/app/classes/main-page-data.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/main-page-data.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MainPageData = /** @class */ (function () {
    function MainPageData() {
    }
    return MainPageData;
}());
exports.MainPageData = MainPageData;


/***/ }),

/***/ "./src/app/classes/main-page-section.ts":
/*!**********************************************!*\
  !*** ./src/app/classes/main-page-section.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MainPageSection = /** @class */ (function () {
    function MainPageSection() {
    }
    return MainPageSection;
}());
exports.MainPageSection = MainPageSection;


/***/ }),

/***/ "./src/app/classes/performance.ts":
/*!****************************************!*\
  !*** ./src/app/classes/performance.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Performance = /** @class */ (function () {
    function Performance() {
    }
    return Performance;
}());
exports.Performance = Performance;


/***/ }),

/***/ "./src/app/classes/schedule-data.ts":
/*!******************************************!*\
  !*** ./src/app/classes/schedule-data.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScheduleData = /** @class */ (function () {
    function ScheduleData() {
    }
    return ScheduleData;
}());
exports.ScheduleData = ScheduleData;


/***/ }),

/***/ "./src/app/classes/teacher.ts":
/*!************************************!*\
  !*** ./src/app/classes/teacher.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
exports.Teacher = Teacher;


/***/ }),

/***/ "./src/app/components/cookies-notification/cookies-notification.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/cookies-notification/cookies-notification.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cookies-notification-container\" *ngIf=\"isBrowser && displayCookiesNotification\">\r\n    <div class=\"cookies-notification\">\r\n        <div class=\"cookies-notification-content\">\r\n            <div class=\"cookies-notification-description-container\">\r\n                <div class=\"cookies-icon-container\">\r\n                    <i class=\"cookies-icon fas fa-cookie-bite\">\r\n\r\n                    </i>\r\n                </div>\r\n                <div class=\"cookies-notification-description\">\r\n                    Wir verwenden Cookies, um Ihnen ein optimales Nutzererlebnis zu bieten und Social Media einzubinden. Nutzen Sie unsere Website weiter, stimmen Sie der Verwendung zu.\r\n                </div>\r\n            </div>\r\n            <div class=\"cookies-notification-buttons-container\">\r\n                <div class=\"cookies-notification-button cookies-notification-details-button\" routerLink=\"/impressum\">\r\n                    <div class=\"cookies-notification-button-text\">Details</div>\r\n                </div>\r\n                <div class=\"cookies-notification-button cookies-notification-okay-button\" (click)=\"acceptCookies()\">\r\n                    <div class=\"cookies-notification-button-text\">Okay</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cookies-notification/cookies-notification.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/cookies-notification/cookies-notification.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.cookies-notification-container {\n  position: fixed;\n  bottom: 0;\n  color: #1f1f1f;\n  text-align: center;\n  opacity: 0;\n  width: calc(100% - 20px);\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-delay: 13s;\n          animation-delay: 13s;\n  z-index: 2;\n  padding: 10px; }\n.cookies-notification-container .cookies-notification {\n    position: relative;\n    display: inline-block;\n    border-radius: 10px;\n    border: 1px solid #2c2c2c;\n    background-color: #d8d8d8; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container {\n      padding: 10px;\n      font-size: 12px;\n      display: flex;\n      -moz-flex-direction: row;\n      flex-direction: row; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container .cookies-icon-container {\n        width: 35px;\n        text-align: center; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container .cookies-icon-container .cookies-icon {\n          font-size: 16px; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container .cookies-notification-description {\n        flex: 1;\n        text-align: left; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container .cookies-notification-description .cookies-notification-description-link {\n          text-decoration: underline;\n          color: #1f1f1f; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container .cookies-notification-description .cookies-notification-description-link:hover {\n            cursor: pointer;\n            color: #007aff; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-buttons-container {\n      flex: 0;\n      display: flex;\n      -moz-flex-direction: row;\n      flex-direction: row; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-buttons-container .cookies-notification-button {\n        flex: 1;\n        display: inline-block;\n        font-size: 12px;\n        position: relative; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-buttons-container .cookies-notification-button:hover {\n          cursor: pointer; }\n.cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-buttons-container .cookies-notification-button .cookies-notification-button-text {\n          width: 100%;\n          text-align: center;\n          position: absolute;\n          top: 50%;\n          margin-top: -10px; }\n@media (max-width: 767px) {\n  .cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container .cookies-icon-container {\n    display: none; }\n  .cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-buttons-container {\n    height: 40px;\n    border-top: 1px solid #2c2c2c; }\n    .cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-buttons-container .cookies-notification-okay-button {\n      border-left: 1px solid #2c2c2c; } }\n@media (min-width: 768px) {\n  .cookies-notification-container {\n    position: fixed;\n    width: calc(100% - 20px);\n    right: 0;\n    float: right; }\n    .cookies-notification-container .cookies-notification .cookies-notification-content {\n      display: flex;\n      -moz-flex-direction: row;\n      flex-direction: row; }\n      .cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container {\n        align-items: center; }\n        .cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container .cookies-icon-container {\n          width: 70px; }\n          .cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-description-container .cookies-icon-container .cookies-icon {\n            font-size: 25px; }\n      .cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-buttons-container {\n        flex: 0;\n        -moz-flex-direction: column;\n        flex-direction: column;\n        border-left: 1px solid #2c2c2c; }\n        .cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-buttons-container .cookies-notification-button {\n          flex: 1;\n          position: relative;\n          width: 100px; }\n        .cookies-notification-container .cookies-notification .cookies-notification-content .cookies-notification-buttons-container .cookies-notification-okay-button {\n          border-top: 1px solid #2c2c2c; } }\n@media (min-width: 992px) {\n  .cookies-notification-container {\n    position: fixed;\n    width: calc(40% - 20px); } }\n"

/***/ }),

/***/ "./src/app/components/cookies-notification/cookies-notification.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cookies-notification/cookies-notification.component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var model_service_1 = __webpack_require__(/*! ../../services/model.service */ "./src/app/services/model.service.ts");
var CookiesNotificationComponent = /** @class */ (function () {
    function CookiesNotificationComponent(modelService) {
        this.modelService = modelService;
        this.displayCookiesNotification = false;
    }
    CookiesNotificationComponent.prototype.ngOnInit = function () {
        var cookiesAcceptedStoredValue;
        this.isBrowser = this.modelService.isPlatformBrowser();
        if (this.isBrowser) {
            cookiesAcceptedStoredValue = localStorage.getItem('tth-cookies-accepted');
        }
        if (_.isNil(cookiesAcceptedStoredValue)) {
            this.displayCookiesNotification = true;
        }
    };
    CookiesNotificationComponent.prototype.acceptCookies = function () {
        this.displayCookiesNotification = false;
        if (this.modelService.isPlatformBrowser()) {
            localStorage.setItem('tth-cookies-accepted', 'true');
        }
    };
    CookiesNotificationComponent = __decorate([
        core_1.Component({
            selector: 'app-cookies-notification',
            template: __webpack_require__(/*! ./cookies-notification.component.html */ "./src/app/components/cookies-notification/cookies-notification.component.html"),
            styles: [__webpack_require__(/*! ./cookies-notification.component.scss */ "./src/app/components/cookies-notification/cookies-notification.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService])
    ], CookiesNotificationComponent);
    return CookiesNotificationComponent;
}());
exports.CookiesNotificationComponent = CookiesNotificationComponent;


/***/ }),

/***/ "./src/app/components/header-image/header-image.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/header-image/header-image.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-image-component\">\r\n  <div class=\"header-image-container\">\r\n    <div class=\"header-image\" [ngStyle]=\"getBackgroundStyle(image)\" *ngIf=\"image\">\r\n      <div class=\"header-image-title header-image-title-move-in\">\r\n        <h1>{{title}}</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/header-image/header-image.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/header-image/header-image.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n@-webkit-keyframes slide-in {\n  from {\n    top: 100%; }\n  to {\n    top: 40%; } }\n@keyframes slide-in {\n  from {\n    top: 100%; }\n  to {\n    top: 40%; } }\n@-webkit-keyframes squish-header-image {\n  from {\n    height: calc(100% - 70px); }\n  to {\n    height: 400px; } }\n@keyframes squish-header-image {\n  from {\n    height: calc(100% - 70px); }\n  to {\n    height: 400px; } }\n.header-image-component {\n  height: calc(100% - 70px);\n  width: 100%;\n  position: relative;\n  -webkit-animation-name: squish-header-image;\n          animation-name: squish-header-image;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n.header-image-component .header-image-container {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    display: block;\n    top: 0;\n    overflow: hidden; }\n.header-image-component .header-image-container .header-image {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      background-attachment: initial;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover;\n      opacity: 0.8; }\n.header-image-component .header-image-container .header-image .header-image-title-move-in {\n        -webkit-animation-name: slide-in;\n                animation-name: slide-in;\n        -webkit-animation-delay: 0.3s;\n                animation-delay: 0.3s;\n        -webkit-animation-duration: 0.7s;\n                animation-duration: 0.7s;\n        -webkit-animation-timing-function: ease;\n                animation-timing-function: ease;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        top: 100%;\n        position: absolute; }\n@media (min-width: 992px) {\n  .header-image-component .header-image-container .header-image {\n    background-attachment: fixed; } }\n"

/***/ }),

/***/ "./src/app/components/header-image/header-image.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/header-image/header-image.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var HeaderImageComponent = /** @class */ (function () {
    function HeaderImageComponent(dynamicContentService) {
        this.dynamicContentService = dynamicContentService;
    }
    HeaderImageComponent.prototype.ngOnInit = function () {
    };
    HeaderImageComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.listId);
    };
    HeaderImageComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderImageComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderImageComponent.prototype, "listId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderImageComponent.prototype, "title", void 0);
    HeaderImageComponent = __decorate([
        core_1.Component({
            selector: 'app-header-image',
            template: __webpack_require__(/*! ./header-image.component.html */ "./src/app/components/header-image/header-image.component.html"),
            styles: [__webpack_require__(/*! ./header-image.component.scss */ "./src/app/components/header-image/header-image.component.scss")]
        }),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService])
    ], HeaderImageComponent);
    return HeaderImageComponent;
}());
exports.HeaderImageComponent = HeaderImageComponent;


/***/ }),

/***/ "./src/app/components/schedule/schedule.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"schedule-component\">\r\n  <div class=\"schedule-header\">\r\n    <h2 class=\"schedule-title\" (click)=\"toggleScheduleOpen()\">\r\n      <span>Stundenplan</span>\r\n      <span *ngIf=\"location\"> Studio {{location.name}}</span>\r\n      <!--<i class=\"fas fa-arrow-right navigation-icon\" [ngClass]=\"scheduleOpen ? 'schedule-open' : ''\" *ngIf=\"displayDrawer\"></i>-->\r\n    </h2>\r\n    <div class=\"schedule-navigation-container\" [ngClass]=\"[courseShortId ? 'schedule-navigation-hide-filters' : '', scheduleOpen === false ? 'schedule-closed' : 'schedule-open']\">\r\n      <div class=\"schedule-navigation-filter-segments\" *ngIf=\"displayDrawer\">\r\n        <div class=\"schedule-navigation-segment schedule-navigation-age-groups\">\r\n          <form>\r\n              <select name=\"selectedAgeGroups\" (change)=\"selectAgeGroup($event.target.value)\">\r\n                <option value=\"\">Alle Altersgruppen</option>\r\n                <option *ngFor=\"let ageGroup of ageGroups\" [ngValue]=\"ageGroup\">{{ageGroup.title}}</option>\r\n              </select>\r\n            </form>\r\n        </div>\r\n        <div class=\"schedule-navigation-segment schedule-navigation-levels\">\r\n          <form>\r\n            <select name=\"selectedLevels\" (change)=\"selectLevel($event.target.value)\">\r\n              <option value=\"\">Alle Niveaus</option>\r\n              <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.title}}</option>\r\n            </select>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"schedule-navigation-style-selector\" (click)=\"toggleDisplayColors()\">\r\n          <i class=\"far schedule-navigation-style-selector-icon\" [ngClass]=\"displayColors ? 'fa-check-circle' : 'fa-circle'\"></i>\r\n          <span class=\"schedule-navigation-style-label\">Stundenplan einfärben</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"schedule-container\" [ngClass]=\"scheduleOpen === false ? 'schedule-closed' : 'schedule-open'\">\r\n    <div class=\"day-container\" *ngFor=\"let appointments of courseAppointmentsByDay; let dayIndex = index\" [ngClass]=\"appointments.length === 0 ? 'day-container-empty' : ''\" [ngStyle]=\"{'width': columnWidth}\">\r\n      <div class=\"day-title\">{{getDayTitle(dayIndex)}}</div>\r\n      <div class=\"appointment-container\" *ngFor=\"let appointment of appointments\" [routerLink]=\"getCourseLink(appointment)\" [ngClass]=\"[getCourseLink(appointment) ? 'has-course-link' : '', displayColors ? 'display-colors' : '', appointment.highlight ? 'highlight' : '']\">\r\n        <div class=\"appointment-time appointment-text\">\r\n          {{getTimeString(appointment.dateStart)}}-{{getTimeString(appointment.dateEnd)}} Uhr\r\n        </div>\r\n        <div class=\"appointment-title appointment-text\">\r\n          {{appointment.title}}<i class=\"appointment-arrow-button fas fa-chevron-right\"></i>\r\n        </div>\r\n        <div class=\"appointment-location appointment-text\">\r\n          im {{appointment.location.name}}\r\n        </div>\r\n        <div class=\"appointment-info-icons-container\">\r\n          <div class=\"appointment-age-groups\" *ngIf=\"appointment.ageGroups && appointment.ageGroups.length > 0\">\r\n            <span class=\"schedule-no-colors-label\">Für </span>\r\n            <div class=\"schedule-info-icon appointment-age-group\" *ngFor=\"let ageGroup of appointment.ageGroups\" [ngStyle]=\"getScheduleIconStyle(ageGroup.hexColor)\">\r\n              {{ageGroup.title}}\r\n            </div>\r\n          </div>\r\n          <div class=\"appointment-levels\" *ngIf=\"appointment.levels && appointment.levels.length > 0\">\r\n            <span class=\"schedule-no-colors-label\">Niveau: </span> \r\n            <span class=\"schedule-info-icon appointment-level\" *ngFor=\"let level of appointment.levels, let i = index\" [ngStyle]=\"getScheduleIconStyle(level.hexColor)\">\r\n              {{level.title}}<span *ngIf=\"appointment.levels.length > 1 && i < appointment.levels.length - 1\" class=\"schedule-no-colors-label\"> / </span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"tth-button-container\" *ngIf=\"!scheduleOpen\">\r\n    <a class=\"tth-button\" (click)=\"toggleScheduleOpen()\">\r\n      <i class=\"tth-button-icon far fa-eye\"></i>\r\n      <span class=\"tth-button-label\">Stundenplan anzeigen</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"tth-button-container\" *ngIf=\"schedulePDF\">\r\n    <a class=\"tth-button\" href={{schedulePDF}} download=\"Stundenplan_Markgroeningen\" target=\"_blank\">\r\n      <i class=\"tth-button-icon fas fa-cloud-download-alt\"></i>\r\n      <span class=\"tth-button-label\">Stundenplan Download</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n@-webkit-keyframes rotate90deg {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n@keyframes rotate90deg {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n.schedule-component {\n  margin-bottom: 20px; }\n.schedule-component .schedule-header .schedule-title {\n    margin-top: 0;\n    line-height: 1.5em; }\n.schedule-component .schedule-header .schedule-title:hover {\n      cursor: pointer; }\n.schedule-component .schedule-header .schedule-title .navigation-icon {\n      font-size: 0.7em;\n      margin-left: 20px; }\n.schedule-component .schedule-header .schedule-title .navigation-icon.schedule-open {\n        -webkit-animation-name: rotate90deg;\n                animation-name: rotate90deg;\n        -webkit-animation-duration: 0.3s;\n                animation-duration: 0.3s;\n        -webkit-animation-timing-function: ease;\n                animation-timing-function: ease;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n.schedule-component .schedule-header .schedule-navigation-container {\n    margin-bottom: 20px; }\n.schedule-component .schedule-header .schedule-navigation-container.schedule-open {\n      height: auto;\n      -webkit-animation-name: fade-in;\n              animation-name: fade-in;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-timing-function: ease;\n              animation-timing-function: ease;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n.schedule-component .schedule-header .schedule-navigation-container.schedule-closed {\n      opacity: 0;\n      height: 0;\n      overflow: hidden;\n      margin: 0; }\n.schedule-component .schedule-header .schedule-navigation-container.schedule-navigation-hide-filters .schedule-navigation-filter-segments {\n      display: none; }\n.schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-filter-segments .schedule-navigation-segment {\n      display: inline-block; }\n.schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-filter-segments .schedule-navigation-segment.schedule-navigation-age-groups {\n        margin-right: 20px; }\n.schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-filter-segments .schedule-navigation-segment select {\n        color: #1f1f1f;\n        background-color: #fff;\n        height: 30px;\n        margin-bottom: 10px; }\n.schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-filter-segments .schedule-navigation-segment .schedule-navigation-element {\n        display: inline-block;\n        margin-right: 15px; }\n.schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-filter-segments .schedule-navigation-segment .schedule-navigation-element:hover {\n          cursor: pointer; }\n.schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-filter-segments .schedule-navigation-segment .schedule-navigation-element.active .schedule-navigation-text {\n          border-bottom: 1px solid #1f1f1f; }\n.schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-filter-segments .schedule-navigation-segment .schedule-navigation-element:not(.active) .schedule-info-icon {\n          color: #414141 !important;\n          border-color: #414141 !important; }\n.schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-filter-segments .schedule-navigation-segment .schedule-navigation-element .schedule-navigation-text {\n          margin-left: 10px;\n          display: inline-block; }\n.schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-style-selector {\n      display: none; }\n.schedule-component .schedule-container {\n    overflow: hidden; }\n.schedule-component .schedule-container.schedule-closed {\n      height: 0;\n      opacity: 0; }\n.schedule-component .schedule-container.schedule-open {\n      height: auto;\n      -webkit-animation-name: fade-in;\n              animation-name: fade-in;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-timing-function: ease;\n              animation-timing-function: ease;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      margin-bottom: 50px; }\n.schedule-component .schedule-container .day-container .day-title {\n      border-bottom: 1px solid #1f1f1f;\n      margin-bottom: 10px; }\n.schedule-component .schedule-container .day-container .appointment-container {\n      font-size: 13px;\n      margin-bottom: 10px;\n      transition: color 0.3s ease; }\n.schedule-component .schedule-container .day-container .appointment-container:focus {\n        outline: none; }\n.schedule-component .schedule-container .day-container .appointment-container.has-course-link:hover {\n        cursor: pointer; }\n.schedule-component .schedule-container .day-container .appointment-container .appointment-time {\n        color: #9f9f9f;\n        font-size: 11px; }\n.schedule-component .schedule-container .day-container .appointment-container .appointment-info-icons-container .schedule-info-icon {\n        display: inline-block;\n        margin-right: 10px; }\n@media (max-width: 767px) {\n  .schedule-component .schedule-container .day-container {\n    width: 100% !important; }\n    .schedule-component .schedule-container .day-container.day-container-empty {\n      display: none; }\n    .schedule-component .schedule-container .day-container .day-title {\n      font-size: 1.5em; }\n    .schedule-component .schedule-container .day-container .appointment-container.highlight .appointment-title {\n      color: #007aff; }\n    .schedule-component .schedule-container .day-container .appointment-container .appointment-title {\n      font-size: 1.5em;\n      line-height: 1.5em; }\n      .schedule-component .schedule-container .day-container .appointment-container .appointment-title .appointment-arrow-button {\n        float: right;\n        font-size: 0.7em;\n        line-height: 2.5em;\n        color: #9f9f9f; }\n    .schedule-component .schedule-container .day-container .appointment-container .appointment-time {\n      font-size: 1.2em; }\n    .schedule-component .schedule-container .day-container .appointment-container .schedule-no-colors-label {\n      display: inline-block; }\n    .schedule-component .schedule-container .day-container .appointment-container .appointment-info-icons-container {\n      font-size: 1.2em; }\n      .schedule-component .schedule-container .day-container .appointment-container .appointment-info-icons-container .schedule-info-icon {\n        color: #1f1f1f !important;\n        margin-left: 7px; } }\n@media (min-width: 768px) {\n  .schedule-component .schedule-header {\n    display: flex;\n    flex-direction: row; }\n    .schedule-component .schedule-header .schedule-title {\n      flex: 1; }\n    .schedule-component .schedule-header .schedule-navigation-container {\n      margin-top: 8px; }\n      .schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-style-selector {\n        display: block;\n        font-size: 12px;\n        float: right; }\n        .schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-style-selector:hover {\n          cursor: pointer; }\n        .schedule-component .schedule-header .schedule-navigation-container .schedule-navigation-style-selector .schedule-navigation-style-selector-icon {\n          margin-right: 3px; }\n  .schedule-component .schedule-container {\n    display: flex;\n    flex-direction: row; }\n    .schedule-component .schedule-container .day-container .appointment-container {\n      padding: 5px 10px;\n      margin-right: 15px;\n      display: flex;\n      flex-direction: column;\n      border: 1px solid #b4b4b4;\n      background-color: rgba(216, 216, 216, 0.8);\n      border-radius: 3px; }\n      .schedule-component .schedule-container .day-container .appointment-container.has-course-link:hover {\n        background-color: #d8d8d8; }\n      .schedule-component .schedule-container .day-container .appointment-container:not(.display-colors) .appointment-info-icons-container {\n        font-size: 11px; }\n        .schedule-component .schedule-container .day-container .appointment-container:not(.display-colors) .appointment-info-icons-container .schedule-info-icon {\n          color: #1f1f1f !important; }\n      .schedule-component .schedule-container .day-container .appointment-container.highlight {\n        background-color: rgba(0, 122, 255, 0.8);\n        color: #fff; }\n        .schedule-component .schedule-container .day-container .appointment-container.highlight.has-course-link:hover {\n          background-color: #007aff; }\n        .schedule-component .schedule-container .day-container .appointment-container.highlight .appointment-time {\n          color: #fff; }\n      .schedule-component .schedule-container .day-container .appointment-container .appointment-title .appointment-arrow-button {\n        display: none; }\n      .schedule-component .schedule-container .day-container .appointment-container.display-colors .appointment-info-icons-container {\n        display: inline-block; }\n        .schedule-component .schedule-container .day-container .appointment-container.display-colors .appointment-info-icons-container .schedule-no-colors-label {\n          display: none; }\n        .schedule-component .schedule-container .day-container .appointment-container.display-colors .appointment-info-icons-container .appointment-age-groups, .schedule-component .schedule-container .day-container .appointment-container.display-colors .appointment-info-icons-container .appointment-levels {\n          display: inline-block; }\n        .schedule-component .schedule-container .day-container .appointment-container.display-colors .appointment-info-icons-container .schedule-info-icon {\n          min-width: 20px;\n          height: 20px;\n          text-align: center;\n          font-size: 12px;\n          border-radius: 10px;\n          padding: 0 7px;\n          border: 1px solid;\n          margin-bottom: 5px; } }\n"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var zenkit_collections_1 = __webpack_require__(/*! ./../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var utility_service_1 = __webpack_require__(/*! ./../../services/utility.service */ "./src/app/services/utility.service.ts");
var model_service_1 = __webpack_require__(/*! ./../../services/model.service */ "./src/app/services/model.service.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(modelService, utilityService, dynamicContentService, router) {
        this.modelService = modelService;
        this.utilityService = utilityService;
        this.dynamicContentService = dynamicContentService;
        this.router = router;
        this.displayColors = true;
        this.coursesListShortId = zenkit_collections_1.ZenkitCollections.courses.shortId;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            _this.highlightAppointments();
        });
        var displayColorsStoredValue;
        if (this.modelService.isPlatformBrowser()) {
            displayColorsStoredValue = window.localStorage.getItem('tth-schedule-display-colors');
        }
        if (displayColorsStoredValue) {
            this.displayColors = displayColorsStoredValue === 'true';
        }
        if (this.displayNavigationDrawer === 'true') {
            this.scheduleOpen = true;
            this.displayDrawer = false;
        }
        else {
            this.scheduleOpen = true;
            this.displayDrawer = false;
        }
        Promise.all([
            this.modelService.getScheduleData(),
            this.modelService.getCourses()
        ]).then(function (results) {
            var scheduleData = results[0];
            _this.courseAppointments = scheduleData.appointments;
            _this.ageGroups = _.map(scheduleData.ageGroupLabels, function (ageGroupLabel) {
                ageGroupLabel.isActive = true;
                return ageGroupLabel;
            });
            _this.levels = _.map(scheduleData.levelLabels, function (levelLabel) {
                levelLabel.isActive = true;
                return levelLabel;
            });
            // Filter appointments by location
            // if (this.location) {
            //   this.courseAppointments = _.filter(this.courseAppointments, {
            //     'location': this.location
            //   });
            // }
            // Filter appointments by course category
            // if (this.courseShortId) {
            //   this.courseAppointments = _.filter(this.courseAppointments, (appointment) => {
            //     return _.get(appointment, ['course', 'shortId']) === this.courseShortId;
            //   });
            // }
            _this.days = _.get(scheduleData, ['dayLabels']);
            // Categorize appointments by day
            var daysTotal = _.get(scheduleData, ['dayLabels', 'length']);
            var sortedAppointments = [];
            for (var i = 0; i < daysTotal; i++) {
                sortedAppointments[i] = [];
            }
            _this.columnWidth = ((1 / daysTotal) * 100) + '%';
            // tslint:disable-next-line:max-line-length
            _this.courseAppointmentsByDay = _.reduce(_this.courseAppointments, function (sortedArray, appointment) {
                sortedArray[appointment.dayIndex].push(appointment);
                return sortedArray;
            }, sortedAppointments);
            // Sort appointments by time
            _this.courseAppointmentsByDay = _.map(_this.courseAppointmentsByDay, function (appointmentArray) {
                return _.orderBy(appointmentArray, ['dateStart'], ['asc']);
            });
            _this.courseAppointmentsByDayAll = _this.courseAppointmentsByDay;
            var activeLevels = _.filter(_this.levels, function (level) {
                return level.isActive === true;
            });
            var activeAgeGroups = _.filter(_this.ageGroups, function (ageGroup) {
                return ageGroup.isActive === true;
            });
            if (activeAgeGroups.length !== _this.ageGroups.length
                || activeLevels.length !== _this.levels.length) {
                _this.updateSchedule();
            }
            _this.highlightAppointments();
        });
    };
    ScheduleComponent.prototype.highlightAppointments = function () {
        var _this = this;
        if (this.courseShortId) {
            var highlightedAppointments = _.filter(this.courseAppointments, function (appointment) {
                return _.get(appointment, ['course', 'shortId']) === _this.courseShortId;
            });
            for (var _i = 0, highlightedAppointments_1 = highlightedAppointments; _i < highlightedAppointments_1.length; _i++) {
                var appointment = highlightedAppointments_1[_i];
                appointment.highlight = true;
            }
        }
        else {
            for (var _a = 0, _b = this.courseAppointments; _a < _b.length; _a++) {
                var appointment = _b[_a];
                appointment.highlight = false;
            }
        }
    };
    ScheduleComponent.prototype.updateSchedule = function () {
        var activeAgeGroupsStrings = _.reduce(this.ageGroups, function (results, ageGroup) {
            if (ageGroup.isActive) {
                results.push(ageGroup.title);
            }
            return results;
        }, []);
        if (activeAgeGroupsStrings.length === this.ageGroups.length) {
            this.courseAppointmentsByDay = this.courseAppointmentsByDayAll;
        }
        else {
            this.courseAppointmentsByDay = _.map(this.courseAppointmentsByDayAll, function (day) {
                return _.reduce(day, function (results, appointment) {
                    if (_.isEmpty(appointment.ageGroups)) {
                        // results.push(appointment);
                    }
                    else {
                        var appointmentAgeGroupsStrings = _.map(appointment.ageGroups, function (ageGroup) {
                            return ageGroup.title;
                        });
                        var intersection = _.intersection(activeAgeGroupsStrings, appointmentAgeGroupsStrings);
                        if (_.isEmpty(intersection) === false) {
                            results.push(appointment);
                        }
                    }
                    return results;
                }, []);
            });
        }
        var activeLevelsStrings = _.reduce(this.levels, function (results, level) {
            if (level.isActive) {
                results.push(level.title);
            }
            return results;
        }, []);
        if (activeLevelsStrings.length !== this.levels.length) {
            this.courseAppointmentsByDay = _.map(this.courseAppointmentsByDay, function (day) {
                return _.reduce(day, function (results, appointment) {
                    if (_.isEmpty(appointment.levels)) {
                        // results.push(appointment);
                    }
                    else {
                        var appointmentLevelsStrings = _.map(appointment.levels, function (level) {
                            return level.title;
                        });
                        var intersection = _.intersection(activeLevelsStrings, appointmentLevelsStrings);
                        if (_.isEmpty(intersection) === false) {
                            results.push(appointment);
                        }
                    }
                    return results;
                }, []);
            });
        }
    };
    ScheduleComponent.prototype.getDayTitle = function (index) {
        return _.get(this.days[index], ['title']);
    };
    ScheduleComponent.prototype.getTimeString = function (date) {
        var minutes = date.getMinutes();
        var minutesString = minutes.toString();
        if (minutes < 10) {
            minutesString = '0' + minutesString;
        }
        return date.getHours() + '.' + minutesString;
    };
    ScheduleComponent.prototype.getCourseLink = function (appointment) {
        if (appointment.highlight) {
            return this.getLocationLink(appointment);
        }
        if (appointment.course) {
            var courseShortId = _.get(appointment, ['course', 'shortId']);
            var courseTitle = _.get(appointment, ['course', 'title']);
            return '/kurse/' + courseShortId + '/' + this.convertStringToUrlId(courseTitle);
        }
        return undefined;
    };
    ScheduleComponent.prototype.getLocationLink = function (appointment) {
        var locationShortId = _.get(appointment, ['location', 'shortId']);
        var locationName = _.get(appointment, ['location', 'name']);
        if (locationShortId) {
            return '/standorte/' + locationShortId + '/' + this.convertStringToUrlId(locationName);
        }
        return undefined;
    };
    ScheduleComponent.prototype.toggleAgeGroup = function (ageGroup) {
        var index = _.findIndex(this.ageGroups, {
            title: ageGroup.title
        });
        this.ageGroups[index].isActive = !this.ageGroups[index].isActive;
        this.updateSchedule();
    };
    ScheduleComponent.prototype.toggleLevel = function (level) {
        var index = _.findIndex(this.levels, {
            title: level.title
        });
        this.levels[index].isActive = !this.levels[index].isActive;
        this.updateSchedule();
    };
    ScheduleComponent.prototype.convertStringToUrlId = function (string) {
        return this.utilityService.convertStringToUrlId(string);
    };
    ScheduleComponent.prototype.getAgeGroupDetails = function (ageGroup) {
        return _.find(this.ageGroups, function (a) {
            return a.title === ageGroup;
        });
    };
    ScheduleComponent.prototype.getScheduleIconStyle = function (hexColor) {
        return {
            'border-color': hexColor,
            'color': hexColor,
        };
    };
    ScheduleComponent.prototype.selectLevel = function (selectedLevelTitle) {
        if (_.isNil(selectedLevelTitle) || _.isEmpty(selectedLevelTitle)) {
            _.forEach(this.levels, function (level) {
                level.isActive = true;
            });
        }
        else {
            _.forEach(this.levels, function (level) {
                if (level.title === selectedLevelTitle) {
                    level.isActive = true;
                }
                else {
                    level.isActive = false;
                }
            });
        }
        this.updateSchedule();
    };
    ScheduleComponent.prototype.selectAgeGroup = function (selectedAgeGroupTitle) {
        if (_.isNil(selectedAgeGroupTitle) || _.isEmpty(selectedAgeGroupTitle)) {
            _.forEach(this.ageGroups, function (ageGroup) {
                ageGroup.isActive = true;
            });
        }
        else {
            _.forEach(this.ageGroups, function (ageGroup) {
                if (ageGroup.title === selectedAgeGroupTitle) {
                    ageGroup.isActive = true;
                }
                else {
                    ageGroup.isActive = false;
                }
            });
        }
        this.updateSchedule();
    };
    ScheduleComponent.prototype.toggleDisplayColors = function () {
        this.displayColors = !this.displayColors;
        if (this.modelService.isPlatformBrowser()) {
            window.localStorage.setItem('tth-schedule-display-colors', this.displayColors.toString());
        }
    };
    ScheduleComponent.prototype.toggleScheduleOpen = function () {
        this.scheduleOpen = !this.scheduleOpen;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScheduleComponent.prototype, "locationInitials", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScheduleComponent.prototype, "courseShortId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScheduleComponent.prototype, "displayNavigationDrawer", void 0);
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/components/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/components/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            utility_service_1.UtilityService,
            dynamic_content_service_1.DynamicContentService,
            router_1.Router])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;


/***/ }),

/***/ "./src/app/courses-overview/courses-overview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/courses-overview/courses-overview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"courses-overview\">\r\n  <div class=\"courses-overview-bg-images-mask\">\r\n    <div *ngFor=\"let course of courses\" class=\"courses-overview-bg-image-container\" [ngStyle]=\"getBackgroundStyle(course.image)\">\r\n      <div class=\"courses-overview-bg-image-fade\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"course-tags-container main-content-container\" *ngIf=\"courses\">\r\n    <div class=\"course-tags main-content\">\r\n      <a *ngFor=\"let course of courses, let i = index\" class=\"course-tag-container\" (mouseenter)=\"mouseEnter(course)\" (mouseleave)=\"mouseLeave(course)\" [routerLink]=\"['/kurse', course.shortId, convertStringToUrlId(course.title)]\">\r\n        <div class=\"black-bg-mask\">\r\n          <div class=\"home-thumb-black-bg\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"thumb-info-block\">\r\n          <div class=\"thumb-spacer\">\r\n\r\n          </div>\r\n          <div class=\"thumb-index\">\r\n            0{{i + 1}}\r\n          </div>\r\n          <div class=\"thumb-title\">\r\n            {{course.title}}\r\n          </div>  \r\n        </div>\r\n      </a>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/courses-overview/courses-overview.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/courses-overview/courses-overview.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.courses-overview {\n  width: 100%;\n  overflow: hidden;\n  position: relative; }\n.courses-overview .course-tags-container {\n    opacity: 0;\n    -webkit-animation-name: fade-in;\n            animation-name: fade-in;\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n.courses-overview .course-tags-container .course-tags {\n      padding-bottom: 60px;\n      display: flex;\n      flex-wrap: wrap; }\n.courses-overview .course-tags-container .course-tags .course-tag-container {\n        width: 100%;\n        display: inline-block;\n        position: relative;\n        padding: 0 10px;\n        border-bottom: 1px solid #2c2c2c;\n        overflow: hidden;\n        text-decoration: none;\n        transition: background-color 0.3s ease, padding 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n.courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block {\n          -webkit-transform: translateX(0px) translateY(0px);\n          transform: translateX(0px) translateY(0px);\n          transition: -webkit-transform 150ms;\n          transition: transform 150ms;\n          transition: transform 150ms, -webkit-transform 150ms;\n          position: static;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          overflow-x: visible;\n          overflow-y: visible;\n          width: 100%;\n          height: 200%;\n          padding: 10px 10px 15px 10px;\n          -webkit-transform: none;\n          transform: none; }\n.courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-index {\n            font-size: 12px;\n            font-style: italic;\n            margin-right: 20px; }\n.courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-title {\n            position: static;\n            overflow-x: visible;\n            overflow-y: visible;\n            margin-bottom: 0;\n            padding-right: 0;\n            text-decoration: none;\n            text-transform: uppercase;\n            font-size: 14px;\n            color: #1f1f1f;\n            clear: none;\n            letter-spacing: 2px; }\n.courses-overview .course-tags-container .course-tags .course-tag-container:hover {\n          cursor: pointer; }\n.courses-overview .courses-overview-bg-images-mask {\n    display: none; }\n@media (max-width: 767px) {\n  .courses-overview .course-tags-container .course-tags .course-tag-container {\n    overflow: hidden; }\n    .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block {\n      display: flex; }\n      .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-index {\n        flex: 0; }\n      .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-title {\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        flex: 1; }\n    .courses-overview .course-tags-container .course-tags .course-tag-container:hover, .courses-overview .course-tags-container .course-tags .course-tag-container:focus {\n      background-color: #007aff;\n      padding-left: 30px; }\n      .courses-overview .course-tags-container .course-tags .course-tag-container:hover .thumb-title, .courses-overview .course-tags-container .course-tags .course-tag-container:focus .thumb-title {\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden; } }\n@media (min-width: 768px) {\n  .courses-overview {\n    height: 100%; }\n    .courses-overview .courses-overview-bg-images-mask {\n      display: block;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      overflow: hidden; }\n      .courses-overview .courses-overview-bg-images-mask .courses-overview-bg-image-container {\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-attachment: fixed;\n        background-size: cover;\n        background-position: center;\n        background-repeat: no-repeat;\n        opacity: 0;\n        -webkit-transform: translateX(0px) translateY(100%);\n        transform: translateX(0px) translateY(100%);\n        transition: opacity 500ms ease, -webkit-transform 250ms;\n        transition: opacity 500ms ease, transform 250ms;\n        transition: opacity 500ms ease, transform 250ms, -webkit-transform 250ms; }\n        .courses-overview .courses-overview-bg-images-mask .courses-overview-bg-image-container.active {\n          -webkit-transform: translateX(0px) translateY(0%);\n          transform: translateX(0px) translateY(0%);\n          opacity: 1; }\n        .courses-overview .courses-overview-bg-images-mask .courses-overview-bg-image-container .courses-overview-bg-image-fade {\n          width: 100%;\n          height: 100%;\n          background-color: rgba(255, 255, 255, 0.3); }\n    .courses-overview .course-tags-container {\n      padding: 110px 40px 20px 40px; }\n      .courses-overview .course-tags-container .course-tags .course-tag-container {\n        width: 31.33%;\n        padding: 0;\n        margin: 10px 1% 0 1%;\n        height: 150px;\n        border-bottom: 1px solid #1f1f1f; }\n        .courses-overview .course-tags-container .course-tags .course-tag-container .black-bg-mask {\n          position: absolute;\n          overflow-x: hidden;\n          overflow-y: hidden;\n          width: 100%;\n          height: 100%; }\n          .courses-overview .course-tags-container .course-tags .course-tag-container .black-bg-mask .home-thumb-black-bg {\n            opacity: 0;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background-color: #007aff;\n            -webkit-transform: translateX(0px) translateY(100%);\n            transform: translateX(0px) translateY(100%);\n            transition: opacity 250ms, -webkit-transform 250ms;\n            transition: opacity 250ms, transform 250ms;\n            transition: opacity 250ms, transform 250ms, -webkit-transform 250ms; }\n        .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block {\n          width: calc(100% - 20px); }\n          .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-spacer {\n            position: relative;\n            display: inline-block;\n            width: 100%;\n            height: 50%;\n            margin-top: -45px; }\n          .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-index {\n            display: none; }\n          .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-title {\n            width: 100%;\n            margin-top: 10px;\n            transition: -webkit-transform 250ms;\n            transition: transform 250ms;\n            transition: transform 250ms, -webkit-transform 250ms;\n            -webkit-transform: translateX(0px) translateY(-5px);\n            transform: translateX(0px) translateY(-5px); }\n        .courses-overview .course-tags-container .course-tags .course-tag-container:hover {\n          cursor: pointer; }\n          .courses-overview .course-tags-container .course-tags .course-tag-container:hover .black-bg-mask .home-thumb-black-bg {\n            opacity: 1;\n            -webkit-transform: translateX(0px) translateY(0px);\n                    transform: translateX(0px) translateY(0px); }\n          .courses-overview .course-tags-container .course-tags .course-tag-container:hover .thumb-info-block {\n            -webkit-transform: translateX(0px) translateY(-100px);\n            transform: translateX(0px) translateY(-100px); }\n            .courses-overview .course-tags-container .course-tags .course-tag-container:hover .thumb-info-block .thumb-title {\n              font-weight: 600;\n              color: #fff; }\n        .courses-overview .course-tags-container .course-tags .course-tag-container:not(:hover) .thumb-info-block .thumb-title {\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden; } }\n"

/***/ }),

/***/ "./src/app/courses-overview/courses-overview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/courses-overview/courses-overview.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_service_1 = __webpack_require__(/*! ./../services/utility.service */ "./src/app/services/utility.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var model_service_1 = __webpack_require__(/*! ./../services/model.service */ "./src/app/services/model.service.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var CoursesOverviewComponent = /** @class */ (function () {
    function CoursesOverviewComponent(modelService, dynamicContentService, utilityService) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.utilityService = utilityService;
        this.coursesListShortId = zenkit_collections_1.ZenkitCollections.courses.shortId;
    }
    CoursesOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        this.modelService.getCourses().then(function (coursesData) {
            _this.courses = coursesData.courses;
            _this.modelService.setPageLoaded(true);
        });
    };
    CoursesOverviewComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.coursesListShortId);
    };
    CoursesOverviewComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    CoursesOverviewComponent.prototype.mouseEnter = function (course) {
        var index = _.indexOf(this.courses, course);
        var imageContainerElements = document.getElementsByClassName('courses-overview-bg-image-container');
        this.activeImageContainer = imageContainerElements[index];
        this.activeImageContainer.classList.add('active');
    };
    CoursesOverviewComponent.prototype.mouseLeave = function (course) {
        this.activeImageContainer.classList.remove('active');
    };
    CoursesOverviewComponent.prototype.convertStringToUrlId = function (string) {
        return this.utilityService.convertStringToUrlId(string);
    };
    CoursesOverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-courses-overview',
            template: __webpack_require__(/*! ./courses-overview.component.html */ "./src/app/courses-overview/courses-overview.component.html"),
            styles: [__webpack_require__(/*! ./courses-overview.component.scss */ "./src/app/courses-overview/courses-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            utility_service_1.UtilityService])
    ], CoursesOverviewComponent);
    return CoursesOverviewComponent;
}());
exports.CoursesOverviewComponent = CoursesOverviewComponent;


/***/ }),

/***/ "./src/app/image-slider/image-slider.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-slider-container\">\r\n  <div class=\"image-slider-mask\">\r\n    <div class=\"image-container\" *ngFor=\"let image of sliderImages\" [class.active]=\"image.isActive\" [ngStyle]=\"getBackgroundStyle(image)\" >\r\n    </div>\r\n  </div>\r\n  <div class=\"image-slider-prev-control-container image-slider-control-container\" (click)=\"prev()\" *ngIf=\"sliderImages && sliderImages.length > 1\">\r\n    <i class=\"fa fa-angle-left\"></i>\r\n  </div>\r\n  <div class=\"image-slider-next-control-container image-slider-control-container\" (click)=\"next()\" *ngIf=\"sliderImages && sliderImages.length > 1\">\r\n    <i class=\"fa fa-angle-right\"></i>\r\n  </div>\r\n  <div class=\"image-slider-index-panel-container\" *ngIf=\"sliderImages && sliderImages.length > 1\">\r\n    <div *ngFor=\"let image of sliderImages\" class=\"image-slider-index\" [class.active]=\"image.isActive\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/image-slider/image-slider.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.image-slider-container {\n  width: 100%;\n  height: 300px;\n  position: relative;\n  overview: hidden; }\n.image-slider-container .image-slider-mask {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    display: block;\n    top: 0;\n    overflow: hidden; }\n.image-slider-container .image-slider-mask .image-container {\n      position: absolute;\n      background-size: contain;\n      background-repeat: no-repeat;\n      background-position: center;\n      height: 100%;\n      width: 100%;\n      -webkit-transform: translateX(0px) translateY(100%);\n      transform: translateX(0px) translateY(100%);\n      transition: opacity 250ms, -webkit-transform 250ms;\n      transition: opacity 250ms, transform 250ms;\n      transition: opacity 250ms, transform 250ms, -webkit-transform 250ms; }\n.image-slider-container .image-slider-mask .image-container.active {\n        -webkit-transform: translateX(0px) translateY(0%);\n        transform: translateX(0px) translateY(0%); }\n.image-slider-container .image-slider-control-container {\n    position: absolute;\n    height: 300px;\n    width: 30%; }\n.image-slider-container .image-slider-control-container i {\n      position: absolute;\n      top: 40%;\n      font-size: 50px;\n      color: #fff;\n      text-shadow: 0 0 1px #000;\n      transition: color 0.5s ease; }\n.image-slider-container .image-slider-control-container:hover {\n      cursor: pointer; }\n.image-slider-container .image-slider-control-container:hover i {\n        color: #007aff; }\n.image-slider-container .image-slider-prev-control-container {\n    left: 0; }\n.image-slider-container .image-slider-prev-control-container i {\n      left: 0;\n      margin-left: 20px; }\n.image-slider-container .image-slider-next-control-container {\n    right: 0; }\n.image-slider-container .image-slider-next-control-container i {\n      margin-right: 20px;\n      right: 0; }\n.image-slider-container .image-slider-index-panel-container {\n    display: flex;\n    position: absolute;\n    bottom: 0;\n    height: 20px;\n    width: 100%; }\n.image-slider-container .image-slider-index-panel-container .image-slider-index {\n      flex: 1;\n      height: 20px; }\n@media (min-width: 768px) {\n  .image-slider-container {\n    height: 600px; }\n    .image-slider-container .image-slider-control-container {\n      height: 600px; } }\n"

/***/ }),

/***/ "./src/app/image-slider/image-slider.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamic_content_service_1 = __webpack_require__(/*! ./../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var ImageSliderComponent = /** @class */ (function () {
    function ImageSliderComponent(dynamicContentService) {
        this.dynamicContentService = dynamicContentService;
        this.currentImageIndex = 0;
    }
    ImageSliderComponent.prototype.ngOnInit = function () {
        this.sliderImages = _.map(this.images, function (image) {
            image['isActive'] = false;
            return image;
        });
        var firstImage = _.head(this.sliderImages);
        firstImage.isActive = true;
        this.zenkitListId = this.listid;
    };
    ImageSliderComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.zenkitListId);
    };
    ImageSliderComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    ImageSliderComponent.prototype.next = function () {
        this.images[this.currentImageIndex].isActive = false;
        this.currentImageIndex = (this.currentImageIndex + 1) % this.sliderImages.length;
        this.images[this.currentImageIndex].isActive = true;
    };
    ImageSliderComponent.prototype.prev = function () {
        this.images[this.currentImageIndex].isActive = false;
        this.currentImageIndex = this.currentImageIndex - 1;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.sliderImages.length - 1;
        }
        this.images[this.currentImageIndex].isActive = true;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ImageSliderComponent.prototype, "images", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ImageSliderComponent.prototype, "listid", void 0);
    ImageSliderComponent = __decorate([
        core_1.Component({
            selector: 'app-image-slider',
            template: __webpack_require__(/*! ./image-slider.component.html */ "./src/app/image-slider/image-slider.component.html"),
            styles: [__webpack_require__(/*! ./image-slider.component.scss */ "./src/app/image-slider/image-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService])
    ], ImageSliderComponent);
    return ImageSliderComponent;
}());
exports.ImageSliderComponent = ImageSliderComponent;


/***/ }),

/***/ "./src/app/main-page/main-page-section/main-page-section.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main-page/main-page-section/main-page-section.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-section\" [ngClass]=\"firstSection ? 'first-section' : ''\">\r\n  <div class=\"{{section.cssClass}} main-page-section-background\" [ngStyle]=\"getBackgroundStyle(section.image)\">\r\n    <div class=\"main-page-section-container\" [ngClass]=\"firstSection ? 'first-section-container' : ''\">\r\n      <div class=\"main-page-section-content-container\">\r\n        <div class=\"main-page-section-content\" [ngClass]=\"section.routerLink ? 'section-link' : ''\" (click)=\"goToSection(section)\">\r\n          <div  class=\"main-page-section-caption\">{{section.title}}</div>\r\n          <p class=\"main-page-section-description\">\r\n            {{section.description}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main-page-section-content mobile-only\" [ngClass]=\"section.routerLink ? 'section-link' : ''\" (click)=\"goToSection(section)\">\r\n    <div  class=\"main-page-section-caption\">{{section.title}}</div>\r\n    <p class=\"main-page-section-description\">\r\n      {{section.description}}\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/main-page-section/main-page-section.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main-page/main-page-section/main-page-section.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.main-page-section {\n  opacity: 0;\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n.main-page-section.first-section {\n    border-top: 1px solid #1f1f1f; }\n.main-page-section .main-page-section-background {\n    position: relative;\n    opacity: 0.8;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%;\n    height: 200px; }\n.main-page-section .main-page-section-background .main-page-section-container {\n      display: none;\n      position: absolute;\n      top: 20%;\n      width: 100%; }\n.main-page-section .main-page-section-background .main-page-section-container .main-page-section-content-container .main-page-section-content {\n        left: 0;\n        text-align: center;\n        color: #1f1f1f;\n        background-color: rgba(255, 255, 255, 0.5);\n        transition: background-color 0.2s ease;\n        padding: 30px; }\n.main-page-section .main-page-section-background .main-page-section-container .main-page-section-content-container .main-page-section-content.section-link:hover {\n          cursor: pointer;\n          background-color: rgba(255, 255, 255, 0.6); }\n.main-page-section .main-page-section-background .main-page-section-container .main-page-section-content-container .main-page-section-content .main-page-section-caption {\n          border: 2px solid #1f1f1f;\n          padding: 5px;\n          font-size: 14px;\n          letter-spacing: 10px;\n          text-transform: uppercase;\n          text-decoration: none;\n          color: #1f1f1f; }\n.main-page-section .main-page-section-background .main-page-section-container .main-page-section-content-container .main-page-section-content .main-page-section-description {\n          font-size: 14px;\n          padding-top: 20px; }\n.main-page-section .main-page-section-content.mobile-only {\n    text-align: center;\n    color: #1f1f1f;\n    padding: 30px; }\n.main-page-section .main-page-section-content.mobile-only.section-link:hover {\n      cursor: pointer; }\n.main-page-section .main-page-section-content.mobile-only .main-page-section-caption {\n      border: 2px solid #1f1f1f;\n      padding: 10px;\n      font-size: 14px;\n      letter-spacing: 10px;\n      margin: 20px;\n      text-transform: uppercase;\n      text-decoration: none;\n      color: #1f1f1f; }\n.main-page-section .main-page-section-content.mobile-only .main-page-section-description {\n      font-size: 14px;\n      padding-top: 20px; }\n@media (max-width: 767px) {\n  .main-page-section .main-page-section-background .main-page-section-container.first-section-container {\n    top: 10%; } }\n@media (min-width: 768px) {\n  .main-page-section {\n    height: 600px; }\n    .main-page-section .main-page-section-background {\n      height: 100%; }\n      .main-page-section .main-page-section-background .main-page-section-container {\n        display: block;\n        top: 30%; }\n        .main-page-section .main-page-section-background .main-page-section-container .main-page-section-content-container {\n          max-width: 568px;\n          margin: 0 auto; }\n          .main-page-section .main-page-section-background .main-page-section-container .main-page-section-content-container .main-page-section-content .main-page-section-caption {\n            font-size: 30px;\n            padding: 5px 30px;\n            display: inline-block;\n            font-weight: 600px; }\n          .main-page-section .main-page-section-background .main-page-section-container .main-page-section-content-container .main-page-section-content .main-page-section-description {\n            font-size: 16px; }\n    .main-page-section .main-page-section-content.mobile-only {\n      display: none; } }\n@media (min-width: 992px) {\n  .main-page-section {\n    height: 800px; }\n    .main-page-section .main-page-section-background {\n      background-attachment: fixed; }\n      .main-page-section .main-page-section-background .main-page-section-container .main-page-section-content-container {\n        max-width: 792px; } }\n"

/***/ }),

/***/ "./src/app/main-page/main-page-section/main-page-section.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main-page/main-page-section/main-page-section.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var zenkit_collections_1 = __webpack_require__(/*! ./../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var main_page_section_1 = __webpack_require__(/*! ./../../classes/main-page-section */ "./src/app/classes/main-page-section.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var MainPageSectionComponent = /** @class */ (function () {
    function MainPageSectionComponent(dynamicContentService, router) {
        this.dynamicContentService = dynamicContentService;
        this.router = router;
        this.mainPageListShortId = zenkit_collections_1.ZenkitCollections.home.shortId;
    }
    MainPageSectionComponent.prototype.ngOnInit = function () {
        this.section = this.sectiondata;
        this.firstSection = this.isFirstSection;
    };
    MainPageSectionComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.mainPageListShortId);
    };
    MainPageSectionComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    MainPageSectionComponent.prototype.goToSection = function (section) {
        if (section.routerLink) {
            this.router.navigate([section.routerLink]);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", main_page_section_1.MainPageSection)
    ], MainPageSectionComponent.prototype, "sectiondata", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MainPageSectionComponent.prototype, "isFirstSection", void 0);
    MainPageSectionComponent = __decorate([
        core_1.Component({
            selector: 'app-main-page-section',
            template: __webpack_require__(/*! ./main-page-section.component.html */ "./src/app/main-page/main-page-section/main-page-section.component.html"),
            styles: [__webpack_require__(/*! ./main-page-section.component.scss */ "./src/app/main-page/main-page-section/main-page-section.component.scss")]
        }),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService, router_1.Router])
    ], MainPageSectionComponent);
    return MainPageSectionComponent;
}());
exports.MainPageSectionComponent = MainPageSectionComponent;


/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"main-page-title-video-container\" [ngClass]=\"hideVideo === true  ? 'hide' : ''\">\r\n    <youtube-player *ngIf=\"youtubeVideoId\"\r\n        [videoId]=\"youtubeVideoId\"\r\n        height='100%'\r\n        width='100%'\r\n        [playerVars]=\"getPlayerVars()\"\r\n        (ready)=\"savePlayer($event)\"\r\n        (change)=\"onStateChange($event)\"\r\n        [ngStyle]=\"getPlayerStyle()\"\r\n    ></youtube-player>\r\n    <div class=\"video-overlay\" [ngClass]=\"videoLoaded === true  ? 'hide' : ''\"></div>\r\n</div>-->\r\n<!-- <div class=\"main-page\"> -->\r\n<div class=\"main-page-title-video-container\">\r\n    <div class=\"title-image-container\" [ngClass]=\"displayTitleImage && isBrowser  ? 'show' : ''\">\r\n        <img class=\"title-image mobile\" *ngIf=\"titleImageSection\" [src]=\"'./../../assets/simone-hutsch-CymuL2gpkaE-unsplash.jpg'\"\r\n            (load)=\"imageLoaded()\" />\r\n        <img class=\"title-image non-mobile\" *ngIf=\"titleImageSection\" [src]=\"'./../../assets/01_startseite_bg.jpg'\"\r\n            (load)=\"imageLoaded()\" />\r\n        <div class=\"title-image-overlay\"></div>\r\n    </div>\r\n    <iframe id=\"video-iframe\" class=\"video-iframe\" width=\"560\" height=\"315\" [src]=\"getYoutubeLink()\" frameborder=\"0\"\r\n        allow=\"autoplay; encrypted-media\" allowfullscreen *ngIf=\"hideTitle\"></iframe>\r\n    <!--<video muted loop controls=\"true\" *ngIf=\"videoFileSection\" id=\"video\" (loadeddata)=\"videoDataLoaded()\" [ngClass]=\"hideTitle === true  ? 'show' : ''\">\r\n                    <source [src]=\"getFileSrc(videoFileSection.image)\" type=\"video/mp4\">\r\n                </video>-->\r\n    <div class=\"video-overlay\" [ngClass]=\"videoLoaded === true  ? 'hide' : ''\"></div>\r\n    <div class=\"flex-container\" style=\"display: flex; flex-flow: column; height: 100%; width: 100%\" style=\"height: 100%; position: absolute; top: 0; left: 0; right: 0; display: flex; flex-flow: column\">\r\n        <div class=\"flex-01\" style=\"flex: 1\">\r\n            <div class=\"main-content-container main-content-container-padding\" > \r\n                <div class=\"main-content\">\r\n                    <div class=\"title-container\" *ngIf=\"contentLoaded && !hideTitle && isBrowser\"\r\n                        [ngClass]=\"hideTitle === true  ? 'hide' : ''\">\r\n                        <!-- <div class=\"logo-container\">\r\n                                <div class=\"logo\"></div>\r\n                            </div> -->\r\n                        <div class=\"play-icon-container\">\r\n                            <div class=\"play-icon-outer-ring\" (click)=\"playVideoButtonClicked()\">\r\n                                <div class=\"play-icon-inner-ring\">\r\n                                    <div class=\"fas fa-play play-icon\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            Wir bringen Ihr verlorenes Geld zurück!\r\n        \r\n                            <div class=\"sub-title\">unkompliziert | sicher | diskret</div>\r\n                        </div>\r\n                        <div class=\"intro-text\">\r\n                            Wir sind spezialisiert auf die Rückgewinnung von zu viel gezahlten Geldern und analysieren Ihre buchhalterischen Daten nach Überzahlungen jeglicher Art und nicht geltend gemachten Vergütungen aus Verträgen. Im Rahmen unserer detaillierten Analyse Ihrer kreditorischen Daten holen wir für Sie Gelder zurück auch aus Jahren die bereits verjährt sind.\r\n                        </div>\r\n                        <!-- <div class=\"title-row\">\r\n                                <app-text-animation textParam=\"Schule\" animationDelayParam=\"2.5s\" animationDurationParam=\"0.5s\"></app-text-animation>\r\n                                <app-text-animation textParam=\"für\" animationDelayParam=\"2.7s\" animationDurationParam=\"0.5s\"></app-text-animation>\r\n                                <app-text-animation textParam=\"klassisches\" animationDelayParam=\"2.9s\" animationDurationParam=\"0.5s\"></app-text-animation>\r\n                                <app-text-animation textParam=\"Ballett\" animationDelayParam=\"3.1s\" animationDurationParam=\"0.5s\"></app-text-animation>\r\n                            </div>\r\n                            <div class=\"title-row\">\r\n                                <app-text-animation textParam=\"und\" animationDelayParam=\"3.3s\" animationDurationParam=\"0.5s\"></app-text-animation>\r\n                                <app-text-animation textParam=\"modernen\" animationDelayParam=\"3.5s\" animationDurationParam=\"0.5s\"></app-text-animation>\r\n                                <app-text-animation textParam=\"Tanz\" animationDelayParam=\"3.7s\" animationDurationParam=\"0.5s\"></app-text-animation>\r\n                            </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"flex-02\"  style=\"height: 40%\">\r\n            <div class=\"main-content-container main-content-container-padding\"> \r\n                <div class=\"main-content intro-text-container\">\r\n                    \r\n                </div>\r\n            </div>\r\n        </div> -->\r\n    </div>  \r\n\r\n    <div class=\"scroll-icon-container\" [ngClass]=\"contentLoaded && isBrowser ? 'show' : ''\">\r\n        <div class=\"scroll-icon\">\r\n\r\n        </div>\r\n        <div class=\"scroll-label\">Scroll</div>\r\n    </div>\r\n</div>\r\n<div class=\"main-page-block-container-outer background-accent\">\r\n    <div class=\"main-content-container main-content-container-padding intro-block\">\r\n        <div class=\"main-content\">\r\n            <div class=\"main-page-block-container\">\r\n                <div class=\"main-page-block\">\r\n                    <div class=\"main-page-block-column\">\r\n                        <!-- <div class=\"main-page-block-heading\"></div> -->\r\n                        <div class=\"main-page-block-text\">\r\n                            Wir sind ein Unternehmen das sich auf auf die Prüfung buchhalterischer Daten und die\r\n                            Rückgewinnung von zu viel gezahlten Geldern spezialisiert. Im Rahmen unserer detaillierten\r\n                            Analyse Ihrer kreditorischen Daten können von uns Gelder zurück geholt werden, die bei Ihnen\r\n                            schon längst in Vergessenheit geraten sind.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"main-page-block-container-outer\">\r\n    <div class=\"main-content-container main-content-container-padding\">\r\n        <div class=\"main-content\">\r\n            <div class=\"main-page-block-container\" id=\"anker-service\">\r\n                <div class=\"main-page-block\">\r\n                    <div class=\"main-page-block-column image\">\r\n                        <div class=\"main-page-block-image-container left\">\r\n                            <img class=\"main-page-block-image\"\r\n                                [src]=\"'./../../assets/02_unser_service.jpg'\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"main-page-block-column\">\r\n                        <div class=\"main-page-block-index-container right\">\r\n                            <div class=\"main-page-block-index\">1</div>\r\n                        </div>\r\n                        <div class=\"main-page-block-heading\">Unser Service</div>\r\n                        <div class=\"main-page-block-text\">\r\n                            Nach unserer Erfahrung kommt es auch in Unternehmen zu Überzahlungen, die sowohl über moderne Finanzbuchhaltungssysteme mit inte grierten Prüfmechanismen verfügen als auch die Mitarbeiter gut geschult und motiviert sind. Das kann der zunehmenden Komplexität  verschuldet sein oder aber Personalengpässe/ Personalfluktuationen und steigendem Zeitdruck.\r\n                            <br /><br />\r\n                            Unser Service umfasst folgende Prüfungsfelder:\r\n                            <ul>\r\n                                <li>Fehlende Vergütungen aus Verträgen</li>\r\n                                <li>Doppelzahlungen</li>\r\n                                <li>Fehlende Vorsteuerabzüge</li>\r\n                                <li>Falschzahlungen</li>\r\n                                <li>Fehlende Skontoabzüge</li>\r\n                                <li>Fehlende Einfuhrumsatzsteuerabzüge</li>\r\n                            </ul>\r\n                            <br /><br />\r\n                            Im Regelfall dauert die Prüfung 2 - 3 Wochen in Abhängigkeit von der Anzahl Ihrer Kreditoren Rechnungen.\r\n                            <br /><br />\r\n                            Für kleinere und mittlere Unternehmen (bis max. 50 Mio. Umsatzerlöse im Jahr) bieten wir einen Schnellcheck an, der in max. 2 - 3 Tagen durchgeführt wird.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"main-page-block-container-outer\">\r\n    <div class=\"main-content-container main-content-container-padding background-accent\">\r\n        <div class=\"main-content\">\r\n            <div class=\"main-page-block-container\" id=\"anker-advantages\">\r\n                <div class=\"main-page-block\">\r\n                    <div class=\"main-page-block-column\">\r\n                        <div class=\"main-page-block-index-container left\">\r\n                            <div class=\"main-page-block-index\">2</div>\r\n                        </div>\r\n                        <div class=\"main-page-block-heading\">Ihr Vorteil</div>\r\n                        <div class=\"main-page-block-text\">\r\n                            <span style=\"font-weight: 600;\">Unser Service optimiert Ihren Gewinn und zeigt Ihnen Optimierungspotenzial bei Ihren Geschäftsprozessen auf!</span>\r\n                            <br /><br />\r\n                            Neben einem außerplanmäßigen Ertrag aus der Rückgewinnung ergeben sich folgende weitere Vorteile für Sie von denen Sie profitieren:\r\n                            <br /><br />\r\n                            <ul>\r\n                                <li>\r\n                                    Ihr Optimierungspotenzial bei Ihren Geschäftsprozessen wird Ihnen aufgezeigt\r\n                                </li>\r\n                                <li>\r\n                                    Sicherstellung, dass Ihnen Gelder nicht unnötig verloren gehen\r\n                                </li>\r\n                                <li>\r\n                                    Einsatz einer Spezialsoftware mit Prüfalgorithmen, die wir zur Steigerung der Effizienz und zum Vorteil für Sie ständig optim ier en\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"main-page-block-column image\">\r\n                        <div class=\"main-page-block-image-container right\">\r\n                            <img class=\"main-page-block-image\"\r\n                            [src]=\"'./../../assets/03_ihr_vorteil.jpg'\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"main-page-block-container-outer\">\r\n    <div class=\"main-content-container main-content-container-padding\">\r\n        <div class=\"main-content\">\r\n            <div class=\"main-page-block-container\" id=\"anker-process\">\r\n                <div class=\"main-page-block\">\r\n                    <div class=\"main-page-block-column image\">\r\n                        <div class=\"main-page-block-image-container left\">\r\n                            <img class=\"main-page-block-image\"\r\n                            [src]=\"'./../../assets/04_ablauf.jpg'\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"main-page-block-column\">\r\n                        <div class=\"main-page-block-index-container right\">\r\n                            <div class=\"main-page-block-index\">3</div>\r\n                        </div>\r\n                        <div class=\"main-page-block-heading\">Ablauf</div>\r\n                        <div class=\"main-page-block-text\">\r\n                            <span style=\"font-weight: 600;\">Wir arbeiten effizient und halten den Aufwand für Sie gering</span>\r\n                            <br /><br />\r\n                            Der Ablauf der Prüfung Ihrer kreditorischen Daten von der Daten-Bereitstellung bis zur Rückholung Ihrer Gelder stellt sich wie folgt dar:\r\n                            <br /><br />\r\n                            <span style=\"font-weight: 600;\">Datenübergabe</span>\r\n                            <br />\r\n                            Bereitstellung der für die Prüfung relevanten kreditorischen Buchhaltungsdaten.\r\n                            <br /><br />\r\n                            <span style=\"font-weight: 600;\">Datenanalyse</span>\r\n                            <br />\r\n                            Ihre Daten werden in unserer Spezial-Software nach Verdachtsfällen und Auffälligkeiten analysiert.\r\n                            <br /><br />\r\n                            <span style=\"font-weight: 600;\">Verifizierung der Verdachtsfälle in Ihrem System</span>\r\n                            <br />\r\n                            Verifizierung Ihrer Ansprüche in Ihrem Buchhaltungssystem und Ihren Rechnungsbelegen entweder über Remotezugriff oder bei Ihnen vor Ort.\r\n                            <br /><br />\r\n                            <span style=\"font-weight: 600;\">Rückholung Ihrer Gelder</span>\r\n                            <br />\r\n                            Wir werden immer fündig und holen in diesem Schritt konsequent Ihr Geld von Ihren Geschäftspartnern zurück.\r\n                            <br/><br/>\r\n                            Es gibt verschiedene Möglichkeiten Ihr Geld zurückzuholen:\r\n                            <br/>\r\n                            <ul>\r\n                                <li>wir überlassen Ihnen auf Wunsch die Rückholung komplett selbst durchzuführen</li>\r\n                                <li>wir bereiten Ihnen Serienbriefe vor, damit Sie die Gelder selbst rückholen</li>\r\n                                <li>wir übernehmen das komplette Forderungsmanagement für Sie</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"main-page-block-container-outer\">\r\n    <div class=\"main-content-container main-content-container-padding background-accent\">\r\n        <div class=\"main-content\">\r\n            <div class=\"main-page-block-container\" id=\"anker-privacy\">\r\n                <div class=\"main-page-block\">\r\n                    <div class=\"main-page-block-column\">\r\n                        <div class=\"main-page-block-index-container left\">\r\n                            <div class=\"main-page-block-index\">4</div>\r\n                        </div>\r\n                        <div class=\"main-page-block-heading\">Datenschutz</div>\r\n                        <div class=\"main-page-block-text\">\r\n                            <span style=\"font-weight: 600;\">Ihre Daten sind bei uns sicher und werden nach Prüfungsende vollständig unwiederbringlich gelöscht!</span>\r\n                            <br/><br/>\r\n                            Bei der Verarbeitung etwaiger personenbezogener Daten von Ihnen wird von uns streng darauf geachtet, dass die zur Datenverarbeitung überlassenen Daten für keine anderen Zwecke verwendet werden. Ihre Daten und sämtliche Kopien oder Duplikate werden nach Prüfungsende vollständig und unwiederbringlich gelöscht bzw. geschreddert.\r\n                            <br/><br/>\r\n                            Sämtliche erforderlichen technischen Maßnahmen wie Zugangskontrollen (Login Sperren, Firewall, Spamfilter, Virenscanner und Verschlüsselung der Datenträger) sowie Zutrittskontrollen (manuelles Schließsystem und Sicherheitsschlösser) werden von uns umgesetzt. Dies beinhaltet auch organisatorische Maßnahmen wie das Verwalten von Benutzerberechtigung oder auch die Verwendung von sicheren Passwörtern und vieles mehr.\r\n                            <br/><br/>\r\n                            Wir geben Ihnen hierzu gerne weiterführende Informationen oder senden Ihnen auf Anfrage eine vollständige Beschreibung unseres Datensicherheitskonzeptes zu.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"main-page-block-column image\">\r\n                        <div class=\"main-page-block-image-container right\">\r\n                            <img class=\"main-page-block-image\"\r\n                            [src]=\"'./../../assets/beatriz-perez-moya-XN4T2PVUUgk-unsplash.jpg'\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main-page-block-container-outer\" id=\"anker-about-us\">\r\n    <div class=\"main-content-container main-content-container-padding about-us-block\">\r\n        <div class=\"main-content\">\r\n            <div class=\"main-page-block-container\">\r\n                <div class=\"main-page-block\">\r\n                    <div class=\"main-page-block-column\">\r\n                        <div class=\"main-page-block-heading\">Über uns - Kreditorenrevision24</div>\r\n                        <div class=\"main-page-block-text\">\r\n                            <span style=\"font-weight: 600;\">Wir bieten neueste innovative Prüfkonzepte für die Rückholung Ihrer Gelder</span>\r\n                            <br/><br/>\r\n                            Die Kreditorenrevision24 stellt Ihren Kunden eine hervorragende Dienstleistung bereit.\r\n                            <br/><br/>\r\n                            Unsere Prüfer kommen ursprünglich aus Stabsfunktionen innerhalb des Finanz u. Rechnungswesen und verfügen deshalb über ein hervorragendes Wissen über interne betriebliche Prozesse.\r\n                            <br/><br/>\r\n                            Unsere Prüfalgorithmen und Prüfungsroutinen werden von uns ständig weiterentwickelt, um unseren Kunden eine qualitativ hochwertige Dienstleistung anbieten zu können, die immer auf dem neuesten Stand ist.\r\n                            <br/><br/>\r\n                            <span style=\"font-weight: 600;\">Unsere Mission: </span>Die Erwartungen unserer Kunden zu übertreffen\r\n                            <br/><br/>\r\n                            <span style=\"font-weight: 600;\">Unsere Vision: </span>Unseren besonderen Service Kunden auf der ganzen Welt zur Verfügung zu stellen\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main-page-block-container-outer reach-out-block\" id=\"anker-contact\">\r\n    <div class=\"main-page-block-container\">\r\n        <div class=\"main-page-block\">\r\n            <div class=\"main-page-block-column\">\r\n                <div class=\"reach-out-container\">\r\n                    <div class=\"reach-out-label\">Sie haben Fragen? Melden Sie sich telefonisch!</div>\r\n                    <div class=\"reach-out-option call\">07034-9478322</div>\r\n                </div>\r\n                <div class=\"spacer\"></div>\r\n                <div class=\"reach-out-container\">\r\n                    <div class=\"reach-out-label\">Oder kontaktieren Sie uns per E-Mail.</div>\r\n                    <div class=\"reach-out-option email\">lipp@kreditorenrevision24.de</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"main-page-section-container\">\r\n                <app-main-page-section *ngIf=\"philosophySection\" [sectiondata]='philosophySection' isFirstSection='true'></app-main-page-section>\r\n                <app-main-page-section *ngIf=\"blogSection\" [sectiondata]='blogSection'></app-main-page-section>\r\n                <app-main-page-section *ngIf=\"coursesSection\" [sectiondata]='coursesSection'></app-main-page-section>\r\n                <app-main-page-section *ngIf=\"performancesSection\" [sectiondata]='performancesSection'></app-main-page-section>\r\n                <app-main-page-section *ngIf=\"performancesSection\" [sectiondata]='teamSection'></app-main-page-section>\r\n                <app-main-page-section *ngIf=\"locationsSection\" [sectiondata]='locationsSection'></app-main-page-section>\r\n                <app-main-page-section *ngIf=\"contactSection\" [sectiondata]='contactSection'></app-main-page-section>\r\n            </div> -->\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/main-page/main-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\ndiv {\n  display: block; }\n.main-page-title-video-container {\n  position: relative;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  height: 85%;\n  z-index: -1; }\n.main-page-title-video-container iframe, .main-page-title-video-container video {\n    opacity: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: calc(100% - 70px);\n    margin-top: 70px;\n    background-color: #fff;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover; }\n.main-page-title-video-container video {\n    opacity: 0;\n    transition: opacity 0.5s ease;\n    transition-delay: 1s; }\n.main-page-title-video-container video.show {\n      opacity: 1; }\n.main-page-title-video-container .title-image-container {\n    position: relative;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    transition: opacity 1s ease; }\n.main-page-title-video-container .title-image-container.show {\n      opacity: 1; }\n.main-page-title-video-container .title-image-container.show .title-image {\n        -webkit-animation: slow-zoom-image-out 20s ease forwards, fade-in 2s ease forwards;\n                animation: slow-zoom-image-out 20s ease forwards, fade-in 2s ease forwards; }\n.main-page-title-video-container .title-image-container .title-image {\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      -o-object-fit: cover;\n         object-fit: cover; }\n.main-page-title-video-container .title-image-container .title-image.non-mobile {\n        display: none; }\n.main-page-title-video-container .title-image-container .title-image-overlay {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%; }\n.main-page-title-video-container .video-overlay {\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    opacity: 1;\n    background-color: #fff;\n    height: 100%;\n    opacity: 0;\n    transition: opacity 1.5s ease; }\n.main-page-title-video-container .video-overlay.hide {\n      opacity: 0; }\n.main-page-title-video-container .title-container {\n    height: 100%;\n    top: 0;\n    display: flex;\n    -moz-flex-direction: column;\n    flex-direction: column;\n    color: #1f1f1f;\n    transition: opacity 0.5s ease;\n    opacity: 1; }\n.main-page-title-video-container .title-container.hide {\n      opacity: 0; }\n.main-page-title-video-container .title-container .title, .main-page-title-video-container .title-container .sub-title, .main-page-title-video-container .title-container .intro-text {\n      color: white;\n      max-width: 450px;\n      opacity: 0;\n      -webkit-animation-name: fade-in;\n              animation-name: fade-in;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-timing-function: ease;\n              animation-timing-function: ease;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-animation-delay: 1.5s;\n              animation-delay: 1.5s;\n      font-weight: 600; }\n.main-page-title-video-container .title-container .title {\n      text-transform: uppercase;\n      font-size: 30px;\n      line-height: 40px; }\n.main-page-title-video-container .title-container .sub-title {\n      text-transform: lowercase;\n      padding: 0;\n      margin-top: 50px;\n      font-size: 20px;\n      margin-bottom: 70px; }\n.main-page-title-video-container .title-container .intro-text {\n      display: none;\n      max-width: 450px;\n      font-size: 20px;\n      line-height: 30px;\n      margin-top: 50px; }\n.main-page-title-video-container .title-container .logo-container {\n      margin-bottom: 10px; }\n.main-page-title-video-container .title-container .logo-container .logo {\n        margin: 0 auto;\n        background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABzCAYAAADJ7BGMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAEEWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkRBN0NFNjgxQTMzQzExRTI4MjU2RTBBMkQ5MzEyODBCPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkRBN0NFNjgyQTMzQzExRTI4MjU2RTBBMkQ5MzEyODBCPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkRBN0NFNjg0QTMzQzExRTI4MjU2RTBB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\");\n        background-size: 100% 100%;\n        height: 75px;\n        width: 30px;\n        -webkit-transform: translateY(15px);\n                transform: translateY(15px);\n        opacity: 0;\n        -webkit-animation: fade-in 1s ease forwards, slide-up 1s ease forwards;\n                animation: fade-in 1s ease forwards, slide-up 1s ease forwards;\n        -webkit-animation-delay: 4.5s;\n                animation-delay: 4.5s; }\n.main-page-title-video-container .title-container .play-icon-container {\n      z-index: 1;\n      width: 100%;\n      position: relative;\n      margin-top: 100px;\n      flex: 1; }\n.main-page-title-video-container .title-container .play-icon-container .play-icon-outer-ring {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        display: inline-block;\n        display: none;\n        margin-top: -45px;\n        margin-left: -45px;\n        background-color: rgba(255, 255, 255, 0.3);\n        border-radius: 70px;\n        width: 90px;\n        height: 90px;\n        opacity: 0;\n        -webkit-animation-name: fade-in;\n                animation-name: fade-in;\n        -webkit-animation-duration: 0.5s;\n                animation-duration: 0.5s;\n        -webkit-animation-timing-function: ease;\n                animation-timing-function: ease;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        -webkit-animation-delay: 3s;\n                animation-delay: 3s;\n        transition: background-color 0.3s ease; }\n.main-page-title-video-container .title-container .play-icon-container .play-icon-outer-ring:hover {\n          cursor: pointer;\n          background-color: rgba(31, 31, 31, 0.2); }\n.main-page-title-video-container .title-container .play-icon-container .play-icon-outer-ring .play-icon-inner-ring {\n          width: 70px;\n          height: 70px;\n          margin-left: 9px;\n          margin-top: 9px;\n          border-radius: 90px;\n          border: 1px solid #1f1f1f; }\n.main-page-title-video-container .title-container .play-icon-container .play-icon-outer-ring .play-icon-inner-ring .play-icon {\n            display: inline-block;\n            margin-top: 28px;\n            margin-left: 28px;\n            color: #1f1f1f; }\n.main-page-title-video-container .title-container .play-icon-container .play-icon-outer-ring .play-icon-inner-ring .play-icon-label {\n            display: inline-block;\n            color: #252525; }\n.main-page-title-video-container .scroll-icon-container {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    opacity: 0;\n    transition: opacity 0.5s 3s ease; }\n.main-page-title-video-container .scroll-icon-container .scroll-icon {\n      width: 2px;\n      height: 0px;\n      background-color: white;\n      margin: 0 auto;\n      transition: height 0.5s ease; }\n.main-page-title-video-container .scroll-icon-container .scroll-label {\n      position: absolute;\n      bottom: 8px;\n      left: calc(50% + 15px);\n      color: white;\n      font-size: 10px;\n      font-weight: 600;\n      text-transform: uppercase;\n      opacity: 0;\n      transition: opacity 0.5s ease; }\n.main-page-title-video-container .scroll-icon-container.show {\n      opacity: 1; }\n.main-page-title-video-container .scroll-icon-container.show .scroll-icon {\n        height: 30px; }\n.main-page-title-video-container .scroll-icon-container.show .scroll-label {\n        opacity: 1; }\n.main-page-block-container-outer {\n  overflow: hidden;\n  width: 100%; }\n.main-page-block-container-outer .main-page-block-container {\n    width: 100%; }\n.main-page-block-container-outer .main-page-block-container .main-page-block {\n      display: flex;\n      padding-top: 100px;\n      padding-bottom: 100px; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column {\n        width: 100%;\n        position: relative; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column.image {\n          display: none; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-index-container {\n          display: none;\n          position: absolute;\n          font-size: 400px;\n          font-family: Arial, sans-serif;\n          font-weight: bold;\n          z-index: -1;\n          color: #f38e5d;\n          background: -webkit-linear-gradient(rgba(255, 89, 109, 0.01), rgba(250, 29, 56, 0.15));\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n          line-height: 400px;\n          z-index: 1; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-index-container.left {\n            left: -100px; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-index-container.right {\n            right: -100px; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-heading {\n          font-size: 2em;\n          font-weight: 600;\n          margin-bottom: 50px;\n          position: relative;\n          z-index: 1; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-text {\n          position: relative;\n          z-index: 1; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-image-container {\n          text-align: center; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-image-container.left {\n            padding-right: 50px; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-image-container.right {\n            padding-left: 50px; }\n.main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-image-container .main-page-block-image {\n            width: 100%; }\n.intro-block .main-page-block-container .main-page-block .main-page-block-column, .about-us-block .main-page-block-container .main-page-block .main-page-block-column {\n  font-size: 1.2em;\n  margin: 0 auto; }\n.intro-block .main-page-block-container .main-page-block {\n  padding-top: 50px; }\n.intro-block .main-page-block-container .main-page-block .main-page-block-column {\n    color: #1f1f1f; }\n.reach-out-block {\n  background-color: #30404d; }\n.reach-out-block .main-page-block-container {\n    background-color: #25323c; }\n.reach-out-block .main-page-block-container .main-page-block {\n      padding: 0; }\n.reach-out-block .main-page-block-container .main-page-block .main-page-block-column {\n        width: 100%; }\n.reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-label, .reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-option {\n          font-size: 14px;\n          font-weight: 600;\n          line-height: 48px;\n          color: white; }\n.reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-label {\n          text-align: center;\n          height: 50px; }\n.reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-option {\n          height: 50px;\n          text-align: center; }\n.reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-option.call {\n            background-color: green;\n            background: linear-gradient(80deg, #36691d, #7bb85d); }\n.reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-option.email {\n            background-color: #2d5cff;\n            background: linear-gradient(80deg, #20418b, #2875c6); }\n.background-accent {\n  background-color: #f9fafc; }\n@media (min-width: 768px) {\n  .main-page-title-video-container {\n    display: block; }\n    .main-page-title-video-container .title-container .play-icon-container {\n      display: none; }\n    .main-page-title-video-container .title-container .title, .main-page-title-video-container .title-container .sub-title, .main-page-title-video-container .title-container .intro-text {\n      max-width: 700px; }\n    .main-page-title-video-container .title-container .title {\n      font-size: 50px;\n      line-height: 60px;\n      margin-top: 250px; }\n    .main-page-title-video-container .title-container .sub-title {\n      font-size: 25px;\n      text-align: right;\n      display: block;\n      width: 100%; }\n  .reach-out-block {\n    background-color: #30404d; }\n    .reach-out-block .main-page-block-container .main-page-block {\n      padding-top: 50px;\n      padding-bottom: 50px; }\n      .reach-out-block .main-page-block-container .main-page-block .main-page-block-column {\n        margin: 0 auto; }\n        .reach-out-block .main-page-block-container .main-page-block .main-page-block-column .spacer {\n          height: 30px;\n          width: 100%; }\n        .reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container {\n          overflow: hidden;\n          max-width: 700px;\n          display: flex;\n          height: 50px;\n          margin: 0px auto;\n          background-color: #00000075;\n          border-radius: 50px; }\n          .reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-label, .reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-option {\n            padding: 0 30px;\n            font-size: 14px;\n            font-weight: 600;\n            line-height: 48px;\n            color: white; }\n          .reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-label {\n            background-color: rgba(0, 0, 0, 0.5);\n            flex: 1; }\n          .reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-option {\n            text-align: center;\n            min-width: 200px; }\n            .reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-option.call {\n              background-color: green;\n              background: linear-gradient(80deg, #36691d, #7bb85d); }\n            .reach-out-block .main-page-block-container .main-page-block .main-page-block-column .reach-out-container .reach-out-option.email {\n              background-color: #2d5cff;\n              background: linear-gradient(80deg, #20418b, #2875c6); } }\n@media (min-width: 992px) {\n  .main-page-title-video-container {\n    height: 80%; }\n    .main-page-title-video-container .title-image-container .title-image.mobile {\n      display: none; }\n    .main-page-title-video-container .title-image-container .title-image.non-mobile {\n      display: block; }\n    .main-page-title-video-container .title-container .intro-text {\n      display: block; }\n  .main-page-block-container-outer .main-page-block-container .main-page-block {\n    padding-top: 150px; }\n    .main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column {\n      max-width: 50%; }\n      .main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column.image {\n        display: block; }\n      .main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-index-container {\n        font-size: 600px;\n        line-height: 600px; }\n        .main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-index-container.left {\n          left: -200px; }\n        .main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-index-container.right {\n          right: -200px; }\n      .main-page-block-container-outer .main-page-block-container .main-page-block .main-page-block-column .main-page-block-text {\n        font-size: 1.2em; }\n  .main-page-block-container-outer .intro-block {\n    display: none; }\n    .main-page-block-container-outer .intro-block .main-page-block .main-page-block-column {\n      font-size: 1.5em; }\n  .reach-out-block .main-page-block-container .main-page-block {\n    padding-top: 50px; } }\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_service_1 = __webpack_require__(/*! ./../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(dynamicContentService, modelService, domSanitizer) {
        this.dynamicContentService = dynamicContentService;
        this.modelService = modelService;
        this.domSanitizer = domSanitizer;
        this.contentLoaded = false;
        this.loadVideoTimeout = 8000;
        this.removeVideo = false;
        this.titleImageLoaded = false;
        this.displayTitleImage = false;
        this.videoLoaded = false;
        this.showTitleImageTimeout = 0;
        this.showTitleImageTimeoutPassed = false;
        this.playVideo = false;
        this.pageLoaded = false;
        this.showTitleTimeout = false;
        this.hideTitle = false;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageLoaded = this.modelService.setPageLoaded(false);
        this.hideTitle = false;
        this.isBrowser = this.modelService.isPlatformBrowser();
        if (this.isBrowser) {
            this.isBrowser = true;
            console.log('platform is browser');
        }
        else {
            this.isBrowser = false;
            console.log('platform is server');
        }
        this.mainPageListShortId = zenkit_collections_1.ZenkitCollections.home.shortId;
        this.modelService.getMainPageSections().then(function (mainPageData) {
            _this.youtubeVideoId = mainPageData.youtubeVideoId;
            _this.philosophySection = mainPageData.philosophySection;
            _this.blogSection = mainPageData.blogSection;
            _this.coursesSection = mainPageData.coursesSection;
            _this.performancesSection = mainPageData.performancesSection;
            _this.teamSection = mainPageData.teamSection;
            _this.locationsSection = mainPageData.locationsSection;
            _this.contactSection = mainPageData.contactSection;
            _this.videoFileSection = mainPageData.videoFileSection;
            _this.titleImageSection = mainPageData.titleImageSection;
            _this.contentLoaded = true;
            _this.pageLoaded = _this.modelService.setPageLoaded(true);
            if (_this.isBrowser) {
                // remove video timeout
                setTimeout(function () {
                    if (_this.videoLoaded === false) {
                        _this.removeVideo = true;
                    }
                }, _this.loadVideoTimeout);
                // play video after this timeout
                setTimeout(function () {
                    _this.showTitleImageTimeoutPassed = true;
                }, _this.showTitleImageTimeout);
            }
        });
    };
    MainPageComponent.prototype.getFileSrc = function (file) {
        return "./../../assets/01_startseite_bg.jpg";
        // return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
        // return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.mainPageListShortId);
    };
    MainPageComponent.prototype.setVideoElement = function () {
        if (_.isNil(this.videoElement)) {
            this.videoElement = document.getElementById('video');
        }
        return this.videoElement;
    };
    MainPageComponent.prototype.getYoutubeLink = function () {
        // tslint:disable-next-line:max-line-length
        var url = 'https://www.youtube.com/embed/' + this.youtubeVideoId + '?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=' + this.youtubeVideoId;
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    MainPageComponent.prototype.getBackgroundStyle = function (image) {
        var backgroundStyle = {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
        return backgroundStyle;
    };
    MainPageComponent.prototype.playVideoButtonClicked = function () {
        this.hideTitle = true;
        this.displayTitleImage = false;
    };
    MainPageComponent.prototype.imageLoaded = function () {
        console.log('title image loaded!');
        this.titleImageLoaded = true;
        this.checkIfTitleImageShouldBeDisplayed();
    };
    MainPageComponent.prototype.checkIfTitleImageShouldBeDisplayed = function () {
        var _this = this;
        if (this.isBrowser) {
            if (this.showTitleImageTimeoutPassed) {
                this.displayTitleImage = true;
            }
            else {
                setTimeout(function () {
                    _this.checkIfTitleImageShouldBeDisplayed();
                }, 200);
            }
        }
    };
    MainPageComponent.prototype.videoDataLoaded = function () {
        console.log('title video loaded!');
        this.videoLoaded = true;
        this.checkIfVideoShouldBePlayed();
    };
    MainPageComponent.prototype.checkIfVideoShouldBePlayed = function () {
        var _this = this;
        if (this.isBrowser) {
            if (this.showTitleImageTimeoutPassed) {
                this.setVideoElement();
                this.videoElement.muted = true;
                this.videoElement.autoplay = true;
                this.videoElement.play();
                this.playVideo = true;
            }
            else {
                setTimeout(function () {
                    _this.checkIfVideoShouldBePlayed();
                }, 200);
            }
        }
    };
    MainPageComponent = __decorate([
        core_1.Component({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/main-page/main-page.component.scss")]
        }),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService,
            model_service_1.ModelService,
            platform_browser_1.DomSanitizer])
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;


/***/ }),

/***/ "./src/app/main-page/text-animation/text-animation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main-page/text-animation/text-animation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-animation-container\" [ngStyle]=\"getStyle()\">\r\n  <span>{{text}}&nbsp;</span>\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/text-animation/text-animation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main-page/text-animation/text-animation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.text-animation-container {\n  display: inline-block;\n  text-transform: uppercase;\n  -webkit-transform: translateY(15px);\n          transform: translateY(15px);\n  opacity: 0;\n  -webkit-animation-name: fade-in, slide-down;\n          animation-name: fade-in, slide-down;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  font-size: 34px;\n  line-height: 40px;\n  font-weight: 600; }\n"

/***/ }),

/***/ "./src/app/main-page/text-animation/text-animation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main-page/text-animation/text-animation.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var TextAnimationComponent = /** @class */ (function () {
    function TextAnimationComponent(dynamicContentService, router) {
        this.dynamicContentService = dynamicContentService;
        this.router = router;
    }
    TextAnimationComponent.prototype.ngOnInit = function () {
        this.text = this.textParam;
        this.animationDelay = this.animationDelayParam;
        this.animationDuration = this.animationDurationParam;
    };
    TextAnimationComponent.prototype.getStyle = function () {
        return {
            'animation-duration': this.animationDuration,
            'animation-delay': this.animationDelay
        };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TextAnimationComponent.prototype, "animationDelayParam", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TextAnimationComponent.prototype, "animationDurationParam", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TextAnimationComponent.prototype, "textParam", void 0);
    TextAnimationComponent = __decorate([
        core_1.Component({
            selector: 'app-text-animation',
            template: __webpack_require__(/*! ./text-animation.component.html */ "./src/app/main-page/text-animation/text-animation.component.html"),
            styles: [__webpack_require__(/*! ./text-animation.component.scss */ "./src/app/main-page/text-animation/text-animation.component.scss")]
        }),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService, router_1.Router])
    ], TextAnimationComponent);
    return TextAnimationComponent;
}());
exports.TextAnimationComponent = TextAnimationComponent;


/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var contact_1 = __webpack_require__(/*! ./../classes/contact */ "./src/app/classes/contact.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var ContactService = /** @class */ (function () {
    function ContactService(dynamicContentService) {
        this.dynamicContentService = dynamicContentService;
    }
    ContactService.prototype.getContact = function () {
        return this.dynamicContentService
            .fetchAndTransformZenkitListData(zenkit_collections_1.ZenkitCollections.contact.shortId)
            .then(function (zenkitListData) {
            var modifiedEntry = _.head(zenkitListData.entries);
            var contact = new contact_1.Contact();
            contact.name = modifiedEntry.name;
            contact.email = modifiedEntry.email;
            contact.phone = modifiedEntry.phone;
            contact.imprint = modifiedEntry.imprint;
            contact.description = modifiedEntry.description;
            contact.image = _.head(modifiedEntry.image);
            contact.privacy = modifiedEntry.privacy;
            return contact;
        });
    };
    ContactService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;


/***/ }),

/***/ "./src/app/services/courses.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/courses.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var course_data_1 = __webpack_require__(/*! ../classes/course-data */ "./src/app/classes/course-data.ts");
var course_information_1 = __webpack_require__(/*! ../classes/course-information */ "./src/app/classes/course-information.ts");
var CoursesService = /** @class */ (function () {
    function CoursesService(dynamicContentService) {
        this.dynamicContentService = dynamicContentService;
    }
    CoursesService.prototype.getCourses = function () {
        return this.dynamicContentService
            .fetchAndTransformZenkitListData(zenkit_collections_1.ZenkitCollections.courses.shortId)
            .then(function (zenkitListData) {
            var pricesEntry = _.find(zenkitListData.entries, {
                label: 'Preise'
            });
            var scheduleMGEntry = _.find(zenkitListData.entries, {
                label: 'Stundenplan Markgroeningen'
            });
            var scheduleLBEntry = _.find(zenkitListData.entries, {
                label: 'Stundenplan Ludwigsburg'
            });
            var registrationChildEntry = _.find(zenkitListData.entries, {
                label: 'Anmeldung Kind'
            });
            var registrationAdultEntry = _.find(zenkitListData.entries, {
                label: 'Anmeldung Erwachsener'
            });
            var courseEntries = _.filter(zenkitListData.entries, {
                label: 'Kurs'
            });
            var courseData = new course_data_1.CourseData();
            courseData.text = pricesEntry.description;
            // courseData.scheduleMG = _.head(scheduleMGEntry.file);
            // courseData.scheduleLB = _.head(scheduleLBEntry.file);
            // courseData.registrationChild = _.head(registrationChildEntry.file);
            // courseData.registrationAdult = _.head(registrationAdultEntry.file);
            courseData.courses = _.map(courseEntries, function (courseEntry) {
                var course = new course_information_1.CourseInformation();
                course.uuid = courseEntry.uuid;
                course.shortId = courseEntry.shortId;
                course.title = courseEntry.title;
                course.description = courseEntry.description;
                course.image = _.head(courseEntry.image);
                course.youtubeId = courseEntry.youtubeId;
                course.appointmentUuids = courseEntry.appointmentUuids;
                return course;
            });
            return courseData;
        });
    };
    CoursesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService])
    ], CoursesService);
    return CoursesService;
}());
exports.CoursesService = CoursesService;


/***/ }),

/***/ "./src/app/services/current.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/current.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_service_1 = __webpack_require__(/*! ./utility.service */ "./src/app/services/utility.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var dynamic_content_service_1 = __webpack_require__(/*! ./dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var blog_post_1 = __webpack_require__(/*! ../classes/blog-post */ "./src/app/classes/blog-post.ts");
var CurrentService = /** @class */ (function () {
    function CurrentService(dynamicContentService, utilityService) {
        this.dynamicContentService = dynamicContentService;
        this.utilityService = utilityService;
    }
    CurrentService.prototype.getPosts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dynamicContentService
                .fetchAndTransformZenkitListData(zenkit_collections_1.ZenkitCollections.current.shortId)
                .then(function (zenkitListData) {
                var posts = _.map(zenkitListData.entries, function (modifiedEntry) {
                    var blogPost = new blog_post_1.BlogPost();
                    blogPost.shortId = modifiedEntry.shortId;
                    blogPost.title = modifiedEntry.title;
                    blogPost.description = modifiedEntry.description;
                    blogPost.images = modifiedEntry.images;
                    blogPost.youtubeVideoId = modifiedEntry.youtubeVideoId;
                    blogPost.date = modifiedEntry.date;
                    if (_.isNil(modifiedEntry.date) === false) {
                        blogPost.date = new Date(modifiedEntry.date);
                    }
                    if (blogPost.title && blogPost.date) {
                        var dateString = _this.utilityService.convertDateToString(blogPost.date);
                        blogPost.routerLink =
                            '/blog/' +
                                blogPost.shortId +
                                '/' +
                                _this.utilityService.convertStringToUrlId(blogPost.title) +
                                '/' +
                                _this.utilityService.convertStringToUrlId(dateString);
                    }
                    else {
                        blogPost.routerLink = '/blog/' + blogPost.shortId;
                    }
                    return blogPost;
                });
                posts = posts.reverse(); // newest posts should be first
                return resolve(posts);
            });
        });
    };
    CurrentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService,
            utility_service_1.UtilityService])
    ], CurrentService);
    return CurrentService;
}());
exports.CurrentService = CurrentService;


/***/ }),

/***/ "./src/app/services/dynamic-content.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/dynamic-content.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var element_types_1 = __webpack_require__(/*! ./../shared/constants/element_types */ "./src/app/shared/constants/element_types.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
__webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var DynamicContentService = /** @class */ (function () {
    function DynamicContentService(http) {
        this.http = http;
        // production
        this.apiUrl = 'https://zenkit.com/api/v1/';
        this.apiToken = '123456789';
    }
    // development
    // apiUrl = 'https://localhost:9000/api/v1/';
    // Only necessary if zenkit collection is not public
    // TODO: Remove before release
    // headers.append('Authorization', 'Bearer ' + this.apiToken);
    DynamicContentService.prototype.getTestDataWithPromise = function (listId) {
        var headers = new http_1.Headers();
        return this.http
            .get(this.apiUrl + 'lists/' + listId + '/elements', { headers: headers })
            .toPromise().then(function (res) {
            return new Promise(function (resolve, reject) {
                return resolve(res.json());
            });
        });
    };
    DynamicContentService.prototype.fetchAndTransformZenkitListData = function (listShortId) {
        var _this = this;
        return this.fetchZenkitListData(listShortId)
            .then(function (results) {
            return _this.transformZenkitListData(results);
        });
    };
    DynamicContentService.prototype.fetchList = function (listId) {
        var headers = new http_1.Headers();
        // headers.append('Authorization', 'Bearer ' + this.apiToken);
        return this.http
            .get(this.apiUrl + 'lists/' + listId, { headers: headers })
            .toPromise();
    };
    DynamicContentService.prototype.fetchListElements = function (listId) {
        var headers = new http_1.Headers();
        // headers.append('Authorization', 'Bearer ' + this.apiToken);
        return this.http
            .get(this.apiUrl + 'lists/' + listId + '/elements', { headers: headers })
            .toPromise();
    };
    DynamicContentService.prototype.fetchListEntriesInKanbanMode = function (elementIdX, listId) {
        var headers = new http_1.Headers();
        // headers.append('Authorization', 'Bearer ' + this.apiToken);
        var httpRequestBody = {
            filter: {
                AND: {
                    TERMS: []
                }
            },
            elementIdX: elementIdX
        };
        return this.http
            .post(this.apiUrl + 'lists/' + listId + '/entries/filter/kanban', httpRequestBody, { headers: headers })
            .toPromise();
    };
    DynamicContentService.prototype.fetchZenkitListData = function (listId) {
        var _this = this;
        return Promise.all([this.fetchList(listId), this.fetchListElements(listId)]).then(function (results) {
            var listResponse = results[0];
            var elementsResponse = results[1];
            if (listResponse.status === 403 || listResponse.status === 403) {
                throw new Error('It seems like you do not have permission to access this collection');
            }
            if (listResponse.status !== 200 || listResponse.status !== 200) {
                throw new Error('Collection not found.');
            }
            return Promise.all([listResponse.json(), elementsResponse.json()]).then(function (results) {
                var listJson = results[0];
                var elementsJson = results[1];
                var sectionElement = _.find(elementsJson, {
                    name: 'Labels',
                    elementcategory: 6
                });
                if (_.has(sectionElement, ['id']) === false) {
                    // tslint:disable-next-line:max-line-length
                    throw new Error('Missing Section Field! Please define a field called "Labels" for the Zenkit Collection ' + listJson.name + '.');
                }
                return _this.fetchListEntriesInKanbanMode(sectionElement.id, listId)
                    .then(function (entriesResponse) {
                    if (entriesResponse.status === 403) {
                        throw new Error('It seems like you do not have permission to access this collection (Collection ID:' + listId + ').');
                    }
                    if (entriesResponse.status !== 200) {
                        throw new Error('Collection not found (Collection ID: ' + listId + ').');
                    }
                    var entriesJson = entriesResponse.json();
                    return {
                        list: listJson,
                        elements: elementsJson,
                        kanbanEntries: entriesJson,
                        sectionElement: sectionElement
                    };
                });
            });
        });
    };
    DynamicContentService.prototype.transformZenkitListData = function (params) {
        var getZenkitCollection = function (list) {
            return _.find(zenkit_collections_1.ZenkitCollections, {
                shortId: list.shortId
            });
        };
        var zenkitCollection = getZenkitCollection(params.list);
        var predefinedCategories = {};
        var modifiedRequiredElements = _
            .map(zenkitCollection.requiredElements, function (requiredElement) {
            var fullElement = _.find(params.elements, {
                name: requiredElement.name
            });
            if (_.isNil(fullElement)) {
                throw new Error('Element ' + requiredElement.name + ' in the Collection ' + params.list.name + ' was not found.');
            }
            // Save element data for labels
            if (_.isEqual(requiredElement.type, element_types_1.ElementTypes.labels)) {
                requiredElement.predefinedCategories = fullElement.elementData.predefinedCategories;
                var predefinedCategory = _.map(requiredElement.predefinedCategories, function (c) {
                    return {
                        name: c.name,
                        id: c.id,
                        colorHex: c.colorHex
                    };
                });
                predefinedCategories[requiredElement.mappedClassPropertyName] = (predefinedCategory);
            }
            requiredElement.uuid = fullElement.uuid;
            return requiredElement;
        });
        var modifiedEntries = _
            .map(params.kanbanEntries.kanbanData, function (entry) {
            var labelIds = entry[params.sectionElement.uuid + '_categories'];
            var label = _.find(params.sectionElement.elementData.predefinedCategories, {
                id: _.head(labelIds)
            });
            var simplifiedEntry = {
                label: _.get(label, ['name']),
                uuid: entry.uuid,
                shortId: entry.shortId
            };
            return _.reduce(modifiedRequiredElements, function (modifiedEntry, modifiedElement) {
                // Handle label elements
                var value;
                if (_.isEqual(modifiedElement.type, element_types_1.ElementTypes.labels)) {
                    var labelsIds1 = entry[modifiedElement.uuid + '_' + modifiedElement.type.category];
                    if (_.isEmpty(labelsIds1) === false) {
                        value = _.map(labelsIds1, function (labelId) {
                            var label = _.find(modifiedElement.predefinedCategories, {
                                id: labelId
                            });
                            return _.get(label, ['name']);
                        });
                    }
                    // Handle other elements
                }
                else {
                    value = entry[modifiedElement.uuid + '_' + modifiedElement.type.category];
                }
                modifiedEntry[modifiedElement.mappedClassPropertyName] = value;
                return modifiedEntry;
            }, simplifiedEntry);
        });
        return new Promise(function (resolve, reject) {
            return resolve({
                entries: modifiedEntries,
                prefefinedCategories: predefinedCategories
            });
        });
    };
    DynamicContentService.prototype.getFileSrc = function (fileShortId, listShortId) {
        return (fileShortId && listShortId) ? this.apiUrl + 'lists/' + listShortId + '/files/' + fileShortId : '';
    };
    DynamicContentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DynamicContentService);
    return DynamicContentService;
}());
exports.DynamicContentService = DynamicContentService;


/***/ }),

/***/ "./src/app/services/imprint.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/imprint.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var dynamic_content_service_1 = __webpack_require__(/*! ./dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var imprint_1 = __webpack_require__(/*! ../classes/imprint */ "./src/app/classes/imprint.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var ImprintService = /** @class */ (function () {
    function ImprintService(dynamicContentService) {
        this.dynamicContentService = dynamicContentService;
    }
    ImprintService.prototype.getEntries = function () {
        return this.dynamicContentService
            .fetchAndTransformZenkitListData(zenkit_collections_1.ZenkitCollections.imprint.shortId)
            .then(function (zenkitListData) {
            var entries = _.map(zenkitListData.entries, function (modifiedEntry) {
                var entry = new imprint_1.Imprint();
                entry.title = modifiedEntry.title;
                entry.description = modifiedEntry.description;
                return entry;
            });
            return entries;
        });
    };
    ImprintService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService])
    ], ImprintService);
    return ImprintService;
}());
exports.ImprintService = ImprintService;


/***/ }),

/***/ "./src/app/services/locations.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/locations.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var location_1 = __webpack_require__(/*! ./../classes/location */ "./src/app/classes/location.ts");
var location_data_1 = __webpack_require__(/*! ./../classes/location-data */ "./src/app/classes/location-data.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var LocationsService = /** @class */ (function () {
    function LocationsService(dynamicContentService) {
        this.dynamicContentService = dynamicContentService;
    }
    LocationsService.prototype.getLocationData = function () {
        return this.dynamicContentService
            .fetchAndTransformZenkitListData(zenkit_collections_1.ZenkitCollections.locations.shortId)
            .then(function (zenkitListData) {
            var locations = _.map(zenkitListData.entries, function (modifiedEntry) {
                var location = new location_1.Location();
                location.uuid = modifiedEntry.uuid;
                location.shortId = modifiedEntry.shortId;
                location.name = modifiedEntry.name;
                location.addressName = modifiedEntry.addressName;
                location.addressStreet = modifiedEntry.addressStreet;
                location.addressZIP = modifiedEntry.addressZIP;
                location.addressCity = modifiedEntry.addressCity;
                location.description = modifiedEntry.description;
                location.image = _.head(modifiedEntry.image);
                location.gallery = modifiedEntry.gallery;
                location.embed = modifiedEntry.embed;
                location.initials = modifiedEntry.initials;
                location.consultationTime1 = modifiedEntry.consultationTime1;
                location.consultationTime2 = modifiedEntry.consultationTime2;
                location.consultationTime3 = modifiedEntry.consultationTime3;
                return location;
            });
            var locationYW = _.find(locations, {
                initials: 'YW'
            });
            var locationData = new location_data_1.LocationData();
            locationData.locationYW = locationYW;
            locationData.allLocations = locations;
            return locationData;
        });
    };
    LocationsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService])
    ], LocationsService);
    return LocationsService;
}());
exports.LocationsService = LocationsService;


/***/ }),

/***/ "./src/app/services/main-page.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/main-page.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_page_section_types_1 = __webpack_require__(/*! ./../shared/constants/main-page-section-types */ "./src/app/shared/constants/main-page-section-types.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var main_page_section_1 = __webpack_require__(/*! ./../classes/main-page-section */ "./src/app/classes/main-page-section.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var main_page_data_1 = __webpack_require__(/*! ../classes/main-page-data */ "./src/app/classes/main-page-data.ts");
var MainPageService = /** @class */ (function () {
    function MainPageService(dynamicContentService) {
        this.dynamicContentService = dynamicContentService;
    }
    MainPageService.prototype.getMainPageSections = function () {
        return this.dynamicContentService
            .fetchAndTransformZenkitListData(zenkit_collections_1.ZenkitCollections.home.shortId)
            .then(function (zenkitListData) {
            var mainPageSections = _.map(zenkitListData.entries, function (modifiedEntry) {
                var mainPageSection = new main_page_section_1.MainPageSection();
                mainPageSection.title = modifiedEntry.title;
                mainPageSection.description = modifiedEntry.description;
                mainPageSection.image = _.head(modifiedEntry.image);
                mainPageSection.youtubeVideoId = modifiedEntry.youtubeVideoId;
                var sectionType = _.find(main_page_section_types_1.MainPageSectionTypes, {
                    name: modifiedEntry.title
                });
                mainPageSection.cssClass = _.get(sectionType, ['cssClass']);
                mainPageSection.routerLink = _.get(sectionType, ['routerLink']);
                return mainPageSection;
            });
            var getSection = function (sectionName) {
                var section = _.head(_.remove(mainPageSections, {
                    title: sectionName
                }));
                if (_.isNil(section)) {
                    console.log('Section "' + sectionName + '" was not found');
                }
                return section;
            };
            var videoSection = getSection('Video');
            var philosophySection = getSection('Kundaliniyoga');
            var blogSection = getSection('Neuigkeiten');
            var coursesSection = getSection('Kurse');
            var performancesSection = getSection('Auftritte');
            var teamSection = getSection('Ueber mich');
            var locationsSection = getSection('Standorte');
            var contactSection = getSection('Kontakt');
            var videoFileSection = getSection('Videodatei');
            var titleImageSection = getSection('Titelbild');
            var mainPageData = new main_page_data_1.MainPageData();
            mainPageData.youtubeVideoId = _.get(videoSection, ['youtubeVideoId']);
            mainPageData.philosophySection = philosophySection;
            mainPageData.blogSection = blogSection;
            mainPageData.coursesSection = coursesSection;
            mainPageData.performancesSection = performancesSection;
            mainPageData.teamSection = teamSection;
            mainPageData.locationsSection = locationsSection;
            mainPageData.contactSection = contactSection;
            mainPageData.videoFileSection = videoFileSection;
            mainPageData.titleImageSection = titleImageSection;
            return mainPageData;
        });
    };
    MainPageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService])
    ], MainPageService);
    return MainPageService;
}());
exports.MainPageService = MainPageService;


/***/ }),

/***/ "./src/app/services/model.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/model.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var current_service_1 = __webpack_require__(/*! ./current.service */ "./src/app/services/current.service.ts");
var contact_service_1 = __webpack_require__(/*! ./contact.service */ "./src/app/services/contact.service.ts");
var locations_service_1 = __webpack_require__(/*! ./locations.service */ "./src/app/services/locations.service.ts");
var team_service_1 = __webpack_require__(/*! ./team.service */ "./src/app/services/team.service.ts");
var courses_service_1 = __webpack_require__(/*! ./courses.service */ "./src/app/services/courses.service.ts");
var stage_service_1 = __webpack_require__(/*! ./stage.service */ "./src/app/services/stage.service.ts");
var main_page_service_1 = __webpack_require__(/*! ./main-page.service */ "./src/app/services/main-page.service.ts");
var schedule_service_1 = __webpack_require__(/*! ./schedule.service */ "./src/app/services/schedule.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var imprint_service_1 = __webpack_require__(/*! ./imprint.service */ "./src/app/services/imprint.service.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ModelService = /** @class */ (function () {
    // pageLoaded = Observable.create(observer => {
    //     observer.onNext(false);
    //     observer.onCompleted();
    //     return observer;
    // });
    function ModelService(platformId, mainPageService, stageService, coursesService, teamService, locationsService, contactService, currentService, imprintService, scheduleService) {
        this.platformId = platformId;
        this.mainPageService = mainPageService;
        this.stageService = stageService;
        this.coursesService = coursesService;
        this.teamService = teamService;
        this.locationsService = locationsService;
        this.contactService = contactService;
        this.currentService = currentService;
        this.imprintService = imprintService;
        this.scheduleService = scheduleService;
        this.pageLoaded = new rxjs_1.BehaviorSubject(false);
    }
    ModelService.prototype.isPlatformBrowser = function () {
        return common_1.isPlatformBrowser(this.platformId);
    };
    ModelService.prototype.isPageLoaded = function () {
        return this.pageLoaded;
    };
    ModelService.prototype.setPageLoaded = function (value) {
        this.pageLoaded.next(value);
        return value;
    };
    ModelService.prototype.getMainPageSections = function () {
        var _this = this;
        if (_.isNil(this.mainPageData)) {
            this.mainPageData = this.mainPageService.getMainPageSections();
            return this.mainPageData;
        }
        return new Promise(function (resolve, reject) {
            return resolve(_this.mainPageData);
        });
    };
    ModelService.prototype.getPosts = function () {
        if (_.isNil(this.blogPostsData)) {
            this.blogPostsData = this.currentService.getPosts();
        }
        return this.blogPostsData;
    };
    ModelService.prototype.getPostByShortId = function (shortId) {
        return this.getPosts().then(function (posts) {
            var post = _.find(posts, function (p) {
                return p.shortId === shortId;
            });
            return post;
        });
    };
    ModelService.prototype.getPerformances = function () {
        var _this = this;
        if (_.isNil(this.performancesData)) {
            this.performancesData = this.stageService.getPerformances();
            return this.performancesData;
        }
        return new Promise(function (resolve, reject) {
            return resolve(_this.performancesData);
        });
    };
    ModelService.prototype.getPerformanceByShortId = function (shortId) {
        return this.getPerformances().then(function (performances) {
            var performance = _.find(performances, function (p) {
                return p.shortId === shortId;
            });
            return performance;
        });
    };
    ModelService.prototype.getCourses = function () {
        var _this = this;
        if (_.isNil(this.coursesData)) {
            this.coursesData = this.coursesService.getCourses();
            return this.coursesData;
        }
        return new Promise(function (resolve, reject) {
            return resolve(_this.coursesData);
        });
    };
    ModelService.prototype.getScheduleData = function () {
        var _this = this;
        if (_.isNil(this.scheduleData)) {
            return Promise.all([this.getCourses(), this.getTeam(), this.getLocationData()]).then(function (result) {
                var courses = _.get(result[0], ['courses']);
                var teachers = result[1];
                var locationData = result[2];
                _this.scheduleData = _this.scheduleService.getScheduleData(courses, teachers, locationData);
                return _this.scheduleData;
            });
        }
        return new Promise(function (resolve, reject) {
            return resolve(_this.scheduleData);
        });
    };
    ModelService.prototype.getTeam = function () {
        var _this = this;
        if (_.isNil(this.teamData)) {
            this.teamData = this.teamService.getTeam();
            return this.teamData;
        }
        return new Promise(function (resolve, reject) {
            return resolve(_this.teamData);
        });
    };
    ModelService.prototype.getTeacherByUrlId = function (urlId) {
        var _this = this;
        return this.getTeam().then(function (team) {
            var teacher = _.find(team, function (t) {
                var teacherUrlId = _this.teamService.convertTeacherToUrlId(t);
                return teacherUrlId === urlId;
            });
            return teacher;
        });
    };
    ModelService.prototype.getLocationData = function () {
        var _this = this;
        if (_.isNil(this.locationData)) {
            this.locationData = this.locationsService.getLocationData();
            return this.locationData;
        }
        return new Promise(function (resolve, reject) {
            return resolve(_this.locationData);
        });
    };
    ModelService.prototype.getLocationByShortId = function (shortId) {
        return this.getLocationData().then(function (locationData) {
            var location = _.find(locationData.allLocations, function (l) {
                return l.shortId === shortId;
            });
            return location;
        });
    };
    ModelService.prototype.getLocationByInitials = function (initials) {
        return this.getLocationData().then(function (locationData) {
            return _.find(locationData.allLocations, {
                initials: initials
            });
        });
    };
    ModelService.prototype.getContact = function () {
        var _this = this;
        if (_.isNil(this.contactData)) {
            this.contactData = this.contactService.getContact();
            return this.contactData;
        }
        return new Promise(function (resolve, reject) {
            return resolve(_this.contactData);
        });
    };
    ModelService.prototype.getEntries = function () {
        var _this = this;
        if (_.isNil(this.imprintData)) {
            this.imprintData = this.imprintService.getEntries();
            return this.imprintData;
        }
        return new Promise(function (resolve, reject) {
            return resolve(_this.imprintData);
        });
    };
    ModelService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [Object,
            main_page_service_1.MainPageService,
            stage_service_1.StageService,
            courses_service_1.CoursesService,
            team_service_1.TeamService,
            locations_service_1.LocationsService,
            contact_service_1.ContactService,
            current_service_1.CurrentService,
            imprint_service_1.ImprintService,
            schedule_service_1.ScheduleService])
    ], ModelService);
    return ModelService;
}());
exports.ModelService = ModelService;


/***/ }),

/***/ "./src/app/services/schedule.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/schedule.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var appointment_1 = __webpack_require__(/*! ../classes/appointment */ "./src/app/classes/appointment.ts");
var schedule_data_1 = __webpack_require__(/*! ../classes/schedule-data */ "./src/app/classes/schedule-data.ts");
var ScheduleService = /** @class */ (function () {
    function ScheduleService(dynamicContentService) {
        this.dynamicContentService = dynamicContentService;
    }
    ScheduleService.prototype.getScheduleData = function (courses, teachers, locationData) {
        return this.dynamicContentService
            .fetchAndTransformZenkitListData(zenkit_collections_1.ZenkitCollections.schedule.shortId)
            .then(function (zenkitListData) {
            var getAgeGroupDetails = function (ageGroupString) {
                var hexColor;
                var iconString;
                if (_.includes(ageGroupString, 'Kinder') || _.includes(ageGroupString, 'Kids')) {
                    hexColor = '#fae596';
                    iconString = 'K';
                }
                else if (_.includes(ageGroupString, 'Jugend')) {
                    hexColor = '#3fb0ac';
                    iconString = 'J';
                }
                else {
                    hexColor = '#a8b6bf';
                    iconString = 'E';
                }
                var ageGroupCategory = _.find(_.get(zenkitListData, ['prefefinedCategories', 'ageGroups']), {
                    name: ageGroupString
                });
                hexColor = _.get(ageGroupCategory, ['colorHex']);
                return {
                    title: ageGroupString,
                    hexColor: hexColor,
                    iconString: iconString
                };
            };
            var getLevelDetails = function (levelString) {
                var hexColor;
                var iconString;
                if (_.includes(levelString, 'Grund') || _.includes(levelString, 'Anf') || _.includes(levelString, 'Beg')) {
                    hexColor = '#edd9c0';
                    iconString = '1';
                }
                else if (_.includes(levelString, 'Mittel')) {
                    hexColor = '#9ad3de';
                    iconString = '2';
                }
                else {
                    hexColor = '#b56969';
                    iconString = '3';
                }
                var levelCategory = _.find(_.get(zenkitListData, ['prefefinedCategories', 'levels']), {
                    name: levelString
                });
                hexColor = _.get(levelCategory, ['colorHex']);
                return {
                    title: levelString,
                    hexColor: hexColor,
                    iconString: iconString
                };
            };
            var scheduleData = new schedule_data_1.ScheduleData();
            var ageGroupLabels = _.map(_.get(zenkitListData, ['prefefinedCategories', 'ageGroups']), function (ageGroupLabel) {
                return getAgeGroupDetails(_.get(ageGroupLabel, ['name']));
            });
            scheduleData.ageGroupLabels = ageGroupLabels;
            var levelLabels = _.map(_.get(zenkitListData, ['prefefinedCategories', 'levels']), function (levelLabel) {
                return getLevelDetails(_.get(levelLabel, ['name']));
            });
            scheduleData.levelLabels = levelLabels;
            var dayLabels = _.map(_.get(zenkitListData, ['prefefinedCategories', 'days']), function (dayLabel) {
                var labelName = _.get(dayLabel, ['name']);
                return {
                    title: labelName
                };
            });
            scheduleData.dayLabels = dayLabels;
            var appointments = _.reduce(zenkitListData.entries, function (results, modifiedEntry) {
                // Every appointments needs to have a day label and title
                if (!modifiedEntry.label || !modifiedEntry.title) {
                    return results;
                }
                var appointment = new appointment_1.Appointment();
                appointment.uuid = modifiedEntry.uuid;
                appointment.title = modifiedEntry.title;
                appointment.timeStartHours = modifiedEntry.timeStartHours;
                appointment.dateStart = new Date(2018, 0, 0, modifiedEntry.timeStartHours, modifiedEntry.timeStartMinutes);
                appointment.dateEnd = new Date(2018, 0, 0, modifiedEntry.timeEndHours, modifiedEntry.timeEndMinutes);
                appointment.levels = modifiedEntry.levels;
                appointment.ageGroups = _
                    .chain(modifiedEntry.ageGroups)
                    .map(function (ageGroup) {
                    return getAgeGroupDetails(ageGroup);
                })
                    .value();
                appointment.levels = _
                    .chain(modifiedEntry.levels)
                    .map(function (level) {
                    return getLevelDetails(level);
                })
                    .value();
                var courseUuid = _.head(modifiedEntry.course);
                appointment.course = _.find(courses, function (course) {
                    return course.uuid === courseUuid;
                });
                var teacherUuid = _.head(modifiedEntry.teacher);
                appointment.teacher = _.find(teachers, function (teacher) {
                    return teacher.uuid === teacherUuid;
                });
                var locationUuid = _.head(modifiedEntry.location);
                var locations = locationData.allLocations;
                appointment.location = _.find(locations, function (location) {
                    return location.uuid === locationUuid;
                });
                if (modifiedEntry.days && _.head(modifiedEntry.days)) {
                    appointment.dayIndex = _.findIndex(_.get(zenkitListData, ['prefefinedCategories', 'days']), function (day) {
                        return day.name === _.head(modifiedEntry.days);
                    });
                }
                results.push(appointment);
                return results;
            }, []);
            scheduleData.appointments = appointments;
            return scheduleData;
        });
    };
    ScheduleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService])
    ], ScheduleService);
    return ScheduleService;
}());
exports.ScheduleService = ScheduleService;


/***/ }),

/***/ "./src/app/services/seo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SeoService = /** @class */ (function () {
    function SeoService(titleService, metaService, router) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.router = router;
    }
    SeoService.prototype.addSeoData = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function () {
            var root = _this.router.routerState.snapshot.root;
            while (root) {
                if (root.children && root.children.length) {
                    root = root.children[0];
                }
                else if (root.data && root.data["title"]) {
                    _this.titleService.setTitle(root.data["title"]);
                    var tags = root.data["metatags"];
                    for (var tag in tags) {
                        _this.metaService.addTag({ name: tag, content: tags[tag] });
                    }
                    return;
                }
                else {
                    return;
                }
            }
        });
    };
    SeoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [platform_browser_1.Title,
            platform_browser_1.Meta,
            router_1.Router])
    ], SeoService);
    return SeoService;
}());
exports.SeoService = SeoService;


/***/ }),

/***/ "./src/app/services/stage.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/stage.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_service_1 = __webpack_require__(/*! ./utility.service */ "./src/app/services/utility.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var performance_1 = __webpack_require__(/*! ./../classes/performance */ "./src/app/classes/performance.ts");
var StageService = /** @class */ (function () {
    function StageService(dynamicContentService, utilityService) {
        this.dynamicContentService = dynamicContentService;
        this.utilityService = utilityService;
    }
    StageService.prototype.getPerformances = function () {
        var _this = this;
        return this.dynamicContentService
            .fetchAndTransformZenkitListData(zenkit_collections_1.ZenkitCollections.performances.shortId)
            .then(function (zenkitListData) {
            var performances = _.map(zenkitListData.entries, function (modifiedEntry) {
                var performance = new performance_1.Performance();
                performance.shortId = modifiedEntry.shortId;
                performance.title = modifiedEntry.title;
                performance.description = modifiedEntry.description;
                performance.poster = _.head(modifiedEntry.poster);
                performance.gallery = modifiedEntry.gallery;
                if (_.isNil(modifiedEntry.date) === false) {
                    performance.date = new Date(modifiedEntry.date);
                }
                if (performance.title && performance.date) {
                    var dateString = _this.utilityService.convertDateToString(performance.date);
                    performance.routerLink =
                        '/auftritte/' +
                            performance.shortId +
                            '/' +
                            _this.utilityService.convertStringToUrlId(performance.title) +
                            '/' +
                            _this.utilityService.convertStringToUrlId(dateString);
                }
                else {
                    performance.routerLink = '/auftritte/' + performance.shortId;
                }
                return performance;
            });
            return performances.reverse(); // newest performances should be first
        });
    };
    StageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService,
            utility_service_1.UtilityService])
    ], StageService);
    return StageService;
}());
exports.StageService = StageService;


/***/ }),

/***/ "./src/app/services/team.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var zenkit_collections_1 = __webpack_require__(/*! ./../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var teacher_1 = __webpack_require__(/*! ../classes/teacher */ "./src/app/classes/teacher.ts");
var utility_service_1 = __webpack_require__(/*! ./utility.service */ "./src/app/services/utility.service.ts");
var TeamService = /** @class */ (function () {
    function TeamService(dynamicContentService, utilityService) {
        this.dynamicContentService = dynamicContentService;
        this.utilityService = utilityService;
    }
    TeamService.prototype.getTeam = function () {
        return this.dynamicContentService
            .fetchAndTransformZenkitListData(zenkit_collections_1.ZenkitCollections.team.shortId)
            .then(function (zenkitListData) {
            var team = _.map(zenkitListData.entries, function (modifiedEntry) {
                var teacher = new teacher_1.Teacher();
                teacher.uuid = modifiedEntry.uuid;
                teacher.firstName = modifiedEntry.firstName;
                teacher.lastName = modifiedEntry.lastName;
                teacher.task = modifiedEntry.task;
                teacher.description = modifiedEntry.description;
                teacher.image = _.head(modifiedEntry.image);
                return teacher;
            });
            return team;
        });
    };
    TeamService.prototype.convertTeacherToUrlId = function (teacher) {
        var convertedFirstName = this.utilityService.convertStringToUrlId(teacher.firstName);
        var convertedLastName = this.utilityService.convertStringToUrlId(teacher.lastName);
        return convertedFirstName + '-' + convertedLastName;
    };
    TeamService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService,
            utility_service_1.UtilityService])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;


/***/ }),

/***/ "./src/app/services/utility.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.convertStringToUrlId = function (string) {
        var convertedString = _
            .chain(string.toLowerCase())
            .replace(/ä/g, 'ae')
            .replace(/ö/g, 'oe')
            .replace(/ü/g, 'ue')
            .replace(/ß/g, 'ss')
            .replace(/ /g, '-')
            .replace(/\./g, '-')
            .replace(/\//g, '')
            .value();
        return convertedString;
    };
    UtilityService.prototype.convertDateToString = function (date) {
        if (_.isNil(date)) {
            return undefined;
        }
        var dateString = date.getDate().toString() + '.'
            + (date.getMonth() + 1).toString() + '.'
            + date.getFullYear();
        return dateString;
    };
    UtilityService.prototype.convertDateToStringLong = function (date) {
        if (_.isNil(date)) {
            return undefined;
        }
        var monthString = _
            .chain(date.getMonth().toString())
            .replace(/11/, 'Dezember')
            .replace(/10/, 'November')
            .replace(/9/, 'October')
            .replace(/8/, 'September')
            .replace(/7/, 'August')
            .replace(/6/, 'July')
            .replace(/5/, 'Juni')
            .replace(/4/, 'Mai')
            .replace(/3/, 'April')
            .replace(/2/, 'März')
            .replace(/1/, 'Februar')
            .replace(/0/, 'Januar')
            .value();
        var dateString = date.getDate().toString() + '. '
            + (monthString).toString() + ' '
            + date.getFullYear();
        return dateString;
    };
    UtilityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());
exports.UtilityService = UtilityService;


/***/ }),

/***/ "./src/app/shared/constants/element_types.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/constants/element_types.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementTypes = {
    text: {
        category: 'text',
        categoryName: 'Text'
    },
    files: {
        category: 'filesData',
        categoryName: 'Files'
    },
    date: {
        category: 'date',
        categoryName: 'Date'
    },
    reference: {
        category: 'references',
        categoryName: 'References'
    },
    number: {
        category: 'number',
        categoryName: 'Number'
    },
    labels: {
        category: 'categories',
        categoryName: 'Labels'
    }
};


/***/ }),

/***/ "./src/app/shared/constants/main-page-section-types.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/constants/main-page-section-types.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPageSectionTypes = [
    {
        name: 'Video',
        cssClass: 'main-page-section-video',
    },
    {
        name: 'Titelbild',
        cssClass: 'main-page-section-video',
    },
    {
        name: 'das Tanztheater',
        cssClass: 'main-page-section-philosophy',
        routerLink: ''
    },
    {
        name: 'Neuigkeiten',
        cssClass: 'main-page-section-current',
        routerLink: 'blog'
    },
    {
        name: 'Auftritte',
        cssClass: 'main-page-section-performances',
        routerLink: 'auftritte'
    },
    {
        name: 'Kurse',
        cssClass: 'main-page-section-courses',
        routerLink: 'kurse'
    },
    {
        name: 'Team',
        cssClass: 'main-page-section-team',
        routerLink: 'team'
    },
    {
        name: 'Standorte',
        cssClass: 'main-page-section-locations',
        routerLink: 'standorte'
    },
    {
        name: 'Kontakt',
        cssClass: 'main-page-section-contact',
        routerLink: 'kontakt'
    }
];


/***/ }),

/***/ "./src/app/shared/constants/required-elements.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/constants/required-elements.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var element_types_1 = __webpack_require__(/*! ./element_types */ "./src/app/shared/constants/element_types.ts");
exports.RequiredElements = {
    home: [
        {
            name: 'Titel',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'title'
        },
        {
            name: 'Beschreibung',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'description'
        },
        {
            name: 'Bild',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'image'
        },
        {
            name: 'YouTube Video ID',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'youtubeVideoId'
        }
    ],
    current: [
        {
            name: 'Titel',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'title'
        },
        {
            name: 'Beschreibung',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'description'
        },
        {
            name: 'Bilder',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'images'
        },
        {
            name: 'YouTube Video ID',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'youtubeVideoId'
        },
        {
            name: 'Datum',
            type: element_types_1.ElementTypes.date,
            mappedClassPropertyName: 'date'
        },
    ],
    performances: [
        {
            name: 'Titel',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'title'
        },
        {
            name: 'Beschreibung',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'description'
        },
        {
            name: 'Bild des Posters',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'poster'
        },
        {
            name: 'Bildergallerie',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'gallery'
        },
        {
            name: 'Datum',
            type: element_types_1.ElementTypes.date,
            mappedClassPropertyName: 'date'
        }
    ],
    courses: [
        {
            name: 'Titel',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'title'
        },
        {
            name: 'Beschreibung',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'description'
        },
        {
            name: 'Datei',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'file'
        },
        {
            name: 'Bild',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'image'
        },
        {
            name: 'YouTube Video ID',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'youtubeId'
        },
        {
            name: 'Termine',
            type: element_types_1.ElementTypes.reference,
            mappedClassPropertyName: 'appointmentUuids'
        }
    ],
    schedule: [
        {
            name: 'Titel',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'title'
        },
        {
            name: 'Labels',
            type: element_types_1.ElementTypes.labels,
            mappedClassPropertyName: 'days'
        },
        {
            name: 'Kurs',
            type: element_types_1.ElementTypes.reference,
            mappedClassPropertyName: 'course'
        },
        {
            name: 'Lehrer',
            type: element_types_1.ElementTypes.reference,
            mappedClassPropertyName: 'teacher'
        },
        {
            name: 'Standort',
            type: element_types_1.ElementTypes.reference,
            mappedClassPropertyName: 'location'
        },
        {
            name: 'Schwierigkeitsgrade',
            type: element_types_1.ElementTypes.labels,
            mappedClassPropertyName: 'levels'
        },
        {
            name: 'Altersgruppen',
            type: element_types_1.ElementTypes.labels,
            mappedClassPropertyName: 'ageGroups'
        },
        {
            name: 'Startzeit Stunden',
            type: element_types_1.ElementTypes.number,
            mappedClassPropertyName: 'timeStartHours'
        },
        {
            name: 'Startzeit Minuten',
            type: element_types_1.ElementTypes.number,
            mappedClassPropertyName: 'timeStartMinutes'
        },
        {
            name: 'Endzeit Stunden',
            type: element_types_1.ElementTypes.number,
            mappedClassPropertyName: 'timeEndHours'
        },
        {
            name: 'Endzeit Minuten',
            type: element_types_1.ElementTypes.number,
            mappedClassPropertyName: 'timeEndMinutes'
        }
    ],
    team: [
        {
            name: 'Name',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'name'
        },
        {
            name: 'Vorname',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'firstName'
        },
        {
            name: 'Nachname',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'lastName'
        },
        {
            name: 'Beschreibung',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'description'
        },
        {
            name: 'Aufgabe',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'task'
        },
        {
            name: 'Bild',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'image'
        }
    ],
    locations: [
        {
            name: 'Name',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'name'
        },
        {
            name: 'Beschreibung',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'description'
        },
        {
            name: 'Adresse-Name',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'addressName'
        },
        {
            name: 'Adresse-Strasse',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'addressStreet'
        },
        {
            name: 'Adresse-PLZ',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'addressZIP'
        },
        {
            name: 'Adresse-Stadt',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'addressCity'
        },
        {
            name: 'Google Maps',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'embed'
        },
        {
            name: 'Bild',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'image'
        },
        {
            name: 'Bildergalerie',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'gallery'
        },
        {
            name: 'Initialien',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'initials'
        } // ,
        // {
        //     name: '1. Beratungszeit',
        //     type: ElementTypes.text,
        //     mappedClassPropertyName: 'consultationTime1'
        // },
        // {
        //     name: '2. Beratungszeit',
        //     type: ElementTypes.text,
        //     mappedClassPropertyName: 'consultationTime2'
        // },
        // {
        //     name: '3. Beratungszeit',
        //     type: ElementTypes.text,
        //     mappedClassPropertyName: 'consultationTime3'
        // }
    ],
    contact: [
        {
            name: 'Name',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'name'
        },
        {
            name: 'E-Mail',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'email'
        },
        {
            name: 'Telefon',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'phone'
        },
        {
            name: 'Beschreibung',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'description'
        },
        {
            name: 'Bild',
            type: element_types_1.ElementTypes.files,
            mappedClassPropertyName: 'image'
        },
        {
            name: 'Impressum',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'imprint'
        },
        {
            name: 'Datenschutz',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'privacy'
        }
    ],
    imprint: [
        {
            name: 'Titel',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'title'
        },
        {
            name: 'Beschreibung',
            type: element_types_1.ElementTypes.text,
            mappedClassPropertyName: 'description'
        }
    ]
};


/***/ }),

/***/ "./src/app/shared/constants/zenkit-collections.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/constants/zenkit-collections.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var required_elements_1 = __webpack_require__(/*! ./required-elements */ "./src/app/shared/constants/required-elements.ts");
exports.ZenkitCollections = {
    home: {
        shortId: 'H1aA_3bLX',
        requiredElements: required_elements_1.RequiredElements.home
    },
    current: {
        shortId: 'S1PZ5AbcZ',
        requiredElements: required_elements_1.RequiredElements.current
    },
    performances: {
        shortId: 'HyltubcKub',
        requiredElements: required_elements_1.RequiredElements.performances
    },
    courses: {
        shortId: 'ByeBytnWIQ',
        requiredElements: required_elements_1.RequiredElements.courses
    },
    schedule: {
        shortId: 'BJ1gKhbIm',
        requiredElements: required_elements_1.RequiredElements.schedule
    },
    team: {
        shortId: 'BJ6t-cFub',
        requiredElements: required_elements_1.RequiredElements.team
    },
    locations: {
        shortId: 'BJugtn-87',
        requiredElements: required_elements_1.RequiredElements.locations
    },
    contact: {
        shortId: 'SJd2OnWLm',
        requiredElements: required_elements_1.RequiredElements.contact
    },
    imprint: {
        shortId: 'HkLziF2WUm',
        requiredElements: required_elements_1.RequiredElements.imprint
    }
};


/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\" *ngIf=\"footerContentLoaded && mainPageContentLoaded\" id=\"anker-contact\">\r\n  <div class=\"footer\">\r\n    <div class=\"footer-section-container\">\r\n      <div class=\"footer-section footer-section-contact\">\r\n        <div class=\"footer-section-heading\">\r\n          Kontakt\r\n        </div>\r\n        <div class=\"footer-section-content\" *ngIf=\"location && email\">\r\n          <span class=\"footer-section-content-link\">Markus Lipp</span>\r\n          <span class=\"footer-section-content-link\">Schillerstraße 39</span>\r\n          <span class=\"footer-section-content-link footer-section-content-link-inline\">71134</span>\r\n          <span class=\"footer-section-content-link footer-section-content-link-inline\">Aidlingen</span>\r\n          <!-- <span class=\"footer-section-content-link consultation-label\" [routerLink]=\"['/standorte', 0]\">Beratungszeiten<i class=\"fas fa-arrow-right\"></i></span> -->\r\n          <!-- <span class=\"footer-section-content-link\">{{locationYW.consultationTime1}}</span>\r\n          <span class=\"footer-section-content-link\" *ngIf=\"locationYW.consultationTime2\">{{locationYW.consultationTime2}}</span>\r\n          <span class=\"footer-section-content-link\" *ngIf=\"locationYW.consultationTime3\">{{locationYW.consultationTime3}}</span> -->\r\n          <!-- <div class=\"footer-section-content-break\"></div>\r\n          <span class=\"footer-section-content-link\">{{locationLB.addressName}}</span>\r\n          <span class=\"footer-section-content-link\">{{locationLB.addressStreet}}</span>\r\n          <span class=\"footer-section-content-link footer-section-content-link-inline\">{{locationLB.addressZIP}}</span>\r\n          <span class=\"footer-section-content-link footer-section-content-link-inline\">{{locationLB.addressCity}}</span>\r\n          <span class=\"footer-section-content-link consultation-label\" [routerLink]=\"['/standorte', 1]\">Beratungszeiten<i class=\"fas fa-arrow-right\"></i></span> -->\r\n          <!-- <span class=\"footer-section-content-link\">{{locationLB.consultationTime1}}</span>\r\n          <span class=\"footer-section-content-link\" *ngIf=\"locationLB.consultationTime2\">{{locationLB.consultationTime2}}</span>\r\n          <span class=\"footer-section-content-link\" *ngIf=\"locationLB.consultationTime3\">{{locationLB.consultationTime3}}</span> -->\r\n          <div class=\"footer-section-content-break\"></div>\r\n          <span class=\"footer-section-content-link\"><a [href]=\"['tel:', phone, '?']\" target=\"_top\">Tel. 07034-9478322</a></span>\r\n          <span class=\"footer-section-content-link\"><a [href]=\"['tel:', phone, '?']\" target=\"_top\">Mobil 0170-8253398</a></span>\r\n          <span class=\"footer-section-content-link\"><a [href]=\"['mailto:', email, '?']\" target=\"_top\">info@kreditorenrevision24.de</a></span>\r\n          <br/><br/>\r\n        </div>\r\n        <a class=\"footer-section-heading\" routerLink=\"/impressum\">\r\n          Impressum\r\n        </a><br>\r\n        <a class=\"footer-section-heading\" routerLink=\"/datenschutz\">\r\n          Datenschutz\r\n        </a>\r\n      </div>\r\n    </div>\r\n   \r\n    <!-- <div class=\"footer-section-container\">\r\n      <div class=\"footer-section footer-section-legal\">\r\n        <a class=\"footer-section-heading\" routerLink=\"/impressum\">\r\n            Impressum\r\n        </a><br>\r\n        <a class=\"footer-section-heading\" routerLink=\"/datenschutz\">\r\n          Datenschutz\r\n        </a> -->\r\n        <!-- <div class=\"footer-section-content\">\r\n          <div class=\"footer-section-content-link\">Geschützt durch Arlette Cassin-Reschke</div>\r\n          <div class=\"footer-section-content-link\">Web Design: Niko Reschke</div>\r\n        </div> -->\r\n      <!-- </div>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.footer-container {\n  background-color: #182026; }\n.footer-container .footer {\n    overflow: hidden;\n    bottom: 0;\n    /* Position the navbar at the top of the page */\n    width: 100%;\n    /* Full width */\n    z-index: 10;\n    color: white; }\n.footer-container .footer .footer-section-container {\n      margin: 0 auto; }\n.footer-container .footer .footer-section-container .footer-section {\n        text-align: center; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-heading {\n          font-size: 20px;\n          font-weight: 600;\n          text-decoration: none; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-content {\n          font-size: 14px; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-content.footer-section-content-social {\n            text-align: center; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-content .footer-section-content-link {\n            display: block;\n            text-decoration: none; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-content .consultation-label:hover {\n            cursor: pointer;\n            text-decoration: underline; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-content .consultation-label i {\n            font-size: 10px;\n            margin-left: 10px; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-content .footer-section-content-link-inline {\n            display: inline-block;\n            margin-right: 4px; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-content .footer-section-content-link-icon {\n            display: inline-block;\n            text-decoration: none;\n            margin: 10px;\n            position: relative;\n            width: 40px;\n            height: 40px;\n            padding: 10px;\n            border-radius: 30px;\n            border: 1px solid #1f1f1f; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-content .footer-section-content-link-icon i {\n              position: absolute;\n              font-size: 30px;\n              width: 40px;\n              left: 10px;\n              top: 13px; }\n.footer-container .footer .footer-section-container .footer-section .footer-section-content .footer-section-content-break {\n            height: 15px; }\n@media (max-width: 767px) {\n  .footer-container .footer .footer-section-container .footer-section {\n    margin: 30px; } }\n@media (min-width: 768px) {\n  .footer-container {\n    padding: 50px; }\n    .footer-container .footer {\n      max-width: 768px;\n      margin: 0 auto;\n      display: flex; }\n      .footer-container .footer .footer-section-container {\n        display: flex; }\n        .footer-container .footer .footer-section-container .footer-section.footer-section-social {\n          margin: 0 auto;\n          text-align: center; }\n          .footer-container .footer .footer-section-container .footer-section.footer-section-social .footer-section-content-link-icon:first-of-type {\n            margin-left: 0; }\n          .footer-container .footer .footer-section-container .footer-section.footer-section-social .footer-section-content-link-icon:last-of-type {\n            margin-right: 0; }\n        .footer-container .footer .footer-section-container .footer-section.footer-section-legal {\n          padding-left: 50px; } }\n@media (min-width: 992px) {\n  .footer-container .footer {\n    max-width: 992px; } }\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_service_1 = __webpack_require__(/*! ./../../services/model.service */ "./src/app/services/model.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(modelService) {
        this.modelService = modelService;
        this.footerContentLoaded = false;
        this.mainPageContentLoaded = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.isPageLoaded().subscribe(function (x) {
            _this.mainPageContentLoaded = x;
        });
        Promise.all([this.modelService.getContact(), this.modelService.getLocationByInitials('YW')]).then(function (results) {
            var contact = results[0];
            _this.name = 'Arlette Cassin-Reschke'; // contact.name;
            _this.email = 'yogaraum.wettersbach@gmail.com'; // contact.email;
            _this.phone = '0721 9453483'; // contact.phone;
            _this.location = results[1];
            _this.footerContentLoaded = true;
        });
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-container\">\r\n  <div class=\"main-content-container main-content-container-padding\">\r\n    <div class=\"main-content\">\r\n      <div class=\"loading-animation-container\" *ngIf=\"isBrowser\">\r\n        <div class=\"loader-container\" [ngClass]=\"[pageLoaded ? 'hide' : '']\">\r\n          <div class=\"loader-circle\"></div>\r\n          <div class=\"loader-line-mask\">\r\n            <div class=\"loader-line\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"logo-container\" [ngClass]=\"[pageLoaded ? 'show' : '', false ? '' : 'background-active']\">\r\n          <div class=\"logo-container-inner\">\r\n            <!-- <div class=\"logo\" routerLink=\"/\">Kreditoren-<br/>Revision24</div> -->\r\n            <div class=\"logo\" routerLink=\"/\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"title-container\" *ngIf=\"pageIsHome\" [ngClass]=\"[scrolledToTop ? 'show' : 'hide']\">\r\n          <div class=\"title\" routerLink=\"/\"></div>\r\n        </div>\r\n        <div class=\"navbar-non-mobile-container\" [ngClass]=\"[pageLoaded ? 'show' : '']\">\r\n          <div class=\"navbar-non-mobile \">\r\n            <div class=\"navbar-non-mobile-element\" (click)=\"scrollIntoView('anker-service')\">Unser Service</div>\r\n            <div class=\"navbar-non-mobile-element\" (click)=\"scrollIntoView('anker-advantages')\">Ihr Vorteil</div>\r\n            <div class=\"navbar-non-mobile-element\" (click)=\"scrollIntoView('anker-process')\">Ablauf</div>\r\n            <div class=\"navbar-non-mobile-element\" (click)=\"scrollIntoView('anker-privacy')\">Datenschutz</div>\r\n            <div class=\"navbar-non-mobile-element\" (click)=\"scrollIntoView('anker-about-us')\">Über uns</div>\r\n            <div class=\"navbar-non-mobile-element\" (click)=\"scrollIntoView('anker-contact')\">Kontakt</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"navbar\" [ngClass]=\"isMobileNavOpen === true ? 'mobile-nav-open': ''\">\r\n        <div class=\"navbar-menu-icon-container\" (click)=\"toggleMobileNav()\" *ngIf=\"isBrowser\">\r\n          <div class=\"navbar-menu-icon\">\r\n            <div class=\"bar bar1\"></div>\r\n            <div class=\"bar bar2\"></div>\r\n            <div class=\"bar bar3\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"navbar-page-overlay\" [ngClass]=\"isMobileNavOpen === true ? 'show': ''\" (click)=\"closeMobileNav()\">\r\n\r\n        </div>\r\n        <div class=\"navbar-navigation\">\r\n          <a class=\"navbar-navigation-link\" (click)=\"scrollIntoView('anker-service')\">\r\n            Unser Service\r\n          </a>\r\n          <a class=\"navbar-navigation-link\" (click)=\"scrollIntoView('anker-advantages')\">\r\n            Ihr Vorteil\r\n          </a>\r\n          <a class=\"navbar-navigation-link\" (click)=\"scrollIntoView('anker-pricing')\">\r\n            Kosten\r\n          </a>\r\n          <a class=\"navbar-navigation-link\" (click)=\"scrollIntoView('anker-process')\">\r\n            Ablauf\r\n          </a>\r\n          <a class=\"navbar-navigation-link\" (click)=\"scrollIntoView('anker-about-us')\">\r\n            Über uns\r\n          </a>\r\n          <a class=\"navbar-navigation-link\" (click)=\"scrollIntoView('anker-contact')\">\r\n            Kontakt\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n/* The navigation bar */\n.navbar-container {\n  position: fixed;\n  z-index: 2;\n  width: 100%;\n  opacity: 0;\n  -webkit-animation: fade-in 1s ease forwards;\n          animation: fade-in 1s ease forwards;\n  height: 60px;\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px); }\n.navbar-container .loading-animation-container {\n    color: white;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    overflow: visible;\n    position: relative; }\n.navbar-container .loading-animation-container .logo-container {\n      position: absolute;\n      top: 0;\n      opacity: 0;\n      width: 100%;\n      background-color: transparent;\n      transition: background-color 0.5s ease; }\n.navbar-container .loading-animation-container .logo-container .logo-container-inner {\n        text-align: left; }\n.navbar-container .loading-animation-container .logo-container.show {\n        opacity: 1;\n        -webkit-animation-name: logo-slide-down;\n                animation-name: logo-slide-down;\n        -webkit-animation-duration: 0.3s;\n                animation-duration: 0.3s;\n        -webkit-animation-timing-function: ease;\n                animation-timing-function: ease;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n.navbar-container .loading-animation-container .logo-container.home-page {\n        -webkit-transform: translateY(200px);\n                transform: translateY(200px);\n        -webkit-animation: fade-in 0.5s ease forwards;\n                animation: fade-in 0.5s ease forwards;\n        transition: height 1s, width 1s, -webkit-transform 1s;\n        transition: height 1s, width 1s, transform 1s;\n        transition: height 1s, width 1s, transform 1s, -webkit-transform 1s; }\n.navbar-container .loading-animation-container .logo-container.move-up {\n        -webkit-animation: slide-to-top 1s cubic-bezier(0.53, 0.01, 0.23, 1) forwards;\n                animation: slide-to-top 1s cubic-bezier(0.53, 0.01, 0.23, 1) forwards;\n        -webkit-transform: translateY(0);\n                transform: translateY(0); }\n.navbar-container .loading-animation-container .logo-container .logo {\n        background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAABjCAYAAAAy032MAAAK40lEQVR4nO2dTYgcxxXHX+9utJJCCJMBEwRSjCAHX+xD7Ess+2CR5KJDfNFBxodICGMw8hLEYoMhCEwkhDCL8cWY6LLIhxyyFx+CwcnFkMOesmAwCExigwmGYU7a3ZE1mhzavdPT0x/18arqVfX/B4NmW9NVr77+/ep1dXU2u/TmjIA3ZifXJ1Oi/63tT54MbQsA0lghoiy0EX0i25+sr87oVGg7AJDIyg//QpQ8kh1MfjQ7efz70HYAII2V0neIkkey6eO10DYAII2Vyt8QJV9MHoa2AABx1F2lMyJCoBvwcG9ruS+9soELH6il6iEVoMMAALzTFseApwT8A4+q13QFVvstSlcuEj3z1OKxG+8TjcZq57/3DtHa6uKxR1OiP77LY19q1IlRcRyi1AtU7vT0W5SGA7Pz3nkjF6Py+aMx0T/+xWMXAAmieuu536Kky4XzRE8Ml8Xoq2+IPvksnF2p0uRZwauKjqagdh1oXBXOnCL67bllMXpwQLR1t/xL1CcAFXQEiQiDqJvrV+uneW/fLv+FeqyjyaOBp9MbTFYLY/rWxM3N5WOjMdGdj8pHMLjagPj0Gl0PqQCdpsrGZaIfn1ieqm3vEH39bTi7AIgIU0EigijNee5porOn64PYu3vlX6LOAGjB9gFPTN+OHSN69eXluNGjKU8Qu+kOElH39KbtXNU0bNOPFdd1p5pX6Db2nA/HE+f9FqVbm8tiNBoTvaURxOYe2DrpFb/V6UwuhUh1pbaKDSarvl3VXQxtbGujSV+qYDNlK9PPqcjNzeWV2EUQ+2Ggp/lNO5XqeX33ijjPMyUWOw3gEiSivonShfP1QexPP68Gsd3Ui6nXYEMEHdoYLu+AkxBtzIGFjZyCRNQXUWpa/PjdqLoSm7c+2lxhjjl+Wxo+Yyq+4Sobh1iEbGMdHLW1i10L044pvf+n+uOPpkTvflA+wtdg5cY36Qh153NeaZvsc3k1V8mHY9Do1p3pg8DS27gpH+Y8uD2kgjivlKboBrF1sL0y63buurRM04/BYzIpG3e5JLSxCnX5MNeFK0Ei6pMoffhxuCB2G7GLRUi66kdK/flqY0/ldSlIRH0Rpfv/dZOulE7fhHT7QqHjgcRQhx5tdC1IRH0QpVs1z7CB9IlBTCLD16t40g50r63mz7LNV2bPSIIQ+woqp0ZMZYthGYAGPjykgngaWZfhIH+W7cL58lE/HQVrj8yJpWyx2MmAT0EiSkGUrt0g+sPm8r7aw0G+NukM3pINgCm+BYkoBVF6+DDfVqROlK5fLR/pzZUNAA5Cvc45/pjS7h7R88/m36sP197cLO8QGSaeFFMcBJiRYBuH8JAK4q/Mrbv5Cu0yw0H+jFuIeBIAkRNSkIhyUZL4Ueet22HjSU1XSeHPLIkglrK5bmNBhBak+OlrPCnBwXBEymUTDgSJg929fLvaujfaLm78j46eEhAudiBIdsxdaYnxJAwYc2zqzudUMLE2hiDZM+98oeNJvukaDIkNlgVSLltAIEichIon2WzqdW9rtvDhSj+WARtL2Vy3sRBCrUNKjfm6Konrk6qbr7vacN7Bhl1WFJulVW0yeaGBatlC3blz3caegIfER9h4kuomX6bTLM4tXLkHi+ttXznTscF1GwsAgsSLWjzpuafd5B7LuprQmLweqQtfdZ94G0OQuhiNFz+qlONJ1fN/96IbW4ncDizJg4F7/2zfefvMT3A7ZrNLb4a2QSKqLm1Tw+q4xO46h6prbtJBTacwDC8TbKXLLtV8XdYdJ7HYqQgEqZmuhu5qYJWOEkUnAcAXuMvWjK1YQGwA0AQxJACAGCBIAAAxQJAAAGKAIAEAxABBAgCIAYIEABADBAkAIAYIEgBADBAkAIAYJK3UFrslAgNYtQ2AAlI8pJTFiOjE+uPZifX9w58c/2doUwCQjARBSluMiIgOJll2MDmxPp29AFECoJnQgpS+GJXI9ier61M695+fnXw9tC0ASCSkIPVKjAqy/cO1M4fTP4e2AwCJhApq91KMClYe009D2wB6h4xNAzsIIUi9FiMiIjqc4K4b8IXJeCvOcdVPG23yPWWDGAHgD9vx5mK8tqbp00OCGKWIizd4xGiDLKIda7721I6zgq5cJHrmKb1ztneI9g+Ivrjf9cv4B0zbBvO+BEGCDfLQ2c/d597vnfvU+/CQ4hSjgurbZ7vYuDx/3dGHH6sIEwA+qYqLjjDZoJS+6xhS3GJkynCQf167lAsUAH6p82iyhuM+UNYBl4LUTzEqMxwQnT1dfX02AL5RESIR01tXggQxKihen6079YuBphiNz9iNBBtkklFYr6hASwtcxJAgRlWGA6Lf/4boL38NbQk/Ega+BBtAHdpawO0hQYya0L1bB0Dc6GpBRsQrSBAjAOJFxPjlmrKJKExStK2vKYh5qqJSPiI/ZfRd16m3rYUecCyMTFeMrlwkeunXPGmNxkTXbpSP1Hc41YFapq7zNqWj2tFVzzdZJc1VRhsbXNhhm7ZNfna02aqbf1daTf/PMmVLV4xCYNqJdc7jGiim+ChjTHakhbWw2QgSGoYT7o4et8vvFtu69ilK7vPi8o5Y7DQVJIiRLg8O5t+Pry/WH0dMgbPj2k73dNMt0m5Ln0tgueI3nPWd/sWj6/GUo/KbCBLESJfRmOhvfz/6c7qafad8bnmgdg1aVaRNO8plqiujrwGrW9e29VjNzz8+vCOtcukKkqyOHBO7e0dfVx8c/vzoD86n1atpxXzlLQarr7tbvld816Xrt724xjJnQFxLkCBGJozGRHc+Kh9RayQf05c6XE3XmpAgml02cNsoocztqNrHrgmqggQx0mU0novR19+GtmYZKdM2KXaYomu/DDFi9Wo401ERpLg7jG8KIfrqm3zd0aIY+e+MMgZAOzGIUgz1qIbIqVpB10pt+R1FGts7C/GiEnbxIB/4nq7V5e174KcjNCp07tjIkI5VfbZ5SBCjOq7dINq6O98Vssq/v6wead4CwpfoNA0636KnejvdhV0xeGFu8SFGJuct5NskSH1vvHZ29/LtaetE6damf3tSxJUw9RNfYmTtbdYJEjqBCl/cJ/r082VRWlvNn4GbE0d9+pqu6d7KhyjZ4lxEKnk1fZTOqcaQ0Pg6fPIZ0fO/yr8XO0IOB/neR2dOmd9dcxHXeGUjqx3c97ZmQeIoTfbUEcrG+PEpRiyUPSSIkQlv314+NhxUN/dH3dah4y3BU9IlOjEiWhSkDB/DPYi3d8ymblKCzSHvrhX5uM6rXx5WlGJE5P9V2mmyu5c/PFsWpfLUTQrSB2UI+9LzvFyKEfcFfum3ECQ75pXdNHW7frV8JLXOz49U0YxDuKL1jAogSPbMG7lu6kZkFk8KPQBCCoPvvG3qWo6ARi9GRBAkXpqmbmdPy5m6yRlA8RD64tBNEmJEBEHiwnzqprtXdPX/y58YULHXVVlM6lp+varY17Y+SHfdkFNcvCiyr2RUNOT2DtGrLy+/rXbjcv7YSc6MVK5c1We8fAwQV15U1fYQZWujbE/6bwYRCTwkF+hO3bie8ZL0aqEqXR5R6Of6ykCMOFF6hq0AgsSL2tTt2LHiiNrUDfDWj21aaCtnQJC6KPY3Kj7dLN91q57/y1/UnylhoEjcGdLVozQ+z3OHjMXB+vbV/5jhRZEpojp9aKpYnemH3WpteQOkG53pmZQ31xLFWdeRAUFqxvZWqkonRwcHoMT/AYqZfUNZqwFFAAAAAElFTkSuQmCC\");\n        background-size: 100% 100%;\n        display: inline-block;\n        height: 100%;\n        line-height: 18px;\n        font-size: 14px;\n        text-transform: uppercase;\n        width: 150px;\n        height: 40px;\n        margin-top: 10px; }\n.navbar-container .loading-animation-container .logo-container .logo:hover {\n          cursor: pointer; }\n.navbar-container .loading-animation-container .logo-container .logo:focus {\n          outline: none; }\n.navbar-container .loading-animation-container .loader-container {\n      opacity: 1;\n      -webkit-transform: translateY(0px);\n              transform: translateY(0px);\n      margin-top: 0px;\n      position: absolute;\n      top: 5px;\n      height: 50px;\n      width: 100%;\n      transition: opacity 0.3s ease, -webkit-transform 0.3s ease;\n      transition: transform 0.3s ease, opacity 0.3s ease;\n      transition: transform 0.3s ease, opacity 0.3s ease, -webkit-transform 0.3s ease; }\n.navbar-container .loading-animation-container .loader-container.hide {\n        opacity: 0;\n        -webkit-transform: translateY(-20px);\n                transform: translateY(-20px); }\n.navbar-container .loading-animation-container .loader-container .loader-circle {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        width: 40px;\n        height: 40px;\n        border-radius: 50%;\n        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);\n        margin-left: -20px;\n        margin-top: -20px;\n        -webkit-animation: rotate 0.6s infinite linear;\n        animation: rotate 0.6s infinite linear; }\n.navbar-container .loading-animation-container .loader-container .loader-line-mask {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        width: 20px;\n        height: 40px;\n        margin-left: -20px;\n        margin-top: -20px;\n        overflow: hidden;\n        -webkit-transform-origin: 20px 20px;\n        transform-origin: 20px 20px;\n        -webkit-mask-image: -webkit-linear-gradient(top, #000000, rgba(0, 0, 0, 0));\n        -webkit-animation: rotate 0.6s infinite linear;\n        animation: rotate 0.6s infinite linear; }\n.navbar-container .loading-animation-container .loader-container .loader-line-mask .loader-line {\n          width: 40px;\n          height: 40px;\n          border-radius: 50%;\n          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5); }\n.navbar-container .loading-animation-container .title-container {\n      width: 100%;\n      position: fixed;\n      top: 65px;\n      opacity: 0; }\n.navbar-container .loading-animation-container .title-container .title {\n        line-height: 18px;\n        font-size: 14px;\n        text-transform: uppercase;\n        display: inline-block; }\n.navbar-container .loading-animation-container .title-container .title:hover {\n          cursor: pointer; }\n.navbar-container .loading-animation-container .title-container .title:focus {\n          outline: none; }\n.navbar-container .loading-animation-container .title-container.show {\n        -webkit-animation: fade-in 0.8s ease forwards;\n                animation: fade-in 0.8s ease forwards;\n        -webkit-animation-delay: 1s;\n                animation-delay: 1s; }\n.navbar-container .loading-animation-container .title-container.hide {\n        -webkit-animation: fade-out 0.3s ease forwards;\n                animation: fade-out 0.3s ease forwards; }\n.navbar-container .loading-animation-container .navbar-non-mobile-container {\n      color: white;\n      display: none;\n      position: absolute;\n      width: 100%;\n      opacity: 0; }\n.navbar-container .loading-animation-container .navbar-non-mobile-container.show {\n        opacity: 1;\n        -webkit-animation-name: logo-slide-down;\n                animation-name: logo-slide-down;\n        -webkit-animation-duration: 0.3s;\n                animation-duration: 0.3s;\n        -webkit-animation-timing-function: ease;\n                animation-timing-function: ease;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n.navbar-container .loading-animation-container .navbar-non-mobile-container .navbar-non-mobile {\n        text-align: right; }\n.navbar-container .loading-animation-container .navbar-non-mobile-container .navbar-non-mobile .navbar-non-mobile-element {\n          display: inline-block;\n          margin-left: 40px;\n          font-size: 1.2em;\n          line-height: 60px; }\n.navbar-container .loading-animation-container .navbar-non-mobile-container .navbar-non-mobile .navbar-non-mobile-element:hover {\n            cursor: pointer; }\n.navbar-container .navbar {\n    display: flex;\n    height: 70px;\n    overflow: hidden;\n    width: 100%;\n    top: 0;\n    /* Position the navbar at the top of the page */ }\n.navbar-container .navbar .logo-container {\n      float: left;\n      margin: 10px 20px;\n      height: 50px;\n      cursor: pointer;\n      display: flex;\n      display: none; }\n.navbar-container .navbar .logo-container:focus {\n        outline: none; }\n.navbar-container .navbar .logo-container .logo {\n        background-size: 100% 100%;\n        display: inline-block;\n        height: 50px;\n        width: 20px; }\n.navbar-container .navbar .logo-container .logo-label-container {\n        display: inline-block;\n        width: 120px; }\n.navbar-container .navbar .logo-container .logo-label-container .logo-label {\n          padding: 5px 0px 5px 10px;\n          font-size: 16px;\n          text-transform: uppercase; }\n.navbar-container .navbar .logo-container .logo-label-container .logo-label span {\n            margin: 0;\n            display: block;\n            line-height: 20px; }\n.navbar-container .navbar .navbar-navigation {\n      display: block; }\n.navbar-container .navbar .navbar-navigation .navbar-navigation-link {\n        display: block;\n        text-decoration: none;\n        font-size: 14px;\n        text-transform: uppercase;\n        cursor: pointer; }\n.navbar-container .navbar .navbar-menu-icon-container {\n      transition: background-color 0.5s ease; }\n.navbar-container .navbar .navbar-menu-icon-container .navbar-menu-icon {\n        width: 35px;\n        float: right;\n        z-index: 99; }\n.navbar-container .navbar .navbar-menu-icon-container .navbar-menu-icon:hover {\n          cursor: pointer; }\n.navbar-container .navbar .navbar-menu-icon-container .navbar-menu-icon .bar {\n          height: 2px;\n          width: 35px;\n          background-color: #1f1f1f;\n          margin: 6px 0;\n          transition: all 0.5s ease; }\n.navbar-container .navbar .navbar-menu-icon-container {\n  position: fixed;\n  z-index: 99;\n  margin-top: 15px;\n  right: 30px;\n  top: 0; }\n.navbar-container .navbar .navbar-page-overlay {\n  display: none;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  opacity: 0; }\n.navbar-container .navbar .navbar-page-overlay.show {\n    display: block;\n    -webkit-animation-name: fade-in;\n            animation-name: fade-in;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n.navbar-container .navbar .navbar-navigation {\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding-top: 100px;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n  overflow: hidden;\n  z-index: 1;\n  background-color: #fff; }\n.navbar-container .navbar .navbar-navigation .navbar-navigation-link {\n    font-size: 1.3em;\n    padding: 4px 20px 4px 50px;\n    transition: padding 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.3s; }\n.navbar-container .navbar .navbar-navigation .navbar-navigation-link:hover, .navbar-container .navbar .navbar-navigation .navbar-navigation-link:focus {\n      background-color: #007aff;\n      padding-left: 70px; }\n.navbar-container .navbar .navbar-navigation .dropdown {\n    display: block;\n    /* Only display the dropdown content on mobile so that \"Kurse\" is only displayed once */ }\n.navbar-container .navbar .navbar-navigation .dropdown > .navbar-navigation-link {\n      display: none; }\n.navbar-container .navbar .navbar-navigation .dropdown .dropdown-content {\n      display: block; }\n.navbar-container .navbar.mobile-nav-open .navbar-navigation {\n  -webkit-transform: translateX(0%);\n          transform: translateX(0%); }\n.navbar-container .navbar.mobile-nav-open .navbar-menu-icon-container {\n  background-color: transparent; }\n.navbar-container .navbar.mobile-nav-open .navbar-menu-icon-container .navbar-menu-icon .bar1 {\n    width: 27px;\n    -webkit-transform: translate(29px, -1px) rotate(45deg);\n            transform: translate(29px, -1px) rotate(45deg); }\n.navbar-container .navbar.mobile-nav-open .navbar-menu-icon-container .navbar-menu-icon .bar2 {\n    width: 50px; }\n.navbar-container .navbar.mobile-nav-open .navbar-menu-icon-container .navbar-menu-icon .bar3 {\n    width: 27px;\n    -webkit-transform: translate(29px, 1px) rotate(-45deg);\n            transform: translate(29px, 1px) rotate(-45deg); }\n@media (min-width: 768px) {\n  .navbar-container .navbar .navbar-navigation {\n    max-width: 400px; } }\n@media (min-width: 992px) {\n  .navbar-container {\n    height: 100px; }\n    .navbar-container .loading-animation-container .loader-container {\n      top: 25px; }\n    .navbar-container .loading-animation-container .logo-container .logo-container-inner .logo {\n      width: 160px;\n      margin-top: 20px;\n      height: 60px; }\n    .navbar-container .loading-animation-container .navbar-non-mobile-container {\n      display: block; }\n      .navbar-container .loading-animation-container .navbar-non-mobile-container .navbar-non-mobile .navbar-non-mobile-element {\n        line-height: 100px; }\n    .navbar-container .navbar .navbar-menu-icon-container {\n      display: none; } }\n@-webkit-keyframes logo-slide-down {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n@keyframes logo-slide-down {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var model_service_1 = __webpack_require__(/*! ../../services/model.service */ "./src/app/services/model.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modelService, router) {
        this.modelService = modelService;
        this.router = router;
        this.isMobileNavOpen = false;
        this.scrolledToTop = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isBrowser = this.modelService.isPlatformBrowser();
        if (this.isBrowser) {
            this.pageLoaded = true; // true
            this.pageInitiallyLoaded = false;
        }
        else {
            this.pageLoaded = true;
            this.pageInitiallyLoaded = true;
        }
        this.modelService.isPageLoaded().subscribe(function (x) {
            if (_this.modelService.isPlatformBrowser()) {
                _this.pageLoaded = x;
                if (x && !_this.pageInitiallyLoaded) {
                    _this.pageInitiallyLoaded = true;
                }
            }
        });
        this.router.events.subscribe(function (evt) {
            _this.pageIsHome = evt.url === '/';
        });
        if (this.modelService.isPlatformBrowser()) {
            window.addEventListener('scroll', function (e) {
                var last_known_scroll_position = window.scrollY;
                this.scrolledToTop = last_known_scroll_position === 0;
            }.bind(this));
        }
    };
    HeaderComponent.prototype.toggleMobileNav = function () {
        this.isMobileNavOpen = !this.isMobileNavOpen;
    };
    HeaderComponent.prototype.closeMobileNav = function () {
        this.isMobileNavOpen = false;
    };
    HeaderComponent.prototype.scrollIntoView = function (elementId) {
        this.isMobileNavOpen = false;
        var element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/sites/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/sites/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-image [image]='backgroundImage' [listId]='mainPageListShortId' title='Kontakt' *ngIf=\"backgroundImage\"></app-header-image>\r\n<div *ngIf=\"contact\" class=\"contact-content-container main-content-container main-content-container-padding\">\r\n  <!--<form #f=\"ngForm\"  \r\n    (ngSubmit)=\"onSubmit(f.value)\"  \r\n    class=\"ui form\">\r\n    <div class=\"field\">  \r\n      <label for=\"skuInput\">SKU</label>  \r\n      <input type=\"text\"  \r\n        id=\"skuInput\"  \r\n        placeholder=\"SKU\"  \r\n        name=\"sku\" ngModel>  \r\n    </div>\r\n    <button type=\"submit\" class=\"ui button\">Submit</button>  \r\n  </form>  -->\r\n</div>"

/***/ }),

/***/ "./src/app/sites/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sites/contact/contact.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sites/contact/contact.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_service_1 = __webpack_require__(/*! ./../../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(modelService, dynamicContentService) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.contact = undefined;
        this.contactListShortId = zenkit_collections_1.ZenkitCollections.contact.shortId;
        this.mainPageListShortId = zenkit_collections_1.ZenkitCollections.home.shortId;
        this.personInfo = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            course: new forms_1.FormControl(),
            text: new forms_1.FormControl(),
            age: new forms_1.FormControl()
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        Promise.all([this.modelService.getContact(), this.modelService.getMainPageSections()]).then(function (results) {
            _this.contact = results[0];
            _this.backgroundImage = _.get(results[1], ['contactSection', 'image']);
            _this.modelService.setPageLoaded(true);
        });
    };
    ContactComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.contactListShortId);
    };
    ContactComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/sites/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/sites/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService, dynamic_content_service_1.DynamicContentService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/sites/courses/course-details/course-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/sites/courses/course-details/course-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-image [image]='course.image' [listId]='coursesListShortId' [title]='course.title' *ngIf=\"course\"></app-header-image>\r\n<div class=\"course-details-content-container main-content-container main-content-container-padding\" *ngIf=\"course\">\r\n  <div class=\"main-content\">\r\n    <div class=\"course-description\" [innerHTML]=\"course.description\"></div>\r\n\r\n    <app-schedule [courseShortId]='course.shortId'></app-schedule>\r\n\r\n    <iframe class=\"course-details-video\" *ngIf=\"course.youtubeId\" [src]=\"getYoutubeLink()\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n  </div>\r\n</div>\r\n<!--<app-image-slider [images]='[course.image]' [listid]='coursesListShortId' *ngIf=\"course\"></app-image-slider>-->\r\n"

/***/ }),

/***/ "./src/app/sites/courses/course-details/course-details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/sites/courses/course-details/course-details.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.course-details-content-container {\n  opacity: 0;\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  color: #1f1f1f; }\n.course-details-content-container .course-description {\n    margin-top: 50px;\n    margin-bottom: 50px;\n    white-space: pre-line;\n    word-wrap: break-word; }\n.course-details-content-container .course-details-link {\n    color: #1f1f1f;\n    display: block;\n    margin-bottom: 50px; }\n.course-details-content-container .course-details-video {\n    width: 100%;\n    height: 300px; }\n@media (min-width: 768px) {\n  .course-details-content-container .course-details-video {\n    height: 400px; } }\n@media (min-width: 992px) {\n  .course-details-content-container .course-details-video {\n    height: 500px; } }\n"

/***/ }),

/***/ "./src/app/sites/courses/course-details/course-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sites/courses/course-details/course-details.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var model_service_1 = __webpack_require__(/*! ./../../../services/model.service */ "./src/app/services/model.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var zenkit_collections_1 = __webpack_require__(/*! ../../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var CourseDetailsComponent = /** @class */ (function () {
    function CourseDetailsComponent(modelService, dynamicContentService, route, domSanitizer) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.route = route;
        this.domSanitizer = domSanitizer;
        this.coursesListShortId = zenkit_collections_1.ZenkitCollections.courses.shortId;
    }
    CourseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        this.sub = this.route.params.subscribe(function (params) {
            _this.courseShortId = params['shortId'];
            _this.modelService.getCourses().then(function (coursesData) {
                _this.course = _.find(coursesData.courses, function (course) {
                    return course.shortId === _this.courseShortId;
                });
                _this.modelService.setPageLoaded(true);
            });
        });
    };
    CourseDetailsComponent.prototype.getYoutubeLink = function () {
        var url = 'https://www.youtube.com/embed/' + this.course.youtubeId + '?rel=0&amp;showinfo=0&amp;loop=1&amp;playlist=' + this.course.youtubeId;
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    CourseDetailsComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.coursesListShortId);
    };
    CourseDetailsComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    CourseDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-course-details',
            template: __webpack_require__(/*! ./course-details.component.html */ "./src/app/sites/courses/course-details/course-details.component.html"),
            styles: [__webpack_require__(/*! ./course-details.component.scss */ "./src/app/sites/courses/course-details/course-details.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            router_1.ActivatedRoute,
            platform_browser_1.DomSanitizer])
    ], CourseDetailsComponent);
    return CourseDetailsComponent;
}());
exports.CourseDetailsComponent = CourseDetailsComponent;


/***/ }),

/***/ "./src/app/sites/courses/course-information/course-information.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/sites/courses/course-information/course-information.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"header-image\">\r\n  <app-header-image [image]='backgroundImage' [listId]='coursesListShortId' title='Preise und Stundenpläne'></app-header-image>\r\n</div> -->\r\n<div class=\"courses-content-container main-content-container main-content-container-padding main-content-navbar-spacer\" *ngIf=\"text\">\r\n  <div class=\"courses-content main-content\">\r\n    <app-schedule displayNavigationDrawer='true' schedule = 'scheduleMG'></app-schedule>\r\n    <a name=\"preise\"></a>\r\n    <h2 id=\"preise\">Preise</h2>\r\n    <div class=\"courses-gerneral-description\" [innerHTML]='text'></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/courses/course-information/course-information.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/sites/courses/course-information/course-information.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.header-image {\n  display: none; }\n.courses-content-container {\n  padding-bottom: 20px;\n  opacity: 0;\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n.courses-content-container .schedule {\n    width: 100%;\n    height: 350px; }\n@media (min-width: 768px) {\n  .header-image {\n    display: block; }\n  .courses-content-container {\n    padding-bottom: 50px; }\n    .courses-content-container .schedule {\n      height: 600px; } }\n@media (min-width: 768px) {\n  .courses-content-container {\n    padding-top: 30px;\n    padding-bottom: 70px; }\n    .courses-content-container .schedule {\n      height: 750px; } }\n"

/***/ }),

/***/ "./src/app/sites/courses/course-information/course-information.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sites/courses/course-information/course-information.component.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_service_1 = __webpack_require__(/*! ./../../../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var CourseInformationComponent = /** @class */ (function () {
    function CourseInformationComponent(modelService, dynamicContentService, route) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.route = route;
        this.coursesListShortId = zenkit_collections_1.ZenkitCollections.courses.shortId;
    }
    CourseInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        Promise.all([
            this.modelService.getCourses(), this.modelService.getMainPageSections(),
            this.modelService.getScheduleData()
        ]).then(function (results) {
            var courseData = results[0];
            var mainPageData = results[1];
            _this.text = courseData.text;
            _this.registrationChild = _this.getFileSrc(courseData.registrationChild);
            _this.registrationAdult = _this.getFileSrc(courseData.registrationAdult);
            _this.scheduleMG = _this.getFileSrc(courseData.scheduleMG);
            _this.scheduleLB = _this.getFileSrc(courseData.scheduleLB);
            _this.backgroundImage = _.get(mainPageData, ['coursesSection', 'image']);
            _this.modelService.setPageLoaded(true);
        });
    };
    CourseInformationComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.coursesListShortId);
    };
    CourseInformationComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    CourseInformationComponent = __decorate([
        core_1.Component({
            selector: 'app-course-information',
            template: __webpack_require__(/*! ./course-information.component.html */ "./src/app/sites/courses/course-information/course-information.component.html"),
            styles: [__webpack_require__(/*! ./course-information.component.scss */ "./src/app/sites/courses/course-information/course-information.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            router_1.ActivatedRoute])
    ], CourseInformationComponent);
    return CourseInformationComponent;
}());
exports.CourseInformationComponent = CourseInformationComponent;


/***/ }),

/***/ "./src/app/sites/courses/courses.component.html":
/*!******************************************************!*\
  !*** ./src/app/sites/courses/courses.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content-container main-content-container-padding courses-content-container main-content-navbar-spacer\">\r\n  <div class=\"main-content\">\r\n    <h2 class=\"courses-title main-title\">Kurse</h2>\r\n  </div>\r\n</div>\r\n<app-courses-overview></app-courses-overview>\r\n"

/***/ }),

/***/ "./src/app/sites/courses/courses.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sites/courses/courses.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.courses-content-container {\n  color: #1f1f1f; }\n.courses-content-container .courses-title {\n    margin-top: 20px;\n    margin-bottom: 20px; }\n@media (min-width: 768px) {\n  .courses-content-container {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/sites/courses/courses.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sites/courses/courses.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_service_1 = __webpack_require__(/*! ./../../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(modelService, dynamicContentService, route) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.route = route;
        this.coursesListShortId = zenkit_collections_1.ZenkitCollections.courses.shortId;
    }
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.getCourses().then(function (coursesData) {
            _this.text = coursesData.text;
            _this.scheduleMG = coursesData.scheduleMG;
            _this.scheduleLB = coursesData.scheduleLB;
        });
        this.modelService.getMainPageSections().then(function (mainPageData) {
            _this.backgroundImage = _.get(mainPageData, ['coursesSection', 'image']);
        });
    };
    CoursesComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.coursesListShortId);
    };
    CoursesComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/sites/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.scss */ "./src/app/sites/courses/courses.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            router_1.ActivatedRoute])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;


/***/ }),

/***/ "./src/app/sites/current/current-details/current-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/sites/current/current-details/current-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-post-details main-content-container main-content-container-padding main-content-navbar-spacer\" *ngIf=\"blogPost\">\r\n    <div class=\"blog-post-details-content main-content\">\r\n        <h1 class=\"post-title title-medium\">{{blogPost.title}}</h1>\r\n        <app-image-slider [images]='blogPost.images' [listid]='currentListShortId' *ngIf=\"blogPost.images && blogPost.images.length > 0\"></app-image-slider>\r\n        <div class=\"post-description\" [innerHTML]=\"blogPost.description\"></div>\r\n        <div class=\"post-date\">gepostet am {{getDateStringLong()}}</div>\r\n        <iframe class=\"blog-post-details-video\" *ngIf=\"blogPost.youtubeVideoId\" [src]=\"getYoutubeLink()\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/current/current-details/current-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/sites/current/current-details/current-details.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.blog-post-details {\n  opacity: 0;\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n.blog-post-details .blog-post-details-content .post-title {\n    text-align: center;\n    margin-top: 20px;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 20px; }\n.blog-post-details .blog-post-details-content .post-date {\n    display: inline-block;\n    margin: 0 0 100px 0;\n    font-size: 18px;\n    display: inline-block;\n    font-size: 12px;\n    padding: 0 10px;\n    font-weight: 600;\n    border: 1px solid #1f1f1f; }\n.blog-post-details .blog-post-details-content .post-description {\n    margin-top: 50px;\n    margin-bottom: 50px; }\n.blog-post-details .blog-post-details-video {\n    width: 100%;\n    height: 300px; }\n@media (min-width: 768px) {\n  .blog-post-details .blog-post-details-content .post-title {\n    margin-bottom: 30px; }\n  .blog-post-details .blog-post-details-video {\n    height: 400px; } }\n@media (min-width: 992px) {\n  .blog-post-details .blog-post-details-video {\n    height: 500px; } }\n"

/***/ }),

/***/ "./src/app/sites/current/current-details/current-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/sites/current/current-details/current-details.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_service_1 = __webpack_require__(/*! ./../../../services/utility.service */ "./src/app/services/utility.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var model_service_1 = __webpack_require__(/*! ./../../../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
__webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var CurrentDetailsComponent = /** @class */ (function () {
    function CurrentDetailsComponent(modelService, dynamicContentService, route, utilityService, domSanitizer) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.route = route;
        this.utilityService = utilityService;
        this.domSanitizer = domSanitizer;
    }
    CurrentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        this.currentListShortId = zenkit_collections_1.ZenkitCollections.current.shortId;
        this.sub = this.route.params.subscribe(function (params) {
            var blogPostShortId = params['shortId'];
            _this.modelService.getPostByShortId(blogPostShortId).then(function (blogPost) {
                _this.blogPost = blogPost;
                _this.modelService.setPageLoaded(true);
            });
        });
    };
    CurrentDetailsComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.currentListShortId);
    };
    CurrentDetailsComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    CurrentDetailsComponent.prototype.getPostImageBackgroundStyle = function (post) {
        var image = _.head(post.images);
        return this.getBackgroundStyle(image);
    };
    CurrentDetailsComponent.prototype.getDateStringLong = function () {
        return this.utilityService.convertDateToStringLong(this.blogPost.date);
    };
    CurrentDetailsComponent.prototype.getYoutubeLink = function () {
        var url = 'https://www.youtube.com/embed/' + this.blogPost.youtubeVideoId;
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    CurrentDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-current-details',
            template: __webpack_require__(/*! ./current-details.component.html */ "./src/app/sites/current/current-details/current-details.component.html"),
            styles: [__webpack_require__(/*! ./current-details.component.scss */ "./src/app/sites/current/current-details/current-details.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            router_1.ActivatedRoute,
            utility_service_1.UtilityService,
            platform_browser_1.DomSanitizer])
    ], CurrentDetailsComponent);
    return CurrentDetailsComponent;
}());
exports.CurrentDetailsComponent = CurrentDetailsComponent;


/***/ }),

/***/ "./src/app/sites/current/current.component.html":
/*!******************************************************!*\
  !*** ./src/app/sites/current/current.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-image *ngIf=\"backgroundImage\" [image]='backgroundImage' [listId]='mainPageListShortId' title='Aktuelles'></app-header-image>\r\n<div class=\"main-content-container main-content-container-padding\">\r\n  <div class=\"blog-posts main-content\">\r\n    <div *ngFor=\"let post of posts\" class=\"post-container\">\r\n      <div class=\"post\">\r\n        <a class=\"post-image-container\" [routerLink]=\"post.routerLink\" [ngStyle]=\"getPostImageBackgroundStyle(post)\" *ngIf=\"post.images && post.images.length > 0\">\r\n            <i class=\"default-icon\" *ngIf=\"!post.images || post.images.length === 0\"></i>\r\n        </a>\r\n        <div class=\"post-date\">{{getDateStringLong(post.date)}}</div>\r\n        <a [routerLink]=\"post.routerLink\">\r\n          <h2 [innerHTML]='post.title' class=\"post-heading\"></h2>\r\n        </a>\r\n        <div class=\"post-description-container\">\r\n          <div class=\"post-description\" [innerHTML]='post.description'></div>\r\n          <div class=\"post-description-overlay\"></div>\r\n        </div>\r\n        <a class=\"post-more-button\" [routerLink]=\"post.routerLink\">Mehr erfahren</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/current/current.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sites/current/current.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.main-content-container .blog-posts {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n.main-content-container .blog-posts .post-container {\n    padding-bottom: 50px; }\n.main-content-container .blog-posts .post-container .post .post-image-container {\n      display: block;\n      height: 300px;\n      background-size: cover;\n      background-position: center;\n      background-color: #2c2c2c;\n      display: flex;\n      -moz-flex-direction: row;\n      flex-direction: row;\n      align-content: center;\n      align-items: center;\n      text-align: center;\n      justify-content: center; }\n.main-content-container .blog-posts .post-container .post .post-image-container .default-icon {\n        width: 40px;\n        height: 100px;\n        background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABzCAYAAADJ7BGMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAEEWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkRBN0NFNjgxQTMzQzExRTI4MjU2RTBBMkQ5MzEyODBCPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkRBN0NFNjgyQTMzQzExRTI4MjU2RTBBMkQ5MzEyODBCPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkRBN0NFNjg0QTMzQzExRTI4MjU2RTBB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\");\n        background-size: 100% 100%; }\n.main-content-container .blog-posts .post-container .post .post-date {\n      margin-top: 30px;\n      display: inline-block;\n      font-size: 12px;\n      padding: 0 10px;\n      font-weight: 600;\n      color: #fff;\n      background-color: #1f1f1f; }\n.main-content-container .blog-posts .post-container .post .post-heading {\n      margin: 10px 0 5px 0;\n      line-height: 30px; }\n.main-content-container .blog-posts .post-container .post .post-description-container {\n      height: 150px;\n      padding-bottom: 20px;\n      text-overflow: ellipsis;\n      position: relative; }\n.main-content-container .blog-posts .post-container .post .post-description-container .post-description {\n        height: 160px;\n        overflow: hidden; }\n.main-content-container .blog-posts .post-container .post .post-description-container .post-description-overlay {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 75px;\n        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #fff 100%); }\n.main-content-container .blog-posts .post-container .post .post-more-button {\n      margin-top: 20px;\n      text-decoration: underline; }\n@media (min-width: 768px) {\n  .main-content-container .blog-posts {\n    padding-top: 50px;\n    padding-bottom: 50px;\n    display: flex;\n    flex-wrap: wrap; }\n    .main-content-container .blog-posts .post-container {\n      opacity: 0;\n      -webkit-animation-name: fade-in;\n              animation-name: fade-in;\n      -webkit-animation-delay: 1.3s;\n              animation-delay: 1.3s;\n      -webkit-animation-duration: 0.7s;\n              animation-duration: 0.7s;\n      -webkit-animation-timing-function: ease;\n              animation-timing-function: ease;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      display: flex;\n      -moz-flex-direction: column;\n      flex-direction: column;\n      padding-bottom: 0;\n      display: inline-block;\n      width: 49%;\n      border-bottom: 1px solid #2c2c2c; }\n      .main-content-container .blog-posts .post-container .post {\n        padding-bottom: 50px;\n        padding-top: 50px; }\n      .main-content-container .blog-posts .post-container:nth-child(odd) {\n        border-right: 1px solid #2c2c2c; }\n        .main-content-container .blog-posts .post-container:nth-child(odd) .post {\n          padding-right: 50px; }\n      .main-content-container .blog-posts .post-container:nth-child(even) .post {\n        padding-left: 50px; }\n      .main-content-container .blog-posts .post-container:nth-child(-n+2) .post {\n        padding-top: 0; }\n      .main-content-container .blog-posts .post-container:nth-last-child(-n+2) {\n        border-bottom: none; }\n        .main-content-container .blog-posts .post-container:nth-last-child(-n+2) .post {\n          padding-bottom: 0; } }\n@media (min-width: 992px) {\n  .main-content-container .blog-posts {\n    max-width: 992px;\n    margin: 0 auto; } }\n"

/***/ }),

/***/ "./src/app/sites/current/current.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sites/current/current.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_service_1 = __webpack_require__(/*! ./../../services/utility.service */ "./src/app/services/utility.service.ts");
var model_service_1 = __webpack_require__(/*! ./../../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
__webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var CurrentComponent = /** @class */ (function () {
    function CurrentComponent(modelService, dynamicContentService, utilityService) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.utilityService = utilityService;
        this.currentListShortId = zenkit_collections_1.ZenkitCollections.current.shortId;
        this.mainPageListShortId = zenkit_collections_1.ZenkitCollections.home.shortId;
    }
    // testFunction(): Promise<any> {
    //   return this.dynamicContentService
    //   .fetchZenkitListData(ZenkitCollections.current.shortId)
    //   .then((response) => {
    //     return new Promise((resolve, reject) => {
    //       const test = _.get(response, ['elements']);
    //       return resolve(test);
    //     });
    //   });
    // }
    CurrentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        // this.dataPromise = this.testFunction();
        Promise.all([this.modelService.getPosts(), this.modelService.getMainPageSections()]).then(function (results) {
            _this.posts = results[0];
            var mainPageData = results[1];
            _this.backgroundImage = _.get(mainPageData, ['blogSection', 'image']);
            _this.modelService.setPageLoaded(true);
        });
    };
    CurrentComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.currentListShortId);
    };
    CurrentComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    CurrentComponent.prototype.getPostImageBackgroundStyle = function (post) {
        var image = _.head(post.images);
        return this.getBackgroundStyle(image);
    };
    CurrentComponent.prototype.getDateStringLong = function (date) {
        return this.utilityService.convertDateToStringLong(date);
    };
    CurrentComponent = __decorate([
        core_1.Component({
            selector: 'app-current',
            template: __webpack_require__(/*! ./current.component.html */ "./src/app/sites/current/current.component.html"),
            styles: [__webpack_require__(/*! ./current.component.scss */ "./src/app/sites/current/current.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            utility_service_1.UtilityService])
    ], CurrentComponent);
    return CurrentComponent;
}());
exports.CurrentComponent = CurrentComponent;


/***/ }),

/***/ "./src/app/sites/imprint/imprint.component.html":
/*!******************************************************!*\
  !*** ./src/app/sites/imprint/imprint.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imprint-content-container main-content-container main-content-container-padding\">\r\n  <div class=\"imprint-content main-content\">\r\n    <h1  class=\"imprint-heading\">Impressum</h1>\r\n    <div class=\"imprint-general-description\" [innerHTML]='contact.imprint' *ngIf=\"contact\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/imprint/imprint.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sites/imprint/imprint.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.imprint-content-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #1f1f1f; }\n.imprint-content-container .imprint-heading {\n    font-size: 30px;\n    font-weight: 600; }\n@media (min-width: 768px) {\n  .imprint-content-container {\n    padding-top: 50px;\n    padding-bottom: 50px; } }\n@media (min-width: 992px) {\n  .imprint-content-container {\n    padding-top: 70px;\n    padding-bottom: 70px; } }\n"

/***/ }),

/***/ "./src/app/sites/imprint/imprint.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sites/imprint/imprint.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var dynamic_content_service_1 = __webpack_require__(/*! ../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var model_service_1 = __webpack_require__(/*! ../../services/model.service */ "./src/app/services/model.service.ts");
var ImprintComponent = /** @class */ (function () {
    function ImprintComponent(modelService, dynamicContentService) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
    }
    ImprintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        this.modelService.getContact().then(function (result) {
            _this.contact = result;
            _this.modelService.setPageLoaded(true);
        });
    };
    ImprintComponent = __decorate([
        core_1.Component({
            selector: 'app-imprint',
            template: __webpack_require__(/*! ./imprint.component.html */ "./src/app/sites/imprint/imprint.component.html"),
            styles: [__webpack_require__(/*! ./imprint.component.scss */ "./src/app/sites/imprint/imprint.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService, dynamic_content_service_1.DynamicContentService])
    ], ImprintComponent);
    return ImprintComponent;
}());
exports.ImprintComponent = ImprintComponent;


/***/ }),

/***/ "./src/app/sites/locations/location/location.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sites/locations/location/location.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-image [image]='location.image' [listId]='locationsListShortId' [title]='location.name' *ngIf=\"location\"></app-header-image>\r\n\r\n<div *ngIf=\"location\" class=\"location-content-container  main-content-container main-content-container-padding\">\r\n  <div class=\"location-content main-content\">\r\n    <div class=\"location-description\" [innerHTML]=\"location.description\">\r\n    </div>\r\n    <div class=\"location-info-container\">\r\n      <span class=\"location-info-heading\">Adresse</span>\r\n      <span>{{location.addressName}}</span>\r\n      <span>{{location.addressStreet}}</span>\r\n      <span class=\"text-inline\">{{location.addressZIP}}</span>\r\n      <span class=\"text-inline\">&nbsp;{{location.addressCity}}</span>\r\n      <div class=\"tth-button-container google-maps-button\">\r\n          <a class=\"tth-button\" href={{location.embed}}>\r\n            <i class=\"tth-button-icon far fa-eye\"></i>\r\n            <span class=\"tth-button-label\">Auf Google Maps anzeigen</span>\r\n          </a>\r\n        </div>\r\n      <!-- <span class=\"location-info-heading\">Beratungszeiten</span>\r\n      <span>{{location.consultationTime1}}</span>\r\n      <span *ngIf=\"location.consultationTime2\">{{location.consultationTime2}}</span>\r\n      <span *ngIf=\"location.consultationTime3\">{{location.consultationTime3}}</span> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <div *ngIf=\"location\" class=\"google-maps-iframe-container\">\r\n  <iframe id=\"google-maps-iframe\" [src]=\"getSafeUrl(location.embed)\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n</div> -->\r\n<app-image-slider *ngIf=\"location && location.gallery && location.gallery.length > 0\" [images]='location.gallery' [listid]='locationsListShortId'></app-image-slider>\r\n\r\n<div *ngIf=\"location && location.appointmentUuids && location.appointmentUuids.length > 0\" class=\"location-content-container  main-content-container main-content-container-padding\">\r\n  <div class=\"location-content main-content\">\r\n    <app-schedule [locationInitials]='location.initials'></app-schedule>\r\n  </div>\r\n</div>\r\n<div class=\"location-bottom-space\"></div>\r\n"

/***/ }),

/***/ "./src/app/sites/locations/location/location.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/sites/locations/location/location.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.location-content-container {\n  opacity: 0;\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n.location-content-container .location-content {\n    padding-top: 50px; }\n.location-content-container .location-content .location-info-container {\n      margin-top: 30px; }\n.location-content-container .location-content .location-info-container span {\n        display: block; }\n.location-content-container .location-content .location-info-container .location-info-heading {\n        margin-top: 20px;\n        font-weight: 600; }\n.location-content-container .location-content .location-info-container .text-inline {\n        display: inline-block; }\n.location-content-container .location-content .location-info-container .google-maps-button {\n        margin-top: 10px;\n        margin-bottom: 50px; }\n.google-maps-iframe-container {\n  opacity: 0;\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  margin-bottom: 100px;\n  margin-top: 100px; }\n.location-bottom-space {\n  height: 50px; }\n"

/***/ }),

/***/ "./src/app/sites/locations/location/location.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sites/locations/location/location.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var zenkit_collections_1 = __webpack_require__(/*! ./../../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var model_service_1 = __webpack_require__(/*! ../../../services/model.service */ "./src/app/services/model.service.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ../../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var LocationComponent = /** @class */ (function () {
    function LocationComponent(modelService, dynamicContentService, route, domSanitizer) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.route = route;
        this.domSanitizer = domSanitizer;
        this.locationsListShortId = zenkit_collections_1.ZenkitCollections.locations.shortId;
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        this.sub = this.route.params.subscribe(function (params) {
            _this.locationShortId = params['shortId'];
            _this.modelService.getLocationByShortId(_this.locationShortId).then(function (location) {
                _this.location = location;
                _this.modelService.setPageLoaded(true);
            });
        });
    };
    LocationComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.locationsListShortId);
    };
    LocationComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    LocationComponent.prototype.getSafeUrl = function (url) {
        var test = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        return test;
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/sites/locations/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.scss */ "./src/app/sites/locations/location/location.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            router_1.ActivatedRoute,
            platform_browser_1.DomSanitizer])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;


/***/ }),

/***/ "./src/app/sites/locations/locations.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sites/locations/locations.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content-container main-content-container-padding locations-content-container\">\r\n  <div class=\"main-content\">\r\n    <h2 class=\"locations-title main-title\">Standorte</h2>\r\n  </div>\r\n</div>\r\n<div class=\"courses-overview\">\r\n  <div class=\"courses-overview-bg-images-mask\">\r\n    <div *ngFor=\"let location of locations\" class=\"courses-overview-bg-image-container\" [ngStyle]=\"getBackgroundStyle(location.image)\">\r\n      <div class=\"courses-overview-bg-image-fade\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"course-tags-container main-content-container\">\r\n    <div class=\"course-tags main-content\">\r\n      <a *ngFor=\"let location of locations, let i = index\" class=\"course-tag-container\" (mouseenter)=\"mouseEnter(location)\" (mouseleave)=\"mouseLeave(course)\" [routerLink]=\"getLocationLink(location)\">\r\n        <div class=\"black-bg-mask\">\r\n          <div class=\"home-thumb-black-bg\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"thumb-info-block\">\r\n          <div class=\"thumb-spacer\">\r\n\r\n          </div>\r\n          <div class=\"thumb-title\">\r\n            {{location.name}}\r\n          </div>  \r\n        </div>\r\n      </a>\r\n      </div>\r\n  </div>\r\n</div>\r\n  \r\n\r\n<!-- <div class=\"header-image\" [ngStyle]=\"getBackgroundStyle(backgroundImage)\"></div> \r\n<div class=\"performances-container\">\r\n  <div class=\"posts\" *ngIf=\"locationYW\">\r\n    <h2 [innerHTML]='locationYW.name'></h2>\r\n    <div class=\"team-member-content-container\">\r\n      <img src={{getFileSrc(locationYW.gallery[0])}} class=\"team-member-picture-frame\"\r\n      (click)=\"dialog.show(locationYW.gallery, locationsListShortId)\"/>\r\n      <div class=\"team-member-description-container\" [innerHTML]='locationYW.description'></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"performances-container\">\r\n  <div class=\"posts\" *ngIf=\"locationLB\">\r\n    <h2 [innerHTML]='locationLB.name'></h2>\r\n    <div class=\"team-member-content-container\">\r\n      <img src={{getFileSrc(locationLB.gallery[0])}} class=\"team-member-picture-frame\"\r\n      (click)=\"dialog.show(locationLB.gallery, locationsListShortId)\"/>\r\n      <div class=\"team-member-description-container\" [innerHTML]='locationLB.description'></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-gallery #dialog></app-gallery>-->"

/***/ }),

/***/ "./src/app/sites/locations/locations.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sites/locations/locations.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.courses-overview {\n  width: 100%;\n  overflow: hidden;\n  position: relative; }\n.courses-overview .course-tags-container {\n    opacity: 0;\n    -webkit-animation-name: fade-in;\n            animation-name: fade-in;\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n.courses-overview .course-tags-container .course-tags {\n      padding-bottom: 60px;\n      display: flex;\n      flex-wrap: wrap; }\n.courses-overview .course-tags-container .course-tags .course-tag-container {\n        width: 100%;\n        display: inline-block;\n        position: relative;\n        padding: 0 10px;\n        border-bottom: 1px solid #2c2c2c;\n        overflow: hidden;\n        text-decoration: none;\n        transition: background-color 0.3s ease, padding 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n.courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block {\n          -webkit-transform: translateX(0px) translateY(0px);\n          transform: translateX(0px) translateY(0px);\n          transition: -webkit-transform 150ms;\n          transition: transform 150ms;\n          transition: transform 150ms, -webkit-transform 150ms;\n          position: static;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          overflow-x: visible;\n          overflow-y: visible;\n          width: 100%;\n          height: 200%;\n          padding: 10px 10px 15px 10px;\n          -webkit-transform: none;\n          transform: none; }\n.courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-index {\n            font-size: 12px;\n            font-style: italic;\n            margin-right: 20px; }\n.courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-title {\n            position: static;\n            overflow-x: visible;\n            overflow-y: visible;\n            margin-bottom: 0;\n            padding-right: 0;\n            text-decoration: none;\n            text-transform: uppercase;\n            font-size: 14px;\n            color: #1f1f1f;\n            clear: none;\n            letter-spacing: 2px; }\n.courses-overview .course-tags-container .course-tags .course-tag-container:hover {\n          cursor: pointer; }\n.courses-overview .courses-overview-bg-images-mask {\n    display: none; }\n@media (max-width: 767px) {\n  .courses-overview .course-tags-container .course-tags .course-tag-container {\n    overflow: hidden; }\n    .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block {\n      display: flex; }\n      .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-index {\n        flex: 0; }\n      .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-title {\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        flex: 1; }\n    .courses-overview .course-tags-container .course-tags .course-tag-container:hover, .courses-overview .course-tags-container .course-tags .course-tag-container:focus {\n      background-color: #007aff;\n      padding-left: 30px; }\n      .courses-overview .course-tags-container .course-tags .course-tag-container:hover .thumb-title, .courses-overview .course-tags-container .course-tags .course-tag-container:focus .thumb-title {\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden; } }\n@media (min-width: 768px) {\n  .courses-overview {\n    height: 100%; }\n    .courses-overview .courses-overview-bg-images-mask {\n      display: block;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      overflow: hidden; }\n      .courses-overview .courses-overview-bg-images-mask .courses-overview-bg-image-container {\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-attachment: fixed;\n        background-size: cover;\n        background-position: center;\n        background-repeat: no-repeat;\n        opacity: 0;\n        -webkit-transform: translateX(0px) translateY(100%);\n        transform: translateX(0px) translateY(100%);\n        transition: opacity 500ms ease, -webkit-transform 250ms;\n        transition: opacity 500ms ease, transform 250ms;\n        transition: opacity 500ms ease, transform 250ms, -webkit-transform 250ms; }\n        .courses-overview .courses-overview-bg-images-mask .courses-overview-bg-image-container.active {\n          -webkit-transform: translateX(0px) translateY(0%);\n          transform: translateX(0px) translateY(0%);\n          opacity: 1; }\n        .courses-overview .courses-overview-bg-images-mask .courses-overview-bg-image-container .courses-overview-bg-image-fade {\n          width: 100%;\n          height: 100%;\n          background-color: rgba(255, 255, 255, 0.3); }\n    .courses-overview .course-tags-container {\n      padding: 110px 40px 20px 40px; }\n      .courses-overview .course-tags-container .course-tags .course-tag-container {\n        width: 31.33%;\n        padding: 0;\n        margin: 10px 1% 0 1%;\n        height: 150px;\n        border-bottom: 1px solid #1f1f1f; }\n        .courses-overview .course-tags-container .course-tags .course-tag-container .black-bg-mask {\n          position: absolute;\n          overflow-x: hidden;\n          overflow-y: hidden;\n          width: 100%;\n          height: 100%; }\n          .courses-overview .course-tags-container .course-tags .course-tag-container .black-bg-mask .home-thumb-black-bg {\n            opacity: 0;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background-color: #007aff;\n            -webkit-transform: translateX(0px) translateY(100%);\n            transform: translateX(0px) translateY(100%);\n            transition: opacity 250ms, -webkit-transform 250ms;\n            transition: opacity 250ms, transform 250ms;\n            transition: opacity 250ms, transform 250ms, -webkit-transform 250ms; }\n        .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block {\n          width: calc(100% - 20px); }\n          .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-spacer {\n            position: relative;\n            display: inline-block;\n            width: 100%;\n            height: 50%;\n            margin-top: -45px; }\n          .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-index {\n            display: none; }\n          .courses-overview .course-tags-container .course-tags .course-tag-container .thumb-info-block .thumb-title {\n            width: 100%;\n            margin-top: 10px;\n            transition: -webkit-transform 250ms;\n            transition: transform 250ms;\n            transition: transform 250ms, -webkit-transform 250ms;\n            -webkit-transform: translateX(0px) translateY(-5px);\n            transform: translateX(0px) translateY(-5px); }\n        .courses-overview .course-tags-container .course-tags .course-tag-container:hover {\n          cursor: pointer; }\n          .courses-overview .course-tags-container .course-tags .course-tag-container:hover .black-bg-mask .home-thumb-black-bg {\n            opacity: 1;\n            -webkit-transform: translateX(0px) translateY(0px);\n                    transform: translateX(0px) translateY(0px); }\n          .courses-overview .course-tags-container .course-tags .course-tag-container:hover .thumb-info-block {\n            -webkit-transform: translateX(0px) translateY(-100px);\n            transform: translateX(0px) translateY(-100px); }\n            .courses-overview .course-tags-container .course-tags .course-tag-container:hover .thumb-info-block .thumb-title {\n              font-weight: 600;\n              color: #fff; }\n        .courses-overview .course-tags-container .course-tags .course-tag-container:not(:hover) .thumb-info-block .thumb-title {\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden; } }\n.locations-content-container .locations-title {\n  margin-top: 20px;\n  opacity: 0;\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n@media (max-width: 767px) {\n  .locations-content-container {\n    margin-top: 70px; }\n    .locations-content-container .locations-title {\n      margin-bottom: 20px; } }\n@media (min-width: 768px) {\n  .locations-content-container {\n    display: none; }\n  .courses-overview .course-tags-container .course-tags .course-tag-container {\n    width: 47.9%; } }\n"

/***/ }),

/***/ "./src/app/sites/locations/locations.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sites/locations/locations.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_service_1 = __webpack_require__(/*! ./../../services/utility.service */ "./src/app/services/utility.service.ts");
var model_service_1 = __webpack_require__(/*! ./../../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(modelService, dynamicContentService, utilityService) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.utilityService = utilityService;
        this.locationsListId = zenkit_collections_1.ZenkitCollections.locations.shortId;
        this.locationsListShortId = zenkit_collections_1.ZenkitCollections.locations.shortId;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        this.modelService.getLocationData().then(function (locationData) {
            _this.locationYW = locationData.locationYW;
            _this.locationLB = locationData.locationLB;
            _this.locations = locationData.allLocations;
            _this.modelService.setPageLoaded(true);
        });
    };
    LocationsComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.locationsListShortId);
    };
    LocationsComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    LocationsComponent.prototype.mouseEnter = function (location) {
        var index = _.indexOf(this.locations, location);
        var imageContainerElements = document.getElementsByClassName('courses-overview-bg-image-container');
        this.activeImageContainer = imageContainerElements[index];
        this.activeImageContainer.classList.add('active');
    };
    LocationsComponent.prototype.mouseLeave = function (course) {
        this.activeImageContainer.classList.remove('active');
    };
    LocationsComponent.prototype.getLocationLink = function (location) {
        return '/standorte/' + _.get(location, ['shortId']) + '/' + this.utilityService.convertStringToUrlId(_.get(location, ['name']));
    };
    LocationsComponent = __decorate([
        core_1.Component({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/sites/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.scss */ "./src/app/sites/locations/locations.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            utility_service_1.UtilityService])
    ], LocationsComponent);
    return LocationsComponent;
}());
exports.LocationsComponent = LocationsComponent;


/***/ }),

/***/ "./src/app/sites/privacy/privacy.component.html":
/*!******************************************************!*\
  !*** ./src/app/sites/privacy/privacy.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imprint-content-container main-content-container main-content-container-padding\">\r\n  <div class=\"imprint-content main-content\">\r\n    <h1  class=\"imprint-heading\">Datenschutz</h1>\r\n    <div class=\"imprint-general-description\" [innerHTML]='contact.privacy' *ngIf=\"contact\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/privacy/privacy.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sites/privacy/privacy.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.imprint-content-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #1f1f1f; }\n.imprint-content-container .imprint-heading {\n    font-size: 30px;\n    font-weight: 600; }\n@media (min-width: 768px) {\n  .imprint-content-container {\n    padding-top: 50px;\n    padding-bottom: 50px; } }\n@media (min-width: 992px) {\n  .imprint-content-container {\n    padding-top: 70px;\n    padding-bottom: 70px; } }\n"

/***/ }),

/***/ "./src/app/sites/privacy/privacy.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sites/privacy/privacy.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var dynamic_content_service_1 = __webpack_require__(/*! ../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var model_service_1 = __webpack_require__(/*! ../../services/model.service */ "./src/app/services/model.service.ts");
var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent(modelService, dynamicContentService) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        this.modelService.getContact().then(function (result) {
            _this.contact = result;
            _this.modelService.setPageLoaded(true);
        });
    };
    PrivacyComponent = __decorate([
        core_1.Component({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/sites/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/sites/privacy/privacy.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService, dynamic_content_service_1.DynamicContentService])
    ], PrivacyComponent);
    return PrivacyComponent;
}());
exports.PrivacyComponent = PrivacyComponent;


/***/ }),

/***/ "./src/app/sites/stage/gallery/gallery.component.html":
/*!************************************************************!*\
  !*** ./src/app/sites/stage/gallery/gallery.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog-background\" *ngIf=\"showModalDialog\">\r\n  <span class=\"close-button\" (click)=\"close()\">&times;</span>\r\n  <div class=\"modal-dialog-content-container\">\r\n\r\n    <div *ngFor=\"let picture of pictures\">\r\n      <div class=\"performance-picture-frame\" *ngIf=\"picture.isVisible\">\r\n        <div class=\"performance-picture-numbertext\">{{pictures.indexOf(picture)+1}} / {{pictures.length}}</div>\r\n        <img src={{picture.source}}>\r\n      </div>\r\n    </div>\r\n\r\n    <a class=\"prev-arrow-button\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n    <a class=\"next-arrow-button\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n\r\n  </div>\r\n  <br>\r\n  \r\n  <div class=\"modal-dialog-dot-navigation\">\r\n    <span class=\"dot\"  *ngFor=\"let picture of pictures\" (click)=\"currentSlide(pictures.indexOf(picture)+1)\"></span> \r\n    <!-- <span class=\"dot\" (click)=\"currentSlide(2)\"></span> \r\n    <span class=\"dot\" (click)=\"currentSlide(3)\"></span>  -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sites/stage/gallery/gallery.component.scss":
/*!************************************************************!*\
  !*** ./src/app/sites/stage/gallery/gallery.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The Modal (background) */\n.modal-dialog-background {\n  display: block;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  /* The Close Button */\n  /* Modal Content */\n  /* Next & previous buttons */\n  /* Position the \"next button\" to the right */\n  /* On hover, add a black background color with a little bit see-through */ }\n.modal-dialog-background .close-button {\n    color: white;\n    position: absolute;\n    top: 10px;\n    right: 25px;\n    font-size: 35px;\n    font-weight: bold; }\n.modal-dialog-background .close-button:hover,\n  .modal-dialog-background .close-button:focus {\n    color: #999;\n    text-decoration: none;\n    cursor: pointer; }\n.modal-dialog-background .modal-dialog-content-container {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    width: 90%;\n    max-width: 1200px;\n    /* Number text (1/3 etc) */ }\n.modal-dialog-background .modal-dialog-content-container .performance-picture-frame {\n      display: block;\n      background-color: black; }\n.modal-dialog-background .modal-dialog-content-container .performance-picture-frame img {\n        max-height: 600px;\n        max-width: 100%;\n        display: block;\n        margin: auto; }\n.modal-dialog-background .modal-dialog-content-container .performance-picture-numbertext {\n      color: #f2f2f2;\n      font-size: 12px;\n      padding: 8px 12px;\n      position: absolute;\n      top: 0; }\n.modal-dialog-background .prev-arrow-button,\n  .modal-dialog-background .next-arrow-button {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    padding: 16px;\n    margin-top: -50px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    -moz-user-select: none;\n     -ms-user-select: none;\n         user-select: none;\n    -webkit-user-select: none; }\n.modal-dialog-background .next-arrow-button {\n    right: 0;\n    border-radius: 3px 0 0 3px; }\n.modal-dialog-background .prev-arrow-button:hover,\n  .modal-dialog-background .next-arrow-button:hover {\n    background-color: rgba(0, 0, 0, 0.8); }\n.modal-dialog-background .modal-dialog-dot-navigation {\n    text-align: center; }\n.modal-dialog-background .modal-dialog-dot-navigation .dot {\n      cursor: pointer;\n      height: 13px;\n      width: 13px;\n      margin: 0 2px;\n      background-color: #bbb;\n      border-radius: 50%;\n      display: inline-block;\n      transition: background-color 0.6s ease; }\n.modal-dialog-background .modal-dialog-dot-navigation .active, .modal-dialog-background .modal-dialog-dot-navigation .dot:hover {\n      background-color: #717171; }\n"

/***/ }),

/***/ "./src/app/sites/stage/gallery/gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sites/stage/gallery/gallery.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamic_content_service_1 = __webpack_require__(/*! ./../../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(dynamicContentService) {
        this.dynamicContentService = dynamicContentService;
        this.showModalDialog = false;
        this.slideIndex = 1;
        this.listShortId = undefined;
        this.pictures = [
            { 'source': 'assets/stage/H34A0833.JPG', 'isVisible': false },
            { 'source': 'assets/stage/H34A1365.JPG', 'isVisible': false },
            { 'source': 'assets/stage/H34A1480.JPG', 'isVisible': false },
            { 'source': 'assets/stage/H34A3398.JPG', 'isVisible': false },
            { 'source': 'assets/stage/H34A3586.jpg', 'isVisible': false },
            { 'source': 'assets/stage/H34A3738.JPG', 'isVisible': false }
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.showSlides(1);
    };
    // in dynamischer Version kann hier die Liste mit Bildern übergeben werden. Hoffentlich :D
    GalleryComponent.prototype.show = function (images, listShortId) {
        var _this = this;
        this.listShortId = listShortId;
        this.pictures = _.map(images, function (image) {
            return {
                'source': _this.getFileSrc(image),
                'isVisible': false
            };
        });
        this.showSlides(1);
        this.showModalDialog = true;
    };
    GalleryComponent.prototype.close = function () {
        this.showModalDialog = false;
    };
    GalleryComponent.prototype.showSlides = function (slideNumber) {
        var i;
        if (slideNumber > this.pictures.length) {
            this.slideIndex = 1;
        }
        if (slideNumber < 1) {
            this.slideIndex = this.pictures.length;
        }
        for (i = 0; i < this.pictures.length; i++) {
            this.pictures[i].isVisible = false;
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        this.pictures[this.slideIndex - 1].isVisible = true;
        // dots[this.slideIndex - 1].className += " active";
    };
    GalleryComponent.prototype.plusSlides = function (slideNumber) {
        this.showSlides(this.slideIndex += slideNumber);
    };
    GalleryComponent.prototype.currentSlide = function (slideNumber) {
        this.showSlides(this.slideIndex = slideNumber);
    };
    GalleryComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(file.shortId, this.listShortId);
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/sites/stage/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/sites/stage/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [dynamic_content_service_1.DynamicContentService])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;


/***/ }),

/***/ "./src/app/sites/stage/performance/performance.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sites/stage/performance/performance.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"performance-component\" *ngIf=\"performance\">\r\n  <div class=\"performance-content-container main-content-container main-content-container-padding main-content-navbar-spacer\">\r\n    <div class=\"main-content\">\r\n      <h1 class=\"performance-title\" [innerHTML]=\"performance.title\"></h1>\r\n      <div class=\"performance-date\" *ngIf=\"performance.date\" [innerHTML]=\"getDateStringLong()\"></div>\r\n      <app-image-slider [images]='performance.gallery' [listid]='performancesListId'></app-image-slider>\r\n      <div class=\"performance-description\" [innerHTML]=\"performance.description\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sites/stage/performance/performance.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/sites/stage/performance/performance.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.performance-component {\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n.performance-component .performance-content-container {\n    color: #1f1f1f;\n    text-align: center; }\n.performance-component .performance-content-container .performance-title {\n      text-transform: uppercase;\n      margin: 20px 0 0 0; }\n.performance-component .performance-content-container .performance-date {\n      display: inline-block;\n      margin: 0 auto 50px auto;\n      font-size: 18px;\n      display: inline-block;\n      font-size: 12px;\n      padding: 0 10px;\n      font-weight: 600;\n      border: 1px solid #1f1f1f; }\n.performance-component .performance-content-container .performance-description {\n      text-align: left;\n      margin-top: 50px;\n      margin-bottom: 100px; }\n"

/***/ }),

/***/ "./src/app/sites/stage/performance/performance.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sites/stage/performance/performance.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_service_1 = __webpack_require__(/*! ./../../../services/utility.service */ "./src/app/services/utility.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var model_service_1 = __webpack_require__(/*! ../../../services/model.service */ "./src/app/services/model.service.ts");
var PerformanceComponent = /** @class */ (function () {
    function PerformanceComponent(route, modelService, utilityService) {
        this.route = route;
        this.modelService = modelService;
        this.utilityService = utilityService;
        this.performancesListId = zenkit_collections_1.ZenkitCollections.performances.shortId;
    }
    PerformanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        this.sub = this.route.params.subscribe(function (params) {
            var performanceShortId = params['shortId']; // (+) converts string 'id' to a number
            _this.modelService.getPerformanceByShortId(performanceShortId).then(function (performance) {
                _this.performance = performance;
                _this.modelService.setPageLoaded(true);
            });
        });
    };
    PerformanceComponent.prototype.getDateStringLong = function () {
        return this.utilityService.convertDateToStringLong(this.performance.date);
    };
    PerformanceComponent = __decorate([
        core_1.Component({
            selector: 'app-performance',
            template: __webpack_require__(/*! ./performance.component.html */ "./src/app/sites/stage/performance/performance.component.html"),
            styles: [__webpack_require__(/*! ./performance.component.scss */ "./src/app/sites/stage/performance/performance.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            model_service_1.ModelService,
            utility_service_1.UtilityService])
    ], PerformanceComponent);
    return PerformanceComponent;
}());
exports.PerformanceComponent = PerformanceComponent;


/***/ }),

/***/ "./src/app/sites/stage/stage.component.html":
/*!**************************************************!*\
  !*** ./src/app/sites/stage/stage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"header-image\" [ngStyle]=\"getBackgroundStyle(backgroundImage)\"></div>-->\r\n<div class=\"performances-content-container main-content-container main-content-container-padding main-content-navbar-spacer\">\r\n  <div class=\"main-title performances-title\">Auftritte</div>\r\n  <div class=\"performances-content main-content\">\r\n    <div *ngFor=\"let performance of performances, let i = index\" class=\"performance-poster-container\" >\r\n      <a class=\"performance-poster\" [routerLink]=\"performance.routerLink\" [ngStyle]=\"getBackgroundStyle(performance.poster)\">\r\n        <div class=\"performance-poster-mask\"></div>\r\n        <div class=\"performance-poster-label-container\">\r\n          <div class=\"performance-poster-year-label\" *ngIf=\"performance.date\" [innerHTML]=\"performance.date.getFullYear()\"></div>\r\n          <div class=\"performance-poster-title\" [innerHTML]=\"performance.title\"></div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sites/stage/stage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/sites/stage/stage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n* {\n  box-sizing: border-box; }\n.performances-content-container .performances-content {\n  background-color: #1f1f1f;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  background-color: #000; }\n.performances-content-container .performances-content .performance-poster-container {\n    width: 100%;\n    opacity: 0;\n    -webkit-animation-name: fade-in;\n            animation-name: fade-in;\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n    -webkit-animation-duration: 0.7s;\n            animation-duration: 0.7s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n.performances-content-container .performances-content .performance-poster-container .performance-poster {\n      text-decoration: none;\n      position: relative;\n      background-size: cover;\n      display: flex; }\n.performances-content-container .performances-content .performance-poster-container .performance-poster .performance-poster-mask {\n        display: none; }\n.performances-content-container .performances-content .performance-poster-container .performance-poster .performance-poster-label-container {\n        opacity: 1;\n        text-transform: uppercase;\n        color: #1f1f1f;\n        width: 100%;\n        background-color: transparent;\n        transition: opacity 0.3s ease, background-color 0.3s ease, padding 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n.performances-content-container .performances-content .performance-poster-container .performance-poster .performance-poster-label-container .performance-poster-title {\n          font-size: 20px;\n          line-height: 24px; }\n.performances-content-container .performances-content .performance-poster-container .performance-poster .performance-poster-label-container .performance-poster-year-label {\n          font-size: 14px; }\n.performances-content-container .performances-content .performance-poster-container .performance-poster:hover .performance-poster-mask {\n        background-color: rgba(0, 0, 0, 0.5); }\n.performances-content-container .performances-content .performance-poster-container .performance-poster:hover .performance-poster-label-container {\n        background-color: rgba(0, 122, 255, 0.6); }\n@media (max-width: 767px) {\n  .performances-content-container {\n    padding-bottom: 50px;\n    padding-left: 0;\n    padding-right: 0; }\n    .performances-content-container .performances-title {\n      margin-left: 20px; }\n    .performances-content-container .performances-content .performance-poster-container {\n      border-bottom: 1px solid #2c2c2c; }\n      .performances-content-container .performances-content .performance-poster-container .performance-poster {\n        background-image: none !important; }\n        .performances-content-container .performances-content .performance-poster-container .performance-poster .performance-poster-label-container {\n          padding: 15px 0 15px 20px; }\n        .performances-content-container .performances-content .performance-poster-container .performance-poster:hover .performance-poster-label-container {\n          padding-left: 30px; } }\n@media (min-width: 768px) {\n  .performances-content-container .performances-title {\n    margin-bottom: 40px; }\n  .performances-content-container .performances-content .performance-poster-container {\n    width: 50%;\n    height: 500px;\n    margin-bottom: 20px; }\n    .performances-content-container .performances-content .performance-poster-container:nth-child(odd) {\n      padding-right: 10px; }\n    .performances-content-container .performances-content .performance-poster-container:nth-child(even) {\n      padding-left: 10px; }\n    .performances-content-container .performances-content .performance-poster-container .performance-poster {\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100%; }\n      .performances-content-container .performances-content .performance-poster-container .performance-poster .performance-poster-mask {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.85);\n        transition: background-color 0.3s ease; }\n      .performances-content-container .performances-content .performance-poster-container .performance-poster .performance-poster-label-container {\n        text-align: center;\n        z-index: 1;\n        padding: 10px; }\n        .performances-content-container .performances-content .performance-poster-container .performance-poster .performance-poster-label-container .performance-poster-title {\n          font-size: 30px;\n          line-height: 34px; }\n        .performances-content-container .performances-content .performance-poster-container .performance-poster .performance-poster-label-container .performance-poster-year-label {\n          font-size: 18px; } }\n@media (min-width: 992px) {\n  .performances-content-container .performances-content .performance-poster-container {\n    height: 430px;\n    width: 33.3%;\n    padding: 0; }\n    .performances-content-container .performances-content .performance-poster-container:nth-child(3n+1) {\n      padding-right: 10px; }\n    .performances-content-container .performances-content .performance-poster-container:nth-child(3n+2) {\n      padding-right: 10px;\n      padding-left: 10px; }\n    .performances-content-container .performances-content .performance-poster-container:nth-child(3n) {\n      padding-left: 10px; } }\n"

/***/ }),

/***/ "./src/app/sites/stage/stage.component.ts":
/*!************************************************!*\
  !*** ./src/app/sites/stage/stage.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_service_1 = __webpack_require__(/*! ./../../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var StageComponent = /** @class */ (function () {
    function StageComponent(modelService, dynamicContentService) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.showModalDialog = false;
        this.performancesListShortId = zenkit_collections_1.ZenkitCollections.performances.shortId;
    }
    StageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        Promise.all([this.modelService.getPerformances(), this.modelService.getMainPageSections()]).then(function (results) {
            _this.performances = results[0];
            _this.backgroundImage = _.get(results[1], ['performancesSection', 'image']);
            _this.modelService.setPageLoaded(true);
        });
    };
    StageComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.performancesListShortId);
    };
    StageComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    StageComponent = __decorate([
        core_1.Component({
            selector: 'app-stage',
            template: __webpack_require__(/*! ./stage.component.html */ "./src/app/sites/stage/stage.component.html"),
            styles: [__webpack_require__(/*! ./stage.component.scss */ "./src/app/sites/stage/stage.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService, dynamic_content_service_1.DynamicContentService])
    ], StageComponent);
    return StageComponent;
}());
exports.StageComponent = StageComponent;


/***/ }),

/***/ "./src/app/sites/team/teacher-details/teacher-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/sites/team/teacher-details/teacher-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teacher-content-container main-content-container main-content-container-padding main-content-navbar-spacer\" *ngIf=\"contact\">\r\n  <div class=\"main-content teacher-content\">\r\n    <h1 class=\"teacher-heading title-medium\">\r\n      {{contact.name}}\r\n    </h1>\r\n    <div class=\"teacher-flex-container\">\r\n      <div class=\"teacher-image\" [ngStyle]=\"getBackgroundStyle(contact.image)\">\r\n\r\n      </div>\r\n      <div class=\"teacher-description-container\">\r\n        <h1 class=\"teacher-heading title-medium\">\r\n          {{contact.name}}\r\n        </h1>\r\n        <div class=\"teacher-description\">\r\n          {{contact.description}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/team/teacher-details/teacher-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/sites/team/teacher-details/teacher-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.teacher-content-container {\n  opacity: 0;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n  -webkit-animation-name: fade-in;\n          animation-name: fade-in;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n.teacher-content-container .teacher-content {\n    padding-bottom: 50px; }\n.teacher-content-container .teacher-content .teacher-heading {\n      display: none;\n      margin: 0; }\n.teacher-content-container .teacher-content .teacher-flex-container .teacher-image {\n      margin: 0 auto 50px auto;\n      max-width: 300px;\n      height: 400px;\n      background-size: cover; }\n.teacher-content-container .teacher-content .teacher-flex-container .teacher-description-container .teacher-task {\n      font-size: 12px;\n      margin-bottom: 20px; }\n.teacher-content-container .teacher-content .teacher-flex-container .teacher-description-container .teacher-description {\n      white-space: pre-line;\n      word-wrap: break-word; }\n@media (max-width: 767px) {\n  .teacher-content-container .teacher-content > .teacher-heading {\n    display: block;\n    text-align: center;\n    margin-bottom: 10px; } }\n@media (min-width: 768px) {\n  .teacher-content-container .teacher-content {\n    padding-top: 30px; }\n    .teacher-content-container .teacher-content .teacher-flex-container {\n      display: flex;\n      flex-direction: row; }\n      .teacher-content-container .teacher-content .teacher-flex-container .teacher-image {\n        width: 300px; }\n      .teacher-content-container .teacher-content .teacher-flex-container .teacher-description-container {\n        margin-left: 50px;\n        flex: 1; }\n        .teacher-content-container .teacher-content .teacher-flex-container .teacher-description-container > .teacher-heading {\n          display: block;\n          text-align: left;\n          margin-bottom: 20px; } }\n"

/***/ }),

/***/ "./src/app/sites/team/teacher-details/teacher-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sites/team/teacher-details/teacher-details.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var team_service_1 = __webpack_require__(/*! ./../../../services/team.service */ "./src/app/services/team.service.ts");
var model_service_1 = __webpack_require__(/*! ./../../../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var TeacherDetailsComponent = /** @class */ (function () {
    function TeacherDetailsComponent(modelService, dynamicContentService, teamService, route) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.teamService = teamService;
        this.route = route;
        this.teamListShortId = zenkit_collections_1.ZenkitCollections.team.shortId;
        this.contactListShortId = zenkit_collections_1.ZenkitCollections.contact.shortId;
    }
    TeacherDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        this.modelService.getContact().then(function (contact) {
            _this.contact = contact;
            _this.modelService.setPageLoaded(true);
        });
    };
    TeacherDetailsComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.contactListShortId);
    };
    TeacherDetailsComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    TeacherDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-teacher-details',
            template: __webpack_require__(/*! ./teacher-details.component.html */ "./src/app/sites/team/teacher-details/teacher-details.component.html"),
            styles: [__webpack_require__(/*! ./teacher-details.component.scss */ "./src/app/sites/team/teacher-details/teacher-details.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            team_service_1.TeamService,
            router_1.ActivatedRoute])
    ], TeacherDetailsComponent);
    return TeacherDetailsComponent;
}());
exports.TeacherDetailsComponent = TeacherDetailsComponent;


/***/ }),

/***/ "./src/app/sites/team/team.component.html":
/*!************************************************!*\
  !*** ./src/app/sites/team/team.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-image *ngIf=\"backgroundImage\" [image]='backgroundImage' [listId]='mainPageListShortId' title='Team'></app-header-image>\r\n<div class=\"team-content-container main-content-container main-content-container-padding\">\r\n  <div class=\"team-content main-content\">\r\n    <div *ngFor=\"let teacher of teachers\" class=\"team-member-container\">\r\n      <div class=\"team-member-card\" [routerLink]=\"['/lehrer', getTeacherUrlId(teacher)]\">\r\n        <div class=\"team-member-bg-container\" [ngStyle]=\"getBackgroundStyle(teacher.image)\">\r\n          <div class=\"team-member-bg-mask\">\r\n          </div>\r\n          <div class=\"team-member-about-me-tag\">\r\n            &Uuml;ber {{teacher.firstName}}\r\n          </div>\r\n        </div>\r\n        <div class=\"team-member-tag\">\r\n          <div class=\"team-member-tag-name\">{{teacher.firstName}} {{teacher.lastName}}\r\n\r\n          </div>\r\n          <div class=\"team-member-tag-task\" [innerHTML]=\"teacher.task\">\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/team/team.component.scss":
/*!************************************************!*\
  !*** ./src/app/sites/team/team.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n.team-content-container {\n  background-color: #fff; }\n.team-content-container .team-content {\n    width: 100%;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    display: flex;\n    flex-wrap: wrap; }\n.team-content-container .team-content .team-member-container {\n      width: 100%;\n      position: relative;\n      padding: 20px;\n      opacity: 0;\n      -webkit-animation-name: fade-in;\n              animation-name: fade-in;\n      -webkit-animation-delay: 0.5s;\n              animation-delay: 0.5s;\n      -webkit-animation-duration: 0.7s;\n              animation-duration: 0.7s;\n      -webkit-animation-timing-function: ease;\n              animation-timing-function: ease;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n.team-content-container .team-content .team-member-container .team-member-card {\n        display: flex;\n        -moz-flex-direction: column;\n        flex-direction: column;\n        display: relative;\n        width: 300px;\n        margin: 0 auto;\n        background-color: #F6F5F5;\n        overflow: hidden; }\n.team-content-container .team-content .team-member-container .team-member-card .team-member-bg-container {\n          height: 280px;\n          width: 300px;\n          background-color: grey;\n          background-size: cover;\n          display: flex;\n          -moz-flex-direction: column;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          position: relative;\n          -webkit-filter: blur(0px);\n                  filter: blur(0px);\n          transition: -webkit-filter 0.2s ease-in-out;\n          transition: filter 0.2s ease-in-out;\n          transition: filter 0.2s ease-in-out, -webkit-filter 0.2s ease-in-out; }\n.team-content-container .team-content .team-member-container .team-member-card .team-member-bg-container .team-member-bg-mask {\n            width: 300px;\n            height: 100%;\n            top: 0;\n            background-color: transparent;\n            position: absolute;\n            transition: background-color 0.2s ease-in-out; }\n.team-content-container .team-content .team-member-container .team-member-card .team-member-bg-container .team-member-about-me-tag {\n            text-align: center;\n            opacity: 0;\n            color: #fff;\n            padding: 10px 20px;\n            background-color: #007aff;\n            z-index: 1;\n            text-transform: uppercase;\n            font-size: 20px;\n            transition: opacity 0.2s ease-in-out; }\n.team-content-container .team-content .team-member-container .team-member-card .team-member-tag {\n          width: 280px;\n          height: 100px;\n          overflow: hidden;\n          text-align: center;\n          padding: 10px;\n          color: #252525;\n          display: flex;\n          -moz-flex-direction: column;\n          flex-direction: column; }\n.team-content-container .team-content .team-member-container .team-member-card .team-member-tag .team-member-tag-name {\n            font-size: 22px;\n            line-height: 24px;\n            font-weight: 600;\n            text-transform: uppercase; }\n.team-content-container .team-content .team-member-container .team-member-card .team-member-tag .team-member-tag-task {\n            font-size: 12px; }\n.team-content-container .team-content .team-member-container .team-member-card:hover {\n          cursor: pointer; }\n.team-content-container .team-content .team-member-container .team-member-card:hover .team-member-bg-container .team-member-bg-mask {\n            background-color: rgba(0, 0, 0, 0.8); }\n.team-content-container .team-content .team-member-container .team-member-card:hover .team-member-bg-container .team-member-about-me-tag {\n            opacity: 1; }\n@media (min-width: 768px) {\n  .team-content-container .team-content .team-member-container {\n    width: 49%;\n    padding: 20px 0;\n    margin: 0;\n    opacity: 0;\n    -webkit-animation-name: fade-in;\n            animation-name: fade-in;\n    -webkit-animation-delay: 1.3s;\n            animation-delay: 1.3s;\n    -webkit-animation-duration: 0.7s;\n            animation-duration: 0.7s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n    .team-content-container .team-content .team-member-container .team-member-card {\n      margin: 0; }\n    .team-content-container .team-content .team-member-container:nth-child(odd) .team-member-card {\n      float: left; }\n    .team-content-container .team-content .team-member-container:nth-child(even) .team-member-card {\n      float: right; } }\n@media (min-width: 992px) {\n  .team-content-container .team-content .team-member-container {\n    width: 33.3%; }\n    .team-content-container .team-content .team-member-container:nth-child(3n+1) .team-member-card {\n      float: left; }\n    .team-content-container .team-content .team-member-container:nth-child(3n+2) .team-member-card {\n      float: initial;\n      margin: 0 auto; }\n    .team-content-container .team-content .team-member-container:nth-child(3n) .team-member-card {\n      float: right; }\n    .team-content-container .team-content .team-member-container .team-member-card {\n      width: 280px; }\n      .team-content-container .team-content .team-member-container .team-member-card .team-member-bg-container {\n        height: 260px;\n        width: 280px; }\n        .team-content-container .team-content .team-member-container .team-member-card .team-member-bg-container .team-member-bg-mask {\n          width: 280px; }\n      .team-content-container .team-content .team-member-container .team-member-card .team-member-tag {\n        width: 260px; } }\n@media (min-width: 1200px) and (min-width: 992px) {\n  .team-content-container .team-content .team-member-container .team-member-card {\n    width: 320px; }\n    .team-content-container .team-content .team-member-container .team-member-card .team-member-bg-container {\n      height: 300px;\n      width: 320px; }\n      .team-content-container .team-content .team-member-container .team-member-card .team-member-bg-container .team-member-bg-mask {\n        width: 320px; }\n    .team-content-container .team-content .team-member-container .team-member-card .team-member-tag {\n      width: 300px; } }\n"

/***/ }),

/***/ "./src/app/sites/team/team.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sites/team/team.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_service_1 = __webpack_require__(/*! ./../../services/model.service */ "./src/app/services/model.service.ts");
var zenkit_collections_1 = __webpack_require__(/*! ./../../shared/constants/zenkit-collections */ "./src/app/shared/constants/zenkit-collections.ts");
var dynamic_content_service_1 = __webpack_require__(/*! ./../../services/dynamic-content.service */ "./src/app/services/dynamic-content.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var team_service_1 = __webpack_require__(/*! ../../services/team.service */ "./src/app/services/team.service.ts");
var TeamComponent = /** @class */ (function () {
    function TeamComponent(modelService, dynamicContentService, teamService) {
        this.modelService = modelService;
        this.dynamicContentService = dynamicContentService;
        this.teamService = teamService;
        this.showModalDialog = false;
        this.teamListShortId = zenkit_collections_1.ZenkitCollections.team.shortId;
        this.mainPageListShortId = zenkit_collections_1.ZenkitCollections.home.shortId;
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelService.setPageLoaded(false);
        Promise.all([this.modelService.getTeam(), this.modelService.getMainPageSections()]).then(function (results) {
            _this.teachers = results[0];
            _this.backgroundImage = _.get(results[1], ['teamSection', 'image']);
            _this.modelService.setPageLoaded(true);
        });
    };
    TeamComponent.prototype.getTeacherUrlId = function (teacher) {
        var urlId = this.teamService.convertTeacherToUrlId(teacher);
        return urlId;
    };
    TeamComponent.prototype.getFileSrc = function (file) {
        return this.dynamicContentService.getFileSrc(_.get(file, ['shortId']), this.teamListShortId);
    };
    TeamComponent.prototype.getBackgroundStyle = function (image) {
        return {
            'background-image': 'url(' + this.getFileSrc(image) + ')'
        };
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/sites/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/sites/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            dynamic_content_service_1.DynamicContentService,
            team_service_1.TeamService])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nikor\Documents\GitHub\yogaraum-wettersbach-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map