import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { COMMON_COMPONENTS } from './components';
import { COMMON_PIPES } from './pipes';

@NgModule({
  imports: [
    HttpModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule
  ],
  declarations: [...COMMON_COMPONENTS, ...COMMON_PIPES],
  providers: [],
})
export class AppCommonModule {
  constructor() {
  }
}
