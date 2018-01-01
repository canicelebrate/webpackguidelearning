const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const webpack = require('webpack');

module.exports = {
   entry: {
     app: './src/index.js',
	 vendor:['lodash'],
   },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       }
     ]
   },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
	publicPath:'/',
	chunkFilename: '[id].chunk_[chunkhash].js'
  },
  plugins:[
  	new CleanWebpackPlugin(['dist']),
	new HtmlWebpackPlugin({
		title: 'Caching'
	}),
	new ManifestPlugin()

  ]
};