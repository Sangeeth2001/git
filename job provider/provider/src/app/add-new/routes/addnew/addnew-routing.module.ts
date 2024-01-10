import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from '../../components/add-member/add-member.component';
import { ListMemberComponent } from '../../components/list-member/list-member.component';

const routes: Routes = [
  {
    path:'',component:AddMemberComponent
  },
  {
    path:'add',component:AddMemberComponent
  },
  {
    path:'addnew/list',component:ListMemberComponent
  },
  {
    path:'addnew/remove/remove/addnew',component:AddMemberComponent
  },
  {
    path:'addnew/remove/remove/list',component:ListMemberComponent
  },
  {
    path:'addnew/list/list/addnew',component:AddMemberComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddnewRoutingModule { }
