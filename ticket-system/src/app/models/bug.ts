import { Ticket } from './ticket';
import { ITickets } from '../i-tickets';

export class Bug extends Ticket {
    // * Ticket Title
    // * Ticket Date
    // * Ticket Description
    // * Ticket Effort

    constructor(option: ITickets) {
        super(option);
        this.title = option.title;
        this.description = option.description;
        this.effort = option.effort;
        this.date = option.date;
    }

}
