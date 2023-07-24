import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent implements OnInit {
  @Output() leftCurrency: string = 'UAH';
  @Output() rightCurrency: string = 'UAH';
  @Output() leftCurrencyAmount: string = '';
  @Output() rightCurrencyAmount: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  inputHandlerLeft(event: Event): void {
    this.leftCurrencyAmount = (event.target as HTMLInputElement).value;
    this.rightCurrencyAmount = this.leftCurrencyAmount;
  }

  inputHandlerRight(event: Event): void {
    this.rightCurrencyAmount = (event.target as HTMLInputElement).value;
    this.leftCurrencyAmount = this.rightCurrencyAmount;
  }

  changeHandlerLeft(event: Event): void {
    this.leftCurrency = (event.target as HTMLSelectElement).value;
  }

  changeHandlerRight(event: any): void {
    this.rightCurrency = (event.target as HTMLSelectElement).value;
  }

  convertCurrency(currencyName1: string, currencyName2: string): number {
    return 1;
  }
}
