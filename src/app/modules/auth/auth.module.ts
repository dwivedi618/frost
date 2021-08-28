import { AuthService } from './../../services/auth/auth.service';
import { AlertWithActionComponent } from './../../components/alert-with-action/alert-with-action.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SharedModule } from 'src/app/sharedModules/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ThirdPartyApiLoginSignupComponent } from './third-party-api-login-signup/third-party-api-login-signup.component';

import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { AlertService } from 'src/app/services/alert/alert.service';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    SignupComponent,
    ThirdPartyApiLoginSignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  providers : [
    
  ]
  
})
export class AuthModule { }
