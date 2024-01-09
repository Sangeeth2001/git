import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { JobsRoutingModule } from './routes/jobs/jobs-routing.module';
import { PostjobComponent } from './components/postjob/postjob.component';
import { JobserviceService } from './service/jobservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobComponent } from './components/job/job.component';
import { UpdateJobComponent } from './components/update-job/update-job.component';



@NgModule({
  declarations: [
    JobComponent,
    ListJobsComponent,
    PostjobComponent,
    UpdateJobComponent,
   
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  
  ]
})
export class JobsModule { }
