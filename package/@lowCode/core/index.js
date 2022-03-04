import './utils/lcp/lcp'
import './mixins'
import designer from './designer'

export default {
  version: "0.0.1",
  install(Vue) {
    Vue.use(designer)
  }
}