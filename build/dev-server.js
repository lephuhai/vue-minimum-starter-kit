"use strict";

require('./check-versions')();
let config = require('../config'),
  path = require('path'),
  express = require('express'),
  webpack = require('webpack'),
  opn = require('opn'),
  proxyMiddleware = require('http-proxy-middleware'),
  webpackConfig = require('./webpack.dev.conf');
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);

// default port where dev server listens for incoming traffic
let port = process.env.PORT || config.dev.port;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
let proxyTable = config.dev.proxyTable;

let app = express();
let compiler = webpack(webpackConfig);

let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
    errorDetails: true,
    reasons: true
    // modules: true
  }
});

let hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({action: 'reload'});
    cb();
  })
});

// proxy api requests
Object.keys(proxyTable).forEach(context => {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(context, options))
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return
  }
  let uri = 'http://localhost:' + port;
  console.log("Listening at " + uri + '\n');

  opn(uri);
});
