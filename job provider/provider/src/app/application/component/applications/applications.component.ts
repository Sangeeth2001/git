import { Component } from '@angular/core';
import { ApplicationService } from '../../service/application.service';
import { applicants } from '../../model/applicant';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

  getapplicats!: applicants[]
  constructor(private service:ApplicationService){}

  ngOnInit(){
    this.getId();
  }
  getId(){
    this.service.getApplication().subscribe((applicantsdata:any)=>{
      this.getapplicats=applicantsdata
    });
  }
}
