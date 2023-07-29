import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-currency-name',
  templateUrl: './currency-name.component.html',
  styleUrls: ['./currency-name.component.css']
})
export class CurrencyNameComponent {
  @Input() name: string = 'changeName';
  @Output() changeEmitter: EventEmitter<Event> = new EventEmitter();

}
