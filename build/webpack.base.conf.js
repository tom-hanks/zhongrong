var path = require('path')
var utils = require('./utils')
var config = require('../config')
const webpack = require('webpack')
var vueLoaderConfig = require('./vue-loader.conf')

//引入多页面支持
var multipageHelper = require('./multipage-helper')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: multipageHelper.getEntries(), //设置入口集合
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
       '/static':resolve('static'),
      '/components':resolve('src/components'),
      '/common':resolve('src/common'),
      '/assets':resolve('src/assets'),
      '/pages':resolve('src/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader',
          options: { javascriptEnabled: true }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
    ]
  }
}
