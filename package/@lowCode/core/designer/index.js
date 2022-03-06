import Design from "./Design.vue"
import DesignProxy from "./DesignProxy"
import DesignConfigText from "./DesignConfigText.vue"

const components = {
  Design,
  DesignProxy,
  DesignConfigText
}

export default {
  install(Vue) {
    for (const key in components) {
      Vue.component(components[key].name, components[key])
    }
  }
}