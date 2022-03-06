import * as types from './type'
import * as component from './component'

const lcp = {
  extend(map = {}) {
    lcp.merge(this, map)
  }
}
lcp.merge = (source, target, isArrayAdd) => {
  if ((types.isArray(target) || types.isObject(target)) && types.type(source) == types.type(target)) {
    for (const key in target) {
      if (types.isArray(target[key]) && isArrayAdd && types.type(source[key]) == types.type(target[key])) {
        source[key].push(...target[key])
      } else if (types.isObject(target[key]) && types.type(source[key]) == types.type(target[key])) {
        lcp.merge(source[key], target[key], isArrayAdd)
      } else {
        source[key] = target[key]
      }
    }
  }
}
lcp.extend({ ...types })
lcp.extend({ ...component })
if (!window.lcp) window.lcp = lcp

export default lcp