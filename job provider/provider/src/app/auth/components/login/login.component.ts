import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router , private authService:AuthService){}
  navigateTo()
  {
    this.router.navigate(['/provider-home/dashboard']);
  }

  login(data:any){
    this.authService.verifyLogin(data).subscribe((response: any)=>{
      console.log(response);
  }
 )}
}
