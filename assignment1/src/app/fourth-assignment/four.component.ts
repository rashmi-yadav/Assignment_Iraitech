import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  template: `{{this.value}}`,
})
export class FourComponent implements OnInit {
  @Input() value:string

  constructor() { }

  ngOnInit() {
  }

}
