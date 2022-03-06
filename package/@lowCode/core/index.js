import './utils/lcp/lcp'
import './mixins'
import designer from './designer'
import pc from './pc'
import { Input } from 'ant-design-vue'

export default {
  version: "0.0.1",
  install(Vue) {
    Vue.component(Input.name, Input)
    Vue.use(designer)
    Vue.use(pc)
  }
}