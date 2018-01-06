import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeCodeComponent } from './add-time-code.component';

describe('AddTimeCodeComponent', () => {
  let component: AddTimeCodeComponent;
  let fixture: ComponentFixture<AddTimeCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTimeCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
