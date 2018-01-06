import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'ccs-error',
  templateUrl: './ccs-error.component.html',
  styleUrls: ['./ccs-error.component.css']
})
export class CcsErrorComponent {
  @Input() public error: Map<string, string>;
  @Input() public control: FormControl;
  @Input() public processValidation: boolean = false;
}
