const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presents: ['@babel/preset-env']
                }
            }
          },
          {
            test: /\.(png|svg|jpg|gif|jpeg)$/i,
            type: "assets/resource"
          }
        ],
      },
}

