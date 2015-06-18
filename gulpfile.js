var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var react = require('gulp-react');
var ext_replace = require('gulp-ext-replace');

var jestTests = '!src/**/__tests__/**/*.js';

var paths = {
  serverSrc: ['src/*.js', jestTests],
  appSrc: ['src/app/**/*.js', jestTests],
  jsxSrc: ['src/app/components/**/*.jsx', jestTests],
  clientSrc: ['src/public/js/main.js'],
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
             .pipe(ext_replace('.jsx'))
             .pipe(gulp.dest(paths.distribution + '/app/components'));
});

gulp.task('compileClient', function() {
  return gulp.src(paths.clientSrc)
             .pipe(browserify({
               transform: ['babelify', 'require-globify']
             }))
             .pipe(gulp.dest(paths.distribution + '/public/js/'));
});

gulp.task('transpile', ['transpileServer', 'transpileApp', 'transpileJSX']);
gulp.task('build', ['transpile', 'compileClient']);
