const gulp = require('gulp');
var cssmin = require('gulp-cssmin');
gulp.task('compile', function () {
    return gulp.src('../css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('../../lib'));
});

gulp.task('copyfont',function(){
    return gulp.src('./fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../../lib/fonts'))
})

gulp.task('build', ['compile', 'copyfont']);