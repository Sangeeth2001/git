import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';
import { CompanyProfileComponent } from '../../components/company-profile/company-profile.component';
import { UpdateProfileComponent } from '../../components/update-profile/update-profile.component';
import { ChangeUsernameComponent } from '../../components/change-username/change-username.component';

const routes: Routes = [
  {
    path:'',component:ChangePasswordComponent
  },
  {
    path:'settings/companyprofile',component:CompanyProfileComponent
  },
  {
    path:'settings/updateprofile',component:UpdateProfileComponent
  },
  {
    path:'settings/changeusername',component:ChangeUsernameComponent
  },
  {
    path:'settings/changepassword',component:ChangePasswordComponent
  },
  {
    path:'settings/changeusername/changeusername/changepassword',component:ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
