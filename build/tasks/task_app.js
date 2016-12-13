const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./../webpack.common');
const util = require('./../util');

module.exports = (gulp, params) => {
  gulp.task('app:js', done => {
    let opt = webpackMerge(commonConfig, {
      entry: {
        app: './src/bootstrap.ts'
      },
      output: {
        path: './dist',
        filename: 'js/[name].js',
        library: ['ng2App', '[name]'],
        chunkFilename: '[id].js'
      },
      watch: false
    });
    webpack(opt).watch(200, (err, stats) => {
      util.showWebpackError(err, stats);
      done();
    });
  });

  gulp.task('app', gulp.parallel('app:js'));
};