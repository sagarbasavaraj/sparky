import webpack from 'webpack';
import {loaders, preLoaders, output} from './settings';

export const development = ({entry}) => ({
  devtool: 'eval-source-map',
  entry: {
    javascript: [
      'webpack-hot-middleware/client',
      `./src/${entry}`,
    ],
  },
  output: output('dist'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(0),
      __ENVIRONMENT__: JSON.stringify('development'),
    }),
  ],
  module: {
    preLoaders: preLoaders(),
    loaders: loaders(false),
  },
});
