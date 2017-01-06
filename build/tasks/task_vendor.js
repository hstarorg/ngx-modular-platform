const concat = require('gulp-concat');
const assets = require('./../assets.json');

module.exports = (gulp, params) => {
  gulp.task('vendor:js', () => {
    return gulp.src(assets[params.isRelease ? 'vendor.js.min' : 'vendor.js'])
      .pipe(concat('vendor.js', { newLine: ';\n' }))
      .pipe(gulp.dest('./dist/static/js'));
  });

  gulp.task('vendor:css', () => {
    return gulp.src(assets[params.isRelease ? 'vendor.css.min' : 'vendor.css'])
      .pipe(concat('vendor.css', { newLine: '\n\n' }))
      .pipe(gulp.dest('./dist/static/css'));
  });

  gulp.task('vendor:fonts', () => {
    return gulp.src(assets['vendor.fonts'])
      .pipe(gulp.dest('./dist/static'));
  });

  gulp.task('vendor', gulp.parallel('vendor:js', 'vendor:css', 'vendor:fonts'));
};
