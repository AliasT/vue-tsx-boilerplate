import Vue, { CreateElement } from "vue"
import * as tsx from "vue-tsx-support"

// import "./app.scss"
const App = tsx.component({
  props: {
    name: {
      default: "tsx",
      type: String,
    },
  },
  render(h: CreateElement) {
    return <div id="app">{this.name}</div>
  },
})

export { App }
