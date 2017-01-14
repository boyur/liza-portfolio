const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');
const sass = require('gulp-sass');

function compile(watch) {
  let bundler = watchify(browserify('./views/js/main.js', { debug: true }).transform(babel.configure({
    presets: ["es2015"]
  })));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/js'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('js', function() { return compile(); });
gulp.task('js:watch', function() { return watch(); });

gulp.task('sass', function () {
  return gulp.src('./views/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./views/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);