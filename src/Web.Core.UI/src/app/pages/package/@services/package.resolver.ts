import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { PackageService } from './package.service';



@Injectable()
export class PackageResolver implements Resolve<any> {

    constructor(
        public packageService: PackageService,
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const packageId = route.params['id'];
        return this.packageService.getPackagebyId(packageId);
    }
}