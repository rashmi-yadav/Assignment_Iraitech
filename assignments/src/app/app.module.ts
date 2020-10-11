import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstAssignmentComponent } from './first-assignment/first-assignment.component';
import { ThirdAssignmentComponent } from './third-assignment/third-assignment.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FourthAssignmentModule } from './fourth-assignment/fourth-assignment.module';
import { HttpClientModule } from '@angular/common/http';
import { SecondAssignmentModule } from './second-assignment/second-assignment.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstAssignmentComponent,
    ThirdAssignmentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SecondAssignmentModule,
    FourthAssignmentModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
