import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from '../../components/add-member/add-member.component';
import { RemoveMemberComponent } from '../../components/remove-member/remove-member.component';

const routes: Routes = [
  {
    path:'',component:AddMemberComponent
  },
  {
    path:'remove',component:RemoveMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddnewRoutingModule { }
