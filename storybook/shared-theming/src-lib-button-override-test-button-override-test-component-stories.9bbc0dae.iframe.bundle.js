"use strict";(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[580],{"./libs/shared/theming/src/lib/button-override-test/button-override-test.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Link:()=>Link,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"ButtonOverrideTest",decorators:[(0,__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs").moduleMetadata)({imports:[_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.ot]})]},Template=template=>args=>({props:args,template}),Basic=Template('<button mat-button [color]="palette" [disabled]="disabled">Button</button>');Basic.args={palette:"primary",disabled:!1};const Secondary=Template('<button mat-button [color]="palette" [disabled]="disabled">Button</button>');Secondary.args={palette:"accent",disabled:!1};const Link=Template('<a mat-button tabindex="1" [color]="palette" [disabled]="disabled">Test</a>');Link.args={palette:"primary",disabled:!1},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'Template(`<button mat-button [color]="palette" [disabled]="disabled">Button</button>`)',...Basic.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'Template(`<button mat-button [color]="palette" [disabled]="disabled">Button</button>`)',...Secondary.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:'Template(`<a mat-button tabindex="1" [color]="palette" [disabled]="disabled">Test</a>`)',...Link.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Secondary","Link"]}}]);