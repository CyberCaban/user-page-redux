const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
				],
			},
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
					options: {
						transpileOnly: true,
					},
				},
			},
			//   {
			//     test: /\.ico$/i,
			//     use: [
			//       {
			//         loader: "file-loader",
			//         options: {
			//           name: "favicon.ico",
			//           outputPath: "/",
			//         },
			//       },
			//     ],
			//   },
		],
	},
	resolve: {
		extensions: [".js", ".ts", ".tsx"],
	},
	entry: path.resolve(__dirname, "src", "index.tsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		publicPath: "/",
		clean: true,
	},
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, "/dist"),
		},
		port: 8081,
		hot: true,
		compress: true,
		open: true,
	},
	devtool: "inline-source-map",
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
			//   favicon: "./public/favicon.ico",
			cache: true,
		}),
		new WebpackManifestPlugin(),
	],
	optimization: {
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendors: {
					name: "vendors",
					test: /node_modules/,
					chunks: "all",
					enforce: true,
				},
			},
		},
		minimizer: [],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};
