import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { CurrencyPropertyComponent } from './header/currency-property/currency-property.component';



@NgModule({
  declarations: [HeaderComponent,
    LogoComponent,
    CurrencyPropertyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
