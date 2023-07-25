import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IGlobalState } from 'src/app/app.reducer';
import { eurUahRateSelector, usdUahRateSelector } from 'src/app/app.selectors';

import { ICurrencyInfo } from 'src/app/types';

@Component({
  selector: 'app-currency-property',
  templateUrl: './currency-property.component.html',
  styleUrls: ['./currency-property.component.css']
})
export class CurrencyPropertyComponent implements OnInit {

  usdRate$!: Observable<ICurrencyInfo | undefined>;
  eurRate$!: Observable<ICurrencyInfo | undefined>;


  constructor(private store: Store<IGlobalState>) {

  }



  ngOnInit(): void {
    this.usdRate$ = this.store.select(usdUahRateSelector);
    this.eurRate$ = this.store.pipe(select(eurUahRateSelector));
  }

}
