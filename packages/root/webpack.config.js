const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');


const path = require('path');
const buildPath = path.join(__dirname, 'dist');
const appPath = path.join(__dirname, 'src');
const entryPath = path.join(__dirname, '..', '..', 'dist');
const calculatorModulePath = path.join(__dirname, '..', '..','node_modules', 'nf_fe_calculator', 'dist');


const devServer = {
  devServer: {
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    // stats: 'errors-only',
    // host: '127.0.0.0',
    port: 8000,
    contentBase: appPath,
    publicPath: '/'
  }
};

console.log(calculatorModulePath)

module.exports = {
  devtool: 'source-map',
  entry: './src/app.js',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: ['app','node_modules']
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'fe_root_[id].js',
    path: buildPath,
  },
  // optimization: {
  //   // runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  //  },
  ...devServer,
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(path.join(__dirname, '..', '..','node_modules', 'nf_fe_calculator')),
      to: path.resolve(__dirname, 'node_modules', 'nf_fe_calculator')
    }]),
    new webpack.DllReferencePlugin({
      context:  calculatorModulePath,
      manifest: require(path.join(calculatorModulePath, 'nf_fe_calculator.manifest.json'))
    }),
    new HtmlWebpackPlugin({
      minify: {removeComments: true, collapseWhitespace: true},
      inject: 'script',
      title: 'Loan Origination Proto',
      favicon: path.resolve('public','favicon.ico'),
      manifest: path.resolve('public','manifest.json'),
      template: path.resolve( 'public', 'index.html')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(calculatorModulePath,'*.dll.js'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new CopyWebpackPlugin([{
    //   from: path.resolve('..','..','node_modules','nf_fe_calculator','dist'),
    //   to: path.resolve('..','..','dist')
    // }])
    // new CopyWebpackPlugin([{
    //   from: 'public/manifest.json',
    //   to: entryPath
    // }]),
    // new CopyWebpackPlugin([{
    //   from: 'public/favicon.ico',
    //   to: entryPath
    // }])
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              ["@babel/env", {
                "targets": {
                  'browsers': ['Chrome >=59']
                },
                "modules":false,
                "loose":true
              }],"@babel/react"],

            plugins: [
              "react-hot-loader/babel",
              "@babel/plugin-syntax-dynamic-import"
            ]
          }
        }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
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