import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './component/applications/applications.component';
import { ApplicationRoutingModule } from './routes/application/application-routing.module';



@NgModule({
  declarations: [
    ApplicationsComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
