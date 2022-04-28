/*
 * Copyright (c) 2011-2022 Digital Bazaar, Inc. All rights reserved.
 */
module.exports = function(config) {
  const frameworks = ['mocha'];
  const preprocessors = ['webpack', 'sourcemap'];

  config.set({
    basePath: '',
    frameworks,
    files: [
      {
        pattern: 'tests/*.spec.js',
        watched: false, served: true, included: true
      }
    ],
    exclude: [],
    preprocessors: {
      'tests/*.js': preprocessors
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map'
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    //   config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file
    //   changes
    autoWatch: false,

    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // Mocha
    client: {
      mocha: {
        // increase from default 2s
        timeout: 10000,
        reporter: 'html'
        //delay: true
      }
    }
  });
};
