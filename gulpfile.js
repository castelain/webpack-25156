const gulp = require('gulp');
const webpack = require('webpack-stream');
const minify = require('gulp-minify');

gulp.task('webpack', (done) => {
    gulp.src('./src/*')
        .pipe(minify())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist'));
    done();
});