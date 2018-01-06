import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavExpenseCodeComponent } from './nav-expense-code.component';

describe('NavExpenseCodeComponent', () => {
  let component: NavExpenseCodeComponent;
  let fixture: ComponentFixture<NavExpenseCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavExpenseCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavExpenseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
