// 组件集合
export const $components = {}

// 定义组件
export function defineComponent(comp) {
  const compTop = comp
  deepMxins(comp, (comp, index) => {
    design(comp, index, compTop)
  })
  $components[comp.name] = compTop
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
  if (!compTop.designConfigAll) {
    compTop.designConfigAll = []
  }
  if (!comp.design) comp.design = {}
  designConfig(comp, compTop.designConfigAll)
}

function designConfig(comp, designConfigAll) {
  if (!comp.design.config) comp.design.config = []
  const { config } = comp.design
  for (let i = 0; i < config.length; i++) {
    designConfigToProps(comp, config[i])
    if (!designConfigAll.length) {
      designConfigAll.push(config[i])
    } else {
      const toConfig = designConfigAll.find((item) => item.name == config[i].name)
      if (!toConfig) {
        designConfigAll.push(config[i])
      } else {
        designConfigMxins(config[i], toConfig)
      }
    }
  }
}

function designConfigMxins(config, toConfig) {
  if (!toConfig.children) toConfig.children = []
  const { children: toChildren = [] } = toConfig
  const toChildrenKeys = {}
  for (let i = 0; i < toChildren.length; i++) {
    toChildrenKeys[toChildren[i].bindAttr] = i
  }
  const { children = [] } = config
  for (let i = 0; i < children.length; i++) {
    const { bindAttr } = children[i];
    const toChildrenIndex = toChildrenKeys[bindAttr]
    if (toChildrenIndex == undefined) {
      toChildren.push(children[i])
    } else {
      toChildren[toChildrenIndex] = children[i]
    }
  }
}

function designConfigToProps(comp, config) {
  if (!comp.props) comp.props = []
  if (!config.children) config.children = []
  const { children } = config
  for (let i = 0; i < children.length; i++) {
    comp.props[children[i].bindAttr] = children[i]
  }
}

export function getComponentDefaultProps(compName) {
}