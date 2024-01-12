import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor (private router: Router ,private service:AuthService) {
    this.accessId=service.getid();
  }

  getId(): any {
    return sessionStorage.getItem('accessid') // Return an empty string if the token is null or undefined
  }

   accessId=this.getId();

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
  navigatetocompany(){
    this.router.navigate(['home/company']);
  }
  
}
