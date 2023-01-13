(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "7KAL":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/scrolling.js ***!
  \*********************************************************/
/*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function() { return CdkScrollableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The injection token used to specify the virtual scrolling strategy. */





const _c0 = ["contentWrapper"];
const _c1 = ["*"];
const VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Virtual scrolling strategy for lists with items of known fixed size. */
class FixedSizeVirtualScrollStrategy {
    /**
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    constructor(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** @docs-private Implemented as part of VirtualScrollStrategy. */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /** The attached viewport. */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /** Detaches this scroll strategy from the currently attached viewport. */
    detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    }
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentScrolled() {
        this._updateRenderedRange();
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentRendered() { }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onRenderedOffsetChanged() { }
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */
    scrollToIndex(index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    }
    /** Update the viewport's total content size. */
    _updateTotalContentSize() {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    }
    /** Update the viewport's rendered range. */
    _updateRenderedRange() {
        if (!this._viewport) {
            return;
        }
        const renderedRange = this._viewport.getRenderedRange();
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        const viewportSize = this._viewport.getViewportSize();
        const dataLength = this._viewport.getDataLength();
        let scrollOffset = this._viewport.measureScrollOffset();
        // Prevent NaN as result when dividing by zero.
        let firstVisibleIndex = (this._itemSize > 0) ? scrollOffset / this._itemSize : 0;
        // If user scrolls to the bottom of the list and data changes to a smaller list
        if (newRange.end > dataLength) {
            // We have to recalculate the first visible index based on new data length and viewport size.
            const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
            const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
            // If first visible index changed we must update scroll offset to handle start/end buffers
            // Current range must also be adjusted to cover the new position (bottom of new list).
            if (firstVisibleIndex != newVisibleIndex) {
                firstVisibleIndex = newVisibleIndex;
                scrollOffset = newVisibleIndex * this._itemSize;
                newRange.start = Math.floor(firstVisibleIndex);
            }
            newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
        }
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    }
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
/** A virtual scroll strategy that supports fixed-size items. */
class CdkFixedSizeVirtualScroll {
    constructor() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /** The scroll strategy used by this directive. */
        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    /** The size of the items in the list (in pixels). */
    get itemSize() { return this._itemSize; }
    set itemSize(value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value); }
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     */
    get minBufferPx() { return this._minBufferPx; }
    set minBufferPx(value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value); }
    /**
     * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
     */
    get maxBufferPx() { return this._maxBufferPx; }
    set maxBufferPx(value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value); }
    ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
}
CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) { return new (t || CdkFixedSizeVirtualScroll)(); };
CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkFixedSizeVirtualScroll, selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]], inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                provide: VIRTUAL_SCROLL_STRATEGY,
                useFactory: _fixedSizeVirtualScrollStrategyFactory,
                deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => CdkFixedSizeVirtualScroll)]
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
CdkFixedSizeVirtualScroll.propDecorators = {
    itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'cdk-virtual-scroll-viewport[itemSize]',
                providers: [{
                        provide: VIRTUAL_SCROLL_STRATEGY,
                        useFactory: _fixedSizeVirtualScrollStrategyFactory,
                        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => CdkFixedSizeVirtualScroll)]
                    }]
            }]
    }], function () { return []; }, { itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time in ms to throttle the scrolling events by default. */
const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
class ScrollDispatcher {
    constructor(_ngZone, _platform, document) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /** Subject for notifying that a registered scrollable reference element has been scrolled. */
        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Keeps track of the global `scroll` and `resize` subscriptions. */
        this._globalSubscription = null;
        /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
        this._document = document;
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe(() => this._scrolled.next(scrollable)));
        }
    }
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    deregister(scrollable) {
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    }
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            if (!this._globalSubscription) {
                this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            const subscription = auditTimeInMs > 0 ?
                this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                this._scrolled.subscribe(observer);
            this._scrolledCount++;
            return () => {
                subscription.unsubscribe();
                this._scrolledCount--;
                if (!this._scrolledCount) {
                    this._removeGlobalListener();
                }
            };
        });
    }
    ngOnDestroy() {
        this._removeGlobalListener();
        this.scrollContainers.forEach((_, container) => this.deregister(container));
        this._scrolled.complete();
    }
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementOrElementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    ancestorScrolled(elementOrElementRef, auditTimeInMs) {
        const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(target => {
            return !target || ancestors.indexOf(target) > -1;
        }));
    }
    /** Returns all registered Scrollables that contain the provided element. */
    getAncestorScrollContainers(elementOrElementRef) {
        const scrollingContainers = [];
        this.scrollContainers.forEach((_subscription, scrollable) => {
            if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        return this._document.defaultView || window;
    }
    /** Returns true if the element is contained within the provided Scrollable. */
    _scrollableContainsElement(scrollable, elementOrElementRef) {
        let element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrElementRef);
        let scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = element.parentElement);
        return false;
    }
    /** Sets up the global scroll listeners. */
    _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
            const window = this._getWindow();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(() => this._scrolled.next());
        });
    }
    /** Cleans up the global scroll listener. */
    _removeGlobalListener() {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    }
}
ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) { return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); };
ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); }, token: ScrollDispatcher, providedIn: "root" });
ScrollDispatcher.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
class CdkScrollable {
    constructor(elementRef, scrollDispatcher, ngZone, dir) {
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => this.ngZone.runOutsideAngular(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe(observer)));
    }
    ngOnInit() {
        this.scrollDispatcher.register(this);
    }
    ngOnDestroy() {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Returns observable that emits when a scroll event is fired on the host element. */
    elementScrolled() {
        return this._elementScrolled;
    }
    /** Gets the ElementRef for the viewport. */
    getElementRef() {
        return this.elementRef;
    }
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    scrollTo(options) {
        const el = this.elementRef.nativeElement;
        const isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        if (options.left == null) {
            options.left = isRtl ? options.end : options.start;
        }
        if (options.right == null) {
            options.right = isRtl ? options.start : options.end;
        }
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            options.top =
                el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0 /* NORMAL */) {
            if (options.left != null) {
                options.right =
                    el.scrollWidth - el.clientWidth - options.left;
            }
            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2 /* INVERTED */) {
                options.left = options.right;
            }
            else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1 /* NEGATED */) {
                options.left = options.right ? -options.right : options.right;
            }
        }
        else {
            if (options.right != null) {
                options.left =
                    el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    }
    _applyScrollToOptions(options) {
        const el = this.elementRef.nativeElement;
        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
        }
        else {
            if (options.top != null) {
                el.scrollTop = options.top;
            }
            if (options.left != null) {
                el.scrollLeft = options.left;
            }
        }
    }
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    measureScrollOffset(from) {
        const LEFT = 'left';
        const RIGHT = 'right';
        const el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        const isRtl = this.dir && this.dir.value == 'rtl';
        if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
        }
        else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2 /* INVERTED */) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
            else {
                return el.scrollLeft;
            }
        }
        else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1 /* NEGATED */) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
            }
            else {
                return -el.scrollLeft;
            }
        }
        else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft;
            }
            else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
        }
    }
}
CdkScrollable.ɵfac = function CdkScrollable_Factory(t) { return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8)); };
CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkScrollable, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]] });
CdkScrollable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: ScrollDispatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdk-scrollable], [cdkScrollable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: ScrollDispatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time in ms to throttle the resize events by default. */
const DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
class ViewportRuler {
    constructor(_platform, ngZone, document) {
        this._platform = _platform;
        /** Stream of viewport change events. */
        this._change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Event listener that will be used to handle the viewport change events. */
        this._changeListener = (event) => {
            this._change.next(event);
        };
        this._document = document;
        ngZone.runOutsideAngular(() => {
            if (_platform.isBrowser) {
                const window = this._getWindow();
                // Note that bind the events ourselves, rather than going through something like RxJS's
                // `fromEvent` so that we can ensure that they're bound outside of the NgZone.
                window.addEventListener('resize', this._changeListener);
                window.addEventListener('orientationchange', this._changeListener);
            }
            // We don't need to keep track of the subscription,
            // because we complete the `change` stream on destroy.
            this.change().subscribe(() => this._updateViewportSize());
        });
    }
    ngOnDestroy() {
        if (this._platform.isBrowser) {
            const window = this._getWindow();
            window.removeEventListener('resize', this._changeListener);
            window.removeEventListener('orientationchange', this._changeListener);
        }
        this._change.complete();
    }
    /** Returns the viewport's width and height. */
    getViewportSize() {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        const output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = null;
        }
        return output;
    }
    /** Gets a ClientRect for the viewport's bounds. */
    getViewportRect() {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        const scrollPosition = this.getViewportScrollPosition();
        const { width, height } = this.getViewportSize();
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height,
            width,
        };
    }
    /** Gets the (top, left) scroll position of the viewport. */
    getViewportScrollPosition() {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        const document = this._document;
        const window = this._getWindow();
        const documentElement = document.documentElement;
        const documentRect = documentElement.getBoundingClientRect();
        const top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        const left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top, left };
    }
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    change(throttleTime = DEFAULT_RESIZE_TIME) {
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        return this._document.defaultView || window;
    }
    /** Updates the cached viewport size. */
    _updateViewportSize() {
        const window = this._getWindow();
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    }
}
ViewportRuler.ɵfac = function ViewportRuler_Factory(t) { return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); };
ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); }, token: ViewportRuler, providedIn: "root" });
ViewportRuler.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Checks if the given ranges are equal. */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
/** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */
class CdkVirtualScrollViewport extends CdkScrollable {
    constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler) {
        super(elementRef, scrollDispatcher, ngZone, dir);
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._scrollStrategy = _scrollStrategy;
        /** Emits when the viewport is detached from a CdkVirtualForOf. */
        this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Emits when the rendered range changes. */
        this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /** Emits when the index of the first element visible in the viewport changes. */
        this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => this._scrollStrategy.scrolledIndexChange.subscribe(index => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
        /** A stream that emits whenever the rendered range changes. */
        this.renderedRangeStream = this._renderedRangeSubject;
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        this._totalContentSize = 0;
        /** A string representing the `style.width` property value to be used for the spacer element. */
        this._totalContentWidth = '';
        /** A string representing the `style.height` property value to be used for the spacer element. */
        this._totalContentHeight = '';
        /** The currently rendered range of indices. */
        this._renderedRange = { start: 0, end: 0 };
        /** The length of the data bound to this viewport (in number of items). */
        this._dataLength = 0;
        /** The size of the viewport (in pixels). */
        this._viewportSize = 0;
        /** The last rendered content offset that was set. */
        this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        this._renderedContentOffsetNeedsRewrite = false;
        /** Whether there is a pending change detection cycle. */
        this._isChangeDetectionPending = false;
        /** A list of functions to run after the next change detection cycle. */
        this._runAfterChangeDetection = [];
        /** Subscription to changes in the viewport size. */
        this._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        this._viewportChanges = viewportRuler.change().subscribe(() => {
            this.checkViewportSize();
        });
    }
    /** The direction the viewport scrolls. */
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        if (this._orientation !== orientation) {
            this._orientation = orientation;
            this._calculateSpacerSize();
        }
    }
    ngOnInit() {
        super.ngOnInit();
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
            this._measureViewportSize();
            this._scrollStrategy.attach(this);
            this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe(() => this._scrollStrategy.onContentScrolled());
            this._markChangeDetectionNeeded();
        }));
    }
    ngOnDestroy() {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        this._viewportChanges.unsubscribe();
        super.ngOnDestroy();
    }
    /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
    attach(forOf) {
        if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular(() => {
            this._forOf = forOf;
            this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._detachedSubject)).subscribe(data => {
                const newLength = data.length;
                if (newLength !== this._dataLength) {
                    this._dataLength = newLength;
                    this._scrollStrategy.onDataLengthChanged();
                }
                this._doChangeDetection();
            });
        });
    }
    /** Detaches the current `CdkVirtualForOf`. */
    detach() {
        this._forOf = null;
        this._detachedSubject.next();
    }
    /** Gets the length of the data bound to this viewport (in number of items). */
    getDataLength() {
        return this._dataLength;
    }
    /** Gets the size of the viewport (in pixels). */
    getViewportSize() {
        return this._viewportSize;
    }
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /** Get the current rendered range of items. */
    getRenderedRange() {
        return this._renderedRange;
    }
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            this._calculateSpacerSize();
            this._markChangeDetectionNeeded();
        }
    }
    /** Sets the currently rendered range of indices. */
    setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
        }
    }
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    }
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    setRenderedContentOffset(offset, to = 'to-start') {
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        const isRtl = this.dir && this.dir.value == 'rtl';
        const isHorizontal = this.orientation == 'horizontal';
        const axis = isHorizontal ? 'X' : 'Y';
        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += ` translate${axis}(-100%)`;
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded(() => {
                if (this._renderedContentOffsetNeedsRewrite) {
                    this._renderedContentOffset -= this.measureRenderedContentSize();
                    this._renderedContentOffsetNeedsRewrite = false;
                    this.setRenderedContentOffset(this._renderedContentOffset);
                }
                else {
                    this._scrollStrategy.onRenderedOffsetChanged();
                }
            });
        }
    }
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    scrollToOffset(offset, behavior = 'auto') {
        const options = { behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    }
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    scrollToIndex(index, behavior = 'auto') {
        this._scrollStrategy.scrollToIndex(index, behavior);
    }
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    measureScrollOffset(from) {
        return from ?
            super.measureScrollOffset(from) :
            super.measureScrollOffset(this.orientation === 'horizontal' ? 'start' : 'top');
    }
    /** Measure the combined size of all of the rendered items. */
    measureRenderedContentSize() {
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    }
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    measureRangeSize(range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    }
    /** Update the viewport dimensions and re-render. */
    checkViewportSize() {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    }
    /** Measure the viewport size. */
    _measureViewportSize() {
        const viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    }
    /** Queue up change detection to run. */
    _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
                this._doChangeDetection();
            }));
        }
    }
    /** Run change detection. */
    _doChangeDetection() {
        this._isChangeDetectionPending = false;
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run(() => this._changeDetectorRef.markForCheck());
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
            fn();
        }
    }
    /** Calculates the `style.width` and `style.height` for the spacer element. */
    _calculateSpacerSize() {
        this._totalContentHeight =
            this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
        this._totalContentWidth =
            this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
    }
}
CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) { return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler)); };
CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CdkVirtualScrollViewport, selectors: [["cdk-virtual-scroll-viewport"]], viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
    } }, hostAttrs: [1, "cdk-virtual-scroll-viewport"], hostVars: 4, hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
    } }, inputs: { orientation: "orientation" }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                provide: CdkScrollable,
                useExisting: CdkVirtualScrollViewport
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]], template: function CdkVirtualScrollViewport_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
    } }, styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"], encapsulation: 2, changeDetection: 0 });
CdkVirtualScrollViewport.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [VIRTUAL_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: ScrollDispatcher },
    { type: ViewportRuler }
];
CdkVirtualScrollViewport.propDecorators = {
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    scrolledIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    _contentWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['contentWrapper', { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cdk-virtual-scroll-viewport',
                template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
                host: {
                    'class': 'cdk-virtual-scroll-viewport',
                    '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                    '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [{
                        provide: CdkScrollable,
                        useExisting: CdkVirtualScrollViewport
                    }],
                styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [VIRTUAL_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: ScrollDispatcher }, { type: ViewportRuler }]; }, { scrolledIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contentWrapper', { static: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Helper to extract the offset of a DOM Node in a certain direction. */
function getOffset(orientation, direction, node) {
    const el = node;
    if (!el.getBoundingClientRect) {
        return 0;
    }
    const rect = el.getBoundingClientRect();
    if (orientation === 'horizontal') {
        return direction === 'start' ? rect.left : rect.right;
    }
    return direction === 'start' ? rect.top : rect.bottom;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 */
class CdkVirtualForOf {
    constructor(
    /** The view container to add items to. */
    _viewContainerRef, 
    /** The template to use when stamping out new items. */
    _template, 
    /** The set of available differs. */
    _differs, 
    /** The strategy used to render items in the virtual scroll viewport. */
    _viewRepeater, 
    /** The virtual scrolling viewport that these items are being rendered in. */
    _viewport, ngZone) {
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewRepeater = _viewRepeater;
        this._viewport = _viewport;
        /** Emits when the rendered view of the data changes. */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Subject that emits when a new DataSource instance is given. */
        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Emits whenever the data in the current DataSource changes. */
        this.dataStream = this._dataSourceChanges
            .pipe(
        // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), 
        // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([prev, cur]) => this._changeDataSource(prev, cur)), 
        // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /** The differ used to calculate changes to the data. */
        this._differ = null;
        /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(data => {
            this._data = data;
            this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(range => {
            this._renderedRange = range;
            ngZone.run(() => this.viewChange.next(this._renderedRange));
            this._onRenderedDataChange();
        });
        this._viewport.attach(this);
    }
    /** The DataSource to display. */
    get cdkVirtualForOf() {
        return this._cdkVirtualForOf;
    }
    set cdkVirtualForOf(value) {
        this._cdkVirtualForOf = value;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
            this._dataSourceChanges.next(value);
        }
        else {
            // If value is an an NgIterable, convert it to an array.
            this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.from(value || [])));
        }
    }
    /**
     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
     * the item and produces a value to be used as the item's identity when tracking changes.
     */
    get cdkVirtualForTrackBy() {
        return this._cdkVirtualForTrackBy;
    }
    set cdkVirtualForTrackBy(fn) {
        this._needsUpdate = true;
        this._cdkVirtualForTrackBy = fn ?
            (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) :
            undefined;
    }
    /** The template used to stamp out new elements. */
    set cdkVirtualForTemplate(value) {
        if (value) {
            this._needsUpdate = true;
            this._template = value;
        }
    }
    /**
     * The size of the cache used to store templates that are not being used for re-use later.
     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
     */
    get cdkVirtualForTemplateCacheSize() {
        return this._viewRepeater.viewCacheSize;
    }
    set cdkVirtualForTemplateCacheSize(size) {
        this._viewRepeater.viewCacheSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(size);
    }
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    measureRangeSize(range, orientation) {
        if (range.start >= range.end) {
            return 0;
        }
        if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Error: attempted to measure an item that isn't rendered.`);
        }
        // The index into the list of rendered views for the first item in the range.
        const renderedStartIndex = range.start - this._renderedRange.start;
        // The length of the range we're measuring.
        const rangeLen = range.end - range.start;
        // Loop over all the views, find the first and land node and compute the size by subtracting
        // the top of the first node from the bottom of the last one.
        let firstNode;
        let lastNode;
        // Find the first node by starting from the beginning and going forwards.
        for (let i = 0; i < rangeLen; i++) {
            const view = this._viewContainerRef.get(i + renderedStartIndex);
            if (view && view.rootNodes.length) {
                firstNode = lastNode = view.rootNodes[0];
                break;
            }
        }
        // Find the last node by starting from the end and going backwards.
        for (let i = rangeLen - 1; i > -1; i--) {
            const view = this._viewContainerRef.get(i + renderedStartIndex);
            if (view && view.rootNodes.length) {
                lastNode = view.rootNodes[view.rootNodes.length - 1];
                break;
            }
        }
        return firstNode && lastNode ?
            getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
    }
    ngDoCheck() {
        if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            const changes = this._differ.diff(this._renderedItems);
            if (!changes) {
                this._updateContext();
            }
            else {
                this._applyChanges(changes);
            }
            this._needsUpdate = false;
        }
    }
    ngOnDestroy() {
        this._viewport.detach();
        this._dataSourceChanges.next(undefined);
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        this._viewRepeater.detach();
    }
    /** React to scroll state changes in the viewport. */
    _onRenderedDataChange() {
        if (!this._renderedRange) {
            return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
            // Use a wrapper function for the `trackBy` so any new values are
            // picked up automatically without having to recreate the differ.
            this._differ = this._differs.find(this._renderedItems).create((index, item) => {
                return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
            });
        }
        this._needsUpdate = true;
    }
    /** Swap out one `DataSource` for another. */
    _changeDataSource(oldDs, newDs) {
        if (oldDs) {
            oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
    }
    /** Update the `CdkVirtualForOfContext` for all views. */
    _updateContext() {
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
            const view = this._viewContainerRef.get(i);
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
            view.detectChanges();
        }
    }
    /** Apply changes to the DOM. */
    _applyChanges(changes) {
        this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
        // Update $implicit for any items that had an identity change.
        changes.forEachIdentityChange((record) => {
            const view = this._viewContainerRef.get(record.currentIndex);
            view.context.$implicit = record.item;
        });
        // Update the context variables on all items.
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
            const view = this._viewContainerRef.get(i);
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
        }
    }
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    _updateComputedContextProperties(context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
    }
    _getEmbeddedViewArgs(record, index) {
        // Note that it's important that we insert the item directly at the proper index,
        // rather than inserting it and the moving it in place, because if there's a directive
        // on the same node that injects the `ViewContainerRef`, Angular will insert another
        // comment node which can throw off the move when it's being repeated for all items.
        return {
            templateRef: this._template,
            context: {
                $implicit: record.item,
                // It's guaranteed that the iterable is not "undefined" or "null" because we only
                // generate views for elements if the "cdkVirtualForOf" iterable has elements.
                cdkVirtualForOf: this._cdkVirtualForOf,
                index: -1,
                count: -1,
                first: false,
                last: false,
                odd: false,
                even: false
            },
            index,
        };
    }
}
CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) { return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkVirtualForOf, selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]], inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"] },
        ])] });
CdkVirtualForOf.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"],] }] },
    { type: CdkVirtualScrollViewport, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CdkVirtualForOf.propDecorators = {
    cdkVirtualForOf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cdkVirtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cdkVirtualForTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cdkVirtualForTemplateCacheSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkVirtualFor][cdkVirtualForOf]',
                providers: [
                    { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"] },
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]]
            }] }, { type: CdkVirtualScrollViewport, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { cdkVirtualForOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cdkVirtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cdkVirtualForTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cdkVirtualForTemplateCacheSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkScrollableModule {
}
CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CdkScrollableModule });
CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CdkScrollableModule_Factory(t) { return new (t || CdkScrollableModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, { declarations: [CdkScrollable], exports: [CdkScrollable] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [CdkScrollable],
                declarations: [CdkScrollable]
            }]
    }], null, null); })();
/**
 * @docs-primary-export
 */
class ScrollingModule {
}
ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ScrollingModule });
ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ScrollingModule_Factory(t) { return new (t || ScrollingModule)(); }, imports: [[
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"],
            CdkScrollableModule
        ], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, { declarations: function () { return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule]; }, exports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"],
                    CdkScrollableModule
                ],
                exports: [
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
                    CdkScrollableModule,
                    CdkFixedSizeVirtualScroll,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ],
                declarations: [
                    CdkFixedSizeVirtualScroll,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=scrolling.js.map

/***/ }),

/***/ "7g+E":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-spinner/fesm2015/ngx-spinner.js ***!
  \**********************************************************/
