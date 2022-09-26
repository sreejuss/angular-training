import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PRODUCTS_API, search_API } from '../apis/api';

@Injectable({
  providedIn: 'root'
})
export class service {


  constructor(private _http:HttpClient) { }

  getProducts():Observable<any[]>{
    return this._http.get<any[]>(PRODUCTS_API);
  }

  deleteProduct(productId:number){
    return this._http.delete(`${PRODUCTS_API}/${productId}`);
  }

  addProduct(product:any){
    return this._http.post(`${PRODUCTS_API}/add`,product);
  }

  searchProduct(searchKeyword:string){
    return this._http.get<any[]>(`${PRODUCTS_API}/search?q=${searchKeyword}`);
  }

  

}