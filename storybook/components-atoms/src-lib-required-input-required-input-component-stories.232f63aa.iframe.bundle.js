(self.webpackChunkhra_ui=self.webpackChunkhra_ui||[]).push([[661],{"./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>injectDestroy$});var DestroyHostComponent_1,core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),destroy_host_component=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts"),destroy_host_component_default=__webpack_require__.n(destroy_host_component);let DestroyHostComponent=DestroyHostComponent_1=class DestroyHostComponent{constructor(){this.el=(0,core.inject)(core.ElementRef).nativeElement}static create(container){return container.createComponent(DestroyHostComponent_1,{index:0})}ngAfterViewInit(){this.el.remove()}};DestroyHostComponent=DestroyHostComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-destroy-host",standalone:!0,template:"",styles:[destroy_host_component_default()]})],DestroyHostComponent);var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");class ScopedDestructorSubject extends ReplaySubject.t{constructor(scope){super(1),scope.onDestroy((()=>{this.next(),this.complete()}))}}const DESTRUCTOR_CACHE=new WeakMap;function firstDefinedValue(genFn){for(const value of genFn())if(null!=value)return value;throw new Error("Unreachable")}function injectDestroy$(){const key=function findStableKeyObject(){return firstDefinedValue((function*(){yield(0,core.inject)(core.ElementRef,{optional:!0})?.nativeElement,yield(0,core.inject)(core.ViewContainerRef,{optional:!0}),yield(0,core.inject)(core.NgModuleRef)}))}();let destructor=DESTRUCTOR_CACHE.get(key);if(!destructor){const scope=function findDestructorScope(){return firstDefinedValue((function*(){const vcr=(0,core.inject)(core.ViewContainerRef,{optional:!0});yield vcr&&DestroyHostComponent.create(vcr),yield(0,core.inject)(core.NgModuleRef)}))}();destructor=new ScopedDestructorSubject(scope).asObservable(),DESTRUCTOR_CACHE.set(key,destructor)}return destructor}},"./libs/components/atoms/src/lib/required-input/required-input.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>required_input_component_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var required_input_componentngResource=__webpack_require__("./libs/components/atoms/src/lib/required-input/required-input.component.scss?ngResource"),required_input_componentngResource_default=__webpack_require__.n(required_input_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),form_field=__webpack_require__("./node_modules/@angular/material/fesm2022/form-field.mjs"),input=__webpack_require__("./node_modules/@angular/material/fesm2022/input.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),on_destroy=__webpack_require__("./libs/cdk/injectors/src/lib/on-destroy/on-destroy.ts"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");let RequiredInputComponent=class RequiredInputComponent{constructor(){this.label="",this.inputChange=new core.EventEmitter,this.destroy$=(0,on_destroy.o)(),this.control=new fesm2022_forms.NI("",{updateOn:"blur",validators:fesm2022_forms.kI.required});const{control,destroy$,inputChange}=this;control.valueChanges.pipe((0,takeUntil.R)(destroy$),(0,map.U)((value=>control.valid?value:void 0))).subscribe(inputChange)}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={label:[{type:core.Input}],inputChange:[{type:core.Output}]}};RequiredInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"hra-required-input",standalone:!0,imports:[common.CommonModule,form_field.lN,input.c,fesm2022_forms.UX],template:'<mat-form-field class="form-field" appearance="outline">\n  <mat-label> {{ label }} </mat-label>\n  <input matInput [formControl]="control" />\n  <mat-error *ngIf="control.hasError(\'required\')">{{ label }} is required</mat-error>\n</mat-form-field>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[required_input_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],RequiredInputComponent);const required_input_component_stories={title:"RequiredInputComponent",component:RequiredInputComponent},Primary=(args=>({props:args,styles:[]})).bind({});Primary.args={label:"Enter Name"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: RequiredInputComponent) => ({\n  props: args,\n  styles: []\n})",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXNwbGF5OiBub25lIH0%3D!./libs/cdk/injectors/src/lib/on-destroy/destroy-host.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host { display: none }",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/components/atoms/src/lib/required-input/required-input.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: block;\n}\n:host .form-field {\n  width: 100%;\n}\n:host ::ng-deep .mat-mdc-form-field-required-marker {\n  color: #dc231e;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);