import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/application/service/application.service';
import { applicationid } from 'src/app/application/model/applicant';
import { applicants } from 'src/app/application/model/applicant';
import { InterviewsService } from '../../service/interviews.service';
import { interview } from '../../model/interview';
@Component({
  selector: 'app-interview-schedule',
  templateUrl: './interview-schedule.component.html',
  styleUrls: ['./interview-schedule.component.css']
})
export class InterviewScheduleComponent {

  applicants!:applicants[];
  applicationid:interview[]=[];
  constructor (private as:ApplicationService, private interviewservice:InterviewsService){}

  ngOnInit(){
    this.listInterview();
    this.listApplicants();
  }

  listApplicants(){
    this.as.getApplication().subscribe((result:any)=>{
      this.applicants=result;
      console.log(result);
      
    })
  }
  removeInterviewlist(applicationid:interview){
    this.interviewservice.removeInterview(applicationid).subscribe((result:any)=>{
      console.log(result);
     
    });
    this.listApplicants();
    
  }

  listInterview(){
    this.as.getDatelist().subscribe((Response:any)=>{
      this.applicationid=Response;
    })
  }
  
}


