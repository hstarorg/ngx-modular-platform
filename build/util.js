const gutil = require('gulp-util');

const showWebpackError = (err, stats) => {
  if (err) {
    throw new gutil.PluginError('webpack', err);
  }
  let statColor = stats.compilation.warnings.length < 1 ? 'green' : 'yellow';
  if (stats.compilation.warnings.length > 0) {
    stats.compilation.errors.forEach(error => {
      statColor = 'red';
    });
  } else {
    gutil.log(stats.toString({
      colors: gutil.colors.supportsColor,
      hash: false,
      timings: true,
      chunks: true,
      chunkModules: false,
      modules: false,
      children: false,
      version: true,
      cached: true,
      cachedAssets: true,
      reasons: false,
      source: false,
      errorDetails: false
    }));
  }
};

module.exports = {
  showWebpackError
};