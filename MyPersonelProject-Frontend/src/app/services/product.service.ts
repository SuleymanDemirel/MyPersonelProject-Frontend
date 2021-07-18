import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import {  ProductDetails } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44358/api/"
  constructor( private httpClient:HttpClient) { }

  getProductsDetails():Observable<ListResponseModel<ProductDetails>>{
    let newPath = this.apiUrl + "products/getproductdetails"
    return this.httpClient.get<ListResponseModel<ProductDetails>>(newPath)
  }


  getProductsDetailsById(id:number):Observable<ListResponseModel<ProductDetails>>{
    let newPath = this.apiUrl + "products/getproductdetailsbyid?id="+id;
    return this.httpClient.get<ListResponseModel<ProductDetails>>(newPath);
  }

}
