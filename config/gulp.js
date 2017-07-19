'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const path = require('path');

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
};

module.exports = {

    defaultTaskName: 'default',

    tasks: {

        default: ['compileTemplate', 'compileStyles', 'moveImages', 'bundleAdmin', 'bundleClient', 'watchTemplates', 'watchStyles', 'watchImages'],

        watchTemplates: () => {
            return gulp.watch(
                path.join('frontend', 'js', '**', '*'),
                ['compileTemplate', 'bundleAdmin', 'bundleClient']
            );
        },

        watchStyles: () => {
            return gulp.watch(
                path.join('frontend', 'styles', '**', '*'),
                ['compileStyles']
            );
        },

        watchImages: () => {
            return gulp.watch(
                path.join('frontend', 'images', '**', '*'),
                ['moveImages']
            );
        },

        compileTemplate: () => {
            return gulp.src('./frontend/js/**/*.js')
                .pipe(babel(babelConfig))
                .pipe(gulp.dest('dist'));
        },

        compileStyles: () => {
            return gulp.src('./frontend/styles/**/*.scss')
                .pipe(sass({ includePaths: ['node_modules', '../node_modules'] })
                    .on('error', sass.logError))
                .pipe(gulp.dest('dist/styles'));
        },

        moveImages: () => {
            return gulp.src('./frontend/images/**/*.*')
                .pipe(gulp.dest('dist/images'));
        },

        bundleAdmin: () => {
            return gulp.src('frontend/js/components/admin-bundle.js')
                .pipe(webpack({
                    output: {
                        filename: 'admin-bundle.js'
                    },
                    module: {
                        loaders: [{
                            test: /\.js$/,
                            exclude: /node_modules/,
                            loader: 'babel-loader',
                            query: {
                                presets: ['react', 'es2015']
                            }
                        },
                        {
                            test: /\.(css|scss)$/,
                            loaders: ['style', 'css', 'sass']
                        }]
                    }
                }))
                .pipe(gulp.dest('dist'));
        },

        bundleClient: () => {
            return gulp.src('frontend/js/components/client-bundle.js')
                .pipe(webpack({
                    output: {
                        filename: 'client-bundle.js'
                    },
                    module: {
                        loaders: [{
                            test: /\.js$/,
                            exclude: /node_modules/,
                            loader: 'babel-loader',
                            query: {
                                presets: ['react', 'es2015']
                            }
                        },
                        {
                            test: /\.(css|scss)$/,
                            loaders: ['style', 'css', 'sass']
                        }]
                    }
                }))
                .pipe(gulp.dest('dist'));
        }
    }

};
