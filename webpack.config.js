const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const PUBLIC_PATH = "/";

module.exports = {
  mode: "development",
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: PUBLIC_PATH,
    clean: true,
  },

  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  devServer: {
    contentBase: [path.resolve(__dirname, "dist")],
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Create Vue App Lite",
      template: "public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "dist"),
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
};
