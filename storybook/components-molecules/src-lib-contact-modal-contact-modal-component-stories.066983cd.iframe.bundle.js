(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[570],{"./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>injectDestroy$});var DestroyHostComponent_1,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),destroy_host_component=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts"),destroy_host_component_default=__webpack_require__.n(destroy_host_component);let DestroyHostComponent=DestroyHostComponent_1=class DestroyHostComponent{constructor(){this.el=(0,core.inject)(core.ElementRef).nativeElement}static create(container){return container.createComponent(DestroyHostComponent_1,{index:0})}ngAfterViewInit(){this.el.remove()}};DestroyHostComponent=DestroyHostComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-destroy-host",standalone:!0,template:"",styles:[destroy_host_component_default()]})],DestroyHostComponent);var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");class ScopedDestructorSubject extends ReplaySubject.t{constructor(scope){super(1),scope.onDestroy((()=>{this.next(),this.complete()}))}}const DESTRUCTOR_CACHE=new WeakMap;function firstDefinedValue(genFn){for(const value of genFn())if(null!=value)return value;throw new Error("Unreachable")}function injectDestroy$(){const key=function findStableKeyObject(){return firstDefinedValue((function*(){yield(0,core.inject)(core.ElementRef,{optional:!0})?.nativeElement,yield(0,core.inject)(core.ViewContainerRef,{optional:!0}),yield(0,core.inject)(core.NgModuleRef)}))}();let destructor=DESTRUCTOR_CACHE.get(key);if(!destructor){const scope=function findDestructorScope(){return firstDefinedValue((function*(){const vcr=(0,core.inject)(core.ViewContainerRef,{optional:!0});yield vcr&&DestroyHostComponent.create(vcr),yield(0,core.inject)(core.NgModuleRef)}))}();destructor=new ScopedDestructorSubject(scope).asObservable(),DESTRUCTOR_CACHE.set(key,destructor)}return destructor}},"./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host { display: none }",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/email-input/email-input.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host .email-text-field {\n  width: 100%;\n  background: #ffffff;\n}\n:host ::ng-deep .mat-mdc-form-field-required-marker {\n  color: #dc231e;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/required-input/required-input.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host .form-field {\n  width: 100%;\n}\n:host ::ng-deep .mat-mdc-form-field-required-marker {\n  color: #dc231e;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/required-textbox/required-textbox.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host .message-field {\n  width: 100%;\n  background: #ffffff;\n}\n:host ::ng-deep .mat-mdc-form-field-required-marker {\n  color: #dc231e;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/contact-modal/contact-modal.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,':host {\n  display: block;\n  position: relative;\n  padding-top: 2rem;\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n  font-family: "Inter";\n}\n:host .product-logo {\n  display: flex;\n  align-items: center;\n}\n:host .product-logo .product-logo-image {\n  margin-right: 1rem;\n}\n:host .product-logo .product-title {\n  color: #990000;\n  margin: 0;\n  font-weight: 600;\n}\n:host .close {\n  position: absolute;\n  top: 1.5rem;\n  right: 0rem;\n}\n:host .submit {\n  margin-right: 1.5rem;\n}\n:host .submit,\n:host .cancel {\n  width: 7.5rem;\n}\n:host .email {\n  margin-top: 1.25rem;\n}\n:host .message-field {\n  margin-top: 1rem;\n}\n:host .subject-field {\n  margin-top: 1rem;\n}\n:host .desc {\n  margin-top: 1.5rem;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/contact-modal/contact-modal.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>contact_modal_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var contact_modal_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/contact-modal/contact-modal.component.scss?ngResource"),contact_modal_componentngResource_default=__webpack_require__.n(contact_modal_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_button=__webpack_require__("./node_modules/@angular/material/fesm2020/button.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2020/icon.mjs");var _class,email_input_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/email-input/email-input.component.scss?ngResource"),email_input_componentngResource_default=__webpack_require__.n(email_input_componentngResource),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),form_field=__webpack_require__("./node_modules/@angular/material/fesm2020/form-field.mjs"),input=__webpack_require__("./node_modules/@angular/material/fesm2020/input.mjs"),on_destroy=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");let EmailInputComponent=((_class=class EmailInputComponent{constructor(){this.placeholder="",this.emailChange=new core.EventEmitter,this.destroy$=(0,on_destroy.o)(),this.control=new fesm2020_forms.NI("",{updateOn:"blur",validators:[fesm2020_forms.kI.required,fesm2020_forms.kI.email]});const{control,destroy$}=this;control.valueChanges.pipe((0,takeUntil.R)(destroy$),(0,map.U)((value=>control.valid?value:void 0))).subscribe((value=>this.emailChange.emit(value)))}}).ctorParameters=()=>[],_class.propDecorators={placeholder:[{type:core.Input}],emailChange:[{type:core.Output}]},_class);EmailInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-email-input",standalone:!0,imports:[common.CommonModule,form_field.lN,fesm2020_forms.UX,input.c],template:'<mat-form-field class="email-text-field" appearance="outline">\n  <mat-label> Email </mat-label>\n  <input type="email" matInput [formControl]="control" [placeholder]="placeholder" />\n\n  <mat-error *ngIf="control.hasError(\'email\') && !control.hasError(\'required\')">\n    Please enter a valid email address\n  </mat-error>\n  <mat-error *ngIf="control.hasError(\'required\')"> Email is required! </mat-error>\n</mat-form-field>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[email_input_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],EmailInputComponent);var required_textbox_component_class,required_textbox_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/required-textbox/required-textbox.component.scss?ngResource"),required_textbox_componentngResource_default=__webpack_require__.n(required_textbox_componentngResource);let RequiredTextboxComponent=((required_textbox_component_class=class RequiredTextboxComponent{constructor(){this.placeholder="",this.label="",this.messageChange=new core.EventEmitter,this.destroy$=(0,on_destroy.o)(),this.control=new fesm2020_forms.NI("",{updateOn:"blur",validators:[fesm2020_forms.kI.required]});const{control,destroy$}=this;control.valueChanges.pipe((0,takeUntil.R)(destroy$),(0,map.U)((value=>control.valid?value:void 0))).subscribe((value=>this.messageChange.emit(value)))}}).ctorParameters=()=>[],required_textbox_component_class.propDecorators={placeholder:[{type:core.Input}],label:[{type:core.Input}],messageChange:[{type:core.Output}]},required_textbox_component_class);RequiredTextboxComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-required-textbox",standalone:!0,imports:[common.CommonModule,input.c,form_field.lN,fesm2020_forms.UX],template:'<mat-form-field class="message-field" appearance="outline">\n  <mat-label> {{ label }} </mat-label>\n  <textarea\n    cdkTextareaAutosize\n    cdkAutosizeMinRows="10"\n    cdkAutosizeMaxRows="20"\n    matInput\n    [formControl]="control"\n    [placeholder]="placeholder"\n  ></textarea>\n  <mat-error *ngIf="control.hasError(\'required\')"> {{ label }} is required! </mat-error>\n</mat-form-field>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[required_textbox_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],RequiredTextboxComponent);var required_input_component_class,required_input_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/required-input/required-input.component.scss?ngResource"),required_input_componentngResource_default=__webpack_require__.n(required_input_componentngResource);let RequiredInputComponent=((required_input_component_class=class RequiredInputComponent{constructor(){this.label="",this.inputChange=new core.EventEmitter,this.destroy$=(0,on_destroy.o)(),this.control=new fesm2020_forms.NI("",{updateOn:"blur",validators:fesm2020_forms.kI.required});const{control,destroy$,inputChange}=this;control.valueChanges.pipe((0,takeUntil.R)(destroy$),(0,map.U)((value=>control.valid?value:void 0))).subscribe(inputChange)}}).ctorParameters=()=>[],required_input_component_class.propDecorators={label:[{type:core.Input}],inputChange:[{type:core.Output}]},required_input_component_class);RequiredInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-required-input",standalone:!0,imports:[common.CommonModule,form_field.lN,input.c,fesm2020_forms.UX],template:'<mat-form-field class="form-field" appearance="outline">\n  <mat-label> {{ label }} </mat-label>\n  <input matInput [formControl]="control" />\n  <mat-error *ngIf="control.hasError(\'required\')">{{ label }} is required!</mat-error>\n</mat-form-field>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[required_input_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],RequiredInputComponent);var contact_modal_component_class,immer_esm=__webpack_require__("./node_modules/immer/dist/immer.esm.mjs"),ngx_markdown=__webpack_require__("./node_modules/ngx-markdown/fesm2020/ngx-markdown.mjs");const EMPTY_CONTACT_DATA={email:void 0,subject:void 0,message:void 0};let ContactModalComponent=((contact_modal_component_class=class ContactModalComponent{constructor(){this.productLogoUrl="",this.productTitle="",this.submitClick=new core.EventEmitter,this.closeClick=new core.EventEmitter,this.contactData=EMPTY_CONTACT_DATA}get disableSubmit(){return Object.values(this.contactData).some((value=>void 0===value))}updateData(key,value){this.contactData=(0,immer_esm.Uy)(this.contactData,(draft=>{draft[key]=value}))}submit(){this.submitClick.emit(this.contactData)}}).propDecorators={productLogoUrl:[{type:core.Input}],productTitle:[{type:core.Input}],submitClick:[{type:core.Output}],closeClick:[{type:core.Output}]},contact_modal_component_class);ContactModalComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-contact-modal",standalone:!0,imports:[common.CommonModule,fesm2020_button.ot,icon.Ps,EmailInputComponent,ngx_markdown.JP,RequiredTextboxComponent,RequiredInputComponent],template:'<a class="product-logo">\n  <img class="product-logo-image" [src]="productLogoUrl" alt="Prodoct Logo" />\n  <h2 class="product-title">{{ productTitle }}</h2>\n</a>\n\n<button class="close" mat-icon-button (click)="closeClick.emit()">\n  <mat-icon>close</mat-icon>\n</button>\n\n<hra-email-input class="email" placeholder="Example@domain.com" (emailChange)="updateData(\'email\', $event)">\n</hra-email-input>\n\n<hra-required-input label="Subject" (inputChange)="updateData(\'subject\', $event)" class="subject-field">\n</hra-required-input>\n\n<hra-required-textbox\n  class="message-field"\n  label="Message"\n  placeholder="Enter your message here"\n  (messageChange)="updateData(\'message\', $event)"\n>\n</hra-required-textbox>\n\n<markdown class="desc" data="Please allow two business days for a response to each inquiry."></markdown>\n\n<button mat-flat-button class="submit" color="primary" [disabled]="disableSubmit" (click)="submit()">Submit</button>\n<button mat-stroked-button class="cancel" color="accent" (click)="closeClick.emit()">Cancel</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[contact_modal_componentngResource_default()]})],ContactModalComponent);const contact_modal_component_stories={title:"ContactModalComponent",component:ContactModalComponent,decorators:[(0,dist.moduleMetadata)({imports:[]})]},Primary=(args=>({props:args})).bind({});Primary.args={productLogoUrl:"assets/icons/logo-icon.svg",productTitle:"Human Reference Atlas"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...Primary.parameters?.docs?.source}}}}}]);