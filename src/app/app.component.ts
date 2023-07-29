import { Component, OnInit } from '@angular/core';
import { GetCurrenciesService } from './services/getCurrencyService/get-currencies.service';

import { ICurrencyInfo } from './models/types';
import { ICurrenciesState } from './store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { setCurrenciesAction } from './store/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetCurrenciesService]
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
            currencyItem.currencyCodeA === 978 && currencyItem.currencyCodeB === 980 ||
            currencyItem.currencyCodeA === 840 && currencyItem.currencyCodeB === 978 ||
            currencyItem.currencyCodeA === 978 && currencyItem.currencyCodeB === 840
        });
        this.store.dispatch(setCurrenciesAction({ currencies: this.currencies }));
      },
      error: (error) => console.log(error)
    });
  }
}

