import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent implements OnInit {  
  productForm: FormGroup;
   
  constructor(private fb:FormBuilder) {
  }
  ngOnInit(){

    this.productForm = this.fb.group({
      numbers: this.fb.array([]) ,
    });
    this.addQuantity();
  }
  numbers() : FormArray {
    return this.productForm.get("numbers") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      no: '',
    })
  }
   
  addQuantity() {
    this.numbers().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.numbers().removeAt(i);
  }
   
  onSubmit() {
    console.log(JSON.stringify(this.productForm.value.numbers));
  }
}
