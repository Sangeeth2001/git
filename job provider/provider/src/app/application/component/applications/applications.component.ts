import { Component } from '@angular/core';
import { ApplicationService } from '../../service/application.service';
import { applicants } from '../../model/applicant';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

  getapplicats!: applicants[]
  constructor(private service:ApplicationService,private router:Router, private route: ActivatedRoute){}

  ngOnInit(){
   this.listapplicants();
  }
  getId(data:applicants):void{
   const jobSeekerId=data.id;
   this.router.navigate(['/applicants',jobSeekerId])
  }

  listapplicants(){
    this.service.getApplication().subscribe((Response:any)=>{
      this.getapplicats=Response;
    })
  }
}
