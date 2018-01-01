import { ApplicationRef, ModuleWithProviders } from '@angular/core';
import { ConnectionBackend, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ModuleLoaderService } from 'app/common';
import {
  HomeComponent,
  LayoutComponent,
  LoginComponent,
  LogoutComponent,
  NotFoundComponent
} from './pages';
import { AuthGuard } from './services';

const loadModule = (moduleName: string) => {
  return () => {
    return ModuleLoaderService.load(moduleName);
  };
};

// 定义模块 - URL 映射
let modules: Array<{ path: string; module: string }> = [
  { path: 'demo1', module: 'demo1' }
];

let dynamicRoutes: Routes = [];

modules.forEach(m => {
  dynamicRoutes.push({
    path: m.path,
    loadChildren: loadModule(m.module),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  });
});

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      ...dynamicRoutes,
      { path: '**', component: NotFoundComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});
