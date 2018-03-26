import { FileUploader } from './../../../shared/@models/file-uploader.class';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alerts } from '../../../common/alerts';
import { TranslateService } from '../../../translate/translate.service';
import { PackageService } from '../@services/package.service';
import { PackageModel } from '../@models/package.model';
import { ActivatedRoute } from '@angular/router';
import { PageMode } from '../../../common/const';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css'],
  providers:[PackageService]
})
export class PackageDetailComponent implements OnInit {
  public form: FormGroup;
  public url = '';
  public uploader: FileUploader = new FileUploader({
    url: this.url,
    headers: [{ }]
  });;
  public package: PackageModel = new PackageModel();
  public packageId = 0;
  public pageMode;
  public isPackageCustomer = true;

  constructor(private fb: FormBuilder, private _translateService: TranslateService, private _packageService: PackageService,
    private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    const paramSubs = this.activatedRoute.params
      .subscribe(params => {
        this.packageId = params['id'];

        if (this.activatedRoute.snapshot.data['package']) {
          console.log(this.activatedRoute.snapshot.data['package'].json());
          this.package.serialize(this.activatedRoute.snapshot.data['package'].json());
          this.pageMode = PageMode.EDIT;
          this.isPackageCustomer = false;
        }
    });

    this.initForm();
  }

  public initForm() {
    this.form = this.fb.group({
      'Name': [this.package.Name, Validators.required],
      'Price': [this.package.Price, Validators.required],
      'ThemeId': [this.package.ThemeId, Validators.required],
      'Description': [this.package.Description, Validators.required],
      'ImgName': [''],
      'delFlag': [false]
    });
  }

  async savePackage() {
    try {
      if(this.isPackageCustomer)
      {
        this._packageService.insertPackage(this.form.value)
        .map(res => res.json())
        .subscribe(res => {
          if (res.status === 'success') {
            Alerts.successNotify('Done');
          } else {
            Alerts.errorNotify('Error');
          }
        });
      }else{
        this._packageService.updatePackage(this.form.value)
        .map(res => res.json())
        .subscribe(res => {
          if (res.status === 'success') {
            Alerts.successNotify('Done');
          } else {
            Alerts.errorNotify('Error');
          }
        });
      }
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
