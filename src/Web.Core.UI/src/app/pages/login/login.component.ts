import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './@services/login.service';
import { AuthService } from '../../../core/index';
import { UserModel } from './@models/user.model';
import { Alerts } from '../../common/alerts';
import { TranslateService } from '../../translate/translate.service';
import { read } from 'fs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userModel = new UserModel();
  public form: FormGroup;
  public isLogin: Boolean = false;
  public isDataLoading = false;

  constructor(private _router: Router, private fb: FormBuilder, private _loginService: LoginService,
    private _authService: AuthService, private _translateService: TranslateService) { }

  ngOnInit() {
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['home']);
    }
    this.form = this.fb.group({
      'Username': ['', Validators.required],
      'Password': ['', Validators.required]
    });
  }
  async onSubmit() {
    this.isDataLoading = true;
    try {
      this._loginService.login(this.form.value)
      .map(res => res.json())
      .subscribe(res => {
        if (res.status === 'success') {
          this.userModel = res.result;
          this._authService.setUser<UserModel>(this.userModel);
          this._router.navigate(['./home']);
        } else {
          Alerts.errorNotify(this._translateService.translate('INCORRECT_USERNAME_PASSWORD'));
        }
      });
    } catch (ex) {
      Alerts.errorNotify(this._translateService.translate('INCORRECT_USERNAME_PASSWORD'));
    } finally {
      this.isDataLoading = false;
    }
  }

}
