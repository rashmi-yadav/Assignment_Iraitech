import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondAssignmentComponent } from './second-assignment.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';

@NgModule({
  declarations: [SecondAssignmentComponent,XComponent,YComponent],
  imports: [
    CommonModule
  ]
})
export class SecondAssignmentModule { }
