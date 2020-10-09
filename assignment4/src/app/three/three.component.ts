import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  template: `{{this.value}}`,
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  @Input() value:string

  constructor() { }

  ngOnInit() {
  }

}
