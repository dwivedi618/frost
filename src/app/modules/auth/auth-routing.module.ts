import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
