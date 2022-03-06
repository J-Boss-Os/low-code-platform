import Page from './page/Page.vue'

const components = {
  Page
}

export default {
  install(Vue) {
    for (const key in components) {
      Vue.component(components[key].name, components[key])
    }
  }
}