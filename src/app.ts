import './styl/all.styl';

if (process.env.NODE_ENV === 'production') {
  require('./config/config.prod');
} else {
  require('./config/config.dev');
}

import { ModuleLoaderService } from 'app/common';
window['defineModule'] = ModuleLoaderService.defineModule;

export * from './app.module';
