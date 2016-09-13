var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('serve', [], function() {
    // gulp.watch("static/scss/*.scss", ['sass']);
    gulp.watch(["static/scss/*"]).on('change', function(file) {
        gulp.start('sass');
    });
    gulp.watch(["templates/**/*.html","static/**/*"]).on('change', function(file) {
        gulp.start('build_site');
    });
    gulp.start('build_site');
});

gulp.task('build_site', function() {
    console.log('++ rebuilding');
    return gulp.src('')
        .pipe(shell([
            './build.sh'
        ], {
            templateData: {
                f: function (s) {
                    return s
                }
        }
        }))
        ;
});

// Compile sass into CSS
gulp.task('sass', function() {
    console.log('++ sass');
    return gulp.src("static/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("static/css"))
        ;
});

gulp.task('default', ['serve']);