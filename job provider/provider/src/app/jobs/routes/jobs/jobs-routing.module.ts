import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from '../../components/job/job.component';
import { PostjobComponent } from '../../components/postjob/postjob.component';

const routes: Routes = [
  {
    path:'',component:JobComponent
  },
  // {
  //   path:'/postjob',component:PostjobComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
