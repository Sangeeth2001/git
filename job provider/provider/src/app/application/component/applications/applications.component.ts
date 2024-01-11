import { Component } from '@angular/core';
import { ApplicationService } from '../../service/application.service';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

  constructor(private service:ApplicationService){}
  getId(){
    this.service.getApplication().subscribe((applicantsdata:any)=>{
      this.getId=applicantsdata
    })
  }
}
