var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task("sass", function () {
    return gulp.src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css/"));
});

gulp.task("pug", function () {
    return  gulp.src("pug/**/*.pug")
    .pipe(pug({pretty: false}))
    .pipe(gulp.dest("./"));
    
});
 
gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', gulp.series('sass'));
  gulp.watch('pug/**/*.pug', gulp.series('pug'));
});
