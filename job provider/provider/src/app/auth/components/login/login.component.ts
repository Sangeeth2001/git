import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { setlogin } from '../../model/signup';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router:Router , private authService:AuthService){}
 

  login(data:any){
    this.authService.verifyLogin(data).subscribe((response: any)=>{
      console.log(response);
      const token= localStorage.setItem('accessToken',response.token)
      const id=sessionStorage.setItem('accessid',response.id)
      if (response.token){
        alert("login successfully")
        this.router.navigate(['/home/dashboard']);
      }

  },
  (error)=>{
    alert("error")
  }
 )
 
}
}
