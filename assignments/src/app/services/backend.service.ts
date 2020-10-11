import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Text {
  component:string;
  value:string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  arr:Text[] = [];
  constructor(private http:HttpClient) { }
  add(txt:Text){
    this.arr.push(txt);
    console.log("Added:=======\n",this.arr);
    this.http
      .post<{ message: string}>("http://localhost:3000/api/save", this.arr)
      .subscribe((responseData) => {
        console.log(responseData.message)
      })
  }
  getAll(){
    return this.arr;  
  }
}


