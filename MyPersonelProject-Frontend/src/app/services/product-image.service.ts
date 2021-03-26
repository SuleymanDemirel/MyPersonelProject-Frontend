import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductImage } from '../models/productImage';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  apiUrl = "https://localhost:44358/api/"

  constructor( private httpClient:HttpClient) { }
  
  getAllProductImages():Observable<ListResponseModel<ProductImage>>{
    let newPath = this.apiUrl+"productsImage/getall";
    return this.httpClient.get<ListResponseModel<ProductImage>>(newPath);
  }


}
