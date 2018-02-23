import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { LoginService } from '../pages/login/@services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router, private activatedRoute: ActivatedRoute, private loginService: LoginService) {
    }

    // TODO: [DD] Just for work around. Will be updated later
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        try {
            await this.loginService.checkUserLogin().toPromise().then(res => {});
        } catch (error) {
            return;
        }

        if (localStorage.getItem('user_info') && JSON.parse(localStorage.getItem('user_info')).token) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
