import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppCommonModule, COMMON_SERVICES, ModuleLoaderService } from 'app/common';

import { routing } from './app.routing';
import { ALL_COMPONENTS } from './components';
import { ALL_PIPES } from './pipes';
import { ALL_SERVICES } from './services';
import { AppComponent, ALL_PAGES } from './pages';

@NgModule({
  imports: [
    BrowserModule,
    AppCommonModule,
    routing
  ],
  declarations: [...ALL_COMPONENTS, ...ALL_PAGES, ...ALL_PIPES],
  providers: [
    ...COMMON_SERVICES,
    ...ALL_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private moduleLoader: ModuleLoaderService) {

  }
}
