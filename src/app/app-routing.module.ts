import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : '' ,loadChildren : ()=> import('./modules/auth/auth.module').then( m => m.AuthModule)},
  { path : 'activity' ,loadChildren : ()=> import('./modules/activity/activity.module').then( m => m.ActivityModule)},
  { path : 'calls' ,loadChildren : ()=> import('./modules/call/call.module').then( m => m.CallModule)},
  { path : 'chats' ,loadChildren : ()=> import('./modules/chat/chat.module').then( m => m.ChatModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
