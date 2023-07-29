import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/store/reducers/app.reducer';
import { eurUahRateSelector, eurUsdRateSelector, usdUahRateSelector } from 'src/app/store/selectors/app.selectors';

import { ICurrencyInfo } from 'src/app/models/types';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent implements OnInit {
  @Output() leftCurrency: string = 'UAH';
  @Output() rightCurrency: string = 'UAH';
  @Output() leftCurrencyAmount: string = '1';
  @Output() rightCurrencyAmount: string = '1';

  currencies!: ICurrencyInfo[];

  UAH_UAH = 1;
  USD_USD = 1;
  EUR_EUR = 1;
  UAH_USD!: number;
  UAH_EUR!: number;
  USD_UAH!: number;
  EUR_UAH!: number;
  USD_EUR!: number;
  EUR_USD!: number;

  constructor(private store: Store<IGlobalState>) { }

  ngOnInit(): void {
    this.store.select(usdUahRateSelector).subscribe({
      next:
        info => {
          this.USD_UAH = info?.rateBuy ?? 0;
          this.UAH_USD = info?.rateSell ?? 0;
        },
      error: error => console.log(error)
    });
    this.store.select(eurUahRateSelector).subscribe({
      next:
        info => {
          this.EUR_UAH = info?.rateBuy ?? 0;
          this.UAH_EUR = info?.rateSell ?? 0;
        },
      error: error => console.log(error)
    });

    this.store.select(eurUsdRateSelector).subscribe({
      next: info => {
        this.EUR_USD = info?.rateSell ?? 0;
        this.USD_EUR = info?.rateBuy ?? 0;
      }
    });
  }

  inputHandlerLeft(event: Event): void {
    this.leftCurrencyAmount = (event.target as HTMLInputElement).value;
    this.rightCurrencyAmount = (Number(this.leftCurrencyAmount) * this.findCurrencyCrossRate(this.leftCurrency, this.rightCurrency)).toString();
  }

  inputHandlerRight(event: Event): void {
    this.rightCurrencyAmount = (event.target as HTMLInputElement).value;
    this.leftCurrencyAmount = (Number(this.rightCurrencyAmount) / this.findCurrencyCrossRate(this.leftCurrency, this.rightCurrency)).toString();
  }

  changeHandlerLeft(event: Event): void {
    this.leftCurrency = (event.target as HTMLSelectElement).value;
    this.rightCurrencyAmount = (Number(this.leftCurrencyAmount) * this.findCurrencyCrossRate(this.leftCurrency, this.rightCurrency)).toString();
  }

  changeHandlerRight(event: any): void {
    this.rightCurrency = (event.target as HTMLSelectElement).value;
    this.leftCurrencyAmount = (Number(this.rightCurrencyAmount) / this.findCurrencyCrossRate(this.leftCurrency, this.rightCurrency)).toString();
  }

  findCurrencyCrossRate(currencyNameLeft: string, currencyNameRight: string): number {
    if (currencyNameLeft === currencyNameRight) {
      return 1;
    }
    if (currencyNameLeft == 'USD' && currencyNameRight === 'UAH') {
      return this.USD_UAH;
    }
    if (currencyNameLeft == 'EUR' && currencyNameRight === 'UAH') {
      return this.EUR_UAH;
    }
    if (currencyNameLeft == 'UAH' && currencyNameRight === 'USD') {
      return 1 / this.UAH_USD;
    }
    if (currencyNameLeft == 'UAH' && currencyNameRight === 'EUR') {
      return 1 / this.UAH_EUR;
    }
    if (currencyNameLeft == 'EUR' && currencyNameRight === 'USD') {
      return this.EUR_USD;
    }
    if (currencyNameLeft == 'USD' && currencyNameRight === 'EUR') {
      return 1 / this.USD_EUR;
    }

    return 0;
  }
}
