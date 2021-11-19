const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    // 压缩文件入口
    "lemon-utils": path.resolve(__dirname, "./src/index.js"),
    "lemon-utils.min": path.resolve(__dirname, "./src/index.js"),
  },
  // devtool: "source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "LemonUtils", // 工具使用的变量名
    libraryTarget: "umd",
    // libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // 压缩文件插件
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
};
