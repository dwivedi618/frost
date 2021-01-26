import { MessageBarComponent } from './../../components/message-bar/message-bar.component';
import { HeaderComponent } from './../../components/header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from 'src/app/components/search/search.component';
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    SearchComponent,
    MessageBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NgxEmojiPickerModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HeaderComponent,
    AvatarComponent,
    SearchComponent,
    MessageBarComponent,
    NgxEmojiPickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
