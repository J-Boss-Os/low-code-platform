export function getOneClassNameParent(dom, className) {
  dom = $(dom)
  if (dom.hasClass(className)) return dom
  dom = dom.parents(`.${className}`)
  if (dom.length > 0) return dom.eq(0)
}

export function getOneExistAttrParent(dom, attrKey) {
  dom = $(dom)
  if (dom.attr(attrKey)) return dom
  dom = dom.parents(`[${attrKey}]`)
  if (dom.length > 0) return dom.eq(0)
}