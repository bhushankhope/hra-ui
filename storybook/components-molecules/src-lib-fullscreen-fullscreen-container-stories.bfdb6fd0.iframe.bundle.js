(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[522],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/components/molecules/src/lib/fullscreen/fullscreen-container.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIH0KICAgIA%3D%3D!./libs/components/molecules/src/lib/fullscreen/fullscreen-container.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n      :host {\n        display: block;\n        position: relative;\n      }\n    ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/fullscreen/fullscreen-content.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n  overflow-y: hidden;\n  transition: width 0.5s ease;\n  width: 50%;\n}\n:host.fullscreen-on {\n  z-index: 100;\n  background: #f8f9fa;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/fullscreen/fullscreen-container.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>fullscreen_container_stories});var _class,dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),fullscreen_content_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/fullscreen/fullscreen-content.component.scss?ngResource"),fullscreen_content_componentngResource_default=__webpack_require__.n(fullscreen_content_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2020/animations.mjs");let FullscreenContentComponent=((_class=class FullscreenContentComponent{constructor(){this.isFullScreen=!1}}).propDecorators={isFullScreen:[{type:core.HostBinding,args:["class.fullscreen-on"]},{type:core.HostBinding,args:["@animateResize"]}]},_class);FullscreenContentComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-fullscreen-content",standalone:!0,imports:[common.CommonModule],animations:[(0,animations.X$)("animateResize",[(0,animations.SB)("true",(0,animations.oB)({width:"100%",position:"absolute",right:0})),(0,animations.SB)("false",(0,animations.oB)({width:"50%",position:"absolute",right:0})),(0,animations.eR)("true <=> false",[(0,animations.jt)("0.5s ease")])])],template:"<ng-content></ng-content>",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[fullscreen_content_componentngResource_default()]})],FullscreenContentComponent);var fullscreen_container_component_class,fullscreen_container_component=__webpack_require__("./libs/components/molecules/src/lib/fullscreen/fullscreen-container.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIH0KICAgIA%3D%3D!./libs/components/molecules/src/lib/fullscreen/fullscreen-container.component.ts"),fullscreen_container_component_default=__webpack_require__.n(fullscreen_container_component);let FullscreenContainerComponent=(fullscreen_container_component_class=class FullscreenContainerComponent{constructor(){this.fullscreen=!1}ngAfterContentInit(){this.updateFullscreenMode()}ngOnChanges(changes){"fullscreen"in changes&&this.updateFullscreenMode()}updateFullscreenMode(){this.content?.forEach((content=>{content.isFullScreen=this.fullscreen}))}},fullscreen_container_component_class.propDecorators={content:[{type:core.ContentChildren,args:[FullscreenContentComponent]}],fullscreen:[{type:core.Input}]},fullscreen_container_component_class);FullscreenContainerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-fullscreen-container",standalone:!0,imports:[common.CommonModule,FullscreenContentComponent],template:"<ng-content></ng-content>",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[fullscreen_container_component_default()]})],FullscreenContainerComponent);const fullscreen_container_stories={title:"FullscreenContainerComponent",component:FullscreenContainerComponent,decorators:[(0,dist.moduleMetadata)({imports:[FullscreenContentComponent]})]},Default=(content="\n  Some content\n  <hra-fullscreen-content>\n    Other content\n  </hra-fullscreen-content>\n",args=>({props:args,template:`\n    <hra-fullscreen-container [fullscreen]="fullscreen">\n      ${content}\n    </hra-fullscreen-container>\n  `}));var content;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Template(`\n  Some content\n  <hra-fullscreen-content>\n    Other content\n  </hra-fullscreen-content>\n`)",...Default.parameters?.docs?.source}}}}}]);