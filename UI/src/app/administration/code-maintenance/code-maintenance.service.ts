import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ExpenseCodeModel, CodeModel } from '../../models/code-maintenance';
import { Constants } from '../../app.constants';
import { Validators, FormGroup } from "@angular/forms";
import { ExtendedFormControl } from "@ccs/shared";
import { error } from 'util';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { ApplicationErrorHandler } from '../../shared/services/index';
import { WebApiAdaptor, DataManager } from '@syncfusion/ej2-data';


export class MyAdaptor extends WebApiAdaptor {
  processResponse() {
    let original = super.processResponse.apply(this, arguments);
    original.result = original.values;
    original.count = original.totalRowCount;
    return original;
  }
}


@Injectable()
export class CodeMaintenanceService {

  url = Constants.URL_EXPENSE_CODE;
  addressUrl = Constants.URL_ADDRESS_CODE;

  constructor(private http: HttpClient) {
  }

  //Fetch all ExpenseCodesModel

  async getAllExpenseCodes(): Promise<any> {
    return await this.http.get(this.url).toPromise().then(res => res).catch(err => this.handleError(err));
  }

  // Fetch Expense Code by code
  async getExpenseCodeByCode(code: string): Promise<any> {
    return await this.http.get(this.url + '/' + code).toPromise().then(res => res).catch(err => this.handleError(err));
  }

  //Create new expense code and Update Expense Code
  async updateExpenseCode(expenseCodeModel: ExpenseCodeModel): Promise<any> {
    return await this.http.put(this.url, expenseCodeModel).toPromise().then(res => res).catch(err => this.handleError(err));
  }
  //Delete Expense Codes By code
  async deleteExpenseCodeByCode(code: string): Promise<any> {
    return await this.http.delete(this.url + '/' + code).toPromise().then(res => res).catch(err => this.handleError(err));

  }
  public getExpenseCodeByCodeForView(code: string): Observable<any> {
    return this.http.get(this.url + '/' + code);//.toPromise().then(res => res);;
  }

  // Address Codes module

  getAddressCodes(): DataManager {
    return new DataManager({
      url: this.addressUrl,
      adaptor: new MyAdaptor
    });
  }

  // async getAddressCodes(): Promise<any> {
  //   return await this.http.get(this.addressUrl).toPromise().then(res => res).catch(err => this.handleError(err));
  // }

  async updateAddressCodes(addressCodeModel: CodeModel): Promise<any> {
    return await this.http.put(this.addressUrl, addressCodeModel).toPromise().then(res => res).catch(err => this.handleError(err));
  }

  async getAddressCodeByCode(code: string): Promise<any> {
    return await this.http.get(this.addressUrl + '/' + code).toPromise().then(res => res).catch(err => this.handleError(err));
  }
  async deleteAddressCodeByCode(code: string): Promise<any> {
    return await this.http.delete(this.addressUrl + '/' + code).toPromise().then(res => res).catch(err => this.handleError(err));

  }

  private handleError(error: Response | any) {
    return new ApplicationErrorHandler(error);
  }

  toFormGroup(formFeilds: any[], questionsMetaData: any[]) {
    let group: any = {};

    formFeilds.forEach(question => {

      var filtered = questionsMetaData.filter(x => x['fieldName'] == question.key);
      var questionMetaData: any = filtered.length == 1 ? questionMetaData = filtered[0] : null;

      var validationArray = [];
      var errorMessages: any = {};

      var required = questionMetaData.required && questionMetaData.required.value;
      if (required) {
        validationArray.push(Validators.required);
        errorMessages['required'] = questionMetaData.required.msg;
      }
      if (questionMetaData.email != undefined) {
        var email = questionMetaData.email;
        if (email) {
          validationArray.push(Validators.email);
          errorMessages['email'] = questionMetaData.email.msg;
        }
      }

      if (questionMetaData.minLength != undefined) {
        var minLength = questionMetaData.minLength.value;
        //if (filtered < minLength) {
        //  validationArray.push(Validators.minLength(minLength.value));
        //  errorMessages['minLength'] = questionMetaData.minLength.msg;
        // }
      }
      //  var minLength = questionMetaData.email && questionMetaData.minLength;
      // if (minLength && minLength.value) {
      //    validationArray.push(Validators.minLength(minLength.value));
      //    errorMessages['minLength'] = questionMetaData.minLength.msg;
      //  }

      var maxLength = questionMetaData.email && questionMetaData.maxLength;
      if (maxLength && maxLength.value) {
        validationArray.push(Validators.maxLength(maxLength.value));
        errorMessages['maxLength'] = questionMetaData.maxLength.msg;
      }

      group[question.key] = new ExtendedFormControl(question.value || '', validationArray, null, errorMessages);

    });
    return new FormGroup(group);

  }
}
