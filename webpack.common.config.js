const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const webpack = require('webpack');

module.exports = {
   entry: {
     app: './src/index.js'
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
	publicPath:'/',
	chunkFilename: '[name].bundle.js',
  },
  plugins:[
  	new CleanWebpackPlugin(['dist']),
	new HtmlWebpackPlugin({
		title: 'Code splitting - Dynamic Imports'
	}),
	new ManifestPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
       name: 'common' // Specify the common bundle's name.
     })

  ]
};