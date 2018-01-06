import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlAccountCodeListComponent } from './gl-account-code-list.component';

describe('GlAccountCodeListComponent', () => {
  let component: GlAccountCodeListComponent;
  let fixture: ComponentFixture<GlAccountCodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlAccountCodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlAccountCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
