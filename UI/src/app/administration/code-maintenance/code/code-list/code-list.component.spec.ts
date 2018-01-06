import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCodeListComponent } from './address-code-list.component';

describe('AddressCodeListComponent', () => {
  let component: AddressCodeListComponent;
  let fixture: ComponentFixture<AddressCodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
