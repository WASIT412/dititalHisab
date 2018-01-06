import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageHeaderComponent , NavComponent} from '@ccs/framework';
import { HomeComponent } from './home/home.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { ReportsComponent } from './reports/reports.component';
import { FinanceComponent } from './finance/finance.component';
import { ClaimAssignmentsComponent } from './claim-assignments/claim-assignments.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { AddClaimComponent } from './occurrences/incidents/add-claim/add-claim.component';

import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PageHeaderComponent,
        NavComponent,
        HomeComponent,
        DashboardComponent,
        OccurrencesComponent,
        ProceduresComponent,
        ReportsComponent,
        FinanceComponent,
        ClaimAssignmentsComponent,
        ApprovalsComponent,
        AddClaimComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // this test is written based on current fixed title for the app. If you change title dynamically using TitleService or any means, Please also update this test.
  it(`should have title as 'CMS'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('CMS');

  }));

  // this test can be improve
  it('should render navbar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
      const navbar = fixture.debugElement.query(By.css('.app-body')).nativeElement;
      expect(navbar).toBeTruthy();
  }));
});
