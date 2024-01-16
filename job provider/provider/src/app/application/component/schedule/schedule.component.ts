import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InterviewsService } from 'src/app/interviews/service/interviews.service';
import { applicants, applicationid } from '../../model/applicant';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  jobSeekerId!:string;
  applicants!:applicationid[];

  // getapplicants!:FormGroup;
  applicantsform!:FormGroup;
  constructor(private service:InterviewsService , private formbuilder:FormBuilder, private route:ActivatedRoute){}

  ngOnInit(){
    this.applicantsform=this.formbuilder.group({
      date:['',[Validators.required]]
    });
    this.route.params.subscribe((params)=>{
      this.jobSeekerId=params['id'];
    });
    
  }

  postapplicants(){
    
    const data=this.applicantsform.value

    this.service.postinterview(data).subscribe((resp:any)=>{
      this.applicants=resp;
      console.log(resp.applicationId);
    })
}
}