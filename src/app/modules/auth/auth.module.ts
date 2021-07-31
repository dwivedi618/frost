import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SharedModule } from 'src/app/sharedModules/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ThirdPartyApiLoginSignupComponent } from './third-party-api-login-signup/third-party-api-login-signup.component';


@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent, SignupComponent, ThirdPartyApiLoginSignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
