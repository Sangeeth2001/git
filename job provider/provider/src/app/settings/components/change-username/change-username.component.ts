import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent {

  changeusernameForm! : FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.changeusernameForm = this.formBuilder.group({
      fname: ['', Validators.required],
      uname: ['', Validators.required],
      emailadd: ['', [Validators.required, Validators.email, Validators.minLength(5),Validators.minLength(10)]],
      pnum: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  postData(){
    console.log(this.changeusernameForm);
  }

}
