import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterPageComponent } from './converter-page/converter-page.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ConverterPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ConverterPageComponent
  ]
})
export class PagesModule { }
