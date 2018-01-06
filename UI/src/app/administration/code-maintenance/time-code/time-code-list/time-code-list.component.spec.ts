import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCodeListComponent } from './time-code-list.component';

describe('TimeCodeListComponent', () => {
  let component: TimeCodeListComponent;
  let fixture: ComponentFixture<TimeCodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
