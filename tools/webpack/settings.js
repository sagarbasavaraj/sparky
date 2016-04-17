import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export const styleLoader = (production) => {
  const result = {test: /\.styl$/};

  if (production) {
    result.loader = ExtractTextPlugin.extract('css!stylus');
  } else {
    result.loader = 'style-loader!css-loader!stylus-loader';
  }

  return result;
};

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
    styleLoader(production),
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
