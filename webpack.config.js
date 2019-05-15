const path = require('path');
const SizePlugin = require('size-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'shp-write.js',
    library: 'shp-write',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'cheap-eval-source-map',
  stats: 'errors-only',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new SizePlugin()],
};
