import { Component, OnInit } from '@angular/core';
import { ExpenseCodeModel } from '../../../../models/code-maintenance';
import { CodeMaintenanceService } from '../../code-maintenance.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import * as $ from 'jquery';
import { BaseApiService, SessionService } from '@ccs/shared';
import { TitleBarService, BaseFormComponent, NotificationsService } from '@ccs/framework';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'ccs-expense-code-details',
  templateUrl: './expense-code-details.component.html',
  styleUrls: ['./expense-code-details.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class ExpenseCodeDetailsComponent extends BaseFormComponent implements OnInit {
  expenseCode: ExpenseCodeModel;
  requestProcessing = false;
  processValidation = false;
  statusCode: number;
  codeToUpdate = null;
  flag: boolean = false;
  form: FormGroup;
  data: any;
  constructor(private service: BaseApiService<ExpenseCodeModel>, route: ActivatedRoute, router: Router, titleBarService: TitleBarService, private storage: SessionService, private fb: FormBuilder) {
    super(titleBarService, router, route);
    this.id = this.route.params['_value'].id;
    this.reload = () => { this.loadExpenseCode(); };
    this.delete = () => { this.deleteExpenseCode(); }
    this.service.api = route.data['value'].api;

  }

  ngOnInit() {
    this.loadExpenseCode();
  }

  //load ExpenseCode
  loadExpenseCode() {
    this.service.get(this.id).subscribe(val => {
      console.log(val);
      this.expenseCode = val.SingleObject;
      this.data=this.expenseCode.UserThresholds;
      this.flag = true;
      this.form = this.fb.group({
        AlwaysTax: new FormControl({ value: this.expenseCode.AlwaysTax, readonly: true }),
        NoTax: new FormControl({ value: this.expenseCode.NoTax, disabled: true }),
        NoCharge: new FormControl({ value: this.expenseCode.NoCharge, disabled: true }),
        Inactive: new FormControl({ value: false, disabled: true }),
        IsMileage: new FormControl({ value: this.expenseCode.IsMileage, disabled: true }),
        BlendedFee: new FormControl({ value: this.expenseCode.BlendedFee, disabled: true }),
        AdditionalDescriptionRequired: new FormControl({ value: this.expenseCode.AdditionalDescriptionRequired, disabled: true }),
        FlatFee: new FormControl({ value: this.expenseCode.FlatFee, disabled: true }),
        IsReimbursable: new FormControl({ value: this.expenseCode.IsReimbursable, disabled: true }),

      });
    },
      errorCode => this.statusCode = errorCode);
  }

  // Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  //redirect to Expense-Codes page
  revert() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
  edit() {
    this.router.navigate(['../edit/' + this.id], { relativeTo: this.route });
  }

  deleteExpenseCode() {
    if (this.id !== undefined) {
      this.service.delete(this.id)
        .subscribe(res => {
          this.statusCode = 200;
          this.storage.set('add', 'Deleted');
          this.cancel();
        },
        errorCode => this.statusCode = errorCode
        );
    }
  }
}
