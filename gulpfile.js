var gulp = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react');

var paths = {
  serverSrc: ['src/server.js'],
  appSrc: ['src/app/**/*.js'],
  jsxSrc: ['src/app/components/**/*.jsx'],
  distribution: 'dist'
};

gulp.task('transpileServer', function() {
  return gulp.src(paths.serverSrc)
             .pipe(babel())
             .pipe(gulp.dest(paths.distribution));
});

gulp.task('transpileApp', function() {
  return gulp.src(paths.appSrc)
             .pipe(babel())
             .pipe(gulp.dest(paths.distribution + '/app'));
});

gulp.task('transpileJSX', function() {
  return gulp.src(paths.jsxSrc)
             .pipe(babel())
             .pipe(react())
             .pipe(gulp.dest(paths.distribution + '/app/components'));
});

gulp.task('transpile', ['transpileServer', 'transpileApp', 'transpileJSX']);
gulp.task('build', ['transpile']);
