import Control from "./Control";
import FormControl from "./FormControl";
import LayoutControl from "./LayoutControl";

const lcpMixins = {
  extend(map = {}) {
    _.merge(this, map)
  },
}

lcpMixins.extend({

  Control,
  FormControl,
  LayoutControl
})
if (!window.lcpMixins) window.lcpMixins = lcpMixins

export default lcpMixins