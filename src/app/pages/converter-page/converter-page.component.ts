import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGlobalState } from 'src/app/app.reducer';
import { usdUahRateSelector } from 'src/app/app.selectors';
import { ICurrencyInfo } from 'src/app/types';

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
