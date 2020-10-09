import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info:string;
  title = 'assignment2';
  change(value){
    console.log(value);
    this.info=value;
  }
}
