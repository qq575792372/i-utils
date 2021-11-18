const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    // 压缩文件入口
    "lemon-tools": path.resolve(__dirname, "./src/index.js"),
    "lemon-tools.min": path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "LemonTools", // 工具使用的变量名
    libraryTarget: "umd",
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
