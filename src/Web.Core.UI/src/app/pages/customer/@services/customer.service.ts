import { CustomerUrl } from './../../../shared/urls/customer.url';
import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/index';

@Injectable()
export class CustomerService {

  constructor( private _httpService: HttpService
  ) { }

  getCustomerList(params: any, paging) {
    return this._httpService.getQueries(CustomerUrl.GET_CUSTOMER_LIST, _.assign({}, params, paging));
  }

}
