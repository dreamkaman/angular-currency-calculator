import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-currency-value',
  templateUrl: './currency-value.component.html',
  styleUrls: ['./currency-value.component.css']
})
export class CurrencyValueComponent implements OnInit {
  @Input() name: string = 'changeName';
  @Input() value!: string;
  @Input() labelText!: string;

  @Output() inputEmitter: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
