import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

const routes: Routes = [{
  path: 'home', component:HomeComponent,
  children: [

    {
      path: 'dashboard', loadChildren: () => import('../../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'addnew', loadChildren: () => import('../../../add-new/add-new.module').then(m => m.AddNewModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderHomeRoutingModule { }
