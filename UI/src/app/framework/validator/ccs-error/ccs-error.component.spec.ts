import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcsErrorComponent } from './ccs-error.component';

describe('CcsErrorComponent', () => {
  let component: CcsErrorComponent;
  let fixture: ComponentFixture<CcsErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcsErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
