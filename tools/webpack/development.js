import webpack from 'webpack';
// import FlowStatusWebpackPlugin from 'flow-status-webpack-plugin';
import {settings} from './settings';

export const development = ({entry}) => {
  const s = settings();

  return {
    devtool: 'eval-source-map',
    entry: {
      javascript: [
        'webpack-hot-middleware/client',
        `./src/${entry}`,
      ],
    },
    output: s.output('dist'),
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // new FlowStatusWebpackPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(0),
        __ENVIRONMENT__: JSON.stringify('development'),
      }),
    ],
    module: {
      preLoaders: s.preLoaders(),
      loaders: s.loaders(false),
    },
  };
};
