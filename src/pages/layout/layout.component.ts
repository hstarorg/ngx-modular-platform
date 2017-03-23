import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../services';

@Component({
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit {

  private menuData: Array<any> = [];

  constructor(private menuService: MenuService) {

  }

  ngOnInit() {
    this.menuService.getMenuData()
      .then(data => {
        this.menuData = data;
      });
  }
}