import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ModuleLoaderService, CommonModule } from 'app/common';

import { routing } from './app.routing';
import { AppComponent, ALL_PAGES } from './app';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    routing
  ],
  declarations: [...ALL_PAGES],
  providers: [
    ModuleLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private moduleLoader: ModuleLoaderService) {

  }
}
