import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  private menuData = [
    {
      text: 'Control Panel', icon: 'fa fa-cogs', children: [
        {
          text: 'Level 2 Menu', icon: 'fa fa-home', children: [
            { text: 'Level 3 Menu', icon: 'fa fa-star', url: '/' }
          ]
        },
        { text: 'Not Found', icon: 'fa fa-close', url: '/404' }
      ]
    },
    {
      text: 'Demo Module', icon: 'fa fa-list', children: [
        { text: 'Demo Page1', icon: 'fa fa-home', url: '/demo1' },
        { text: 'Demo Page2', icon: 'fa fa-lock', url: '/demo1/page2' }
      ]
    }
  ]

  constructor() { }

  getMenuData() {
    return Promise.resolve(this.menuData);
  }
}