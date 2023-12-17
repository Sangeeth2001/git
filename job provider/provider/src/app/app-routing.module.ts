import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
{
  path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
