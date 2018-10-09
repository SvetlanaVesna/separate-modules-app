const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const autoprefixer = require('autoprefixer');

const path = require('path');
const buildPath = path.join(__dirname, 'dist');

const appPath = path.join(__dirname, './src/');

module.exports = {
  entry: appPath,
  optimization: {minimize: process.env.NODE_ENV === 'production'},

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['app', 'node_modules']
  },
  output: {
    filename: 'nf-fe-login.js',
    // chunkFilename: '[chunkhash].js',
    publicPath: 'http://localhost:3000/',
    globalObject: 'this',
    libraryTarget: "commonjs2"
  },

    plugins: [
      new CleanWebpackPlugin(buildPath, {
        root: process.cwd()
      }),
      new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /a\.js|node_modules/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // allow import cycles that include an asyncronous import,
        // e.g. via import(/* webpackMode: "weak" */ './file.js')
        allowAsyncCycles: false,
        // set the current working directory for displaying module paths
        cwd: process.cwd(),
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          include: appPath
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: [
            {
              loader: 'file-loader'
            }
          ],
          include: appPath
        },
        {
          test: /\.(png|jpg)$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    }
};