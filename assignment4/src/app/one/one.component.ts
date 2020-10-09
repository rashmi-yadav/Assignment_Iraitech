import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `{{this.value}}`,
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Input() value:string
  constructor() { }

  ngOnInit() {
  }

}
