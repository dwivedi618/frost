import { RouterModule } from '@angular/router';
import { SharedModule } from './../../sharedModules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRoutingModule } from './call-routing.module';
import { CallLayoutComponent } from './call-layout/call-layout.component';
import { HistoryComponent } from './history/history.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';


@NgModule({
  declarations: [CallLayoutComponent, HistoryComponent, SpeedDialComponent],
  imports: [
    CommonModule,
    CallRoutingModule,
    RouterModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class CallModule { }
