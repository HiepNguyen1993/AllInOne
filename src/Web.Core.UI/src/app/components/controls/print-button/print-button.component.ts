import { Router } from '@angular/router';
import { SharingService } from './../../../shared/services/sharing.service';
import { Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'p-print-button',
  templateUrl: './print-button.component.html',
  styleUrls: ['./print-button.component.css']
})
export class PrintButtonComponent implements OnInit {
  public _apiEvent: Promise<any>;
    // two-way binding [apiEvent]
    @Output() apiEventChange: EventEmitter<any> = new EventEmitter<any>();
    @Input()
    set apiEvent(value) {
      this._apiEvent = value;
      this.apiEventChange.emit(value);
    }
    get apiEvent() {
      return this._apiEvent;
    }
  constructor(
    public elemRef: ElementRef,
    public sharing: SharingService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  print() {
    this.sharing.setPrintPromise(this.apiEvent);
    this.router.navigate(['print']);
  }
}
