/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    port: process.env.PORT || 3000,
  },
});
