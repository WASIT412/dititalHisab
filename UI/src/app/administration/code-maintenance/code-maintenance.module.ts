import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {CodeMaintenanceComponent} from './code-maintenance.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExpenseCodesComponent} from './expense-codes/expense-code-list/expense-codes.component';
import {NavCodeMaintenanceComponent} from './nav-code-maintenance/nav-code-maintenance.component';
import {CodeMaintenanceRoutingModule} from './code-maintenance-routing.module';
import {CodeMaintenanceService} from './code-maintenance.service';
import {AddExpenseCodeComponent} from './expense-codes/add-expense-code/add-expense-code.component';
import {SharedModule} from '@ccs/shared';
import {GridModule, PageService, SortService,ToolbarService} from '@syncfusion/ej2-ng-grids';
import {ExpenseCodeDetailsComponent} from './expense-codes/expense-code-details/expense-code-details.component';
import {MatSlideToggleModule} from '@angular/material/';
import {CdkTableModule} from '@angular/cdk/table';
import {CodeDetailsComponent, AddCodeComponent, CodeListComponent, CodesComponent} from './code';
import {AddTimeCodeComponent, TimeCodeDetailsComponent, TimeCodeListComponent, TimeCodeComponent} from './time-code';
import {CcsErrorComponent} from '@ccs/framework';
import { GridAllModule } from '@syncfusion/ej2-ng-grids';
import { AddGlAccountCodeComponent, GlAccountCodeDetailsComponent, GlAccountCodeListComponent } from './gl-account-code';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CodeMaintenanceRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    GridModule,
    MatSlideToggleModule,
    CdkTableModule,
    GridAllModule

  ],
  declarations: [
    CodeMaintenanceComponent,
    ExpenseCodesComponent,
    NavCodeMaintenanceComponent,
    CodeMaintenanceComponent,
    AddExpenseCodeComponent,
    ExpenseCodeDetailsComponent,
    CodeDetailsComponent,
    AddCodeComponent,
    CodeListComponent,
    CodesComponent,
    AddTimeCodeComponent,
    TimeCodeDetailsComponent,
    TimeCodeListComponent,
    TimeCodeComponent,
    AddGlAccountCodeComponent,
    GlAccountCodeDetailsComponent,
    GlAccountCodeListComponent
  ],
  providers: [CodeMaintenanceService, PageService, SortService]
})
export class CodeMaintenanceModule {
}
