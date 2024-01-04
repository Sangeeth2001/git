import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddcmpnyComponent } from './component/addcmpny/addcmpny.component';

const routes: Routes = [
  {
    path:'',component:AddcmpnyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
