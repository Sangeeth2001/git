import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

const routes: Routes = [
  {
  path: 'home', component:HomeComponent,
  
  children: [
    {
      path: 'dashboard', loadChildren: () => import('../../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'addnew', loadChildren: () => import('../../../add-new/add-new.module').then(m => m.AddNewModule)
    },
    {
      path: 'settings', loadChildren: () => import('../../../settings/settings.module').then(m => m.SettingsModule)
    },
    
    {
      path:'jobs', loadChildren: () => import('../../../jobs/jobs.module').then(m => m.JobsModule)
    },
    // {
    //   path:'remove', loadChildren: () => import('../../../add-new/add-new.module').then(m => m.AddNewModule)
    // },
    {
      path:'applications', loadChildren: () => import('../../../application/application.module').then(m => m.ApplicationModule)
    },
    {
      path:'interview', loadChildren: () => import('../../../interviews/interviews.module').then(m => m.InterviewsModule)
    },
    {
      path:'message', loadChildren: () => import('../../../message/message.module').then(m => m.MessageModule)
    },
    {
      path:'company', loadChildren: () => import('../../../company/company.module').then(m => m.CompanyModule)
    }
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderHomeRoutingModule { }
