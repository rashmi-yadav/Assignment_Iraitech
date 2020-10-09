import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  template: `{{this.value}}`,
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  @Input() value:string

  constructor() { }

  ngOnInit() {
  }

}
