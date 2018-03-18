import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AccountService } from './account.service';


@Injectable()
export class CustomerResolver implements Resolve<any> {

    constructor(
        public accountService: AccountService,
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const accountId = route.params['id'];
        return this.accountService.getAccountbyId(accountId);
    }
}