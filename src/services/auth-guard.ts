import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ModuleLoaderService } from 'app/common';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private moduleLoader: ModuleLoaderService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, isChild = false): Promise<boolean> {
    let moduleName = state.url.split('/')[1];
    if (!isChild && moduleName) {
      this.moduleLoader.useModuleStyles(moduleName);
    }
    return Promise.resolve(true);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state, true);
  }
}
