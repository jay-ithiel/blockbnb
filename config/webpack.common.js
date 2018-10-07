/**
 * This script is a common webpack configuration used as a foundation
 * to merge development & production webpack configurations
 * 
 * @author @jay_ithiel
 */

const path = require('path');
const { ContextReplacementPlugin, NamedChunksPlugin } = require('webpack');

const root = path.resolve(__dirname, '..', 'src');
const nodeModules = path.resolve(__dirname, '..', 'node_modules');

module.exports = {
  entry: {
    index: `${root}/index.tsx`,
    vendor: [
      'apollo-cache-inmemory',
      'apollo-client',
      'apollo-link',
      'apollo-link-context',
      'apollo-link-http',
      'apollo-link-state',
      'graphqltag',
      'styled-components',
      'react',
      'react-apollo',
      'react-dom',
      'react-router',
      'react-router-dom',
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    pathinfo: false,
    publicPath: '/',
  },
  resolve: {
    alias: {
      ABIs: `${root}/ABIs`,
      assets: `${root}/assets`,
      components: `${root}/components`,
      configs: `${root}/configs`,
      shared: `${root}components/shared`,
      HOCs: `${root}/HOCs`,
      networking: `${root}/networking`,
      styled: `${root}/styled`,
      utils: `${root}/utils`,
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: [root, nodeModules],
    symlinks: false,
  },
  optimization: {},
  module: {},
  plugins: [],
};
