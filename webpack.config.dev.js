var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: 
    [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client',
        './src/index'
    ],
  output: 
    {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
  plugins: 
    [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
  module: {
    loaders: 
      [
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader!postcss-loader'
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          },
          {
              test: /\.jpe?g$|\.gif$|\.png$/i,
              loader: "url-loader?limit=10000"
          }
      ]
  },
  postcss: function() {
    return [
      require('postcss-import')({ // Import all the css files...
        onImport: function (files) {
            files.forEach(this.addDependency); // ...and add dependecies from the main.css files to the other css files...
        }.bind(this) // ...so they get hot–reloaded when something changes...
      }),
      require('postcss-simple-vars')(), // ...then replace the variables...
      require('postcss-focus')(), // ...add a :focus to ever :hover...
      require('postcss-nested')(),
      require('autoprefixer')({ // ...and add vendor prefixes...
        browsers: ['last 2 versions', 'IE > 8'] // ...supporting the last 2 major browser versions and IE 8 and up...
      }),
      require('postcss-reporter')({ // This plugin makes sure we get warnings in the console
        clearMessages: true
      })
    ];
  },
  target: "web", // Make web variables accessible to webpack, e.g. window
  stats: false, // Don't show stats in the console
  progress: true
};
