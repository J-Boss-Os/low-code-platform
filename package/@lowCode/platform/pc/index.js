import Flex from './layout/Flex.vue'

const components = {
  Flex
}

export default {
  install(Vue) {
    for (const key in components) {
      Vue.component(components[key].name, components[key])
    }
  }
}