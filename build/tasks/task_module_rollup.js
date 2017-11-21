const path = require('path');
const fs = require('fs');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const sourcemaps = require('rollup-plugin-sourcemaps');
const uglify = require('rollup-plugin-uglify');
const buildOptimizer = require('rollup-plugin-angular-optimizer').default;

const globals = {
  '@angular/animations': 'ng.animations',
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/compiler': 'ng.compiler',
  '@angular/forms': 'ng.forms',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  'rxjs': 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/observable/fromPromise': 'Rx.Observable',
  'rxjs/observable/forkJoin': 'Rx.Observable',
  'rxjs/operator/map': 'Rx.Observable.prototype',
  'app/common': 'app.common'
};

const getModules = () => {
  let modulesFolder = path.join(__dirname, '../../modules');
  return fs.readdirSync(modulesFolder).filter(name => {
    let modulePath = path.join(modulesFolder, name);
    return fs.statSync(modulePath).isDirectory();
  });
}

module.exports = (gulp, params) => {
  gulp.task('modules-rollup', done => {
    let modules = getModules();
    modules.forEach(async (moduleName) => {
      try {
        const bundle = await rollup.rollup({
          input: `modules/${moduleName}/app-aot.ts`,
          plugins: [resolve(), commonjs(), sourcemaps(), buildOptimizer(), /*uglify()*/],
          external: Object.keys(globals)
        });
        await bundle.write({
          file: `dist/modules/${moduleName}/app.js`,
          format: 'umd',
          globals,
          name: `app.${moduleName}`,
          amd: { id: `app.${moduleName}` }
        });
      } catch (e) {
        console.log(moduleName, ':', e);
      }
    });
    done();
  });
}