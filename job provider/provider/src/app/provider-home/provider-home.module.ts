import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ProviderHomeRoutingModule } from './routes/provider-home/provider-home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    // SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProviderHomeRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class ProviderHomeModule { }
