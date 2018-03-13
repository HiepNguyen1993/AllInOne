import { Injectable } from '@angular/core';
@Injectable()
export class PackageUrl {
    private static DEFAULT = '/package';
    public static get CUSTOMER_URL(): string { return this.DEFAULT; }
    public static get UPLOAD_PACKAGE_IMAGE(): string { return this.DEFAULT + '/get-customer-list'; }
}
