import { ChatBoxComponent } from './chat-box/chat-box.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatLayoutComponent } from './chat-layout/chat-layout.component';
import { ChatFileComponent } from './chat-file/chat-file.component';
import { ChatNotesComponent } from './chat-notes/chat-notes.component';

const routes: Routes = [
  { path : '' , component : ChatLayoutComponent ,
  children : [
    { path : 'chat',component : ChatBoxComponent},
    { path : 'files',component : ChatFileComponent},
    { path : 'notes',component : ChatNotesComponent},

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
