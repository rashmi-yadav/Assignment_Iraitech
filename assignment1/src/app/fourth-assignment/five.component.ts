import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-five',
  template: '<input type="text" (change)="onChange(val)" #val>',
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
