import { ConnectingScreenComponent } from 'src/app/modules/wc/connecting-screen/connecting-screen.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordHidden: Boolean = true
  loginForm: FormGroup;
  isLogging: Boolean = false
  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private dia : MatDialog
    ) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }
  /**initialize a login form */
  initializeLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)]
    })
  }

  submitLoginCredential() {
    this.isLogging = true;
    if (this.loginForm.invalid) {
      this.isLogging = false;
      return
    }

    this.authService.userLogin(this.loginForm.value).subscribe(result =>{
      this.isLogging = false;
      console.log("login result",result)
    },error =>{
      this.isLogging = false;
    })

  }
  openDialog()
{
  this.dia.open(ConnectingScreenComponent)
}
}
