import 'babel-polyfill';
import {Deferred} from 'sancus';
import {startServer} from '../webpack/server';

const runAndResolve = (command, deferred) => () => {
  const executionResult = command();
  const result = executionResult === undefined ? true : executionResult;
  deferred.resolve(result);
};

const delay = (time, command) => {
  const d = new Deferred();
  
  setTimeout(runAndResolve(command, d), time);
  return d.promise;
};

export const night = () => {
  let expressApp = null;
  
  const sunset = (done) => {
    const started = startServer();
    started
      .then((app) => expressApp = app)
      .then(() => delay(5000, done));
  };

  const sunrise = (done) => {
    expressApp.close();
    expressApp = null;
    delay(5000, done);
  };
  
  return {sunset, sunrise};
};