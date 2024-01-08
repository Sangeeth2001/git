import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanymemberService } from '../../service/companymember.service';
import { addMember } from '../../model/member';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {

  registerMember!:FormGroup
  addMember!:addMember[];

  constructor(private service:CompanymemberService, private fb:FormBuilder ){}

  ngOnInit(){
    this.registerMember=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      userName:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }

  addCompany(){
    const data= this.registerMember.value
    this.service.companyMember(data).subscribe((response:any)=>{
    }
  );
   this.registerMember.reset();
  }

}
