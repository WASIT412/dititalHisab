import {Injectable} from '@angular/core';
import {ValidationField} from './model/validation-field';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {
  ipAddressValidator, notRegexValidator, phoneNumberValidator, regexValidator, urlValidator,
  zipCodeValidator
} from './complex-validator.directive';
import {DependentRuleItem} from './model/dependent-rule-item';
import {ValidationRule} from './model/validation-rule';

@Injectable()
export class ValidationProcessorService {

  private errors: Map<string, Map<string, string>>;
  form: FormGroup;
  private controls: { [key: string]: AbstractControl };

  constructor() {
  }

  init(include) {
    this.controls = {};
    if (include) {
      for (let item in include) {
        // noinspection JSUnfilteredForInLoop
        let fieldData = include[item];
        if (fieldData.hasOwnProperty('default')) {
          this.controls[item] = new FormControl(fieldData['default']);
        } else {
          this.controls[item] = new FormControl('');
        }
      }
    }
    this.errors = new Map<string, Map<string, string>>();
    this.form = new FormGroup(this.controls);
  }

  getFormGroup() {
    return this.form;
  }

  /*
   *Method applies the validation rules defined in the ValidationField response coming fom the server
   *Each property defined in ValidationRule class correspond to a Validator Function except the dependsOn
   * Property
   */
  process(formFields: Map<string, ValidationField>): Map<string, Map<string, string>> {

    for (let name in formFields) {
      let formControl = this.form.get(name);
      if (formControl) {
        let rule = formFields[name];
        console.log('%c' + name, 'background: #e1e1e1; color: #ff0000; padding: 2px', rule);

        if (!this.errors[name]) this.errors[name] = new Map<string, string>();

        let validators = this.collectValidators(name, rule);

        if (rule.dependsOn) {
          let ruleItems = rule.dependsOn;
          ruleItems.forEach(ruleItem => {
            this.observeDependents(name, formControl, ruleItem);
          });
        }

        formControl.setValidators(validators);
        formControl.reset(formControl.value);
      }
    }
    return this.errors;
  }

  private collectValidators(name: string, rule: ValidationRule): ValidatorFn[] {
    let validators = [];
    if (rule.required) {
      let ruleItem = rule.required;
      if (ruleItem.value == true) {
        validators.push(Validators.required);
        this.errors[name].set('required', ruleItem.message);
      }
    }

    if (rule.minLength) {
      let ruleItem = rule.minLength;
      validators.push(Validators.minLength(ruleItem.value));
      this.errors[name].set('minlength', ruleItem.message);
    }

    if (rule.maxLength) {
      let ruleItem = rule.maxLength;
      validators.push(Validators.maxLength(ruleItem.value));
      this.errors[name].set('maxlength', ruleItem.message);
    }

    if (rule.minValue) {
      let ruleItem = rule.minValue;
      validators.push(Validators.min(ruleItem.value));
      this.errors[name].set('min', ruleItem.message);
    }

    if (rule.maxValue) {
      let ruleItem = rule.maxValue;
      validators.push(Validators.max(ruleItem.value));
      this.errors[name].set('max', ruleItem.message);
    }

    if (rule.isUrl) {
      let ruleItem = rule.isUrl;
      validators.push(urlValidator());
      this.errors[name].set('isUrl', ruleItem.message);
    }

    if (rule.isEmail) {
      let ruleItem = rule.isEmail;
      validators.push(Validators.email);
      this.errors[name].set('email', ruleItem.message);
    }

    if (rule.isIPAddress) {
      let ruleItem = rule.isIPAddress;
      validators.push(ipAddressValidator());
      this.errors[name].set('isipaddress', ruleItem.message);
    }

    if (rule.isPhoneNumber) {
      let ruleItem = rule.isPhoneNumber;
      validators.push(phoneNumberValidator());
      this.errors[name].set('isphonenumber', ruleItem.message);
    }

    if (rule.isZipCode) {
      let ruleItem = rule.isZipCode;
      validators.push(zipCodeValidator());
      this.errors[name].set('iszipcode', ruleItem.message);
    }

    if (rule.regex) {
      let ruleItem = rule.regex;
      validators.push(regexValidator(ruleItem.value));
      this.errors[name].set('pattern', ruleItem.message);
    }

    if (rule.notRegex) {
      let ruleItem = rule.notRegex;
      validators.push(notRegexValidator(ruleItem.value));
      this.errors[name].set('notpattern', ruleItem.message);
    }

    return validators;
  }

  /*Method is observing the dependent fields and field on which is depends. If the master field match the
  * value specified field dependent field, form control will enable or in the other case, disable
  */
  private observeDependents(name: string, formControl: AbstractControl, ruleItem: DependentRuleItem) {
    let master = this.form.get(ruleItem.property);
    formControl.disable();
    master.valueChanges.subscribe(value => {

      if (this.operators[ruleItem.operator](master.value, ruleItem.value) && master.valid) {
        formControl.enable();
        //Apply extra validators
        let validators = this.collectValidators(name, ruleItem.rules);
        formControl.setValidators(validators);
        formControl.setValue(formControl.value);
      }
      else {
        formControl.setValue(formControl.value);
        formControl.disable();
        //remove validators
        formControl.setValidators(null);
        formControl.setValue(formControl.value);
      }

    });
  }

  operators = {
    'gt': function (a, b) {
      return a > b;
    },
    'lt': function (a, b) {
      return a < b;
    },
    'eq': function (a, b) {
      return a == b;
    },
  };

}
