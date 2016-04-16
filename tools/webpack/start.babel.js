require('babel-polyfill');
require('babel-register');

const server = require('./server');
server.startServer({entry: 'main', host: 'localhost', port: 7000});
