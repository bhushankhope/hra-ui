(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[416],{"./libs/components/behavioral/src/lib/contact-behavior/contact-behavior.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ContactBehaviorComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var contact_behavior_componentngResource=__webpack_require__("./libs/components/behavioral/src/lib/contact-behavior/contact-behavior.component.scss?ngResource"),contact_behavior_componentngResource_default=__webpack_require__.n(contact_behavior_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),dialog=__webpack_require__("./node_modules/@angular/material/fesm2022/dialog.mjs"),select_snapshot=__webpack_require__("./libs/cdk/injectors/src/lib/select/select-snapshot.ts"),dispatch=__webpack_require__("./libs/cdk/injectors/src/lib/dispatch/dispatch.ts"),resource_registry_selectors=__webpack_require__("./libs/cdk/state/src/resource-registry/resource-registry.selectors.ts");var contact_modal_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/contact-modal/contact-modal.component.scss?ngResource"),contact_modal_componentngResource_default=__webpack_require__.n(contact_modal_componentngResource),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs");var email_input_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/email-input/email-input.component.scss?ngResource"),email_input_componentngResource_default=__webpack_require__.n(email_input_componentngResource),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),form_field=__webpack_require__("./node_modules/@angular/material/fesm2022/form-field.mjs"),input=__webpack_require__("./node_modules/@angular/material/fesm2022/input.mjs"),on_destroy=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");let EmailInputComponent=class EmailInputComponent{constructor(){this.placeholder="",this.defaultMail="",this.emailChange=new core.EventEmitter,this.destroy$=(0,on_destroy.o)(),this.control=new fesm2022_forms.NI("",{updateOn:"blur",validators:[fesm2022_forms.kI.required,fesm2022_forms.kI.email]});const{control,destroy$}=this;control.valueChanges.pipe((0,takeUntil.R)(destroy$),(0,map.U)((value=>control.valid?value:void 0))).subscribe((value=>this.emailChange.emit(value)))}ngOnChanges(changes){"defaultMail"in changes&&this.control.setValue(this.defaultMail)}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={placeholder:[{type:core.Input}],defaultMail:[{type:core.Input}],emailChange:[{type:core.Output}]}};EmailInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-email-input",standalone:!0,imports:[common.CommonModule,form_field.lN,fesm2022_forms.UX,input.c],template:'<mat-form-field class="email-text-field" appearance="outline">\n  <mat-label> Email </mat-label>\n  <input type="email" matInput [formControl]="control" [placeholder]="placeholder" />\n\n  <mat-error *ngIf="control.hasError(\'email\') && !control.hasError(\'required\')">\n    Please enter a valid email address\n  </mat-error>\n  <mat-error *ngIf="control.hasError(\'required\')"> Email is required </mat-error>\n</mat-form-field>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[email_input_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],EmailInputComponent);var required_textbox_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/required-textbox/required-textbox.component.scss?ngResource"),required_textbox_componentngResource_default=__webpack_require__.n(required_textbox_componentngResource);let RequiredTextboxComponent=class RequiredTextboxComponent{constructor(){this.placeholder="",this.label="",this.messageChange=new core.EventEmitter,this.destroy$=(0,on_destroy.o)(),this.control=new fesm2022_forms.NI("",{updateOn:"blur",validators:[fesm2022_forms.kI.required]});const{control,destroy$}=this;control.valueChanges.pipe((0,takeUntil.R)(destroy$),(0,map.U)((value=>control.valid?value:void 0))).subscribe((value=>this.messageChange.emit(value)))}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={placeholder:[{type:core.Input}],label:[{type:core.Input}],messageChange:[{type:core.Output}]}};RequiredTextboxComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-required-textbox",standalone:!0,imports:[common.CommonModule,input.c,form_field.lN,fesm2022_forms.UX],template:'<mat-form-field class="message-field" appearance="outline">\n  <mat-label> {{ label }} </mat-label>\n  <textarea\n    cdkTextareaAutosize\n    cdkAutosizeMinRows="10"\n    cdkAutosizeMaxRows="20"\n    matInput\n    [formControl]="control"\n    [placeholder]="placeholder"\n  ></textarea>\n  <mat-error *ngIf="control.hasError(\'required\')"> {{ label }} is required </mat-error>\n</mat-form-field>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[required_textbox_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],RequiredTextboxComponent);var required_input_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/required-input/required-input.component.scss?ngResource"),required_input_componentngResource_default=__webpack_require__.n(required_input_componentngResource);let RequiredInputComponent=class RequiredInputComponent{constructor(){this.label="",this.inputChange=new core.EventEmitter,this.destroy$=(0,on_destroy.o)(),this.control=new fesm2022_forms.NI("",{updateOn:"blur",validators:fesm2022_forms.kI.required});const{control,destroy$,inputChange}=this;control.valueChanges.pipe((0,takeUntil.R)(destroy$),(0,map.U)((value=>control.valid?value:void 0))).subscribe(inputChange)}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={label:[{type:core.Input}],inputChange:[{type:core.Output}]}};RequiredInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-required-input",standalone:!0,imports:[common.CommonModule,form_field.lN,input.c,fesm2022_forms.UX],template:'<mat-form-field class="form-field" appearance="outline">\n  <mat-label> {{ label }} </mat-label>\n  <input matInput [formControl]="control" />\n  <mat-error *ngIf="control.hasError(\'required\')">{{ label }} is required</mat-error>\n</mat-form-field>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[required_input_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],RequiredInputComponent);var immer=__webpack_require__("./node_modules/immer/dist/immer.mjs"),ngx_markdown=__webpack_require__("./node_modules/ngx-markdown/fesm2022/ngx-markdown.mjs");const EMPTY_CONTACT_DATA={email:void 0,subject:void 0,message:void 0};let ContactModalComponent=class ContactModalComponent{constructor(){this.productLogoUrl="",this.productTitle="",this.submitClick=new core.EventEmitter,this.closeClick=new core.EventEmitter,this.contactData=EMPTY_CONTACT_DATA,this.defaultMail="cnscntr@indiana.edu"}get disableSubmit(){return Object.values(this.contactData).some((value=>void 0===value))}updateData(key,value){this.contactData=(0,immer.Uy)(this.contactData,(draft=>{draft[key]=value}))}submit(){this.submitClick.emit(this.contactData)}static#_=this.propDecorators={productLogoUrl:[{type:core.Input}],productTitle:[{type:core.Input}],submitClick:[{type:core.Output}],closeClick:[{type:core.Output}]}};ContactModalComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-contact-modal",standalone:!0,imports:[common.CommonModule,fesm2022_button.ot,icon.Ps,EmailInputComponent,ngx_markdown.JP,RequiredTextboxComponent,RequiredInputComponent],template:'<a class="product-logo">\n  <img class="product-logo-image" [src]="productLogoUrl" alt="Prodoct Logo" />\n  <h2 class="product-title">{{ productTitle }}</h2>\n</a>\n\n<button class="close" mat-icon-button (click)="closeClick.emit()">\n  <mat-icon>close</mat-icon>\n</button>\n\n<hra-email-input\n  class="email"\n  placeholder="Example@domain.com"\n  (emailChange)="updateData(\'email\', $event)"\n  [defaultMail]="defaultMail"\n>\n</hra-email-input>\n\n<hra-required-input label="Subject" (inputChange)="updateData(\'subject\', $event)" class="subject-field">\n</hra-required-input>\n\n<hra-required-textbox\n  class="message-field"\n  label="Message"\n  placeholder="Enter your message here"\n  (messageChange)="updateData(\'message\', $event)"\n>\n</hra-required-textbox>\n\n<markdown class="desc" data="Please allow two business days for a response to each inquiry."></markdown>\n\n<button mat-flat-button class="submit" color="primary" [disabled]="disableSubmit" (click)="submit()">Submit</button>\n<button mat-stroked-button class="cancel" color="accent" (click)="closeClick.emit()">Cancel</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[contact_modal_componentngResource_default()]})],ContactModalComponent);var info_modal_componentngResource=__webpack_require__("./libs/components/molecules/src/lib/info-modal/info-modal.component.scss?ngResource"),info_modal_componentngResource_default=__webpack_require__.n(info_modal_componentngResource);let InfoModalComponent=class InfoModalComponent{constructor(){this.productTitle="",this.productLogoUrl="",this.description="",this.closeClick=new core.EventEmitter}static#_=this.propDecorators={productTitle:[{type:core.Input}],productLogoUrl:[{type:core.Input}],description:[{type:core.Input}],closeClick:[{type:core.Output}]}};InfoModalComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-info-modal",standalone:!0,imports:[common.CommonModule,fesm2022_button.ot,icon.Ps,ngx_markdown.JP],template:'<a class="title">\n  <img class="product-logo-image" [src]="productLogoUrl" alt="Prodoct Logo" />\n  <h2 class="product-title">{{ productTitle }}</h2>\n</a>\n\n<button mat-icon-button class="close" (click)="closeClick.emit()">\n  <mat-icon>close</mat-icon>\n</button>\n\n<markdown class="description" [data]="description"></markdown>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[info_modal_componentngResource_default()]})],InfoModalComponent);var resource_ids=__webpack_require__("./libs/state/src/lib/resource-ids.ts"),contact_actions=__webpack_require__("./libs/state/src/lib/contact/contact.actions.ts"),ngx_google_analytics=__webpack_require__("./node_modules/ngx-google-analytics/fesm2020/ngx-google-analytics.mjs");let ContactBehaviorComponent=class ContactBehaviorComponent{constructor(){this.productLogoUrl=(0,select_snapshot.w)(resource_registry_selectors.S.url,resource_ids.Dw),this.productTitle=(0,select_snapshot.w)(resource_registry_selectors.S.anyText,resource_ids.tc),this.description=(0,select_snapshot.w)(resource_registry_selectors.S.anyText,resource_ids.O2),this.sendMessage=(0,dispatch.WI)(contact_actions.u),this.dialog=(0,core.inject)(dialog.uw),this.selfRef=(0,core.inject)(dialog.so,{optional:!0}),this.ga=(0,core.inject)(ngx_google_analytics.$r)}submit(message){this.sendMessage(message),this.selfRef?.close(),this.postRef=this.dialog.open(this.postMessageTemplate)}close(){this.postRef&&(this.postRef.close(),this.ga.event("acknowedgement_close","modal")),this.selfRef&&(this.selfRef.close(),this.ga.event("contact_close","modal"))}static#_=this.propDecorators={postMessageTemplate:[{type:core.ViewChild,args:["postMessage"]}]}};ContactBehaviorComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ftu-contact-behavior",standalone:!0,imports:[common.CommonModule,dialog.Is,ContactModalComponent,InfoModalComponent],template:'<hra-contact-modal\n  class="contact-modal"\n  [productLogoUrl]="productLogoUrl()"\n  [productTitle]="productTitle()"\n  (submitClick)="submit($event)"\n  (closeClick)="close()"\n>\n</hra-contact-modal>\n\n<ng-template #postMessage>\n  <hra-info-modal\n    class="info-modal"\n    [productLogoUrl]="productLogoUrl()"\n    [productTitle]="productTitle()"\n    [description]="description()"\n    (closeClick)="close()"\n  >\n  </hra-info-modal>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[contact_behavior_componentngResource_default()]})],ContactBehaviorComponent)},"./libs/state/src/lib/contact/contact.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>SendMessage});var _hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/cdk/state/src/actions/actions.ts");class SendMessage extends((0,_hra_ui_cdk_state__WEBPACK_IMPORTED_MODULE_0__.a)("[Contact] Send Message")){constructor(message){super(),this.message=message}}},"./libs/components/atoms/src/lib/email-input/email-input.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host .email-text-field {\n  width: 100%;\n  background: #ffffff;\n}\n:host ::ng-deep .mat-mdc-form-field-required-marker {\n  color: #dc231e;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/required-input/required-input.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host .form-field {\n  width: 100%;\n}\n:host ::ng-deep .mat-mdc-form-field-required-marker {\n  color: #dc231e;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/required-textbox/required-textbox.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host .message-field {\n  width: 100%;\n  background: #ffffff;\n}\n:host ::ng-deep .mat-mdc-form-field-required-marker {\n  color: #dc231e;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/behavioral/src/lib/contact-behavior/contact-behavior.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host .contact-modal {\n  width: 41rem;\n  height: 40rem;\n}\n:host .info-modal {\n  width: 35rem;\n  height: 11.8rem;\n}\n@media screen and (max-height: 328px) {\n  :host .contact-modal {\n    height: calc(100vh - 2rem);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/contact-modal/contact-modal.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n  position: relative;\n  padding-top: 2rem;\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n  font-family: Inter;\n}\n:host .product-logo {\n  display: flex;\n  align-items: center;\n}\n:host .product-logo .product-logo-image {\n  margin-right: 1rem;\n}\n:host .product-logo .product-title {\n  color: #990000;\n  margin: 0;\n  font-weight: 600;\n}\n:host .close {\n  position: absolute;\n  top: 1.5rem;\n  right: 0rem;\n}\n:host .submit {\n  margin-right: 1.5rem;\n}\n:host .submit,\n:host .cancel {\n  width: 7.5rem;\n}\n:host .email {\n  margin-top: 1.25rem;\n}\n:host .message-field {\n  margin-top: 1rem;\n}\n:host .subject-field {\n  margin-top: 1rem;\n}\n:host .desc {\n  margin-top: 1.5rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/molecules/src/lib/info-modal/info-modal.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n  position: relative;\n  padding: 2rem 2rem 1.25rem 2rem;\n}\n:host .close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n}\n:host .title {\n  display: flex;\n  align-items: center;\n}\n:host .title .product-logo-image {\n  height: 2.75rem;\n  margin-right: 1rem;\n}\n:host .title .product-title {\n  margin: 0;\n  color: #990000;\n}\n:host .description {\n  display: block;\n  margin-top: 1rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);