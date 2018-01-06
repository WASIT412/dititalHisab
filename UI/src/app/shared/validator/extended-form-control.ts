import { ValidatorFn, AsyncValidatorFn, FormControl } from "@angular/forms";

export class ExtendedFormControl extends FormControl {
  errorMessages: any;

  constructor(formState?: any, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null, errorMessages?: any) {
    super(formState, validator, asyncValidator);
    this.errorMessages = errorMessages;
  }
}
