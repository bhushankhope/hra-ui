(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[824],{"./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>ConnectableObservable});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_Observable__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_Subscription__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),_operators_refCount__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/refCount.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),ConnectableObservable=function(_super){function ConnectableObservable(source,subjectFactory){var _this=_super.call(this)||this;return _this.source=source,_this.subjectFactory=subjectFactory,_this._subject=null,_this._refCount=0,_this._connection=null,(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.A)(source)&&(_this.lift=source.lift),_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ZT)(ConnectableObservable,_super),ConnectableObservable.prototype._subscribe=function(subscriber){return this.getSubject().subscribe(subscriber)},ConnectableObservable.prototype.getSubject=function(){var subject=this._subject;return subject&&!subject.isStopped||(this._subject=this.subjectFactory()),this._subject},ConnectableObservable.prototype._teardown=function(){this._refCount=0;var _connection=this._connection;this._subject=this._connection=null,null==_connection||_connection.unsubscribe()},ConnectableObservable.prototype.connect=function(){var _this=this,connection=this._connection;if(!connection){connection=this._connection=new _Subscription__WEBPACK_IMPORTED_MODULE_2__.w0;var subject_1=this.getSubject();connection.add(this.source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.x)(subject_1,void 0,(function(){_this._teardown(),subject_1.complete()}),(function(err){_this._teardown(),subject_1.error(err)}),(function(){return _this._teardown()})))),connection.closed&&(this._connection=null,connection=_Subscription__WEBPACK_IMPORTED_MODULE_2__.w0.EMPTY)}return connection},ConnectableObservable.prototype.refCount=function(){return(0,_operators_refCount__WEBPACK_IMPORTED_MODULE_4__.x)()(this)},ConnectableObservable}(_Observable__WEBPACK_IMPORTED_MODULE_5__.y)},"./node_modules/rxjs/dist/esm5/internal/operators/refCount.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>refCount});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function refCount(){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var connection=null;source._refCount++;var refCounter=(0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,void 0,void 0,void 0,(function(){if(!source||source._refCount<=0||0<--source._refCount)connection=null;else{var sharedConnection=source._connection,conn=connection;connection=null,!sharedConnection||conn&&sharedConnection!==conn||sharedConnection.unsubscribe(),subscriber.unsubscribe()}}));source.subscribe(refCounter),refCounter.closed||(connection=source.connect())}))}},"./node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>takeWhile});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function takeWhile(predicate,inclusive){return void 0===inclusive&&(inclusive=!1),(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var index=0;source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(value){var result=predicate(value,index++);(result||inclusive)&&subscriber.next(value),!result&&subscriber.complete()})))}))}},"./libs/components/molecules/src/lib/interactive-svg/interactive-svg.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tooltip {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  box-shadow: 1px 0.125rem 1rem 0.125rem rgba(0, 0, 0, 0.16);\n  border-radius: 0.5rem;\n  padding: 1rem;\n}\n\n[id^=Crosswalk] :is(path, polygon, polyline) {\n  fill: transparent;\n  stroke: transparent;\n}\n.hover-active [id^=Crosswalk] g:hover > :is(path, polygon, polyline) {\n  fill: hsl(0, 100%, 50%);\n  mix-blend-mode: saturation;\n}\n.hover-active [id^=Crosswalk] g > g:hover :is(path, polygon, polyline) {\n  fill: hsl(0, 100%, 50%);\n  mix-blend-mode: saturation;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/interactive-svg/interactive-svg.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>interactive_svg_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var interactive_svg_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/interactive-svg/interactive-svg.component.scss?ngResource"),interactive_svg_componentngResource_default=__webpack_require__.n(interactive_svg_componentngResource),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2020/overlay.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),lib_esmodule=__webpack_require__("./node_modules/ng-inline-svg-2/lib_esmodule/index.js"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),noop=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");var timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),isFunction=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),mapOneOrManyArgs=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js");function fromEventPattern(addHandler,removeHandler,resultSelector){return resultSelector?fromEventPattern(addHandler,removeHandler).pipe((0,mapOneOrManyArgs.Z)(resultSelector)):new Observable.y((function(subscriber){var handler=function(){for(var e=[],_i=0;_i<arguments.length;_i++)e[_i]=arguments[_i];return subscriber.next(1===e.length?e[0]:e)},retValue=addHandler(handler);return(0,isFunction.m)(removeHandler)?function(){return removeHandler(handler,retValue)}:void 0}))}var _class,takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");const TOOLTIP_POSITIONS=[{originX:"center",originY:"center",overlayX:"start",overlayY:"center",offsetX:8},{originX:"center",originY:"center",overlayX:"end",overlayY:"center",offsetX:-8},{originX:"center",originY:"center",overlayX:"center",overlayY:"top",offsetY:8},{originX:"center",originY:"center",overlayX:"center",overlayY:"bottom",offsetY:-8}];let InteractiveSvgComponent=((_class=class InteractiveSvgComponent{constructor(){this.mapping=[],this.nodeHover=new core.EventEmitter,this.NEVER_EVAL_SCRIPTS="never",this.TOOLTIP_POSITIONS=TOOLTIP_POSITIONS,this.nodeHoverData$=new BehaviorSubject.X(void 0),this.nodeHoverDelayedData$=this.nodeHoverData$.pipe(function debounce(durationSelector){return(0,lift.e)((function(source,subscriber){var hasValue=!1,lastValue=null,durationSubscriber=null,emit=function(){if(null==durationSubscriber||durationSubscriber.unsubscribe(),durationSubscriber=null,hasValue){hasValue=!1;var value=lastValue;lastValue=null,subscriber.next(value)}};source.subscribe((0,OperatorSubscriber.x)(subscriber,(function(value){null==durationSubscriber||durationSubscriber.unsubscribe(),hasValue=!0,lastValue=value,durationSubscriber=(0,OperatorSubscriber.x)(subscriber,emit,noop.Z),(0,innerFrom.Xf)(durationSelector(value)).subscribe(durationSubscriber)}),(function(){emit(),subscriber.complete()}),void 0,(function(){lastValue=durationSubscriber=null})))}))}((event=>(0,timer.H)(event?200:0)))),this.renderer=(0,core.inject)(core.Renderer2),this.destroy$=new Subject.x}ngOnDestroy(){this.clear()}setSvgElement(el){this.clear();const crosswalkEl=el.querySelector('[id^="Crosswalk"]');crosswalkEl&&(this.renderer.appendChild(el,crosswalkEl),this.attachCrosswalkHover(crosswalkEl))}formatNodeName(name){return name.replace(/_/g," ")}attachCrosswalkHover(el){this.attachEvent(el,"mouseover").subscribe(this.onCrosswalkHover.bind(this)),this.attachEvent(el,"mouseout").subscribe((()=>this.nodeHoverData$.next(void 0)))}onCrosswalkHover(event){const node=this.getNode(event);node&&(this.nodeHoverData$.next({node:node.label,origin:{x:event.clientX,y:event.clientY}}),this.nodeHover.emit(node))}clear(){this.destroy$.next(),this.destroy$.complete(),this.destroy$=new Subject.x}getNode(event){const idCollection=[event.target.id,event.target.parentElement?.id??"",event.target.parentElement?.parentElement?.id??""];for(const id of idCollection){const decodedID=this.decodeId(id),match=this.mapping.find((item=>item.node_name?.toLowerCase()===decodedID.toLowerCase()));if(match)return match}}decodeId(id){return id.replace(/_x([\da-f]+)_/gi,((_match,hex)=>String.fromCharCode(Number.parseInt(hex,16))))}attachEvent(el,event){const{renderer,destroy$}=this;return fromEventPattern((handler=>renderer.listen(el,event,handler)),((_handler,unlisten)=>unlisten())).pipe((0,takeUntil.R)(destroy$))}}).propDecorators={url:[{type:core.Input}],mapping:[{type:core.Input}],nodeHover:[{type:core.Output}]},_class);InteractiveSvgComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-interactive-svg",standalone:!0,imports:[common.CommonModule,lib_esmodule.vi,overlay.U8],template:'<div\n  *ngIf="url"\n  class="svg"\n  [class.hover-active]="nodeHoverData$ | async"\n  [inlineSVG]="url"\n  [evalScripts]="NEVER_EVAL_SCRIPTS"\n  (onSVGInserted)="setSvgElement($event)"\n></div>\n\n<ng-container *ngIf="nodeHoverDelayedData$ | async as hover">\n  <ng-template\n    cdkConnectedOverlay\n    cdkConnectedOverlayPanelClass="hra-interactive-svg-tooltip-panel"\n    [cdkConnectedOverlayOrigin]="hover.origin"\n    [cdkConnectedOverlayPositions]="TOOLTIP_POSITIONS"\n    [cdkConnectedOverlayViewportMargin]="16"\n    [cdkConnectedOverlayOpen]="true"\n  >\n    <div class="tooltip">\n      {{ formatNodeName(hover.node) }}\n    </div>\n  </ng-template>\n</ng-container>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,styles:[interactive_svg_componentngResource_default()]})],InteractiveSvgComponent);const interactive_svg_stories={title:"InteractiveSvg",component:InteractiveSvgComponent,argTypes:{url:{control:"select",options:["https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-large-intestine-crypt-lieberkuhn.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-kidney-descending-thin-loop-of-henle.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-kidney-renal-corpuscle.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-lung-pulmonary-alveolus.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-pancreas-islets-langerhans.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-skin-dermal-papilla.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-kidney-ascending-thin-loop-of-henle.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-kidney-cortical-collecting-duct.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-kidney-inner-medullary-collecting-duct.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-kidney-nephron.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-kidney-outer-medullary-collecting-duct.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-kidney-thick-ascending-loop-of-henle.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-liver-liver-lobule.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-pancreas-intercalated-duct.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-pancreas-pancreatic-acinus.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-prostate-prostate-glandular-acinus.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-skin-dermal-papilla.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-thymus-thymus-lobule.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-skin-epidermal-ridge.svg","https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-lung-bronchial-submucosal-gland.svg"],defaultValue:"https://hubmapconsortium.github.io/ccf-releases/v1.3/2d-ftu/2d-ftu-large-intestine-crypt-lieberkuhn.svg"}}},Default=(args=>({props:args})).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...Default.parameters?.docs?.source}}}}}]);