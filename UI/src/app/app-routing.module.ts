import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrationComponent} from './administration/administration.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OccurrencesComponent} from './occurrences/occurrences.component';
import {ProceduresComponent} from './procedures/procedures.component';
import {ReportsComponent} from './reports/reports.component';
import {FinanceComponent} from './finance/finance.component';
import {ClaimAssignmentsComponent} from './claim-assignments/claim-assignments.component';
import {ApprovalsComponent} from './approvals/approvals.component';
import {DefaultComponent} from './default/default.component';

const routes: Routes = [
  {path: 'default', component: DefaultComponent, data: {breadcrumb: 'Default', title: 'Default', nav: true, auth: true}},
  {path: 'dashboard', component: DashboardComponent, data: {breadcrumb: 'Dashboard', title: 'Dashboard', nav: true, auth: true}},
  {path: 'home', component: HomeComponent, data: {title: 'Home', nav: false, auth: false}},
  {
    path: 'occurrences',
    loadChildren: './occurrences/occurences.module#OccurencesModule',
    data: {title: 'Occurences', nav: true, auth: true}
  },
  {
    path: 'administration',
    loadChildren: './administration/administration.module#AdministrationModule',
    data: {breadcrumb: 'Administration', title: 'Administration', nav: true, auth: true}
  },
  {path: 'reports', component: ReportsComponent, data: {title: 'Reports', nav: true, auth: true}},
  {path: 'finance', component: FinanceComponent, data: {title: 'Finance', nav: true, auth: true}},
  {path: 'approvals', component: ApprovalsComponent, data: {title: 'Approvals', nav: true, auth: true}},
  {path: 'claimassignments', component: ClaimAssignmentsComponent, data: {title: 'Claim Assignments', nav: true, auth: true}},
  {path: 'procedures', component: ProceduresComponent, data: {title: 'Procedures', nav: true, auth: true}},
  {path: '', redirectTo: '/default', pathMatch: 'full', data: {title: '', nav: false, auth: true}}// ,
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // , { enableTracing: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
