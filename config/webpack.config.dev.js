const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    overlay: true,
    host: '0.0.0.0',
    // default to port 8080 then ++ if non avail
    port: 4000,
    disableHostCheck: true,
    useLocalIp: true, // requires `host:` key
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000'
      // 'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  devtool: 'source-map',
});
