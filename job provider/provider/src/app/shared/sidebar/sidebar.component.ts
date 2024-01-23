import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  submit:boolean=false;
  constructor (private router: Router , private authservice:AuthService) {}
  ngOnInit(){
    
  }

  navigatetoDashboard(){
    this.router.navigate(['home/dashboard']);
  }
  navigatetoJobs(){
    this.router.navigate(['home/jobs']);
  }
  navigatetoInterview(){
    this.router.navigate(['home/interview']);
  }
  navigatetoMessages(){
    this.router.navigate(['home/message']);
  }

  navigatetoAddnew(){
    this.router.navigate(['home/addnew']);
  }
  navigatetosettings(){
    this.router.navigate(['home/settings']);
  }
  navigatetoapplication(){
    this.router.navigate(['home/applications']);
  }
  navigatetocompany() {
      this.router.navigate(['home/company']);
  }

userMenu(){
  // const submit= this.submit=true;
  const userRole = this.authservice.getRole();
  // submit&&userRole;

    if (userRole === 'COMPANY_USER') {
      return false;
    } else {
      return true; 
    }
  } 
}