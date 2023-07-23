import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-currency-value',
  templateUrl: './currency-value.component.html',
  styleUrls: ['./currency-value.component.css']
})
export class CurrencyValueComponent implements OnInit {
  @Input() name: string = 'changeName';
  @Output() inputEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // inputHandler() {
  //   console.log('something inputs!')
  // }

}
