import Control from "./Control"

export default {
  mixins: [Control],
  props: {
  },
  setup(props, context) {
    const state = Control.setup(props, context)
    return state
  }
}