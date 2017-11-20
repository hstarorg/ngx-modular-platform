import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { MenuService } from '../../services';
import { NotFoundComponent } from '../404/notfound.component';

interface PageEntity {
  header: string,
  comp: any,
  name: string
}

@Component({
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit {

  private menuData: Array<any> = [];
  public pageList: PageEntity[] = [{
    header: 'Home',
    comp: HomeComponent,
    name: 'page1'
  }];
  public selectedPage = 'page1';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {
  }

  ngOnInit() {
    this.watchRouterChange();
    this.menuService.getMenuData()
      .then(data => {
        this.menuData = data;
      });
  }

  private watchRouterChange() {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        let pageComponent;
        try {
          let nextRoute = this.route.children[0].children[0];
          pageComponent = nextRoute.component;
        } catch (e) {
          pageComponent = NotFoundComponent;
        }
        let idx = this.pageList.length + 1;
        this.pageList.push({
          header: `页面${idx}`,
          comp: pageComponent,
          name: `page${idx}`
        });
        setTimeout(() => {
          this.selectedPage = `page${idx}`;
        });
      }
    });
  }
}
