import { Injectable } from '@angular/core';
@Injectable()
export class AccountUrl {
    private static DEFAULT = '/account';
    public static get ACCOUNT_URL(): string { return this.DEFAULT; };
    public static get GET_ACCOUNT_LIST(): string { return this.DEFAULT + '/get-account-list'; };
    public static get GET_ACCOUNT_BY_ID(): string { return this.DEFAULT + '/get-account-by-id'; };
    public static get INSERT_ACCOUNT(): string { return this.DEFAULT + '/insert-account'; };
    public static get UPDATE_ACCOUNT(): string { return this.DEFAULT + '/update-account'; };
    public static get DELETE_ACCOUNT(): string { return this.DEFAULT + '/delete-account'; };
    public static get UPLOAD_ACCOUNT_IMAGE(): string { return this.DEFAULT + '/upload-account-image'; };
}
