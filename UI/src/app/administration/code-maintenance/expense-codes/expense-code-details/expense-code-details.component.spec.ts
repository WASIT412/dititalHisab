import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCodeDetailsComponent } from './expense-code-details.component';

describe('ExpenseCodeDetailsComponent', () => {
  let component: ExpenseCodeDetailsComponent;
  let fixture: ComponentFixture<ExpenseCodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseCodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
