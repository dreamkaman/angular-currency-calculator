import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyNameComponent } from './components/currency-name/currency-name.component';
import { CurrencyValueComponent } from './components/currency-value/currency-value.component';
import { ConverterFormComponent } from './components/converter-form/converter-form.component';



@NgModule({
  declarations: [
    CurrencyNameComponent,
    CurrencyValueComponent,
    ConverterFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyNameComponent,
    CurrencyValueComponent,
    ConverterFormComponent
  ]
})
export class SharedModule { }
