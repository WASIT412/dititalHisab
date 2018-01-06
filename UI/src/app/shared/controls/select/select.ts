import {FormControlName, FormGroup} from '@angular/forms';

import {Component, Input} from '@angular/core';
import {inputs} from '@syncfusion/ej2-ng-dropdowns/src/auto-complete/autocomplete.component';


@Component({
  selector: 'form-select',
  template: `
    <div ngClass="{{processValidation&&form.get(name).invalid?'form-group error has-error':'form-group'}}" [formGroup]="form">
      <ej-dropdownlist [dataSource]='data' [placeholder]='waterMark' [value]='value' [fields]='fields' formControlName="{{name}}">
      </ej-dropdownlist>
      <div *ngIf="errors&&errors.hasOwnProperty(name)">
        <ccs-error [control]="form.get(name)" [error]="errors[name]" [processValidation]="processValidation">
        </ccs-error>
      </div>
    </div>
  `,
  styleUrls: ['./select.scss']
})

export class FormSelectComponent {

  @Input() value: any;

  @Input() data: Object[];
  // maps the appropriate column to fields property
  @Input() public fields: Object = {text: 'name', value: 'value'};
  // set the height of the popup element
  @Input() public height: string = '220px';
  // set the placeholder to DropDownList input element
  @Input() public waterMark: string;

  @Input() form: FormGroup;
  @Input() public name: FormControlName;

  @Input() processValidation: boolean = false;
  @Input() errors: Map<string, Map<string, string>>;

  constructor() {
  }
}

