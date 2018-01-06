import {Injectable} from '@angular/core';
import {ValidationField} from './model/validation-field';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { Constants } from '../../app.constants';
@Injectable()
export class ValidationService {

  constructor(private http: HttpClient) {
  }

  getFormValidators(api: string): Observable<Map<string, ValidationField>> {
    // later here we will call http service to get validation from api
    return this.getFormValidatorsFromFile(`${api}.json`);
  }

  getSecondaryFormValidators(): Observable<Map<string, ValidationField>> {
    return this.getFormValidatorsFromFile('mock-form-secondary.json');
  }

  getFormValidatorsFromFile(fileName: string): Observable<Map<string, ValidationField>> {
    return this.http.get<Map<string, ValidationField>>(`./assets/${fileName}`);
  }

  getValidationFor(api: string): Observable<Map<string, ValidationField>> {
    return this.http.get<Map<string, ValidationField>>(`${Constants.url}${api}/validations`);
  }
}
