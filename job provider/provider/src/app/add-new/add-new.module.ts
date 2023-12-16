import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { RemoveMemberComponent } from './components/remove-member/remove-member.component';
import { ListMemberComponent } from './components/list-member/list-member.component';
import { AddnewRoutingModule } from './routes/addnew/addnew-routing.module';



@NgModule({
  declarations: [
    AddMemberComponent,
    RemoveMemberComponent,
    ListMemberComponent
  ],
  imports: [
    CommonModule,
    AddnewRoutingModule
  ]
})
export class AddNewModule { }
