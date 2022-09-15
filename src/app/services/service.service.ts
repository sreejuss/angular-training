import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PRODUCTS_API } from '../apis/api';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {


  constructor(private _http:HttpClient) { }
  getProducts():Observable<any[]>{
    return this._http.get<any[]>(PRODUCTS_API);
  }

}