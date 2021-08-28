
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidators } from 'src/app/customValidators/emailOrPhoneValidator';
import { custumPatternValidators } from 'src/app/customValidators/patternValidator';
import { ExpandColorScreenAnimation } from 'src/app/services/animation/dropdown-animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ExpandColorScreenAnimation]
})
export class LoginComponent implements OnInit {
  isPasswordHidden: Boolean = true
  loginForm: FormGroup;
  isLogging: Boolean = false
  expandAnimation = 'collapsed';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }
  /**initialize a login form */
  initializeLoginForm() {
    this.loginForm = this.formBuilder.group({
      emailOrPhone: ['', customValidators.isEmailOrPhone()],
      email: [],
      phoneNumber: [],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  submitLoginCredential() {
    this.isLogging = true;
    if (this.loginForm.invalid) {
      this.isLogging = false;
      return
    }

    //emailOrPhone input  isEmail() Or isPhone()
    this.patchOnlyEmailOrPhone(this.loginForm.value.emailOrPhone);

    // setTimeout(() => {
    //   this.isLogging = false;
    //   this.toggleAnimation()
    //   const element = document.querySelector('form');
    //   element.classList.add('animate__animated', 'animate__zoomOutUp');

    //   element.addEventListener('animationend', () => {
    //     // do something
    //   });

    // }, 3000)

    this.authService.userLogin(this.loginForm.value).subscribe(result => {
      this.isLogging = false;
      console.log("login result", result)
    }, error => {
      this.isLogging = false;
    })
  }

  /**detecting input field emailOrPhone is Email Or phone */
  patchOnlyEmailOrPhone(emailOrPhone) {
    let isEmail: boolean = custumPatternValidators.isEmail(emailOrPhone);
    let isPhone: boolean = custumPatternValidators.isPhone(emailOrPhone);
    if (isEmail) {
      this.loginForm.patchValue({ email: emailOrPhone })
      this.loginForm.patchValue({ phoneNumber: null })
      return
    }
    if (isPhone) {
      this.loginForm.patchValue({ phoneNumber: emailOrPhone })
      this.loginForm.patchValue({ email: null })
      return
    }
  }

  toggleAnimation() {
    this.expandAnimation = this.expandAnimation === 'expanded' ? 'collapsed' : 'expanded';
    console.log(this.expandAnimation);
  }

}
