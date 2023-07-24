import { Component, OnInit, Output } from '@angular/core';
import { GetCurrenciesService } from './get-currencies.service';

import { ICurrencyInfo } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currencies: ICurrencyInfo[] = [];

  constructor(private getCurrenciesService: GetCurrenciesService) { }

  ngOnInit(): void {
    this.getCurrenciesService.getCurrencies().subscribe({
      next: (currenciesArray) => {
        this.currencies = (currenciesArray).filter((currencyItem) => {
          return currencyItem.currencyCodeA === 840 && currencyItem.currencyCodeB === 980 ||
            currencyItem.currencyCodeA === 978 && currencyItem.currencyCodeB === 980 ||
            currencyItem.currencyCodeA === 840 && currencyItem.currencyCodeB === 978 ||
            currencyItem.currencyCodeA === 978 && currencyItem.currencyCodeB === 840
        });
      },
      error: (error) => console.log(error)
    });
  }
}

