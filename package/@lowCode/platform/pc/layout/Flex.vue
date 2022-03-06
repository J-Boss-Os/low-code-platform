<template>
  <div class="lcp-flex">
    <div class="lcp-flex-col"></div>
  </div>
</template>

<script>
export default lcp.defineComponent({
  name: "LCPFlex",
  desc: "栅格框",
  mixins: [lcpMixins.Control],
  design: {
    configGroup: [
      {
        title: "基本信息",
        name: "basic",
        children: ["caption", "visible"],
      },
    ],
  },
  props: {
    slots: {
      default() {
        return [];
      },
    },
  },
  setup(props, context) {},
});
</script>

<style>
</style>