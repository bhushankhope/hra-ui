import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ThemingModule } from './services/theming/theming.module';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [CommonModule, StoreModule, ThemingModule],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('The core module should only be imported once in the root module');
    }
  }
}
