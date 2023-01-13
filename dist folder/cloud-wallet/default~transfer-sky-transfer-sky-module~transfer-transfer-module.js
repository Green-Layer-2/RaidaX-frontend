(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~transfer-sky-transfer-sky-module~transfer-transfer-module"],{

/***/ "mnSs":
/*!******************************************************************************!*\
  !*** ./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js ***!
  \******************************************************************************/
/*! exports provided: TooltipComponent, TooltipDirective, TooltipModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TooltipOptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");






function TooltipComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function TooltipComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function TooltipComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TooltipComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.value);
} }
function TooltipComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class TooltipComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._show = false;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    transitionEnd(event) {
        if (this.show) {
            this.events.emit({
                type: 'shown'
            });
        }
    }
    set show(value) {
        if (value) {
            this.setPosition();
        }
        this._show = this.hostClassShow = value;
    }
    get show() {
        return this._show;
    }
    get placement() {
        return this.data.options.placement;
    }
    get autoPlacement() {
        return this.data.options.autoPlacement;
    }
    get element() {
        return this.data.element;
    }
    get elementPosition() {
        return this.data.elementPosition;
    }
    get options() {
        return this.data.options;
    }
    get value() {
        return this.data.value;
    }
    get tooltipOffset() {
        return Number(this.data.options.offset);
    }
    get isThemeLight() {
        return this.options['theme'] === 'light';
    }
    ngOnInit() {
        this.setCustomClass();
        this.setStyles();
    }
    setPosition() {
        if (this.setHostStyle(this.placement)) {
            this.setPlacementClass(this.placement);
            return;
        }
        else {
            /* Is tooltip outside the visible area */
            const placements = ['top', 'right', 'bottom', 'left'];
            let isPlacementSet;
            for (const placement of placements) {
                if (this.setHostStyle(placement)) {
                    this.setPlacementClass(placement);
                    isPlacementSet = true;
                    return;
                }
            }
            /* Set original placement */
            if (!isPlacementSet) {
                this.setHostStyle(this.placement, true);
                this.setPlacementClass(this.placement);
            }
        }
    }
    setPlacementClass(placement) {
        this.renderer.addClass(this.elementRef.nativeElement, 'tooltip-' + placement);
    }
    setHostStyle(placement, disableAutoPlacement = false) {
        const isSvg = this.element instanceof SVGElement;
        const tooltip = this.elementRef.nativeElement;
        const isCustomPosition = !this.elementPosition.right;
        let elementHeight = isSvg ? this.element.getBoundingClientRect().height : this.element.offsetHeight;
        let elementWidth = isSvg ? this.element.getBoundingClientRect().width : this.element.offsetWidth;
        const tooltipHeight = tooltip.clientHeight;
        const tooltipWidth = tooltip.clientWidth;
        const scrollY = window.pageYOffset;
        if (isCustomPosition) {
            elementHeight = 0;
            elementWidth = 0;
        }
        let topStyle;
        let leftStyle;
        if (placement === 'top') {
            topStyle = (this.elementPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset);
        }
        if (placement === 'bottom') {
            topStyle = (this.elementPosition.top + scrollY) + elementHeight + this.tooltipOffset;
        }
        if (placement === 'top' || placement === 'bottom') {
            leftStyle = (this.elementPosition.left + elementWidth / 2) - tooltipWidth / 2;
        }
        if (placement === 'left') {
            leftStyle = this.elementPosition.left - tooltipWidth - this.tooltipOffset;
        }
        if (placement === 'right') {
            leftStyle = this.elementPosition.left + elementWidth + this.tooltipOffset;
        }
        if (placement === 'left' || placement === 'right') {
            topStyle = (this.elementPosition.top + scrollY) + elementHeight / 2 - tooltip.clientHeight / 2;
        }
        /* Is tooltip outside the visible area */
        if (this.autoPlacement && !disableAutoPlacement) {
            const topEdge = topStyle;
            const bottomEdge = topStyle + tooltipHeight;
            const leftEdge = leftStyle;
            const rightEdge = leftStyle + tooltipWidth;
            const bodyHeight = window.innerHeight + scrollY;
            const bodyWidth = document.body.clientWidth;
            if (topEdge < 0 || bottomEdge > bodyHeight || leftEdge < 0 || rightEdge > bodyWidth) {
                return false;
            }
        }
        this.hostStyleTop = topStyle + 'px';
        this.hostStyleLeft = leftStyle + 'px';
        return true;
    }
    setZIndex() {
        if (this.options['zIndex'] !== 0) {
            this.hostStyleZIndex = this.options['zIndex'];
        }
    }
    setPointerEvents() {
        if (this.options['pointerEvents']) {
            this.hostStylePointerEvents = this.options['pointerEvents'];
        }
    }
    setCustomClass() {
        if (this.options['tooltipClass']) {
            this.options['tooltipClass'].split(' ').forEach(className => {
                this.renderer.addClass(this.elementRef.nativeElement, className);
            });
        }
    }
    setAnimationDuration() {
        if (Number(this.options['animationDuration']) != this.options['animationDurationDefault']) {
            this.hostStyleTransition = 'opacity ' + this.options['animationDuration'] + 'ms';
        }
    }
    setStyles() {
        this.setZIndex();
        this.setPointerEvents();
        this.setAnimationDuration();
        this.hostClassShadow = this.options['shadow'];
        this.hostClassLight = this.isThemeLight;
        this.hostStyleMaxWidth = this.options['maxWidth'] + "px";
        this.hostStyleWidth = this.options['width'] ? this.options['width'] + "px" : '';
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["tooltip"]], hostAttrs: [1, "tooltip"], hostVars: 20, hostBindings: function TooltipComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function TooltipComponent_transitionend_HostBindingHandler($event) { return ctx.transitionEnd($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.hostStyleTop)("left", ctx.hostStyleLeft)("z-index", ctx.hostStyleZIndex)("pointer-events", ctx.hostStylePointerEvents)("transition", ctx.hostStyleTransition)("max-width", ctx.hostStyleMaxWidth)("width", ctx.hostStyleWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tooltip-show", ctx.hostClassShow)("tooltip-shadow", ctx.hostClassShadow)("tooltip-light", ctx.hostClassLight);
    } }, inputs: { show: "show", data: "data" }, decls: 4, vars: 3, consts: [["class", "tooltip-arrow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["htmlOrStringTemplate", ""], [1, "tooltip-arrow"], [4, "ngTemplateOutlet"], [3, "innerHTML"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TooltipComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TooltipComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TooltipComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isThemeLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options["contentType"] === "template")("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%]{background-color:#000;border-radius:6px;color:#fff;display:block;left:0;max-width:200px;opacity:0;padding:5px 8px;pointer-events:none;position:absolute;text-align:center;top:0;transition:opacity .3s;z-index:1000}.tooltip-show[_nghost-%COMP%]{opacity:1}.tooltip-shadow[_nghost-%COMP%]{box-shadow:0 7px 15px -5px rgba(0,0,0,.4)}.tooltip-light.tooltip-shadow[_nghost-%COMP%]{box-shadow:0 5px 15px -5px rgba(0,0,0,.4)}.tooltip[_nghost-%COMP%]:after{border-style:solid;content:\"\";position:absolute}.tooltip-top[_nghost-%COMP%]:after{border-color:#000 transparent transparent;border-width:5px;left:50%;margin-left:-5px;top:100%}.tooltip-bottom[_nghost-%COMP%]:after{border-color:transparent transparent #000;border-width:5px;bottom:100%;left:50%;margin-left:-5px}.tooltip-left[_nghost-%COMP%]:after{border-color:transparent transparent transparent #000;border-width:5px;left:100%;margin-top:-5px;top:50%}.tooltip-right[_nghost-%COMP%]:after{border-color:transparent #000 transparent transparent;border-width:5px;margin-top:-5px;right:100%;top:50%}.tooltip-light[_nghost-%COMP%]:after{display:none}.tooltip-light[_nghost-%COMP%]{background-color:#fff;border:1px solid rgba(0,0,0,.06);color:#000}.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.07);height:10px;position:absolute;transform:rotate(135deg);width:10px}.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{background-color:#fff;content:\"\";display:block;height:10px;position:absolute;width:10px}.tooltip-top.tooltip-light[_nghost-%COMP%]{margin-top:-2px}.tooltip-top.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{background:linear-gradient(to bottom left,rgba(0,0,0,.07) 50%,transparent 0);left:50%;margin-left:-5px;margin-top:-4px;top:100%}.tooltip-top.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{right:1px;top:1px}.tooltip-bottom.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{background:linear-gradient(to top right,rgba(0,0,0,.1) 50%,transparent 0);bottom:100%;left:50%;margin-bottom:-4px;margin-left:-5px}.tooltip-bottom.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{right:-1px;top:-1px}.tooltip-left.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,rgba(0,0,0,.07) 50%,transparent 0);left:100%;margin-left:-4px;margin-top:-5px;top:50%}.tooltip-left.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{right:-1px;top:1px}.tooltip-right.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{background:linear-gradient(to top left,rgba(0,0,0,.07) 50%,transparent 0);margin-right:-4px;margin-top:-5px;right:100%;top:50%}.tooltip-right.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{right:1px;top:-1px}"] });
TooltipComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
TooltipComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hostStyleTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.top',] }],
    hostStyleLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.left',] }],
    hostStyleZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.z-index',] }],
    hostStyleTransition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.transition',] }],
    hostStyleWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    hostStyleMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.max-width',] }],
    hostStylePointerEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.pointer-events',] }],
    hostClassShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tooltip-show',] }],
    hostClassShadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tooltip-shadow',] }],
    hostClassLight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tooltip-light',] }],
    transitionEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['transitionend', ['$event'],] }],
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tooltip',
                template: "<div *ngIf=\"isThemeLight\" class=\"tooltip-arrow\"></div>\r\n\r\n<div *ngIf=\"options['contentType'] === 'template' else htmlOrStringTemplate\">\r\n\r\n\t<ng-container *ngTemplateOutlet=\"value\"></ng-container>\r\n</div>\r\n\r\n<ng-template #htmlOrStringTemplate>\r\n\t<div [innerHTML]=\"value\"></div>\r\n</ng-template>\r\n",
                host: {
                    'class': 'tooltip'
                },
                styles: [":host{background-color:#000;border-radius:6px;color:#fff;display:block;left:0;max-width:200px;opacity:0;padding:5px 8px;pointer-events:none;position:absolute;text-align:center;top:0;transition:opacity .3s;z-index:1000}:host.tooltip-show{opacity:1}:host.tooltip-shadow{box-shadow:0 7px 15px -5px rgba(0,0,0,.4)}:host.tooltip-light.tooltip-shadow{box-shadow:0 5px 15px -5px rgba(0,0,0,.4)}:host.tooltip:after{border-style:solid;content:\"\";position:absolute}:host.tooltip-top:after{border-color:#000 transparent transparent;border-width:5px;left:50%;margin-left:-5px;top:100%}:host.tooltip-bottom:after{border-color:transparent transparent #000;border-width:5px;bottom:100%;left:50%;margin-left:-5px}:host.tooltip-left:after{border-color:transparent transparent transparent #000;border-width:5px;left:100%;margin-top:-5px;top:50%}:host.tooltip-right:after{border-color:transparent #000 transparent transparent;border-width:5px;margin-top:-5px;right:100%;top:50%}:host.tooltip-light:after{display:none}:host.tooltip-light{background-color:#fff;border:1px solid rgba(0,0,0,.06);color:#000}:host.tooltip-light .tooltip-arrow{background-color:rgba(0,0,0,.07);height:10px;position:absolute;transform:rotate(135deg);width:10px}:host.tooltip-light .tooltip-arrow:after{background-color:#fff;content:\"\";display:block;height:10px;position:absolute;width:10px}:host.tooltip-top.tooltip-light{margin-top:-2px}:host.tooltip-top.tooltip-light .tooltip-arrow{background:linear-gradient(to bottom left,rgba(0,0,0,.07) 50%,transparent 0);left:50%;margin-left:-5px;margin-top:-4px;top:100%}:host.tooltip-top.tooltip-light .tooltip-arrow:after{right:1px;top:1px}:host.tooltip-bottom.tooltip-light .tooltip-arrow{background:linear-gradient(to top right,rgba(0,0,0,.1) 50%,transparent 0);bottom:100%;left:50%;margin-bottom:-4px;margin-left:-5px}:host.tooltip-bottom.tooltip-light .tooltip-arrow:after{right:-1px;top:-1px}:host.tooltip-left.tooltip-light .tooltip-arrow{background:linear-gradient(to bottom right,rgba(0,0,0,.07) 50%,transparent 0);left:100%;margin-left:-4px;margin-top:-5px;top:50%}:host.tooltip-left.tooltip-light .tooltip-arrow:after{right:-1px;top:1px}:host.tooltip-right.tooltip-light .tooltip-arrow{background:linear-gradient(to top left,rgba(0,0,0,.07) 50%,transparent 0);margin-right:-4px;margin-top:-5px;right:100%;top:50%}:host.tooltip-right.tooltip-light .tooltip-arrow:after{right:1px;top:-1px}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { transitionEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['transitionend', ['$event']]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostClassShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.tooltip-show']
        }], hostStyleTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.top']
        }], hostStyleLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.left']
        }], hostStyleZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.z-index']
        }], hostStylePointerEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.pointer-events']
        }], hostStyleTransition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.transition']
        }], hostClassShadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.tooltip-shadow']
        }], hostClassLight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.tooltip-light']
        }], hostStyleMaxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.max-width']
        }], hostStyleWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionToken used to import the config (initOptions) object, provided from the outside
 */
