import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit {

  private menuData: Array<any> = AppConf.menuData;

  constructor() { }

  ngOnInit() { }
}