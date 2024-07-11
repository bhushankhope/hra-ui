import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HraApiConfiguration, HraApiModule } from '@hra-api/ng-client';
import { ApiEndpointDataSourceService, DataSourceService } from 'ccf-shared';
import { AnalyticsModule } from 'ccf-shared/analytics';

import { environment } from '../../environments/environment';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [
    HttpClientModule,
    AnalyticsModule.forRoot({
      gaToken: environment.googleAnalyticsToken,

      appName: 'organ-info',
      projectName: 'ccf',

      developmentMode: !environment.production,
    }),

    HraApiModule.forRoot(
      () =>
        new HraApiConfiguration({
          basePath: environment.dbOptions.remoteApiEndpoint,
        }),
    ),

    StoreModule,
  ],
  providers: [{ provide: DataSourceService, useExisting: ApiEndpointDataSourceService }],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('The core module should only be imported once in the root module');
    }
  }
}
