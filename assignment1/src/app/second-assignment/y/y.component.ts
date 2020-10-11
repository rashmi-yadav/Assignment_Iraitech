import { Component, Input, OnInit } from '@angular/core';
import { ExampleService, Text } from '../example.service';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {
  @Input() index: number;

  constructor(private example:ExampleService) { }

  ngOnInit(): void {
  }
  save(txt:HTMLInputElement){
    var example:Text = {
      component:"X"+this.index,
      value:txt.value
    }
    this.example.add(example);
  }
}
