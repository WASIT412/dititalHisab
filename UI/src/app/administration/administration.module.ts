import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationModule } from '@ccs/framework';
import { AdministrationComponent } from './administration.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';

import { AccountsComponent } from './accounts/accounts.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
//import { CodeMaintenanceComponent } from './code-maintenance/code-maintenance.component';
import { CompaniesComponent } from './companies/companies.component';
import { FeeScheduleComponent } from './fee-schedule/fee-schedule.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { StoragesComponent } from './storages/storages.component';
import { TrustAccountsComponent } from './trust-accounts/trust-accounts.component';
import { UsersComponent } from './users/users.component';
import { VendorsComponent } from './vendors/vendors.component';
import { XpertManagementComponent } from './xpert-management/xpert-management.component';

//import { ExpenseCodesComponent } from './code-maintenance/expense-codes/expense-code-list/expense-codes.component'; // TODO: move to code-maintenance module

// import { HeroService } from './hero.service';
import { AdministrationRoutingModule } from './administration-routing.module';
import { CheckBoxModule, ButtonModule, ButtonAllModule } from '@syncfusion/ej2-ng-buttons';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdministrationRoutingModule,
        ButtonModule,
        CheckBoxModule
    ],
    declarations: [
        AdministrationComponent,
        NavAdminComponent,
        AccountsComponent,
        BankAccountsComponent,
        // CodeMaintenanceComponent,
        CompaniesComponent,
        FeeScheduleComponent,
        OrganizationsComponent,
        PartnershipsComponent,
        StoragesComponent,
        TrustAccountsComponent,
        UsersComponent,
        VendorsComponent,
        XpertManagementComponent],
    // ,
    // providers: [ HeroService ]
})
export class AdministrationModule { }
