import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {

  signupId!:string;
  emailVerified:boolean=false;

    constructor (private route : ActivatedRoute, private authservice : AuthService, private router: Router){

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

      this.authservice.setPassword(newPass, this.signupId).subscribe((data:any)=> {
        alert(data)
        
      });
      this.router.navigate(['/login'])
      // if(data.status == 200 && data.status >300){
        alert("password set sucessfull")
      }else{
        alert("failed")
      }
     
    } 


      
  
  }

