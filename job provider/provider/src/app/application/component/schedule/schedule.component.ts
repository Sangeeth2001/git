import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InterviewsService } from 'src/app/interviews/service/interviews.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  jobSeekerId!:string;

  getapplicants!:FormGroup
  constructor(private service:InterviewsService , private formbuilder:FormBuilder, private route:ActivatedRoute){}

  ngOnInit(){
    // this.postapplicants();
    this.route.params.subscribe((params)=>{
      this.jobSeekerId=params['id'];
      console.log(this.jobSeekerId);
      alert(this.jobSeekerId)
    })
  }

//   postapplicants(){
//     const data=this.getapplicants.value
//     this.service.postinterview(data).subscribe((Response:any)=>{
//       console.log(Response.applicationId);
      
//     })
// }
}