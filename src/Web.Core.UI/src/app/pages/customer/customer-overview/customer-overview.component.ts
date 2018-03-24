import { PageResponse } from './../../../common/models';
import { CustomerService } from './../@services/customer.service';
import { TranslateService } from './../../../translate/translate.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PageModel } from '../../../common/models';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css'],
  providers:[CustomerService]
})
export class CustomerOverviewComponent implements OnInit {
  public gridCustomerApi;
  public gridCustomerOptions;

  constructor(private _router: Router, private _translateService: TranslateService,
    private _customerService: CustomerService) { }

  ngOnInit() {
    this.initCustomerGrid();
  }

  initCustomerGrid() {
    this.gridCustomerOptions = {
      paging: true,
      height: 300,
      pageSize: 12,
      fields: [
        {
          headerTemplate: () => {
            return $(`<a style="color:green" href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom">
              <i class="fa fa-plus"></i> ${this._translateService.translate('New')}
              </a>`)
              .on('click', (e) => {
                this._router.navigate(['/dsb/create-customer']);
              });
          },
          itemTemplate: (_, item) => {
            // tslint:disable-next-line:quotemark
            return $("<input>").attr("type", "button").attr("class", "jsgrid-button jsgrid-edit-button")
              .on('click', () => {
                this._router.navigate(['dsb/edit-customer/' + item.id]);
              });
          },
          align: 'center',
          width: 30
        },
        { name: 'id', title: 'Number', type: 'text', align: 'center', width: 30 },
        { name: 'fullname', title: 'Name', type: 'text' },
        { name: 'gender', title: 'Gender', type: 'text', itemTemplate: (_, item) => {
          if(item && item.gender){
            return "Male";
          }else  return "Female";
        }  },
        { name: 'phone', title: 'Phone', type: 'text' },
        { name: 'address', title: 'Address', type: 'text' },
        { name: 'email', title: 'Email', type: 'text' },
        { name: 'delFlag', title: 'Use', type: 'text', itemTemplate: (_, item) => {
          if(item && item.delFlag){
            return "Deleted";
          }else  return "Used";
        } }
      ]
    };

    this.getCustomerList();
  }

  getCustomerList() {
    this.gridCustomerApi = (paging: PageModel) => {
      return new Promise((resolve) => {
        this._customerService.getCustomerList({}, paging).subscribe(res => {
          resolve(new PageResponse(res.json()));
        }, error => {
          console.log('Error: ' + error);
        });
      });
    };
  }

}
