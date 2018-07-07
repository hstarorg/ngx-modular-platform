const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function genarateCssLoader(test, lang, options) {
  return {
    test,
    use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', { loader: `${lang}-loader`, options: options || {} }]
  };
}

module.exports = {
  devtool: 'cheap-source-map',
  target: 'web',
  mode: 'development',
  stats: 'errors-only',
  cache: true, // Default in watch mode
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {}
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
      genarateCssLoader(/\.styl$/, 'stylus'),
      genarateCssLoader(/\.less$/, 'less'),
      genarateCssLoader(/\.scss$/, 'sass'),
      genarateCssLoader(/\.sass$/, 'sass', { indentedSyntax: true })
    ]
  },
  plugins: [new CheckerPlugin()]
};
