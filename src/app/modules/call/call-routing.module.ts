import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallLayoutComponent } from './call-layout/call-layout.component';

const routes: Routes = [
  {
    path: '', component: CallLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallRoutingModule { }
