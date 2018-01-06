import {FormControlName, FormGroup} from '@angular/forms';

import {Component, Input} from '@angular/core';

@Component({
  selector: 'form-checkbox',
  template: `
    <!--<div class="form-group" >
    <div class="form-check" [formGroup]="form">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" formControlName="{{name}}">
        {{label}} </label>
    </div>[checked]="name"
  </div>-->
    <div ngClass="{{processValidation&&form.get(name).invalid?'error has-error':'form-check'}}" [formGroup]="form">
      <ej-checkbox label="{{label}}" formControlName="{{name}}"></ej-checkbox>
      <div *ngIf="errors&&errors.hasOwnProperty(name)">
        <ccs-error [control]="form.get(name)" [error]="errors[name]" [processValidation]="processValidation">
        </ccs-error>
      </div>
    </div>
  `,
  //styleUrls: ['./checkbox.scss']
})
export class FormCheckboxComponent {
  @Input() form: FormGroup;
  @Input() public label: string;
  @Input() public name: string;
  @Input() processValidation: boolean = false;
  @Input() errors: Map<string, Map<string, string>>;
  constructor() {
  }
}
