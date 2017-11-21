import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { Injectable } from '@angular/core';
import { ModuleLoaderService } from 'app/common';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private moduleLoader: ModuleLoaderService
  ) {
    this.router.events.subscribe(evt => {
      let NProgress = (window as any).NProgress;
      if (evt instanceof NavigationStart) {
        NProgress.start();
      } else if (evt instanceof NavigationEnd || evt instanceof NavigationError) {
        let ga = window['ga'];
        // tslint:disable-next-line:no-unused-expression
        ga && ga('send', 'pageview', this.router.url);
        NProgress.done();
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, isChild = false): Promise<boolean> {
    let moduleName = state.url.split('/')[1];
    if (!isChild) {
      this.moduleLoader.useModuleStyles(moduleName);
    }
    return Promise.resolve(true);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state, true);
  }
}
