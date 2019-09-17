const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const cache = require('gulp-cache');
const runSequence = require('run-sequence');

const rollup = require('gulp-better-rollup');
const babelRollup = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');


// Development Tasks 
// -----------------
gulp.task('browserSync', function () {
  browserSync.init({
    server: './src'
  });
  gulp.watch('src/views/**/*.pug', ['pug']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch(['src/js/**/*.js', '!src/js/scripts.min.js'], ['js']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('pug', function () {
  return gulp.src(['src/views/**/*.pug', '!src/views/**/_*/*.pug', '!src/views/**/_*/**/*.pug'])
    .pipe(pug({
      pretty: true
    })) //Convert to HTML, but no minify
    .pipe(gulp.dest('src'))
    .pipe(browserSync.stream())
});

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('clean-scripts', function () {
  return gulp.src('src/js/scripts.min.js', {
      read: false
    })
    .pipe(clean())
});

gulp.task('export-js', function () {
  return gulp.src('src/js/components/main.js')
    .pipe(rollup({
      plugins: [babelRollup(), resolve(), commonjs()]
    }, 'umd'))
    .pipe(gulp.dest('src/js'))
});

gulp.task('js', ['export-js','clean-scripts'], function () {
  return gulp.src(['src/js/main.js', 'src/js/components/clipboard.js', '!src/js/lib/*.js'])
    .pipe(concat('components.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream())
});

//Optimization tasks
//-------------------
gulp.task('images', function () {
  return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('src/img'))
});

const config = {
  mode: {
    symbol: {
      dest: 'src/img/sprites',
      sprite: 'sprite.svg', // sprite name
      example: true // To create a HTML example page
    }
  },
  svg: {
    xmlDeclaration: false, // don't create xml inside svg
    doctypeDeclaration: false // don't create doctype xml inside svg
  }
};

gulp.task('sprites', function () {
  return gulp.src('src/img/svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('.'))
});

// Task Sequence
// ---------------
gulp.task('default', function (callback) {
  runSequence(['pug', 'sass', 'js', 'browserSync', 'images', 'sprites'], callback)
})