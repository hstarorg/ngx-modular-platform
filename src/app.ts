require('./styl/all.styl');

import { ModuleLoaderService } from 'app/common';
window['defineModule'] = ModuleLoaderService.defineModule;

export * from './app.module';
