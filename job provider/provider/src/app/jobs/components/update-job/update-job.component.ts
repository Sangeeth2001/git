// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup  } from '@angular/forms';
// import { JobserviceService } from '../../service/jobservice.service';
// import { joblist } from '../../model/joblist';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-update-job',
//   templateUrl: './update-job.component.html',
//   styleUrls: ['./update-job.component.css']
// })
// export class UpdateJobComponent implements OnInit {
//   alert:boolean=false;
//   UpdateJobs= new FormGroup({
//     jobTitle: new FormControl(''),
//     jobSummary: new FormControl(''),
//     locationId: new FormControl(''),
//     categoryId: new FormControl(''),
//     industryId: new FormControl('')
//   })



//   constructor( private jb:JobserviceService,private router:ActivatedRoute){}

//   ngOnInit(): void {
    
//     // this.UpdateJobs = this.formBuilder.group({
//     //   jobTitle: ['', Validators.required],
//     //   jobSummary: ['', Validators.required],
//     //   locationId: ['',Validators.required],
//     //   categoryId: ['',Validators.required],
//     //   industryId: ['',Validators.required],
//     // });
//     // console.log(this.router.snapshot.params['id'])
//     // this.jb.getCurrentdata(this.router.snapshot.params['id']).subscribe((result:any)=>{
//     //   this.UpdateJobs= new FormGroup({
//     //     jobTitle: new FormControl(result['jobTitle']),
//     //     jobSummary: new FormControl(result['jobSummary']),
//     //     locationId: new FormControl(result['locationId']),
//     //     categoryId: new FormControl(result['categoryId']),
//     //     industryId: new FormControl(result['industryId'])
//     //   })
      
//     // })

    
//           const jobId = this.router.snapshot.params['id'];
//           console.log(jobId);
//           this.jb.getCurrentdata(jobId).subscribe((result: any) => {
//             this.UpdateJobs.patchValue({
//               jobTitle: result['jobTitle'],
//               jobSummary: result['jobSummary'],
//               locationId: result['locationId'],
//               categoryId: result['categoryId'],
//               industryId: result['industryId']
//             });
//           })
//         }

//   }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobserviceService } from '../../service/jobservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {
  UpdateJobs: FormGroup;

  constructor(private formBuilder: FormBuilder, private jb: JobserviceService, private router: ActivatedRoute) {
    this.UpdateJobs = this.formBuilder.group({
      jobTitle: [''],
      jobSummary: [''],
      locationId: [''],
      categoryId: [''],
      industryId: ['']
    });
  }

  ngOnInit(): void {
    
    const jobId = this.router.snapshot.params['id'];
    console.log(jobId);
    this.jb.getCurrentdata(jobId).subscribe((result: any) => {
      this.UpdateJobs.patchValue({
        jobTitle: result['jobTitle'],
        jobSummary: result['jobSummary'],
        locationId: result['locationId'],
        categoryId: result['categoryId'],
        industryId: result['industryId']
      });
    })

  }

  
  
}

