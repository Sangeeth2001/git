import { Component,OnInit } from '@angular/core';
import { joblist } from '../../model/joblist';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobserviceService } from '../../service/jobservice.service';
import { getinglocation } from '../../model/joblist';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {


  postjobs! : FormGroup;
  jobslist!: getinglocation[];

  constructor(private formBuilder:FormBuilder,private jb:JobserviceService){}
  ngOnInit(): void {
    this.getjobs();
    this.postjobs = this.formBuilder.group({
      jobTitle: ['', Validators.required],
      jobSummary: ['', Validators.required],
      locationId: ['',Validators.required],
      companyId:  ['',Validators.required,],
      categoryId: ['',Validators.required],
      industryId: ['',Validators.required]
    });
  }
  
  
  postData(){
    console.log(this.postjobs);
  }
  getjobs(){
    this.jb.getLocation().subscribe((data:any)=>{
      this.jobslist=data;
      console.log(joblist.name);
    })

  }
  

  }
  