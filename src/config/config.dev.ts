const configDev = {
  modulePath: 'modules/',
  menuData: [
    {
      text: 'Test Menu', icon: 'fa fa-list', children: [
        {
          text: 'Home Page', icon: 'fa fa-home', children: [
            { text: 'Trusty Home Page', icon: 'fa fa-lock', url: '/' }
          ]
        },
        { text: 'Demo Page', icon: 'fa fa-star', url: '/demo1' },
        { text: 'Demo Page2', icon: 'fa fa-star', url: '/demo1/page2' }
      ]
    },
    {
      text: 'Invalid Menu', icon: 'fa fa-list', children: [
        { text: 'Test Page 1', icon: 'fa fa-home', url: '/test1' },
        { text: 'Test Page 2', icon: 'fa fa-star', url: '/test2' }
      ]
    }
  ]
};

window['AppConf'] = configDev;