/*! exports provided: DEFAULTS, LOADERS, NgxSpinner, NgxSpinnerComponent, NgxSpinnerModule, NgxSpinnerService, PRIMARY_SPINNER, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULTS", function() { return DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADERS", function() { return LOADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinner", function() { return NgxSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerComponent", function() { return NgxSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerModule", function() { return NgxSpinnerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerService", function() { return NgxSpinnerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_SPINNER", function() { return PRIMARY_SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");












const _c0 = ["overlay"];
function NgxSpinnerComponent_div_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function NgxSpinnerComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxSpinnerComponent_div_0_div_2_div_1_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.spinner.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r2.spinner.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.spinner.divArray);
} }
function NgxSpinnerComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.template), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function NgxSpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxSpinnerComponent_div_0_div_2_Template, 2, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxSpinnerComponent_div_0_div_3_Template, 2, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.spinner.bdColor)("z-index", ctx_r0.spinner.zIndex)("position", ctx_r0.spinner.fullScreen ? "fixed" : "absolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", ctx_r0.disableAnimation)("@fadeIn", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx_r0.spinner.zIndex);
} }
const _c1 = ["*"];
const LOADERS = {
    'ball-8bits': 16,
    'ball-atom': 4,
    'ball-beat': 3,
    'ball-circus': 5,
    'ball-climbing-dot': 4,
    'ball-clip-rotate': 1,
    'ball-clip-rotate-multiple': 2,
    'ball-clip-rotate-pulse': 2,
    'ball-elastic-dots': 5,
    'ball-fall': 3,
    'ball-fussion': 4,
    'ball-grid-beat': 9,
    'ball-grid-pulse': 9,
    'ball-newton-cradle': 4,
    'ball-pulse': 3,
    'ball-pulse-rise': 5,
    'ball-pulse-sync': 3,
    'ball-rotate': 1,
    'ball-running-dots': 5,
    'ball-scale': 1,
    'ball-scale-multiple': 3,
    'ball-scale-pulse': 2,
    'ball-scale-ripple': 1,
    'ball-scale-ripple-multiple': 3,
    'ball-spin': 8,
    'ball-spin-clockwise': 8,
    'ball-spin-clockwise-fade': 8,
    'ball-spin-clockwise-fade-rotating': 8,
    'ball-spin-fade': 8,
    'ball-spin-fade-rotating': 8,
    'ball-spin-rotate': 2,
    'ball-square-clockwise-spin': 8,
    'ball-square-spin': 8,
    'ball-triangle-path': 3,
    'ball-zig-zag': 2,
    'ball-zig-zag-deflect': 2,
    'cog': 1,
    'cube-transition': 2,
    'fire': 3,
    'line-scale': 5,
    'line-scale-party': 5,
    'line-scale-pulse-out': 5,
    'line-scale-pulse-out-rapid': 5,
    'line-spin-clockwise-fade': 8,
    'line-spin-clockwise-fade-rotating': 8,
    'line-spin-fade': 8,
    'line-spin-fade-rotating': 8,
    'pacman': 6,
    'square-jelly-box': 2,
    'square-loader': 1,
    'square-spin': 1,
    'timer': 1,
    'triangle-skew-spin': 1
};
const DEFAULTS = {
    BD_COLOR: 'rgba(51,51,51,0.8)',
    SPINNER_COLOR: '#fff',
    SPINNER_TYPE: 'ball-scale-multiple',
    Z_INDEX: 99999,
};
const PRIMARY_SPINNER = 'primary';
class NgxSpinner {
    constructor(init) {
        Object.assign(this, init);
    }
}

class NgxSpinnerService {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    constructor() {
        /**
         * Spinner observable
         *
         * @memberof NgxSpinnerService
         */
        // private spinnerObservable = new ReplaySubject<NgxSpinner>(1);
        this.spinnerObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    /**
    * Get subscription of desired spinner
    * @memberof NgxSpinnerService
    **/
    getSpinner(name) {
        return this.spinnerObservable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((x) => x && x.name === name));
    }
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    show(name = PRIMARY_SPINNER, spinner) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                if (spinner && Object.keys(spinner).length) {
                    spinner['name'] = name;
                    this.spinnerObservable.next(new NgxSpinner(Object.assign(Object.assign({}, spinner), { show: true })));
                    resolve(true);
                }
                else {
                    this.spinnerObservable.next(new NgxSpinner({ name, show: true }));
                    resolve(true);
                }
            }, 10);
        });
    }
    /**
    * To hide spinner
    *
    * @memberof NgxSpinnerService
    */
    hide(name = PRIMARY_SPINNER, debounce = 10) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                this.spinnerObservable.next(new NgxSpinner({ name, show: false }));
                resolve(true);
            }, debounce);
        });
    }
}
NgxSpinnerService.ɵfac = function NgxSpinnerService_Factory(t) { return new (t || NgxSpinnerService)(); };
NgxSpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
NgxSpinnerService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class NgxSpinnerComponent {
    /**
     * Creates an instance of NgxSpinnerComponent.
     *
     * @memberof NgxSpinnerComponent
     */
    constructor(spinnerService, changeDetector) {
        this.spinnerService = spinnerService;
        this.changeDetector = changeDetector;
        /**
         * To enable/disable animation
         *
         * @type {boolean}
         * @memberof NgxSpinnerComponent
         */
        this.disableAnimation = false;
        /**
         * Spinner Object
         *
         * @memberof NgxSpinnerComponent
         */
        this.spinner = new NgxSpinner();
        /**
         * Unsubscribe from spinner's observable
         *
         * @memberof NgxSpinnerComponent
        **/
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * To set default ngx-spinner options
         *
         * @memberof NgxSpinnerComponent
         */
        this.setDefaultOptions = () => {
            this.spinner = new NgxSpinner({
                name: this.name,
                bdColor: this.bdColor,
                size: this.size,
                color: this.color,
                type: this.type,
                fullScreen: this.fullScreen,
                divArray: this.divArray,
                divCount: this.divCount,
                show: this.show,
                zIndex: this.zIndex,
                template: this.template,
                showSpinner: this.showSpinner
            });
        };
        this.bdColor = DEFAULTS.BD_COLOR;
        this.zIndex = DEFAULTS.Z_INDEX;
        this.color = DEFAULTS.SPINNER_COLOR;
        this.type = DEFAULTS.SPINNER_TYPE;
        this.size = 'large';
        this.fullScreen = true;
        this.name = PRIMARY_SPINNER;
        this.template = null;
        this.showSpinner = false;
        this.divArray = [];
        this.divCount = 0;
        this.show = false;
    }
    handleKeyboardEvent(event) {
        if (this.spinnerDOM && this.spinnerDOM.nativeElement && this.fullScreen) {
            event.returnValue = false;
            event.preventDefault();
        }
    }
    /**
     * Initialization method
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnInit() {
        this.setDefaultOptions();
        this.spinnerService.getSpinner(this.name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((spinner) => {
            this.setDefaultOptions();
            Object.assign(this.spinner, spinner);
            if (spinner.show) {
                this.onInputChange();
            }
            this.changeDetector.detectChanges();
        });
    }
    /**
     * On changes event for input variables
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnChanges(changes) {
        for (const propName in changes) {
            if (propName) {
                const changedProp = changes[propName];
                if (changedProp.isFirstChange()) {
                    return;
                }
                else if (typeof changedProp.currentValue !== 'undefined' && changedProp.currentValue !== changedProp.previousValue) {
                    if (changedProp.currentValue !== '') {
                        this.spinner[propName] = changedProp.currentValue;
                        if (propName === 'showSpinner') {
                            if (changedProp.currentValue) {
                                this.spinnerService.show(this.spinner.name, this.spinner);
                            }
                            else {
                                this.spinnerService.hide(this.spinner.name);
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * To get class for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    getClass(type, size) {
        this.spinner.divCount = LOADERS[type];
        this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((x, i) => i);
        let sizeClass = '';
        switch (size.toLowerCase()) {
            case 'small':
                sizeClass = 'la-sm';
                break;
            case 'medium':
                sizeClass = 'la-2x';
                break;
            case 'large':
                sizeClass = 'la-3x';
                break;
            default:
                break;
        }
        return 'la-' + type + ' ' + sizeClass;
    }
    /**
     * Check if input variables have changed
     *
     * @memberof NgxSpinnerComponent
     */
    onInputChange() {
        this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
    }
    /**
     * Component destroy event
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
NgxSpinnerComponent.ɵfac = function NgxSpinnerComponent_Factory(t) { return new (t || NgxSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
NgxSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxSpinnerComponent, selectors: [["ngx-spinner"]], viewQuery: function NgxSpinnerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.spinnerDOM = _t.first);
    } }, hostBindings: function NgxSpinnerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgxSpinnerComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { disableAnimation: "disableAnimation", bdColor: "bdColor", zIndex: "zIndex", color: "color", type: "type", size: "size", fullScreen: "fullScreen", name: "name", template: "template", showSpinner: "showSpinner" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["class", "ngx-spinner-overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "ngx-spinner-overlay"], ["overlay", ""], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function NgxSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxSpinnerComponent_div_0_Template, 6, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner.show);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]]; }, pipes: function () { return [SafeHtmlPipe]; }, styles: [".la-ball-8bits[_ngcontent-%COMP%], .la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-8bits[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-8bits.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-8bits[_ngcontent-%COMP%]{width:12px;height:12px}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:4px;height:4px;border-radius:0;opacity:0;transform:translate(100%,100%);-webkit-animation:ball-8bits 1s ease 0s infinite;animation:ball-8bits 1s ease 0s infinite}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.9375s;animation-delay:-.9375s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:-100%;left:0}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:-100%;left:33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:-66.6666666667%;left:66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:-33.3333333333%;left:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:0;left:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:33.3333333333%;left:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:66.6666666667%;left:66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:100%;left:33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){top:100%;left:0}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){top:100%;left:-33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){top:66.6666666667%;left:-66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){top:33.3333333333%;left:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(13){top:0;left:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(14){top:-33.3333333333%;left:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(15){top:-66.6666666667%;left:-66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(16){top:-100%;left:-33.3333333333%}.la-ball-8bits.la-sm[_ngcontent-%COMP%]{width:6px;height:6px}.la-ball-8bits.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:2px}.la-ball-8bits.la-2x[_ngcontent-%COMP%]{width:24px;height:24px}.la-ball-8bits.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px}.la-ball-8bits.la-3x[_ngcontent-%COMP%]{width:36px;height:36px}.la-ball-8bits.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:12px}@-webkit-keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}.la-ball-atom[_ngcontent-%COMP%], .la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-atom[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-atom.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-atom[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;top:50%;left:50%;z-index:1;width:60%;height:60%;background:#aaa;border-radius:100%;transform:translate(-50%,-50%);-webkit-animation:ball-atom-shrink 4.5s linear infinite;animation:ball-atom-shrink 4.5s linear infinite}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){position:absolute;left:0;z-index:0;width:100%;height:100%;background:none;-webkit-animation:ball-atom-zindex 1.5s steps(2) 0s infinite;animation:ball-atom-zindex 1.5s steps(2) 0s infinite}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{position:absolute;top:0;left:0;width:10px;height:10px;margin-top:-5px;margin-left:-5px;content:\"\";background:currentColor;border-radius:50%;opacity:.75;-webkit-animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite;animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(120deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(240deg);-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4):before{-webkit-animation-delay:-.5s,-.125s;animation-delay:-.5s,-.125s}.la-ball-atom.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-atom.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-atom.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-atom.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-atom.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-atom.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-atom-position{50%{top:100%;left:100%}}@keyframes ball-atom-position{50%{top:100%;left:100%}}@-webkit-keyframes ball-atom-size{50%{transform:scale(.5)}}@keyframes ball-atom-size{50%{transform:scale(.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}@keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}.la-ball-beat[_ngcontent-%COMP%], .la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-beat[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-beat.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-beat[_ngcontent-%COMP%]{width:54px;height:18px}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-beat .7s linear -.15s infinite;animation:ball-beat .7s linear -.15s infinite}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-beat.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-beat.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-beat.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-beat.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-beat.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}.la-ball-circus[_ngcontent-%COMP%], .la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-circus[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-circus.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-circus[_ngcontent-%COMP%], .la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:-100%;display:block;width:100%;height:100%;border-radius:100%;opacity:.5;-webkit-animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite;animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm[_ngcontent-%COMP%], .la-ball-circus.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px}.la-ball-circus.la-2x[_ngcontent-%COMP%], .la-ball-circus.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-circus.la-3x[_ngcontent-%COMP%], .la-ball-circus.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:48px;height:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{transform:scale(.3)}}@keyframes ball-circus-size{50%{transform:scale(.3)}}.la-ball-climbing-dot[_ngcontent-%COMP%], .la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-climbing-dot[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-climbing-dot.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-climbing-dot[_ngcontent-%COMP%]{width:42px;height:32px}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;bottom:32%;left:18%;width:14px;height:14px;border-radius:100%;transform-origin:center bottom;-webkit-animation:ball-climbing-dot-jump .6s ease-in-out infinite;animation:ball-climbing-dot-jump .6s ease-in-out infinite}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){position:absolute;top:0;right:0;width:14px;height:2px;border-radius:0;transform:translate(60%);-webkit-animation:ball-climbing-dot-steps 1.8s linear infinite;animation:ball-climbing-dot-steps 1.8s linear infinite}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):nth-child(2){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:6px;height:6px}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){width:6px;height:1px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%]{width:84px;height:64px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:28px;height:28px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){width:28px;height:4px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%]{width:126px;height:96px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:42px;height:42px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){width:42px;height:6px}@-webkit-keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@-webkit-keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}to{top:100%;right:100%;opacity:0}}@keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}to{top:100%;right:100%;opacity:0}}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%], .la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-clip-rotate-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;background:transparent;border-style:solid;border-width:2px;border-radius:100%;-webkit-animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;width:32px;height:32px;border-right-color:transparent;border-left-color:transparent}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:16px;height:16px;border-top-color:transparent;border-bottom-color:transparent;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-direction:reverse;animation-direction:reverse}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:8px;height:8px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:32px;height:32px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%], .la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-clip-rotate-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;border-radius:100%}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;width:32px;height:32px;background:transparent;border-bottom-style:solid;border-top-style:solid;border-bottom-width:2px;border-top-width:2px;border-right:2px solid transparent;border-left:2px solid transparent;-webkit-animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:16px;height:16px;-webkit-animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:8px;height:8px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:32px;height:32px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:96px;height:96px;border-width:6px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate[_ngcontent-%COMP%], .la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-clip-rotate[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-clip-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px;background:transparent;border-width:2px;border-bottom-color:transparent;border-radius:100%;-webkit-animation:ball-clip-rotate .75s linear infinite;animation:ball-clip-rotate .75s linear infinite}.la-ball-clip-rotate.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-clip-rotate.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-clip-rotate.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-clip-rotate.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-elastic-dots[_ngcontent-%COMP%], .la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-elastic-dots[_ngcontent-%COMP%]{display:block;color:#fff}.la-ball-elastic-dots.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{float:none;background-color:currentColor;border:0 solid}.la-ball-elastic-dots[_ngcontent-%COMP%]{width:120px;height:10px;font-size:0;text-align:center}.la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;width:10px;height:10px;white-space:nowrap;border-radius:100%;-webkit-animation:ball-elastic-dots-anim 1s infinite;animation:ball-elastic-dots-anim 1s infinite}.la-ball-elastic-dots.la-sm[_ngcontent-%COMP%]{width:60px;height:4px}.la-ball-elastic-dots.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-elastic-dots.la-2x[_ngcontent-%COMP%]{width:240px;height:20px}.la-ball-elastic-dots.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-elastic-dots.la-3x[_ngcontent-%COMP%]{width:360px;height:30px}.la-ball-elastic-dots.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}.la-ball-fall[_ngcontent-%COMP%], .la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-fall[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-fall.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-fall[_ngcontent-%COMP%]{width:54px;height:18px}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:ball-fall 1s ease-in-out infinite;animation:ball-fall 1s ease-in-out infinite}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-fall.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-fall.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-fall.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-fall.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}.la-ball-fussion[_ngcontent-%COMP%], .la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-fussion[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-fussion.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-fussion[_ngcontent-%COMP%]{width:8px;height:8px}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:12px;height:12px;border-radius:100%;transform:translate(-50%,-50%);-webkit-animation:ball-fussion-ball1 1s ease 0s infinite;animation:ball-fussion-ball1 1s ease 0s infinite}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:0;left:50%;z-index:1}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:50%;left:100%;z-index:2;-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:100%;left:50%;z-index:1;-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:50%;left:0;z-index:2;-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4}.la-ball-fussion.la-sm[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-fussion.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px}.la-ball-fussion.la-2x[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-fussion.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-ball-fussion.la-3x[_ngcontent-%COMP%]{width:24px;height:24px}.la-ball-fussion.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}to{top:50%;left:100%;z-index:2;opacity:.35}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}to{top:50%;left:100%;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}to{top:100%;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}to{top:100%;left:50%;z-index:1;opacity:.35}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}to{top:50%;left:0;z-index:2;opacity:.35}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}to{top:50%;left:0;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}to{top:0;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}to{top:0;left:50%;z-index:1;opacity:.35}}.la-ball-grid-beat[_ngcontent-%COMP%], .la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-grid-beat[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-grid-beat.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-grid-beat[_ngcontent-%COMP%]{width:36px;height:36px}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-beat;animation-name:ball-grid-beat;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat.la-sm[_ngcontent-%COMP%]{width:18px;height:18px}.la-ball-grid-beat.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:1px}.la-ball-grid-beat.la-2x[_ngcontent-%COMP%]{width:72px;height:72px}.la-ball-grid-beat.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin:4px}.la-ball-grid-beat.la-3x[_ngcontent-%COMP%]{width:108px;height:108px}.la-ball-grid-beat.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}@keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}.la-ball-grid-pulse[_ngcontent-%COMP%], .la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-grid-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-grid-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-grid-pulse[_ngcontent-%COMP%]{width:36px;height:36px}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-pulse;animation-name:ball-grid-pulse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse.la-sm[_ngcontent-%COMP%]{width:18px;height:18px}.la-ball-grid-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:1px}.la-ball-grid-pulse.la-2x[_ngcontent-%COMP%]{width:72px;height:72px}.la-ball-grid-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin:4px}.la-ball-grid-pulse.la-3x[_ngcontent-%COMP%]{width:108px;height:108px}.la-ball-grid-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}@keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}.la-ball-newton-cradle[_ngcontent-%COMP%], .la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-newton-cradle[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-newton-cradle.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-newton-cradle[_ngcontent-%COMP%]{width:40px;height:10px}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:100%}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{transform:translateX(0);-webkit-animation:ball-newton-cradle-left 1s ease-out 0s infinite;animation:ball-newton-cradle-left 1s ease-out 0s infinite}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{transform:translateX(0);-webkit-animation:ball-newton-cradle-right 1s ease-out 0s infinite;animation:ball-newton-cradle-right 1s ease-out 0s infinite}.la-ball-newton-cradle.la-sm[_ngcontent-%COMP%]{width:20px;height:4px}.la-ball-newton-cradle.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-newton-cradle.la-2x[_ngcontent-%COMP%]{width:80px;height:20px}.la-ball-newton-cradle.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-newton-cradle.la-3x[_ngcontent-%COMP%]{width:120px;height:30px}.la-ball-newton-cradle.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-newton-cradle-left{25%{transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:translateX(0)}}@keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:translateX(0)}}.la-ball-pulse-rise[_ngcontent-%COMP%], .la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-pulse-rise[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-pulse-rise.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse-rise[_ngcontent-%COMP%]{width:70px;height:14px}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:2px;border-radius:100%;-webkit-animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite;animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm[_ngcontent-%COMP%]{width:34px;height:6px}.la-ball-pulse-rise.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:1px}.la-ball-pulse-rise.la-2x[_ngcontent-%COMP%]{width:140px;height:28px}.la-ball-pulse-rise.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:4px}.la-ball-pulse-rise.la-3x[_ngcontent-%COMP%]{width:210px;height:42px}.la-ball-pulse-rise.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:6px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync[_ngcontent-%COMP%], .la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-pulse-sync[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-pulse-sync.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse-sync[_ngcontent-%COMP%]{width:54px;height:18px}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse-sync .6s ease-in-out infinite;animation:ball-pulse-sync .6s ease-in-out infinite}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-pulse-sync.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-pulse-sync.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-pulse-sync.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-pulse-sync.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-pulse-sync.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}.la-ball-pulse[_ngcontent-%COMP%], .la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse[_ngcontent-%COMP%]{width:54px;height:18px}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse 1s ease infinite;animation:ball-pulse 1s ease infinite}.la-ball-pulse.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-pulse.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-pulse.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}@keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}.la-ball-rotate[_ngcontent-%COMP%], .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-rotate[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-rotate[_ngcontent-%COMP%], .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:100%;-webkit-animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite;animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{position:absolute;width:inherit;height:inherit;margin:inherit;content:\"\";background:currentColor;border-radius:inherit;opacity:.8}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:0;left:-150%}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{top:0;left:150%}.la-ball-rotate.la-sm[_ngcontent-%COMP%], .la-ball-rotate.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-rotate.la-2x[_ngcontent-%COMP%], .la-ball-rotate.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-rotate.la-3x[_ngcontent-%COMP%], .la-ball-rotate.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-running-dots[_ngcontent-%COMP%], .la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-running-dots[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-running-dots.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-running-dots[_ngcontent-%COMP%]{width:10px;height:10px}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:10px;height:10px;margin-left:-25px;border-radius:100%;-webkit-animation:ball-running-dots-animate 2s linear infinite;animation:ball-running-dots-animate 2s linear infinite}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-running-dots.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-left:-12px}.la-ball-running-dots.la-2x[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-running-dots.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:-50px}.la-ball-running-dots.la-3x[_ngcontent-%COMP%]{width:30px;height:30px}.la-ball-running-dots.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin-left:-75px}@-webkit-keyframes ball-running-dots-animate{0%,to{width:100%;height:100%;transform:translateY(0) translateX(500%)}80%{transform:translateY(0) translateX(0)}85%{width:100%;height:100%;transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;transform:translateY(-100%) translateX(500%)}}@keyframes ball-running-dots-animate{0%,to{width:100%;height:100%;transform:translateY(0) translateX(500%)}80%{transform:translateY(0) translateX(0)}85%{width:100%;height:100%;transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;transform:translateY(-100%) translateX(500%)}}.la-ball-scale-multiple[_ngcontent-%COMP%], .la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-multiple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-multiple[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-multiple 1s linear 0s infinite;animation:ball-scale-multiple 1s linear 0s infinite}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm[_ngcontent-%COMP%], .la-ball-scale-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-multiple.la-2x[_ngcontent-%COMP%], .la-ball-scale-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-multiple.la-3x[_ngcontent-%COMP%], .la-ball-scale-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}.la-ball-scale-pulse[_ngcontent-%COMP%], .la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-pulse[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:.5;-webkit-animation:ball-scale-pulse 2s ease-in-out infinite;animation:ball-scale-pulse 2s ease-in-out infinite}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm[_ngcontent-%COMP%], .la-ball-scale-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-pulse.la-2x[_ngcontent-%COMP%], .la-ball-scale-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-pulse.la-3x[_ngcontent-%COMP%], .la-ball-scale-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%], .la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale-ripple-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:32px;height:32px;background:transparent;border-width:2px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-ripple-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple-multiple.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-ripple-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple-multiple.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-scale-ripple-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple[_ngcontent-%COMP%], .la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-ripple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale-ripple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-ripple[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px;background:transparent;border-width:2px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite}.la-ball-scale-ripple.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-ripple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-ripple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-scale-ripple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}.la-ball-scale[_ngcontent-%COMP%], .la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale[_ngcontent-%COMP%], .la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:100%;opacity:0;-webkit-animation:ball-scale 1s ease-in-out 0s infinite;animation:ball-scale 1s ease-in-out 0s infinite}.la-ball-scale.la-sm[_ngcontent-%COMP%], .la-ball-scale.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale.la-2x[_ngcontent-%COMP%], .la-ball-scale.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale.la-3x[_ngcontent-%COMP%], .la-ball-scale.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise-fade-rotating 1s linear infinite;animation:ball-spin-clockwise-fade-rotating 1s linear infinite}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%], .la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise-fade 1s linear infinite;animation:ball-spin-clockwise-fade 1s linear infinite}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-clockwise-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-clockwise-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-clockwise-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise[_ngcontent-%COMP%], .la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-clockwise[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise 1s ease-in-out infinite;animation:ball-spin-clockwise 1s ease-in-out infinite}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-clockwise.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-clockwise.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-clockwise.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-spin-fade-rotating[_ngcontent-%COMP%], .la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-fade-rotating[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:ball-spin-fade-rotate 6s linear infinite;animation:ball-spin-fade-rotate 6s linear infinite}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}.la-ball-spin-fade[_ngcontent-%COMP%], .la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-fade[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}@keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.la-ball-spin-rotate[_ngcontent-%COMP%], .la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-rotate[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-rotate[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:ball-spin-rotate 2s linear infinite;animation:ball-spin-rotate 2s linear infinite}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;width:60%;height:60%;border-radius:100%;-webkit-animation:ball-spin-bounce 2s ease-in-out infinite;animation:ball-spin-bounce 2s ease-in-out infinite}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-spin-rotate.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-rotate.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-rotate.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-spin[_ngcontent-%COMP%], .la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin 1s ease-in-out infinite;animation:ball-spin 1s ease-in-out infinite}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-square-clockwise-spin[_ngcontent-%COMP%], .la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-square-clockwise-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-square-clockwise-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-square-clockwise-spin[_ngcontent-%COMP%]{width:26px;height:26px}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:ball-square-clockwise-spin 1s ease-in-out infinite;animation:ball-square-clockwise-spin 1s ease-in-out infinite}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:0;left:0;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0;left:50%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:0;left:100%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:100%;left:0;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:50%;left:0;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-square-clockwise-spin.la-sm[_ngcontent-%COMP%]{width:12px;height:12px}.la-ball-square-clockwise-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-clockwise-spin.la-2x[_ngcontent-%COMP%]{width:52px;height:52px}.la-ball-square-clockwise-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-clockwise-spin.la-3x[_ngcontent-%COMP%]{width:78px;height:78px}.la-ball-square-clockwise-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-square-spin[_ngcontent-%COMP%], .la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-square-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-square-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-square-spin[_ngcontent-%COMP%]{width:26px;height:26px}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:ball-square-spin 1s ease-in-out infinite;animation:ball-square-spin 1s ease-in-out infinite}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:0;left:0;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0;left:50%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:0;left:100%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:100%;left:0;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:50%;left:0;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-square-spin.la-sm[_ngcontent-%COMP%]{width:12px;height:12px}.la-ball-square-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-spin.la-2x[_ngcontent-%COMP%]{width:52px;height:52px}.la-ball-square-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-spin.la-3x[_ngcontent-%COMP%]{width:78px;height:78px}.la-ball-square-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-triangle-path[_ngcontent-%COMP%], .la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-triangle-path[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-triangle-path.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-triangle-path[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:10px;height:10px;border-radius:100%}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite}.la-ball-triangle-path.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-triangle-path.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-triangle-path.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-triangle-path.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-triangle-path.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-triangle-path.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}.la-ball-zig-zag-deflect[_ngcontent-%COMP%], .la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-zig-zag-deflect[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-zig-zag-deflect.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-zig-zag-deflect[_ngcontent-%COMP%]{position:relative;width:32px;height:32px}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-zig-deflect 1.5s linear 0s infinite;animation:ball-zig-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:ball-zag-deflect 1.5s linear 0s infinite;animation:ball-zag-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-zig-zag-deflect.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag-deflect.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-zig-zag-deflect.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag-deflect.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-zig-zag-deflect.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}@keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}.la-ball-zig-zag[_ngcontent-%COMP%], .la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-zig-zag[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-zig-zag.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-zig-zag[_ngcontent-%COMP%]{position:relative;width:32px;height:32px}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-zig-effect .7s linear 0s infinite;animation:ball-zig-effect .7s linear 0s infinite}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:ball-zag-effect .7s linear 0s infinite;animation:ball-zag-effect .7s linear 0s infinite}.la-ball-zig-zag.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-zig-zag.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-zig-zag.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-zig-zag.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}@keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}.la-cog[_ngcontent-%COMP%], .la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-cog[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-cog.la-dark[_ngcontent-%COMP%]{color:#333}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-cog[_ngcontent-%COMP%]{width:31px;height:31px}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;background-color:transparent;border-style:dashed;border-width:2px;border-radius:100%;-webkit-animation:cog-rotate 4s linear infinite;animation:cog-rotate 4s linear infinite}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";border:2px solid;border-radius:100%}.la-cog.la-sm[_ngcontent-%COMP%]{width:15px;height:15px}.la-cog.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:1px}.la-cog.la-2x[_ngcontent-%COMP%]{width:61px;height:61px}.la-cog.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:4px}.la-cog.la-3x[_ngcontent-%COMP%]{width:91px;height:91px}.la-cog.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-cube-transition[_ngcontent-%COMP%], .la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-cube-transition[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-cube-transition.la-dark[_ngcontent-%COMP%]{color:#333}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-cube-transition[_ngcontent-%COMP%]{width:32px;height:32px}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:14px;height:14px;margin-top:-7px;margin-left:-7px;border-radius:0;-webkit-animation:cube-transition 1.6s ease-in-out 0s infinite;animation:cube-transition 1.6s ease-in-out 0s infinite}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-cube-transition.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-cube-transition.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-cube-transition.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:28px;height:28px;margin-top:-14px;margin-left:-14px}.la-cube-transition.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-cube-transition.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:42px;height:42px;margin-top:-21px;margin-left:-21px}@-webkit-keyframes cube-transition{25%{top:0;left:100%;transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;transform:scale(.5) rotate(-270deg)}to{top:0;left:0;transform:scale(1) rotate(-1turn)}}@keyframes cube-transition{25%{top:0;left:100%;transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;transform:scale(.5) rotate(-270deg)}to{top:0;left:0;transform:scale(1) rotate(-1turn)}}.la-fire[_ngcontent-%COMP%], .la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-fire[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-fire.la-dark[_ngcontent-%COMP%]{color:#333}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-fire[_ngcontent-%COMP%]{width:32px;height:32px}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;width:12px;height:12px;border-radius:0;border-radius:2px;transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);-webkit-animation:fire-diamonds 1.5s linear infinite;animation:fire-diamonds 1.5s linear infinite}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-fire.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px}.la-fire.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-fire.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px}.la-fire.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-fire.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px}@-webkit-keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party[_ngcontent-%COMP%], .la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale-party[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-scale-party.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-party[_ngcontent-%COMP%]{width:40px;height:32px}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation-name:line-scale-party;animation-name:line-scale-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}.la-line-scale-party.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale-party.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale-party.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale-party.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale-party.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale-party.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}@keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%], .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-scale-pulse-out-rapid.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%]{width:40px;height:32px}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite;animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale-pulse-out-rapid.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out-rapid.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale-pulse-out-rapid.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out-rapid.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale-pulse-out-rapid.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}@keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}.la-line-scale-pulse-out[_ngcontent-%COMP%], .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale-pulse-out[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-scale-pulse-out.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-pulse-out[_ngcontent-%COMP%]{width:40px;height:32px}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite;animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale-pulse-out.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale-pulse-out.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale-pulse-out.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}@keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}.la-line-scale[_ngcontent-%COMP%], .la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-scale.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale[_ngcontent-%COMP%]{width:40px;height:32px}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale 1.2s ease infinite;animation:line-scale 1.2s ease infinite}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-spin-clockwise-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite;animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-clockwise-fade[_ngcontent-%COMP%], .la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-spin-clockwise-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-clockwise-fade[_ngcontent-%COMP%]{width:32px;height:32px}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-clockwise-fade 1s ease-in-out infinite;animation:line-spin-clockwise-fade 1s ease-in-out infinite}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-clockwise-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-clockwise-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-clockwise-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade-rotating[_ngcontent-%COMP%], .la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-spin-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-fade-rotating[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:ball-spin-fade-rotating-rotate 6s linear infinite;animation:ball-spin-fade-rotating-rotate 6s linear infinite}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-fade-rotating 1s ease-in-out infinite;animation:line-spin-fade-rotating 1s ease-in-out infinite}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade[_ngcontent-%COMP%], .la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-spin-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-fade[_ngcontent-%COMP%]{width:32px;height:32px}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-fade 1s ease-in-out infinite;animation:line-spin-fade 1s ease-in-out infinite}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}.la-pacman[_ngcontent-%COMP%], .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-pacman[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-pacman.la-dark[_ngcontent-%COMP%]{color:#333}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-pacman[_ngcontent-%COMP%]{width:32px;height:32px}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){width:0;height:0;background:transparent;border-style:solid;border-right:solid transparent;border-width:16px;border-radius:100%;-webkit-animation:pacman-rotate-half-up .5s 0s infinite;animation:pacman-rotate-half-up .5s 0s infinite;position:absolute}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down;top:0}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){position:absolute;top:50%;left:200%;width:8px;height:8px;border-radius:100%;opacity:0;-webkit-animation:pacman-balls 2s linear 0s infinite;animation:pacman-balls 2s linear 0s infinite}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:8px;position:absolute}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){width:4px;height:4px}.la-pacman.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:32px;position:absolute}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){width:16px;height:16px}.la-pacman.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:48px;position:absolute}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){width:24px;height:24px}@-webkit-keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@-webkit-keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}.la-square-jelly-box[_ngcontent-%COMP%], .la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-square-jelly-box[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-square-jelly-box.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-jelly-box[_ngcontent-%COMP%]{width:32px;height:32px}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){position:absolute;left:0;width:100%}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:-25%;z-index:1;height:100%;border-radius:10%;-webkit-animation:square-jelly-box-animate .6s linear -.1s infinite;animation:square-jelly-box-animate .6s linear -.1s infinite}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:square-jelly-box-shadow .6s linear -.1s infinite;animation:square-jelly-box-shadow .6s linear -.1s infinite}.la-square-jelly-box.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-square-jelly-box.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-square-jelly-box.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}@keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}.la-square-loader[_ngcontent-%COMP%], .la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-square-loader[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-square-loader.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-loader[_ngcontent-%COMP%]{width:32px;height:32px}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;background:transparent;border-width:2px;border-radius:0;-webkit-animation:square-loader 2s ease infinite;animation:square-loader 2s ease infinite}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:square-loader-inner 2s ease-in infinite;animation:square-loader-inner 2s ease-in infinite}.la-square-loader.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-square-loader.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-square-loader.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-square-loader.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-square-loader.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-square-loader.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}@-webkit-keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@-webkit-keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}@keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}.la-square-spin[_ngcontent-%COMP%], .la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-square-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-square-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-spin[_ngcontent-%COMP%]{width:32px;height:32px}.la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:0;-webkit-animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite}.la-square-spin.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-square-spin.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-square-spin.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.la-timer[_ngcontent-%COMP%], .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-timer[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-timer.la-dark[_ngcontent-%COMP%]{color:#333}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-timer[_ngcontent-%COMP%], .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:transparent;border-width:2px;border-radius:100%}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{position:absolute;top:14px;left:14px;display:block;width:2px;margin-top:-1px;margin-left:-1px;content:\"\";background:currentColor;border-radius:2px;transform-origin:1px 1px 0;-webkit-animation:timer-loader 1.25s linear infinite;animation:timer-loader 1.25s linear infinite;-webkit-animation-delay:-625ms;animation-delay:-625ms}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:12px}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:8px;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:-7.5s;animation-delay:-7.5s}.la-timer.la-sm[_ngcontent-%COMP%], .la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:7px;left:7px;width:1px;margin-top:-.5px;margin-left:-.5px;border-radius:1px;transform-origin:.5px .5px 0}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:6px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:4px}.la-timer.la-2x[_ngcontent-%COMP%], .la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:28px;left:28px;width:4px;margin-top:-2px;margin-left:-2px;border-radius:4px;transform-origin:2px 2px 0}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:24px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:16px}.la-timer.la-3x[_ngcontent-%COMP%], .la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:42px;left:42px;width:6px;margin-top:-3px;margin-left:-3px;border-radius:6px;transform-origin:3px 3px 0}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:36px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:24px}@-webkit-keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-triangle-skew-spin[_ngcontent-%COMP%], .la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-triangle-skew-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-triangle-skew-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-triangle-skew-spin[_ngcontent-%COMP%]{width:32px;height:16px}.la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:0;height:0;background:transparent;border-left:none;border-right:none;border-color:currentcolor transparent;border-style:solid;border-width:0 16px 16px;-webkit-animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite}.la-triangle-skew-spin.la-sm[_ngcontent-%COMP%]{width:16px;height:8px}.la-triangle-skew-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x[_ngcontent-%COMP%]{width:64px;height:32px}.la-triangle-skew-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x[_ngcontent-%COMP%]{width:96px;height:48px}.la-triangle-skew-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })))
            ])
        ] }, changeDetection: 0 });
NgxSpinnerComponent.ctorParameters = () => [
    { type: NgxSpinnerService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
NgxSpinnerComponent.propDecorators = {
    bdColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fullScreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSpinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disableAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    spinnerDOM: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['overlay',] }],
    handleKeyboardEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-spinner',
                template: "<div [@.disabled]=\"disableAnimation\" [@fadeIn]=\"'in'\" *ngIf=\"spinner.show\" class=\"ngx-spinner-overlay\"\n  [style.background-color]=\"spinner.bdColor\" [style.z-index]=\"spinner.zIndex\"\n  [style.position]=\"spinner.fullScreen ? 'fixed' : 'absolute'\" #overlay>\n  <div *ngIf=\"!template\" [class]=\"spinner.class\" [style.color]=\"spinner.color\">\n    <div *ngFor=\"let index of spinner.divArray\"></div>\n  </div>\n  <div *ngIf=\"template\" [innerHTML]=\"template | safeHtml\"></div>\n  <div class=\"loading-text\" [style.z-index]=\"spinner.zIndex\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })))
                    ])
                ],
                styles: ["/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */.la-ball-8bits,.la-ball-8bits>div{position:relative;box-sizing:border-box}.la-ball-8bits{display:block;font-size:0;color:#fff}.la-ball-8bits.la-dark{color:#333}.la-ball-8bits>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-8bits{width:12px;height:12px}.la-ball-8bits>div{position:absolute;top:50%;left:50%;width:4px;height:4px;border-radius:0;opacity:0;transform:translate(100%,100%);-webkit-animation:ball-8bits 1s ease 0s infinite;animation:ball-8bits 1s ease 0s infinite}.la-ball-8bits>div:first-child{-webkit-animation-delay:-.9375s;animation-delay:-.9375s}.la-ball-8bits>div:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-8bits>div:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s}.la-ball-8bits>div:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-8bits>div:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s}.la-ball-8bits>div:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-8bits>div:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s}.la-ball-8bits>div:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-8bits>div:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s}.la-ball-8bits>div:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-8bits>div:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s}.la-ball-8bits>div:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-8bits>div:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s}.la-ball-8bits>div:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-8bits>div:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s}.la-ball-8bits>div:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-8bits>div:first-child{top:-100%;left:0}.la-ball-8bits>div:nth-child(2){top:-100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(3){top:-66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(4){top:-33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(5){top:0;left:100%}.la-ball-8bits>div:nth-child(6){top:33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(7){top:66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(8){top:100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(9){top:100%;left:0}.la-ball-8bits>div:nth-child(10){top:100%;left:-33.3333333333%}.la-ball-8bits>div:nth-child(11){top:66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(12){top:33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(13){top:0;left:-100%}.la-ball-8bits>div:nth-child(14){top:-33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(15){top:-66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(16){top:-100%;left:-33.3333333333%}.la-ball-8bits.la-sm{width:6px;height:6px}.la-ball-8bits.la-sm>div{width:2px;height:2px}.la-ball-8bits.la-2x{width:24px;height:24px}.la-ball-8bits.la-2x>div{width:8px;height:8px}.la-ball-8bits.la-3x{width:36px;height:36px}.la-ball-8bits.la-3x>div{width:12px;height:12px}@-webkit-keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}.la-ball-atom,.la-ball-atom>div{position:relative;box-sizing:border-box}.la-ball-atom{display:block;font-size:0;color:#fff}.la-ball-atom.la-dark{color:#333}.la-ball-atom>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-atom{width:32px;height:32px}.la-ball-atom>div:first-child{position:absolute;top:50%;left:50%;z-index:1;width:60%;height:60%;background:#aaa;border-radius:100%;transform:translate(-50%,-50%);-webkit-animation:ball-atom-shrink 4.5s linear infinite;animation:ball-atom-shrink 4.5s linear infinite}.la-ball-atom>div:not(:first-child){position:absolute;left:0;z-index:0;width:100%;height:100%;background:none;-webkit-animation:ball-atom-zindex 1.5s steps(2) 0s infinite;animation:ball-atom-zindex 1.5s steps(2) 0s infinite}.la-ball-atom>div:not(:first-child):before{position:absolute;top:0;left:0;width:10px;height:10px;margin-top:-5px;margin-left:-5px;content:\"\";background:currentColor;border-radius:50%;opacity:.75;-webkit-animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite;animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite}.la-ball-atom>div:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom>div:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom>div:nth-child(3){transform:rotate(120deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-atom>div:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom>div:nth-child(4){transform:rotate(240deg);-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-atom>div:nth-child(4):before{-webkit-animation-delay:-.5s,-.125s;animation-delay:-.5s,-.125s}.la-ball-atom.la-sm{width:16px;height:16px}.la-ball-atom.la-sm>div:not(:first-child):before{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-atom.la-2x{width:64px;height:64px}.la-ball-atom.la-2x>div:not(:first-child):before{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-atom.la-3x{width:96px;height:96px}.la-ball-atom.la-3x>div:not(:first-child):before{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-atom-position{50%{top:100%;left:100%}}@keyframes ball-atom-position{50%{top:100%;left:100%}}@-webkit-keyframes ball-atom-size{50%{transform:scale(.5)}}@keyframes ball-atom-size{50%{transform:scale(.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}@keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}.la-ball-beat,.la-ball-beat>div{position:relative;box-sizing:border-box}.la-ball-beat{display:block;font-size:0;color:#fff}.la-ball-beat.la-dark{color:#333}.la-ball-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-beat{width:54px;height:18px}.la-ball-beat>div{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-beat .7s linear -.15s infinite;animation:ball-beat .7s linear -.15s infinite}.la-ball-beat>div:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm{width:26px;height:8px}.la-ball-beat.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-beat.la-2x{width:108px;height:36px}.la-ball-beat.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-beat.la-3x{width:162px;height:54px}.la-ball-beat.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}.la-ball-circus,.la-ball-circus>div{position:relative;box-sizing:border-box}.la-ball-circus{display:block;font-size:0;color:#fff}.la-ball-circus.la-dark{color:#333}.la-ball-circus>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-circus,.la-ball-circus>div{width:16px;height:16px}.la-ball-circus>div{position:absolute;top:0;left:-100%;display:block;width:100%;height:100%;border-radius:100%;opacity:.5;-webkit-animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite;animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite}.la-ball-circus>div:first-child{-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus>div:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus>div:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus>div:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus>div:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm,.la-ball-circus.la-sm>div{width:8px;height:8px}.la-ball-circus.la-2x,.la-ball-circus.la-2x>div{width:32px;height:32px}.la-ball-circus.la-3x,.la-ball-circus.la-3x>div{width:48px;height:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{transform:scale(.3)}}@keyframes ball-circus-size{50%{transform:scale(.3)}}.la-ball-climbing-dot,.la-ball-climbing-dot>div{position:relative;box-sizing:border-box}.la-ball-climbing-dot{display:block;font-size:0;color:#fff}.la-ball-climbing-dot.la-dark{color:#333}.la-ball-climbing-dot>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-climbing-dot{width:42px;height:32px}.la-ball-climbing-dot>div:first-child{position:absolute;bottom:32%;left:18%;width:14px;height:14px;border-radius:100%;transform-origin:center bottom;-webkit-animation:ball-climbing-dot-jump .6s ease-in-out infinite;animation:ball-climbing-dot-jump .6s ease-in-out infinite}.la-ball-climbing-dot>div:not(:first-child){position:absolute;top:0;right:0;width:14px;height:2px;border-radius:0;transform:translate(60%);-webkit-animation:ball-climbing-dot-steps 1.8s linear infinite;animation:ball-climbing-dot-steps 1.8s linear infinite}.la-ball-climbing-dot>div:not(:first-child):nth-child(2){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-climbing-dot>div:not(:first-child):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot>div:not(:first-child):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm{width:20px;height:16px}.la-ball-climbing-dot.la-sm>div:first-child{width:6px;height:6px}.la-ball-climbing-dot.la-sm>div:not(:first-child){width:6px;height:1px}.la-ball-climbing-dot.la-2x{width:84px;height:64px}.la-ball-climbing-dot.la-2x>div:first-child{width:28px;height:28px}.la-ball-climbing-dot.la-2x>div:not(:first-child){width:28px;height:4px}.la-ball-climbing-dot.la-3x{width:126px;height:96px}.la-ball-climbing-dot.la-3x>div:first-child{width:42px;height:42px}.la-ball-climbing-dot.la-3x>div:not(:first-child){width:42px;height:6px}@-webkit-keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@-webkit-keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}to{top:100%;right:100%;opacity:0}}@keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}to{top:100%;right:100%;opacity:0}}.la-ball-clip-rotate-multiple,.la-ball-clip-rotate-multiple>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-multiple{display:block;font-size:0;color:#fff}.la-ball-clip-rotate-multiple.la-dark{color:#333}.la-ball-clip-rotate-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate-multiple{width:32px;height:32px}.la-ball-clip-rotate-multiple>div{position:absolute;top:50%;left:50%;background:transparent;border-style:solid;border-width:2px;border-radius:100%;-webkit-animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite}.la-ball-clip-rotate-multiple>div:first-child{position:absolute;width:32px;height:32px;border-right-color:transparent;border-left-color:transparent}.la-ball-clip-rotate-multiple>div:last-child{width:16px;height:16px;border-top-color:transparent;border-bottom-color:transparent;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-direction:reverse;animation-direction:reverse}.la-ball-clip-rotate-multiple.la-sm{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div{border-width:1px}.la-ball-clip-rotate-multiple.la-sm>div:first-child{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-multiple.la-2x{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div{border-width:4px}.la-ball-clip-rotate-multiple.la-2x>div:first-child{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-multiple.la-3x{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div{border-width:6px}.la-ball-clip-rotate-multiple.la-3x>div:first-child{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}.la-ball-clip-rotate-pulse,.la-ball-clip-rotate-pulse>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-pulse{display:block;font-size:0;color:#fff}.la-ball-clip-rotate-pulse.la-dark{color:#333}.la-ball-clip-rotate-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate-pulse{width:32px;height:32px}.la-ball-clip-rotate-pulse>div{position:absolute;top:50%;left:50%;border-radius:100%}.la-ball-clip-rotate-pulse>div:first-child{position:absolute;width:32px;height:32px;background:transparent;border-bottom-style:solid;border-top-style:solid;border-bottom-width:2px;border-top-width:2px;border-right:2px solid transparent;border-left:2px solid transparent;-webkit-animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite}.la-ball-clip-rotate-pulse>div:last-child{width:16px;height:16px;-webkit-animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite}.la-ball-clip-rotate-pulse.la-sm{width:16px;height:16px}.la-ball-clip-rotate-pulse.la-sm>div:first-child{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate-pulse.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-pulse.la-2x{width:64px;height:64px}.la-ball-clip-rotate-pulse.la-2x>div:first-child{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate-pulse.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-pulse.la-3x{width:96px;height:96px}.la-ball-clip-rotate-pulse.la-3x>div:first-child{width:96px;height:96px;border-width:6px}.la-ball-clip-rotate-pulse.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate,.la-ball-clip-rotate>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate{display:block;font-size:0;color:#fff}.la-ball-clip-rotate.la-dark{color:#333}.la-ball-clip-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate{width:32px;height:32px}.la-ball-clip-rotate>div{width:32px;height:32px;background:transparent;border-width:2px;border-bottom-color:transparent;border-radius:100%;-webkit-animation:ball-clip-rotate .75s linear infinite;animation:ball-clip-rotate .75s linear infinite}.la-ball-clip-rotate.la-sm{width:16px;height:16px}.la-ball-clip-rotate.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate.la-2x{width:64px;height:64px}.la-ball-clip-rotate.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate.la-3x{width:96px;height:96px}.la-ball-clip-rotate.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-elastic-dots,.la-ball-elastic-dots>div{position:relative;box-sizing:border-box}.la-ball-elastic-dots{display:block;color:#fff}.la-ball-elastic-dots.la-dark{color:#333}.la-ball-elastic-dots>div{float:none;background-color:currentColor;border:0 solid}.la-ball-elastic-dots{width:120px;height:10px;font-size:0;text-align:center}.la-ball-elastic-dots>div{display:inline-block;width:10px;height:10px;white-space:nowrap;border-radius:100%;-webkit-animation:ball-elastic-dots-anim 1s infinite;animation:ball-elastic-dots-anim 1s infinite}.la-ball-elastic-dots.la-sm{width:60px;height:4px}.la-ball-elastic-dots.la-sm>div{width:4px;height:4px}.la-ball-elastic-dots.la-2x{width:240px;height:20px}.la-ball-elastic-dots.la-2x>div{width:20px;height:20px}.la-ball-elastic-dots.la-3x{width:360px;height:30px}.la-ball-elastic-dots.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}.la-ball-fall,.la-ball-fall>div{position:relative;box-sizing:border-box}.la-ball-fall{display:block;font-size:0;color:#fff}.la-ball-fall.la-dark{color:#333}.la-ball-fall>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-fall{width:54px;height:18px}.la-ball-fall>div{width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:ball-fall 1s ease-in-out infinite;animation:ball-fall 1s ease-in-out infinite}.la-ball-fall>div:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall>div:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-fall.la-sm{width:26px;height:8px}.la-ball-fall.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x{width:108px;height:36px}.la-ball-fall.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x{width:162px;height:54px}.la-ball-fall.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}.la-ball-fussion,.la-ball-fussion>div{position:relative;box-sizing:border-box}.la-ball-fussion{display:block;font-size:0;color:#fff}.la-ball-fussion.la-dark{color:#333}.la-ball-fussion>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-fussion{width:8px;height:8px}.la-ball-fussion>div{position:absolute;width:12px;height:12px;border-radius:100%;transform:translate(-50%,-50%);-webkit-animation:ball-fussion-ball1 1s ease 0s infinite;animation:ball-fussion-ball1 1s ease 0s infinite}.la-ball-fussion>div:first-child{top:0;left:50%;z-index:1}.la-ball-fussion>div:nth-child(2){top:50%;left:100%;z-index:2;-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2}.la-ball-fussion>div:nth-child(3){top:100%;left:50%;z-index:1;-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3}.la-ball-fussion>div:nth-child(4){top:50%;left:0;z-index:2;-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4}.la-ball-fussion.la-sm{width:4px;height:4px}.la-ball-fussion.la-sm>div{width:6px;height:6px}.la-ball-fussion.la-2x{width:16px;height:16px}.la-ball-fussion.la-2x>div,.la-ball-fussion.la-3x{width:24px;height:24px}.la-ball-fussion.la-3x>div{width:36px;height:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}to{top:50%;left:100%;z-index:2;opacity:.35}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}to{top:50%;left:100%;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}to{top:100%;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}to{top:100%;left:50%;z-index:1;opacity:.35}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}to{top:50%;left:0;z-index:2;opacity:.35}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}to{top:50%;left:0;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}to{top:0;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}to{top:0;left:50%;z-index:1;opacity:.35}}.la-ball-grid-beat,.la-ball-grid-beat>div{position:relative;box-sizing:border-box}.la-ball-grid-beat{display:block;font-size:0;color:#fff}.la-ball-grid-beat.la-dark{color:#333}.la-ball-grid-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-grid-beat{width:36px;height:36px}.la-ball-grid-beat>div{width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-beat;animation-name:ball-grid-beat;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-beat>div:first-child{-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-beat>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-beat>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-beat>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-beat>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-beat>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-beat>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-beat>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat.la-sm{width:18px;height:18px}.la-ball-grid-beat.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-beat.la-2x{width:72px;height:72px}.la-ball-grid-beat.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-beat.la-3x{width:108px;height:108px}.la-ball-grid-beat.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}@keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}.la-ball-grid-pulse,.la-ball-grid-pulse>div{position:relative;box-sizing:border-box}.la-ball-grid-pulse{display:block;font-size:0;color:#fff}.la-ball-grid-pulse.la-dark{color:#333}.la-ball-grid-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-grid-pulse{width:36px;height:36px}.la-ball-grid-pulse>div{width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-pulse;animation-name:ball-grid-pulse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-pulse>div:first-child{-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-pulse>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-pulse>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-pulse>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-pulse>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-pulse>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-pulse>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-pulse>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse.la-sm{width:18px;height:18px}.la-ball-grid-pulse.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-pulse.la-2x{width:72px;height:72px}.la-ball-grid-pulse.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-pulse.la-3x{width:108px;height:108px}.la-ball-grid-pulse.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}@keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}.la-ball-newton-cradle,.la-ball-newton-cradle>div{position:relative;box-sizing:border-box}.la-ball-newton-cradle{display:block;font-size:0;color:#fff}.la-ball-newton-cradle.la-dark{color:#333}.la-ball-newton-cradle>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-newton-cradle{width:40px;height:10px}.la-ball-newton-cradle>div{width:10px;height:10px;border-radius:100%}.la-ball-newton-cradle>div:first-child{transform:translateX(0);-webkit-animation:ball-newton-cradle-left 1s ease-out 0s infinite;animation:ball-newton-cradle-left 1s ease-out 0s infinite}.la-ball-newton-cradle>div:last-child{transform:translateX(0);-webkit-animation:ball-newton-cradle-right 1s ease-out 0s infinite;animation:ball-newton-cradle-right 1s ease-out 0s infinite}.la-ball-newton-cradle.la-sm{width:20px;height:4px}.la-ball-newton-cradle.la-sm>div{width:4px;height:4px}.la-ball-newton-cradle.la-2x{width:80px;height:20px}.la-ball-newton-cradle.la-2x>div{width:20px;height:20px}.la-ball-newton-cradle.la-3x{width:120px;height:30px}.la-ball-newton-cradle.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-newton-cradle-left{25%{transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:translateX(0)}}@keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:translateX(0)}}.la-ball-pulse-rise,.la-ball-pulse-rise>div{position:relative;box-sizing:border-box}.la-ball-pulse-rise{display:block;font-size:0;color:#fff}.la-ball-pulse-rise.la-dark{color:#333}.la-ball-pulse-rise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse-rise{width:70px;height:14px}.la-ball-pulse-rise>div{width:10px;height:10px;margin:2px;border-radius:100%;-webkit-animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite;animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite}.la-ball-pulse-rise>div:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm{width:34px;height:6px}.la-ball-pulse-rise.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-pulse-rise.la-2x{width:140px;height:28px}.la-ball-pulse-rise.la-2x>div{width:20px;height:20px;margin:4px}.la-ball-pulse-rise.la-3x{width:210px;height:42px}.la-ball-pulse-rise.la-3x>div{width:30px;height:30px;margin:6px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync,.la-ball-pulse-sync>div{position:relative;box-sizing:border-box}.la-ball-pulse-sync{display:block;font-size:0;color:#fff}.la-ball-pulse-sync.la-dark{color:#333}.la-ball-pulse-sync>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse-sync{width:54px;height:18px}.la-ball-pulse-sync>div{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse-sync .6s ease-in-out infinite;animation:ball-pulse-sync .6s ease-in-out infinite}.la-ball-pulse-sync>div:first-child{-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync>div:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm{width:26px;height:8px}.la-ball-pulse-sync.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse-sync.la-2x{width:108px;height:36px}.la-ball-pulse-sync.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse-sync.la-3x{width:162px;height:54px}.la-ball-pulse-sync.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}.la-ball-pulse,.la-ball-pulse>div{position:relative;box-sizing:border-box}.la-ball-pulse{display:block;font-size:0;color:#fff}.la-ball-pulse.la-dark{color:#333}.la-ball-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse{width:54px;height:18px}.la-ball-pulse>div:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse>div:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-pulse>div{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse 1s ease infinite;animation:ball-pulse 1s ease infinite}.la-ball-pulse.la-sm{width:26px;height:8px}.la-ball-pulse.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse.la-2x{width:108px;height:36px}.la-ball-pulse.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse.la-3x{width:162px;height:54px}.la-ball-pulse.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}@keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}.la-ball-rotate,.la-ball-rotate>div{position:relative;box-sizing:border-box}.la-ball-rotate{display:block;font-size:0;color:#fff}.la-ball-rotate.la-dark{color:#333}.la-ball-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-rotate,.la-ball-rotate>div{width:10px;height:10px}.la-ball-rotate>div{border-radius:100%;-webkit-animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite;animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite}.la-ball-rotate>div:after,.la-ball-rotate>div:before{position:absolute;width:inherit;height:inherit;margin:inherit;content:\"\";background:currentColor;border-radius:inherit;opacity:.8}.la-ball-rotate>div:before{top:0;left:-150%}.la-ball-rotate>div:after{top:0;left:150%}.la-ball-rotate.la-sm,.la-ball-rotate.la-sm>div{width:4px;height:4px}.la-ball-rotate.la-2x,.la-ball-rotate.la-2x>div{width:20px;height:20px}.la-ball-rotate.la-3x,.la-ball-rotate.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-running-dots,.la-ball-running-dots>div{position:relative;box-sizing:border-box}.la-ball-running-dots{display:block;font-size:0;color:#fff}.la-ball-running-dots.la-dark{color:#333}.la-ball-running-dots>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-running-dots{width:10px;height:10px}.la-ball-running-dots>div{position:absolute;width:10px;height:10px;margin-left:-25px;border-radius:100%;-webkit-animation:ball-running-dots-animate 2s linear infinite;animation:ball-running-dots-animate 2s linear infinite}.la-ball-running-dots>div:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots>div:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots>div:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots>div:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots>div:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots>div:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots>div:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots>div:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots>div:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots>div:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm{width:4px;height:4px}.la-ball-running-dots.la-sm>div{width:4px;height:4px;margin-left:-12px}.la-ball-running-dots.la-2x{width:20px;height:20px}.la-ball-running-dots.la-2x>div{width:20px;height:20px;margin-left:-50px}.la-ball-running-dots.la-3x{width:30px;height:30px}.la-ball-running-dots.la-3x>div{width:30px;height:30px;margin-left:-75px}@-webkit-keyframes ball-running-dots-animate{0%,to{width:100%;height:100%;transform:translateY(0) translateX(500%)}80%{transform:translateY(0) translateX(0)}85%{width:100%;height:100%;transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;transform:translateY(-100%) translateX(500%)}}@keyframes ball-running-dots-animate{0%,to{width:100%;height:100%;transform:translateY(0) translateX(500%)}80%{transform:translateY(0) translateX(0)}85%{width:100%;height:100%;transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;transform:translateY(-100%) translateX(500%)}}.la-ball-scale-multiple,.la-ball-scale-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-multiple{display:block;font-size:0;color:#fff}.la-ball-scale-multiple.la-dark{color:#333}.la-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-multiple{width:32px;height:32px}.la-ball-scale-multiple>div{position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-multiple 1s linear 0s infinite;animation:ball-scale-multiple 1s linear 0s infinite}.la-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm,.la-ball-scale-multiple.la-sm>div{width:16px;height:16px}.la-ball-scale-multiple.la-2x,.la-ball-scale-multiple.la-2x>div{width:64px;height:64px}.la-ball-scale-multiple.la-3x,.la-ball-scale-multiple.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}.la-ball-scale-pulse,.la-ball-scale-pulse>div{position:relative;box-sizing:border-box}.la-ball-scale-pulse{display:block;font-size:0;color:#fff}.la-ball-scale-pulse.la-dark{color:#333}.la-ball-scale-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-pulse{width:32px;height:32px}.la-ball-scale-pulse>div{position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:.5;-webkit-animation:ball-scale-pulse 2s ease-in-out infinite;animation:ball-scale-pulse 2s ease-in-out infinite}.la-ball-scale-pulse>div:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm,.la-ball-scale-pulse.la-sm>div{width:16px;height:16px}.la-ball-scale-pulse.la-2x,.la-ball-scale-pulse.la-2x>div{width:64px;height:64px}.la-ball-scale-pulse.la-3x,.la-ball-scale-pulse.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-scale-ripple-multiple,.la-ball-scale-ripple-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple-multiple{display:block;font-size:0;color:#fff}.la-ball-scale-ripple-multiple.la-dark{color:#333}.la-ball-scale-ripple-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-ripple-multiple{width:32px;height:32px}.la-ball-scale-ripple-multiple>div{position:absolute;top:0;left:0;width:32px;height:32px;background:transparent;border-width:2px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite}.la-ball-scale-ripple-multiple>div:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple>div:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple>div:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm{width:16px;height:16px}.la-ball-scale-ripple-multiple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple-multiple.la-2x{width:64px;height:64px}.la-ball-scale-ripple-multiple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple-multiple.la-3x{width:96px;height:96px}.la-ball-scale-ripple-multiple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple,.la-ball-scale-ripple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple{display:block;font-size:0;color:#fff}.la-ball-scale-ripple.la-dark{color:#333}.la-ball-scale-ripple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-ripple{width:32px;height:32px}.la-ball-scale-ripple>div{width:32px;height:32px;background:transparent;border-width:2px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite}.la-ball-scale-ripple.la-sm{width:16px;height:16px}.la-ball-scale-ripple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple.la-2x{width:64px;height:64px}.la-ball-scale-ripple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple.la-3x{width:96px;height:96px}.la-ball-scale-ripple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}.la-ball-scale,.la-ball-scale>div{position:relative;box-sizing:border-box}.la-ball-scale{display:block;font-size:0;color:#fff}.la-ball-scale.la-dark{color:#333}.la-ball-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale,.la-ball-scale>div{width:32px;height:32px}.la-ball-scale>div{border-radius:100%;opacity:0;-webkit-animation:ball-scale 1s ease-in-out 0s infinite;animation:ball-scale 1s ease-in-out 0s infinite}.la-ball-scale.la-sm,.la-ball-scale.la-sm>div{width:16px;height:16px}.la-ball-scale.la-2x,.la-ball-scale.la-2x>div{width:64px;height:64px}.la-ball-scale.la-3x,.la-ball-scale.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating,.la-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise-fade-rotating.la-dark{color:#333}.la-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise-fade-rotating{width:32px;height:32px;-webkit-animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite}.la-ball-spin-clockwise-fade-rotating>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise-fade-rotating 1s linear infinite;animation:ball-spin-clockwise-fade-rotating 1s linear infinite}.la-ball-spin-clockwise-fade-rotating>div:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise-fade,.la-ball-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise-fade.la-dark{color:#333}.la-ball-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise-fade{width:32px;height:32px}.la-ball-spin-clockwise-fade>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise-fade 1s linear infinite;animation:ball-spin-clockwise-fade 1s linear infinite}.la-ball-spin-clockwise-fade>div:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise,.la-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise.la-dark{color:#333}.la-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise{width:32px;height:32px}.la-ball-spin-clockwise>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise 1s ease-in-out infinite;animation:ball-spin-clockwise 1s ease-in-out infinite}.la-ball-spin-clockwise>div:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise.la-sm{width:16px;height:16px}.la-ball-spin-clockwise.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise.la-2x{width:64px;height:64px}.la-ball-spin-clockwise.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise.la-3x{width:96px;height:96px}.la-ball-spin-clockwise.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-spin-fade-rotating,.la-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-fade-rotating{display:block;font-size:0;color:#fff}.la-ball-spin-fade-rotating.la-dark{color:#333}.la-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-fade-rotating{width:32px;height:32px;-webkit-animation:ball-spin-fade-rotate 6s linear infinite;animation:ball-spin-fade-rotate 6s linear infinite}.la-ball-spin-fade-rotating>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite}.la-ball-spin-fade-rotating>div:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}.la-ball-spin-fade,.la-ball-spin-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-fade{display:block;font-size:0;color:#fff}.la-ball-spin-fade.la-dark{color:#333}.la-ball-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-fade{width:32px;height:32px}.la-ball-spin-fade>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite}.la-ball-spin-fade>div:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade.la-sm{width:16px;height:16px}.la-ball-spin-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade.la-2x{width:64px;height:64px}.la-ball-spin-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade.la-3x{width:96px;height:96px}.la-ball-spin-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}@keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.la-ball-spin-rotate,.la-ball-spin-rotate>div{position:relative;box-sizing:border-box}.la-ball-spin-rotate{display:block;font-size:0;color:#fff}.la-ball-spin-rotate.la-dark{color:#333}.la-ball-spin-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-rotate{width:32px;height:32px;-webkit-animation:ball-spin-rotate 2s linear infinite;animation:ball-spin-rotate 2s linear infinite}.la-ball-spin-rotate>div{position:absolute;top:0;width:60%;height:60%;border-radius:100%;-webkit-animation:ball-spin-bounce 2s ease-in-out infinite;animation:ball-spin-bounce 2s ease-in-out infinite}.la-ball-spin-rotate>div:last-child{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-spin-rotate.la-sm{width:16px;height:16px}.la-ball-spin-rotate.la-2x{width:64px;height:64px}.la-ball-spin-rotate.la-3x{width:96px;height:96px}@-webkit-keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-spin,.la-ball-spin>div{position:relative;box-sizing:border-box}.la-ball-spin{display:block;font-size:0;color:#fff}.la-ball-spin.la-dark{color:#333}.la-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin{width:32px;height:32px}.la-ball-spin>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin 1s ease-in-out infinite;animation:ball-spin 1s ease-in-out infinite}.la-ball-spin>div:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin.la-sm{width:16px;height:16px}.la-ball-spin.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin.la-2x{width:64px;height:64px}.la-ball-spin.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin.la-3x{width:96px;height:96px}.la-ball-spin.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-square-clockwise-spin,.la-ball-square-clockwise-spin>div{position:relative;box-sizing:border-box}.la-ball-square-clockwise-spin{display:block;font-size:0;color:#fff}.la-ball-square-clockwise-spin.la-dark{color:#333}.la-ball-square-clockwise-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-square-clockwise-spin{width:26px;height:26px}.la-ball-square-clockwise-spin>div{position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:ball-square-clockwise-spin 1s ease-in-out infinite;animation:ball-square-clockwise-spin 1s ease-in-out infinite}.la-ball-square-clockwise-spin>div:first-child{top:0;left:0;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-square-clockwise-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-square-clockwise-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-square-clockwise-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-square-clockwise-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-square-clockwise-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-square-clockwise-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-square-clockwise-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-square-clockwise-spin.la-sm{width:12px;height:12px}.la-ball-square-clockwise-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-clockwise-spin.la-2x{width:52px;height:52px}.la-ball-square-clockwise-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-clockwise-spin.la-3x{width:78px;height:78px}.la-ball-square-clockwise-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-square-spin,.la-ball-square-spin>div{position:relative;box-sizing:border-box}.la-ball-square-spin{display:block;font-size:0;color:#fff}.la-ball-square-spin.la-dark{color:#333}.la-ball-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-square-spin{width:26px;height:26px}.la-ball-square-spin>div{position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:ball-square-spin 1s ease-in-out infinite;animation:ball-square-spin 1s ease-in-out infinite}.la-ball-square-spin>div:first-child{top:0;left:0;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-square-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-square-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-square-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-square-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-square-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-square-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-square-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-square-spin.la-sm{width:12px;height:12px}.la-ball-square-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-spin.la-2x{width:52px;height:52px}.la-ball-square-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-spin.la-3x{width:78px;height:78px}.la-ball-square-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-triangle-path,.la-ball-triangle-path>div{position:relative;box-sizing:border-box}.la-ball-triangle-path{display:block;font-size:0;color:#fff}.la-ball-triangle-path.la-dark{color:#333}.la-ball-triangle-path>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-triangle-path{width:32px;height:32px}.la-ball-triangle-path>div{position:absolute;top:0;left:0;width:10px;height:10px;border-radius:100%}.la-ball-triangle-path>div:first-child{-webkit-animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite}.la-ball-triangle-path>div:nth-child(2){-webkit-animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite}.la-ball-triangle-path>div:nth-child(3){-webkit-animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite}.la-ball-triangle-path.la-sm{width:16px;height:16px}.la-ball-triangle-path.la-sm>div{width:4px;height:4px}.la-ball-triangle-path.la-2x{width:64px;height:64px}.la-ball-triangle-path.la-2x>div{width:20px;height:20px}.la-ball-triangle-path.la-3x{width:96px;height:96px}.la-ball-triangle-path.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}.la-ball-zig-zag-deflect,.la-ball-zig-zag-deflect>div{position:relative;box-sizing:border-box}.la-ball-zig-zag-deflect{display:block;font-size:0;color:#fff}.la-ball-zig-zag-deflect.la-dark{color:#333}.la-ball-zig-zag-deflect>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-zig-zag-deflect{position:relative;width:32px;height:32px}.la-ball-zig-zag-deflect>div{position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag-deflect>div:first-child{-webkit-animation:ball-zig-deflect 1.5s linear 0s infinite;animation:ball-zig-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect>div:last-child{-webkit-animation:ball-zag-deflect 1.5s linear 0s infinite;animation:ball-zag-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect.la-sm{width:16px;height:16px}.la-ball-zig-zag-deflect.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag-deflect.la-2x{width:64px;height:64px}.la-ball-zig-zag-deflect.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag-deflect.la-3x{width:96px;height:96px}.la-ball-zig-zag-deflect.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}@keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}.la-ball-zig-zag,.la-ball-zig-zag>div{position:relative;box-sizing:border-box}.la-ball-zig-zag{display:block;font-size:0;color:#fff}.la-ball-zig-zag.la-dark{color:#333}.la-ball-zig-zag>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-zig-zag{position:relative;width:32px;height:32px}.la-ball-zig-zag>div{position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag>div:first-child{-webkit-animation:ball-zig-effect .7s linear 0s infinite;animation:ball-zig-effect .7s linear 0s infinite}.la-ball-zig-zag>div:last-child{-webkit-animation:ball-zag-effect .7s linear 0s infinite;animation:ball-zag-effect .7s linear 0s infinite}.la-ball-zig-zag.la-sm{width:16px;height:16px}.la-ball-zig-zag.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag.la-2x{width:64px;height:64px}.la-ball-zig-zag.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag.la-3x{width:96px;height:96px}.la-ball-zig-zag.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}@keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}.la-cog,.la-cog>div{position:relative;box-sizing:border-box}.la-cog{display:block;font-size:0;color:#fff}.la-cog.la-dark{color:#333}.la-cog>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-cog{width:31px;height:31px}.la-cog>div{width:100%;height:100%;background-color:transparent;border-style:dashed;border-width:2px;border-radius:100%;-webkit-animation:cog-rotate 4s linear infinite;animation:cog-rotate 4s linear infinite}.la-cog>div:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";border:2px solid;border-radius:100%}.la-cog.la-sm{width:15px;height:15px}.la-cog.la-sm>div,.la-cog.la-sm>div:after{border-width:1px}.la-cog.la-2x{width:61px;height:61px}.la-cog.la-2x>div,.la-cog.la-2x>div:after{border-width:4px}.la-cog.la-3x{width:91px;height:91px}.la-cog.la-3x>div,.la-cog.la-3x>div:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-cube-transition,.la-cube-transition>div{position:relative;box-sizing:border-box}.la-cube-transition{display:block;font-size:0;color:#fff}.la-cube-transition.la-dark{color:#333}.la-cube-transition>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-cube-transition{width:32px;height:32px}.la-cube-transition>div{position:absolute;top:0;left:0;width:14px;height:14px;margin-top:-7px;margin-left:-7px;border-radius:0;-webkit-animation:cube-transition 1.6s ease-in-out 0s infinite;animation:cube-transition 1.6s ease-in-out 0s infinite}.la-cube-transition>div:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm{width:16px;height:16px}.la-cube-transition.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-cube-transition.la-2x{width:64px;height:64px}.la-cube-transition.la-2x>div{width:28px;height:28px;margin-top:-14px;margin-left:-14px}.la-cube-transition.la-3x{width:96px;height:96px}.la-cube-transition.la-3x>div{width:42px;height:42px;margin-top:-21px;margin-left:-21px}@-webkit-keyframes cube-transition{25%{top:0;left:100%;transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;transform:scale(.5) rotate(-270deg)}to{top:0;left:0;transform:scale(1) rotate(-1turn)}}@keyframes cube-transition{25%{top:0;left:100%;transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;transform:scale(.5) rotate(-270deg)}to{top:0;left:0;transform:scale(1) rotate(-1turn)}}.la-fire,.la-fire>div{position:relative;box-sizing:border-box}.la-fire{display:block;font-size:0;color:#fff}.la-fire.la-dark{color:#333}.la-fire>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-fire{width:32px;height:32px}.la-fire>div{position:absolute;bottom:0;left:50%;width:12px;height:12px;border-radius:0;border-radius:2px;transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);-webkit-animation:fire-diamonds 1.5s linear infinite;animation:fire-diamonds 1.5s linear infinite}.la-fire>div:first-child{-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire>div:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire>div:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm{width:16px;height:16px}.la-fire.la-sm>div{width:6px;height:6px}.la-fire.la-2x{width:64px;height:64px}.la-fire.la-2x>div{width:24px;height:24px}.la-fire.la-3x{width:96px;height:96px}.la-fire.la-3x>div{width:36px;height:36px}@-webkit-keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party,.la-line-scale-party>div{position:relative;box-sizing:border-box}.la-line-scale-party{display:block;font-size:0;color:#fff}.la-line-scale-party.la-dark{color:#333}.la-line-scale-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-party{width:40px;height:32px}.la-line-scale-party>div{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation-name:line-scale-party;animation-name:line-scale-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-line-scale-party>div:first-child{-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.la-line-scale-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.la-line-scale-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.la-line-scale-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.la-line-scale-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}.la-line-scale-party.la-sm{width:20px;height:16px}.la-line-scale-party.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-party.la-2x{width:80px;height:64px}.la-line-scale-party.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-party.la-3x{width:120px;height:96px}.la-line-scale-party.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}@keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}.la-line-scale-pulse-out-rapid,.la-line-scale-pulse-out-rapid>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out-rapid{display:block;font-size:0;color:#fff}.la-line-scale-pulse-out-rapid.la-dark{color:#333}.la-line-scale-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-pulse-out-rapid{width:40px;height:32px}.la-line-scale-pulse-out-rapid>div{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite;animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite}.la-line-scale-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid>div:nth-child(2),.la-line-scale-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid>div:first-child,.la-line-scale-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm{width:20px;height:16px}.la-line-scale-pulse-out-rapid.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out-rapid.la-2x{width:80px;height:64px}.la-line-scale-pulse-out-rapid.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out-rapid.la-3x{width:120px;height:96px}.la-line-scale-pulse-out-rapid.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}@keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}.la-line-scale-pulse-out,.la-line-scale-pulse-out>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out{display:block;font-size:0;color:#fff}.la-line-scale-pulse-out.la-dark{color:#333}.la-line-scale-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-pulse-out{width:40px;height:32px}.la-line-scale-pulse-out>div{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite;animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite}.la-line-scale-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out>div:nth-child(2),.la-line-scale-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out>div:first-child,.la-line-scale-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm{width:20px;height:16px}.la-line-scale-pulse-out.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out.la-2x{width:80px;height:64px}.la-line-scale-pulse-out.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out.la-3x{width:120px;height:96px}.la-line-scale-pulse-out.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}@keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}.la-line-scale,.la-line-scale>div{position:relative;box-sizing:border-box}.la-line-scale{display:block;font-size:0;color:#fff}.la-line-scale.la-dark{color:#333}.la-line-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale{width:40px;height:32px}.la-line-scale>div{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale 1.2s ease infinite;animation:line-scale 1.2s ease infinite}.la-line-scale>div:first-child{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm{width:20px;height:16px}.la-line-scale.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale.la-2x{width:80px;height:64px}.la-line-scale.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale.la-3x{width:120px;height:96px}.la-line-scale.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating,.la-line-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff}.la-line-spin-clockwise-fade-rotating.la-dark{color:#333}.la-line-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-clockwise-fade-rotating{width:32px;height:32px;-webkit-animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite}.la-line-spin-clockwise-fade-rotating>div{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite;animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite}.la-line-spin-clockwise-fade-rotating>div:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-clockwise-fade,.la-line-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade{display:block;font-size:0;color:#fff}.la-line-spin-clockwise-fade.la-dark{color:#333}.la-line-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-clockwise-fade{width:32px;height:32px}.la-line-spin-clockwise-fade>div{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-clockwise-fade 1s ease-in-out infinite;animation:line-spin-clockwise-fade 1s ease-in-out infinite}.la-line-spin-clockwise-fade>div:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade>div:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade-rotating,.la-line-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-fade-rotating{display:block;font-size:0;color:#fff}.la-line-spin-fade-rotating.la-dark{color:#333}.la-line-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-fade-rotating{width:32px;height:32px;-webkit-animation:ball-spin-fade-rotating-rotate 6s linear infinite;animation:ball-spin-fade-rotating-rotate 6s linear infinite}.la-line-spin-fade-rotating>div{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-fade-rotating 1s ease-in-out infinite;animation:line-spin-fade-rotating 1s ease-in-out infinite}.la-line-spin-fade-rotating>div:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade-rotating>div:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade,.la-line-spin-fade>div{position:relative;box-sizing:border-box}.la-line-spin-fade{display:block;font-size:0;color:#fff}.la-line-spin-fade.la-dark{color:#333}.la-line-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-fade{width:32px;height:32px}.la-line-spin-fade>div{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-fade 1s ease-in-out infinite;animation:line-spin-fade 1s ease-in-out infinite}.la-line-spin-fade>div:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade>div:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade.la-sm{width:16px;height:16px}.la-line-spin-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade.la-2x{width:64px;height:64px}.la-line-spin-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade.la-3x{width:96px;height:96px}.la-line-spin-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}.la-pacman,.la-pacman>div{position:relative;box-sizing:border-box}.la-pacman{display:block;font-size:0;color:#fff}.la-pacman.la-dark{color:#333}.la-pacman>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-pacman{width:32px;height:32px}.la-pacman>div:first-child,.la-pacman>div:nth-child(2){width:0;height:0;background:transparent;border-style:solid;border-right:solid transparent;border-width:16px;border-radius:100%;-webkit-animation:pacman-rotate-half-up .5s 0s infinite;animation:pacman-rotate-half-up .5s 0s infinite;position:absolute}.la-pacman>div:nth-child(2){-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down;top:0}.la-pacman>div:nth-child(3),.la-pacman>div:nth-child(4),.la-pacman>div:nth-child(5),.la-pacman>div:nth-child(6){position:absolute;top:50%;left:200%;width:8px;height:8px;border-radius:100%;opacity:0;-webkit-animation:pacman-balls 2s linear 0s infinite;animation:pacman-balls 2s linear 0s infinite}.la-pacman>div:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman>div:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman>div:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman>div:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm{width:16px;height:16px}.la-pacman.la-sm>div:first-child,.la-pacman.la-sm>div:nth-child(2){border-width:8px;position:absolute}.la-pacman.la-sm>div:nth-child(2){top:0}.la-pacman.la-sm>div:nth-child(3),.la-pacman.la-sm>div:nth-child(4),.la-pacman.la-sm>div:nth-child(5),.la-pacman.la-sm>div:nth-child(6){width:4px;height:4px}.la-pacman.la-2x{width:64px;height:64px}.la-pacman.la-2x>div:first-child,.la-pacman.la-2x>div:nth-child(2){border-width:32px;position:absolute}.la-pacman.la-2x>div:nth-child(2){top:0}.la-pacman.la-2x>div:nth-child(3),.la-pacman.la-2x>div:nth-child(4),.la-pacman.la-2x>div:nth-child(5),.la-pacman.la-2x>div:nth-child(6){width:16px;height:16px}.la-pacman.la-3x{width:96px;height:96px}.la-pacman.la-3x>div:first-child,.la-pacman.la-3x>div:nth-child(2){border-width:48px;position:absolute}.la-pacman.la-3x>div:nth-child(2){top:0}.la-pacman.la-3x>div:nth-child(3),.la-pacman.la-3x>div:nth-child(4),.la-pacman.la-3x>div:nth-child(5),.la-pacman.la-3x>div:nth-child(6){width:24px;height:24px}@-webkit-keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@-webkit-keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}.la-square-jelly-box,.la-square-jelly-box>div{position:relative;box-sizing:border-box}.la-square-jelly-box{display:block;font-size:0;color:#fff}.la-square-jelly-box.la-dark{color:#333}.la-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-jelly-box{width:32px;height:32px}.la-square-jelly-box>div:first-child,.la-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.la-square-jelly-box>div:first-child{top:-25%;z-index:1;height:100%;border-radius:10%;-webkit-animation:square-jelly-box-animate .6s linear -.1s infinite;animation:square-jelly-box-animate .6s linear -.1s infinite}.la-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:square-jelly-box-shadow .6s linear -.1s infinite;animation:square-jelly-box-shadow .6s linear -.1s infinite}.la-square-jelly-box.la-sm{width:16px;height:16px}.la-square-jelly-box.la-2x{width:64px;height:64px}.la-square-jelly-box.la-3x{width:96px;height:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}@keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}.la-square-loader,.la-square-loader>div{position:relative;box-sizing:border-box}.la-square-loader{display:block;font-size:0;color:#fff}.la-square-loader.la-dark{color:#333}.la-square-loader>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-loader{width:32px;height:32px}.la-square-loader>div{width:100%;height:100%;background:transparent;border-width:2px;border-radius:0;-webkit-animation:square-loader 2s ease infinite;animation:square-loader 2s ease infinite}.la-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:square-loader-inner 2s ease-in infinite;animation:square-loader-inner 2s ease-in infinite}.la-square-loader.la-sm{width:16px;height:16px}.la-square-loader.la-sm>div{border-width:1px}.la-square-loader.la-2x{width:64px;height:64px}.la-square-loader.la-2x>div{border-width:4px}.la-square-loader.la-3x{width:96px;height:96px}.la-square-loader.la-3x>div{border-width:6px}@-webkit-keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@-webkit-keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}@keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}.la-square-spin,.la-square-spin>div{position:relative;box-sizing:border-box}.la-square-spin{display:block;font-size:0;color:#fff}.la-square-spin.la-dark{color:#333}.la-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-spin{width:32px;height:32px}.la-square-spin>div{width:100%;height:100%;border-radius:0;-webkit-animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite}.la-square-spin.la-sm{width:16px;height:16px}.la-square-spin.la-2x{width:64px;height:64px}.la-square-spin.la-3x{width:96px;height:96px}@-webkit-keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.la-timer,.la-timer>div{position:relative;box-sizing:border-box}.la-timer{display:block;font-size:0;color:#fff}.la-timer.la-dark{color:#333}.la-timer>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-timer,.la-timer>div{width:32px;height:32px}.la-timer>div{background:transparent;border-width:2px;border-radius:100%}.la-timer>div:after,.la-timer>div:before{position:absolute;top:14px;left:14px;display:block;width:2px;margin-top:-1px;margin-left:-1px;content:\"\";background:currentColor;border-radius:2px;transform-origin:1px 1px 0;-webkit-animation:timer-loader 1.25s linear infinite;animation:timer-loader 1.25s linear infinite;-webkit-animation-delay:-625ms;animation-delay:-625ms}.la-timer>div:before{height:12px}.la-timer>div:after{height:8px;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:-7.5s;animation-delay:-7.5s}.la-timer.la-sm,.la-timer.la-sm>div{width:16px;height:16px}.la-timer.la-sm>div{border-width:1px}.la-timer.la-sm>div:after,.la-timer.la-sm>div:before{top:7px;left:7px;width:1px;margin-top:-.5px;margin-left:-.5px;border-radius:1px;transform-origin:.5px .5px 0}.la-timer.la-sm>div:before{height:6px}.la-timer.la-sm>div:after{height:4px}.la-timer.la-2x,.la-timer.la-2x>div{width:64px;height:64px}.la-timer.la-2x>div{border-width:4px}.la-timer.la-2x>div:after,.la-timer.la-2x>div:before{top:28px;left:28px;width:4px;margin-top:-2px;margin-left:-2px;border-radius:4px;transform-origin:2px 2px 0}.la-timer.la-2x>div:before{height:24px}.la-timer.la-2x>div:after{height:16px}.la-timer.la-3x,.la-timer.la-3x>div{width:96px;height:96px}.la-timer.la-3x>div{border-width:6px}.la-timer.la-3x>div:after,.la-timer.la-3x>div:before{top:42px;left:42px;width:6px;margin-top:-3px;margin-left:-3px;border-radius:6px;transform-origin:3px 3px 0}.la-timer.la-3x>div:before{height:36px}.la-timer.la-3x>div:after{height:24px}@-webkit-keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-triangle-skew-spin,.la-triangle-skew-spin>div{position:relative;box-sizing:border-box}.la-triangle-skew-spin{display:block;font-size:0;color:#fff}.la-triangle-skew-spin.la-dark{color:#333}.la-triangle-skew-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-triangle-skew-spin{width:32px;height:16px}.la-triangle-skew-spin>div{width:0;height:0;background:transparent;border-left:none;border-right:none;border-color:currentcolor transparent;border-style:solid;border-width:0 16px 16px;-webkit-animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite}.la-triangle-skew-spin.la-sm{width:16px;height:8px}.la-triangle-skew-spin.la-sm>div{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x{width:64px;height:32px}.la-triangle-skew-spin.la-2x>div{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x{width:96px;height:48px}.la-triangle-skew-spin.la-3x>div{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"]
            }]
    }], function () { return [{ type: NgxSpinnerService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { disableAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bdColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fullScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSpinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }], spinnerDOM: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['overlay']
        }] }); })();

class SafeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(v) {
        if (v) {
            return this._sanitizer.bypassSecurityTrustHtml(v);
        }
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();

class NgxSpinnerModule {
}
NgxSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxSpinnerModule });
NgxSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxSpinnerModule_Factory(t) { return new (t || NgxSpinnerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxSpinnerModule, { declarations: function () { return [NgxSpinnerComponent, SafeHtmlPipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [NgxSpinnerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                declarations: [NgxSpinnerComponent, SafeHtmlPipe],
                exports: [NgxSpinnerComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-spinner.js.map

/***/ }),

/***/ "Bt8u":
/*!***********************************************!*\
  !*** ./src/app/dashboard/home/home.module.ts ***!
  \***********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "gw9B");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "jwer");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "KeVr");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "7g+E");














class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideModule"],
        ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "CtHx":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/collections.js ***!
  \***********************************************************/
/*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, _DisposeViewRepeaterStrategy, _RecycleViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY, getMultipleValuesInSingleSelectionError, isDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DisposeViewRepeaterStrategy", function() { return _DisposeViewRepeaterStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_RecycleViewRepeaterStrategy", function() { return _RecycleViewRepeaterStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_VIEW_REPEATER_STRATEGY", function() { return _VIEW_REPEATER_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class DataSource {
}
/** Checks whether an object is a data source. */
function isDataSource(value) {
    // Check if the value is a DataSource by observing if it has a connect function. Cannot
    // be checked as an `instanceof DataSource` since people could create their own sources
    // that match the interface, but don't extend DataSource.
    return value && typeof value.connect === 'function';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** DataSource wrapper for a native array. */
class ArrayDataSource extends DataSource {
    constructor(_data) {
        super();
        this._data = _data;
    }
    connect() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
    }
    disconnect() { }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A repeater that destroys views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will always construct a new embedded view for each item.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _DisposeViewRepeaterStrategy {
    applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
            let view;
            let operation;
            if (record.previousIndex == null) {
                const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
                operation = 1 /* INSERTED */;
            }
            else if (currentIndex == null) {
                viewContainerRef.remove(adjustedPreviousIndex);
                operation = 3 /* REMOVED */;
            }
            else {
                view = viewContainerRef.get(adjustedPreviousIndex);
                viewContainerRef.move(view, currentIndex);
                operation = 2 /* MOVED */;
            }
            if (itemViewChanged) {
                itemViewChanged({
                    context: view === null || view === void 0 ? void 0 : view.context,
                    operation,
                    record,
                });
            }
        });
    }
    detach() {
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A repeater that caches views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will reuse one of the cached views instead of creating a new
 * embedded view. Recycling cached views reduces the quantity of expensive DOM
 * inserts.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _RecycleViewRepeaterStrategy {
    constructor() {
        /**
         * The size of the cache used to store unused views.
         * Setting the cache size to `0` will disable caching. Defaults to 20 views.
         */
        this.viewCacheSize = 20;
        /**
         * View cache that stores embedded view instances that have been previously stamped out,
         * but don't are not currently rendered. The view repeater will reuse these views rather than
         * creating brand new ones.
         *
         * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
         */
        this._viewCache = [];
    }
    /** Apply changes to the DOM. */
    applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        // Rearrange the views to put them in the right location.
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
            let view;
            let operation;
            if (record.previousIndex == null) { // Item added.
                const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = view ? 1 /* INSERTED */ : 0 /* REPLACED */;
            }
            else if (currentIndex == null) { // Item removed.
                this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
                operation = 3 /* REMOVED */;
            }
            else { // Item moved.
                view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = 2 /* MOVED */;
            }
            if (itemViewChanged) {
                itemViewChanged({
                    context: view === null || view === void 0 ? void 0 : view.context,
                    operation,
                    record,
                });
            }
        });
    }
    detach() {
        for (const view of this._viewCache) {
            view.destroy();
        }
        this._viewCache = [];
    }
    /**
     * Inserts a view for a new item, either from the cache or by creating a new
     * one. Returns `undefined` if the item was inserted into a cached view.
     */
    _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
        const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
        if (cachedView) {
            cachedView.context.$implicit = value;
            return undefined;
        }
        const viewArgs = viewArgsFactory();
        return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
    }
    /** Detaches the view at the given index and inserts into the view cache. */
    _detachAndCacheView(index, viewContainerRef) {
        const detachedView = viewContainerRef.detach(index);
        this._maybeCacheView(detachedView, viewContainerRef);
    }
    /** Moves view at the previous index to the current index. */
    _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
        const view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        view.context.$implicit = value;
        return view;
    }
    /**
     * Cache the given detached view. If the cache is full, the view will be
     * destroyed.
     */
    _maybeCacheView(view, viewContainerRef) {
        if (this._viewCache.length < this.viewCacheSize) {
            this._viewCache.push(view);
        }
        else {
            const index = viewContainerRef.indexOf(view);
            // The host component could remove views from the container outside of
            // the view repeater. It's unlikely this will occur, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.
            if (index === -1) {
                view.destroy();
            }
            else {
                viewContainerRef.remove(index);
            }
        }
    }
    /** Inserts a recycled view from the cache at the given index. */
    _insertViewFromCache(index, viewContainerRef) {
        const cachedView = this._viewCache.pop();
        if (cachedView) {
            viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class to be used to power selecting one or more options from a list.
 */
class SelectionModel {
    constructor(_multiple = false, initiallySelectedValues, _emitChanges = true) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /** Currently-selected values. */
        this._selection = new Set();
        /** Keeps track of the deselected options that haven't been emitted by the change event. */
        this._deselectedToEmit = [];
        /** Keeps track of the selected options that haven't been emitted by the change event. */
        this._selectedToEmit = [];
        /** Event emitted when the value has changed. */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach(value => this._markSelected(value));
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    /** Selected values. */
    get selected() {
        if (!this._selected) {
            this._selected = Array.from(this._selection.values());
        }
        return this._selected;
    }
    /**
     * Selects a value or an array of values.
     */
    select(...values) {
        this._verifyValueAssignment(values);
        values.forEach(value => this._markSelected(value));
        this._emitChangeEvent();
    }
    /**
     * Deselects a value or an array of values.
     */
    deselect(...values) {
        this._verifyValueAssignment(values);
        values.forEach(value => this._unmarkSelected(value));
        this._emitChangeEvent();
    }
    /**
     * Toggles a value between selected and deselected.
     */
    toggle(value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Clears all of the selected values.
     */
    clear() {
        this._unmarkAll();
        this._emitChangeEvent();
    }
    /**
     * Determines whether a value is selected.
     */
    isSelected(value) {
        return this._selection.has(value);
    }
    /**
     * Determines whether the model does not have a value.
     */
    isEmpty() {
        return this._selection.size === 0;
    }
    /**
     * Determines whether the model has a value.
     */
    hasValue() {
        return !this.isEmpty();
    }
    /**
     * Sorts the selected values based on a predicate function.
     */
    sort(predicate) {
        if (this._multiple && this.selected) {
            this._selected.sort(predicate);
        }
    }
    /**
     * Gets whether multiple values can be selected.
     */
    isMultipleSelection() {
        return this._multiple;
    }
    /** Emits a change event and clears the records of selected and deselected values. */
    _emitChangeEvent() {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    }
    /** Selects a value. */
    _markSelected(value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    }
    /** Deselects a value. */
    _unmarkSelected(value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    }
    /** Clears out the selected values. */
    _unmarkAll() {
        if (!this.isEmpty()) {
            this._selection.forEach(value => this._unmarkSelected(value));
        }
    }
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */
    _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMultipleValuesInSingleSelectionError();
        }
    }
}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @docs-private
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
class UniqueSelectionDispatcher {
    constructor() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    notify(id, name) {
        for (let listener of this._listeners) {
            listener(id, name);
        }
    }
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    listen(listener) {
        this._listeners.push(listener);
        return () => {
            this._listeners = this._listeners.filter((registered) => {
                return listener !== registered;
            });
        };
    }
    ngOnDestroy() {
        this._listeners = [];
    }
}
UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) { return new (t || UniqueSelectionDispatcher)(); };
UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
 * @docs-private
 */
const _VIEW_REPEATER_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('_ViewRepeater');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=collections.js.map

/***/ }),

