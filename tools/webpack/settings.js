import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const PRODUCTION_STYLE_LOADER = ExtractTextPlugin.extract('css!stylus');
const DEVELOPMENT_STYLE_LOADER = 'style-loader!css-loader!stylus-loader';

export const styleLoader = (production, include) => ({
  test: /\.styl$/,
  include,
  loader: production ? PRODUCTION_STYLE_LOADER : DEVELOPMENT_STYLE_LOADER,
});

export const loaders = (production, include = undefined) => ([
  styleLoader(production, include),
  {
    test: /\.js$/,
    loaders: [
      'react-hot',
      'babel',
    ],
    include,
    exclude: /node_modules/,
  },
]);

export const preLoaders = () => ([
  {
    test: /\.js$/,
    loaders: [
      'babel',
      'eslint-loader',
    ],
    exclude: /node_modules/,
  },
]);

export const output = (dist) => ({
  path: path.join(__dirname, dist),
  filename: 'app.js',
  publicPath: '/',
});
