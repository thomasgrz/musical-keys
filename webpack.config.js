const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ProvidePlugin({ process: "process/browser" }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src/assets"),
          to: path.join(__dirname, "dist/assets"),
        },
      ],
    }),
  ],
};
