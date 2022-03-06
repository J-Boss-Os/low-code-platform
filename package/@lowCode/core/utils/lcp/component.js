import { isEmptyObject, isObject, isEmptyArray, isArray, isFunction } from "./type"
// 组件集合
export const $components = {}
export const $componentDefaultOpts = {}

// 定义组件
export function defineComponent(comp) {
  const compTop = comp
  deepMxins(comp, (comp, index) => {
    design(comp, index, compTop)
    props(comp, index, compTop)
  })
  $components[comp.name] = comp
  return compTop
}

function deepMxins(comp, cb, index = 0) {
  const { mixins = [] } = comp
  for (let i = 0; i < mixins.length; i++) {
    deepMxins(mixins[i], cb, index + 1)
  }
  cb && cb(comp, index)
}

function design(comp, index, compTop) {
  if (!compTop.design || !compTop.design.configGroup) throw new Error(`【${compTop.name}】组件没有声明 design.configGroup`)
  if (!compTop.designConfigGroupMap) compTop.designConfigGroupMap = {}
  if (!isEmptyObject(comp.props)) {
    for (const key in comp.props) {
      const prop = comp.props[key];
      if (prop.configGroup) {
        if (!compTop.designConfigGroupMap[prop.configGroup]) {
          compTop.designConfigGroupMap[prop.configGroup] = {}
        }
        compTop.designConfigGroupMap[prop.configGroup][key] = prop
      }
    }
  }
}

function props(comp, index, compTop) {
  if (!compTop.allProps) compTop.allProps = {}
  if (!comp.props) return
  Object.assign(compTop.allProps, comp.props)
}

export function getComponentDefaultOpts(compName) {
  if ($componentDefaultOpts[compName]) {
    return _.cloneDeep($componentDefaultOpts[compName])
  }
  if (!$components[compName]) throw new Error(`找不到【${compName}】组件`)
  const comp = $components[compName]
  const compOpts = {
    compType: comp.name,
  }
  for (const key in comp.allProps) {
    if (isFunction(comp.allProps[key].default)) {
      compOpts[key] = comp.allProps[key].default()
    } else {
      compOpts[key] = comp.allProps[key].default
    }
  }
  compOpts.caption = comp.name.replace(/^LCP(.*)/, "$1").toLocaleLowerCase()
  return compOpts
}