const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PUBLIC_PATH = "/";

module.exports = {
  mode: "development",
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: PUBLIC_PATH
  },

  devServer: {
    contentBase: [path.resolve(__dirname, "dist")]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Create Vue App Lite",
      template: "public/index.html"
    }),
    new CopyWebpackPlugin(
      [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "dist")
        }
      ],
      {
        ignore: ["index.html"]
      }
    )
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(css|scss)$/,
        loader: [
          "vue-style-loader",
          "css-loader",
          'sass-loader'
        ]
      }
    ]
  }
};
