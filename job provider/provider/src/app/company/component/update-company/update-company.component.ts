import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { addIndustry, addLocation } from '../../model/addcmpny';
import { CmpnyserviceService } from '../../service/cmpnyservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {
  
  updateLocation!:addLocation[];
  updateIndustry!:addIndustry[];
  companyId:any;
  updateData:any;
  submitted:boolean=false;
  companyUpdateForm= new FormGroup({
    legalName:new FormControl(''),
    summary:new FormControl(''),
    industryId:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),
    website:new FormControl(''),
    location:new FormControl(''),

  });

  constructor(private companyservice:CmpnyserviceService, private fb:FormBuilder, private router:ActivatedRoute ){}

  ngOnInit(){
    this.locationUpdate();
    this.industryUpdate();


    this.companyUpdateForm=this.fb.group({
      legalName:['',[Validators.required]],
      summary: ['', [Validators.required, Validators.maxLength(255)]],
      industryId:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      website:['',[Validators.required]],
      location:['',[Validators.required]]
    })
  }

  // getUpdate(){
  //   this.companyId = this.router.snapshot.paramMap.get('id');
  //   this.companyservice.getCompanyList().subscribe((itemsdata)=>{
  //     this.updateData=itemsdata;
  //     console.log(this.updateData);

  //   })
  // }

  locationUpdate(){
    this.companyservice.getLocation().subscribe((data:any)=>{
      this.updateLocation=data;
    });
  }
  industryUpdate(){
    this.companyservice.getIndustry().subscribe((data:any)=>{
      this.updateIndustry=data;
    });
  }
  update(){
    // const updatedata={
    //   legalName:this.companyUpdateForm.get('legalName')?.value,
    //   summary:this.companyUpdateForm.get('summary')?.value,
    //   industryId:this.companyUpdateForm.get('industryId')?.value,
    //   email:this.companyUpdateForm.get('email')?.value,
    //   phone:this.companyUpdateForm.get('phone')?.value,
    //   address:this.companyUpdateForm.get('address')?.value,
    //   website:this.companyUpdateForm.get('website')?.value,
    //   location:this.companyUpdateForm.get('location')?.value,
    // };
    // this.companyservice.updatingForm(updatedata).subscribe((result)=>{
    //   console.log(result);
    //   alert("updated successfully");
    // })

  }

  

}
