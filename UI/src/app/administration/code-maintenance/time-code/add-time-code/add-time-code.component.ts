import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseApiService, SessionService } from '@ccs/shared';
import { BaseFormComponent, TitleBarService, ValidationProcessorService, ValidationService } from '@ccs/framework';
import { TimeCodeModel,timeCode } from 'app/models/code-maintenance/time-code.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { DataManager } from '@syncfusion/ej2-data';
import { GridComponent } from '@syncfusion/ej2-ng-grids';
@Component({
  selector: 'ccs-add-time-code',
  templateUrl: './add-time-code.component.html',
  styleUrls: ['./add-time-code.component.scss']
})
export class AddTimeCodeComponent extends BaseFormComponent implements OnInit {

 public form: FormGroup;
 public editSettings: Object;
 public toolbar: string[];
 public girddata:any//:DataManager;
 @ViewChild('grid')
 public grid: GridComponent;
  constructor(private service: BaseApiService<TimeCodeModel>, titleBarService: TitleBarService,
    route: ActivatedRoute, private fb: FormBuilder, router: Router, private storage: SessionService,
    private validationService: ValidationService, private validationProcessor: ValidationProcessorService) {
    super(titleBarService, router, route);
    this.createForm(false);
  
    this.id = this.route.params['_value'].id;
    this.reload = () => {
      this.loadTimeCode();
    };
    this.submit = () => {
      this.onSubmit();
    };
    this.service.api = route.data['value'].api;
  }

  ngOnInit() {
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
    this.submit=()=>{this.onSubmit()};
    this.loadTimeCode();
  }

  createForm(editTemplate) {
    this.form = this.fb.group({
      Code: new FormControl(editTemplate == false ? '' : { required: editTemplate }, Validators.required),
      Description: new FormControl('', Validators.required),
      FrenchDescription: new FormControl(''),
      MinAmount: new FormControl(0),
      AdditionalDescriptionRequired: new FormControl( false) ,
      NoCharge: new FormControl( false) ,
      NoTax: new FormControl( false) ,
      AlwaysTax: new FormControl( false) ,
      Inactive:new FormControl( true) ,
      IncludeInList: new FormControl( ''),
      ServiceItemCode:new FormControl( ''),
      Unbillable:new FormControl( false) ,
      DisallowBackDate: new FormControl( false) ,
      Add1DescReqd: new FormControl( false) ,
      ServiceFee:new FormControl( false) ,
      EnableEmail: new FormControl( false) ,
      UserThresholds: this.fb.array([]),
    });
  }

  setUserThresholds(thresholds: [{ TemplateCode: string, LossDescriptionCode: string, AccountID: string, Organization: string }]) {
    const ThresholdsFGs = thresholds.map(threshold => this.fb.group(threshold));
    const addressFormArray = this.fb.array(ThresholdsFGs);
    this.form.setControl('UserThresholds', addressFormArray);
  }
  get ThresholdsDetails(): FormArray {
    return this.form.get('UserThresholds') as FormArray;
  };

  loadTimeCode() {
    this.form.setValue({

      Code:timeCode.Code,
      Description: timeCode.Description,
      FrenchDescription: timeCode.FrenchDescription,
      MinAmount: timeCode.MinAmount,
      AdditionalDescriptionRequired: false,
      NoCharge: timeCode.NoCharge,
      NoTax: timeCode.NoTax,
      AlwaysTax: timeCode.AlwaysTax,
      Inactive: timeCode.Inactive,
      UserThresholds:[],
      IncludeInList:timeCode.IncludeInList,
      ServiceItemCode:timeCode.ServiceItemCode,
      ServiceFee:timeCode.ServiceFee,
      Unbillable:timeCode.Unbillable,
      DisallowBackDate:timeCode.DisallowBackDate,
      Add1DescReqd:timeCode.Add1DescReqd,
      EnableEmail:timeCode.EnableEmail,
      

    });
    this.setUserThresholds(timeCode.UserThresholds);
this.girddata=timeCode.UserThresholds;
  }

  onSubmit() {
console.log(this.form.value);
  }

  OnActionComplete(args) {
    console.log('OnActionComplete');
    console.log(args);
    if (args.action == "add") {

      //  this.contactDetails.push(this.fb.group( args.data as ContactDetail));
    }
  }



}



