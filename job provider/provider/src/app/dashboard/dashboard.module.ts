import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './routes/dashboard/dashboard-routing.module';


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