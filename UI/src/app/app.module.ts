import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavigationModule, PageHeaderComponent, NavComponent, SubMenuComponent, NavItemComponent, PageFooterComponent } from '@ccs/framework';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { ReportsComponent } from './reports/reports.component';
import { FinanceComponent } from './finance/finance.component';
import { ClaimAssignmentsComponent } from './claim-assignments/claim-assignments.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { IncidentService } from './occurrences/incident.data.service';
import { SharedModule,  SessionService } from '@ccs/shared';
import { ErrorInterceptorProvider } from './error-interceptor.service';
import { ValidationProcessorService, ValidationService,SimpleNotificationsModule } from '@ccs/framework';
import { FilterService, ColumnMenuService } from "@syncfusion/ej2-ng-grids";
import { DefaultComponent } from './default/default.component';
import { RootComponent } from './root/root.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    ProceduresComponent,
    ReportsComponent,
    FinanceComponent,
    ClaimAssignmentsComponent,
    ApprovalsComponent,
    SubMenuComponent,
    NavItemComponent,
    PageFooterComponent,
    DefaultComponent,
    RootComponent
  ],
  //schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    NavigationModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule],
  providers: [IncidentService, ErrorInterceptorProvider, Title, ValidationProcessorService, ValidationService, ColumnMenuService, FilterService, SessionService],
  bootstrap: [RootComponent]
})
export class AppModule { }

