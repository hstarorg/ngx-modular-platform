import './menu.component.styl';

import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

export interface MenuEntity {
  text: string;
  url?: string;
  children?: Array<MenuEntity>;
  $parent: MenuEntity | null;
  $active: boolean;
  $open: boolean;
  $hasChildren: boolean;
}

@Component({
  selector: 'j-menu',
  templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {
  private menus: Array<MenuEntity>;

  @Input()
  private set menuData(value: any) {
    this.processMenuData(value);
    this.menus = value;
  }

  constructor(private router: Router) {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this.setMenuStatus(evt.url);
      }
    });
  }

  ngOnInit() {}

  private onMenuClick(evt: MouseEvent, menu: MenuEntity) {
    evt.stopPropagation();
    if (menu.$hasChildren) {
      menu.$open = !menu.$open;
    } else {
      this.router.navigate([menu.url]);
    }
  }

  private findMenuByUrl(url: string, menus: Array<MenuEntity>): MenuEntity {
    for (let m of menus) {
      if (m.url && m.url === url) {
        return m;
      }
      if (m.$hasChildren) {
        let menu = this.findMenuByUrl(url, m.children);
        if (menu) {
          return menu;
        }
      }
    }
  }

  private processMenuData(
    menuData: Array<MenuEntity>,
    parent: MenuEntity = null
  ): void {
    if (!Array.isArray(menuData)) {
      return;
    }
    menuData.forEach(menu => {
      menu.$active = false;
      menu.$parent = parent;
      if (menu.children && menu.children.length > 0) {
        menu.$hasChildren = true;
        this.processMenuData(menu.children, menu);
      }
    });
  }

  private setAllMenuInActive(menus: Array<MenuEntity>) {
    menus.forEach(x => {
      x.$active = false;
      x.$open = false;
      if (x.$hasChildren) {
        this.setAllMenuInActive(x.children);
      }
    });
  }

  private setMenuFamilyActive(menu: MenuEntity) {
    menu.$open = true;
    if (menu.$parent) {
      this.setMenuFamilyActive(menu.$parent);
    }
  }

  private setMenuStatus(url: string) {
    setTimeout(() => {
      this.setAllMenuInActive(this.menus);
      let menu = this.findMenuByUrl(url, this.menus);
      if (menu) {
        menu.$active = true;
        this.setMenuFamilyActive(menu);
      }
    });
  }
}
