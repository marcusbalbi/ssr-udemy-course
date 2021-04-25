const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.base");

const serverConfig = {
  target: "node",
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = merge(commonConfig, serverConfig);