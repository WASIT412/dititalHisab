import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { ExpenseCodeModel, Threshold } from '../../../../models/code-maintenance';
import { CodeMaintenanceService } from '../../code-maintenance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckBoxComponent, ButtonComponent } from '@syncfusion/ej2-ng-buttons';
import { SessionService, BaseApiService } from '@ccs/shared';
import { TitleBarService, BaseFormComponent, ValidationService, ValidationProcessorService } from '@ccs/framework';
import { GridComponent } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'ccs-add-expense-code',
    templateUrl: './add-expense-code.component.html',
    styleUrls: ['./add-expense-code.component.scss']
})

export class AddExpenseCodeComponent extends BaseFormComponent implements OnInit {

    @ViewChild('grid') grid: GridComponent;

    editTemplate: boolean = false;
    form: FormGroup;
    lblCode: string;
    isHide: boolean = false;
    expenseCode: ExpenseCodeModel = new ExpenseCodeModel();
    statusCode: number;
    requestProcessing = false;
    codeToUpdate = null;
    processValidation = false;
    code = this.route.params['_value'].code;
    public editSettings: Object;
    public toolbar: string[];
    public userIdRules: Object;
    public thresholdAmountRule: Object;
    public filterOptions: Object;
    // Component properties
    public glCodes: Object[] = [];
    // Create constructor to get service instance

    errors = new Map<string, Map<string, string>>();

    // Component properties
    public allGLAccount: Object[] = [];

    constructor(private service: BaseApiService<ExpenseCodeModel>, titleBarService: TitleBarService,
        route: ActivatedRoute, private fb: FormBuilder, router: Router, private storage: SessionService,
        private validationService: ValidationService, private validationProcessor: ValidationProcessorService) {
        super(titleBarService, router, route);
        this.id = this.route.params['_value'].id;
        this.submit = () => {
            this.onSubmit();
        };

        this.validationService
            .getFormValidatorsFromFile('expense-code-validation.json')
            .subscribe(fields => {
                this.errors = this.validationProcessor.process(fields);
            });
    }

    // Create form
    createForm(editTemplate) {
        this.validationProcessor.init({
            Code: {},
            Description: {},
            FrenchDescription: {},
            GlAccountCode: {},
            DefaultUnitRate: {},
            DeductibleUnits: {},
            MinAmount: {},
            IsMileage: { default: false },
            FlatFee: { default: false },
            BlendedFee: { default: false },
            InActive: { default: false },
            AlwaysTax: { default: false },
            NoCharge: { default: false },
            AdditionalDescriptionRequired: { default: false },
            NoTax: { default: false },
            IsReimbursable: { default: false },
            UserThresholds: [] = []
        });
        this.form = this.validationProcessor.getFormGroup();

        //   let control = this.form.get('UserThresholds');
    }

    get ThresholdsDetails(): FormArray {
        return this.form.get('UserThresholds') as FormArray;
    };

    deductibleVisibilty(value) {
        if (value.length > 0) {
            this.isHide = true;
        }
        else {
            this.form.controls.deductibleUnits.setValue('');
            this.isHide = false;
        }
    }

    // Create ngOnInit() and and load
    ngOnInit() {
        const isEditMode = this.id !== undefined;
        this.createForm(isEditMode);
        this.lblCode = isEditMode ? '' : 'Code*';
        if (isEditMode) {
            this.loadExpenseCode();
        }
        this.loadGLCode();
        this.loadGridSetting();
    }

    // load GL Code
    loadGLCode() {
        this.service.api = 'GLAccountCodes';
        this.service.getAll()
            .subscribe(res => {
                let result = res['result'];
                for (let i = 0; i < result.length; i++) {
                    let glCode = new Object();
                    glCode['name'] = result[i]['Description'].trim();
                    glCode['value'] = result[i]['Code'].trim();
                    this.glCodes.push(glCode);
                }
            },
            errorCode => this.statusCode = errorCode);
    }


    // load ExpenseCode
    loadExpenseCode() {
        this.service.api = this.route.data['value'].api;
        this.service.get(this.id)
            .subscribe(res => {
                //debugger;
                const code = this.expenseCode = res.SingleObject;
                this.form.setValue({
                    Code: code.Code,
                    Description: code.Description,
                    FrenchDescription: code.FrenchDescription,
                    InActive: code.InActive,
                    GlAccountCode: code.GLAccountCode,
                    DefaultUnitRate: code.DefaultUnitRate,
                    DeductibleUnits: code.DeductibleUnits,
                    MinAmount: code.MinAmount,
                    IsMileage: code.IsMileage,
                    FlatFee: code.FlatFee,
                    BlendedFee: code.BlendedFee,
                    AlwaysTax: code.AlwaysTax,
                    NoCharge: code.NoCharge,
                    AdditionalDescriptionRequired: code.AdditionalDescriptionRequired,
                    NoTax: code.NoTax,
                    IsReimbursable: code.IsReimbursable,
                    UserThresholds: code.UserThresholds
                });
                console.log()
                this.data = code.UserThresholds;
            },
            errorCode => this.statusCode = errorCode);

    }


    onSubmit() {

        this.processValidation = true;
        if (this.form.invalid) {
            return; // Validation failed, exit from method.
        }
        //debugger;
        // Form is valid, now perform create or update
        this.preProcessConfigurations();
        const formValue = this.form.value;
        var formData = JSON.stringify(formValue);
        if (formValue.inactive === '') {
            formValue.inactive = false;
        }
        if (formValue.isBusy === '') {
            formValue.isBusy = false;
        }
        if (formValue.isSelfBusy === '') {
            formValue.isSelfBusy = false;
        }

        this.service.api = this.route.data['value'].api;
        // Form is valid, now perform create or update
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
    public data: any[];
    // Perform preliminary processing configurations
    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }

    //redirect to Expense-Codes page
    revert() {

        if (this.codeToUpdate)
            this.router.navigate(['../../'], { relativeTo: this.route });
        else
            this.router.navigate(['../'], { relativeTo: this.route });
    }

    //Grid-----
    private loadGridSetting() {
        //load grid data onLoad
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
        this.filterOptions = { type: 'menu' };
        this.userIdRules = { required: true };
        this.thresholdAmountRule = { required: true };
    }
    setUserThresholds(thresholds: Threshold[]) {
        //debugger;
        //const ThresholdsFGs = thresholds.map(threshold => this.fb.group(threshold));
        const expenseFormArray = this.fb.array(thresholds);

        this.form.setControl('UserThresholds', expenseFormArray);
    }
    OnActionComplete(args) {
        if (args.action == "add" || args.action == "edit") {
            let CurrentData = args.data;
            if (CurrentData.ExpenseCode == undefined)
                CurrentData['ExpenseCode'] = this.form.controls.Code.value;
            if (CurrentData.ID == undefined)
                CurrentData['ID'] = Math.floor(1000 + Math.random() * 9000);
            if (this.ThresholdsDetails.value.length == 0) {
                let array = new Array();
                array.push(CurrentData);
                this.ThresholdsDetails.patchValue(array);
            }
            console.log(this.ThresholdsDetails.value);
        }
    }
}
