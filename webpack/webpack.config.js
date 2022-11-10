const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: { //Beim import wird geschaut ob es ein ts oder js file mit diesem Namen gibt
    extensions: ['.ts', '.js'],
  },
  output: { 
    filename: 'bundle_[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({title : "hello-world"})
  ],
  devtool: "cheap-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 4200,
  }
}