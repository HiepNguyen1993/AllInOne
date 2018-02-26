import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from './../../shared/helpers';
import { ScriptLoaderService } from './../../shared/services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _script: ScriptLoaderService, private _router: Router) {
    this._script.loadScripts('app-index', ['assets/app/js/dashboard.js']);
   }

  ngOnInit() {
  }

}
