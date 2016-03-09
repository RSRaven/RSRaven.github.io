const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');

gulp.task('babel', () =>
    gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build/js'))
);

gulp.task('mocha', () => {
    return gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', () => {
    watch(['src/js/**/*.js', 'test/**/*.js'], function(event, cb) {
        gulp.start('babel', 'mocha');
    });
});

gulp.task('default', ['babel', 'mocha', 'watch']);
