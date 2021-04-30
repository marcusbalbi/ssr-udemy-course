const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const serverConfig = {
  target: "node",
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(commonConfig, serverConfig);
