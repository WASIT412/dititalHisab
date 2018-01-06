import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationChildComponent } from './navigation-child.component';

describe('NavigationChildComponent', () => {
  let component: NavigationChildComponent;
  let fixture: ComponentFixture<NavigationChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
