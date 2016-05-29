import webpack from 'webpack';
import {loaders, preLoaders, output} from './settings';

export const test = () => {
  return {
    devtool: 'inline-source-map',
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(0),
        __ENVIRONMENT__: JSON.stringify('test'),
      }),
    ],
    module: {
      preLoaders: preLoaders(),
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /(node_modules|dist)/,
          query: {presets: ['airbnb']},
        },
        {
          test: /\.json$/,
          loader: 'json',
        },
      ],
      postLoaders: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules|dist)/,
          loader: 'istanbul-instrumenter',
        },
      ],
    },
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
  }
};


// webpack: { //kind of a copy of your webpack config
//       devtool: 'inline-source-map', //just do inline source maps instead of the default
//       module: {
//         loaders: [
//           {
//             test: /\.js$/,
//             loader: 'babel',
//             exclude: /(node_modules|dist)/,
//             query: {
//               presets: ['airbnb']
//             }
//           },
//           {
//             test: /\.json$/,
//             loader: 'json',
//           },
//         ],
//         postLoaders: [{
//             test: /\.(js)$/,
//             exclude: /(node_modules|dist)/,
//             loader: 'istanbul-instrumenter'
//           },
//         ]
//       },
//       externals: {
//         'react/addons': true,
//         'react/lib/ExecutionEnvironment': true,
//         'react/lib/ReactContext': true,
//       }
//     },