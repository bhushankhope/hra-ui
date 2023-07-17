(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[106],{"./libs/components/molecules/src/lib/screen-size-notice/screen-size-notice.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: none;\n  position: relative;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  box-shadow: 0.063rem 0.125rem 1rem 0.125rem rgba(0, 0, 0, 0.16);\n  flex-direction: column;\n}\n:host .header-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n:host h3 {\n  margin: 0 0 1rem 0;\n  font-weight: 700;\n}\n:host .btn-stroked {\n  font-weight: 700;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  padding: 0.75rem 0;\n  letter-spacing: 0.5px;\n}\n:host .btn-flat {\n  font-weight: 700;\n  font-size: 16px;\n  padding: 0.75rem 0;\n  letter-spacing: 0.5px;\n  color: white;\n}\n:host .content {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.5px;\n}\n@media (max-width: 480px) {\n  :host {\n    display: flex;\n    position: relative;\n    border-radius: 0.5rem;\n    padding: 1.5rem;\n    box-shadow: 0.063rem 0.125rem 1rem 0.125rem rgba(0, 0, 0, 0.16);\n    flex-direction: column;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/screen-size-notice/screen-size-notice.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>screen_size_notice_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,screen_size_notice_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/screen-size-notice/screen-size-notice.component.scss?ngResource"),screen_size_notice_componentngResource_default=__webpack_require__.n(screen_size_notice_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),ngx_markdown=__webpack_require__("./node_modules/ngx-markdown/fesm2020/ngx-markdown.mjs"),fesm2020_button=__webpack_require__("./node_modules/@angular/material/fesm2020/button.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2020/icon.mjs"),link_registry_model=__webpack_require__("./libs/cdk/state/src/link-registry/link-registry.model.ts"),link_directive=__webpack_require__("./libs/cdk/src/lib/link/link.directive.ts");let ScreenSizeNoticeComponent=((_class=class ScreenSizeNoticeComponent{constructor(){this.content="",this.portal=link_registry_model.Ry,this.proceedClick=new core.EventEmitter}}).propDecorators={content:[{type:core.Input}],portal:[{type:core.Input}],proceedClick:[{type:core.Output}]},_class);ScreenSizeNoticeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-screen-size-notice",standalone:!0,imports:[common.CommonModule,ngx_markdown.JP,fesm2020_button.ot,icon.Ps,link_directive.I],template:'<h3>Screen Size Notice</h3>\n<button mat-icon-button class="header-close" (click)="proceedClick.emit()">\n  <mat-icon>close</mat-icon>\n</button>\n<markdown [data]="content" class="content"></markdown>\n<button mat-stroked-button color="accent" class="btn-stroked" (click)="proceedClick.emit()">\n  Proceed to FTU Explorer\n</button>\n<a mat-flat-button color="primary" class="btn-flat" [hraLink]="portal"> Human Reference Atlas Portal </a>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[screen_size_notice_componentngResource_default()]})],ScreenSizeNoticeComponent);const screen_size_notice_component_stories={title:"ScreenSizeNoticeComponent",component:ScreenSizeNoticeComponent,decorators:[(0,dist.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={content:"assets/screen-size-notice-content.md"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...Primary.parameters?.docs?.source}}}}}]);