import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { CustomerService } from './customer.service';



@Injectable()
export class CustomerResolver implements Resolve<any> {

    constructor(
        public customerService: CustomerService,
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const customerId = route.params['id'];
        return this.customerService.getCustomerbyId(customerId);
    }
}