import Vue from "vue"
import { App } from "./app"
import "./global.scss"

// tslint:disable no-unused-expression
new Vue({
  el: "#root",
  render(h) {
    return <App />
  },
})
