import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IGlobalState } from 'src/app/store/reducers/app.reducer';
import { eurUahRateSelector, usdUahRateSelector } from 'src/app/store/selectors/app.selectors';

import { ICurrencyInfo } from 'src/app/models/types';

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
