import { PackageUrl } from './../../../shared/urls/package.url';
import { Injectable } from '@angular/core';
import { PackageModel } from '../@models/package.model';
import { HttpService } from '../../../../core/index';

@Injectable()
export class PackageService {

  constructor(private _httpService: HttpService) {
  }

  insertPackage(model: PackageModel) {
    return this._httpService.postData(PackageUrl.INSERT_PACKAGE, model); 
  }

  updatePackage(model: PackageModel) {
    return this._httpService.postData(PackageUrl.UPDATE_PACKAGE, model); 
  }

  uploadImage(file: any) {
    return this._httpService.uploadFile(PackageUrl.UPLOAD_PACKAGE_IMAGE, file);
  }

  getPackageList(params: any, paging) {
    return this._httpService.getQueries(PackageUrl.GET_PACKAGE_LIST, _.assign({}, params, paging));
  }

  getPackagebyId(id: string) {
    return this._httpService.getById(PackageUrl.GET_PACKAGE_BY_ID, id);
  }

}
