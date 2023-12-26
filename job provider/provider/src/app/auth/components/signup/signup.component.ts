import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signupDetails } from '../../model/signup';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm!:FormGroup
  submitted:boolean=false;
  signUpDetail!: signupDetails;
  
  constructor(private fb:FormBuilder,service:AuthService){}

  ngOnInit(){
    this.registerForm=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      userName:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['',[Validators.required]],

    })
  }
  submit(){
    this.submitted=true;
    this.signUpDetail=this.registerForm.value;
    console.log(this.signUpDetail);
    this.registerForm.reset();
  }
}
