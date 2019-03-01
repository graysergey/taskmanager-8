const path = require(`path`);

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devtool: `source-map`,
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
      inject: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: 'http://localhost:8080/',
    watchContentBase: true,
    hot: true,
    compress: true,
  },
};
