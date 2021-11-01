(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+dth":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/button/button.directive.ts ***!
  \**************************************************************/
/*! exports provided: ButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return ButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ButtonDirective {
    constructor(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.el.nativeElement.classList +=
            ' btn btn-app font-weight-thin text-white';
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
}
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ButtonDirective, selectors: [["", "appButton", ""]] });


/***/ }),

/***/ "+vjk":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/checkin/components/flow-detect/flow-detect.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FlowDetectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDetectComponent", function() { return FlowDetectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/configure/configure.service */ "yegS");
/* harmony import */ var src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/constant/audio-files */ "QDvO");
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var src_app_shared_services_passportReader_passport_reader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/passportReader/passport-reader.service */ "eY15");
/* harmony import */ var src_app_shared_services_ocr_ocr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/ocr/ocr.service */ "iodx");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _scan_face_scan_face_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../scan-face/scan-face.component */ "kvQK");
























const _c0 = function (a0) { return { active: a0 }; };
function FlowDetectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowDetectComponent_div_0_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.chooseMethod(ctx_r4.PASSPORT); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowDetectComponent_div_0_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.chooseMethod(ctx_r6.LICENSE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowDetectComponent_div_0_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.chooseMethod(ctx_r7.IDCARD); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowDetectComponent_div_0_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.chooseMethod(ctx_r8.IDCARD_NEW); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowDetectComponent_div_0_Template_app_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.modalNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "flowDetect.docInstruction"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx_r0.seletedInstruction.key === ctx_r0.PASSPORT));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, "flowDetect.passport"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx_r0.seletedInstruction.key === ctx_r0.LICENSE));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 14, "flowDetect.license"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx_r0.seletedInstruction.key === ctx_r0.IDCARD));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 16, "flowDetect.idCard"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx_r0.seletedInstruction.key === ctx_r0.IDCARD_NEW));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 18, "flowDetect.idCardNew"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 20, "flowDetect.btnContinue"), " ");
} }
function FlowDetectComponent_div_1_p_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-alert", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function FlowDetectComponent_div_1_p_7_Template_ngb_alert_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.closeAlert("errorModal"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r10.alert.errorModal.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.alert.errorModal.message, " ");
} }
function FlowDetectComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FlowDetectComponent_div_1_p_7_Template, 3, 2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowDetectComponent_div_1_Template_app_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.resetScannedImage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowDetectComponent_div_1_Template_app_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.scanFront(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "flowDetect.frontInstruction"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.alert.errorModal.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.cardImages[1] || ctx_r1.noImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faExchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "flowDetect.btnUndo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.cardImages[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 11, "flowDetect.btnContinue"), " ");
} }
function FlowDetectComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowDetectComponent_div_2_Template_app_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.resetScannedImage(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowDetectComponent_div_2_Template_app_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.modalNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "flowDetect.backInstruction"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.cardImages[2] || ctx_r2.noImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faExchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, "flowDetect.btnUndo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.cardImages[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, "flowDetect.btnContinue"), " ");
} }
function FlowDetectComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-scan-face", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("image", function FlowDetectComponent_div_3_Template_app_scan_face_image_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onScanFace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FlowDetectComponent {
    constructor(hubService, utilService, passportReader, ocrService, translateService, hubWalkin, router) {
        this.hubService = hubService;
        this.utilService = utilService;
        this.passportReader = passportReader;
        this.ocrService = ocrService;
        this.translateService = translateService;
        this.hubWalkin = hubWalkin;
        this.router = router;
        this.sendGuestInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faExchange = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExchangeAlt"];
        this.PASSPORT = 'passport';
        this.IDCARD = 'idCard';
        this.LICENSE = 'license';
        this.IDCARD_NEW = 'idCard_new';
        this.INDEX_FRONT = 1;
        this.INDEX_BACK = 2;
        this.INDEX_FACE = 3;
        this.progressBar = [
            {
                index: 0,
                key: 'type',
                value: 10,
                name: 'Chọn loại giấy tờ',
                notice: 'Chọn một trong những loại giấy tờ phía trên để máy quét lấy thông tin',
                audio: src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_5__["AUDIO_FILES"].scanIdDocType,
                textIntro: 'flowDetect.hi',
                subTextIntro: 'flowDetect.docIntro',
            },
            {
                index: 1,
                key: 'front',
                value: 25,
                name: 'Đặt mặt trước của giấy tờ xuống máy quét',
                notice: 'Sau khi đặt, chờ 1-2 giây để thiết bị tiến hành quét',
                audio: src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_5__["AUDIO_FILES"].scanIdFront,
                textIntro: 'flowDetect.hi',
                subTextIntro: 'flowDetect.frontIntro',
            },
            {
                index: 2,
                key: 'back',
                value: 50,
                name: 'Đặt mặt sau của giấy tờ xuống máy quét',
                notice: 'Sau khi đặt, chờ 1-2 giây để thiết bị tiến hành quét',
                audio: src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_5__["AUDIO_FILES"].scanIdBack,
                textIntro: 'flowDetect.hi',
                subTextIntro: 'flowDetect.backIntro',
            },
            {
                index: 3,
                key: 'face',
                value: 75,
                name: 'Xác minh khuôn mặt',
                notice: 'Vui lòng nhìn thẳng vào camera của thiết bị rồi nhấn nút "Chụp ảnh". Khi đã hài lòng với ảnh, hãy nhấn nút "Xác minh" và chờ một chút để thiết bị nhận diện.',
                audio: src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_5__["AUDIO_FILES"].scanIdFace,
                textIntro: 'flowDetect.hi',
                subTextIntro: 'flowDetect.faceIntro',
            },
        ];
        this.progress = {
            index: 0,
            key: 'type',
            value: 10,
            name: 'Chọn loại giấy tờ',
            notice: 'Chọn một trong những loại giấy tờ phía trên để máy quét lấy thông tin',
            audio: src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_5__["AUDIO_FILES"].scanIdDocType,
            textIntro: '',
            subTextIntro: '',
        };
        this.instruction = {
            idCard: {
                img: 'https://cdn2.hubspot.net/hubfs/3308097/Aila-ID-scan-TruScan.gif',
                buttonName: 'scanIdCard.scanPassport',
                sentence: [
                    'Xin mời đặt mặt trước của chứng minh thư vào máy quét',
                    'Xin mời đặt mặt sau của chứng minh thư vào máy quét',
                ],
            },
            passport: {
                img: 'https://www.hitouch.com/upload/images/201804/17/201804176365957939499905063885355.gif',
                buttonName: 'scanIdCard.scanIdCard',
                sentence: [
                    'Xin mời đặt mặt trước hộ chiếu vào máy quét',
                    'Xin mời đặt mặt trước của hộ chiếu vào máy quét',
                ],
            },
        };
        this.guest = {
            guestName: '',
            address: '',
            birth: '',
            expiry: '',
            passportNumber: '',
            passportType: '',
            sex: '',
            nationalityCode: '',
        };
        this.alert = {
            errorModal: {
                show: false,
                type: '',
                message: '',
            },
            successModal: {
                show: false,
                type: '',
                message: '',
            },
            successOutside: {
                show: false,
                type: '',
                message: '',
            },
        };
        this.noImage = `./assets/images/no-image.svg`;
        this.cardImages = [];
        this.seletedInstruction = {
            key: 'passport',
            img: '',
            buttonName: '',
            sentence: '',
        };
        this.cardImageIndex = 0;
        this.skipCallApiProcessImage = [this.PASSPORT];
        this.isProcessFaceSuccess = false;
        this.isProcessImageSuccess = false;
        this.isProcessImageDone = false;
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            console.log('detect: ', res);
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_7__["PAGES"].flowDetect) {
                return;
            }
            this.processHubEvent(res);
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.hubWalkin.setIsShowStepper(false);
        }, 100);
        this.hubWalkin.setTextIntro('flowDetect.hi');
        this.hubWalkin.setSubTextIntro('flowDetect.docIntro');
    }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
        this.hubWalkin.setIsShowStepper(true);
        this.hubWalkin.setTextIntro('');
        this.hubWalkin.setSubTextIntro('');
        this.closeScanModal();
    }
    processHubEvent(event) {
        if (event.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_6__["ACTIONS"].nextStep) {
            this.changeToNextStep();
        }
        else if (event.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_6__["ACTIONS"].backStep) {
            this.changeToPreviousStep();
        }
        else if (event.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_6__["ACTIONS"].cardContent) {
            this.processCardContent(event.data);
        }
        else if (event.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_6__["ACTIONS"].cardImage) {
            this.processCardImage(event.data);
        }
        else if (event.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_6__["ACTIONS"].openScanModal) {
            this.openScanModal();
        }
    }
    modalNext() {
        this.cardImageIndex += 1;
        this.progress = this.progressBar[this.cardImageIndex];
        this.utilService.playAudio(this.progress.audio);
        this.hubWalkin.setTextIntro(this.progress.textIntro);
        this.hubWalkin.setSubTextIntro(this.progress.subTextIntro);
    }
    modalBack() {
        this.cardImageIndex -= 1;
        this.progress = this.progressBar[this.cardImageIndex];
        this.utilService.playAudio(this.progress.audio);
    }
    chooseMethod(method) {
        this.seletedInstruction = Object.assign(Object.assign({}, this.instruction[method]), { key: method });
        this.cardImageIndex = 0;
    }
    scanFront() {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production) {
            this.isProcessImageDone = true;
            this.isProcessImageSuccess = true;
            this.modalNext();
            return;
        }
        if (!this.skipCallApiProcessImage.includes(this.seletedInstruction.key) &&
            this.cardImageIndex === this.INDEX_FRONT) {
            this.isProcessImageSuccess = false;
            this.isProcessImageDone = false;
            const image = this.cardImages[this.INDEX_FRONT];
            if (!image) {
                this.hubService.error(this.translateService.instant('msg.notHaveFrontImage'));
                return;
            }
            this.callImageApi(this.seletedInstruction.key, image)
                .subscribe((res) => {
                this.processImageResponse(this.seletedInstruction.key, res)();
                this.isProcessImageSuccess = true;
            }, (err) => {
                const message = this.translateService.instant('msg.errorScanFront');
                this.alert.errorModal = {
                    type: 'danger',
                    message,
                    show: false,
                };
                this.isProcessImageSuccess = false;
            })
                .add(() => {
                this.isProcessImageDone = true;
            });
        }
        this.modalNext();
    }
    /**
     * NAVIGATE
     */
    changeToNextStep() {
        if (this.isProcessFaceSuccess) {
            this.sendGuestData();
            this.resetSelectedInstruction();
            this.resetHandleImage();
            this.closeCamera();
        }
        else {
            const btn = document.getElementById('btn-open-scan-modal');
            btn.click();
        }
    }
    changeToPreviousStep() {
        this.resetSelectedInstruction();
        this.resetHandleImage();
        this.closeCamera();
        if (this.progress.key === 'type') {
            this.backToScanId();
            // this.router.navigate([`/${PAGES.walkin}/${STEPS.step2}`]);
        }
        else {
            this.openScanModal();
        }
    }
    sendGuestData() {
        // this.sendGuestInfo.emit(this.guest);
        this.hubWalkin.setBookingData(this.guest);
        // this.router.navigate([`/${PAGES.walkin}/${STEPS.step2}`]);
        this.backToScanId();
    }
    backToScanId() {
        const page = this.utilService.getCurrentPage();
        console.log('back to scan id: ', page);
        switch (page) {
            case src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_7__["PAGES"].walkin:
                this.router.navigate([`/${page}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_7__["STEPS"].step2}`]);
                break;
            case src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_7__["PAGES"].checkinQr:
                this.router.navigate([`/${page}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_7__["STEPS"].step3}`]);
                break;
            default:
                break;
        }
    }
    /**
     * Scan Face
     */
    onScanFace(base64) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production) {
            this.progress.value = 100;
            this.alert.successOutside.message = this.translateService.instant('msg.successScanFace');
            this.showAlert('successOutside');
            this.closeScanModal();
            return;
        }
        this.hubService.setLoading(true);
        this.cardImages[this.cardImageIndex] = base64;
        const source = this.cardImages[this.INDEX_FRONT];
        const input = base64;
        const observer = {
            next: res => {
                const min = Number(src_app_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_4__["ConfigureService"].config.faceDistance.min);
                const max = Number(src_app_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_4__["ConfigureService"].config.faceDistance.max);
                const distance = res['l2 distance'];
                // alert(`${JSON.stringify(res)} ${min} ${max}`);
                if (distance && min <= distance && distance <= max) {
                    this.isProcessFaceSuccess = true;
                    this.progress.value = 100;
                    this.alert.successOutside.message = this.translateService.instant('msg.successScanFace');
                    this.showAlert('successOutside');
                    this.closeScanModal();
                }
                else {
                    this.isProcessFaceSuccess = false;
                    this.alert.errorModal.message = this.translateService.instant('msg.notDetected');
                    this.alert.errorModal.type = 'danger';
                    this.showAlert('errorModal');
                    this.cardImageIndex = 0;
                    this.progress = this.progressBar[this.cardImageIndex];
                    this.cardImages = [];
                }
            },
            error: () => {
                this.isProcessFaceSuccess = false;
                this.alert.errorModal.message = this.translateService.instant('msg.errorScanFace');
                this.alert.errorModal.type = 'danger';
                this.showAlert('errorModal');
                this.cardImageIndex = 0;
                this.progress = this.progressBar[this.cardImageIndex];
                this.cardImages = [];
            },
        };
        const interval = window.setInterval(() => {
            if (this.isProcessImageDone) {
                if (!this.isProcessImageSuccess) {
                    this.showAlert('errorModal');
                    this.chooseMethod(this.seletedInstruction.key);
                    this.cardImages = [];
                    this.hubService.setLoading(false);
                    window.clearInterval(interval);
                    return;
                }
                this.ocrService
                    .faceEmbedding(source, input)
                    .subscribe(observer)
                    .add(() => {
                    this.hubService.setLoading(false);
                });
                window.clearInterval(interval);
            }
        }, 100);
    }
    /**
     *
     * Quét với TH loại giấy tờ là hộ chiếu
     */
    processCardContent(data) {
        if (!this.skipCallApiProcessImage.includes(this.seletedInstruction.key)) {
            return;
        }
        if (this.skipCallApiProcessImage.includes(this.seletedInstruction.key) &&
            this.cardImageIndex !== this.INDEX_FRONT) {
            return;
        }
        this.isProcessImageDone = true;
        this.guest = {
            birth: data['Date of birth'] || '',
            expiry: data['Date of expiry'] || '',
            guestName: data['National name'] || '',
            passportNumber: data['Passport number'] || '',
            passportType: data['Passport type'] || '',
            address: '',
            sex: data['Sex'] || '',
            nationalityCode: data['Nationality code'] || '',
        };
        if (!this.guest.passportNumber) {
            this.isProcessImageSuccess = false;
            const message = this.translateService.instant('msg.errorScanFront');
            this.alert.errorModal = {
                type: 'danger',
                message,
                show: false,
            };
            return;
        }
        if (moment__WEBPACK_IMPORTED_MODULE_2__(this.guest.birth).isValid()) {
            this.guest.birth = moment__WEBPACK_IMPORTED_MODULE_2__(this.guest.birth).format('DD/MM/yyyy');
        }
        if (moment__WEBPACK_IMPORTED_MODULE_2__(this.guest.expiry).isValid()) {
            this.guest.expiry = moment__WEBPACK_IMPORTED_MODULE_2__(this.guest.expiry).format('DD/MM/yyyy');
        }
        this.isProcessImageSuccess = true;
    }
    processCardImage(image) {
        this.cardImages[this.cardImageIndex] = image;
    }
    resetScannedImage(index) {
        this.cardImages[index] = '';
    }
    resetSelectedInstruction() {
        this.seletedInstruction = {
            buttonName: '',
            img: '',
            key: '',
            sentence: '',
        };
        this.guest = {
            address: '',
            guestName: '',
            birth: '',
            expiry: '',
            passportNumber: '',
            passportType: '',
            nationalityCode: '',
            sex: '',
        };
        this.cardImages = ['', ''];
        this.resetAlert();
    }
    resetHandleImage() {
        this.isProcessImageSuccess = false;
        this.isProcessImageDone = false;
        this.isProcessFaceSuccess = false;
    }
    /** PASSPORT SCANNER */
    startPassportReader() {
        this.passportReader.setConnectionValue(this.passportReader.getStrConnect());
        this.passportReader.onConnection();
    }
    /**
     * MODAL
     */
    openScanModal() {
        this.startPassportReader();
        this.progress = this.progressBar[0];
        this.cardImages = [];
        this.cardImageIndex = 0;
        this.resetHandleImage();
        this.resetAlert();
        this.utilService.playAudio(this.progress.audio);
    }
    closeScanModal() {
        this.passportReader.disConnect();
        this.closeCamera();
        this.sendGuestData();
        this.resetSelectedInstruction();
        this.resetHandleImage();
        this.closeAlert('errorModal');
    }
    /**
     * CLOSE CAMERA
     */
    closeCamera() {
        const event = {
            receiver: src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_7__["PAGES"].scanFace,
            message: src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_6__["ACTIONS"].closeCamera,
        };
        this.hubService.sendEvent(event);
    }
    /**
     * PROCESS IMAGE
     */
    callImageApi(type, image) {
        const result = {};
        result[this.PASSPORT] = () => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
        };
        result[this.IDCARD] = this.ocrService.idImage(image);
        result[this.LICENSE] = this.ocrService.licenseImage(image);
        result[this.IDCARD_NEW] = this.ocrService.idImageNew(image);
        return result[type];
    }
    /**
     * Gán dữ liệu api trả về
     */
    processImageResponse(type, data) {
        const result = {};
        result[this.PASSPORT] = () => { };
        result[this.IDCARD] = () => {
            this.guest = {
                birth: data['birth'] || '',
                expiry: '',
                guestName: data['name'] || '',
                passportNumber: data['id'] || '',
                passportType: '',
                address: data['add'] || '',
                sex: '',
                nationalityCode: '',
            };
        };
        result[this.LICENSE] = () => {
            this.guest = {
                birth: data['dob'] || '',
                expiry: '',
                guestName: data['name'] || '',
                passportNumber: data['id'] || '',
                passportType: '',
                address: data['add'] || '',
                sex: '',
                nationalityCode: data['nat'] || '',
            };
        };
        result[this.IDCARD_NEW] = () => {
            this.guest = {
                birth: data['dob'] || '',
                expiry: data['expire_date'] || '',
                guestName: data['name'] || '',
                passportNumber: data['id'] || '',
                passportType: '',
                address: data['add'] || '',
                sex: 'nam' || false,
                nationalityCode: data['nat'] || '',
            };
        };
        return result[type];
    }
    /** ALERT */
    resetAlert() {
        Object.keys(alert).forEach((key) => {
            this.alert[key] = {
                show: false,
                type: '',
                message: '',
            };
        });
    }
    showAlert(name = '') {
        if (name === 'errorModal') {
            this.hubService.error(this.alert[name].message);
        }
        else {
            this.alert[name].show = true;
        }
        Object.keys(alert).forEach((key) => {
            if (name !== key) {
                this.alert[key] = {
                    show: false,
                    type: '',
                    message: '',
                };
            }
        });
    }
    closeAlert(name = '') {
        this.alert[name] = {
            show: false,
            type: '',
            message: '',
        };
    }
}
FlowDetectComponent.ɵfac = function FlowDetectComponent_Factory(t) { return new (t || FlowDetectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_9__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_passportReader_passport_reader_service__WEBPACK_IMPORTED_MODULE_11__["PassportReaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_ocr_ocr_service__WEBPACK_IMPORTED_MODULE_12__["OcrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_14__["HubWalkinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"])); };
FlowDetectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlowDetectComponent, selectors: [["app-flow-detect"]], outputs: { sendGuestInfo: "sendGuestInfo", backStep: "backStep" }, decls: 4, vars: 4, consts: [["class", "d-flex flex-column h-100", 4, "ngIf"], [1, "d-flex", "flex-column", "h-100"], [1, "wrapper", "h-100", "d-flex", "flex-column", "justify-content-between"], [1, "flex-grow-1"], [1, "text-center", "mt-3"], [1, "text-grey-dark", "font-weight-600"], ["fxLayout", "row", "fxLayoutAlign", "space-between none", 1, "mt-2"], ["fxFlex", "49", 1, "card", "card-box-shadow", 3, "ngClass", "click"], [1, "img-document", "img-passport"], [1, "card-text", "text-center", "font-weight-600", "my-3"], ["fxFlex", "49", 1, "card", "card-box-shadow", 2, "width", "18rem", 3, "ngClass", "click"], [1, "img-document", "img-license"], ["fxLayout", "row", "fxLayoutAlign", "space-between none", 1, "mt-3"], [1, "img-document", "img-id-card"], [1, "img-document", "img-id-card-new"], [1, "wrapper", "w-100", "d-flex", "flex-row", "justify-content-center", "mb-3"], ["className", "btn-primary w-100 text-uppercase", 1, "w-80", 3, "click"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center"], [1, "w-100"], [1, "w-100", 3, "src"], [1, "d-flex", "flex-row", "justify-content-around", "w-100", "mb-3"], ["className", "text-uppercase text-primary border-primary w-100", 1, "w-40", 3, "click"], [3, "icon"], ["className", "text-uppercase btn-primary w-100", 1, "w-40", 3, "disabled", "click"], [3, "type", "closed"], [3, "image"]], template: function FlowDetectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FlowDetectComponent_div_0_Template, 33, 30, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FlowDetectComponent_div_1_Template, 19, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FlowDetectComponent_div_2_Template, 18, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FlowDetectComponent_div_3_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress.key === "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress.key === "front");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress.key === "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress.key === "face");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_19__["ButtonComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbAlert"], _scan_face_scan_face_component__WEBPACK_IMPORTED_MODULE_22__["ScanFaceComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n[_nghost-%COMP%]   .card.active[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  box-shadow: none;\n  background-color: var(--primary);\n}\n[_nghost-%COMP%]   .card.active[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n[_nghost-%COMP%]   .img-document[_ngcontent-%COMP%] {\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  background-size: cover !important;\n  height: 300px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .img-passport[_ngcontent-%COMP%] {\n  background: url('pp.jpg');\n}\n[_nghost-%COMP%]   .img-license[_ngcontent-%COMP%] {\n  background: url('license.jpg');\n}\n[_nghost-%COMP%]   .img-id-card[_ngcontent-%COMP%] {\n  background: url('cmnd.jpg');\n}\n[_nghost-%COMP%]   .img-id-card-new[_ngcontent-%COMP%] {\n  background: url('cccd-new.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmbG93LWRldGVjdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBLGtDQUFBO0FBT0EsOEVBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUMvQkY7QUNFRTtFRm1CRjtJQWFJLHFCQUFBO0lBQ0EsdUJBQUE7RUM5QkY7QUFDRjtBQ0VFO0VGYUY7SUFrQkksa0JBQUE7SUFDQSxtQkFBQTtFQzdCRjtBQUNGO0FDRUU7RUZPRjtJQXVCSSx5QkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VDNUJGO0FBQ0Y7QUNERTtFRkNGO0lBK0JJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUMzQkY7QUFDRjtBQ1FFO0VGakJGO0lBdUNJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUMxQkY7QUFDRjtBQWxEQTtFQUNFLFlBQUE7QUFxREY7QUFuREk7RUFDRSxxQkFBQTtBQXFETjtBQWxERTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQW9ESjtBQW5ESTtFQUNFLG1CQUFBO0FBcUROO0FBbERFO0VBQ0UsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFvREo7QUFsREU7RUFDRSx5QkFBQTtBQW9ESjtBQWxERTtFQUNFLDhCQUFBO0FBb0RKO0FBbERFO0VBQ0UsMkJBQUE7QUFvREo7QUFsREU7RUFDRSwrQkFBQTtBQW9ESiIsImZpbGUiOiJmbG93LWRldGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vbWl4aW5zJztcblxuJGZvbnRTaXplU206IDEycHg7XG4kZm9udFNpemVNZDogMTZweDtcbiRmb250U2l6ZUxnOiAzMHB4O1xuJGZvbnRTaXplWGw6IDQ1cHg7XG4kZm9udFNpemVYeGw6IDUwcHg7XG5cbiRzeW1ib2xTaXplU206IDUwcHg7XG4kc3ltYm9sU2l6ZU1kOiAxMHB4O1xuJHN5bWJvbFNpemVMZzogMTUwcHg7XG4kc3ltYm9sU2l6ZVhsOiAyNTBweDtcblxuJHZpZGVvV2lkdGhTbTogMTAwcHg7XG4kdmlkZW9XaWR0aE1kOiAzMDBweDtcbiR2aWRlb1dpZHRoTGc6IDEwMDBweDtcbiR2aWRlb1dpZHRoWGw6IDE1MDBweDtcblxuJGNvbG9yLWxpZ2h0OiAjRUNGOEU2O1xuJGNvbG9yLWFjY2VudDogICMzQTUzMkM7XG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjQzRBNDc0O1xuJGNvbG9yLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4kY29sb3ItZ3JleTogIzlFOUU5RTtcbiRjb2xvci1ncmV5LWRhcms6ICM3NTc1NzU7XG5cbi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4kdGhlbWUtY29sb3JzOiAoXG4gIHByaW1hcnk6ICRjb2xvci1hY2NlbnQsXG4gIHNlY29uZGFyeTogJGNvbG9yLXNlY29uZGFyeSxcbiAgbGlnaHQ6ICRjb2xvci1saWdodCxcbik7XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogI3skZm9udFNpemVTbX07XG4gIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZVNtfTtcbiAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoU219O1xuICAtLWdyZXk6ICN7JGNvbG9yLWdyZXl9O1xuICAtLWdyZXktZGFyazogI3skY29sb3ItZ3JleS1kYXJrfTtcbiAgLS1ncmV5LWxpZ2h0OiAjeyRjb2xvci1ncmV5LWxpZ2h0fTtcbiAgLS1ncmVlbi1saWdodDogI3skY29sb3ItZ3JlZW4tbGlnaHR9O1xuICAtLWxpZ2h0OiAjeyRjb2xvci1saWdodH07XG5cbiAgQGluY2x1ZGUgc20ge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfTtcblxuICBAaW5jbHVkZSBtZCB7XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTWR9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aE1kfTtcbiAgfTtcblxuICBAaW5jbHVkZSBsZyB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxOTQuNzVweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogNjkuNXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplTGd9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZUxnfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhMZ31cbiAgfTtcblxuICBAaW5jbHVkZSB4bCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVhsfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVMZ307XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTGd9O1xuICB9O1xuXG4gIEBpbmNsdWRlIHh4eHhsIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE0MHB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplWGx9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZVhsfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhYbH07XG4gIH07XG59IiwiLyogQ3VzdG9taXplIEJvb3RzdHJhcCBWYXJpYWJsZXMgKi9cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogMTJweDtcbiAgLS1zeW1ib2xTaXplOiA1MHB4O1xuICAtLXZpZGVvV2lkdGg6IDEwMHB4O1xuICAtLWdyZXk6ICM5RTlFOUU7XG4gIC0tZ3JleS1kYXJrOiAjNzU3NTc1O1xuICAtLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4gIC0tZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4gIC0tbGlnaHQ6ICNFQ0Y4RTY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXN5bWJvbFNpemU6IDEwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogMzBweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4IDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMDAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDI1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTUwMHB4O1xuICB9XG59XG5cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmNhcmQgLmNhcmQtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbjpob3N0IC5jYXJkLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuOmhvc3QgLmNhcmQuYWN0aXZlIC5jYXJkLXRleHQge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuOmhvc3QgLmltZy1kb2N1bWVudCB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuaW1nLXBhc3Nwb3J0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcC5qcGdcIik7XG59XG46aG9zdCAuaW1nLWxpY2Vuc2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xpY2Vuc2UuanBnXCIpO1xufVxuOmhvc3QgLmltZy1pZC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jbW5kLmpwZ1wiKTtcbn1cbjpob3N0IC5pbWctaWQtY2FyZC1uZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NjY2QtbmV3LmpwZ1wiKTtcbn0iLCJAbWl4aW4gZ2VuLXRleHQoJGZvbnQtc2l6ZSkge1xyXG4gIGZvbnQtc2l6ZTogdmFyKCRmb250LXNpemUpO1xyXG4gIGxpbmUtaGVpZ2h0OiB2YXIoJGZvbnQtc2l6ZSk7XHJcbn1cclxuXHJcbiRzbS13aWR0aDogNTc2cHg7XHJcbiRtZC13aWR0aDogNzY4cHg7XHJcbiRsZy13aWR0aDogOTkycHg7XHJcbiR4bC13aWR0aDogMTIwMHB4O1xyXG4keHhsLXdpZHRoOiAxNDAwcHg7XHJcbiR4eHhsLXdpZHRoOiAxNTQzcHg7XHJcbiR4eHh4bC13aWR0aDogMzAwMHB4O1xyXG5cclxuXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtZC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbGctd2lkdGh9KXtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4eHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code\Kiosk\kiosk-checkin\src\main.ts */"zUnb");


/***/ }),

/***/ "0AA1":
/*!***************************************************!*\
  !*** ./src/app/modules/checkin/checkin.module.ts ***!
  \***************************************************/
/*! exports provided: CheckinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinModule", function() { return CheckinModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_scan_qr_scan_qr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scan-qr/scan-qr.component */ "HGSx");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ "fkfe");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_booking_code_booking_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/booking-code/booking-code.component */ "PQve");
/* harmony import */ var _components_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/booking-details/booking-details.component */ "P0mD");
/* harmony import */ var _components_booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/booking-create/booking-create.component */ "YSWC");
/* harmony import */ var _components_flow_checkin_flow_checkin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/flow-checkin/flow-checkin.component */ "xFiT");
/* harmony import */ var _components_flow_booking_flow_booking_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/flow-booking/flow-booking.component */ "AgR9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_trans_trans_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/trans/trans.module */ "vdLp");
/* harmony import */ var _components_availability_rooms_availability_rooms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/availability-rooms/availability-rooms.component */ "2sx2");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_shared_services_time_picker_adapter_time_picker_adapter_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/time-picker-adapter/time-picker-adapter.service */ "fAUp");
/* harmony import */ var _components_scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/scan-identity-card/scan-identity-card.component */ "UEAr");
/* harmony import */ var _components_scan_face_scan_face_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/scan-face/scan-face.component */ "kvQK");
/* harmony import */ var _components_booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/booking-done/booking-done.component */ "UTnJ");
/* harmony import */ var _navigation_bar_navigation_bar_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../navigation-bar/navigation-bar.module */ "uihs");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "tolN");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/components/components.module */ "V/fk");
/* harmony import */ var src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/directives/directives.module */ "yGOH");
/* harmony import */ var _components_flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/flow-detect/flow-detect.component */ "+vjk");
/* harmony import */ var _components_booking_date_picker_booking_date_picker_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/booking-date-picker/booking-date-picker.component */ "TYxJ");
/* harmony import */ var _components_room_type_info_room_type_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/room-type-info/room-type-info.component */ "VsLt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");



























class CheckinModule {
}
CheckinModule.ɵfac = function CheckinModule_Factory(t) { return new (t || CheckinModule)(); };
CheckinModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: CheckinModule });
CheckinModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTimeAdapter"],
            useClass: src_app_shared_services_time_picker_adapter_time_picker_adapter_service__WEBPACK_IMPORTED_MODULE_14__["TimePickerAdapterService"]
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            src_app_shared_trans_trans_module__WEBPACK_IMPORTED_MODULE_11__["TransModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _navigation_bar_navigation_bar_module__WEBPACK_IMPORTED_MODULE_18__["NavigationBarModule"],
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_20__["SharedComponentsModule"],
            src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_21__["DirectivesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](CheckinModule, { declarations: [_components_scan_qr_scan_qr_component__WEBPACK_IMPORTED_MODULE_1__["ScanQrComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        _components_booking_code_booking_code_component__WEBPACK_IMPORTED_MODULE_5__["BookingCodeComponent"],
        _components_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_6__["BookingDetailsComponent"],
        _components_flow_checkin_flow_checkin_component__WEBPACK_IMPORTED_MODULE_8__["FlowCheckinComponent"],
        _components_flow_booking_flow_booking_component__WEBPACK_IMPORTED_MODULE_9__["FlowBookingComponent"],
        _components_booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_7__["BookingCreateComponent"],
        _components_availability_rooms_availability_rooms_component__WEBPACK_IMPORTED_MODULE_12__["AvailabilityRoomsComponent"],
        _components_scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_15__["ScanIdentityCardComponent"],
        _components_scan_face_scan_face_component__WEBPACK_IMPORTED_MODULE_16__["ScanFaceComponent"],
        _components_booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_17__["BookingDoneComponent"],
        _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeComponent"],
        _components_flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_22__["FlowDetectComponent"],
        _components_booking_date_picker_booking_date_picker_component__WEBPACK_IMPORTED_MODULE_23__["BookingDatePickerComponent"],
        _components_room_type_info_room_type_info_component__WEBPACK_IMPORTED_MODULE_24__["RoomTypeInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        src_app_shared_trans_trans_module__WEBPACK_IMPORTED_MODULE_11__["TransModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _navigation_bar_navigation_bar_module__WEBPACK_IMPORTED_MODULE_18__["NavigationBarModule"],
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_20__["SharedComponentsModule"],
        src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_21__["DirectivesModule"]], exports: [_components_scan_qr_scan_qr_component__WEBPACK_IMPORTED_MODULE_1__["ScanQrComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        _components_booking_code_booking_code_component__WEBPACK_IMPORTED_MODULE_5__["BookingCodeComponent"],
        _components_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_6__["BookingDetailsComponent"],
        _components_flow_checkin_flow_checkin_component__WEBPACK_IMPORTED_MODULE_8__["FlowCheckinComponent"],
        _components_flow_booking_flow_booking_component__WEBPACK_IMPORTED_MODULE_9__["FlowBookingComponent"],
        _components_booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_7__["BookingCreateComponent"],
        _components_availability_rooms_availability_rooms_component__WEBPACK_IMPORTED_MODULE_12__["AvailabilityRoomsComponent"],
        _components_scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_15__["ScanIdentityCardComponent"],
        _components_scan_face_scan_face_component__WEBPACK_IMPORTED_MODULE_16__["ScanFaceComponent"],
        _components_booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_17__["BookingDoneComponent"],
        _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeComponent"],
        _components_flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_22__["FlowDetectComponent"],
        _components_booking_date_picker_booking_date_picker_component__WEBPACK_IMPORTED_MODULE_23__["BookingDatePickerComponent"]] }); })();


/***/ }),

/***/ "0Jb9":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/navigation-bar/components/navigation/navigation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");














function NavigationComponent_ng_template_9_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 17);
} }
const _c0 = function (a0, a1) { return { "text-primary": a0, "font-weight-bold": a1 }; };
function NavigationComponent_ng_template_9_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavigationComponent_ng_template_9_div_5_div_1_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavigationComponent_ng_template_9_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const lang_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.changeLanguage(lang_r4.key, lang_r4.image, lang_r4.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("key", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r5 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c0, ctx_r3.siteLang.key === lang_r4.key, ctx_r3.siteLang.key === lang_r4.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, lang_r4.label), " ");
} }
function NavigationComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NavigationComponent_ng_template_9_div_5_Template, 6, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "lang.language"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.langs);
} }
class NavigationComponent {
    constructor(router, translate, modalService, hubService, location, utilService) {
        this.router = router;
        this.translate = translate;
        this.modalService = modalService;
        this.hubService = hubService;
        this.location = location;
        this.utilService = utilService;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowLeft"];
        this.faLanguage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLanguage"];
        this.siteLang = {
            key: 'vi',
            image: '',
            label: 'lang.vi',
        };
        this.langs = [
            {
                key: 'vi',
                image: './assets/images/vi-32.png',
                label: 'lang.vi',
            },
            {
                key: 'en',
                image: './assets/images/en-32.png',
                label: 'lang.en',
            },
        ];
        this.subcribe = [];
        const sub = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((evt) => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["RoutesRecognized"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])())
            .subscribe((events) => {
            // console.log('previous url', events[0].urlAfterRedirects);
            // console.log('current url', events[1].urlAfterRedirects);
            const previousUrl = events[0].urlAfterRedirects;
            const currentUrl = events[1].urlAfterRedirects;
            const previousStep = this.utilService.getCurrentStep(previousUrl);
            const currentStep = this.utilService.getCurrentStep(currentUrl);
            const currentPage = this.utilService.getCurrentPage();
            let exactCurrentPage = currentPage === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["PAGES"].walkin ? src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["STEPS"].step2 : src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["STEPS"].step3;
            console.log('ROUTE CHANGE: ', previousStep, currentStep, exactCurrentPage);
            if (previousStep !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["STEPS"].detect && currentStep === exactCurrentPage) {
                this.router.navigate([`/${currentPage}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["STEPS"].detect}`]);
            }
        });
        this.subcribe = [sub];
    }
    ngOnDestroy() {
        this.subcribe.forEach((s) => s.unsubscribe());
    }
    ngOnInit() {
        const defaultLangKey = 'vi';
        const defaultLang = this.langs.find((l) => l.key === defaultLangKey);
        this.changeLanguage(defaultLang.key, defaultLang.image, defaultLang.label);
    }
    goBack() {
        const splited = this.router.url.split(/[\/?]/);
        const step = splited.pop();
        const page = splited.pop();
        if (step === 'detect') {
            const event = {
                receiver: src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["PAGES"].flowDetect,
                message: src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].backStep,
            };
            this.hubService.sendEvent(event);
        }
        else if (step === 'step2') {
            this.router.navigateByUrl(`/${page}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["STEPS"].step1}`);
        }
        else if (step === 'step3') {
            this.router.navigateByUrl(`/${page}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["STEPS"].step2}`);
        }
        else if (step === 'step4' || step === 'step1') {
            this.router.navigateByUrl('/options');
        }
        else if (step === 'options') {
            this.router.navigateByUrl('/');
        }
        else {
            this.location.back();
        }
    }
    changeLanguage(lang, imgSrc, label) {
        this.translate.use(lang);
        this.siteLang.image = imgSrc;
        this.siteLang.key = lang;
        this.siteLang.label = label;
        this.modalService.dismissAll();
    }
    openChangeLang(content) {
        this.modalService.open(content, { centered: true });
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_8__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 11, vars: 0, consts: [[1, "navbar"], [1, "toolbar-brand"], [1, "navbar-brand", 3, "click"], ["src", "./assets/images/back.svg", "width", "50"], [1, "navbar-nav"], [1, "d-flex", "flex-row", "justify-content-end"], [1, "btn", "text-white", 3, "click"], ["src", "./assets/images/lang.svg", "width", "50"], ["content", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [3, "key", 4, "ngFor", "ngForOf"], [3, "key"], ["class", "dropdown-divider", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "none center", 1, "language-item", 3, "click"], [3, "ngClass"], [1, "dropdown-divider"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10); return ctx.openChangeLang(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, NavigationComponent_ng_template_9_Template, 6, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.navbar[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  color: white;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.navbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-style: italic;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   a.navbar-brand[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   a.navbar-brand[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   a.navbar-brand[_ngcontent-%COMP%]:visited {\n  text-decoration: none;\n  color: inherit;\n}\n.navbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   a.navbar-brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.language-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkEsa0NBQUE7QUFPQSw4RUFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQy9CRjtBQ0VFO0VGbUJGO0lBYUkscUJBQUE7SUFDQSx1QkFBQTtFQzlCRjtBQUNGO0FDRUU7RUZhRjtJQWtCSSxrQkFBQTtJQUNBLG1CQUFBO0VDN0JGO0FBQ0Y7QUNFRTtFRk9GO0lBdUJJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUM1QkY7QUFDRjtBQ0RFO0VGQ0Y7SUErQkksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQzNCRjtBQUNGO0FDUUU7RUZqQkY7SUF1Q0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQzFCRjtBQUNGO0FBbERBO0VBQ0UsY0FBQTtBQXFERjtBQWxEQTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBcURGO0FBbkRFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFxREo7QUFsRE07RUFHRSxxQkFBQTtFQUNBLGNBQUE7QUFrRFI7QUEvQ007RUFDRSxZQUFBO0FBaURSO0FBMUNBO0VBQ0UsZUFBQTtBQTZDRiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9taXhpbnMnO1xuXG4kZm9udFNpemVTbTogMTJweDtcbiRmb250U2l6ZU1kOiAxNnB4O1xuJGZvbnRTaXplTGc6IDMwcHg7XG4kZm9udFNpemVYbDogNDVweDtcbiRmb250U2l6ZVh4bDogNTBweDtcblxuJHN5bWJvbFNpemVTbTogNTBweDtcbiRzeW1ib2xTaXplTWQ6IDEwcHg7XG4kc3ltYm9sU2l6ZUxnOiAxNTBweDtcbiRzeW1ib2xTaXplWGw6IDI1MHB4O1xuXG4kdmlkZW9XaWR0aFNtOiAxMDBweDtcbiR2aWRlb1dpZHRoTWQ6IDMwMHB4O1xuJHZpZGVvV2lkdGhMZzogMTAwMHB4O1xuJHZpZGVvV2lkdGhYbDogMTUwMHB4O1xuXG4kY29sb3ItbGlnaHQ6ICNFQ0Y4RTY7XG4kY29sb3ItYWNjZW50OiAgIzNBNTMyQztcbiRjb2xvci1ncmVlbi1saWdodDogIzZGOEY1RDtcbiRjb2xvci1zZWNvbmRhcnk6ICNDNEE0NzQ7XG4kY29sb3ItZ3JleS1saWdodDogI0Q0RDRENDtcbiRjb2xvci1ncmV5OiAjOUU5RTlFO1xuJGNvbG9yLWdyZXktZGFyazogIzc1NzU3NTtcblxuLyogQ3VzdG9taXplIEJvb3RzdHJhcCBWYXJpYWJsZXMgKi9cbiR0aGVtZS1jb2xvcnM6IChcbiAgcHJpbWFyeTogJGNvbG9yLWFjY2VudCxcbiAgc2Vjb25kYXJ5OiAkY29sb3Itc2Vjb25kYXJ5LFxuICBsaWdodDogJGNvbG9yLWxpZ2h0LFxuKTtcblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVNtfTtcbiAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplU219O1xuICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhTbX07XG4gIC0tZ3JleTogI3skY29sb3ItZ3JleX07XG4gIC0tZ3JleS1kYXJrOiAjeyRjb2xvci1ncmV5LWRhcmt9O1xuICAtLWdyZXktbGlnaHQ6ICN7JGNvbG9yLWdyZXktbGlnaHR9O1xuICAtLWdyZWVuLWxpZ2h0OiAjeyRjb2xvci1ncmVlbi1saWdodH07XG4gIC0tbGlnaHQ6ICN7JGNvbG9yLWxpZ2h0fTtcblxuICBAaW5jbHVkZSBzbSB7XG4gICAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICB9O1xuXG4gIEBpbmNsdWRlIG1kIHtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVNZH07XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTWR9O1xuICB9O1xuXG4gIEBpbmNsdWRlIGxnIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVMZ307XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTGd9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aExnfVxuICB9O1xuXG4gIEBpbmNsdWRlIHhsIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDEzOXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplWGx9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZUxnfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhMZ307XG4gIH07XG5cbiAgQGluY2x1ZGUgeHh4eGwge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVYbH07XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplWGx9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aFhsfTtcbiAgfTtcbn0iLCIvKiBDdXN0b21pemUgQm9vdHN0cmFwIFZhcmlhYmxlcyAqL1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAtLWZvbnRTaXplOiAxMnB4O1xuICAtLXN5bWJvbFNpemU6IDUwcHg7XG4gIC0tdmlkZW9XaWR0aDogMTAwcHg7XG4gIC0tZ3JleTogIzlFOUU5RTtcbiAgLS1ncmV5LWRhcms6ICM3NTc1NzU7XG4gIC0tZ3JleS1saWdodDogI0Q0RDRENDtcbiAgLS1ncmVlbi1saWdodDogIzZGOEY1RDtcbiAgLS1saWdodDogI0VDRjhFNjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tc3ltYm9sU2l6ZTogMTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTk0Ljc1cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDY5LjVweDtcbiAgICAtLWZvbnRTaXplOiAzMHB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHggO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDEzOXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6IDQ1cHg7XG4gICAgLS1zeW1ib2xTaXplOiAxNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMwMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxNDBweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMjUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxNTAwcHg7XG4gIH1cbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuLm5hdmJhciAudG9vbGJhci1icmFuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXIgLnRvb2xiYXItYnJhbmQgYS5uYXZiYXItYnJhbmQsIC5uYXZiYXIgLnRvb2xiYXItYnJhbmQgYS5uYXZiYXItYnJhbmQ6YWN0aXZlLCAubmF2YmFyIC50b29sYmFyLWJyYW5kIGEubmF2YmFyLWJyYW5kOnZpc2l0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLm5hdmJhciAudG9vbGJhci1icmFuZCBhLm5hdmJhci1icmFuZCAubG9nbyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmxhbmd1YWdlLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQG1peGluIGdlbi10ZXh0KCRmb250LXNpemUpIHtcclxuICBmb250LXNpemU6IHZhcigkZm9udC1zaXplKTtcclxuICBsaW5lLWhlaWdodDogdmFyKCRmb250LXNpemUpO1xyXG59XHJcblxyXG4kc20td2lkdGg6IDU3NnB4O1xyXG4kbWQtd2lkdGg6IDc2OHB4O1xyXG4kbGctd2lkdGg6IDk5MnB4O1xyXG4keGwtd2lkdGg6IDEyMDBweDtcclxuJHh4bC13aWR0aDogMTQwMHB4O1xyXG4keHh4bC13aWR0aDogMTU0M3B4O1xyXG4keHh4eGwtd2lkdGg6IDMwMDBweDtcclxuXHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzbS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbWQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGxnLXdpZHRofSl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "2sx2":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/checkin/components/availability-rooms/availability-rooms.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AvailabilityRoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilityRoomsComponent", function() { return AvailabilityRoomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _room_type_info_room_type_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../room-type-info/room-type-info.component */ "VsLt");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_room_availability_room_availability_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/room-availability/room-availability.service */ "5+xa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/booking/booking.service */ "RnX0");
/* harmony import */ var _booking_date_picker_booking_date_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../booking-date-picker/booking-date-picker.component */ "TYxJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");























const _c0 = function (a1) { return ["checkbox-roomtype", a1]; };
function AvailabilityRoomsComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_div_45_Template_label_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const roomtype_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clickRoomType(roomtype_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_div_45_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const roomtype_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showRoomType(roomtype_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roomtype_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.selectedRoomTypeCodes.includes(roomtype_r6.roomTypeCode) ? "selected-roomtype" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](roomtype_r6.roomTypeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faInfoCircle);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function AvailabilityRoomsComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_div_55_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const floor_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onSelectFloor(floor_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const floor_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, (ctx_r1.selectedFloor == null ? null : ctx_r1.selectedFloor.floorID) === floor_r11.floorID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", floor_r11.floorName, " ");
} }
function AvailabilityRoomsComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r2.error.fetchRoomAvai, " ");
} }
const _c2 = function () { return []; };
const _c3 = function (a0, a1) { return { "active": a0, "booked": a1 }; };
function AvailabilityRoomsComponent_div_58_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_div_58_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const room_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.onSelectRoom(room_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c3, ctx_r15.selectedRoom.roomName === room_r16.roomName, ctx_r15.selectedRoom.roomName !== room_r16.roomName && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2).includes(room_r16.roomName)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", room_r16.roomName, " ");
} }
function AvailabilityRoomsComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AvailabilityRoomsComponent_div_58_div_3_Template, 4, 7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.roomAvaiData);
} }
function AvailabilityRoomsComponent_ng_template_126_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-timepicker", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AvailabilityRoomsComponent_ng_template_126_Template_ngb_timepicker_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.time.arrival = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-timepicker", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AvailabilityRoomsComponent_ng_template_126_Template_ngb_timepicker_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.time.depart = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_ng_template_126_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.closeTimePicker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "roomAvail.arrTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.time.arrival);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "roomAvail.deptTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.time.depart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, "roomAvail.close"), " ");
} }
const _c4 = function (a1) { return ["rb-item", a1]; };
class AvailabilityRoomsComponent {
    constructor(modalService, roomAvaiService, calendar, router, hubService, util, translateService, hubWalkin, bookingService) {
        this.modalService = modalService;
        this.roomAvaiService = roomAvaiService;
        this.calendar = calendar;
        this.router = router;
        this.hubService = hubService;
        this.util = util;
        this.translateService = translateService;
        this.hubWalkin = hubWalkin;
        this.bookingService = bookingService;
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faAngleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleUp"];
        this.faAngleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDown"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInfoCircle"];
        this.bookingSteps = [];
        this.toDate = null;
        this.time = {
            arrival: '14:00',
            depart: '12:00',
        };
        this.adultNum = 1;
        this.childNum = 0;
        this.roomAvaiData = [];
        this.floorData = [];
        this.selectedFloor = {
            floorID: 0,
            floorName: '',
            floorCode: '',
        };
        this.selectedRoom = {
            roomName: '',
            roomTypeCode: '',
            floorName: '',
            buildingName: '',
        };
        this.roomTypes = [];
        this.selectedRoomTypeCodes = [];
        this.error = {
            fetchRoomAvai: '',
        };
        this.alertClosed = false;
        this.lang = {
            to: '',
        };
        // this.fromDate = calendar.getToday();
        this.fromDate = calendar.getNext(calendar.getToday(), 'd', 1);
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 2);
        this.lang.to = this.translateService.instant('roomAvail.selected.to');
        // console.log('lang to: ', this.lang.to);
        this.translateService.onLangChange.subscribe((event) => {
            this.lang.to = this.translateService.instant('roomAvail.selected.to');
        });
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["PAGES"].availRooms) {
                return;
            }
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].nextStep) {
                this.changeToNextStep();
            }
            else if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].backStep) {
                this.backStep();
            }
        });
    }
    ngOnInit() {
        // this.fetchFloor();
        this.initData();
        this.hubWalkin.setStep(1);
    }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
    }
    onSubmit() {
        this.changeToNextStep();
    }
    changeToNextStep() {
        if (!this.selectedRoom.roomName) {
            this.hubService.error(this.translateService.instant('msg.notSelectRoom'));
            return;
        }
        if (!moment__WEBPACK_IMPORTED_MODULE_1__(this.fromDate).isValid()) {
            this.hubService.error(this.translateService.instant('msg.notSelectArrival'));
            return;
        }
        if (!moment__WEBPACK_IMPORTED_MODULE_1__(this.toDate).isValid()) {
            this.hubService.error(this.translateService.instant('msg.notSelectDeparture'));
            return;
        }
        const transData = Object.assign(Object.assign({}, this.selectedRoom), { adult: this.adultNum, child: this.childNum, arrivalDate: moment__WEBPACK_IMPORTED_MODULE_1__(this.util.ngBDateToNormalDate(this.fromDate)).format('YYYY-MM-DD'), departDate: moment__WEBPACK_IMPORTED_MODULE_1__(this.util.ngBDateToNormalDate(this.toDate)).format('YYYY-MM-DD'), arrivalTime: this.time.arrival, departTime: this.time.depart });
        this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["PAGES"].walkin}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["STEPS"].step2}`]);
        this.hubWalkin.setBookingData(transData);
    }
    initData() {
        this.hubService.setLoading(true);
        this.roomAvaiService
            .getRoomtypes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((res) => {
            var _a;
            if (res.statusCode === 200 &&
                res.metadata &&
                ((_a = res.metadata) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
                res.metadata[0]) {
                console.log('vao day');
                this.selectedRoomTypeCodes = [res.metadata[0].roomTypeCode];
            }
            this.roomTypes = res.metadata;
            return this.roomAvaiService.getBuildings();
        }))
            .subscribe((res) => {
            var _a;
            console.log('hehehehe', res);
            if (res.statusCode === 200 &&
                res.metadata &&
                ((_a = res.metadata) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
                res.metadata[0].floors) {
                this.floorData = res.metadata[0].floors.filter((f) => f.floorCode !== '-1');
                this.onSelectFloor(this.floorData[0]);
            }
            else {
                this.error.fetchRoomAvai = this.translateService.instant('msg.errorHandlingRequest');
            }
        }, (err) => {
            console.log(err);
            this.error.fetchRoomAvai = this.translateService.instant('msg.errorHandlingRequest');
        })
            .add(() => {
            this.hubService.setLoading(false);
        });
    }
    fetchFloor() {
        this.hubService.setLoading(true);
        this.roomAvaiService
            .getBuildings()
            .subscribe((res) => {
            var _a;
            if (res.statusCode === 200 &&
                res.metadata &&
                ((_a = res.metadata) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
                res.metadata[0].floors) {
                this.floorData = res.metadata[0].floors.filter((f) => f.floorCode !== '-1');
                this.onSelectFloor(this.floorData[0]);
            }
            else {
                this.error.fetchRoomAvai = this.translateService.instant('msg.errorHandlingRequest');
            }
        }, (err) => {
            this.error.fetchRoomAvai = this.translateService.instant('msg.errorHandlingRequest');
        })
            .add(() => {
            this.hubService.setLoading(false);
        });
    }
    fetchRoomAvai() {
        this.error.fetchRoomAvai = '';
        this.resetSelectedRoom();
        setTimeout(() => {
            this.hubService.setLoading(true);
        }, 0);
        this.roomAvaiService
            .getRoomAvailabitlity(this.util.ngBDateToNormalDate(this.fromDate), this.util.ngBDateToNormalDate(this.toDate), true)
            .subscribe(this.fetchRoomAvailObserver())
            .add(() => {
            this.hubService.setLoading(false);
        });
    }
    fetchRoomAvailObserver() {
        return {
            next: (res) => {
                if (res.statusCode === 200 && res.metadata) {
                    console.log(this.selectedRoomTypeCodes);
                    this.roomAvaiData = res.metadata
                        .map((item) => (Object.assign(Object.assign({}, item), { buildingCode: `${item.buildingCode}` })))
                        .filter((item) => item.floorCode === this.selectedFloor.floorCode &&
                        this.selectedRoomTypeCodes.includes(item.roomTypeCode));
                }
                else {
                    this.error.fetchRoomAvai = res.message;
                }
            },
            error: () => {
                this.error.fetchRoomAvai = this.translateService.instant('msg.errorHandlingRequest');
            },
        };
    }
    resetSelectedRoom() {
        this.selectedRoom = {
            buildingName: '',
            floorName: '',
            roomName: '',
            roomTypeCode: '',
        };
    }
    onSelectRoom(room) {
        this.selectedRoom = Object.assign({}, room);
    }
    onSelectFloor(floor) {
        this.selectedFloor = Object.assign({}, floor);
        this.fetchRoomAvai();
    }
    clickRoomType(roomtype) {
        if (this.selectedRoomTypeCodes.includes(roomtype.roomTypeCode)) {
            this.selectedRoomTypeCodes = this.selectedRoomTypeCodes.filter((code) => code !== roomtype.roomTypeCode);
        }
        else {
            this.selectedRoomTypeCodes.push(roomtype.roomTypeCode);
        }
        this.fetchRoomAvai();
    }
    showRoomType(roomtype) {
        const modalRef = this.modalService.open(_room_type_info_room_type_info_component__WEBPACK_IMPORTED_MODULE_6__["RoomTypeInfoComponent"], {
            size: 'lg',
            backdrop: 'static',
            centered: true,
        });
        modalRef.componentInstance.roomType = roomtype;
    }
    clickStep(num) {
        if (this.bookingSteps.includes(num)) {
            this.bookingSteps = this.bookingSteps.filter((item) => item <= num);
        }
        else {
            this.bookingSteps = Array.from({ length: num }, (_, i) => i + 1);
        }
    }
    /**
     * Back Step
     */
    backStep() {
        this.router.navigateByUrl('/options');
    }
    /**
     * Adult/child
     */
    increaseAdultNum() {
        this.adultNum += 1;
    }
    decreaseAdultNum() {
        if (this.adultNum > 1) {
            this.adultNum -= 1;
        }
    }
    increaseChildNum() {
        this.childNum += 1;
    }
    decreaseChildNum() {
        if (this.childNum > 0) {
            this.childNum -= 1;
        }
    }
    openTimePicker(content) {
        this.modalService.open(content, {
            centered: true,
            windowClass: 'date-picker-range-modal',
        });
    }
    closeTimePicker() {
        this.modalService.dismissAll();
    }
    /**
     * ARR DEPT
     */
    onDateSelection({ fromDate, toDate }) {
        this.fromDate = fromDate;
        this.toDate = toDate;
        if (this.fromDate && this.toDate) {
            this.fetchRoomAvai();
        }
    }
    displayArrDeptDate() {
        return `${this.util.displayDateDmy(this.util.ngBDateToNormalDate(this.fromDate))} ${this.lang.to} ${this.util.displayDateDmy(this.util.ngBDateToNormalDate(this.toDate))}`;
    }
    displayArrDeptTime() {
        return `${this.time.arrival} - ${this.time.depart}`;
    }
    displayNumNight() {
        return this.util.displayNumNight(this.util.dateYmd(this.util.ngBDateToNormalDate(this.fromDate)), this.util.dateYmd(this.util.ngBDateToNormalDate(this.toDate)));
    }
    /**
     * SCROLL BUTTON
     */
    scrollUp() {
        const container = document.getElementById('room-list-scroll');
        this.sideScroll(container, 'up', 1, 150, 10);
    }
    scrollDown() {
        const container = document.getElementById('room-list-scroll');
        this.sideScroll(container, 'down', 1, 150, 10);
    }
    sideScroll(element, direction, speed, distance, step) {
        let scrollAmount = 0;
        let slideTimer = window.setInterval(function () {
            if (direction == 'up') {
                element.scrollTop -= step;
            }
            else {
                element.scrollTop += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
}
AvailabilityRoomsComponent.ɵfac = function AvailabilityRoomsComponent_Factory(t) { return new (t || AvailabilityRoomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_room_availability_room_availability_service__WEBPACK_IMPORTED_MODULE_8__["RoomAvailabilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_10__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_13__["HubWalkinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_14__["BookingService"])); };
AvailabilityRoomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvailabilityRoomsComponent, selectors: [["app-availability-rooms"]], outputs: { nextStep: "nextStep", sendData: "sendData" }, decls: 128, vars: 91, consts: [[1, "d-flex", "flex-column", "wrapper"], [1, "rb-container"], [1, "rb"], ["ng-repeat", "itembx", 3, "click"], [1, "timestamp", "w-85"], [1, "w-85", "mx-auto", "pb-3"], [3, "fromDate", "toDate", "dateSelect"], [1, "row", "w-85", "mx-auto", "pb-3"], [1, "col-4"], [1, "form-group"], [1, "font-weight-500"], [1, "input-group"], ["type", "text", "readonly", "", 1, "form-control", "text-white", "bg-green-light", "border-green-light", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "bg-green-light", "text-white", "border-green-light", 3, "click"], [3, "icon"], [1, "col-4", "offset-4"], [1, "d-flex", "flex-column", "w-85", "mx-auto", "pb-3", "pl-3"], ["class", "row cursor-pointer mb-2", 4, "ngFor", "ngForOf"], [1, "w-85", "py-3", "mx-auto"], [1, "floor-block", "d-flex", "flex-row", "mb-3"], ["class", "flr text-center cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "avails-room-block"], ["fxLayout", "row", "fxLayoutAlign", "none center", "class", "h-100 w-100", 4, "ngIf"], ["class", "d-flex flex-row", 4, "ngIf"], [1, "room-status-block", "d-flex", "flex-row", "justify-content-between", "mt-4"], [1, "d-flex", "flex-row"], [1, "circle", "active", "mr-2"], [1, "circle", "booked", "mr-2"], [1, "circle", "avail", "mr-2"], [1, "selected-block"], [1, "wrapper"], [1, "text-uppercase"], [1, "row"], [1, "font-weight-thin", "my-1"], [1, "col-8"], [1, "mt-3"], ["className", "text-primary border-primary bg-white w-100 text-uppercase font-weight-bold", 1, "w-80", 3, "click"], ["arrDeptTime", ""], [1, "row", "cursor-pointer", "mb-2"], [1, "col-6", "d-flex", "flex-row", "cursor-pointer", "align-items-center", "mb-0", 3, "click"], [3, "ngClass"], [1, "ml-3"], [1, "text-left", 3, "click"], [1, "flr", "text-center", "cursor-pointer", 3, "ngClass", "click"], ["fxLayout", "row", "fxLayoutAlign", "none center", 1, "h-100", "w-100"], [1, "text-danger"], [1, "fa", "fa-exclamation-triangle"], [1, "flex-grow-1", 2, "background-color", "#fff"], ["id", "room-list-scroll", "fxLayout", "row wrap", "fxLayoutAlign", "start", 1, "w-100", "room-list-container"], ["class", "room-container", 4, "ngFor", "ngForOf"], [1, "room-container"], [1, "room-card", 3, "click"], [1, "w-100", "h-100", "d-flex", "flex-row", "justify-content-center", "align-items-center"], [1, "modal-body"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], [1, "font-weight-bold"], [3, "ngModel", "ngModelChange"], [1, "modal-footer"], [1, "my-0"], [1, "btn", "btn-primary", "btn-lg", "w-100", 3, "click"]], template: function AvailabilityRoomsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_Template_li_click_3_listener() { return ctx.clickStep(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-booking-date-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function AvailabilityRoomsComponent_Template_app_booking_date_picker_dateSelect_8_listener($event) { return ctx.onDateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_Template_li_click_9_listener() { return ctx.clickStep(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AvailabilityRoomsComponent_Template_input_ngModelChange_21_listener($event) { return ctx.adultNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_Template_button_click_23_listener() { return ctx.increaseAdultNum(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_Template_button_click_25_listener() { return ctx.decreaseAdultNum(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AvailabilityRoomsComponent_Template_input_ngModelChange_34_listener($event) { return ctx.childNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_Template_button_click_36_listener() { return ctx.increaseChildNum(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_Template_button_click_38_listener() { return ctx.decreaseChildNum(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_Template_li_click_40_listener() { return ctx.clickStep(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AvailabilityRoomsComponent_div_45_Template, 7, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_Template_li_click_46_listener() { return ctx.clickStep(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AvailabilityRoomsComponent_div_55_Template, 2, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AvailabilityRoomsComponent_div_57_Template, 4, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AvailabilityRoomsComponent_div_58_Template, 4, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "app-button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvailabilityRoomsComponent_Template_app_button_click_123_listener() { return ctx.changeToNextStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, AvailabilityRoomsComponent_ng_template_126_Template, 19, 11, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](83, _c4, ctx.bookingSteps.includes(1) && "active"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 45, "roomAvail.step.1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fromDate", ctx.fromDate)("toDate", ctx.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](85, _c4, ctx.bookingSteps.includes(2) && "active"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 47, "roomAvail.step.2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 49, "roomAvail.adult"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adultNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAngleUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAngleDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 51, "roomAvail.child"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.childNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAngleUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAngleDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](87, _c4, ctx.bookingSteps.includes(3) && "active"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 53, "roomAvail.step.3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roomTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](89, _c4, ctx.bookingSteps.includes(4) && "active"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 55, "roomAvail.step.4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 57, "roomAvail.floor"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.floorData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error.fetchRoomAvai);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.error.fetchRoomAvai);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 59, "roomAvail.status.selected"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 61, "roomAvail.status.booked"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 63, "roomAvail.status.avail"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 65, "roomAvail.selected.title"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 67, "roomAvail.selected.from"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayArrDeptDate(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 69, "roomAvail.selected.nights"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayNumNight(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 71, "roomAvail.selected.num"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ctx.adultNum || 0, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 73, "roomAvail.selected.adult"), ", ", ctx.childNum || 0, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 75, "roomAvail.selected.child"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 77, "roomAvail.selected.floor"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedRoom.floorName || "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](118, 79, "roomAvail.selected.roomName"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedRoom.roomName || "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](125, 81, "navBottom.next"), " ");
    } }, directives: [_booking_date_picker_booking_date_picker_component__WEBPACK_IMPORTED_MODULE_15__["BookingDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_19__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutAlignDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepicker"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: ["button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:active, input[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n\n.bg-green-light[_ngcontent-%COMP%] {\n  background-color: var(--green-light) !important;\n}\n\n.border-green-light[_ngcontent-%COMP%] {\n  border-color: var(--green-light) !important;\n}\n\n.floor-block[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n\n.floor-block[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n  \n}\n\n.floor-block[_ngcontent-%COMP%]   .flr[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  width: 200px;\n  border-radius: 5px;\n  color: #8F9BB3;\n  border: #EFF2F8 1px solid;\n  margin-left: 25px;\n}\n\n.floor-block[_ngcontent-%COMP%]   .flr.active[_ngcontent-%COMP%] {\n  background-color: var(--green-light);\n  color: var(--white);\n  border-color: var(--green-light);\n}\n\ndiv.circle[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\ndiv.circle.active[_ngcontent-%COMP%] {\n  background-color: var(--green-light);\n  border: 0.5px solid var(--green-light);\n}\n\ndiv.circle.booked[_ngcontent-%COMP%] {\n  background-color: var(--light);\n  border: 0.5px solid var(--grey-dark);\n}\n\ndiv.circle.avail[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 0.5px solid #71905F;\n}\n\n.room-list-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  -ms-overflow-style: scroll;\n  height: 100px;\n  -webkit-mask-image: -webkit-linear-gradient(top, black 80%, rgba(0, 0, 0, 0));\n  \n  \n}\n\n.room-list-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 25px;\n}\n\n.room-list-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.room-list-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--green-light);\n}\n\n.room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 150px;\n  height: 150px;\n  border-radius: 5px;\n  padding: 3px;\n  color: var(--primary);\n  border: 0.5px solid #71905F;\n  background-color: var(--white);\n}\n\n.room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card.booked[_ngcontent-%COMP%] {\n  color: var(--grey);\n  border: 0.5px solid var(--grey-dark);\n  background-color: var(--light);\n}\n\n.room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card.active[_ngcontent-%COMP%] {\n  background-color: var(--green-light);\n  color: var(--white);\n  border: 0.5px solid var(--green-light);\n}\n\n@media (min-width: 768px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 200;\n  }\n}\n\n@media (min-width: 992px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 80px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 450px;\n  }\n}\n\n@media (min-width: 1543px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 835px;\n  }\n  .room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    border-radius: 10px;\n    padding: 5px;\n    cursor: pointer;\n    box-shadow: 3px 3px 5px 6px #ccc;\n  }\n}\n\n@media (min-width: 3000px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 1400px;\n  }\n}\n\n.arrDeptPicker[_ngcontent-%COMP%]   .form-control[readonly][_ngcontent-%COMP%] {\n  background: #fff;\n  opacity: 1;\n}\n\n.btn-scroll-container[_ngcontent-%COMP%]   .btn-scroll[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.selected-block[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  color: var(--white);\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n.checkbox-roomtype[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 0.25rem;\n  border: var(--grey-light) solid 1px;\n}\n\n.checkbox-roomtype.selected-roomtype[_ngcontent-%COMP%] {\n  background-color: var(--green-light);\n}\n\n.rb-container[_ngcontent-%COMP%]   ul.rb[_ngcontent-%COMP%] {\n  margin: 2em 0;\n  padding: 0;\n  display: inline-block;\n  width: 100%;\n}\n\n.rb-container[_ngcontent-%COMP%]   ul.rb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: auto;\n  min-height: 50px;\n  border-right: 5px solid var(--grey);\n  position: relative;\n  width: 100%;\n}\n\n.rb-container[_ngcontent-%COMP%]   ul.rb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-left: 0;\n}\n\n.rb-container[_ngcontent-%COMP%]   ul.rb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -12px;\n  top: -5px;\n  content: \" \";\n  border: 10px solid var(--grey);\n  border-radius: 500%;\n  background: var(--grey);\n  height: 20px;\n  width: 20px;\n  transition: all 500ms ease-in-out;\n}\n\n.rb-container[_ngcontent-%COMP%]   ul.rb[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  border-right: 5px solid var(--green-light);\n  transition: all 100ms ease-in-out;\n}\n\n.rb-container[_ngcontent-%COMP%]   ul.rb[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   div.timestamp[_ngcontent-%COMP%] {\n  color: var(--green-light);\n  background-color: #ECF8E6;\n}\n\n.rb-container[_ngcontent-%COMP%]   ul.rb[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   div.timestamp[_ngcontent-%COMP%]::before {\n  background: #ECF8E6;\n}\n\n.rb-container[_ngcontent-%COMP%]   ul.rb[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]::after {\n  border-color: var(--green-light);\n  background-color: var(--green-light);\n}\n\nul.rb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  color: var(--green-light);\n  position: relative;\n  background: var(--grey-light);\n  text-align: center;\n  border-radius: 9999px;\n  margin: 0 auto;\n  font-size: 400;\n  padding: 0.5em;\n  transform: translateY(-34px);\n}\n\nul.rb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 45px;\n  width: 16px;\n  \n  top: 17px;\n  right: -15px;\n  background: var(--grey-light);\n}\n\nul.rb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 40px;\n  width: 37px;\n  border-radius: 40px 0 0 40px;\n  top: 40px;\n  right: -32px;\n  background: var(--white);\n  box-shadow: 0 -45px 0 0 var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF2YWlsYWJpbGl0eS1yb29tcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBOzs7RUFHRSxxQkFBQTtFQUNBLDJCQUFBO0FBbEJGOztBQXFCQTtFQUNFLCtDQUFBO0FBbEJGOztBQXFCQTtFQUNFLDJDQUFBO0FBbEJGOztBQXFCQTtFQUNFLGNBQUE7RUFRQSxZQUFBO0FBekJGOztBQW1CRTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0FBakJKOztBQXFCRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFuQko7O0FBcUJJO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBbkJOOztBQXdCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFyQkY7O0FBdUJFO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtBQXJCSjs7QUF3QkU7RUFDRSw4QkFBQTtFQUNBLG9DQUFBO0FBdEJKOztBQXlCRTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7QUF2Qko7O0FBMkJBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBRUEsYUFsRm9CO0VBbUZwQiw2RUFBQTtFQVFBLFVBQUE7RUFLQSxXQUFBO0FBcENGOztBQTBCRTtFQUVFLFdBQUE7QUF6Qko7O0FBNkJFO0VBQ0UsbUJBQUE7QUEzQko7O0FBK0JFO0VBQ0UsOEJBQUE7QUE3Qko7O0FBZ0NFO0VBQ0UsWUFBQTtBQTlCSjs7QUFnQ0k7RUFDRSxlQUFBO0VBQ0EsWUFsR1k7RUFtR1osYUFwR2E7RUFxR2Isa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBOUJOOztBQWdDTTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtBQTlCUjs7QUFpQ007RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUEvQlI7O0FDMUVFO0VEaUhFO0lBQ0UsV0FuSWdCO0VBK0ZwQjtBQUNGOztBQ3pFRTtFRGlIRTtJQUNFLGFBeElnQjtFQW1HcEI7RUF3Q007SUFDRSxZQXJJWTtJQXNJWixXQXJJVztFQStGbkI7QUFDRjs7QUM1RUU7RUR3SEU7SUFDRSxhQXBKZ0I7RUEyR3BCO0FBQ0Y7O0FDckVFO0VEa0hFO0lBQ0UsYUF6SmtCO0VBK0d0QjtFQTRDSTtJQUNFLFlBQUE7RUExQ047RUE0Q007SUFDRSxZQXJKYTtJQXNKYixhQXZKYztJQXdKZCxtQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZ0NBQUE7RUExQ1I7QUFDRjs7QUMvRUU7RUQrSEU7SUFDRSxjQTNLbUI7RUE4SHZCO0FBQ0Y7O0FBbURFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBaERKOztBQXFERTtFQUNFLGtCQUFBO0FBbERKOztBQXNEQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBbkRGOztBQXNEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQW5ERjs7QUFvREU7RUFDRSxvQ0FBQTtBQWxESjs7QUF5REE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQXRERjs7QUF5REE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBdERGOztBQXlEQTtFQUNFLGNBQUE7QUF0REY7O0FBeURBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBdERGOztBQXlEQTtFQUNFLDBDQUFBO0VBUUEsaUNBQUE7QUE3REY7O0FBc0RFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQXBESjs7QUFxREk7RUFDRSxtQkFBQTtBQW5ETjs7QUF1REU7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0FBckRKOztBQXlEQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQXRERjs7QUF3REU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUFhLG1EQUFBO0VBQ2IsU0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQXJESjs7QUF1REU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0FBckRKIiwiZmlsZSI6ImF2YWlsYWJpbGl0eS1yb29tcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zJztcblxuXG4kaGVpZ2h0LXJvb20tbGlzdC1zbTogMTAwcHg7XG4kaGVpZ2h0LXJvb20tbGlzdC1tZDogMjAwO1xuJGhlaWdodC1yb29tLWxpc3QtbGc6IDQwMHB4O1xuJGhlaWdodC1yb29tLWxpc3QteGw6IDQ1MHB4O1xuJGhlaWdodC1yb29tLWxpc3QteHh4bDogODM1cHg7XG4kaGVpZ2h0LXJvb20tbGlzdC14eHh4bDogMTQwMHB4O1xuXG4kcm9vbS1jYXJkLWhlaWdodDogMTUwcHg7XG4kcm9vbS1jYXJkLXdpZHRoOiAxNTBweDtcbiRyb29tLWNhcmQtaGVpZ2h0LWxnOiA4MHB4O1xuJHJvb20tY2FyZC13aWR0aC1sZzogODBweDtcbiRyb29tLWNhcmQtaGVpZ2h0LXhsOiAxNTBweDtcbiRyb29tLWNhcmQtd2lkdGgteGw6IDE1MHB4O1xuJHJvb20tY2FyZC1oZWlnaHQteHh4bDogMzAwcHg7XG4kcm9vbS1jYXJkLXdpZHRoLXh4eGw6IDMwMHB4O1xuXG5idXR0b246Zm9jdXMsXG5idXR0b246YWN0aXZlLFxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJnLWdyZWVuLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZ3JlZW4tbGlnaHQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG4uZmxvb3ItYmxvY2sge1xuICBvdmVyZmxvdzogYXV0bztcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAvKiBtYWtlIHNjcm9sbGJhciB0cmFuc3BhcmVudCAqL1xuICB9XG5cbiAgLyogRmlyZWZveCAqL1xuICAuZmxyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogIzhGOUJCMztcbiAgICBib3JkZXI6ICNFRkYyRjggMXB4IHNvbGlkO1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tbGlnaHQpO1xuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4tbGlnaHQpO1xuICAgIH1cbiAgfVxufVxuXG5kaXYuY2lyY2xlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1saWdodCk7XG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHZhcigtLWdyZWVuLWxpZ2h0KTtcbiAgfVxuXG4gICYuYm9va2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHZhcigtLWdyZXktZGFyayk7XG4gIH1cblxuICAmLmF2YWlsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkICM3MTkwNUY7XG4gIH1cbn1cblxuLnJvb20tbGlzdC1jb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGw7XG4gIC8vIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgaGVpZ2h0OiAkaGVpZ2h0LXJvb20tbGlzdC1zbTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMSkgODAlLCByZ2JhKDAsIDAsIDAsIDApKTtcblxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLyogVHJhY2sgKi9cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cblxuICAvKiBIYW5kbGUgKi9cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLWxpZ2h0KTtcbiAgfVxuXG4gIC5yb29tLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgLnJvb20tY2FyZCB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB3aWR0aDogJHJvb20tY2FyZC13aWR0aDtcbiAgICAgIGhlaWdodDogJHJvb20tY2FyZC1oZWlnaHQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3JkZXI6IC41cHggc29saWQgIzcxOTA1RjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcblxuICAgICAgJi5ib29rZWQge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCB2YXIoLS1ncmV5LWRhcmspO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBib3JkZXI6IC41cHggc29saWQgdmFyKC0tZ3JlZW4tbGlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBtZCB7XG4gICAgJiB7XG4gICAgICBoZWlnaHQ6ICRoZWlnaHQtcm9vbS1saXN0LW1kO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIGxnIHtcbiAgICAmIHtcbiAgICAgIGhlaWdodDogJGhlaWdodC1yb29tLWxpc3QtbGc7XG5cbiAgICAgIC5yb29tLWNvbnRhaW5lciB7XG4gICAgICAgIC5yb29tLWNhcmQge1xuICAgICAgICAgIGhlaWdodDogJHJvb20tY2FyZC1oZWlnaHQtbGc7XG4gICAgICAgICAgd2lkdGg6ICRyb29tLWNhcmQtd2lkdGgtbGc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSB4bCB7XG4gICAgJiB7XG4gICAgICBoZWlnaHQ6ICRoZWlnaHQtcm9vbS1saXN0LXhsO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIHh4eGwge1xuICAgICYge1xuICAgICAgaGVpZ2h0OiAkaGVpZ2h0LXJvb20tbGlzdC14eHhsO1xuXG4gICAgICAucm9vbS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDIwcHg7XG5cbiAgICAgICAgLnJvb20tY2FyZCB7XG4gICAgICAgICAgd2lkdGg6ICRyb29tLWNhcmQtd2lkdGgteHh4bDtcbiAgICAgICAgICBoZWlnaHQ6ICRyb29tLWNhcmQtaGVpZ2h0LXh4eGw7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgeHh4eGwge1xuICAgICYge1xuICAgICAgaGVpZ2h0OiAkaGVpZ2h0LXJvb20tbGlzdC14eHh4bDtcbiAgICB9XG4gIH1cblxufVxuXG4uYXJyRGVwdFBpY2tlciB7XG4gIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmJ0bi1zY3JvbGwtY29udGFpbmVyIHtcbiAgLmJ0bi1zY3JvbGwge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4uc2VsZWN0ZWQtYmxvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uY2hlY2tib3gtcm9vbXR5cGUge1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIGJvcmRlcjogdmFyKC0tZ3JleS1saWdodCkgc29saWQgMXB4O1xuICAmLnNlbGVjdGVkLXJvb210eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1saWdodCk7XG4gIH1cbn1cblxuXG4vLyBUaW1lIGxpbmVcblxuLnJiLWNvbnRhaW5lciB1bC5yYiB7XG4gIG1hcmdpbjogMmVtIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yYi1jb250YWluZXIgdWwucmIgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHZhcigtLWdyZXkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmItY29udGFpbmVyIHVsLnJiIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuLnJiLWNvbnRhaW5lciB1bC5yYiBsaTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTJweDtcbiAgdG9wOiAtNXB4O1xuICBjb250ZW50OiBcIiBcIjtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiA1MDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5KTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ucmItY29udGFpbmVyIHVsLnJiIGxpLmFjdGl2ZSB7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHZhcigtLWdyZWVuLWxpZ2h0KTtcbiAgZGl2LnRpbWVzdGFtcCB7XG4gICAgY29sb3I6IHZhcigtLWdyZWVuLWxpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGOEU2O1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRUNGOEU2O1xuICAgIH1cbiAgfVxuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XG4gICY6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuLWxpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1saWdodCk7XG4gIH1cbn1cblxudWwucmIgbGkgLnRpbWVzdGFtcCB7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1saWdodCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JleS1saWdodCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiA0MDA7XG4gIHBhZGRpbmc6IC41ZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzRweCk7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogMTZweDsgLyogMXB4IGJ1ZmZlciBmb3Igem9vbWluZyBwcm9ibGVtcyB3aGlsZSByZW5kZXJpbmcqL1xuICAgIHRvcDogMTdweDtcbiAgICByaWdodDogLTE1cHg7IFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXktbGlnaHQpO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMzdweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDAgMCA0MHB4O1xuICAgIHRvcDogNDBweDtcbiAgICByaWdodDogLTMycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIGJveC1zaGFkb3c6IDAgLTQ1cHggMCAwIHZhcigtLXdoaXRlKTtcbiAgfVxufSIsIkBtaXhpbiBnZW4tdGV4dCgkZm9udC1zaXplKSB7XHJcbiAgZm9udC1zaXplOiB2YXIoJGZvbnQtc2l6ZSk7XHJcbiAgbGluZS1oZWlnaHQ6IHZhcigkZm9udC1zaXplKTtcclxufVxyXG5cclxuJHNtLXdpZHRoOiA1NzZweDtcclxuJG1kLXdpZHRoOiA3NjhweDtcclxuJGxnLXdpZHRoOiA5OTJweDtcclxuJHhsLXdpZHRoOiAxMjAwcHg7XHJcbiR4eGwtd2lkdGg6IDE0MDBweDtcclxuJHh4eGwtd2lkdGg6IDE1NDNweDtcclxuJHh4eHhsLXdpZHRoOiAzMDAwcHg7XHJcblxyXG5cclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc20td2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JG1kLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRsZy13aWR0aH0pe1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "5+xa":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/checkin/services/room-availability/room-availability.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: RoomAvailabilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomAvailabilityService", function() { return RoomAvailabilityService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RoomAvailabilityService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Láy ds phòng trống
     */
    getRoomAvailabitlity(arrivalDate, departDate, formatDate) {
        if (formatDate) {
            arrivalDate = moment__WEBPACK_IMPORTED_MODULE_0__(arrivalDate).format('yyyy-MM-DD');
            departDate = moment__WEBPACK_IMPORTED_MODULE_0__(departDate).format('yyyy-MM-DD');
        }
        return this.http.post('api/room/get-room-availability', {
            arrivalDate,
            departDate
        });
    }
    /**
     *
     * Lấy List Building
     * Trong Building có floor
     */
    getBuildings() {
        return this.http.get('api/building/get-buildings');
    }
    /**
     *
     * Lấy List Roomtypes
     */
    getRoomtypes() {
        return this.http.get('api/room/get-room-types');
    }
}
RoomAvailabilityService.ɵfac = function RoomAvailabilityService_Factory(t) { return new (t || RoomAvailabilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RoomAvailabilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoomAvailabilityService, factory: RoomAvailabilityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7NDd":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/lock-card/lock-card.service.ts ***!
  \****************************************************************/
/*! exports provided: LockCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockCardService", function() { return LockCardService; });
/* harmony import */ var src_app_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/configure/configure.service */ "yegS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LockCardService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = '';
        this.serviceUrl = src_app_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_0__["ConfigureService"].config.url.service;
    }
    /**
     * WriteCard
     */
    writeCard(body) {
        const endPoint = `${this.serviceUrl}/api/lock/write-card`;
        return this.http.post(endPoint, body);
    }
}
LockCardService.ɵfac = function LockCardService_Factory(t) { return new (t || LockCardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LockCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LockCardService, factory: LockCardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7ZC8":
/*!************************************************************!*\
  !*** ./src/app/shared/ng-bootstrap/ng-bootstrap.module.ts ***!
  \************************************************************/
/*! exports provided: NgBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapModule", function() { return NgBootstrapModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NgBootstrapModule {
}
NgBootstrapModule.ɵfac = function NgBootstrapModule_Factory(t) { return new (t || NgBootstrapModule)(); };
NgBootstrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NgBootstrapModule });
NgBootstrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonsModule"]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgBootstrapModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonsModule"]], exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerModule"]] }); })();


/***/ }),

/***/ "8EDh":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/dispenser/dispenser.service.ts ***!
  \****************************************************************/
/*! exports provided: DispenserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserService", function() { return DispenserService; });
/* harmony import */ var src_app_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/configure/configure.service */ "yegS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DispenserService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = '';
        this.serviceUrl = src_app_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_0__["ConfigureService"].config.url.service;
    }
    /**
     * Đưa thẻ tới vị trí ghi
     */
    moveToRfPos() {
        const endpoint = `${this.serviceUrl}/api/dispense/rf-pos`;
        return this.http.post(endpoint, {});
    }
    /**
     * Nhả thẻ
     */
    eject() {
        const endpoint = `${this.serviceUrl}/api/dispense/eject`;
        return this.http.post(endpoint, {});
    }
}
DispenserService.ɵfac = function DispenserService_Factory(t) { return new (t || DispenserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DispenserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DispenserService, factory: DispenserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8JL6":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/modal-error/modal-error.module.ts ***!
  \*********************************************************************/
/*! exports provided: ModalErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalErrorModule", function() { return ModalErrorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-error/modal-error.component */ "pL5C");
/* harmony import */ var _trans_trans_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trans/trans.module */ "vdLp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ModalErrorModule {
}
ModalErrorModule.ɵfac = function ModalErrorModule_Factory(t) { return new (t || ModalErrorModule)(); };
ModalErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ModalErrorModule });
ModalErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _trans_trans_module__WEBPACK_IMPORTED_MODULE_2__["TransModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ModalErrorModule, { declarations: [_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_1__["ModalErrorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _trans_trans_module__WEBPACK_IMPORTED_MODULE_2__["TransModule"]], exports: [_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_1__["ModalErrorComponent"]] }); })();


/***/ }),

/***/ "8PDw":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _config_configure_configure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/configure/configure.service */ "yegS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
    }
    /**
     * getToken
     */
    getToken() {
        const api = 'api/auth/get-token';
        const hotel = _config_configure_configure_service__WEBPACK_IMPORTED_MODULE_0__["ConfigureService"].config.hotel;
        return this.http.post(api, {
            client_id: hotel.client_id,
            client_secret: hotel.client_secret,
            grant_type: hotel.grant_type,
            scope: hotel.scope,
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8g6L":
/*!******************************************!*\
  !*** ./src/app/shared/constant/pages.ts ***!
  \******************************************/
/*! exports provided: PAGES, STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES", function() { return PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
const PAGES = {
    welcome: 'welcome',
    options: 'options',
    scanQR: 'scan-qr',
    bookingCode: 'booking-code',
    bookingDetails: 'booking-details',
    flowCheckin: 'flow-checkin',
    flowBooking: 'flow-booking',
    flowDetect: 'flowDetect',
    availRooms: 'availRooms',
    scanIdCard: 'scanIdCard',
    scanFace: 'scanFace',
    bookingCreate: 'bookingCreate',
    bookingDone: 'bookingDone',
    root: 'root',
    /** LAYOUT */
    walkin: 'walkin',
    checkinQr: 'checkin-qr',
    checkinCode: 'book',
};
const STEPS = {
    step1: 'step1',
    step2: 'step2',
    step3: 'step3',
    step4: 'step4',
    detect: 'detect',
};


/***/ }),

/***/ "AgR9":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/checkin/components/flow-booking/flow-booking.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FlowBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowBookingComponent", function() { return FlowBookingComponent; });
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-stepper */ "BYMX");
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bs_stepper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constant/audio-files */ "QDvO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/booking/booking.service */ "RnX0");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_app_card_app_card_app_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/app-card/app-card/app-card.component */ "wLxG");
/* harmony import */ var _availability_rooms_availability_rooms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../availability-rooms/availability-rooms.component */ "2sx2");
/* harmony import */ var _scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../scan-identity-card/scan-identity-card.component */ "UEAr");
/* harmony import */ var _booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../booking-create/booking-create.component */ "YSWC");
/* harmony import */ var _booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../booking-done/booking-done.component */ "UTnJ");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../flow-detect/flow-detect.component */ "+vjk");



















const _c0 = ["flowDetectComp"];
function FlowBookingComponent_app_card_0_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FlowBookingComponent_app_card_0_ng_container_41_Template_app_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r3.gotoNextStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "navBottom.next"), " ");
} }
function FlowBookingComponent_app_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "app-availability-rooms", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nextStep", function FlowBookingComponent_app_card_0_Template_app_availability_rooms_nextStep_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.openFlowDetect(); })("backStep", function FlowBookingComponent_app_card_0_Template_app_availability_rooms_backStep_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.back(); })("sendData", function FlowBookingComponent_app_card_0_Template_app_availability_rooms_sendData_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.receiveBookingData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "app-scan-identity-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("detectAgain", function FlowBookingComponent_app_card_0_Template_app_scan_identity_card_detectAgain_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.openFlowDetect(); })("sendGuestInfo", function FlowBookingComponent_app_card_0_Template_app_scan_identity_card_sendGuestInfo_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.receiveBookingData($event, true); })("backStep", function FlowBookingComponent_app_card_0_Template_app_scan_identity_card_backStep_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "app-booking-create", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nextStep", function FlowBookingComponent_app_card_0_Template_app_booking_create_nextStep_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.onCreateBooking($event); })("backStep", function FlowBookingComponent_app_card_0_Template_app_booking_create_backStep_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "app-booking-done", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("reset", function FlowBookingComponent_app_card_0_Template_app_booking_done_reset_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.resetFlow(); })("backStep", function FlowBookingComponent_app_card_0_Template_app_booking_done_backStep_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, FlowBookingComponent_app_card_0_ng_container_41_Template, 5, 3, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 10, "flowBooking.availabilityRooms"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 12, "flowBooking.bookingInformation"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 14, "flowBooking.bookingCreate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 16, "flowBooking.done"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("guestData", ctx_r0.bookingData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bookingData", ctx_r0.bookingData)("totalRateData", ctx_r0.totalRateData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isDone", ctx_r0.isDoneFlow)("errorMessage", ctx_r0.errorMessageCreateBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showFooter);
} }
function FlowBookingComponent_app_flow_detect_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-flow-detect", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sendGuestInfo", function FlowBookingComponent_app_flow_detect_1_Template_app_flow_detect_sendGuestInfo_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.closeFlowDetect($event); })("backStep", function FlowBookingComponent_app_flow_detect_1_Template_app_flow_detect_backStep_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class FlowBookingComponent {
    constructor(hubService, utilService, router, bookingService, translateService) {
        this.hubService = hubService;
        this.utilService = utilService;
        this.router = router;
        this.bookingService = bookingService;
        this.translateService = translateService;
        this.showFlowDetect = false;
        this.showFooter = true;
        this.isDoneFlow = true;
        this.errorMessageCreateBooking = '';
        this.bookingData = {};
        this.totalRateData = {};
        this.hubSubcription = null;
        this.subcribeHub();
    }
    next() {
        this.stepper.next();
    }
    back() {
        const current = this.getActiveStep();
        const backToOptionsScreen = [src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].availRooms, src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].bookingDone];
        if (this.showFlowDetect) {
            this.changeStepInsideFlowDetect(this.flowDetectComp.progress.key);
            return;
        }
        if (backToOptionsScreen.includes(current)) {
            this.router.navigateByUrl('/options');
            return;
        }
        this.stepper.previous();
    }
    ngOnInit() {
        setTimeout(() => {
            this.initStepper();
            this.addListener();
        }, 0);
    }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
    }
    subcribeHub() {
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].flowBooking) {
                return;
            }
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].goBack) {
                this.back();
            }
        });
    }
    initStepper() {
        const linear = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production;
        this.stepper = new bs_stepper__WEBPACK_IMPORTED_MODULE_0___default.a(document.querySelector('#step-new-reservation'), {
            linear: linear,
            animation: true,
        });
    }
    addListener() {
        const stepperEl = document.querySelector('#step-new-reservation');
        stepperEl.addEventListener('shown.bs-stepper', (event) => {
            const activeStep = this.getActiveStep();
            this.actionController(activeStep, event.detail);
        });
    }
    actionController(activeStep, detail) {
        if (activeStep === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].availRooms) {
            this.utilService.playAudio(src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_3__["AUDIO_FILES"].availRoomIntro);
            this.showFooter = false;
        }
        else if (detail &&
            detail.to === 1 &&
            (detail.from === 2 || detail.from === 1)) {
            this.showFooter = false;
            this.openFlowDetect();
        }
        else if (activeStep === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].bookingCreate) {
            this.utilService.playAudio(src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_3__["AUDIO_FILES"].bookingCreateIntro);
            this.showFooter = true;
        }
        else if (activeStep === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].bookingDone) {
            this.showFooter = false;
            const audioFile = this.isDoneFlow ? src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_3__["AUDIO_FILES"].bookingDoneIntro : src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_3__["AUDIO_FILES"].bookingDoneError;
            this.utilService.playAudio(audioFile);
        }
    }
    receiveBookingData(bookingData, isNext = false) {
        console.log({ bookingData });
        this.bookingData = Object.assign({}, bookingData);
        if (isNext) {
            this.hubService.setLoading(true);
            this.bookingService
                .getTotalRate({
                ArrivalDate: this.bookingData.arrivalDate,
                DepartDate: this.bookingData.departDate,
                ArrivalTime: this.bookingData.arrivalTime,
                DepartTime: this.bookingData.departTime,
                RoomBocked: this.bookingData.roomCode,
                RoomType: this.bookingData.roomTypeCode,
                NoOfAdults: this.bookingData.adult,
                NoOfChild: this.bookingData.child,
            })
                .subscribe((res) => {
                if (res.metadata && res.metadata[0]) {
                    this.totalRateData = res.metadata[0];
                    this.next();
                }
                else {
                    this.hubService.error(this.translateService.instant('msg.errorGetTotalRate'));
                }
            }, (err) => {
                this.hubService.error(this.translateService.instant('msg.errorGetTotalRate'));
            })
                .add(() => {
                this.hubService.setLoading(false);
            });
        }
    }
    /**
     * Bật popup chọn giấy tờ khi vào màn hình Scan
     */
    openFlowDetect() {
        console.log('open flow detect');
        this.showFlowDetect = true;
        setTimeout(() => {
            const event = {
                receiver: src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].flowDetect,
                message: src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].openScanModal,
            };
            this.hubService.sendEvent(event);
        }, 0);
    }
    /**
     *
     * Xử lý khi tạo booking bị lỗi
     */
    onCreateBooking({ isDone = true, msg = '' }) {
        this.isDoneFlow = isDone;
        this.errorMessageCreateBooking = msg;
        this.next();
    }
    /**
     * Reset Flow
     */
    resetFlow() {
        this.stepper.to(0);
    }
    /**
     *
     * Close Flow Detect
     */
    closeFlowDetect(guestData) {
        console.log('close flow detect: ', guestData, this.bookingData);
        this.bookingData = Object.assign(Object.assign({}, this.bookingData), guestData);
        this.showFlowDetect = false;
        setTimeout(() => {
            this.initStepper();
            this.addListener();
            this.stepper.to(2);
        }, 0);
    }
    /**
     *
     * UPDATE STEP TRONG FLOW DETECT
     */
    changeStepInsideFlowDetect(detectStep) {
        if (detectStep === 'type') {
            this.showFlowDetect = false;
            this.closeFlowDetect(null);
        }
        else {
            this.openFlowDetect();
        }
    }
    /**
     * NAVIGATION
     */
    goToPreviousStep() {
        const componentName = this.getActiveStep();
        const type = src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].backStep;
        const data = {
            receiver: componentName,
            message: type,
        };
        this.hubService.sendEvent(data);
    }
    gotoNextStep() {
        const componentName = this.getActiveStep();
        const type = src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].nextStep;
        const data = {
            receiver: componentName,
            message: type,
        };
        this.hubService.sendEvent(data);
    }
    getActiveStep() {
        const bsStepperContent = document.getElementById('bsStepperContent');
        const activeStep = bsStepperContent === null || bsStepperContent === void 0 ? void 0 : bsStepperContent.querySelector('.dstepper-block.active');
        return (activeStep === null || activeStep === void 0 ? void 0 : activeStep.getAttribute('data-name')) || '';
    }
}
FlowBookingComponent.ɵfac = function FlowBookingComponent_Factory(t) { return new (t || FlowBookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_6__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_9__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"])); };
FlowBookingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FlowBookingComponent, selectors: [["app-flow-booking"]], viewQuery: function FlowBookingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.flowDetectComp = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "horizon-stepper-container", 4, "ngIf"], [3, "sendGuestInfo", "backStep", 4, "ngIf"], [1, "horizon-stepper-container"], ["app-card-body", "", 1, "d-flex", "flex-column"], ["id", "step-new-reservation", 1, "bs-stepper", "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "bs-stepper-header", "wrapper"], ["data-target", "#step-avail-rooms", 1, "step"], [1, "step-trigger"], [1, "bs-stepper-circle"], [1, "bs-stepper-label"], ["data-target", "#step-scan-id-card", 1, "step"], ["data-target", "#step-booking-create", 1, "step"], ["data-target", "#step-done", 1, "step"], ["id", "bsStepperContent", 1, "bs-stepper-content", "d-flex", "flex-column", "flex-grow-1"], ["id", "step-avail-rooms", "data-name", "availRooms", 1, "content", "h-100"], [3, "nextStep", "backStep", "sendData"], ["id", "step-scan-id-card", "data-name", "scanIdCard", 1, "content", "h-100"], [3, "guestData", "detectAgain", "sendGuestInfo", "backStep"], ["id", "step-booking-create", "data-name", "bookingCreate", 1, "content"], [3, "bookingData", "totalRateData", "nextStep", "backStep"], ["id", "step-done", "data-name", "bookingDone", 1, "content", "text-center", "h-100"], [3, "isDone", "errorMessage", "reset", "backStep"], ["app-card-footer", "", "class", "d-flex flex-row justify-content-center", 4, "ngIf"], ["app-card-footer", "", 1, "d-flex", "flex-row", "justify-content-center"], [1, "wrapper"], ["className", "btn-primary w-100 text-uppercase", 1, "w-80", 3, "click"], [3, "sendGuestInfo", "backStep"], ["flowDetectComp", ""]], template: function FlowBookingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, FlowBookingComponent_app_card_0_Template, 42, 18, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FlowBookingComponent_app_flow_detect_1_Template, 2, 0, "app-flow-detect", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showFlowDetect);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showFlowDetect);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_components_app_card_app_card_app_card_component__WEBPACK_IMPORTED_MODULE_12__["AppCardComponent"], _availability_rooms_availability_rooms_component__WEBPACK_IMPORTED_MODULE_13__["AvailabilityRoomsComponent"], _scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_14__["ScanIdentityCardComponent"], _booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_15__["BookingCreateComponent"], _booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_16__["BookingDoneComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_17__["ButtonComponent"], _flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_18__["FlowDetectComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]{display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:20px;font-size:1rem;font-weight:700;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;user-select:none;background-color:transparent;border:none;border-radius:.25rem;transition:background-color .15s ease-out,color .15s ease-out}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger.disabled[_ngcontent-%COMP%], .bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:disabled{pointer-events:none;opacity:.65}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:focus{color:#007bff;outline:0}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:rgba(0,0,0,.06)}\n@media (max-width:520px){.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]{flex-direction:column;padding:10px}}\n.bs-stepper-label[_ngcontent-%COMP%]{display:inline-block;margin:.25rem}\n.bs-stepper-header[_ngcontent-%COMP%]{display:flex;align-items:center}\n@media (max-width:520px){.bs-stepper-header[_ngcontent-%COMP%]{margin:0 -10px;text-align:center}}\n.bs-stepper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .bs-stepper-line[_ngcontent-%COMP%]{flex:1 0 32px;min-width:1px;min-height:1px;margin:auto;background-color:rgba(0,0,0,.12)}\n@media (max-width:400px){.bs-stepper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .bs-stepper-line[_ngcontent-%COMP%]{flex-basis:20px}}\n.bs-stepper-circle[_ngcontent-%COMP%]{display:inline-flex;align-content:center;justify-content:center;width:2em;height:2em;padding:.5em 0;margin:.25rem;line-height:1em;color:#fff;background-color:#6c757d;border-radius:1em}\n.active[_ngcontent-%COMP%]   .bs-stepper-circle[_ngcontent-%COMP%]{background-color:#007bff}\n.bs-stepper-content[_ngcontent-%COMP%]{padding:0 20px 20px}\n@media (max-width:520px){.bs-stepper-content[_ngcontent-%COMP%]{padding:0}}\n.bs-stepper.vertical[_ngcontent-%COMP%]{display:flex}\n.bs-stepper.vertical[_ngcontent-%COMP%]   .bs-stepper-header[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;margin:0}\n.bs-stepper.vertical[_ngcontent-%COMP%]   .bs-stepper-pane[_ngcontent-%COMP%], .bs-stepper.vertical[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:block}\n.bs-stepper.vertical[_ngcontent-%COMP%]   .bs-stepper-pane[_ngcontent-%COMP%]:not(.fade), .bs-stepper.vertical[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:not(.fade){display:block;visibility:hidden}\n.bs-stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:not(.fade), .bs-stepper-pane[_ngcontent-%COMP%]:not(.fade){display:none}\n.bs-stepper[_ngcontent-%COMP%]   .content.fade[_ngcontent-%COMP%], .bs-stepper-pane.fade[_ngcontent-%COMP%]{visibility:hidden;transition-duration:.3s;transition-property:opacity}\n.bs-stepper[_ngcontent-%COMP%]   .content.fade.active[_ngcontent-%COMP%], .bs-stepper-pane.fade.active[_ngcontent-%COMP%]{visibility:visible;opacity:1}\n.bs-stepper[_ngcontent-%COMP%]   .content.active[_ngcontent-%COMP%]:not(.fade), .bs-stepper-pane.active[_ngcontent-%COMP%]:not(.fade){display:block;visibility:visible}\n.bs-stepper[_ngcontent-%COMP%]   .content.dstepper-block[_ngcontent-%COMP%], .bs-stepper-pane.dstepper-block[_ngcontent-%COMP%]{display:block}\n.bs-stepper[_ngcontent-%COMP%]:not(.vertical)   .bs-stepper-pane.dstepper-none[_ngcontent-%COMP%], .bs-stepper[_ngcontent-%COMP%]:not(.vertical)   .content.dstepper-none[_ngcontent-%COMP%]{display:none}\n.vertical[_ngcontent-%COMP%]   .bs-stepper-pane.fade.dstepper-none[_ngcontent-%COMP%], .vertical[_ngcontent-%COMP%]   .content.fade.dstepper-none[_ngcontent-%COMP%]{visibility:hidden}\n[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n\n\n[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n.step[_ngcontent-%COMP%] {\n  border-bottom: 3px solid var(--grey-light);\n  margin-bottom: 10px;\n}\n.step.active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid var(--secondary);\n}\n.step[_ngcontent-%COMP%]   .bs-stepper-circle[_ngcontent-%COMP%] {\n  width: 4em;\n  height: 4em;\n  border-radius: 2em;\n  padding: 1.5em 0;\n  background-color: var(--grey-light);\n}\n.step.active[_ngcontent-%COMP%]   .bs-stepper-circle[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n}\n.step[_ngcontent-%COMP%]   .bs-stepper-label[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-weight: 100;\n  font-size: 0.7rem;\n}\n.bs-stepper-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYnMtc3RlcHBlci9kaXN0L2Nzcy8uLlxcLi5cXHNyY1xcY3NzXFxicy1zdGVwcGVyLmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9icy1zdGVwcGVyL2Rpc3QvY3NzL2Rpc3RcXGNzc1xcYnMtc3RlcHBlci5jc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmbG93LWJvb2tpbmcuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXF9zdGVwcGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBLGtDQUFBO0FBT0EsOEVBQUE7QUNqQ0E7Ozs7RUFNQTtBQUFBLDBCQUNFLG1CQUNBLENBQUEsY0FDQSxDQUFBLGtCQUNBLENBQUEsc0JBQ0EsQ0FBQSxZQUNBLENBQUEsY0FDQSxDQUFBLGVBQ0EsQ0FBQSxlQUNBLENBQUEsYUFDQSxDQUFBLGlCQUNBLENBQUEsb0JBQ0EsQ0FBQSxrQkFDQSxDQUFBLHFCQUNBLENBQUEsd0JBQUEsQ0FBQSxnQkFDQSxDQUFBLDRCQUNBLENBQUEsV0FDQSxDQUFBLG9CQUNBLENBQUEsNkRBR0Y7QUFBQSx3REFDRSxjQ1dGO0FBQUEsc0VETkUsbUJBQ0EsQ0FBQSxXQUdGO0FBQUEsZ0NBQ0UsYUFDQSxDQUFBLFNBR0Y7QUFBQSxnQ0FDRSxvQkFDQSxDQUFBLGdDQUdGO0FBQUEseUJBQ0UsMEJBQ0UscUJBQ0EsQ0FBQSxZQUlKLENBQUE7QUFBQSxrQkFDRSxvQkFDQSxDQUFBLGFBR0Y7QUFBQSxtQkFDRSxZQUNBLENBQUEsa0JBR0Y7QUFBQSx5QkFDRSxtQkFDRSxjQUNBLENBQUEsaUJDZUosQ0FBQTtBQUFBLG1DRFRFLGFBQ0EsQ0FBQSxhQUNBLENBQUEsY0FDQSxDQUFBLFdBQ0EsQ0FBQSxnQ0FHRjtBQUFBLHlCQ2FFLG1DRFZFLGVBSUosQ0FBQTtBQUFBLG1CQUNFLG1CQUNBLENBQUEsb0JBQ0EsQ0FBQSxzQkFDQSxDQUFBLFNBQ0EsQ0FBQSxVQUNBLENBQUEsY0FDQSxDQUFBLGFBQ0EsQ0FBQSxlQUNBLENBQUEsVUFDQSxDQUFBLHdCQUNBLENBQUEsaUJBR0Y7QUFBQSwyQkFDRSx3QkFHRjtBQUFBLG9CQUNFLG1CQUdGO0FBQUEseUJBQ0Usb0JBQ0UsU0FJSixDQUFBO0FBQUEscUJBQ0UsWUFHRjtBQUFBLHdDQUNFLHFCQUNBLENBQUEsbUJBQ0EsQ0FBQSxRQUdGO0FBQUEsb0VBRUUsYUFHRjtBQUFBLDBGQUVFLGFBQ0EsQ0FBQSxpQkNzQkY7QUFBQSw0RERqQkUsWUFHRjtBQUFBLGdEQUVFLGlCQUNBLENBQUEsdUJBQ0EsQ0FBQSwyQkNzQkY7QUFBQSw4RERqQkUsa0JBQ0EsQ0FBQSxTQ3NCRjtBQUFBLDBFRGpCRSxhQUNBLENBQUEsa0JDc0JGO0FBQUEsb0VEakJFLGFBR0Y7QUFBQSw0R0FFRSxZQUdGO0FBQUEsb0ZBRUUsaUJBQUE7QUQxSUY7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FHOUJGO0FDQ0U7RUptQkY7SUFhSSxxQkFBQTtJQUNBLHVCQUFBO0VHN0JGO0FBQ0Y7QUNDRTtFSmFGO0lBa0JJLGtCQUFBO0lBQ0EsbUJBQUE7RUc1QkY7QUFDRjtBQ0NFO0VKT0Y7SUF1QkkseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFRzNCRjtBQUNGO0FDRkU7RUpDRjtJQStCSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VHMUJGO0FBQ0Y7QUNPRTtFSmpCRjtJQXVDSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VHekJGO0FBQ0Y7QUgzQkEsa0NBQUE7QUFPQSw4RUFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBR3dCRjtBQ3JERTtFSm1CRjtJQWFJLHFCQUFBO0lBQ0EsdUJBQUE7RUd5QkY7QUFDRjtBQ3JERTtFSmFGO0lBa0JJLGtCQUFBO0lBQ0EsbUJBQUE7RUcwQkY7QUFDRjtBQ3JERTtFSk9GO0lBdUJJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUcyQkY7QUFDRjtBQ3hERTtFSkNGO0lBK0JJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUc0QkY7QUFDRjtBQy9DRTtFSmpCRjtJQXVDSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VHNkJGO0FBQ0Y7QUV4R0E7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0FGMkdGO0FFMUdFO0VBQ0UseUNBQUE7QUY0R0o7QUUxR0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBRjRHSjtBRTFHRTtFQUNFLGtDQUFBO0FGNEdKO0FFMUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FGNEdKO0FFeEdBO0VBQ0UsVUFBQTtBRjJHRjtBQW5JQTtFQUNFLFlBQUE7QUFzSUYiLCJmaWxlIjoiZmxvdy1ib29raW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9taXhpbnMnO1xuXG4kZm9udFNpemVTbTogMTJweDtcbiRmb250U2l6ZU1kOiAxNnB4O1xuJGZvbnRTaXplTGc6IDMwcHg7XG4kZm9udFNpemVYbDogNDVweDtcbiRmb250U2l6ZVh4bDogNTBweDtcblxuJHN5bWJvbFNpemVTbTogNTBweDtcbiRzeW1ib2xTaXplTWQ6IDEwcHg7XG4kc3ltYm9sU2l6ZUxnOiAxNTBweDtcbiRzeW1ib2xTaXplWGw6IDI1MHB4O1xuXG4kdmlkZW9XaWR0aFNtOiAxMDBweDtcbiR2aWRlb1dpZHRoTWQ6IDMwMHB4O1xuJHZpZGVvV2lkdGhMZzogMTAwMHB4O1xuJHZpZGVvV2lkdGhYbDogMTUwMHB4O1xuXG4kY29sb3ItbGlnaHQ6ICNFQ0Y4RTY7XG4kY29sb3ItYWNjZW50OiAgIzNBNTMyQztcbiRjb2xvci1ncmVlbi1saWdodDogIzZGOEY1RDtcbiRjb2xvci1zZWNvbmRhcnk6ICNDNEE0NzQ7XG4kY29sb3ItZ3JleS1saWdodDogI0Q0RDRENDtcbiRjb2xvci1ncmV5OiAjOUU5RTlFO1xuJGNvbG9yLWdyZXktZGFyazogIzc1NzU3NTtcblxuLyogQ3VzdG9taXplIEJvb3RzdHJhcCBWYXJpYWJsZXMgKi9cbiR0aGVtZS1jb2xvcnM6IChcbiAgcHJpbWFyeTogJGNvbG9yLWFjY2VudCxcbiAgc2Vjb25kYXJ5OiAkY29sb3Itc2Vjb25kYXJ5LFxuICBsaWdodDogJGNvbG9yLWxpZ2h0LFxuKTtcblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVNtfTtcbiAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplU219O1xuICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhTbX07XG4gIC0tZ3JleTogI3skY29sb3ItZ3JleX07XG4gIC0tZ3JleS1kYXJrOiAjeyRjb2xvci1ncmV5LWRhcmt9O1xuICAtLWdyZXktbGlnaHQ6ICN7JGNvbG9yLWdyZXktbGlnaHR9O1xuICAtLWdyZWVuLWxpZ2h0OiAjeyRjb2xvci1ncmVlbi1saWdodH07XG4gIC0tbGlnaHQ6ICN7JGNvbG9yLWxpZ2h0fTtcblxuICBAaW5jbHVkZSBzbSB7XG4gICAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICB9O1xuXG4gIEBpbmNsdWRlIG1kIHtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVNZH07XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTWR9O1xuICB9O1xuXG4gIEBpbmNsdWRlIGxnIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVMZ307XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTGd9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aExnfVxuICB9O1xuXG4gIEBpbmNsdWRlIHhsIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDEzOXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplWGx9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZUxnfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhMZ307XG4gIH07XG5cbiAgQGluY2x1ZGUgeHh4eGwge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVYbH07XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplWGx9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aFhsfTtcbiAgfTtcbn0iLCIvKiFcclxuICogYnNTdGVwcGVyIHYxLjcuMCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLXN0ZXBwZXIpXHJcbiAqIENvcHlyaWdodCAyMDE4IC0gMjAxOSBKb2hhbm4tUyA8am9oYW5uLnNlcnZvaXJlQGdtYWlsLmNvbT5cclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vSm9oYW5uLVMvYnMtc3RlcHBlci9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLW91dCwgY29sb3IgLjE1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOmRpc2FibGVkLFxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyLmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAuNjU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogLjI1cmVtO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAtMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWxpbmUsXHJcbi5icy1zdGVwcGVyIC5saW5lIHtcclxuICBmbGV4OiAxIDAgMzJweDtcclxuICBtaW4td2lkdGg6IDFweDtcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXItbGluZSxcclxuICAuYnMtc3RlcHBlciAubGluZSB7XHJcbiAgICBmbGV4LWJhc2lzOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBwYWRkaW5nOiAuNWVtIDA7XHJcbiAgbWFyZ2luOiAuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxufVxyXG5cclxuLmFjdGl2ZSAuYnMtc3RlcHBlci1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuYnMtc3RlcHBlci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItcGFuZSxcclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuYnMtc3RlcHBlci1wYW5lOm5vdCguZmFkZSksXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5jb250ZW50Om5vdCguZmFkZSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItcGFuZTpub3QoLmZhZGUpLFxyXG4uYnMtc3RlcHBlciAuY29udGVudDpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuY29udGVudC5mYWRlLFxyXG4uYnMtc3RlcHBlci1wYW5lLmZhZGUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItcGFuZS5mYWRlLmFjdGl2ZSxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuZmFkZS5hY3RpdmUge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItcGFuZS5hY3RpdmU6bm90KC5mYWRlKSxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuYWN0aXZlOm5vdCguZmFkZSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuZHN0ZXBwZXItYmxvY2ssXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmRzdGVwcGVyLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJzLXN0ZXBwZXI6bm90KC52ZXJ0aWNhbCkgLmJzLXN0ZXBwZXItcGFuZS5kc3RlcHBlci1ub25lLFxyXG4uYnMtc3RlcHBlcjpub3QoLnZlcnRpY2FsKSAuY29udGVudC5kc3RlcHBlci1ub25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmVydGljYWwgLmJzLXN0ZXBwZXItcGFuZS5mYWRlLmRzdGVwcGVyLW5vbmUsXHJcbi52ZXJ0aWNhbCAuY29udGVudC5mYWRlLmRzdGVwcGVyLW5vbmUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4iLCIvKiFcclxuICogYnNTdGVwcGVyIHYxLjcuMCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLXN0ZXBwZXIpXHJcbiAqIENvcHlyaWdodCAyMDE4IC0gMjAxOSBKb2hhbm4tUyA8am9oYW5uLnNlcnZvaXJlQGdtYWlsLmNvbT5cclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vSm9oYW5uLVMvYnMtc3RlcHBlci9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIge1xyXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2Utb3V0LCBjb2xvciAuMTVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6ZGlzYWJsZWQsXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIuZGlzYWJsZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IC42NTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpmb2N1cyB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA2KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlciB7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAuMjVyZW07XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWhlYWRlciB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuYnMtc3RlcHBlci1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmJzLXN0ZXBwZXItbGluZSxcclxuLmJzLXN0ZXBwZXIgLmxpbmUge1xyXG4gIC1tcy1mbGV4OiAxIDAgMzJweDtcclxuICAgICAgZmxleDogMSAwIDMycHg7XHJcbiAgbWluLXdpZHRoOiAxcHg7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5icy1zdGVwcGVyLWxpbmUsXHJcbiAgLmJzLXN0ZXBwZXIgLmxpbmUge1xyXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDIwcHg7XHJcbiAgICAgICAgZmxleC1iYXNpczogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNpcmNsZSB7XHJcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMmVtO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHBhZGRpbmc6IC41ZW0gMDtcclxuICBtYXJnaW46IC4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG59XHJcblxyXG4uYWN0aXZlIC5icy1zdGVwcGVyLWNpcmNsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5icy1zdGVwcGVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuYnMtc3RlcHBlci1oZWFkZXIge1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xyXG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmUsXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItcGFuZTpub3QoLmZhZGUpLFxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuY29udGVudDpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmU6bm90KC5mYWRlKSxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQ6bm90KC5mYWRlKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuZmFkZSxcclxuLmJzLXN0ZXBwZXItcGFuZS5mYWRlIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuZmFkZS5hY3RpdmUsXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmZhZGUuYWN0aXZlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuYWN0aXZlOm5vdCguZmFkZSksXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmFjdGl2ZTpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lLmRzdGVwcGVyLWJsb2NrLFxyXG4uYnMtc3RlcHBlciAuY29udGVudC5kc3RlcHBlci1ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyOm5vdCgudmVydGljYWwpIC5icy1zdGVwcGVyLXBhbmUuZHN0ZXBwZXItbm9uZSxcclxuLmJzLXN0ZXBwZXI6bm90KC52ZXJ0aWNhbCkgLmNvbnRlbnQuZHN0ZXBwZXItbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmUuZmFkZS5kc3RlcHBlci1ub25lLFxyXG4udmVydGljYWwgLmNvbnRlbnQuZmFkZS5kc3RlcHBlci1ub25lIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJzLXN0ZXBwZXIuY3NzLm1hcCAqLyIsIi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0ICd+YnMtc3RlcHBlci9kaXN0L2Nzcy9icy1zdGVwcGVyLm1pbi5jc3MnO1xuOnJvb3Qge1xuICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAtLWZvbnRTaXplOiAxMnB4O1xuICAtLXN5bWJvbFNpemU6IDUwcHg7XG4gIC0tdmlkZW9XaWR0aDogMTAwcHg7XG4gIC0tZ3JleTogIzlFOUU5RTtcbiAgLS1ncmV5LWRhcms6ICM3NTc1NzU7XG4gIC0tZ3JleS1saWdodDogI0Q0RDRENDtcbiAgLS1ncmVlbi1saWdodDogIzZGOEY1RDtcbiAgLS1saWdodDogI0VDRjhFNjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tc3ltYm9sU2l6ZTogMTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTk0Ljc1cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDY5LjVweDtcbiAgICAtLWZvbnRTaXplOiAzMHB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHggO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDEzOXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6IDQ1cHg7XG4gICAgLS1zeW1ib2xTaXplOiAxNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMwMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxNDBweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMjUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxNTAwcHg7XG4gIH1cbn1cblxuLyogQ3VzdG9taXplIEJvb3RzdHJhcCBWYXJpYWJsZXMgKi9cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogMTJweDtcbiAgLS1zeW1ib2xTaXplOiA1MHB4O1xuICAtLXZpZGVvV2lkdGg6IDEwMHB4O1xuICAtLWdyZXk6ICM5RTlFOUU7XG4gIC0tZ3JleS1kYXJrOiAjNzU3NTc1O1xuICAtLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4gIC0tZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4gIC0tbGlnaHQ6ICNFQ0Y4RTY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXN5bWJvbFNpemU6IDEwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogMzBweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4IDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMDAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDI1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTUwMHB4O1xuICB9XG59XG5cbi5zdGVwIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnN0ZXAuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG59XG4uc3RlcCAuYnMtc3RlcHBlci1jaXJjbGUge1xuICB3aWR0aDogNGVtO1xuICBoZWlnaHQ6IDRlbTtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICBwYWRkaW5nOiAxLjVlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTtcbn1cbi5zdGVwLmFjdGl2ZSAuYnMtc3RlcHBlci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLnN0ZXAgLmJzLXN0ZXBwZXItbGFiZWwge1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuXG4uYnMtc3RlcHBlci1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiQG1peGluIGdlbi10ZXh0KCRmb250LXNpemUpIHtcclxuICBmb250LXNpemU6IHZhcigkZm9udC1zaXplKTtcclxuICBsaW5lLWhlaWdodDogdmFyKCRmb250LXNpemUpO1xyXG59XHJcblxyXG4kc20td2lkdGg6IDU3NnB4O1xyXG4kbWQtd2lkdGg6IDc2OHB4O1xyXG4kbGctd2lkdGg6IDk5MnB4O1xyXG4keGwtd2lkdGg6IDEyMDBweDtcclxuJHh4bC13aWR0aDogMTQwMHB4O1xyXG4keHh4bC13aWR0aDogMTU0M3B4O1xyXG4keHh4eGwtd2lkdGg6IDMwMDBweDtcclxuXHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzbS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbWQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGxnLXdpZHRofSl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ35icy1zdGVwcGVyL2Rpc3QvY3NzL2JzLXN0ZXBwZXIubWluLmNzcyc7XHJcbkBpbXBvcnQgJy4vdmFyaWFibGVzJztcclxuXHJcbi5zdGVwIHtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcclxuICB9XHJcbiAgLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICAgIHdpZHRoOiA0ZW07XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTtcclxuICB9XHJcbiAgJi5hY3RpdmUgLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgfVxyXG4gIC5icy1zdGVwcGVyLWxhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    envConfigPath: './assets/config/config.json',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BZhe":
/*!********************************************************************!*\
  !*** ./src/app/config/httpInterceptor/http-interceptor.service.ts ***!
  \********************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_constant_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constant/local-storage */ "eyL3");
/* harmony import */ var _configure_configure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configure/configure.service */ "yegS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/auth.service */ "8PDw");







class HttpInterceptorService {
    constructor(authService) {
        this.authService = authService;
        this.BaseUrl = '';
    }
    intercept(req, next) {
        if (req.url.includes('api') && !req.url.includes('http')) {
            this.BaseUrl = this.getBaseUrl();
            const token = window.localStorage.getItem(src_app_shared_constant_local_storage__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE_KEYS"].token) || '';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: token,
                'Content-Type': 'application/json'
            });
            const modified = req.clone({
                headers,
                url: `${this.BaseUrl}/${req.url}`
            });
            return next.handle(modified).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                    event = event.clone({ body: this.modifyBody(event.body) });
                }
                return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
                return this.handleError(err, req, next);
            }));
        }
        return next.handle(req);
    }
    modifyBody(body) { }
    handleError(error, req, next) {
        if (error.status === 401) {
            return this.authService.getToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((res) => {
                const token = `${res.token_type} ${res.access_token}`;
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    Authorization: token,
                    'Content-Type': 'application/json'
                });
                window.localStorage.setItem(src_app_shared_constant_local_storage__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE_KEYS"].token, token);
                this.BaseUrl = this.getBaseUrl();
                const modified = req.clone({
                    headers,
                    url: `${this.BaseUrl}/${req.url}`
                });
                return next.handle(modified);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
    getBaseUrl() {
        return _configure_configure_service__WEBPACK_IMPORTED_MODULE_4__["ConfigureService"].config.url.base || '';
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac });


/***/ }),

/***/ "Dcqe":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/navigation-bar/components/navigation-bottom/navigation-bottom.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NavigationBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBottomComponent", function() { return NavigationBottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class NavigationBottomComponent {
    constructor() {
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    next() {
        this.nextStep.emit();
    }
    back() {
        this.backStep.emit();
    }
}
NavigationBottomComponent.ɵfac = function NavigationBottomComponent_Factory(t) { return new (t || NavigationBottomComponent)(); };
NavigationBottomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationBottomComponent, selectors: [["app-navigation-bottom"]], outputs: { nextStep: "nextStep", backStep: "backStep" }, decls: 9, vars: 6, consts: [[1, "spacer"], [1, "w-100", "navigation-btn-bottom"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["type", "button", 1, "btn", "btn-danger", "btn-arrow-left", "ks-btn-focus-decor-none", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-arrow-right", "ks-btn-focus-decor-none", 3, "click"]], template: function NavigationBottomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBottomComponent_Template_button_click_3_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBottomComponent_Template_button_click_6_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "navBottom.back"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "navBottom.next"), " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n.navigation-btn-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  background-color: #673ab7;\n  z-index: 999;\n}\n.navigation-btn-bottom[_ngcontent-%COMP%]   .btn-arrow-right[_ngcontent-%COMP%]:before, .navigation-btn-bottom[_ngcontent-%COMP%]   .btn-arrow-left[_ngcontent-%COMP%]:after {\n  \n  background: #673ab7;\n}\n.spacer[_ngcontent-%COMP%] {\n  height: var(--navBottomHeight);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZpZ2F0aW9uLWJvdHRvbS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBLGtDQUFBO0FBT0EsOEVBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUMvQkY7QUNFRTtFRm1CRjtJQWFJLHFCQUFBO0lBQ0EsdUJBQUE7RUM5QkY7QUFDRjtBQ0VFO0VGYUY7SUFrQkksa0JBQUE7SUFDQSxtQkFBQTtFQzdCRjtBQUNGO0FDRUU7RUZPRjtJQXVCSSx5QkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VDNUJGO0FBQ0Y7QUNERTtFRkNGO0lBK0JJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUMzQkY7QUFDRjtBQ1FFO0VGakJGO0lBdUNJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUMxQkY7QUFDRjtBQS9DQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBTHlCO0VBTXpCLFlBQUE7QUFrREY7QUFoREU7O0VBRUUsZ0NBQUE7RUFDQSxtQkFYdUI7QUE2RDNCO0FBOUNBO0VBQ0UsOEJBQUE7QUFpREYiLCJmaWxlIjoibmF2aWdhdGlvbi1ib3R0b20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL21peGlucyc7XG5cbiRmb250U2l6ZVNtOiAxMnB4O1xuJGZvbnRTaXplTWQ6IDE2cHg7XG4kZm9udFNpemVMZzogMzBweDtcbiRmb250U2l6ZVhsOiA0NXB4O1xuJGZvbnRTaXplWHhsOiA1MHB4O1xuXG4kc3ltYm9sU2l6ZVNtOiA1MHB4O1xuJHN5bWJvbFNpemVNZDogMTBweDtcbiRzeW1ib2xTaXplTGc6IDE1MHB4O1xuJHN5bWJvbFNpemVYbDogMjUwcHg7XG5cbiR2aWRlb1dpZHRoU206IDEwMHB4O1xuJHZpZGVvV2lkdGhNZDogMzAwcHg7XG4kdmlkZW9XaWR0aExnOiAxMDAwcHg7XG4kdmlkZW9XaWR0aFhsOiAxNTAwcHg7XG5cbiRjb2xvci1saWdodDogI0VDRjhFNjtcbiRjb2xvci1hY2NlbnQ6ICAjM0E1MzJDO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjNkY4RjVEO1xuJGNvbG9yLXNlY29uZGFyeTogI0M0QTQ3NDtcbiRjb2xvci1ncmV5LWxpZ2h0OiAjRDRENEQ0O1xuJGNvbG9yLWdyZXk6ICM5RTlFOUU7XG4kY29sb3ItZ3JleS1kYXJrOiAjNzU3NTc1O1xuXG4vKiBDdXN0b21pemUgQm9vdHN0cmFwIFZhcmlhYmxlcyAqL1xuJHRoZW1lLWNvbG9yczogKFxuICBwcmltYXJ5OiAkY29sb3ItYWNjZW50LFxuICBzZWNvbmRhcnk6ICRjb2xvci1zZWNvbmRhcnksXG4gIGxpZ2h0OiAkY29sb3ItbGlnaHQsXG4pO1xuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIC0tZm9udFNpemU6ICN7JGZvbnRTaXplU219O1xuICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVTbX07XG4gIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aFNtfTtcbiAgLS1ncmV5OiAjeyRjb2xvci1ncmV5fTtcbiAgLS1ncmV5LWRhcms6ICN7JGNvbG9yLWdyZXktZGFya307XG4gIC0tZ3JleS1saWdodDogI3skY29sb3ItZ3JleS1saWdodH07XG4gIC0tZ3JlZW4tbGlnaHQ6ICN7JGNvbG9yLWdyZWVuLWxpZ2h0fTtcbiAgLS1saWdodDogI3skY29sb3ItbGlnaHR9O1xuXG4gIEBpbmNsdWRlIHNtIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIH07XG5cbiAgQGluY2x1ZGUgbWQge1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZU1kfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhNZH07XG4gIH07XG5cbiAgQGluY2x1ZGUgbGcge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTk0Ljc1cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDY5LjVweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZUxnfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVMZ307XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTGd9XG4gIH07XG5cbiAgQGluY2x1ZGUgeGwge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTM5cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVYbH07XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTGd9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aExnfTtcbiAgfTtcblxuICBAaW5jbHVkZSB4eHh4bCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxNDBweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVhsfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVYbH07XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoWGx9O1xuICB9O1xufSIsIi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIC0tZm9udFNpemU6IDEycHg7XG4gIC0tc3ltYm9sU2l6ZTogNTBweDtcbiAgLS12aWRlb1dpZHRoOiAxMDBweDtcbiAgLS1ncmV5OiAjOUU5RTlFO1xuICAtLWdyZXktZGFyazogIzc1NzU3NTtcbiAgLS1ncmV5LWxpZ2h0OiAjRDRENEQ0O1xuICAtLWdyZWVuLWxpZ2h0OiAjNkY4RjVEO1xuICAtLWxpZ2h0OiAjRUNGOEU2O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6cm9vdCB7XG4gICAgLS1zeW1ib2xTaXplOiAxMHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxOTQuNzVweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogNjkuNXB4O1xuICAgIC0tZm9udFNpemU6IDMwcHg7XG4gICAgLS1zeW1ib2xTaXplOiAxNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDEwMDBweCA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTM5cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzAwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE0MHB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6IDQ1cHg7XG4gICAgLS1zeW1ib2xTaXplOiAyNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDE1MDBweDtcbiAgfVxufVxuXG4ubmF2aWdhdGlvbi1idG4tYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5uYXZpZ2F0aW9uLWJ0bi1ib3R0b20gLmJ0bi1hcnJvdy1yaWdodDpiZWZvcmUsXG4ubmF2aWdhdGlvbi1idG4tYm90dG9tIC5idG4tYXJyb3ctbGVmdDphZnRlciB7XG4gIC8qIGhpZGUgYXJyb3cgdGFpbHMgYmFja2dyb3VuZCAqL1xuICBiYWNrZ3JvdW5kOiAjNjczYWI3O1xufVxuXG4uc3BhY2VyIHtcbiAgaGVpZ2h0OiB2YXIoLS1uYXZCb3R0b21IZWlnaHQpO1xufSIsIkBtaXhpbiBnZW4tdGV4dCgkZm9udC1zaXplKSB7XHJcbiAgZm9udC1zaXplOiB2YXIoJGZvbnQtc2l6ZSk7XHJcbiAgbGluZS1oZWlnaHQ6IHZhcigkZm9udC1zaXplKTtcclxufVxyXG5cclxuJHNtLXdpZHRoOiA1NzZweDtcclxuJG1kLXdpZHRoOiA3NjhweDtcclxuJGxnLXdpZHRoOiA5OTJweDtcclxuJHhsLXdpZHRoOiAxMjAwcHg7XHJcbiR4eGwtd2lkdGg6IDE0MDBweDtcclxuJHh4eGwtd2lkdGg6IDE1NDNweDtcclxuJHh4eHhsLXdpZHRoOiAzMDAwcHg7XHJcblxyXG5cclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc20td2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JG1kLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRsZy13aWR0aH0pe1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "HGSx":
/*!*************************************************************************!*\
  !*** ./src/app/modules/checkin/components/scan-qr/scan-qr.component.ts ***!
  \*************************************************************************/
/*! exports provided: ScanQrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanQrComponent", function() { return ScanQrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/booking/booking.service */ "RnX0");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










class ScanQrComponent {
    constructor(hub, hubWalkin, router, bookingService, translateService) {
        this.hub = hub;
        this.hubWalkin = hubWalkin;
        this.router = router;
        this.bookingService = bookingService;
        this.translateService = translateService;
        this.redirectBookingCode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hubSubcription = null;
        this.readString = '';
        this.hubSubcription = this.hub.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].scanQR) {
                return;
            }
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].nextStep) {
                this.changeToNextStep();
            }
            else if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].backStep) {
                this.backStep();
            }
            else if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].focusQrInput) {
                this.addListener();
            }
        });
    }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
        this.clearListener();
    }
    ngOnInit() {
        this.hubWalkin.setStep(1);
        this.addListener();
    }
    addListener() {
        this.wheelHandler = this.listenQrCode.bind(this);
        const node = window.document;
        node.addEventListener('keypress', this.wheelHandler, true);
    }
    clearListener() {
        const node = window.document;
        console.log('clwar');
        node.removeEventListener('keypress', this.wheelHandler, true);
    }
    listenQrCode(event) {
        if (event.keyCode === 13) {
            const value = this.readString;
            this.readString = '';
            console.log('qr decode: ', value);
            if (value !== '' && !this.hub.getLoading()) {
                console.log('start get booking');
                this.getBooking(value);
            }
        }
        else {
            this.readString += (event === null || event === void 0 ? void 0 : event.key) || '';
        }
    }
    getBooking(rsvCode) {
        this.hub.setLoading(true);
        const model = {
            ReservationNo: rsvCode,
        };
        this.bookingService
            .searchBooking(model)
            .subscribe((res) => {
            if (res.statusCode === 200 && res.metadata) {
                const data = res.metadata[0];
                if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                    this.changeToNextStep(Object.assign(Object.assign({}, (data || {})), { resvNo: rsvCode }));
                    return;
                }
                if (data) {
                    this.changeToNextStep(Object.assign(Object.assign({}, data), { resvNo: rsvCode }));
                    this.clearListener();
                }
                else {
                    let msg = `${this.translateService.instant('msg.notFoundBooking')} <p class="work-break-all">${rsvCode}</p>`;
                    this.hub.error(msg);
                }
                console.log(res.metadata);
            }
            else {
                let msg = `${this.translateService.instant('msg.errorSearchBooking')} <p class="work-break-all">${rsvCode}</p>`;
                this.hub.error(msg);
                console.log(res.message);
            }
        }, () => {
            this.hub.error(this.translateService.instant(`msg.errorSearchBooking`));
        })
            .add(() => {
            this.hub.setLoading(false);
        });
    }
    /**
     * Back Step
     */
    backStep() {
        // this.router.navigateByUrl('/options');
        this.clearListener();
        this.readString = '';
    }
    changeToNextStep(data) {
        // this.nextStep.emit(data);
        this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].checkinQr}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["STEPS"].step2}`]);
        this.hubWalkin.setBookingData(data);
        this.readString = '';
    }
}
ScanQrComponent.ɵfac = function ScanQrComponent_Factory(t) { return new (t || ScanQrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_5__["HubWalkinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"])); };
ScanQrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScanQrComponent, selectors: [["app-scan-qr"]], outputs: { redirectBookingCode: "redirectBookingCode", nextStep: "nextStep" }, decls: 7, vars: 3, consts: [[1, "d-flex", "flex-column"], [1, "text-center", "mt-3"], [1, "text-grey-dark"], [1, "d-flex", "flex-row", "justify-content-center", "mt-4"], ["src", "assets/images/scan-qr.jpg"]], template: function ScanQrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "scanQR.instruction"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".img-container-instruction[_ngcontent-%COMP%] {\n  width: 20%;\n}\n@media (min-width: 768px) {\n  .img-container-instruction[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n@media (min-width: 992px) {\n  .img-container-instruction[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  .img-container-instruction[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n@media (min-width: 1543px) {\n  .img-container-instruction[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjYW4tcXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsVUFQeUI7QUFBM0I7QUNtQkU7RURURTtJQUNFLFVBVnFCO0VBR3pCO0FBQ0Y7QUNvQkU7RURURTtJQUNFLFdBZnFCO0VBT3pCO0FBQ0Y7QUNxQkU7RURURTtJQUNFLFVBcEJxQjtFQVd6QjtBQUNGO0FDNEJFO0VEZkU7SUFDRSxVQXpCdUI7RUFlM0I7QUFDRiIsImZpbGUiOiJzY2FuLXFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMnO1xyXG5cclxuJHdpZHRoLWltZy1pbnN0cnVjdGlvbi1zbTogMjAlO1xyXG4kd2lkdGgtaW1nLWluc3RydWN0aW9uLW1kOiAyMCU7XHJcbiR3aWR0aC1pbWctaW5zdHJ1Y3Rpb24tbGc6IDEwMCU7XHJcbiR3aWR0aC1pbWctaW5zdHJ1Y3Rpb24teGw6IDIwJTtcclxuJHdpZHRoLWltZy1pbnN0cnVjdGlvbi14eHhsOiAyMCU7XHJcblxyXG4uaW1nLWNvbnRhaW5lci1pbnN0cnVjdGlvbiB7XHJcbiAgd2lkdGg6ICR3aWR0aC1pbWctaW5zdHJ1Y3Rpb24tc207XHJcblxyXG4gIEBpbmNsdWRlIG1kIHtcclxuICAgICYge1xyXG4gICAgICB3aWR0aDogJHdpZHRoLWltZy1pbnN0cnVjdGlvbi1tZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGxnIHtcclxuICAgICYge1xyXG4gICAgICB3aWR0aDogJHdpZHRoLWltZy1pbnN0cnVjdGlvbi1sZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHhsIHtcclxuICAgICYge1xyXG4gICAgICB3aWR0aDogJHdpZHRoLWltZy1pbnN0cnVjdGlvbi14bDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHh4eGwge1xyXG4gICAgJiB7XHJcbiAgICAgIHdpZHRoOiAkd2lkdGgtaW1nLWluc3RydWN0aW9uLXh4eGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJAbWl4aW4gZ2VuLXRleHQoJGZvbnQtc2l6ZSkge1xyXG4gIGZvbnQtc2l6ZTogdmFyKCRmb250LXNpemUpO1xyXG4gIGxpbmUtaGVpZ2h0OiB2YXIoJGZvbnQtc2l6ZSk7XHJcbn1cclxuXHJcbiRzbS13aWR0aDogNTc2cHg7XHJcbiRtZC13aWR0aDogNzY4cHg7XHJcbiRsZy13aWR0aDogOTkycHg7XHJcbiR4bC13aWR0aDogMTIwMHB4O1xyXG4keHhsLXdpZHRoOiAxNDAwcHg7XHJcbiR4eHhsLXdpZHRoOiAxNTQzcHg7XHJcbiR4eHh4bC13aWR0aDogMzAwMHB4O1xyXG5cclxuXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtZC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbGctd2lkdGh9KXtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4eHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "HItX":
/*!****************************************************!*\
  !*** ./src/app/shared/services/hub/hub.service.ts ***!
  \****************************************************/
/*! exports provided: HubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubService", function() { return HubService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _constant_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constant/pages */ "8g6L");
/* harmony import */ var _constant_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/event */ "b3fv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class HubService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isLoading = false;
    }
    sendEvent(event) {
        this.subject.next(event);
    }
    onHub() {
        return this.subject.asObservable();
    }
    /**
     * Bật tắt is loading toàn màn
     */
    setLoading(isLoading) {
        const event = {
            receiver: _constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].root,
            message: _constant_event__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].loading,
            data: isLoading,
        };
        this.isLoading = isLoading;
        this.sendEvent(event);
    }
    getLoading() {
        return this.isLoading;
    }
    /**
     * Bật Modal báo lỗi
     */
    error(msg) {
        const event = {
            receiver: _constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].root,
            message: _constant_event__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].showErrorModal,
            data: msg,
        };
        this.sendEvent(event);
    }
}
HubService.ɵfac = function HubService_Factory(t) { return new (t || HubService)(); };
HubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HubService, factory: HubService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HTcQ":
/*!***************************************************!*\
  !*** ./src/app/layout/walkin/walkin.component.ts ***!
  \***************************************************/
/*! exports provided: WalkinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinComponent", function() { return WalkinComponent; });
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-stepper */ "BYMX");
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bs_stepper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var _modules_navigation_bar_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/navigation-bar/components/navigation/navigation.component */ "0Jb9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function WalkinComponent_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.hubWalkin.textIntro), ", ");
} }
function WalkinComponent_h4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r1.hubWalkin.subTextIntro), " ");
} }
class WalkinComponent {
    constructor(hubWalkin) {
        this.hubWalkin = hubWalkin;
        this.isShowStepper = false;
        this.hubSubcription = hubWalkin.onStep().subscribe((step) => {
            console.log('step: ', step);
            this.stepper.to(step);
        });
    }
    ngOnDestroy() {
        // this.hubSubcription.unsubscribe();
    }
    ngOnInit() {
        this.initStepper();
        console.log('on init');
    }
    initStepper() {
        const linear = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production;
        console.log(this.hubWalkin.isShowStepper);
        this.hubWalkin.setIsShowStepper(true);
        this.stepper = new bs_stepper__WEBPACK_IMPORTED_MODULE_0___default.a(document.querySelector('#stepper-checkin'), {
            linear: linear,
            animation: true,
        });
        // this.stepper.to(this.hubWalkin.getStep());
        // this.stepper.to(0);
    }
}
WalkinComponent.ɵfac = function WalkinComponent_Factory(t) { return new (t || WalkinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_3__["HubWalkinService"])); };
WalkinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WalkinComponent, selectors: [["app-walkin"]], decls: 49, vars: 15, consts: [[1, "content", "d-flex", "flex-column", "h-100"], [1, "spacer"], [1, "wrapper", "menu-intro", "my-2"], ["class", "text-white font-weight-thin mt-3", 4, "ngIf"], ["class", "text-white font-weight-bold mt-3", 4, "ngIf"], [1, "h-100"], [1, "app-card", "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "d-flex", "flex-column", "h-100"], [1, "d-flex", "flex-row", "justify-content-center", "mb-2"], [1, "mt-3", "bg-primary", "stick-horizontal"], ["id", "stepper-checkin", 1, "bs-stepper", "d-flex", "flex-column"], [1, "bs-stepper-header", "wrapper", 3, "hidden"], ["data-target", "#step-avail-rooms", 1, "step"], [1, "step-trigger"], [1, "bs-stepper-circle"], [1, "bs-stepper-label"], ["data-target", "#step-scan-id-card", 1, "step"], ["data-target", "#step-booking-create", 1, "step"], ["data-target", "#step-done", 1, "step"], ["id", "bsStepperContent", 1, "bs-stepper-content"], ["id", "step-avail-rooms", "data-name", "availRooms", 1, "content", "h-100"], ["id", "step-scan-id-card", "data-name", "scanIdCard", 1, "content", "h-100"], ["id", "step-booking-create", "data-name", "bookingCreate", 1, "content"], ["id", "step-done", "data-name", "bookingDone", 1, "content", "text-center", "h-100"], [1, "text-white", "font-weight-thin", "mt-3"], [1, "text-white", "font-weight-bold", "mt-3"]], template: function WalkinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, WalkinComponent_h5_5_Template, 3, 3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, WalkinComponent_h4_6_Template, 3, 3, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hubWalkin.textIntro);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hubWalkin.subTextIntro);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.hubWalkin.isShowStepper);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 7, "flowBooking.availabilityRooms"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 9, "flowBooking.bookingInformation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 11, "flowBooking.bookingCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 13, "flowBooking.done"));
    } }, directives: [_modules_navigation_bar_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]{display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:20px;font-size:1rem;font-weight:700;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;user-select:none;background-color:transparent;border:none;border-radius:.25rem;transition:background-color .15s ease-out,color .15s ease-out}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger.disabled[_ngcontent-%COMP%], .bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:disabled{pointer-events:none;opacity:.65}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:focus{color:#007bff;outline:0}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:rgba(0,0,0,.06)}\n@media (max-width:520px){.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]{flex-direction:column;padding:10px}}\n.bs-stepper-label[_ngcontent-%COMP%]{display:inline-block;margin:.25rem}\n.bs-stepper-header[_ngcontent-%COMP%]{display:flex;align-items:center}\n@media (max-width:520px){.bs-stepper-header[_ngcontent-%COMP%]{margin:0 -10px;text-align:center}}\n.bs-stepper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .bs-stepper-line[_ngcontent-%COMP%]{flex:1 0 32px;min-width:1px;min-height:1px;margin:auto;background-color:rgba(0,0,0,.12)}\n@media (max-width:400px){.bs-stepper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .bs-stepper-line[_ngcontent-%COMP%]{flex-basis:20px}}\n.bs-stepper-circle[_ngcontent-%COMP%]{display:inline-flex;align-content:center;justify-content:center;width:2em;height:2em;padding:.5em 0;margin:.25rem;line-height:1em;color:#fff;background-color:#6c757d;border-radius:1em}\n.active[_ngcontent-%COMP%]   .bs-stepper-circle[_ngcontent-%COMP%]{background-color:#007bff}\n.bs-stepper-content[_ngcontent-%COMP%]{padding:0 20px 20px}\n@media (max-width:520px){.bs-stepper-content[_ngcontent-%COMP%]{padding:0}}\n.bs-stepper.vertical[_ngcontent-%COMP%]{display:flex}\n.bs-stepper.vertical[_ngcontent-%COMP%]   .bs-stepper-header[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;margin:0}\n.bs-stepper.vertical[_ngcontent-%COMP%]   .bs-stepper-pane[_ngcontent-%COMP%], .bs-stepper.vertical[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:block}\n.bs-stepper.vertical[_ngcontent-%COMP%]   .bs-stepper-pane[_ngcontent-%COMP%]:not(.fade), .bs-stepper.vertical[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:not(.fade){display:block;visibility:hidden}\n.bs-stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:not(.fade), .bs-stepper-pane[_ngcontent-%COMP%]:not(.fade){display:none}\n.bs-stepper[_ngcontent-%COMP%]   .content.fade[_ngcontent-%COMP%], .bs-stepper-pane.fade[_ngcontent-%COMP%]{visibility:hidden;transition-duration:.3s;transition-property:opacity}\n.bs-stepper[_ngcontent-%COMP%]   .content.fade.active[_ngcontent-%COMP%], .bs-stepper-pane.fade.active[_ngcontent-%COMP%]{visibility:visible;opacity:1}\n.bs-stepper[_ngcontent-%COMP%]   .content.active[_ngcontent-%COMP%]:not(.fade), .bs-stepper-pane.active[_ngcontent-%COMP%]:not(.fade){display:block;visibility:visible}\n.bs-stepper[_ngcontent-%COMP%]   .content.dstepper-block[_ngcontent-%COMP%], .bs-stepper-pane.dstepper-block[_ngcontent-%COMP%]{display:block}\n.bs-stepper[_ngcontent-%COMP%]:not(.vertical)   .bs-stepper-pane.dstepper-none[_ngcontent-%COMP%], .bs-stepper[_ngcontent-%COMP%]:not(.vertical)   .content.dstepper-none[_ngcontent-%COMP%]{display:none}\n.vertical[_ngcontent-%COMP%]   .bs-stepper-pane.fade.dstepper-none[_ngcontent-%COMP%], .vertical[_ngcontent-%COMP%]   .content.fade.dstepper-none[_ngcontent-%COMP%]{visibility:hidden}\n[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n\n\n[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n\n\n[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n.step[_ngcontent-%COMP%] {\n  border-bottom: 3px solid var(--grey-light);\n  margin-bottom: 10px;\n}\n.step.active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid var(--secondary);\n}\n.step[_ngcontent-%COMP%]   .bs-stepper-circle[_ngcontent-%COMP%] {\n  width: 4em;\n  height: 4em;\n  border-radius: 2em;\n  padding: 1.5em 0;\n  background-color: var(--grey-light);\n}\n.step.active[_ngcontent-%COMP%]   .bs-stepper-circle[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n}\n.step[_ngcontent-%COMP%]   .bs-stepper-label[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-weight: 100;\n  font-size: 0.7rem;\n}\n.bs-stepper-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n.app-card[_ngcontent-%COMP%] {\n  border-top-left-radius: 70px;\n  border-top-right-radius: 70px;\n  background-color: var(--white);\n}\n.stick-horizontal[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 8%;\n  height: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYnMtc3RlcHBlci9kaXN0L2Nzcy8uLlxcLi5cXHNyY1xcY3NzXFxicy1zdGVwcGVyLmNzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9icy1zdGVwcGVyL2Rpc3QvY3NzL2Rpc3RcXGNzc1xcYnMtc3RlcHBlci5jc3MiLCIuLlxcLi5cXC4uXFwuLlxcd2Fsa2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfc3RlcHBlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQSxrQ0FBQTtBQU9BLDhFQUFBO0FDakNBOzs7O0VBTUE7QUFBQSwwQkFDRSxtQkFDQSxDQUFBLGNBQ0EsQ0FBQSxrQkFDQSxDQUFBLHNCQUNBLENBQUEsWUFDQSxDQUFBLGNBQ0EsQ0FBQSxlQUNBLENBQUEsZUFDQSxDQUFBLGFBQ0EsQ0FBQSxpQkFDQSxDQUFBLG9CQUNBLENBQUEsa0JBQ0EsQ0FBQSxxQkFDQSxDQUFBLHdCQUFBLENBQUEsZ0JBQ0EsQ0FBQSw0QkFDQSxDQUFBLFdBQ0EsQ0FBQSxvQkFDQSxDQUFBLDZEQUdGO0FBQUEsd0RBQ0UsY0NXRjtBQUFBLHNFRE5FLG1CQUNBLENBQUEsV0FHRjtBQUFBLGdDQUNFLGFBQ0EsQ0FBQSxTQUdGO0FBQUEsZ0NBQ0Usb0JBQ0EsQ0FBQSxnQ0FHRjtBQUFBLHlCQUNFLDBCQUNFLHFCQUNBLENBQUEsWUFJSixDQUFBO0FBQUEsa0JBQ0Usb0JBQ0EsQ0FBQSxhQUdGO0FBQUEsbUJBQ0UsWUFDQSxDQUFBLGtCQUdGO0FBQUEseUJBQ0UsbUJBQ0UsY0FDQSxDQUFBLGlCQ2VKLENBQUE7QUFBQSxtQ0RURSxhQUNBLENBQUEsYUFDQSxDQUFBLGNBQ0EsQ0FBQSxXQUNBLENBQUEsZ0NBR0Y7QUFBQSx5QkNhRSxtQ0RWRSxlQUlKLENBQUE7QUFBQSxtQkFDRSxtQkFDQSxDQUFBLG9CQUNBLENBQUEsc0JBQ0EsQ0FBQSxTQUNBLENBQUEsVUFDQSxDQUFBLGNBQ0EsQ0FBQSxhQUNBLENBQUEsZUFDQSxDQUFBLFVBQ0EsQ0FBQSx3QkFDQSxDQUFBLGlCQUdGO0FBQUEsMkJBQ0Usd0JBR0Y7QUFBQSxvQkFDRSxtQkFHRjtBQUFBLHlCQUNFLG9CQUNFLFNBSUosQ0FBQTtBQUFBLHFCQUNFLFlBR0Y7QUFBQSx3Q0FDRSxxQkFDQSxDQUFBLG1CQUNBLENBQUEsUUFHRjtBQUFBLG9FQUVFLGFBR0Y7QUFBQSwwRkFFRSxhQUNBLENBQUEsaUJDc0JGO0FBQUEsNEREakJFLFlBR0Y7QUFBQSxnREFFRSxpQkFDQSxDQUFBLHVCQUNBLENBQUEsMkJDc0JGO0FBQUEsOEREakJFLGtCQUNBLENBQUEsU0NzQkY7QUFBQSwwRURqQkUsYUFDQSxDQUFBLGtCQ3NCRjtBQUFBLG9FRGpCRSxhQUdGO0FBQUEsNEdBRUUsWUFHRjtBQUFBLG9GQUVFLGlCQUFBO0FEMUlGO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBRzlCRjtBQ0NFO0VKbUJGO0lBYUkscUJBQUE7SUFDQSx1QkFBQTtFRzdCRjtBQUNGO0FDQ0U7RUphRjtJQWtCSSxrQkFBQTtJQUNBLG1CQUFBO0VHNUJGO0FBQ0Y7QUNDRTtFSk9GO0lBdUJJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUczQkY7QUFDRjtBQ0ZFO0VKQ0Y7SUErQkksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFRzFCRjtBQUNGO0FDT0U7RUpqQkY7SUF1Q0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFR3pCRjtBQUNGO0FIM0JBLGtDQUFBO0FBT0EsOEVBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUd3QkY7QUNyREU7RUptQkY7SUFhSSxxQkFBQTtJQUNBLHVCQUFBO0VHeUJGO0FBQ0Y7QUNyREU7RUphRjtJQWtCSSxrQkFBQTtJQUNBLG1CQUFBO0VHMEJGO0FBQ0Y7QUNyREU7RUpPRjtJQXVCSSx5QkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VHMkJGO0FBQ0Y7QUN4REU7RUpDRjtJQStCSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VHNEJGO0FBQ0Y7QUMvQ0U7RUpqQkY7SUF1Q0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFRzZCRjtBQUNGO0FIakZBLGtDQUFBO0FBT0EsOEVBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUc4RUY7QUMzR0U7RUptQkY7SUFhSSxxQkFBQTtJQUNBLHVCQUFBO0VHK0VGO0FBQ0Y7QUMzR0U7RUphRjtJQWtCSSxrQkFBQTtJQUNBLG1CQUFBO0VHZ0ZGO0FBQ0Y7QUMzR0U7RUpPRjtJQXVCSSx5QkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VHaUZGO0FBQ0Y7QUM5R0U7RUpDRjtJQStCSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VHa0ZGO0FBQ0Y7QUNyR0U7RUpqQkY7SUF1Q0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFR21GRjtBQUNGO0FFOUpBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBRmlLRjtBRWhLRTtFQUNFLHlDQUFBO0FGa0tKO0FFaEtFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUZrS0o7QUVoS0U7RUFDRSxrQ0FBQTtBRmtLSjtBRWhLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRmtLSjtBRTlKQTtFQUNFLFVBQUE7QUZpS0Y7QUF4TEE7RUFDRSxZQUFBO0FBMkxGO0FBeExBO0VBQ0UsZ0JBQUE7QUEyTEY7QUF6TEE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUE0TEY7QUF6TEE7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBNExGIiwiZmlsZSI6IndhbGtpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vbWl4aW5zJztcblxuJGZvbnRTaXplU206IDEycHg7XG4kZm9udFNpemVNZDogMTZweDtcbiRmb250U2l6ZUxnOiAzMHB4O1xuJGZvbnRTaXplWGw6IDQ1cHg7XG4kZm9udFNpemVYeGw6IDUwcHg7XG5cbiRzeW1ib2xTaXplU206IDUwcHg7XG4kc3ltYm9sU2l6ZU1kOiAxMHB4O1xuJHN5bWJvbFNpemVMZzogMTUwcHg7XG4kc3ltYm9sU2l6ZVhsOiAyNTBweDtcblxuJHZpZGVvV2lkdGhTbTogMTAwcHg7XG4kdmlkZW9XaWR0aE1kOiAzMDBweDtcbiR2aWRlb1dpZHRoTGc6IDEwMDBweDtcbiR2aWRlb1dpZHRoWGw6IDE1MDBweDtcblxuJGNvbG9yLWxpZ2h0OiAjRUNGOEU2O1xuJGNvbG9yLWFjY2VudDogICMzQTUzMkM7XG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjQzRBNDc0O1xuJGNvbG9yLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4kY29sb3ItZ3JleTogIzlFOUU5RTtcbiRjb2xvci1ncmV5LWRhcms6ICM3NTc1NzU7XG5cbi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4kdGhlbWUtY29sb3JzOiAoXG4gIHByaW1hcnk6ICRjb2xvci1hY2NlbnQsXG4gIHNlY29uZGFyeTogJGNvbG9yLXNlY29uZGFyeSxcbiAgbGlnaHQ6ICRjb2xvci1saWdodCxcbik7XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogI3skZm9udFNpemVTbX07XG4gIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZVNtfTtcbiAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoU219O1xuICAtLWdyZXk6ICN7JGNvbG9yLWdyZXl9O1xuICAtLWdyZXktZGFyazogI3skY29sb3ItZ3JleS1kYXJrfTtcbiAgLS1ncmV5LWxpZ2h0OiAjeyRjb2xvci1ncmV5LWxpZ2h0fTtcbiAgLS1ncmVlbi1saWdodDogI3skY29sb3ItZ3JlZW4tbGlnaHR9O1xuICAtLWxpZ2h0OiAjeyRjb2xvci1saWdodH07XG5cbiAgQGluY2x1ZGUgc20ge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfTtcblxuICBAaW5jbHVkZSBtZCB7XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTWR9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aE1kfTtcbiAgfTtcblxuICBAaW5jbHVkZSBsZyB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxOTQuNzVweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogNjkuNXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplTGd9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZUxnfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhMZ31cbiAgfTtcblxuICBAaW5jbHVkZSB4bCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVhsfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVMZ307XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTGd9O1xuICB9O1xuXG4gIEBpbmNsdWRlIHh4eHhsIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE0MHB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplWGx9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZVhsfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhYbH07XG4gIH07XG59IiwiLyohXHJcbiAqIGJzU3RlcHBlciB2MS43LjAgKGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2hhbm4tUy9icy1zdGVwcGVyKVxyXG4gKiBDb3B5cmlnaHQgMjAxOCAtIDIwMTkgSm9oYW5uLVMgPGpvaGFubi5zZXJ2b2lyZUBnbWFpbC5jb20+XHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLXN0ZXBwZXIvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1vdXQsIGNvbG9yIC4xNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpkaXNhYmxlZCxcclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlci5kaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogLjY1O1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOmZvY3VzIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDYpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJzLXN0ZXBwZXItbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IC4yNXJlbTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5icy1zdGVwcGVyLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDAgLTEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci1saW5lLFxyXG4uYnMtc3RlcHBlciAubGluZSB7XHJcbiAgZmxleDogMSAwIDMycHg7XHJcbiAgbWluLXdpZHRoOiAxcHg7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5icy1zdGVwcGVyLWxpbmUsXHJcbiAgLmJzLXN0ZXBwZXIgLmxpbmUge1xyXG4gICAgZmxleC1iYXNpczogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNpcmNsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgcGFkZGluZzogLjVlbSAwO1xyXG4gIG1hcmdpbjogLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbn1cclxuXHJcbi5hY3RpdmUgLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwIDIwcHggMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5icy1zdGVwcGVyLWhlYWRlciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmUsXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItcGFuZTpub3QoLmZhZGUpLFxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuY29udGVudDpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmU6bm90KC5mYWRlKSxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQ6bm90KC5mYWRlKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuZmFkZSxcclxuLmJzLXN0ZXBwZXItcGFuZS5mYWRlIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuZmFkZS5hY3RpdmUsXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmZhZGUuYWN0aXZlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuYWN0aXZlOm5vdCguZmFkZSksXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmFjdGl2ZTpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lLmRzdGVwcGVyLWJsb2NrLFxyXG4uYnMtc3RlcHBlciAuY29udGVudC5kc3RlcHBlci1ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyOm5vdCgudmVydGljYWwpIC5icy1zdGVwcGVyLXBhbmUuZHN0ZXBwZXItbm9uZSxcclxuLmJzLXN0ZXBwZXI6bm90KC52ZXJ0aWNhbCkgLmNvbnRlbnQuZHN0ZXBwZXItbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmUuZmFkZS5kc3RlcHBlci1ub25lLFxyXG4udmVydGljYWwgLmNvbnRlbnQuZmFkZS5kc3RlcHBlci1ub25lIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuIiwiLyohXHJcbiAqIGJzU3RlcHBlciB2MS43LjAgKGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2hhbm4tUy9icy1zdGVwcGVyKVxyXG4gKiBDb3B5cmlnaHQgMjAxOCAtIDIwMTkgSm9oYW5uLVMgPGpvaGFubi5zZXJ2b2lyZUBnbWFpbC5jb20+XHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLXN0ZXBwZXIvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyIHtcclxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLW91dCwgY29sb3IgLjE1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOmRpc2FibGVkLFxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyLmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAuNjU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIge1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogLjI1cmVtO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAtMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWxpbmUsXHJcbi5icy1zdGVwcGVyIC5saW5lIHtcclxuICAtbXMtZmxleDogMSAwIDMycHg7XHJcbiAgICAgIGZsZXg6IDEgMCAzMnB4O1xyXG4gIG1pbi13aWR0aDogMXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuYnMtc3RlcHBlci1saW5lLFxyXG4gIC5icy1zdGVwcGVyIC5saW5lIHtcclxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci1jaXJjbGUge1xyXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBwYWRkaW5nOiAuNWVtIDA7XHJcbiAgbWFyZ2luOiAuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxufVxyXG5cclxuLmFjdGl2ZSAuYnMtc3RlcHBlci1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuYnMtc3RlcHBlci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcclxuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuYnMtc3RlcHBlci1wYW5lLFxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmU6bm90KC5mYWRlKSxcclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmNvbnRlbnQ6bm90KC5mYWRlKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lOm5vdCguZmFkZSksXHJcbi5icy1zdGVwcGVyIC5jb250ZW50Om5vdCguZmFkZSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmZhZGUsXHJcbi5icy1zdGVwcGVyLXBhbmUuZmFkZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lLmZhZGUuYWN0aXZlLFxyXG4uYnMtc3RlcHBlciAuY29udGVudC5mYWRlLmFjdGl2ZSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lLmFjdGl2ZTpub3QoLmZhZGUpLFxyXG4uYnMtc3RlcHBlciAuY29udGVudC5hY3RpdmU6bm90KC5mYWRlKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItcGFuZS5kc3RlcHBlci1ibG9jayxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuZHN0ZXBwZXItYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlcjpub3QoLnZlcnRpY2FsKSAuYnMtc3RlcHBlci1wYW5lLmRzdGVwcGVyLW5vbmUsXHJcbi5icy1zdGVwcGVyOm5vdCgudmVydGljYWwpIC5jb250ZW50LmRzdGVwcGVyLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbCAuYnMtc3RlcHBlci1wYW5lLmZhZGUuZHN0ZXBwZXItbm9uZSxcclxuLnZlcnRpY2FsIC5jb250ZW50LmZhZGUuZHN0ZXBwZXItbm9uZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1icy1zdGVwcGVyLmNzcy5tYXAgKi8iLCIvKiBDdXN0b21pemUgQm9vdHN0cmFwIFZhcmlhYmxlcyAqL1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnfmJzLXN0ZXBwZXIvZGlzdC9jc3MvYnMtc3RlcHBlci5taW4uY3NzJztcbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogMTJweDtcbiAgLS1zeW1ib2xTaXplOiA1MHB4O1xuICAtLXZpZGVvV2lkdGg6IDEwMHB4O1xuICAtLWdyZXk6ICM5RTlFOUU7XG4gIC0tZ3JleS1kYXJrOiAjNzU3NTc1O1xuICAtLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4gIC0tZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4gIC0tbGlnaHQ6ICNFQ0Y4RTY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXN5bWJvbFNpemU6IDEwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogMzBweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4IDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMDAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDI1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTUwMHB4O1xuICB9XG59XG5cbi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIC0tZm9udFNpemU6IDEycHg7XG4gIC0tc3ltYm9sU2l6ZTogNTBweDtcbiAgLS12aWRlb1dpZHRoOiAxMDBweDtcbiAgLS1ncmV5OiAjOUU5RTlFO1xuICAtLWdyZXktZGFyazogIzc1NzU3NTtcbiAgLS1ncmV5LWxpZ2h0OiAjRDRENEQ0O1xuICAtLWdyZWVuLWxpZ2h0OiAjNkY4RjVEO1xuICAtLWxpZ2h0OiAjRUNGOEU2O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6cm9vdCB7XG4gICAgLS1zeW1ib2xTaXplOiAxMHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxOTQuNzVweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogNjkuNXB4O1xuICAgIC0tZm9udFNpemU6IDMwcHg7XG4gICAgLS1zeW1ib2xTaXplOiAxNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDEwMDBweCA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTM5cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzAwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE0MHB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6IDQ1cHg7XG4gICAgLS1zeW1ib2xTaXplOiAyNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDE1MDBweDtcbiAgfVxufVxuXG4vKiBDdXN0b21pemUgQm9vdHN0cmFwIFZhcmlhYmxlcyAqL1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAtLWZvbnRTaXplOiAxMnB4O1xuICAtLXN5bWJvbFNpemU6IDUwcHg7XG4gIC0tdmlkZW9XaWR0aDogMTAwcHg7XG4gIC0tZ3JleTogIzlFOUU5RTtcbiAgLS1ncmV5LWRhcms6ICM3NTc1NzU7XG4gIC0tZ3JleS1saWdodDogI0Q0RDRENDtcbiAgLS1ncmVlbi1saWdodDogIzZGOEY1RDtcbiAgLS1saWdodDogI0VDRjhFNjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tc3ltYm9sU2l6ZTogMTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTk0Ljc1cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDY5LjVweDtcbiAgICAtLWZvbnRTaXplOiAzMHB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHggO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDEzOXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6IDQ1cHg7XG4gICAgLS1zeW1ib2xTaXplOiAxNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMwMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxNDBweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMjUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxNTAwcHg7XG4gIH1cbn1cblxuLnN0ZXAge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3RlcC5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcbn1cbi5zdGVwIC5icy1zdGVwcGVyLWNpcmNsZSB7XG4gIHdpZHRoOiA0ZW07XG4gIGhlaWdodDogNGVtO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIHBhZGRpbmc6IDEuNWVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktbGlnaHQpO1xufVxuLnN0ZXAuYWN0aXZlIC5icy1zdGVwcGVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG4uc3RlcCAuYnMtc3RlcHBlci1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi5icy1zdGVwcGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uYXBwLWNhcmQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uc3RpY2staG9yaXpvbnRhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA4JTtcbiAgaGVpZ2h0OiAwLjNyZW07XG59IiwiQG1peGluIGdlbi10ZXh0KCRmb250LXNpemUpIHtcclxuICBmb250LXNpemU6IHZhcigkZm9udC1zaXplKTtcclxuICBsaW5lLWhlaWdodDogdmFyKCRmb250LXNpemUpO1xyXG59XHJcblxyXG4kc20td2lkdGg6IDU3NnB4O1xyXG4kbWQtd2lkdGg6IDc2OHB4O1xyXG4kbGctd2lkdGg6IDk5MnB4O1xyXG4keGwtd2lkdGg6IDEyMDBweDtcclxuJHh4bC13aWR0aDogMTQwMHB4O1xyXG4keHh4bC13aWR0aDogMTU0M3B4O1xyXG4keHh4eGwtd2lkdGg6IDMwMDBweDtcclxuXHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzbS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbWQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGxnLXdpZHRofSl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ35icy1zdGVwcGVyL2Rpc3QvY3NzL2JzLXN0ZXBwZXIubWluLmNzcyc7XHJcbkBpbXBvcnQgJy4vdmFyaWFibGVzJztcclxuXHJcbi5zdGVwIHtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcclxuICB9XHJcbiAgLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICAgIHdpZHRoOiA0ZW07XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTtcclxuICB9XHJcbiAgJi5hY3RpdmUgLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgfVxyXG4gIC5icy1zdGVwcGVyLWxhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "N6LZ":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/app-card/app-card/app-card.module.ts ***!
  \************************************************************************/
/*! exports provided: AppCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCardModule", function() { return AppCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-card.component */ "wLxG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppCardModule {
}
AppCardModule.ɵfac = function AppCardModule_Factory(t) { return new (t || AppCardModule)(); };
AppCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppCardModule });
AppCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppCardModule, { declarations: [_app_card_component__WEBPACK_IMPORTED_MODULE_1__["AppCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_app_card_component__WEBPACK_IMPORTED_MODULE_1__["AppCardComponent"]] }); })();


/***/ }),

/***/ "NQ6j":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/hub-walkin/hub-walkin.service.ts ***!
  \******************************************************************/
/*! exports provided: HubWalkinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubWalkinService", function() { return HubWalkinService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HubWalkinService {
    constructor() {
        this.step = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // private step = 1;
        this.page = '';
        this.bookingData = {};
        this.totalRateData = {};
        this.isDoneFlow = true;
        this.errorMessageCreateBooking = '';
        this.isShowStepper = false;
        this.textIntro = '';
        this.subTextIntro = '';
    }
    getBookingData() {
        return this.bookingData;
    }
    setBookingData(data) {
        this.bookingData = Object.assign(Object.assign({}, this.bookingData), data);
    }
    clearBookingData() {
        this.bookingData = {};
    }
    setStep(event) {
        this.step.next(event);
    }
    onStep() {
        return this.step.asObservable();
    }
    setPage(page) {
        this.page = page;
    }
    setIsShowStepper(value) {
        this.isShowStepper = value;
    }
    setTextIntro(value) {
        this.textIntro = value;
    }
    setSubTextIntro(value) {
        this.subTextIntro = value;
    }
}
HubWalkinService.ɵfac = function HubWalkinService_Factory(t) { return new (t || HubWalkinService)(); };
HubWalkinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HubWalkinService, factory: HubWalkinService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "O//k":
/*!***********************************************!*\
  !*** ./src/app/shared/constant/check-mode.ts ***!
  \***********************************************/
/*! exports provided: CHECK_IN_MODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_IN_MODES", function() { return CHECK_IN_MODES; });
const CHECK_IN_MODES = {
    QR_CODE: 'QR_CODE',
    BOOKING_CODE: 'BOOKING_CODE',
    WALK_IN: 'WALK-IN',
};


/***/ }),

/***/ "P0mD":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/checkin/components/booking-details/booking-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BookingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsComponent", function() { return BookingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/booking/booking.service */ "RnX0");
/* harmony import */ var _services_room_availability_room_availability_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/room-availability/room-availability.service */ "5+xa");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");



















function BookingDetailsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r0.error, " ");
} }
const _c0 = function () { return []; };
const _c1 = function (a0, a1) { return { "active": a0, "booked": a1 }; };
function BookingDetailsComponent_div_61_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingDetailsComponent_div_61_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const room_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onSelectRoom(room_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, ctx_r2.bookingData.roomCode === room_r3.roomCode, ctx_r2.bookingData.roomCode !== room_r3.roomCode && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0).includes(room_r3.roomCode)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", room_r3.roomCode, " ");
} }
function BookingDetailsComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookingDetailsComponent_div_61_div_3_Template, 4, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.roomAvaiData);
} }
class BookingDetailsComponent {
    constructor(hubService, utilService, hubWalkin, bookingService, roomAvaiService, translateService, router) {
        this.hubService = hubService;
        this.utilService = utilService;
        this.hubWalkin = hubWalkin;
        this.bookingService = bookingService;
        this.roomAvaiService = roomAvaiService;
        this.translateService = translateService;
        this.router = router;
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refreshRoomAvai = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faRedo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRedo"];
        this.roomAvaiData = [];
        this.error = '';
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["PAGES"].bookingDetails) {
                return;
            }
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_4__["ACTIONS"].nextStep) {
                this.changeToNextStep();
            }
            else if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_4__["ACTIONS"].backStep) {
                this.changeToPreviousStep();
            }
        });
    }
    ngOnInit() {
        this.hubWalkin.setStep(2);
        this.bookingData = Object.assign({}, this.hubWalkin.getBookingData());
        this.initData(this.bookingData);
    }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
    }
    initData(guestData) {
        setTimeout(() => {
            this.hubService.setLoading(true);
        }, 0);
        this.bookingData = Object.assign(Object.assign({}, this.bookingData), guestData);
        this.bookingService
            .getTotalRate({
            ArrivalDate: this.bookingData.arrivalDate || moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD'),
            DepartDate: this.bookingData.departDate || moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD'),
            ArrivalTime: this.bookingData.arrivalTime,
            DepartTime: this.bookingData.departTime,
            RoomBocked: this.bookingData.roomCode,
            RoomType: this.bookingData.roomTypeCode,
            NoOfAdults: this.bookingData.adult,
            NoOfChild: this.bookingData.child,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((res) => {
            if (res.metadata && res.metadata[0]) {
                this.totalRateData = res.metadata[0];
                return this.roomAvaiService.getRoomAvailabitlity(this.bookingData.arrivalDate, this.bookingData.departDate, true);
            }
            else {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])({
                    code: '',
                    message: this.translateService.instant('msg.errorGetTotalRate'),
                    useToast: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTruckMonster"],
                });
            }
        }))
            .subscribe((res) => {
            if (res.statusCode === 200 && res.metadata) {
                this.roomAvaiData = res.metadata
                    .map((item) => (Object.assign(Object.assign({}, item), { buildingCode: `${item.buildingCode}` })));
                // .filter(
                //   (item) => item?.roomTypeCode === this.bookingData.roomTypeCode
                // );
                if (this.roomAvaiData[0]) {
                    this.changeRoomCode(this.roomAvaiData[0].roomCode);
                }
            }
            else {
                this.error = res.message || '';
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])({
                    code: '',
                    message: this.translateService.instant('msg.errorGetTotalRate'),
                    useToast: false,
                });
            }
        }, (err) => {
            if (err.useToast) {
                this.hubService.error((err === null || err === void 0 ? void 0 : err.message) ||
                    this.translateService.instant('msg.errorHandlingRequest'));
            }
        }).add(() => {
            this.hubService.setLoading(false);
        });
    }
    changeRoomCode(roomCode) {
        this.bookingData.roomCode = roomCode;
    }
    accept() {
        this.changeToNextStep();
    }
    changeToNextStep() {
        // this.nextStep.emit({
        //   ...this.bookingData,
        // });
        this.hubWalkin.setBookingData(this.bookingData);
        this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["PAGES"].checkinQr}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_3__["STEPS"].step3}`]);
    }
    changeToPreviousStep() {
        this.backStep.emit();
    }
    onSelectRoom(room) {
        this.changeRoomCode(room.roomCode);
    }
    refresh() {
        this.initData(this.bookingData);
    }
    /**
     * DISPLAY
     */
    displayArrival() {
        return moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.arrivalDate).format('DD/MM/yyyy') || '';
    }
    displayDepart() {
        return moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.departDate).format('DD/MM/yyyy') || '';
    }
    displayNumNight() {
        if (this.bookingData.arrivalDate === this.bookingData.departDate) {
            return `1`;
        }
        const start = moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.arrivalDate);
        const end = moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.departDate);
        return `${end.startOf('day').diff(start.startOf('day'), 'd')}`;
    }
    displayTotal() {
        var _a, _b, _c;
        const total = (((_a = this.totalRateData) === null || _a === void 0 ? void 0 : _a.rate) || 0) +
            (((_b = this.totalRateData) === null || _b === void 0 ? void 0 : _b.tax1) || 0) +
            (((_c = this.totalRateData) === null || _c === void 0 ? void 0 : _c.tax2) || 0);
        return total || 0;
    }
}
BookingDetailsComponent.ɵfac = function BookingDetailsComponent_Factory(t) { return new (t || BookingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_7__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_9__["HubWalkinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_10__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_room_availability_room_availability_service__WEBPACK_IMPORTED_MODULE_11__["RoomAvailabilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"])); };
BookingDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingDetailsComponent, selectors: [["app-booking-details"]], outputs: { nextStep: "nextStep", backStep: "backStep", refreshRoomAvai: "refreshRoomAvai" }, decls: 104, vars: 53, consts: [[1, "d-flex", "flex-column", "wrapper"], [1, "text-grey-dark", "font-weight-600", "my-3"], [1, "card", "card-box-shadow", "my-3"], [1, "card-body"], [1, "row", "font-weight-600"], [1, "col-3"], [1, "col-9"], [1, "text-primary", "text-uppercase"], [1, "dropdown-divider"], ["st", ""], [1, "text-primary"], [1, "row", "font-weight-600", "mt-2"], [1, "col"], [1, "ml-3", 3, "icon", "click"], [1, "avails-room-block"], ["fxLayout", "row", "fxLayoutAlign", "none center", "class", "h-100 w-100", 4, "ngIf"], ["class", "d-flex flex-row", 4, "ngIf"], [1, "d-flex", "flex-row", "justify-content-between", "font-weight-600"], [1, "ks-text-align-right", "text-primary"], [1, "d-flex", "flex-row", "justify-content-around", "w-100", "mt-3", "mb-3"], ["className", "text-uppercase btn-primary w-100", 1, "w-80", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "none center", 1, "h-100", "w-100"], [1, "text-danger"], [1, "fa", "fa-exclamation-triangle"], [1, "d-flex", "flex-row"], [1, "flex-grow-1", 2, "background-color", "#fff"], ["id", "room-list-scroll", "fxLayout", "row wrap", "fxLayoutAlign", "start", 1, "w-100", "room-list-container"], ["class", "room-container", 4, "ngFor", "ngForOf"], [1, "room-container"], [1, "room-card", 3, "click"], [1, "w-100", "h-100", "d-flex", "flex-row", "justify-content-center", "align-items-center"]], template: function BookingDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Ch\u1ECDn ph\u00F2ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingDetailsComponent_Template_fa_icon_click_56_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, BookingDetailsComponent_div_60_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, BookingDetailsComponent_div_61_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "app-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingDetailsComponent_Template_app_button_click_101_listener() { return ctx.changeToNextStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 27, "bookingCreate.bookingInformation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 29, "bookingCreate.fullName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bookingData.guestName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 31, "bookingCreate.from"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayArrival());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 33, "bookingCreate.to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayDepart());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 35, "bookingCreate.numNight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayNumNight());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 37, "bookingCreate.room"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.bookingData.roomCode, " (", ctx.bookingData.roomTypeCode, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 39, "bookingCreate.building"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bookingData.buildingCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faRedo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 41, "bookingCreate.payment"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 43, "bookingCreate.roomRate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.utilService.formatMoney(ctx.totalRateData == null ? null : ctx.totalRateData.rate), " VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 45, "bookingCreate.taxRate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.utilService.formatMoney(ctx.totalRateData == null ? null : ctx.totalRateData.tax1), " VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 47, "bookingCreate.serviceCharge"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.utilService.formatMoney(ctx.totalRateData == null ? null : ctx.totalRateData.tax2), " VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 49, "bookingCreate.totalRate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.utilService.formatMoney(ctx.displayTotal()), " VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](103, 51, "flowDetect.btnContinue"), " ");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__["ButtonComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [".room-list-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  -ms-overflow-style: scroll;\n  height: 100px;\n  -webkit-mask-image: -webkit-linear-gradient(top, black 80%, rgba(0, 0, 0, 0));\n  \n  \n}\n.room-list-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 25px;\n}\n.room-list-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.room-list-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--green-light);\n}\n.room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 150px;\n  height: 150px;\n  border-radius: 5px;\n  padding: 3px;\n  color: var(--primary);\n  border: 0.5px solid #71905F;\n  background-color: var(--white);\n}\n.room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card.booked[_ngcontent-%COMP%] {\n  color: var(--grey);\n  border: 0.5px solid var(--grey-dark);\n  background-color: var(--light);\n}\n.room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card.active[_ngcontent-%COMP%] {\n  background-color: var(--green-light);\n  color: var(--white);\n  border: 0.5px solid var(--green-light);\n}\n@media (min-width: 768px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 200;\n  }\n}\n@media (min-width: 992px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 80px;\n  }\n}\n@media (min-width: 1200px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 450px;\n  }\n}\n@media (min-width: 1543px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 835px;\n  }\n  .room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .room-list-container[_ngcontent-%COMP%]   .room-container[_ngcontent-%COMP%]   .room-card[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    border-radius: 10px;\n    padding: 5px;\n    cursor: pointer;\n    box-shadow: 3px 3px 5px 6px #ccc;\n  }\n}\n@media (min-width: 3000px) {\n  .room-list-container[_ngcontent-%COMP%] {\n    height: 1400px;\n  }\n}\n.selected-block[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  color: var(--white);\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJvb2tpbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBRUEsYUFwQm9CO0VBcUJwQiw2RUFBQTtFQVFBLFVBQUE7RUFLQSxXQUFBO0FBOUJGO0FBb0JFO0VBRUUsV0FBQTtBQW5CSjtBQXVCRTtFQUNFLG1CQUFBO0FBckJKO0FBeUJFO0VBQ0UsOEJBQUE7QUF2Qko7QUEwQkU7RUFDRSxZQUFBO0FBeEJKO0FBMEJJO0VBQ0UsZUFBQTtFQUNBLFlBcENZO0VBcUNaLGFBdENhO0VBdUNiLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQXhCTjtBQTBCTTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtBQXhCUjtBQTJCTTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQXpCUjtBQ2xCRTtFRGlERTtJQUNFLFdBbkVnQjtFQXVDcEI7QUFDRjtBQ2pCRTtFRGlERTtJQUNFLGFBeEVnQjtFQTJDcEI7RUFnQ007SUFDRSxZQXJFWTtJQXNFWixXQXJFVztFQXVDbkI7QUFDRjtBQ3BCRTtFRHdERTtJQUNFLGFBcEZnQjtFQW1EcEI7QUFDRjtBQ2JFO0VEa0RFO0lBQ0UsYUF6RmtCO0VBdUR0QjtFQW9DSTtJQUNFLFlBQUE7RUFsQ047RUFvQ007SUFDRSxZQXJGYTtJQXNGYixhQXZGYztJQXdGZCxtQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZ0NBQUE7RUFsQ1I7QUFDRjtBQ3ZCRTtFRCtERTtJQUNFLGNBM0dtQjtFQXNFdkI7QUFDRjtBQTBDQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBdkNGIiwiZmlsZSI6ImJvb2tpbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zJztcclxuXHJcblxyXG4kaGVpZ2h0LXJvb20tbGlzdC1zbTogMTAwcHg7XHJcbiRoZWlnaHQtcm9vbS1saXN0LW1kOiAyMDA7XHJcbiRoZWlnaHQtcm9vbS1saXN0LWxnOiA0MDBweDtcclxuJGhlaWdodC1yb29tLWxpc3QteGw6IDQ1MHB4O1xyXG4kaGVpZ2h0LXJvb20tbGlzdC14eHhsOiA4MzVweDtcclxuJGhlaWdodC1yb29tLWxpc3QteHh4eGw6IDE0MDBweDtcclxuXHJcbiRyb29tLWNhcmQtaGVpZ2h0OiAxNTBweDtcclxuJHJvb20tY2FyZC13aWR0aDogMTUwcHg7XHJcbiRyb29tLWNhcmQtaGVpZ2h0LWxnOiA4MHB4O1xyXG4kcm9vbS1jYXJkLXdpZHRoLWxnOiA4MHB4O1xyXG4kcm9vbS1jYXJkLWhlaWdodC14bDogMTUwcHg7XHJcbiRyb29tLWNhcmQtd2lkdGgteGw6IDE1MHB4O1xyXG4kcm9vbS1jYXJkLWhlaWdodC14eHhsOiAzMDBweDtcclxuJHJvb20tY2FyZC13aWR0aC14eHhsOiAzMDBweDtcclxuXHJcbi5yb29tLWxpc3QtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbDtcclxuICAvLyBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0LXJvb20tbGlzdC1zbTtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAxKSA4MCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG5cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLyogVHJhY2sgKi9cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgLyogSGFuZGxlICovXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tbGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLnJvb20tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAucm9vbS1jYXJkIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogJHJvb20tY2FyZC13aWR0aDtcclxuICAgICAgaGVpZ2h0OiAkcm9vbS1jYXJkLWhlaWdodDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICM3MTkwNUY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAgICYuYm9va2VkIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSk7XHJcbiAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkIHZhcigtLWdyZXktZGFyayk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tbGlnaHQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkIHZhcigtLWdyZWVuLWxpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbWQge1xyXG4gICAgJiB7XHJcbiAgICAgIGhlaWdodDogJGhlaWdodC1yb29tLWxpc3QtbWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsZyB7XHJcbiAgICAmIHtcclxuICAgICAgaGVpZ2h0OiAkaGVpZ2h0LXJvb20tbGlzdC1sZztcclxuXHJcbiAgICAgIC5yb29tLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLnJvb20tY2FyZCB7XHJcbiAgICAgICAgICBoZWlnaHQ6ICRyb29tLWNhcmQtaGVpZ2h0LWxnO1xyXG4gICAgICAgICAgd2lkdGg6ICRyb29tLWNhcmQtd2lkdGgtbGc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSB4bCB7XHJcbiAgICAmIHtcclxuICAgICAgaGVpZ2h0OiAkaGVpZ2h0LXJvb20tbGlzdC14bDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHh4eGwge1xyXG4gICAgJiB7XHJcbiAgICAgIGhlaWdodDogJGhlaWdodC1yb29tLWxpc3QteHh4bDtcclxuXHJcbiAgICAgIC5yb29tLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgICAgICAucm9vbS1jYXJkIHtcclxuICAgICAgICAgIHdpZHRoOiAkcm9vbS1jYXJkLXdpZHRoLXh4eGw7XHJcbiAgICAgICAgICBoZWlnaHQ6ICRyb29tLWNhcmQtaGVpZ2h0LXh4eGw7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSB4eHh4bCB7XHJcbiAgICAmIHtcclxuICAgICAgaGVpZ2h0OiAkaGVpZ2h0LXJvb20tbGlzdC14eHh4bDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uc2VsZWN0ZWQtYmxvY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuIiwiQG1peGluIGdlbi10ZXh0KCRmb250LXNpemUpIHtcclxuICBmb250LXNpemU6IHZhcigkZm9udC1zaXplKTtcclxuICBsaW5lLWhlaWdodDogdmFyKCRmb250LXNpemUpO1xyXG59XHJcblxyXG4kc20td2lkdGg6IDU3NnB4O1xyXG4kbWQtd2lkdGg6IDc2OHB4O1xyXG4kbGctd2lkdGg6IDk5MnB4O1xyXG4keGwtd2lkdGg6IDEyMDBweDtcclxuJHh4bC13aWR0aDogMTQwMHB4O1xyXG4keHh4bC13aWR0aDogMTU0M3B4O1xyXG4keHh4eGwtd2lkdGg6IDMwMDBweDtcclxuXHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzbS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbWQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGxnLXdpZHRofSl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "PQve":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/checkin/components/booking-code/booking-code.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BookingCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCodeComponent", function() { return BookingCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/booking/booking.service */ "RnX0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");












function BookingCodeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BookingCodeComponent {
    constructor(hubService, bookingService, router, translateService, hubWalkin) {
        this.hubService = hubService;
        this.bookingService = bookingService;
        this.router = router;
        this.translateService = translateService;
        this.hubWalkin = hubWalkin;
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.redirectScanQR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bookingCode = '';
        this.hubSubcription = null;
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].bookingCode) {
                return;
            }
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].nextStep) {
                this.submit();
            }
            else if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].backStep) {
                this.changeToPreviousStep();
            }
        });
    }
    ngOnInit() {
        // this.initKeyboard();
    }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
    }
    submit() {
        if (!this.bookingCode) {
            this.hubService.error(this.translateService.instant('msg.notEnterBookingCode'));
            return;
        }
        const trimBookingCode = this.bookingCode.trim();
        if (trimBookingCode === '') {
            this.hubService.error(this.translateService.instant('msg.notEnterBookingCode'));
            return;
        }
        this.getBooking(trimBookingCode);
    }
    getBooking(rsvCode) {
        this.hubService.setLoading(true);
        const model = {
            ReservationNo: rsvCode,
        };
        this.bookingService
            .searchBooking(model)
            .subscribe((res) => {
            if (res.statusCode === 200 && res.metadata) {
                const data = res.metadata[0];
                // this.changeToNextStep({ ...(data || {}), resvNo: rsvCode });
                if (data) {
                    this.changeToNextStep(Object.assign(Object.assign({}, data), { resvNo: rsvCode }));
                }
                else {
                    let msg = `${this.translateService.instant('msg.notFoundBooking')} <p class="work-break-all">${rsvCode}</p>`;
                    this.hubService.error(msg);
                }
            }
            else {
                this.hubService.error(this.translateService.instant(`msg.errorSearchBooking`));
                // this.hubService.error(`Có sự cố xảy ra trong quá trình tìm kiếm`);
            }
        }, () => {
            this.hubService.error(this.translateService.instant(`msg.errorSearchBooking`));
            // this.hubService.error(`Có sự cố xảy ra trong quá trình tìm kiếm`);
        })
            .add(() => {
            this.hubService.setLoading(false);
        });
    }
    /**
     *
     * KEY BOARD
     */
    // initKeyboard() {
    //   this.focusInputBookingCode();
    //   this.keyboard = new Keyboard({
    //     onChange: input => this.onChange(input),
    //     onKeyPress: button => this.onKeyPress(button)
    //   });
    //   document.addEventListener("keydown", event => {
    //     if (event.key === "Shift") {
    //       this.handleShift(event);
    //     }
    //     if (event.key === "CapsLock") {
    //       this.handleShift(event);
    //     }
    //   });
    // }
    // onChange(input) {
    //   this.bookingCode = input;
    // }
    // onKeyPress(button) {
    //   if (button === "{shift}" || button === "{lock}") {
    //     this.handleShift(null);
    //   }
    // }
    // onInputChange = (event: any) => {
    //   this.keyboard.setInput(event.target.value);
    // };
    // handleShift(event) {
    //   let currentLayout = this.keyboard.options.layoutName;
    //   let shiftToggle = currentLayout === "default" ? "shift" : "default";
    //   /**
    //    * If phyisical keyboard's CapsLock is enabled
    //    */
    //   if (event && event.getModifierState("CapsLock")) {
    //     shiftToggle = "shift";
    //   }
    //   this.keyboard.setOptions({
    //     layoutName: shiftToggle
    //   });
    // }
    /**
     *
     * NAVIGATE
     */
    changeToNextStep(data) {
        // this.nextStep.emit(data);
        this.hubWalkin.setBookingData(data);
        this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].checkinCode}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step2}`]);
    }
    changeToPreviousStep() {
        this.router.navigateByUrl('/options');
    }
}
BookingCodeComponent.ɵfac = function BookingCodeComponent_Factory(t) { return new (t || BookingCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_7__["HubWalkinService"])); };
BookingCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingCodeComponent, selectors: [["app-booking-code"]], outputs: { nextStep: "nextStep", redirectScanQR: "redirectScanQR" }, decls: 12, vars: 8, consts: [[1, "d-flex", "flex-column", "h-100", "justify-content-between", "wrapper"], [1, "flex-grow-1"], [1, "font-weight-thin", "my-5", "text-grey-dark", "font-weight-600"], [1, "d-flex", "flex-row", "justify-content-center", "my-5"], ["id", "input-booking-code", "type", "text", 1, "input-underline", 3, "ngModel", "disabled", "ngModelChange", "keyup.enter"], ["class", "keyboard-container my-3", 4, "ngIf"], [1, "d-flex", "flex-row", "justify-content-around", "w-100", "mt-3", "mb-3"], ["className", "text-uppercase btn-primary w-100", 1, "w-80", 3, "click"], [1, "keyboard-container", "my-3"], [1, "simple-keyboard"]], template: function BookingCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingCodeComponent_Template_input_ngModelChange_6_listener($event) { return ctx.bookingCode = $event; })("keyup.enter", function BookingCodeComponent_Template_input_keyup_enter_6_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookingCodeComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingCodeComponent_Template_app_button_click_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "bookingCode.instruction"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "flowDetect.btnContinue"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".hg-theme-default[_ngcontent-%COMP%]{background-color:#ececec;border-radius:5px;box-sizing:border-box;font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;overflow:hidden;padding:5px;touch-action:manipulation;-webkit-user-select:none;user-select:none;width:100%}.hg-theme-default[_ngcontent-%COMP%]   .hg-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{pointer-events:none}.hg-theme-default[_ngcontent-%COMP%]   button.hg-button[_ngcontent-%COMP%]{border-width:0;font-size:inherit;outline:0}.hg-theme-default[_ngcontent-%COMP%]   .hg-button[_ngcontent-%COMP%]{display:inline-block;flex-grow:1}.hg-theme-default[_ngcontent-%COMP%]   .hg-row[_ngcontent-%COMP%]{display:flex}.hg-theme-default[_ngcontent-%COMP%]   .hg-row[_ngcontent-%COMP%]:not(:last-child){margin-bottom:5px}.hg-theme-default[_ngcontent-%COMP%]   .hg-row[_ngcontent-%COMP%]   .hg-button[_ngcontent-%COMP%]:not(:last-child){margin-right:5px}.hg-theme-default[_ngcontent-%COMP%]   .hg-row[_ngcontent-%COMP%]   .hg-button-container[_ngcontent-%COMP%]{margin-right:5px}.hg-theme-default[_ngcontent-%COMP%]   .hg-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{margin-right:0}.hg-theme-default[_ngcontent-%COMP%]   .hg-row[_ngcontent-%COMP%]   .hg-button-container[_ngcontent-%COMP%]{display:flex}.hg-theme-default[_ngcontent-%COMP%]   .hg-button[_ngcontent-%COMP%]{-webkit-tap-highlight-color:rgba(0,0,0,0);align-items:center;background:#fff;border-bottom:1px solid #b5b5b5;border-radius:5px;box-shadow:0 0 3px -1px rgba(0,0,0,.3);box-sizing:border-box;cursor:pointer;display:flex;height:40px;justify-content:center;padding:5px}.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-standardBtn[_ngcontent-%COMP%]{width:20px}.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-activeButton[_ngcontent-%COMP%]{background:#efefef}.hg-theme-default.hg-layout-numeric[_ngcontent-%COMP%]   .hg-button[_ngcontent-%COMP%]{align-items:center;display:flex;height:60px;justify-content:center;width:33.3%}.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-button-numpadadd[_ngcontent-%COMP%], .hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-button-numpadenter[_ngcontent-%COMP%]{height:85px}.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-button-numpad0[_ngcontent-%COMP%]{width:105px}.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-button-com[_ngcontent-%COMP%]{max-width:85px}.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-standardBtn.hg-button-at[_ngcontent-%COMP%]{max-width:45px}.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-selectedButton[_ngcontent-%COMP%]{background:rgba(5,25,70,.53);color:#fff}.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-standardBtn[data-skbtn=\".com\"][_ngcontent-%COMP%]{max-width:82px}.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-standardBtn[data-skbtn=\"@\"][_ngcontent-%COMP%]{max-width:60px}.hg-candidate-box[_ngcontent-%COMP%]{background:#ececec;border-bottom:2px solid #b5b5b5;border-radius:5px;display:inline-flex;margin-top:-10px;max-width:272px;position:absolute;transform:translateY(-100%);-webkit-user-select:none;user-select:none}ul.hg-candidate-box-list[_ngcontent-%COMP%]{display:flex;flex:1;list-style:none;margin:0;padding:0}li.hg-candidate-box-list-item[_ngcontent-%COMP%]{align-items:center;display:flex;height:40px;justify-content:center;width:40px}li.hg-candidate-box-list-item[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.03);cursor:pointer}li.hg-candidate-box-list-item[_ngcontent-%COMP%]:active{background:rgba(0,0,0,.1)}.hg-candidate-box-prev[_ngcontent-%COMP%]:before{content:\"\u25C4\"}.hg-candidate-box-next[_ngcontent-%COMP%]:before{content:\"\u25BA\"}.hg-candidate-box-next[_ngcontent-%COMP%], .hg-candidate-box-prev[_ngcontent-%COMP%]{align-items:center;background:#d0d0d0;color:#969696;cursor:pointer;display:flex;padding:0 10px}.hg-candidate-box-next[_ngcontent-%COMP%]{border-bottom-right-radius:5px;border-top-right-radius:5px}.hg-candidate-box-prev[_ngcontent-%COMP%]{border-bottom-left-radius:5px;border-top-left-radius:5px}.hg-candidate-box-btn-active[_ngcontent-%COMP%]{color:#444}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztFQVVFLENBQUMsa0JBQWtCLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLDRHQUE0RyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsd0JBQXdCLENBQTRDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxrQ0FBa0MsbUJBQW1CLENBQUMsbUNBQW1DLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLG9CQUFvQixDQUFDLFdBQVcsQ0FBQywwQkFBMEIsWUFBWSxDQUFDLDJDQUEyQyxpQkFBaUIsQ0FBQyxzREFBc0QsZ0JBQWdCLENBQUMsK0NBQStDLGdCQUFnQixDQUFDLHlDQUF5QyxjQUFjLENBQUMsK0NBQStDLFlBQVksQ0FBQyw2QkFBNkIseUNBQXlDLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLCtCQUErQixDQUFDLGlCQUFpQixDQUFDLHNDQUFzQyxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyw0Q0FBNEMsVUFBVSxDQUFDLDZDQUE2QyxrQkFBa0IsQ0FBQywrQ0FBK0Msa0JBQWtCLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsb0dBQW9HLFdBQVcsQ0FBQywrQ0FBK0MsV0FBVyxDQUFDLDJDQUEyQyxjQUFjLENBQUMseURBQXlELGNBQWMsQ0FBQywrQ0FBK0MsNEJBQTRCLENBQUMsVUFBVSxDQUFDLCtEQUErRCxjQUFjLENBQUMsNERBQTRELGNBQWMsQ0FBQyxrQkFBa0Isa0JBQWtCLENBQUMsK0JBQStCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLHdCQUF3QixDQUE0QyxnQkFBZ0IsQ0FBQyx5QkFBeUIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsb0NBQW9DLDBCQUEwQixDQUFDLGNBQWMsQ0FBQyxxQ0FBcUMseUJBQXlCLENBQUMsOEJBQThCLFdBQVcsQ0FBQyw4QkFBOEIsV0FBVyxDQUFDLDhDQUE4QyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLDhCQUE4QixDQUFDLDJCQUEyQixDQUFDLHVCQUF1Qiw2QkFBNkIsQ0FBQywwQkFBMEIsQ0FBQyw2QkFBNkIsVUFBVSIsImZpbGUiOiJpbmRleC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIFxuICogICBzaW1wbGUta2V5Ym9hcmQgdjMuMS40NVxuICogICBodHRwczovL2dpdGh1Yi5jb20vaG9kZ2VmL3NpbXBsZS1rZXlib2FyZFxuICpcbiAqICAgQ29weXJpZ2h0IChjKSBGcmFuY2lzY28gSG9kZ2UgKGh0dHBzOi8vZ2l0aHViLmNvbS9ob2RnZWYpIGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiAgIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogICBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovLmhnLXRoZW1lLWRlZmF1bHR7YmFja2dyb3VuZC1jb2xvcjojZWNlY2VjO2JvcmRlci1yYWRpdXM6NXB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LWZhbWlseTpIZWx2ZXRpY2FOZXVlLUxpZ2h0LEhlbHZldGljYSBOZXVlIExpZ2h0LEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxMdWNpZGEgR3JhbmRlLHNhbnMtc2VyaWY7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6NXB4O3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3dpZHRoOjEwMCV9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbiBzcGFue3BvaW50ZXItZXZlbnRzOm5vbmV9LmhnLXRoZW1lLWRlZmF1bHQgYnV0dG9uLmhnLWJ1dHRvbntib3JkZXItd2lkdGg6MDtmb250LXNpemU6aW5oZXJpdDtvdXRsaW5lOjB9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztmbGV4LWdyb3c6MX0uaGctdGhlbWUtZGVmYXVsdCAuaGctcm93e2Rpc3BsYXk6ZmxleH0uaGctdGhlbWUtZGVmYXVsdCAuaGctcm93Om5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTo1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLXJvdyAuaGctYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0OjVweH0uaGctdGhlbWUtZGVmYXVsdCAuaGctcm93IC5oZy1idXR0b24tY29udGFpbmVye21hcmdpbi1yaWdodDo1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLXJvdz5kaXY6bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0uaGctdGhlbWUtZGVmYXVsdCAuaGctcm93IC5oZy1idXR0b24tY29udGFpbmVye2Rpc3BsYXk6ZmxleH0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9uey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2I1YjViNTtib3JkZXItcmFkaXVzOjVweDtib3gtc2hhZG93OjAgMCAzcHggLTFweCByZ2JhKDAsMCwwLC4zKTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O2hlaWdodDo0MHB4O2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzo1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1zdGFuZGFyZEJ0bnt3aWR0aDoyMHB4fS5oZy10aGVtZS1kZWZhdWx0IC5oZy1idXR0b24uaGctYWN0aXZlQnV0dG9ue2JhY2tncm91bmQ6I2VmZWZlZn0uaGctdGhlbWUtZGVmYXVsdC5oZy1sYXlvdXQtbnVtZXJpYyAuaGctYnV0dG9ue2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7aGVpZ2h0OjYwcHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDozMy4zJX0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9uLmhnLWJ1dHRvbi1udW1wYWRhZGQsLmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1idXR0b24tbnVtcGFkZW50ZXJ7aGVpZ2h0Ojg1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1idXR0b24tbnVtcGFkMHt3aWR0aDoxMDVweH0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9uLmhnLWJ1dHRvbi1jb217bWF4LXdpZHRoOjg1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1zdGFuZGFyZEJ0bi5oZy1idXR0b24tYXR7bWF4LXdpZHRoOjQ1cHh9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1zZWxlY3RlZEJ1dHRvbntiYWNrZ3JvdW5kOnJnYmEoNSwyNSw3MCwuNTMpO2NvbG9yOiNmZmZ9LmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1zdGFuZGFyZEJ0bltkYXRhLXNrYnRuPVwiLmNvbVwiXXttYXgtd2lkdGg6ODJweH0uaGctdGhlbWUtZGVmYXVsdCAuaGctYnV0dG9uLmhnLXN0YW5kYXJkQnRuW2RhdGEtc2tidG49XCJAXCJde21heC13aWR0aDo2MHB4fS5oZy1jYW5kaWRhdGUtYm94e2JhY2tncm91bmQ6I2VjZWNlYztib3JkZXItYm90dG9tOjJweCBzb2xpZCAjYjViNWI1O2JvcmRlci1yYWRpdXM6NXB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7bWFyZ2luLXRvcDotMTBweDttYXgtd2lkdGg6MjcycHg7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX11bC5oZy1jYW5kaWRhdGUtYm94LWxpc3R7ZGlzcGxheTpmbGV4O2ZsZXg6MTtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowfWxpLmhnLWNhbmRpZGF0ZS1ib3gtbGlzdC1pdGVte2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7aGVpZ2h0OjQwcHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDo0MHB4fWxpLmhnLWNhbmRpZGF0ZS1ib3gtbGlzdC1pdGVtOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDMpO2N1cnNvcjpwb2ludGVyfWxpLmhnLWNhbmRpZGF0ZS1ib3gtbGlzdC1pdGVtOmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEpfS5oZy1jYW5kaWRhdGUtYm94LXByZXY6YmVmb3Jle2NvbnRlbnQ6XCLil4RcIn0uaGctY2FuZGlkYXRlLWJveC1uZXh0OmJlZm9yZXtjb250ZW50Olwi4pa6XCJ9LmhnLWNhbmRpZGF0ZS1ib3gtbmV4dCwuaGctY2FuZGlkYXRlLWJveC1wcmV2e2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOiNkMGQwZDA7Y29sb3I6Izk2OTY5NjtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7cGFkZGluZzowIDEwcHh9LmhnLWNhbmRpZGF0ZS1ib3gtbmV4dHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4fS5oZy1jYW5kaWRhdGUtYm94LXByZXZ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHh9LmhnLWNhbmRpZGF0ZS1ib3gtYnRuLWFjdGl2ZXtjb2xvcjojNDQ0fSJdfQ== */", "[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n.hg-button[_ngcontent-%COMP%] {\n  height: 100px !important;\n}\n.hg-theme-default[_ngcontent-%COMP%]   .hg-button.hg-standardBtn[data-skbtn=\".com\"][_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.input-underline[_ngcontent-%COMP%] {\n  display: block;\n  border: none;\n  padding: 0;\n  width: 16.5ch;\n  background: repeating-linear-gradient(90deg, dimgrey 0, dimgrey 1ch, transparent 0, transparent 1.5ch) 0 100%/16ch 2px no-repeat;\n  font: 5ch droid sans mono, consolas, monospace;\n  letter-spacing: 0.5ch;\n  color: var(--primary);\n}\n.input-underline[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxib29raW5nLWNvZGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQSxrQ0FBQTtBQU9BLDhFQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDL0JGO0FDRUU7RUZtQkY7SUFhSSxxQkFBQTtJQUNBLHVCQUFBO0VDOUJGO0FBQ0Y7QUNFRTtFRmFGO0lBa0JJLGtCQUFBO0lBQ0EsbUJBQUE7RUM3QkY7QUFDRjtBQ0VFO0VGT0Y7SUF1QkkseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFQzVCRjtBQUNGO0FDREU7RUZDRjtJQStCSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDM0JGO0FBQ0Y7QUNRRTtFRmpCRjtJQXVDSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDMUJGO0FBQ0Y7QUFsREE7RUFDRSxZQUFBO0FBcURGO0FBbERBO0VBQ0Usd0JBQUE7QUFxREY7QUFqREU7RUFDRSxnQkFBQTtBQW9ESjtBQTNDQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBTks7RUFPTCxnSUFBQTtFQUdBLDhDQUFBO0VBQ0EscUJBYkk7RUFjSixxQkFBQTtBQTRDRjtBQTFDRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQTRDSiIsImZpbGUiOiJib29raW5nLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL21peGlucyc7XG5cbiRmb250U2l6ZVNtOiAxMnB4O1xuJGZvbnRTaXplTWQ6IDE2cHg7XG4kZm9udFNpemVMZzogMzBweDtcbiRmb250U2l6ZVhsOiA0NXB4O1xuJGZvbnRTaXplWHhsOiA1MHB4O1xuXG4kc3ltYm9sU2l6ZVNtOiA1MHB4O1xuJHN5bWJvbFNpemVNZDogMTBweDtcbiRzeW1ib2xTaXplTGc6IDE1MHB4O1xuJHN5bWJvbFNpemVYbDogMjUwcHg7XG5cbiR2aWRlb1dpZHRoU206IDEwMHB4O1xuJHZpZGVvV2lkdGhNZDogMzAwcHg7XG4kdmlkZW9XaWR0aExnOiAxMDAwcHg7XG4kdmlkZW9XaWR0aFhsOiAxNTAwcHg7XG5cbiRjb2xvci1saWdodDogI0VDRjhFNjtcbiRjb2xvci1hY2NlbnQ6ICAjM0E1MzJDO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjNkY4RjVEO1xuJGNvbG9yLXNlY29uZGFyeTogI0M0QTQ3NDtcbiRjb2xvci1ncmV5LWxpZ2h0OiAjRDRENEQ0O1xuJGNvbG9yLWdyZXk6ICM5RTlFOUU7XG4kY29sb3ItZ3JleS1kYXJrOiAjNzU3NTc1O1xuXG4vKiBDdXN0b21pemUgQm9vdHN0cmFwIFZhcmlhYmxlcyAqL1xuJHRoZW1lLWNvbG9yczogKFxuICBwcmltYXJ5OiAkY29sb3ItYWNjZW50LFxuICBzZWNvbmRhcnk6ICRjb2xvci1zZWNvbmRhcnksXG4gIGxpZ2h0OiAkY29sb3ItbGlnaHQsXG4pO1xuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIC0tZm9udFNpemU6ICN7JGZvbnRTaXplU219O1xuICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVTbX07XG4gIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aFNtfTtcbiAgLS1ncmV5OiAjeyRjb2xvci1ncmV5fTtcbiAgLS1ncmV5LWRhcms6ICN7JGNvbG9yLWdyZXktZGFya307XG4gIC0tZ3JleS1saWdodDogI3skY29sb3ItZ3JleS1saWdodH07XG4gIC0tZ3JlZW4tbGlnaHQ6ICN7JGNvbG9yLWdyZWVuLWxpZ2h0fTtcbiAgLS1saWdodDogI3skY29sb3ItbGlnaHR9O1xuXG4gIEBpbmNsdWRlIHNtIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIH07XG5cbiAgQGluY2x1ZGUgbWQge1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZU1kfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhNZH07XG4gIH07XG5cbiAgQGluY2x1ZGUgbGcge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTk0Ljc1cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDY5LjVweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZUxnfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVMZ307XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTGd9XG4gIH07XG5cbiAgQGluY2x1ZGUgeGwge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTM5cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVYbH07XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTGd9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aExnfTtcbiAgfTtcblxuICBAaW5jbHVkZSB4eHh4bCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxNDBweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVhsfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVYbH07XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoWGx9O1xuICB9O1xufSIsIi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIC0tZm9udFNpemU6IDEycHg7XG4gIC0tc3ltYm9sU2l6ZTogNTBweDtcbiAgLS12aWRlb1dpZHRoOiAxMDBweDtcbiAgLS1ncmV5OiAjOUU5RTlFO1xuICAtLWdyZXktZGFyazogIzc1NzU3NTtcbiAgLS1ncmV5LWxpZ2h0OiAjRDRENEQ0O1xuICAtLWdyZWVuLWxpZ2h0OiAjNkY4RjVEO1xuICAtLWxpZ2h0OiAjRUNGOEU2O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6cm9vdCB7XG4gICAgLS1zeW1ib2xTaXplOiAxMHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxOTQuNzVweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogNjkuNXB4O1xuICAgIC0tZm9udFNpemU6IDMwcHg7XG4gICAgLS1zeW1ib2xTaXplOiAxNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDEwMDBweCA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTM5cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzAwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE0MHB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6IDQ1cHg7XG4gICAgLS1zeW1ib2xTaXplOiAyNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDE1MDBweDtcbiAgfVxufVxuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhnLWJ1dHRvbiB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmhnLXRoZW1lLWRlZmF1bHQgLmhnLWJ1dHRvbi5oZy1zdGFuZGFyZEJ0bltkYXRhLXNrYnRuPVwiLmNvbVwiXSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5pbnB1dC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTYuNWNoO1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDkwZGVnLCBkaW1ncmV5IDAsIGRpbWdyZXkgMWNoLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCAxLjVjaCkgMCAxMDAlLzE2Y2ggMnB4IG5vLXJlcGVhdDtcbiAgZm9udDogNWNoIGRyb2lkIHNhbnMgbW9ubywgY29uc29sYXMsIG1vbm9zcGFjZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNWNoO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4uaW5wdXQtdW5kZXJsaW5lOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufSIsIkBtaXhpbiBnZW4tdGV4dCgkZm9udC1zaXplKSB7XHJcbiAgZm9udC1zaXplOiB2YXIoJGZvbnQtc2l6ZSk7XHJcbiAgbGluZS1oZWlnaHQ6IHZhcigkZm9udC1zaXplKTtcclxufVxyXG5cclxuJHNtLXdpZHRoOiA1NzZweDtcclxuJG1kLXdpZHRoOiA3NjhweDtcclxuJGxnLXdpZHRoOiA5OTJweDtcclxuJHhsLXdpZHRoOiAxMjAwcHg7XHJcbiR4eGwtd2lkdGg6IDE0MDBweDtcclxuJHh4eGwtd2lkdGg6IDE1NDNweDtcclxuJHh4eHhsLXdpZHRoOiAzMDAwcHg7XHJcblxyXG5cclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc20td2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JG1kLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRsZy13aWR0aH0pe1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "QDvO":
/*!************************************************!*\
  !*** ./src/app/shared/constant/audio-files.ts ***!
  \************************************************/
/*! exports provided: AUDIO_FILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIO_FILES", function() { return AUDIO_FILES; });
const AUDIO_FILES = {
    availRoomIntro: 'avail-rooms.intro.mp3',
    bookingCodeIntro: 'booking-code.intro.mp3',
    bookingCreateIntro: 'booking-create.intro.mp3',
    bookingDoneIntro: 'booking-done.intro.mp3',
    scanIdBack: 'scan-id.back.mp3',
    scanIdFront: 'scan-id.front.mp3',
    scanIdFace: 'scan-id.face.mp3',
    scanIdDocType: 'scan-id.type.mp3',
    scanQrIntro: 'scan-qr.intro.mp3',
    bookingDoneError: 'booking-done.error.mp3',
};


/***/ }),

/***/ "RnX0":
/*!*********************************************************************!*\
  !*** ./src/app/modules/checkin/services/booking/booking.service.ts ***!
  \*********************************************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class BookingService {
    constructor(http) {
        this.http = http;
    }
    createBooking(body) {
        const data = {
            guestName: '',
            address: '',
            phone: '',
            arrivalDate: '',
            departDate: '',
            arrivalTime: '',
            departTime: '',
            adult: 0,
            child: 0,
            buildingCode: '',
            roomCode: '',
            roomTypeCode: '',
            rateCode: '',
            seasonCode: '',
            isRateOverride: 'N',
            rateOverrideValue: 0,
            isNetPrice: 'N',
            useMeal: 'N',
            mealCode: '',
            taRecLoc: '',
            remark: '',
            reservationType: '',
            paymentMethod: '',
            paymentAmount: 0,
        };
        Object.keys(data).forEach((key) => {
            data[key] = body[key];
        });
        const endpoint = 'api/booking/create-booking';
        return this.http.post(endpoint, data);
    }
    searchBooking(body) {
        const endpoint = `api/booking/search-booking`;
        return this.http.post(endpoint, body);
    }
    getTotalRate(body) {
        const arrDate = moment__WEBPACK_IMPORTED_MODULE_0__(`${body.ArrivalDate}`).format('MM/DD/YYYY');
        const dptDate = moment__WEBPACK_IMPORTED_MODULE_0__(`${body.DepartDate}`).format('MM/DD/YYYY');
        const arrTime = moment__WEBPACK_IMPORTED_MODULE_0__(`${body.ArrivalTime}`, 'HH:mm', true)
            ? body.ArrivalTime
            : moment__WEBPACK_IMPORTED_MODULE_0__(`${body.ArrivalTime}`).format('HH:mm');
        const dptTime = moment__WEBPACK_IMPORTED_MODULE_0__(`${body.DepartTime}`, 'HH:mm', true)
            ? body.DepartTime
            : moment__WEBPACK_IMPORTED_MODULE_0__(`${body.DepartTime}`).format('HH:mm');
        const endpoint = `api/room/get-total-rate`;
        const data = Object.assign(Object.assign({ Season: 'ALL', RateCode: 'BAR', RateOverride: 'N', IsNetPrice: 'N' }, body), { ArrivalDate: arrDate, DepartDate: dptDate, ArrivalTime: arrTime, DepartTime: dptTime });
        return this.http.post(endpoint, data);
    }
    checkin(body) {
        const endpoint = `api/booking/checkin`;
        return this.http.post(endpoint, body);
    }
}
BookingService.ɵfac = function BookingService_Factory(t) { return new (t || BookingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BookingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookingService, factory: BookingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _shared_constant_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/constant/pages */ "8g6L");
/* harmony import */ var _shared_constant_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/constant/event */ "b3fv");
/* harmony import */ var _shared_components_modal_error_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/modal-error/modal-error/modal-error.component */ "pL5C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/hub/hub.service */ "HItX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _modules_navigation_bar_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/navigation-bar/components/navigation/navigation.component */ "0Jb9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 4);
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AppComponent {
    /**
     *
     */
    constructor(hub, modalServie) {
        this.hub = hub;
        this.modalServie = modalServie;
        this.title = 'kiosk-checkin';
        this.loading = false;
        this.hub.onHub().subscribe((res) => {
            if (res.receiver !== _shared_constant_pages__WEBPACK_IMPORTED_MODULE_0__["PAGES"].root) {
                return;
            }
            if (res.message === _shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].loading) {
                this.loading = res.data || false;
            }
            else if (res.message === _shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].showErrorModal) {
                this.displayError(null, res.data);
            }
        });
    }
    displayError(code, msg) {
        const ref = this.modalServie.open(_shared_components_modal_error_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_2__["ModalErrorComponent"], {
            size: 'xl',
            centered: true
        });
        ref.componentInstance.errorCode = code;
        ref.componentInstance.errorMessage = msg;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 2, consts: [[1, "content", "d-flex", "flex-column"], [1, "spacer"], ["class", "overlay", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "overlay"], [1, "spinner"], [1, "loader"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AppComponent_div_5_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_modules_navigation_bar_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n}\n.ks-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px;\n}\n.ks-href-block[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.card-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-size: 50px;\n}\n.content[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  background-size: cover;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n}\n.spacer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0;\n  margin-bottom: var(--toolbarHeight);\n}\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  display: block;\n  text-align: center;\n  height: 300px;\n  color: #FFF;\n  transform: translateY(-50%);\n  z-index: 999999;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  animation-fill-mode: both;\n  animation: load7 1.8s infinite ease-in-out;\n}\n.loader[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 10px;\n  margin: 80px auto;\n  position: relative;\n  text-indent: -9999em;\n  transform: translateZ(0);\n  animation-delay: -0.16s;\n}\n.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n}\n.loader[_ngcontent-%COMP%]:before {\n  left: -3.5em;\n  animation-delay: -0.32s;\n}\n.loader[_ngcontent-%COMP%]:after {\n  left: 3.5em;\n}\n@keyframes load7 {\n  0%, 80%, 100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n.spinner[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQSxrQ0FBQTtBQU9BLDhFQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDL0JGO0FDRUU7RUZtQkY7SUFhSSxxQkFBQTtJQUNBLHVCQUFBO0VDOUJGO0FBQ0Y7QUNFRTtFRmFGO0lBa0JJLGtCQUFBO0lBQ0EsbUJBQUE7RUM3QkY7QUFDRjtBQ0VFO0VGT0Y7SUF1QkkseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFQzVCRjtBQUNGO0FDREU7RUZDRjtJQStCSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDM0JGO0FBQ0Y7QUNRRTtFRmpCRjtJQXVDSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDMUJGO0FBQ0Y7QUFsREE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBcURGO0FBbERBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFxREY7QUFsREE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBcURGO0FBaERFO0VBQ0Usa0JBQUE7QUFtREo7QUFsREk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQW9ETjtBQWpERTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBbURKO0FBL0NBO0VBRUUsZ0NBQUE7RUFJQSxzQkFBQTtFQUNBLFlBQUE7QUFpREY7QUE5Q0E7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QUFnREY7QUE3Q0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0FBZ0RGO0FBNUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQThDRjtBQTNDQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNELFdBQUE7RUFDQSxZQUFBO0VBQ0MsOEJBQUE7QUE4Q0Y7QUEzQ0E7OztFQUdFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSx5QkFBQTtFQUVBLDBDQUFBO0FBOENGO0FBNUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFHQSx3QkFBQTtFQUVBLHVCQUFBO0FBK0NGO0FBN0NBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUFnREY7QUE5Q0E7RUFDRSxZQUFBO0VBRUEsdUJBQUE7QUFpREY7QUEvQ0E7RUFDRSxXQUFBO0FBa0RGO0FBdENBO0VBQ0U7SUFHRSw0QkFBQTtFQStDRjtFQTdDQTtJQUNFLHVCQUFBO0VBK0NGO0FBQ0Y7QUE1Q0E7RUFDQyxVQUFBO0VBR0Esb0JBQUE7QUE4Q0QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9taXhpbnMnO1xuXG4kZm9udFNpemVTbTogMTJweDtcbiRmb250U2l6ZU1kOiAxNnB4O1xuJGZvbnRTaXplTGc6IDMwcHg7XG4kZm9udFNpemVYbDogNDVweDtcbiRmb250U2l6ZVh4bDogNTBweDtcblxuJHN5bWJvbFNpemVTbTogNTBweDtcbiRzeW1ib2xTaXplTWQ6IDEwcHg7XG4kc3ltYm9sU2l6ZUxnOiAxNTBweDtcbiRzeW1ib2xTaXplWGw6IDI1MHB4O1xuXG4kdmlkZW9XaWR0aFNtOiAxMDBweDtcbiR2aWRlb1dpZHRoTWQ6IDMwMHB4O1xuJHZpZGVvV2lkdGhMZzogMTAwMHB4O1xuJHZpZGVvV2lkdGhYbDogMTUwMHB4O1xuXG4kY29sb3ItbGlnaHQ6ICNFQ0Y4RTY7XG4kY29sb3ItYWNjZW50OiAgIzNBNTMyQztcbiRjb2xvci1ncmVlbi1saWdodDogIzZGOEY1RDtcbiRjb2xvci1zZWNvbmRhcnk6ICNDNEE0NzQ7XG4kY29sb3ItZ3JleS1saWdodDogI0Q0RDRENDtcbiRjb2xvci1ncmV5OiAjOUU5RTlFO1xuJGNvbG9yLWdyZXktZGFyazogIzc1NzU3NTtcblxuLyogQ3VzdG9taXplIEJvb3RzdHJhcCBWYXJpYWJsZXMgKi9cbiR0aGVtZS1jb2xvcnM6IChcbiAgcHJpbWFyeTogJGNvbG9yLWFjY2VudCxcbiAgc2Vjb25kYXJ5OiAkY29sb3Itc2Vjb25kYXJ5LFxuICBsaWdodDogJGNvbG9yLWxpZ2h0LFxuKTtcblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVNtfTtcbiAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplU219O1xuICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhTbX07XG4gIC0tZ3JleTogI3skY29sb3ItZ3JleX07XG4gIC0tZ3JleS1kYXJrOiAjeyRjb2xvci1ncmV5LWRhcmt9O1xuICAtLWdyZXktbGlnaHQ6ICN7JGNvbG9yLWdyZXktbGlnaHR9O1xuICAtLWdyZWVuLWxpZ2h0OiAjeyRjb2xvci1ncmVlbi1saWdodH07XG4gIC0tbGlnaHQ6ICN7JGNvbG9yLWxpZ2h0fTtcblxuICBAaW5jbHVkZSBzbSB7XG4gICAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICB9O1xuXG4gIEBpbmNsdWRlIG1kIHtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVNZH07XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTWR9O1xuICB9O1xuXG4gIEBpbmNsdWRlIGxnIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVMZ307XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTGd9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aExnfVxuICB9O1xuXG4gIEBpbmNsdWRlIHhsIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDEzOXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplWGx9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZUxnfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhMZ307XG4gIH07XG5cbiAgQGluY2x1ZGUgeHh4eGwge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVYbH07XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplWGx9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aFhsfTtcbiAgfTtcbn0iLCIvKiBDdXN0b21pemUgQm9vdHN0cmFwIFZhcmlhYmxlcyAqL1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAtLWZvbnRTaXplOiAxMnB4O1xuICAtLXN5bWJvbFNpemU6IDUwcHg7XG4gIC0tdmlkZW9XaWR0aDogMTAwcHg7XG4gIC0tZ3JleTogIzlFOUU5RTtcbiAgLS1ncmV5LWRhcms6ICM3NTc1NzU7XG4gIC0tZ3JleS1saWdodDogI0Q0RDRENDtcbiAgLS1ncmVlbi1saWdodDogIzZGOEY1RDtcbiAgLS1saWdodDogI0VDRjhFNjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tc3ltYm9sU2l6ZTogMTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTk0Ljc1cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDY5LjVweDtcbiAgICAtLWZvbnRTaXplOiAzMHB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHggO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDEzOXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6IDQ1cHg7XG4gICAgLS1zeW1ib2xTaXplOiAxNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMwMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxNDBweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMjUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxNTAwcHg7XG4gIH1cbn1cblxuaHRtbCwgYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmtzLWNvbCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmtzLWhyZWYtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uY2FyZC1jb250YWluZXIgLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uc3BhY2VyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tdG9vbGJhckhlaWdodCk7XG59XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5sb2FkZXIsXG4ubG9hZGVyOmJlZm9yZSxcbi5sb2FkZXI6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDcgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBsb2FkNyAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9hZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiA4MHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG4ubG9hZGVyOmJlZm9yZSxcbi5sb2FkZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmxvYWRlcjpiZWZvcmUge1xuICBsZWZ0OiAtMy41ZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4ubG9hZGVyOmFmdGVyIHtcbiAgbGVmdDogMy41ZW07XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNyB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAtMS4zZW07XG4gIH1cbiAgNDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkNyB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAtMS4zZW07XG4gIH1cbiAgNDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcbiAgfVxufVxuLnNwaW5uZXIsIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59IiwiQG1peGluIGdlbi10ZXh0KCRmb250LXNpemUpIHtcclxuICBmb250LXNpemU6IHZhcigkZm9udC1zaXplKTtcclxuICBsaW5lLWhlaWdodDogdmFyKCRmb250LXNpemUpO1xyXG59XHJcblxyXG4kc20td2lkdGg6IDU3NnB4O1xyXG4kbWQtd2lkdGg6IDc2OHB4O1xyXG4kbGctd2lkdGg6IDk5MnB4O1xyXG4keGwtd2lkdGg6IDEyMDBweDtcclxuJHh4bC13aWR0aDogMTQwMHB4O1xyXG4keHh4bC13aWR0aDogMTU0M3B4O1xyXG4keHh4eGwtd2lkdGg6IDMwMDBweDtcclxuXHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzbS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbWQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGxnLXdpZHRofSl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "TYxJ":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/checkin/components/booking-date-picker/booking-date-picker.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BookingDatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDatePickerComponent", function() { return BookingDatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







const _c0 = ["btnRerender"];
const _c1 = function (a1) { return ["custom-day", a1]; };
function BookingDatePickerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function BookingDatePickerComponent_ng_template_3_Template_span_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const date_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.hoveredDate = date_r4; })("mouseleave", function BookingDatePickerComponent_ng_template_3_Template_span_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.hoveredDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r4 = ctx.$implicit;
    const focused_r5 = ctx.focused;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx_r2.isDisabled(date_r4) && "disabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("focused", focused_r5)("range", ctx_r2.isRange(date_r4))("faded", ctx_r2.isHovered(date_r4) || ctx_r2.isInside(date_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", date_r4.day, " ");
} }
class BookingDatePickerComponent extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"] {
    constructor(translate) {
        super();
        this.translate = translate;
        this.toDate = null;
        this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hoveredDate = null;
        this.translate.onLangChange.subscribe((event) => {
            var _a;
            // TODO This as a workaround.
            (_a = this.btnRerender) === null || _a === void 0 ? void 0 : _a.nativeElement.click();
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.translate.get('date-picker');
        });
    }
    isDisabled(date) {
        const past = moment__WEBPACK_IMPORTED_MODULE_3__(`${date.year}/${date.month}/${date.day}`);
        const current = moment__WEBPACK_IMPORTED_MODULE_3__(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`).add(1, 'days');
        // console.log('date: ', past, current);
        return past.unix() < current.unix();
    }
    navigateTo(dp) {
        const ngbDatePkrList = document.querySelectorAll('select.custom-select');
        const month = ngbDatePkrList[0]['value'] * 1;
        const year = ngbDatePkrList[1]['value'] * 1;
        dp.navigateTo({ year: year + 1, month, day: 1 });
        dp.navigateTo({ year, month, day: 1 });
    }
    getWeekdayShortName(weekday) {
        var _a;
        const datePickerLang = this.translate.instant('date-picker');
        const weekdays = [];
        if (datePickerLang === null || datePickerLang === void 0 ? void 0 : datePickerLang.weekdays) {
            (_a = Object.keys(datePickerLang === null || datePickerLang === void 0 ? void 0 : datePickerLang.weekdays)) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
                weekdays.push(datePickerLang.weekdays[key]);
            });
        }
        return weekdays[weekday - 1] || '';
    }
    getMonthShortName(month) {
        var _a;
        const datePickerLang = this.translate.instant('date-picker');
        const months = [];
        if (datePickerLang === null || datePickerLang === void 0 ? void 0 : datePickerLang.months) {
            (_a = Object.keys(datePickerLang === null || datePickerLang === void 0 ? void 0 : datePickerLang.months)) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
                months.push(datePickerLang.months[key]);
            });
        }
        return months[month - 1] || '';
    }
    getMonthFullName(month) {
        return this.getMonthShortName(month);
    }
    getDayAriaLabel(date) {
        return `${date.day}-${date.month}-${date.year}`;
    }
    onDateSelection(date) {
        if (this.isDisabled(date)) {
            return;
        }
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
        this.dateSelect.emit({
            fromDate: this.fromDate,
            toDate: this.toDate,
        });
    }
    isHovered(date) {
        return (this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            date.after(this.fromDate) &&
            date.before(this.hoveredDate));
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return (date.equals(this.fromDate) ||
            (this.toDate && date.equals(this.toDate)) ||
            this.isInside(date) ||
            this.isHovered(date));
    }
}
BookingDatePickerComponent.ɵfac = function BookingDatePickerComponent_Factory(t) { return new (t || BookingDatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
BookingDatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookingDatePickerComponent, selectors: [["app-booking-date-picker"]], viewQuery: function BookingDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.btnRerender = _t.first);
    } }, inputs: { fromDate: "fromDate", toDate: "toDate" }, outputs: { dateSelect: "dateSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], useClass: BookingDatePickerComponent },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [[1, "date-picker-range-modal"], ["outsideDays", "hidden", 1, "w-100", "custom-daptepicker", 3, "displayMonths", "dayTemplate", "dateSelect"], ["dp", ""], ["t", ""], [1, "btn-none", 3, "click"], ["btnRerender", ""], [3, "mouseenter", "mouseleave"]], template: function BookingDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-datepicker", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateSelect", function BookingDatePickerComponent_Template_ngb_datepicker_dateSelect_1_listener($event) { return ctx.onDateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BookingDatePickerComponent_ng_template_3_Template, 2, 11, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingDatePickerComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return ctx.navigateTo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayMonths", 1)("dayTemplate", _r1);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepicker"]], styles: [".date-picker-range-modal .custom-daptepicker {\n  border: none;\n}\n  .date-picker-range-modal .ngb-dp-header {\n  background-color: var(--white) !important;\n}\n  .date-picker-range-modal select.custom-select {\n  background: none;\n  border: none;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: 500;\n  font-size: xx-large;\n  color: var(--grey-dark);\n}\n  .date-picker-range-modal select[title=\"Select year\"],   .date-picker-range-modal select[title=\"Select month\"] {\n  pointer-events: none;\n}\n  .date-picker-range-modal button:focus,   .date-picker-range-modal button:active {\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n  .date-picker-range-modal .ngb-dp-arrow,   .date-picker-range-modal .ngb-dp-navigation-select {\n  flex: 0;\n}\n  .date-picker-range-modal .ngb-dp-arrow-btn {\n  display: flex;\n  align-items: center;\n  color: var(--grey);\n}\n  .date-picker-range-modal .ngb-dp-arrow-btn span.ngb-dp-navigation-chevron {\n  font-size: small;\n}\n  .date-picker-range-modal .btn-none {\n  border: none;\n  outline: none;\n  box-shadow: none;\n  width: 0;\n  height: 0;\n  background: transparent;\n}\n  .date-picker-range-modal div.ngb-dp-content {\n  width: 100%;\n}\n  .date-picker-range-modal div.ngb-dp-content .ngb-dp-month {\n  width: 100%;\n}\n  .date-picker-range-modal div.ngb-dp-content .ngb-dp-day,   .date-picker-range-modal div.ngb-dp-content .ngb-dp-week-number,   .date-picker-range-modal div.ngb-dp-content .ngb-dp-weekday {\n  width: 14.2%;\n}\n  .date-picker-range-modal div.ngb-dp-content .ngb-dp-weekdays {\n  border-bottom: 0;\n  background-color: var(--white) !important;\n}\n  .date-picker-range-modal div.ngb-dp-content .ngb-dp-weekday {\n  font-style: normal;\n  font-weight: 400;\n  color: var(--grey);\n}\n  .date-picker-range-modal div.ngb-dp-content .ngb-dp-day {\n  text-align: center;\n  font-weight: 100;\n}\n  .date-picker-range-modal .custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n  font-weight: 100;\n}\n  .date-picker-range-modal .custom-day.focused {\n  background-color: #e6e6e6;\n}\n  .date-picker-range-modal .custom-day.range,   .date-picker-range-modal .custom-day:hover {\n  background-color: var(--green-light);\n  color: white;\n  width: 100%;\n}\n  .date-picker-range-modal .custom-day.faded {\n  background-color: #ECF8E6;\n  color: #3A532C;\n  width: 100%;\n}\n  .date-picker-range-modal .custom-day.disabled {\n  background-color: var(--grey-light);\n  color: var(--white);\n  width: 100%;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJvb2tpbmctZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxZQUFBO0FBREo7QUFJRTtFQUNFLHlDQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhKO0FBTUU7RUFDRSxvQkFBQTtBQUpKO0FBT0U7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FBTEo7QUFRRTs7RUFFRSxPQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUEo7QUFTSTtFQUNFLGdCQUFBO0FBUE47QUFXRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBVEo7QUFZRTtFQUNFLFdBQUE7QUFWSjtBQVlJO0VBQ0UsV0FBQTtBQVZOO0FBY0k7OztFQUdFLFlBQUE7QUFaTjtBQWVJO0VBQ0UsZ0JBQUE7RUFDQSx5Q0FBQTtBQWJOO0FBZ0JJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZE47QUFpQkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBZk47QUFtQkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBakJKO0FBb0JFO0VBQ0UseUJBQUE7QUFsQko7QUFxQkU7O0VBRUUsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQW5CSjtBQXNCRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFwQko7QUF1QkU7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBckJKIiwiZmlsZSI6ImJvb2tpbmctZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhdGUtcGlja2VyLXJhbmdlLW1vZGFsIHtcclxuXHJcbiAgLmN1c3RvbS1kYXB0ZXBpY2tlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmdiLWRwLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHNlbGVjdC5jdXN0b20tc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LWRhcmspO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0W3RpdGxlPVwiU2VsZWN0IHllYXJcIl0sIHNlbGVjdFt0aXRsZT1cIlNlbGVjdCBtb250aFwiXSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpmb2N1cywgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmdiLWRwLWFycm93LFxyXG4gIC5uZ2ItZHAtbmF2aWdhdGlvbi1zZWxlY3Qge1xyXG4gICAgZmxleDogMDtcclxuICB9XHJcblxyXG4gIC5uZ2ItZHAtYXJyb3ctYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xyXG5cclxuICAgIHNwYW4ubmdiLWRwLW5hdmlnYXRpb24tY2hldnJvbntcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tbm9uZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBkaXYubmdiLWRwLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLm5nYi1kcC1tb250aCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubmdiLWRwLWRheSxcclxuICAgIC5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbiAgICAubmdiLWRwLXdlZWtkYXkge1xyXG4gICAgICB3aWR0aDogMTQuMiU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5nYi1kcC13ZWVrZGF5cyB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWdyZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZ2ItZHAtZGF5IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1kYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tZGF5LnJhbmdlLFxyXG4gIC5jdXN0b20tZGF5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWxpZ2h0KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjhFNjtcclxuICAgIGNvbG9yOiAjM0E1MzJDO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWRheS5kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "UEAr":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/checkin/components/scan-identity-card/scan-identity-card.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ScanIdentityCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanIdentityCardComponent", function() { return ScanIdentityCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/booking/booking.service */ "RnX0");
/* harmony import */ var src_app_shared_services_dispenser_dispenser_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/dispenser/dispenser.service */ "8EDh");
/* harmony import */ var src_app_shared_services_lock_card_lock_card_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/lock-card/lock-card.service */ "7NDd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");


















class ScanIdentityCardComponent {
    constructor(hubService, translateService, hubWalkin, router, utilService, bookingService, dispenserService, lockCardService) {
        this.hubService = hubService;
        this.translateService = translateService;
        this.hubWalkin = hubWalkin;
        this.router = router;
        this.utilService = utilService;
        this.bookingService = bookingService;
        this.dispenserService = dispenserService;
        this.lockCardService = lockCardService;
        this.sendGuestInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detectAgain = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alert = {
            errorModal: {
                show: false,
                type: '',
                message: ''
            },
            successModal: {
                show: false,
                type: '',
                message: ''
            },
            successOutside: {
                show: false,
                type: '',
                message: ''
            }
        };
        this.hubSubcription = [];
        this.guestData = {
            guestName: '',
            address: '',
            birth: '',
            expiry: '',
            passportNumber: '',
            passportType: '',
            sex: '',
            nationalityCode: ''
        };
        this.bookingData = {};
        const sub1 = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].scanIdCard) {
                return;
            }
            this.processHubEvent(res);
        });
        this.hubSubcription = [sub1];
    }
    ngOnInit() {
        this.guestData = Object.assign({}, this.hubWalkin.bookingData);
        const page = this.utilService.getCurrentPage();
        console.log('init scan id card: ', page);
        switch (page) {
            case src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].walkin:
                this.hubWalkin.setStep(2);
                break;
            case src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].checkinQr:
                this.hubWalkin.setStep(3);
                break;
            default:
                break;
        }
    }
    ngOnDestroy() {
        this.hubSubcription.forEach(item => item.unsubscribe());
    }
    sendGuestData() {
        // this.sendGuestInfo.emit(this.guest);
    }
    processHubEvent(event) {
        if (event.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].nextStep) {
            this.changeToNextStep();
        }
        else if (event.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].backStep) {
            this.changeToPreviousStep();
        }
    }
    handleNextStep() {
        const page = this.utilService.getCurrentPage();
        if (page === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].walkin) {
            this.changeToNextStep();
            return;
        }
        this.processCard();
    }
    changeToNextStep() {
        const page = this.utilService.getCurrentPage();
        let step = '';
        switch (page) {
            case src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].checkinQr:
                step = src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["STEPS"].step4;
                break;
            case src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].walkin:
                step = src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["STEPS"].step3;
                break;
            default:
                break;
        }
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            this.hubWalkin.setBookingData(Object.assign({}, this.guestData));
            this.router.navigate([`/${page}/${step}`]);
            return;
        }
        if ((this.guestData.passportNumber || '') !== '') {
            this.hubWalkin.setBookingData(Object.assign({}, this.guestData));
            this.router.navigate([`/${page}/${step}`]);
        }
        else {
            this.hubService.error(this.translateService.instant('msg.plsScan'));
        }
    }
    changeToPreviousStep() {
        this.backStep.emit();
    }
    useOtherCard() {
        // this.detectAgain.emit();
        const page = this.utilService.getCurrentPage();
        this.router.navigate([`/${page}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["STEPS"].detect}`]);
    }
    processCard() {
        var _a, _b;
        // this.bookingData = { ...this.bookingData, ...guestData };
        this.hubWalkin.setBookingData(this.guestData);
        console.log('process card | booking data: ', this.guestData);
        this.hubService.setLoading(true);
        this.bookingService
            .checkin({
            resvNo: (_a = this.guestData) === null || _a === void 0 ? void 0 : _a.resvNo,
            roomCode: (_b = this.guestData) === null || _b === void 0 ? void 0 : _b.roomCode,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((res) => {
            if (res.statusCode === 200) {
                return this.dispenserService.moveToRfPos();
            }
            else {
                const message = this.translateService.instant('msg.errorCheckin');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])({ code: res.statusCode, message });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((res) => {
            if (res.code === 0) {
                return this.writeCard();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])({ code: res.code, message: res.message });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((res) => {
            if (res.code === 0) {
                return this.dispenserService.eject();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])({ code: res.code, message: res.message });
            }
        }))
            .subscribe((res) => {
            if (res.code === 0) {
                // this.onVerify({ isDone: true });
                this.hubWalkin.isDoneFlow = true;
            }
            else {
                this.hubService.error(res.message);
                // this.onVerify({ isDone: false });
                this.hubWalkin.isDoneFlow = false;
            }
        }, ({ code, message }) => {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                this.changeToNextStep();
                return;
            }
            this.hubService.error(message);
            // this.onVerify({ isDone: false });
            this.hubWalkin.isDoneFlow = false;
        })
            .add(() => {
            this.hubService.setLoading(false);
        });
    }
    /**
     *
     * Ghi thẻ
     */
    writeCard() {
        const lockArrDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.guestData['arrivalDate']).format('yyyy-MM-DD');
        const lockDeptDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.guestData['departDate']).format('yyyy-MM-DD');
        const lockArrTime = moment__WEBPACK_IMPORTED_MODULE_6__(this.guestData['arrivalTime'], 'HH:mm').format('HH:mm:ss');
        const lockDeptTime = moment__WEBPACK_IMPORTED_MODULE_6__(this.guestData['departTime'], 'HH:mm').format('HH:mm:ss');
        const body = {
            room: this.guestData['roomCode'],
            building: this.guestData['buildingCode'],
            arrival: `${lockArrDate} ${lockArrTime}`,
            departure: `${lockDeptDate} ${lockDeptTime}`,
        };
        return this.lockCardService.writeCard(body);
    }
}
ScanIdentityCardComponent.ɵfac = function ScanIdentityCardComponent_Factory(t) { return new (t || ScanIdentityCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_7__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_9__["HubWalkinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_12__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_dispenser_dispenser_service__WEBPACK_IMPORTED_MODULE_13__["DispenserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_lock_card_lock_card_service__WEBPACK_IMPORTED_MODULE_14__["LockCardService"])); };
ScanIdentityCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScanIdentityCardComponent, selectors: [["app-scan-identity-card"]], outputs: { sendGuestInfo: "sendGuestInfo", backStep: "backStep", detectAgain: "detectAgain" }, decls: 54, vars: 37, consts: [[1, "d-flex", "flex-column", "justify-content-between", "pb-3", "h-100", "wrapper"], [1, "d-flex", "flex-column", 2, "flex-grow", "1"], [1, "text-grey-dark", "tex-center", "my-3"], [1, "input-group", "input-info", "my-3"], [1, "input-group-prepend"], [1, "input-group-text", "font-weight-thin"], ["type", "text", 1, "form-control", "bg-white", "font-weight-thin", 3, "ngModel", "ngModelChange"], ["id", "", 1, "input-group-text", "font-weight-thin"], [1, "input-group", "input-info", "mt-3"], [1, "d-flex", "flex-row", "justify-content-around", "w-100", "btn-fadein"], ["className", "text-uppercase text-primary border-primary w-100", 1, "w-50", 3, "click"], ["className", "text-uppercase btn-primary w-100", 1, "w-45", 3, "click"]], template: function ScanIdentityCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScanIdentityCardComponent_Template_input_ngModelChange_10_listener($event) { return ctx.guestData.guestName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScanIdentityCardComponent_Template_input_ngModelChange_16_listener($event) { return ctx.guestData.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScanIdentityCardComponent_Template_input_ngModelChange_22_listener($event) { return ctx.guestData.birth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScanIdentityCardComponent_Template_input_ngModelChange_28_listener($event) { return ctx.guestData.sex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScanIdentityCardComponent_Template_input_ngModelChange_34_listener($event) { return ctx.guestData.nationalityCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScanIdentityCardComponent_Template_input_ngModelChange_40_listener($event) { return ctx.guestData.expiry = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScanIdentityCardComponent_Template_input_ngModelChange_46_listener($event) { return ctx.guestData.passportNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "app-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanIdentityCardComponent_Template_app_button_click_48_listener() { return ctx.useOtherCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanIdentityCardComponent_Template_app_button_click_51_listener() { return ctx.changeToNextStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 17, "scanIdCard.successText"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 19, "scanIdCard.guestName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.guestData.guestName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 21, "scanIdCard.address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.guestData.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, "scanIdCard.birth"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.guestData.birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 25, "scanIdCard.sex"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.guestData.sex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 27, "scanIdCard.nationalityCode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.guestData.nationalityCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 29, "scanIdCard.expiry"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.guestData.expiry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 31, "scanIdCard.passportNumber"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.guestData.passportNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 33, "scanIdCard.btnUseOther"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 35, "scanIdCard.next"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__["ButtonComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n[_nghost-%COMP%]   .btn-fadein[_ngcontent-%COMP%] {\n  display: block;\n  animation: fadeIn 3s;\n}\n.input-info[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.input-info[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 100%;\n  border-right: 0;\n  border-top: 0;\n  border-left: 0;\n  border-radius: 0;\n  background-color: var(--white);\n  color: var(--grey-dark);\n}\n.input-info[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border-right: 0;\n  border-top: 0;\n  border-left: 0;\n  border-radius: 0;\n  color: var(--grey);\n  text-align: right;\n}\n.input-info[_ngcontent-%COMP%]   input[type=text].form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.img-container-instruction[_ngcontent-%COMP%] {\n  width: var(--videoWidth);\n  text-align: center;\n}\n.img-container-instruction[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n}\n.option-container[_ngcontent-%COMP%] {\n  background: #3F51B5;\n}\n.option-container[_ngcontent-%COMP%]   .entry-container[_ngcontent-%COMP%] {\n  width: 60%;\n  color: #000000;\n}\n.option-container[_ngcontent-%COMP%]   a.entry-container[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.option-container[_ngcontent-%COMP%]   a.entry-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: #0E4269;\n  color: #fff;\n  border: #fff 1px solid;\n}\n@media (min-width: 768px) {\n    .modal-scan .modal-dialog {\n    width: 800px;\n    max-width: 800px !important;\n  }\n}\n@media (min-width: 992px) {\n    .modal-scan .modal-dialog {\n    width: 1000px;\n    max-width: 1000px !important;\n  }\n}\n@media (min-width: 1200px) {\n    .modal-scan .modal-dialog {\n    width: 1500px;\n    max-width: 1500px !important;\n  }\n}\n@media (min-width: 1543px) {\n    .modal-scan .modal-dialog {\n    width: 1800px;\n    max-width: 1800px !important;\n  }\n}\n.progress[_ngcontent-%COMP%] {\n  height: 0.3rem;\n}\n.container-stream[_ngcontent-%COMP%]   .stream[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjYW4taWRlbnRpdHktY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FBREY7QUFPRTtFQUNFO0lBQU8sVUFBQTtFQUlUO0VBSEk7SUFBSyxVQUFBO0VBTVQ7QUFDRjtBQUpFO0VBQ0UsY0FBQTtFQUVBLG9CQUFBO0FBTUo7QUFERTtFQUNFLFVBQUE7QUFJSjtBQUZJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUlOO0FBQUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFJO0VBQ0Usd0JBQUE7RUFDQSwyQkFBQTtBQUVOO0FBR0E7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNFLFlBQUE7QUFBSjtBQUlBO0VBQ0UsbUJBQUE7QUFERjtBQUdFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQUlJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFGTjtBQ25ERTtFRDRERTtJQUNFLFlBQUE7SUFDQSwyQkFBQTtFQUxKO0FBQ0Y7QUNwREU7RUQ2REU7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7RUFOSjtBQUNGO0FDcERFO0VEOERFO0lBQ0UsYUFBQTtJQUNBLDRCQUFBO0VBUEo7QUFDRjtBQzlDRTtFRHlERTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtFQVJKO0FBQ0Y7QUFZQTtFQUNFLGNBQUE7QUFURjtBQWNJO0VBQ0UsVUFBQTtBQVhOIiwiZmlsZSI6InNjYW4taWRlbnRpdHktY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zJztcclxuXHJcbjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgICAgdG8geyBvcGFjaXR5OiAxOyB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICAgIHRvIHsgb3BhY2l0eTogMTsgfVxyXG4gIH1cclxuICBcclxuICAuYnRuLWZhZGVpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gM3M7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAzcztcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1pbmZvIHtcclxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG5cclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgY29sb3I6IHZhcigtLWdyZXktZGFyayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgJi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyLWluc3RydWN0aW9uIHtcclxuICB3aWR0aDogdmFyKC0tdmlkZW9XaWR0aCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzRjUxQjU7XHJcblxyXG4gIC5lbnRyeS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgYS5lbnRyeS1jb250YWluZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzBFNDI2OTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlcjogI2ZmZiAxcHggc29saWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXNjYW4ge1xyXG4gIEBpbmNsdWRlIG1kIHtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGxnIHtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgeGwge1xyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSB4eHhsIHtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICB3aWR0aDogMTgwMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDE4MDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBoZWlnaHQ6IDAuM3JlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1zdHJlYW0ge1xyXG4gIC5zdHJlYW0ge1xyXG4gICAgdmlkZW8ge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gZ2VuLXRleHQoJGZvbnQtc2l6ZSkge1xyXG4gIGZvbnQtc2l6ZTogdmFyKCRmb250LXNpemUpO1xyXG4gIGxpbmUtaGVpZ2h0OiB2YXIoJGZvbnQtc2l6ZSk7XHJcbn1cclxuXHJcbiRzbS13aWR0aDogNTc2cHg7XHJcbiRtZC13aWR0aDogNzY4cHg7XHJcbiRsZy13aWR0aDogOTkycHg7XHJcbiR4bC13aWR0aDogMTIwMHB4O1xyXG4keHhsLXdpZHRoOiAxNDAwcHg7XHJcbiR4eHhsLXdpZHRoOiAxNTQzcHg7XHJcbiR4eHh4bC13aWR0aDogMzAwMHB4O1xyXG5cclxuXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtZC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbGctd2lkdGh9KXtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4eHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "UTnJ":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/checkin/components/booking-done/booking-done.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BookingDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDoneComponent", function() { return BookingDoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












function BookingDoneComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "bookingDone.suucessText"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "bookingDone.serviceText"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "bookingDone.thankText"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faCheckCircle);
} }
function BookingDoneComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingDoneComponent_div_1_Template_app_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.resetStepper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Th\u1EED l\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "bookingError.primaryText"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "bookingError.text.1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "bookingError.text.2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, "bookingError.thankText"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faExclamation);
} }
class BookingDoneComponent {
    constructor(hubService, router, hubWalkin) {
        this.hubService = hubService;
        this.router = router;
        this.hubWalkin = hubWalkin;
        // @Input() isDone = true;
        // @Input() errorMessage = '';
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faCheckCircle = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckCircle"];
        this.faExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExclamation"];
        this.isDone = true;
        this.errorMessage = '';
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].bookingDone) {
                return;
            }
            this.router.navigateByUrl('/options');
        });
    }
    ngOnInit() {
        this.isDone = this.hubWalkin.isDoneFlow;
        this.errorMessage = this.hubWalkin.errorMessageCreateBooking;
        this.hubWalkin.setStep(4);
    }
    finish() {
        this.router.navigateByUrl('/options');
    }
    resetStepper() {
        // this.reset.emit();
        this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].walkin}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_1__["STEPS"].step1}`]);
    }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
    }
}
BookingDoneComponent.ɵfac = function BookingDoneComponent_Factory(t) { return new (t || BookingDoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_6__["HubWalkinService"])); };
BookingDoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingDoneComponent, selectors: [["app-booking-done"]], outputs: { reset: "reset" }, decls: 2, vars: 2, consts: [["class", "success-screen d-flex flex-column wrapper justify-content-center", 4, "ngIf"], ["class", "d-flex flex-column justify-content-between success-screen pb-3 h-100 wrapper", 4, "ngIf"], [1, "success-screen", "d-flex", "flex-column", "wrapper", "justify-content-center"], [1, "font-weight-bold", "text-secondary", "text-center", "text-uppercase", "mt-3"], [1, "font-weight-500", "text-center", "my-4"], [1, "success-icon", "text-secondary", "text-center", "mt-5", 3, "icon"], [1, "d-flex", "flex-column", "justify-content-between", "success-screen", "pb-3", "h-100", "wrapper"], [1, "d-flex", "flex-column"], [1, "font-weight-bold", "text-primary", "text-center", "text-uppercase", "mt-3"], [1, "success-icon", "text-primary", "text-center", "mt-5", 3, "icon"], [1, "d-flex", "flex-row", "justify-content-center", "w-100"], ["className", "text-uppercase btn-primary w-100", 1, "w-80", 3, "click"]], template: function BookingDoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookingDoneComponent_div_0_Template, 11, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingDoneComponent_div_1_Template, 20, 14, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDone);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".success-screen[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: calc(var(--symbolSize) * 3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJvb2tpbmctZG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNDQUFBO0FBQUoiLCJmaWxlIjoiYm9va2luZy1kb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3Mtc2NyZWVuIHtcclxuICAuc3VjY2Vzcy1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zeW1ib2xTaXplKSAqIDMpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "V/fk":
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_card_app_card_app_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-card/app-card/app-card.module */ "N6LZ");
/* harmony import */ var _modal_error_modal_error_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-error/modal-error.module */ "8JL6");
/* harmony import */ var _trans_trans_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trans/trans.module */ "vdLp");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/button.component */ "VkHG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SharedComponentsModule {
}
SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _app_card_app_card_app_card_module__WEBPACK_IMPORTED_MODULE_1__["AppCardModule"],
            _modal_error_modal_error_module__WEBPACK_IMPORTED_MODULE_2__["ModalErrorModule"],
            _trans_trans_module__WEBPACK_IMPORTED_MODULE_3__["TransModule"]
        ], _app_card_app_card_app_card_module__WEBPACK_IMPORTED_MODULE_1__["AppCardModule"],
        _modal_error_modal_error_module__WEBPACK_IMPORTED_MODULE_2__["ModalErrorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _app_card_app_card_app_card_module__WEBPACK_IMPORTED_MODULE_1__["AppCardModule"],
        _modal_error_modal_error_module__WEBPACK_IMPORTED_MODULE_2__["ModalErrorModule"],
        _trans_trans_module__WEBPACK_IMPORTED_MODULE_3__["TransModule"]], exports: [_app_card_app_card_app_card_module__WEBPACK_IMPORTED_MODULE_1__["AppCardModule"],
        _modal_error_modal_error_module__WEBPACK_IMPORTED_MODULE_2__["ModalErrorModule"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]] }); })();


/***/ }),

/***/ "VkHG":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ButtonComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterContentChecked() {
        this.cdr.detectChanges();
    }
    buttonClick(event) {
        event.stopPropagation();
        this.click.emit(event);
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { className: "className", style: "style" }, outputs: { click: "click" }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.buttonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-app font-weight-thin text-white ", ctx.className, "");
    } }, styles: [".btn-app[_ngcontent-%COMP%] {\n  border-radius: 2rem !important;\n  border: 1px solid;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWFwcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "VsLt":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/checkin/components/room-type-info/room-type-info.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RoomTypeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomTypeInfoComponent", function() { return RoomTypeInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");



class RoomTypeInfoComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    roomTypeImage() {
        const file = this.roomType.roomTypeCode.toUpperCase();
        return `assets/images/${file}.jpg`;
    }
}
RoomTypeInfoComponent.ɵfac = function RoomTypeInfoComponent_Factory(t) { return new (t || RoomTypeInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
RoomTypeInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomTypeInfoComponent, selectors: [["app-room-type-info"]], inputs: { roomType: "roomType" }, decls: 9, vars: 2, consts: [[1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "text-primary"], [1, "modal-body"], [1, "card"], [1, "card-img-top", 3, "src"], [1, "modal-footer", "d-flex", "flex-row", "justify-content-center"], ["className", "text-primary border-primary bg-white w-100 text-uppercase font-weight-bold", 1, "w-80", 3, "click"]], template: function RoomTypeInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomTypeInfoComponent_Template_app_button_click_7_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0110\u00F3ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.roomType == null ? null : ctx.roomType.roomTypeName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.roomTypeImage(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tLXR5cGUtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "YSWC":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/checkin/components/booking-create/booking-create.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BookingCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCreateComponent", function() { return BookingCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/booking/booking.service */ "RnX0");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var src_app_shared_services_lock_card_lock_card_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/lock-card/lock-card.service */ "7NDd");
/* harmony import */ var src_app_shared_services_dispenser_dispenser_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/dispenser/dispenser.service */ "8EDh");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");
















class BookingCreateComponent {
    constructor(bookingService, hubService, lockCardService, dispenserService, hubWalkin, utilService, translateService, router) {
        this.bookingService = bookingService;
        this.hubService = hubService;
        this.lockCardService = lockCardService;
        this.dispenserService = dispenserService;
        this.hubWalkin = hubWalkin;
        this.utilService = utilService;
        this.translateService = translateService;
        this.router = router;
        // @Input() bookingData: any;
        // @Input() totalRateData: any;
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = {
            create: false,
        };
        this.totalRateData = {};
        this.bookingData = {};
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].bookingCreate) {
                return;
            }
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_3__["ACTIONS"].nextStep) {
                this.createBooking();
            }
            else if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_3__["ACTIONS"].backStep) {
                this.changeToPreviousStep();
            }
        });
    }
    ngOnInit() {
        this.hubWalkin.setStep(3);
        this.bookingData = Object.assign({}, this.hubWalkin.bookingData);
        this.hubService.setLoading(true);
        this.bookingService
            .getTotalRate({
            ArrivalDate: this.bookingData.arrivalDate,
            DepartDate: this.bookingData.departDate,
            ArrivalTime: this.bookingData.arrivalTime,
            DepartTime: this.bookingData.departTime,
            RoomBocked: this.bookingData.roomCode,
            RoomType: this.bookingData.roomTypeCode,
            NoOfAdults: this.bookingData.adult,
            NoOfChild: this.bookingData.child,
        })
            .subscribe((res) => {
            if (res.metadata && res.metadata[0]) {
                this.totalRateData = res.metadata[0];
            }
            else {
                this.hubService.error(this.translateService.instant('msg.errorGetTotalRate'));
            }
        }, (err) => {
            this.hubService.error(this.translateService.instant('msg.errorGetTotalRate'));
        })
            .add(() => {
            this.hubService.setLoading(false);
        });
    }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
    }
    onSubmit() {
        this.changeToBookingDetails();
    }
    changeToBookingDetails() {
        this.nextStep.emit({ isDone: true });
    }
    changeToPreviousStep() {
        this.backStep.emit();
    }
    createBooking() {
        console.log('BOOKING-CREATE: ', this.bookingData);
        this.hubService.setLoading(true);
        this.bookingService
            .createBooking(this.bookingData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((res) => {
            if (res.statusCode === 200 && res.metadata) {
                return this.dispenserService.moveToRfPos();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])({ code: res.statusCode, message: res.message });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((res) => {
            if (res.code === 0) {
                return this.writeCard();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])({ code: res.code, message: res.message });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((res) => {
            if (res.code === 0) {
                return this.dispenserService.eject();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])({ code: res.code, message: res.message });
            }
        }))
            .subscribe((res) => {
            if (res.code === 0) {
                this.hubWalkin.isDoneFlow = true;
                this.nextStep.emit({ isDone: true });
                this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].walkin}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step4}`]);
            }
            else {
                // this.nextStep.emit({ isDone: false, msg: res.message });
                this.hubWalkin.errorMessageCreateBooking = res.message;
                this.hubWalkin.isDoneFlow = false;
                this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].walkin}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step4}`]);
                // this.hubService.error(res.message);
            }
        }, ({ code, message }) => {
            // this.nextStep.emit({ isDone: false, msg: message });
            this.hubWalkin.errorMessageCreateBooking = message;
            this.hubWalkin.isDoneFlow = false;
            this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].walkin}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step4}`]);
            // this.hubService.error(message);
        })
            .add(() => {
            this.hubService.setLoading(false);
        });
    }
    writeCard() {
        const lockArrDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.arrivalDate).format('yyyy-MM-DD');
        const lockDeptDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.departDate).format('yyyy-MM-DD');
        const lockArrTime = moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.arrivalTime, 'HH:mm').format('HH:mm:ss');
        const lockDeptTime = moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.departTime, 'HH:mm').format('HH:mm:ss');
        const body = {
            room: this.bookingData.roomCode,
            building: this.bookingData.buildingCode,
            arrival: `${lockArrDate} ${lockArrTime}`,
            departure: `${lockDeptDate} ${lockDeptTime}`,
        };
        return this.lockCardService.writeCard(body);
    }
    /**
     * DISPLAY
     */
    displayArrival() {
        return moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.arrivalDate).format('DD/MM/yyyy') || '';
    }
    displayDepart() {
        return moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.departDate).format('DD/MM/yyyy') || '';
    }
    displayNumNight() {
        if (this.bookingData.arrivalDate === this.bookingData.departDate) {
            return `1`;
        }
        const start = moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.arrivalDate);
        const end = moment__WEBPACK_IMPORTED_MODULE_1__(this.bookingData.departDate);
        return `${end.diff(start, 'd')}`;
    }
    displayTotal() {
        const total = this.totalRateData.rate + this.totalRateData.tax1 + this.totalRateData.tax2;
        return total || 0;
    }
}
BookingCreateComponent.ɵfac = function BookingCreateComponent_Factory(t) { return new (t || BookingCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_7__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_lock_card_lock_card_service__WEBPACK_IMPORTED_MODULE_8__["LockCardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_dispenser_dispenser_service__WEBPACK_IMPORTED_MODULE_9__["DispenserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_10__["HubWalkinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"])); };
BookingCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingCreateComponent, selectors: [["app-booking-create"]], outputs: { nextStep: "nextStep", backStep: "backStep" }, decls: 97, vars: 49, consts: [[1, "d-flex", "flex-column", "wrapper", "h-100"], [1, "flex-grow-1"], [1, "text-grey-dark", "my-3"], [1, "card", "card-box-shadow", "my-3"], [1, "card-body"], [1, "row"], [1, "col-3"], [1, "col-9"], [1, "text-primary", "text-uppercase", "font-weight-500"], [1, "dropdown-divider"], ["st", ""], [1, "text-primary", "font-weight-500"], [1, "row", "mt-2"], [1, "col"], [1, "d-flex", "flex-row", "justify-content-between"], [1, "ks-text-align-right", "text-primary", "font-weight-500"], [1, "wrapper", "w-100", "d-flex", "flex-row", "justify-content-center", "mb-3"], ["className", "btn-primary w-100 text-uppercase", 1, "w-80", 3, "click"]], template: function BookingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "app-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingCreateComponent_Template_app_button_click_94_listener() { return ctx.createBooking(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 23, "bookingCreate.bookingInformation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 25, "bookingCreate.fullName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bookingData.guestName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 27, "bookingCreate.from"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayArrival());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 29, "bookingCreate.to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayDepart());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 31, "bookingCreate.numNight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayNumNight());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 33, "bookingCreate.room"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.bookingData.roomTypeCode, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 35, "bookingCreate.building"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bookingData.buildingName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 37, "bookingCreate.payment"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 39, "bookingCreate.roomRate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.utilService.formatMoney(ctx.totalRateData == null ? null : ctx.totalRateData.rate), " VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 41, "bookingCreate.taxRate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.utilService.formatMoney(ctx.totalRateData == null ? null : ctx.totalRateData.tax1), " VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 43, "bookingCreate.serviceCharge"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.utilService.formatMoney(ctx.totalRateData == null ? null : ctx.totalRateData.tax2), " VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 45, "bookingCreate.totalRate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.utilService.formatMoney(ctx.displayTotal()), " VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 47, "flowDetect.btnContinue"), " ");
    } }, directives: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_14__["ButtonComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  width: unset;\n}\n\nmat-checkbox[_ngcontent-%COMP%]     .mat-checkbox-inner-container {\n  width: 30px;\n  height: 30px;\n}\n\n.block-title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.form-check-label[_ngcontent-%COMP%]::before, .form-check-label[_ngcontent-%COMP%]::after {\n  top: 0.8rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJvb2tpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7O0VBRUksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoiYm9va2luZy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIHdpZHRoOiB1bnNldDtcclxufVxyXG5cclxubWF0LWNoZWNrYm94IDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYmxvY2stdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWxhYmVsOjpiZWZvcmUsIFxyXG4uZm9ybS1jaGVjay1sYWJlbDo6YWZ0ZXIge1xyXG4gICAgdG9wOiAuOHJlbTtcclxuICAgIHdpZHRoOiAxLjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: configFactory, AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFactory", function() { return configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_checkin_checkin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkin/checkin.module */ "0AA1");
/* harmony import */ var _modules_navigation_bar_navigation_bar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/navigation-bar/navigation-bar.module */ "uihs");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _config_httpInterceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config/httpInterceptor/http-interceptor.service */ "BZhe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_configure_configure_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config/configure/configure.service */ "yegS");
/* harmony import */ var _layout_walkin_walkin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/walkin/walkin.component */ "HTcQ");
/* harmony import */ var _layout_checkin_boooking_code_checkin_boooking_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/checkin-boooking-code/checkin-boooking-code.component */ "y4cI");
/* harmony import */ var _layout_checkin_qr_checkin_qr_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/checkin-qr/checkin-qr.component */ "zSBF");




















const configFactory = (configService) => {
    return () => {
        return configService.loadConfig();
    };
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _config_httpInterceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["HttpInterceptorService"],
            multi: true,
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__["APP_INITIALIZER"],
            useFactory: configFactory,
            deps: [_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_14__["ConfigureService"]],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _modules_navigation_bar_navigation_bar_module__WEBPACK_IMPORTED_MODULE_5__["NavigationBarModule"],
            _modules_checkin_checkin_module__WEBPACK_IMPORTED_MODULE_4__["CheckinModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                }
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _layout_walkin_walkin_component__WEBPACK_IMPORTED_MODULE_15__["WalkinComponent"], _layout_checkin_boooking_code_checkin_boooking_code_component__WEBPACK_IMPORTED_MODULE_16__["CheckinBoookingCodeComponent"], _layout_checkin_qr_checkin_qr_component__WEBPACK_IMPORTED_MODULE_17__["CheckinQrComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _modules_navigation_bar_navigation_bar_module__WEBPACK_IMPORTED_MODULE_5__["NavigationBarModule"],
        _modules_checkin_checkin_module__WEBPACK_IMPORTED_MODULE_4__["CheckinModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "b3fv":
/*!******************************************!*\
  !*** ./src/app/shared/constant/event.ts ***!
  \******************************************/
/*! exports provided: ACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
const ACTIONS = {
    nextStep: 'nextStep',
    backStep: 'backStep',
    cardImage: 'cardImage',
    cardContent: 'cardContent',
    loading: 'loading',
    closeCamera: 'closeCamera',
    openScanModal: 'openScanModal',
    showErrorModal: 'showErrorModal',
    focusQrInput: 'focusQrInput',
    goBack: 'goBack',
};


/***/ }),

/***/ "eY15":
/*!***************************************************************************!*\
  !*** ./src/app/shared/services/passportReader/passport-reader.service.ts ***!
  \***************************************************************************/
/*! exports provided: PassportReaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportReaderService", function() { return PassportReaderService; });
/* harmony import */ var _constant_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant/event */ "b3fv");
/* harmony import */ var _constant_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constant/pages */ "8g6L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hub_hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hub/hub.service */ "HItX");




let websocket = null;
let timerId = null;
let bigImageEmpty = true;
let bCardDetectedNotification = false; /* 检测到证件放入或拿出时,是否会发送通知; 当启用回调模式时, 此变量也会设置为true */
let bConnected = false;
let strTitle = '';
let strConnect = "建立连接";
let strDisconnect = "断开连接";
let strDeviceStatus = "设备状态";
let strDeviceConnected = "设备已连接";
let strDeviceName = "设备名称";
let strDeviceSerialno = "设备序列号";
let strDevNotConnect = "设备未连接";
let strDescOfWebsocketError = "websocket连接出错,请确认WebSocket服务正常运行，并重新建立连接";
let strDescFailSetRFID = "设置是否读取芯片信息出错";
let strDescFailSetVIZ = "设置是否识别版面信息出错";
let strPlaceHolderCardTextInfo = "此处显示从证件读取的文本信息";
let strDescFailSendWebsocket = "向后台服务发送指令出错";
let strDeviceOffLine = "设备掉线";
let strDeviceReconnected = "设备已重新连接";
let strWebDescDeviceNotFound = "WebSocket已连接, 未检测到设备";
let strWebDescRequireRestartSvc = "WebSocket服务需要重新启动";
let strWebDescAskForSupport = "WebSocket服务遇到问题, 请联系管理员";
let strWebDescRequireReconnect = "WebSocket服务要求web端重新建立连接";
let connectionValue = "";
let host = "ws://127.0.0.1:90/echo";
class PassportReaderService {
    constructor(hub) {
        this.hub = hub;
    }
    setConnectionValue(value) {
        connectionValue = value;
    }
    getStrConnect() {
        return strConnect;
    }
    setConnBtnValue() {
        if (bConnected) {
            console.log(strDisconnect);
            connectionValue = strDisconnect;
            // document.getElementById("connection").value = strDisconnect;
        }
        else {
            console.log(strConnect);
            connectionValue = strConnect;
            // document.getElementById("connection").value = strConnect;
        }
    }
    /* 建立WebSocket连接并初始化websocket属性 */
    connect() {
        try {
            if (websocket != null) {
                websocket.close();
            }
            websocket = new WebSocket(host);
            /* 成功建立websocket连接 */
            websocket.onopen = () => {
                bConnected = true;
                this.setConnBtnValue();
                this.getWebConstants();
                this.setDefaultSettings();
                timerId = setInterval(() => {
                    this.getDeviceStatus();
                }, 1000);
            };
            /* 响应后台服务的应答报文或通知报文 */
            websocket.onmessage = (event) => {
                var retmsg = event.data;
                var jsonMsg;
                try {
                    jsonMsg = JSON.parse(retmsg);
                    if (this.processOnDisconnect(jsonMsg)) {
                        return;
                    }
                    if (jsonMsg.Type === 'Reply') {
                        if (jsonMsg.hasOwnProperty('Commands')) {
                            for (var index in jsonMsg.Commands) {
                                this.processReply(jsonMsg.Commands[index]);
                            }
                        }
                        else {
                            this.processReply(jsonMsg);
                        }
                    }
                    else if (jsonMsg.Type == 'Notify') {
                        this.processNotify(jsonMsg);
                    }
                    return;
                }
                catch (exception) {
                    console.log('ERROR: ', "Parse error: " + event.data);
                }
            };
            /* 主动或被动关闭websocket连接时触发，清空页面信息 */
            websocket.onclose = () => {
                bConnected = false;
                this.setConnBtnValue();
                // document.getElementById('connection').value = strConnect; // "建立连接";
                this.clrDeviceStatus();
                this.clrTextInfo();
                this.clrImages(true);
                // websocket = null;
                if (websocket !== null) {
                    if (websocket.readyState == 3) {
                        console.log('deviceStatus', strDescOfWebsocketError);
                    }
                    // this.disConnect();
                }
            };
            /* websocket出错事件，清空页面信息并报警 */
            websocket.onerror = evt => {
                bConnected = false;
                this.setConnBtnValue();
                this.clrDeviceStatus();
                this.clrTextInfo();
                this.clrImages(true);
            };
        }
        catch (exception) {
            console.log('ERROR: ', "Excetion: " + exception);
        }
    }
    /* 页面点击建立连接按钮时触发此函数 */
    onConnection() {
        if (connectionValue == strConnect /*'建立连接'*/) {
            if (websocket !== null) {
                websocket.close();
                websocket = null;
            }
            this.connect();
        }
        else {
            if (websocket !== null) {
                websocket.close();
                websocket = null;
            }
        }
    }
    /* 页面点击断开连接按钮是触发此函数 */
    disConnect() {
        if (websocket != null) {
            try {
                websocket.close();
                websocket = null;
            }
            catch (error) {
                console.error('disconnect', error);
            }
        }
    }
    /* 页面向后台发送指令，后台返回应答 */
    processReply(msgReply) {
        if (msgReply.Command == 'Get') {
            if (msgReply.Succeeded == 'Y') { /* Get指令成功执行，从应答报文中解析出对应的结果 */
                if (msgReply.Operand == 'DeviceName') { /* 应答报文中的设备名称 */
                    console.log('deviceName: ', msgReply.Result);
                }
                else if (msgReply.Operand == 'DeviceSerialNo') { /* 应答报文中的设备序列号 */
                    console.log('deviceSerial: ', msgReply.Result);
                }
                else if (msgReply.Operand == 'OnLineStatus') { /* 应答报文中的设备在线状态 */
                    console.log('deviceStatus: ', msgReply.Result);
                    if (msgReply.Result == strDeviceConnected) {
                    }
                }
                else if (msgReply.Operand == 'VersionInfo') {
                    document.title = strTitle + "V" + msgReply.Result;
                    console.log('VersionInfo', msgReply.Result);
                }
                else if (msgReply.Operand == 'WebConstant') {
                    if (msgReply.Param == 'CardRecogSystem') {
                        strTitle = msgReply.Result;
                    }
                    else if (msgReply.Param == 'Connect') {
                        strConnect = msgReply.Result;
                        this.setConnBtnValue();
                        console.log(msgReply.Result);
                        connectionValue = msgReply.Result;
                    }
                    else if (msgReply.Param == 'Disconnect') {
                        strDisconnect = msgReply.Result;
                        this.setConnBtnValue();
                        console.log(msgReply.Result);
                        connectionValue = msgReply.Result;
                    }
                    else if (msgReply.Param == 'Save') {
                        // document.getElementById("btnSaveSettings").value = msgReply.Result;
                    }
                    else if (msgReply.Param == 'IDCANCEL') {
                        // document.getElementById("btnCancelSave").value = msgReply.Result;
                    }
                    else if (msgReply.Param == 'DeviceStatus') {
                        strDeviceStatus = msgReply.Result;
                    }
                    else if (msgReply.Param == 'DeviceName') {
                        strDeviceName = msgReply.Result;
                        console.log('deviceNameKey: ', strDeviceName + ":");
                        // document.getElementById('deviceNameKey').innerHTML = strDeviceName + ":";
                    }
                    else if (msgReply.Param == 'DeviceSerialno') {
                        strDeviceSerialno = msgReply.Result;
                        console.log('deviceSerialKey: ', strDeviceSerialno + ":");
                        // document.getElementById('deviceSerialKey').innerHTML = strDeviceSerialno + ":";
                    }
                    else if (msgReply.Param == 'DeviceNotConnected') {
                        strDevNotConnect = msgReply.Result;
                    }
                    else if (msgReply.Param == 'DescOfWebsocketError') {
                        strDescOfWebsocketError = msgReply.Result;
                    }
                    else if (msgReply.Param == 'DescFailSetRFID') {
                        strDescFailSetRFID = msgReply.Result;
                    }
                    else if (msgReply.Param == 'DescFailSetVIZ') {
                        strDescFailSetVIZ = msgReply.Resultl;
                    }
                    else if (msgReply.Param == 'PlaceHolderCardTextInfo') {
                        // strPlaceHolderCardTextInfo = msgReply.Result;
                        // document.getElementById("msg").setAttribute("placeholder", strPlaceHolderCardTextInfo);
                    }
                    else if (msgReply.Param == 'DescFailSendWebsocket') {
                        strDescFailSendWebsocket = msgReply.Result;
                    }
                    else if (msgReply.Param == 'DeviceOffLine') {
                        strDeviceOffLine = msgReply.Result;
                    }
                    else if (msgReply.Param == 'DeviceReconnected') {
                        strDeviceReconnected = msgReply.Result;
                    }
                    else if (msgReply.Param == 'WebDescDeviceNotFound') {
                        strWebDescDeviceNotFound = msgReply.Result;
                    }
                    else if (msgReply.Param == 'WebDescRequireRestartSvc') {
                        strWebDescRequireRestartSvc = msgReply.Result;
                    }
                    else if (msgReply.Param == 'WebDescAskForSupport') {
                        strWebDescAskForSupport = msgReply.Result;
                    }
                    else if (msgReply.Param == 'WebDescRequireReconnect') {
                        strWebDescRequireReconnect = msgReply.Result;
                    }
                    else if (msgReply.Param == 'DeviceConnected') {
                        strDeviceConnected = msgReply.Result;
                    }
                }
            }
        }
        else if (msgReply.Command == 'Set') {
            if (msgReply.Succeeded == 'N') { /* Set指令未生效 */
                if (msgReply.Operand == 'RFID') {
                    // document.getElementById("msg").innerHTML = strDescFailSetRFID;
                    console.log('strDescFailSetRFID: ', strDescFailSetRFID);
                }
                else if (msgReply.Operand == 'VIZ') {
                    console.log('strDescFailSetVIZ: ', strDescFailSetVIZ);
                    //document.getElementById("msg").innerHTML = strDescFailSetVIZ;
                }
            }
        }
    }
    /* 后台服务主动向web端发送消息，包括读卡信息、证件图像以及异常状态通知等 */
    processNotify(msgNotify) {
        if (msgNotify.Command == 'Display') {
            if (msgNotify.Param == strDeviceOffLine) {
                this.clrDeviceStatus();
                console.log('deviceStatus: ', strWebDescDeviceNotFound);
            }
            else if (msgNotify.Param == strDeviceReconnected) {
                this.getDeviceStatus();
            }
        }
        else if (msgNotify.Command == 'Reconnect') {
            this.clrDeviceStatus();
            console.log('deviceStatus: ', strWebDescRequireReconnect);
            this.disConnect();
            this.connect();
        }
        else if (msgNotify.Command == 'AskSupport') {
            this.clrDeviceStatus();
            console.log('deviceStatus', strWebDescAskForSupport);
        }
        else if (msgNotify.Command == 'RestartService') {
            /* disConnect(); */
            console.log('deviceStatus', strWebDescRequireRestartSvc);
        }
        else if (msgNotify.Command == 'Save') {
            if (msgNotify.Operand == 'CardContentText') {
                this.processCardContent(msgNotify.Param);
            }
            else if (msgNotify.Operand == 'Images') {
                this.processCardImage(msgNotify.Param.White);
            }
        }
        else if (msgNotify.Command == 'CardDetected') {
        }
    }
    processCardContent(content) {
        const event = {
            receiver: _constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].flowDetect,
            message: _constant_event__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].cardContent,
            data: content,
        };
        this.hub.sendEvent(event);
    }
    processCardImage(image) {
        const event = {
            receiver: _constant_pages__WEBPACK_IMPORTED_MODULE_1__["PAGES"].flowDetect,
            message: _constant_event__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].cardImage,
            data: image,
        };
        this.hub.sendEvent(event);
    }
    processOnDisconnect(msgReply) {
        if (msgReply.Type === 'Reply') {
            const onlineStatus = msgReply.Commands.find(o => o.Operand === 'OnLineStatus');
            if (onlineStatus && onlineStatus.Succeeded === 'N') {
                this.clrDeviceStatus();
                this.disConnect();
                this.connect();
                return true;
            }
        }
        return false;
    }
    /* 如果存在名为 imageName的图像，则展示到页面对应的位置 */
    tryDisplayImage(images, imageName, domId) {
        if (images.hasOwnProperty(imageName)) {
            // document.getElementById(domId).src = images[imageName];
            if (bigImageEmpty) {
                // document.getElementById("imageDisplay").src = images[imageName];
                bigImageEmpty = false;
            }
        }
    }
    /* 检查由后台发送的图像数据中包含哪些图像，并展示到页面 */
    displayImages(images) {
        this.tryDisplayImage(images, "White", "imageWhite");
        this.tryDisplayImage(images, "IR", "imageIR");
        this.tryDisplayImage(images, "UV", "imageUV");
        this.tryDisplayImage(images, "OcrHead", "imageOcrHead");
        this.tryDisplayImage(images, "ChipHead", "imageChipHead");
        this.tryDisplayImage(images, "SidHead", "imageChipHead");
    }
    clrTextInfo() {
        // document.getElementById("divTextArea").innerHTML = "";
    }
    /* 清空页面上的图像信息 */
    clrImages(bForce) {
        if (bForce || !bCardDetectedNotification) {
            // document.getElementById("imageWhite").src = "png/Home_pic_bgicon.png";
            // document.getElementById("imageIR").src = "png/Home_pic_bgicon.png";
            // document.getElementById("imageUV").src = "png/Home_pic_bgicon.png";
            // document.getElementById("imageOcrHead").src = "png/Home_pic_bgicon.png";
            // document.getElementById("imageChipHead").src = "png/Home_pic_bgicon.png";
            // document.getElementById("imageDisplay").src = "png/Home_pic_kong.png";
            bigImageEmpty = true;
        }
    }
    /* 将发送数据的操作做了封装 */
    sendJson(jsonData) {
        try {
            if (websocket !== null) {
                websocket.send(JSON.stringify(jsonData));
            }
        }
        catch (exception) {
            //document.getElementById("msg").innerHTML = strDescFailSendWebsocket;
        }
    }
    /* 获取设备状态、核心版本，一次性发送4条指令 */
    getDeviceStatus() {
        var request = {
            Type: "Request",
            Commands: [
                { Command: "Get", Operand: "OnLineStatus" },
                { Command: "Get", Operand: "DeviceName" },
                { Command: "Get", Operand: "DeviceSerialNo" },
                { Command: "Get", Operand: "VersionInfo" } /* 获取核心版本信息 */
            ]
        };
        this.sendJson(request);
    }
    /* 清空页面上显示的设备状态信息 */
    clrDeviceStatus() {
        // document.getElementById("deviceStatus").innerHTML = strDevNotConnect;
        // document.getElementById("deviceNameKey").style.display = "none";
        // document.getElementById('deviceName').innerHTML = "";
        // document.getElementById("deviceSerialKey").style.display = "none";
        // document.getElementById('deviceSerial').innerHTML = "";
    }
    /* 设置读卡参数，默认识别芯片信息、识别版面信息 */
    setDefaultSettings() {
        var request = {
            Type: "Request",
            Commands: [
                { Command: "Set", Operand: "RFID", Param: "Y" },
                { Command: "Set", Operand: "VIZ", Param: "Y" } /* 设置识别版面信息 */
            ]
        };
        this.sendJson(request);
    }
    /* 对证件进行拍照 */
    takePhoto() {
        console.log('TAKE PHOTO');
        var request = {
            Type: "Request",
            Command: "Set",
            Operand: "TakePhoto",
            Param: 0
        };
        var requestGetBase64 = {
            Type: "Request",
            Command: "Get",
            Operand: "Base64Image"
        };
        this.sendJson(request);
        this.sendJson(requestGetBase64);
    }
    /* 选择要放大观看的图像 */
    showImage(domId) {
        // document.getElementById("imageDisplay").src = document.getElementById(domId).src;
    }
    showSettingPage() {
        document.getElementById("settings").style.display = "block";
        document.getElementById("control").style.display = "none";
        document.getElementById("cardInfo").style.display = "none";
    }
    checkStatusToString(domId) {
        return "True";
        // if (document.getElementById(domId).checked) {
        //   return "True";
        // } else {
        //   return "False";
        // }
    }
    SaveSettings() {
        // bCardDetectedNotification = document.getElementById("CallBack").checked || document.getElementById("CardDetect").checked;
        bCardDetectedNotification = false;
        var request = {
            Type: "Request",
            Commands: [
                { Command: "Set", Operand: "VIZ", Param: true },
                { Command: "Set", Operand: "RFID", Param: true },
                { Command: "Set", Operand: "Rejection", Param: false },
                { Command: "Set", Operand: "IfEnableCallback", Param: false },
                { Command: "Set", Operand: "IfNotifyCardDetected", Param: false },
                { Command: "Set", Operand: "MRZOnWhiteImage", Param: false },
                { Command: "Set", Operand: "IfDetectUVDull", Param: false },
                { Command: "Set", Operand: "IfDetectFibre", Param: false },
                { Command: "Set", Operand: "IfCheckSourceType", Param: false },
                { Command: "Set", Operand: "BarCodeRecog", Param: false }
            ]
        };
        this.sendJson(request);
        document.getElementById("settings").style.display = "none";
        document.getElementById("control").style.display = "block";
        document.getElementById("cardInfo").style.display = "block";
    }
    DonnotSaveSettings() {
        document.getElementById("settings").style.display = "none";
        document.getElementById("control").style.display = "block";
        document.getElementById("cardInfo").style.display = "block";
    }
    ChangeConnectType() {
        var tmp = "ws://127.0.0.1:90/echo";
        if (tmp == host) {
            host = "wss://127.0.0.1:90/echo";
        }
        else {
            host = "ws://127.0.0.1:90/echo";
        }
    }
    getWebConstants() {
        var request = {
            Type: "Request",
            Commands: [
                { Command: "Get", Operand: "WebConstant", Param: "CardRecogSystem" },
                { Command: "Get", Operand: "WebConstant", Param: "Connect" },
                { Command: "Get", Operand: "WebConstant", Param: "Disconnect" },
                { Command: "Get", Operand: "WebConstant", Param: "Save" },
                { Command: "Get", Operand: "WebConstant", Param: "IDCANCEL" },
                { Command: "Get", Operand: "WebConstant", Param: "DeviceStatus" },
                { Command: "Get", Operand: "WebConstant", Param: "DeviceName" },
                { Command: "Get", Operand: "WebConstant", Param: "DeviceSerialno" },
                { Command: "Get", Operand: "WebConstant", Param: "DeviceNotConnected" },
                { Command: "Get", Operand: "WebConstant", Param: "DescOfWebsocketError" },
                { Command: "Get", Operand: "WebConstant", Param: "DescFailSetRFID" },
                { Command: "Get", Operand: "WebConstant", Param: "DescFailSetVIZ" },
                { Command: "Get", Operand: "WebConstant", Param: "PlaceHolderCardTextInfo" },
                { Command: "Get", Operand: "WebConstant", Param: "DeviceOffLine" },
                { Command: "Get", Operand: "WebConstant", Param: "DeviceReconnected" },
                { Command: "Get", Operand: "WebConstant", Param: "DescFailSendWebsocket" },
                { Command: "Get", Operand: "WebConstant", Param: "WebDescDeviceNotFound" },
                { Command: "Get", Operand: "WebConstant", Param: "WebDescRequireRestartSvc" },
                { Command: "Get", Operand: "WebConstant", Param: "WebDescAskForSupport" },
                { Command: "Get", Operand: "WebConstant", Param: "WebDescRequireReconnect" },
                { Command: "Get", Operand: "WebConstant", Param: "DeviceConnected" }
            ]
        };
        this.sendJson(request);
    }
}
PassportReaderService.ɵfac = function PassportReaderService_Factory(t) { return new (t || PassportReaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_hub_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"])); };
PassportReaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PassportReaderService, factory: PassportReaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eyL3":
/*!**************************************************!*\
  !*** ./src/app/shared/constant/local-storage.ts ***!
  \**************************************************/
/*! exports provided: LOCAL_STORAGE_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEYS", function() { return LOCAL_STORAGE_KEYS; });
const LOCAL_STORAGE_KEYS = {
    token: 'token',
};


/***/ }),

/***/ "fAUp":
/*!************************************************************************************!*\
  !*** ./src/app/shared/services/time-picker-adapter/time-picker-adapter.service.ts ***!
  \************************************************************************************/
/*! exports provided: TimePickerAdapterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerAdapterService", function() { return TimePickerAdapterService; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const pad = (i) => (i < 10 ? `0${i}` : `${i}`);
class TimePickerAdapterService extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbTimeAdapter"] {
    fromModel(value) {
        if (!value) {
            return null;
        }
        const split = value.split(':');
        return {
            hour: parseInt(split[0], 10),
            minute: parseInt(split[1], 10),
            second: parseInt(split[2], 10)
        };
    }
    toModel(time) {
        return time != null
            ? `${pad(time.hour)}:${pad(time.minute)}`
            : null;
    }
}
TimePickerAdapterService.ɵfac = function TimePickerAdapterService_Factory(t) { return ɵTimePickerAdapterService_BaseFactory(t || TimePickerAdapterService); };
TimePickerAdapterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TimePickerAdapterService, factory: TimePickerAdapterService.ɵfac });
const ɵTimePickerAdapterService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TimePickerAdapterService);


/***/ }),

/***/ "fkfe":
/*!*******************************************************************!*\
  !*** ./src/app/modules/checkin/components/menu/menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var src_app_shared_constant_check_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constant/check-mode */ "O//k");
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/hub-walkin/hub-walkin.service */ "NQ6j");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_components_app_card_app_card_app_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/app-card/app-card/app-card.component */ "wLxG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");












function MenuComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_div_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const entry_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.selectMode(entry_r1.mode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](entry_r1.mode === ctx_r0.selectedMode ? "entry-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", entry_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, entry_r1.head), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 7, entry_r1.sub));
} }
class MenuComponent {
    constructor(router, hubService, translateService, hubWalkin) {
        this.router = router;
        this.hubService = hubService;
        this.translateService = translateService;
        this.hubWalkin = hubWalkin;
        this.modes = src_app_shared_constant_check_mode__WEBPACK_IMPORTED_MODULE_0__["CHECK_IN_MODES"];
        this.listEntry = [
            {
                mode: this.modes.BOOKING_CODE,
                head: 'menu.checkin-booking-code.head',
                sub: 'menu.checkin-booking-code.sub',
                icon: './assets/images/booking-code.svg',
            },
            {
                mode: this.modes.QR_CODE,
                head: 'menu.checkin-qr.head',
                sub: 'menu.checkin-qr.sub',
                icon: './assets/images/qr.svg',
            },
            {
                mode: this.modes.WALK_IN,
                head: 'menu.booking.head',
                sub: 'menu.booking.sub',
                icon: './assets/images/booking.svg',
            },
        ];
        this.selectedMode = '';
        this.hubSubcription = null;
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].options) {
                return;
            }
            console.log('FLOW-CHECKIN: ', res);
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].goBack) {
                this.router.navigateByUrl('/');
            }
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
    }
    selectMode(mode) {
        this.selectedMode = mode;
    }
    redirect() {
        let mode = this.selectedMode;
        if (!mode) {
            this.hubService.error(this.translateService.instant('msg.notSelectOption'));
            return;
        }
        if (mode === this.modes.WALK_IN) {
            // this.router.navigateByUrl(`/${PAGES.flowBooking}`);
            this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].walkin}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step1}`]);
            this.hubWalkin.setPage(src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].walkin);
            return;
        }
        if (mode === this.modes.QR_CODE) {
            // this.router.navigateByUrl(`/${PAGES.flowBooking}`);
            this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].checkinQr}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step1}`]);
            this.hubWalkin.setPage(src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].checkinQr);
            return;
        }
        this.router.navigate([`/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].checkinCode}/${src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step1}`]);
        // this.router.navigate([`/${PAGES.flowCheckin}`], { queryParams: { mode } });
        this.hubWalkin.setPage(src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].checkinCode);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_5__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_hub_walkin_hub_walkin_service__WEBPACK_IMPORTED_MODULE_7__["HubWalkinService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 22, vars: 13, consts: [["fxLayout", "column", "fxLayoutAlign", "center", 1, "menu-container"], [1, "wrapper", "menu-intro", "my-3"], [1, "text-white", "font-weight-thin", "mt-3"], [1, "text-white", "font-weight-500", "mt-3"], [1, "h-100"], ["app-card-body", ""], [1, "wrapper"], [1, "my-3"], [1, "font-weight-thin", "text-grey-dark"], [1, "d-flex", "flex-column", "entry-list", "my-3"], ["fxFlex", "", "fxLayoutAlign", "center none", 4, "ngFor", "ngForOf"], ["app-card-footer", ""], [1, "wrapper", "w-100", "d-flex", "flex-row", "justify-content-center"], ["className", "btn-primary w-100 text-uppercase", 1, "w-80", 3, "click"], ["fxFlex", "", "fxLayoutAlign", "center none"], [1, "ks-href-block", "entry-container", "w-100", "my-2", 3, "click"], [1, "card", "card-box-shadow"], [1, "card-body"], [1, "row"], [1, "col-5", "text-primary", "text-center"], [1, "entry-image", 3, "src"], [1, "col-7", "text-primary", "d-flex", "flex-column", "justify-content-around"], [1, "card-title", "text-upper-case", "text-center"], [1, "font-weight-thin", "text-center"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, MenuComponent_div_16_Template, 14, 9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_Template_app_button_click_19_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, "menu.hi"), ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, "welcome.intro"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 9, "menu.intro"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listEntry);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 11, "navBottom.next"), " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _shared_components_app_card_app_card_app_card_component__WEBPACK_IMPORTED_MODULE_9__["AppCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]   .entry-list[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .entry-container[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .entry-active[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n}\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .entry-active[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n}\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .entry-active[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .entry-active[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .entry-image[_ngcontent-%COMP%] {\n  width: var(--symbolSize);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtZW51LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkEsa0NBQUE7QUFPQSw4RUFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQy9CRjtBQ0VFO0VGbUJGO0lBYUkscUJBQUE7SUFDQSx1QkFBQTtFQzlCRjtBQUNGO0FDRUU7RUZhRjtJQWtCSSxrQkFBQTtJQUNBLG1CQUFBO0VDN0JGO0FBQ0Y7QUNFRTtFRk9GO0lBdUJJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUM1QkY7QUFDRjtBQ0RFO0VGQ0Y7SUErQkksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQzNCRjtBQUNGO0FDUUU7RUZqQkY7SUF1Q0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQzFCRjtBQUNGO0FBbERBO0VBQ0UsWUFBQTtBQXFERjtBQW5ERTtFQUNFLFlBQUE7QUFxREo7QUFsRE07RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBb0RSO0FBaERJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBa0ROO0FBOUNNO0VBQ0UsZ0NBQUE7QUFnRFI7QUEvQ1E7RUFDRSwrQkFBQTtBQWlEVjtBQS9DUTtFQUNFLG1CQUFBO0FBaURWO0FBNUNJO0VBQ0Usd0JBQUE7QUE4Q04iLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vbWl4aW5zJztcblxuJGZvbnRTaXplU206IDEycHg7XG4kZm9udFNpemVNZDogMTZweDtcbiRmb250U2l6ZUxnOiAzMHB4O1xuJGZvbnRTaXplWGw6IDQ1cHg7XG4kZm9udFNpemVYeGw6IDUwcHg7XG5cbiRzeW1ib2xTaXplU206IDUwcHg7XG4kc3ltYm9sU2l6ZU1kOiAxMHB4O1xuJHN5bWJvbFNpemVMZzogMTUwcHg7XG4kc3ltYm9sU2l6ZVhsOiAyNTBweDtcblxuJHZpZGVvV2lkdGhTbTogMTAwcHg7XG4kdmlkZW9XaWR0aE1kOiAzMDBweDtcbiR2aWRlb1dpZHRoTGc6IDEwMDBweDtcbiR2aWRlb1dpZHRoWGw6IDE1MDBweDtcblxuJGNvbG9yLWxpZ2h0OiAjRUNGOEU2O1xuJGNvbG9yLWFjY2VudDogICMzQTUzMkM7XG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjQzRBNDc0O1xuJGNvbG9yLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4kY29sb3ItZ3JleTogIzlFOUU5RTtcbiRjb2xvci1ncmV5LWRhcms6ICM3NTc1NzU7XG5cbi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4kdGhlbWUtY29sb3JzOiAoXG4gIHByaW1hcnk6ICRjb2xvci1hY2NlbnQsXG4gIHNlY29uZGFyeTogJGNvbG9yLXNlY29uZGFyeSxcbiAgbGlnaHQ6ICRjb2xvci1saWdodCxcbik7XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogI3skZm9udFNpemVTbX07XG4gIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZVNtfTtcbiAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoU219O1xuICAtLWdyZXk6ICN7JGNvbG9yLWdyZXl9O1xuICAtLWdyZXktZGFyazogI3skY29sb3ItZ3JleS1kYXJrfTtcbiAgLS1ncmV5LWxpZ2h0OiAjeyRjb2xvci1ncmV5LWxpZ2h0fTtcbiAgLS1ncmVlbi1saWdodDogI3skY29sb3ItZ3JlZW4tbGlnaHR9O1xuICAtLWxpZ2h0OiAjeyRjb2xvci1saWdodH07XG5cbiAgQGluY2x1ZGUgc20ge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfTtcblxuICBAaW5jbHVkZSBtZCB7XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTWR9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aE1kfTtcbiAgfTtcblxuICBAaW5jbHVkZSBsZyB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxOTQuNzVweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogNjkuNXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplTGd9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZUxnfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhMZ31cbiAgfTtcblxuICBAaW5jbHVkZSB4bCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVhsfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVMZ307XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTGd9O1xuICB9O1xuXG4gIEBpbmNsdWRlIHh4eHhsIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE0MHB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplWGx9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZVhsfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhYbH07XG4gIH07XG59IiwiLyogQ3VzdG9taXplIEJvb3RzdHJhcCBWYXJpYWJsZXMgKi9cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogMTJweDtcbiAgLS1zeW1ib2xTaXplOiA1MHB4O1xuICAtLXZpZGVvV2lkdGg6IDEwMHB4O1xuICAtLWdyZXk6ICM5RTlFOUU7XG4gIC0tZ3JleS1kYXJrOiAjNzU3NTc1O1xuICAtLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4gIC0tZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4gIC0tbGlnaHQ6ICNFQ0Y4RTY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXN5bWJvbFNpemU6IDEwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogMzBweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4IDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMDAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDI1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTUwMHB4O1xuICB9XG59XG5cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgLmVudHJ5LWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIC5lbnRyeS1jb250YWluZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIC5lbnRyeS1hY3RpdmUgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciAuZW50cnktYWN0aXZlIC5jYXJkIGltZyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgLmVudHJ5LWFjdGl2ZSAuY2FyZCBoMywgOmhvc3QgLm1lbnUtY29udGFpbmVyIC5lbnRyeS1hY3RpdmUgLmNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgLmVudHJ5LWltYWdlIHtcbiAgd2lkdGg6IHZhcigtLXN5bWJvbFNpemUpO1xufSIsIkBtaXhpbiBnZW4tdGV4dCgkZm9udC1zaXplKSB7XHJcbiAgZm9udC1zaXplOiB2YXIoJGZvbnQtc2l6ZSk7XHJcbiAgbGluZS1oZWlnaHQ6IHZhcigkZm9udC1zaXplKTtcclxufVxyXG5cclxuJHNtLXdpZHRoOiA1NzZweDtcclxuJG1kLXdpZHRoOiA3NjhweDtcclxuJGxnLXdpZHRoOiA5OTJweDtcclxuJHhsLXdpZHRoOiAxMjAwcHg7XHJcbiR4eGwtd2lkdGg6IDE0MDBweDtcclxuJHh4eGwtd2lkdGg6IDE1NDNweDtcclxuJHh4eHhsLXdpZHRoOiAzMDAwcHg7XHJcblxyXG5cclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc20td2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JG1kLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRsZy13aWR0aH0pe1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "iodx":
/*!****************************************************!*\
  !*** ./src/app/shared/services/ocr/ocr.service.ts ***!
  \****************************************************/
/*! exports provided: OcrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcrService", function() { return OcrService; });
/* harmony import */ var src_app_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/configure/configure.service */ "yegS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class OcrService {
    constructor(http) {
        this.http = http;
        this.ocrUrl = '';
        this.ocrUrl = src_app_config_configure_configure_service__WEBPACK_IMPORTED_MODULE_0__["ConfigureService"].config.url.ocr;
    }
    /**
     * Lấy thông tin từ ảnh cmnd cũ
     */
    idImage(base64) {
        const endpoint = `${this.ocrUrl}/predict/id_image`;
        const file = this.dataURLtoFile(base64, 'file.jpg');
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(endpoint, formData);
    }
    /**
     * Lấy thông tin từ bằng lái xe
     */
    licenseImage(base64) {
        const endpoint = `${this.ocrUrl}/predict/license_image`;
        const file = this.dataURLtoFile(base64, 'file.jpg');
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(endpoint, formData);
    }
    /**
     * Lấy thông tin từ căn cước công dân
     */
    idImageNew(base64) {
        const endpoint = `${this.ocrUrl}/predict/id_image_new`;
        const file = this.dataURLtoFile(base64, 'file.jpg');
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(endpoint, formData);
    }
    /**
     * So khớp mặt
     */
    faceEmbedding(source, input) {
        const endpoint = `${this.ocrUrl}/predict/face_embedding`;
        const sourceFile = this.dataURLtoFile(source, 'source.jpg');
        const inputFile = this.dataURLtoFile(input, 'input.jpg');
        const formData = new FormData();
        formData.append('source_file', sourceFile);
        formData.append('input_file', inputFile);
        return this.http.post(endpoint, formData);
    }
    /**
     *
     * Convert base64 sang File
     *
     */
    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
}
OcrService.ɵfac = function OcrService_Factory(t) { return new (t || OcrService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OcrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OcrService, factory: OcrService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kvQK":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/checkin/components/scan-face/scan-face.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ScanFaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanFaceComponent", function() { return ScanFaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");










const _c0 = ["video"];
class ScanFaceComponent {
    constructor(hubService, translateService) {
        this.hubService = hubService;
        this.translateService = translateService;
        this.faExchange = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExchangeAlt"];
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCamera"];
        this.faPaperPlane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPaperPlane"];
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.image = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageBase64 = '';
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].scanFace) {
                return;
            }
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_3__["ACTIONS"].nextStep) {
                this.changeToNextStep();
            }
            else if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_3__["ACTIONS"].backStep) {
                this.changeToPreviousStep();
            }
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_3__["ACTIONS"].closeCamera) {
                this.turnOffVideo();
            }
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setupDevice();
        });
    }
    /**
     * Setup video stream
     */
    setupDevice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                try {
                    const stream = yield navigator.mediaDevices.getUserMedia({
                        video: true
                    });
                    if (stream) {
                        this.video.nativeElement.srcObject = stream;
                        this.video.nativeElement.play();
                    }
                    else {
                        this.hubService.error(this.translateService.instant('msg.noOutputVideoDevice'));
                        // console.log('You have no output video device');
                    }
                }
                catch (e) {
                    console.error(e);
                }
            }
        });
    }
    /**
     * Take photo
     */
    takePhoto() {
        const nativeVideo = this.video.nativeElement;
        nativeVideo.pause();
        const canvas = document.createElement('canvas');
        canvas.width = nativeVideo.videoWidth;
        canvas.height = nativeVideo.videoHeight;
        canvas
            .getContext('2d')
            .drawImage(nativeVideo, 0, 0, canvas.width, canvas.height);
        this.imageBase64 = canvas.toDataURL();
    }
    /**
     * Resume
     */
    resume() {
        const nativeVideo = this.video.nativeElement;
        nativeVideo.play();
        this.imageBase64 = '';
    }
    submit() {
        if (this.imageBase64) {
            this.image.emit(this.imageBase64);
        }
        else {
            this.hubService.error(this.translateService.instant('msg.noFaceImageToDetect'));
        }
    }
    /**
     * turnOffVideo
     */
    turnOffVideo() {
        const nativeVideo = this.video.nativeElement;
        nativeVideo.srcObject = null;
    }
    /**
     * Navigate
     */
    changeToNextStep() {
        if (this.imageBase64) {
            this.nextStep.emit();
        }
        else {
            this.takePhoto();
        }
        this.video.nativeElement.play();
    }
    changeToPreviousStep() {
        this.backStep.emit();
    }
}
ScanFaceComponent.ɵfac = function ScanFaceComponent_Factory(t) { return new (t || ScanFaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_5__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
ScanFaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScanFaceComponent, selectors: [["app-scan-face"]], viewQuery: function ScanFaceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
    } }, outputs: { nextStep: "nextStep", backStep: "backStep", image: "image" }, decls: 23, vars: 14, consts: [[1, "d-flex", "flex-column", "h-100"], [1, "wrapper", "h-100", "d-flex", "flex-column", "justify-content-between"], [1, "flex-grow-1", "d-flex", "flex-column"], [1, "text-center", "mt-3"], [1, "text-grey-dark", "font-weight-600"], ["className", "text-uppercase bg-light border-light text-primary btn-primary w-40", 1, "w-100", "text-center", 3, "click"], [1, "stream", "w-100", "text-center", "mt-5"], ["id", "video"], ["video", ""], [1, "d-flex", "flex-row", "justify-content-around", "w-100", "mb-3"], ["className", "text-uppercase text-primary border-primary w-100", 1, "w-40", 3, "click"], [3, "icon"], ["className", "text-uppercase btn-primary w-100", 1, "w-40", 3, "click"]], template: function ScanFaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScanFaceComponent_Template_app_button_click_7_listener() { return ctx.takePhoto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "video", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScanFaceComponent_Template_app_button_click_15_listener() { return ctx.resume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "app-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScanFaceComponent_Template_app_button_click_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "flowDetect.faceInstruction"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "flowDetect.btnChupAnh"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faExchange);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 10, "flowDetect.btnUndo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 12, "flowDetect.btnXacMinh"), " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faPaperPlane);
    } }, directives: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .container-stream[_ngcontent-%COMP%]   .stream[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjYW4tZmFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUdNO0VBRUUsV0FBQTtBQUZSIiwiZmlsZSI6InNjYW4tZmFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5jb250YWluZXItc3RyZWFtIHtcclxuICAgIC5zdHJlYW0ge1xyXG4gICAgICB2aWRlbyB7XHJcbiAgICAgICAgLy8gd2lkdGg6IHZhcigtLXZpZGVvV2lkdGgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "pL5C":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/modal-error/modal-error/modal-error.component.ts ***!
  \************************************************************************************/
/*! exports provided: ModalErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalErrorComponent", function() { return ModalErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function ModalErrorComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](":\u00A0", ctx_r0.errorCode, "");
} }
class ModalErrorComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.errorMessage = '';
        this.errorCode = '';
    }
    ngOnInit() {
    }
}
ModalErrorComponent.ɵfac = function ModalErrorComponent_Factory(t) { return new (t || ModalErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ModalErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalErrorComponent, selectors: [["app-modal-error"]], inputs: { errorMessage: "errorMessage", errorCode: "errorCode" }, decls: 13, vars: 8, consts: [[1, "modal-header"], [1, "modal-title", "text-danger"], [1, "fas", "fa-exclamation-triangle"], [4, "ngIf"], [1, "modal-body"], [3, "innerHTML"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "w-100", "ks-btn-focus-decor-none", 3, "click"]], template: function ModalErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalErrorComponent_span_6_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalErrorComponent_Template_button_click_10_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "modalError.error"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.errorMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "modalError.close"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "tolN":
/*!*************************************************************************!*\
  !*** ./src/app/modules/checkin/components/welcome/welcome.component.ts ***!
  \*************************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");





class WelcomeComponent {
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowRight"];
    }
    ngOnInit() { }
    redirectFlowBooking() {
        this.router.navigateByUrl(`/options`);
    }
    changeLanguage(lang) {
        this.translate.use(lang);
        this.redirectFlowBooking();
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 11, vars: 0, consts: [[1, "d-flex", "flex-column", "welcome-container", "w-100", "h-100", "pb-3"], [1, "w-100", "d-flex", "flex-column", "align-items-center", "mt-5"], ["src", "assets/images/logo.svg", "alt", "Mandala", 1, "w-40", 2, "filter", "brightness(0) invert(1)"], [1, "text-uppercase", "mt-5", "text-white", "font-weight-thin"], ["className", "text-white border-white w-100 text-uppercase font-weight-300", 1, "w-70", 3, "click"], [1, "font-italic", "text-white", "text-uppercase", "font-weight-thin", "my-4"], ["className", "text-white border-white w-100 text-uppercase", 1, "w-70", 3, "click"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Xin vui l\u00F2ng l\u1EF1a ch\u1ECDn ng\u00F4n ng\u1EEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WelcomeComponent_Template_app_button_click_5_listener() { return ctx.changeLanguage("vi"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " ti\u1EBFng vi\u1EC7t ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WelcomeComponent_Template_app_button_click_9_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " english ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], styles: ["[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .welcome-container[_ngcontent-%COMP%] {\n  background: url('bg.png') no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: absolute;\n  z-index: 999999;\n  top: 0;\n  left: 0;\n  height: 100%;\n}\n[_nghost-%COMP%]   .welcome-container[_ngcontent-%COMP%]   .entry-container[_ngcontent-%COMP%] {\n  width: 60%;\n  color: #000000;\n}\n[_nghost-%COMP%]   .welcome-container[_ngcontent-%COMP%]   a.entry-container[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .welcome-container[_ngcontent-%COMP%]   a.entry-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: #fff 1px solid;\n  background: #0E4269;\n  color: #fff;\n}\n[_nghost-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  font-size: calc(var(--symbolSize) * 3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx3ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkEsa0NBQUE7QUFPQSw4RUFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQy9CRjtBQ0VFO0VGbUJGO0lBYUkscUJBQUE7SUFDQSx1QkFBQTtFQzlCRjtBQUNGO0FDRUU7RUZhRjtJQWtCSSxrQkFBQTtJQUNBLG1CQUFBO0VDN0JGO0FBQ0Y7QUNFRTtFRk9GO0lBdUJJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUM1QkY7QUFDRjtBQ0RFO0VGQ0Y7SUErQkksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQzNCRjtBQUNGO0FDUUU7RUZqQkY7SUF1Q0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQzFCRjtBQUNGO0FBbERBO0VBQ0UsWUFBQTtBQXFERjtBQW5ERTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQXFESjtBQWxESTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBb0ROO0FBakRJO0VBQ0UscUJBQUE7QUFtRE47QUFqRE07RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQW1EUjtBQTlDRTtFQUNFLHNDQUFBO0FBZ0RKIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL21peGlucyc7XG5cbiRmb250U2l6ZVNtOiAxMnB4O1xuJGZvbnRTaXplTWQ6IDE2cHg7XG4kZm9udFNpemVMZzogMzBweDtcbiRmb250U2l6ZVhsOiA0NXB4O1xuJGZvbnRTaXplWHhsOiA1MHB4O1xuXG4kc3ltYm9sU2l6ZVNtOiA1MHB4O1xuJHN5bWJvbFNpemVNZDogMTBweDtcbiRzeW1ib2xTaXplTGc6IDE1MHB4O1xuJHN5bWJvbFNpemVYbDogMjUwcHg7XG5cbiR2aWRlb1dpZHRoU206IDEwMHB4O1xuJHZpZGVvV2lkdGhNZDogMzAwcHg7XG4kdmlkZW9XaWR0aExnOiAxMDAwcHg7XG4kdmlkZW9XaWR0aFhsOiAxNTAwcHg7XG5cbiRjb2xvci1saWdodDogI0VDRjhFNjtcbiRjb2xvci1hY2NlbnQ6ICAjM0E1MzJDO1xuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjNkY4RjVEO1xuJGNvbG9yLXNlY29uZGFyeTogI0M0QTQ3NDtcbiRjb2xvci1ncmV5LWxpZ2h0OiAjRDRENEQ0O1xuJGNvbG9yLWdyZXk6ICM5RTlFOUU7XG4kY29sb3ItZ3JleS1kYXJrOiAjNzU3NTc1O1xuXG4vKiBDdXN0b21pemUgQm9vdHN0cmFwIFZhcmlhYmxlcyAqL1xuJHRoZW1lLWNvbG9yczogKFxuICBwcmltYXJ5OiAkY29sb3ItYWNjZW50LFxuICBzZWNvbmRhcnk6ICRjb2xvci1zZWNvbmRhcnksXG4gIGxpZ2h0OiAkY29sb3ItbGlnaHQsXG4pO1xuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIC0tZm9udFNpemU6ICN7JGZvbnRTaXplU219O1xuICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVTbX07XG4gIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aFNtfTtcbiAgLS1ncmV5OiAjeyRjb2xvci1ncmV5fTtcbiAgLS1ncmV5LWRhcms6ICN7JGNvbG9yLWdyZXktZGFya307XG4gIC0tZ3JleS1saWdodDogI3skY29sb3ItZ3JleS1saWdodH07XG4gIC0tZ3JlZW4tbGlnaHQ6ICN7JGNvbG9yLWdyZWVuLWxpZ2h0fTtcbiAgLS1saWdodDogI3skY29sb3ItbGlnaHR9O1xuXG4gIEBpbmNsdWRlIHNtIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIH07XG5cbiAgQGluY2x1ZGUgbWQge1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZU1kfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhNZH07XG4gIH07XG5cbiAgQGluY2x1ZGUgbGcge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTk0Ljc1cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDY5LjVweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZUxnfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVMZ307XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTGd9XG4gIH07XG5cbiAgQGluY2x1ZGUgeGwge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTM5cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVYbH07XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTGd9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aExnfTtcbiAgfTtcblxuICBAaW5jbHVkZSB4eHh4bCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxNDBweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVhsfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVYbH07XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoWGx9O1xuICB9O1xufSIsIi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIC0tZm9udFNpemU6IDEycHg7XG4gIC0tc3ltYm9sU2l6ZTogNTBweDtcbiAgLS12aWRlb1dpZHRoOiAxMDBweDtcbiAgLS1ncmV5OiAjOUU5RTlFO1xuICAtLWdyZXktZGFyazogIzc1NzU3NTtcbiAgLS1ncmV5LWxpZ2h0OiAjRDRENEQ0O1xuICAtLWdyZWVuLWxpZ2h0OiAjNkY4RjVEO1xuICAtLWxpZ2h0OiAjRUNGOEU2O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6cm9vdCB7XG4gICAgLS1zeW1ib2xTaXplOiAxMHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxOTQuNzVweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogNjkuNXB4O1xuICAgIC0tZm9udFNpemU6IDMwcHg7XG4gICAgLS1zeW1ib2xTaXplOiAxNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDEwMDBweCA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTM5cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzAwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE0MHB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6IDQ1cHg7XG4gICAgLS1zeW1ib2xTaXplOiAyNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDE1MDBweDtcbiAgfVxufVxuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC53ZWxjb21lLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAud2VsY29tZS1jb250YWluZXIgLmVudHJ5LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MCU7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuOmhvc3QgLndlbGNvbWUtY29udGFpbmVyIGEuZW50cnktY29udGFpbmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgLndlbGNvbWUtY29udGFpbmVyIGEuZW50cnktY29udGFpbmVyIC5jYXJkIHtcbiAgYm9yZGVyOiAjZmZmIDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogIzBFNDI2OTtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCAubG9nby1pY29uIHtcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLXN5bWJvbFNpemUpICogMyk7XG59IiwiQG1peGluIGdlbi10ZXh0KCRmb250LXNpemUpIHtcclxuICBmb250LXNpemU6IHZhcigkZm9udC1zaXplKTtcclxuICBsaW5lLWhlaWdodDogdmFyKCRmb250LXNpemUpO1xyXG59XHJcblxyXG4kc20td2lkdGg6IDU3NnB4O1xyXG4kbWQtd2lkdGg6IDc2OHB4O1xyXG4kbGctd2lkdGg6IDk5MnB4O1xyXG4keGwtd2lkdGg6IDEyMDBweDtcclxuJHh4bC13aWR0aDogMTQwMHB4O1xyXG4keHh4bC13aWR0aDogMTU0M3B4O1xyXG4keHh4eGwtd2lkdGg6IDMwMDBweDtcclxuXHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzbS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbWQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGxnLXdpZHRofSl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "uihs":
/*!*****************************************************************!*\
  !*** ./src/app/modules/navigation-bar/navigation-bar.module.ts ***!
  \*****************************************************************/
/*! exports provided: NavigationBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarModule", function() { return NavigationBarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "0Jb9");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var src_app_shared_trans_trans_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/trans/trans.module */ "vdLp");
/* harmony import */ var src_app_shared_ng_bootstrap_ng_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/ng-bootstrap/ng-bootstrap.module */ "7ZC8");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_navigation_bottom_navigation_bottom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation-bottom/navigation-bottom.component */ "Dcqe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class NavigationBarModule {
}
NavigationBarModule.ɵfac = function NavigationBarModule_Factory(t) { return new (t || NavigationBarModule)(); };
NavigationBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: NavigationBarModule });
NavigationBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            src_app_shared_ng_bootstrap_ng_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["NgBootstrapModule"],
            src_app_shared_trans_trans_module__WEBPACK_IMPORTED_MODULE_3__["TransModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NavigationBarModule, { declarations: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"],
        _components_navigation_bottom_navigation_bottom_component__WEBPACK_IMPORTED_MODULE_6__["NavigationBottomComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        src_app_shared_ng_bootstrap_ng_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["NgBootstrapModule"],
        src_app_shared_trans_trans_module__WEBPACK_IMPORTED_MODULE_3__["TransModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]], exports: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"],
        _components_navigation_bottom_navigation_bottom_component__WEBPACK_IMPORTED_MODULE_6__["NavigationBottomComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_checkin_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/checkin/components/menu/menu.component */ "fkfe");
/* harmony import */ var _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/constant/pages */ "8g6L");
/* harmony import */ var _modules_checkin_components_flow_checkin_flow_checkin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkin/components/flow-checkin/flow-checkin.component */ "xFiT");
/* harmony import */ var _modules_checkin_components_flow_booking_flow_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkin/components/flow-booking/flow-booking.component */ "AgR9");
/* harmony import */ var _modules_checkin_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/checkin/components/welcome/welcome.component */ "tolN");
/* harmony import */ var _modules_checkin_components_availability_rooms_availability_rooms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkin/components/availability-rooms/availability-rooms.component */ "2sx2");
/* harmony import */ var _modules_checkin_components_scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/checkin/components/scan-identity-card/scan-identity-card.component */ "UEAr");
/* harmony import */ var _modules_checkin_components_booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/checkin/components/booking-create/booking-create.component */ "YSWC");
/* harmony import */ var _modules_checkin_components_booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/checkin/components/booking-done/booking-done.component */ "UTnJ");
/* harmony import */ var _layout_walkin_walkin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/walkin/walkin.component */ "HTcQ");
/* harmony import */ var _modules_checkin_components_flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/checkin/components/flow-detect/flow-detect.component */ "+vjk");
/* harmony import */ var _modules_checkin_components_scan_qr_scan_qr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/checkin/components/scan-qr/scan-qr.component */ "HGSx");
/* harmony import */ var _modules_checkin_components_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/checkin/components/booking-details/booking-details.component */ "P0mD");
/* harmony import */ var _modules_checkin_components_booking_code_booking_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/checkin/components/booking-code/booking-code.component */ "PQve");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const routes = [
    {
        path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].flowCheckin,
        component: _modules_checkin_components_flow_checkin_flow_checkin_component__WEBPACK_IMPORTED_MODULE_3__["FlowCheckinComponent"],
    },
    {
        path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].flowBooking,
        component: _modules_checkin_components_flow_booking_flow_booking_component__WEBPACK_IMPORTED_MODULE_4__["FlowBookingComponent"],
    },
    {
        path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].options,
        component: _modules_checkin_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"],
    },
    {
        path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].welcome,
        component: _modules_checkin_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
    },
    {
        path: '',
        redirectTo: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].welcome,
        pathMatch: 'full',
    },
    {
        path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].walkin,
        component: _layout_walkin_walkin_component__WEBPACK_IMPORTED_MODULE_10__["WalkinComponent"],
        children: [
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step1,
                component: _modules_checkin_components_availability_rooms_availability_rooms_component__WEBPACK_IMPORTED_MODULE_6__["AvailabilityRoomsComponent"],
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step2,
                component: _modules_checkin_components_scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_7__["ScanIdentityCardComponent"]
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step3,
                component: _modules_checkin_components_booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_8__["BookingCreateComponent"],
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step4,
                component: _modules_checkin_components_booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_9__["BookingDoneComponent"],
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].detect,
                component: _modules_checkin_components_flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_11__["FlowDetectComponent"],
            }
        ]
    },
    {
        path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].checkinQr,
        component: _layout_walkin_walkin_component__WEBPACK_IMPORTED_MODULE_10__["WalkinComponent"],
        children: [
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step1,
                component: _modules_checkin_components_scan_qr_scan_qr_component__WEBPACK_IMPORTED_MODULE_12__["ScanQrComponent"],
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step2,
                component: _modules_checkin_components_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_13__["BookingDetailsComponent"]
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step3,
                component: _modules_checkin_components_scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_7__["ScanIdentityCardComponent"],
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step4,
                component: _modules_checkin_components_booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_9__["BookingDoneComponent"],
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].detect,
                component: _modules_checkin_components_flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_11__["FlowDetectComponent"],
            }
        ]
    },
    {
        path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["PAGES"].checkinCode,
        component: _layout_walkin_walkin_component__WEBPACK_IMPORTED_MODULE_10__["WalkinComponent"],
        children: [
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step1,
                component: _modules_checkin_components_booking_code_booking_code_component__WEBPACK_IMPORTED_MODULE_14__["BookingCodeComponent"],
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step2,
                component: _modules_checkin_components_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_13__["BookingDetailsComponent"]
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step3,
                component: _modules_checkin_components_scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_7__["ScanIdentityCardComponent"],
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].step4,
                component: _modules_checkin_components_booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_9__["BookingDoneComponent"],
            },
            {
                path: _shared_constant_pages__WEBPACK_IMPORTED_MODULE_2__["STEPS"].detect,
                component: _modules_checkin_components_flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_11__["FlowDetectComponent"],
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vdLp":
/*!**********************************************!*\
  !*** ./src/app/shared/trans/trans.module.ts ***!
  \**********************************************/
/*! exports provided: TransModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransModule", function() { return TransModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TransModule {
}
TransModule.ɵfac = function TransModule_Factory(t) { return new (t || TransModule)(); };
TransModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TransModule });
TransModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TransModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]] }); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "wLxG":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/app-card/app-card/app-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCardComponent", function() { return AppCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = [[["", "app-card-body", ""]], [["", "app-card-footer", ""]]];
const _c1 = ["[app-card-body]", "[app-card-footer]"];
class AppCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppCardComponent.ɵfac = function AppCardComponent_Factory(t) { return new (t || AppCardComponent)(); };
AppCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppCardComponent, selectors: [["app-card"]], ngContentSelectors: _c1, decls: 8, vars: 0, consts: [[1, "h-100"], [1, "app-card", "d-flex", "flex-column", "justify-content-between", "h-100", "pb-5"], [1, "d-flex", "flex-column", "flex-grow-1"], [1, "d-flex", "flex-row", "justify-content-center", "mb-2"], [1, "mt-3", "bg-primary", "stick-horizontal"]], template: function AppCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n.app-card[_ngcontent-%COMP%] {\n  border-top-left-radius: 70px;\n  border-top-right-radius: 70px;\n  background-color: var(--white);\n}\n.stick-horizontal[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 8%;\n  height: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXBwLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkEsa0NBQUE7QUFPQSw4RUFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQy9CRjtBQ0VFO0VGbUJGO0lBYUkscUJBQUE7SUFDQSx1QkFBQTtFQzlCRjtBQUNGO0FDRUU7RUZhRjtJQWtCSSxrQkFBQTtJQUNBLG1CQUFBO0VDN0JGO0FBQ0Y7QUNFRTtFRk9GO0lBdUJJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUM1QkY7QUFDRjtBQ0RFO0VGQ0Y7SUErQkksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQzNCRjtBQUNGO0FDUUU7RUZqQkY7SUF1Q0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQzFCRjtBQUNGO0FBakRBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBb0RGO0FBakRBO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQW9ERiIsImZpbGUiOiJhcHAtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vbWl4aW5zJztcblxuJGZvbnRTaXplU206IDEycHg7XG4kZm9udFNpemVNZDogMTZweDtcbiRmb250U2l6ZUxnOiAzMHB4O1xuJGZvbnRTaXplWGw6IDQ1cHg7XG4kZm9udFNpemVYeGw6IDUwcHg7XG5cbiRzeW1ib2xTaXplU206IDUwcHg7XG4kc3ltYm9sU2l6ZU1kOiAxMHB4O1xuJHN5bWJvbFNpemVMZzogMTUwcHg7XG4kc3ltYm9sU2l6ZVhsOiAyNTBweDtcblxuJHZpZGVvV2lkdGhTbTogMTAwcHg7XG4kdmlkZW9XaWR0aE1kOiAzMDBweDtcbiR2aWRlb1dpZHRoTGc6IDEwMDBweDtcbiR2aWRlb1dpZHRoWGw6IDE1MDBweDtcblxuJGNvbG9yLWxpZ2h0OiAjRUNGOEU2O1xuJGNvbG9yLWFjY2VudDogICMzQTUzMkM7XG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjQzRBNDc0O1xuJGNvbG9yLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4kY29sb3ItZ3JleTogIzlFOUU5RTtcbiRjb2xvci1ncmV5LWRhcms6ICM3NTc1NzU7XG5cbi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4kdGhlbWUtY29sb3JzOiAoXG4gIHByaW1hcnk6ICRjb2xvci1hY2NlbnQsXG4gIHNlY29uZGFyeTogJGNvbG9yLXNlY29uZGFyeSxcbiAgbGlnaHQ6ICRjb2xvci1saWdodCxcbik7XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogI3skZm9udFNpemVTbX07XG4gIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZVNtfTtcbiAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoU219O1xuICAtLWdyZXk6ICN7JGNvbG9yLWdyZXl9O1xuICAtLWdyZXktZGFyazogI3skY29sb3ItZ3JleS1kYXJrfTtcbiAgLS1ncmV5LWxpZ2h0OiAjeyRjb2xvci1ncmV5LWxpZ2h0fTtcbiAgLS1ncmVlbi1saWdodDogI3skY29sb3ItZ3JlZW4tbGlnaHR9O1xuICAtLWxpZ2h0OiAjeyRjb2xvci1saWdodH07XG5cbiAgQGluY2x1ZGUgc20ge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfTtcblxuICBAaW5jbHVkZSBtZCB7XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTWR9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aE1kfTtcbiAgfTtcblxuICBAaW5jbHVkZSBsZyB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxOTQuNzVweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogNjkuNXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplTGd9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZUxnfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhMZ31cbiAgfTtcblxuICBAaW5jbHVkZSB4bCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVhsfTtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVMZ307XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTGd9O1xuICB9O1xuXG4gIEBpbmNsdWRlIHh4eHhsIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE0MHB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplWGx9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZVhsfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhYbH07XG4gIH07XG59IiwiLyogQ3VzdG9taXplIEJvb3RzdHJhcCBWYXJpYWJsZXMgKi9cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogMTJweDtcbiAgLS1zeW1ib2xTaXplOiA1MHB4O1xuICAtLXZpZGVvV2lkdGg6IDEwMHB4O1xuICAtLWdyZXk6ICM5RTlFOUU7XG4gIC0tZ3JleS1kYXJrOiAjNzU3NTc1O1xuICAtLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4gIC0tZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4gIC0tbGlnaHQ6ICNFQ0Y4RTY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXN5bWJvbFNpemU6IDEwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogMzBweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4IDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMDAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDI1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTUwMHB4O1xuICB9XG59XG5cbi5hcHAtY2FyZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDcwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5zdGljay1ob3Jpem9udGFsIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDglO1xuICBoZWlnaHQ6IDAuM3JlbTtcbn0iLCJAbWl4aW4gZ2VuLXRleHQoJGZvbnQtc2l6ZSkge1xyXG4gIGZvbnQtc2l6ZTogdmFyKCRmb250LXNpemUpO1xyXG4gIGxpbmUtaGVpZ2h0OiB2YXIoJGZvbnQtc2l6ZSk7XHJcbn1cclxuXHJcbiRzbS13aWR0aDogNTc2cHg7XHJcbiRtZC13aWR0aDogNzY4cHg7XHJcbiRsZy13aWR0aDogOTkycHg7XHJcbiR4bC13aWR0aDogMTIwMHB4O1xyXG4keHhsLXdpZHRoOiAxNDAwcHg7XHJcbiR4eHhsLXdpZHRoOiAxNTQzcHg7XHJcbiR4eHh4bC13aWR0aDogMzAwMHB4O1xyXG5cclxuXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtZC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbGctd2lkdGh9KXtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eGwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHh4bC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHh4eHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "xFiT":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/checkin/components/flow-checkin/flow-checkin.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FlowCheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCheckinComponent", function() { return FlowCheckinComponent; });
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-stepper */ "BYMX");
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bs_stepper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constant/event */ "b3fv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/constant/pages */ "8g6L");
/* harmony import */ var src_app_shared_constant_check_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/constant/check-mode */ "O//k");
/* harmony import */ var src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/constant/audio-files */ "QDvO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/hub/hub.service */ "HItX");
/* harmony import */ var src_app_shared_services_dispenser_dispenser_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/dispenser/dispenser.service */ "8EDh");
/* harmony import */ var src_app_shared_services_lock_card_lock_card_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/lock-card/lock-card.service */ "7NDd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/booking/booking.service */ "RnX0");
/* harmony import */ var _services_room_availability_room_availability_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/room-availability/room-availability.service */ "5+xa");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_app_card_app_card_app_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/components/app-card/app-card/app-card.component */ "wLxG");
/* harmony import */ var _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../booking-details/booking-details.component */ "P0mD");
/* harmony import */ var _scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../scan-identity-card/scan-identity-card.component */ "UEAr");
/* harmony import */ var _booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../booking-done/booking-done.component */ "UTnJ");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _scan_qr_scan_qr_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../scan-qr/scan-qr.component */ "HGSx");
/* harmony import */ var _booking_code_booking_code_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../booking-code/booking-code.component */ "PQve");
/* harmony import */ var _flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../flow-detect/flow-detect.component */ "+vjk");






























const _c0 = ["flowDetectComp"];
function FlowCheckinComponent_app_card_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 1, "flowCheckin.scanQR"), " ");
} }
function FlowCheckinComponent_app_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 1, "flowCheckin.bookingCode"), " ");
} }
function FlowCheckinComponent_app_card_0_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "app-scan-qr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("nextStep", function FlowCheckinComponent_app_card_0_div_28_Template_app_scan_qr_nextStep_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r6.receiveGuestData($event); })("backStep", function FlowCheckinComponent_app_card_0_div_28_Template_app_scan_qr_backStep_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r8.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function FlowCheckinComponent_app_card_0_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "app-booking-code", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("nextStep", function FlowCheckinComponent_app_card_0_div_29_Template_app_booking_code_nextStep_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r9.receiveGuestData($event); })("backStep", function FlowCheckinComponent_app_card_0_div_29_Template_app_booking_code_backStep_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r11.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function FlowCheckinComponent_app_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, FlowCheckinComponent_app_card_0_div_4_Template, 10, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, FlowCheckinComponent_app_card_0_div_5_Template, 7, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, FlowCheckinComponent_app_card_0_div_28_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, FlowCheckinComponent_app_card_0_div_29_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "app-booking-details", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("nextStep", function FlowCheckinComponent_app_card_0_Template_app_booking_details_nextStep_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r12.doneBookingDetail($event); })("changeRoomCode", function FlowCheckinComponent_app_card_0_Template_app_booking_details_changeRoomCode_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r14.changeRoomCode($event); })("backStep", function FlowCheckinComponent_app_card_0_Template_app_booking_details_backStep_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r15.back(); })("refreshRoomAvai", function FlowCheckinComponent_app_card_0_Template_app_booking_details_refreshRoomAvai_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r16.refreshRoomAvai(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "app-scan-identity-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("detectAgain", function FlowCheckinComponent_app_card_0_Template_app_scan_identity_card_detectAgain_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r17.openFlowDetect(); })("sendGuestInfo", function FlowCheckinComponent_app_card_0_Template_app_scan_identity_card_sendGuestInfo_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r18.processCard($event); })("backStep", function FlowCheckinComponent_app_card_0_Template_app_scan_identity_card_backStep_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r19.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "app-booking-done", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("reset", function FlowCheckinComponent_app_card_0_Template_app_booking_done_reset_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r20.resetFlow(); })("backStep", function FlowCheckinComponent_app_card_0_Template_app_booking_done_backStep_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r21.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](36, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "app-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FlowCheckinComponent_app_card_0_Template_app_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r22.gotoNextStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mode === ctx_r0.checkInModes.QR_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mode === ctx_r0.checkInModes.BOOKING_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 16, "flowCheckin.bookingInformation"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](19, 18, "flowCheckin.scanIdPassport"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 20, "flowCheckin.done"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mode === ctx_r0.checkInModes.QR_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.mode === ctx_r0.checkInModes.BOOKING_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bookingData", ctx_r0.bookingData)("totalRateData", ctx_r0.totalRateData)("roomAvaiData", ctx_r0.roomAvaiData)("error", ctx_r0.error.fetchRoomAvai);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("guestData", ctx_r0.bookingData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isDone", ctx_r0.isDoneFlow);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@btnAppear", ctx_r0.showFooter ? "visible" : "hidden")("ngClass", ctx_r0.showFooter ? "d-flex" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](40, 22, "navBottom.next"), " ");
} }
function FlowCheckinComponent_app_flow_detect_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-flow-detect", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("sendGuestInfo", function FlowCheckinComponent_app_flow_detect_1_Template_app_flow_detect_sendGuestInfo_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r24.closeFlowDetect($event); })("backStep", function FlowCheckinComponent_app_flow_detect_1_Template_app_flow_detect_backStep_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r26.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class FlowCheckinComponent {
    constructor(hubService, dispenserService, lockCardService, route, utilService, router, bookingService, roomAvaiService, translateService) {
        this.hubService = hubService;
        this.dispenserService = dispenserService;
        this.lockCardService = lockCardService;
        this.route = route;
        this.utilService = utilService;
        this.router = router;
        this.bookingService = bookingService;
        this.roomAvaiService = roomAvaiService;
        this.translateService = translateService;
        this.mode = src_app_shared_constant_check_mode__WEBPACK_IMPORTED_MODULE_6__["CHECK_IN_MODES"].BOOKING_CODE;
        this.checkInModes = Object.assign({}, src_app_shared_constant_check_mode__WEBPACK_IMPORTED_MODULE_6__["CHECK_IN_MODES"]);
        this.bookingData = {};
        this.totalRateData = {};
        this.showFlowDetect = false;
        this.showFooter = true;
        this.isDoneFlow = true;
        this.hubSubcription = null;
        this.error = {
            fetchRoomAvai: '',
        };
        this.roomAvaiData = [];
        this.subcribeHub();
    }
    ngOnDestroy() {
        this.hubSubcription.unsubscribe();
    }
    next() {
        this.stepper.next();
    }
    subcribeHub() {
        this.hubSubcription = this.hubService.onHub().subscribe((res) => {
            if (res.receiver !== src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].flowCheckin) {
                return;
            }
            console.log('FLOW-CHECKIN: ', res);
            if (res.message === src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].goBack) {
                this.back();
            }
        });
    }
    back() {
        const current = this.getActiveStep();
        const backToOptionsScreen = [
            src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].scanQR,
            src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].bookingCode,
            src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].bookingDone,
        ];
        if (this.showFlowDetect) {
            this.changeStepInsideFlowDetect(this.flowDetectComp.progress.key);
            return;
        }
        if (current === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].scanQR) {
            const event = {
                receiver: src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].scanQR,
                message: src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].backStep,
            };
            this.hubService.sendEvent(event);
        }
        if (backToOptionsScreen.includes(current)) {
            this.router.navigateByUrl('/options');
            return;
        }
        this.stepper.previous();
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.mode = params.mode;
            setTimeout(() => {
                this.initStepper();
                this.addListener();
            }, 0);
        });
    }
    initStepper() {
        const linear = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production;
        this.stepper = new bs_stepper__WEBPACK_IMPORTED_MODULE_0___default.a(document.querySelector('#stepper-checkin'), {
            linear: linear,
            animation: true,
        });
    }
    receiveGuestData(guestData) {
        setTimeout(() => {
            this.hubService.setLoading(true);
        }, 0);
        this.bookingData = Object.assign(Object.assign({}, this.bookingData), guestData);
        this.bookingService
            .getTotalRate({
            ArrivalDate: this.bookingData.arrivalDate,
            DepartDate: this.bookingData.departDate,
            ArrivalTime: this.bookingData.arrivalTime,
            DepartTime: this.bookingData.departTime,
            RoomBocked: this.bookingData.roomCode,
            RoomType: this.bookingData.roomTypeCode,
            NoOfAdults: this.bookingData.adult,
            NoOfChild: this.bookingData.child,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((res) => {
            if (res.metadata && res.metadata[0]) {
                this.totalRateData = res.metadata[0];
                return this.roomAvaiService.getRoomAvailabitlity(this.bookingData.arrivalDate, this.bookingData.departDate, true);
            }
            else {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                    code: '',
                    message: this.translateService.instant('msg.errorGetTotalRate'),
                    useToat: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTruckMonster"],
                });
            }
        }))
            .subscribe((res) => {
            if (res.statusCode === 200 && res.metadata) {
                this.roomAvaiData = res.metadata
                    .map((item) => (Object.assign(Object.assign({}, item), { buildingCode: `${item.buildingCode}` })))
                    .filter((item) => (item === null || item === void 0 ? void 0 : item.roomTypeCode) === this.bookingData.roomTypeCode);
                if (this.roomAvaiData[0]) {
                    this.changeRoomCode(this.roomAvaiData[0].roomCode);
                }
                this.next();
            }
            else {
                this.error.fetchRoomAvai = res.message;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                    code: '',
                    message: this.translateService.instant('msg.errorGetTotalRate'),
                    useToat: false,
                });
            }
        }, (err) => {
            if (err.useToast) {
                this.hubService.error((err === null || err === void 0 ? void 0 : err.message) ||
                    this.translateService.instant('msg.errorHandlingRequest'));
            }
        }).add(() => {
            this.hubService.setLoading(false);
        });
    }
    refreshRoomAvai() {
        console.log('refreshRoomAvai');
        this.fetchRoomAvai(this.bookingData.arrivalDate, this.bookingData.departDate);
    }
    fetchRoomAvai(arr, dpt) {
        this.error.fetchRoomAvai = '';
        this.hubService.setLoading(true);
        this.roomAvaiService
            .getRoomAvailabitlity(arr, dpt, true)
            .subscribe(this.fetchRoomAvailObserver())
            .add(() => {
            this.hubService.setLoading(false);
        });
    }
    fetchRoomAvailObserver() {
        return {
            next: (res) => {
                if (res.statusCode === 200 && res.metadata) {
                    this.roomAvaiData = res.metadata
                        .map((item) => (Object.assign(Object.assign({}, item), { buildingCode: `${item.buildingCode}` })))
                        .filter((item) => (item === null || item === void 0 ? void 0 : item.roomTypeCode) === this.bookingData.roomTypeCode);
                }
                else {
                    this.error.fetchRoomAvai = res.message;
                }
            },
            error: () => {
                this.error.fetchRoomAvai = this.translateService.instant('msg.errorHandlingRequest');
            },
        };
    }
    changeRoomCode(roomCode) {
        this.bookingData.roomCode = roomCode;
    }
    doneBookingDetail(data) {
        this.bookingData = Object.assign({}, data);
        this.next();
    }
    addListener() {
        const stepperEl = document.querySelector('#stepper-checkin');
        stepperEl.addEventListener('shown.bs-stepper', (event) => {
            console.log({ event });
            const activeStep = this.getActiveStep();
            this.actionController(activeStep, event.detail);
        });
    }
    actionController(activeStep, detail) {
        if (activeStep === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].scanQR) {
            this.showFooter = false;
            this.focusQrInput();
            this.utilService.playAudio(src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_7__["AUDIO_FILES"].scanQrIntro);
        }
        else if (activeStep === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].bookingCode) {
            this.showFooter = true;
            this.utilService.playAudio(src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_7__["AUDIO_FILES"].bookingCodeIntro);
        }
        else if (activeStep === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].bookingDetails) {
            this.showFooter = true;
        }
        else if (detail && detail.to === 2) {
            this.showFooter = false;
            if (detail.from === 1 || detail.from === 3) {
                this.openFlowDetect();
            }
        }
        else if (activeStep === src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].bookingDone) {
            this.showFooter = false;
            const audioFile = this.isDoneFlow ? src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_7__["AUDIO_FILES"].bookingDoneIntro : src_app_shared_constant_audio_files__WEBPACK_IMPORTED_MODULE_7__["AUDIO_FILES"].bookingDoneError;
            this.utilService.playAudio(audioFile);
        }
    }
    /**
     *
     * Xử lý khi nhận diện xong
     */
    onVerify({ isDone = true }) {
        this.isDoneFlow = isDone;
        this.next();
    }
    /**
     * Reset Flow
     */
    resetFlow() {
        this.stepper.to(0);
    }
    /**
     * Focus ô input để lấy mã
     */
    focusQrInput() {
        const event = {
            receiver: src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].scanQR,
            message: src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].focusQrInput,
        };
        this.hubService.sendEvent(event);
    }
    /**
     * Bật popup chọn giấy tờ khi vào màn hình Scan
     */
    openFlowDetect() {
        console.log('open flow detect');
        this.showFlowDetect = true;
        setTimeout(() => {
            const event = {
                receiver: src_app_shared_constant_pages__WEBPACK_IMPORTED_MODULE_5__["PAGES"].flowDetect,
                message: src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].openScanModal,
            };
            this.hubService.sendEvent(event);
        }, 0);
    }
    /**
     *
     * Close Flow Detect
     */
    closeFlowDetect(guestData) {
        console.log('close flow detect: ', guestData, this.bookingData);
        if (guestData) {
            this.bookingData = Object.assign(Object.assign({}, this.bookingData), guestData);
        }
        this.showFlowDetect = false;
        setTimeout(() => {
            this.initStepper();
            this.addListener();
            this.stepper.to(3);
        }, 0);
    }
    /**
     *
     * UPDATE STEP TRONG FLOW DETECT
     */
    changeStepInsideFlowDetect(detectStep) {
        if (detectStep === 'type') {
            this.showFlowDetect = false;
            this.closeFlowDetect(null);
        }
        else {
            this.openFlowDetect();
        }
        // switch (detectStep) {
        //   case 'type':
        //     this.showFlowDetect = false;
        //     this.closeFlowDetect(null);
        //     break;
        //   case 'front':
        //     this.flowDetectComp.progress.key = 'type';
        //     break;
        //   case 'back':
        //     this.flowDetectComp.progress.key = 'front';
        //     break;
        //   case 'face':
        //     this.flowDetectComp.progress.key = 'back';
        //     break;
        //   default:
        //     break;
        // }
    }
    /**
     * Nhả thẻ khi nhận diện thành công
     */
    processCard(guestData) {
        var _a, _b;
        this.bookingData = Object.assign(Object.assign({}, this.bookingData), guestData);
        console.log('process card | booking data: ', this.bookingData);
        this.hubService.setLoading(true);
        this.bookingService
            .checkin({
            resvNo: (_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.resvNo,
            roomCode: (_b = this.bookingData) === null || _b === void 0 ? void 0 : _b.roomCode,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((res) => {
            if (res.statusCode === 200) {
                return this.dispenserService.moveToRfPos();
            }
            else {
                const message = this.translateService.instant('msg.errorCheckin');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ code: res.statusCode, message });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((res) => {
            if (res.code === 0) {
                return this.writeCard();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ code: res.code, message: res.message });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((res) => {
            if (res.code === 0) {
                return this.dispenserService.eject();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ code: res.code, message: res.message });
            }
        }))
            .subscribe((res) => {
            if (res.code === 0) {
                this.onVerify({ isDone: true });
            }
            else {
                this.hubService.error(res.message);
                this.onVerify({ isDone: false });
            }
        }, ({ code, message }) => {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production) {
                this.next();
                return;
            }
            this.hubService.error(message);
            this.onVerify({ isDone: false });
        })
            .add(() => {
            this.hubService.setLoading(false);
        });
    }
    /**
     *
     * Ghi thẻ
     */
    writeCard() {
        const lockArrDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.bookingData['arrivalDate']).format('yyyy-MM-DD');
        const lockDeptDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.bookingData['departDate']).format('yyyy-MM-DD');
        const lockArrTime = moment__WEBPACK_IMPORTED_MODULE_4__(this.bookingData['arrivalTime'], 'HH:mm').format('HH:mm:ss');
        const lockDeptTime = moment__WEBPACK_IMPORTED_MODULE_4__(this.bookingData['departTime'], 'HH:mm').format('HH:mm:ss');
        const body = {
            room: this.bookingData['roomCode'],
            building: this.bookingData['buildingCode'],
            arrival: `${lockArrDate} ${lockArrTime}`,
            departure: `${lockDeptDate} ${lockDeptTime}`,
        };
        return this.lockCardService.writeCard(body);
    }
    /**
     * NAVIGATION
     */
    goToPreviousStep() {
        const componentName = this.getActiveStep();
        const type = src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].backStep;
        const data = {
            receiver: componentName,
            message: type,
        };
        this.hubService.sendEvent(data);
    }
    gotoNextStep() {
        console.log('go to next step');
        const componentName = this.getActiveStep();
        const type = src_app_shared_constant_event__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].nextStep;
        const data = {
            receiver: componentName,
            message: type,
        };
        this.hubService.sendEvent(data);
    }
    getActiveStep() {
        const bsStepperContent = document.getElementById('bsStepperContent');
        const activeStep = bsStepperContent === null || bsStepperContent === void 0 ? void 0 : bsStepperContent.querySelector('.dstepper-block.active');
        return (activeStep === null || activeStep === void 0 ? void 0 : activeStep.getAttribute('data-name')) || '';
    }
    getActiveStepHeader() {
        const bsStepperHeader = document.querySelector('.bsStepperContent');
        const activeStep = bsStepperHeader === null || bsStepperHeader === void 0 ? void 0 : bsStepperHeader.querySelector('.step.active');
        return activeStep || '';
    }
}
FlowCheckinComponent.ɵfac = function FlowCheckinComponent_Factory(t) { return new (t || FlowCheckinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_hub_hub_service__WEBPACK_IMPORTED_MODULE_12__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_dispenser_dispenser_service__WEBPACK_IMPORTED_MODULE_13__["DispenserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_lock_card_lock_card_service__WEBPACK_IMPORTED_MODULE_14__["LockCardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_16__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_17__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_room_availability_room_availability_service__WEBPACK_IMPORTED_MODULE_18__["RoomAvailabilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"])); };
FlowCheckinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: FlowCheckinComponent, selectors: [["app-flow-checkin"]], viewQuery: function FlowCheckinComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.flowDetectComp = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "horizon-stepper-container", 4, "ngIf"], [3, "sendGuestInfo", "backStep", 4, "ngIf"], [1, "horizon-stepper-container"], ["app-card-body", "", 1, "d-flex", "flex-column"], ["id", "stepper-checkin", 1, "bs-stepper", "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "bs-stepper-header", "wrapper"], ["class", "step", "data-target", "#step-scan-qr", 4, "ngIf"], ["class", "step", "data-target", "#step-booking-code", 4, "ngIf"], ["data-target", "#step-booking-details", 1, "step"], [1, "step-trigger"], [1, "bs-stepper-circle"], [1, "bs-stepper-label"], ["data-target", "#step-scan-idcard-passport", 1, "step"], ["data-target", "#step-done", 1, "step"], ["id", "bsStepperContent", 1, "bs-stepper-content", "d-flex", "flex-column", "flex-grow-1"], ["id", "step-scan-qr", "class", "content h-100", "data-name", "scan-qr", 4, "ngIf"], ["id", "step-booking-code", "class", "content h-100", "data-name", "booking-code", 4, "ngIf"], ["id", "step-booking-details", "data-name", "booking-details", 1, "content", "h-100"], [3, "bookingData", "totalRateData", "roomAvaiData", "error", "nextStep", "changeRoomCode", "backStep", "refreshRoomAvai"], ["id", "step-scan-idcard-passport", "data-name", "scanIdCard", 1, "content", "h-100"], [3, "guestData", "detectAgain", "sendGuestInfo", "backStep"], ["id", "step-done", "data-name", "bookingDone", 1, "content", "text-center", "h-100"], [3, "isDone", "reset", "backStep"], ["app-card-footer", ""], [1, "wrapper", "flex-row", "justify-content-center", "mb-3", 3, "ngClass"], ["className", "btn-primary w-100 text-uppercase", 1, "w-80", 3, "click"], ["data-target", "#step-scan-qr", 1, "step"], ["data-type", "not", 1, "d-show"], ["data-type", "done", 1, "d-none"], [1, "fa", "fa-check-circle"], ["data-target", "#step-booking-code", 1, "step"], ["id", "step-scan-qr", "data-name", "scan-qr", 1, "content", "h-100"], [3, "nextStep", "backStep"], ["id", "step-booking-code", "data-name", "booking-code", 1, "content", "h-100"], [3, "sendGuestInfo", "backStep"], ["flowDetectComp", ""]], template: function FlowCheckinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, FlowCheckinComponent_app_card_0_Template, 41, 24, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, FlowCheckinComponent_app_flow_detect_1_Template, 2, 0, "app-flow-detect", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.showFlowDetect);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showFlowDetect);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _shared_components_app_card_app_card_app_card_component__WEBPACK_IMPORTED_MODULE_21__["AppCardComponent"], _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_22__["BookingDetailsComponent"], _scan_identity_card_scan_identity_card_component__WEBPACK_IMPORTED_MODULE_23__["ScanIdentityCardComponent"], _booking_done_booking_done_component__WEBPACK_IMPORTED_MODULE_24__["BookingDoneComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["DefaultClassDirective"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_26__["ButtonComponent"], _scan_qr_scan_qr_component__WEBPACK_IMPORTED_MODULE_27__["ScanQrComponent"], _booking_code_booking_code_component__WEBPACK_IMPORTED_MODULE_28__["BookingCodeComponent"], _flow_detect_flow_detect_component__WEBPACK_IMPORTED_MODULE_29__["FlowDetectComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]], styles: [".bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]{display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:20px;font-size:1rem;font-weight:700;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;user-select:none;background-color:transparent;border:none;border-radius:.25rem;transition:background-color .15s ease-out,color .15s ease-out}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger.disabled[_ngcontent-%COMP%], .bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:disabled{pointer-events:none;opacity:.65}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:focus{color:#007bff;outline:0}\n.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:rgba(0,0,0,.06)}\n@media (max-width:520px){.bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%]{flex-direction:column;padding:10px}}\n.bs-stepper-label[_ngcontent-%COMP%]{display:inline-block;margin:.25rem}\n.bs-stepper-header[_ngcontent-%COMP%]{display:flex;align-items:center}\n@media (max-width:520px){.bs-stepper-header[_ngcontent-%COMP%]{margin:0 -10px;text-align:center}}\n.bs-stepper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .bs-stepper-line[_ngcontent-%COMP%]{flex:1 0 32px;min-width:1px;min-height:1px;margin:auto;background-color:rgba(0,0,0,.12)}\n@media (max-width:400px){.bs-stepper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .bs-stepper-line[_ngcontent-%COMP%]{flex-basis:20px}}\n.bs-stepper-circle[_ngcontent-%COMP%]{display:inline-flex;align-content:center;justify-content:center;width:2em;height:2em;padding:.5em 0;margin:.25rem;line-height:1em;color:#fff;background-color:#6c757d;border-radius:1em}\n.active[_ngcontent-%COMP%]   .bs-stepper-circle[_ngcontent-%COMP%]{background-color:#007bff}\n.bs-stepper-content[_ngcontent-%COMP%]{padding:0 20px 20px}\n@media (max-width:520px){.bs-stepper-content[_ngcontent-%COMP%]{padding:0}}\n.bs-stepper.vertical[_ngcontent-%COMP%]{display:flex}\n.bs-stepper.vertical[_ngcontent-%COMP%]   .bs-stepper-header[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;margin:0}\n.bs-stepper.vertical[_ngcontent-%COMP%]   .bs-stepper-pane[_ngcontent-%COMP%], .bs-stepper.vertical[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:block}\n.bs-stepper.vertical[_ngcontent-%COMP%]   .bs-stepper-pane[_ngcontent-%COMP%]:not(.fade), .bs-stepper.vertical[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:not(.fade){display:block;visibility:hidden}\n.bs-stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:not(.fade), .bs-stepper-pane[_ngcontent-%COMP%]:not(.fade){display:none}\n.bs-stepper[_ngcontent-%COMP%]   .content.fade[_ngcontent-%COMP%], .bs-stepper-pane.fade[_ngcontent-%COMP%]{visibility:hidden;transition-duration:.3s;transition-property:opacity}\n.bs-stepper[_ngcontent-%COMP%]   .content.fade.active[_ngcontent-%COMP%], .bs-stepper-pane.fade.active[_ngcontent-%COMP%]{visibility:visible;opacity:1}\n.bs-stepper[_ngcontent-%COMP%]   .content.active[_ngcontent-%COMP%]:not(.fade), .bs-stepper-pane.active[_ngcontent-%COMP%]:not(.fade){display:block;visibility:visible}\n.bs-stepper[_ngcontent-%COMP%]   .content.dstepper-block[_ngcontent-%COMP%], .bs-stepper-pane.dstepper-block[_ngcontent-%COMP%]{display:block}\n.bs-stepper[_ngcontent-%COMP%]:not(.vertical)   .bs-stepper-pane.dstepper-none[_ngcontent-%COMP%], .bs-stepper[_ngcontent-%COMP%]:not(.vertical)   .content.dstepper-none[_ngcontent-%COMP%]{display:none}\n.vertical[_ngcontent-%COMP%]   .bs-stepper-pane.fade.dstepper-none[_ngcontent-%COMP%], .vertical[_ngcontent-%COMP%]   .content.fade.dstepper-none[_ngcontent-%COMP%]{visibility:hidden}\n[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n\n\n[_ngcontent-%COMP%]:root {\n  --toolbarHeight: 41px;\n  --navBottomHeight: 29px;\n  --fontSize: 12px;\n  --symbolSize: 50px;\n  --videoWidth: 100px;\n  --grey: #9E9E9E;\n  --grey-dark: #757575;\n  --grey-light: #D4D4D4;\n  --green-light: #6F8F5D;\n  --light: #ECF8E6;\n}\n@media (min-width: 576px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 41px;\n    --navBottomHeight: 29px;\n  }\n}\n@media (min-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --symbolSize: 10px;\n    --videoWidth: 300px;\n  }\n}\n@media (min-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 194.75px;\n    --navBottomHeight: 69.5px;\n    --fontSize: 30px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px ;\n  }\n}\n@media (min-width: 1200px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 139px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 150px;\n    --videoWidth: 1000px;\n  }\n}\n@media (min-width: 3000px) {\n  [_ngcontent-%COMP%]:root {\n    --toolbarHeight: 140px;\n    --navBottomHeight: 29px;\n    --fontSize: 45px;\n    --symbolSize: 250px;\n    --videoWidth: 1500px;\n  }\n}\n.step[_ngcontent-%COMP%] {\n  border-bottom: 3px solid var(--grey-light);\n  margin-bottom: 10px;\n}\n.step.active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid var(--secondary);\n}\n.step[_ngcontent-%COMP%]   .bs-stepper-circle[_ngcontent-%COMP%] {\n  width: 4em;\n  height: 4em;\n  border-radius: 2em;\n  padding: 1.5em 0;\n  background-color: var(--grey-light);\n}\n.step.active[_ngcontent-%COMP%]   .bs-stepper-circle[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n}\n.step[_ngcontent-%COMP%]   .bs-stepper-label[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-weight: 100;\n  font-size: 0.7rem;\n}\n.bs-stepper-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYnMtc3RlcHBlci9kaXN0L2Nzcy8uLlxcLi5cXHNyY1xcY3NzXFxicy1zdGVwcGVyLmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9icy1zdGVwcGVyL2Rpc3QvY3NzL2Rpc3RcXGNzc1xcYnMtc3RlcHBlci5jc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmbG93LWNoZWNraW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXF9zdGVwcGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBLGtDQUFBO0FBT0EsOEVBQUE7QUNqQ0E7Ozs7RUFNQTtBQUFBLDBCQUNFLG1CQUNBLENBQUEsY0FDQSxDQUFBLGtCQUNBLENBQUEsc0JBQ0EsQ0FBQSxZQUNBLENBQUEsY0FDQSxDQUFBLGVBQ0EsQ0FBQSxlQUNBLENBQUEsYUFDQSxDQUFBLGlCQUNBLENBQUEsb0JBQ0EsQ0FBQSxrQkFDQSxDQUFBLHFCQUNBLENBQUEsd0JBQUEsQ0FBQSxnQkFDQSxDQUFBLDRCQUNBLENBQUEsV0FDQSxDQUFBLG9CQUNBLENBQUEsNkRBR0Y7QUFBQSx3REFDRSxjQ1dGO0FBQUEsc0VETkUsbUJBQ0EsQ0FBQSxXQUdGO0FBQUEsZ0NBQ0UsYUFDQSxDQUFBLFNBR0Y7QUFBQSxnQ0FDRSxvQkFDQSxDQUFBLGdDQUdGO0FBQUEseUJBQ0UsMEJBQ0UscUJBQ0EsQ0FBQSxZQUlKLENBQUE7QUFBQSxrQkFDRSxvQkFDQSxDQUFBLGFBR0Y7QUFBQSxtQkFDRSxZQUNBLENBQUEsa0JBR0Y7QUFBQSx5QkFDRSxtQkFDRSxjQUNBLENBQUEsaUJDZUosQ0FBQTtBQUFBLG1DRFRFLGFBQ0EsQ0FBQSxhQUNBLENBQUEsY0FDQSxDQUFBLFdBQ0EsQ0FBQSxnQ0FHRjtBQUFBLHlCQ2FFLG1DRFZFLGVBSUosQ0FBQTtBQUFBLG1CQUNFLG1CQUNBLENBQUEsb0JBQ0EsQ0FBQSxzQkFDQSxDQUFBLFNBQ0EsQ0FBQSxVQUNBLENBQUEsY0FDQSxDQUFBLGFBQ0EsQ0FBQSxlQUNBLENBQUEsVUFDQSxDQUFBLHdCQUNBLENBQUEsaUJBR0Y7QUFBQSwyQkFDRSx3QkFHRjtBQUFBLG9CQUNFLG1CQUdGO0FBQUEseUJBQ0Usb0JBQ0UsU0FJSixDQUFBO0FBQUEscUJBQ0UsWUFHRjtBQUFBLHdDQUNFLHFCQUNBLENBQUEsbUJBQ0EsQ0FBQSxRQUdGO0FBQUEsb0VBRUUsYUFHRjtBQUFBLDBGQUVFLGFBQ0EsQ0FBQSxpQkNzQkY7QUFBQSw0RERqQkUsWUFHRjtBQUFBLGdEQUVFLGlCQUNBLENBQUEsdUJBQ0EsQ0FBQSwyQkNzQkY7QUFBQSw4RERqQkUsa0JBQ0EsQ0FBQSxTQ3NCRjtBQUFBLDBFRGpCRSxhQUNBLENBQUEsa0JDc0JGO0FBQUEsb0VEakJFLGFBR0Y7QUFBQSw0R0FFRSxZQUdGO0FBQUEsb0ZBRUUsaUJBQUE7QUQxSUY7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FHOUJGO0FDQ0U7RUptQkY7SUFhSSxxQkFBQTtJQUNBLHVCQUFBO0VHN0JGO0FBQ0Y7QUNDRTtFSmFGO0lBa0JJLGtCQUFBO0lBQ0EsbUJBQUE7RUc1QkY7QUFDRjtBQ0NFO0VKT0Y7SUF1QkkseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFRzNCRjtBQUNGO0FDRkU7RUpDRjtJQStCSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VHMUJGO0FBQ0Y7QUNPRTtFSmpCRjtJQXVDSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VHekJGO0FBQ0Y7QUgzQkEsa0NBQUE7QUFPQSw4RUFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBR3dCRjtBQ3JERTtFSm1CRjtJQWFJLHFCQUFBO0lBQ0EsdUJBQUE7RUd5QkY7QUFDRjtBQ3JERTtFSmFGO0lBa0JJLGtCQUFBO0lBQ0EsbUJBQUE7RUcwQkY7QUFDRjtBQ3JERTtFSk9GO0lBdUJJLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUcyQkY7QUFDRjtBQ3hERTtFSkNGO0lBK0JJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUc0QkY7QUFDRjtBQy9DRTtFSmpCRjtJQXVDSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VHNkJGO0FBQ0Y7QUV4R0E7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0FGMkdGO0FFMUdFO0VBQ0UseUNBQUE7QUY0R0o7QUUxR0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBRjRHSjtBRTFHRTtFQUNFLGtDQUFBO0FGNEdKO0FFMUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FGNEdKO0FFeEdBO0VBQ0UsVUFBQTtBRjJHRjtBQW5JQTtFQUNFLFlBQUE7QUFzSUYiLCJmaWxlIjoiZmxvdy1jaGVja2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9taXhpbnMnO1xuXG4kZm9udFNpemVTbTogMTJweDtcbiRmb250U2l6ZU1kOiAxNnB4O1xuJGZvbnRTaXplTGc6IDMwcHg7XG4kZm9udFNpemVYbDogNDVweDtcbiRmb250U2l6ZVh4bDogNTBweDtcblxuJHN5bWJvbFNpemVTbTogNTBweDtcbiRzeW1ib2xTaXplTWQ6IDEwcHg7XG4kc3ltYm9sU2l6ZUxnOiAxNTBweDtcbiRzeW1ib2xTaXplWGw6IDI1MHB4O1xuXG4kdmlkZW9XaWR0aFNtOiAxMDBweDtcbiR2aWRlb1dpZHRoTWQ6IDMwMHB4O1xuJHZpZGVvV2lkdGhMZzogMTAwMHB4O1xuJHZpZGVvV2lkdGhYbDogMTUwMHB4O1xuXG4kY29sb3ItbGlnaHQ6ICNFQ0Y4RTY7XG4kY29sb3ItYWNjZW50OiAgIzNBNTMyQztcbiRjb2xvci1ncmVlbi1saWdodDogIzZGOEY1RDtcbiRjb2xvci1zZWNvbmRhcnk6ICNDNEE0NzQ7XG4kY29sb3ItZ3JleS1saWdodDogI0Q0RDRENDtcbiRjb2xvci1ncmV5OiAjOUU5RTlFO1xuJGNvbG9yLWdyZXktZGFyazogIzc1NzU3NTtcblxuLyogQ3VzdG9taXplIEJvb3RzdHJhcCBWYXJpYWJsZXMgKi9cbiR0aGVtZS1jb2xvcnM6IChcbiAgcHJpbWFyeTogJGNvbG9yLWFjY2VudCxcbiAgc2Vjb25kYXJ5OiAkY29sb3Itc2Vjb25kYXJ5LFxuICBsaWdodDogJGNvbG9yLWxpZ2h0LFxuKTtcblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAtLWZvbnRTaXplOiAjeyRmb250U2l6ZVNtfTtcbiAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplU219O1xuICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhTbX07XG4gIC0tZ3JleTogI3skY29sb3ItZ3JleX07XG4gIC0tZ3JleS1kYXJrOiAjeyRjb2xvci1ncmV5LWRhcmt9O1xuICAtLWdyZXktbGlnaHQ6ICN7JGNvbG9yLWdyZXktbGlnaHR9O1xuICAtLWdyZWVuLWxpZ2h0OiAjeyRjb2xvci1ncmVlbi1saWdodH07XG4gIC0tbGlnaHQ6ICN7JGNvbG9yLWxpZ2h0fTtcblxuICBAaW5jbHVkZSBzbSB7XG4gICAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICB9O1xuXG4gIEBpbmNsdWRlIG1kIHtcbiAgICAtLXN5bWJvbFNpemU6ICN7JHN5bWJvbFNpemVNZH07XG4gICAgLS12aWRlb1dpZHRoOiAjeyR2aWRlb1dpZHRoTWR9O1xuICB9O1xuXG4gIEBpbmNsdWRlIGxnIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVMZ307XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplTGd9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aExnfVxuICB9O1xuXG4gIEBpbmNsdWRlIHhsIHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDEzOXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6ICN7JGZvbnRTaXplWGx9O1xuICAgIC0tc3ltYm9sU2l6ZTogI3skc3ltYm9sU2l6ZUxnfTtcbiAgICAtLXZpZGVvV2lkdGg6ICN7JHZpZGVvV2lkdGhMZ307XG4gIH07XG5cbiAgQGluY2x1ZGUgeHh4eGwge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogI3skZm9udFNpemVYbH07XG4gICAgLS1zeW1ib2xTaXplOiAjeyRzeW1ib2xTaXplWGx9O1xuICAgIC0tdmlkZW9XaWR0aDogI3skdmlkZW9XaWR0aFhsfTtcbiAgfTtcbn0iLCIvKiFcclxuICogYnNTdGVwcGVyIHYxLjcuMCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLXN0ZXBwZXIpXHJcbiAqIENvcHlyaWdodCAyMDE4IC0gMjAxOSBKb2hhbm4tUyA8am9oYW5uLnNlcnZvaXJlQGdtYWlsLmNvbT5cclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vSm9oYW5uLVMvYnMtc3RlcHBlci9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLW91dCwgY29sb3IgLjE1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOmRpc2FibGVkLFxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyLmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAuNjU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogLjI1cmVtO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAtMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWxpbmUsXHJcbi5icy1zdGVwcGVyIC5saW5lIHtcclxuICBmbGV4OiAxIDAgMzJweDtcclxuICBtaW4td2lkdGg6IDFweDtcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXItbGluZSxcclxuICAuYnMtc3RlcHBlciAubGluZSB7XHJcbiAgICBmbGV4LWJhc2lzOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBwYWRkaW5nOiAuNWVtIDA7XHJcbiAgbWFyZ2luOiAuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxufVxyXG5cclxuLmFjdGl2ZSAuYnMtc3RlcHBlci1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuYnMtc3RlcHBlci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItcGFuZSxcclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuYnMtc3RlcHBlci1wYW5lOm5vdCguZmFkZSksXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5jb250ZW50Om5vdCguZmFkZSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItcGFuZTpub3QoLmZhZGUpLFxyXG4uYnMtc3RlcHBlciAuY29udGVudDpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuY29udGVudC5mYWRlLFxyXG4uYnMtc3RlcHBlci1wYW5lLmZhZGUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItcGFuZS5mYWRlLmFjdGl2ZSxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuZmFkZS5hY3RpdmUge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItcGFuZS5hY3RpdmU6bm90KC5mYWRlKSxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuYWN0aXZlOm5vdCguZmFkZSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuZHN0ZXBwZXItYmxvY2ssXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmRzdGVwcGVyLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJzLXN0ZXBwZXI6bm90KC52ZXJ0aWNhbCkgLmJzLXN0ZXBwZXItcGFuZS5kc3RlcHBlci1ub25lLFxyXG4uYnMtc3RlcHBlcjpub3QoLnZlcnRpY2FsKSAuY29udGVudC5kc3RlcHBlci1ub25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmVydGljYWwgLmJzLXN0ZXBwZXItcGFuZS5mYWRlLmRzdGVwcGVyLW5vbmUsXHJcbi52ZXJ0aWNhbCAuY29udGVudC5mYWRlLmRzdGVwcGVyLW5vbmUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4iLCIvKiFcclxuICogYnNTdGVwcGVyIHYxLjcuMCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLXN0ZXBwZXIpXHJcbiAqIENvcHlyaWdodCAyMDE4IC0gMjAxOSBKb2hhbm4tUyA8am9oYW5uLnNlcnZvaXJlQGdtYWlsLmNvbT5cclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vSm9oYW5uLVMvYnMtc3RlcHBlci9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIge1xyXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2Utb3V0LCBjb2xvciAuMTVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6ZGlzYWJsZWQsXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIuZGlzYWJsZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IC42NTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpmb2N1cyB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA2KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlciB7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAuMjVyZW07XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWhlYWRlciB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuYnMtc3RlcHBlci1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmJzLXN0ZXBwZXItbGluZSxcclxuLmJzLXN0ZXBwZXIgLmxpbmUge1xyXG4gIC1tcy1mbGV4OiAxIDAgMzJweDtcclxuICAgICAgZmxleDogMSAwIDMycHg7XHJcbiAgbWluLXdpZHRoOiAxcHg7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5icy1zdGVwcGVyLWxpbmUsXHJcbiAgLmJzLXN0ZXBwZXIgLmxpbmUge1xyXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDIwcHg7XHJcbiAgICAgICAgZmxleC1iYXNpczogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNpcmNsZSB7XHJcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMmVtO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHBhZGRpbmc6IC41ZW0gMDtcclxuICBtYXJnaW46IC4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG59XHJcblxyXG4uYWN0aXZlIC5icy1zdGVwcGVyLWNpcmNsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5icy1zdGVwcGVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuYnMtc3RlcHBlci1oZWFkZXIge1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xyXG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmUsXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItcGFuZTpub3QoLmZhZGUpLFxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuY29udGVudDpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmU6bm90KC5mYWRlKSxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQ6bm90KC5mYWRlKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuZmFkZSxcclxuLmJzLXN0ZXBwZXItcGFuZS5mYWRlIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuZmFkZS5hY3RpdmUsXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmZhZGUuYWN0aXZlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuYWN0aXZlOm5vdCguZmFkZSksXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmFjdGl2ZTpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lLmRzdGVwcGVyLWJsb2NrLFxyXG4uYnMtc3RlcHBlciAuY29udGVudC5kc3RlcHBlci1ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyOm5vdCgudmVydGljYWwpIC5icy1zdGVwcGVyLXBhbmUuZHN0ZXBwZXItbm9uZSxcclxuLmJzLXN0ZXBwZXI6bm90KC52ZXJ0aWNhbCkgLmNvbnRlbnQuZHN0ZXBwZXItbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmUuZmFkZS5kc3RlcHBlci1ub25lLFxyXG4udmVydGljYWwgLmNvbnRlbnQuZmFkZS5kc3RlcHBlci1ub25lIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJzLXN0ZXBwZXIuY3NzLm1hcCAqLyIsIi8qIEN1c3RvbWl6ZSBCb290c3RyYXAgVmFyaWFibGVzICovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0ICd+YnMtc3RlcHBlci9kaXN0L2Nzcy9icy1zdGVwcGVyLm1pbi5jc3MnO1xuOnJvb3Qge1xuICAtLXRvb2xiYXJIZWlnaHQ6IDQxcHg7XG4gIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAtLWZvbnRTaXplOiAxMnB4O1xuICAtLXN5bWJvbFNpemU6IDUwcHg7XG4gIC0tdmlkZW9XaWR0aDogMTAwcHg7XG4gIC0tZ3JleTogIzlFOUU5RTtcbiAgLS1ncmV5LWRhcms6ICM3NTc1NzU7XG4gIC0tZ3JleS1saWdodDogI0Q0RDRENDtcbiAgLS1ncmVlbi1saWdodDogIzZGOEY1RDtcbiAgLS1saWdodDogI0VDRjhFNjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tc3ltYm9sU2l6ZTogMTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTk0Ljc1cHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDY5LjVweDtcbiAgICAtLWZvbnRTaXplOiAzMHB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHggO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDEzOXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiAyOXB4O1xuICAgIC0tZm9udFNpemU6IDQ1cHg7XG4gICAgLS1zeW1ib2xTaXplOiAxNTBweDtcbiAgICAtLXZpZGVvV2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMwMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxNDBweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMjUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxNTAwcHg7XG4gIH1cbn1cblxuLyogQ3VzdG9taXplIEJvb3RzdHJhcCBWYXJpYWJsZXMgKi9cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS10b29sYmFySGVpZ2h0OiA0MXB4O1xuICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgLS1mb250U2l6ZTogMTJweDtcbiAgLS1zeW1ib2xTaXplOiA1MHB4O1xuICAtLXZpZGVvV2lkdGg6IDEwMHB4O1xuICAtLWdyZXk6ICM5RTlFOUU7XG4gIC0tZ3JleS1kYXJrOiAjNzU3NTc1O1xuICAtLWdyZXktbGlnaHQ6ICNENEQ0RDQ7XG4gIC0tZ3JlZW4tbGlnaHQ6ICM2RjhGNUQ7XG4gIC0tbGlnaHQ6ICNFQ0Y4RTY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogNDFweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXN5bWJvbFNpemU6IDEwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDpyb290IHtcbiAgICAtLXRvb2xiYXJIZWlnaHQ6IDE5NC43NXB4O1xuICAgIC0tbmF2Qm90dG9tSGVpZ2h0OiA2OS41cHg7XG4gICAgLS1mb250U2l6ZTogMzBweDtcbiAgICAtLXN5bWJvbFNpemU6IDE1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTAwMHB4IDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6cm9vdCB7XG4gICAgLS10b29sYmFySGVpZ2h0OiAxMzlweDtcbiAgICAtLW5hdkJvdHRvbUhlaWdodDogMjlweDtcbiAgICAtLWZvbnRTaXplOiA0NXB4O1xuICAgIC0tc3ltYm9sU2l6ZTogMTUwcHg7XG4gICAgLS12aWRlb1dpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMDAwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tdG9vbGJhckhlaWdodDogMTQwcHg7XG4gICAgLS1uYXZCb3R0b21IZWlnaHQ6IDI5cHg7XG4gICAgLS1mb250U2l6ZTogNDVweDtcbiAgICAtLXN5bWJvbFNpemU6IDI1MHB4O1xuICAgIC0tdmlkZW9XaWR0aDogMTUwMHB4O1xuICB9XG59XG5cbi5zdGVwIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnN0ZXAuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG59XG4uc3RlcCAuYnMtc3RlcHBlci1jaXJjbGUge1xuICB3aWR0aDogNGVtO1xuICBoZWlnaHQ6IDRlbTtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICBwYWRkaW5nOiAxLjVlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTtcbn1cbi5zdGVwLmFjdGl2ZSAuYnMtc3RlcHBlci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLnN0ZXAgLmJzLXN0ZXBwZXItbGFiZWwge1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuXG4uYnMtc3RlcHBlci1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiQG1peGluIGdlbi10ZXh0KCRmb250LXNpemUpIHtcclxuICBmb250LXNpemU6IHZhcigkZm9udC1zaXplKTtcclxuICBsaW5lLWhlaWdodDogdmFyKCRmb250LXNpemUpO1xyXG59XHJcblxyXG4kc20td2lkdGg6IDU3NnB4O1xyXG4kbWQtd2lkdGg6IDc2OHB4O1xyXG4kbGctd2lkdGg6IDk5MnB4O1xyXG4keGwtd2lkdGg6IDEyMDBweDtcclxuJHh4bC13aWR0aDogMTQwMHB4O1xyXG4keHh4bC13aWR0aDogMTU0M3B4O1xyXG4keHh4eGwtd2lkdGg6IDMwMDBweDtcclxuXHJcblxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzbS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbWQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGxnLXdpZHRofSl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skeHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4geHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eGwtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB4eHh4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHh4eHhsLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ35icy1zdGVwcGVyL2Rpc3QvY3NzL2JzLXN0ZXBwZXIubWluLmNzcyc7XHJcbkBpbXBvcnQgJy4vdmFyaWFibGVzJztcclxuXHJcbi5zdGVwIHtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcclxuICB9XHJcbiAgLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICAgIHdpZHRoOiA0ZW07XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTtcclxuICB9XHJcbiAgJi5hY3RpdmUgLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgfVxyXG4gIC5icy1zdGVwcGVyLWxhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('btnAppear', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                    display: 'flex',
                    opacity: 1,
                    width: '100%',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                    display: 'none',
                    opacity: 0,
                    width: 0,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('.1s')]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('visible => hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('.1s')]),
            ]),
        ] } });


/***/ }),

/***/ "xb2s":
/*!************************************************************!*\
  !*** ./src/app/shared/services/utility/utility.service.ts ***!
  \************************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class UtilityService {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.prefixAudio = `assets/audio`;
    }
    /**
     * Bật file audio
     */
    playAudio(fileName = '') {
        const path = this.generateAudioPath(fileName);
        if (this.cachedAudio) {
            this.cachedAudio.pause();
        }
        this.cachedAudio = new Audio(path);
        this.playAudioFile();
    }
    /**
     *
     * @param arr string
     * @param dept string
     * @returns Số đêm
     */
    displayNumNight(arr, dept) {
        if (arr === dept) {
            return `1`;
        }
        const start = moment__WEBPACK_IMPORTED_MODULE_0__(arr);
        const end = moment__WEBPACK_IMPORTED_MODULE_0__(dept);
        const result = end.diff(start, 'd');
        return `${result || ''}`;
    }
    displayDateDmy(date) {
        if (moment__WEBPACK_IMPORTED_MODULE_0__(date).isValid()) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('DD/MM/YYYY') || '';
        }
        return '';
    }
    dateYmd(date) {
        if (moment__WEBPACK_IMPORTED_MODULE_0__(date).isValid()) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('YYYY/MM/DD') || '';
        }
        return '';
    }
    ngBDateToNormalDate(date) {
        if (date) {
            return new Date(date.year, date.month - 1, date.day);
        }
        return null;
    }
    /**
     * Bật lại file audio gần nhất vừa dùng
     */
    replayAudio() {
        this.playAudioFile();
    }
    playAudioFile() {
        this.cachedAudio.autoplay = true;
        this.cachedAudio.play();
    }
    generateAudioPath(fileName = '') {
        const langCode = this.translate.currentLang;
        const path = `${this.prefixAudio}/${langCode}/${fileName}`;
        return path;
    }
    /**
     * Định dạng tiền
     */
    formatMoney(num) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num).replace('₫', '');
    }
    /**
     * Get Location
     */
    getCurrentPage(route = '') {
        const splited = this.splitRoute(route || this.router.url);
        const step = splited.pop();
        const page = splited.pop();
        return page;
    }
    getCurrentStep(route = '') {
        const splited = this.splitRoute(route || this.router.url);
        const step = splited.pop();
        return step;
    }
    splitRoute(route = '') {
        return (route || this.router.url).split(/[\/?]/);
    }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "y4cI":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/checkin-boooking-code/checkin-boooking-code.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckinBoookingCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinBoookingCodeComponent", function() { return CheckinBoookingCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CheckinBoookingCodeComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckinBoookingCodeComponent.ɵfac = function CheckinBoookingCodeComponent_Factory(t) { return new (t || CheckinBoookingCodeComponent)(); };
CheckinBoookingCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckinBoookingCodeComponent, selectors: [["app-checkin-boooking-code"]], decls: 2, vars: 0, template: function CheckinBoookingCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "checkin-boooking-code works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2luLWJvb29raW5nLWNvZGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "yGOH":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/directives.module.ts ***!
  \********************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button.directive */ "+dth");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DirectivesModule {
}
DirectivesModule.ɵfac = function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); };
DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [_button_button_directive__WEBPACK_IMPORTED_MODULE_1__["ButtonDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_button_button_directive__WEBPACK_IMPORTED_MODULE_1__["ButtonDirective"]] }); })();


/***/ }),

/***/ "yegS":
/*!*******************************************************!*\
  !*** ./src/app/config/configure/configure.service.ts ***!
  \*******************************************************/
/*! exports provided: ConfigureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureService", function() { return ConfigureService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ConfigureService {
    constructor(http) {
        this.http = http;
        this.configFile = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].envConfigPath;
        console.log(this.configFile);
    }
    loadConfig() {
        return new Promise((resolve, reject) => {
            this.http.get(this.configFile).toPromise().then((response) => {
                ConfigureService.config = response;
                resolve();
            }).catch((response) => {
                reject(`Could not load the config file`);
            });
        });
    }
}
ConfigureService.ɵfac = function ConfigureService_Factory(t) { return new (t || ConfigureService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ConfigureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigureService, factory: ConfigureService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zSBF":
/*!***********************************************************!*\
  !*** ./src/app/layout/checkin-qr/checkin-qr.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckinQrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinQrComponent", function() { return CheckinQrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CheckinQrComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckinQrComponent.ɵfac = function CheckinQrComponent_Factory(t) { return new (t || CheckinQrComponent)(); };
CheckinQrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckinQrComponent, selectors: [["app-checkin-qr"]], decls: 2, vars: 0, template: function CheckinQrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "checkin-qr works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2luLXFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map