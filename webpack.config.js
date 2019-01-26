var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    //contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    allowedHosts: [
      'localhost:8099'
    ],
    headers: {
      'X-Custom-Foo': 'bar',
      'Access-Control-Allow-Origin': 'http://localhost:8099'
    }
  }
};