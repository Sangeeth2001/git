import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveMemberComponent } from './add-new/components/remove-member/remove-member.component';

const routes: Routes = [{
  path:'',loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
},
{
  path:'',loadChildren:()=>import('./provider-home/provider-home.module').then(m=>m.ProviderHomeModule)
},
{
  path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
},
{
  path: 'addnew', loadChildren: () => import('./add-new/add-new.module').then(m => m.AddNewModule)
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
