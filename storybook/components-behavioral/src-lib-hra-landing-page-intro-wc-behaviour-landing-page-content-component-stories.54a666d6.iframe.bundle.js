(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[983],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/components/behavioral/src/lib/hra-landing-page-intro-wc-behaviour/hra-landing-page-intro-wc-behaviour.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host .intro {\n  display: inline-grid;\n  border: 1px solid #e2e7e9;\n  padding: 24px 32px 24px 32px;\n  width: 71rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/hra-landing-page-intro-wc/hra-landing-page-intro-wc.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  gap: 8px;\n  padding: 24px, 32px, 24px, 32px;\n}\n:host .title {\n  font-size: 20px;\n  font-family: Inter;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n:host .description .partners .readMore {\n  font-family: Inter;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n:host ::ng-deep a {\n  color: var(--palette-primary-500-rgb);\n  font-weight: 700;\n}\n:host ::ng-deep p {\n  margin: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/behavioral/src/lib/hra-landing-page-intro-wc-behaviour/landing-page-content.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>landing_page_content_component_stories});var resource_registry_state=__webpack_require__("./libs/cdk/state/src/resource-registry/resource-registry.state.ts"),resource_registry_actions=__webpack_require__("./libs/cdk/state/src/resource-registry/resource-registry.actions.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var hra_landing_page_intro_wc_behaviour_componentngResource=__webpack_require__("./libs/components/behavioral/src/lib/hra-landing-page-intro-wc-behaviour/hra-landing-page-intro-wc-behaviour.component.scss?ngResource"),hra_landing_page_intro_wc_behaviour_componentngResource_default=__webpack_require__.n(hra_landing_page_intro_wc_behaviour_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");var _class,hra_landing_page_intro_wc_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/hra-landing-page-intro-wc/hra-landing-page-intro-wc.component.scss?ngResource"),hra_landing_page_intro_wc_componentngResource_default=__webpack_require__.n(hra_landing_page_intro_wc_componentngResource),ngx_markdown=__webpack_require__("./node_modules/ngx-markdown/fesm2020/ngx-markdown.mjs");let HraLandingPageIntroWcComponent=((_class=class HraLandingPageIntroWcComponent{constructor(){this.title="",this.description="",this.partners="",this.readMore=""}}).propDecorators={title:[{type:core.Input}],description:[{type:core.Input}],partners:[{type:core.Input}],readMore:[{type:core.Input}]},_class);HraLandingPageIntroWcComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-ui-hra-landing-page-intro-wc",standalone:!0,imports:[common.CommonModule,ngx_markdown.JP],template:'<h1 class="title">{{ title }}</h1>\n\n<markdown class="description" [data]="description"></markdown>\n\n<markdown class="readMore" [data]="readMore"></markdown>\n\n<markdown class="partners" [data]="partners"></markdown>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[hra_landing_page_intro_wc_componentngResource_default()]})],HraLandingPageIntroWcComponent);var resource_registry_selectors=__webpack_require__("./libs/cdk/state/src/resource-registry/resource-registry.selectors.ts"),select_snapshot=__webpack_require__("./libs/cdk/injectors/src/lib/select/select-snapshot.ts"),resource_ids=__webpack_require__("./libs/state/src/lib/resource-ids.ts");let HraLandingPageIntroWcBehaviourComponent=class HraLandingPageIntroWcBehaviourComponent{constructor(){this.landingPageIntroTitle=(0,select_snapshot.w)(resource_registry_selectors.S.anyText,resource_ids.o3),this.landingPageIntroDescription=(0,select_snapshot.w)(resource_registry_selectors.S.markdown,resource_ids.VH),this.landingPageIntroReadMore=(0,select_snapshot.w)(resource_registry_selectors.S.markdown,resource_ids.Ec),this.landingPageIntroPartners=(0,select_snapshot.w)(resource_registry_selectors.S.markdown,resource_ids.Mw)}};HraLandingPageIntroWcBehaviourComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ftu-wc-intro",standalone:!0,imports:[common.CommonModule,HraLandingPageIntroWcComponent],template:'<hra-ui-hra-landing-page-intro-wc\n  class="intro"\n  [description]="landingPageIntroDescription()"\n  [partners]="landingPageIntroPartners()"\n  [readMore]="landingPageIntroReadMore()"\n  [title]="landingPageIntroTitle()"\n></hra-ui-hra-landing-page-intro-wc>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[hra_landing_page_intro_wc_behaviour_componentngResource_default()]})],HraLandingPageIntroWcBehaviourComponent);const landing_page_content_component_stories={title:"HraLandingPageIntroWcBehaviourComponent",component:HraLandingPageIntroWcBehaviourComponent,parameters:{state:{states:[resource_registry_state.E],actions:[new resource_registry_actions.AU("assets/resources/landing-page-content.yml")]}}},Default=(args=>({props:args})).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...Default.parameters?.docs?.source}}}}}]);