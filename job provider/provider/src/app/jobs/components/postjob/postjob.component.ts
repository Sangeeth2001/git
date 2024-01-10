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
  jobData: joblist = {
    id:'',
    jobTitle: '',
    jobSummary: '',
    locationId: '',
    companyId: undefined,
    categoryId: '',
    industryId: '',
    postedBy: undefined,
    postedDate: ''
  };
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
    const postedDate = new Date().toISOString(); 
    const formData = this.postJobs.value;
    
    this.jobData.jobTitle=formData.jobTitle;
    this.jobData.jobSummary=formData.jobSummary;
    this.jobData.locationId=formData.locationId;
    this.jobData.companyId=sessionStorage.getItem('c_id');
    this.jobData.categoryId=formData.categoryId;
    this.jobData.industryId=formData.industryId;
    this.jobData.postedBy=sessionStorage.getItem('accessid');
    this.jobData.postedDate=postedDate;
    
    // formData.postedDate = postedDate;
    // const postedDate = new Date().toISOString().substring(0,10); 
    // formData.postedDate = postedDate;


    this.jb.postIds(this.jobData).subscribe((Response: any) => {
      console.log(Response.id);
    });
  }

  }

  
