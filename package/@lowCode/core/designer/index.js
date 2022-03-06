import Design from "./Design.vue"
import DesignConfigText from "./DesignConfigText.vue"

const components = {
  Design,
  DesignConfigText
}

export default {
  install(Vue) {
    for (const key in components) {
      Vue.component(components[key].name, components[key])
    }
  }
}