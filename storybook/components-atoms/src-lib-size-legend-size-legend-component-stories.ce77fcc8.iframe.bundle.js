(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[236],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/components/atoms/src/lib/size-legend/size-legend.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>size_legend_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var size_legend_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/size-legend/size-legend.component.scss?ngResource"),size_legend_componentngResource_default=__webpack_require__.n(size_legend_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let SizeLegendComponent=class SizeLegendComponent{constructor(){this.sizes=[]}static#_=this.propDecorators={sizes:[{type:core.Input}]}};SizeLegendComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-size-legend",standalone:!0,imports:[common.CommonModule],template:'<div *ngFor="let text of sizes" class="item">\n  <div class="filler"></div>\n  <div class="circle" style="--size: {{ text.radius }}rem"></div>\n  <div class="filler"></div>\n  <div class="label">{{ text.label }}</div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[size_legend_componentngResource_default()]})],SizeLegendComponent);const size_legend_component_stories={title:"SizeLegendComponent",component:SizeLegendComponent,decorators:[(0,dist.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={sizes:[{label:"0%",radius:.5},{label:"50%",radius:1},{label:"100%",radius:1.5}]},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: SizeLegendComponent) => ({\n  props: args\n})",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./libs/components/atoms/src/lib/size-legend/size-legend.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: flex;\n  flex-direction: row;\n  column-gap: 2rem;\n}\n:host .item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  line-height: 0.5rem;\n}\n:host .item .circle {\n  height: var(--size);\n  width: var(--size);\n  border-radius: 50%;\n  border: 0.125rem solid #75838f;\n}\n:host .item .label {\n  margin-top: 0.5rem;\n}\n:host .item .filler {\n  flex-grow: 1;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);