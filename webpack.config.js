const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry : {
        main: path.resolve(__dirname, './src/app.js'),
    },
    devtool: 'inline-source-map',
    plugins: [
      /*new HTMLWebpackPlugin({
        title: 'Development',
      }),*/
    ],
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy'),
    },
    module: {
     rules: [
         {
             test: /\.css$/i,
             use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          }
      ],
    },
  };