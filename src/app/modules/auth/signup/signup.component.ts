import { AlertService } from './../../../services/alert/alert.service';
import { CONSTANTS } from './../../../constants/pattern';


import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidators } from 'src/app/customValidators/emailOrPhoneValidator';
import { custumPatternValidators } from 'src/app/customValidators/patternValidator';
import { ExpandColorScreenAnimation } from 'src/app/services/animation/dropdown-animation';
const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
const PHONE_PATTERN = '^((\\+91-?)|0)?[0-9]{10}$'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isPasswordHidden: Boolean = true
  signupForm: FormGroup;
  isSigning: Boolean = false
  expandAnimation = 'collapsed';
  phonePattern = 'sdfsd'
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public alertService: AlertService

  ) { }

  ngOnInit(): void {
    this.initializesignupForm();
  }
  /**initialize a login form */
  initializesignupForm() {
    this.signupForm = this.formBuilder.group({
      
      email: ['',[Validators.required,Validators.email]],
      phoneNumber: ['',[Validators.required,Validators.pattern(PHONE_PATTERN)]],
      firstName : [],
      lastName : [],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  submitLoginCredential() {
    this.isSigning = true;
    // if (this.signupForm.invalid) {
    //   this.isSigning = false;
    //   return
    // }
    this.verifyOtp()
    this.authService.userSignup(this.signupForm.value).subscribe(result => {
      this.isSigning = false;
      console.log("login result", result)
    }, error => {
      this.isSigning = false;
    })
  }

  verifyOtp(){
   
    this.alertService.alertWithAction('Please verify your account by OTP sent to registered Email and Phone','verify').subscribe(res =>{

    })
  }


}
