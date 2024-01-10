import { Component } from '@angular/core';
import { JobserviceService } from '../../service/jobservice.service';
import { getinglocation, joblist } from '../../model/joblist';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent {

  joblisting!: joblist[];
  jobslist!: getinglocation[];
  constructor (private jobservice:JobserviceService){}

  ngOnInit(){
    this.jobList();
    this.getjobs();
  }

  jobList(){
    this.jobservice.getJobList().subscribe((data:any) => {
      this.joblisting=data;
      console.log(data);
      console.log(this.joblisting);
      
    });
  }

  getjobs(){
    this.jobservice.getLocation().subscribe((data:any)=>{
      this.jobslist=data;
      console.log(joblist.name);
    })
  }
}



