import { Ticket } from './ticket';

export class Enhancement extends Ticket{

    // Product
    // * Client Description
    clientDescription: string;
    product: string;

    constructor(option: Ticket) {
        super(option);
        this.title = option.title;
        this.description = option.description;
        this.effort = option.effort;
        this.date = option.date;
    }

    get getclientDescription(): string {
        return this.clientDescription;
    }

    set setclientDescription(value: string) {
        // tslint:disable-next-line:triple-equals
        if (value == null || value == undefined || value == '') {
            this.clientDescription = 'Short';
        }
        else {
            this.clientDescription = value;
        }
    }

    get getproduct(): string {
        return this.product;
    }

    set setproduct(value: string) {
        // tslint:disable-next-line:triple-equals
        if (value == null || value == undefined || value == '') {
            this.product = 'Short';
        }
        else {
            this.product = value;
        }
    }
}
