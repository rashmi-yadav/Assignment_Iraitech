import { Component } from "@angular/core";

@Component({
    templateUrl:'./main.component.html',
    styleUrls:['./main.component.css']
})
export class MainComponent{
    info:string;
    title = 'assignment2';
    change(value){
      console.log(value);
      this.info=value;
    }
}