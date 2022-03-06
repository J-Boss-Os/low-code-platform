import * as types from './type'
import * as component from './component'
import * as jq from './jq'

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
lcp.uuid = (len, radix) => {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    uuid = [],
    i;
  radix = radix || chars.length;
  len = len || 16;
  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "";
    uuid[14] = "4";

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
}
lcp.extend({ ...types })
lcp.extend({ ...component })
lcp.extend({ ...jq })
if (!window.lcp) window.lcp = lcp

export default lcp