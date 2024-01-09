import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from '../../components/job/job.component';
import { PostjobComponent } from '../../components/postjob/postjob.component';
import { ListJobsComponent } from '../../components/list-jobs/list-jobs.component';

const routes: Routes = [
  {
    path:'',component:JobComponent
  },
  {
    path:'postjob',component:PostjobComponent
  },
  {
    path:'listjob',component:ListJobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
