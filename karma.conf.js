module.exports = function(config) {
  "use strict";

  var cfg = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["browserify", "mocha", "chai", "chai-as-promised"],

    client: {
      captureConsole: true,
      // mocha specific configuration
      mocha: {
        reporter: "html", // change Karma"s debug.html to the mocha web reporter
        ui: "bdd",
        bail: false
      }
    },

    // list of files / patterns to load in the browser
    files: [
      //{pattern: "node_modules/docbrown/index.js", watched: true, served: false, included: false},
      "src/js/**/*.js",
      "src/test/index.js"
    ],

    // list of files to exclude
    exclude: [
      "src/js/main.js"
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.js": ["browserify"]
    },

    browserify: {
      debug: true,
      transform: ["6to5ify", "reactify"]
    },

    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["dots"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Firefox"],

    customLaunchers: {
      "Chrome_travis_ci": {
        base: "Chrome",
        flags: ["--no-sandbox"]
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  };

  if (process.env.TRAVIS) {
    cfg.browsers.push("Chrome_travis_ci");
  }

  config.set(cfg);
};
