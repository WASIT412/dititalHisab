import {Directive} from '@angular/core';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appComplexValidators]'
})
export class ComplexValidatorDirective {

  constructor() {
  }
}

/*Code can be be optimized using a method with common code blocks*/
export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.value == '') return null;
    let value = (control.value || '').trim();
    let regex = new RegExp('(http(s)?:\\/\\/.)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)');
    let isValid = regex.test(value);
    return isValid ? null : {'url': 'INVALID'};
  };
}

export function ipAddressValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.value == '') return null;
    let value = (control.value || '').trim();
    let regex = new RegExp('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)');
    let isValid = regex.test(value);
    return isValid ? null : {'ipaddress': 'INVALID'};
  };
}

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.value == '') return null;
    let value = (control.value || '').trim();
    let regex = new RegExp('^((\\\\+[1-9]{1,4}[ \\\\-]*)|(\\\\([0-9]{2,3}\\\\)[ \\\\-]*)|([0-9]{2,4})[ \\\\-]*)*?[0-9]{3,4}?[ \\\\-]*[0-9]{3,4}?$');
    let isValid = regex.test(value);
    return isValid ? null : {'phonenumber': 'INVALID'};
  };
}

/*Zipcode validator will work with US zipcode only*/
export function zipCodeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.value == '') return null;
    let value = (control.value || '').trim();
    let regex = new RegExp('(^\\d{5}$)|(^\\d{5}-\\d{4}$)');
    let isValid = regex.test(value);
    return isValid ? null : {'zipcode': 'INVALID'};
  };
}

export function regexValidator(_regex: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.value == '') return null;
    let value = (control.value || '').trim();
    let regex = new RegExp(_regex);
    let isValid = regex.test(value);
    return isValid ? null : {'pattern': 'INVALID'};
  };
}

export function notRegexValidator(notRegex: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.value == '') return null;
    let value = (control.value || '').trim();
    let regex = new RegExp(notRegex);
    let isValid = regex.test(value);
    return !isValid ? null : {'notpattern': 'INVALID'};
  };
}
