import {
  Page1Component,
  Page2Component
} from './pages';
import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component },
];

export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);
