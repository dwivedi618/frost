import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityLayoutComponent } from './activity-layout/activity-layout.component';
import { SharedModule } from 'src/app/sharedModules/shared/shared.module';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [ActivityLayoutComponent, TimelineComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    RouterModule,
    SharedModule,
  ]
})
export class ActivityModule { }
