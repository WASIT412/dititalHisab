import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

//<slide-toggle label= 'Active' name= 'inActive' checked= 'true' disabled= "false" [form] = "form" > </slide-toggle>

@Component({
  selector: 'slide-toggle',
  template: `
    <div ngClass="{{processValidation&&form.get(name).invalid?'error has-error label':'form-group label'}}" [formGroup]="form">
      {{label}}
      <mat-slide-toggle formControlName="{{name}}" class="example-margin" [color]="color" [checked]="checked" [disabled]="disabled">
      </mat-slide-toggle>
      <div *ngIf="errors&&errors.hasOwnProperty(name)">
        <ccs-error [control]="form.get(name)" [error]="errors[name]" [processValidation]="processValidation">
        </ccs-error>
      </div>
    </div>
  `,
  styleUrls: ['./slide-toggle.scss']
})

export class SlideToggleComponent {

  constructor(private fb: FormBuilder) {
  }

  @Input() form: FormGroup;
  @Input() public name;
  @Input() public color = 'accent';
  @Input() public checked = false;
  @Input() public disabled = false;
  @Input() public label = '';
  @Input() processValidation: boolean = false;
  @Input() errors: Map<string, Map<string, string>>;
}
