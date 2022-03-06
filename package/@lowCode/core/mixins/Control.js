import { inject, computed } from 'vue'

export default {
  design: {
    configGroup: [{
      title: "基本信息",
      name: "basic",
      children: ['caption', 'visible']
    }],
    maskVisible: true,
  },
  props: {
    caption: {
      label: "标识",
      configGroup: "basic",
      configType: "Text",
      sort: 10,
      type: String,
      default: '',
    },
    visible: {
      label: "显示",
      configGroup: "basic",
      configType: "Boolean",
      sort: 15,
      type: Boolean,
      default: true,
    },
    slots: {
      type: Array,
      default: () => {
        return [
          { name: "default", controls: [] },
        ];
      },
    },
    classList: {
      type: Array,
      default: () => ([])
    }
  },
  setup(props, context) {
    const { classList } = props
    const $desgin = inject('$design', null)
    const $designProxy = inject('$designProxy', null)
    const className = computed(() => {
      return ["lcp-control", ...classList]
    })
    return {
      $desgin,
      $designProxy,
      className
    }
  }
}