const TooltipOptionsService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('TooltipOptions');

const defaultOptions = {
    'placement': 'top',
    'autoPlacement': true,
    'contentType': 'string',
    'showDelay': 0,
    'hideDelay': 300,
    'hideDelayMobile': 0,
    'hideDelayTouchscreen': 0,
    'zIndex': 0,
    'animationDuration': 300,
    'animationDurationDefault': 300,
    'trigger': 'hover',
    'tooltipClass': '',
    'display': true,
    'displayMobile': true,
    'displayTouchscreen': true,
    'shadow': true,
    'theme': 'dark',
    'offset': 8,
    'maxWidth': '',
    'id': false,
    'hideDelayAfterClick': 2000
};
const backwardCompatibilityOptions = {
    'delay': 'showDelay',
    'show-delay': 'showDelay',
    'hide-delay': 'hideDelay',
    'hide-delay-mobile': 'hideDelayTouchscreen',
    'hideDelayMobile': 'hideDelayTouchscreen',
    'z-index': 'zIndex',
    'animation-duration': 'animationDuration',
    'animation-duration-default': 'animationDurationDefault',
    'tooltip-class': 'tooltipClass',
    'display-mobile': 'displayTouchscreen',
    'displayMobile': 'displayTouchscreen',
    'max-width': 'maxWidth'
};

