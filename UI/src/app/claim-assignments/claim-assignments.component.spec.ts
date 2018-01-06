import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimAssignmentsComponent } from './claim-assignments.component';

describe('ClaimAssignmentsComponent', () => {
  let component: ClaimAssignmentsComponent;
  let fixture: ComponentFixture<ClaimAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
