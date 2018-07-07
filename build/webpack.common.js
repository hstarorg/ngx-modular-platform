const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  cache: true,
  profile: true,
  optimization: {},
  resolve: {
    extensions: ['.ts', '.js']
  },
  watchOptions: {
    ignored: /node_modules/
  },
  externals: [
    {
      rxjs: 'rxjs',
      '@angular/common': 'ng.common',
      '@angular/compiler': 'ng.compiler',
      '@angular/core': 'ng.core',
      '@angular/http': 'ng.http',
      '@angular/platform-browser': 'ng.platformBrowser',
      '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
      '@angular/router': 'ng.router',
      '@angular/forms': 'ng.forms',
      'app/common': 'ampApp.common',
      '@angular/animations': 'ng.animations'
    },
    (context, request, callback) => {
      if (request.indexOf('app/') === 0) {
        let key = request.split('/')[1];
        return callback(null, `var ampApp['${key}']`);
      }
      callback();
    }
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      { test: /\.html$/, use: 'raw-loader' },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
      },
      {
        test: /\.styl$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'stylus-loader']
      },
      {
        test: /\.less$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          { loader: 'sass-loader', options: { indentedSyntax: true } }
        ]
      }
    ]
  },
  plugins: [new CheckerPlugin()]
};
