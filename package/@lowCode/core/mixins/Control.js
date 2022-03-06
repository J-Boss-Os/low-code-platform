import { reactive, ref } from 'vue'

export default {
  design: {
    config: [
      {
        title: "基本信息",
        name: "basic",
        children: [
          {
            bindAttr: "caption",
            label: "标识",
            configType: "Text",
            default: "",
            type: String,
          },
          {
            bindAttr: "visible",
            label: "显示",
            configType: "Boolean",
            default: true,
            type: Boolean,
          }
        ]
      },
    ]
  },
  props: {
  },
  setup(props, context) {
    return {
    }
  }
}