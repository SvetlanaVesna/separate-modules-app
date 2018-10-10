const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const parts = require('./config/parts');

const buildPath = path.join(__dirname, 'dist');
const appPath = path.join(__dirname, 'src');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

const LIBRARY_NAME = 'nf_fe_calculator';

const commonConfig = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: ['app','node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {removeComments: true, collapseWhitespace: true},
      inject: 'script',
      title: 'Loan Origination Proto',
      favicon: path.resolve('public','favicon.ico'),
      manifest: path.resolve('public','manifest.json'),
      template: path.resolve( 'public', 'index.html')
    }),
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



let config;

switch (process.env.npm_lifecycle_event) {
  case 'dist':
    config = merge(
      commonConfig,
      {
        devtool: 'source-map',
        entry: {
          [LIBRARY_NAME]: ['./src/index.jsx']
        },
        output: {
          filename: '[name].dll.js',
          library: LIBRARY_NAME,
          libraryTarget: 'umd',
          path: buildPath,
        }
      },
      parts.clean(buildPath),
      parts.SetUpDllPlugin({buildPath, libraryName: LIBRARY_NAME})
    );
    break;
  default:
    config = merge(
      commonConfig,
      {
        entry: {
          app: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://${HOST}:${PORT}`,
            'webpack/hot/only-dev-server',
            './src/app.jsx'
          ],
        },
        output: {
          path: buildPath,
          filename: '[name].js',
          publicPath: `/`
        }
      },
      parts.clean(buildPath),
      parts.devServer({
        host: HOST,
        port: PORT,
        appPath
      })
    );
}
module.exports = config;
