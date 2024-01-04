import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addcmpnyDetails } from '../../model/addcmpny';
import { CmpnyserviceService } from '../../service/cmpnyservice.service';

@Component({
  selector: 'app-addcmpny',
  templateUrl: './addcmpny.component.html',
  styleUrls: ['./addcmpny.component.css']
})
export class AddcmpnyComponent {
  cmpnyregisterForm!:FormGroup
  submitted:boolean=false;
  addCmpnyDetails!:addcmpnyDetails;

  constructor(private Cservice:CmpnyserviceService, private fb:FormBuilder){}

  ngOnInit(){
    this.cmpnyregisterForm=this.fb.group({
      legalName:['',[Validators.required]],
      summary:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address:['',[Validators.required]],
      website:['',[Validators.required]]


    })
  }

  submitt(){
    const data= this.cmpnyregisterForm.value
    this.Cservice.verifycmpny(data).subscribe((response:any)=>{
      console.log(response);
      
      const company_id= sessionStorage.setItem('c_id',response.c_id)
      // console.log(provider_id)
      

    }
  )
}
}
