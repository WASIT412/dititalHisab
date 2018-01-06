import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeMaintenanceComponent } from './code-maintenance.component';
import { AddCodeComponent, CodeDetailsComponent, CodeListComponent, CodesComponent } from './code';
import { ExpenseCodesComponent } from './expense-codes/expense-code-list/expense-codes.component';
import { AddExpenseCodeComponent } from './expense-codes/add-expense-code/add-expense-code.component';
import { ExpenseCodeDetailsComponent } from './expense-codes/expense-code-details/expense-code-details.component';
import { FormType } from './../../helpers/lookup';
import { Constants } from '../../app.constants';
import { NAV } from '@ccs/framework';
import { SharedModule } from '@ccs/shared';
import { ChildNavsComponent } from 'app/shared/child-navs/child-navs.component';
import { TimeCodeListComponent, TimeCodeComponent, TimeCodeDetailsComponent, AddTimeCodeComponent } from 'app/administration/code-maintenance/time-code';
import { AddGlAccountCodeComponent, GlAccountCodeDetailsComponent, GlAccountCodeListComponent } from './gl-account-code';
const addressUrl = Constants.URL_ADDRESS_CODE;

const codeMaintenanceRoutes: Routes = [{
 path: '',
  children: [
    {
      path:'',
      component: ChildNavsComponent,
      data: NAV.paths['code-maintenance']
    }
    ,{
    path: 'address-codes',
    component: CodesComponent,
    data: NAV.paths['address-codes'],
    children: [{
      path: '',
      component: CodeListComponent
    },
    {
      path: 'add',
      component: AddCodeComponent,
      data: NAV.paths['address-codes'].child['add']
    },
    {
      path: 'edit/:id',
      component: AddCodeComponent,
      data: NAV.paths['address-codes'].child['edit']
    },
    {
      path: ':id',
      component: CodeDetailsComponent,
      data: NAV.paths['address-codes'].child['details']
    }
    ]
  },
  {
    path: 'expense-codes',
    component: CodesComponent,
    data: NAV.paths['expense-codes'],
    children: [{
      path: '',
      component: ExpenseCodesComponent
    },
    {
      path: 'add',
      component: AddExpenseCodeComponent,
      data: NAV.paths['expense-codes'].child['add']
    },
    {
      path: 'edit/:id',
      component: AddExpenseCodeComponent,
      data: NAV.paths['expense-codes'].child['edit']
    },
    {
      path: ':id',
      component: ExpenseCodeDetailsComponent,
      data: NAV.paths['expense-codes'].child['details']
    }
    ]
  }
  ,{
    path: 'time-codes',
    component: TimeCodeComponent,
    data: NAV.paths['time-codes'],
    children: [{
      path: '',
      component: TimeCodeListComponent
    },
    {
      path: 'add',
      component: AddTimeCodeComponent,
      data: NAV.paths['time-codes'].child['add']
    },
    {
      path: 'edit/:id',
      component: AddTimeCodeComponent,
      data: NAV.paths['time-codes'].child['edit']
    },
    {
      path: ':id',
      component: TimeCodeDetailsComponent,
      data: NAV.paths['time-codes'].child['details']
    }
    ]
  },
     {
      path: 'gl-account-codes',
    component: CodesComponent,
    data: NAV.paths['gl-account-codes'],
    children: [{
      path: '',
      component: GlAccountCodeListComponent
    },
    {
      path: 'add',
      component: AddGlAccountCodeComponent,
      data: NAV.paths['gl-account-codes'].child['add']
    },
    {
      path: 'edit/:id',
      component: AddGlAccountCodeComponent,
      data: NAV.paths['gl-account-codes'].child['edit']
    },
    {
      path: ':id',
      component: GlAccountCodeDetailsComponent,
      data: NAV.paths['gl-account-codes'].child['details']
    }
    ]
  },

  ]
},];


@NgModule({
  imports: [RouterModule.forChild(codeMaintenanceRoutes)],
  exports: [RouterModule]
})
export class CodeMaintenanceRoutingModule { }
