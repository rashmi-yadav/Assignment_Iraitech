import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `{{this.value}}`,
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @Input() value:string

  constructor() { }

  ngOnInit() {
  }

}
