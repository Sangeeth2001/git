import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './component/applications/applications.component';
import { ApplicationRoutingModule } from './routes/application/application-routing.module';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ApplicationsComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ApplicationModule { }
