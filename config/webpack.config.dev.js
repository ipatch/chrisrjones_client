const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    overlay: true,
    host: '0.0.0.0',
    // default to port 8080 then ++ if non avail
    // port: 4445
    useLocalIp: true, // requires `host:` key
  },
  devtool: 'source-map',
});
