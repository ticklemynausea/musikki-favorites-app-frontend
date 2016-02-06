var path = require('path');
var Webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './app/index.js',
    vendors: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel' },
      { test: /\.json$/, loader: "json" },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader:'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }

    ]
  }
};