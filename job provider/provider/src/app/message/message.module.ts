import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageParentComponent } from './components/message-parent/message-parent.component';
import { MessageChildComponent } from './components/message-child/message-child.component';
import { MessagesRoutingModule } from './routes/messages/messages-routing.module';



@NgModule({
  declarations: [
    MessageParentComponent,
    MessageChildComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessageModule { }
