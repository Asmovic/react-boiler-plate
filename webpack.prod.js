/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
});
