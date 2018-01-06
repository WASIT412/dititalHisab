import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOccurencesComponent } from './nav-occurences.component';

describe('NavOccurencesComponent', () => {
  let component: NavOccurencesComponent;
  let fixture: ComponentFixture<NavOccurencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOccurencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOccurencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
