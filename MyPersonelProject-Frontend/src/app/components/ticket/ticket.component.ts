import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets:Ticket[];
  constructor(private ticketService:TicketService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.ticketService.getAll().subscribe(response=>{
      this.tickets = response.data
    })
  }

}
