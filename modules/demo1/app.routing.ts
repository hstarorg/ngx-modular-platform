import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  Page1Component,
  Page2Component
} from './pages';

const appRoutes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component },
];

export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);
