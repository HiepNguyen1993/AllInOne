import { Injectable } from '@angular/core';
@Injectable()
export class PackageUrl {
    private static DEFAULT = '/package';
    public static get CUSTOMER_URL(): string { return this.DEFAULT; }
    public static get UPLOAD_PACKAGE_IMAGE(): string { return this.DEFAULT + '/get-customer-list'; }
    public static get GET_PACKAGE_LIST(): string { return this.DEFAULT + '/get-package-list'; }
    public static get GET_PACKAGE_BY_ID(): string { return this.DEFAULT + '/get-package-by-id'; }
    public static get INSERT_PACKAGE(): string { return this.DEFAULT + '/insert-package'; }
    public static get UPDATE_PACKAGE(): string { return this.DEFAULT + '/update-package'; };
    public static get DELETE_PACKAGE(): string { return this.DEFAULT + '/delete-package'; };
}
