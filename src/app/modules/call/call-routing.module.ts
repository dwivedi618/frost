import { SpeedDialComponent } from './speed-dial/speed-dial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallLayoutComponent } from './call-layout/call-layout.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: '', component: CallLayoutComponent,
    children : [
      { path : '', component : HistoryComponent },
      { path : 'history', component : HistoryComponent },
      { path : 'speed-dial', component : SpeedDialComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallRoutingModule { }
