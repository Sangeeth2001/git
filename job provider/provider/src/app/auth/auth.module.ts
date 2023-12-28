import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './routes/auth/auth-routing.module';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SetPasswordComponent } from './components/set-password/set-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    AuthHomeComponent,
    SignupComponent,
    SetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
