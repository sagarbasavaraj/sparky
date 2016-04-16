import webpack from 'webpack';
import {settings} from './settings';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export const production = ({entry}) => {
  const s = settings();

  return {
    devtool: 'source-map',
    entry: {
      javascript: [
        `./src/${entry}`,
      ],
    },
    output: s.output('../../dist'),
    plugins: [
      new ExtractTextPlugin('app.css', {allChunks: true}),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(0),
        __ENVIRONMENT__: JSON.stringify('production'),
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
    ],
    module: {
      loaders: s.loaders(true),
    },
  };
};
