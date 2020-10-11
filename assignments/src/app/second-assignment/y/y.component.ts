import { Component, Input, OnInit } from '@angular/core';
import { BackendService, Text } from '../../services/backend.service';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {
  @Input() index: number;

  constructor(private backend:BackendService) { }

  ngOnInit(): void {
  }
  save(txt:HTMLInputElement){
    var example:Text = {
      component:"X"+this.index,
      value:txt.value
    }
    this.backend.add(example);
  }
}
