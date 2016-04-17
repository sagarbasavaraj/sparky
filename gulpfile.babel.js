// 'use strict';

import 'babel-polyfill';
import gulp from 'gulp';
import gutil from 'gulp-util';
import mocha from 'gulp-mocha';
import eslint from 'gulp-eslint';
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
  .src(SPECS_PATHS)
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

// gulp.task('typecheck', () => gulp
//   .src(ES_PATHS)
//   .pipe(flow({
//     all: false,
//     beep: true,
//   }))
// );

gulp.task('typecheck', () => shell.task([
  // 'node node_modules/flow-bin/cli.js',
  // 'echo',
  'say "Typecheck"',
], (...rest) => console.log('typecheck', rest)));

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

gulp.task('e2e', ['sunrise', 'night', 'sunset']);
gulp.task('build', ['webpack:build', 'copy:html']);
gulp.task('style', ['lint', 'typecheck']);
gulp.task('specs', ['bdd']);
gulp.task('test', ['bdd', 'e2e']);
gulp.task('default', ['test']);
