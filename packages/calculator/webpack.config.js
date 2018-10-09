const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

const buildPath = path.join(__dirname, 'dist');
const appPath = path.join(__dirname, 'src');
const entryPath = path.join(__dirname, '..', '..', 'dist');

const libraryName = 'nf_fe_calculator';

module.exports = {

  entry: {
    [libraryName]: ['./src/index.jsx']
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  //   },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: ['app','node_modules']
  },
    output: {
      filename: '[name].dll.js',
      library: libraryName,
      libraryTarget: 'umd',
      path: buildPath,
      // globalObject: 'this'
    },

    plugins: [
      new webpack.DllPlugin({
        context: buildPath,
        name: libraryName,
        path: path.resolve(path.join(buildPath, '[name].manifest.json'))
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: [
            {
              loader: 'file-loader'
            }
          ],
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