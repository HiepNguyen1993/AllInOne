import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/index';
import { AccountModel } from '../@models/account.model';
import { AccountUrl } from '../../../shared/urls/account.url';

@Injectable()
export class AccountService{

  constructor(private _httpService: HttpService) { }

  insertAccount(model: AccountModel) {
    return this._httpService.postData(AccountUrl.INSERT_ACCOUNT, model);
  }

  updateAccount(model: AccountModel) {
    return this._httpService.postData(AccountUrl.UPDATE_ACCOUNT, model);
  }

  uploadImage(file: any) {
    return this._httpService.uploadFile(AccountUrl.UPLOAD_ACCOUNT_IMAGE, file);
  }

  getAccountbyId(id: string) {
    return this._httpService.getById(AccountUrl.GET_ACCOUNT_BY_ID, id);
  }

  getAccountList(params: any, paging) {
    return this._httpService.getQueries(AccountUrl.GET_ACCOUNT_LIST, _.assign({}, params, paging));
  }
}
