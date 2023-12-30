import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {

  signupId!:string;
  emailVerified:boolean=false;

    constructor (private route : ActivatedRoute, private authservice : AuthService){

      this.route.queryParams.subscribe(params=> {
        this.signupId=params['signupid'];
        alert(this.signupId)

        this.authservice.verifyEmail(this.signupId).subscribe((data)=>{
          console.log(data);
          this.emailVerified=true;
        }
        ,(error)=>{
          alert("failed");
        }
        )
      });
    }


  passwordSubmit(newPass:string,cPass:string) {

    if (newPass===cPass) {
      // console.log('correct Passwords');
      alert('correct')
    } else {
      // console.log('Passwords do not match');
      alert('do not match')
    }

    
  }
}
