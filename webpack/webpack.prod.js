// webpack/webpack.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
    splitChunks: {
      chunks: 'all', // This ensures Webpack splits code for dynamic imports
    },
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      filename: '[path][base].gz',
    }),
  ],
});
