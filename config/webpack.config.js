const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  mode: "development",
  entry: {
    app: ["./docs/index.tsx", "webpack-hot-middleware/client"],
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".ts", ".scss", ".tsx"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [

          {
            loader: "ts-loader",
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true
            },
          },

          {
            loader: "vue-jsx-hot-loader",
          },

        ]
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "docs/index.html"
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
}
