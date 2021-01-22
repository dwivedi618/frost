import { SharedModule } from './../../sharedModules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatLayoutComponent } from './chat-layout/chat-layout.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatFileComponent } from './chat-file/chat-file.component';
import { ChatNotesComponent } from './chat-notes/chat-notes.component';

@NgModule({
  declarations: [ChatLayoutComponent, ChatBoxComponent, ChatFileComponent, ChatNotesComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class ChatModule { }
