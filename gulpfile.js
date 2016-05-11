'use strict';

var gulp = require("gulp"),
    plumber = require('gulp-plumber'),
    webpack = require("webpack-stream");

var config = {
    app: {
        src: './index.js',
        dest: './'
    },
    webpack: {
        config: './webpack.config.js'
    }
};


gulp.task('app', function(){
    return gulp.src(config.app.src)
        .pipe(plumber())
        .pipe(webpack( require(config.webpack.config) ))
        .pipe(gulp.dest(config.app.dest));
});

gulp.task('watch', ['app'], function(){
    gulp.watch('./src/**/*.js', ['app']);
});

gulp.task('default', ['app'], function(){

});
