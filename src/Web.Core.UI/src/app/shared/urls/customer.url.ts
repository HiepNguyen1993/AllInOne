import { Injectable } from '@angular/core';
@Injectable()
export class CustomerUrl {
    private static DEFAULT = '/customer';
    public static get CUSTOMER_URL(): string { return this.DEFAULT; };
    public static get GET_CUSTOMER_LIST(): string { return this.DEFAULT + '/get-customer-list'; };
    public static get GET_CUSTOMER_BY_ID(): string { return this.DEFAULT + '/get-customer-by-id'; };
    public static get INSERT_CUSTOMER(): string { return this.DEFAULT + '/insert-customer'; };
    public static get UPDATE_CUSTOMER(): string { return this.DEFAULT + '/update-customer'; };
    public static get DELETE_CUSTOMER(): string { return this.DEFAULT + '/delete-customer'; };
    public static get UPLOAD_CUSTOMER_IMAGE(): string { return this.DEFAULT + '/upload-customer-image'; };
}
