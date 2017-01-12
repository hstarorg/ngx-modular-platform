import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { ALL_PAGES } from './pages';
import { AppCommonModule } from 'app/common';

@NgModule({
  imports: [
    AppCommonModule,
    routing
  ],
  declarations: [...ALL_PAGES],
  providers: []
})
export class AppModule {

}