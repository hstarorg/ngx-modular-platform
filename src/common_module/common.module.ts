import { NgModule } from '@angular/core';
import { CommonModule as Ng2CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    HttpModule
  ],
  exports: [
    Ng2CommonModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule
  ],
  declarations: [],
  providers: [],
})
export class CommonModule {

}
