import { HeaderComponent } from './../../components/header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from 'src/app/components/search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,

    
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    AvatarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
