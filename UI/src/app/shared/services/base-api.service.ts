import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { GetResponse, PutResponse, GetSingleObjectResponse } from './../models/rest-api/Response';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from './../../app.constants'
import { DataManager, WebApiAdaptor, Predicate, Query } from "@syncfusion/ej2-data";
 

export class MyAdapter extends WebApiAdaptor {
//this is enable api execute filter in ignoreCase mode with any case operator
  onPredicate(predicate: Predicate, query: Query, requiresCast?: boolean) {
    predicate.ignoreCase = false;
    return super.onPredicate(predicate, query, false);

  }
  // this is enable api to execute contains filter as substringof is not supported 
   onWhere(filters: string[]): string
  {
    
    for(let i=0;i<filters.length;i++ )
    {
     if( filters[i].startsWith('substringof'))
     {
      let v = filters[i].replace('substringof','contains');
      let d = v.split(',');
      let j = d[0].split('(');
      let m = d[1].replace(')','');
      let s = j[0] + '(' + m + ',' + j[1] + ')';
       
      filters[i]=s;
     }
    }
    
    return super.onWhere(filters);
  }

   

}
@Injectable()
export class BaseApiService<T> {
  public api: string;
  public actionUrl = Constants.url;

  constructor(protected _http: HttpClient, route: ActivatedRoute) {
    //this.api = route.data['_value'].api;
  }

  getAll(): Observable<GetResponse<T>> {
    return this._http.get<GetResponse<T>>(`${this.actionUrl}${this.api}`);
  }

  get(id: string): Observable<GetResponse<T>> {
    return this._http.get<GetResponse<T>>(`${this.actionUrl}${this.api}/${id}`);
  }

  put(data: T): Observable<PutResponse<T>> {
    return this._http.put<PutResponse<T>>(`${this.actionUrl}${this.api}`, data);
  }

  post(data: T): Observable<PutResponse<T>> {
    return this._http.post<PutResponse<T>>(`${this.actionUrl}${this.api}`, data);
  }

  delete(id: string): Observable<any> {
    return this._http.delete(`${this.actionUrl}${this.api}/${id}`);

  }

  getDataFromDataManager(search: string): DataManager {
    //console.log(`${this.actionUrl}${this.api}`);
    if (search == undefined) {
      return new DataManager({
        url: `${this.actionUrl}${this.api}`,
        adaptor: new MyAdapter()
           });
    }
    else {
      return new DataManager({
        url: `${this.actionUrl}${this.api}` + "?$search=" + search,
        adaptor: new MyAdapter
      });
    }
  }

}
