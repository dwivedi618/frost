import { RouterModule } from '@angular/router';
import { SharedModule } from './../../sharedModules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatLayoutComponent } from './chat-layout/chat-layout.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatFileComponent } from './chat-file/chat-file.component';
import { ChatNotesComponent } from './chat-notes/chat-notes.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ChatLayoutComponent, ChatBoxComponent, ChatFileComponent, ChatNotesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ChatRoutingModule,
    SharedModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ChatModule { }
