require('babel-register');
const path = require('path');
const settings = require('../tools/webpack/settings.js');

// const sl = Object.assign(
//   {},
//   ,
//   {include: }
// );

module.exports = {
  module: {
    preLoaders: settings.preLoaders(),
    loaders: [settings.styleLoader(false, path.resolve(__dirname, '../'))],
  },
};
