import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcmpnyComponent } from './component/addcmpny/addcmpny.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyRoutingModule } from './company-routing.module';
import { ListCompanyComponent } from './component/list-company/list-company.component';
import { UpdateCompanyComponent } from './component/update-company/update-company.component';





@NgModule({
  declarations: [
    AddcmpnyComponent,
    ListCompanyComponent,
    UpdateCompanyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CompanyRoutingModule,
  ]
})
export class CompanyModule { }
