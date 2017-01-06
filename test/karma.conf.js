// Karma configuration
// Generated on Thu Dec 29 2016 16:53:00 GMT-0300 (CLST)

var webpackConfig = require('./../webpack.config.js')
delete webpackConfig.entry
delete webpackConfig.ouput

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['test.spec.js'],
    preprocessors: {
        'test.spec.js': ['webpack']
    },
    webpack: webpackConfig, 
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
