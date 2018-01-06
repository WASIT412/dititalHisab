import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCodeDetailsComponent } from './time-code-details.component';

describe('TimeCodeDetailsComponent', () => {
  let component: TimeCodeDetailsComponent;
  let fixture: ComponentFixture<TimeCodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
