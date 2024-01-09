import { Component } from '@angular/core';
import { JobserviceService } from '../../service/jobservice.service';
import { joblist } from '../../model/joblist';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent {

  joblisting!: joblist[];
  constructor (private jobservice:JobserviceService){}

  ngOnInit(){
    this.jobList();
  }

  jobList(){
    this.jobservice.getJobList().subscribe((data:any) => {
      this.joblisting=data;
    });
  }
}
