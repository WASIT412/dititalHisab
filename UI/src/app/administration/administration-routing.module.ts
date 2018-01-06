import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrationComponent } from './administration.component';

import { AccountsComponent } from './accounts/accounts.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { CompaniesComponent } from './companies/companies.component';
import { FeeScheduleComponent } from './fee-schedule/fee-schedule.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { StoragesComponent } from './storages/storages.component';
import { TrustAccountsComponent } from './trust-accounts/trust-accounts.component';
import { UsersComponent } from './users/users.component';
import { VendorsComponent } from './vendors/vendors.component';
import { XpertManagementComponent } from './xpert-management/xpert-management.component';
import { NAV } from '@ccs/framework';

const administrationRoutes: Routes = [
    {
      path: '',
      component: AdministrationComponent,
      children: [
        { path: 'accounts', component: AccountsComponent, data: { title: 'Accounts', nav: true, auth: true }},
        { path: 'bankaccounts', component: BankAccountsComponent, data: { title: 'Bank Accounts', nav: true, auth: true }},
        { path: 'code-maintenance', loadChildren: './code-maintenance/code-maintenance.module#CodeMaintenanceModule', data: NAV.paths['code-maintenance'] },
        { path: 'companies', component: CompaniesComponent, data: { title: 'Companies', nav: true, auth: true }},
        { path: 'feeschedule', component: FeeScheduleComponent, data: { title: 'Fee Schedule', nav: true, auth: true } },
        { path: 'organizations', component: OrganizationsComponent, data: { title: 'Organizations', nav: true, auth: true } },
        { path: 'partnerships', component: PartnershipsComponent, data: { title: 'Parthnerships', nav: true, auth: true } },
        { path: 'storages', component: StoragesComponent, data: { title: 'Storages', nav: true, auth: true } },
        { path: 'trustaccounts', component: TrustAccountsComponent, data: { title: 'TrustAccounts', nav: true, auth: true } },
        { path: 'users', component: UsersComponent, data: { title: 'Users', nav: true, auth: true } },
        { path: 'vendors', component: VendorsComponent, data: { title: 'Vendors', nav: true, auth: true } },
        { path: 'xpertmanagement', component: XpertManagementComponent, data: { title: 'Xpert Management', nav: true, auth: true } }
      ]
    },
  ];

  @NgModule({
    imports: [ RouterModule.forChild(administrationRoutes) ],
    exports: [ RouterModule ]
  })
  export class AdministrationRoutingModule { }
