require('shelljs/global');
const gulp = require('gulp4');


gulp.task('clean', done => {
  rm('-rf', 'dist');
  done();
});

[
  'task_vendor',
  'task_app',
  'task_module'
].forEach(f => {
  require(`./tasks/${f}`)(gulp);
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('vendor', 'app', 'modules')
));
