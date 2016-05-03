var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
})

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
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },

  module: {
    loaders: [
    { 
    test: /\.jsx$|.js$/, 
    exclude: /node_modules/, 
    loader: "babel", 
    query:{presets:['es2015','react']}},
      { test: /\.scss$/, loader: "style!css!sass!"},
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  plugins: [HTMLWebpackPluginConfig, new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })]
};





