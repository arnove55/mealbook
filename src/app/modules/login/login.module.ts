import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,

    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    

  ],
 
})
export class LoginModule { }
