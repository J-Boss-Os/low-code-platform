<template>
  <div :class="className" class="lcp-page">
    <div class="lcp-page-head" slot-name="head">
      <slot name="head"></slot>
    </div>
    <div class="lcp-page-body">
      <div class="lcp-page-left" slot-name="left">
        <slot name="left"></slot>
      </div>
      <div class="lcp-page-center" slot-name="center">
        <slot name="center"></slot>
      </div>
      <div class="lcp-page-right" slot-name="right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="lcp-page-foot" slot-name="foot">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script>
export default lcp.defineComponent({
  name: "LCPPage",
  desc: "PC页面",
  mixins: [lcpMixins.LayoutControl],
  design: {
    configGroup: ["basic"],
    maskVisible: false,
  },
  props: {
    headVisible: {
      label: "显示头部",
      configGroup: "basic",
      configType: "Text",
      type: Boolean,
      default: true,
    },
    slots: {
      type: Array,
      default: () => {
        return [
          { name: "head", controls: [] },
          { name: "center", controls: [] },
          { name: "left", controls: [] },
          { name: "right", controls: [] },
          { name: "foot", controls: [] },
        ];
      },
    },
  },
  setup(props, context) {
    const state = lcpMixins.LayoutControl.setup(props, context);
    const { $desgin, $designProxy } = state;
    const { updateProxyHeight } = $designProxy;
    if ($desgin) updateProxyHeight("100%");
    return state;
  },
});
</script>