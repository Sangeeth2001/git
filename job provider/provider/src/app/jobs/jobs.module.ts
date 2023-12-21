import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponentsComponent } from './components/job-components/job-components.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { JobsRoutingModule } from './routes/jobs/jobs-routing.module';



@NgModule({
  declarations: [
    JobComponentsComponent,
    ListJobsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  
  ]
})
export class JobsModule { }
