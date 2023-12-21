import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewScheduleComponent } from './components/interview-schedule/interview-schedule.component';
import { InterviewRoutingModule } from './routes/interview/interview-routing.module';



@NgModule({
  declarations: [
    InterviewScheduleComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule
  ]
})
export class InterviewsModule { }
