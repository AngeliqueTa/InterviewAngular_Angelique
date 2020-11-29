import { Component, OnInit } from '@angular/core';
import { TicketServiceService } from '../services/ticket-service.service';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss'],
  providers:  [ TicketServiceService ]
})
export class ViewTicketsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
