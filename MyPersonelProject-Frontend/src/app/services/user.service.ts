import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';


import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  apiUrl = "https://localhost:44358/api/users/";

  constructor(private httpClient:HttpClient) { }

   getUserByMail(email:string):Observable<ListResponseModel<User>>{
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl+"getusersdetailsbyemail?email="+email);
   }




}

