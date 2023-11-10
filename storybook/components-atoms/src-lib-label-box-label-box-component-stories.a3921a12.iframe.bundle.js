/*! For license information please see src-lib-label-box-label-box-component-stories.a3921a12.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[242],{"./libs/components/atoms/src/lib/label-box/label-box.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,':host {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 2rem;\n  background: #f8f9fa;\n  font-family: "Inter";\n  font-size: 1rem;\n}\n:host .filler {\n  flex-grow: 1;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/label-box/label-box.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,WithIconAtEnd:()=>WithIconAtEnd,default:()=>label_box_component_stories});var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_core=__webpack_require__("./node_modules/@angular/material/fesm2020/core.mjs"),coercion=__webpack_require__("./node_modules/@angular/cdk/fesm2020/coercion.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),throwError=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/throwError.js"),forkJoin=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),catchError=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");var share=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),http=__webpack_require__("./node_modules/@angular/common/fesm2020/http.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs");let policy;function trustedHTMLFromString(html){return function getPolicy(){if(void 0===policy&&(policy=null,"undefined"!=typeof window)){const ttWindow=window;void 0!==ttWindow.trustedTypes&&(policy=ttWindow.trustedTypes.createPolicy("angular#components",{createHTML:s=>s}))}return policy}()?.createHTML(html)||html}function getMatIconNameNotFoundError(iconName){return Error(`Unable to find icon with the name "${iconName}"`)}function getMatIconFailedToSanitizeUrlError(url){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${url}".`)}function getMatIconFailedToSanitizeLiteralError(literal){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${literal}".`)}class SvgIconConfig{constructor(url,svgText,options){this.url=url,this.svgText=svgText,this.options=options}}class MatIconRegistry{constructor(_httpClient,_sanitizer,document,_errorHandler){this._httpClient=_httpClient,this._sanitizer=_sanitizer,this._errorHandler=_errorHandler,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=document}addSvgIcon(iconName,url,options){return this.addSvgIconInNamespace("",iconName,url,options)}addSvgIconLiteral(iconName,literal,options){return this.addSvgIconLiteralInNamespace("",iconName,literal,options)}addSvgIconInNamespace(namespace,iconName,url,options){return this._addSvgIconConfig(namespace,iconName,new SvgIconConfig(url,null,options))}addSvgIconResolver(resolver){return this._resolvers.push(resolver),this}addSvgIconLiteralInNamespace(namespace,iconName,literal,options){const cleanLiteral=this._sanitizer.sanitize(core.SecurityContext.HTML,literal);if(!cleanLiteral)throw getMatIconFailedToSanitizeLiteralError(literal);const trustedLiteral=trustedHTMLFromString(cleanLiteral);return this._addSvgIconConfig(namespace,iconName,new SvgIconConfig("",trustedLiteral,options))}addSvgIconSet(url,options){return this.addSvgIconSetInNamespace("",url,options)}addSvgIconSetLiteral(literal,options){return this.addSvgIconSetLiteralInNamespace("",literal,options)}addSvgIconSetInNamespace(namespace,url,options){return this._addSvgIconSetConfig(namespace,new SvgIconConfig(url,null,options))}addSvgIconSetLiteralInNamespace(namespace,literal,options){const cleanLiteral=this._sanitizer.sanitize(core.SecurityContext.HTML,literal);if(!cleanLiteral)throw getMatIconFailedToSanitizeLiteralError(literal);const trustedLiteral=trustedHTMLFromString(cleanLiteral);return this._addSvgIconSetConfig(namespace,new SvgIconConfig("",trustedLiteral,options))}registerFontClassAlias(alias,classNames=alias){return this._fontCssClassesByAlias.set(alias,classNames),this}classNameForFontAlias(alias){return this._fontCssClassesByAlias.get(alias)||alias}setDefaultFontSetClass(...classNames){return this._defaultFontSetClass=classNames,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(safeUrl){const url=this._sanitizer.sanitize(core.SecurityContext.RESOURCE_URL,safeUrl);if(!url)throw getMatIconFailedToSanitizeUrlError(safeUrl);const cachedIcon=this._cachedIconsByUrl.get(url);return cachedIcon?(0,of.of)(cloneSvg(cachedIcon)):this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl,null)).pipe((0,tap.b)((svg=>this._cachedIconsByUrl.set(url,svg))),(0,map.U)((svg=>cloneSvg(svg))))}getNamedSvgIcon(name,namespace=""){const key=iconKey(namespace,name);let config=this._svgIconConfigs.get(key);if(config)return this._getSvgFromConfig(config);if(config=this._getIconConfigFromResolvers(namespace,name),config)return this._svgIconConfigs.set(key,config),this._getSvgFromConfig(config);const iconSetConfigs=this._iconSetConfigs.get(namespace);return iconSetConfigs?this._getSvgFromIconSetConfigs(name,iconSetConfigs):(0,throwError._)(getMatIconNameNotFoundError(key))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(config){return config.svgText?(0,of.of)(cloneSvg(this._svgElementFromConfig(config))):this._loadSvgIconFromConfig(config).pipe((0,map.U)((svg=>cloneSvg(svg))))}_getSvgFromIconSetConfigs(name,iconSetConfigs){const namedIcon=this._extractIconWithNameFromAnySet(name,iconSetConfigs);if(namedIcon)return(0,of.of)(namedIcon);const iconSetFetchRequests=iconSetConfigs.filter((iconSetConfig=>!iconSetConfig.svgText)).map((iconSetConfig=>this._loadSvgIconSetFromConfig(iconSetConfig).pipe((0,catchError.K)((err=>{const errorMessage=`Loading icon set URL: ${this._sanitizer.sanitize(core.SecurityContext.RESOURCE_URL,iconSetConfig.url)} failed: ${err.message}`;return this._errorHandler.handleError(new Error(errorMessage)),(0,of.of)(null)})))));return(0,forkJoin.D)(iconSetFetchRequests).pipe((0,map.U)((()=>{const foundIcon=this._extractIconWithNameFromAnySet(name,iconSetConfigs);if(!foundIcon)throw getMatIconNameNotFoundError(name);return foundIcon})))}_extractIconWithNameFromAnySet(iconName,iconSetConfigs){for(let i=iconSetConfigs.length-1;i>=0;i--){const config=iconSetConfigs[i];if(config.svgText&&config.svgText.toString().indexOf(iconName)>-1){const svg=this._svgElementFromConfig(config),foundIcon=this._extractSvgIconFromSet(svg,iconName,config.options);if(foundIcon)return foundIcon}}return null}_loadSvgIconFromConfig(config){return this._fetchIcon(config).pipe((0,tap.b)((svgText=>config.svgText=svgText)),(0,map.U)((()=>this._svgElementFromConfig(config))))}_loadSvgIconSetFromConfig(config){return config.svgText?(0,of.of)(null):this._fetchIcon(config).pipe((0,tap.b)((svgText=>config.svgText=svgText)))}_extractSvgIconFromSet(iconSet,iconName,options){const iconSource=iconSet.querySelector(`[id="${iconName}"]`);if(!iconSource)return null;const iconElement=iconSource.cloneNode(!0);if(iconElement.removeAttribute("id"),"svg"===iconElement.nodeName.toLowerCase())return this._setSvgAttributes(iconElement,options);if("symbol"===iconElement.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(iconElement),options);const svg=this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));return svg.appendChild(iconElement),this._setSvgAttributes(svg,options)}_svgElementFromString(str){const div=this._document.createElement("DIV");div.innerHTML=str;const svg=div.querySelector("svg");if(!svg)throw Error("<svg> tag not found");return svg}_toSvgElement(element){const svg=this._svgElementFromString(trustedHTMLFromString("<svg></svg>")),attributes=element.attributes;for(let i=0;i<attributes.length;i++){const{name,value}=attributes[i];"id"!==name&&svg.setAttribute(name,value)}for(let i=0;i<element.childNodes.length;i++)element.childNodes[i].nodeType===this._document.ELEMENT_NODE&&svg.appendChild(element.childNodes[i].cloneNode(!0));return svg}_setSvgAttributes(svg,options){return svg.setAttribute("fit",""),svg.setAttribute("height","100%"),svg.setAttribute("width","100%"),svg.setAttribute("preserveAspectRatio","xMidYMid meet"),svg.setAttribute("focusable","false"),options&&options.viewBox&&svg.setAttribute("viewBox",options.viewBox),svg}_fetchIcon(iconConfig){const{url:safeUrl,options}=iconConfig,withCredentials=options?.withCredentials??!1;if(!this._httpClient)throw function getMatIconNoHttpProviderError(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==safeUrl)throw Error(`Cannot fetch icon from URL "${safeUrl}".`);const url=this._sanitizer.sanitize(core.SecurityContext.RESOURCE_URL,safeUrl);if(!url)throw getMatIconFailedToSanitizeUrlError(safeUrl);const inProgressFetch=this._inProgressUrlFetches.get(url);if(inProgressFetch)return inProgressFetch;const req=this._httpClient.get(url,{responseType:"text",withCredentials}).pipe((0,map.U)((svg=>trustedHTMLFromString(svg))),function finalize(callback){return(0,lift.e)((function(source,subscriber){try{source.subscribe(subscriber)}finally{subscriber.add(callback)}}))}((()=>this._inProgressUrlFetches.delete(url))),(0,share.B)());return this._inProgressUrlFetches.set(url,req),req}_addSvgIconConfig(namespace,iconName,config){return this._svgIconConfigs.set(iconKey(namespace,iconName),config),this}_addSvgIconSetConfig(namespace,config){const configNamespace=this._iconSetConfigs.get(namespace);return configNamespace?configNamespace.push(config):this._iconSetConfigs.set(namespace,[config]),this}_svgElementFromConfig(config){if(!config.svgElement){const svg=this._svgElementFromString(config.svgText);this._setSvgAttributes(svg,config.options),config.svgElement=svg}return config.svgElement}_getIconConfigFromResolvers(namespace,name){for(let i=0;i<this._resolvers.length;i++){const result=this._resolvers[i](name,namespace);if(result)return(value=result).url&&value.options?new SvgIconConfig(result.url,null,result.options):new SvgIconConfig(result,null)}var value}}MatIconRegistry.ɵfac=function MatIconRegistry_Factory(t){return new(t||MatIconRegistry)(core["ɵɵinject"](http.eN,8),core["ɵɵinject"](platform_browser.DomSanitizer),core["ɵɵinject"](common.DOCUMENT,8),core["ɵɵinject"](core.ErrorHandler))},MatIconRegistry.ɵprov=core["ɵɵdefineInjectable"]({token:MatIconRegistry,factory:MatIconRegistry.ɵfac,providedIn:"root"}),("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MatIconRegistry,[{type:core.Injectable,args:[{providedIn:"root"}]}],(function(){return[{type:http.eN,decorators:[{type:core.Optional}]},{type:platform_browser.DomSanitizer},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[common.DOCUMENT]}]},{type:core.ErrorHandler}]}),null);new core.Optional,new core.SkipSelf,new core.Optional,http.eN,platform_browser.DomSanitizer,core.ErrorHandler,new core.Optional,common.DOCUMENT;function cloneSvg(svg){return svg.cloneNode(!0)}function iconKey(namespace,name){return namespace+":"+name}const _MatIconBase=(0,fesm2020_core.pj)(class{constructor(_elementRef){this._elementRef=_elementRef}}),MAT_ICON_DEFAULT_OPTIONS=new core.InjectionToken("MAT_ICON_DEFAULT_OPTIONS"),MAT_ICON_LOCATION=new core.InjectionToken("mat-icon-location",{providedIn:"root",factory:function MAT_ICON_LOCATION_FACTORY(){const _document=(0,core.inject)(common.DOCUMENT),_location=_document?_document.location:null;return{getPathname:()=>_location?_location.pathname+_location.search:""}}});const funcIriAttributes=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],funcIriAttributeSelector=funcIriAttributes.map((attr=>`[${attr}]`)).join(", "),funcIriPattern=/^url\(['"]?#(.*?)['"]?\)$/;class MatIcon extends _MatIconBase{get inline(){return this._inline}set inline(inline){this._inline=(0,coercion.Ig)(inline)}get svgIcon(){return this._svgIcon}set svgIcon(value){value!==this._svgIcon&&(value?this._updateSvgIcon(value):this._svgIcon&&this._clearSvgElement(),this._svgIcon=value)}get fontSet(){return this._fontSet}set fontSet(value){const newValue=this._cleanupFontValue(value);newValue!==this._fontSet&&(this._fontSet=newValue,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(value){const newValue=this._cleanupFontValue(value);newValue!==this._fontIcon&&(this._fontIcon=newValue,this._updateFontIconClasses())}constructor(elementRef,_iconRegistry,ariaHidden,_location,_errorHandler,defaults){super(elementRef),this._iconRegistry=_iconRegistry,this._location=_location,this._errorHandler=_errorHandler,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=Subscription.w0.EMPTY,defaults&&(defaults.color&&(this.color=this.defaultColor=defaults.color),defaults.fontSet&&(this.fontSet=defaults.fontSet)),ariaHidden||elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(iconName){if(!iconName)return["",""];const parts=iconName.split(":");switch(parts.length){case 1:return["",parts[0]];case 2:return parts;default:throw Error(`Invalid icon name: "${iconName}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const cachedElements=this._elementsWithExternalReferences;if(cachedElements&&cachedElements.size){const newPath=this._location.getPathname();newPath!==this._previousPath&&(this._previousPath=newPath,this._prependPathToReferences(newPath))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(svg){this._clearSvgElement();const path=this._location.getPathname();this._previousPath=path,this._cacheChildrenWithExternalReferences(svg),this._prependPathToReferences(path),this._elementRef.nativeElement.appendChild(svg)}_clearSvgElement(){const layoutElement=this._elementRef.nativeElement;let childCount=layoutElement.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();childCount--;){const child=layoutElement.childNodes[childCount];1===child.nodeType&&"svg"!==child.nodeName.toLowerCase()||child.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const elem=this._elementRef.nativeElement,fontSetClasses=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter((className=>className.length>0));this._previousFontSetClass.forEach((className=>elem.classList.remove(className))),fontSetClasses.forEach((className=>elem.classList.add(className))),this._previousFontSetClass=fontSetClasses,this.fontIcon===this._previousFontIconClass||fontSetClasses.includes("mat-ligature-font")||(this._previousFontIconClass&&elem.classList.remove(this._previousFontIconClass),this.fontIcon&&elem.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(value){return"string"==typeof value?value.trim().split(" ")[0]:value}_prependPathToReferences(path){const elements=this._elementsWithExternalReferences;elements&&elements.forEach(((attrs,element)=>{attrs.forEach((attr=>{element.setAttribute(attr.name,`url('${path}#${attr.value}')`)}))}))}_cacheChildrenWithExternalReferences(element){const elementsWithFuncIri=element.querySelectorAll(funcIriAttributeSelector),elements=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<elementsWithFuncIri.length;i++)funcIriAttributes.forEach((attr=>{const elementWithReference=elementsWithFuncIri[i],value=elementWithReference.getAttribute(attr),match=value?value.match(funcIriPattern):null;if(match){let attributes=elements.get(elementWithReference);attributes||(attributes=[],elements.set(elementWithReference,attributes)),attributes.push({name:attr,value:match[1]})}}))}_updateSvgIcon(rawName){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),rawName){const[namespace,iconName]=this._splitIconName(rawName);namespace&&(this._svgNamespace=namespace),iconName&&(this._svgName=iconName),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(iconName,namespace).pipe((0,take.q)(1)).subscribe((svg=>this._setSvgElement(svg)),(err=>{const errorMessage=`Error retrieving icon ${namespace}:${iconName}! ${err.message}`;this._errorHandler.handleError(new Error(errorMessage))}))}}}MatIcon.ɵfac=function MatIcon_Factory(t){return new(t||MatIcon)(core["ɵɵdirectiveInject"](core.ElementRef),core["ɵɵdirectiveInject"](MatIconRegistry),core["ɵɵinjectAttribute"]("aria-hidden"),core["ɵɵdirectiveInject"](MAT_ICON_LOCATION),core["ɵɵdirectiveInject"](core.ErrorHandler),core["ɵɵdirectiveInject"](MAT_ICON_DEFAULT_OPTIONS,8))},MatIcon.ɵcmp=core["ɵɵdefineComponent"]({type:MatIcon,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function MatIcon_HostBindings(rf,ctx){2&rf&&(core["ɵɵattribute"]("data-mat-icon-type",ctx._usingFontIcon()?"font":"svg")("data-mat-icon-name",ctx._svgName||ctx.fontIcon)("data-mat-icon-namespace",ctx._svgNamespace||ctx.fontSet)("fontIcon",ctx._usingFontIcon()?ctx.fontIcon:null),core["ɵɵclassProp"]("mat-icon-inline",ctx.inline)("mat-icon-no-color","primary"!==ctx.color&&"accent"!==ctx.color&&"warn"!==ctx.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[core["ɵɵInheritDefinitionFeature"]],ngContentSelectors:["*"],decls:1,vars:0,template:function MatIcon_Template(rf,ctx){1&rf&&(core["ɵɵprojectionDef"](),core["ɵɵprojection"](0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MatIcon,[{type:core.Component,args:[{template:"<ng-content></ng-content>",selector:"mat-icon",exportAs:"matIcon",inputs:["color"],host:{role:"img",class:"mat-icon notranslate","[attr.data-mat-icon-type]":'_usingFontIcon() ? "font" : "svg"',"[attr.data-mat-icon-name]":"_svgName || fontIcon","[attr.data-mat-icon-namespace]":"_svgNamespace || fontSet","[attr.fontIcon]":"_usingFontIcon() ? fontIcon : null","[class.mat-icon-inline]":"inline","[class.mat-icon-no-color]":'color !== "primary" && color !== "accent" && color !== "warn"'},encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"]}]}],(function(){return[{type:core.ElementRef},{type:MatIconRegistry},{type:void 0,decorators:[{type:core.Attribute,args:["aria-hidden"]}]},{type:void 0,decorators:[{type:core.Inject,args:[MAT_ICON_LOCATION]}]},{type:core.ErrorHandler},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[MAT_ICON_DEFAULT_OPTIONS]}]}]}),{inline:[{type:core.Input}],svgIcon:[{type:core.Input}],fontSet:[{type:core.Input}],fontIcon:[{type:core.Input}]});class MatIconModule{}MatIconModule.ɵfac=function MatIconModule_Factory(t){return new(t||MatIconModule)},MatIconModule.ɵmod=core["ɵɵdefineNgModule"]({type:MatIconModule,declarations:[MatIcon],imports:[fesm2020_core.BQ],exports:[MatIcon,fesm2020_core.BQ]}),MatIconModule.ɵinj=core["ɵɵdefineInjector"]({imports:[fesm2020_core.BQ,fesm2020_core.BQ]}),("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MatIconModule,[{type:core.NgModule,args:[{imports:[fesm2020_core.BQ],exports:[MatIcon,fesm2020_core.BQ],declarations:[MatIcon]}]}],null,null);var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var label_box_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/label-box/label-box.component.scss?ngResource"),label_box_componentngResource_default=__webpack_require__.n(label_box_componentngResource);let LabelBoxComponent=class LabelBoxComponent{};LabelBoxComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-label-box",standalone:!0,imports:[common.CommonModule],template:'<ng-content></ng-content>\n\n<div class="filler"></div>\n\n<ng-content select=".end"></ng-content>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[label_box_componentngResource_default()]})],LabelBoxComponent);const label_box_component_stories={title:"LabelBoxComponent",component:LabelBoxComponent,decorators:[(0,dist.moduleMetadata)({imports:[MatIconModule]})]},Template=(content="")=>args=>({props:args,template:`\n    <hra-label-box>\n      ${content}\n    </hra-label-box>\n  `,styles:["\n      hra-label-box {\n        max-width: 400px;\n      }\n    "]}),Primary=Template("FTU Library"),WithIconAtEnd=Template('\n  Percentage of Cells in FTU\n  <mat-icon class="end">info_outline</mat-icon>\n');Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"Template('FTU Library')",...Primary.parameters?.docs?.source}}},WithIconAtEnd.parameters={...WithIconAtEnd.parameters,docs:{...WithIconAtEnd.parameters?.docs,source:{originalSource:'Template(`\n  Percentage of Cells in FTU\n  <mat-icon class="end">info_outline</mat-icon>\n`)',...WithIconAtEnd.parameters?.docs?.source}}}}}]);