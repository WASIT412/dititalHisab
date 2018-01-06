import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavClaimComponent } from './nav-claim.component';

describe('NavClaimComponent', () => {
  let component: NavClaimComponent;
  let fixture: ComponentFixture<NavClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
