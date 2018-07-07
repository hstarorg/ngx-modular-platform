const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    modules[name] = `./modules/${name}/index-aot.ts`;
  });

  gulp.task('modules:aot-js', done => {
    let opt = webpackMerge(commonConfig, {
      entry: modules,
      output: {
        path: util.root('dist'),
        filename: 'modules/[name]/app.js',
        library: ['ampApp', '[name]'],
        chunkFilename: '[id].js'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: params.isRelease ? '"production"' : '"development"'
          }
        }),
        new MiniCssExtractPlugin({ filename: 'modules/[name]/app.css' })
      ]
    });
    if (params.isRelease) {
      opt.mode = 'production';
    }
    const compiler = webpack(opt);
    if (params.isRelease) {
      compiler.run((err, stats) => {
        util.showWebpackError(err, stats);
        gulp.series('bs-reload')();
        done();
      });
    } else {
      compiler.watch(
        { aggregateTimeout: 500, poll: false, ignored: [/aot-dist/, /src/, /dist/, /node_modules/] },
        (err, stats) => {
          util.showWebpackError(err, stats);
          gulp.series('bs-reload')();
          done();
        }
      );
    }
  });

  gulp.task('modules-aot', gulp.parallel('modules:aot-js'));
};
