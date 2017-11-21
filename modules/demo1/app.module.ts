import { ALL_PAGES } from './pages';
import { AppCommonModule } from 'app/common';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

@NgModule({
  imports: [
    AppCommonModule,
    routing
  ],
  declarations: [...ALL_PAGES],
  providers: [],
  entryComponents: [...ALL_PAGES]
})
export class AppModule {

}
