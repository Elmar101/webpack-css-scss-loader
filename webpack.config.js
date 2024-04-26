const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: {
		index: "./src/index.js",
	},
	output: {
		filename: "./js/[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true, // uyqulamani her defe run ve ya build etdikde  dist klasörü temizlemek
	},
	plugins: [
		new webpack.ProgressPlugin(),
		// https://github.com/jantimon/html-webpack-plugin => look at this link
		new HtmlWebpackPlugin({
			title: "Output Management",
			inject: "body",
			filename: "./index.html",
			scriptLoading: "defer",
            template: "./src/home/home.html",
			favicon: "./src/assets/favicon-16x16.png",
			meta: {
				viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
			},
			minify: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{ loader: "style-loader" }, // inject style into the DOM
					{ loader: "css-loader"}, // tturns css to commonJS,
					{ loader: "sass-loader" }, // turns scss to css
					{loader: "postcss-loader"} // Loader for webpack to process CSS with PostCSS
				],
			},
			{ test: /\.ts$/, use: { loader: "ts-loader" } },
		],
	},
};