/***/ "GXRp":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/table.js ***!
  \*****************************************************/
/*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_DIRECTIONS, STICKY_POSITIONING_LISTENER, StickyStyler, TEXT_COLUMN_OPTIONS, _COALESCED_STYLE_SCHEDULER, _CoalescedStyleScheduler, _Schedule, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function() { return CDK_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNoDataRow", function() { return CdkNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function() { return CdkTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataRowOutlet", function() { return NoDataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_POSITIONING_LISTENER", function() { return STICKY_POSITIONING_LISTENER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function() { return TEXT_COLUMN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_COALESCED_STYLE_SCHEDULER", function() { return _COALESCED_STYLE_SCHEDULER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CoalescedStyleScheduler", function() { return _CoalescedStyleScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Schedule", function() { return _Schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function CdkTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
} }
function CdkTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 */
function mixinHasStickyInput(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */
            this._hasStickyChanged = false;
        }
        /** Whether sticky positioning should be applied. */
        get sticky() { return this._sticky; }
        set sticky(v) {
            const prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /** Whether the sticky value has changed since this was last called. */
        hasStickyChanged() {
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /** Resets the dirty check for cases where the sticky state has been used without checking. */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */
const CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */
const TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class CdkCellDef {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
CdkCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class CdkHeaderCellDef {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
CdkHeaderCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkHeaderCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class CdkFooterCellDef {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
CdkFooterCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkFooterCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
// Boilerplate for applying mixins to CdkColumnDef.
/** @docs-private */
class CdkColumnDefBase {
}
const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
class CdkColumnDef extends _CdkColumnDefBase {
    constructor(_table) {
        super();
        this._table = _table;
        this._stickyEnd = false;
    }
    /** Unique name for this column. */
    get name() { return this._name; }
    set name(name) { this._setNameInput(name); }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */
    get stickyEnd() {
        return this._stickyEnd;
    }
    set stickyEnd(v) {
        const prevValue = this._stickyEnd;
        this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
    /**
     * Overridable method that sets the css classes that will be added to every cell in this
     * column.
     * In the future, columnCssClassName will change from type string[] to string and this
     * will set a single string value.
     * @docs-private
     */
    _updateColumnCssClassName() {
        this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setNameInput(value) {
        // If the directive is set without a name (updated programmatically), then this setter will
        // trigger with an empty string and should not overwrite the programmatically set value.
        if (value) {
            this._name = value;
            this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/ig, '-');
            this._updateColumnCssClassName();
        }
    }
}
CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
    } }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkColumnDef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
CdkColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkColumnDef',] }],
    stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['stickyEnd',] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkCellDef,] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkHeaderCellDef,] }],
    footerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkFooterCellDef,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkColumnDef']
        }], stickyEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['stickyEnd']
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkCellDef]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkHeaderCellDef]
        }], footerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkFooterCellDef]
        }] }); })();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
class BaseCdkCell {
    constructor(columnDef, elementRef) {
        // If IE 11 is dropped before we switch to setting a single class name, change to multi param
        // with destructuring.
        const classList = elementRef.nativeElement.classList;
        for (const className of columnDef._columnCssClassName) {
            classList.add(className);
        }
    }
}
/** Header cell template container that adds the right classes and role. */
class CdkHeaderCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-header-cell, th[cdk-header-cell]',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/** Footer cell template container that adds the right classes and role. */
class CdkFooterCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                host: {
                    'class': 'cdk-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/** Cell template container that adds the right classes and role. */
class CdkCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-cell, td[cdk-cell]',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @docs-private
 */
class _Schedule {
    constructor() {
        this.tasks = [];
        this.endTasks = [];
    }
}
/** Injection token used to provide a coalesced style scheduler. */
const _COALESCED_STYLE_SCHEDULER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('_COALESCED_STYLE_SCHEDULER');
/**
 * Allows grouping up CSSDom mutations after the current execution context.
 * This can significantly improve performance when separate consecutive functions are
 * reading from the CSSDom and then mutating it.
 *
 * @docs-private
 */
class _CoalescedStyleScheduler {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._currentSchedule = null;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    /**
     * Schedules the specified task to run at the end of the current VM turn.
     */
    schedule(task) {
        this._createScheduleIfNeeded();
        this._currentSchedule.tasks.push(task);
    }
    /**
     * Schedules the specified task to run after other scheduled tasks at the end of the current
     * VM turn.
     */
    scheduleEnd(task) {
        this._createScheduleIfNeeded();
        this._currentSchedule.endTasks.push(task);
    }
    /** Prevent any further tasks from running. */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    _createScheduleIfNeeded() {
        if (this._currentSchedule) {
            return;
        }
        this._currentSchedule = new _Schedule();
        this._getScheduleObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(() => {
            while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
                const schedule = this._currentSchedule;
                // Capture new tasks scheduled by the current set of tasks.
                this._currentSchedule = new _Schedule();
                for (const task of schedule.tasks) {
                    task();
                }
                for (const task of schedule.endTasks) {
                    task();
                }
            }
            this._currentSchedule = null;
        });
    }
    _getScheduleObservable() {
        // Use onStable when in the context of an ongoing change detection cycle so that we
        // do not accidentally trigger additional cycles.
        return this._ngZone.isStable ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(Promise.resolve(undefined)) :
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1));
    }
}
_CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) { return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
_CoalescedStyleScheduler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: _CoalescedStyleScheduler, factory: _CoalescedStyleScheduler.ɵfac });
_CoalescedStyleScheduler.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_CoalescedStyleScheduler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
class BaseRowDef {
    constructor(
    /** @docs-private */ template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    ngOnChanges(changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            const columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
    }
    /** Gets this row def's relevant cell template from the provided column def. */
    extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    }
}
BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseRowDef, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
BaseRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }]; }, null); })();
// Boilerplate for applying mixins to CdkHeaderRowDef.
/** @docs-private */
class CdkHeaderRowDefBase extends BaseRowDef {
}
const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
CdkHeaderRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
// Boilerplate for applying mixins to CdkFooterRowDef.
/** @docs-private */
class CdkFooterRowDefBase extends BaseRowDef {
}
const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class CdkFooterRowDef extends _CdkFooterRowDefBase {
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
CdkFooterRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkFooterRowDef]',
                inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
}
CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
class CdkCellOutlet {
    constructor(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    ngOnDestroy() {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    }
}
CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */
CdkCellOutlet.mostRecentCellOutlet = null;
CdkCellOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }]; }, null); })();
/** Header template container that contains the cell outlet. Adds the right class and role. */
class CdkHeaderRow {
}
CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-header-row, tr[cdk-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
class CdkFooterRow {
}
CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-footer-row, tr[cdk-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
class CdkRow {
}
CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-row, tr[cdk-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/** Row that can be used to display a message when no data is shown in the table. */
class CdkNoDataRow {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) { return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkNoDataRow, selectors: [["ng-template", "cdkNoDataRow", ""]] });
CdkNoDataRow.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNoDataRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[cdkNoDataRow]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */
class StickyStyler {
    /**
     * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param _stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param _isBrowser Whether the table is currently being rendered on the server or the client.
     * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
     *     using inline styles. If false, it is assumed that position: sticky is included in
     *     the component stylesheet for _stickCellCss.
     * @param _positionListener A listener that is notified of changes to sticky rows/columns
     *     and their dimensions.
     */
    constructor(_isNativeHtmlTable, _stickCellCss, direction, 
    /**
     * @deprecated `_coalescedStyleScheduler` parameter to become required.
     * @breaking-change 11.0.0
     */
    _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true, _positionListener) {
        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._isBrowser = _isBrowser;
        this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
        this._positionListener = _positionListener;
        this._cachedCellWidths = [];
        this._borderCellCss = {
            'top': `${_stickCellCss}-border-elem-top`,
            'bottom': `${_stickCellCss}-border-elem-bottom`,
            'left': `${_stickCellCss}-border-elem-left`,
            'right': `${_stickCellCss}-border-elem-right`,
        };
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param rows The list of rows that should be cleared from sticking in the provided directions
     * @param stickyDirections The directions that should no longer be set as sticky on the rows.
     */
    clearStickyPositioning(rows, stickyDirections) {
        const elementsToClear = [];
        for (const row of rows) {
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            elementsToClear.push(row);
            for (let i = 0; i < row.children.length; i++) {
                elementsToClear.push(row.children[i]);
            }
        }
        // Coalesce with sticky row/column updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            for (const element of elementsToClear) {
                this._removeStickyStyle(element, stickyDirections);
            }
        });
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param rows The rows that should have its set of cells stuck according to the sticky states.
     * @param stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
     *     column cell. If `false` cached widths will be used instead.
     */
    updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true) {
        if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) ||
            stickyEndStates.some(state => state))) {
            if (this._positionListener) {
                this._positionListener.stickyColumnsUpdated({ sizes: [] });
                this._positionListener.stickyEndColumnsUpdated({ sizes: [] });
            }
            return;
        }
        const firstRow = rows[0];
        const numCells = firstRow.children.length;
        const cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
        const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        const lastStickyStart = stickyStartStates.lastIndexOf(true);
        const firstStickyEnd = stickyEndStates.indexOf(true);
        // Coalesce with sticky row updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            const isRtl = this.direction === 'rtl';
            const start = isRtl ? 'right' : 'left';
            const end = isRtl ? 'left' : 'right';
            for (const row of rows) {
                for (let i = 0; i < numCells; i++) {
                    const cell = row.children[i];
                    if (stickyStartStates[i]) {
                        this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
                    }
                    if (stickyEndStates[i]) {
                        this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
                    }
                }
            }
            if (this._positionListener) {
                this._positionListener.stickyColumnsUpdated({
                    sizes: lastStickyStart === -1 ?
                        [] :
                        cellWidths
                            .slice(0, lastStickyStart + 1)
                            .map((width, index) => stickyStartStates[index] ? width : null)
                });
                this._positionListener.stickyEndColumnsUpdated({
                    sizes: firstStickyEnd === -1 ?
                        [] :
                        cellWidths
                            .slice(firstStickyEnd)
                            .map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null)
                            .reverse()
                });
            }
        });
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     */
    stickRows(rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
        // sticky states need to be reversed as well.
        const rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
        const states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates;
        // Measure row heights all at once before adding sticky styles to reduce layout thrashing.
        const stickyOffsets = [];
        const stickyCellHeights = [];
        const elementsToStick = [];
        for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
            stickyOffsets[rowIndex] = stickyOffset;
            if (!states[rowIndex]) {
                continue;
            }
            const row = rows[rowIndex];
            elementsToStick[rowIndex] = this._isNativeHtmlTable ?
                Array.from(row.children) : [row];
            const height = row.getBoundingClientRect().height;
            stickyOffset += height;
            stickyCellHeights[rowIndex] = height;
        }
        const borderedRowIndex = states.lastIndexOf(true);
        // Coalesce with other sticky row updates (top/bottom), sticky columns updates
        // (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            var _a, _b;
            for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                if (!states[rowIndex]) {
                    continue;
                }
                const offset = stickyOffsets[rowIndex];
                const isBorderedRowIndex = rowIndex === borderedRowIndex;
                for (const element of elementsToStick[rowIndex]) {
                    this._addStickyStyle(element, position, offset, isBorderedRowIndex);
                }
            }
            if (position === 'top') {
                (_a = this._positionListener) === null || _a === void 0 ? void 0 : _a.stickyHeaderRowsUpdated({ sizes: stickyCellHeights, elements: elementsToStick });
            }
            else {
                (_b = this._positionListener) === null || _b === void 0 ? void 0 : _b.stickyFooterRowsUpdated({ sizes: stickyCellHeights, elements: elementsToStick });
            }
        });
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     */
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        const tfoot = tableElement.querySelector('tfoot');
        // Coalesce with other sticky updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            if (stickyStates.some(state => !state)) {
                this._removeStickyStyle(tfoot, ['bottom']);
            }
            else {
                this._addStickyStyle(tfoot, 'bottom', 0, false);
            }
        });
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */
    _removeStickyStyle(element, stickyDirections) {
        for (const dir of stickyDirections) {
            element.style[dir] = '';
            element.classList.remove(this._borderCellCss[dir]);
        }
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        // Short-circuit checking element.style[dir] for stickyDirections as they
        // were already removed above.
        const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
        if (hasDirection) {
            element.style.zIndex = this._getCalculatedZIndex(element);
        }
        else {
            // When not hasDirection, _getCalculatedZIndex will always return ''.
            element.style.zIndex = '';
            if (this._needsPositionStickyOnElement) {
                element.style.position = '';
            }
            element.classList.remove(this._stickCellCss);
        }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     */
    _addStickyStyle(element, dir, dirValue, isBorderElement) {
        element.classList.add(this._stickCellCss);
        if (isBorderElement) {
            element.classList.add(this._borderCellCss[dir]);
        }
        element.style[dir] = `${dirValue}px`;
        element.style.zIndex = this._getCalculatedZIndex(element);
        if (this._needsPositionStickyOnElement) {
            element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        }
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     */
    _getCalculatedZIndex(element) {
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        let zIndex = 0;
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        for (const dir of STICKY_DIRECTIONS) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : '';
    }
    /** Gets the widths for each cell in the provided row. */
    _getCellWidths(row, recalculateCellWidths = true) {
        if (!recalculateCellWidths && this._cachedCellWidths.length) {
            return this._cachedCellWidths;
        }
        const cellWidths = [];
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            let cell = firstRowCells[i];
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        this._cachedCellWidths = cellWidths;
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyEndColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Schedules styles to be applied when the style scheduler deems appropriate.
     * @breaking-change 11.0.0 This method can be removed in favor of calling
     * `CoalescedStyleScheduler.schedule` directly once the scheduler is a required parameter.
     */
    _scheduleStyleChanges(changes) {
        if (this._coalescedStyleScheduler) {
            this._coalescedStyleScheduler.schedule(changes);
        }
        else {
            changes();
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the` +
        `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The injection token used to specify the StickyPositioningListener. */
const STICKY_POSITIONING_LISTENER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_SPL');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
class DataRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) { return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DataRowOutlet, selectors: [["", "rowOutlet", ""]] });
DataRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[rowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */
class HeaderRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) { return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: HeaderRowOutlet, selectors: [["", "headerRowOutlet", ""]] });
HeaderRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[headerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */
class FooterRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) { return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: FooterRowOutlet, selectors: [["", "footerRowOutlet", ""]] });
FooterRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FooterRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[footerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Provides a handle for the table to grab the view
 * container's ng-container to insert the no data row.
 * @docs-private
 */
class NoDataRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) { return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
NoDataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NoDataRowOutlet, selectors: [["", "noDataRowOutlet", ""]] });
NoDataRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NoDataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[noDataRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */
const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"] {
}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */
class CdkTable {
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, 
    /**
     * @deprecated `_coalescedStyleScheduler`, `_viewRepeater` and `_viewportRuler`
     *    parameters to become required.
     * @breaking-change 11.0.0
     */
    _viewRepeater, _coalescedStyleScheduler, _stickyPositioningListener, 
    // Optional for backwards compatibility. The viewport ruler is provided in root. Therefore,
    // this property will never be null.
    // tslint:disable-next-line: lightweight-tokens
    _viewportRuler) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
        this._viewportRuler = _viewportRuler;
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
         * change.
         */
        this._stickyColumnStylesNeedReset = true;
        /**
         * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
         * `false`, cached values will be used instead. This is only applicable to tables with
         * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
         */
        this._forceRecalculateCellWidths = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        /**
         * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
         * the position is set in a selector associated with the value of stickyCssClass. May be
         * overridden by table subclasses
         */
        this.needsPositionStickyOnElement = true;
        /** Whether the no data row is currently showing anything. */
        this._isShowingNoDataRow = false;
        this._multiTemplateDataRows = false;
        this._fixedLayout = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * @docs-private
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy() {
        return this._trackByFn;
    }
    set trackBy(fn) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     */
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */
    get multiTemplateDataRows() {
        return this._multiTemplateDataRows;
    }
    set multiTemplateDataRows(v) {
        this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
        // this setter will be invoked before the row outlet has been defined hence the null check.
        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
     * and optimize rendering sticky styles for native tables. No-op for flex tables.
     */
    get fixedLayout() {
        return this._fixedLayout;
    }
    set fixedLayout(v) {
        this._fixedLayout = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.
        this._forceRecalculateCellWidths = true;
        this._stickyColumnStylesNeedReset = true;
    }
    ngOnInit() {
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
            return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        });
        // Table cell dimensions may change after resizing the window. Signal the sticky styler to
        // refresh its cache of cell widths the next time sticky styles are updated.
        // @breaking-change 11.0.0 Remove null check for _viewportRuler once it's a required parameter.
        if (this._viewportRuler) {
            this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy)).subscribe(() => {
                this._forceRecalculateCellWidths = true;
            });
        }
    }
    ngAfterContentChecked() {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        const columnsChanged = this._renderUpdatedColumns();
        const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
        // Ensure sticky column styles are reset if set to `true` elsewhere.
        this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
        this._forceRecalculateCellWidths = rowDefsChanged;
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        else if (this._stickyColumnStylesNeedReset) {
            // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
            // called when it row data arrives. Otherwise, we need to call it proactively.
            this.updateStickyColumnStyles();
        }
        this._checkStickyStates();
    }
    ngOnDestroy() {
        this._rowOutlet.viewContainer.clear();
        this._noDataRowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    renderRows() {
        this._renderRows = this._getAllRenderRows();
        const changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            this._updateNoDataRow();
            return;
        }
        const viewContainer = this._rowOutlet.viewContainer;
        // @breaking-change 11.0.0 Remove null check for `_viewRepeater` and the
        // `else` clause once `_viewRepeater` is turned into a required parameter.
        if (this._viewRepeater) {
            this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
                if (change.operation === 1 /* INSERTED */ && change.context) {
                    this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
                }
            });
        }
        else {
            changes.forEachOperation((record, prevIndex, currentIndex) => {
                if (record.previousIndex == null) {
                    const renderRow = record.item;
                    const rowDef = renderRow.rowDef;
                    const context = { $implicit: renderRow.data };
                    this._renderRow(this._rowOutlet, rowDef, currentIndex, context);
                }
                else if (currentIndex == null) {
                    viewContainer.remove(prevIndex);
                }
                else {
                    const view = viewContainer.get(prevIndex);
                    viewContainer.move(view, currentIndex);
                }
            });
        }
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange((record) => {
            const rowView = viewContainer.get(record.currentIndex);
            rowView.context.$implicit = record.item.data;
        });
        this._updateNoDataRow();
        this.updateStickyColumnStyles();
    }
    /** Adds a column definition that was not included as part of the content children. */
    addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
    }
    /** Removes a column definition that was not included as part of the content children. */
    removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
    }
    /** Adds a row definition that was not included as part of the content children. */
    addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
    }
    /** Removes a row definition that was not included as part of the content children. */
    removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
    }
    /** Adds a header row definition that was not included as part of the content children. */
    addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Removes a header row definition that was not included as part of the content children. */
    removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Adds a footer row definition that was not included as part of the content children. */
    addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /** Removes a footer row definition that was not included as part of the content children. */
    removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /** Sets a no data row definition that was not included as a part of the content children. */
    setNoDataRow(noDataRow) {
        this._customNoDataRow = noDataRow;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyHeaderRowStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        const tableElement = this._elementRef.nativeElement;
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        const thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        const stickyStates = this._headerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyFooterRowStyles() {
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        const tableElement = this._elementRef.nativeElement;
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        const tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        const stickyStates = this._footerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    updateStickyColumnStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        const dataRows = this._getRenderedRows(this._rowOutlet);
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        // For tables not using a fixed layout, the column widths may change when new rows are rendered.
        // In a table using a fixed layout, row content won't affect column width, so sticky styles
        // don't need to be cleared unless either the sticky column config changes or one of the row
        // defs change.
        if ((this._isNativeHtmlTable && !this._fixedLayout)
            || this._stickyColumnStylesNeedReset) {
            // Clear the left and right positioning from all columns in the table across all rows since
            // sticky columns span across all table sections (header, data, footer)
            this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
            this._stickyColumnStylesNeedReset = false;
        }
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach((headerRow, i) => {
            this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
        });
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach(rowDef => {
            // Collect all the rows rendered with this row definition.
            const rows = [];
            for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            this._addStickyColumnStyles(rows, rowDef);
        });
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach((footerRow, i) => {
            this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
        });
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    _getAllRenderRows() {
        const renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        const prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (let i = 0; i < this._data.length; i++) {
            let data = this._data[i];
            const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (let j = 0; j < renderRowsForData.length; j++) {
                let renderRow = renderRowsForData[j];
                const cache = this._cachedRenderRowsMap.get(renderRow.data);
                if (cache.has(renderRow.rowDef)) {
                    cache.get(renderRow.rowDef).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    _getRenderRowsForData(data, dataIndex, cache) {
        const rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map(rowDef => {
            const cachedRenderRows = (cache && cache.has(rowDef)) ? cache.get(rowDef) : [];
            if (cachedRenderRows.length) {
                const dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data, rowDef, dataIndex };
            }
        });
    }
    /** Update the map containing the content's column definitions. */
    _cacheColumnDefs() {
        this._columnDefsByName.clear();
        const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
        columnDefs.forEach(columnDef => {
            if (this._columnDefsByName.has(columnDef.name) &&
                (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            this._columnDefsByName.set(columnDef.name, columnDef);
        });
    }
    /** Update the list of all available row definitions that can be used. */
    _cacheRowDefs() {
        this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
        this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
        this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        const defaultRowDefs = this._rowDefs.filter(def => !def.when);
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    _renderUpdatedColumns() {
        const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
        // Force re-render data rows if the list of column definitions have changed.
        const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
        if (dataColumnsChanged) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed.
        const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
        if (headerColumnsChanged) {
            this._forceRenderHeaderRows();
        }
        const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
        if (footerColumnsChanged) {
            this._forceRenderFooterRows();
        }
        return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
        this._data = [];
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    }
    /** Set up a subscription for the data provided by the data source. */
    _observeRenderChanges() {
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        let dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["isObservable"])(this.dataSource)) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.dataSource);
        }
        if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy))
            .subscribe(data => {
            this._data = data || [];
            this.renderRows();
        });
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    _forceRenderHeaderRows() {
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
        this.updateStickyHeaderRowStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    _forceRenderFooterRows() {
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
        this.updateStickyFooterRowStyles();
    }
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    _addStickyColumnStyles(rows, rowDef) {
        const columnDefs = Array.from(rowDef.columns || []).map(columnName => {
            const columnDef = this._columnDefsByName.get(columnName);
            if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnName);
            }
            return columnDef;
        });
        const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
        const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
    }
    /** Gets the list of rows that have been rendered in the row outlet. */
    _getRenderedRows(rowOutlet) {
        const renderedRows = [];
        for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
            const viewRef = rowOutlet.viewContainer.get(i);
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        let rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
        }
        else {
            let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    }
    _getEmbeddedViewArgs(renderRow, index) {
        const rowDef = renderRow.rowDef;
        const context = { $implicit: renderRow.data };
        return {
            templateRef: rowDef.template,
            context,
            index,
        };
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    _renderRow(outlet, rowDef, index, context = {}) {
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        this._renderCellTemplateForItem(rowDef, context);
        return view;
    }
    _renderCellTemplateForItem(rowDef, context) {
        for (let cellTemplate of this._getCellTemplates(rowDef)) {
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    _updateRowIndexContext() {
        const viewContainer = this._rowOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            const viewRef = viewContainer.get(renderIndex);
            const context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    }
    /** Gets the column definitions for the provided row def. */
    _getCellTemplates(rowDef) {
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, columnId => {
            const column = this._columnDefsByName.get(columnId);
            if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        });
    }
    /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
    _applyNativeTableSections() {
        const documentFragment = this._document.createDocumentFragment();
        const sections = [
            { tag: 'thead', outlets: [this._headerRowOutlet] },
            { tag: 'tbody', outlets: [this._rowOutlet, this._noDataRowOutlet] },
            { tag: 'tfoot', outlets: [this._footerRowOutlet] },
        ];
        for (const section of sections) {
            const element = this._document.createElement(section.tag);
            element.setAttribute('role', 'rowgroup');
            for (const outlet of section.outlets) {
                element.appendChild(outlet.elementRef.nativeElement);
            }
            documentFragment.appendChild(element);
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    _forceRenderDataRows() {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    _checkStickyStates() {
        const stickyCheckReducer = (acc, d) => {
            return acc || d.hasStickyChanged();
        };
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this._stickyColumnStylesNeedReset = true;
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    _setupStickyStyler() {
        const direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
        (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy))
            .subscribe(value => {
            this._stickyStyler.direction = value;
            this.updateStickyColumnStyles();
        });
    }
    /** Filters definitions that belong to this table from a QueryList. */
    _getOwnDefs(items) {
        return items.filter(item => !item._table || item._table === this);
    }
    /** Creates or removes the no data row, depending on whether any data is being shown. */
    _updateNoDataRow() {
        const noDataRow = this._customNoDataRow || this._noDataRow;
        if (noDataRow) {
            const shouldShow = this._rowOutlet.viewContainer.length === 0;
            if (shouldShow !== this._isShowingNoDataRow) {
                const container = this._noDataRowOutlet.viewContainer;
                shouldShow ? container.createEmbeddedView(noDataRow.templateRef) : container.clear();
                this._isShowingNoDataRow = shouldShow;
            }
        }
    }
}
CdkTable.ɵfac = function CdkTable_Factory(t) { return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](STICKY_POSITIONING_LISTENER, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"], 8)); };
CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTable, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
    } }, viewQuery: function CdkTable_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](NoDataRowOutlet, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
    } }, hostAttrs: [1, "cdk-table"], hostVars: 2, hostBindings: function CdkTable_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
    } }, inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows", fixedLayout: "fixedLayout" }, exportAs: ["cdkTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            { provide: CDK_TABLE, useExisting: CdkTable },
            { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
            { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
            // Prevent nested tables from seeing this table's StickyPositioningListener.
            { provide: STICKY_POSITIONING_LISTENER, useValue: null },
        ])], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function CdkTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 3);
    } }, directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet], styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"], encapsulation: 2 });
