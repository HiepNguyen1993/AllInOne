import { ScriptLoaderService } from './../../shared/services/script-loader.service';
import { Component, OnInit } from '@angular/core';
import { Helpers } from '../../shared/helpers';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _script: ScriptLoaderService, private _router: Router) {
    $('body').css('background', 'none');
    this._script.loadScripts('app-index', ['assets/app/js/dashboard.js']);
  }

  ngOnInit() {
    this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/demo3/base/scripts.bundle.js'], true)
            .then(result => {
                Helpers.setLoading(false);
                // optional js to be loaded once
                this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js']);
            });
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                (<any>mLayout).closeMobileAsideMenuOffcanvas();
                (<any>mLayout).closeMobileHorMenuOffcanvas();
                (<any>mApp).scrollTop();
                Helpers.setLoading(true);
                // hide visible popover
                (<any>$('[data-toggle="m-popover"]')).popover('hide');
            }
            if (route instanceof NavigationEnd) {
                // init required js
                (<any>mApp).init();
                (<any>mUtil).init();
                Helpers.setLoading(false);
                // content m-wrapper animation
                let animation = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
                    $('.m-wrapper').removeClass(animation);
                }).removeClass(animation).addClass(animation);
            }
        });
  }

}
