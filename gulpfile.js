"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect'); // runs a local development server
var open = require('gulp-open'); // to open a URL in browser

var config = {
    port: 5000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
}

 // Task: Start a local development server
 gulp.task('connect', function(){
     connect.server({
         root: ['dist'],
         port: config.port,
         base: config.devBaseUrl,
         livereload: true
     });
 });

 //Task: Open index.html in browser
 gulp.task('open', ['connect'], function(){
     gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
 });

 //Task: move html files from src to dist and then reload the dev server using connect defined earlier
 gulp.task('html', function(){
    gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
 });

 //Task: Default tasks
 gulp.task('default', ['html', 'open', 'watch']);

 //Task: Watch the files for changes
 gulp.task('watch', function(){
     gulp.watch(config.paths.html,['html']);
 });