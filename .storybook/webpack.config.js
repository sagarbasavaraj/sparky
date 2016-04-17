require('babel-register');
const path = require('path');
const styleLoader = require('../tools/webpack/settings.js').styleLoader;

const sl = styleLoader(false);
sl.include = path.resolve(__dirname, '../');

module.exports = {
  module: {
    loaders: [sl],
  },
};
