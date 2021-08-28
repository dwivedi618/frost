import { SharedModule } from './sharedModules/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimaryLayoutComponent } from './layouts/primary-layout/primary-layout.component';
import { RouterModule } from '@angular/router';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WcdialogService } from './services/wc/wcdialog.service';
import { AlertService } from './services/alert/alert.service';
import { AuthService } from './services/auth/auth.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

const config: SocketIoConfig = { url: environment.wsUrl, options: { transports: ['websocket'] } };




@NgModule({
  declarations: [
    AppComponent,
    PrimaryLayoutComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  


  bootstrap: [AppComponent]
})
export class AppModule { }
