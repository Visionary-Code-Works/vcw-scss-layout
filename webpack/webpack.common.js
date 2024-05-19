// webpack/webpack.common.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].[contenthash].js', // For dynamically imported modules
    publicPath: '/', // Ensures the chunks are correctly resolved
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      bootstrap: path.resolve(__dirname, '../node_modules/bootstrap/scss/bootstrap'),
      normalize: path.resolve(__dirname, '../node_modules/normalize.css/normalize'),
    },
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      filename: 'index.html',
    }),
  ],
};
