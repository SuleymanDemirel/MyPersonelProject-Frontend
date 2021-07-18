import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { Ticket } from '../models/ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  
  apiUrl = "https://localhost:44358/api/"
  constructor(private httpClient:HttpClient) { }

 

  add(ticket:Ticket):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"tickets/add",ticket)
   }

   getAll():Observable<ListResponseModel<Ticket>>{
    return this.httpClient.get<ListResponseModel<Ticket>>(this.apiUrl+"tickets/getall")
   }
}
