import { LightningElement, wire } from 'lwc';
import { routeParams, history } from '@lwce/router';

export default class Product extends LightningElement {
    @wire(routeParams) params;
    @wire(history) history;

    constructor() {
        super();
        this.target = this;
    }

    renderedCallback() {
        console.log(this.history);
    }
}
