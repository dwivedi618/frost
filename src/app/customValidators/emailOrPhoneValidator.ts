import { AbstractControl, ValidatorFn } from '@angular/forms';

export class customValidators {
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    static emailorphone(control: AbstractControl): any | null {
        return customValidators.isEmailOrPhone()(control);
    }

    static isEmailOrPhone(): ValidatorFn {
        return (control: AbstractControl): any | null => {
            if(!control.value){
                return  {emailorphone: 'Enter Email Or Phone'}
            }
        
        const isPhone = /^((\\+91-?)|0)?[0-9]{10}$/.test(control.value);
        const isEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(control.value);

        const isValidEmailOrPhone = isEmail || isPhone
        // console.log(`${control.value} isEmail`,isEmail);
        // console.log(`${control.value} isPhone`,isPhone);
        // console.log(`${control.value} isValidEmailOrPhone`,isValidEmailOrPhone);


        return isValidEmailOrPhone ? null : {emailorphone: 'Not a valid Email Or Phone'};
        }
    }
}