/**
 * This is the tnest webpack configuration
 * 
 * @author @jay_ithiel
 */

const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const production = require('./webpack.production');
const settings = require('./settings');

module.exports = merge(
  {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
          APP_ENV: JSON.stringify('testnet'),
          SETTINGS: JSON.stringify(settings.testnet),
        },
      }),
    ],
  },
  production
);
