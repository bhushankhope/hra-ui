(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[430],{"./libs/state/src/lib/cell-summary/cell-summary.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AG:()=>Reset,X8:()=>ComputeAggregates,q5:()=>Load});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("CellSummary");class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class ComputeAggregates extends(Action("Compute Aggregates")){}class Reset extends(Action("Reset")){}},"./libs/state/src/lib/download/download.action.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R2:()=>ClearEntries,UW:()=>Download,h6:()=>RegisterFormat,i2:()=>AddEntry,q5:()=>Load});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("Download");class RegisterFormat extends(Action("Register Format")){constructor(format){super(),this.format=format}}class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class AddEntry extends(Action("Add")){constructor(id,entry){super(),this.id=id,this.entry=entry}}class ClearEntries extends(Action("Clear")){}class Download extends(Action("Download")){constructor(format){super(),this.format=format}}},"./libs/state/src/lib/source-refs/source-refs.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Reset,q:()=>Load});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("SourceRefs");class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class Reset extends(Action("Reset")){}},"./libs/state/src/lib/source-refs/source-refs.state.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>SourceRefsState});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_hra_ui_services__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/services/src/lib/ftu-data/ftu-data.service.ts"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_source_refs_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/state/src/lib/source-refs/source-refs.actions.ts");let SourceRefsState=class SourceRefsState{constructor(){this.dataService=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_hra_ui_services__WEBPACK_IMPORTED_MODULE_2__.q)}load({setState},{iri}){return this.dataService.getSourceReferences(iri).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.b)(setState))}reset({setState}){setState([])}};(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_source_refs_actions__WEBPACK_IMPORTED_MODULE_5__.q),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:paramtypes",[Object,_source_refs_actions__WEBPACK_IMPORTED_MODULE_5__.q]),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:returntype",rxjs__WEBPACK_IMPORTED_MODULE_6__.y)],SourceRefsState.prototype,"load",null),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_source_refs_actions__WEBPACK_IMPORTED_MODULE_5__.A),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:returntype",void 0)],SourceRefsState.prototype,"reset",null),SourceRefsState=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.ZM)({name:"sourceReferences",defaults:[]}),(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()],SourceRefsState)},"./libs/components/behavioral/src/lib/medical-illustration-behavior/medical-illustration-behavior.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host hra-label-box {\n  border-bottom: 0.063rem solid #d3d3d3;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/interactive-svg/interactive-svg.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tooltip {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  box-shadow: 1px 0.125rem 1rem 0.125rem rgba(0, 0, 0, 0.16);\n  border-radius: 0.5rem;\n  padding: 1rem;\n}\n\n[id^=Crosswalk] :is(path, polygon, polyline) {\n  fill: transparent;\n  stroke: transparent;\n}\n.hover-active [id^=Crosswalk] g:hover > :is(path, polygon, polyline) {\n  fill: hsl(0, 100%, 50%);\n  mix-blend-mode: saturation;\n}\n.hover-active [id^=Crosswalk] g > g:hover :is(path, polygon, polyline) {\n  fill: hsl(0, 100%, 50%);\n  mix-blend-mode: saturation;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/behavioral/src/lib/medical-illustration-behavior/medical-illustration-behavior.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>medical_illustration_behavior_component_stories});var illustrator_state=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.state.ts"),illustrator_actions=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.actions.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var medical_illustration_behavior_componentngResource=__webpack_require__("./libs/components/behavioral/src/lib/medical-illustration-behavior/medical-illustration-behavior.component.scss?ngResource"),medical_illustration_behavior_componentngResource_default=__webpack_require__.n(medical_illustration_behavior_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),select_snapshot=__webpack_require__("./libs/cdk/injectors/src/lib/select/select-snapshot.ts"),dispatch=__webpack_require__("./libs/cdk/injectors/src/lib/dispatch/dispatch.ts"),label_box_component=__webpack_require__("./libs/components/atoms/src/lib/label-box/label-box.component.ts");var _class,interactive_svg_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/interactive-svg/interactive-svg.component.scss?ngResource"),interactive_svg_componentngResource_default=__webpack_require__.n(interactive_svg_componentngResource),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2020/overlay.mjs"),lib_esmodule=__webpack_require__("./node_modules/ng-inline-svg-2/lib_esmodule/index.js"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),debounce=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounce.js"),timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),fromEventPattern=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");const TOOLTIP_POSITIONS=[{originX:"center",originY:"center",overlayX:"start",overlayY:"center",offsetX:8},{originX:"center",originY:"center",overlayX:"end",overlayY:"center",offsetX:-8},{originX:"center",originY:"center",overlayX:"center",overlayY:"top",offsetY:8},{originX:"center",originY:"center",overlayX:"center",overlayY:"bottom",offsetY:-8}];let InteractiveSvgComponent=((_class=class InteractiveSvgComponent{constructor(){this.mapping=[],this.nodeHover=new core.EventEmitter,this.NEVER_EVAL_SCRIPTS="never",this.TOOLTIP_POSITIONS=TOOLTIP_POSITIONS,this.nodeHoverData$=new BehaviorSubject.X(void 0),this.nodeHoverDelayedData$=this.nodeHoverData$.pipe((0,debounce.D)((event=>(0,timer.H)(event?200:0)))),this.renderer=(0,core.inject)(core.Renderer2),this.destroy$=new Subject.x}ngOnDestroy(){this.clear()}setSvgElement(el){this.clear();const crosswalkEl=el.querySelector('[id^="Crosswalk"]');crosswalkEl&&(this.renderer.appendChild(el,crosswalkEl),this.attachCrosswalkHover(crosswalkEl))}formatNodeName(name){return name.replace(/_/g," ")}attachCrosswalkHover(el){this.attachEvent(el,"mouseover").subscribe(this.onCrosswalkHover.bind(this)),this.attachEvent(el,"mouseout").subscribe((()=>this.nodeHoverData$.next(void 0)))}onCrosswalkHover(event){const node=this.getNode(event);node&&(this.nodeHoverData$.next({node:node.label,origin:{x:event.clientX,y:event.clientY}}),this.nodeHover.emit(node))}clear(){this.destroy$.next(),this.destroy$.complete(),this.destroy$=new Subject.x}getNode(event){const idCollection=[event.target.id,event.target.parentElement?.id??"",event.target.parentElement?.parentElement?.id??""];for(const id of idCollection){const decodedID=this.decodeId(id),match=this.mapping.find((item=>item.name?.toLowerCase()===decodedID.toLowerCase()));if(match)return match}}decodeId(id){return id.replace(/_x([\da-f]+)_/gi,((_match,hex)=>String.fromCharCode(Number.parseInt(hex,16))))}attachEvent(el,event){const{renderer,destroy$}=this;return(0,fromEventPattern.R)((handler=>renderer.listen(el,event,handler)),((_handler,unlisten)=>unlisten())).pipe((0,takeUntil.R)(destroy$))}}).propDecorators={url:[{type:core.Input}],mapping:[{type:core.Input}],nodeHover:[{type:core.Output}]},_class);InteractiveSvgComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-interactive-svg",standalone:!0,imports:[common.CommonModule,lib_esmodule.vi,overlay.U8],template:'<div\n  *ngIf="url"\n  class="svg"\n  [class.hover-active]="nodeHoverData$ | async"\n  [inlineSVG]="url"\n  [evalScripts]="NEVER_EVAL_SCRIPTS"\n  (onSVGInserted)="setSvgElement($event)"\n></div>\n\n<ng-container *ngIf="nodeHoverDelayedData$ | async as hover">\n  <ng-template\n    cdkConnectedOverlay\n    cdkConnectedOverlayPanelClass="hra-interactive-svg-tooltip-panel"\n    [cdkConnectedOverlayOrigin]="hover.origin"\n    [cdkConnectedOverlayPositions]="TOOLTIP_POSITIONS"\n    [cdkConnectedOverlayViewportMargin]="16"\n    [cdkConnectedOverlayOpen]="true"\n  >\n    <div class="tooltip">\n      {{ formatNodeName(hover.node) }}\n    </div>\n  </ng-template>\n</ng-container>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,styles:[interactive_svg_componentngResource_default()]})],InteractiveSvgComponent);var illustrator_selectors=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.selectors.ts"),ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),cell_summary_actions=__webpack_require__("./libs/state/src/lib/cell-summary/cell-summary.actions.ts"),source_refs_actions=__webpack_require__("./libs/state/src/lib/source-refs/source-refs.actions.ts"),source_refs_state=__webpack_require__("./libs/state/src/lib/source-refs/source-refs.state.ts");const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("ActiveFtu");class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class Clear extends(Action("Clear")){}class Reset extends(Action("Reset")){}var download_action=__webpack_require__("./libs/state/src/lib/download/download.action.ts");let ActiveFtuState=class ActiveFtuState{load({getState,patchState,dispatch},{iri}){if(getState().iri!==iri)return dispatch([new cell_summary_actions.q5(iri),new illustrator_actions.q5(iri),new download_action.q5(iri),new source_refs_actions.q(iri)]).pipe((0,tap.b)((()=>patchState({iri}))))}clear({patchState}){patchState({iri:void 0})}reset({dispatch}){return dispatch([new cell_summary_actions.AG,new illustrator_actions.AG,new source_refs_actions.A])}};(0,tslib_es6.gn)([(0,ngxs_store.aU)(Load,{cancelUncompleted:!0}),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,Load]),(0,tslib_es6.w6)("design:returntype",Object)],ActiveFtuState.prototype,"load",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)([Clear,Reset]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",void 0)],ActiveFtuState.prototype,"clear",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(Reset),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Observable.y)],ActiveFtuState.prototype,"reset",null),ActiveFtuState=(0,tslib_es6.gn)([(0,ngxs_store.ZM)({name:"activeFtu",defaults:{},children:[illustrator_state.K,source_refs_state.b]}),(0,core.Injectable)()],ActiveFtuState);class ActiveFtuSelectors{static isActive({iri}){return void 0!==iri}static iri({iri}){return iri}}(0,tslib_es6.gn)([(0,ngxs_store.Qf)([ActiveFtuState]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Boolean)],ActiveFtuSelectors,"isActive",null),(0,tslib_es6.gn)([(0,ngxs_store.Qf)([ActiveFtuState]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Object)],ActiveFtuSelectors,"iri",null);var tissue_library_selectors=__webpack_require__("./libs/state/src/lib/tissue-library/tissue-library.selectors.ts");let MedicalIllustrationBehaviorComponent=class MedicalIllustrationBehaviorComponent{constructor(){this.currentUrl=(0,select_snapshot.g)(illustrator_selectors.b.url),this.mapping=(0,select_snapshot.g)(illustrator_selectors.b.mapping),this.iri=(0,select_snapshot.g)(ActiveFtuSelectors.iri),this.tissues=(0,select_snapshot.g)(tissue_library_selectors.N.tissues),this.updateNode=(0,dispatch.WI)(illustrator_actions.hb)}get tissueTitle(){const iri=this.iri(),tissues=this.tissues();return iri?tissues[iri].label:""}};MedicalIllustrationBehaviorComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ftu-medical-illustration-behavior",standalone:!0,imports:[common.CommonModule,InteractiveSvgComponent,label_box_component.d],template:'<hra-label-box>{{ tissueTitle }}</hra-label-box>\n<hra-interactive-svg [url]="currentUrl()" [mapping]="mapping()" (nodeHover)="updateNode($event)"> </hra-interactive-svg>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[medical_illustration_behavior_componentngResource_default()]})],MedicalIllustrationBehaviorComponent);const medical_illustration_behavior_component_stories={title:"MedicalIllustrationBehaviorComponent",component:MedicalIllustrationBehaviorComponent,parameters:{state:{states:[illustrator_state.K],actions:[new illustrator_actions.q5("https://example.com/Kidney/Descending_Thin_Loop_of_Henle")]}}},Primary=(args=>({props:args})).bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...Primary.parameters?.docs?.source}}}}}]);