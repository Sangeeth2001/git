import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from '../../components/auth-home/auth-home.component';
import { LoginComponent } from '../../components/login/login.component';
import { HomeComponent } from 'src/app/provider-home/components/home/home.component';
import { SignupComponent } from '../../components/signup/signup.component';


const routes: Routes = [{
  path:'',component:AuthHomeComponent,
  children:[
    {
      path: '', component:SignupComponent
    },
    // {
    //   path:'signup',component:SignupComponent
    // },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'home',component:HomeComponent   
    },
  ]
    }
  ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
