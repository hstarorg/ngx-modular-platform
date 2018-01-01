import './styl/all.styl';

import { ModuleLoaderService } from 'app/common';

if (process.env.NODE_ENV === 'production') {
  require('./config/config.prod');
} else {
  require('./config/config.dev');
}


window['defineModule'] = ModuleLoaderService.defineModule;

export * from './app.module';
