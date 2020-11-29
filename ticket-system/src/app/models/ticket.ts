import { ITickets } from '../i-tickets';

export class Ticket {

    // * Ticket Title
    // * Ticket Date
    // * Ticket Description
    // * Ticket Effort

    title: string;
    description: string;
    date: Date;
    effort: number;

    constructor(options: ITickets) {
        this.title = options.title;
        this.description = options.description;
        this.date = options.date;
        this.effort = options.effort;
    }
}
