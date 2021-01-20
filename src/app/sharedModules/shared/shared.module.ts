import { HeaderComponent } from './../../components/header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent
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
    AvatarComponent
  ]
})
export class SharedModule { }
