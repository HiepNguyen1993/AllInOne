import { FileUploader } from './../../../shared/@models/file-uploader.class';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alerts } from '../../../common/alerts';
import { TranslateService } from '../../../translate/translate.service';
import { PackageService } from '../@services/package.service';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {
  public form: FormGroup;
  public url = '';
  public uploader: FileUploader = new FileUploader({
    url: this.url,
    headers: [{ }]
  });;

  constructor(private fb: FormBuilder, private _translateService: TranslateService, private _packageService: PackageService) {
   }

  ngOnInit() {
    this.form = this.fb.group({
      'Name': ['', Validators.required],
      'Price': ['', Validators.required],
      'ThemeId': ['', Validators.required],
      'Description': ['', Validators.required],
      'ImgName': ['', Validators.required],
      'delFlag': [false]
    });
  }

  async savePackage() {
    try {
      this._packageService.insertPackage(this.form.value)
      .map(res => res.json())
      .subscribe(res => {
        if (res.status === 'success') {
          Alerts.successNotify('Done');
        } else {
          Alerts.errorNotify('Error');
        }
      });
    } catch (ex) {
      Alerts.errorNotify('Error');
    } finally {
    }
  }

  uploadFileClick() {
    this.uploader.queue.forEach(item => {
      this.UploadFile(item._file, `${item._file.name.split('.')[0]}.pdf`);
    });
  }
  UploadFile(data: any, fileName) {
    const file = new FormData();
    file.append('file', data);
    file.append('invoiceNo', this.form.controls['invoiceNo'].value);
    this._packageService.uploadImage(file).subscribe(res => {
      console.log(res);
    });
  }
}
