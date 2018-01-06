import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCodesComponent } from './expense-codes.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdministrationRoutingModule } from '../../../administration-routing.module';
import { AppRoutingModule } from '../../../../app-routing.module';
import { DashboardComponent } from '../../../../dashboard/dashboard.component';
import { HomeComponent } from '../../../../home/home.component';
import { OccurrencesComponent } from '../../../../occurrences/occurrences.component';
import { AddClaimComponent } from '../../../../occurrences/incidents/add-claim/add-claim.component';
import { ReportsComponent } from '../../../../reports/reports.component';
import { PageHeaderComponent, NavComponent } from '@ccs/framework';
import { ProceduresComponent } from '../../../../procedures/procedures.component';
import { FinanceComponent } from '../../../../finance/finance.component';
import { ClaimAssignmentsComponent } from '../../../../claim-assignments/claim-assignments.component';
import { ApprovalsComponent } from '../../../../approvals/approvals.component';

import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { CodeMaintenanceService } from '../../../code-maintenance/code-maintenance.service';

describe('ExpensecodesComponent', () => {
  let component: ExpenseCodesComponent;
  let fixture: ComponentFixture<ExpenseCodesComponent>;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpenseCodesComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      providers: [
        CodeMaintenanceService,
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mentioned coloumns in grid. ( Expense Codes, Add New Expense Code, Code, Description, French Description, GL Account Code, Min Amount)', () => {
    console.log(fixture);
    expect(el.textContent).toContain('Expense Codes');
    expect(el.textContent).toContain('Add New Expense Code');
    expect(el.textContent).toContain('Code');
    expect(el.textContent).toContain('French Description');
    expect(el.textContent).toContain('GL Account Code');
    expect(el.textContent).toContain('Min Amount');
  });

});
