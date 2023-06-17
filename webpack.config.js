const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
					options: {
						// Remove this line to enable type checking in webpack builds
						transpileOnly: true,
						compilerOptions: {
							module: "esnext",
						},
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
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
	},
	entry: path.resolve(__dirname, "src", "index.tsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, "/"),
		},
		port: 8081,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
			//   favicon: "./public/favicon.ico",
			cache: true,
		}),
	],
};
