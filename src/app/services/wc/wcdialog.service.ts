import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ConnectingScreenComponent } from 'src/app/modules/wc/connecting-screen/connecting-screen.component';

@Injectable({
  providedIn: 'root'
})
export class WcdialogService {

  constructor(public dialog : MatDialog) { }

  openWcDialog(){
    const wcdialog = this.dialog.open(ConnectingScreenComponent,{
      width : '90vw',
      height : '90vh',
      disableClose : true,
      hasBackdrop : false
    })
  }
}
