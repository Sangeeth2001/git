import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './routes/auth/auth-routing.module';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    AuthHomeComponent,
    // DashboardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
