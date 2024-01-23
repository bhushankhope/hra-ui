(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[514],{"./libs/components/molecules/src/lib/landing-page-in-depth/landing-page-in-depth.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>landing_page_in_depth_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var landing_page_in_depth_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/landing-page-in-depth/landing-page-in-depth.component.scss?ngResource"),landing_page_in_depth_componentngResource_default=__webpack_require__.n(landing_page_in_depth_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),link_registry_model=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.model.ts"),link_directive=__webpack_require__("./libs/cdk/src/lib/link/link.directive.ts"),ngx_markdown=__webpack_require__("./node_modules/ngx-markdown/fesm2022/ngx-markdown.mjs");let LandingPageInDepthComponent=class LandingPageInDepthComponent{constructor(){this.title="",this.description="",this.img="",this.moreText="",this.moreLink=link_registry_model.Ry}static#_=this.propDecorators={title:[{type:core.Input}],description:[{type:core.Input}],img:[{type:core.Input}],moreText:[{type:core.Input}],moreLink:[{type:core.Input}]}};LandingPageInDepthComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-landing-page-in-depth",standalone:!0,imports:[common.CommonModule,ngx_markdown.JP,fesm2022_button.ot,icon.Ps,link_directive.I],template:'<img class="image" [src]="img" alt="" />\n<h1 class="title">{{ title }}</h1>\n<markdown class="description" [data]="description"></markdown>\n<button mat-flat-button class="more-button" color="primary" [hraLink]="moreLink">\n  {{ moreText }}\n</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[landing_page_in_depth_componentngResource_default()]})],LandingPageInDepthComponent);const landing_page_in_depth_component_stories={title:"LandingPageInDepthComponent",component:LandingPageInDepthComponent,decorators:[(0,dist.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={title:"Explore Medical Illustrations of the Human Reference Atlas",img:"assets/2d-ftu-pancreas-islets-langerhans.svg",moreText:"Read more about this effort",description:"\n  The 2D Functional Tissue Unit Library provides anatomically correct illustrations of functional tissue units (FTUs).\n  The illustrations are developed by a specialist in 2D medical illustration and approved by organ experts.\n  Illustrations are created using terms from the Anatomical Structures, Cell Types, and Biomarker (ASCT+B) table for each organ.\n  Subject matter experts collaborate on a list of anatomical structures and/or cell types to be included in each FTU\n  "},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: LandingPageInDepthComponent) => ({\n  props: args\n})",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./libs/components/molecules/src/lib/landing-page-in-depth/landing-page-in-depth.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-template-rows: 0fr 0fr 1fr;\n  column-gap: 4rem;\n  row-gap: 2rem;\n  padding: 3.5rem 6rem;\n  max-height: 30rem;\n}\n:host .image {\n  grid-column: 1;\n  grid-row: 1/span 3;\n  width: 100%;\n  height: 100%;\n  align-self: center;\n  border-radius: 1rem;\n  box-shadow: 0.06rem 0.13rem 1rem 0.13rem rgba(0, 0, 0, 0.1607843137);\n}\n:host .title {\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n}\n:host .description {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n:host .description ::ng-deep p {\n  margin: 0;\n}\n:host .description ::ng-deep a {\n  color: var(--palette-primary-500-rgb);\n  font-weight: 700;\n}\n:host .more-button {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 3rem;\n}\n@media (max-width: 1400px) {\n  :host {\n    grid-template-columns: 1.8fr 1fr;\n    grid-template-rows: auto auto 3rem;\n    column-gap: 2rem;\n    padding: 3.5rem 2rem;\n    max-height: unset;\n  }\n  :host .title {\n    font-size: 1.5rem;\n    line-height: normal;\n  }\n}\n@media (max-width: 1280px) {\n  :host {\n    grid-template-columns: unset;\n    text-align: center;\n  }\n  :host .image {\n    max-height: 22rem;\n    width: auto;\n  }\n  :host .image,\n  :host .more-button {\n    place-self: center;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);