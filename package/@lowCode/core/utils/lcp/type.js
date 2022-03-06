export function type(t) {
  return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, "$1").toLocaleLowerCase()
}
export function isArray(t) {
  return type(t) === 'array'
}
export function isNumber(t) {
  return type(t) === 'number'
}
export function isObject(t) {
  return type(t) === 'object'
}
export function isBoolean(t) {
  return type(t) === 'boolean'
}
export function isFunction(t) {
  return type(t) === 'function'
}
export function isString(t) {
  return type(t) === 'string'
}
export function isNaN(t) {
  return t != t
}
export function isUndefined(t) {
  return type(t) === 'undefined'
}
export function isNull(t) {
  return type(t) === 'null'
}
export function isEmptyObject(t) {
  return isObject(t) && Object.keys(t).length === 0
}
export function isEmptyArray(t) {
  return isArray(t) && t.length === 0
}
export function isUnEmptyObject(t) {
  return isObject(t) && Object.keys(t).length
}
export function isUnEmptyArray(t) {
  return isArray(t) && t.length
}