const { src, dest, parallel, watch, series } = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  browserSync = require('browser-sync').create();

const FilesPath = {
  sassFiles: 'src/Sass/**/*.scss',
  htmlFiles: 'src/Pug/page/*.pug',
  script: 'src/JS/*.js',
};

function sassTask() {
  return src(FilesPath.sassFiles)
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

function htmlTask() {
  return src(FilesPath.htmlFiles)
    .pipe(pug({ pretty: true }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

function scriptTask() {
  return src(FilesPath.script)
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
} 

function assetsTask() {
  return src('assets/**/*').pipe(dest('dist/assets'));
}

function serve() {
  browserSync.init({ server: { baseDir: './dist' } });
  watch(FilesPath.sassFiles, sassTask);
  watch(FilesPath.htmlFiles, htmlTask);
  watch(FilesPath.script, scriptTask);
}

exports.sass = sassTask;
exports.html = htmlTask;
exports.script = scriptTask;
exports.assets = assetsTask;
exports.default = series(parallel(htmlTask, sassTask, assetsTask, scriptTask));
exports.serve = series(serve, parallel(htmlTask, sassTask, assetsTask, scriptTask));