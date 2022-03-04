// 组件集合
const $components = {}


// 定义组件
export function defineComponent(comp) {
  console.log(comp)
  $components[comp.name] = comp
  return comp
}