import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/index';
import { ProductTypeModel } from '../@models/product-type.model';

@Injectable()
export class ProductTypeService {

  constructor(private _httpService: HttpService) { }

  insertProductType(model: ProductTypeModel){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const newLocal: any = { headers: headers };

    return this._httpService.post('/Product/insertProductType', model, newLocal);
  }

}
