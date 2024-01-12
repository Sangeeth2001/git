import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addIndustry, addLocation, addcmpnyDetails } from '../../model/addcmpny';
import { CmpnyserviceService } from '../../service/cmpnyservice.service';

@Component({
  selector: 'app-addcmpny',
  templateUrl: './addcmpny.component.html',
  styleUrls: ['./addcmpny.component.css']
})
export class AddcmpnyComponent {
  cmpnyregisterForm!:FormGroup
  submitted:boolean=false;
  addCmpnyDetails!:addcmpnyDetails[];
  addLocation!:addLocation[];
  addIndustry!:addIndustry[];

  constructor(private Cservice:CmpnyserviceService, private fb:FormBuilder){}

  ngOnInit(){
    this.getLocation();
    this.getIndustry();
    this.cmpnyregisterForm=this.fb.group({
      legalName:['',[Validators.required]],
      summary:['',[Validators.required]],
      industryId:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address:['',[Validators.required]],
      website:['',[Validators.required]],
      location:['',[Validators.required]]
    })
  }

  submitt(){
    const data= this.cmpnyregisterForm.value
    this.Cservice.verifycmpny(data).subscribe((response:any)=>{
      this.addCmpnyDetails=response;
      console.log(this.addCmpnyDetails);
      console.log(response.id);
      const addCmpnyDetails=sessionStorage.setItem('c_id',response.id)
      if(response.id){
        alert("Company registered successfully")
      }
    }
    
  );
   this.cmpnyregisterForm.reset();
}
getLocation(){
  this.Cservice.getLocation().subscribe((data:any)=>{
    this.addLocation=data;
  });
}

getIndustry(){
  this.Cservice.getIndustry().subscribe((resp:any)=>{
    this.addIndustry=resp;
  })
}
}