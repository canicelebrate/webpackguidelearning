const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');


const webpack = require('webpack');

module.exports = merge(common,{
	  devtool: 'inline-source-map',
	  devServer: {
		 contentBase: './dist',
		 port:8088,
		 hot:true
	   },
	  plugins:[
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	  ]
	});