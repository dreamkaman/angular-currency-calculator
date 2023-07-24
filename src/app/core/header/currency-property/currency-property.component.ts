import { Component, Input, OnInit } from '@angular/core';
import { ICurrencyInfo } from 'src/app/types';

@Component({
  selector: 'app-currency-property',
  templateUrl: './currency-property.component.html',
  styleUrls: ['./currency-property.component.css']
})
export class CurrencyPropertyComponent implements OnInit {
  @Input() currencies: ICurrencyInfo[] = [];
  constructor() { }


  ngOnInit(): void {

  }

}
