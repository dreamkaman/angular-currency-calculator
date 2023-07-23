import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-currency-name',
  templateUrl: './currency-name.component.html',
  styleUrls: ['./currency-name.component.css']
})
export class CurrencyNameComponent implements OnInit {
  @Input() name: string = 'changeName';
  @Output() changeEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
