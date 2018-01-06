import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCodeDetailsComponent } from './address-code-details.component';

describe('AddressCodeDetailsComponent', () => {
  let component: AddressCodeDetailsComponent;
  let fixture: ComponentFixture<AddressCodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
