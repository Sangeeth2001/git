import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent {

  // postjobs! : FormGroup;

  // constructor(private formBuilder:FormBuilder){
  //   this.postjobs = this.formBuilder.group({
  //     jobTitle: ['', Validators.required],
  //     jobSummary: ['', Validators.required],
  //     locationId: ['',Validators.required],
  //     companyId:  ['',Validators.required,],
  //     categoryId: ['',Validators.required],
  //     industryId: ['',Validators.required]
  //   });
  // }
  
  // postData(){
  //   console.log(this.postjobs);
  // }
}
