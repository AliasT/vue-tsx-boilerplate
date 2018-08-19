const webpack = require("webpack")
const middleware = require("webpack-dev-middleware")
const webpackConfig = require("../config/webpack.config")
const express = require("express")

const app = express()
const compiler = webpack(webpackConfig)

app.use(middleware(compiler, {

}))

app.use(require("webpack-hot-middleware")(compiler));

app.listen(3000, () => "app listening on port 3000")
