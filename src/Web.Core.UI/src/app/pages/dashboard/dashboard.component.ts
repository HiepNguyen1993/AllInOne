import { ScriptLoaderService } from './../../shared/services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) {
    $('body').css('background', 'none');
    this._script.loadScripts('app-index', ['assets/app/js/dashboard.js']);
  }

  ngOnInit() {
  }

}
