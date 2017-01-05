const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = require('./../webpack.common');
const util = require('./../util');

module.exports = (gulp, params) => {
  let modules = {};
  let moduleFolder = path.join(__dirname, './../../', 'modules');
  fs.readdirSync(moduleFolder).forEach(name => {
    let modulePath = path.join(moduleFolder, name);
    // 不是目录就忽略
    if (!fs.statSync(modulePath).isDirectory()) {
      return;
    }
    modules[name] = `./modules/${name}/index.ts`;
  });

  gulp.task('modules:js', done => {
    let opt = webpackMerge(commonConfig, {
      entry: modules,
      output: {
        path: './dist',
        filename: 'modules/[name]/app.js',
        library: ['ng2App', '[name]'],
        chunkFilename: '[id].js'
      },
      plugins: [
        new ExtractTextPlugin({ filename: 'modules/[name]/app.css', disable: false, allChunks: true })
      ]
    });
    webpack(opt).watch(200, (err, stats) => {
      util.showWebpackError(err, stats);
      done();
    });
  });

  gulp.task('modules', gulp.parallel('modules:js'));
};