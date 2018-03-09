import { Injectable } from '@angular/core';
import { PackageModel } from '../@models/package.model';
import { HttpService } from '../../../../core/index';

@Injectable()
export class PackageService {

  constructor(private _httpService: HttpService) {
  }

  insertPackage(model: PackageModel){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const newLocal: any = { headers: headers };

    return this._httpService.post('/Package/insertPackage', model, newLocal);
  }

}
