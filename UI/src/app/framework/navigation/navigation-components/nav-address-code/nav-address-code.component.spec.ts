import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAddressCodeComponent } from './nav-address-code.component';

describe('NavAddressCodeComponent', () => {
  let component: NavAddressCodeComponent;
  let fixture: ComponentFixture<NavAddressCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAddressCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAddressCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