CdkTable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['role',] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"],] }] },
    { type: _CoalescedStyleScheduler, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_COALESCED_STYLE_SCHEDULER,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [STICKY_POSITIONING_LISTENER,] }] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
CdkTable.propDecorators = {
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    multiTemplateDataRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fixedLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _rowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [DataRowOutlet, { static: true },] }],
    _headerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [HeaderRowOutlet, { static: true },] }],
    _footerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [FooterRowOutlet, { static: true },] }],
    _noDataRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [NoDataRowOutlet, { static: true },] }],
    _contentColumnDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkColumnDef, { descendants: true },] }],
    _contentRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkRowDef, { descendants: true },] }],
    _contentHeaderRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkHeaderRowDef, {
                    descendants: true
                },] }],
    _contentFooterRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkFooterRowDef, {
                    descendants: true
                },] }],
    _noDataRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkNoDataRow,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-table, table[cdk-table]',
                exportAs: 'cdkTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table',
                    '[class.cdk-table-fixed-layout]': 'fixedLayout'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                // The view for `MatTable` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                providers: [
                    { provide: CDK_TABLE, useExisting: CdkTable },
                    { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
                    { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
                    // Prevent nested tables from seeing this table's StickyPositioningListener.
                    { provide: STICKY_POSITIONING_LISTENER, useValue: null },
                ],
                styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
                args: ['role']
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"]]
            }] }, { type: _CoalescedStyleScheduler, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_COALESCED_STYLE_SCHEDULER]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [STICKY_POSITIONING_LISTENER]
            }] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], multiTemplateDataRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], fixedLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _rowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DataRowOutlet, { static: true }]
        }], _headerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [HeaderRowOutlet, { static: true }]
        }], _footerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [FooterRowOutlet, { static: true }]
        }], _noDataRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [NoDataRowOutlet, { static: true }]
        }], _contentColumnDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkColumnDef, { descendants: true }]
        }], _contentRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkRowDef, { descendants: true }]
        }], _contentHeaderRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkHeaderRowDef, {
                    descendants: true
                }]
        }], _contentFooterRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkFooterRowDef, {
                    descendants: true
                }]
        }], _noDataRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkNoDataRow]
        }] }); })();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
class CdkTextColumn {
    constructor(
    // `CdkTextColumn` is always requiring a table, but we just assert it manually
    // for better error reporting.
    // tslint:disable-next-line: lightweight-tokens
    _table, _options) {
        this._table = _table;
        this._options = _options;
        /** Alignment of the cell values. */
        this.justify = 'start';
        this._options = _options || {};
    }
    /** Column name that should be used to reference this column. */
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        // With Ivy, inputs can be initialized before static query results are
        // available. In that case, we defer the synchronization until "ngOnInit" fires.
        this._syncColumnDefName();
    }
    ngOnInit() {
        this._syncColumnDefName();
        if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor =
                this._options.defaultDataAccessor || ((data, name) => data[name]);
        }
        if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;
            this._table.addColumnDef(this.columnDef);
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw getTableTextColumnMissingParentTableError();
        }
    }
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    _createDefaultHeaderText() {
        const name = this.name;
        if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    }
    /** Synchronizes the column definition name with the text column name. */
    _syncColumnDefName() {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    }
}
CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) { return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8)); };
CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTextColumn, selectors: [["cdk-text-column"]], viewQuery: function CdkTextColumn_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
    } }, inputs: { justify: "justify", name: "name", headerText: "headerText", dataAccessor: "dataAccessor" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function CdkTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    } }, directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell], encapsulation: 2 });
CdkTextColumn.ctorParameters = () => [
    { type: CdkTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [TEXT_COLUMN_OPTIONS,] }] }
];
CdkTextColumn.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataAccessor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    columnDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkColumnDef, { static: true },] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkCellDef, { static: true },] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkHeaderCellDef, { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-text-column',
                template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: CdkTable, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [TEXT_COLUMN_OPTIONS]
            }] }]; }, { justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], headerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkColumnDef, { static: true }]
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkCellDef, { static: true }]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkHeaderCellDef, { static: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
    CdkNoDataRow,
    NoDataRowOutlet,
];
class CdkTableModule {
}
CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CdkTableModule });
CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CdkTableModule_Factory(t) { return new (t || CdkTableModule)(); }, imports: [[_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, { declarations: function () { return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]; }, imports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]; }, exports: function () { return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=table.js.map

/***/ }),

/***/ "KeVr":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.js ***!
  \*************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); } });
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-search-filter.js.map

/***/ }),

/***/ "LUZP":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/sort.js ***!
  \*********************************************************/
/*! exports provided: MAT_SORT_DEFAULT_OPTIONS, MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule, matSortAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_DEFAULT_OPTIONS", function() { return MAT_SORT_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function() { return MAT_SORT_HEADER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function() { return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSort", function() { return MatSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeader", function() { return MatSortHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function() { return MatSortHeaderIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function() { return MatSortModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSortAnimations", function() { return matSortAnimations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */




