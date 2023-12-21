import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changepasswordForm: FormGroup;
  show = false;
  password !: string;

  constructor(private formBuilder:FormBuilder){
    this.changepasswordForm = this.formBuilder.group({
      userid: ['', Validators.required],
      oldpass: ['', Validators.required],
      newpass: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      confirmpass: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  postData(){
    console.log(this.changepasswordForm);
  }

  ngOnInit() {
    this.password = 'password';
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

}
