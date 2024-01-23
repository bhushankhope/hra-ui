"use strict";(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[634],{"./node_modules/@angular/cdk/fesm2022/collections.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A8:()=>UniqueSelectionDispatcher,Ov:()=>SelectionModel,P3:()=>ArrayDataSource,Z9:()=>isDataSource,eX:()=>_RecycleViewRepeaterStrategy,k:()=>_VIEW_REPEATER_STRATEGY,o2:()=>DataSource,yy:()=>_DisposeViewRepeaterStrategy});var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isObservable.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");class DataSource{}function isDataSource(value){return value&&"function"==typeof value.connect&&!(value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.c)}class ArrayDataSource extends DataSource{constructor(_data){super(),this._data=_data}connect(){return(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.b)(this._data)?this._data:(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this._data)}disconnect(){}}class _DisposeViewRepeaterStrategy{applyChanges(changes,viewContainerRef,itemContextFactory,itemValueResolver,itemViewChanged){changes.forEachOperation(((record,adjustedPreviousIndex,currentIndex)=>{let view,operation;if(null==record.previousIndex){const insertContext=itemContextFactory(record,adjustedPreviousIndex,currentIndex);view=viewContainerRef.createEmbeddedView(insertContext.templateRef,insertContext.context,insertContext.index),operation=1}else null==currentIndex?(viewContainerRef.remove(adjustedPreviousIndex),operation=3):(view=viewContainerRef.get(adjustedPreviousIndex),viewContainerRef.move(view,currentIndex),operation=2);itemViewChanged&&itemViewChanged({context:view?.context,operation,record})}))}detach(){}}class _RecycleViewRepeaterStrategy{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(changes,viewContainerRef,itemContextFactory,itemValueResolver,itemViewChanged){changes.forEachOperation(((record,adjustedPreviousIndex,currentIndex)=>{let view,operation;if(null==record.previousIndex){const viewArgsFactory=()=>itemContextFactory(record,adjustedPreviousIndex,currentIndex);view=this._insertView(viewArgsFactory,currentIndex,viewContainerRef,itemValueResolver(record)),operation=view?1:0}else null==currentIndex?(this._detachAndCacheView(adjustedPreviousIndex,viewContainerRef),operation=3):(view=this._moveView(adjustedPreviousIndex,currentIndex,viewContainerRef,itemValueResolver(record)),operation=2);itemViewChanged&&itemViewChanged({context:view?.context,operation,record})}))}detach(){for(const view of this._viewCache)view.destroy();this._viewCache=[]}_insertView(viewArgsFactory,currentIndex,viewContainerRef,value){const cachedView=this._insertViewFromCache(currentIndex,viewContainerRef);if(cachedView)return void(cachedView.context.$implicit=value);const viewArgs=viewArgsFactory();return viewContainerRef.createEmbeddedView(viewArgs.templateRef,viewArgs.context,viewArgs.index)}_detachAndCacheView(index,viewContainerRef){const detachedView=viewContainerRef.detach(index);this._maybeCacheView(detachedView,viewContainerRef)}_moveView(adjustedPreviousIndex,currentIndex,viewContainerRef,value){const view=viewContainerRef.get(adjustedPreviousIndex);return viewContainerRef.move(view,currentIndex),view.context.$implicit=value,view}_maybeCacheView(view,viewContainerRef){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(view);else{const index=viewContainerRef.indexOf(view);-1===index?view.destroy():viewContainerRef.remove(index)}}_insertViewFromCache(index,viewContainerRef){const cachedView=this._viewCache.pop();return cachedView&&viewContainerRef.insert(cachedView,index),cachedView||null}}class SelectionModel{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(_multiple=!1,initiallySelectedValues,_emitChanges=!0,compareWith){this._multiple=_multiple,this._emitChanges=_emitChanges,this.compareWith=compareWith,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new rxjs__WEBPACK_IMPORTED_MODULE_3__.x,initiallySelectedValues&&initiallySelectedValues.length&&(_multiple?initiallySelectedValues.forEach((value=>this._markSelected(value))):this._markSelected(initiallySelectedValues[0]),this._selectedToEmit.length=0)}select(...values){this._verifyValueAssignment(values),values.forEach((value=>this._markSelected(value)));const changed=this._hasQueuedChanges();return this._emitChangeEvent(),changed}deselect(...values){this._verifyValueAssignment(values),values.forEach((value=>this._unmarkSelected(value)));const changed=this._hasQueuedChanges();return this._emitChangeEvent(),changed}setSelection(...values){this._verifyValueAssignment(values);const oldValues=this.selected,newSelectedSet=new Set(values);values.forEach((value=>this._markSelected(value))),oldValues.filter((value=>!newSelectedSet.has(value))).forEach((value=>this._unmarkSelected(value)));const changed=this._hasQueuedChanges();return this._emitChangeEvent(),changed}toggle(value){return this.isSelected(value)?this.deselect(value):this.select(value)}clear(flushEvent=!0){this._unmarkAll();const changed=this._hasQueuedChanges();return flushEvent&&this._emitChangeEvent(),changed}isSelected(value){return this._selection.has(this._getConcreteValue(value))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(predicate){this._multiple&&this.selected&&this._selected.sort(predicate)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(value){value=this._getConcreteValue(value),this.isSelected(value)||(this._multiple||this._unmarkAll(),this.isSelected(value)||this._selection.add(value),this._emitChanges&&this._selectedToEmit.push(value))}_unmarkSelected(value){value=this._getConcreteValue(value),this.isSelected(value)&&(this._selection.delete(value),this._emitChanges&&this._deselectedToEmit.push(value))}_unmarkAll(){this.isEmpty()||this._selection.forEach((value=>this._unmarkSelected(value)))}_verifyValueAssignment(values){if(values.length>1&&!this._multiple&&("undefined"==typeof ngDevMode||ngDevMode))throw function getMultipleValuesInSingleSelectionError(){return Error("Cannot pass multiple values into SelectionModel with single-value mode.")}()}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(inputValue){if(this.compareWith){for(let selectedValue of this._selection)if(this.compareWith(inputValue,selectedValue))return selectedValue;return inputValue}return inputValue}}class UniqueSelectionDispatcher{constructor(){this._listeners=[]}notify(id,name){for(let listener of this._listeners)listener(id,name)}listen(listener){return this._listeners.push(listener),()=>{this._listeners=this._listeners.filter((registered=>listener!==registered))}}ngOnDestroy(){this._listeners=[]}static#_=this.ɵfac=function UniqueSelectionDispatcher_Factory(t){return new(t||UniqueSelectionDispatcher)};static#_2=this.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({token:UniqueSelectionDispatcher,factory:UniqueSelectionDispatcher.ɵfac,providedIn:"root"})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](UniqueSelectionDispatcher,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,args:[{providedIn:"root"}]}],null,null);const _VIEW_REPEATER_STRATEGY=new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken("_ViewRepeater")},"./node_modules/@angular/cdk/fesm2022/portal.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C5:()=>ComponentPortal,Pl:()=>CdkPortalOutlet,UE:()=>TemplatePortal,eL:()=>PortalModule,en:()=>BasePortalOutlet,ig:()=>CdkPortal,u0:()=>DomPortalOutlet});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");function throwPortalAlreadyAttachedError(){throw Error("Host already has a portal attached")}class Portal{attach(host){return("undefined"==typeof ngDevMode||ngDevMode)&&(null==host&&function throwNullPortalOutletError(){throw Error("Attempting to attach a portal to a null PortalOutlet")}(),host.hasAttached()&&throwPortalAlreadyAttachedError()),this._attachedHost=host,host.attach(this)}detach(){let host=this._attachedHost;null!=host?(this._attachedHost=null,host.detach()):("undefined"==typeof ngDevMode||ngDevMode)&&function throwNoPortalAttachedError(){throw Error("Attempting to detach a portal that is not attached to a host")}()}get isAttached(){return null!=this._attachedHost}setAttachedHost(host){this._attachedHost=host}}class ComponentPortal extends Portal{constructor(component,viewContainerRef,injector,componentFactoryResolver,projectableNodes){super(),this.component=component,this.viewContainerRef=viewContainerRef,this.injector=injector,this.componentFactoryResolver=componentFactoryResolver,this.projectableNodes=projectableNodes}}class TemplatePortal extends Portal{constructor(templateRef,viewContainerRef,context,injector){super(),this.templateRef=templateRef,this.viewContainerRef=viewContainerRef,this.context=context,this.injector=injector}get origin(){return this.templateRef.elementRef}attach(host,context=this.context){return this.context=context,super.attach(host)}detach(){return this.context=void 0,super.detach()}}class DomPortal extends Portal{constructor(element){super(),this.element=element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef?element.nativeElement:element}}class BasePortalOutlet{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(portal){return("undefined"==typeof ngDevMode||ngDevMode)&&(portal||function throwNullPortalError(){throw Error("Must provide a portal to attach")}(),this.hasAttached()&&throwPortalAlreadyAttachedError(),this._isDisposed&&function throwPortalOutletAlreadyDisposedError(){throw Error("This PortalOutlet has already been disposed")}()),portal instanceof ComponentPortal?(this._attachedPortal=portal,this.attachComponentPortal(portal)):portal instanceof TemplatePortal?(this._attachedPortal=portal,this.attachTemplatePortal(portal)):this.attachDomPortal&&portal instanceof DomPortal?(this._attachedPortal=portal,this.attachDomPortal(portal)):void(("undefined"==typeof ngDevMode||ngDevMode)&&function throwUnknownPortalTypeError(){throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")}())}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(fn){this._disposeFn=fn}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class DomPortalOutlet extends BasePortalOutlet{constructor(outletElement,_componentFactoryResolver,_appRef,_defaultInjector,_document){super(),this.outletElement=outletElement,this._componentFactoryResolver=_componentFactoryResolver,this._appRef=_appRef,this._defaultInjector=_defaultInjector,this.attachDomPortal=portal=>{if(!this._document&&("undefined"==typeof ngDevMode||ngDevMode))throw Error("Cannot attach DOM portal without _document constructor parameter");const element=portal.element;if(!element.parentNode&&("undefined"==typeof ngDevMode||ngDevMode))throw Error("DOM portal content must be attached to a parent node.");const anchorNode=this._document.createComment("dom-portal");element.parentNode.insertBefore(anchorNode,element),this.outletElement.appendChild(element),this._attachedPortal=portal,super.setDisposeFn((()=>{anchorNode.parentNode&&anchorNode.parentNode.replaceChild(element,anchorNode)}))},this._document=_document}attachComponentPortal(portal){const resolver=portal.componentFactoryResolver||this._componentFactoryResolver;if(("undefined"==typeof ngDevMode||ngDevMode)&&!resolver)throw Error("Cannot attach component portal to outlet without a ComponentFactoryResolver.");const componentFactory=resolver.resolveComponentFactory(portal.component);let componentRef;if(portal.viewContainerRef)componentRef=portal.viewContainerRef.createComponent(componentFactory,portal.viewContainerRef.length,portal.injector||portal.viewContainerRef.injector,portal.projectableNodes||void 0),this.setDisposeFn((()=>componentRef.destroy()));else{if(("undefined"==typeof ngDevMode||ngDevMode)&&!this._appRef)throw Error("Cannot attach component portal to outlet without an ApplicationRef.");componentRef=componentFactory.create(portal.injector||this._defaultInjector||_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.NULL),this._appRef.attachView(componentRef.hostView),this.setDisposeFn((()=>{this._appRef.viewCount>0&&this._appRef.detachView(componentRef.hostView),componentRef.destroy()}))}return this.outletElement.appendChild(this._getComponentRootNode(componentRef)),this._attachedPortal=portal,componentRef}attachTemplatePortal(portal){let viewContainer=portal.viewContainerRef,viewRef=viewContainer.createEmbeddedView(portal.templateRef,portal.context,{injector:portal.injector});return viewRef.rootNodes.forEach((rootNode=>this.outletElement.appendChild(rootNode))),viewRef.detectChanges(),this.setDisposeFn((()=>{let index=viewContainer.indexOf(viewRef);-1!==index&&viewContainer.remove(index)})),this._attachedPortal=portal,viewRef}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(componentRef){return componentRef.hostView.rootNodes[0]}}class CdkPortal extends TemplatePortal{constructor(templateRef,viewContainerRef){super(templateRef,viewContainerRef)}static#_=this.ɵfac=function CdkPortal_Factory(t){return new(t||CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef))};static#_2=this.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:CdkPortal,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,args:[{selector:"[cdkPortal]",exportAs:"cdkPortal"}]}],(()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef}]),null);class TemplatePortalDirective extends CdkPortal{static#_=this.ɵfac=(()=>{let ɵTemplatePortalDirective_BaseFactory;return function TemplatePortalDirective_Factory(t){return(ɵTemplatePortalDirective_BaseFactory||(ɵTemplatePortalDirective_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective)))(t||TemplatePortalDirective)}})();static#_2=this.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:TemplatePortalDirective,selectors:[["","cdk-portal",""],["","portal",""]],exportAs:["cdkPortal"],features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{provide:CdkPortal,useExisting:TemplatePortalDirective}]),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,args:[{selector:"[cdk-portal], [portal]",exportAs:"cdkPortal",providers:[{provide:CdkPortal,useExisting:TemplatePortalDirective}]}]}],null,null);class CdkPortalOutlet extends BasePortalOutlet{constructor(_componentFactoryResolver,_viewContainerRef,_document){super(),this._componentFactoryResolver=_componentFactoryResolver,this._viewContainerRef=_viewContainerRef,this._isInitialized=!1,this.attached=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.attachDomPortal=portal=>{if(!this._document&&("undefined"==typeof ngDevMode||ngDevMode))throw Error("Cannot attach DOM portal without _document constructor parameter");const element=portal.element;if(!element.parentNode&&("undefined"==typeof ngDevMode||ngDevMode))throw Error("DOM portal content must be attached to a parent node.");const anchorNode=this._document.createComment("dom-portal");portal.setAttachedHost(this),element.parentNode.insertBefore(anchorNode,element),this._getRootNode().appendChild(element),this._attachedPortal=portal,super.setDisposeFn((()=>{anchorNode.parentNode&&anchorNode.parentNode.replaceChild(element,anchorNode)}))},this._document=_document}get portal(){return this._attachedPortal}set portal(portal){(!this.hasAttached()||portal||this._isInitialized)&&(this.hasAttached()&&super.detach(),portal&&super.attach(portal),this._attachedPortal=portal||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(portal){portal.setAttachedHost(this);const viewContainerRef=null!=portal.viewContainerRef?portal.viewContainerRef:this._viewContainerRef,componentFactory=(portal.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(portal.component),ref=viewContainerRef.createComponent(componentFactory,viewContainerRef.length,portal.injector||viewContainerRef.injector,portal.projectableNodes||void 0);return viewContainerRef!==this._viewContainerRef&&this._getRootNode().appendChild(ref.hostView.rootNodes[0]),super.setDisposeFn((()=>ref.destroy())),this._attachedPortal=portal,this._attachedRef=ref,this.attached.emit(ref),ref}attachTemplatePortal(portal){portal.setAttachedHost(this);const viewRef=this._viewContainerRef.createEmbeddedView(portal.templateRef,portal.context,{injector:portal.injector});return super.setDisposeFn((()=>this._viewContainerRef.clear())),this._attachedPortal=portal,this._attachedRef=viewRef,this.attached.emit(viewRef),viewRef}_getRootNode(){const nativeElement=this._viewContainerRef.element.nativeElement;return nativeElement.nodeType===nativeElement.ELEMENT_NODE?nativeElement:nativeElement.parentNode}static#_=this.ɵfac=function CdkPortalOutlet_Factory(t){return new(t||CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT))};static#_2=this.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:CdkPortalOutlet,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,args:[{selector:"[cdkPortalOutlet]",exportAs:"cdkPortalOutlet",inputs:["portal: cdkPortalOutlet"]}]}],(()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,args:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]}]}]),{attached:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]});class PortalHostDirective extends CdkPortalOutlet{static#_=this.ɵfac=(()=>{let ɵPortalHostDirective_BaseFactory;return function PortalHostDirective_Factory(t){return(ɵPortalHostDirective_BaseFactory||(ɵPortalHostDirective_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective)))(t||PortalHostDirective)}})();static#_2=this.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:PortalHostDirective,selectors:[["","cdkPortalHost",""],["","portalHost",""]],inputs:{portal:["cdkPortalHost","portal"]},exportAs:["cdkPortalHost"],features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{provide:CdkPortalOutlet,useExisting:PortalHostDirective}]),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,args:[{selector:"[cdkPortalHost], [portalHost]",exportAs:"cdkPortalHost",inputs:["portal: cdkPortalHost"],providers:[{provide:CdkPortalOutlet,useExisting:PortalHostDirective}]}]}],null,null);class PortalModule{static#_=this.ɵfac=function PortalModule_Factory(t){return new(t||PortalModule)};static#_2=this.ɵmod=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:PortalModule,declarations:[CdkPortal,CdkPortalOutlet,TemplatePortalDirective,PortalHostDirective],exports:[CdkPortal,CdkPortalOutlet,TemplatePortalDirective,PortalHostDirective]});static#_3=this.ɵinj=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,args:[{exports:[CdkPortal,CdkPortalOutlet,TemplatePortalDirective,PortalHostDirective],declarations:[CdkPortal,CdkPortalOutlet,TemplatePortalDirective,PortalHostDirective]}]}],null,null)},"./node_modules/immer/dist/immer.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Uy:()=>produce});var NOTHING=Symbol.for("immer-nothing"),DRAFTABLE=Symbol.for("immer-draftable"),DRAFT_STATE=Symbol.for("immer-state");function die(error,...args){throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`)}var getPrototypeOf=Object.getPrototypeOf;function isDraft(value){return!!value&&!!value[DRAFT_STATE]}function isDraftable(value){return!!value&&(isPlainObject(value)||Array.isArray(value)||!!value[DRAFTABLE]||!!value.constructor?.[DRAFTABLE]||isMap(value)||isSet(value))}var objectCtorString=Object.prototype.constructor.toString();function isPlainObject(value){if(!value||"object"!=typeof value)return!1;const proto=getPrototypeOf(value);if(null===proto)return!0;const Ctor=Object.hasOwnProperty.call(proto,"constructor")&&proto.constructor;return Ctor===Object||"function"==typeof Ctor&&Function.toString.call(Ctor)===objectCtorString}function each(obj,iter){0===getArchtype(obj)?Object.entries(obj).forEach((([key,value])=>{iter(key,value,obj)})):obj.forEach(((entry,index)=>iter(index,entry,obj)))}function getArchtype(thing){const state=thing[DRAFT_STATE];return state?state.type_:Array.isArray(thing)?1:isMap(thing)?2:isSet(thing)?3:0}function has(thing,prop){return 2===getArchtype(thing)?thing.has(prop):Object.prototype.hasOwnProperty.call(thing,prop)}function set(thing,propOrOldValue,value){const t=getArchtype(thing);2===t?thing.set(propOrOldValue,value):3===t?thing.add(value):thing[propOrOldValue]=value}function isMap(target){return target instanceof Map}function isSet(target){return target instanceof Set}function latest(state){return state.copy_||state.base_}function shallowCopy(base,strict){if(isMap(base))return new Map(base);if(isSet(base))return new Set(base);if(Array.isArray(base))return Array.prototype.slice.call(base);if(!strict&&isPlainObject(base)){if(!getPrototypeOf(base)){const obj=Object.create(null);return Object.assign(obj,base)}return{...base}}const descriptors=Object.getOwnPropertyDescriptors(base);delete descriptors[DRAFT_STATE];let keys=Reflect.ownKeys(descriptors);for(let i=0;i<keys.length;i++){const key=keys[i],desc=descriptors[key];!1===desc.writable&&(desc.writable=!0,desc.configurable=!0),(desc.get||desc.set)&&(descriptors[key]={configurable:!0,writable:!0,enumerable:desc.enumerable,value:base[key]})}return Object.create(getPrototypeOf(base),descriptors)}function freeze(obj,deep=!1){return isFrozen(obj)||isDraft(obj)||!isDraftable(obj)||(getArchtype(obj)>1&&(obj.set=obj.add=obj.clear=obj.delete=dontMutateFrozenCollections),Object.freeze(obj),deep&&each(obj,((_key,value)=>freeze(value,!0)))),obj}function dontMutateFrozenCollections(){die(2)}function isFrozen(obj){return Object.isFrozen(obj)}var currentScope,plugins={};function getPlugin(pluginKey){const plugin=plugins[pluginKey];return plugin||die(0),plugin}function getCurrentScope(){return currentScope}function usePatchesInScope(scope,patchListener){patchListener&&(getPlugin("Patches"),scope.patches_=[],scope.inversePatches_=[],scope.patchListener_=patchListener)}function revokeScope(scope){leaveScope(scope),scope.drafts_.forEach(revokeDraft),scope.drafts_=null}function leaveScope(scope){scope===currentScope&&(currentScope=scope.parent_)}function enterScope(immer2){return currentScope=function createScope(parent_,immer_){return{drafts_:[],parent_,immer_,canAutoFreeze_:!0,unfinalizedDrafts_:0}}(currentScope,immer2)}function revokeDraft(draft){const state=draft[DRAFT_STATE];0===state.type_||1===state.type_?state.revoke_():state.revoked_=!0}function processResult(result,scope){scope.unfinalizedDrafts_=scope.drafts_.length;const baseDraft=scope.drafts_[0];return void 0!==result&&result!==baseDraft?(baseDraft[DRAFT_STATE].modified_&&(revokeScope(scope),die(4)),isDraftable(result)&&(result=finalize(scope,result),scope.parent_||maybeFreeze(scope,result)),scope.patches_&&getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_,result,scope.patches_,scope.inversePatches_)):result=finalize(scope,baseDraft,[]),revokeScope(scope),scope.patches_&&scope.patchListener_(scope.patches_,scope.inversePatches_),result!==NOTHING?result:void 0}function finalize(rootScope,value,path){if(isFrozen(value))return value;const state=value[DRAFT_STATE];if(!state)return each(value,((key,childValue)=>finalizeProperty(rootScope,state,value,key,childValue,path))),value;if(state.scope_!==rootScope)return value;if(!state.modified_)return maybeFreeze(rootScope,state.base_,!0),state.base_;if(!state.finalized_){state.finalized_=!0,state.scope_.unfinalizedDrafts_--;const result=state.copy_;let resultEach=result,isSet2=!1;3===state.type_&&(resultEach=new Set(result),result.clear(),isSet2=!0),each(resultEach,((key,childValue)=>finalizeProperty(rootScope,state,result,key,childValue,path,isSet2))),maybeFreeze(rootScope,result,!1),path&&rootScope.patches_&&getPlugin("Patches").generatePatches_(state,path,rootScope.patches_,rootScope.inversePatches_)}return state.copy_}function finalizeProperty(rootScope,parentState,targetObject,prop,childValue,rootPath,targetIsSet){if(isDraft(childValue)){const res=finalize(rootScope,childValue,rootPath&&parentState&&3!==parentState.type_&&!has(parentState.assigned_,prop)?rootPath.concat(prop):void 0);if(set(targetObject,prop,res),!isDraft(res))return;rootScope.canAutoFreeze_=!1}else targetIsSet&&targetObject.add(childValue);if(isDraftable(childValue)&&!isFrozen(childValue)){if(!rootScope.immer_.autoFreeze_&&rootScope.unfinalizedDrafts_<1)return;finalize(rootScope,childValue),parentState&&parentState.scope_.parent_||maybeFreeze(rootScope,childValue)}}function maybeFreeze(scope,value,deep=!1){!scope.parent_&&scope.immer_.autoFreeze_&&scope.canAutoFreeze_&&freeze(value,deep)}var objectTraps={get(state,prop){if(prop===DRAFT_STATE)return state;const source=latest(state);if(!has(source,prop))return function readPropFromProto(state,source,prop){const desc=getDescriptorFromProto(source,prop);return desc?"value"in desc?desc.value:desc.get?.call(state.draft_):void 0}(state,source,prop);const value=source[prop];return state.finalized_||!isDraftable(value)?value:value===peek(state.base_,prop)?(prepareCopy(state),state.copy_[prop]=createProxy(value,state)):value},has:(state,prop)=>prop in latest(state),ownKeys:state=>Reflect.ownKeys(latest(state)),set(state,prop,value){const desc=getDescriptorFromProto(latest(state),prop);if(desc?.set)return desc.set.call(state.draft_,value),!0;if(!state.modified_){const current2=peek(latest(state),prop),currentState=current2?.[DRAFT_STATE];if(currentState&&currentState.base_===value)return state.copy_[prop]=value,state.assigned_[prop]=!1,!0;if(function is(x,y){return x===y?0!==x||1/x==1/y:x!=x&&y!=y}(value,current2)&&(void 0!==value||has(state.base_,prop)))return!0;prepareCopy(state),markChanged(state)}return state.copy_[prop]===value&&(void 0!==value||prop in state.copy_)||Number.isNaN(value)&&Number.isNaN(state.copy_[prop])||(state.copy_[prop]=value,state.assigned_[prop]=!0),!0},deleteProperty:(state,prop)=>(void 0!==peek(state.base_,prop)||prop in state.base_?(state.assigned_[prop]=!1,prepareCopy(state),markChanged(state)):delete state.assigned_[prop],state.copy_&&delete state.copy_[prop],!0),getOwnPropertyDescriptor(state,prop){const owner=latest(state),desc=Reflect.getOwnPropertyDescriptor(owner,prop);return desc?{writable:!0,configurable:1!==state.type_||"length"!==prop,enumerable:desc.enumerable,value:owner[prop]}:desc},defineProperty(){die(11)},getPrototypeOf:state=>getPrototypeOf(state.base_),setPrototypeOf(){die(12)}},arrayTraps={};function peek(draft,prop){const state=draft[DRAFT_STATE];return(state?latest(state):draft)[prop]}function getDescriptorFromProto(source,prop){if(!(prop in source))return;let proto=getPrototypeOf(source);for(;proto;){const desc=Object.getOwnPropertyDescriptor(proto,prop);if(desc)return desc;proto=getPrototypeOf(proto)}}function markChanged(state){state.modified_||(state.modified_=!0,state.parent_&&markChanged(state.parent_))}function prepareCopy(state){state.copy_||(state.copy_=shallowCopy(state.base_,state.scope_.immer_.useStrictShallowCopy_))}each(objectTraps,((key,fn)=>{arrayTraps[key]=function(){return arguments[0]=arguments[0][0],fn.apply(this,arguments)}})),arrayTraps.deleteProperty=function(state,prop){return arrayTraps.set.call(this,state,prop,void 0)},arrayTraps.set=function(state,prop,value){return objectTraps.set.call(this,state[0],prop,value,state[0])};function createProxy(value,parent){const draft=isMap(value)?getPlugin("MapSet").proxyMap_(value,parent):isSet(value)?getPlugin("MapSet").proxySet_(value,parent):function createProxyProxy(base,parent){const isArray=Array.isArray(base),state={type_:isArray?1:0,scope_:parent?parent.scope_:getCurrentScope(),modified_:!1,finalized_:!1,assigned_:{},parent_:parent,base_:base,draft_:null,copy_:null,revoke_:null,isManual_:!1};let target=state,traps=objectTraps;isArray&&(target=[state],traps=arrayTraps);const{revoke,proxy}=Proxy.revocable(target,traps);return state.draft_=proxy,state.revoke_=revoke,proxy}(value,parent);return(parent?parent.scope_:getCurrentScope()).drafts_.push(draft),draft}function currentImpl(value){if(!isDraftable(value)||isFrozen(value))return value;const state=value[DRAFT_STATE];let copy;if(state){if(!state.modified_)return state.base_;state.finalized_=!0,copy=shallowCopy(value,state.scope_.immer_.useStrictShallowCopy_)}else copy=shallowCopy(value,!0);return each(copy,((key,childValue)=>{set(copy,key,currentImpl(childValue))})),state&&(state.finalized_=!1),copy}var immer=new class{constructor(config){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(base,recipe,patchListener)=>{if("function"==typeof base&&"function"!=typeof recipe){const defaultBase=recipe;recipe=base;const self=this;return function curriedProduce(base2=defaultBase,...args){return self.produce(base2,(draft=>recipe.call(this,draft,...args)))}}let result;if("function"!=typeof recipe&&die(6),void 0!==patchListener&&"function"!=typeof patchListener&&die(7),isDraftable(base)){const scope=enterScope(this),proxy=createProxy(base,void 0);let hasError=!0;try{result=recipe(proxy),hasError=!1}finally{hasError?revokeScope(scope):leaveScope(scope)}return usePatchesInScope(scope,patchListener),processResult(result,scope)}if(!base||"object"!=typeof base){if(result=recipe(base),void 0===result&&(result=base),result===NOTHING&&(result=void 0),this.autoFreeze_&&freeze(result,!0),patchListener){const p=[],ip=[];getPlugin("Patches").generateReplacementPatches_(base,result,p,ip),patchListener(p,ip)}return result}die(1)},this.produceWithPatches=(base,recipe)=>{if("function"==typeof base)return(state,...args)=>this.produceWithPatches(state,(draft=>base(draft,...args)));let patches,inversePatches;return[this.produce(base,recipe,((p,ip)=>{patches=p,inversePatches=ip})),patches,inversePatches]},"boolean"==typeof config?.autoFreeze&&this.setAutoFreeze(config.autoFreeze),"boolean"==typeof config?.useStrictShallowCopy&&this.setUseStrictShallowCopy(config.useStrictShallowCopy)}createDraft(base){isDraftable(base)||die(8),isDraft(base)&&(base=function current(value){isDraft(value)||die(10);return currentImpl(value)}(base));const scope=enterScope(this),proxy=createProxy(base,void 0);return proxy[DRAFT_STATE].isManual_=!0,leaveScope(scope),proxy}finishDraft(draft,patchListener){const state=draft&&draft[DRAFT_STATE];state&&state.isManual_||die(9);const{scope_:scope}=state;return usePatchesInScope(scope,patchListener),processResult(void 0,scope)}setAutoFreeze(value){this.autoFreeze_=value}setUseStrictShallowCopy(value){this.useStrictShallowCopy_=value}applyPatches(base,patches){let i;for(i=patches.length-1;i>=0;i--){const patch=patches[i];if(0===patch.path.length&&"replace"===patch.op){base=patch.value;break}}i>-1&&(patches=patches.slice(i+1));const applyPatchesImpl=getPlugin("Patches").applyPatches_;return isDraft(base)?applyPatchesImpl(base,patches):this.produce(base,(draft=>applyPatchesImpl(draft,patches)))}},produce=immer.produce;immer.produceWithPatches.bind(immer),immer.setAutoFreeze.bind(immer),immer.setUseStrictShallowCopy.bind(immer),immer.applyPatches.bind(immer),immer.createDraft.bind(immer),immer.finishDraft.bind(immer)}}]);