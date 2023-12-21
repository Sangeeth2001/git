import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor (private router: Router) {}


  navigatetoDashboard(){
    this.router.navigate(['home/dashboard']);
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
}
