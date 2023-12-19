import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';
import { CompanyProfileComponent } from '../../components/company-profile/company-profile.component';

const routes: Routes = [
  {
    path:'',component:ChangePasswordComponent
  },
  {
    path:'settings/companyprofile',component:CompanyProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
