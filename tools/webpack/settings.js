// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const styleLoader = ExtractTextPlugin.extract('css!stylus');

import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const styleLoader = ExtractTextPlugin.extract('css!stylus');

export const settings = () => ({
  output: (dist) => ({
    path: path.join(__dirname, dist),
    filename: 'app.js',
    publicPath: '/',
  }),
  preLoaders: () => ([
    {
      test: /\.js$/,
      loaders: [
        'babel',
        'eslint-loader',
        // 'flowcheck',
      ],
      // include: path.join(__dirname, '../../src'),
      exclude: /node_modules/,
    },
  ]),
  loaders: (production) => ([
    {
      test: /\.styl$/,
      loader: production ? styleLoader : 'style-loader!css-loader!stylus-loader',
    },
    {
      test: /\.js$/,
      loaders: [
        'react-hot',
        'babel',
      ],
      // include: path.join(__dirname, '../../src'),
      exclude: /node_modules/,
    },
  ]),
});
