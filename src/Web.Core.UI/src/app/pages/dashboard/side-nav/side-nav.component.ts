import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let mLayout: any;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {

    mLayout.initAside();

}

}
