var webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css?modules', 'sass'] }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV
    })
  ]
};
