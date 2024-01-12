import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './component/applications/applications.component';
import { ApplicationRoutingModule } from './routes/application/application-routing.module';
import { ScheduleComponent } from './component/schedule/schedule.component';



@NgModule({
  declarations: [
    ApplicationsComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
