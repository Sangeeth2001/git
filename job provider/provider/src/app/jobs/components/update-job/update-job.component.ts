// import { Component,} from '@angular/core';
// import { JobserviceService } from '../../service/jobservice.service';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-update-job',
//   templateUrl: './update-job.component.html',
//   styleUrls: ['./update-job.component.css']
// })
// export class UpdateJobComponent {
  
//   updatedata: any;
//   profileid!:any

//   constructor(private jb: JobserviceService, private router: ActivatedRoute) {
//     this.getupdateprofile()
//   }

  
//   getupdateprofile(){
    
//     this.profileid=this.router.snapshot.paramMap.get('id')
//     this.jb.getCurrentdata(this.profileid).subscribe((itemsdata)=>{
//       alert(itemsdata);
//       this.updatedata=itemsdata
//       console.log("values="+this.updatedata)
//     })
//   }


//   updateJob(){
//     var getdatas={
//       jobTitle:this.updatedata.jobTitle,
//       jobSummary:this.updatedata.jobSummary,
//       locationId:this.updatedata.locationId,
//       categoryId:this.updatedata.categoryId,
//       industryId:this.updatedata.industryId
//     }
//     this.jb.updateJob(this.profileid,getdatas).subscribe((result)=>{
//       console.log(result)
//     })
//   }
// }



import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../../service/jobservice.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { getingcategory,getingindustry,getinglocation } from '../../model/joblist';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  getlocation!: getinglocation[];
  addCategory!:getingcategory[];
  addIndustry!:getingindustry[];
  updatedata: any;
  profileid: any;
  UpdateJobs = new FormGroup({
    jobTitle: new FormControl(''),
    jobSummary: new FormControl(''),
    locationId: new FormControl(''),
    categoryId: new FormControl(''),
    industryId: new FormControl(''),
  });

  constructor(private jb: JobserviceService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.getupdateprofile();
    this.getjobs();
    this.getcate();
    this.getind();
  }

  getjobs(){
    this.jb.getLocation().subscribe((data:any)=>{
      this.getlocation=data;
      
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

  getupdateprofile() {
    this.profileid = this.router.snapshot.paramMap.get('id');
    this.jb.getCurrentdata(this.profileid).subscribe((itemsdata) => {
      this.updatedata = itemsdata;
      console.log(this.updatedata);

      const resp={
        jobTitle:itemsdata[0].jobTitle,
        jobSummary:itemsdata[0].jobSummary,
        locationId:itemsdata[0].locationId,
        categoryId:itemsdata[0].categoryId,
        industryId:itemsdata[0].industryId,
      }
      this.UpdateJobs.patchValue(resp);

    });
  }

  updateJob() {
    var updatedData = {
      jobTitle: this.UpdateJobs.get('jobTitle')?.value,
      jobSummary: this.UpdateJobs.get('jobSummary')?.value,
      locationId: this.UpdateJobs.get('locationId')?.value,
      categoryId: this.UpdateJobs.get('categoryId')?.value,
      industryId: this.UpdateJobs.get('industryId')?.value,
    };
  
    this.jb.updateJob(this.profileid, updatedData).subscribe(
      (result) => {
        console.log(result);
        alert("Data Updated Sucessfully")
      }
      
    );
  }
  
}

