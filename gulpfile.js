const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('webpack', (done) => {
    gulp.src('./src/*')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist/'));
    done();
});