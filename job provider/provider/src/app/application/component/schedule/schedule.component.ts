// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { InterviewsService } from 'src/app/interviews/service/interviews.service';
// import { applicants, applicationid } from '../../model/applicant';

// @Component({
//   selector: 'app-schedule',
//   templateUrl: './schedule.component.html',
//   styleUrls: ['./schedule.component.css']
// })
// export class ScheduleComponent {
//   jobSeekerId!:string;
//   applicants!:applicationid[];

//   // getapplicants!:FormGroup;
//   applicantsform!:FormGroup;
//   constructor(private service:InterviewsService , private route:ActivatedRoute){}

//   ngOnInit(){
    
//     this.route.params.subscribe((params)=>{
//       this.jobSeekerId=params['id'];
//     });
//   }

//   postapplicants(){
    
//     const data=this.applicantsform.value

//     this.service.postinterview(data).subscribe((resp:any)=>{
//       this.applicants=resp;
//       console.log(resp.applicationId);
//     })
// }
// }
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { InterviewsService } from 'src/app/interviews/service/interviews.service';
import { ApplicationService } from '../../service/application.service';
import { applicants, applicationid } from '../../model/applicant';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  jobSeekerId!: string;
  applicants!: applicationid[];
  applicantsform= new FormGroup({
    date: new FormControl('')
  });
  applicantdata: applicationid={
    applicationId: '',
    date:''
  }

  constructor(private as:ApplicationService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.jobSeekerId = params['id'];
    });

    // Initialize the form here
    this.applicantsform = this.formBuilder.group({
      date: ['', [Validators.required]]
    });
  }

  postapplicants() {
    const data = this.applicantsform.value;
    this.applicantdata.applicationId=this.jobSeekerId;
    this.applicantdata.date=data.date;

    this.as.postDate(this.applicantdata).subscribe((resp: any) => {
      
      console.log(resp.applicationId);
    });
  }
}
