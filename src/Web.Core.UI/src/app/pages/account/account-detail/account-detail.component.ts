import { FileUploader } from './../../../shared/@models/file-uploader.class';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alerts } from '../../../common/alerts';
import { TranslateService } from '../../../translate/translate.service';
import { AccountService } from '../@services/account.service';
import { ActivatedRoute } from '@angular/router';
import { AccountModel } from '../@models/account.model';
import { PageMode } from '../../../common/const';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
  providers:[AccountService]
})
export class AccountDetailComponent implements OnInit {

  public form: FormGroup;
  public url = '';
  public uploader: FileUploader = new FileUploader({
    url: this.url,
    headers: [{ }]
  });;
  public account: AccountModel = new AccountModel();
  public accountId = 0;
  public pageMode;
  public isNewAccount = true;

  public genderList = [{id: 0, displayName: 'Male'}, {id: 1, displayName: 'Female'}];

  constructor(private fb: FormBuilder, private _translateService: TranslateService, private _accountService: AccountService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // get Account ID
    const paramSubs = this.activatedRoute.params
      .subscribe(params => {
        this.accountId = params['id'];

        if (this.activatedRoute.snapshot.data['account']) {
          console.log(this.activatedRoute.snapshot.data['account'].json());
          this.account.serialize(this.activatedRoute.snapshot.data['account'].json());
          this.pageMode = PageMode.EDIT;
          this.isNewAccount = false;
        }
      });
    
    this.initForm();
  }

  async saveAccount() {
    try {
      if(this.isNewAccount){
        //insert New Account
        this._accountService.insertAccount(this.form.value)
        .map(res => res.json())
        .subscribe(res => {
          if (res.status === 'success') {
            Alerts.successNotify('Done');
          } else {
            Alerts.errorNotify('Error');
          }
        });
      }else{
        //update Account
        this._accountService.updateAccount(this.form.value)
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
    this._accountService.uploadImage(file).subscribe(res => {
      console.log(res);
    });
  }

  public initForm() {
    this.form = this.fb.group({
      'Id': [this.account.Id || 0],
      'Name': [this.account.Name, Validators.required],
      'Gender': [false],
      'Phone': [this.account.Phone, Validators.required],
      'Email': [this.account.Email, Validators.required],
      'ImgName': [this.account.ImgName],
      'Address': [this.account.Address, Validators.required],
      'Login': [this.account.Login, Validators.required],
      'Password': [this.account.Password, Validators.required],
      'CreateDate': [this.account.CreateDate],
      'isActive': [true],
      'delFlag': [false]
    });
  }
}
