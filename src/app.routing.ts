import { ModuleWithProviders, ApplicationRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http, ConnectionBackend } from '@angular/http';
import { ModuleLoaderService } from 'app/common';

import { AuthGuard } from './services';

import {
  NotFoundComponent,
  LoginComponent,
  LogoutComponent,
  LayoutComponent,
  HomeComponent
} from './pages';

const loadModule = (moduleName) => {
  return () => {
    return ModuleLoaderService.load(moduleName);
  };
};

// 定义模块 - URL 映射
let modules: Array<{ path: string, module: string }> = [
  { path: 'demo1', module: 'demo1' }
];

let dynamicRoutes = [];

modules.forEach(m => {
  dynamicRoutes.push({
    path: m.path,
    loadChildren: loadModule(m.module),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  });
});

const appRoutes: Routes = [{
  path: 'login', component: LoginComponent
}, {
  path: 'logout', component: LogoutComponent
}, {
  path: '', component: LayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
  children: [
    { path: '', component: HomeComponent },
    ...dynamicRoutes,
    { path: '**', component: NotFoundComponent }
  ]
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
