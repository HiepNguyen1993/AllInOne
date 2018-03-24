import { Component, OnInit } from '@angular/core';
import { AccountService } from '../@services/account.service';
import { Router } from '@angular/router';
import { TranslateService } from '../../../translate';
import { PageModel, PageResponse } from '../../../common/models';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css'],
  providers:[AccountService]
})
export class AccountOverviewComponent implements OnInit {

  public gridAccountApi;
  public gridAccountOptions;
  
  constructor(private _router: Router, private _translateService: TranslateService,
    private _accountService: AccountService) { }

  ngOnInit() {
    this.initCustomerGrid();
  }

  initCustomerGrid() {
    this.gridAccountOptions = {
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
                this._router.navigate(['/dsb/create-account']);
              });
          },
          itemTemplate: (_, item) => {
            // tslint:disable-next-line:quotemark
            return $("<input>").attr("type", "button").attr("class", "jsgrid-button jsgrid-edit-button")
              .on('click', () => {
                this._router.navigate(['dsb/edit-account/' + item.id]);
              });
          },
          align: 'center',
          width: 30
        },
        { name: 'id', title: 'Number', type: 'text', align: 'center', width: 30 },
        { name: 'name', title: 'Name', type: 'text' },
        { name: 'gender', title: 'Gender', type: 'text', itemTemplate: (_, item) => {
          if(item && item.gender){
            return "Male";
          }else  return "FeMale";
        } },
        { name: 'phone', title: 'Phone', type: 'text' },
        { name: 'address', title: 'Address', type: 'text' },
        { name: 'email', title: 'Email', type: 'text' },
        { name: 'isActive', title: 'Use', type: 'text', itemTemplate: (_, item) => {
          if(item && item.isActive){
            return "Active";
          }else  return "Inactive";
        } }
      ]
    };

    this.getAccountList();
  }

  getAccountList() {
    this.gridAccountApi = (paging: PageModel) => {
      return new Promise((resolve) => {
        this._accountService.getAccountList({}, paging).subscribe(res => {
          resolve(new PageResponse(res.json()));
        }, error => {
          console.log('Error: ' + error);
        });
      });
    };
  }
}

