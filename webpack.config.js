const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const webpack = require('webpack');

module.exports = {
   entry: {
     app: './src/index.js',
   },
  output: {
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, 'dist'),
	library: 'webpackNumbers',
	libraryTarget: 'umd'
  },
  externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      }
    },
  plugins:[
  	new CleanWebpackPlugin(['dist']),
	new ManifestPlugin()
  ]
};