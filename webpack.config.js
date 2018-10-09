const webpack = require('webpack');
const path = require('path');
const buildPath = path.join(__dirname, 'dist');
const appPath = path.join(__dirname, 'packages');


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
    contentBase: buildPath,
    publicPath: '/'
  }
};


module.exports = {
  entry: './dist/main.js', // path.join("dist", "main.js"),
  ...devServer,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        application: {
          test: /[\\/]packages[\\/]/,
          name: 'main',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: ['app', 'node_modules']
  },
  output: {
    filename: 'index.js',
    chunkFilename: '[name].js',
    path: buildPath,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
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