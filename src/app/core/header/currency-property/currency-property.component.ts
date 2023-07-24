import { Component, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ICurrenciesState } from 'src/app/app.reducer';
import { usdRateSelector } from 'src/app/app.selectors';

import { ICurrencyInfo } from 'src/app/types';

@Component({
  selector: 'app-currency-property',
  templateUrl: './currency-property.component.html',
  styleUrls: ['./currency-property.component.css']
})
export class CurrencyPropertyComponent implements OnInit {

  usdRate$!: Observable<any>;
  // usdRates = this.currencies.find((currency) => {
  //   console.log(currency);
  //   return currency.currencyCodeA === 840 && currency.currencyCodeB === 980
  // })

  // @Output() usdBuy = this.usdRates?.rateBuy;
  // @Output() usdSell = this.usdRates?.rateSell;

  constructor(private store: Store<ICurrenciesState>) { }



  ngOnInit(): void {
    console.log('ngOnInit Works');
    this.usdRate$ = this.store.pipe(select(usdRateSelector));
  }

  ngOnChanges(): void {
    console.log('ngOnChanges works!');

  }

  ngDoCheck(): void {

  }

}
