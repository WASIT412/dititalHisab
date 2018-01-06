import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustAccountsComponent } from './trust-accounts.component';

describe('TrustAccountsComponent', () => {
  let component: TrustAccountsComponent;
  let fixture: ComponentFixture<TrustAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
