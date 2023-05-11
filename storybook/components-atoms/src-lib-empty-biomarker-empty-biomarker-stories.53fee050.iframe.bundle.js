(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[798],{"./libs/components/atoms/src/lib/empty-biomarker/empty-biomarker.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n  padding: 2.625rem 2rem 2.625rem 2rem;\n}\n:host .message {\n  color: #243142;\n}\n:host .collaborate-button {\n  margin-top: 2rem;\n  font-weight: 700;\n  color: #fff;\n  width: 100%;\n  max-width: 17.25rem;\n  height: 3rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/empty-biomarker/empty-biomarker.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>empty_biomarker_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,empty_biomarker_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/empty-biomarker/empty-biomarker.component.scss?ngResource"),empty_biomarker_componentngResource_default=__webpack_require__.n(empty_biomarker_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_button=__webpack_require__("./node_modules/@angular/material/fesm2020/button.mjs"),ngx_markdown=__webpack_require__("./node_modules/ngx-markdown/fesm2020/ngx-markdown.mjs");let EmptyBiomarkerComponent=((_class=class EmptyBiomarkerComponent{constructor(){this.collaborateText="",this.message="",this.collaborateClick=new core.EventEmitter}}).propDecorators={collaborateText:[{type:core.Input}],message:[{type:core.Input}],collaborateClick:[{type:core.Output}]},_class);EmptyBiomarkerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-empty-biomarker",standalone:!0,imports:[common.CommonModule,fesm2020_button.ot,ngx_markdown.JP],template:'<markdown [data]="message" class="message"></markdown>\n<button mat-flat-button class="collaborate-button" color="primary" (click)="collaborateClick.emit($event)">\n  {{ collaborateText }}\n</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[empty_biomarker_componentngResource_default()]})],EmptyBiomarkerComponent);const empty_biomarker_stories={title:"EmptyBiomarker",component:EmptyBiomarkerComponent},Default=(args=>({props:args})).bind({});Default.args={collaborateText:"Collaborate with the HRA Team",message:"We currently do not have cell type data for this biomarker.\n                    <br><br> Please contact us to discuss your dataset."},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...Default.parameters?.docs?.source}}}}}]);