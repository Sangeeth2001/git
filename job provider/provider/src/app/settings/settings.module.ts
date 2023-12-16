import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeUsernameComponent } from './components/change-username/change-username.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { SettingRoutingModule } from './routes/setting/setting-routing.module';



@NgModule({
  declarations: [
    ChangeUsernameComponent,
    ChangePasswordComponent,
    UpdateProfileComponent,
    CompanyProfileComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingsModule { }
