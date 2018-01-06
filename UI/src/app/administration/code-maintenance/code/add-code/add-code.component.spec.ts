import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAddressCodeComponent } from './add-address-code.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CodeMaintenanceService } from '../../code-maintenance.service';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { AddressCodeModel } from "../../../../models/code-maintenance/address-code.model";

describe('Add-AddressCodesComponent Testing ', () => {
  let component: AddAddressCodeComponent;
  let fixture: ComponentFixture<AddAddressCodeComponent>;
  let debug: DebugElement;
  let htmlElem: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAddressCodeComponent], providers: [CodeMaintenanceService, { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ComponentFixtureAutoDetect, useValue: true }], imports: [ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule.forRoot([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddressCodeComponent);
  component = fixture.componentInstance;
  debug = fixture.debugElement.nativeElement;// fixture.debugElement.query(By.css('p'));
  htmlElem = debug.nativeElement;
  component.ngOnInit();
  });

  it('Case: Form invalid when empty', () => {
    expect(component.addAddressForm.valid).toBeFalsy();
  });

  it('Code field required', () => {
    let errors = {};
    let code = component.addAddressForm.controls['code'];
    errors = code.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('Description field is required', () => {
    let errors = {};
    let description = component.addAddressForm.controls['description'];
    errors = description.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('French Description field is not required', () => {
    let errors = {};
    let frenchDescription = component.addAddressForm.controls['frenchDescription'];
    errors = frenchDescription.errors || {};
    expect(errors['required']).not.toBeTruthy();
  });


  it('Case : on submitting a form', () => {
    expect(component.addAddressForm.valid).toBeFalsy();
    component.addAddressForm.controls['code'].setValue("test code");
    component.addAddressForm.controls['description'].setValue("test description");
    component.addAddressForm.controls['frenchDescription'].setValue("test frenchDescription");
    expect(component.addAddressForm.valid).toBeTruthy();
    let obj: AddressCodeModel;
   // obj = new AddressCodeModel('test code', 'test description');
   // expect(obj).not.toBeUndefined();
   // component.onSubmit();
   //expect(obj.code).toBe("test code");
  // expect(obj.description).toBe("test description");
    //expect(obj.frenchDescription).toBe("test frenchDescription");
  });
});
