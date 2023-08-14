(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[961],{"./libs/cdk/injectors/src/lib/dispatch/dispatch.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{WI:()=>dispatch});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js");function identity(value){return value}function createActionFactory(type,boundArgs){return(...args)=>new type(...boundArgs,...args)}function dispatchImpl(actionFactory,resultHandler){const store=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.yh);return(...args)=>{const action=actionFactory(...args),obs$=store.dispatch(action);return resultHandler(action,obs$)}}function dispatch(type,...boundArgs){return dispatchImpl(createActionFactory(type,boundArgs),identity)}},"./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>injectDestroy$});var DestroyHostComponent_1,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),destroy_host_component=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts"),destroy_host_component_default=__webpack_require__.n(destroy_host_component);let DestroyHostComponent=DestroyHostComponent_1=class DestroyHostComponent{constructor(){this.el=(0,core.inject)(core.ElementRef).nativeElement}static create(container){return container.createComponent(DestroyHostComponent_1,{index:0})}ngAfterViewInit(){this.el.remove()}};DestroyHostComponent=DestroyHostComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-destroy-host",standalone:!0,template:"",styles:[destroy_host_component_default()]})],DestroyHostComponent);var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");class ScopedDestructorSubject extends ReplaySubject.t{constructor(scope){super(1),scope.onDestroy((()=>{this.next(),this.complete()}))}}const DESTRUCTOR_CACHE=new WeakMap;function firstDefinedValue(genFn){for(const value of genFn())if(null!=value)return value;throw new Error("Unreachable")}function injectDestroy$(){const key=function findStableKeyObject(){return firstDefinedValue((function*(){yield(0,core.inject)(core.ElementRef,{optional:!0})?.nativeElement,yield(0,core.inject)(core.ViewContainerRef,{optional:!0}),yield(0,core.inject)(core.NgModuleRef)}))}();let destructor=DESTRUCTOR_CACHE.get(key);if(!destructor){const scope=function findDestructorScope(){return firstDefinedValue((function*(){const vcr=(0,core.inject)(core.ViewContainerRef,{optional:!0});yield vcr&&DestroyHostComponent.create(vcr),yield(0,core.inject)(core.NgModuleRef)}))}();destructor=new ScopedDestructorSubject(scope).asObservable(),DESTRUCTOR_CACHE.set(key,destructor)}return destructor}},"./libs/cdk/injectors/src/lib/select/select-snapshot.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>selectQuerySnapshot,g:()=>selectSnapshot});var select_select=__webpack_require__("./libs/cdk/injectors/src/lib/select/select.ts");const NO_ERROR_SENTINEL_OBJ={};class SnapshotObserver{constructor(){this.value=void 0,this.errorValue=NO_ERROR_SENTINEL_OBJ}get(){if(this.errorValue!==NO_ERROR_SENTINEL_OBJ)throw this.errorValue;return this.value}next(value){this.value=value}error(err){this.value=void 0,this.errorValue=err}}function selectSnapshot(selector){const obs$=(0,select_select.N)(selector,{notifyOnChange:!0}),observer=new SnapshotObserver;return obs$.subscribe(observer),observer.get.bind(observer)}function selectQuerySnapshot(selector,...boundArgs){const get=selectSnapshot(selector);return(...args)=>get()(...boundArgs,...args)}},"./libs/cdk/injectors/src/lib/select/select.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>select$});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),_on_destroy_on_destroy__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts");function select$(selector,options){return(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.yh).select(selector).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.R)((0,_on_destroy_on_destroy__WEBPACK_IMPORTED_MODULE_4__.o)()),function markForCheck(options){const notifyOnChange=options?.notifyOnChange??!0,cdr=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef,{optional:!0});if(notifyOnChange&&cdr){const markFn=()=>cdr.markForCheck();return(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.b)({next:markFn,error:markFn,complete:markFn})}return source=>source}(options))}},"./libs/cdk/state/src/actions/actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Action,W:()=>ActionGroup});const actionTypeRegistry=new Set;function registerActionType(type){!function assertUniqueActionType(type){if(actionTypeRegistry.has(type))throw new Error(`Action type '${type}' is not unique`)}(type),actionTypeRegistry.add(type)}function ActionGroup(group){return type=>Action(`[${group}] ${type}`)}function Action(type){var _class;return registerActionType(type),(_class=class BaseAction{constructor(){this.type=type}}).type=type,_class}},"./libs/components/atoms/src/lib/label-box/label-box.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>LabelBoxComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var label_box_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/label-box/label-box.component.scss?ngResource"),label_box_componentngResource_default=__webpack_require__.n(label_box_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LabelBoxComponent=class LabelBoxComponent{};LabelBoxComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-label-box",standalone:!0,imports:[common.CommonModule],template:'<ng-content></ng-content>\n\n<div class="filler"></div>\n\n<ng-content select=".end"></ng-content>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[label_box_componentngResource_default()]})],LabelBoxComponent)},"./libs/services/src/lib/ftu-data/ftu-data.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>FtuDataService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let FtuDataService=class FtuDataService{};FtuDataService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()],FtuDataService)},"./libs/services/src/lib/tissue-library/tissue-library.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>TissueLibraryService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let TissueLibraryService=class TissueLibraryService{};TissueLibraryService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()],TissueLibraryService)},"./libs/state/src/lib/active-ftu/active-ftu.selectors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>ActiveFtuSelectors});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),cell_summary_actions=__webpack_require__("./libs/state/src/lib/cell-summary/cell-summary.actions.ts"),illustrator_actions=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.actions.ts"),illustrator_state=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.state.ts"),source_refs_actions=__webpack_require__("./libs/state/src/lib/source-refs/source-refs.actions.ts"),source_refs_state=__webpack_require__("./libs/state/src/lib/source-refs/source-refs.state.ts");const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("ActiveFtu");class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class Clear extends(Action("Clear")){}class Reset extends(Action("Reset")){}var download_action=__webpack_require__("./libs/state/src/lib/download/download.action.ts");let ActiveFtuState=class ActiveFtuState{load({getState,patchState,dispatch},{iri}){if(getState().iri!==iri)return dispatch([new cell_summary_actions.q5(iri),new illustrator_actions.q5(iri),new download_action.q5(iri),new source_refs_actions.q(iri)]).pipe((0,tap.b)((()=>patchState({iri}))))}clear({patchState}){patchState({iri:void 0})}reset({dispatch}){return dispatch([new cell_summary_actions.AG,new illustrator_actions.AG,new source_refs_actions.A])}};(0,tslib_es6.gn)([(0,ngxs_store.aU)(Load,{cancelUncompleted:!0}),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,Load]),(0,tslib_es6.w6)("design:returntype",Object)],ActiveFtuState.prototype,"load",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)([Clear,Reset]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",void 0)],ActiveFtuState.prototype,"clear",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(Reset),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Observable.y)],ActiveFtuState.prototype,"reset",null),ActiveFtuState=(0,tslib_es6.gn)([(0,ngxs_store.ZM)({name:"activeFtu",defaults:{},children:[illustrator_state.K,source_refs_state.b]}),(0,core.Injectable)()],ActiveFtuState);class ActiveFtuSelectors{static isActive({iri}){return void 0!==iri}static iri({iri}){return iri}}(0,tslib_es6.gn)([(0,ngxs_store.Qf)([ActiveFtuState]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Boolean)],ActiveFtuSelectors,"isActive",null),(0,tslib_es6.gn)([(0,ngxs_store.Qf)([ActiveFtuState]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Object)],ActiveFtuSelectors,"iri",null)},"./libs/state/src/lib/cell-summary/cell-summary.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AG:()=>Reset,X8:()=>ComputeAggregates,q5:()=>Load});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("CellSummary");class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class ComputeAggregates extends(Action("Compute Aggregates")){}class Reset extends(Action("Reset")){}},"./libs/state/src/lib/download/download.action.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R2:()=>ClearEntries,UW:()=>Download,h6:()=>RegisterFormat,i2:()=>AddEntry,q5:()=>Load});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("Download");class RegisterFormat extends(Action("Register Format")){constructor(format){super(),this.format=format}}class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class AddEntry extends(Action("Add")){constructor(id,entry){super(),this.id=id,this.entry=entry}}class ClearEntries extends(Action("Clear")){}class Download extends(Action("Download")){constructor(format){super(),this.format=format}}},"./libs/state/src/lib/illustrator/illustrator.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AG:()=>Reset,Yp:()=>ClearSelection,hb:()=>SetSelection,q5:()=>Load});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("Illustrator");class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class SetSelection extends(Action("Set Selection")){constructor(selected){super(),this.selected=selected}}class ClearSelection extends(Action("Clear Selection")){}class Reset extends(Action("Reset")){}},"./libs/state/src/lib/illustrator/illustrator.state.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>IllustratorState});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_hra_ui_services__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/services/src/lib/ftu-data/ftu-data.service.ts"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_illustrator_actions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./libs/state/src/lib/illustrator/illustrator.actions.ts");let IllustratorState=class IllustratorState{constructor(){this.dataService=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_hra_ui_services__WEBPACK_IMPORTED_MODULE_2__.q)}load({patchState},{iri}){const url$=this.dataService.getIllustrationUrl(iri),mapping$=this.dataService.getIllustrationMapping(iri);return(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.D)({url:url$,mapping:mapping$}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.b)((result=>patchState({...result,selected:void 0}))))}setSelection({patchState},{selected}){patchState({selected})}clearSelection({patchState}){patchState({selected:void 0})}reset({setState}){setState({mapping:[]})}};(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_illustrator_actions__WEBPACK_IMPORTED_MODULE_6__.q5,{cancelUncompleted:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:paramtypes",[Object,_illustrator_actions__WEBPACK_IMPORTED_MODULE_6__.q5]),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:returntype",rxjs__WEBPACK_IMPORTED_MODULE_7__.y)],IllustratorState.prototype,"load",null),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_illustrator_actions__WEBPACK_IMPORTED_MODULE_6__.hb),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:paramtypes",[Object,_illustrator_actions__WEBPACK_IMPORTED_MODULE_6__.hb]),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:returntype",void 0)],IllustratorState.prototype,"setSelection",null),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_illustrator_actions__WEBPACK_IMPORTED_MODULE_6__.Yp),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:returntype",void 0)],IllustratorState.prototype,"clearSelection",null),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_illustrator_actions__WEBPACK_IMPORTED_MODULE_6__.AG),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:returntype",void 0)],IllustratorState.prototype,"reset",null),IllustratorState=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.ZM)({name:"illustrator",defaults:{mapping:[]}}),(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()],IllustratorState)},"./libs/state/src/lib/source-refs/source-refs.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Reset,q:()=>Load});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("SourceRefs");class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class Reset extends(Action("Reset")){}},"./libs/state/src/lib/source-refs/source-refs.state.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>SourceRefsState});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_hra_ui_services__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/services/src/lib/ftu-data/ftu-data.service.ts"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_source_refs_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/state/src/lib/source-refs/source-refs.actions.ts");let SourceRefsState=class SourceRefsState{constructor(){this.dataService=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_hra_ui_services__WEBPACK_IMPORTED_MODULE_2__.q)}load({setState},{iri}){return this.dataService.getSourceReferences(iri).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.b)(setState))}reset({setState}){setState([])}};(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_source_refs_actions__WEBPACK_IMPORTED_MODULE_5__.q),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:paramtypes",[Object,_source_refs_actions__WEBPACK_IMPORTED_MODULE_5__.q]),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:returntype",rxjs__WEBPACK_IMPORTED_MODULE_6__.y)],SourceRefsState.prototype,"load",null),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_source_refs_actions__WEBPACK_IMPORTED_MODULE_5__.A),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:returntype",void 0)],SourceRefsState.prototype,"reset",null),SourceRefsState=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.ZM)({name:"sourceReferences",defaults:[]}),(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()],SourceRefsState)},"./libs/state/src/lib/tissue-library/tissue-library.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>Load});var _hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/cdk/state/src/actions/actions.ts");class Load extends((0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.a)("[TissueLibrary] Load Tissue Data")){}},"./libs/state/src/lib/tissue-library/tissue-library.selectors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>TissueLibrarySelectors});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),_tissue_library_state__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/state/src/lib/tissue-library/tissue-library.state.ts");class TissueLibrarySelectors{static tissues(state){return state.nodes}}(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Qf)([_tissue_library_state__WEBPACK_IMPORTED_MODULE_2__.o]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:returntype",Object)],TissueLibrarySelectors,"tissues",null)},"./libs/state/src/lib/tissue-library/tissue-library.state.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>TissueLibraryState});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_hra_ui_services__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/services/src/lib/tissue-library/tissue-library.service.ts"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_tissue_library_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/state/src/lib/tissue-library/tissue-library.actions.ts");let TissueLibraryState=class TissueLibraryState{constructor(){this.dataService=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_hra_ui_services__WEBPACK_IMPORTED_MODULE_2__.K)}setActive(ctx){return this.dataService.getTissueLibrary().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.b)((data=>ctx.setState(data))))}};(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_tissue_library_actions__WEBPACK_IMPORTED_MODULE_5__.q),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:paramtypes",[Object]),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.w6)("design:returntype",rxjs__WEBPACK_IMPORTED_MODULE_6__.y)],TissueLibraryState.prototype,"setActive",null),TissueLibraryState=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.ZM)({name:"tissueLibrary"}),(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()],TissueLibraryState)},"./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host { display: none }",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/label-box/label-box.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 2rem;\n  background: #f8f9fa;\n}\n:host .filler {\n  flex-grow: 1;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);