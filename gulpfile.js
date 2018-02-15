"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect'); // runs a local development server
var open = require('gulp-open'); // to open a URL in browser
var browserify = require('browserify'); // to bundle JavaScript
var reactify = require('reactify'); // to chnage JSX to JS
var source = require('vinyl-source-stream'); // to use conventional text stream with gulp
var concat = require('gulp-concat') // to concatenate files
var lint = require('gulp-eslint') // to Lint JS/JSX files (get warnings/errors when mistakes are made)

var config = {
    port: 5000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/**/*.js',
        mainJs: './src/main.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        dist: './dist'
    }
}

// Task: Start a local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

//Task: Open index.html in browser
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

//Task: move html files from src to dist and then reload the dev server using connect defined earlier
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

//Task: create bundle and move it to scripts under dist directory
gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

//Task: concatenate bootstrap files to get a single bundled css file
gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

//Task: Lint task
gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint({ config: 'eslint.config.json' }))
        .pipe(lint.format());
});

//Task: Default tasks
gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);

//Task: Watch the files for changes
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});