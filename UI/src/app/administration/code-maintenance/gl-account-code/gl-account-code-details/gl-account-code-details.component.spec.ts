import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlAccountCodeDetailsComponent } from './gl-account-code-details.component';

describe('GlAccountCodeDetailsComponent', () => {
  let component: GlAccountCodeDetailsComponent;
  let fixture: ComponentFixture<GlAccountCodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlAccountCodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlAccountCodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
