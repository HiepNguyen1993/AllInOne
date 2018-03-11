import { Injectable } from '@angular/core';
@Injectable()
export class CustomerUrl {
    private static DEFAULT = '/customer';
    public static get CUSTOMER_URL(): string { return this.DEFAULT; }
    public static get GET_CUSTOMER_LIST(): string { return this.DEFAULT + '/get-customer-list'; }
}
