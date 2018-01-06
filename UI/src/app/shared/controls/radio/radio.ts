import {FormControlName, FormGroup} from '@angular/forms';

import {Component, Input, group} from '@angular/core';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'form-radio',
  template: `
    <div ngClass="{{processValidation&&form.get(name).invalid?'error has-error':''}}" [formGroup]="form">
      <ej-radiobutton label="{{label}}" (change)="onChange($event)" name="{{group}}" formControlName="{{name}}"></ej-radiobutton>
      <div *ngIf="errors&&errors.hasOwnProperty(name)">
        <ccs-error [control]="form.get(name)" [error]="errors[name]" [processValidation]="processValidation">
        </ccs-error>
      </div>
    </div>`,
  styleUrls: ['./radio.scss']

})
export class FormRadioComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() public label: string;
  @Input() public group: string;
  @Input() public name: string;
  @Input() processValidation: boolean = false;
  @Input() errors: Map<string, Map<string, string>>;
  constructor() {

  }

  ngOnInit(): void {
    let control = this.form.get(this.name);
    if (control && (control.value !== true || control.value !== false)) {
      control.setValue(false);
    }
  }

  onChange(event) {
    if (this.group) {
      let arr: Array<string> = this.group.split(',');
      arr.forEach(v => {
        let control = this.form.get(v);
        if (control) {
          control.setValue(false);

        }
      });
    }
    let control = this.form.get(this.name);
    if (control)
      control.setValue(true);
    event.value = true;
    event.checked = true;
    event.event.currentTarget.checked = true;
  }
}
