import { Component, OnInit } from '@angular/core';
import { PackageService } from '../@services/package.service';
import { Router } from '@angular/router';
import { TranslateService } from '../../../translate';
import { PageModel, PageResponse } from '../../../common/models';

@Component({
  selector: 'app-package-overview',
  templateUrl: './package-overview.component.html',
  styleUrls: ['./package-overview.component.css'],
  providers:[PackageService]
})
export class PackageOverviewComponent implements OnInit {

  public gridPackageApi;
  public gridPackageOptions;

  constructor(private _router: Router, private _translateService: TranslateService,
    private _packageService: PackageService) { }

  ngOnInit() {
    this.initPackageGrid();
  }

  initPackageGrid() {
    this.gridPackageOptions = {
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
                this._router.navigate(['/dsb/create-package']);
              });
          },
          itemTemplate: (_, item) => {
            // tslint:disable-next-line:quotemark
            return $("<input>").attr("type", "button").attr("class", "jsgrid-button jsgrid-edit-button")
              .on('click', () => {
                this._router.navigate(['dsb/edit-package/' + item.id]);
              });
          },
          align: 'center',
          width: 30
        },
        { name: 'id', title: 'Number', type: 'text', align: 'center', width: 30 },
        { name: 'name', title: 'Name', type: 'text' },
        { name: 'price', title: 'Price', type: 'text'},
        { name: 'themeId', title: 'ThemeId', type: 'text' },
        { name: 'description', title: 'Description', type: 'text' }
      ]
    };

    this.getPakageList();
  }

  getPakageList() {
    this.gridPackageApi = (paging: PageModel) => {
      return new Promise((resolve) => {
        this._packageService.getPackageList({}, paging).subscribe(res => {
          resolve(new PageResponse(res.json()));
        }, error => {
          console.log('Error: ' + error);
        });
      });
    };
  }

}
