import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputHandlerLeft() {
    console.log('I am left!');
  }

  inputHandlerRight() {
    console.log('I am right!');
  }

  changeHandlerLeft() {
    console.log('I am left!')
  }

  changeHandlerRight() {
    console.log('I am right!')
  }
}
