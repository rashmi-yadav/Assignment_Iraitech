import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './fourth-assignment/main.component';
import { FirstAssignmentComponent } from './first-assignment/first-assignment.component';
import { ThirdAssignmentComponent } from './third-assignment/third-assignment.component';
import { SecondAssignmentComponent } from './second-assignment/second-assignment.component';


const routes: Routes = [
  {path:'assignment1', component:FirstAssignmentComponent},
  {path:'assignment2', component:SecondAssignmentComponent},
  {path:'assignment3', component:ThirdAssignmentComponent},
  {path:'assignment4', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
