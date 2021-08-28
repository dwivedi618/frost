
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { AlertWithActionComponent } from 'src/app/components/alert-with-action/alert-with-action.component';



@Injectable({
  providedIn: 'any'
})
export class AlertService {

  action = new Subject<string>()
  setAction(action) {
    this.action.next(action)
  }
  resetAction() {
    this.action.next()
  }

  constructor(
    public snackBar: MatSnackBar,
  

  ) { }



  alert(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }
  alertLb(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }
  alertRT(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  alertError(message: string, action: string, className: string) {

    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: [className],
    });
  }



  alertWithAction(message, action): Observable<any> {
    const snackbarRef = this.snackBar.openFromComponent(AlertWithActionComponent, {
      // duration: 10000,
      data: { message, action },
      // verticalPosition: 'top',
      horizontalPosition: 'center',
      

     
     
      // panelClass: 'bg-mydark-1',
    });
    snackbarRef.onAction().subscribe(() => {
      this.setAction(action);
    });
    return this.action.asObservable()
  }

}
