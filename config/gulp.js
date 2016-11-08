'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')

const babelConfig = {
  presets: ['react', 'es2015'],
  plugins: [
    [
      'css-modules-transform', {
        preprocessCss: 'preprocessor.js',
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        extensions: ['.css', '.scss'],
        extractCss: './dist/styles/production.css'
      }
    ]
  ]
}

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileTemplate', 'compileStyles', 'moveImages'],
    compileTemplate: () => {
      return gulp.src('./frontend/js/**/*.js')
        .pipe(babel(babelConfig))
        .pipe(gulp.dest('dist'))
    },
    compileStyles: () => {
      return gulp.src('./frontend/styles/**/*.scss')
        .pipe(
          sass({
            includePaths: [ 'node_modules' ]
          })
          .on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'))
    },
    moveImages: () => {
      return gulp.src('./frontend/images/**/*.*')
      .pipe(gulp.dest('dist/images'))
    }
  }

}
