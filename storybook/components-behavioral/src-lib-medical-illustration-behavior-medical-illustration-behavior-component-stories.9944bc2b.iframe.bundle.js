(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[430],{"./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>injectDestroy$});var DestroyHostComponent_1,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),destroy_host_component=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts"),destroy_host_component_default=__webpack_require__.n(destroy_host_component);let DestroyHostComponent=DestroyHostComponent_1=class DestroyHostComponent{constructor(){this.el=(0,core.inject)(core.ElementRef).nativeElement}static create(container){return container.createComponent(DestroyHostComponent_1,{index:0})}ngAfterViewInit(){this.el.remove()}};DestroyHostComponent=DestroyHostComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-destroy-host",standalone:!0,template:"",styles:[destroy_host_component_default()]})],DestroyHostComponent);var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");class ScopedDestructorSubject extends ReplaySubject.t{constructor(scope){super(1),scope.onDestroy((()=>{this.next(),this.complete()}))}}const DESTRUCTOR_CACHE=new WeakMap;function firstDefinedValue(genFn){for(const value of genFn())if(null!=value)return value;throw new Error("Unreachable")}function injectDestroy$(){const key=function findStableKeyObject(){return firstDefinedValue((function*(){yield(0,core.inject)(core.ElementRef,{optional:!0})?.nativeElement,yield(0,core.inject)(core.ViewContainerRef,{optional:!0}),yield(0,core.inject)(core.NgModuleRef)}))}();let destructor=DESTRUCTOR_CACHE.get(key);if(!destructor){const scope=function findDestructorScope(){return firstDefinedValue((function*(){const vcr=(0,core.inject)(core.ViewContainerRef,{optional:!0});yield vcr&&DestroyHostComponent.create(vcr),yield(0,core.inject)(core.NgModuleRef)}))}();destructor=new ScopedDestructorSubject(scope).asObservable(),DESTRUCTOR_CACHE.set(key,destructor)}return destructor}},"./libs/cdk/injectors/src/lib/select/select-snapshot.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>selectQuerySnapshot,g:()=>selectSnapshot});var select_select=__webpack_require__("./libs/cdk/injectors/src/lib/select/select.ts");const NO_ERROR_SENTINEL_OBJ={};class SnapshotObserver{constructor(){this.value=void 0,this.errorValue=NO_ERROR_SENTINEL_OBJ}get(){if(this.errorValue!==NO_ERROR_SENTINEL_OBJ)throw this.errorValue;return this.value}next(value){this.value=value}error(err){this.value=void 0,this.errorValue=err}}function selectSnapshot(selector){const obs$=(0,select_select.N)(selector,{notifyOnChange:!0}),observer=new SnapshotObserver;return obs$.subscribe(observer),observer.get.bind(observer)}function selectQuerySnapshot(selector,...boundArgs){const get=selectSnapshot(selector);return(...args)=>get()(...boundArgs,...args)}},"./libs/cdk/injectors/src/lib/select/select.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>select$});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),_on_destroy_on_destroy__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts");function select$(selector,options){return(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.yh).select(selector).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.R)((0,_on_destroy_on_destroy__WEBPACK_IMPORTED_MODULE_4__.o)()),function markForCheck(options){const notifyOnChange=options?.notifyOnChange??!0,cdr=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef,{optional:!0});if(notifyOnChange&&cdr){const markFn=()=>cdr.markForCheck();return(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.b)({next:markFn,error:markFn,complete:markFn})}return source=>source}(options))}},"./libs/cdk/state/src/actions/actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Action,W:()=>ActionGroup});const actionTypeRegistry=new Set;function registerActionType(type){!function assertUniqueActionType(type){if(actionTypeRegistry.has(type))throw new Error(`Action type '${type}' is not unique`)}(type),actionTypeRegistry.add(type)}function ActionGroup(group){return type=>Action(`[${group}] ${type}`)}function Action(type){var _class;return registerActionType(type),(_class=class BaseAction{constructor(){this.type=type}}).type=type,_class}},"./libs/state/src/lib/illustrator/illustrator.selectors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>IllustratorSelectors});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),_illustrator_state__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.state.ts");class IllustratorSelectors{static url({url}){return url}static selectedOnHovered({selectedOnHover}){return selectedOnHover}static selectedOnClicked({selectedOnClick}){return selectedOnClick}static mapping({mapping}){return mapping}}(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Qf)([_illustrator_state__WEBPACK_IMPORTED_MODULE_2__.K]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:returntype",Object)],IllustratorSelectors,"url",null),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Qf)([_illustrator_state__WEBPACK_IMPORTED_MODULE_2__.K]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:returntype",Object)],IllustratorSelectors,"selectedOnHovered",null),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Qf)([_illustrator_state__WEBPACK_IMPORTED_MODULE_2__.K]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:returntype",Object)],IllustratorSelectors,"selectedOnClicked",null),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Qf)([_illustrator_state__WEBPACK_IMPORTED_MODULE_2__.K]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:returntype",Array)],IllustratorSelectors,"mapping",null)},"./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host { display: none }",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/tooltip/tooltip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host .tooltip {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  box-shadow: 1px 0.125rem 1rem 0.125rem rgba(0, 0, 0, 0.16);\n  border-radius: 0.5rem;\n  padding: 1rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/behavioral/src/lib/medical-illustration-behavior/medical-illustration-behavior.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host hra-label-box {\n  border-bottom: 0.063rem solid #d3d3d3;\n  width: 100%;\n  height: 3.5rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/interactive-svg/interactive-svg.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".svg {\n  max-height: calc(100vh - 14rem);\n  overflow-y: auto;\n}\n\nsvg {\n  max-height: calc(100vh - 10rem);\n  width: 100%;\n}\n\n[id^=Crosswalk] :is(path, polygon, polyline) {\n  fill: transparent;\n  stroke: transparent;\n}\n.hover-active [id^=Crosswalk] g:hover > :is(path, polygon, polyline), .hover-active [id^=Crosswalk] g > g:hover > :is(path, polygon, polyline),\n[id^=Crosswalk] .click-active {\n  fill: hsl(0, 100%, 50%);\n  mix-blend-mode: saturation;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/behavioral/src/lib/medical-illustration-behavior/medical-illustration-behavior.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>medical_illustration_behavior_component_stories});var illustrator_state=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.state.ts"),illustrator_actions=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.actions.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var medical_illustration_behavior_componentngResource=__webpack_require__("./libs/components/behavioral/src/lib/medical-illustration-behavior/medical-illustration-behavior.component.scss?ngResource"),medical_illustration_behavior_componentngResource_default=__webpack_require__.n(medical_illustration_behavior_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),select_snapshot=__webpack_require__("./libs/cdk/injectors/src/lib/select/select-snapshot.ts"),dispatch=__webpack_require__("./libs/cdk/injectors/src/lib/dispatch/dispatch.ts"),label_box_component=__webpack_require__("./libs/components/atoms/src/lib/label-box/label-box.component.ts");var interactive_svg_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/interactive-svg/interactive-svg.component.scss?ngResource"),interactive_svg_componentngResource_default=__webpack_require__.n(interactive_svg_componentngResource),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2020/overlay.mjs");var _class,tooltip_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/tooltip/tooltip.component.scss?ngResource"),tooltip_componentngResource_default=__webpack_require__.n(tooltip_componentngResource);let TooltipComponent=((_class=class TooltipComponent{constructor(){this.text=""}}).propDecorators={text:[{type:core.Input}]},_class);TooltipComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-ui-tooltip",standalone:!0,imports:[common.CommonModule],template:'<div class="tooltip">{{ text }}</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[tooltip_componentngResource_default()]})],TooltipComponent);var interactive_svg_component_class,lib_esmodule=__webpack_require__("./node_modules/ng-inline-svg-2/lib_esmodule/index.js"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),debounce=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounce.js"),timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),fromEventPattern=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");const TOOLTIP_POSITIONS=[{originX:"center",originY:"center",overlayX:"start",overlayY:"center",offsetX:8},{originX:"center",originY:"center",overlayX:"end",overlayY:"center",offsetX:-8},{originX:"center",originY:"center",overlayX:"center",overlayY:"top",offsetY:8},{originX:"center",originY:"center",overlayX:"center",overlayY:"bottom",offsetY:-8}];let InteractiveSvgComponent=((interactive_svg_component_class=class InteractiveSvgComponent{constructor(){this.mapping=[],this.nodeHover=new core.EventEmitter,this.nodeClick=new core.EventEmitter,this.NEVER_EVAL_SCRIPTS="never",this.TOOLTIP_POSITIONS=TOOLTIP_POSITIONS,this.nodeHoverData$=new BehaviorSubject.X(void 0),this.nodeHoverDelayedData$=this.nodeHoverData$.pipe((0,debounce.D)((event=>(0,timer.H)(event?200:0)))),this.renderer=(0,core.inject)(core.Renderer2),this.destroy$=new Subject.x,this.highlightedElements=[]}ngOnChanges(changes){"highlightId"in changes&&(this.resetHighlight(),this.setHighlight())}setHighlight(){const{mapping,highlightId,crosswalkEl}=this,entry=mapping.find((({ontologyId})=>ontologyId===highlightId));if(!entry||!crosswalkEl)return;let id=this.encodeId(entry.id);const element=crosswalkEl.querySelector(`#${id}`);if(!element)return;"g"!==element.nodeName&&(id=element.parentElement?.id??"");const elements=crosswalkEl.querySelectorAll(`#${id} :is(path, polygon, polyline)`);this.highlightedElements=Array.from(elements),elements.forEach((el=>el.classList.add("click-active")))}resetHighlight(){for(const el of this.highlightedElements)el.classList.remove("click-active");this.highlightedElements=[]}ngOnDestroy(){this.clear()}setSvgElement(el){this.clear(),this.crosswalkEl=el.querySelector('[id^="Crosswalk"]')??void 0,this.crosswalkEl&&(this.renderer.appendChild(el,this.crosswalkEl),this.attachCrosswalkHover(this.crosswalkEl))}formatNodeName(name){return name.replace(/_/g," ")}attachCrosswalkHover(el){this.attachEvent(el,"mouseover").subscribe((event=>this.onCrosswalkHover(event))),this.attachEvent(el,"mouseout").subscribe((()=>this.onCrosswalkHover(void 0))),this.attachEvent(el,"click").subscribe((event=>this.nodeClick.emit(this.getNode(event))))}onCrosswalkHover(event){if(event){const node=this.getNode(event);node&&(this.nodeHoverData$.next({node:node.label,origin:{x:event.clientX,y:event.clientY}}),this.nodeHover.emit(node))}else this.nodeHoverData$.next(void 0),this.nodeHover.emit()}clear(){this.destroy$.next(),this.destroy$.complete(),this.destroy$=new Subject.x}getNode(event){const idCollection=[event.target.id,event.target.parentElement?.id??"",event.target.parentElement?.parentElement?.id??""];for(const id of idCollection){const decodedID=this.decodeId(id),match=this.mapping.find((item=>item.id?.toLowerCase()===decodedID.toLowerCase()));if(match)return match}}decodeId(id){return id.replace(/_x([\da-f]+)_/gi,((_match,hex)=>String.fromCharCode(Number.parseInt(hex,16))))}encodeId(id){return id.replace(/[^a-z0-9-]/gi,(match=>`_x${match.charCodeAt(0).toString(16).toUpperCase()}_`))}attachEvent(el,event){const{renderer,destroy$}=this;return(0,fromEventPattern.R)((handler=>renderer.listen(el,event,handler)),((_handler,unlisten)=>unlisten())).pipe((0,takeUntil.R)(destroy$))}}).propDecorators={url:[{type:core.Input}],mapping:[{type:core.Input}],highlightId:[{type:core.Input}],nodeHover:[{type:core.Output}],nodeClick:[{type:core.Output}]},interactive_svg_component_class);InteractiveSvgComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-interactive-svg",standalone:!0,imports:[common.CommonModule,lib_esmodule.vi,overlay.U8,TooltipComponent],template:'<div\n  *ngIf="url"\n  class="svg"\n  [class.hover-active]="nodeHoverData$ | async"\n  [inlineSVG]="url"\n  [evalScripts]="NEVER_EVAL_SCRIPTS"\n  (onSVGInserted)="setSvgElement($event)"\n></div>\n\n<ng-container *ngIf="nodeHoverDelayedData$ | async as hover">\n  <ng-template\n    cdkConnectedOverlay\n    cdkConnectedOverlayPanelClass="hra-interactive-svg-tooltip-panel"\n    [cdkConnectedOverlayOrigin]="hover.origin"\n    [cdkConnectedOverlayPositions]="TOOLTIP_POSITIONS"\n    [cdkConnectedOverlayViewportMargin]="16"\n    [cdkConnectedOverlayOpen]="true"\n  >\n    <hra-ui-tooltip [text]="formatNodeName(hover.node)"></hra-ui-tooltip>\n  </ng-template>\n</ng-container>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.ShadowDom,styles:[interactive_svg_componentngResource_default()]})],InteractiveSvgComponent);var illustrator_selectors=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.selectors.ts"),active_ftu_selectors=__webpack_require__("./libs/state/src/lib/active-ftu/active-ftu.selectors.ts"),tissue_library_selectors=__webpack_require__("./libs/state/src/lib/tissue-library/tissue-library.selectors.ts");let MedicalIllustrationBehaviorComponent=class MedicalIllustrationBehaviorComponent{constructor(){this.currentUrl=(0,select_snapshot.g)(illustrator_selectors.b.url),this.mapping=(0,select_snapshot.g)(illustrator_selectors.b.mapping),this.iri=(0,select_snapshot.g)(active_ftu_selectors.K.iri),this.tissues=(0,select_snapshot.g)(tissue_library_selectors.N.tissues),this.updateNodeOnHover=(0,dispatch.WI)(illustrator_actions.A1),this.updateNodeOnClicked=(0,dispatch.WI)(illustrator_actions.im)}get tissueTitle(){const iri=this.iri(),tissues=this.tissues();return iri?tissues[iri].label:""}};MedicalIllustrationBehaviorComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ftu-medical-illustration-behavior",standalone:!0,imports:[common.CommonModule,InteractiveSvgComponent,label_box_component.d],template:'<hra-label-box>{{ tissueTitle }}</hra-label-box>\n<hra-interactive-svg\n  [url]="currentUrl()"\n  [mapping]="mapping()"\n  (nodeHover)="updateNodeOnHover($event)"\n  (nodeClick)="updateNodeOnClicked($event)"\n>\n</hra-interactive-svg>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[medical_illustration_behavior_componentngResource_default()]})],MedicalIllustrationBehaviorComponent);var ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js");const medical_illustration_behavior_component_stories={title:"MedicalIllustrationBehaviorComponent",component:MedicalIllustrationBehaviorComponent,parameters:{state:{states:[illustrator_state.K],actions:[new illustrator_actions.q5("https://example.com/Kidney/Descending_Thin_Loop_of_Henle")]}},decorators:[(0,dist.moduleMetadata)({imports:[ngxs_store.$l.forRoot([illustrator_state.K])]})]},Primary=(args=>({props:args})).bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...Primary.parameters?.docs?.source}}}}}]);