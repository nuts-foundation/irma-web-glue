const webpack = require('webpack');
const path = require('path');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');



const sharedModule = {
	rules: [
		{
			include: [path.resolve(__dirname, 'src')],
			loader: 'babel-loader',

			options: {
				plugins: ['syntax-dynamic-import'],

				presets: [
					[
						'@babel/preset-env',
						{
							modules: false
						}
					]
				]
			},

			test: /\.js$/
		}
	]
};

const sharedSplitChunks = {
	cacheGroups: {
		vendors: {
			priority: -10,
			test: /[\\/]node_modules[\\/]/
		}
	},

	chunks: 'async',
	minChunks: 1,
	minSize: 30000,
	name: true
};



module.exports = [
	{
		module: sharedModule,

		output: {
			chunkFilename: 'irma-web-glue-development.js',
			filename: 'irma-web-glue-development.js'
		},

		mode: 'development',

		optimization: {
			splitChunks: sharedSplitChunks
		},

		devServer: {
			contentBase: [path.join(__dirname, 'example'), path.join(__dirname, 'dist')],
			host: '192.168.178.124'
		}
	},

	{
		entry: {
	    "irma-web-glue": "./src/index.js",
	    "irma-web-glue.min": "./src/index.js",
	  },

		module: sharedModule,

		output: {
			chunkFilename: '[name].js',
			filename: '[name].js'
		},

		mode: 'production',

		optimization: {
			splitChunks: sharedSplitChunks,

			minimize: true,
	    minimizer: [new UglifyJSPlugin({
	      include: /\.min\.js$/
	    })]
		}

	}
];