const _c0 = ["mat-sort-header", ""];
function MatSortHeader_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1._disableViewStateAnimation = true; })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3._disableViewStateAnimation = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
} }
const _c1 = ["*"];
function getSortDuplicateSortableIdError(id) {
    return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
/** @docs-private */
function getSortHeaderNotContainedWithinSortError() {
    return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
/** @docs-private */
function getSortHeaderMissingIdError() {
    return Error(`MatSortHeader must be provided with a unique id.`);
}
/** @docs-private */
function getSortInvalidDirectionError(direction) {
    return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-sort`. */
const MAT_SORT_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_SORT_DEFAULT_OPTIONS');
// Boilerplate for applying mixins to MatSort.
/** @docs-private */
class MatSortBase {
}
const _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
/** Container for MatSortables to manage the sort state and provide default sort parameters. */
class MatSort extends _MatSortMixinBase {
    constructor(_defaultOptions) {
        super();
        this._defaultOptions = _defaultOptions;
        /** Collection of all registered sortables that this directive manages. */
        this.sortables = new Map();
        /** Used to notify any child components listening to state changes. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * The direction to set when an MatSortable is initially sorted.
         * May be overriden by the MatSortable's sort start.
         */
        this.start = 'asc';
        this._direction = '';
        /** Event emitted when the user changes either the active sort or sort direction. */
        this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** The sort direction of the currently active MatSortable. */
    get direction() { return this._direction; }
    set direction(direction) {
        if (direction && direction !== 'asc' && direction !== 'desc' &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getSortInvalidDirectionError(direction);
        }
        this._direction = direction;
    }
    /**
     * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
     * May be overriden by the MatSortable's disable clear input.
     */
    get disableClear() { return this._disableClear; }
    set disableClear(v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); }
    /**
     * Register function to be used by the contained MatSortables. Adds the MatSortable to the
     * collection of MatSortables.
     */
    register(sortable) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!sortable.id) {
                throw getSortHeaderMissingIdError();
            }
            if (this.sortables.has(sortable.id)) {
                throw getSortDuplicateSortableIdError(sortable.id);
            }
        }
        this.sortables.set(sortable.id, sortable);
    }
    /**
     * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
     * collection of contained MatSortables.
     */
    deregister(sortable) {
        this.sortables.delete(sortable.id);
    }
    /** Sets the active sort id and determines the new sort direction. */
    sort(sortable) {
        if (this.active != sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
        }
        else {
            this.direction = this.getNextSortDirection(sortable);
        }
        this.sortChange.emit({ active: this.active, direction: this.direction });
    }
    /** Returns the next sort direction of the active sortable, checking for potential overrides. */
    getNextSortDirection(sortable) {
        var _a, _b, _c;
        if (!sortable) {
            return '';
        }
        // Get the sort direction cycle with the potential sortable overrides.
        const disableClear = (_b = (_a = sortable === null || sortable === void 0 ? void 0 : sortable.disableClear) !== null && _a !== void 0 ? _a : this.disableClear) !== null && _b !== void 0 ? _b : !!((_c = this._defaultOptions) === null || _c === void 0 ? void 0 : _c.disableClear);
        let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
        // Get and return the next direction in the cycle
        let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    }
    ngOnInit() {
        this._markInitialized();
    }
    ngOnChanges() {
        this._stateChanges.next();
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
MatSort.ɵfac = function MatSort_Factory(t) { return new (t || MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8)); };
MatSort.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatSort, selectors: [["", "matSort", ""]], hostAttrs: [1, "mat-sort"], inputs: { disabled: ["matSortDisabled", "disabled"], start: ["matSortStart", "start"], direction: ["matSortDirection", "direction"], disableClear: ["matSortDisableClear", "disableClear"], active: ["matSortActive", "active"] }, outputs: { sortChange: "matSortChange" }, exportAs: ["matSort"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
MatSort.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_SORT_DEFAULT_OPTIONS,] }] }
];
MatSort.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matSortActive',] }],
    start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matSortStart',] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matSortDirection',] }],
    disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matSortDisableClear',] }],
    sortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['matSortChange',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSort, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matSort]',
                exportAs: 'matSort',
                host: { 'class': 'mat-sort' },
                inputs: ['disabled: matSortDisabled']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_SORT_DEFAULT_OPTIONS]
            }] }]; }, { start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortStart']
        }], sortChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['matSortChange']
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDirection']
        }], disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDisableClear']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortActive']
        }] }); })();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start, disableClear) {
    let sortOrder = ['asc', 'desc'];
    if (start == 'desc') {
        sortOrder.reverse();
    }
    if (!disableClear) {
        sortOrder.push('');
    }
    return sortOrder;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' +
    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */
const matSortAnimations = {
    /** Animation that moves the sort indicator. */
    indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('indicator', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0px)' })),
        // 10px is the height of the sort indicator, minus the width of the pointers
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(10px)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
    leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('leftPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
    rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rightPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that controls the arrow opacity. */
    arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowOpacity', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: .54 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 })),
        // Transition between all states except for immediate transitions
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION)),
    ]),
    /**
     * Animation for the translation of the arrow as a whole. States are separated into two
     * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
     * peek, and active. The other states define a specific animation (source-to-destination)
     * and are determined as a function of their prev user-perceived state and what the next state
     * should be.
     */
    arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowPosition', [
        // Hidden Above => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(-25%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' })
        ]))),
        // Hint Center => Hidden Below
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(25%)' })
        ]))),
        // Hidden Below => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(25%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' })
        ]))),
        // Hint Center => Hidden Above
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(-25%)' })
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(-25%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(25%)' })),
    ]),
    /** Necessary trigger that calls animate on children animations. */
    allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('allowChildren', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animateChild"])(), { optional: true })
        ])
    ]),
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */
class MatSortHeaderIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * ARIA label for the sorting button.
         * @deprecated Not used anymore. To be removed.
         * @breaking-change 8.0.0
         */
        this.sortButtonLabel = (id) => {
            return `Change sorting for ${id}`;
        };
    }
}
MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) { return new (t || MatSortHeaderIntl)(); };
MatSortHeaderIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatSortHeaderIntl_Factory() { return new MatSortHeaderIntl(); }, token: MatSortHeaderIntl, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
/** @docs-private */
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */
const MAT_SORT_HEADER_INTL_PROVIDER = {
    // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
    provide: MatSortHeaderIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatSortHeaderIntl]],
    useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to the sort header.
/** @docs-private */
class MatSortHeaderBase {
}
const _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
class MatSortHeader extends _MatSortHeaderMixinBase {
    constructor(_intl, _changeDetectorRef, 
    // `MatSort` is not optionally injected, but just asserted manually w/ better error.
    // tslint:disable-next-line: lightweight-tokens
    _sort, _columnDef, _focusMonitor, _elementRef) {
        // Note that we use a string token for the `_columnDef`, because the value is provided both by
        // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
        // and we want to avoid having the sort header depending on the CDK table because
        // of this single reference.
        super();
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._sort = _sort;
        this._columnDef = _columnDef;
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        /**
         * Flag set to true when the indicator should be displayed while the sort is not active. Used to
         * provide an affordance that the header is sortable by showing on focus and hover.
         */
        this._showIndicatorHint = false;
        /**
         * The view transition state of the arrow (translation/ opacity) - indicates its `from` and `to`
         * position through the animation. If animations are currently disabled, the fromState is removed
         * so that there is no animation displayed.
         */
        this._viewState = {};
        /** The direction the arrow should be facing according to the current state. */
        this._arrowDirection = '';
        /**
         * Whether the view state animation should show the transition between the `from` and `to` states.
         */
        this._disableViewStateAnimation = false;
        /** Sets the position of the arrow that displays when sorted. */
        this.arrowPosition = 'after';
        if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getSortHeaderNotContainedWithinSortError();
        }
        this._handleStateChanges();
    }
    /** Overrides the disable clear value of the containing MatSort for this MatSortable. */
    get disableClear() { return this._disableClear; }
    set disableClear(v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); }
    ngOnInit() {
        if (!this.id && this._columnDef) {
            this.id = this._columnDef.name;
        }
        // Initialize the direction of the arrow and set the view state to be immediately that state.
        this._updateArrowDirection();
        this._setAnimationTransitionState({ toState: this._isSorted() ? 'active' : this._arrowDirection });
        this._sort.register(this);
    }
    ngAfterViewInit() {
        // We use the focus monitor because we also want to style
        // things differently based on the focus origin.
        this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
            const newState = !!origin;
            if (newState !== this._showIndicatorHint) {
                this._setIndicatorHintVisible(newState);
                this._changeDetectorRef.markForCheck();
            }
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._sort.deregister(this);
        this._rerenderSubscription.unsubscribe();
    }
    /**
     * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
     * user showing what the active sort will become. If set to false, the arrow will fade away.
     */
    _setIndicatorHintVisible(visible) {
        // No-op if the sort header is disabled - should not make the hint visible.
        if (this._isDisabled() && visible) {
            return;
        }
        this._showIndicatorHint = visible;
        if (!this._isSorted()) {
            this._updateArrowDirection();
            if (this._showIndicatorHint) {
                this._setAnimationTransitionState({ fromState: this._arrowDirection, toState: 'hint' });
            }
            else {
                this._setAnimationTransitionState({ fromState: 'hint', toState: this._arrowDirection });
            }
        }
    }
    /**
     * Sets the animation transition view state for the arrow's position and opacity. If the
     * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
     * no animation appears.
     */
    _setAnimationTransitionState(viewState) {
        this._viewState = viewState || {};
        // If the animation for arrow position state (opacity/translation) should be disabled,
        // remove the fromState so that it jumps right to the toState.
        if (this._disableViewStateAnimation) {
            this._viewState = { toState: viewState.toState };
        }
    }
    /** Triggers the sort on this sort header and removes the indicator hint. */
    _toggleOnInteraction() {
        this._sort.sort(this);
        // Do not show the animation if the header was already shown in the right position.
        if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
        }
    }
    _handleClick() {
        if (!this._isDisabled()) {
            this._sort.sort(this);
        }
    }
    _handleKeydown(event) {
        if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
            event.preventDefault();
            this._toggleOnInteraction();
        }
    }
    /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
    _isSorted() {
        return this._sort.active == this.id &&
            (this._sort.direction === 'asc' || this._sort.direction === 'desc');
    }
    /** Returns the animation state for the arrow direction (indicator and pointers). */
    _getArrowDirectionState() {
        return `${this._isSorted() ? 'active-' : ''}${this._arrowDirection}`;
    }
    /** Returns the arrow position state (opacity, translation). */
    _getArrowViewState() {
        const fromState = this._viewState.fromState;
        return (fromState ? `${fromState}-to-` : '') + this._viewState.toState;
    }
    /**
     * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
     * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
     * active sorted direction. The reason this is updated through a function is because the direction
     * should only be changed at specific times - when deactivated but the hint is displayed and when
     * the sort is active and the direction changes. Otherwise the arrow's direction should linger
     * in cases such as the sort becoming deactivated but we want to animate the arrow away while
     * preserving its direction, even though the next sort direction is actually different and should
     * only be changed once the arrow displays again (hint or activation).
     */
    _updateArrowDirection() {
        this._arrowDirection = this._isSorted() ?
            this._sort.direction :
            (this.start || this._sort.start);
    }
    _isDisabled() {
        return this._sort.disabled || this.disabled;
    }
    /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     */
    _getAriaSortAttribute() {
        if (!this._isSorted()) {
            return 'none';
        }
        return this._sort.direction == 'asc' ? 'ascending' : 'descending';
    }
    /** Whether the arrow inside the sort header should be rendered. */
    _renderArrow() {
        return !this._isDisabled() || this._isSorted();
    }
    /** Handles changes in the sorting state. */
    _handleStateChanges() {
        this._rerenderSubscription =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
                if (this._isSorted()) {
                    this._updateArrowDirection();
                    // Do not show the animation if the header was already shown in the right position.
                    if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
                        this._disableViewStateAnimation = true;
                    }
                    this._setAnimationTransitionState({ fromState: this._arrowDirection, toState: 'active' });
                    this._showIndicatorHint = false;
                }
                // If this header was recently active and now no longer sorted, animate away the arrow.
                if (!this._isSorted() && this._viewState && this._viewState.toState === 'active') {
                    this._disableViewStateAnimation = false;
                    this._setAnimationTransitionState({ fromState: 'active', toState: this._arrowDirection });
                }
                this._changeDetectorRef.markForCheck();
            });
    }
}
MatSortHeader.ɵfac = function MatSortHeader_Factory(t) { return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatSortHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatSortHeader, selectors: [["", "mat-sort-header", ""]], hostAttrs: [1, "mat-sort-header"], hostVars: 3, hostBindings: function MatSortHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() { return ctx._handleClick(); })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() { return ctx._setIndicatorHintVisible(true); })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() { return ctx._setIndicatorHintVisible(false); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
    } }, inputs: { disabled: "disabled", arrowPosition: "arrowPosition", disableClear: "disableClear", id: ["mat-sort-header", "id"], start: "start" }, exportAs: ["matSortHeader"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 6, consts: [["role", "button", 1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]], template: function MatSortHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"], encapsulation: 2, data: { animation: [
            matSortAnimations.indicator,
            matSortAnimations.leftPointer,
            matSortAnimations.rightPointer,
            matSortAnimations.arrowOpacity,
            matSortAnimations.arrowPosition,
            matSortAnimations.allowChildren,
        ] }, changeDetection: 0 });
MatSortHeader.ctorParameters = () => [
    { type: MatSortHeaderIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: MatSort, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['MAT_SORT_HEADER_COLUMN_DEF',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
MatSortHeader.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mat-sort-header',] }],
    arrowPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[mat-sort-header]',
                exportAs: 'matSortHeader',
                template: "<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button's `aria-label`\n  will be read out as the user is navigating the table's cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class=\"mat-sort-header-container mat-focus-indicator\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"\n     [attr.tabindex]=\"_isDisabled() ? null : 0\"\n     role=\"button\">\n\n  <!--\n    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn't visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
                host: {
                    'class': 'mat-sort-header',
                    '(click)': '_handleClick()',
                    '(keydown)': '_handleKeydown($event)',
                    '(mouseenter)': '_setIndicatorHintVisible(true)',
                    '(mouseleave)': '_setIndicatorHintVisible(false)',
                    '[attr.aria-sort]': '_getAriaSortAttribute()',
                    '[class.mat-sort-header-disabled]': '_isDisabled()'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled'],
                animations: [
                    matSortAnimations.indicator,
                    matSortAnimations.leftPointer,
                    matSortAnimations.rightPointer,
                    matSortAnimations.arrowOpacity,
                    matSortAnimations.arrowPosition,
                    matSortAnimations.allowChildren,
                ],
                styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
            }]
    }], function () { return [{ type: MatSortHeaderIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: MatSort, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['MAT_SORT_HEADER_COLUMN_DEF']
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { arrowPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mat-sort-header']
        }], start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatSortModule {
}
MatSortModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatSortModule });
MatSortModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatSortModule_Factory(t) { return new (t || MatSortModule)(); }, providers: [MAT_SORT_HEADER_INTL_PROVIDER], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSortModule, { declarations: function () { return [MatSort, MatSortHeader]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [MatSort, MatSortHeader]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: [MatSort, MatSortHeader],
                declarations: [MatSort, MatSortHeader],
                providers: [MAT_SORT_HEADER_INTL_PROVIDER]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=sort.js.map

/***/ }),

/***/ "OaSA":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/table.js ***!
  \**********************************************************/
/*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn, _MatTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return MatCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return MatCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return MatColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return MatFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return MatFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return MatFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return MatFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return MatHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return MatHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return MatHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return MatHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNoDataRow", function() { return MatNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return MatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return MatRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return MatTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return MatTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return MatTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function() { return MatTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTableDataSource", function() { return _MatTableDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "GXRp");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 */



const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function MatTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
} }
function MatTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }
class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"] {
    constructor() {
        super(...arguments);
        /** Overrides the sticky CSS class set by the `CdkTable`. */
        this.stickyCssClass = 'mat-table-sticky';
        /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
        this.needsPositionStickyOnElement = false;
    }
}
MatTable.ɵfac = function MatTable_Factory(t) { return ɵMatTable_BaseFactory(t || MatTable); };
MatTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTable, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-table"], hostVars: 2, hostBindings: function MatTable_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-table-fixed-layout", ctx.fixedLayout);
    } }, exportAs: ["matTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
            //  is only included in the build if used.
            { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_COALESCED_STYLE_SCHEDULER"], useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_CoalescedStyleScheduler"] },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function MatTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["NoDataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]], styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"], encapsulation: 2 });
const ɵMatTable_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-table, table[mat-table]',
                exportAs: 'matTable',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
                host: {
                    'class': 'mat-table',
                    '[class.mat-table-fixed-layout]': 'fixedLayout'
                },
                providers: [
                    // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
                    //  is only included in the build if used.
                    { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_COALESCED_STYLE_SCHEDULER"], useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_CoalescedStyleScheduler"] },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"] {
}
MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
MatCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]
            }]
    }], null, null); })();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"] {
}
MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
MatHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matHeaderCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]
            }]
    }], null, null); })();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"] {
}
MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
MatFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matFooterCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]
            }]
    }], null, null); })();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] {
    /** Unique name for this column. */
    get name() { return this._name; }
    set name(name) { this._setNameInput(name); }
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */
    _updateColumnCssClassName() {
        super._updateColumnCssClassName();
        this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
    }
}
MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
MatColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
            { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matColumnDef',] }]
};
const ɵMatColumnDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matColumnDef]',
                inputs: ['sticky'],
                providers: [
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
                    { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                ]
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matColumnDef']
        }] }); })();
/** Header cell template container that adds the right classes and role. */
class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"] {
}
MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return ɵMatHeaderCell_BaseFactory(t || MatHeaderCell); };
MatHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-header-cell, th[mat-header-cell]',
                host: {
                    'class': 'mat-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], null, null); })();
/** Footer cell template container that adds the right classes and role. */
class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"] {
}
MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return ɵMatFooterCell_BaseFactory(t || MatFooterCell); };
MatFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-footer-cell, td[mat-footer-cell]',
                host: {
                    'class': 'mat-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], null, null); })();
/** Cell template container that adds the right classes and role. */
class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"] {
}
MatCell.ɵfac = function MatCell_Factory(t) { return ɵMatCell_BaseFactory(t || MatCell); };
MatCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-cell, td[mat-cell]',
                host: {
                    'class': 'mat-cell',
                    'role': 'gridcell'
                }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"] {
}
MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) { return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef); };
MatHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderRowDef, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: ["matHeaderRowDef", "columns"], sticky: ["matHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matHeaderRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }],
                inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
            }]
    }], null, null); })();
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"] {
}
MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) { return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef); };
MatFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterRowDef, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: ["matFooterRowDef", "columns"], sticky: ["matFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matFooterRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }],
                inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
            }]
    }], null, null); })();
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"] {
}
MatRowDef.ɵfac = function MatRowDef_Factory(t) { return ɵMatRowDef_BaseFactory(t || MatRowDef); };
MatRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRowDef, selectors: [["", "matRowDef", ""]], inputs: { columns: ["matRowDefColumns", "columns"], when: ["matRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }],
                inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
            }]
    }], null, null); })();
/** Header template container that contains the cell outlet. Adds the right class and role. */
class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"] {
}
MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) { return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow); };
MatHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatHeaderRow, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-header-row"], exportAs: ["matHeaderRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatHeaderRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-header-row, tr[mat-header-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matHeaderRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]
            }]
    }], null, null); })();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"] {
}
MatFooterRow.ɵfac = function MatFooterRow_Factory(t) { return ɵMatFooterRow_BaseFactory(t || MatFooterRow); };
MatFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatFooterRow, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-footer-row"], exportAs: ["matFooterRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatFooterRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatFooterRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-footer-row, tr[mat-footer-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matFooterRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]
            }]
    }], null, null); })();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"] {
}
MatRow.ɵfac = function MatRow_Factory(t) { return ɵMatRow_BaseFactory(t || MatRow); };
MatRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatRow, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-row"], exportAs: ["matRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-row, tr[mat-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]
            }]
    }], null, null); })();
/** Row that can be used to display a message when no data is shown in the table. */
class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"] {
}
MatNoDataRow.ɵfac = function MatNoDataRow_Factory(t) { return ɵMatNoDataRow_BaseFactory(t || MatNoDataRow); };
MatNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatNoDataRow, selectors: [["ng-template", "matNoDataRow", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"], useExisting: MatNoDataRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatNoDataRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNoDataRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[matNoDataRow]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"], useExisting: MatNoDataRow }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"] {
}
MatTextColumn.ɵfac = function MatTextColumn_Factory(t) { return ɵMatTextColumn_BaseFactory(t || MatTextColumn); };
MatTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTextColumn, selectors: [["mat-text-column"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function MatTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell], encapsulation: 2 });
const ɵMatTextColumn_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-text-column',
                template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    // Table
    MatTable,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn,
];
class MatTableModule {
}
MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatTableModule });
MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatTableModule_Factory(t) { return new (t || MatTableModule)(); }, imports: [[
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, { declarations: function () { return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]; }, imports: function () { return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], EXPORTED_DECLARATIONS],
                declarations: EXPORTED_DECLARATIONS
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */
const MAX_SAFE_INTEGER = 9007199254740991;
/** Shared base class with MDC-based implementation. */
class _MatTableDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(initialData = []) {
        super();
        /** Stream emitting render data to the table (depends on ordered data changes). */
        this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        /** Stream that emits when a new filter string is set on the data source. */
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        /** Used to react to internal changes of the paginator that are made by the data source itself. */
        this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        this._renderChangesSubscription = null;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */
        this.sortingDataAccessor = (data, sortHeaderId) => {
            const value = data[sortHeaderId];
            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["_isNumberValue"])(value)) {
                const numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                // leave them as strings. For more info: https://goo.gl/y5vbSg
                return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }
            return value;
        };
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */
        this.sortData = (data, sort) => {
            const active = sort.active;
            const direction = sort.direction;
            if (!active || direction == '') {
                return data;
            }
            return data.sort((a, b) => {
                let valueA = this.sortingDataAccessor(a, active);
                let valueB = this.sortingDataAccessor(b, active);
                // If there are data in the column that can be converted to a number,
                // it must be ensured that the rest of the data
                // is of the same type so as not to order incorrectly.
                const valueAType = typeof valueA;
                const valueBType = typeof valueB;
                if (valueAType !== valueBType) {
                    if (valueAType === 'number') {
                        valueA += '';
                    }
                    if (valueBType === 'number') {
                        valueB += '';
                    }
                }
                // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                // one value exists while the other doesn't. In this case, existing value should come last.
                // This avoids inconsistent results when comparing values to undefined/null.
                // If neither value exists, return 0 (equal).
                let comparatorResult = 0;
                if (valueA != null && valueB != null) {
                    // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                    if (valueA > valueB) {
                        comparatorResult = 1;
                    }
                    else if (valueA < valueB) {
                        comparatorResult = -1;
                    }
                }
                else if (valueA != null) {
                    comparatorResult = 1;
                }
                else if (valueB != null) {
                    comparatorResult = -1;
                }
                return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
        };
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @returns Whether the filter matches against the data
         */
        this.filterPredicate = (data, filter) => {
            // Transform the data into a lowercase string of all property values.
            const dataStr = Object.keys(data).reduce((currentTerm, key) => {
                // Use an obscure Unicode character to delimit the words in the concatenated string.
                // This avoids matches where the values of two columns combined will match the user's query
                // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                // that has a very low chance of being typed in by somebody in a text field. This one in
                // particular is "White up-pointing triangle with dot" from
                // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                return currentTerm + data[key] + '◬';
            }, '').toLowerCase();
            // Transform the filter by converting it to lowercase and removing whitespace.
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
        };
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
        this._updateChangeSubscription();
    }
    /** Array of data that should be rendered by the table, where each object represents one row. */
    get data() { return this._data.value; }
    set data(data) {
        this._data.next(data);
        // Normally the `filteredData` is updated by the re-render
        // subscription, but that won't happen if it's inactive.
        if (!this._renderChangesSubscription) {
            this._filterData(data);
        }
    }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     */
    get filter() { return this._filter.value; }
    set filter(filter) {
        this._filter.next(filter);
        // Normally the `filteredData` is updated by the re-render
        // subscription, but that won't happen if it's inactive.
        if (!this._renderChangesSubscription) {
            this._filterData(this.data);
        }
    }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     */
    get sort() { return this._sort; }
    set sort(sort) {
        this._sort = sort;
        this._updateChangeSubscription();
    }
    /**
     * Instance of the MatPaginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     */
    get paginator() { return this._paginator; }
    set paginator(paginator) {
        this._paginator = paginator;
        this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    _updateChangeSubscription() {
        var _a;
        // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
        // The events should emit whenever the component emits a change or initializes, or if no
        // component is provided, a stream with just a null event should be provided.
        // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
        // pipeline can progress to the next step. Note that the value from these streams are not used,
        // they purely act as a signal to progress in the pipeline.
        const sortChange = this._sort ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._sort.sortChange, this._sort.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        const pageChange = this._paginator ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        const dataStream = this._data;
        // Watch for base data or filter changes to provide a filtered set of data.
        const filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([dataStream, this._filter])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._filterData(data)));
        // Watch for filtered data or sort changes to provide an ordered set of data.
        const orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([filteredData, sortChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._orderData(data)));
        // Watch for ordered data or page changes to provide a paged set of data.
        const paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([orderedData, pageChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._pageData(data)));
        // Watched for paged data changes and send the result to the table to render.
        (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     */
    _filterData(data) {
        // If there is a filter string, filter out data that does not contain it.
        // Each data object is converted to a string using the function defined by filterTermAccessor.
        // May be overridden for customization.
        this.filteredData = (this.filter == null || this.filter === '') ? data :
            data.filter(obj => this.filterPredicate(obj, this.filter));
        if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
        }
        return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     */
    _orderData(data) {
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */
    _pageData(data) {
        if (!this.paginator) {
            return data;
        }
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */
    _updatePaginator(filteredDataLength) {
        Promise.resolve().then(() => {
            const paginator = this.paginator;
            if (!paginator) {
                return;
            }
            paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (paginator.pageIndex > 0) {
                const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                if (newPageIndex !== paginator.pageIndex) {
                    paginator.pageIndex = newPageIndex;
                    // Since the paginator only emits after user-generated changes,
                    // we need our own stream so we know to should re-render the data.
                    this._internalPageChanges.next();
                }
            }
        });
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */
    connect() {
        if (!this._renderChangesSubscription) {
            this._updateChangeSubscription();
        }
        return this._renderData;
    }
    /**
     * Used by the MatTable. Called when it disconnects from the data source.
     * @docs-private
     */
    disconnect() {
        var _a;
        (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this._renderChangesSubscription = null;
    }
}
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */
class MatTableDataSource extends _MatTableDataSource {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=table.js.map

/***/ }),

/***/ "gw9B":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/home/home-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "jwer");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jwer":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-lottie */ "NiZn");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-search-filter */ "KeVr");




















const _c0 = ["reName"];
const _c1 = function (a0) { return { "activeHolder": a0 }; };
function HomeComponent_div_0_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_0_div_25_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const data_r18 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r20.getWalletDetail(data_r18.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r17.type === "localwallet" && data_r18.name === ctx_r17.userLocal));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r18.balance);
} }
function HomeComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_0_div_25_div_1_Template, 7, 5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create a New Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_0_div_25_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.createWallet(ctx_r22.userLocal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.all);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r14.tabSelector == "wallet" ? "active" : "");
} }
function HomeComponent_div_0_div_26_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r27.showbal ? data_r25.balance : ctx_r27.skyDetails == null ? null : ctx_r27.skyDetails.balance, " ");
} }
function HomeComponent_div_0_div_26_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", data_r25.balance, " ");
} }
function HomeComponent_div_0_div_26_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-spinner", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
} }
function HomeComponent_div_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_0_div_26_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const data_r25 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r32.getSkyDetail(data_r25.name, data_r25 == null ? null : data_r25.idcoin == null ? null : data_r25.idcoin.sn); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_div_0_div_26_div_1_span_5_Template, 4, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_div_0_div_26_div_1_span_6_Template, 4, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_div_0_div_26_div_1_span_7_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r24.type === "skywallet" && data_r25.name === ctx_r24.usersky));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.showbal && data_r25.name == ctx_r24.usersky);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r25.name != ctx_r24.usersky);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r24.showbal && data_r25.name == ctx_r24.usersky);
} }
function HomeComponent_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_0_div_26_div_1_Template, 8, 7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create a New SkyVault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_0_div_26_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.createSkyVault(ctx_r34.usersky); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.allSky);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r15.tabSelector == "skyvault" ? "active" : "");
} }
const _c2 = function () { return { exact: true }; };
function HomeComponent_div_0_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_0_div_27_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.goToGallery("NFT"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NFT Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
} }
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.closeLeftBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Total Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.tabToggler("wallet", ctx_r40.userLocal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Wallets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.tabTogglerSky("skyvault", ctx_r41.usersky); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "SkyVaults");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.tabTogglerNft("nft", ctx_r42.nft); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "NFTs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HomeComponent_div_0_div_25_Template, 8, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HomeComponent_div_0_div_26_Template, 8, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HomeComponent_div_0_div_27_Template, 6, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.totalBalance + ctx_r0.totalSkyBalance, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.tabSelector == "wallet" ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.tabSelector == "skyvault" ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.tabSelector == "nft" ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tabSelector == "wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tabSelector == "skyvault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tabSelector == "nft");
} }
function HomeComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r43.transaction.payload == null ? null : ctx_r43.transaction.payload.name) != "" ? ctx_r43.transaction.payload == null ? null : ctx_r43.transaction.payload.name : "Unavailable", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx_r43.transaction.payload == null ? null : ctx_r43.transaction.payload.balance) != "null" ? ctx_r43.transaction.payload == null ? null : ctx_r43.transaction.payload.balance : "Unavailable", " ");
} }
function HomeComponent_ng_container_5_ng_container_4_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_ng_container_4_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r54.skyDetails == null ? null : ctx_r54.skyDetails.balance, " ");
} }
function HomeComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_ng_container_5_ng_container_4_h2_4_Template, 5, 0, "h2", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_ng_container_5_ng_container_4_h2_5_Template, 5, 1, "h2", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r44.usersky, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r44.checkerror);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r44.checkerror);
} }
function HomeComponent_ng_container_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-lottie", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function HomeComponent_ng_container_5_ng_container_5_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r55.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_ng_container_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r57.hideErrorMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r45.errorOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r45.errorMessage);
} }
function HomeComponent_ng_container_5_div_13_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Deposit Coins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_13_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_13_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r64.redirect("export"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Withdraw Coins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_13_div_3_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_13_div_3_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r68.transferCC(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Between Wallets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_13_div_3_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_13_div_3_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r70.redirect("send"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "To My SkyVault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Transfer Coins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_ng_container_5_div_13_div_3_a_6_Template, 2, 0, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_ng_container_5_div_13_div_3_a_7_Template, 2, 0, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.type === "localwallet");
} }
function HomeComponent_ng_container_5_div_13_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_13_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r72.redirect("withdraw"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Withdraw to Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_13_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Deposit from Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_13_div_6_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_13_div_6_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r77.transferCC(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Between SkyVaults");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_13_div_6_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_13_div_6_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r79.redirect("transfer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "To Another SkyVault User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_13_div_6_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_13_div_6_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r81.redirect("sky_exchange"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "To a Crypto Exchange");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_13_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Transfer Coins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_ng_container_5_div_13_div_6_a_6_Template, 2, 0, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_ng_container_5_div_13_div_6_a_7_Template, 2, 0, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeComponent_ng_container_5_div_13_div_6_a_8_Template, 2, 0, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.type === "skywallet");
} }
function HomeComponent_ng_container_5_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_ng_container_5_div_13_a_1_Template, 2, 0, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_ng_container_5_div_13_a_2_Template, 2, 0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_ng_container_5_div_13_div_3_Template, 8, 2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_ng_container_5_div_13_a_4_Template, 2, 0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_ng_container_5_div_13_a_5_Template, 2, 0, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_ng_container_5_div_13_div_6_Template, 9, 3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.type === "skywallet");
} }
function HomeComponent_ng_container_5_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u21BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_span_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r83.getSkyDetail(ctx_r83.usersky, ctx_r83.sno); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u21BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_27_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_27_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r86.deleteUser("health"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Synchronize SkyVault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_27_div_5_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r88.deleteUser("deletewallet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Delete SkyVault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Records Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_27_div_5_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r89.download("sky"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Export Statements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_27_div_5_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r90.record(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Delete Transaction Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Pass Key Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_27_div_5_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r91.detectFix(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Fix Pass Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_27_div_5_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r92.deleteUser("backup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Back up Pass Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_27_div_5_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r93.downloadpasskey(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Export Pass Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function HomeComponent_ng_container_5_div_27_Template_div_clickOutside_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r94.closeWltFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_27_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r95); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r96.toggleWltFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SkyVault Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_ng_container_5_div_27_div_5_Template, 27, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r49.showWalletDropdown);
} }
function HomeComponent_ng_container_5_div_28_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Wallet Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_div_5_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r98.deleteUserModalToggler("backup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Back up Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_div_5_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r100.deleteUserModalToggler("deletewallet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Delete Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_div_5_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r101.deleteUserModalToggler("rename"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Rename Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Coin Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_div_5_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r102.deleteUserModalToggler("health"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Verify Coin Authenticity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_div_5_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r103.deleteUserModalToggler("fixlimbo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Fix Unprocessed Coins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Records Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_div_5_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r104.deleteUserModalToggler("delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Delete Transaction Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_div_5_Template_a_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r105.download("local"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Export History");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_div_5_Template_a_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r106.listDownload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Download Serial Numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_div_5_Template_a_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r107.redirect("show_colors"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Show Colors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function HomeComponent_ng_container_5_div_28_Template_div_clickOutside_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r108.closeWltFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r110.toggleWltFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Other Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_ng_container_5_div_28_div_5_Template, 43, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r50.showWalletDropdown);
} }
const _c3 = function (a0) { return { "color": a0 }; };
function HomeComponent_ng_container_5_div_29_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_29_tr_15_Template_td_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r115); const dessert_r113 = ctx.$implicit; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r114.receipt(dessert_r113.receiptid, dessert_r113.datetime); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dessert_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, dessert_r113.datetime, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", dessert_r113.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, dessert_r113.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c3, dessert_r113.amount > 0 ? "#39D02B" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", dessert_r113.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dessert_r113.running_balance);
} }
function HomeComponent_ng_container_5_div_29_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No Transactions!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function HomeComponent_ng_container_5_div_29_Template_div_matSortChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r116.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function HomeComponent_ng_container_5_div_29_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r118.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Transaction Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Amount (CC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomeComponent_ng_container_5_div_29_tr_15_Template, 16, 13, "tr", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_ng_container_5_div_29_div_17_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 2, ctx_r51.sortedData, ctx_r51.term));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r51.transaction.payload == null ? null : ctx_r51.transaction.payload.transactions == null ? null : ctx_r51.transaction.payload.transactions.length) == 0);
} }
function HomeComponent_ng_container_5_div_30_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_30_tr_15_Template_td_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r123); const dessert_r121 = ctx.$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r122.skyreceipt(dessert_r121.guid, dessert_r121.time); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dessert_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, dessert_r121.time, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dessert_r121.memo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 9, dessert_r121.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c3, dessert_r121.type == "withdraw" || dessert_r121.type == "sent" || dessert_r121.type == "pay" ? "red" : "#39D02B"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", dessert_r121.type == "withdraw" || dessert_r121.type == "sent" || dessert_r121.type == "pay" ? "-" + dessert_r121.amount : dessert_r121.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dessert_r121.balance);
} }
function HomeComponent_ng_container_5_div_30_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Transactions!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_5_div_30_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r125.loadingMessage, "");
} }
function HomeComponent_ng_container_5_div_30_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_ng_container_5_div_30_div_17_div_1_Template, 2, 0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_ng_container_5_div_30_div_17_div_2_Template, 2, 1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r120.loadingMessage == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r120.loadingMessage == "Collecting Statements...");
} }
function HomeComponent_ng_container_5_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function HomeComponent_ng_container_5_div_30_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r126.sortSkyData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Transaction Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Amount (CC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomeComponent_ng_container_5_div_30_tr_15_Template, 17, 13, "tr", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_ng_container_5_div_30_div_17_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 2, ctx_r52.sortedSkyData, ctx_r52.term));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r52.skyDetails == null ? null : ctx_r52.skyDetails.statements) == null || (ctx_r52.skyDetails == null ? null : ctx_r52.skyDetails.statements == null ? null : ctx_r52.skyDetails.statements.length) == 0);
} }
function HomeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_ng_container_5_ng_container_3_Template, 9, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_ng_container_5_ng_container_4_Template, 6, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_ng_container_5_ng_container_5_Template, 7, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function HomeComponent_ng_container_5_Template_div_clickOutside_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r128.closeDropDown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r130.toggleDropDown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "New Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_ng_container_5_div_13_Template, 7, 6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomeComponent_ng_container_5_span_18_Template, 3, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomeComponent_ng_container_5_span_19_Template, 3, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Recent Transactions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function HomeComponent_ng_container_5_Template_input_keyup_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r131.doFilter($event.target.value); })("ngModelChange", function HomeComponent_ng_container_5_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r129); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r132.term = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HomeComponent_ng_container_5_div_27_Template, 6, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HomeComponent_ng_container_5_div_28_Template, 6, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HomeComponent_ng_container_5_div_29_Template, 18, 5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HomeComponent_ng_container_5_div_30_Template, 18, 5, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showDropDown);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.term);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === "skywallet");
} }
function HomeComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ng-lottie", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function HomeComponent_ng_container_6_Template_ng_lottie_animationCreated_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r134); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r133.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loadingMessage);
} }
const _c4 = function (a0) { return { "background-color": a0 }; };
function HomeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r135 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c4, d_r135 != 0 ? "#39D02B" : "rgb(255, 60, 45)"));
} }
function HomeComponent_div_17_h2_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Deleting the Wallet deletes the transaction records too.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_17_h2_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Are you sure you want to delete your Wallet: ", ctx_r137.userLocal, "? ");
} }
function HomeComponent_div_17_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You will not be able to send or receive CC using this Wallet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_17_h2_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Are you sure you want to delete your SkyVault: ", ctx_r139.usersky, "? ");
} }
const _c5 = function (a0) { return { "disabled": a0 }; };
function HomeComponent_div_17_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_17_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r142.deletewallet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Yes, delete Wallet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c5, ctx_r140.deleteForm.invalid));
} }
function HomeComponent_div_17_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_17_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r144.deletewallet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Yes, delete SkyVault.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c5, ctx_r141.deleteForm.invalid));
} }
function HomeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_17_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r147); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r146.type === "localwallet" ? ctx_r146.deleteUserModalToggler("deletewallet") : ctx_r146.deleteUser("deletewallet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Delete Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_17_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r147); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r148.type === "localwallet" ? ctx_r148.deleteUserModalToggler("deletewallet") : ctx_r148.deleteUser("deletewallet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_div_17_h2_11_Template, 2, 0, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_div_17_h2_12_Template, 2, 1, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_17_h2_13_Template, 2, 0, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomeComponent_div_17_h2_14_Template, 2, 1, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "I understand that this process is permanent and irreversible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HomeComponent_div_17_button_25_Template, 2, 3, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HomeComponent_div_17_button_26_Template, 2, 3, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_17_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r147); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r149.type === "localwallet" ? ctx_r149.deleteUserModalToggler("deletewallet") : ctx_r149.deleteUser("deletewallet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.deleteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.type === "skywallet");
} }
function HomeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r150.fixlimboModal = !ctx_r150.fixlimboModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Fix Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r152.fixlimboModal = !ctx_r152.fixlimboModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Find your Wallet's unprocessed coins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Yes, fix Wallet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Do you want to fix your Wallet: ", ctx_r5.userLocal, "? ");
} }
function HomeComponent_div_19_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fix Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_19_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fix Pass Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_19_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fix your wallet's fractured coins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Do you want to fix your wallet: ", ctx_r155.userLocal, "? ");
} }
function HomeComponent_div_19_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fix your SkyVault's Pass Key.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Do you want to fix your SkyVault: ", ctx_r156.usersky, "? ");
} }
function HomeComponent_div_19_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_19_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r159.fixKeycard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Yes, fix Pass Key.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_19_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Yes, fix Wallet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_19_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r162); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r161.fixModal = !ctx_r161.fixModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_div_19_h1_4_Template, 2, 0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_div_19_h1_5_Template, 2, 0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_19_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r162); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r163.fixModal = !ctx_r163.fixModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_div_19_div_10_Template, 5, 1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_div_19_div_11_Template, 5, 1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomeComponent_div_19_button_15_Template, 2, 0, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomeComponent_div_19_button_16_Template, 2, 0, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.type == "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.type == "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.type === "localwallet");
} }
function HomeComponent_div_20_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Verify Coin Authenticity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_20_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Synchronize SkyVault");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_20_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Verifying the authenticity of your coins will ensure that all your coins are 100% authentic. It will move coins to the Fractured (Fracked) or Counterfeit folder if they are not 100% authentic.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Do you want to check the authenticity of your coins in the Wallet, ", ctx_r166.userLocal, "? ");
} }
function HomeComponent_div_20_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "This will ensure that the CCs in your SkyVault account are synchronized on all RAIDA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Do you want to sync your ", ctx_r167.usersky, " with RAIDA? ");
} }
function HomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r169); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r168.type === "localwallet" ? ctx_r168.deleteUserModalToggler("health") : ctx_r168.deleteUser("health"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_div_20_h1_4_Template, 2, 0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_div_20_h1_5_Template, 2, 0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_20_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r169); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r170.type === "localwallet" ? ctx_r170.deleteUserModalToggler("health") : ctx_r170.deleteUser("health"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_div_20_div_10_Template, 5, 1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_div_20_div_11_Template, 5, 1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.type == "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.type === "skywallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.type == "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.type == "skywallet");
} }
function HomeComponent_div_21_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Do you want to make a backup of your Wallet: ", ctx_r171.userLocal, "? ");
} }
function HomeComponent_div_21_h2_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Do you want to make a backup of your Wallet: ", ctx_r172.usersky, "? ");
} }
function HomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_21_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r174); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r173.type === "localwallet" ? ctx_r173.deleteUserModalToggler("backup") : ctx_r173.deleteUser("backup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Back up Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_21_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r174); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r175.type === "localwallet" ? ctx_r175.deleteUserModalToggler("backup") : ctx_r175.deleteUser("backup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "This will allow you to create a backup of your coins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_21_h2_13_Template, 2, 1, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomeComponent_div_21_h2_14_Template, 2, 1, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "YES, BACK UP WALLET");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.type === "localwallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.type === "skywallet");
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_22_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r177); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r176.deleteUserModalToggler("delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Delete Transaction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_22_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r177); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r178.deleteUserModalToggler("delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "You will not be able to see your transaction history.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "I understand that this process is permanent and irreversible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_22_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r177); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r179.deleteTransaction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Yes, delete transaction.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_22_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r177); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r180.deleteUserModalToggler("delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Are you sure you want to delete transaction history of: ", ctx_r9.userLocal, "? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r9.deleteTrans);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c5, ctx_r9.deleteTrans.invalid));
} }
function HomeComponent_div_23_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Serial Number : ", data_r182.value.sn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Pownstring : ", data_r182.value.pownstring, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Result : ", data_r182.value.result, "");
} }
function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_23_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r184); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r183.showreceipt = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_23_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r184); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r185.showreceipt = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Total Coins Attempted: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Total Authentic: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Total Authentic (Fractured): \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Total Counterfeit: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Total Unprocessed: \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "The Pownstring shows each of the 25 RAIDA\u2019s responses from 0 to 24 encoded in a single character. p=pass, f=fail, u=untried, n=no response and e=error.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, HomeComponent_div_23_div_50_Template, 8, 3, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Receipt: ", ctx_r10.receipid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 8, ctx_r10.receiptTime, "MM/dd/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.totalcoins);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.totalauthentic);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.totalfracked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.totalcounterfeit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.totallimbo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](51, 11, ctx_r10.receiptdetails, ctx_r10.returnZero));
} }
function HomeComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_24_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r187.deleteUserModalToggler("rename"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Rename wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_24_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r189.deleteUserModalToggler("rename"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Wallet name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 170, 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_24_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188); const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r190.wallet_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_24_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r191.rename(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Yes, Rename Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.wallet_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, ctx_r11.wallet_name === ""));
} }
function HomeComponent_div_25_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r193 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c4, d_r193 != 0 ? "#39D02B" : "rgb(255, 60, 45)"));
} }
function HomeComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_25_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r195); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r194.showRaida = !ctx_r194.showRaida; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All RAIDA Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_25_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r195); const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r196.showRaida = !ctx_r196.showRaida; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomeComponent_div_25_div_14_Template, 2, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.latencies);
} }
function HomeComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-lottie", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function HomeComponent_div_26_Template_ng_lottie_animationCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r198); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r197.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r13.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.loadingMessage);
} }
class HomeComponent {
    constructor(auth, onlyonce, router, http, eventService, api, fb, spinner) {
        this.auth = auth;
        this.onlyonce = onlyonce;
        this.router = router;
        this.http = http;
        this.eventService = eventService;
        this.api = api;
        this.fb = fb;
        this.spinner = spinner;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tansactiondetails = [];
        this.showRaida = false;
        this.balance = 0;
        this.balanceString = '0';
        this.balanceAmountString = '0';
        this.checkFracked = false;
        this.balances = {};
        this.errorMessage = null;
        this.totalBalance = 0;
        this.showbal = false;
        this.checkerror = false;
        this.passkeyImage = "";
        this.options = {
            path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json',
        };
        this.errorOptions = {
            path: 'https://raida11.cloudcoin.global/animation/error.json'
        };
        this.showLeftBarOnSm = true;
        this.showLoader = false;
        this.updatedBal = 0;
        this.showLoader1 = false;
        this.showNormal = true;
        this.showError = false;
        this.skywallet = null;
        this.balanceBreakup = null;
        this.opinions = 0;
        this.loadingMessage = '';
        this.showreceipt = false;
        this.deletedAkyvault = "";
        this.transaction = [];
        this.fixModal = false;
        this.fixlimboModal = false;
        this.deleteModal = false;
        this.backupModal = false;
        this.healthModal = false;
        this.renameModal = false;
        this.listModal = false;
        this.change = false;
        this.detectChange = false;
        this.displayedColumns = ['datetime', 'message', 'type', 'amount', 'running_balance'];
        this.displayedColumnsSky = ['time', 'memo', 'type', 'amount', 'balance'];
        this.doFilter = (value) => {
            // this.dataSourceSky.filter = value.trim().toLowerCase();
        };
        this.totalBalance = Number(sessionStorage.getItem('totalBal'));
        this.totalSkyBalance = Number(sessionStorage.getItem('totalSkyBal'));
        this.usersky = localStorage.getItem('userSky');
        this.type = localStorage.getItem('wallet');
        this.userLocal = localStorage.getItem('userLocal');
        this.nft = localStorage.getItem('Nft');
        this.sno = localStorage.getItem('serial');
        this.customSelectorOpenEleven = false;
        this.cSelectorImgEleven = '';
        this.cSelectorTextEleven = 'Select a skyvault';
        this.cSelectorText = 'Choose Wallet';
        this.cSelectorTextSky = 'Choose SkyVault';
        this.customSelectorOpen = false;
        this.customSelectorOpenSky = false;
        this.activeTab();
    }
    ngOnInit() {
        this.getEcho();
        setInterval(() => {
            this.getEcho();
        }, 20000);
        this.eventService.changeLocal.subscribe(message => {
            if (message[0] != "Empty") {
                if (message.length == 0) {
                    this.totalBalance = 0;
                    this.getAllwallet();
                }
                else {
                    this.all = message;
                }
            }
        });
        this.eventService.changeSky.subscribe(message => {
            if (message[0] != "Empty") {
                if (message.length == 0) {
                    this.totalSkyBalance = 0;
                    sessionStorage.setItem('totalSkyBal', '0');
                    this.getList();
                    this.getSky();
                }
                else {
                    this.showbal = true;
                    this.allSky = message;
                }
                console.log(message);
            }
        });
        this.eventService.changeNft.subscribe(message => {
            if (message[0] != "Empty") {
                if (message.length == 0) {
                    this.getNftByGroups();
                }
                else {
                    this.allNft = message;
                }
            }
        });
        if (window.innerWidth < 992) {
            this.showLeftBarOnSm = false;
        }
        this.deleteForm = this.fb.group({
            check2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.deleteTrans = this.fb.group({
            check2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        // router.events
        // .pipe(filter(event => event instanceof NavigationEnd))
        // .subscribe((event: NavigationEnd) => {
        //   console.log('prev:', event.url);
        //   alert(event.url);
        // });
        this.test = this.eventService.watchStorage().subscribe((data) => {
            this.type = localStorage.getItem('wallet');
            if (data == 'changelocal') {
                this.userLocal = localStorage.getItem('userLocal');
                this.wallet_name = this.userLocal;
                this.getTransaction();
            }
            else if (data == 'changesky') {
                this.checkerror = false;
                this.usersky = localStorage.getItem('userSky');
                this.getSkywallet();
            }
            else if (data === 'rename' || data == 'upload' || data === 'download' || data === 'transfer' || data == 'localdelete' || data == 'createlocal') {
                this.userLocal = localStorage.getItem('userLocal');
                this.getTransaction();
                this.getAllwallet();
            }
            else if (data === 'deposit' || data === 'withdraw' || data == 'skytransfer') {
                this.getSkywallet();
                // alert('sky');
                // this.usersky = localStorage.getItem('userSky');
                // this.skyBal = true;
                // this.sortedSkyData = [];
                // this.skyDetails = [];
                // this.getSkywallet();
                // this.getList();
            }
            else if (data === 'skydelete' || data == 'createsky') {
                this.usersky = localStorage.getItem('userSky');
                this.getSkywallet();
            }
        });
        this.showDropDown = false;
        this.showMoreDropDown = false;
        this.emptyHome = false;
        let localcoin = JSON.parse(localStorage.getItem('cc'));
        let myCurrentDate = new Date();
        // let myPinitializeastDate=new Date(myCurrentDate);
        // myPastDate.setDate(myPastDate.getDate() - 15);
        let datacheck = {
            "coin": {
                an: localcoin === null || localcoin === void 0 ? void 0 : localcoin.an,
                sn: localcoin === null || localcoin === void 0 ? void 0 : localcoin.sn
            },
            "start_ts": parseInt((myCurrentDate.getTime() / 1000).toString())
        };
        // this.eventService.currentMessage.subscribe
        // (message => (this.userLocal= message));
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        // <= Always get current value!
        // if (sessionStorage.getItem('trans') != 'transaction') {
        if (localStorage.getItem('wallet') == 'skywallet') {
            this.getSkywallet();
        }
        else {
            this.getTransaction();
        }
        this.showWalletDropdown = false;
        // this.auth.watch().subscribe((value) => {
        //   if (!value) {
        //     this.router.navigate(['/welcome']);
        //   }
        // });
        // this.dtOptions = {
        //   pagingType: 'full_numbers',
        //   pageLength: 2
        // };
        // this.dtTrigger.next();
        console.log("wallet that will be selected" + " " + this.userLocal);
        console.log("wallet that will be selected" + " " + this.usersky);
    }
    ngOnDestroy() {
        var _a;
        (_a = this.test) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    // localwallet function
    getAllwallet() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response;
                response = yield this.api.getWallet();
                if (response.status == "success") {
                    this.all = response.payload;
                    this.walletName = this.all[0].name;
                    if (((_a = this.all) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                        this.eventService.changeLocaldata(["Empty"]);
                    }
                    else {
                        this.eventService.changeLocaldata(this.all);
                    }
                    localStorage.setItem('localLength', (_b = this.all) === null || _b === void 0 ? void 0 : _b.length);
                    // localStorage.setItem('userLocal' , this.walletName);
                    for (let i = 0; i < this.all.length; i++) {
                        this.totalBalance = this.totalBalance + Number((_c = this.all[i]) === null || _c === void 0 ? void 0 : _c.balance);
                    }
                    sessionStorage.setItem('totalBal', this.totalBalance);
                    let data = this.onlyonce.getData();
                    if (data != 'leftover') {
                        this.all.forEach(item => {
                            this.leftover(item.name);
                        });
                    }
                }
                this.createWallet(this.walletName);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getNftByGroups() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.nftGroups();
                if (response.status === "success") {
                    this.allNft = response.payload;
                    if (((_a = this.allNft) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                        this.eventService.changenftdata(['Empty']);
                    }
                    else {
                        this.eventService.changenftdata(this.allNft);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    leftover(name) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.leftover(name);
                if (response.status === "success") {
                    this.onlyonce.setData('leftover');
                    if (((_a = response === null || response === void 0 ? void 0 : response.payload) === null || _a === void 0 ? void 0 : _a.balance) > 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Looks like the last import did not finish. Continuing import leftover coins",
                            icon: 'info',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                {
                                    this.suspect(name);
                                }
                            }
                        });
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    suspect(name) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: name,
                    tag: "leftover coin",
                    items: [{ type: "suspect" }]
                };
                let response = yield this.api.suspect(data);
                if (response.status === "success") {
                    this.showLoader = true;
                    this.doImport((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    createWallet(name) {
        this.userLocal = name;
        localStorage.setItem('wallet', 'localwallet');
        this.eventService.setItem('userLocal', name, "changelocal");
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    createSkyVault(name) {
        this.usersky = name;
        localStorage.setItem('wallet', 'skywallet');
        this.eventService.setItem('userSky', name, 'changesky');
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    goToGallery(name) {
        localStorage.setItem('wallet', 'nftwallet');
        this.eventService.setItem('Nft', name, "changenft");
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    doImport(taskID, xdata) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.showLoader = false;
                        this.eventService.setItem("wallet", "localwallet", 'upload');
                    }
                    else {
                        this.showLoader = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Failure! could not proceed with the transaction. " + ((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message),
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doImport(taskID, xdata);
                }, 500);
            }
            else {
                this.showLoader = false;
            }
        });
    }
    getList() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getList();
                if (response.status == "success") {
                    this.showbal = true;
                    this.allSky = response.payload;
                    this.skynumber = this.allSky.length;
                    // this.skyName = this.allSky[0].name
                    var y = this.allSky.filter(x => {
                        return x.name == this.usersky;
                    });
                    // alert("from getlist:" + this.allSky?.length)
                    localStorage.setItem('skyLength', (_a = this.allSky) === null || _a === void 0 ? void 0 : _a.length);
                    localStorage.setItem('serial', (_c = (_b = y[0]) === null || _b === void 0 ? void 0 : _b.idcoin) === null || _c === void 0 ? void 0 : _c.sn);
                    let data = this.onlyonce.getData();
                    if (data != 'leftover') {
                        this.allSky.forEach(item => {
                            this.skydetect(item.name);
                        });
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    skydetect(d) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: d
                };
                let response = yield this.api.detectsky(data);
                console.log(response);
                if (response.status == "success") {
                    this.onlyonce.setData('leftover');
                    this.detectSkyvault((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, d, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    detectSkyvault(taskID, name, xdata) {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.counterfeit) != 0) {
                            this.deleteSkyvault = name;
                            this.deleteSky();
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: name + " Pass Key is counterfeit!",
                                icon: 'info',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                        else if (((_d = (_c = this.payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.fracked) != 0) {
                            this.fixKey(name, (_f = (_e = this.payload) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.coins[0].pownstring);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: name + " Pass Key is fracked!",
                                icon: 'info',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                    }
                    return;
                }
                setTimeout(() => {
                    this.detectSkyvault(taskID, name, xdata);
                }, 500);
            }
        });
    }
    fixKey(skyname, pown) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: skyname,
                    pownstring: pown
                };
                let response = yield this.api.idFix(data);
                if (response.status == "success") {
                    this.doFixsky((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doFixsky(taskID, xdata) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.number_failed) === 0) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Pass Key was Fixed and is now Healthy",
                                icon: 'success',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Pass Key is fracked and the attempt to fix failed. Try again later",
                                icon: 'error',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doFixsky(taskID, xdata);
                }, 500);
            }
        });
    }
    deleteSky() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.deleteFromFolder(this.deleteSkyvault);
                if (response.status == "success") {
                    this.doCheck1((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck1(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.getlistafterDelete();
                        var index = this.allSky.findIndex(x => x.name === this.deleteSkyvault);
                        this.allSky.splice(index, 1);
                        this.eventService.changeskydata(this.allSky);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "We deleted " + this.deleteSkyvault + " because it's Pass Key is counterfeit.",
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck1(taskID, xdata);
                }, 500);
            }
        });
    }
    getlistafterDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getList();
                if (response.status === 'success') {
                    var skyDetails = response.payload;
                    if ((skyDetails === null || skyDetails === void 0 ? void 0 : skyDetails.length) !== 0) {
                        // this.eventService.changeskydata(skyDetails);
                        this.eventService.setItem('userSky', skyDetails[0].name, 'skydelete');
                    }
                    else {
                        this.eventService.changeskydata("Empty");
                        this.eventService.setItem('wallet', 'localwallet', 'localdelete');
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getSky() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getAllSky();
                if (response.status == "success") {
                    // this.spinner.show();
                    // this.showbal = false;
                    this.doCheck((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck(taskID, xdata) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.allSky = this.payload.data;
                        // this.skyName = this.payload.data[0].name
                        // localStorage.setItem('userSky' , this.skyName)
                        // this.spinner.hide();
                        // this.showbal = true;
                        if (((_a = this.allSky) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                            this.eventService.changeskydata(["Empty"]);
                        }
                        else {
                            this.eventService.changeskydata(this.allSky);
                        }
                        for (let i = 0; i < this.allSky.length; i++) {
                            this.totalSkyBalance = this.totalSkyBalance + Number((_b = this.allSky[i]) === null || _b === void 0 ? void 0 : _b.balance);
                        }
                        sessionStorage.setItem('totalSkyBal', this.totalSkyBalance);
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck(taskID, xdata);
                }, 500);
            }
        });
    }
    getWalletDetail(name) {
        this.userLocal = name;
        localStorage.setItem('wallet', 'localwallet');
        this.eventService.setItem('userLocal', name, "changelocal");
        // this.router.navigate(["/dashboard/home"]);
        this.fixFracked();
    }
    getSkyDetail(name, id) {
        this.usersky = name;
        localStorage.setItem('wallet', 'skywallet');
        this.eventService.setItem('userSky', name, 'changesky');
        localStorage.setItem('serial', id);
        // this.router.navigate(["/dashboard/home"]);
    }
    callLeftBar() {
        if (window.innerWidth < 992) {
            this.showLeftBarOnSm = true;
        }
    }
    closeLeftBar() {
        if (window.innerWidth < 992) {
            this.showLeftBarOnSm = false;
        }
    }
    transferCC() {
        var _a, _b, _c, _d;
        if (this.type === "localwallet") {
            if (Number(localStorage.getItem('localLength')) > 1 && ((_a = this.transaction.payload) === null || _a === void 0 ? void 0 : _a.balance) != 0) {
                this.router.navigate(['/dashboard/transactions/transfer']);
                this.fixFracked();
            }
            else if (Number(localStorage.getItem('localLength')) < 2) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'You can not transfer as there is only one localwallet.',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else if (((_b = this.transaction.payload) === null || _b === void 0 ? void 0 : _b.balance) == 0 || this.checkerror) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'You cannot transfer as your wallet is empty.',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
        }
        else {
            if (Number(localStorage.getItem('skyLength')) > 1 && ((_c = this.skyDetails) === null || _c === void 0 ? void 0 : _c.balance) != 0 && this.checkerror == false) {
                this.router.navigate(['/dashboard/transactions/transfer-cc'], { queryParams: { id: '1' } });
            }
            else if (this.skynumber < 2) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'You can not transfer between as there is only one SkyVault.',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else if (((_d = this.skyDetails) === null || _d === void 0 ? void 0 : _d.balance) == 0 || this.checkerror) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'You can not transfer between as your skyVault is empty.',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
        }
    }
    toggleDropDown() {
        this.showDropDown = !this.showDropDown;
    }
    closeDropDown() {
        this.showDropDown = false;
    }
    toggleWltFunc() {
        this.showWalletDropdown = !this.showWalletDropdown;
    }
    closeWltFunc() {
        this.showWalletDropdown = false;
    }
    toggleMoreDropdown() {
        this.showMoreDropDown = !this.showMoreDropDown;
    }
    closeMoreDropdown() {
        this.showMoreDropDown = false;
    }
    sortData(sort) {
        var _a;
        const data = (_a = this.transaction.payload) === null || _a === void 0 ? void 0 : _a.transactions.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            //console.log("Sorted data:"+ this.sortedData)
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'datetime':
                    return this.compare(a.datetime, b.datetime, isAsc);
                case 'message':
                    return this.compare(a.message, b.message, isAsc);
                case 'type':
                    return this.compare(a.type, b.type, isAsc);
                case 'amount':
                    return this.compare(a.amount, b.amount, isAsc);
                case 'running_balance':
                    return this.compare(a.running_balance, b.running_balance, isAsc);
                default:
                    return 0;
            }
        });
    }
    sortSkyData(sortSky) {
        var _a;
        const data = (_a = this.skyDetails) === null || _a === void 0 ? void 0 : _a.statements.slice();
        if (!sortSky.active || sortSky.direction === '') {
            this.sortedSkyData = data;
            return;
        }
        this.sortedSkyData = data.sort((a, b) => {
            const isAsc = sortSky.direction === 'asc';
            switch (sortSky.active) {
                case 'time':
                    return this.compare(a.time, b.time, isAsc);
                case 'memo':
                    return this.compare(a.memo, b.memo, isAsc);
                case 'type':
                    return this.compare(a.type, b.type, isAsc);
                case 'amount':
                    return this.compare(a.amount, b.amount, isAsc);
                case 'balance':
                    return this.compare(a.balance, b.balance, isAsc);
                default:
                    return 0;
            }
        });
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    // sortData(name){
    //   if(name == 'Date'){
    //     this.transaction.payload?.transactions.sort((a, b) => b.datetime - a.datetime);
    //   }
    //   else if(name == 'Transaction remarks'){
    //     this.transaction.payload?.transactions.sort((a, b) => {
    //       let fa = a.message.toLowerCase(),
    //           fb = b.message.toLowerCase();
    //       if (fa < fb) {
    //           return -1;
    //       }
    //       if (fa > fb) {
    //           return 1;
    //       }
    //       return 0;
    //   });
    //   }
    //   else if(name === "Type"){
    //     this.transaction.payload?.transactions.sort((a, b) => {
    //       let fa = a.type.toLowerCase(),
    //           fb = b.type.toLowerCase();
    //       if (fa < fb) {
    //           return -1;
    //       }
    //       if (fa > fb) {
    //           return 1;
    //       }
    //       return 0;
    //   });
    //   }
    //   else if(name == 'Amount'){
    //     this.transaction.payload?.transactions.sort((a, b) => a.amount - b.amount);
    //   }
    // }
    ngAfterViewInit() { }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    rename() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = this.userLocal;
                var name = { new_name: this.wallet_name };
                //alert("data from rename:"+ data)
                let response = yield this.api.rename(data, name);
                if (response.status === "success") {
                    this.renameModal = !this.renameModal;
                    const newArr = this.all.map(obj => {
                        if (obj.name === this.userLocal) {
                            return Object.assign(Object.assign({}, obj), { name: this.wallet_name });
                        }
                        return obj;
                    });
                    this.eventService.changeLocaldata(newArr);
                    this.eventService.setItem('userLocal', this.wallet_name, 'changelocal');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Wallet has been renamed!',
                        icon: 'success',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) {
                            // this.eventService.setItem("wallet", "localwallet", "rename");
                        }
                    });
                }
                else {
                    this.renameModal = !this.renameModal;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: (_a = response.payload) === null || _a === void 0 ? void 0 : _a.message,
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) {
                        }
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    donwload_passkey() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const blobs = yield this.passkeyImage.blob();
            const newBlob = new Blob([blobs], { type: 'image/png' });
            var downloadURL = window.URL.createObjectURL(blobs);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = this.usersky + ".png";
            link.click();
        });
    }
    // async getAllwallet() {
    //   try {
    //     let response: any;
    //     response = await this.api.getWallet();
    //     if (response.status == "success") {
    //       this.all = response.payload;
    //       localStorage.setItem('localData', JSON.stringify(this.all))
    //       localStorage.setItem('localLength', this.all.length);
    //     }
    //   }
    //   catch (e) {
    //     console.log(e);
    //   }
    // }
    download(type) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (type === 'local') {
            if (((_c = (_b = (_a = this.transaction) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.transactions) === null || _c === void 0 ? void 0 : _c.length) === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'No Transactions.',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) { }
                });
            }
            else {
                this.downloadFile((_e = (_d = this.transaction) === null || _d === void 0 ? void 0 : _d.payload) === null || _e === void 0 ? void 0 : _e.transactions, 'jsontocsv', this.userLocal);
            }
        }
        else {
            if (((_g = (_f = this.skyDetails) === null || _f === void 0 ? void 0 : _f.statements) === null || _g === void 0 ? void 0 : _g.length) === 0 || this.checkerror) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'No Transactions.',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) { }
                });
            }
            else {
                this.downloadFile(this.skyDetails.statements, 'jsontocsv', this.usersky);
            }
        }
    }
    customSelectorEleven(val) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cSelectorImgEleven = 'assets/cloud-transfer.svg';
            this.cSelectorTextEleven = val;
            this.customSelectorOpenEleven = false;
            this.downloadpasskey();
        });
    }
    passkeyToggler() {
        this.customSelectorOpenEleven = !this.customSelectorOpenEleven;
        alert("this.customselectoreleven:" + this.customSelectorEleven);
    }
    downloadpasskey() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.getSky(this.usersky);
                if (response.status == "success") {
                    this.showLoader = true;
                    this.doCheck_home((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck_home(taskID, xdata) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.showLoader = false;
                        this.passkeyImage = yield fetch(`data:image/png;base64,${(_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.png}`);
                        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
                            customClass: {
                                confirmButton: 'btn btn-primary m-3',
                                cancelButton: 'btn btn-primary m-3'
                            },
                            buttonsStyling: false
                        });
                        swalWithBootstrapButtons.fire({
                            imageUrl: (_c = this.passkeyImage) === null || _c === void 0 ? void 0 : _c.url,
                            imageHeight: 300,
                            imageAlt: 'A tall image',
                            showCancelButton: true,
                            confirmButtonText: 'Okay',
                            cancelButtonText: 'Download',
                            allowOutsideClick: false,
                            reverseButtons: true
                        }).then((result) => {
                            if (result.isDismissed) {
                                this.donwload_passkey();
                            }
                        });
                    }
                    else {
                        this.showLoader = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            //icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck_home(taskID, xdata);
                }, 500);
            }
        });
    }
    listDownload() {
        var _a, _b, _c, _d;
        if (((_b = (_a = this.transaction) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.balance) === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Your wallet is empty.',
                icon: 'info',
                confirmButtonText: 'Okay',
            }).then((result) => {
                if (result.value) { }
            });
        }
        else {
            var content = (_d = (_c = this.transaction) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.contents;
            var serial = content.join(",");
            this.downloadContent(serial, 'jsontocsv', this.userLocal);
        }
    }
    downloadContent(data, filename = 'data', name) {
        let blob = new Blob(['\ufeff' + data], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) { //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", name + ".Serial.csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }
    downloadFile(data, filename = 'data', name) {
        if (this.type === 'localwallet') {
            var arrHeader = ["amount", "datetime", "message", "type", "running_balance"];
        }
        else {
            var arrHeader = ["amount", "time", "memo", "type", "balance"];
        }
        let csvData = this.ConvertToCSV(data, arrHeader);
        let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) { //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", name + ".History.csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }
    ConvertToCSV(objArray, headerList) {
        let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        let row = 'S.No,';
        if (this.type === "localwallet") {
            var newHeaders = ["Amount", "Date", "Message", "Type", "Balance"];
        }
        else {
            var newHeaders = ["Amount", "Date", "Memo", "Type", "Balance"];
        }
        for (let index in newHeaders) {
            row += newHeaders[index] + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (let i = 0; i < (array === null || array === void 0 ? void 0 : array.length); i++) {
            let line = (i + 1) + '';
            for (let index in headerList) {
                let head = headerList[index];
                line += ',' + this.strRep(array[i][head]);
            }
            str += line + '\r\n';
        }
        return str;
    }
    strRep(data) {
        if (typeof data == "string") {
            let newData = data.replace(/,/g, " ");
            return newData;
        }
        else if (typeof data == "undefined") {
            return "-";
        }
        else if (typeof data == "number") {
            return data.toString();
        }
        else {
            return data;
        }
    }
    showLoading(state) {
        this.loadingMessage = '';
        if (state) {
            this.showNormal = false;
            this.showLoader = true;
            this.showError = false;
        }
        else {
            this.showNormal = true;
            this.showLoader = false;
            this.showError = false;
        }
    }
    showErrorMessage(message) {
        this.errorMessage = message;
        this.showNormal = false;
        this.showError = true;
        this.showLoader = false;
    }
    hideErrorMessage() {
        this.errorMessage = '';
        this.showNormal = true;
        this.showError = false;
        this.showLoader = false;
    }
    amountExchange(amount) {
        return amount;
    }
    publicChange(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = { private: e };
                let response = yield this.api.publicChange(this.usersky, data);
                if (response.status === "success") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Successfully changes saved!',
                        icon: 'success',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: response.payload.message,
                        icon: 'warning',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    record() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (e === true) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Are you sure you want to delete all statements?",
                icon: 'warning',
                confirmButtonText: 'Confirm',
                showCancelButton: true
            }).then((result) => {
                if (result.value) {
                    this.delete();
                }
                else {
                    this.recordCheck = false;
                }
            });
            // } else {
            // Swal.fire({
            //   title: "Successfully updated!",
            //   icon: 'success',
            //   confirmButtonText: 'Okay',
            // }).then((result) => {
            //   if (result.value) { }
            // });
            // }
        });
    }
    delete() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.recHistory(this.usersky);
                console.log(response);
                if (response.status === "success") {
                    this.showLoader1 = true;
                    this.loadingMessage = "Deleting statements...";
                    this.docheckrecord((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    docheckrecord(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.showLoader1 = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Statements deleted successfully",
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                // let currentUrl = this.router.url;
                                // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                                // this.router.onSameUrlNavigation = 'reload';
                                // this.router.navigate([currentUrl]);
                                // this.eventService.setItem("wallet", "skywallet", 'skydelete');
                                this.sortedSkyData = [];
                                this.skyDetails.statements = [];
                                this.loadingMessage = '';
                                this.recordCheck = false;
                            }
                        });
                    }
                    else {
                        this.showLoader1 = false;
                        this.showLoading(false);
                        this.recordCheck = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.docheckrecord(taskID, xdata);
                }, 500);
            }
            else {
                // this.errorInfo = true;
            }
        });
    }
    returnZero() {
        return 0;
    }
    getEcho() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.successInfo = false;
            this.errorInfo = false;
            this.payload = null;
            this.taskId = null;
            try {
                let response = yield this.api.raidaEcho();
                if (response) {
                    this.payload = response.payload;
                    this.taskId = this.payload.id;
                    this.successInfo = true;
                    this.successMsg = "Echo sent. Task ID" + this.taskId;
                    this.doTaskPoll(this.taskId);
                }
            }
            catch (e) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Raida Servers disconnected!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Reconnect',
                }).then((result) => {
                    if (result.value) {
                        {
                            let currentUrl = this.router.url;
                            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                            this.router.onSameUrlNavigation = 'reload';
                            this.router.navigate([currentUrl]);
                            this.getEcho();
                        }
                    }
                });
            }
        });
    }
    doTaskPoll(taskID) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doTaskPoll(taskID);
            if (task) {
                this.payload = task.payload;
                this.latencies = (_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.latencies;
                if (this.payload.status == "completed") {
                    this.showLoading(false);
                    let data = this.payload.data;
                    this.successMsg = "Echo done. Online: " + data.online + "/25, pown:" + data.pownstring;
                    let h = "";
                    for (let i = 0; i < data.pownarray.length; i++) {
                        let st = data.pownarray[i];
                        if (st != 1) {
                            h += "<span class='rf'>" + i + "</span>";
                        }
                        else {
                            h += "<span class='pf'>" + i + "</span>";
                        }
                    }
                    return;
                }
                this.successMsg = "Doing Echo. Task ID " + taskID + ", Progress " + this.payload.progress + "%";
                setTimeout(() => {
                    this.doTaskPoll(taskID);
                }, 500);
            }
        });
    }
    getTransaction() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = this.userLocal;
            try {
                let response = yield this.api.getTransaction(data);
                if (response.status == "success") {
                    this.transaction = response;
                    this.sortedData = (_b = (_a = this.transaction) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.transactions.reverse();
                }
                else {
                    console.log(response.message);
                }
                // this.dataSourcelocal = new MatTableDataSource(this.transaction.payload.transactions);
                // this.dataSourcelocal.sort = this.sort;
            }
            catch (e) {
                console.log(e);
                this.errorInfo = true;
                this.errorMsg = "Failed";
            }
        });
    }
    getWallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = this.userLocal;
            try {
                let response = yield this.api.walletname(data);
                this.userDetails = response.payload;
            }
            catch (e) {
                console.log(e);
                this.errorInfo = true;
                this.errorMsg = "Failed";
            }
        });
    }
    getSkywallet() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = this.usersky;
                let response = yield this.api.getSky(data);
                if (response.status == "success") {
                    this.showLoading(true);
                    this.spinner.show();
                    this.showbal = false;
                    this.loadingMessage = "Collecting Statements...";
                    this.doCheck4((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => {
                        // this.successInfo = true;
                        // this.successMsg  ="Done " + JSON.stringify(data)
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheck4(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed" && this.payload.progress == 100) {
                        this.skyDetails = this.payload.data;
                        this.sortedSkyData = this.skyDetails.statements.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
                        this.eventService.changeskyhistory(this.sortedSkyData);
                        const newArr = this.allSky.map(obj => {
                            if (obj.name === this.usersky) {
                                return Object.assign(Object.assign({}, obj), { balance: this.skyDetails.balance });
                            }
                            return obj;
                        });
                        this.eventService.changeskydata(newArr);
                        this.loadingMessage == '';
                        // this.dataSourceSky = new MatTableDataSource(newArr);
                        // this.dataSourceSky.sort = this.sort;
                        this.spinner.hide();
                        this.showbal = true;
                        this.showLoading(false);
                    }
                    else {
                        this.checkerror = true;
                        this.spinner.hide();
                        this.showbal = true;
                        this.skyDetails = [];
                        this.sortedSkyData = [];
                        this.loadingMessage = '';
                        this.showLoading(false);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck4(taskID, xdata);
                }, 500);
            }
            else {
                this.showLoading(false);
                // this.errorInfo = true;
            }
        });
    }
    redirect(val) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.skyLength = localStorage.getItem("skyLength");
        if (val == 'withdraw') {
            if (((_a = this.skyDetails) === null || _a === void 0 ? void 0 : _a.balance) == 0 || this.checkerror) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "SkyVault is empty. You can't withdraw.",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else {
                this.router.navigate(['/dashboard/transactions/withdraw']);
            }
        }
        else if (val == "transfer") {
            if (((_b = this.skyDetails) === null || _b === void 0 ? void 0 : _b.balance) == 0 || this.checkerror) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "SkyVault is empty. You can't transfer.",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else {
                this.router.navigate(['/dashboard/transactions/transfer-cc'], { queryParams: { id: '2' } });
            }
        }
        else if (val == "exchange") {
            if (((_d = (_c = this.transaction) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.balance) == 0 || this.checkerror) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "Wallet is empty. You can't transfer.",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else {
                this.router.navigate(['/dashboard/transactions/transfer-cc'], { queryParams: { id: '3' } });
            }
        }
        else if (val == 'send') {
            if (this.skynumber == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "You don't have a SkyVault. Create one now?",
                    showConfirmButton: true,
                    icon: 'info',
                    confirmButtonText: 'Yes',
                }).then((result) => {
                    if (result.value) {
                        console.log("resu:" + result.isConfirmed);
                        this.createSkyVault(this.usersky);
                        this.router.navigate(['/dashboard/create-skyvault-dash']);
                    }
                });
            }
            else if (((_e = this.transaction.payload) === null || _e === void 0 ? void 0 : _e.balance) == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "Wallet is empty. You can't send CloudCoin.",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else {
                this.router.navigate(['/dashboard/transactions/deposit']);
                this.fixFracked();
            }
        }
        else if (val == 'show_colors') {
            if (((_f = this.transaction.payload) === null || _f === void 0 ? void 0 : _f.balance) == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "Wallet is empty!",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else {
                this.router.navigate(['/dashboard/functions/color-coin']);
            }
        }
        else if (val == 'export') {
            if (((_g = this.transaction.payload) === null || _g === void 0 ? void 0 : _g.balance) == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "Wallet is empty. You can't export.",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else {
                this.router.navigate(['/dashboard/transactions/export']);
                this.fixFracked();
            }
        }
        else if (val == "sky_exchange") {
            if (((_h = this.skyDetails) === null || _h === void 0 ? void 0 : _h.balance) == 0 || this.checkerror) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "SkyVault is empty. You can't transfer.",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else {
                this.router.navigate(['/dashboard/transactions/transfer-cc'], { queryParams: { id: '4' } });
            }
        }
    }
    deleteUser(val) {
        var _a, _b, _c;
        if (val === 'deletewallet') {
            if (((_a = this.skyDetails) === null || _a === void 0 ? void 0 : _a.balance) !== 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "SkyVaults must be empty before they can be deleted. Please empty this SkyVault and try again",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
            else {
                this.deleteUserModal = !this.deleteUserModal;
            }
        }
        else if (val === 'fix') {
            this.detectFix();
        }
        else if (val === 'health') {
            if (((_b = this.skyDetails) === null || _b === void 0 ? void 0 : _b.balance) === 0 || this.checkerror) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "SkyVault is empty.",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) { }
                });
            }
            else {
                this.healthModal = !this.healthModal;
            }
        }
        else if (val === 'backup') {
            if (((_c = this.skyDetails) === null || _c === void 0 ? void 0 : _c.balance) === 0 || this.checkerror) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "SkyVault is empty.",
                    icon: 'info',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.value) { }
                });
            }
            else {
                this.backupModal = !this.backupModal;
            }
        }
    }
    detectFix() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: this.usersky
                };
                let response = yield this.api.detectsky(data);
                console.log(response);
                if (response.status == "success") {
                    this.showLoader1 = true;
                    this.loadingMessage = "Detecting Pass Key...";
                    this.detectSkyKey((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    detectSkyKey(taskID, xdata) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                this.syncProg = this.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.showLoader1 = false;
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.fracked) != 0) {
                            this.fixModal = !this.fixModal;
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Pass Key is Healthy.",
                                icon: 'info',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                    }
                    else {
                        this.showLoader1 = false;
                        this.fixModal = !this.fixModal;
                    }
                    return;
                }
                setTimeout(() => {
                    this.detectSkyKey(taskID, xdata);
                }, 500);
            }
        });
    }
    fixKeycard() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.fixModal = !this.fixModal;
            try {
                var data = {
                    name: this.usersky,
                    pownstring: (_b = (_a = this.syncProg) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.coins[0].pownstring
                };
                let response = yield this.api.idFix(data);
                if (response.status == "success") {
                    this.showLoader1 = true;
                    this.doFixsky1((_c = response.payload) === null || _c === void 0 ? void 0 : _c.id, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doFixsky1(taskID, xdata) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.showLoader1 = false;
                        if (((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.number_failed) === 0) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Pass Key was Fixed and is now Healthy",
                                icon: 'success',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Pass Key is fracked and the attempt to fix failed. Try again later",
                                icon: 'error',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    { }
                                }
                            });
                        }
                    }
                    else {
                        this.showLoader1 = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doFixsky(taskID, xdata);
                }, 500);
            }
        });
    }
    deleteUserModalToggler(val) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (val === 'deletewallet') {
                if (((_a = this.transaction.payload) === null || _a === void 0 ? void 0 : _a.balance) !== 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Wallets must be empty before they can be deleted. Please empty this wallet and try again",
                        icon: 'info',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) {
                        }
                    });
                }
                else {
                    this.deleteUserModal = !this.deleteUserModal;
                }
            }
            else if (val === 'fix') {
                if (((_b = this.transaction.payload) === null || _b === void 0 ? void 0 : _b.balance) === 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Wallet is empty.",
                        icon: 'info',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
                else if (((_c = this.transaction.payload) === null || _c === void 0 ? void 0 : _c.balance) != 0) {
                    // this.checkhealth();
                }
                else {
                    this.fixModal = !this.fixModal;
                }
            }
            else if (val === 'fixlimbo') {
                if (((_d = this.transaction.payload) === null || _d === void 0 ? void 0 : _d.balance) === 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Wallet is empty.",
                        icon: 'info',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
                else if (((_e = this.transaction.payload) === null || _e === void 0 ? void 0 : _e.balance) != 0) {
                    this.checkLimbo();
                }
                else {
                    this.fixlimboModal = !this.fixlimboModal;
                }
            }
            else if (val === 'health') {
                if (((_f = this.transaction.payload) === null || _f === void 0 ? void 0 : _f.balance) === 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Wallet is empty.",
                        icon: 'info',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
                else {
                    this.healthModal = !this.healthModal;
                }
            }
            else if (val === 'delete') {
                if (((_j = (_h = (_g = this.transaction) === null || _g === void 0 ? void 0 : _g.payload) === null || _h === void 0 ? void 0 : _h.transactions) === null || _j === void 0 ? void 0 : _j.length) === 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'No Transactions.',
                        icon: 'info',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
                else {
                    this.deleteModal = !this.deleteModal;
                }
            }
            else if (val === 'backup') {
                if (((_l = (_k = this.transaction) === null || _k === void 0 ? void 0 : _k.payload) === null || _l === void 0 ? void 0 : _l.balance) === 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Wallet is empty.",
                        icon: 'info',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
                else {
                    this.backupModal = !this.backupModal;
                }
            }
            else if (val === "rename") {
                var data = this.userLocal;
                let result = yield this.api.walletname(data);
                var wallet_balance = (_m = result.payload) === null || _m === void 0 ? void 0 : _m.balance;
                if (wallet_balance > 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "You cannot rename wallet containing coins!",
                        icon: 'info',
                        confirmButtonText: 'Okay',
                    });
                }
                else {
                    this.renameModal = !this.renameModal;
                    setTimeout(() => {
                        var _a;
                        (_a = this.searchElement) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
                    }, 0);
                }
            }
        });
    }
    // async checkhealth13() {
    //   try {
    //     var data = {
    //       name: this.userLocal
    //     }
    //     let response: any = await this.api.health(data);
    //     if (response.status == "success") {
    //       this.showLoader1 = true;
    //       this.loadingMessage = "Detecting fracked coins..."
    //       this.doCheckHealth(response.payload?.id, (data: any) => { })
    //     } else {
    //       this.showLoader1 = false;
    //     }
    //   }
    //   catch (e) {
    //     this.showLoader1 = false;
    //     console.log(e);
    //   }
    // }
    // async doCheckHealth(taskID: any, xdata: any) {
    //   let task: any = await this.api.doCheck(taskID);
    //   console.log("Task done: ", task);
    //   if (task) {
    //     this.payload = task.payload;
    //     if (this.payload.status == "error" || this.payload.status == "completed") {
    //       if (this.payload.status == "completed") {
    //         this.showLoader1 = false;
    //         if (this.payload?.data?.TotalAlreadyFracked != 0 || this.payload?.data?.TotalFracked != 0) {
    //           this.fixModal = !this.fixModal;
    //         } else {
    //           Swal.fire({
    //             title: "No fracked coin found!",
    //             icon: 'info',
    //             confirmButtonText: 'Okay',
    //           }).then((result) => {
    //             if (result.value) {
    //               {
    //                 this.router.navigate(['/dashboard/home'])
    //               }
    //             }
    //           });
    //         }
    //       } else {
    //         this.showLoader1 = false;
    //         if (this.payload?.data?.message == "No coins to detect") {
    //           this.fixModal = !this.fixModal;
    //         } else {
    //           Swal.fire({
    //             title: this.payload.data.message,
    //             icon: 'error',
    //             confirmButtonText: 'Okay',
    //           }).then((result) => {
    //             if (result.value) {
    //               {
    //                 this.router.navigate(['/dashboard/home'])
    //               }
    //             }
    //           });
    //         }
    //       }
    //       return;
    //     }
    //     setTimeout(() => {
    //       this.doCheckHealth(taskID, xdata)
    //     }, 500)
    //   }
    // }
    // async checkhealth() {
    //   try {
    //     var data = this.userLocal;
    //     let response: any = await this.api.getTransaction(data);
    //     if (response.status == "success") {
    //       this.showLoader1 = true;
    //       this.loadingMessage = "Detecting fractured coins..."
    //       if (response.payload?.fracked_count > 0) {
    //         //  this.showLoader1 = false;
    //         //  this.fixlimboModal =!this.fixlimboModal;
    //         this.fixFracked()
    //         //  this.fixLimboCoins();
    //         //  this.doCheckLimbo(response.payload?.id, (data: any) => { });
    //       }
    //       else {
    //         this.showLoader1 = true;
    //         Swal.fire({
    //           title: "No fractured coin found!",
    //           icon: 'info',
    //           confirmButtonText: 'Okay',
    //         }).then((result) => {
    //           if (result.value) {
    //             {
    //               this.router.navigate(['/dashboard/home'])
    //             }
    //           }
    //         });
    //         this.showLoader1 = false;
    //       }
    //       return;
    //     }
    //     else {
    //       this.showLoader1 = false;
    //     }
    //   }
    //   catch (e) {
    //     this.showLoader1 = false;
    //     console.log(e)
    //   }
    //   setTimeout(() => {
    //     this.checkhealth()
    //   }, 500)
    // }
    // fixFracked() {
    //   this.showLoader1 = false;
    //   this.fixModal = !this.fixModal;
    // }
    fixFracked() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: this.userLocal
                };
                let response = yield this.api.fix(data);
                if (response.status === "success") {
                    this.doCheckFix((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheckFix(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                // this.fixProg = this.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        // this.goTODash = true;
                    }
                    else {
                        // this.goTODash = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheckFix(taskID, xdata);
                }, 500);
            }
        });
    }
    checkLimbo() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = this.userLocal;
                let response = yield this.api.getTransaction(data);
                if (response.status == "success") {
                    this.showLoader1 = true;
                    this.loadingMessage = "Detecting unprocessed coins...";
                    if (((_a = response.payload) === null || _a === void 0 ? void 0 : _a.limbo_count) > 0) {
                        //  this.showLoader1 = false;
                        //  this.fixlimboModal =!this.fixlimboModal;
                        this.fixLimbo();
                        //  this.fixLimboCoins();
                        //  this.doCheckLimbo(response.payload?.id, (data: any) => { });
                    }
                    else {
                        this.showLoader1 = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "No unprocessed coin found!",
                            icon: 'info',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                {
                                    this.router.navigate(['/dashboard/home']);
                                }
                            }
                        });
                        this.showLoader1 = false;
                    }
                    return;
                }
                else {
                    this.showLoader1 = false;
                }
            }
            catch (e) {
                this.showLoader1 = false;
                console.log(e);
            }
            setTimeout(() => {
                this.checkLimbo();
            }, 500);
        });
    }
    fixLimbo() {
        this.showLoader1 = false;
        this.fixlimboModal = !this.fixlimboModal;
    }
    doCheckLimbo(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.showLoader1 = false;
                        this.fixlimboModal = !this.fixlimboModal;
                        // Swal.fire({
                        //   title: 'Limbo coins found. Do you wanna fix wallet?',
                        //   icon: 'info',
                        //   confirmButtonText: 'Okay',
                        // }).then((result) =>{
                        //   if(result.value){
                        //     {
                        //       this.router.navigate(['/dashboard/home'])
                        //     }
                        //   }
                        // });
                        return;
                    }
                }
                // setTimeout(() => {
                //   this.doCheckLimbo(taskID, xdata)
                // }, 500)
            }
        });
    }
    fixLimboCoins() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = {
                name: this.userLocal
            };
            let response = yield this.api.fixlimbo(data);
            //if(response){
            if (response.status == "success") {
                this.doCheckLimbo((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                console.log("success");
            }
            else {
                console.log("failure");
            }
        });
    }
    fixNftFracked() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var data = {
                    name: "NFTs"
                };
                let response = yield this.api.fix(data);
                if (response.status === "success") {
                    this.doCheckNftFix((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    doCheckNftFix(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        // this.goTODash = true;
                    }
                    else {
                        // this.goTODash = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheckNftFix(taskID, xdata);
                }, 500);
            }
        });
    }
    deleteTransaction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.deleteModal = !this.deleteModal;
            try {
                var data = this.userLocal;
                let response = yield this.api.deletetransaction(data);
                console.log(response);
                if (response.status === "success") {
                    this.deleteTrans.reset();
                    this.getTransaction();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Transaction history has been deleted successfully!",
                        icon: 'success',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) {
                            // let currentUrl = this.router.url;
                            // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                            // this.router.onSameUrlNavigation = 'reload';
                            // this.router.navigate([currentUrl]);
                            // this.eventService.setItem("wallet", "localwallet", 'localdelete');
                        }
                    });
                }
                else {
                    this.deleteTrans.reset();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: response.payload.message,
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    }).then((result) => {
                        if (result.value) { }
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    deleteskytrans() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.api.recHistory(this.usersky);
                console.log(response);
                if (response.status === "success") {
                    // this.showLoader1 = true;
                    // this.loadingMessage = "Deleting statements..."
                    this.docheckrecord1((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    docheckrecord1(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        // this.showLoader1 = false;
                        // Swal.fire({
                        //   title: "Statements deleted successfully",
                        //   icon: 'success',
                        //   confirmButtonText: 'Okay',
                        // }).then((result) => {
                        //   if (result.value) {
                        this.sortedSkyData = [];
                        this.skyDetails.statements = [];
                        // this.loadingMessage = ''
                        this.recordCheck = false;
                    }
                    //    });
                    // } else {
                    //   this.showLoader1 = false;
                    //   // this.showLoading(false);
                    //   this.recordCheck = false;
                    //   Swal.fire({
                    //     title: this.payload.data.message,
                    //     icon: 'error',
                    //     confirmButtonText: 'Okay',
                    //   }).then((result) => {
                    //     if (result.value) { }
                    //   });
                    // }
                    return;
                }
                setTimeout(() => {
                    this.docheckrecord1(taskID, xdata);
                }, 500);
            }
            else {
                // this.errorInfo = true;
            }
        });
    }
    deletewallet() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.type == "skywallet") {
                try {
                    if (this.deleteForm.valid) {
                        var data = this.usersky;
                        this.deletedAkyvault = this.usersky;
                        let response = yield this.api.deleteSky(data);
                        this.deleteskytrans();
                        this.deleteUserModal = !this.deleteUserModal;
                        this.showLoader1 = true;
                        this.loadingMessage = "Deleting SkyVault...";
                        if (response.status == 'success') {
                            this.doCheck123((_a = response.payload) === null || _a === void 0 ? void 0 : _a.id, (data) => { });
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
            else {
                try {
                    if (this.deleteForm.valid) {
                        var data = this.userLocal;
                        let response = yield this.api.deleteWallet(data);
                        this.deleteUserModal = !this.deleteUserModal;
                        if (response.status == "error") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: response.payload.message,
                                icon: 'error',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                }
                            });
                        }
                        else {
                            var index = this.all.findIndex(x => x.name === this.userLocal);
                            this.all.splice(index, 1);
                            this.eventService.changeLocaldata(this.all);
                            this.deleteForm.reset();
                            if (((_b = this.all) === null || _b === void 0 ? void 0 : _b.length) != 0) {
                                for (let i = 0; i < ((_c = this.all) === null || _c === void 0 ? void 0 : _c.length); i++) {
                                    if (this.userLocal !== this.all[i].name) {
                                        this.eventService.setItem('userLocal', this.all[i++].name, 'changelocal');
                                        break;
                                    }
                                }
                            }
                            else {
                                this.eventService.setItem('wallet', 'skywallet', 'changesky');
                            }
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: "Wallet deleted successfully!",
                                icon: 'success',
                                confirmButtonText: 'Okay',
                            }).then((result) => {
                                if (result.value) {
                                    {
                                        // let currentUrl = this.router.url;
                                        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                                        // this.router.onSameUrlNavigation = 'reload';
                                        // this.router.navigate([currentUrl]);
                                        // if (this.all.length != 0) {
                                        //   for (let i = 0; i < this.all?.length; i++) {
                                        //     if (this.userLocal !== this.all[i].name) {
                                        //       this.eventService.setItem('userLocal', this.all[i++].name, 'changeLocal');
                                        //     }
                                        //   }
                                        // } else {
                                        // let currentUrl = this.router.url;
                                        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                                        // this.router.onSameUrlNavigation = 'reload';
                                        // this.router.navigate([currentUrl]);
                                        //   this.eventService.setItem('wallet', 'skywallet', 'changeSky');
                                        // }
                                    }
                                }
                            });
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
        });
    }
    // async getList() {
    //   try {
    //     let response: any = await this.api.getList();
    //     if (response.status === 'success') {
    //       this.skyDetails = response.payload[0];
    //       this.skyLength = response?.payload?.length;
    //       localStorage.setItem('skyLength', response.payload.length);
    //     }
    //   }
    //   catch (e) {
    //     console.log(e);
    //   }
    // }
    // async getSky() {
    //   try {
    //     let response: any = await this.api.getAllSky();
    //     if (response.status == "success") {
    //       this.doCheck10(response.payload?.id, (data: any) => {
    //       })
    //     }
    //   }
    //   catch (e) {
    //     console.log(e);
    //   }
    // }
    doCheck10(taskID, xdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.allSky = this.payload.data;
                        localStorage.setItem('skyData', JSON.stringify(this.allSky));
                        // for (let i = 0; i < this.allSky.length; i++) {
                        //   this.totalSkyBalance = this.totalSkyBalance + Number(this.allSky[i]?.balance);
                        // }
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck10(taskID, xdata);
                }, 500);
            }
        });
    }
    doCheck123(taskID, xdata) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let task = yield this.api.doCheck(taskID);
            console.log("Task done: ", task);
            if (task) {
                this.payload = task.payload;
                if (this.payload.status == "error" || this.payload.status == "completed") {
                    if (this.payload.status == "completed") {
                        this.showLoader1 = false;
                        var index = this.allSky.findIndex(x => x.name === this.usersky);
                        this.allSky.splice(index, 1);
                        this.deleteForm.reset();
                        this.eventService.changeskydata(this.allSky);
                        if (((_a = this.allSky) === null || _a === void 0 ? void 0 : _a.length) != 0) {
                            for (let i = 0; i < ((_b = this.allSky) === null || _b === void 0 ? void 0 : _b.length); i++) {
                                if (this.usersky !== this.allSky[i].name) {
                                    let num = i++;
                                    this.eventService.setItem('userSky', this.allSky[num].name, 'changesky');
                                    localStorage.setItem('serial', (_c = this.allSky[num].idcoin) === null || _c === void 0 ? void 0 : _c.sn);
                                    break;
                                }
                            }
                        }
                        else {
                            this.eventService.setItem('wallet', 'localwallet', 'changelocal');
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "SkyVault has been deleted successfully!",
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) { }
                        });
                    }
                    else {
                        this.showLoader1 = false;
                        this.deleteForm.reset();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: this.payload.data.message,
                            icon: 'error',
                            confirmButtonText: 'Okay',
                        }).then((result) => {
                            if (result.value) {
                                { }
                            }
                        });
                    }
                    return;
                }
                setTimeout(() => {
                    this.doCheck123(taskID, xdata);
                }, 500);
            }
        });
    }
    receipt(guid, time) {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.receiptTime = time;
            this.receipid = guid;
            if (this.receipid == '-') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'The balance was adjusted automatically because files were changed within the Coin Manager file structure.' +
                        ' Most likely because a user added or removed coins manually to the bank or fracked folders.',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                });
            }
            try {
                var name = this.userLocal;
                let data = guid;
                let response = yield this.api.getReceipts(name, data);
                if (response.status === "success") {
                    this.receiptdetails = (_a = response.payload) === null || _a === void 0 ? void 0 : _a.transactions;
                    this.totalcoins = (_b = response.payload) === null || _b === void 0 ? void 0 : _b.total_coins;
                    this.totalauthentic = (_c = response.payload) === null || _c === void 0 ? void 0 : _c.total_authentic;
                    this.totalfracked = (_d = response.payload) === null || _d === void 0 ? void 0 : _d.total_fracked;
                    this.totalcounterfeit = (_e = response.payload) === null || _e === void 0 ? void 0 : _e.total_counterfeit;
                    this.totallimbo = (_f = response.payload) === null || _f === void 0 ? void 0 : _f.total_limbo;
                    this.showreceipt = true;
                }
                else {
                    this.showreceipt = false;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    skyreceipt(guid, time) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.receiptTime = time;
            this.receipid = guid;
            try {
                var name = this.usersky;
                let data = guid;
                let response = yield this.api.getskyreceipt(name, data);
                if (response.status === "success") {
                    this.receiptdetails = (_a = response.payload) === null || _a === void 0 ? void 0 : _a.details;
                    this.showreceipt = true;
                }
                else {
                    if (((_b = response.payload) === null || _b === void 0 ? void 0 : _b.code) == 4132) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: "Transfer between two SkyVaults does not produce a receipt",
                            icon: 'info',
                            confirmButtonText: 'Okay',
                        });
                    }
                    this.showreceipt = false;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    customSelector(val, type) {
        this.destName = val;
        if (type == 'local') {
            this.cSelectorText = val;
            this.customSelectorOpen = false;
            this.getWalletDetail(this.cSelectorText);
        }
        else if (type == 'sky') {
            this.cSelectorTextSky = val;
            this.customSelectorOpenSky = false;
            this.getSkyDetail(this.cSelectorTextSky, 'serial');
        }
    }
    customSelToggler(val) {
        this.customSelectorOpen = !this.customSelectorOpen;
    }
    customSelTogglerSky(val) {
        this.customSelectorOpenSky = !this.customSelectorOpenSky;
    }
    tabToggler(val, name) {
        this.tabSelector = val;
        localStorage.setItem('wallet', "localwallet");
        this.eventService.setItem('userLocal', name, "changelocal");
    }
    tabTogglerSky(val, name) {
        this.tabSelector = val;
        if (this.skynumber == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "You don't have a SkyVault. Create one now?",
                showConfirmButton: true,
                icon: 'info',
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.value) {
                    console.log("resu:" + result.isConfirmed);
                    this.createSkyVault(this.usersky);
                    this.router.navigate(['/dashboard/create-skyvault-dash']);
                }
            });
        }
        else {
            localStorage.setItem('wallet', 'skywallet');
            this.eventService.setItem('userSky', name, 'changesky');
            // localStorage.setItem('serial', id);
        }
    }
    tabTogglerNft(val, name) {
        this.tabSelector = val;
        localStorage.setItem('wallet', 'nftwallet');
        this.eventService.setItem('Nft', name, "changenft");
        this.router.navigate(["/dashboard/create-nft-gallery"]);
        this.fixNftFracked();
    }
    activeTab() {
        if (this.type == 'localwallet') {
            this.tabSelector = 'wallet';
        }
        else if (this.type == 'skywallet') {
            this.tabSelector = 'skyvault';
        }
        else if (this.type == 'nftwallet') {
            this.tabSelector = 'nft';
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_10__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
    } }, decls: 27, vars: 14, consts: [["class", "leftPanleWrapper", 4, "ngIf"], [1, "rightpanelWrapper"], ["href", "javascript:;", 1, "menuCaller", 3, "click"], ["src", "assets/menu.svg", "alt", ""], [1, "homeWrapper"], [4, "ngIf"], [1, "raidaServerStatusWrap"], [1, "row", "raidaserveRow"], [1, "col-sm-12"], [1, "raidaServerStatus"], [1, "sectionOne"], [1, "serverDiv"], [1, "raidalogo", "ml-1"], ["src", "assets/raida-logo.svg", "alt", "icon"], ["class", "signalWrap", 4, "ngFor", "ngForOf"], ["class", "modalContainer", 4, "ngIf"], ["class", "onEventLoadWrap", 4, "ngIf"], [1, "leftPanleWrapper"], ["href", "javascript:;", 1, "backArroLeft", 3, "click"], ["src", "assets/arrow.svg", "alt", ""], [1, "leftPanelHolder"], [1, "leftPlogoWrap"], ["src", "assets/logo_new_only_cc.svg", "alt", "", 1, "lpLogoImg"], [1, "lpBodyWrap"], [1, "lpBodyTop"], [1, "lpuserName"], [1, "totBlncText"], [1, "totBlncVal"], [1, "walletInfoOuter"], [1, "walletInfoWrapper", "walletInfoLocal"], [1, "walletInfoHolder"], [1, "tab-item", 3, "ngClass", "click"], [1, "tab-item", "mr-auto", 3, "ngClass", "click"], [1, "tabBody"], ["class", "", 4, "ngFor", "ngForOf"], [1, "wltInfoLeft"], ["href", "javascript:;", "routerLink", "/dashboard/create-localwallet-dash", 1, "addWallet", 3, "ngClass", "click"], ["src", "assets/add_circle_img.svg", "alt", "add circle"], [1, ""], [1, "walletAcntHolder", 2, "cursor", "pointer", 3, "ngClass", "click"], ["src", "assets/1093522-200.png", "alt", "localwallet icon", 1, "wallet-icon", "mr-3"], [1, "acntVal", "mr-auto"], [1, "acntVal"], ["href", "javascript:;", "routerLink", "/dashboard/create-skyvault-dash", 1, "addWallet", 3, "ngClass", "click"], ["src", "assets/skywallet-cloud-white.svg", "alt", "skyvault img", 1, "mr-3"], [1, "acntHoldName", "mr-auto"], ["class", "acntVal", 4, "ngIf"], ["class", "acntVal mr-3", "style", "position: relative", 4, "ngIf"], [1, "acntVal", "mr-3", 2, "position", "relative"], ["size", "small", "color", "#fff", "type", "ball-pulse-sync", 3, "fullScreen"], [1, "lpBottomPart"], ["href", "javascript:;", "routerLink", "/dashboard/create-nft-gallery", "routerLinkActive", "", 1, "bottomLink", 3, "routerLinkActiveOptions", "click"], ["src", "assets/nft.png", "alt", "settings", 2, "margin-left", "-10px"], [1, "row", "homeHeader"], [1, "col-12", "homeHeaderInner"], [1, "col-12", "homeHeadRight"], [1, "homeHeadRightDropInner"], [1, "customdropDownHolder", 3, "clickOutside"], ["href", "javascript:;", 1, "btnCustomBlue", 3, "click"], [1, "textWithIcon"], ["src", "assets/caret-down.svg", "alt", "", 1, "imgInBtn"], ["class", "dropDownBox", 4, "ngIf"], [1, "homeBody"], [1, "tableWrapper"], [1, "tableHeader"], [1, "tableHeaderLeft"], ["class", "refreshbtn", 4, "ngIf"], [1, "tableHead"], [1, "mr-auto"], [1, "position-relative", "search", "tableSearchFieldWrap", "ml-3"], [1, "fa", "fa-search", "position-absolute"], ["type", "text", "placeholder", "Search", 1, "form-control", "tableSearchField", 3, "ngModel", "keyup", "ngModelChange"], [1, "tableHeaderRight"], ["class", "customdropDownHolder m-l-10", 3, "clickOutside", 4, "ngIf"], ["class", "customdropDownHolder", 3, "clickOutside", 4, "ngIf"], ["class", "example-container mat-elevation-z8 table table-bordered table-responsive-sm tableFixHead", 3, "matSortChange", 4, "ngIf"], ["class", "example-container mat-elevation-z8 table table-bordered table-responsive-sm tableFixHead", 4, "ngIf"], [1, "userName"], ["src", "assets/1093522-200.png", "alt", "localwallet icon", 1, "wallet_icon"], [1, "blncValueHeading"], ["src", "assets/skywallet_icon.svg", "alt", "skywallet icon"], ["class", "blncValueHeading", 4, "ngIf"], ["height", "70px", 3, "options", "animationCreated"], [1, "text-center", 2, "color", "#ffffff", "margin-bottom", "10px"], [1, "text-center"], [1, "customBtn", 3, "click"], ["icon", "arrow-left"], [1, "dropDownBox"], ["href", "javascript:;", "class", "ml-3", "routerLink", "/dashboard/transactions/import", 4, "ngIf"], ["href", "javascript:;", "class", "ml-3", 3, "click", 4, "ngIf"], ["class", "customdropDownHolder1", 4, "ngIf"], ["href", "javascript:;", "class", "ml-3", "routerLink", "/dashboard/transactions/deposit", 4, "ngIf"], ["href", "javascript:;", "routerLink", "/dashboard/transactions/import", 1, "ml-3"], ["href", "javascript:;", 1, "ml-3", 3, "click"], [1, "customdropDownHolder1"], ["href", "javascript:;", 1, "dropbtn"], [1, "fa", "fa-caret-right", "imgInBtn", "ml-2"], [1, "dropDownBox1"], ["href", "javascript:;", 3, "click", 4, "ngIf"], ["href", "javascript:;", 3, "click"], ["href", "javascript:;", "routerLink", "/dashboard/transactions/deposit", 1, "ml-3"], [1, "refreshbtn"], ["onClick", "window.location.reload();", 1, "refresh_page"], [1, "refresh_page", 3, "click"], [1, "customdropDownHolder", "m-l-10", 3, "clickOutside"], ["href", "javascript:;", 1, "btnBlueWallet", 3, "click"], [1, "fa", "fa-caret-right", "imgInBtn"], [1, "example-container", "mat-elevation-z8", "table", "table-bordered", "table-responsive-sm", "tableFixHead", 3, "matSortChange"], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "datetime"], ["mat-sort-header", "message"], ["mat-sort-header", "type"], ["mat-sort-header", "amount"], ["mat-sort-header", "running_balance"], ["class", "scroll", 4, "ngFor", "ngForOf"], [1, "scroll"], [3, "innerHTML"], [1, "text-right"], [3, "ngStyle"], [1, "text-center", 3, "click"], [2, "cursor", "pointer"], [1, "fa", "fa-search", 2, "color", "#0884ff"], [1, "d-flex", "justify-content-center", "text-white"], [1, "example-container", "mat-elevation-z8", "table", "table-bordered", "table-responsive-sm", "tableFixHead"], ["mat-sort-header", "time"], ["mat-sort-header", "memo"], ["mat-sort-header", "balance"], ["class", "d-flex justify-content-center text-white", 4, "ngIf"], ["height", "150px", 3, "options", "animationCreated"], [2, "color", "#ffffff"], [1, "signalWrap"], ["placement", "top", 1, "signalDiv", 3, "ngStyle"], [1, "modalContainer"], [1, "modalOverlay", 3, "click"], [1, "modalWrap", "modalMedium"], [1, "modalHeader"], [1, "modalClose", 3, "click"], ["src", "assets/close-white.svg", "alt", "icon"], [1, "modalBody"], [1, "gap20"], ["class", "modalSubhed", 4, "ngIf"], [3, "formGroup"], [1, "formField"], [1, "checkboxInpHolder", "checkBoxWrap"], ["type", "checkbox", "formControlName", "check2"], [1, "gap50"], [1, "modalFooter"], [1, "buttonWrap"], ["class", "btnCustomBlue buttonWide", 3, "ngClass", "click", 4, "ngIf"], [1, "cancelTransparent", 3, "click"], [1, "modalSubhed"], [1, "btnCustomBlue", "buttonWide", 3, "ngClass", "click"], ["routerLink", "/dashboard/functions/fix-limbo", 1, "btnCustomBlue", "buttonWide"], ["class", "sectionOne", 4, "ngIf"], ["class", "btnCustomBlue buttonWide", 3, "click", 4, "ngIf"], ["class", "btnCustomBlue buttonWide", "routerLink", "/dashboard/functions/fix", 4, "ngIf"], [1, "btnCustomBlue", "buttonWide", 3, "click"], ["routerLink", "/dashboard/functions/fix", 1, "btnCustomBlue", "buttonWide"], ["routerLink", "/dashboard/functions/health_check", 1, "btnCustomBlue", "buttonWide"], ["routerLink", "/dashboard/functions/backup", 1, "btnCustomBlue", "buttonWide"], ["for", "delete", 1, "checkboxInpHolder", "checkBoxWrap"], ["type", "checkbox", "id", "delete", "formControlName", "check2"], [1, "modalBody", "scroll1"], [1, "text-white", "mb-n1"], ["for", ""], [2, "opacity", "0.7"], [1, "gap10"], [1, "gap30"], [4, "ngFor", "ngForOf"], ["for", "username"], ["type", "text", "placeholder", "Ex: LocalWallet", "name", "username", 1, "", 3, "ngModel", "ngModelChange"], ["reName", ""], [1, "raidalogo"], [1, "onEventLoadWrap"], [1, "text-center", "loader_show"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 28, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_2_listener() { return ctx.callLeftBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_ng_container_5_Template, 31, 11, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_ng_container_6_Template, 5, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomeComponent_div_16_Template, 2, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_div_17_Template, 29, 7, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 20, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 17, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 17, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HomeComponent_div_21_Template, 20, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 29, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HomeComponent_div_23_Template, 52, 14, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HomeComponent_div_24_Template, 21, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HomeComponent_div_25_Template, 15, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HomeComponent_div_26_Template, 6, 2, "div", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLeftBarOnSm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.latencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deleteUserModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fixlimboModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fixModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.healthModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.backupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deleteModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showreceipt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.renameModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showRaida);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], ng_click_outside__WEBPACK_IMPORTED_MODULE_13__["ClickOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_lottie__WEBPACK_IMPORTED_MODULE_14__["LottieComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["KeyValuePipe"]], styles: [".radia_btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background: #2c2c2c;\n  padding: 11px 24px;\n  border-radius: 5px;\n  font-size: 17px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n}\n\n.refresh_page[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  display: inline-block;\n  transition: all 0.1s ease;\n  min-width: 30px;\n  background: #0884ff;\n  padding: 3px 10px;\n  margin-right: 50px;\n  color: #fff;\n  font-size: 18px;\n}\n\n.scroll1[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 406px;\n}\n\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 26px;\n  display: inline-block;\n  color: #fff;\n  margin: 0;\n  line-height: 19px;\n}\n\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 17px;\n  width: 17px;\n  border-radius: 0px;\n  border: 1px solid #fff;\n}\n\n.custom_check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  opacity: 0;\n  content: \"\";\n  position: absolute;\n  width: 5px;\n  height: 11px;\n  border-right: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  left: 6px;\n  top: 2px;\n  transform: rotate(45deg);\n}\n\n.custom_check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n\n.position-items[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: -40px;\n  align-items: center;\n  background: #0884ff;\n  border-radius: 7px;\n  padding: 8px 0;\n  transform: scale(0.8);\n}\n\n.circle_design[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 14px;\n  background: #39d02b;\n  border-radius: 50px;\n  margin-right: 7px;\n}\n\n.homeHeader[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n@media screen and (max-width: 576px) {\n  .homeHeader[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n.homeHeader[_ngcontent-%COMP%]   .homeHeadRight[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.homeHeader[_ngcontent-%COMP%]   .homeHeadRight[_ngcontent-%COMP%]   .homeHeadRightDropInner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.homeHeader[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #fff;\n  margin-bottom: 5px;\n  font-weight: 400;\n  margin-right: 20px;\n  max-width: 86%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media (max-width: 1100px) {\n  .homeHeader[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%] {\n    width: 82%;\n  }\n}\n\n.homeHeader[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  margin-right: 15px;\n}\n\n.homeHeader[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]   .wallet_icon[_ngcontent-%COMP%] {\n  width: 35px;\n  margin-right: 15px;\n  margin-bottom: 3px;\n  filter: invert(0);\n}\n\n.homeHeader[_ngcontent-%COMP%]   .blncHeading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #d7d7d7;\n  margin-bottom: 10px;\n  line-height: 20px;\n}\n\n.homeHeader[_ngcontent-%COMP%]   .blncValueHeading[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 30px;\n  margin-bottom: 5px;\n}\n\n.homeHeader[_ngcontent-%COMP%]   .blncValueSubHeading[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n  color: #d7d7d7;\n  line-height: 30px;\n  margin-bottom: 0;\n}\n\n.refreshIcon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 1px 7px;\n  position: relative;\n  top: -3px;\n  margin-left: 10px;\n}\n\n.homeWrapperEmpty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 92vh;\n}\n\n@media screen and (max-width: 768px) {\n  .homeBtnSubHeading[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: 20px;\n    margin-right: 10px;\n  }\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #333;\n  top: 0.75rem;\n  left: 0.75rem;\n}\n\n.tableSearchField[_ngcontent-%COMP%] {\n  padding-left: 2.5rem;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #333;\n}\n\n  .mat-sort-header-container:not(.mat-sort-header-sorted) .mat-sort-header-arrow {\n  opacity: 1 !important;\n  transform: translateY(0px) !important;\n  color: white !important;\n  padding-bottom: 2px !important;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  max-height: 450px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: inherit;\n}\n\n.homeHeaderInner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-right: 170px;\n  margin-bottom: 5px;\n}\n\n.invWrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.inventoryRow[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.inventoryRow[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.invValueWrap[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 5px;\n  background-color: #181818;\n  min-width: 70px;\n}\n\n.inventoryRowIn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.inventoryHeading[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #fff;\n  font-size: 20px;\n  margin-bottom: 0;\n}\n\n.inventoryHeading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 5px;\n}\n\n@media (max-width: 1192px) {\n  .inventoryHeading[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n  .inventoryHeading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px !important;\n  }\n}\n\n.raidaServerStatusWrap[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 300px;\n  right: 0;\n  padding: 15px;\n  background-color: #222;\n}\n\n.raidaServerStatusWrap[_ngcontent-%COMP%]   .raidaserveRow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.raidaServerStatus[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.raidaServerStatus[_ngcontent-%COMP%]   .radia_btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n}\n\n.bottomBordered[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.26);\n}\n\n.tableHeaderRight[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.tableFixHead[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 450px;\n}\n\n.tableFixHead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  background: #181818;\n}\n\n.serverDiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  border-radius: 15px;\n  background-color: #2d2d2d;\n  box-shadow: 0 3px 10px #ffffff26;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n\n.serverDiv[_ngcontent-%COMP%]   .raidalogo[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-right: 5px;\n}\n\n.serverDiv[_ngcontent-%COMP%]   .signalWrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.serverDiv[_ngcontent-%COMP%]   .signalWrap[_ngcontent-%COMP%]   .signalDiv[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 20px;\n  border-radius: 6px;\n  margin: 0 2px;\n  background-color: #999;\n}\n\n.leftPanleWrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 300px;\n  padding: 20px;\n  border-radius: 0 20px 20px 0;\n  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  z-index: 999;\n}\n\n@media screen and (max-width: 768px) {\n  .leftPanleWrapper[_ngcontent-%COMP%] {\n    position: absolute;\n    padding-top: 30px;\n  }\n}\n\n.rightpanelWrapper[_ngcontent-%COMP%] {\n  width: calc(100% - 300px);\n  margin-left: 300px;\n  padding: 30px;\n  min-height: 100vh;\n}\n\n@media screen and (max-width: 768px) {\n  .rightpanelWrapper[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-left: 0 !important;\n    padding: 20px;\n  }\n}\n\n.backArroLeft[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 20px;\n  top: 5px;\n}\n\n@media screen and (max-width: 768px) {\n  .backArroLeft[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n\n.backArroLeft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBR0ksdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0k7RUFQSjtJQVFRLHVCQUFBO0lBQ0Esc0JBQUE7RUFBTjtBQUNGOztBQUVJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUFSOztBQUdRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRFo7O0FBS0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFIUjs7QUFLUTtFQVhKO0lBWVEsVUFBQTtFQUZWO0FBQ0Y7O0FBSVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFGWjs7QUFJUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGWjs7QUFNSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUpSOztBQU9JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMUjs7QUFRSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTlI7O0FBVUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBVko7O0FBY0k7RUFESjtJQUVRLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBVk47QUFDRjs7QUFhQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFWSjs7QUFtQkE7RUFDSSxvQkFBQTtBQWhCSjs7QUFtQkE7RUFDSSxXQUFBO0FBaEJKOztBQW1CQTtFQUNJLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FBaEJKOztBQW1CQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQWhCSjs7QUFtQkE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7QUFoQko7O0FBbUJBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBakJKOztBQW9CQTtFQUVJLFlBQUE7QUFsQko7O0FBb0JJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFsQlI7O0FBc0JBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBbkJKOztBQXNCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQW5CSjs7QUFzQkE7RUFFSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQko7O0FBc0JJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBcEJSOztBQXVCSTtFQVpKO0lBYVEsMEJBQUE7RUFwQk47RUFzQk07SUFDSSxzQkFBQTtFQXBCVjtBQUNGOztBQXdCQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFyQko7O0FBdUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBckJSOztBQWlDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQTlCSjs7QUFnQ0k7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQTlCUjs7QUFrQ0E7RUFDSSxrREFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUEvQko7O0FBa0NBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBL0JKOztBQWtDQTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUEvQko7O0FBa0NBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBL0JKOztBQWtDQTtFQUNJLG1CQUFBO0FBL0JKOztBQWtDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBL0JKOztBQWtDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBL0JKOztBQWtDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUEvQko7O0FBaUNJO0VBWko7SUFhUSxrQkFBQTtJQUVBLGlCQUFBO0VBL0JOO0FBQ0Y7O0FBa0NBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxpQkFBQTtBQWxDSjs7QUFxQ0k7RUFWSjtJQVdRLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0VBbENOO0FBQ0Y7O0FBcUNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFsQ0o7O0FBb0NJO0VBTko7SUFPUSxxQkFBQTtFQWpDTjtBQUNGOztBQW1DSTtFQUNJLFlBQUE7QUFqQ1IiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpYV9idG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMyYzJjMmM7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVmcmVzaF9wYWdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDg4NGZmO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNjcm9sbDEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDZweDtcclxufVxyXG5cclxuLmN1c3RvbV9jaGVjayBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG59XHJcblxyXG4uY3VzdG9tX2NoZWNrIGxhYmVsOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmN1c3RvbV9jaGVjayBsYWJlbDo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogMTFweDtcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcclxuICAgIGxlZnQ6IDZweDtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uY3VzdG9tX2NoZWNrIGlucHV0OmNoZWNrZWR+bGFiZWw6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ucG9zaXRpb24taXRlbXMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IC00MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMwODg0ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufVxyXG5cclxuLmNpcmNsZV9kZXNpZ24ge1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzlkMDJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcblxyXG4uaG9tZUhlYWRlciB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWVIZWFkUmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgICAgIC5ob21lSGVhZFJpZ2h0RHJvcElubmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXJOYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogODYlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogODIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndhbGxldF9pY29ue1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDApOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJsbmNIZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICNkN2Q3ZDc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmxuY1ZhbHVlSGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibG5jVmFsdWVTdWJIZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogI2Q3ZDdkNztcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVmcmVzaEljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMXB4IDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7fVxyXG59XHJcblxyXG4uaG9tZVdyYXBwZXJFbXB0eSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA5MnZoO1xyXG59XHJcblxyXG4uaG9tZUJ0blN1YkhlYWRpbmcge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuaSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRvcDogMC43NXJlbTtcclxuICAgIGxlZnQ6IDAuNzVyZW07XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0MzQzNDMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGVTZWFyY2hGaWVsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyOm5vdCgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCkgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmhvbWVIZWFkZXJJbm5lciB7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxNTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5pbnZXcmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmludmVudG9yeVJvdyB7XHJcbiAgICAvLyAgIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIC5jb2wge1xyXG4gICAgICAgIGZsZXg6IDAgMCAyMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnZWYWx1ZVdyYXAge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxufVxyXG5cclxuLmludmVudG9yeVJvd0luIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW52ZW50b3J5SGVhZGluZyB7XHJcbiAgICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5MnB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucmFpZGFTZXJ2ZXJTdGF0dXNXcmFwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDMwMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuXHJcbiAgICAucmFpZGFzZXJ2ZVJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tX2NoZWNrIHtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIC8vIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY3cHgpIHtcclxuICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC8vIH1cclxufVxyXG5cclxuLnJhaWRhU2VydmVyU3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5yYWRpYV9idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3R0b21Cb3JkZXJlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxufVxyXG5cclxuLnRhYmxlSGVhZGVyUmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZUZpeEhlYWQge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuLnRhYmxlRml4SGVhZCB0aCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xyXG59XHJcblxyXG4uc2VydmVyRGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4ICNmZmZmZmYyNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2VydmVyRGl2IC5yYWlkYWxvZ28ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zZXJ2ZXJEaXYgLnNpZ25hbFdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlcnZlckRpdiAuc2lnbmFsV3JhcCAuc2lnbmFsRGl2IHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcclxufVxyXG5cclxuLmxlZnRQYW5sZVdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gbGVmdDogLTEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yaWdodHBhbmVsV3JhcHBlciB7XHJcbiAgICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMzMwcHgpO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAzMzBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFja0Fycm9MZWZ0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgdG9wOiA1cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_10__["EventService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]]
        }], searchElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['reName']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map