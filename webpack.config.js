const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');

module.exports = {
   entry: {
     app: './src/index.js',
   },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       }
     ]
   },
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
	 port:8088,
	 hot:true
   },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
	publicPath:'/'
  },
  plugins:[
  	new CleanWebpackPlugin(['dist']),
	new HtmlWebpackPlugin({
		title: 'Hot Module Replacement'
	}),
	new ManifestPlugin(),
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new UglifyJSPlugin()
  ]
};