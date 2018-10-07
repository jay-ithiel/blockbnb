const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./webpack.common.js');
const settings = require('./settings');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringifi('development'),
        APP_ENV: JSON.stringify('development'),
        SETTINGS: JSON.stringify(settings.development),
      },
    }),
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
  ],
});
