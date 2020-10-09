import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
  
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
