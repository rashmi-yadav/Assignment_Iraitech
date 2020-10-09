import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onChange(val:HTMLInputElement){
    this.valueChange.emit(val.value)
  }
}
