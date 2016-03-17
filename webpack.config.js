var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './client/public/index.jsx',
  target: 'node',
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.jsx"
  },
  module: {
    loaders: [
    { 
    test: /\.jsx$|.js$/, 
    exclude: /node_modules/, 
    loader: "babel", 
    query:
      {
        presets:['es2015','react']
      }
},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })]
};





