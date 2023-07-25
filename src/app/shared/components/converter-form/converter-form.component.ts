import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICurrenciesState } from 'src/app/app.reducer';

import { ICurrencyInfo } from 'src/app/types';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent implements OnInit {
  @Output() leftCurrency: string = 'UAH';
  @Output() rightCurrency: string = 'UAH';
  @Output() leftCurrencyAmount: string = '';
  @Output() rightCurrencyAmount: string = '';

  currencies!: ICurrencyInfo[];

  UAH_UAH: number = 1;
  USD_USD: number = 1;
  EUR_EUR: number = 1;
  UAH_USD: number | undefined = this.currencies?.find(currency => currency.currencyCodeA === 840 && currency.currencyCodeB === 980)?.rateSell;

  constructor(private store: Store<ICurrenciesState>) { }

  ngOnInit(): void {
    // this.store.select(usdRateSelector).subscribe(value => this.UAH_USD = value?.rateSell);
  }

  inputHandlerLeft(event: Event): void {
    this.leftCurrencyAmount = (event.target as HTMLInputElement).value;
    this.rightCurrencyAmount = this.leftCurrencyAmount;
  }

  inputHandlerRight(event: Event): void {
    this.rightCurrencyAmount = (event.target as HTMLInputElement).value;
    this.leftCurrencyAmount = this.rightCurrencyAmount;
  }

  changeHandlerLeft(event: Event): void {
    this.leftCurrency = (event.target as HTMLSelectElement).value;
    console.log(this.UAH_USD);
  }

  changeHandlerRight(event: any): void {
    this.rightCurrency = (event.target as HTMLSelectElement).value;
  }

  convertCurrencyNameToCode(currencyName: string): number {
    switch (currencyName) {
      case 'USD': return 840;
      case 'EUR': return 978;

      default: return 980;
    }
  }

  findCurrencyRate(): number {
    return 1
  }
}
