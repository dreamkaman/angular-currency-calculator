import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// import { ICurrencyInfo } from 'src/app/types';

@Component({
  selector: 'app-currency-property',
  templateUrl: './currency-property.component.html',
  styleUrls: ['./currency-property.component.css']
})
export class CurrencyPropertyComponent implements OnInit {
  // currencies!: ICurrencyInfo[];

  constructor(private store: Store<any>) { }


  ngOnInit(): void {
    console.log(this.store);
  }

}
