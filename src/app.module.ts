import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModuleLoaderService, CommonModule } from 'app/common';

import { routing } from './app.routing';
import { ALL_SERVICES } from './services';
import { AppComponent, ALL_PAGES } from './pages';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    routing
  ],
  declarations: [...ALL_PAGES],
  providers: [
    ModuleLoaderService,
    ...ALL_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private moduleLoader: ModuleLoaderService) {

  }
}
