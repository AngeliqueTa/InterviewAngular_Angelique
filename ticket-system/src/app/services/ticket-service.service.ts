import { Injectable } from '@angular/core';
import { BaseService } from '../models/base-service';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService extends BaseService{

  private tickets: Ticket[] = [];



  // getTickets() {
  //   this.service.getAll(Ticket).then( (tickets: Ticket[]) => {
  //     this.logger.log(`Fetched ${tickets.length} heroes.`);
  //     this.tickets.push(...tickets); // fill cache
  //   });
  //   return this.tickets;
  // }
}
