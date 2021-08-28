import { AlertWithActionComponent } from './../../components/alert-with-action/alert-with-action.component';
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
import { ContentEditableDirective } from 'src/app/customDirectives/content-editable.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    SearchComponent,
    MessageBarComponent,
    AlertWithActionComponent,
    ContentEditableDirective,

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
    // AlertWithActionComponent,
    MessageBarComponent,
    NgxEmojiPickerModule,
    FormsModule,
    ReactiveFormsModule,
    ContentEditableDirective
  ]
})
export class SharedModule { }
