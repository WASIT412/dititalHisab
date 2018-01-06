import { Component, OnInit, AfterViewInit, ViewChildren} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CodeModel } from '../../../../models/code-maintenance';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseApiService, SessionService } from '@ccs/shared';
import { BaseFormComponent, TitleBarService, ValidationProcessorService, ValidationService } from '@ccs/framework';

@Component({
  selector: 'ccs-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.scss']
})
export class AddCodeComponent extends BaseFormComponent implements OnInit {
  //Component properties
  statusCode: number;
  requestProcessing = false;
  processValidation = false;
  isSubmit: boolean;
  lblCode: string;
  //Create form
  form: FormGroup;
  createdDate: Date;
  lastChangedDate: Date;
 
  errors = new Map<string, Map<string, string>>();

  constructor(private service: BaseApiService<CodeModel>, titleBarService: TitleBarService,
    route: ActivatedRoute, private fb: FormBuilder, router: Router, private storage: SessionService,
    private validationService: ValidationService, private validationProcessor: ValidationProcessorService) {
    super(titleBarService, router, route);
    this.id = this.route.params['_value'].id;
    this.reload = () => {
      this.loadAddressCode();
    };
    this.submit = () => {
      this.onSubmit();
    };
    this.service.api = route.data['value'].api;
    this.validationService
      .getValidationFor(this.service.api)
      .subscribe(fields => {
        this.errors = this.validationProcessor.process(fields);
      });
  }


  ngOnInit() {
    const isEditMode = this.id !== undefined;
    this.createForm(isEditMode);
    this.lblCode = isEditMode ? '' : 'Code*';
    if (isEditMode) {
      this.loadAddressCode();
    }
  }

  createForm(isEdit: boolean = false) {
    /*this.form = this.fb.group({
      Code: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required),
      FrenchDescription: new FormControl(''),
      Inactive: new FormControl(''),
      createdDate: Date,
      lastChangedDate: Date
    });*/

    this.validationProcessor.init({
      Code: {},
      Description: {},
      FrenchDescription: {},
      Inactive: {},
      createdDate: {},
      lastChangedDate: {}
    });
    this.form = this.validationProcessor.getFormGroup();
    //Used to set default value
    this.form.get('Inactive').setValue(true);
    this.form.get('createdDate').setValue(this.createdDate);
    this.form.get('lastChangedDate').setValue(this.lastChangedDate);

  }

  //load address code by code

  loadAddressCode() {
    this.service.get(this.id)
      .subscribe(res => {
        const code = res.SingleObject;
        console.log(code);
        this.form.setValue({
          Code: code.Code,
          Description: code.Description,
          FrenchDescription: code.FrenchDescription,
          Inactive: code.Inactive,
          createdDate: code.CreatedDate,
          lastChangedDate: code.LastChangedDate
          // isBusy: currentValue.isBusy,
          //  isSelfBusy: currentValue.isSelfBusy
        });

        //  this.createdDate = code.CreatedDate;
        //this.lastChangedDate = code.LastChangedDate;
      },
      errorCode => this.statusCode = errorCode);
  }

  onSubmit() {
    this.isSubmit = true;
    this.processValidation = true;
    if (this.form.valid) {

      /// this.form.addControl(this.codeFeild, new FormControl(this.currentCode));
      const formValue = this.form.value;
      if (formValue.Inactive === '') {
        formValue.Inactive = false;
      }
      if (this.id !== undefined) {
        this.service.put(formValue)
          .subscribe(res => {
            this.statusCode = 200;
            this.storage.set('add', 'Updated');
            this.cancel();
          },
          errorCode => this.statusCode = errorCode
          );
      }
      else {
        this.service.post(formValue)
          .subscribe(res => {
            this.statusCode = 200;
            this.storage.set('add', 'Added');
            this.cancel();
          },
          errorCode => this.statusCode = errorCode
          );
      }
    }
  }

  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

}




