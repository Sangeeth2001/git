import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcmpnyComponent } from './component/addcmpny/addcmpny.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [
    AddcmpnyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
