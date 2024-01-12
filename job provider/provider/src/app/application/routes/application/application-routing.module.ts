import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from '../../component/applications/applications.component';
import { ScheduleComponent } from '../../component/schedule/schedule.component';

const routes: Routes = [
  {
    path:'',component:ApplicationsComponent
  },
  {
    path:'applicants/:id',component:ScheduleComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
