import {FormControlName, FormGroup} from '@angular/forms';
import {Component, Input, Output, EventEmitter, AfterViewInit, ViewChildren} from '@angular/core';

@Component({
  selector: 'form-text',
  template: `
    <!-- <div class="form-group" [formGroup]="form">
     <input type="text" class="form-control" formControlName="{{name}}"  />
     <label>{{label}}</label>
     </div>-->
    <div  [formGroup]="form" ngClass="{{processValidation&&form.get(name).invalid?'error has-error':'form-group'}}">
      <div class="e-float-input">
        <input #input readOnly="{{readOnly}}" type="text" formControlName="{{name}}" name={{name}}  (ngModelChange)="onChangeInput($event)"
        required="{{isrequired}}" />
        <span class="e-float-line"></span>
        <label class="e-float-text">{{label}}</label>
      </div>
      <div *ngIf="errors&&errors.hasOwnProperty(name)">
        <ccs-error [control]="form.get(name)" [error]="errors[name]" [processValidation]="processValidation">
        </ccs-error>
      </div>
    </div>
  `,
  styleUrls: ['./input.scss']

})
export class FormTextComponent implements AfterViewInit {
  @Input() disable: boolean;
  @Input() form: FormGroup;
  @Input() readOnly: boolean;
  @Input() label: string;
  @Input() public name: FormControlName;
  @Input() public isrequired: boolean = false;
  @Output() inputModelChange = new EventEmitter();
  @Input() inputModel: Object;
  @Input() autofocus: boolean;
  @Input() processValidation: boolean = false;
  @Input() errors: Map<string, Map<string, string>>;
  @ViewChildren('input') input;

  constructor() {
  }

  onChangeInput(event) {
    this.inputModel = event;
    this.inputModelChange.emit(event);
  }

  ngAfterViewInit(): void {
    if (this.autofocus) {
      $(this.input.first.nativeElement).focus();
    }
  }
}
