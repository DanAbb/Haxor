var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
  return gulp.src('public/stylesheets/*.less')
    .pipe(less())
    .pipe(concat('app.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))
});

gulp.task('less:hover', ['less'], function() {
  return gulp.src('public/stylesheets/hoverEffects/*.less')
    .pipe(less())
    .pipe(concat('hover.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('public/stylesheets/**/*.less', ['less:hover']);
});