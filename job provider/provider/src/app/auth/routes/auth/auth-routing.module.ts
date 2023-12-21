import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from '../../components/auth-home/auth-home.component';
import { LoginComponent } from '../../components/login/login.component';
import { HomeComponent } from 'src/app/provider-home/components/home/home.component';
import { DashboardHomeComponent } from 'src/app/dashboard/components/dashboard-home/dashboard-home.component';
import { AddMemberComponent } from 'src/app/add-new/components/add-member/add-member.component';
import { ChangePasswordComponent } from 'src/app/settings/components/change-password/change-password.component';
import { JobComponentsComponent } from 'src/app/jobs/components/job-components/job-components.component';

const routes: Routes = [{
  path:'',component:AuthHomeComponent,
  children:[
    {
      path: '', component:LoginComponent
    },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'home',component:HomeComponent   
    },
    {
       path:'dashboard', component:DashboardHomeComponent
    },
    {
       path:'addnew', component:AddMemberComponent
    },
    {
      path:'settings', component:ChangePasswordComponent
   },
   {
      path:'jobs',component:JobComponentsComponent
   },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
