const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
	devtool: 'source-map',
	cache: true,
	watch: true,
	resolve: {
		extensions: ['.ts']
	},
	externals: {
		'rxjs': 'Rx',
		'@angular/common': 'ng.common',
		'@angular/compiler': 'ng.compiler',
		'@angular/core': 'ng.core',
		'@angular/http': 'ng.http',
		'@angular/platform-browser': 'ng.platformBrowser',
		'@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
		'@angular/router': 'ng.router',
		'@angular/forms': 'ng.forms',
		'app/common': 'ng2App.common'
	},
	module: {
		rules: [
			{ test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'], exclude: /node_modules/ },
			{ test: /\.html$/, loader: 'raw-loader' }
		]
	},
	plugins: [
		new CheckerPlugin()
	]
};
