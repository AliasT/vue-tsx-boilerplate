const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
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
            loader: "babel-loader",
            options: {
              plugins: [
                "transform-vue-jsx",
              ],
            },
          },
          // this only works with module default export
          {
            loader: "vue-jsx-hot-loader",
          },

          {
            loader: "ts-loader",
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
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
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "docs/index.html"
    }),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
    }),
  ],
}
