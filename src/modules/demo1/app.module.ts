import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { ALL_PAGES } from './app';

@NgModule({
  imports: [
    routing
  ],
  declarations: [...ALL_PAGES],
  providers: []
})
export class AppModule {

}