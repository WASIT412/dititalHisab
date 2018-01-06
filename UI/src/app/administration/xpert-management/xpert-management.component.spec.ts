import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpertManagementComponent } from './xpert-management.component';

describe('XpertManagementComponent', () => {
  let component: XpertManagementComponent;
  let fixture: ComponentFixture<XpertManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpertManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpertManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
