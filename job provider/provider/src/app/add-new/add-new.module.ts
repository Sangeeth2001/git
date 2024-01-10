import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { ListMemberComponent } from './components/list-member/list-member.component';
import { AddnewRoutingModule } from './routes/addnew/addnew-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddMemberComponent,
    ListMemberComponent
  ],
  imports: [
    CommonModule,
    AddnewRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AddNewModule { }
