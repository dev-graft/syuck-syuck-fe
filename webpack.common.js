const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: path.resolve(__dirname, "./index.html"),
      favicon: "./static/logo.png",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "static" }],
    }),
    new Dotenv(),
    isProduction &&
      new MiniCSSExtractPlugin({
        filename: "[name].css",
      }),
  ].filter(Boolean),
  module: {
    rules: [
      // TSX
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          // JS to older JS with polyfills
          {
            loader: "babel-loader",
          },
          // TS to JS
          {
            loader: "ts-loader",
          },
        ],
      },
      // SCSS
      {
        test: /\.s?css$/i,
        use: [
          isProduction ? MiniCSSExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      // ASSETS
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        type: "asset/resource",
      },
    ],
  },
};
