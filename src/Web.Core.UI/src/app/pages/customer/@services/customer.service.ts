import { CustomerUrl } from './../../../shared/urls/customer.url';
import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/index';
import { CustomerModel } from '../@models/customer.model';

@Injectable()
export class CustomerService {

  constructor( private _httpService: HttpService
  ) { }

  getCustomerList(params: any, paging) {
    return this._httpService.getQueries(CustomerUrl.GET_CUSTOMER_LIST, _.assign({}, params, paging));
  }

  getCustomerbyId(id: string) {
    return this._httpService.getById(CustomerUrl.GET_CUSTOMER_BY_ID, id);
  }

  insertCustomer(model: CustomerModel) {
    return this._httpService.postData(CustomerUrl.INSERT_CUSTOMER, model);
  }

  updateCustomer(model: CustomerModel) {
    return this._httpService.postData(CustomerUrl.UPDATE_CUSTOMER, model);
  }

  uploadImage(file: any) {
    return this._httpService.uploadFile(CustomerUrl.UPLOAD_CUSTOMER_IMAGE, file);
  }
}
