import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewScheduleComponent } from '../../components/interview-schedule/interview-schedule.component';

const routes: Routes = [
  {
    path:'',component:InterviewScheduleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }
