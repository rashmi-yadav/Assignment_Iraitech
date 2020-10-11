import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `{{this.value}}`,
})
export class OneComponent implements OnInit {
  @Input() value:string
  constructor() { }

  ngOnInit() {
  }

}
