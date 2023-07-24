import { Component, OnInit } from '@angular/core';
import { GetCurrenciesService } from './get-currencies.service';

import { ICurrencyInfo } from './types';
import { ICurrenciesState } from './app.reducer';
import { Store } from '@ngrx/store';
import { setCurrenciesAction } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currencies: ICurrencyInfo[] = [];

  constructor(private getCurrenciesService: GetCurrenciesService,
    private store: Store<ICurrenciesState>) { }

  ngOnInit(): void {
    this.getCurrenciesService.getCurrencies().subscribe({
      next: (currenciesArray) => {
        this.currencies = (currenciesArray).filter((currencyItem) => {
          return currencyItem.currencyCodeA === 840 && currencyItem.currencyCodeB === 980 ||
            currencyItem.currencyCodeA === 978 && currencyItem.currencyCodeB === 980
        });
        this.store.dispatch(setCurrenciesAction({ currencies: this.currencies }));
      },
      error: (error) => console.log(error)
    });
  }
}

