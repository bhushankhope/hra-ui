(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[57],{"./libs/cdk/injectors/src/lib/dispatch/dispatch.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{WI:()=>dispatch});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js");function identity(value){return value}function createActionFactory(type,boundArgs){return(...args)=>new type(...boundArgs,...args)}function dispatchImpl(actionFactory,resultHandler){const store=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.yh);return(...args)=>{const action=actionFactory(...args),obs$=store.dispatch(action);return resultHandler(action,obs$)}}function dispatch(type,...boundArgs){return dispatchImpl(createActionFactory(type,boundArgs),identity)}},"./libs/cdk/src/lib/link/link.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>LinkDirective});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),select_snapshot=__webpack_require__("./libs/cdk/injectors/src/lib/select/select-snapshot.ts"),dispatch=__webpack_require__("./libs/cdk/injectors/src/lib/dispatch/dispatch.ts"),link_registry_model=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.model.ts"),ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),link_registry_state=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.state.ts");class LinkRegistrySelectors{static query(state){return(id,type)=>this.getEntry(state,id,type)}static getEntry(state,id,type){const entry=state[id];return void 0===type||entry?.type===type?entry:void 0}}(0,tslib_es6.gn)([(0,ngxs_store.Qf)([link_registry_state.V]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Function)],LinkRegistrySelectors,"query",null);var link_registry_actions=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.actions.ts"),create=__webpack_require__("./libs/shared/utils/src/lib/url/create.ts");let LinkDirective=class LinkDirective{constructor(){this.linkId=link_registry_model.Ry,this.injector=(0,core.inject)(core.Injector),this.tagName=(0,core.inject)(core.ElementRef).nativeElement.tagName.toLowerCase(),this.queryLink=(0,select_snapshot.w)(LinkRegistrySelectors.query),this.navigate=(0,dispatch.WI)(link_registry_actions.Fg)}get isAnchorElement(){return["a","area"].includes(this.tagName)}get isResourceUrl(){return["base","link"].includes(this.tagName)}get extras(){const{link}=this;return this.mergeExtras(link?.type===link_registry_model.Un.Internal?link.extras:void 0,this)}ngDoCheck(){const link=this.queryLink(this.linkId);this.link!==link&&this.updateLink(link)}onClick(event){const{link,linkId,isAnchorElement}=this;if(!link)return!0;if(isAnchorElement){const{button,ctrlKey,shiftKey,altKey,metaKey}=event;if(link.type===link_registry_model.Un.External||0!==button||ctrlKey||shiftKey||altKey||metaKey)return!0}return this.navigate(linkId,this.extras),!isAnchorElement}updateLink(link){this.link=link,({href:this.href,rel:this.rel,target:this.target}=this.getLinkAttributes(link))}getLinkAttributes(link){const{injector,extras,isResourceUrl}=this;switch(link?.type){case link_registry_model.Un.Internal:return{href:(0,create.L)(injector,link.commands,extras,isResourceUrl)};case link_registry_model.Un.External:return{...link,href:(0,create.D)(link.url,extras)};default:return{}}}mergeExtras(opt1,opt2){const result={...opt1},mergeKey=key=>{void 0!==opt2[key]&&(result[key]=opt2[key])};return mergeKey("queryParams"),mergeKey("queryParamsHandling"),mergeKey("fragment"),mergeKey("preserveFragment"),mergeKey("relativeTo"),result}static#_=this.propDecorators={linkId:[{type:core.Input,args:["hraLink"]}],queryParams:[{type:core.Input}],queryParamsHandling:[{type:core.Input}],fragment:[{type:core.Input}],preserveFragment:[{type:core.Input}],relativeTo:[{type:core.Input}],href:[{type:core.HostBinding,args:["attr.href"]}],rel:[{type:core.HostBinding,args:["attr.rel"]}],target:[{type:core.HostBinding,args:["attr.target"]}],onClick:[{type:core.HostListener,args:["click",["$event"]]}]}};LinkDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[hraLink]",standalone:!0})],LinkDirective)},"./libs/cdk/state/src/link-registry/link-registry.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AU:()=>LoadFromYaml,Fg:()=>Navigate,Gg:()=>AddMany,mm:()=>Add,tI:()=>AddFromYaml});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("LinkRegistry");class Add extends(Action("Add")){constructor(id,entry){super(),this.id=id,this.entry=entry}}class AddMany extends(Action("Add Many")){constructor(entries){super(),this.entries=entries}}class AddFromYaml extends(Action("Add from Yaml")){constructor(yaml){super(),this.yaml=yaml}}class LoadFromYaml extends(Action("Load from Yaml")){constructor(url){super(),this.url=url}}class Navigate extends(Action("Navigate")){constructor(id,extras={}){super(),this.id=id,this.extras=extras}}},"./libs/cdk/state/src/link-registry/link-registry.model.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{HW:()=>createLinkId,Ry:()=>EMPTY_LINK,Un:()=>LinkType,l$:()=>LINK_REGISTRY_SCHEMA});var LinkType,zod__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/zod/lib/index.mjs");!function(LinkType){LinkType.Internal="internal",LinkType.External="external"}(LinkType||(LinkType={}));const EXTERNAL_LINK_SCHEMA=zod__WEBPACK_IMPORTED_MODULE_0__.z.object({type:zod__WEBPACK_IMPORTED_MODULE_0__.z.literal(LinkType.External),url:zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),rel:zod__WEBPACK_IMPORTED_MODULE_0__.z.string().default("noopener"),target:zod__WEBPACK_IMPORTED_MODULE_0__.z.string()}).partial({rel:!0,target:!0}),INTERNAL_LINK_SCHEMA=zod__WEBPACK_IMPORTED_MODULE_0__.z.object({type:zod__WEBPACK_IMPORTED_MODULE_0__.z.literal(LinkType.Internal),commands:zod__WEBPACK_IMPORTED_MODULE_0__.z.any().array(),extras:zod__WEBPACK_IMPORTED_MODULE_0__.z.object({queryParams:zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.any()).nullable(),fragment:zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),queryParamsHandling:zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(["merge","preserve",""]).nullable(),preserveFragment:zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),onSameUrlNavigation:zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("reload"),skipLocationChange:zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),replaceUrl:zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean()}).partial()}).partial({extras:!0}),LINK_REGISTRY_SCHEMA=zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.string().transform((id=>`LinkId:'${id}'`)).brand("LinkId"),zod__WEBPACK_IMPORTED_MODULE_0__.z.discriminatedUnion("type",[EXTERNAL_LINK_SCHEMA,INTERNAL_LINK_SCHEMA]));function createLinkId(id){return LINK_REGISTRY_SCHEMA.keySchema.parse(id)}const EMPTY_LINK=createLinkId("@@__EMPTY__")},"./libs/cdk/state/src/link-registry/link-registry.state.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>LinkRegistryState});var _home_runner_work_hra_ui_hra_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common_http__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),_hra_ui_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./libs/shared/utils/src/lib/url/create.ts"),_ngxs_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),js_yaml__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/js-yaml/dist/js-yaml.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.actions.ts"),_link_registry_model__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.model.ts");let LinkRegistryState=class LinkRegistryState{constructor(){this.http=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.eN),this.router=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.F0,{optional:!0}),this.zone=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)}addOne(ctx,{id,entry}){this.addMany(ctx,new _link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.Gg({[id]:entry}))}addMany(ctx,{entries}){ctx.patchState(entries)}addYaml(ctx,{yaml},filename){const data=(0,js_yaml__WEBPACK_IMPORTED_MODULE_1__.zD)(yaml,{filename}),entries=_link_registry_model__WEBPACK_IMPORTED_MODULE_6__.l$.parse(data);this.addMany(ctx,new _link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.Gg(entries))}loadYaml(ctx,{url}){return this.http.get(url,{responseType:"text"}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.U)((data=>this.addYaml(ctx,new _link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.tI(data),url))))}navigate(ctx,{id,extras}){var _this=this;return(0,_home_runner_work_hra_ui_hra_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)((function*(){const entry=ctx.getState()[id];switch(entry?.type){case _link_registry_model__WEBPACK_IMPORTED_MODULE_6__.Un.Internal:yield _this.navigateToInternal(entry,extras);break;case _link_registry_model__WEBPACK_IMPORTED_MODULE_6__.Un.External:_this.navigateToExternal(entry,extras);break;default:throw new Error(`Cannot navigate to non-existing link '${id}'`)}}))()}navigateToInternal(entry,extras){var _this2=this;return(0,_home_runner_work_hra_ui_hra_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)((function*(){yield _this2.zone.run((()=>_this2.router?.navigate(entry.commands,{...entry.extras,...extras})))}))()}navigateToExternal(entry,extras){const url=(0,_hra_ui_utils__WEBPACK_IMPORTED_MODULE_9__.D)(entry.url,extras);window.open(url,entry.target,entry.rel)}};(0,tslib__WEBPACK_IMPORTED_MODULE_10__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.mm),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:paramtypes",[Object,_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.mm]),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:returntype",void 0)],LinkRegistryState.prototype,"addOne",null),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.Gg),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:paramtypes",[Object,_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.Gg]),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:returntype",void 0)],LinkRegistryState.prototype,"addMany",null),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.tI),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:paramtypes",[Object,_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.tI,String]),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:returntype",void 0)],LinkRegistryState.prototype,"addYaml",null),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.AU),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:paramtypes",[Object,_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.AU]),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:returntype",rxjs__WEBPACK_IMPORTED_MODULE_11__.y)],LinkRegistryState.prototype,"loadYaml",null),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.aU)(_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.Fg),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:type",Function),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:paramtypes",[Object,_link_registry_actions__WEBPACK_IMPORTED_MODULE_5__.Fg]),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.w6)("design:returntype",Promise)],LinkRegistryState.prototype,"navigate",null),LinkRegistryState=(0,tslib__WEBPACK_IMPORTED_MODULE_10__.gn)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.ZM)({name:"linkRegistry",defaults:{}}),(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()],LinkRegistryState)},"./libs/services/src/lib/ftu-data/ftu-data.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>FtuDataService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FtuDataService=class FtuDataService{};FtuDataService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()],FtuDataService)},"./libs/shared/utils/src/lib/url/create.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>createExternalUrl,L:()=>createInternalUrl});var _angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),_angular_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs");function setQueryParams(dest,params){for(const[key,value]of Object.entries(params??{}))null!=value&&dest.set(key,`${value}`)}function createInternalUrl(injector,commands,extras,isResourceUrl){const router=injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_0__.F0,null),locationStrategy=injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__.LocationStrategy,null),sanitizer=injector.get(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer),route=extras.relativeTo??injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_0__.gz,null),securityContext=isResourceUrl?_angular_core__WEBPACK_IMPORTED_MODULE_3__.SecurityContext.RESOURCE_URL:_angular_core__WEBPACK_IMPORTED_MODULE_3__.SecurityContext.URL;if(!router||!locationStrategy)return;const tree=router.createUrlTree(commands,{...extras,relativeTo:route}),url=locationStrategy.prepareExternalUrl(router.serializeUrl(tree));return sanitizer.sanitize(securityContext,url)??void 0}function createExternalUrl(url,extras){const{fragment,preserveFragment,queryParams,queryParamsHandling}=extras,result=new URL(url);return void 0===fragment&&!1!==preserveFragment||(result.hash=fragment??""),""===queryParamsHandling?(result.search="",setQueryParams(result.searchParams,queryParams)):"preserve"!==queryParamsHandling&&setQueryParams(result.searchParams,queryParams),result.toString()}},"./libs/state/src/lib/download/download.action.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R2:()=>ClearEntries,UW:()=>Download,h6:()=>RegisterFormat,i2:()=>AddEntry,q5:()=>Load});const Action=(0,__webpack_require__("./libs/cdk/state/src/actions/actions.ts").W)("Download");class RegisterFormat extends(Action("Register Format")){constructor(format){super(),this.format=format}}class Load extends(Action("Load")){constructor(iri){super(),this.iri=iri}}class AddEntry extends(Action("Add")){constructor(id,entry){super(),this.id=id,this.entry=entry}}class ClearEntries extends(Action("Clear")){}class Download extends(Action("Download")){constructor(format){super(),this.format=format}}},"./libs/state/src/lib/download/download.state.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DownloadState});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),immer=__webpack_require__("./node_modules/immer/dist/immer.mjs"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),ftu_data_service=__webpack_require__("./libs/services/src/lib/ftu-data/ftu-data.service.ts"),lib=__webpack_require__("./node_modules/zod/lib/index.mjs");const DOWNLOAD_FORMAT_ID=lib.z.string().transform((id=>`DownloadFormatId:'${id}'`)).brand("DownloadFormatId"),DOWNLOAD_ENTRY=lib.z.discriminatedUnion("type",[lib.z.object({type:lib.z.literal("url"),url:lib.z.string()}),lib.z.object({type:lib.z.literal("data"),data:lib.z.string()})]),DOWNLOAD_FORMAT=lib.z.object({id:DOWNLOAD_FORMAT_ID,label:lib.z.string(),extension:lib.z.string()}).partial({extension:!0});lib.z.object({formats:lib.z.record(DOWNLOAD_FORMAT_ID,DOWNLOAD_FORMAT),entries:lib.z.record(DOWNLOAD_FORMAT_ID,DOWNLOAD_ENTRY)});function createDownloadFormatId(id){return DOWNLOAD_FORMAT_ID.parse(id)}const Svg=createDownloadFormatId("svg"),Png=createDownloadFormatId("png"),SVG_FORMAT={id:Svg,label:"Download SVG",extension:".svg"},PNG_FORMAT={id:Png,label:"Download PNG",extension:".png"};var download_action=__webpack_require__("./libs/state/src/lib/download/download.action.ts");let DownloadState=class DownloadState{constructor(){this.http=(0,core.inject)(http.eN),this.dataService=(0,core.inject)(ftu_data_service.q)}ngxsOnInit(ctx){ctx.dispatch([new download_action.h6(SVG_FORMAT),new download_action.h6(PNG_FORMAT)])}registerFormat(ctx,{format}){ctx.setState((0,immer.Uy)((draft=>{draft.formats[format.id]=format})))}load(ctx,{iri}){return this.dataService.getDataFileReferences(iri).pipe((0,tap.b)((items=>ctx.setState((0,immer.Uy)((draft=>{draft.entries={};for(const{format,url}of items)draft.entries[createDownloadFormatId(format)]={type:"url",url}}))))))}addEntry(ctx,{id,entry}){ctx.setState((0,immer.Uy)((draft=>{draft.entries[id]=entry})))}clearEntries(ctx){ctx.setState((0,immer.Uy)((draft=>{draft.entries={}})))}download(ctx,{format}){const{entries}=ctx.getState(),entry=entries[format];switch(entry?.type){case"url":{const filename=this.guessFilename(ctx,format,entry.url);return this.downloadRemoteData(entry.url).pipe((0,tap.b)((data=>this.downloadData(data,filename))))}case"data":{const filename=this.guessFilename(ctx,format,"");this.downloadData(new Blob([entry.data]),filename);break}default:throw new Error("Cannot download file without data")}}guessFilename(ctx,id,url){const{formats}=ctx.getState(),{extension=""}=formats[id]??{},segments=new URL(url,"https://base.com").pathname.split("/").filter((seg=>""!==seg)),name=segments.length>0?segments[segments.length-1]:"download";return name.includes(".")?name:`${name}${extension}`}downloadData(blob,filename){const url=window.URL.createObjectURL(blob),anchor=document.createElement("a");document.body.appendChild(anchor),anchor.download=filename,anchor.href=url,anchor.click(),anchor.remove(),window.URL.revokeObjectURL(url)}downloadRemoteData(url){return this.http.get(url,{responseType:"blob"})}};(0,tslib_es6.gn)([(0,ngxs_store.aU)(download_action.h6),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,download_action.h6]),(0,tslib_es6.w6)("design:returntype",void 0)],DownloadState.prototype,"registerFormat",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(download_action.q5),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,download_action.q5]),(0,tslib_es6.w6)("design:returntype",Observable.y)],DownloadState.prototype,"load",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(download_action.i2),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,download_action.i2]),(0,tslib_es6.w6)("design:returntype",void 0)],DownloadState.prototype,"addEntry",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(download_action.R2),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",void 0)],DownloadState.prototype,"clearEntries",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(download_action.UW),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,download_action.UW]),(0,tslib_es6.w6)("design:returntype",Object)],DownloadState.prototype,"download",null),DownloadState=(0,tslib_es6.gn)([(0,ngxs_store.ZM)({name:"download",defaults:{formats:{},entries:{}}}),(0,core.Injectable)()],DownloadState)},"./libs/state/src/lib/link-ids.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{About:()=>About,Embed:()=>Embed,ExploreFTU:()=>ExploreFTU,Illustration:()=>Illustration,LandingPage:()=>LandingPage,LandingPageReadMore:()=>LandingPageReadMore,Portal:()=>Portal,ProductTitle:()=>ProductTitle});var _hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.model.ts");const LandingPage=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("LandingPage"),ProductTitle=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("ProductTitle"),About=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("About"),Portal=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("Portal"),Illustration=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("Illustration"),Embed=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("Embed"),ExploreFTU=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("ExploreFTU"),LandingPageReadMore=(0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.HW)("LandingPageReadMore")},"./libs/state/src/lib/screen-mode/screen-mode.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>SetSize,l:()=>Set});var _hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/cdk/state/src/actions/actions.ts");class Set extends((0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.a)("[Screenmode] Set Screenmode")){constructor(isFullScreen){super(),this.isFullScreen=isFullScreen}}class SetSize extends((0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.a)("[Screenmode] Set Size")){constructor(size){super(),this.size=size}}},"./libs/components/behavioral/src/lib/footer-behavior/footer-behavior.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>footer_behavior_component_stories});var resource_registry_state=__webpack_require__("./libs/cdk/state/src/resource-registry/resource-registry.state.ts"),resource_registry_actions=__webpack_require__("./libs/cdk/state/src/resource-registry/resource-registry.actions.ts"),ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var footer_behavior_componentngResource=__webpack_require__("./libs/components/behavioral/src/lib/footer-behavior/footer-behavior.component.scss?ngResource"),footer_behavior_componentngResource_default=__webpack_require__.n(footer_behavior_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),dialog=__webpack_require__("./node_modules/@angular/material/fesm2022/dialog.mjs"),select_snapshot=__webpack_require__("./libs/cdk/injectors/src/lib/select/select-snapshot.ts"),dispatch=__webpack_require__("./libs/cdk/injectors/src/lib/dispatch/dispatch.ts"),resource_registry_selectors=__webpack_require__("./libs/cdk/state/src/resource-registry/resource-registry.selectors.ts");var footer_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/footer/footer.component.scss?ngResource"),footer_componentngResource_default=__webpack_require__.n(footer_componentngResource),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2022/overlay.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),list=__webpack_require__("./node_modules/@angular/material/fesm2022/list.mjs"),link_directive=__webpack_require__("./libs/cdk/src/lib/link/link.directive.ts"),link_registry_model=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.model.ts");const DOWNLOADS_LIST_POSITION=[{panelClass:"above",originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",offsetY:0},{panelClass:"below",originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"}];let FooterComponent=class FooterComponent{constructor(){this.size="large",this.productLogoUrl="",this.productTitle="",this.hraPortal=link_registry_model.Ry,this.illustrationMetadata=link_registry_model.Ry,this.embed=link_registry_model.Ry,this.downloadFormats=[],this.download=new core.EventEmitter,this.contactClick=new core.EventEmitter,this.DOWNLOADS_LIST_POSITION=DOWNLOADS_LIST_POSITION,this.downloadListOpen=!1}get isSmall(){return"small"===this.size}handleOutsideClick(event){const target=event.target;["download","download\nDownload"].includes(target.innerText)||(this.downloadListOpen=!1)}static#_=this.propDecorators={size:[{type:core.HostBinding,args:["class"]},{type:core.Input}],productLogoUrl:[{type:core.Input}],productTitle:[{type:core.Input}],hraPortal:[{type:core.Input}],illustrationMetadata:[{type:core.Input}],embed:[{type:core.Input}],downloadFormats:[{type:core.Input}],download:[{type:core.Output}],contactClick:[{type:core.Output}]}};FooterComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-footer",standalone:!0,imports:[common.CommonModule,fesm2022_button.ot,icon.Ps,overlay.U8,list.ie,link_directive.I],template:'<div *ngIf="isSmall">\n  <a class="product-logo-link">\n    <img class="product-logo-image" [src]="productLogoUrl" alt="Prodoct Logo" />\n    <div class="product-title">{{ productTitle }}</div>\n  </a>\n</div>\n<div class="filler" *ngIf="isSmall"></div>\n\n<button class="button" mat-stroked-button color="accent" [hraLink]="illustrationMetadata" disableRipple>\n  <mat-icon>info_outlined</mat-icon>\n  Illustration\n</button>\n\n<button\n  class="button download-button"\n  mat-stroked-button\n  color="accent"\n  (click)="downloadListOpen = !downloadListOpen"\n  type="button"\n  cdkOverlayOrigin\n  #anchor="cdkOverlayOrigin"\n  disableRipple\n>\n  <span class="material-symbols-outlined"> download </span>\n  Download\n</button>\n\n<button class="button" mat-stroked-button color="accent" [hraLink]="embed" disableRipple>\n  <mat-icon>code</mat-icon>\n  Embed\n</button>\n\n<div class="filler" *ngIf="!isSmall"></div>\n\n<button class="button" mat-stroked-button color="accent" (click)="contactClick.emit()" disableRipple>\n  <mat-icon>mail_outlined</mat-icon>\n  Contact\n</button>\n\n<button class="button" mat-stroked-button color="accent" [hraLink]="hraPortal" disableRipple>\n  <mat-icon>open_in_new</mat-icon>\n  HRA Portal\n</button>\n\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]="anchor"\n  [cdkConnectedOverlayOpen]="downloadListOpen"\n  [cdkConnectedOverlayPositions]="DOWNLOADS_LIST_POSITION"\n  [cdkConnectedOverlayOffsetX]="0"\n  cdkConnectedOverlayHasBackdrop="false"\n  cdkConnectedOverlayPush="false"\n  cdkConnectedOverlayPanelClass="download-options-panel"\n  (overlayOutsideClick)="handleOutsideClick($event)"\n>\n  <mat-action-list>\n    <button\n      mat-list-item\n      *ngFor="let format of downloadFormats"\n      (click)="downloadListOpen = false; download.emit(format)"\n    >\n      {{ format.label }}\n    </button>\n  </mat-action-list>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[footer_componentngResource_default()]})],FooterComponent);var resource_ids=__webpack_require__("./libs/state/src/lib/resource-ids.ts"),download_state=__webpack_require__("./libs/state/src/lib/download/download.state.ts");class DownloadSelectors{static formats(state){const{formats,entries}=state;return Object.values(formats).filter((format=>!(!format||!(format.id in entries))))}}(0,tslib_es6.gn)([(0,ngxs_store.Qf)([download_state.r]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Array)],DownloadSelectors,"formats",null);var link_ids=__webpack_require__("./libs/state/src/lib/link-ids.ts"),download_action=__webpack_require__("./libs/state/src/lib/download/download.action.ts"),immer=__webpack_require__("./node_modules/immer/dist/immer.mjs"),screen_mode_actions=__webpack_require__("./libs/state/src/lib/screen-mode/screen-mode.actions.ts");let ScreenModeState=class ScreenModeState{set({setState},{isFullScreen}){setState((0,immer.Uy)((draft=>{draft.isFullScreen=isFullScreen})))}SetSize({setState},{size}){setState((0,immer.Uy)((draft=>{draft.size=size})))}};(0,tslib_es6.gn)([(0,ngxs_store.aU)(screen_mode_actions.l),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,screen_mode_actions.l]),(0,tslib_es6.w6)("design:returntype",void 0)],ScreenModeState.prototype,"set",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(screen_mode_actions.R),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object,screen_mode_actions.R]),(0,tslib_es6.w6)("design:returntype",void 0)],ScreenModeState.prototype,"SetSize",null),ScreenModeState=(0,tslib_es6.gn)([(0,ngxs_store.ZM)({name:"screenmode",defaults:{isFullScreen:!1,size:"large"}}),(0,core.Injectable)()],ScreenModeState);class ScreenModeSelectors{static isFullScreen(state){return state.isFullScreen}static size(state){return state.size}}(0,tslib_es6.gn)([(0,ngxs_store.Qf)([ScreenModeState]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",Boolean)],ScreenModeSelectors,"isFullScreen",null),(0,tslib_es6.gn)([(0,ngxs_store.Qf)([ScreenModeState]),(0,tslib_es6.w6)("design:type",Function),(0,tslib_es6.w6)("design:paramtypes",[Object]),(0,tslib_es6.w6)("design:returntype",String)],ScreenModeSelectors,"size",null);var ngx_google_analytics=__webpack_require__("./node_modules/ngx-google-analytics/fesm2020/ngx-google-analytics.mjs"),contact_behavior_component=__webpack_require__("./libs/components/behavioral/src/lib/contact-behavior/contact-behavior.component.ts");let FooterBehaviorComponent=class FooterBehaviorComponent{constructor(){this.productLogoUrl=(0,select_snapshot.w)(resource_registry_selectors.S.url,resource_ids.Dw),this.productTitle=(0,select_snapshot.w)(resource_registry_selectors.S.anyText,resource_ids.tc),this.downloadFormats=(0,select_snapshot.g)(DownloadSelectors.formats),this.hraPortal=link_ids.Portal,this.illustrationMetadata=link_ids.Illustration,this.embed=link_ids.Embed,this.download=(0,dispatch.WI)(download_action.UW),this.size=(0,select_snapshot.g)(ScreenModeSelectors.size),this.dialog=(0,core.inject)(dialog.uw),this.ga=(0,core.inject)(ngx_google_analytics.$r)}contact(){const dialogConfig=new dialog.vA;dialogConfig.disableClose=!0,this.dialog.open(contact_behavior_component.Q,dialogConfig),this.ga.event("contact_open","modal")}};FooterBehaviorComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ftu-footer-behavior",standalone:!0,imports:[common.CommonModule,dialog.Is,FooterComponent,contact_behavior_component.Q],template:'<hra-footer\n  [productLogoUrl]="productLogoUrl()"\n  [productTitle]="productTitle()"\n  [hraPortal]="hraPortal"\n  [illustrationMetadata]="illustrationMetadata"\n  [embed]="embed"\n  [downloadFormats]="downloadFormats()"\n  (contactClick)="contact()"\n  (download)="download($event.id)"\n  [size]="size()"\n>\n</hra-footer>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[footer_behavior_componentngResource_default()]})],FooterBehaviorComponent);const footer_behavior_component_stories={title:"FooterBehaviorComponent",component:FooterBehaviorComponent,parameters:{state:{states:[resource_registry_state.E],actions:[new resource_registry_actions.AU("assets/resources/header.yml")]}},decorators:[(0,dist.moduleMetadata)({imports:[ngxs_store.$l.forRoot([resource_registry_state.E])]})]},Primary=(args=>({props:args})).bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: FooterBehaviorComponent) => ({\n  props: args\n})",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./libs/components/behavioral/src/lib/footer-behavior/footer-behavior.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/footer/footer.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: flex;\n  padding: 0.75rem 2rem;\n  border-top: 0.063rem solid #d3d3d3;\n  align-items: center;\n  background-color: #f8f9fa;\n  gap: 1rem;\n  --palette-primary-500: #abcdef;\n}\n:host .controls {\n  display: flex;\n  justify-content: flex-end;\n}\n:host .filler {\n  flex-grow: 1;\n}\n:host .product-title {\n  color: #990000;\n  margin-right: 0rem;\n}\n:host a {\n  cursor: pointer;\n  display: flex;\n}\n:host .product-logo-image {\n  height: 1.2rem;\n  margin-right: 1rem;\n}\n:host button {\n  justify-content: center;\n  align-items: center;\n  min-width: calc(9rem + 3px);\n  min-height: 3rem;\n  gap: 0.5rem;\n  border: 1px solid;\n  transition: none;\n  --palette-primary-100-rgb: #4c5a69;\n  --palette-primary-500-rgb: #243142;\n}\n:host button:hover {\n  border: 2px solid;\n}\n:host button.mat-accent:active {\n  --palette-primary-700-rgb: #4c5a69;\n}\n:host button.mat-accent .mat-icon {\n  z-index: 1;\n}\n\n::ng-deep .download-options-panel {\n  box-shadow: 0.1rem 0.1rem 0.4rem 0.2rem #dad7d7;\n  background-color: #ffffff;\n}\n\n::ng-deep .download-button .mdc-button__label {\n  display: flex;\n  gap: 0.5rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);