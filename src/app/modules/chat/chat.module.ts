import { SharedModule } from './../../sharedModules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatLayoutComponent } from './chat-layout/chat-layout.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [ChatLayoutComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class ChatModule { }
