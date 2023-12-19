import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from '../../components/add-member/add-member.component';
import { RemoveMemberComponent } from '../../components/remove-member/remove-member.component';
import { ListMemberComponent } from '../../components/list-member/list-member.component';

const routes: Routes = [
  {
    path:'',component:AddMemberComponent
  },
  {
    path:'add',component:AddMemberComponent
  },
  {
    path:'addnew/remove',component:RemoveMemberComponent
  },
  {
    path:'addnew/list',component:ListMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddnewRoutingModule { }
