const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');


gulp.task('watch', ['default'], function() {
    gulp.watch('./assets/stylesheets/**/*.scss', ['stylesheet']);
});

gulp.task('default', ['stylesheet']);

gulp.task('stylesheet', function() {
    return gulp.src('./assets/stylesheets/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('index.bundle.css'))
        .pipe(gulp.dest('./assets/stylesheets/'))
        .pipe(cleanCss())
        .pipe(rename('index.bundle.min.css'))
        .pipe(gulp.dest('./assets/stylesheets/'));
});
