var gulp  = require('gulp')
var gutil  = require('gulp-util')
var source  = require('vinyl-source-stream')
var browserify  = require('browserify')
var watchify  = require('watchify')
var babelify = require('babelify');

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [['babelify', { presets: ['es2015', 'react'] } ]],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };

  build();
  bundler.on('update', build);

});
