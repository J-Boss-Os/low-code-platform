import * as types from './type'
import * as component from './component'

const lcp = {
  extend(map = {}) {
    _.merge(this, map)
  }
}
lcp.extend(types)
lcp.extend(component)
if (!window.lcp) window.lcp = lcp

export default lcp