import { Component } from '@angular/core';
import { CompanymemberService } from '../../service/companymember.service';
import { addMember } from '../../model/member';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent {

  addMember!:addMember[];

  constructor(private service:CompanymemberService){}

  ngOnInit(){
    this.listMember();
  }

  listMember(){
    this.service.listCompanyMember().subscribe((data:any)=>{
      this.addMember=data;
    })
  }
  removeCompanyMember(id:any){
    this.service.removeMember(id).subscribe((data:any)=>{
      console.log(data);
    });
    this.listMember();
  }
}
