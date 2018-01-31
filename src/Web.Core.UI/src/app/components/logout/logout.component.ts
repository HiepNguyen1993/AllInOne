import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/index';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _router: Router, private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.clearUserInfo();
    this._router.navigate(['login']);
  }

}
