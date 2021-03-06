import { FileUploader } from './../../../shared/@models/file-uploader.class';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alerts } from '../../../common/alerts';
import { TranslateService } from '../../../translate/translate.service';
import { CustomerService } from '../@services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerModel } from '../@models/customer.model';
import { PageMode } from '../../../common/const';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers:[CustomerService]
})
export class CustomerDetailComponent implements OnInit {
  public form: FormGroup;
  public url = '';
  public uploader: FileUploader = new FileUploader({
    url: this.url,
    headers: [{ }]
  });;
  public customer: CustomerModel = new CustomerModel();
  public accountId = 0;
  public pageMode;
  public isNewCustomer = true;
  public genderList = [{id: 'false', displayName: 'Male'}, {id: 'true', displayName: 'Female'}];

  constructor(private fb: FormBuilder, private _translateService: TranslateService, private _customerService: CustomerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // get Account ID
    const paramSubs = this.activatedRoute.params
      .subscribe(params => {
        this.accountId = params['id'];

        if (this.activatedRoute.snapshot.data['customer']) {
          console.log(this.activatedRoute.snapshot.data['customer'].json());
          this.customer.serialize(this.activatedRoute.snapshot.data['customer'].json());
          this.pageMode = PageMode.EDIT;
          this.isNewCustomer = false;
        }
      });

    this.initForm();
  }

  public initForm() {
    this.form = this.fb.group({
      'Id': [this.customer.Id || 0],
      'Fullname': [this.customer.Name, Validators.required],
      'Gender': [this.customer.Gender? this.customer.Gender.toString() : 'true'],
      'Phone': [this.customer.Phone, Validators.required],
      'ImgName': [this.customer.ImgName],
      'Email': [this.customer.Email, Validators.required],
      'Address': [this.customer.Address],
      'delFlag': [false]
    });
  }

  async saveCustomer() {
    try {
      if(this.isNewCustomer)
      {
        this._customerService.insertCustomer(this.form.value)
        .map(res => res.json())
        .subscribe(res => {
          if (res.status === 'success') {
            Alerts.successNotify('Done');
          } else {
            Alerts.errorNotify('Error');
          }
        });
      }else{
        this._customerService.updateCustomer(this.form.value)
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
    this._customerService.uploadImage(file).subscribe(res => {
      console.log(res);
    });
  }
}
