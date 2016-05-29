require('babel-register');
require('babel-polyfill');
const path = require('path');
const webpack = require('webpack');
const test = require('./tools/webpack').test;

const runner = (config) => {
  return config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'src/**/*.spec.js',
    ],
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'src/*.js': ['webpack', 'sourcemap'],
    },
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: test(),
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
  });
};

module.exports = runner;

/*
{ //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|dist)/,
            query: {
              presets: ['airbnb']
            }
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
        ],
        postLoaders: [{
            test: /\.(js)$/,
            exclude: /(node_modules|dist)/,
            loader: 'istanbul-instrumenter'
          },
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      }
    },
    */
