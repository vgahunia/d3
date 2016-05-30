// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var connect = require('gulp-connect');


// Compile Our Sass
gulp.task('style', function() {
    return gulp.src('sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/app.css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('sass/app.scss', ['style']);
});

// Use localhost
gulp.task('connect', function() {
  connect.server();
});

gulp.task('default', ['connect', 'watch', 'sass']);