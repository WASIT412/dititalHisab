import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGlAccountCodeComponent } from './add-gl-account-code.component';

describe('AddGlAccountCodeComponent', () => {
  let component: AddGlAccountCodeComponent;
  let fixture: ComponentFixture<AddGlAccountCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGlAccountCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGlAccountCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
