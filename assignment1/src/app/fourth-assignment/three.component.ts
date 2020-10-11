import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  template: `{{this.value}}`,
})
export class ThreeComponent implements OnInit {
  @Input() value:string

  constructor() { }

  ngOnInit() {
  }

}
