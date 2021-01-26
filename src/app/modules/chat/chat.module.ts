import { RouterModule } from '@angular/router';
import { SharedModule } from './../../sharedModules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatLayoutComponent } from './chat-layout/chat-layout.component';

import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatFileComponent } from './chat-file/chat-file.component';
import { ChatNotesComponent } from './chat-notes/chat-notes.component';

import { UploadWIthPreviewComponent } from './upload-with-preview/upload-with-preview.component';
@NgModule({
  declarations: [
    ChatLayoutComponent,
    ChatBoxComponent,
    ChatFileComponent,
    ChatNotesComponent,
    UploadWIthPreviewComponent],
  imports: [
    CommonModule,
    RouterModule,
    ChatRoutingModule,
    SharedModule,


  ]
})
export class ChatModule { }
