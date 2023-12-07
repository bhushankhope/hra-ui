(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[128],{"./libs/cdk/injectors/src/lib/dispatch/dispatch.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{WI:()=>dispatch});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js");function identity(value){return value}function createActionFactory(type,boundArgs){return(...args)=>new type(...boundArgs,...args)}function dispatchImpl(actionFactory,resultHandler){const store=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.yh);return(...args)=>{const action=actionFactory(...args),obs$=store.dispatch(action);return resultHandler(action,obs$)}}function dispatch(type,...boundArgs){return dispatchImpl(createActionFactory(type,boundArgs),identity)}},"./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>injectDestroy$});var DestroyHostComponent_1,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),destroy_host_component=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts"),destroy_host_component_default=__webpack_require__.n(destroy_host_component);let DestroyHostComponent=DestroyHostComponent_1=class DestroyHostComponent{constructor(){this.el=(0,core.inject)(core.ElementRef).nativeElement}static create(container){return container.createComponent(DestroyHostComponent_1,{index:0})}ngAfterViewInit(){this.el.remove()}};DestroyHostComponent=DestroyHostComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-destroy-host",standalone:!0,template:"",styles:[destroy_host_component_default()]})],DestroyHostComponent);var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");class ScopedDestructorSubject extends ReplaySubject.t{constructor(scope){super(1),scope.onDestroy((()=>{this.next(),this.complete()}))}}const DESTRUCTOR_CACHE=new WeakMap;function firstDefinedValue(genFn){for(const value of genFn())if(null!=value)return value;throw new Error("Unreachable")}function injectDestroy$(){const key=function findStableKeyObject(){return firstDefinedValue((function*(){yield(0,core.inject)(core.ElementRef,{optional:!0})?.nativeElement,yield(0,core.inject)(core.ViewContainerRef,{optional:!0}),yield(0,core.inject)(core.NgModuleRef)}))}();let destructor=DESTRUCTOR_CACHE.get(key);if(!destructor){const scope=function findDestructorScope(){return firstDefinedValue((function*(){const vcr=(0,core.inject)(core.ViewContainerRef,{optional:!0});yield vcr&&DestroyHostComponent.create(vcr),yield(0,core.inject)(core.NgModuleRef)}))}();destructor=new ScopedDestructorSubject(scope).asObservable(),DESTRUCTOR_CACHE.set(key,destructor)}return destructor}},"./libs/cdk/injectors/src/lib/select/select-snapshot.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>selectQuerySnapshot,g:()=>selectSnapshot});var select_select=__webpack_require__("./libs/cdk/injectors/src/lib/select/select.ts");const NO_ERROR_SENTINEL_OBJ={};class SnapshotObserver{constructor(){this.value=void 0,this.errorValue=NO_ERROR_SENTINEL_OBJ}get(){if(this.errorValue!==NO_ERROR_SENTINEL_OBJ)throw this.errorValue;return this.value}next(value){this.value=value}error(err){this.value=void 0,this.errorValue=err}}function selectSnapshot(selector){const obs$=(0,select_select.N)(selector,{notifyOnChange:!0}),observer=new SnapshotObserver;return obs$.subscribe(observer),observer.get.bind(observer)}function selectQuerySnapshot(selector,...boundArgs){const get=selectSnapshot(selector);return(...args)=>get()(...boundArgs,...args)}},"./libs/cdk/injectors/src/lib/select/select.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>select$});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),_on_destroy_on_destroy__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts");function select$(selector,options){return(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.yh).select(selector).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.R)((0,_on_destroy_on_destroy__WEBPACK_IMPORTED_MODULE_4__.o)()),function markForCheck(options){const notifyOnChange=options?.notifyOnChange??!0,cdr=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef,{optional:!0});if(notifyOnChange&&cdr){const markFn=()=>cdr.markForCheck();return(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.b)({next:markFn,error:markFn,complete:markFn})}return source=>source}(options))}},"./libs/cdk/state/src/actions/actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Action,W:()=>ActionGroup});const actionTypeRegistry=new Set;function registerActionType(type){!function assertUniqueActionType(type){if(actionTypeRegistry.has(type))throw new Error(`Action type '${type}' is not unique`)}(type),actionTypeRegistry.add(type)}function ActionGroup(group){return type=>Action(`[${group}] ${type}`)}function Action(type){var _class;return registerActionType(type),(_class=class BaseAction{constructor(){this.type=type}}).type=type,_class}},"./libs/cdk/state/src/link-registry/link-registry.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AU:()=>LoadFromYaml,Fg:()=>Navigate,Gg:()=>AddMany,mm:()=>Add,tI:()=>AddFromYaml});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("LinkRegistry");class Add extends(Action("Add")){constructor(id,entry){super(),this.id=id,this.entry=entry}}class AddMany extends(Action("Add Many")){constructor(entries){super(),this.entries=entries}}class AddFromYaml extends(Action("Add from Yaml")){constructor(yaml){super(),this.yaml=yaml}}class LoadFromYaml extends(Action("Load from Yaml")){constructor(url){super(),this.url=url}}class Navigate extends(Action("Navigate")){constructor(id,extras={}){super(),this.id=id,this.extras=extras}}},"./libs/cdk/state/src/link-registry/link-registry.model.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{HW:()=>createLinkId,Ry:()=>EMPTY_LINK,Un:()=>LinkType,l$:()=>LINK_REGISTRY_SCHEMA});var LinkType,zod__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/zod/lib/index.mjs");!function(LinkType){LinkType.Internal="internal",LinkType.External="external"}(LinkType||(LinkType={}));const EXTERNAL_LINK_SCHEMA=zod__WEBPACK_IMPORTED_MODULE_0__.z.object({type:zod__WEBPACK_IMPORTED_MODULE_0__.z.literal(LinkType.External),url:zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),rel:zod__WEBPACK_IMPORTED_MODULE_0__.z.string().default("noopener"),target:zod__WEBPACK_IMPORTED_MODULE_0__.z.string()}).partial({rel:!0,target:!0}),INTERNAL_LINK_SCHEMA=zod__WEBPACK_IMPORTED_MODULE_0__.z.object({type:zod__WEBPACK_IMPORTED_MODULE_0__.z.literal(LinkType.Internal),commands:zod__WEBPACK_IMPORTED_MODULE_0__.z.any().array(),extras:zod__WEBPACK_IMPORTED_MODULE_0__.z.object({queryParams:zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.any()).nullable(),fragment:zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),queryParamsHandling:zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(["merge","preserve",""]).nullable(),preserveFragment:zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),onSameUrlNavigation:zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("reload"),skipLocationChange:zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),replaceUrl:zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean()}).partial()}).partial({extras:!0}),LINK_REGISTRY_SCHEMA=zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.string().transform((id=>`LinkId:'${id}'`)).brand("LinkId"),zod__WEBPACK_IMPORTED_MODULE_0__.z.discriminatedUnion("type",[EXTERNAL_LINK_SCHEMA,INTERNAL_LINK_SCHEMA]));function createLinkId(id){return LINK_REGISTRY_SCHEMA.keySchema.parse(id)}const EMPTY_LINK=createLinkId("@@__EMPTY__")},"./libs/services/src/lib/ftu-data/ftu-data.impl.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ip:()=>FTU_DATA_IMPL_ENDPOINTS});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),http=__webpack_require__("./node_modules/@angular/common/fesm2020/http.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),link_registry_model=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.model.ts"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),firstValueFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),lib=__webpack_require__("./node_modules/zod/lib/index.mjs");const IRI=lib.z.string().url().brand("URL").brand("IRI");var ftu_data_service=__webpack_require__("./libs/services/src/lib/ftu-data/ftu-data.service.ts");const FTU_DATA_IMPL_ENDPOINTS=new core.InjectionToken("Endpoints"),FTU_DATA_IMPL_FILE_FORMAT_MAPPING=new core.InjectionToken("Mapping of file formats",{providedIn:"root",factory:()=>({"image/svg+xml":"svg","image/png":"png","application/pdf":"ai"})}),ID_ITEM=lib.z.object({"@id":IRI}),ILLUSTRATIONS=lib.z.object({"@graph":ID_ITEM.extend({"@id":IRI,label:lib.z.string(),organ_id:lib.z.string(),organ_label:lib.z.string(),representation_of:lib.z.string(),illustration_files:lib.z.object({file:lib.z.string(),file_format:lib.z.string()}).array(),mapping:lib.z.object({svg_id:lib.z.string(),svg_group_id:lib.z.string(),label:lib.z.string(),representation_of:lib.z.string()}).array()}).array()}),DATASETS=lib.z.object({"@graph":ID_ITEM.extend({"@id":IRI,data_sources:lib.z.object({label:lib.z.string(),description:lib.z.string(),link:lib.z.string()}).array()}).array()}),CELL_SOURCE_ITEM=lib.z.object({cell_source:IRI}),CELL_SUMMARIES=lib.z.object({"@graph":CELL_SOURCE_ITEM.extend({cell_source:IRI,biomarker_type:lib.z.string(),summary:lib.z.object({cell_id:lib.z.string(),cell_label:lib.z.string(),genes:lib.z.object({"@type":lib.z.string(),gene_id:lib.z.string(),gene_label:lib.z.string(),mean_expression:lib.z.number()}).array(),count:lib.z.number(),percentage:lib.z.number(),dataset_count:lib.z.number().optional()}).array()}).array()}),TISSUE_LINK=(0,link_registry_model.HW)("FTU"),BASE_IRI="https://purl.humanatlas.io/2d-ftu/";function capitalize(str){return str.slice(0,1).toUpperCase()+str.slice(1)}let FtuDataImplService=class FtuDataImplService extends ftu_data_service.q{constructor(){super(...arguments),this.http=(0,core.inject)(http.eN),this.endpoints=(0,core.inject)(FTU_DATA_IMPL_ENDPOINTS),this.fileFormatMapping=(0,core.inject)(FTU_DATA_IMPL_FILE_FORMAT_MAPPING),this.cache=new Map}getTissueLibrary(){return this.fetchData(void 0,this.endpoints.illustrations,ILLUSTRATIONS).pipe((0,map.U)((data=>this.constructTissueLibrary(data["@graph"]))))}getIllustrationUrl(iri){return this.getDataFileReferences(iri).pipe((0,map.U)((data=>this.findIllustrationUrl(data))))}getIllustrationMapping(iri){return this.fetchData(iri,this.endpoints.illustrations,ILLUSTRATIONS).pipe((0,map.U)((data=>this.findGraphItem(data,iri).mapping)),(0,map.U)((data=>data?this.toIllustrationMapping(data):[])))}getCellSummaries(iri){return this.fetchData(iri,this.endpoints.summaries,CELL_SUMMARIES).pipe((0,map.U)((data=>this.findCellSummaries(data,iri))),(0,map.U)((data=>data?this.constructCellSummaries(data):[])))}getDataFileReferences(iri){return this.fetchData(iri,this.endpoints.illustrations,ILLUSTRATIONS).pipe((0,map.U)((data=>this.findGraphItem(data,iri).illustration_files)),(0,map.U)((data=>data?this.toDataFileReferences(data):[])))}getSourceReferences(iri){return this.fetchData(iri,this.endpoints.datasets,DATASETS).pipe((0,map.U)((data=>this.findGraphItem(data,iri).data_sources)),(0,map.U)((data=>data?this.toSourceReferences(data):[])))}fetchData(iri,url,schema){const{http,cachedIri,cache}=this;if(void 0!==iri&&iri!==cachedIri&&(this.cachedIri=iri,this.cache=new Map),!cache.has(url)){const opts={params:{id:iri??""},responseType:"json"},resp=http.get(url,opts).pipe((0,map.U)((data=>schema.parse(data))));cache.set(url,(0,firstValueFrom.z)(resp))}return(0,from.D)(cache.get(url))}findGraphItem(data,iri){const item=data["@graph"].find((({"@id":id})=>id===iri));return void 0===item?(console.error(`Iri not found in data: ${iri}`),{}):item}findCellSummaries(data,iri){const item=data["@graph"].filter((({cell_source})=>cell_source===iri));return void 0===item||0==item.length?(console.error(`Cell Summary not found in data: ${iri}`),[]):item}findIllustrationUrl(files){const{fileFormatMapping}=this,svgFormat=fileFormatMapping["image/svg+xml"],ref=files.find((({format})=>format===svgFormat));return void 0===ref?(console.error("Illustration url not found"),""):ref.url}toIllustrationMapping(mappings){const results=[];for(const{label,svg_id,svg_group_id,representation_of}of mappings)results.push({label,id:svg_id,groupId:svg_group_id,ontologyId:representation_of});return results}toDataFileReferences(data){const{fileFormatMapping:formats}=this,results=[];for(const{file,file_format}of data)file_format in formats&&results.push({format:formats[file_format],url:file});return results}toSourceReferences(data){const results=[];for(const{label,link,description}of data)results.push({label,link,title:description});return results}constructCellSummaries(data){const cellSummary=[],biomarkersPresent=new Set(data.map((summary=>summary.biomarker_type.toLowerCase()))),expandGenes=summary=>summary.genes.map((gene=>({...summary,...gene})));return data.forEach((summaryGroup=>{const summary=summaryGroup.summary.map(expandGenes).reduce(((acc,items)=>acc.concat(items)),[]),cells=summary.map((entry=>({id:entry.cell_id,label:entry.cell_label}))),biomarkers=summary.map((entry=>({id:entry.gene_id,label:entry.gene_label}))),summaries=summary.map((entry=>({cell:entry.cell_id,biomarker:entry.gene_id,count:entry.count,percentage:entry.percentage,meanExpression:entry.mean_expression,dataset_count:entry.dataset_count})));cellSummary.push({label:`${capitalize(summaryGroup.biomarker_type)} Biomarkers`,cells,biomarkers,summaries})})),["gene","protein","lipid"].forEach((defaultLabel=>{biomarkersPresent.has(defaultLabel)||cellSummary.push({label:`${capitalize(defaultLabel)} Biomarkers`,cells:[],biomarkers:[],summaries:[]})})),cellSummary}constructTissueLibrary(items){const nodes={};for(const{"@id":id,label,organ_id,organ_label}of items){const parentId=BASE_IRI+organ_id;nodes[parentId]??={id:parentId,label:(name=organ_label,name.split(" ").map((l=>l[0].toUpperCase()+l.slice(1))).join(" ")),parent:BASE_IRI,children:[]},nodes[id]={id,label,parent:parentId,children:[],link:TISSUE_LINK},nodes[parentId]?.children.push(id)}var name;return{root:BASE_IRI,nodes}}};FtuDataImplService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],FtuDataImplService)},"./libs/services/src/lib/ftu-data/ftu-data.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>FtuDataService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let FtuDataService=class FtuDataService{};FtuDataService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()],FtuDataService)},"./libs/state/src/lib/link-ids.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{About:()=>About,Embed:()=>Embed,ExploreFTU:()=>ExploreFTU,Illustration:()=>Illustration,LandingPage:()=>LandingPage,LandingPageReadMore:()=>LandingPageReadMore,Portal:()=>Portal,ProductTitle:()=>ProductTitle});var _hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.model.ts");const LandingPage=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("LandingPage"),ProductTitle=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("ProductTitle"),About=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("About"),Portal=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("Portal"),Illustration=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("Illustration"),Embed=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("Embed"),ExploreFTU=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("ExploreFTU"),LandingPageReadMore=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("LandingPageReadMore")},"./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host { display: none }",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);