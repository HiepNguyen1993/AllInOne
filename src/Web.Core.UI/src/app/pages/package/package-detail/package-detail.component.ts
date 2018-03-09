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

  constructor(private fb: FormBuilder, private _translateService: TranslateService, private _packageService: PackageService) { }

  ngOnInit() {
    this.form = this.fb.group({
      'Name': ['', Validators.required],
      'Price': ['', Validators.required],
      'ThemeId': ['', Validators.required],
      'Description': ['', Validators.required],
      'delFlag': [false]
    });
  }

  async savePackage() {
    try {
      this._packageService.insertPackage(this.form.value)
      .map(res => res.json())
      .subscribe(res => {
        if (res.status === 'success') {
          Alerts.successNotify("Done");
        } else {
          Alerts.errorNotify("Error");
        }
      });
    } catch (ex) {
      Alerts.errorNotify("Error");
    } finally {
    }
  }
}
