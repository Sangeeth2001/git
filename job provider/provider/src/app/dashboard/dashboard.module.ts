import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { DashboardRoutingModule } from './routes/dashboard/dashboard-routing.module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';




@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
  ],
  imports: [
    CommonModule,
   DashboardRoutingModule,
  ]
})
export class DashboardModule { }
