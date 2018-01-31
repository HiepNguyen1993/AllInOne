import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/index';
import { LoginModel } from '../@models/login.model';
import { RequestOptionsArgs } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private _httpService: HttpService) {
  }
  checkUserLogin() {
    return this._httpService.get('/account/isLogin').map(res => res.json());
  }
  login(model: LoginModel) {
    // const credentials = `grant_type=password&username=${model.Username}&password=${model.Password}`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const newLocal: any = { headers: headers };

    return this._httpService.post('/Account/login', model, newLocal);
    // return this._httpService.postData('/Account/login', model);
  }
}
