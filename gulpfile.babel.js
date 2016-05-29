// 'use strict';

import 'babel-polyfill';
import gulp from 'gulp';
import gutil from 'gulp-util';
import mocha from 'gulp-mocha';
import eslint from 'gulp-eslint';
import replace from 'gulp-replace';
// import flow from 'gulp-flowtype';
import shell from 'gulp-shell';
import webpack from 'webpack';
import {night} from './tools/gulp/nightserver';
import {production} from './tools/webpack/production';
import debug from 'debug';

const log = debug('gulp');

const SPECS_PATHS = [
  'src/*.spec.js',
  'src/**/*.spec.js',
];

const ES_PATHS = [
  'src/*.js',
  'src/**/*.js',
];

const {sunset, sunrise} = night();

// Basic testing related tasks.
gulp.task('bdd', () => gulp
  .src(['src/**/*.js'])
  .pipe(replace('__ENVIRONMENT__', JSON.stringify('test')))
  .pipe(replace('__VERSION__', JSON.stringify('0.0.1')))
  // .pipe(gulp.dest('./build'))
  .pipe(mocha({reporter: 'nyan'}))
  .pipe(mocha({
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
      mochaFile: './.reports/specs/report.[hash].xml',
    },
  }))
);

gulp.task('lint', () => gulp
  .src(ES_PATHS)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

// Build related tasks
gulp.task('webpack:build', (done) => {
  webpack(production, (err, stats) => {
    if (err !== null && err !== undefined) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString());
    done();
  });
});

gulp.task('copy:html', () => gulp
  .src('./src/index.html')
  .pipe(gulp.dest('./dist/'))
);

// End to end related tasks.
gulp.task('sunset', sunset);
gulp.task('night', ['sunset'], shell.task([
  'node node_modules/nightwatch/bin/nightwatch',
]));
gulp.task('sunrise', ['night'], sunrise);

gulp.task('style', ['lint']);
gulp.task('e2e', ['sunrise', 'night', 'sunset']);
gulp.task('test', ['bdd', 'e2e']);

gulp.task('build', ['webpack:build', 'copy:html']);

gulp.task('default', ['test']);