class TooltipDirective {
    constructor(initOptions, elementRef, componentFactoryResolver, appRef, injector) {
        this.initOptions = initOptions;
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this._showDelay = 0;
        this._hideDelay = 300;
        this._options = {};
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set options(value) {
        if (value && defaultOptions) {
            this._options = value;
        }
    }
    get options() {
        return this._options;
    }
    get isTooltipDestroyed() {
        return this.componentRef && this.componentRef.hostView.destroyed;
    }
    get destroyDelay() {
        if (this._destroyDelay) {
            return this._destroyDelay;
        }
        else {
            return Number(this.getHideDelay()) + Number(this.options['animationDuration']);
        }
    }
    set destroyDelay(value) {
        this._destroyDelay = value;
    }
    get tooltipPosition() {
        if (this.options['position']) {
            return this.options['position'];
        }
        else {
            return this.elementPosition;
        }
    }
    onMouseEnter() {
        if (this.isDisplayOnHover == false) {
            return;
        }
        this.show();
    }
    onMouseLeave() {
        if (this.options['trigger'] === 'hover') {
            this.destroyTooltip();
        }
    }
    onClick() {
        if (this.isDisplayOnClick == false) {
            return;
        }
        this.show();
        this.hideAfterClickTimeoutId = window.setTimeout(() => {
            this.destroyTooltip();
        }, this.options['hideDelayAfterClick']);
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.initOptions = this.renameProperties(this.initOptions);
        let changedOptions = this.getProperties(changes);
        changedOptions = this.renameProperties(changedOptions);
        this.applyOptionsDefault(defaultOptions, changedOptions);
    }
    ngOnDestroy() {
        this.destroyTooltip({
            fast: true
        });
        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe();
        }
    }
    getShowDelay() {
        return this.options['showDelay'];
    }
    getHideDelay() {
        const hideDelay = this.options['hideDelay'];
        const hideDelayTouchscreen = this.options['hideDelayTouchscreen'];
        return this.isTouchScreen ? hideDelayTouchscreen : hideDelay;
    }
    getProperties(changes) {
        let directiveProperties = {};
        let customProperties = {};
        let allProperties = {};
        for (var prop in changes) {
            if (prop !== 'options' && prop !== 'tooltipValue') {
                directiveProperties[prop] = changes[prop].currentValue;
            }
            if (prop === 'options') {
                customProperties = changes[prop].currentValue;
            }
        }
        allProperties = Object.assign({}, customProperties, directiveProperties);
        return allProperties;
    }
    renameProperties(options) {
        for (var prop in options) {
            if (backwardCompatibilityOptions[prop]) {
                options[backwardCompatibilityOptions[prop]] = options[prop];
                delete options[prop];
            }
        }
        return options;
    }
    getElementPosition() {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }
    createTooltip() {
        this.clearTimeouts();
        this.getElementPosition();
        this.createTimeoutId = window.setTimeout(() => {
            this.appendComponentToBody(TooltipComponent);
        }, this.getShowDelay());
        this.showTimeoutId = window.setTimeout(() => {
            this.showTooltipElem();
        }, this.getShowDelay());
    }
    destroyTooltip(options = {
        fast: false
    }) {
        this.clearTimeouts();
        if (this.isTooltipDestroyed == false) {
            this.hideTimeoutId = window.setTimeout(() => {
                this.hideTooltip();
            }, options.fast ? 0 : this.getHideDelay());
            this.destroyTimeoutId = window.setTimeout(() => {
                if (!this.componentRef || this.isTooltipDestroyed) {
                    return;
                }
                this.appRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.events.emit({
                    type: 'hidden',
                    position: this.tooltipPosition
                });
            }, options.fast ? 0 : this.destroyDelay);
        }
    }
    showTooltipElem() {
        this.clearTimeouts();
        this.componentRef.instance.show = true;
        this.events.emit({
            type: 'show',
            position: this.tooltipPosition
        });
    }
    hideTooltip() {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return;
        }
        this.componentRef.instance.show = false;
        this.events.emit({
            type: 'hide',
            position: this.tooltipPosition
        });
    }
    appendComponentToBody(component, data = {}) {
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.componentRef.instance.data = {
            value: this.tooltipValue,
            element: this.elementRef.nativeElement,
            elementPosition: this.tooltipPosition,
            options: this.options
        };
        this.appRef.attachView(this.componentRef.hostView);
        const domElem = this.componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.componentSubscribe = this.componentRef.instance.events.subscribe((event) => {
            this.handleEvents(event);
        });
    }
    clearTimeouts() {
        if (this.createTimeoutId) {
            clearTimeout(this.createTimeoutId);
        }
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
        }
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
        if (this.destroyTimeoutId) {
            clearTimeout(this.destroyTimeoutId);
        }
    }
    get isDisplayOnHover() {
        if (this.options['display'] == false) {
            return false;
        }
        if (this.options['displayTouchscreen'] == false && this.isTouchScreen) {
            return false;
        }
        if (this.options['trigger'] !== 'hover') {
            return false;
        }
        return true;
    }
    get isDisplayOnClick() {
        if (this.options['display'] == false) {
            return false;
        }
        if (this.options['displayTouchscreen'] == false && this.isTouchScreen) {
            return false;
        }
        if (this.options['trigger'] != 'click') {
            return false;
        }
        return true;
    }
    get isTouchScreen() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function (query) {
            return window.matchMedia(query).matches;
        };
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }
    applyOptionsDefault(defaultOptions, options) {
        this.options = Object.assign({}, defaultOptions, this.initOptions || {}, options);
    }
    handleEvents(event) {
        if (event.type === 'shown') {
            this.events.emit({
                type: 'shown',
                position: this.tooltipPosition
            });
        }
    }
    show() {
        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip();
        }
        else if (!this.isTooltipDestroyed) {
            this.showTooltipElem();
        }
    }
    hide() {
        this.destroyTooltip();
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipOptionsService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "tooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function TooltipDirective_focusin_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("focusout", function TooltipDirective_focusout_HostBindingHandler() { return ctx.onMouseLeave(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("click", function TooltipDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { options: "options", tooltipValue: ["tooltip", "tooltipValue"], placement: "placement", autoPlacement: "autoPlacement", contentType: ["content-type", "contentType"], hideDelayMobile: ["hide-delay-mobile", "hideDelayMobile"], hideDelayTouchscreen: "hideDelayTouchscreen", zIndex: ["z-index", "zIndex"], animationDuration: ["animation-duration", "animationDuration"], trigger: "trigger", tooltipClass: ["tooltip-class", "tooltipClass"], display: "display", displayMobile: ["display-mobile", "displayMobile"], displayTouchscreen: "displayTouchscreen", shadow: "shadow", theme: "theme", offset: "offset", width: "width", maxWidth: ["max-width", "maxWidth"], id: "id", showDelay: ["show-delay", "showDelay"], hideDelay: ["hide-delay", "hideDelay"], hideDelayAfterClick: "hideDelayAfterClick", pointerEvents: "pointerEvents", position: "position" }, outputs: { events: "events" }, exportAs: ["tooltip"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
TooltipDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [TooltipOptionsService,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
TooltipDirective.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['options',] }],
    tooltipValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltip',] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['placement',] }],
    autoPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['autoPlacement',] }],
    contentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['content-type',] }],
    hideDelayMobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hide-delay-mobile',] }],
    hideDelayTouchscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hideDelayTouchscreen',] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['z-index',] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['animation-duration',] }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['trigger',] }],
    tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltip-class',] }],
    display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['display',] }],
    displayMobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['display-mobile',] }],
    displayTouchscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['displayTouchscreen',] }],
    shadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['shadow',] }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['theme',] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['offset',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['width',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['max-width',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['id',] }],
    showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['show-delay',] }],
    hideDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hide-delay',] }],
    hideDelayAfterClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hideDelayAfterClick',] }],
    pointerEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pointerEvents',] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['position',] }],
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focusin',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
    onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focusout',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[tooltip]',
                exportAs: 'tooltip'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [TooltipOptionsService]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['options']
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusin']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusout']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], tooltipValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltip']
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['placement']
        }], autoPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['autoPlacement']
        }], contentType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['content-type']
        }], hideDelayMobile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hide-delay-mobile']
        }], hideDelayTouchscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hideDelayTouchscreen']
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['z-index']
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['animation-duration']
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['trigger']
        }], tooltipClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltip-class']
        }], display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['display']
        }], displayMobile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['display-mobile']
        }], displayTouchscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['displayTouchscreen']
        }], shadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['shadow']
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['theme']
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['offset']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['width']
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['max-width']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['id']
        }], showDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['show-delay']
        }], hideDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hide-delay']
        }], hideDelayAfterClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hideDelayAfterClick']
        }], pointerEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['pointerEvents']
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['position']
        }] }); })();

class TooltipModule {
    static forRoot(initOptions) {
        return {
            ngModule: TooltipModule,
            providers: [
                {
                    provide: TooltipOptionsService,
                    useValue: initOptions
                }
            ]
        };
    }
}
TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TooltipModule });
TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipModule, { declarations: function () { return [TooltipDirective, TooltipComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [TooltipDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    TooltipDirective,
                    TooltipComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    TooltipDirective
                ],
                entryComponents: [
                    TooltipComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng2-tooltip-directive
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-tooltip-directive.js.map

/***/ })

}]);
//# sourceMappingURL=default~transfer-sky-transfer-sky-module~transfer-transfer-module.js.map