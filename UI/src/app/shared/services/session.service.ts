import { Injectable } from '@angular/core';
import { SessionModel } from 'app/models/SessionModel';

@Injectable()
export class SessionService {

  constructor() { }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string) {
    return localStorage.getItem(key);
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
  removeall() {
    localStorage.clear();
  }
  getAll() {
    return null;
  }
  getAsObject(key: string) {
    if (localStorage[key] !== undefined) {
      return JSON.parse(localStorage.getItem(key));
    }
    else {
      return JSON.parse("{}");
    }

  }
}

