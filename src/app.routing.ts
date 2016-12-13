import { ModuleWithProviders, ApplicationRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http, ConnectionBackend } from '@angular/http';

import { ModuleLoaderService } from './common_module';

import { HomeComponent } from './app';

const loadModule = (moduleName) => {
  return () => {
    return ModuleLoaderService.load(moduleName);
  }
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
  });
});

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  ...dynamicRoutes
];

console.log(appRoutes);

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });