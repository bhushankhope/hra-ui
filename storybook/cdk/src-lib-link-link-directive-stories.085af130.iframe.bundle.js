(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[688],{"./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host { display: none }",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/cdk/src/lib/link/link.directive.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Anchor:()=>Anchor,Button:()=>Button,default:()=>link_directive_stories});var LinkType,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_router=__webpack_require__("./node_modules/@angular/router/fesm2020/router.mjs"),lib=__webpack_require__("./node_modules/zod/lib/index.mjs");!function(LinkType){LinkType.Internal="internal",LinkType.External="external"}(LinkType||(LinkType={}));const EXTERNAL_LINK_SCHEMA=lib.z.object({type:lib.z.literal(LinkType.External),url:lib.z.string(),rel:lib.z.string().default("noopener"),target:lib.z.string()}).partial({rel:!0,target:!0}),INTERNAL_LINK_SCHEMA=lib.z.object({type:lib.z.literal(LinkType.Internal),commands:lib.z.any().array(),extras:lib.z.object({queryParams:lib.z.record(lib.z.any()).nullable(),fragment:lib.z.string(),queryParamsHandling:lib.z.enum(["merge","preserve",""]).nullable(),preserveFragment:lib.z.boolean(),onSameUrlNavigation:lib.z.literal("reload"),skipLocationChange:lib.z.boolean(),replaceUrl:lib.z.boolean()}).partial()}).partial({extras:!0}),LINK_REGISTRY_SCHEMA=lib.z.record(lib.z.string().transform((id=>`LinkId:'${id}'`)).brand("LinkId"),lib.z.discriminatedUnion("type",[EXTERNAL_LINK_SCHEMA,INTERNAL_LINK_SCHEMA]));function createLinkId(id){return LINK_REGISTRY_SCHEMA.keySchema.parse(id)}const EMPTY_LINK=createLinkId("@@__EMPTY__");var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),http=__webpack_require__("./node_modules/@angular/common/fesm2020/http.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs");function setQueryParams(dest,params){for(const[key,value]of Object.entries(params??{}))null!=value&&dest.set(key,`${value}`)}function createInternalUrl(injector,commands,extras,isResourceUrl){const router=injector.get(fesm2020_router.F0),locationStrategy=injector.get(common.LocationStrategy),sanitizer=injector.get(platform_browser.DomSanitizer),route=extras.relativeTo??injector.get(fesm2020_router.gz,null),securityContext=isResourceUrl?core.SecurityContext.RESOURCE_URL:core.SecurityContext.URL,tree=router.createUrlTree(commands,{...extras,relativeTo:route}),url=locationStrategy.prepareExternalUrl(router.serializeUrl(tree));return sanitizer.sanitize(securityContext,url)??void 0}function createExternalUrl(url,extras){const{fragment,preserveFragment,queryParams,queryParamsHandling}=extras,result=new URL(url);return void 0===fragment&&!1!==preserveFragment||(result.hash=fragment??""),""===queryParamsHandling?(result.search="",setQueryParams(result.searchParams,queryParams)):"preserve"!==queryParamsHandling&&setQueryParams(result.searchParams,queryParams),result.toString()}var ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),js_yaml=__webpack_require__("./node_modules/js-yaml/dist/js-yaml.mjs"),operators_map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");const actionTypeRegistry=new Set;function registerActionType(type){!function assertUniqueActionType(type){if(actionTypeRegistry.has(type))throw new Error(`Action type '${type}' is not unique`)}(type),actionTypeRegistry.add(type)}const link_registry_actions_Action=function ActionGroup(group){return type=>function Action(type){var _class;return registerActionType(type),_class=class BaseAction{constructor(){this.type=type}},_class.type=type,_class}(`[${group}] ${type}`)}("LinkRegistry");class Add extends(link_registry_actions_Action("Add")){constructor(id,entry){super(),this.id=id,this.entry=entry}}class AddMany extends(link_registry_actions_Action("Add Many")){constructor(entries){super(),this.entries=entries}}class AddFromYaml extends(link_registry_actions_Action("Add from Yaml")){constructor(yaml){super(),this.yaml=yaml}}class LoadFromYaml extends(link_registry_actions_Action("Load from Yaml")){constructor(url){super(),this.url=url}}class Navigate extends(link_registry_actions_Action("Navigate")){constructor(id,extras={}){super(),this.id=id,this.extras=extras}}let LinkRegistryState=class LinkRegistryState{constructor(){this.http=(0,core.inject)(http.eN),this.router=(0,core.inject)(fesm2020_router.F0),this.zone=(0,core.inject)(core.NgZone)}addOne(ctx,{id,entry}){this.addMany(ctx,new AddMany({[id]:entry}))}addMany(ctx,{entries}){ctx.patchState(entries)}addYaml(ctx,{yaml},filename){const data=(0,js_yaml.zD)(yaml,{filename}),entries=LINK_REGISTRY_SCHEMA.parse(data);this.addMany(ctx,new AddMany(entries))}loadYaml(ctx,{url}){return this.http.get(url,{responseType:"text"}).pipe((0,operators_map.U)((data=>this.addYaml(ctx,new AddFromYaml(data),url))))}navigate(ctx,{id,extras}){var _this=this;return(0,asyncToGenerator.Z)((function*(){const entry=ctx.getState()[id];switch(entry?.type){case LinkType.Internal:yield _this.navigateToInternal(entry,extras);break;case LinkType.External:_this.navigateToExternal(entry,extras);break;default:throw new Error(`Cannot navigate to non-existing link '${id}'`)}}))()}navigateToInternal(entry,extras){var _this2=this;return(0,asyncToGenerator.Z)((function*(){yield _this2.zone.run((()=>_this2.router.navigate(entry.commands,{...entry.extras,...extras})))}))()}navigateToExternal(entry,extras){const url=createExternalUrl(entry.url,extras);window.open(url,entry.target,entry.rel)}};(0,tslib_es6.gn)([(0,ngxs_store.aU)(Add),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,Add]),(0,tslib_es6.w6)("design:returntype",void 0)],LinkRegistryState.prototype,"addOne",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(AddMany),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,AddMany]),(0,tslib_es6.w6)("design:returntype",void 0)],LinkRegistryState.prototype,"addMany",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(AddFromYaml),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,AddFromYaml,String]),(0,tslib_es6.w6)("design:returntype",void 0)],LinkRegistryState.prototype,"addYaml",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(LoadFromYaml),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,LoadFromYaml]),(0,tslib_es6.w6)("design:returntype",Observable.y)],LinkRegistryState.prototype,"loadYaml",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(Navigate),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,Navigate]),(0,tslib_es6.w6)("design:returntype",Promise)],LinkRegistryState.prototype,"navigate",null),LinkRegistryState=(0,tslib_es6.gn)([(0,ngxs_store.ZM)({name:"linkRegistry",defaults:{}}),(0,core.Injectable)()],LinkRegistryState);var DestroyHostComponent_1,dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),destroy_host_component=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts"),destroy_host_component_default=__webpack_require__.n(destroy_host_component);let DestroyHostComponent=DestroyHostComponent_1=class DestroyHostComponent{constructor(){this.el=(0,core.inject)(core.ElementRef).nativeElement}static create(container){return container.createComponent(DestroyHostComponent_1,{index:0})}ngAfterViewInit(){this.el.remove()}};DestroyHostComponent=DestroyHostComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-destroy-host",standalone:!0,template:"",styles:[destroy_host_component_default()]})],DestroyHostComponent);var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");class ScopedDestructorSubject extends ReplaySubject.t{constructor(scope){super(1),scope.onDestroy((()=>{this.next(),this.complete()}))}}const DESTRUCTOR_CACHE=new WeakMap;function firstDefinedValue(genFn){for(const value of genFn())if(null!=value)return value;throw new Error("Unreachable")}function injectDestroy$(){const key=function findStableKeyObject(){return firstDefinedValue((function*(){yield(0,core.inject)(core.ElementRef,{optional:!0})?.nativeElement,yield(0,core.inject)(core.ViewContainerRef,{optional:!0}),yield(0,core.inject)(core.NgModuleRef)}))}();let destructor=DESTRUCTOR_CACHE.get(key);if(!destructor){const scope=function findDestructorScope(){return firstDefinedValue((function*(){const vcr=(0,core.inject)(core.ViewContainerRef,{optional:!0});yield vcr&&DestroyHostComponent.create(vcr),yield(0,core.inject)(core.NgModuleRef)}))}();destructor=new ScopedDestructorSubject(scope).asObservable(),DESTRUCTOR_CACHE.set(key,destructor)}return destructor}function select$(selector,options){return(0,core.inject)(ngxs_store.yh).select(selector).pipe((0,takeUntil.R)(injectDestroy$()),function markForCheck(options){const notifyOnChange=options?.notifyOnChange??!0,cdr=(0,core.inject)(core.ChangeDetectorRef,{optional:!0});if(notifyOnChange&&cdr){const markFn=()=>cdr.markForCheck();return(0,tap.b)({next:markFn,error:markFn,complete:markFn})}return source=>source}(options))}const NO_ERROR_SENTINEL_OBJ={};class SnapshotObserver{constructor(){this.value=void 0,this.errorValue=NO_ERROR_SENTINEL_OBJ}get(){if(this.errorValue!==NO_ERROR_SENTINEL_OBJ)throw this.errorValue;return this.value}next(value){this.value=value}error(err){this.value=void 0,this.errorValue=err}}function selectQuerySnapshot(selector,...boundArgs){const get=function selectSnapshot(selector){const obs$=select$(selector,{notifyOnChange:!0}),observer=new SnapshotObserver;return obs$.subscribe(observer),observer.get.bind(observer)}(selector);return(...args)=>get()(...boundArgs,...args)}function identity(value){return value}function createActionFactory(type,boundArgs){return(...args)=>new type(...boundArgs,...args)}function dispatchImpl(actionFactory,resultHandler){const store=(0,core.inject)(ngxs_store.yh);return(...args)=>{const action=actionFactory(...args),obs$=store.dispatch(action);return resultHandler(action,obs$)}}class LinkRegistrySelectors{static query(state){return(id,type)=>this.getEntry(state,id,type)}static getEntry(state,id,type){const entry=state[id];return void 0===type||entry?.type===type?entry:void 0}}var _class;(0,tslib_es6.gn)([(0,ngxs_store.Qf)([LinkRegistryState]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Function)],LinkRegistrySelectors,"query",null);let LinkDirective=((_class=class LinkDirective{constructor(){this.linkId=EMPTY_LINK,this.injector=(0,core.inject)(core.Injector),this.tagName=(0,core.inject)(core.ElementRef).nativeElement.tagName.toLowerCase(),this.queryLink=selectQuerySnapshot(LinkRegistrySelectors.query),this.navigate=function dispatch(type,...boundArgs){return dispatchImpl(createActionFactory(type,boundArgs),identity)}(Navigate)}get isAnchorElement(){return["a","area"].includes(this.tagName)}get isResourceUrl(){return["base","link"].includes(this.tagName)}get extras(){const{link}=this;return this.mergeExtras(link?.type===LinkType.Internal?link.extras:void 0,this)}ngOnChanges(){this.updateLink()}onClick(event){const{link,linkId,isAnchorElement}=this;if(!link)return!0;if(isAnchorElement){const{button,ctrlKey,shiftKey,altKey,metaKey}=event;if(link.type===LinkType.External||0!==button||ctrlKey||shiftKey||altKey||metaKey)return!0}return this.navigate(linkId,this.extras),!isAnchorElement}updateLink(){const link=this.link=this.queryLink(this.linkId);({href:this.href,rel:this.rel,target:this.target}=this.getLinkAttributes(link))}getLinkAttributes(link){const{injector,extras,isResourceUrl}=this;switch(link?.type){case LinkType.Internal:return{href:createInternalUrl(injector,link.commands,extras,isResourceUrl)};case LinkType.External:return{...link,href:createExternalUrl(link.url,extras)};default:return{}}}mergeExtras(opt1,opt2){const result={...opt1},mergeKey=key=>{void 0!==opt2[key]&&(result[key]=opt2[key])};return mergeKey("queryParams"),mergeKey("queryParamsHandling"),mergeKey("fragment"),mergeKey("preserveFragment"),mergeKey("relativeTo"),result}}).propDecorators={linkId:[{type:core.Input,args:["hraLink"]}],queryParams:[{type:core.Input}],queryParamsHandling:[{type:core.Input}],fragment:[{type:core.Input}],preserveFragment:[{type:core.Input}],relativeTo:[{type:core.Input}],href:[{type:core.HostBinding,args:["attr.href"]}],rel:[{type:core.HostBinding,args:["attr.rel"]}],target:[{type:core.HostBinding,args:["attr.target"]}],onClick:[{type:core.HostListener,args:["click",["$event"]]}]},_class);LinkDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[hraLink]",standalone:!0})],LinkDirective);let InternalRouteComponent=class InternalRouteComponent{constructor(){this.route=(0,core.inject)(fesm2020_router.gz),this.data=this.route.snapshot.data,this.link=this.data.link,this.label=this.data.label}};InternalRouteComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-internal-route",standalone:!0,template:'<button [hraLink]="link">{{ label }}</button>',imports:[LinkDirective]})],InternalRouteComponent);const external=createLinkId("External"),internal1=createLinkId("Internal-1"),internal2=createLinkId("Internal-2"),links={[external]:{url:"https://google.com",target:"_blank",type:LinkType.External},[internal1]:{type:LinkType.Internal,commands:["path2"]},[internal2]:{type:LinkType.Internal,commands:["path1"]}},routes=[{path:"path1",component:InternalRouteComponent,data:{link:internal1,label:"Go to path 2"}},{path:"path2",component:InternalRouteComponent,data:{link:internal2,label:"Go back to path 1"}},{path:"**",redirectTo:"path1"}],link_directive_stories={title:"Cdk/LinkDirective",parameters:{state:{states:[LinkRegistryState],actions:[new AddMany(links)]}},decorators:[(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(fesm2020_router.Bz.forRoot(routes,{useHash:!0}))]}),(0,dist.moduleMetadata)({imports:[fesm2020_router.Bz]})]},Anchor={render:args=>({props:args,template:'<a [hraLink]="link">Anchor</a>'}),decorators:[(0,dist.moduleMetadata)({imports:[LinkDirective]})],args:{link:createLinkId("External")}},Button={render:args=>({props:args,template:"<router-outlet></router-outlet>"})};Anchor.parameters={...Anchor.parameters,docs:{...Anchor.parameters?.docs,source:{originalSource:"{\n  render: args => ({\n    props: args,\n    template: '<a [hraLink]=\"link\">Anchor</a>'\n  }),\n  decorators: [moduleMetadata({\n    imports: [LinkDirective]\n  })],\n  args: {\n    link: createLinkId('External')\n  }\n}",...Anchor.parameters?.docs?.source}}},Button.parameters={...Button.parameters,docs:{...Button.parameters?.docs,source:{originalSource:"{\n  render: args => ({\n    props: args,\n    template: `<router-outlet></router-outlet>`\n  })\n}",...Button.parameters?.docs?.source}}}}}]);