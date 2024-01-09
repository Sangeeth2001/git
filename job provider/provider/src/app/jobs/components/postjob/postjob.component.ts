import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getingcategory, getingcompany, getingindustry, getinglocation, joblist } from '../../model/joblist';
import { JobserviceService } from '../../service/jobservice.service';


@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit  {

  postJobs!:FormGroup
  jobslist!: getinglocation[];
  addCompany!:getingcompany[];
  addCategory!:getingcategory[];
  addIndustry!:getingindustry[];

  constructor(private formBuilder:FormBuilder,private jb:JobserviceService){}
    ngOnInit(): void {
      this.getjobs();
      this.getcompId();
      this.getcate();
      this.getind();
      this.postJobs = this.formBuilder.group({
        jobTitle: ['', Validators.required],
        jobSummary: ['', Validators.required],
        locationId: ['',Validators.required],
        companyId:  ['',Validators.required,],
        categoryId: ['',Validators.required],
        industryId: ['',Validators.required],
        postedBy: [sessionStorage.getItem('jobProviderId') || '', Validators.required]
    });
  }
  
  getjobs(){
    this.jb.getLocation().subscribe((data:any)=>{
      this.jobslist=data;
      console.log(joblist.name);
    })
  }
  
  getcompId(){
    this.jb.getCompany().subscribe((companydata:any)=>{
      this.addCompany=companydata
    })
  }

  getcate(){
    this.jb.getcategory().subscribe((categorydata:any)=>{
      this.addCategory=categorydata
    })
  }

  getind(){
    this.jb.getindustry().subscribe((industrydata:any)=>{
      this.addIndustry=industrydata
    })
  }

  post() {
    const formData = this.postJobs.value;
    const jobTitle = formData.jobTitle;
    const jobSummary = formData.jobSummary;
    const locationId = formData.locationId;
    const companyId = formData.companyId;
    const categoryId = formData.categoryId;
    const industryId = formData.industryId;
    const postedBy = this.jb.getproviderIds();
    formData.postedBy = postedBy;
    const postedDate = new Date().toISOString(); 
    formData.postedDate = postedDate;
    // const postedDate = new Date().toISOString().substring(0,10); 
    // formData.postedDate = postedDate;


    this.jb.postIds(formData).subscribe((Response: any) => {
      console.log(Response.id);
    });
  }

  }
