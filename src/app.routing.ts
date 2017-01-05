import { ModuleWithProviders, ApplicationRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http, ConnectionBackend } from '@angular/http';

import { ModuleLoaderService } from 'app/common';
import { AuthGuard } from './services';
import {
  HomeComponent,
  NotFoundComponent
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
  path: 'system', redirectTo: '/'
}, ...dynamicRoutes, {
  path: '', component: HomeComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
  children: [

  ]
}, {
  path: '**', component: NotFoundComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
