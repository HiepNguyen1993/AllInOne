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

  uploadImage(file: any) {
    return this._httpService.uploadFile(PackageUrl.UPLOAD_PACKAGE_IMAGE, file);
  }

}
