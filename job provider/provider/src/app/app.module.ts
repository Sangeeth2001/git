import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/components/dashboard-home/dashboard-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProviderHomeModule } from './provider-home/provider-home.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // DashboardHomeComponent,
    // SidebarComponent,
      //  NavbarComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProviderHomeModule,
    SharedModule,
    RouterModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
