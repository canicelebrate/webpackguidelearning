const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename:  (getPath) => {
      return getPath('css/styles.css');
    },
    allChunks: true
  });

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
	rules:[
		{
			test:/\.css$/,
			use:extractCSS.extract({
				fallback:"style-loader",
				use:"css-loader",
				publicPath :"../"
			})
		},
		{
			test:/\.(png|jpg|gif)$/,
			use:[{
					loader:'file-loader',
					options: {
					  name: '[hash].[ext]',
						outputPath: 'images/'
					}  
				}]
		},
		{
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       }
	]
  },
  plugins:[
	extractCSS
  ]
};