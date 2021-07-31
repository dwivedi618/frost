import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordHidden: Boolean = true
  loginForm: FormGroup;
  isLogging: Boolean = false
  constructor(private formBuilder: FormBuilder,private authService : AuthService) { }

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

}
