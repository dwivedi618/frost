import { ConnectingScreenComponent } from 'src/app/modules/wc/connecting-screen/connecting-screen.component';
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
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { WcdialogService } from 'src/app/services/wc/wcdialog.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    ChatLayoutComponent,
    ChatBoxComponent,
    ChatFileComponent,
    ChatNotesComponent,
    UploadWIthPreviewComponent,
    ConnectingScreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ChatRoutingModule,
    MatDialogModule,
    DragDropModule


  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MatDialog,
      useValue: {}
    },
   
  ],

})
export class ChatModule { }
