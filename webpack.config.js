const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: {
		index: "./src/index.js",
	},
	output: {
		filename: "./js/[name].bundle.js",
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
			templateContent: `<div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`,
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
