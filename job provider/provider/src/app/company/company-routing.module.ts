import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddcmpnyComponent } from './component/addcmpny/addcmpny.component';
import { ListCompanyComponent } from './component/list-company/list-company.component';


const routes: Routes = [
  {
    path:'',component:AddcmpnyComponent
  },
  {
    path:'companylist',component:ListCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
