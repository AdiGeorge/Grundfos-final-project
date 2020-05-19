var gulp = require('gulp');
var sass = require ('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});