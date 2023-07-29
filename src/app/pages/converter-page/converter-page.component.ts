import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/store/reducers/app.reducer';
import { usdUahRateSelector } from 'src/app/store/selectors/app.selectors';
import { ICurrencyInfo } from 'src/app/models/types';

@Component({
  selector: 'app-converter-page',
  templateUrl: './converter-page.component.html',
  styleUrls: ['./converter-page.component.css']
})
export class ConverterPageComponent implements OnInit {
  currency: ICurrencyInfo | undefined;

  constructor(private store: Store<IGlobalState>) {
    this.store.select(usdUahRateSelector).subscribe({
      next: info => this.currency = info,
      error: error => console.log(error)
    });
  }

  ngOnInit(): void {
  }

}
