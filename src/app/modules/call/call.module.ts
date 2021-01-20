import { RouterModule } from '@angular/router';
import { SharedModule } from './../../sharedModules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRoutingModule } from './call-routing.module';
import { CallLayoutComponent } from './call-layout/call-layout.component';


@NgModule({
  declarations: [CallLayoutComponent],
  imports: [
    CommonModule,
    CallRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CallModule { }
