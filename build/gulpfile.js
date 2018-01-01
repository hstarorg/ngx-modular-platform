require('shelljs/global');
const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const notifier = require('node-notifier');

const isRelease = process.argv.indexOf('-r') >= 0;
const params = {
  isRelease
};

[
  'task_vendor',
  'task_app',
  'task_module',
  'task_module_aot',
  'task_module_rollup'
].forEach(f => {
  require(`./tasks/${f}`)(gulp, params);
});

gulp.task('clean', done => {
  rm('-rf', 'dist');
  done();
});

gulp.task('serve', done => {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    },
    middleware: [historyApiFallback()],
    ghostMode: false,
    port: 10000
  });
  done();
});

gulp.task('bs-reload', done => {
  notifier.notify({ title: 'Newkit', message: 'Build successfully.' });
  browserSync.reload();
  done();
});

gulp.task('build', gulp.parallel('vendor', 'app', 'modules'));

gulp.task(
  'release',
  gulp.series('clean', gulp.parallel('vendor', 'app', 'modules-aot'))
);

gulp.task('default', gulp.series('clean', 'build', 'serve'));
