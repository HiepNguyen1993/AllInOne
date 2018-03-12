import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alerts } from '../../../common/alerts';
import { TranslateService } from '../../../translate/translate.service';
import { ProductTypeService } from '../@services/product-type.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private _translateService: TranslateService, private _productTypeService: ProductTypeService) { }

  ngOnInit() {
    this.form = this.fb.group({
      'Code': ['', Validators.required],
      'Name': ['', Validators.required],
      'Description': ['', Validators.required],
      'delFlag': [false]
    });
  }

  async saveProductType() {
    try {
      this._productTypeService.insertProductType(this.form.value)
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
}
