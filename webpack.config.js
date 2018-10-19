const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(woff|gif|woff2|ttf|eot|svg*.*)$/,
        use: {
          loader: 'file-loader',
          options: {}
        }
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({ filename: "app.css" })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, 'node_modules'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: 'localhost',
    port: 3333
  }
}
