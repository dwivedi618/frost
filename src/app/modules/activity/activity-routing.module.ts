import { TimelineComponent } from './timeline/timeline.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityLayoutComponent } from './activity-layout/activity-layout.component';

const routes: Routes = [
  {
    path: '', component: ActivityLayoutComponent,
    children: [
      { path:'timeline' ,component : TimelineComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
