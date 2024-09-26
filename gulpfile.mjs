import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import {deleteAsync} from 'del';
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import _browserSync from 'browser-sync'

const {src, dest, watch} = gulp
const sass = gulpSass(dartSass)
const browserSync = _browserSync.create()

function clean() {
  return deleteAsync (['./css'])
}

function styles() {
  return src('./sass/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write(''))
    .pipe(dest('./css'))
    .pipe(browserSync.stream())
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })

  watch('./sass/*.scss', styles)
  watch('./js/*.js').on('change', browserSync.reload)
  watch('./*.html').on('change', browserSync.reload)
}

const go = gulp.series(clean, styles, serve)

export {clean, styles, serve}
export default go
