import { Component } from '@angular/core';
import { CmpnyserviceService } from '../../service/cmpnyservice.service';
import { addcmpnyDetails } from '../../model/addcmpny';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent {

  company!:addcmpnyDetails[];

  constructor(private service:CmpnyserviceService){}

  ngOnInit(){
    this.companyList();
  }

  companyList(){
    this.service.getCompanyList().subscribe((data:any)=>{
      if(Array.isArray(data)){

            this.company=data;
           } else if(typeof data === 'object' && data !== null){
             this.company=[data];
           }
           console.log(this.company);
    })
  }
}
