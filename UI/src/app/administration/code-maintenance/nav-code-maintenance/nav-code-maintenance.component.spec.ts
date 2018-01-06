import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCodeMaintenanceComponent } from './nav-code-maintenance.component';

describe('NavCodeMaintenanceComponent', () => {
  let component: NavCodeMaintenanceComponent;
  let fixture: ComponentFixture<NavCodeMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCodeMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCodeMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
